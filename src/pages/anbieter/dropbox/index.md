---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Dropbox"
url: "/anbieter/dropbox/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-11"
robots: "index,follow"
description: "Kurzprofil von Dropbox (Kategorie: Cloud & Sync)."
provider: ""
name: "Dropbox"
category: "Cloud & Sync"
website: "https://www.dropbox.com/"
repo: "https://github.com/dropbox"
license: "Nicht angegeben (proprietär)"
policies: ""
privacy: "https://www.dropbox.com/privacy"
terms: "https://www.dropbox.com/terms"
transparency: "https://help.dropbox.com/transparency"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "partial"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA (Dropbox, Inc.) / Irland (Dropbox International Unlimited Company)"
region: "us"
logs: "unknown"
retention: "specified"
retention_notes: "Kontobezogen; Löschprozess nach Account-Löschung startet nach ~30 Tagen (laut Privacy Policy). Wiederherstellung gelöschter Dateien je nach Plan/Zusatzfunktion zeitlich begrenzt."
data_notes: "Cloud-Speicher mit Sync/Sharing: Metadaten (z.B. Geräte-/Nutzungsinfos) fallen an. Standardmäßig keine durchgehend Zero-Knowledge-E2E für alle Inhalte; für Teams sind E2E-Optionen für bestimmte Ordner beschrieben."
features: ""
alternatives: ""
payment_processors: "Kredit-/Debitkarte, PayPal, SEPA-Lastschrift (teils auch In-App via Apple/Google, je nach Kaufweg)"
sources: ""
---
## Kurzprofil

Dropbox ist ein Anbieter aus der Kategorie **Cloud & Sync**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Cloud-Sync + Sharing brauchst und Kontoschutz (2FA, Geräteverwaltung) sauber umsetzen willst.
- **Weniger geeignet wenn:** du für alle Inhalte standardmäßig **Zero-Knowledge/Ende-zu-Ende** erwartest, ohne Zusatz-Einrichtung.
- **Wichtigster Abwägung:** Komfort (Sync/Sharing/Recovery) vs. Metadaten + fehlende durchgehende E2E-Verschlüsselung im Standardbetrieb.

## Sofortmaßnahmen
- **2FA inkl. Security Keys aktivieren:** reduziert Kontoübernahmen bei Passwort-Leaks.
- **Geräte & Sessions prüfen und alte Logins entfernen:** reduziert „vergessene“ Zugriffe.
- **Mobile App mit Passcode + Face ID/Touch ID sperren:** schützt bei Gerätezugriff durch Dritte.

## Entscheidungshilfe
- Wenn du auf vielen Geräten arbeitest, dann nutze **Geräte-/Session-Verwaltung** und logge alte Geräte aus (Abwägung: ggf. erneutes Einloggen nötig).
- Wenn du Links teilst, dann nutze **restriktive Freigaben** (z.B. nur für bestimmte Personen/Teams, wenn verfügbar) (Abwägung: mehr Koordinationsaufwand).
- Wenn du sensible Dateien ablegst, dann verschlüssele **vor dem Upload** clientseitig (Abwägung: weniger Komfort bei Vorschau/Web-Editing).
- Wenn du Recovery brauchst (Versionen/Wiederherstellung), dann beachte **planabhängige Aufbewahrungsfenster** (Abwägung: längere Historie kann mehr gespeicherte Daten bedeuten).
- Wenn du möglichst wenig Web-Tracking willst, dann prüfe **Cookie-/Web-Tracking-Einstellungen** auf der Website (Abwägung: ggf. eingeschränkte Komfortfunktionen auf Webseiten).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Dropbox |
| Kategorie | Cloud & Sync |
| Website | https://www.dropbox.com/ |
| Quellcode | https://github.com/dropbox |
| Lizenz | Nicht angegeben (proprietär) |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Kredit-/Debitkarte, PayPal, SEPA-Lastschrift (teils auch In-App via Apple/Google, je nach Kaufweg) |
| Jurisdiktion | USA (Dropbox, Inc.) / Irland (Dropbox International Unlimited Company) |
| Logs | unknown |
| Retention | Kontobezogen; Löschprozess nach Account-Löschung startet nach ~30 Tagen (laut Privacy Policy). Wiederherstellung gelöschter Dateien je nach Plan/Zusatzfunktion zeitlich begrenzt. |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.dropbox.com/privacy
- AGB/Terms: https://www.dropbox.com/terms
- Transparency Report: https://help.dropbox.com/transparency
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- SOC 3 Report (PDF): https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/business/trust/soc/dropbox-soc-3.pdf
- SOC 1/SOC 2 sowie ISO-Zertifikate (Download/Request im Trust Center): https://trust.dropbox.com/

**Daten-Notizen (kurz):**
Cloud-Speicher mit Sync/Sharing: Metadaten (z.B. Geräte-/Nutzungsinfos) fallen an. Standardmäßig keine durchgehend Zero-Knowledge-E2E für alle Inhalte; für Teams sind E2E-Optionen für bestimmte Ordner beschrieben.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** u.a. Konto-/Profildaten, Nutzungs- und Geräteinformationen (inkl. Online-Identifier/IP; teils Geolokationsbezug), Cookies/Tracking-Technologien; außerdem Inhalte und Metadaten im Rahmen des Dienstbetriebs.
- **Wofür:** Betrieb, Bereitstellung, Schutz und Verbesserung der Services (laut Privacy Policy/FAQ).
- **Weitergabe/Subprozessoren:** Subprozessoren werden benannt (öffentliche Sub-processor List); zusätzlich Dienstleisterverarbeitung nach DPA/Trust Center.
- **Drittlandtransfer:** möglich (Subprozessorenliste enthält u.a. US-Unternehmen; Details über vertragliche Mechanismen siehe DPA).
- **Zahlungsabwicklung/Payment Processor:** Zahlungsarten laut Billing-Doku (Karte/PayPal/SEPA; ggf. In-App via Apple/Google je nach Kaufweg). Konkrete Processor-Namen sind nicht durchgehend öffentlich benannt.
- **Kontakt/DSAR/DPA:** DSAR über „Privacy“-Tab im Konto oder per Online-Form; Kontakt u.a. via privacy@dropbox.com; DPA als PDF verfügbar.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Es fallen „Usage information“, „Device information“ sowie Cookies/ähnliche Technologien an (laut Privacy Policy/FAQ).
- **Abschaltbar?** Für Web-Tracking ist Cookie-Steuerung relevant; für App-/Service-Nutzungsdaten ist kein pauschaler „Telemetry Off“-Schalter in den zentralen Hilfeseiten eindeutig beschrieben.
- **Wo (Menüpfad):** Web: Avatar → **Settings** → **Privacy** (u.a. DSAR/Reports); Website: Cookie-/Tracking-Einstellungen über Cookie-Hinweise/Preferences.

**Logs & Retention:**
- **Logging-Level:** unknown
- **Aufbewahrung:** Konto-/Datenlöschung startet nach ~30 Tagen nach Account-Löschung (Privacy Policy). Gelöschte Dateien sind je nach Plan für einen begrenzten Zeitraum wiederherstellbar (Help Center).
- **Lösch-/Opt-out-Optionen:** Kontodaten: über Privacy-Tab/DSR; Inhalte: über Löschen/Restore-Funktionen; Marketing-/Nicht-Konto-Daten über Privacy-Optionen/DSR (laut Trust Center/Privacy Whitepaper).

**Abwägung am Punkt:** Weniger Tracking erhöht Privatsphäre; kann aber Website-/Support-Diagnosen und Produkt-Optimierung erschweren.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Dateien werden laut Doku **bei Speicherung (AES-256)** und **bei Transport (SSL/TLS)** geschützt; E2E/Zero-Knowledge wird als Option für Teams/Bestandteile beschrieben, nicht als Standard für alle Inhalte.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA verfügbar; Security Keys werden beschrieben.
- **Recovery/Account-Wiederherstellung:** Passwort-Reset möglich; Geräte/Sessions/Apps können remote ausgeloggt werden (Security-Tab).
- **Vuln-Handling / Security-Kontakt:** security.txt nennt Bug-Bounty/VDP-Links und Kontaktadresse.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **2FA aktivieren (inkl. Security Keys, falls verfügbar)**  
   **Menüpfad:** dropbox.com → Avatar → **Settings** → **Security** → **2-factor authentication**  
   **Prüfen:** Status „On/Enabled“ + Backup-Optionen/Keys sichtbar.
2) **Mobile App sperren (Passcode + Face ID/Touch ID)**  
   **Menüpfad (Mobile):** Dropbox App → Account/Person-Icon → Zahnrad → **Passcode Lock** → aktivieren  
   **Prüfen:** App fordert nach Sperre/Neustart Code/Biometrie.
3) **Geräte & Sessions aufräumen (Remote Sign-out)**  
   **Menüpfad:** dropbox.com → Avatar → **Settings** → **Security** → **Devices**  
   **Prüfen:** alte Geräte entfernt, unbekannte Sessions abgemeldet.

**Stolpersteine:**
- Wiederherstellung/Versionsverlauf ist planabhängig und zeitlich begrenzt (Abwägung: Komfort vs. klare Löschfenster).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Clientseitig verschlüsseln vor Upload** (z.B. Container/Folder-Verschlüsselung) und nur Ciphertext in Dropbox ablegen.  
- **Sharing reduzieren:** nur gezielt teilen, alte Freigaben regelmäßig prüfen.  
- **Privacy-/DSR-Optionen nutzen:** über Privacy-Tab Berichte/Anfragen stellen.  
**Abwägung:** weniger Komfort (Web-Vorschau, Kollaboration, Suche).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Getrennte Identitäten/Umgebungen:** separates OS-/Browser-Profil oder dedizierter Nutzerkontext für Dropbox.  
- **Minimale lokale Spuren:** Offline-Dateien sparsam verwenden; Mobile: Passcode + Geräteverschlüsselung zwingend.  
- **Striktes Sharing-Modell:** Links vermeiden, wenn möglich nur gezielte Einladungen.  
**Abwägung:** mehr Aufwand, weniger Flexibilität bei Zusammenarbeit/Sharing.

</details>

## Features
- Cloud-Speicher + Dateisynchronisation (Desktop/Mobile/Web)
- Teilen von Dateien/Ordnern (Links, Berechtigungen je nach Plan)
- Versionsverlauf & Wiederherstellung gelöschter Dateien (zeitlich begrenzt, planabhängig)
- 2FA inkl. Security Keys (Web-Konto) + Geräte-/Session-Übersicht
- App-Passcode + Face ID/Touch ID (Mobile)
- Verschlüsselung bei Transport & Speicherung (AES/TLS laut Doku)

## Alternativen
- Nextcloud (Self-Hosting möglich; Abwägung: eigener Betrieb/Updates)
- Google Drive / OneDrive / iCloud Drive (Ökosystem-Integration; Abwägung: Anbieterbindung/Telemetrie)
- Tresorit / Proton Drive (Fokus auf Client-seitige Verschlüsselung; Abwägung: Funktionsumfang/Kompatibilität je nach Workflow)
- Syncthing (Peer-to-Peer ohne Cloud; Abwägung: Einrichtung/Erreichbarkeit, kein zentraler Web-Share wie typische Clouds)

## Nicht gelöst / offene Punkte
- Unklar: Ob und wie sich **Diagnosedaten/Telemetry der Desktop- und Mobile-Apps** zentral abschalten lassen (öffentlich dokumentiert).

## Quellen

- SOC 3 Report (PDF): "https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/business/trust/soc/dropbox-soc-3.pdf
- SOC 1/SOC 2 sowie ISO-Zertifikate (Download/Request im Trust Center): "https://trust.dropbox.com/
- Nextcloud (Self-Hosting möglich; Trade-off: "eigener Betrieb/Updates)
- Google Drive / OneDrive / iCloud Drive (Ökosystem-Integration; Trade-off: "Anbieterbindung/Telemetrie)
- Tresorit / Proton Drive (Fokus auf Client-seitige Verschlüsselung; Trade-off: "Funktionsumfang/Kompatibilität je nach Workflow)
- Syncthing (Peer-to-Peer ohne Cloud; Trade-off: "Setup/Erreichbarkeit, kein zentraler Web-Share wie typische Clouds)
- https://help.dropbox.com/billing/sepa-direct-debit
- [Dropbox Privacy Policy](https://www.dropbox.com/privacy)
- [Dropbox Terms of Service](https://www.dropbox.com/terms)
- [Transparency Report (Help Center)](https://help.dropbox.com/transparency)
- [Privacy Policy FAQ (Usage/Device/Cookies)](https://help.dropbox.com/security/privacy-policy-faq)
- [Dropbox Sub-processor List](https://subprocessor.dropbox-legal.com/subprocessorlist.html)
- [Data Processing Agreement (DPA)](https://assets.dropbox.com/documents/en/legal/dfb-data-processing-agreement.pdf)
- [How Dropbox keeps your files secure (AES/TLS)](https://help.dropbox.com/security/how-security-works)
- [2-factor authentication (inkl. Security Keys)](https://help.dropbox.com/account-access/enable-2-factor-authentication)
- [View devices & log out remotely](https://help.dropbox.com/security/device-list-remote-sign-out)
- [Set a passcode on phone/tablet](https://help.dropbox.com/security/passcode-phone-tablet)
- [Face ID / Touch ID (iOS)](https://help.dropbox.com/installs/ios-touch-id)
- [Delete a Dropbox file or folder (Restore-Fenster)](https://help.dropbox.com/delete-restore/delete-files)
- [Trust Center (Compliance/ISO/SOC Infos)](https://trust.dropbox.com/)
- [SOC 3 Report (PDF)](https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/business/trust/soc/dropbox-soc-3.pdf)
- [security.txt (Bug Bounty/VDP Kontakt)](https://www.dropbox.com/.well-known/security.txt)
- [Billing: Update billing information (Payment-Arten erwähnt)](https://help.dropbox.com/billing/change-information)
- [SEPA Direct Debit](https://help.dropbox.com/billing/sepa-direct-debit)
