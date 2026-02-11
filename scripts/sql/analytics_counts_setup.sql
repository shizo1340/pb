-- Privacy Basics: Aggregierte Analytics-Counter (ohne Cookies/IDs)
--
-- Zweck:
-- - /analytics/pv.php   (Pageviews via 1×1 GIF Beacon)
-- - /analytics/r.php    (Event + Redirect ohne JS)
-- - /go/<slug>          (Affiliate/Outbound Redirect)
--
-- Hinweis:
-- Diese Tabelle speichert ausschließlich aggregierte Counts pro Stunde.
-- Es werden keine IPs, keine User-Agents, keine Session-IDs gespeichert.

CREATE TABLE IF NOT EXISTS analytics_counts (
  kind VARCHAR(16) NOT NULL,
  name VARCHAR(64) NOT NULL,
  path VARCHAR(255) NOT NULL,
  hour DATETIME NOT NULL,
  count INT NOT NULL DEFAULT 0,
  PRIMARY KEY (kind, name, path, hour)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
