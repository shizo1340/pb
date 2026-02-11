<?php
declare(strict_types=1);

// ------------------------------------------------------------
// Event Counter + Redirect (ohne JS)
//
// Zweck: Klicks auf CTAs zählen, ohne JavaScript,
// indem du Links über dieses Skript leitest.
//
// Beispiel:
// /analytics/r.php?name=cta_signup&path=/venus/&to=https://example.com
//
// ✅ Keine Cookies
// ✅ Keine IDs
// ✅ Keine IP-/UA-Speicherung
// ------------------------------------------------------------

require __DIR__ . '/lib.php';

// No caching for analytics redirects
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');
header('Expires: 0');

$pbNavMode = pb_navigation_mode();
if ($pbNavMode === 'block') {
  http_response_code(204);
  exit;
}

$cfg = pb_cfg();

$name = isset($_GET['name']) ? (string)$_GET['name'] : 'event';
$path = isset($_GET['path']) ? (string)$_GET['path'] : '/';
$to   = isset($_GET['to'])   ? (string)$_GET['to']   : '/';

$name = pb_norm_event_name($name);
$path = pb_norm_path($path);

// Redirect Ziel validieren: relative URLs immer, absolute nur allowlisted hosts
if (!pb_is_allowed_redirect($to, (array)($cfg['redirect_allow_hosts'] ?? []))) {
  // Fallback: nie ins Leere oder zu fremden Hosts leiten
  $to = str_starts_with($to, '/') ? $to : '/';
}

// Nur bei echten Navigationsklicks UND ohne Opt-out zählen
if ($pbNavMode === 'count' && !pb_privacy_opt_out()) {
  try {
    pb_track_event($name, $path);
  } catch (Throwable $e) {
    // fail-open: Redirect funktioniert trotzdem
  }
}

header('Location: ' . $to, true, 302);