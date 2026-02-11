---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / rclone"
url: "/anbieter/rclone/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von rclone (Kategorie: Cloud & Sync)."
provider: ""
name: "rclone"
category: "Cloud & Sync"
website: "https://rclone.org/"
repo: "https://github.com/rclone/rclone"
license: "MIT"
policies: ""
privacy: "https://rclone.org/privacy/"
terms: "Nicht angegeben"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Nicht angegeben"
region: "unknown"
logs: "configurable"
retention: "configurable"
retention_notes: "konfigurierbar (lokal; bis zur Löschung durch Nutzer:in)"
data_notes: "Client-side Tool: Datenzugriff & Verarbeitung laufen lokal und direkt zwischen deinem Gerät und den API-Servern des gewählten Cloud-Providers. Auth-Tokens liegen lokal in rclone.conf (optional verschlüsselbar)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

rclone ist ein Anbieter aus der Kategorie **Cloud & Sync**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du ein lokales Tool willst, das Dateien über die APIs vieler Cloud-Provider verwaltet (Sync/Copy/Mount) und du Secrets (Tokens/Config) selbst sauber absichern kannst.
- **Weniger geeignet wenn:** du eine „fertige“ Cloud mit Support-/Recovery-Prozessen erwartest oder keine lokalen Zugangsdaten/Tokens verwalten willst.
- **Wichtigster Abwägung:** lokale Kontrolle & Automatisierung vs. Eigenverantwortung für Token-/Config-Schutz und die Privacy-Regeln deines gewählten Cloud-Providers.

## Sofortmaßnahmen
- `rclone config encryption set` aktivieren → schützt Tokens/Secrets in `rclone.conf` bei Geräteverlust.
- `crypt`-Remote nutzen → Inhalte und Dateinamen werden vor Upload client-seitig verschlüsselt.
- Remote-Control/Web-GUI nur lokal nutzen oder mit Auth absichern (`--rc-htpasswd` / `--user`+`--pass`) → reduziert Risiko durch offene Admin-Ports.

## Entscheidungshilfe
- Wenn du Cloud-Dateien **nur lokal verarbeiten** willst, dann nutze rclone als CLI-Tool (Abwägung: du musst Config/Keys selbst absichern).
- Wenn du **Cloud-Provider-Login** mit starker Kontosicherheit brauchst, dann aktiviere MFA/2FA beim Provider (Abwägung: rclone selbst hat kein eigenes „Account-Portal“).
- Wenn du **verschlüsselt in die Cloud** schreiben willst, dann nutze einen `crypt`-Remote (Abwägung: Provider sieht nur Ciphertext; Features wie Web-Vorschau/Server-Suche sind eingeschränkt).
- Wenn du rclone per **Remote Control / GUI** steuern willst, dann halte `--rc-addr` auf localhost oder nutze Auth/HTTPS (Abwägung: mehr Einrichtung, weniger „mal eben“).
- Wenn du **Automatisierung/Skripte** nutzt, dann plane Secrets sauber (separater User, restriktive Dateirechte, getrennte Configs) (Abwägung: mehr Betriebsaufwand).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | rclone |
| Kategorie | Cloud & Sync |
| Website | https://rclone.org/ |
| Quellcode | https://github.com/rclone/rclone |
| Lizenz | MIT |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend (lokales Open-Source-Tool) |
| Jurisdiktion | Nicht angegeben |
| Logs | configurable |
| Retention | konfigurierbar (lokal; bis zur Löschung durch Nutzer:in) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://rclone.org/privacy/
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Client-side: rclone läuft lokal und greift über Provider-APIs auf Inhalte zu. Laut Privacy Policy betreibt das rclone-Projekt keine Server, die personenbezogene Daten speichern oder verarbeiten; Datenflüsse gehen direkt zwischen deinem Gerät und den Provider-Servern. Auth-Tokens liegen lokal in `rclone.conf` und können verschlüsselt werden. Löschung erfolgt durch Entfernen der lokalen Config und/oder Widerruf beim Provider.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Datei-Metadaten und -Inhalte (je nach Operation), OAuth-Access-Tokens sowie ggf. Basis-Profilinfos wie E-Mail-Adresse zur lokalen Identifikation der verbundenen Konten. Außerdem lokale Konfigurationsdaten in `rclone.conf`.  
- **Wofür:** ausschließlich zur Ausführung der von dir ausgelösten Datei-Operationen (`copy`, `sync`, `move`, `list`, `delete`) und zur Authentifizierung gegenüber dem Provider (Tokens). Keine Nutzung für Werbung/Marketing/Analyse durch das Projekt.  
- **Weitergabe/Subprozessoren:** rclone teilt laut Privacy Policy keine User-Daten mit Dritten; Transfers laufen direkt zwischen deinem Gerät und dem Provider.  
- **Drittlandtransfer:** abhängig vom gewählten Storage-Provider (rclone selbst verarbeitet lokal und spricht Provider-APIs an).  
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend.  
- **Kontakt/DSAR/DPA:** rclone speichert/verarbeitet keine personenbezogenen Daten serverseitig; du kannst Tokens lokal löschen und Zugriff beim Provider widerrufen.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Für das **rclone.org**-Webangebot: Google Analytics über Cookies (Website-Telemetrie). Für das **rclone-Tool**: laut Privacy Policy keine projektseitigen Server zur Verarbeitung personenbezogener Daten; Datenzugriffe laufen lokal und zum Provider.  
- **Abschaltbar?** Website-Cookies/Analytics: über Browser-/Cookie-Einstellungen. Tool-seitig: Nicht angegeben (und typischerweise nicht relevant, da keine Projekt-Server).  
- **Wo (Menüpfad):** Nicht zutreffend (CLI). Website: Browser → Datenschutz/Cookies.

**Logs & Retention:**
- **Logging-Level:** configurable (u.a. `--log-level`, `--log-file`, `--log-format`).  
- **Aufbewahrung:** konfigurierbar (lokal; abhängig davon, ob/wie du Logs speicherst).  
- **Lösch-/Opt-out-Optionen:** lokal (Log-Dateien löschen, Config entfernen; Token beim Provider widerrufen).

**Abwägung am Punkt:** Mehr Logging hilft beim Debugging, kann aber Dateinamen/Operationen und ggf. sensible Inhalte (z.B. bei Debug-Dumps) in Logs sichtbar machen.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** `crypt` verschlüsselt Inhalte und Dateinamen client-seitig, bevor sie zum Provider gehen (virtuelles Backend über dem „unterliegenden“ Remote).  
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (Details/Parameter sind in der genutzten Doku-Ansicht nicht vollständig spezifiziert).  
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend auf rclone-Seite (Auth läuft über Provider-Mechanismen wie OAuth/Cookies).  
- **Recovery/Account-Wiederherstellung:** Tokens liegen lokal in `rclone.conf`; Zugriff kann durch Löschen der Config und/oder Widerruf der App-Berechtigungen beim Provider beendet werden.  
- **Vuln-Handling / Security-Kontakt:** Sicherheitslücken sollen nicht öffentlich gemeldet werden; Meldung über GitHub Security Advisories/Reporting Interface.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Provider-Account absichern** (MFA/2FA beim Cloud-Provider aktivieren).  
   **Prüfen:** Login beim Provider erfordert zweiten Faktor.
2) **Config-Datei verschlüsseln** (`rclone config encryption set`).  
   **Prüfen:** `rclone config encryption check` meldet „encrypted“.
3) **Remote Control/Serve nicht unnötig exponieren** (Standard: nur localhost; bei LAN/Internet immer Auth setzen).  
   **Prüfen:** `--rc-addr` bleibt auf `localhost:5572` oder Auth ist aktiv (`--rc-htpasswd` / `--user`+`--pass`).

**Stolpersteine:**
- Debug-Dumps/hohes Logging können sensible Details in Log-Dateien schreiben (Abwägung: Support/Diagnose vs. Metadaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze getrennte rclone-Konfigurationen pro Zweck/Identität (z.B. eigenes `--config` pro Projekt/Cloud).
- Bevorzuge `crypt`, wenn du beim Provider möglichst wenig Klartext-Metadaten/Content hinterlegen willst.
- Halte Berechtigungen minimal (Scopes/Permissions je Backend prüfen).
**Abwägung:** mehr Einrichtung-Aufwand, mehr Komplexität beim Betrieb/Fehlersuche.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Betreibe rclone in einer isolierten Umgebung (separater User/Container/VM), damit Tokens/Cache getrennt sind.
- Setze strikte Netzwerkgrenzen: nur die tatsächlich genutzten Provider-Endpunkte zulassen (Achtung: kann Updates/Token-Flows brechen).
- Wenn RC/Web-GUI nötig ist: nur über localhost + Tunnel/SSH und mit Auth/HTTPS.
**Abwägung:** hoher Betriebsaufwand, mehr Fehlerquellen durch Isolation/Blocking.

</details>

## Features
- Sync/Copy/Move/Mount für zahlreiche Cloud-Provider und Protokolle (CLI, Skripte, API).
- `crypt` für client-seitige Verschlüsselung (Inhalte + Dateinamen) über einem bestehenden Remote.
- Remote Control/API (`--rc`) und optional Web-GUI (`rclone rcd --rc-web-gui`) mit absicherbaren Flags.
- „Serve“-Modi (z.B. HTTP/WebDAV/SFTP/FTP), optional mit Login/htpasswd.

## Alternativen
- Syncthing (P2P-Sync ohne Cloud-Anbieter; Abwägung: Geräte-Verfügbarkeit/Koordination statt Provider-API)
- rsync (klassisch über SSH/Server; Abwägung: kein Multi-Cloud-Backend-Universum, dafür simple Unix-Toolchain)
- restic / borg (Backup mit Verschlüsselung; Abwägung: Backup-Workflows statt Cloud-Dateimanagement/Mount)
- Nextcloud Desktop Client (plattformgebunden; Abwägung: integrierter Stack statt Provider-Vielfalt)

## Nicht gelöst / offene Punkte
- Jurisdiktion/Betreiberstruktur als formale Angabe ist nicht klar als „Anbieterfirma“ ausgewiesen (rclone ist primär ein Open-Source-Projekt; Stand: 2026-01-20).

## Quellen

- rsync (SSH/On-Prem; Trade-off: "weniger Cloud-APIs, dafür klassischer Serverzugriff)
- Syncthing (P2P-Sync ohne Cloud-Provider; Trade-off: "Geräte müssen online/koordiniert sein)
- restic/borg (Backup-Fokus; Trade-off: "weniger „Cloud-Dateimanager“, dafür Backup-Workflows)
- Nextcloud Desktop Client (für Nextcloud; Trade-off: "an eine Plattform gebunden)
- https://github.com/rclone/rclone/security/advisories
- [rclone — Homepage](https://rclone.org/)
- [rclone — Privacy Policy](https://rclone.org/privacy/)
- [rclone — Documentation / Usage](https://rclone.org/docs/)
- [rclone — Global Flags (Logging/Debug)](https://rclone.org/flags/)
- [rclone — Crypt Backend](https://rclone.org/crypt/)
- [rclone — Remote Control / API](https://rclone.org/rc/)
- [rclone — `rclone rcd`](https://rclone.org/commands/rclone_rcd/)
- [rclone — `rclone serve http` (Auth-Hinweis)](https://rclone.org/commands/rclone_serve_http/)
- [rclone — `rclone config encryption`](https://rclone.org/commands/rclone_config_encryption/)
- [rclone — `rclone obscure`](https://rclone.org/commands/rclone_obscure/)
- [GitHub — rclone Quellcode](https://github.com/rclone/rclone)
- [GitHub — Security Overview (Reporting a Vulnerability)](https://github.com/rclone/rclone/security)
- [GitHub — Security Advisories](https://github.com/rclone/rclone/security/advisories)
