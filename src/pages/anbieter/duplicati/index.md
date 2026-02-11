---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Duplicati"
url: "/anbieter/duplicati/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-11"
robots: "index,follow"
description: "Kurzprofil von Duplicati (Kategorie: Backup)."
provider: ""
name: "Duplicati"
category: "Backup"
website: "https://duplicati.com/"
repo: "https://github.com/duplicati/duplicati"
license: "MIT"
policies: ""
privacy: "https://duplicati.com/privacypolicy"
terms: "https://duplicati.com/termsofservice"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "unknown"
phone_required: "Nicht angegeben"
kyc_required: "Nicht angegeben"
jurisdiction: "USA (Delaware) – Duplicati Inc."
region: "us"
logs: "configurable"
retention: "configurable"
retention_notes: "konfigurierbar (z.B. --log-retention; Backup-Retention-Policy)"
data_notes: "Konfiguration & Logs liegen lokal in Duplicati-server.sqlite und können Secrets enthalten (Passphrase/Credentials). Optional: nicht-identifizierende Telemetrie sowie ein gehosteter OAuth-Handler für bestimmte Cloud-Ziele."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Duplicati ist ein Anbieter aus der Kategorie **Backup**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen **lokal laufenden** Backup-Client willst, der **vor dem Upload verschlüsselt** und viele Speicherziele unterstützt (Cloud/Remote/Local).
- **Weniger geeignet wenn:** du eine **vollständig gemanagte** Backup-Cloud „aus einer Hand“ suchst (Duplicati ist primär Client/Software; Storage ist dein Zielanbieter).
- **Wichtigster Abwägung:** **Selbstverwaltung von Secrets** (Passphrase/Credentials lokal) vs. Komfortfunktionen wie **Hosted OAuth-Login** und **Telemetrie** (Metadaten/Abhängigkeiten).

## Sofortmaßnahmen
- **Telemetrie wirklich komplett aus:** `USAGEREPORTER_Duplicati_LEVEL=none` **vor Start** setzen (verhindert auch das Startup-Event).  
- **Server-DB absichern:** `SETTINGS_ENCRYPTION_KEY` via `preload.json` aktivieren, damit sensible Felder in `Duplicati-server.sqlite` nicht im Klartext stehen.  
- **Web-UI nicht ins Netz hängen:** `--webservice-interface=loopback` + Webservice-Passwort setzen (reduziert Angriffsfläche auf LAN/Internet).

## Entscheidungshilfe
- Wenn du ein Cloud-Ziel nutzt, das OAuth verlangt (z.B. Google/Dropbox/OneDrive), dann entscheide zwischen **Duplicati Hosted OAuth-Handler** und **self-hosted OAuth Server** (Abwägung: Komfort vs. zusätzliche Dritt-Komponente/Logs).  
- Wenn du Duplicati auf einem Mehrbenutzer-System oder als Service betreibst, dann sichere die **Web-UI mit Passwort** und verhindere unbefugten Zugriff auf `Duplicati-server.sqlite` (Abwägung: weniger „bequemes“ Remote-Management).  
- Wenn du Secrets/Config gegen lokale Exfiltration härten willst, dann aktiviere **Feld-Verschlüsselung der Server-DB** (Abwägung: Tools/Recovery benötigen den Key im gleichen Kontext).  
- Wenn du Metadaten nach außen minimieren willst, dann **deaktiviere Telemetrie** und nutze bei OAuth-Zielen eher **self-hosted OAuth** (Abwägung: mehr Einrichtung-Aufwand).  
- Wenn Integrität wichtiger ist als Laufzeit/Bandbreite, dann aktiviere **(Full) Remote Verification** nach Backups (Abwägung: mehr Download + längere Backups).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Duplicati |
| Kategorie | Backup |
| Website | [duplicati.com](https://duplicati.com/) |
| Quellcode | [github.com/duplicati/duplicati](https://github.com/duplicati/duplicati) |
| Lizenz | MIT |
| Preismodell | mixed (Open-Source-Client + optionale Platform/Services) |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no (Open-Source-Client); optional für Duplicati Platform |
| Telefon erforderlich | Nicht angegeben |
| KYC erforderlich | Nicht angegeben |
| Zahlungsabwicklung | Nicht angegeben (nur relevant für Platform/Subscription) |
| Jurisdiktion | USA (Delaware) – Duplicati Inc. |
| Logs | configurable |
| Retention | konfigurierbar (z.B. `--log-retention`; Backup-Retention-Policy) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: [duplicati.com/privacypolicy](https://duplicati.com/privacypolicy)
- AGB/Terms: [duplicati.com/termsofservice](https://duplicati.com/termsofservice)
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Konfiguration, Logs und Secrets liegen lokal in `Duplicati-server.sqlite`. Diese DB kann Passphrase/Credentials enthalten und lässt sich per Feld-Verschlüsselung absichern. Zusätzlich existieren optionale Datenflüsse über Telemetrie und (bei OAuth-Zielen) den gehosteten OAuth-Handler.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - **Telemetrie (nicht-identifizierend):** Version, Betriebssystem; bei Backups u.a. Verbindungstyp, Dauer, Größe lokaler/remote Filesets.  
  - **Lokal:** Konfiguration/Logs/Settings in `Duplicati-server.sqlite`, inkl. sensibler Secrets (Passphrase, Ziel-Credentials, Token-Keys etc.).  
  - **OAuth-Handler (optional, für einige Cloud-Ziele):** langfristiger Session-Key (verschlüsselt gespeichert), zusätzlich GAE-Logs mit IP-Adresse und Request-Infos.  
- **Wofür:**  
  - Telemetrie für Nutzungsanalyse/Produktfokus; OAuth-Handler zum Erzeugen eines `AuthID`-Tokens für Provider-Logins; lokale DB für Konfiguration/Scheduler/Web-UI.  
- **Weitergabe/Subprozessoren:**  
  - Backup-Ziel ist **dein** Storage-Anbieter (S3/SFTP/WebDAV/Dropbox/…), Duplicati lädt dort **verschlüsselte/komprimierte Volumes** ab.  
  - OAuth-Handler läuft auf **Google App Engine**, Google hat Zugriff auf Log-Daten (laut Privacy Policy des OAuth-Services).  
- **Drittlandtransfer:** Unklar (OAuth-Service auf Google App Engine, Region nicht angegeben).  
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (nur relevant, falls du Duplicati Platform abonnierst).  
- **Kontakt/DSAR/DPA:** Nicht angegeben (siehe Anbieter-Privacy/Terms-Links).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Ja (Duplicati sammelt „basic non-identifying telemetry“; Startup-Event wird ebenfalls erfasst).  
- **Abschaltbar?** Ja: in der UI „None / disabled“; für „wirklich 0“ per ENV **vor Start**: `USAGEREPORTER_Duplicati_LEVEL=none`.  
- **Wo (Menüpfad):** Web-UI → **Settings** → Telemetry → **“None / disabled”**.

**Logs & Retention:**
- **Logging-Level:** konfigurierbar (u.a. `--log-level`, `--log-file`).  
- **Aufbewahrung:** konfigurierbar (`--log-retention` purgt Log-Daten aus der DB; Backup-Retention z.B. per `--retention-policy`).  
- **Lösch-/Opt-out-Optionen:** Log-Purge über `--log-retention`; Telemetrie per UI/ENV.

**Abwägung am Punkt:** Weniger Telemetrie/Logs kann Diagnose/Support erschweren; mehr Telemetrie/Logs erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:**  
  - Backups werden lokal verschlüsselt, bevor sie zum Ziel übertragen werden; unterstützt **AES-256** oder **GPG**.  
  - Standard-AES folgt dem **AESCrypt**-Dateiformat (Tools wie SharpAESCrypt sind nutzbar).  
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (für Backup-Passphrase).  
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben (kein Cloud-Account nötig; Zugriffsschutz primär per Web-UI Passwort).  
- **Recovery/Account-Wiederherstellung:**  
  - Zugriff auf Web-UI erfolgt per Duplicati Access Password (nicht extrahierbar); Reset/Recovery hängt von Einrichtung/DB-Key-Kontext ab.  
  - Backup-Wiederherstellung hängt von der **Backup-Passphrase** ab (bei Verlust: Entschlüsselung nicht möglich).  
- **Vuln-Handling / Security-Kontakt:** Security Issues sollen per Mail an den Maintainer gemeldet werden (PGP-Key für sensible Meldungen möglich).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Web-UI Zugriff absichern** (Access Password) und nicht öffentlich exponieren.  
   **Prüfen:** Beim Aufruf der Web-UI wird ein Passwort verlangt; bei Service-Betrieb ist ein Passwort gesetzt.
2) **Server-DB Secrets schützen** (Feld-Verschlüsselung aktivieren).  
   **Prüfen:** `SETTINGS_ENCRYPTION_KEY` per `preload.json` gesetzt; DB liegt in geschützten Dateirechten.
3) **Telemetrie deaktivieren** (UI) oder vollständig blockieren (ENV vor Start).  
   **Prüfen:** UI zeigt „None / disabled“ **oder** `USAGEREPORTER_Duplicati_LEVEL=none` ist gesetzt.

**Stolpersteine:**
- `Duplicati-server.sqlite` kann Secrets enthalten (Passphrase/Credentials) – Dateirechte & DB-Verschlüsselung sind relevant.
- OAuth-Ziele können über den **Hosted OAuth-Handler** laufen (zusätzliche Komponente/Logs).
- Windows-Service als SYSTEM kann Zugriff auf das komplette Dateisystem geben; Web-UI Passwort ist dann besonders wichtig.

<details>
<summary>Profil B (Datensparsam)</summary>

- **Telemetrie „hart“ aus:** `USAGEREPORTER_Duplicati_LEVEL=none` vor Start setzen (kein Startup-Event).
- **Hosted OAuth vermeiden:** self-hosted OAuth Server nutzen (mehr Kontrolle über Token-Flows).  
- **Web-UI lokal einschränken:** `--webservice-interface=loopback` und Zugriff nur via SSH-Tunnel/VPN.  
**Abwägung:** mehr Einrichtung/Operation-Aufwand, weniger „Plug & Play“.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Isolation:** Duplicati in separater VM/Container/Host betreiben; minimale Netzfreigaben.  
- **Secrets strikt trennen:** DB-Key nur im Runtime-Kontext verfügbar (z.B. ENV/Secret-Store), keine Klartext-Konfig.  
- **Zusätzliche Verifikation:** Remote-Verifikation/Block-Checks aggressiver konfigurieren (mehr Bandbreite/Laufzeit).  
**Abwägung:** deutlich mehr Komplexität, höhere Betriebs-/Fehlerrisiken.

</details>

## Features
- Clientseitige Verschlüsselung: **AES-256** oder **GPG** vor Upload.
- Inkrementelle Backups, Deduplizierung und Kompression.
- Viele Ziele: Cloud-Provider und Standard-Protokolle (SFTP/WebDAV/FTP/S3-kompatibel etc.).
- Web-UI (auch headless nutzbar) plus CLI und eingebauter Scheduler.
- Optionale Integritätsprüfung/Verifikation von Remote-Daten.

## Alternativen
- [Restic](/anbieter/restic/)
- [BorgBackup](/anbieter/borgbackup/)
- Kopia (Snapshots + Policies; **Abwägung:** andere Repo-/Target-Philosophie)
- Borgmatic (Borg-Orchestrierung; **Abwägung:** Fokus auf Linux/Config-as-Code)

## Nicht gelöst / offene Punkte
- Duplicati Platform: Konto-/Payment-Pflichten und Subprozessoren/DPA sind in den frei zugänglichen Doku-Seiten nicht zusammengefasst.

## Quellen

- restic (CLI, snapshots; Trade-off: "weniger GUI/Assistenten)
- BorgBackup (Repo-basiert, stark in Linux-Workflows; Trade-off: "anderes Bedienmodell)
- Kopia (verschlüsselte Snapshots; Trade-off: "andere Ziel-/Repo-Struktur)
- [Duplicati GitHub Repo (README)](https://github.com/duplicati/duplicati)
- [Community Docs: "Advanced options (Retention Policy, Remote Verification)](https://docs.duplicati.com/community-docs/community-docs-advanced-options)
- [Duplicati Inc & Open Source (Open-Core Kontext)](https://docs.duplicati.com/duplicati-programs/license/duplicati-inc-and-open-source)
- [Telemetry collection (Opt-out + ENV)](https://docs.duplicati.com/detailed-descriptions/telemetry-collection)
- [The server database (Duplicati-server.sqlite + Feld-Verschlüsselung)](https://docs.duplicati.com/detailed-descriptions/the-server-database)
- [Duplicati Access Password (Web-UI Passwortmodell)](https://docs.duplicati.com/detailed-descriptions/duplicati-access-password)
- [OAuth Server (AuthID / Hosted Service auf Google App Engine)](https://docs.duplicati.com/duplicati-programs/oauth-server)
- [Running a self-hosted OAuth Server](https://docs.duplicati.com/detailed-descriptions/running-a-self-hosted-oauth-server)
- [Duplicati OAuth Service Privacy Policy (privacy-policy.txt)](https://duplicati-oauth-handler.appspot.com/privacy-policy.txt)
- [Encrypting and decrypting files (AES/AESCrypt + GPG)](https://docs.duplicati.com/using-tools/encrypting-and-decrypting-files)
- [Duplicati Pricing (Platform/Subscription)](https://duplicati.com/pricing)
- [Duplicati GitHub Repo (README)](https://github.com/duplicati/duplicati)
- [Community Docs: Introduction (Features/License/Encryption)](https://docs.duplicati.com/community-docs/community-docs-introduction)
- [Duplicati Inc & Open Source (Open-Core Kontext)](https://docs.duplicati.com/duplicati-programs/license/duplicati-inc-and-open-source)
- [Telemetry collection (Opt-out + ENV)](https://docs.duplicati.com/detailed-descriptions/telemetry-collection)
- [The server database (Duplicati-server.sqlite + Feld-Verschlüsselung)](https://docs.duplicati.com/detailed-descriptions/the-server-database)
- [Duplicati Access Password (Web-UI Passwortmodell)](https://docs.duplicati.com/detailed-descriptions/duplicati-access-password)
- [OAuth Server (AuthID / Hosted Service auf Google App Engine)](https://docs.duplicati.com/duplicati-programs/oauth-server)
- [Running a self-hosted OAuth Server](https://docs.duplicati.com/detailed-descriptions/running-a-self-hosted-oauth-server)
- [Duplicati OAuth Service Privacy Policy (privacy-policy.txt)](https://duplicati-oauth-handler.appspot.com/privacy-policy.txt)
- [Encrypting and decrypting files (AES/AESCrypt + GPG)](https://docs.duplicati.com/using-tools/encrypting-and-decrypting-files)
- [Community Docs: Other commandline utilities (Log-Retention, Interface, Updater-ENV)](https://docs.duplicati.com/community-docs/community-docs-other-commandline-utilities)
- [Community Docs: Advanced options (Retention Policy, Remote Verification)](https://docs.duplicati.com/community-docs/community-docs-advanced-options)
- [Duplicati Pricing (Platform/Subscription)](https://duplicati.com/pricing)
