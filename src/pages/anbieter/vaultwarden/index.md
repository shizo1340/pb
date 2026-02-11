---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / vaultwarden"
url: "/anbieter/vaultwarden/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-13"
robots: "index,follow"
description: "Kurzprofil von vaultwarden (Kategorie: Passwort-Manager)."
provider: ""
name: "vaultwarden"
category: "Passwort-Manager"
website: "https://github.com/dani-garcia/vaultwarden"
repo: "https://github.com/dani-garcia/vaultwarden"
license: "AGPL-3.0-only"
policies: ""
privacy: "Nicht angegeben (Self-Hosting-Software, kein Anbieter-Service)"
terms: "Nicht angegeben (Self-Hosting-Software, kein Anbieter-Service)"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Nicht angegeben"
region: "unknown"
logs: "configurable"
retention: "configurable"
retention_notes: "konfigurierbar (z.B. Events optional, Default unbegrenzt)"
data_notes: "vaultwarden ist eine selbst zu betreibende (self-hosted) Server-Implementierung, kompatibel mit offiziellen Bitwarden-Clients. Datenschutz & Metadaten hängen stark von Hosting/Reverse-Proxy/Logs und optionalen Online-Features (Icons/Push) ab."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

vaultwarden ist ein Anbieter aus der Kategorie **Passwort-Manager** (self-hosted Server-Software). Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen **self-hosted** Passwort-Manager-Server betreiben willst und die Datenhaltung/Logs selbst kontrollieren möchtest.
- **Weniger geeignet wenn:** du **keinen Serverbetrieb** (Updates, Backups, TLS, Monitoring) übernehmen willst oder keine eigene Infrastruktur/Hosting-Vertrauensbasis hast.
- **Wichtigster Abwägung:** **Kontrolle über Daten/Metadaten vs. Betriebsaufwand** (Härtung, Verfügbarkeit, sichere Updates & Backups).

## Sofortmaßnahmen
- **Admin-Backend absichern** (ADMIN_TOKEN setzen + Zugriff auf `/admin` nur intern erlauben): reduziert Risiko durch Admin-Bruteforce/Exposure.
- **Registrierungen schließen** (`SIGNUPS_ALLOWED=false`): verringert Missbrauch bei öffentlich erreichbaren Instanzen.
- **Icon-Downloads deaktivieren** (`DISABLE_ICON_DOWNLOAD=true` + `ICON_CACHE_TTL=0`): verhindert zusätzliche externe Requests, die Domains/Metadaten verraten können.

## Entscheidungshilfe
- Wenn du den Server **öffentlich erreichbaren** Clients aussetzt, dann setze `DOMAIN=https://…` und nutze **Reverse Proxy mit HTTPS** (Abwägung: mehr Einrichtung/Komplexität).
- Wenn du nur einen privaten Nutzerkreis willst, dann setze `SIGNUPS_ALLOWED=false` und nutze `SIGNUPS_DOMAINS_WHITELIST=…` für kontrollierte Registrierungen (Abwägung: weniger Komfort beim Onboarding).
- Wenn du Metadaten über besuchte Domains reduzieren willst, dann nutze `ICON_SERVICE=internal` und deaktiviere Icon-Downloads (Abwägung: weniger Komfort/Optik, ggf. leere Favicons).
- Wenn du Organisations-Ereignisse protokollieren musst, dann aktiviere `ORG_EVENTS_ENABLED=true` und setze `EVENTS_DAYS_RETAIN=…` (Abwägung: mehr Datenhaltung, ggf. mehr Admin-Aufwand).
- Wenn du Push-Notifications brauchst, dann aktiviere `PUSH_ENABLED=true` und akzeptiere externe Relay/Identity-Endpunkte (Abwägung: zusätzliche externe Datenflüsse).
- Wenn du IP-basierte Metadaten minimieren willst, dann prüfe `IP_HEADER` und Proxy-Logs (Abwägung: Debugging/Abuse-Prevention wird schwieriger).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | vaultwarden |
| Kategorie | Passwort-Manager |
| Website | https://github.com/dani-garcia/vaultwarden |
| Quellcode | https://github.com/dani-garcia/vaultwarden |
| Lizenz | AGPL-3.0-only |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend (Self-Hosting-Software) |
| Jurisdiktion | Nicht angegeben |
| Logs | configurable |
| Retention | konfigurierbar (z.B. Events optional, Default unbegrenzt) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: Nicht angegeben (Self-Hosting-Software, kein Anbieter-Service)
- AGB/Terms: Nicht angegeben (Self-Hosting-Software, kein Anbieter-Service)
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
vaultwarden ist self-hosted: Datenflüsse entstehen primär durch **dein Hosting/Proxy**, plus optionale Funktionen (Icon-Service, Push). Ohne diese Optionen bleibt der Datenverkehr typischerweise auf deinen Server beschränkt.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Server-seitig u.a. Datenbank/Storage in `DATA_FOLDER` (z.B. SQLite/MySQL/PostgreSQL), optional Attachments/Icons/Sends (Konfiguration über `.env`/Admin-Overrides).
- **Wofür:** Bereitstellung der Bitwarden-kompatiblen Server-API inkl. Web Vault (optional) und Zusatzfunktionen wie Icons, Events, Sends.
- **Weitergabe/Subprozessoren:** Nicht zutreffend als Software-Projekt (relevant sind stattdessen **dein Hosting** und optionale externe Endpunkte).
- **Drittlandtransfer:** Nicht zutreffend als Software-Projekt; hängt vom Hosting/externen Services ab.
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend.
- **Kontakt/DSAR/DPA:** Nicht angegeben (kein Anbieter-Service; self-hosted).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nicht angegeben (keine dedizierten Telemetrie-Schalter in der Konfiguration gefunden).
- **Abschaltbar?** Nicht angegeben.
- **Wo (Menüpfad):** Nicht zutreffend / nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** configurable
- **Aufbewahrung:** konfigurierbar (z.B. `EVENTS_DAYS_RETAIN` für Event-Logs; Default: unbegrenzt, wenn nicht gesetzt)
- **Lösch-/Opt-out-Optionen:** Event-Cleanup per `EVENT_CLEANUP_SCHEDULE` + `EVENTS_DAYS_RETAIN`; Proxy-/System-Logs separat verwalten.

**Abwägung am Punkt:** Weniger Logs/Events reduziert Metadaten, kann aber Troubleshooting und Incident-Analyse erschweren.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben (vaultwarden beschreibt in den genutzten Quellen primär Server-/Deployment-Aspekte, nicht das Kryptomodell).
- **KDF/Parameter/Schlüsselableitung:** `PASSWORD_ITERATIONS` (Default: `600000`) steuert serverseitige Hash-Iterationen für Passwort-Hashes.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA-Flows werden in der Konfiguration indirekt adressiert (z.B. Incomplete-2FA-Jobs/Benachrichtigungen); Details zur Methode sind in den genutzten Quellen nicht ausgeführt.
- **Recovery/Account-Wiederherstellung:** E-Mail-basierte Flows (Invites/Verify) sind konfigurierbar; konkrete Recovery-Details sind nicht beschrieben.
- **Vuln-Handling / Security-Kontakt:** https://matrix.to/#/#vaultwarden:matrix.org (users: @danig:matrix.org and/or @blackdex:matrix.org)(GPG key: 13BB3A34C9E380258CE43D595CB150B31F6426BC).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **HTTPS sauber terminieren** (Reverse Proxy) und `DOMAIN=https://…` setzen.  
   **Prüfen:** Login + Attachments/Links funktionieren, keine Mixed-Content-Warnungen.
2) **Admin-Backend schützen**: `ADMIN_TOKEN` setzen und `/admin` nur intern/VPN erreichbar machen.  
   **Prüfen:** `/admin` fordert Token und ist nicht frei im Internet erreichbar.
3) **Registrierungen steuern**: `SIGNUPS_ALLOWED=false` (oder Whitelist via `SIGNUPS_DOMAINS_WHITELIST`).  
   **Prüfen:** neue Accounts können nicht „einfach so“ erstellt werden.

**Stolpersteine:**
- Externe Komfort-Funktionen (Icons/Push/HIBP) erzeugen zusätzliche Datenflüsse (Abwägung: Komfort/Benachrichtigungen vs. Metadaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- Deaktiviere externe Datenflüsse: `DISABLE_ICON_DOWNLOAD=true`, `ICON_SERVICE=internal` (oder strikt intern), Push aus (`PUSH_ENABLED=false`).
- Setze Event-Retention bewusst: `ORG_EVENTS_ENABLED=false` oder `EVENTS_DAYS_RETAIN=…` + Cleanup.
- Prüfe Proxy-/System-Logs (IP/User-Agent) und reduziere Logging/Retention auf Infrastruktur-Ebene.
**Abwägung:** weniger Komfort (Icons/Push), ggf. weniger Diagnosemöglichkeiten.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Isoliere den Dienst (eigene VM/Container-Host), minimaler Netzwerkzugang, restriktive Firewall.
- Aktiviere SSRF-Schutzoptionen: `HTTP_REQUEST_BLOCK_NON_GLOBAL_IPS=true` und/oder `HTTP_REQUEST_BLOCK_REGEX=…` für interne Netze.
- Admin-Zugriff nur über getrennten Admin-Pfad (VPN/Jump Host), zusätzliche Auth am Reverse Proxy.
**Abwägung:** deutlich mehr Betriebsaufwand und höhere Fehleranfälligkeit bei Updates/Debugging.

</details>

## Features
- self-hosted Server-API kompatibel mit offiziellen Bitwarden-Clients
- Web Vault (optional aktivierbar)
- Admin-Backend (/admin) mit Konfig-Overrides in `/data/config.json`
- Optionale Orga-Event-Logs (Retention konfigurierbar)
- Icon-Service (intern/extern) + optionale Icon-Downloads deaktivierbar
- Optionale Push-Notifications (mit externen Endpunkten/Keys)

## Alternativen
- [Bitwarden](/anbieter/bitwarden/) – Abwägung: Anbieterbetrieb vs. eigener Betrieb
- KeePassXC + Datei-Sync — Abwägung: lokal/Datei-basiert vs. Team-/Web-Features
- [Passbolt](/anbieter/passbolt/) – Abwägung: Team-Fokus vs. Client-Ökosystem

## Nicht gelöst / offene Punkte
- Kryptomodell/„E2E“-Details sind nicht klar dokumentiert (relevant, wenn du serverseitige Metadaten bewerten willst).
-
## Quellen

- Bitwarden (Cloud oder offizieller Server) — Trade-off: "Anbieterbetrieb vs. eigener Betrieb
- KeePassXC + Datei-Sync — Trade-off: "lokal/Datei-basiert vs. Team-/Web-Features
- Passbolt (self-hosted) — Trade-off: "Team-Fokus vs. Client-Ökosystem
- https://raw.githubusercontent.com/dani-garcia/vaultwarden/main/.env.template
- [vaultwarden – GitHub Quellcode](https://github.com/dani-garcia/vaultwarden)
- [vaultwarden README (raw)](https://raw.githubusercontent.com/dani-garcia/vaultwarden/main/README.md)
- [vaultwarden .env.template (Konfiguration)](https://raw.githubusercontent.com/dani-garcia/vaultwarden/main/.env.template)
