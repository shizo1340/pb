---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / KeePass"
url: "/anbieter/keepass/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-17"
robots: "index,follow"
description: "Kurzprofil von KeePass (Kategorie: Passwort-Manager)."
provider: ""
name: "KeePass"
category: "Passwort-Manager"
website: "https://keepass.info/"
repo: "https://sourceforge.net/projects/keepass/"
license: "GPL-2.0-or-later"
policies: ""
privacy: "https://keepass.info/help/base/terms.html"
terms: "https://keepass.info/help/base/terms.html"
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
jurisdiction: "Deutschland (laut Imprint)"
region: "eu"
logs: "minimal"
retention: "unknown"
data_notes: "KeePass ist primär eine lokale App: Passwörter liegen in einer verschlüsselten KDBX-Datei auf deinem Speichermedium. Netzwerkzugriffe entstehen typischerweise nur durch optionale Update-Checks und durch von dir gewählte Sync-/URL-Funktionen (z.B. WebDAV/FTP)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

KeePass ist ein Anbieter aus der Kategorie **Passwort-Manager**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen **lokalen/offline** Passwort-Tresor ohne Konto nutzen willst und Sync/Backups selbst kontrollierst (z.B. Dateiablage, WebDAV, USB).
- **Weniger geeignet wenn:** du **eingebaute Cloud-Sync + Account-Recovery** ohne eigenes Datei-/Backup-Handling brauchst.
- **Wichtigster Abwägung:** **Eigenkontrolle (lokale Datei) vs. Eigenverantwortung** (Backup/Sync/Keyfile-Management; bei Verlust von Schlüsselmaterial ist der Tresor nicht wiederherstellbar).

## Sofortmaßnahmen
- **Update-Checks bewusst steuern oder deaktivieren** (Tools → Options → Advanced): reduziert regelmäßige Netzwerkverbindungen (Abwägung: du musst Updates selbst im Blick behalten).
- **Zwischenablage-Timeout kurz setzen** (Clipboard auto-clear time, z.B. 10–20s): reduziert Passwort-Reste in der Zwischenablage (Abwägung: weniger bequem beim Einfügen).
- **„Prevent certain screen captures“ aktivieren** (Tools → Options → Security): erschwert Screenshots durch bestimmte Software (Abwägung: Remote-Desktop/Accessibility-Tools können beeinträchtigt sein).

## Entscheidungshilfe
- Wenn du **keine Anbieter-Cloud** willst, dann nutze KeePass mit einer **lokalen KDBX-Datei** (Abwägung: du musst Backup/Sync selbst organisieren).
- Wenn du die Datenbank über mehrere Geräte nutzen willst, dann synchronisiere **nur die KDBX-Datei** über einen von dir kontrollierten Weg (Abwägung: Sync-Fehler/Versionkonflikte sind dein Problem).
- Wenn du die Angriffsfläche reduzieren willst, dann nutze **Master-Passwort + Keyfile** und speichere beide **getrennt** (Abwägung: mehr Aufwand und Risiko, das Keyfile zu verlieren).
- Wenn du möglichst wenig Netzwerkverkehr willst, dann deaktiviere **Auto-Update-Checks** (Abwägung: Updates kommen nicht automatisch in deinen Blick).
- Wenn du Ports/Apps auf Mobilgeräten brauchst, dann prüfe, ob es sich um **contributed/unofficial** Clients handelt (Abwägung: eigenes Trust-Modell je Client nötig).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | KeePass |
| Kategorie | Passwort-Manager |
| Website | https://keepass.info/ |
| Quellcode | https://sourceforge.net/projects/keepass/ |
| Lizenz | GPL-2.0-or-later |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Spenden: PayPal oder Überweisung (kein Kauf erforderlich) |
| Jurisdiktion | Deutschland (laut Imprint) |
| Logs | minimal |
| Retention | Nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://keepass.info/help/base/terms.html
- AGB/Terms: https://keepass.info/help/base/terms.html
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Code-Analyse KeePass 2.x (BSI & mgm security partners), dokumentiert in den KeePass 2.57.1 Release Notes: https://keepass.info/help/kb/kp_2.57.1_notes.html
- EU-FOSSA 1 Audit (laut Anbieter auf Awards/Ratings verlinkt): https://keepass.info/ratings.html
- CSPN-Zertifizierung (laut Anbieter auf Awards/Ratings verlinkt): https://keepass.info/ratings.html

**Daten-Notizen (kurz):**
KeePass ist primär lokal: die Datenbank ist eine verschlüsselte Datei (KDBX). Netzwerkzugriffe entstehen typischerweise nur durch optionale Update-Checks oder durch von dir gewählte Funktionen wie „Open/Save From/To URL“.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** In der App fallen primär **lokale Daten** an (verschlüsselte KDBX-Datei). Beim **Update-Check** wird eine kleine Versionsdatei vom KeePass-Webserver abgerufen; laut FAQ werden dabei **keine personenbezogenen Informationen** aktiv gesendet.
- **Wofür:** Lokale Speicherung/Verwaltung von Zugangsdaten; Update-Check dient Versionsvergleich.
- **Weitergabe/Subprozessoren:** Für die App selbst nicht angegeben (keine Konto-/Cloud-Pflicht). Für die Website gelten die Angaben in „Terms & Privacy“ (z.B. Logfiles/ggf. eingebundene Drittdienste je nach Seite).
- **Drittlandtransfer:** Nicht angegeben (Website-Hinweise siehe „Terms & Privacy“).
- **Zahlungsabwicklung/Payment Processor:** Spenden via **PayPal** oder **Banküberweisung**.
- **Kontakt/DSAR/DPA:** Kontakt-/Imprint-Seite vorhanden (Anbieter nennt Kontaktwege und rechtliche Angaben).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Update-Checks sind eine Option; beim ersten Start fragt KeePass nach Aktivierung (laut FAQ).
- **Abschaltbar?** Ja, in **Tools → Options → tab ‘Advanced’** (FAQ).
- **Wo (Menüpfad):** Tools → Options → Advanced → (Automatic update checks).

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** Nicht angegeben
- **Lösch-/Opt-out-Optionen:** Für die lokale App: Daten liegen bei dir; für Website/Server-Logs siehe Terms & Privacy (keine konkrete Dauer genannt).

**Abwägung am Punkt:** Weniger Netzwerkverkehr (z.B. keine Update-Checks) senkt Metadaten (IP/Access-Logs), aber erhöht den manuellen Aufwand, Updates zeitnah einzuspielen.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** KeePass verschlüsselt die **gesamte Datenbankdatei** (nicht nur Passwortfelder) und unterstützt u.a. **AES-256, ChaCha20, Twofish**.
- **KDF/Parameter/Schlüsselableitung:** Schutz gegen Offline-Angriffe durch Key-Derivation (z.B. **Argon2**, **AES-KDF**; Details in Doku/Release Notes zu Default-Parametern).
- **MFA/2FA/Passkeys/Hardware-Keys:** Kein Konto-Login; zusätzliche Faktoren sind über **Keyfile** und (2.x) **Windows User Account** möglich; weitere Mechanismen können über Plugins existieren (Abwägung: Plugin-Trust).
- **Recovery/Account-Wiederherstellung:** Wenn Master-Passwort/Keyfile/Windows-User-Bindung verloren gehen, ist der Tresor nicht mehr zugänglich (laut Master-Key-Doku gibt es keinen Universal-Key).
- **Vuln-Handling / Security-Kontakt:** Security-Issues-Seite vorhanden; Kontaktseite enthält Hinweise zum Melden von Sicherheitslücken.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Master Key sauber aufsetzen** (starkes Master-Passwort, optional Keyfile).  
   **Wo:** Datei → Change Master Key (Keyfile-Infos in „Master Key“-Doku).  
   **Prüfen:** Datenbank lässt sich nur mit allen Komponenten öffnen.
2) **Auto-Lock & Zwischenablage absichern** (Workspace-Lock + Clipboard auto-clear time).  
   **Prüfen:** Workspace sperrt nach Inaktivität/Events; Zwischenablage leert sich nach Ablauf.
3) **Netzwerkverbindungen minimieren** (Update-Check nach Bedarf) und optional **Screen-Capture-Schutz** aktivieren.  
   **Wo:** Tools → Options → Advanced (Update-Checks), Tools → Options → Security (Prevent certain screen captures).  
   **Prüfen:** kein automatischer Update-Check mehr; Screen-Capture-Option ist sichtbar/aktiv.

**Stolpersteine:**
- **Keyfile + Datenbank nicht am selben Ort** speichern (Abwägung: mehr Aufwand vs. Mehr-Faktor-Schutz).
- Viele mobile/alternative Clients sind **contributed/unofficial** → getrennt prüfen (Abwägung: Ökosystem/Flexibilität vs. abweichende Sicherheitsannahmen).

<details>
<summary>Profil B (Datensparsam)</summary>

- Deaktiviere automatische Update-Checks und führe Updates bewusst manuell aus.  
- Nutze nur die lokale Datenbankdatei und synchronisiere sie über einen von dir kontrollierten Kanal (z.B. eigener WebDAV/Offline-Transfer).
- Vermeide Plugins, wenn du deren Datenflüsse nicht geprüft hast.
**Abwägung:** weniger Komfort (Updates/Sync/Erweiterungen), weniger Metadaten nach außen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze KeePass in einem getrennten System-Kontext (separater OS-User/VM) und halte die Datenbank strikt isoliert.  
- Verwende Master-Passwort + Keyfile, sichere Keyfile separat, und setze striktes Workspace-Locking/Clipboard-Clearing durch.  
- Aktiviere „Prevent certain screen captures“ und arbeite bevorzugt ohne Dritt-Plugins/ohne Auto-Type, wenn dein Bedrohungsmodell Keylogger/Screen-Capture umfasst.
**Abwägung:** hoher Bedienaufwand, mögliche Einschränkungen (Remote-Desktop/Accessibility/Kompatibilität).

</details>

## Features
- Lokale, verschlüsselte Tresor-Datei (KDBX)
- Unterstützt AES-256/ChaCha20/Twofish + KDFs (u.a. Argon2, AES-KDF)
- Master-Passwort, optional Keyfile und/oder Windows-User-Bindung (2.x)
- Auto-Type, Zwischenablage-Timeout, Workspace-Lock
- Option „Prevent certain screen captures“ (2.x)
- Plugin-Architektur; viele Ports/Clients sind contributed/unofficial

## Alternativen
- Bitwarden (Passwort-Manager, Cloud-first; Abwägung: Account/Server-Metadaten vs. Komfort & Geräte-Sync)
- 1Password (Passwort-Manager, kommerziell; Abwägung: proprietäre Infrastruktur vs. Komfort/Recovery)
- Proton Pass (Passwort-Manager, Account-basiert; Abwägung: Konto-Bindung vs. integrierte Sync-Umgebung)

## Nicht gelöst / offene Punkte
- Aufbewahrungsdauer von Website-/Server-Logfiles (z.B. bei Update-Checks) ist in „Terms & Privacy“ nicht konkret beziffert.

## Quellen

- Code-Analyse KeePass 2.x (BSI & mgm security partners), dokumentiert in den KeePass 2.57.1 Release Notes: "https://keepass.info/help/kb/kp_2.57.1_notes.html
- EU-FOSSA 1 Audit (laut Anbieter auf Awards/Ratings verlinkt): "https://keepass.info/ratings.html
- CSPN-Zertifizierung (laut Anbieter auf Awards/Ratings verlinkt): "https://keepass.info/ratings.html
- Bitwarden (Passwort-Manager, Cloud-first; Trade-off: "Account/Server-Metadaten vs. Komfort & Geräte-Sync)
- 1Password (Passwort-Manager, kommerziell; Trade-off: "proprietäre Infrastruktur vs. Komfort/Recovery)
- Proton Pass (Passwort-Manager, Account-basiert; Trade-off: "Konto-Bindung vs. integrierte Sync-Umgebung)
- https://keepass.info/donate.html
- [KeePass Help Center (Überblick)](https://keepass.info/help/base/index.html)
- [Terms & Privacy (Legal Documentation)](https://keepass.info/help/base/terms.html)
- [KeePass Features](https://keepass.info/features.html)
- [Security (Database Encryption)](https://keepass.info/help/base/security.html)
- [Master Key (Passwort/Keyfile/Windows User Account)](https://keepass.info/help/base/keys.html)
- [Technical FAQ (Update-Checks / Internet-Verbindung)](https://keepass.info/help/base/faq_tech.html)
- [Downloads (contributed/unofficial Ports + Source Code Packages)](https://keepass.info/download.html)
- [Security Issues](https://keepass.info/help/base/sec_issues.html)
- [Legal Contact / Imprint](https://keepass.info/help/base/contact.html)
- [KeePass 2.57.1 Release Notes (BSI/mgm Code-Analyse)](https://keepass.info/help/kb/kp_2.57.1_notes.html)
- [KeePass 2.57 Release (Screen-Capture-Option + Abwägung-Hinweis)](https://keepass.info/news/n240601_2.57.html)
- [Donate (PayPal/Überweisung)](https://keepass.info/donate.html)
