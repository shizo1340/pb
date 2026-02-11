<?php
declare(strict_types=1);

/**
 * Shared helpers for the privacy-first counter analytics.
 *
 * Design goals:
 * - works on classic shared hosting (Netcup, etc.)
 * - no cookies / no user IDs
 * - stores only aggregated counters per hour
 */

/** @return array<string,mixed> */
function pb_cfg(): array {
  static $cfg = null;
  if (is_array($cfg)) return $cfg;

  /** @noinspection PhpIncludeInspection */
  $cfg = require __DIR__ . '/config.php';
  if (!is_array($cfg)) $cfg = [];

  // Sensible defaults
  $defaultHost = strtolower((string)($_SERVER['HTTP_HOST'] ?? 'localhost'));
  if (empty($cfg['redirect_allow_hosts']) || !is_array($cfg['redirect_allow_hosts'])) {
    $cfg['redirect_allow_hosts'] = [$defaultHost];
  }
  if (!in_array($defaultHost, $cfg['redirect_allow_hosts'], true)) {
    // same-host redirects should always be possible
    $cfg['redirect_allow_hosts'][] = $defaultHost;
  }

  $cfg['retention_days'] = (int)($cfg['retention_days'] ?? 90);
  if ($cfg['retention_days'] < 1) $cfg['retention_days'] = 90;
  if ($cfg['retention_days'] > 730) $cfg['retention_days'] = 730;

  $cfg['cleanup_probability'] = (float)($cfg['cleanup_probability'] ?? 0.01);
  if ($cfg['cleanup_probability'] < 0) $cfg['cleanup_probability'] = 0;
  if ($cfg['cleanup_probability'] > 1) $cfg['cleanup_probability'] = 1;

  return $cfg;
}

function pb_privacy_opt_out(): bool {
  return (
    (isset($_SERVER['HTTP_DNT']) && $_SERVER['HTTP_DNT'] === '1') ||
    (isset($_SERVER['HTTP_SEC_GPC']) && $_SERVER['HTTP_SEC_GPC'] === '1')
  );
}

function pb_gif_1x1(): void {
  header('Content-Type: image/gif');
  header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
  header('Pragma: no-cache');
  header('Expires: 0');
  echo base64_decode('R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==');
}

function pb_norm_path(string $path): string {
  $path = preg_replace('/[#?].*$/', '', $path);
  $path = (string) $path;
  if ($path === '' || $path[0] !== '/') {
    $path = '/' . ltrim($path, '/');
  }
  return substr($path, 0, 255);
}

function pb_norm_event_name(string $name): string {
  $name = preg_replace('/[^a-zA-Z0-9_\-\.]/', '', $name);
  $name = (string) $name;
  if ($name === '') $name = 'event';
  return substr($name, 0, 64);
}

function pb_is_allowed_redirect(string $to, array $allowHosts): bool {
  if ($to === '') return false;
  if (str_starts_with($to, '/')) return true;

  $p = parse_url($to);
  if (!$p || !isset($p['scheme'], $p['host'])) return false;
  $scheme = strtolower((string)$p['scheme']);
  if ($scheme !== 'http' && $scheme !== 'https') return false;

  $host = strtolower((string)$p['host']);
  foreach ($allowHosts as $allowed) {
    if (strtolower((string)$allowed) === $host) return true;
  }
  return false;
}

function pb_navigation_mode(): string {
  // Prefetch signals
  $purpose = strtolower((string)($_SERVER['HTTP_PURPOSE'] ?? ''));
  $secPurpose = strtolower((string)($_SERVER['HTTP_SEC_PURPOSE'] ?? ''));
  $xMoz = strtolower((string)($_SERVER['HTTP_X_MOZ'] ?? ''));
  if (str_contains($purpose, 'prefetch') || str_contains($secPurpose, 'prefetch') || str_contains($xMoz, 'prefetch')) {
    return 'block';
  }

  $modeRaw = (string)($_SERVER['HTTP_SEC_FETCH_MODE'] ?? '');
  $mode = strtolower(trim($modeRaw));

  if ($modeRaw === '') {
    return 'nocount';
  }
  if ($mode !== 'navigate') {
    return 'block';
  }
  return 'count';
}

/** @return PDO */
function pb_pdo(): PDO {
  static $pdo = null;
  if ($pdo instanceof PDO) return $pdo;

  $cfg = pb_cfg();
  $db = (array)($cfg['db'] ?? []);

  $dsn = sprintf(
    'mysql:host=%s;port=%d;dbname=%s;charset=%s',
    (string)($db['host'] ?? 'localhost'),
    (int)($db['port'] ?? 3306),
    (string)($db['name'] ?? ''),
    (string)($db['charset'] ?? 'utf8mb4')
  );

  $pdo = new PDO(
    $dsn,
    (string)($db['user'] ?? ''),
    (string)($db['pass'] ?? ''),
    [
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]
  );
  return $pdo;
}

function pb_ensure_schema(PDO $pdo): void {
  static $done = false;
  if ($done) return;
  $pdo->exec(
    "CREATE TABLE IF NOT EXISTS analytics_counts (
      kind VARCHAR(16) NOT NULL,
      name VARCHAR(64) NOT NULL,
      path VARCHAR(255) NOT NULL,
      hour DATETIME NOT NULL,
      count INT NOT NULL DEFAULT 0,
      PRIMARY KEY (kind, name, path, hour)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4"
  );
  $done = true;
}

function pb_maybe_cleanup(PDO $pdo): void {
  $cfg = pb_cfg();
  $prob = (float)($cfg['cleanup_probability'] ?? 0.01);
  if ($prob <= 0) return;

  $rand = mt_rand() / mt_getrandmax();
  if ($rand > $prob) return;

  $days = (int)($cfg['retention_days'] ?? 90);
  $cutoff = gmdate('Y-m-d H:00:00', time() - ($days * 86400));
  $stmt = $pdo->prepare('DELETE FROM analytics_counts WHERE hour < :cutoff');
  $stmt->execute([':cutoff' => $cutoff]);
}

function pb_inc(string $kind, string $name, string $path): void {
  $kind = substr($kind, 0, 16);
  $name = substr($name, 0, 64);
  $path = substr($path, 0, 255);
  $hour = gmdate('Y-m-d H:00:00');

  $pdo = pb_pdo();
  pb_ensure_schema($pdo);
  pb_maybe_cleanup($pdo);

  $stmt = $pdo->prepare(
    'INSERT INTO analytics_counts (kind, name, path, hour, count)
     VALUES (:kind, :name, :path, :hour, 1)
     ON DUPLICATE KEY UPDATE count = count + 1'
  );
  $stmt->execute([
    ':kind' => $kind,
    ':name' => $name,
    ':path' => $path,
    ':hour' => $hour,
  ]);
}

function pb_track_pv(string $path): void {
  if (pb_privacy_opt_out()) return;
  pb_inc('pv', '', pb_norm_path($path));
}

function pb_track_event(string $name, string $path): void {
  if (pb_privacy_opt_out()) return;
  pb_inc('event', pb_norm_event_name($name), pb_norm_path($path));
}
