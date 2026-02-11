<?php
declare(strict_types=1);

// 1×1 GIF Beacon (no JS / no cookies) für Pageviews.
// Speichert ausschließlich aggregierte Counter (pro Stunde) in MySQL.

require __DIR__ . '/lib.php';

// Privacy Signale respektieren (DNT/GPC)
if (pb_privacy_opt_out()) {
  pb_gif_1x1();
  exit;
}

$path = isset($_GET['path']) ? (string)$_GET['path'] : '/';

try {
  pb_track_pv($path);
} catch (Throwable $e) {
  // Fail-closed: keine Details nach außen.
}

pb_gif_1x1();