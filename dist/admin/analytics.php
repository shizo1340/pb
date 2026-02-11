<?php
declare(strict_types=1);

// ------------------------------------------------------------
// Admin Dashboard (Privacy-first Counter Analytics)
//
// Netcup / Shared-Hosting friendly:
// - Optionales Session-Login (kein BasicAuth nötig)
// - DB-Schema wird automatisch angelegt
// ------------------------------------------------------------

require __DIR__ . '/../analytics/lib.php';

header('X-Robots-Tag: noindex, nofollow', true);

/** @return string */
function h($s): string { return htmlspecialchars((string)$s, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'); }

/** @return array{enabled:bool,user:string,hash:string} */
function pb_admin_auth_config(array $cfg): array {
  $a = (array)($cfg['admin'] ?? []);
  $enabled = (bool)($a['enabled'] ?? false);
  $user = (string)($a['user'] ?? 'admin');
  $hash = (string)($a['password_hash'] ?? '');
  // Wenn kein Hash gesetzt ist, erzwingen wir keine Session-Auth
  if ($hash === '') $enabled = false;
  return ['enabled' => $enabled, 'user' => $user, 'hash' => $hash];
}

function pb_admin_session_start(): void {
  if (session_status() === PHP_SESSION_ACTIVE) return;

  $secure = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off');
  session_name('pb_admin');
  session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/admin/',
    'secure' => $secure,
    'httponly' => true,
    'samesite' => 'Strict',
  ]);
  session_start();
}

$cfg = pb_cfg();
$auth = pb_admin_auth_config($cfg);

// ------------------------------------------------------------
// Optional: Session Login
// ------------------------------------------------------------
$loginError = null;
if ($auth['enabled']) {
  pb_admin_session_start();

  if (isset($_GET['logout'])) {
    $_SESSION = [];
    if (ini_get('session.use_cookies')) {
      $params = session_get_cookie_params();
      setcookie(session_name(), '', time() - 42000, $params['path'], $params['domain'] ?? '', (bool)$params['secure'], (bool)$params['httponly']);
    }
    session_destroy();
    header('Location: /admin/analytics.php', true, 302);
    exit;
  }

  if (!isset($_SESSION['pb_admin_csrf'])) {
    $_SESSION['pb_admin_csrf'] = bin2hex(random_bytes(16));
  }
  $csrf = (string)$_SESSION['pb_admin_csrf'];

  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $u = (string)($_POST['user'] ?? '');
    $p = (string)($_POST['pass'] ?? '');
    $t = (string)($_POST['csrf'] ?? '');

    if (!hash_equals($csrf, $t)) {
      $loginError = 'Ungültige Anfrage (CSRF).';
    } elseif ($u !== $auth['user'] || !password_verify($p, $auth['hash'])) {
      $loginError = 'Login fehlgeschlagen.';
    } else {
      $_SESSION['pb_admin_ok'] = true;
      // Session fixation defense
      session_regenerate_id(true);
      header('Location: /admin/analytics.php', true, 302);
      exit;
    }
  }

  $isAuthed = (bool)($_SESSION['pb_admin_ok'] ?? false);
  if (!$isAuthed) {
    ?><!doctype html>
    <html lang="de">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <title>Admin · Login</title>
      <link rel="stylesheet" href="/admin/admin.css">
    </head>
    <body>
      <header>
        <h1>Admin Login</h1>
       
      </header>

      <?php if ($loginError): ?>
        <p class="err"><strong><?=h($loginError)?></strong></p>
      <?php endif; ?>

      <section class="card mt16" style="max-width:520px">
        <form method="post" autocomplete="off">
          <div class="mt10">
            <label for="user">User</label>
            <input id="user" name="user" type="text" value="<?=h($auth['user'])?>" required>
          </div>
          <div class="mt10">
            <label for="pass">Passwort</label>
            <input id="pass" name="pass" type="password" required>
          </div>
          <input type="hidden" name="csrf" value="<?=h($csrf)?>">
          <div class="mt10">
            <button type="submit">Anmelden</button>
          </div>
          
        </form>
      </section>
    </body>
    </html>
    <?php
    exit;
  }
}

// ------------------------------------------------------------
// Dashboard Daten laden
// ------------------------------------------------------------

$days = isset($_GET['days']) ? (int)$_GET['days'] : 14;
if ($days < 1) $days = 1;
if ($days > 90) $days = 90;

try {
  $pdo = pb_pdo();
  pb_ensure_schema($pdo);

  $since = gmdate('Y-m-d H:00:00', time() - ($days * 86400));

  $topPages = $pdo->prepare(
    "SELECT path, SUM(count) AS views
     FROM analytics_counts
     WHERE kind='pv' AND hour >= :since
     GROUP BY path
     ORDER BY views DESC
     LIMIT 50"
  );
  $topPages->execute([':since' => $since]);
  $topPages = $topPages->fetchAll();

  $topEvents = $pdo->prepare(
    "SELECT name, SUM(count) AS hits
     FROM analytics_counts
     WHERE kind='event' AND hour >= :since
     GROUP BY name
     ORDER BY hits DESC
     LIMIT 50"
  );
  $topEvents->execute([':since' => $since]);
  $topEvents = $topEvents->fetchAll();

  $byHour = $pdo->prepare(
    "SELECT hour,
            SUM(CASE WHEN kind='pv' THEN count ELSE 0 END) AS pv,
            SUM(CASE WHEN kind='event' THEN count ELSE 0 END) AS events
     FROM analytics_counts
     WHERE hour >= :since
     GROUP BY hour
     ORDER BY hour ASC
     LIMIT 2000"
  );
  $byHour->execute([':since' => $since]);
  $byHour = $byHour->fetchAll();
} catch (Throwable $e) {
  $err = $e->getMessage();
}

?><!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Admin · Analytics</title>
  <link rel="stylesheet" href="/admin/admin.css">
</head>
<body>
  <header>
    <h1>Analytics (Counter-only)</h1>
    <span class="muted">Privacy-first · keine Cookies · keine IDs · nur aggregiert</span>
  </header>

  <div class="mt10" style="display:flex; gap:12px; align-items:center; flex-wrap:wrap">
    <form method="get" style="display:flex; gap:8px; align-items:center; margin:0">
      <label for="days">Zeitraum</label>
      <input id="days" name="days" type="number" min="1" max="90" value="<?=h($days)?>">
      <span class="muted">Tage</span>
      <button type="submit">Anzeigen</button>
    </form>
    <?php if ($auth['enabled']): ?>
      <a href="/admin/analytics.php?logout=1" class="muted">Logout</a>
    <?php endif; ?>
  </div>

  <?php if (isset($err)): ?>
    <p class="err"><strong>DB Fehler:</strong> <?=h($err)?></p>
    <p class="muted">Prüfe <code>/analytics/config.local.php</code> bzw. deine <code>analytics.config.local.php</code> außerhalb des Webroots.</p>
  <?php else: ?>

  <div class="grid">
    <section class="card">
      <h2 class="h2sm">Top Seiten (<?=h($days)?> Tage)</h2>
      <table>
        <thead><tr><th>URL</th><th>Views</th></tr></thead>
        <tbody>
        <?php foreach ($topPages as $r): ?>
          <tr><td><code><?=h($r['path'])?></code></td><td><?=h($r['views'])?></td></tr>
        <?php endforeach; ?>
        </tbody>
      </table>
    </section>

    <section class="card">
      <h2 class="h2sm">Top Events (<?=h($days)?> Tage)</h2>
      <p class="muted mt8">Events werden per <code>/analytics/r.php</code> oder <code>/go/*</code> gezählt.</p>
      <table>
        <thead><tr><th>Name</th><th>Hits</th></tr></thead>
        <tbody>
        <?php foreach ($topEvents as $r): ?>
          <tr><td><code><?=h($r['name'])?></code></td><td><?=h($r['hits'])?></td></tr>
        <?php endforeach; ?>
        </tbody>
      </table>
    </section>
  </div>

  <section class="card mt16">
    <h2 class="h2sm">Zeitverlauf (Stunden)</h2>
    <p class="muted mt8 mb12">Anzeige in UTC (Server-seitig aggregiert). Max. 2000 Zeilen.</p>
    <table>
      <thead><tr><th>Hour (UTC)</th><th>PV</th><th>Events</th></tr></thead>
      <tbody>
      <?php foreach ($byHour as $r): ?>
        <tr>
          <td><code><?=h($r['hour'])?></code></td>
          <td><?=h($r['pv'])?></td>
          <td><?=h($r['events'])?></td>
        </tr>
      <?php endforeach; ?>
      </tbody>
    </table>
  </section>

  <?php endif; ?>
</body>
</html>
