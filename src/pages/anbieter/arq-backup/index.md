---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Arq Backup"
url: "/anbieter/arq-backup/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-05"
robots: "index,follow"
description: "Kurzprofil von Arq Backup (Kategorie: Backup)."
provider: ""
name: "Arq Backup"
category: "Backup"
website: "https://www.arqbackup.com/"
repo: "Nicht angegeben"
license: "Proprietär (ARQ 6/7 License and Service Agreement)"
policies: ""
privacy: "https://www.arqbackup.com/privacy/"
terms: "https://www.arqbackup.com/documentation/arq7/English.lproj/license.html"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "unknown"
free_tier: "no"
open_source: "no"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA (Haystack Software LLC)"
region: "us"
logs: "some"
logs_notes: "Website-Logs/Tracking (Cookies, IP/Browser/Referrer) + Lizenz-Aktivierungsdaten (laut Privacy Policy)"
retention: "unknown"
retention_notes: "Nicht angegeben (nur allgemeine Retention-Aussage in Privacy Policy)"
data_notes: "Arq ist primär Client-Software: Backups landen bei deinem gewählten Storage (z.B. S3/B2/Dropbox/SFTP/NAS) oder optional in Arq Cloud (Speicher laut Anbieter bei Wasabi). Datenschutz & Metadaten hängen stark vom Ziel-Storage ab."
features: ""
alternatives: ""
payment_processors: "Nicht angegeben (Third-Party Payment Processor, nicht benannt)"
sources: ""
---
## Kurzprofil

Arq Backup ist ein Anbieter aus der Kategorie **Backup**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Backups client-seitig steuern willst und den Storage selbst auswählst (Cloud/NAS/extern) – mit optionaler Verschlüsselung vor dem Upload.
- **Weniger geeignet wenn:** du zwingend einen komplett gemanagten Dienst ohne Einrichtung am Ziel-Storage brauchst oder nur Software mit offenem Quellcode nutzen willst.
- **Wichtigster Abwägung:** mehr Kontrolle über Speicherort & Datenfluss vs. mehr Eigenverantwortung (Storage-Auswahl, Kosten/Retention, Recovery-Prozesse).

## Sofortmaßnahmen
- **Backup-Verschlüsselung beim Anlegen des Backup-Plans aktivieren** (Passphrase „verlässt den Rechner nicht“ laut Doku) → reduziert Einsichtsmöglichkeiten beim Storage-Ziel.  
- **App-Passwort setzen** (Preferences → „App password“) → verhindert, dass andere lokal Arq öffnen und Backup-Pläne ändern/löschen.  
- **Immutable Backups (Object Lock) aktivieren**, wenn dein S3/S3-kompatibler Provider das unterstützt → schützt Backups vor Löschung/Überschreiben innerhalb des Lock-Zeitraums.

## Entscheidungshilfe
- Wenn du **keine Backup-Daten beim Softwareanbieter** ablegen willst, dann nutze Arq mit **eigenem Storage-Ziel** (Abwägung: Einrichtung/Abrechnung/Policies beim Storage-Provider).
- Wenn du **Web-Zugriff auf Backups** möchtest, dann ist **Arq Premium/Arq Cloud** relevant (Abwägung: Konto + Storage läuft über Anbieter-Accounts; Details im Privacy/Terms prüfen).
- Wenn dein Risiko-Szenario **Ransomware + Cloud-Account-Übernahme** umfasst, dann nutze ein Ziel mit **Object Lock** und aktiviere „immutable“ (Abwägung: falsch gesetzte Lock-Zeiten lassen sich nicht rückgängig machen).
- Wenn du **möglichst wenig Identitätsbindung** willst, dann vermeide optionale Cloud-Features und reduziere Kontakt-/Account-Daten (Abwägung: weniger Komfort bei Auto-Renew/Recovery/Support).
- Wenn du **DSAR/Löschung** sauber nachvollziehen willst, dann prüfe vor Kauf die Aussagen zu Retention und Zugriff/Account-Daten (Abwägung: Retention wird nur allgemein beschrieben).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Arq Backup |
| Kategorie | Backup |
| Website | https://www.arqbackup.com/ |
| Quellcode | Nicht angegeben |
| Lizenz | Proprietär (ARQ 6/7 License and Service Agreement) |
| Preismodell | paid (Einmalkauf; optional Abo über Arq Premium) |
| Free Tier | no (30 Tage Testphase laut Website) |
| Open Source | no |
| Konto erforderlich | yes (Kontaktinfo bei Aktivierung; Arq Cloud/Premium: Konto) |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben (Third-Party Payment Processor, nicht benannt) |
| Jurisdiktion | USA (Haystack Software LLC) |
| Logs | Website-Logs/Tracking (Cookies, IP/Browser/Referrer) + Lizenz-Aktivierungsdaten (laut Privacy Policy) |
| Retention | Nicht angegeben (nur allgemeine Retention-Aussage in Privacy Policy) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.arqbackup.com/privacy/
- AGB/Terms: https://www.arqbackup.com/documentation/arq7/English.lproj/license.html
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Keine angegeben

**Daten-Notizen (kurz):**
Arq ist primär Client-Software: Backups landen bei deinem gewählten Storage (z.B. S3/B2/Dropbox/SFTP/NAS) oder optional in Arq Cloud (Speicher laut Anbieter bei Wasabi). Datenschutz & Metadaten hängen stark vom Ziel-Storage ab.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Bei Aktivierung von Arq Backup: Kontaktinfo wie Name/E-Mail; bei Arq Cloud: E-Mail + Passwort-Hash; zusätzlich Lizenz-Aktivierungsinformationen (u.a. für Licensing Enforcement).  
- **Wofür:** u.a. Quittungen, Update-/Security-Notifications, Support-Kommunikation; Lizenz-/Promo-Zwecke bei Aktivierungen.  
- **Weitergabe/Subprozessoren:** Zahlungsdaten gehen an einen „third-party payment processor“ (nicht benannt); Arq Cloud speichert Backup-Daten in Anbieter-Accounts bei Wasabi (verschlüsselt laut Anbieter).  
- **Drittlandtransfer:** Nicht angegeben (Jurisdiktion/Unternehmenssitz: USA).  
- **Zahlungsabwicklung/Payment Processor:** Third-Party Payment Processor genannt, aber nicht namentlich spezifiziert.  
- **Kontakt/DSAR/DPA:** Privacy-Kontakt: privacy@arqbackup.com; Zugriff auf Account-Daten via support@arqbackup.com (laut Privacy Policy).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Website-Tracking via Cookies/Logfiles wird beschrieben; bei der App werden Lizenz-Aktivierungsinfos erhoben (weitere App-Telemetrie nicht konkret beschrieben).
- **Abschaltbar?** Für Cookies/Browser-Tracking: abhängig von Browser-Einstellungen; für App-Telemetrie: Nicht angegeben.
- **Wo (Menüpfad):** Nicht angegeben (in Arq selbst kein dokumentierter Telemetrie-Schalter).

**Logs & Retention:**
- **Logging-Level:** Website-Logs/Tracking (Cookies, IP/Browser/Referrer) + Lizenz-Aktivierungsdaten (laut Privacy Policy)
- **Aufbewahrung:** Nicht angegeben (nur allgemeine Aussage: Aufbewahrung solange „ongoing legitimate business need“).
- **Lösch-/Opt-out-Optionen:** Promo-E-Mails: Opt-out via Unsubscribe; darüber hinaus keine konkreten Fristen/Prozesse genannt.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Beim Anlegen eines Backup-Plans kann eine Verschlüsselungs-Passphrase gesetzt werden; laut Doku „wird vor dem Senden verschlüsselt“ und „die Passphrase verlässt den Computer nicht“.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (keine Verfahren/Parameter in den genutzten Arq-7-Dokumentationsseiten).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben.
- **Recovery/Account-Wiederherstellung:** Für Arq Cloud wird ein Password-Recovery-Prozess beschrieben, der nur bei Account-Erstellung aktivierbar ist (Abwägung: mehr Recovery-Komfort vs. zusätzliche Recovery-Mechanik).
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben (kein dedizierter Disclosure-/SECURITY.md-Link gefunden).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **App-Passwort setzen** (lokaler Zugriffsschutz).  
   **Menüpfad:** Arq → Preferences → „App password“ → „Set…“  
   **Prüfen:** Arq fragt beim Öffnen nach dem App-Passwort.
2) **Backup-Plan mit Verschlüsselung anlegen** (Passphrase lokal).  
   **Menüpfad:** File → „New Backup Plan“ → Storage wählen → Encryption Password setzen  
   **Prüfen:** Doku-Formulierung „password will never leave your computer“ + erfolgreicher Test-Restore.
3) **Immutable Backups aktivieren** (falls Ziel-Storage Object Lock kann).  
   **Menüpfad:** Backup Plan → Edit… → Tab „Immutable“ → Option aktivieren  
   **Prüfen:** Lock-Zeitraum gesetzt + Hinweis beachten: nicht vor Ablauf löschbar.

**Stolpersteine:**
- Wenn du die Verschlüsselungs-Passphrase verlierst, ist Recovery typischerweise schwierig/unmöglich (Abwägung: starke Vertraulichkeit vs. Recovery-Risiko).
- Immutable/Object-Lock-Konfiguration kann Kosten/Operational Overhead erhöhen und verhindert Löschung bis zum Ablauf (Abwägung: Ransomware-Schutz vs. Flexibilität).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze Arq mit **eigenem Storage** (statt Arq Cloud), um Datenflüsse beim Anbieter zu reduzieren.  
- Verwende beim Storage möglichst getrennte Credentials (z.B. eigener IAM-User/Key nur fürs Backup).  
- Reduziere E-Mail-Kommunikation auf das Nötigste (Promo-Opt-out nutzen).

**Abwägung:** weniger Komfort bei Web-Zugriff/Managed Storage; mehr Eigenbetrieb beim Ziel-Storage.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne Backup-Einrichtung organisatorisch: eigener OS-User/VM nur für Backups + getrennte Storage-Credentials.  
- Nutze Object Lock/Immutable Backups + zusätzlich Offline/Second-Copy (z.B. externe Disk) für Ausfall-/Angriffsszenarien.  
- Halte Restore-Prozess regelmäßig getestet (Airgap-ähnlich), ohne „Live“-Produktivsystem zu gefährden.

**Abwägung:** deutlich mehr Aufwand und mehr moving parts (Key-Management, Test-Restores, Kosten).

</details>

## Features
- Client-seitige Backup-Software (macOS/Windows)
- Optionale Verschlüsselung vor Upload (Passphrase verlässt den Rechner laut Doku nicht)
- Unterstützt viele Storage-Ziele (u.a. S3/B2/Dropbox/Google Drive/OneDrive/SharePoint/SFTP/NAS/Minio)
- App-Passwort (lokaler Zugriffsschutz)
- Immutable Backups über Object Lock (S3/S3-kompatibel, falls Provider unterstützt)

## Alternativen
- **Restic:** stärker CLI-/Script-orientiert (Abwägung: sehr flexibel, aber weniger GUI-Komfort).
- **Duplicati:** GUI + viele Ziele (Abwägung: Funktionsumfang vs. je nach Umgebung mehr Pflege/Monitoring nötig).
- **BorgBackup:** oft in Self-Hosting-/NAS-Einrichtungen genutzt (Abwägung: sehr effizient, aber meist weniger „klickfertig“).

## Nicht gelöst / offene Punkte
- Subprozessoren/Payment Processor sind nicht vollständig öffentlich benannt (nur „third-party payment processor“ + Wasabi als Storage für Arq Cloud).
- App-Telemetrie jenseits von Lizenz-Aktivierung ist in den genutzten Quellen nicht konkret beschrieben (Crash-/Diagnosedaten unklar).
- Kein dedizierter öffentlicher Vulnerability-Disclosure-Prozess gefunden.

## Quellen

- Restic (CLI-fokussiert; Trade-off: "mehr Eigenkonfiguration statt GUI)
- Duplicati (GUI + viele Ziele; Trade-off: "anderes Update-/Risiko-Profil, je nach Setup)
- BorgBackup (effizient + bewährt; Trade-off: "meist stärker Self-Hosting/CLI-orientiert)
- title: "Arq Cloud Backup – Password Recovery (Documentation)
- [Arq Backup – Website](https://www.arqbackup.com/)
- [Arq Backup – Privacy Policy](https://www.arqbackup.com/privacy/)
- [Arq Backup – License Agreement (Documentation)](https://www.arqbackup.com/documentation/arq7/English.lproj/license.html)
- [Arq Backup – Creating a Backup Plan (Encryption Password)](https://www.arqbackup.com/documentation/arq7/English.lproj/createBackupPlan.html)
- [Arq Backup – Storage Locations (Supported Destinations)](https://www.arqbackup.com/documentation/arq7/English.lproj/storageLocations.html)
- [Arq Backup – Securing Access to Arq (App password)](https://www.arqbackup.com/documentation/arq7/English.lproj/security.html)
- [Arq Backup – Immutable Backup Records (Object Lock)](https://www.arqbackup.com/documentation/arq7/English.lproj/objectLock.html)
- [Arq Cloud Backup – Password Recovery (Documentation)](https://www.arqbackup.com/docs/arqcloudbackup/English.lproj/passwordRecovery.html)

