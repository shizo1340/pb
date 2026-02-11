<?php
declare(strict_types=1);

/**
 * Analytics configuration loader (privacy-first, cookie-free).
 *
 * ✅ Netcup-friendly: keine festen Provider-Pfade nötig.
 *
 * Lege deine echten Zugangsdaten in **einer** dieser Dateien ab (erste gefundene gewinnt):
 *   1) Pfad aus ENV: PB_ANALYTICS_CONFIG (z.B. per php.ini / vHost config)
 *   2) <parent of DOCUMENT_ROOT>/analytics.config.local.php   (typisch: außerhalb von /httpdocs)
 *   3) /home/www/analytics.config.local.php                   (Legacy/Shared-Hosting)
 *   4) public/analytics/config.local.php                      (Fallback, per .htaccess blockiert)
 */

$candidates = [];

$envPath = (string) getenv('PB_ANALYTICS_CONFIG');
if ($envPath !== '') {
  $candidates[] = $envPath;
}

$docRoot = (string) ($_SERVER['DOCUMENT_ROOT'] ?? '');
if ($docRoot !== '') {
  $parent = rtrim(dirname($docRoot), '/');
  if ($parent !== '' && $parent !== '.') {
    $candidates[] = $parent . '/analytics.config.local.php';
  }
}

// Legacy / manche Shared-Hosting-Setups
$candidates[] = '/home/www/analytics.config.local.php';

// Fallback innerhalb des Webroots (wird in /analytics/.htaccess geblockt)
$candidates[] = __DIR__ . '/config.local.php';

foreach ($candidates as $p) {
  if ($p && is_file($p)) {
    /** @noinspection PhpIncludeInspection */
    $cfg = require $p;
    if (is_array($cfg)) {
      return $cfg;
    }
  }
}

// Template fallback (funktioniert erst, wenn du eine der oben genannten Dateien anlegst)
$defaultHost = strtolower((string)($_SERVER['HTTP_HOST'] ?? 'localhost'));

return [
  'db' => [
    'host' => 'localhost',
    'port' => 3306,
    'name' => 'CHANGE_ME',
    'user' => 'CHANGE_ME',
    'pass' => 'CHANGE_ME',
    'charset' => 'utf8mb4',
  ],

  // Optional: Allowlist für absolute Redirect-Ziele in /analytics/r.php
  // Relative Ziele ("/pfad") sind immer erlaubt.
  'redirect_allow_hosts' => [$defaultHost],

  // Aggregierte Daten (stündlich) werden automatisch bereinigt
  'retention_days' => 90,
  'cleanup_probability' => 0.01,

  // Optional: Admin-Login (Session) – wenn du kein .htaccess BasicAuth nutzen willst.
  // Setze password_hash z.B. via:
  //   php -r "echo password_hash('DEIN_PASSWORT', PASSWORD_DEFAULT), PHP_EOL;"
  'admin' => [
    'enabled' => false,
    'user' => 'admin',
    'password_hash' => '',
  ],
];
