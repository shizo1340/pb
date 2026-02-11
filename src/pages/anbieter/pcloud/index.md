---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / pCloud"
url: "/anbieter/pcloud/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von pCloud (Kategorie: Cloud & Sync)."
provider: ""
name: "pCloud"
category: "Cloud & Sync"
website: "https://www.pcloud.com/"
repo: "https://github.com/pcloud"
license: "Nicht angegeben (Kernservice); SDKs: MIT, Apache-2.0"
policies: ""
privacy: "https://www.pcloud.com/privacy_policy.html"
terms: "https://www.pcloud.com/terms_and_conditions.html"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "partial"
self_host_possible: "no"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Schweiz (pCloud International AG)"
region: "ch"
logs: "minimal"
retention: "mid"
retention_notes: "Bis zu 30 Tage nach Account-Schließung (Dateien & persönliche Daten); Free-Accounts: Löschung nach 12 Monaten Inaktivität"
retention_max_days: "30"
data_notes: "E-Mail ist Pflicht für Accounts. Optional: 2FA (Authenticator oder SMS), Datenregion (EU/USA) und clientseitige Verschlüsselung via pCloud Encryption (Crypto Folder)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

pCloud ist ein Anbieter aus der Kategorie **Cloud & Sync**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Cloud-Speicher + Sync mit **Datenregion-Wahl (EU/USA)** und optionaler **clientseitiger Verschlüsselung** für ausgewählte Dateien (Crypto Folder) nutzen willst.
- **Weniger geeignet wenn:** du **durchgehend Zero-Knowledge** für alle Inhalte erwartest, ohne Zusatzfunktion/Ordner-Trennung – oder wenn du eine **Self-Hosting**-Option brauchst.
- **Wichtigster Abwägung:** **Zero-Knowledge** gilt laut Anbieter für den **Crypto Folder** (pCloud Encryption) – dafür ist die **Crypto Passphrase nicht wiederherstellbar** (Recovery-Risiko). Ohne Crypto-Folder bleiben Metadaten/Server-Verarbeitung möglich.

## Sofortmaßnahmen
- **2FA aktivieren:** reduziert Risiko durch Passwort-Leaks (Account-Übernahme).
- **Crypto Folder nur für wirklich sensible Daten nutzen:** trennt Zero-Knowledge-Inhalte von „normalen“ Cloud-Dateien (Abwägung: Passphrase-Verlust = Datenverlust).
- **Datenregion prüfen/planen:** spart spätere Umzüge (Abwägung: Datenregion-Wechsel ist laut Anbieter kostenpflichtig).

## Entscheidungshilfe
- Wenn du **EU-Datenhaltung** möchtest, dann wähle (oder migriere) die **EU-Datenregion** (Abwägung: Zusammenarbeit per „Invite to folder“ ist laut Anbieter nur innerhalb derselben Region möglich).
- Wenn du **Zero-Knowledge** für bestimmte Dateien brauchst, dann nutze **pCloud Encryption / Crypto Folder** (Abwägung: Passphrase kann nicht wiederhergestellt werden).
- Wenn du **kein SMS-basiertes 2FA** willst, dann nutze die **Authenticator-App** als 2FA-Methode (Abwägung: Secret/Backup der Authenticator-Einrichtung liegt bei dir).
- Wenn du ein **Free-Konto selten nutzt**, dann plane ein lokales Backup ein (Abwägung: Free-Accounts werden laut Anbieter nach **12 Monaten Inaktivität** gelöscht).
- Wenn du **wenig Tracking im Browser** willst, dann blockiere Cookies/Tracker im Browser (Abwägung: laut Anbieter können Kernfunktionen beeinträchtigt werden).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | pCloud |
| Kategorie | Cloud & Sync |
| Website | https://www.pcloud.com/ |
| Quellcode | https://github.com/pcloud |
| Lizenz | Nicht angegeben (Kernservice); SDKs: MIT, Apache-2.0 |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Kreditkarte, PayPal, Apple/iTunes (In-App) (nicht abschließend dokumentiert) |
| Jurisdiktion | Schweiz (pCloud International AG) |
| Logs | minimal |
| Retention | Bis zu 30 Tage nach Account-Schließung (Dateien & persönliche Daten); Free-Accounts: Löschung nach 12 Monaten Inaktivität |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.pcloud.com/privacy_policy.html
- AGB/Terms: https://www.pcloud.com/terms_and_conditions.html
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- ISO 27001:2013 (ISMS) Zertifizierung (laut Anbieter)
- ISO 9001:2015 (QMS) Zertifizierung (laut Anbieter)

**Daten-Notizen (kurz):**
E-Mail ist Pflicht für Accounts. Optional: 2FA (Authenticator oder SMS), Datenregion (EU/USA) und clientseitige Verschlüsselung via pCloud Encryption (Crypto Folder).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** E-Mail-Adresse als Pflichtfeld für Accounts; zusätzlich u.a. Nutzungs-/Geräteinformationen (z.B. IP-Adresse, Browser/OS/Device-Daten) sowie Cookies/Tracking-Technologien.  
- **Wofür:** Betrieb der Dienste, Account/Service-Funktionen sowie Verbesserungen/Statistik (laut Privacy Policy).
- **Weitergabe/Subprozessoren:** Weitergabe an Dienstleister/„Service Providers“ wird beschrieben, eine öffentliche Subprozessorenliste ist nicht klar ersichtlich.
- **Drittlandtransfer:** Datenregion-Konzept: EU (Luxemburg) oder USA (Dallas, Texas); Transferdetails darüber hinaus sind in der Privacy Policy nicht als feste Liste dokumentiert.
- **Zahlungsabwicklung/Payment Processor:** Rechnungs-/Zahlungsdaten fallen bei kostenpflichtigen Plänen an (z.B. Name/Land für Invoicing); konkrete Payment-Provider sind nicht zentral in einer Stelle aufgelistet.
- **Kontakt/DSAR/DPA:** Privacy-Kontakt: privacy@pcloud.com (laut „Privacy options“/Privacy Policy).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy werden automatisch Nutzungs-/Gerätedaten und Cookies/Tracking-Technologien verarbeitet.
- **Abschaltbar?** Cookies/Tracking können im Browser blockiert werden; App-interne Telemetrie-Optionen sind nicht klar dokumentiert.
- **Wo (Menüpfad):** Browser: Cookie-/Tracking-Blocker; Account: Kommunikationspräferenzen in den Account settings (Marketing-Opt-out).

**Logs & Retention:**
- **Logging-Level:** minimal (Nutzungs-/Device-Daten + Account-bezogene Ereignisse werden beschrieben)
- **Aufbewahrung:** bis zu 30 Tage nach Account-Schließung für vollständige Löschung von Dateien & persönlichen Daten; Free-Accounts: Löschung nach 12 Monaten Inaktivität (laut Help Center)
- **Lösch-/Opt-out-Optionen:** Account kann über Account settings gelöscht werden („Delete Your Account“); 2FA-Telefonnummer wird nach Deaktivierung von 2FA gelöscht (laut „Privacy options“).

**Abwägung am Punkt:** Weniger Telemetrie (z.B. Cookie-Block) kann Funktionen einschränken; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Standard: AES-256 + TLS/SSL für gespeicherte Dateien und Übertragung (laut Help Center). Optional: clientseitige Verschlüsselung via pCloud Encryption/Crypto Folder (laut Terms/Help Center).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA vorhanden (Authenticator-App oder SMS/Systembenachrichtigungen) + Recovery Codes; Passkeys/Hardware-Keys nicht dokumentiert.
- **Recovery/Account-Wiederherstellung:** 2FA-Recovery Codes (10 Einmalcodes laut Help Center). Für Crypto Folder gilt: Crypto Passphrase kann nicht wiederhergestellt werden (laut Terms/Help Center).
- **Vuln-Handling / Security-Kontakt:** Kein zentraler Disclosure-Prozess in den verwendeten Primärquellen gefunden.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **2FA aktivieren (Authenticator bevorzugen)**  
   **Menüpfad:** my.pCloud → **Einstellungen** → **Sicherheit** → **Zwei-Faktor-Authentifizierung einschalten**  
   **Prüfen:** 2FA „aktiv“, Recovery Codes gespeichert; „Trusted device“-Option bewusst nutzen (30 Tage laut Help Center).
2) **Datenregion prüfen (EU/USA)**  
   **Menüpfad:** my.pCloud → **Account settings** (Datenregion-Info laut Help Center)  
   **Prüfen:** Region angezeigt; falls Umzug nötig: Hinweis, dass der Wechsel **kostenpflichtig** ist (laut Help Center).
3) **Crypto Folder für sensible Dateien aktivieren** (nur falls benötigt)  
   **Prüfen:** Crypto Folder vorhanden; **Crypto Passphrase sicher gespeichert** (Passphrase nicht wiederherstellbar).

**Stolpersteine:**
- **Crypto Passphrase verloren = kein Zugriff auf Crypto-Dateien** (Abwägung: Zero-Knowledge vs. Recovery).
- **2FA per SMS** braucht Telefonnummer; Authenticator reduziert diese Bindung (Abwägung: Authenticator-Backup liegt bei dir).
- **Zusammenarbeit** per „Invite to folder“ ist laut Anbieter nur möglich, wenn beide Accounts in derselben Datenregion sind.

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **Authenticator-2FA** statt SMS (reduziert Telefonbindung).
- Vermeide optionale **Third-Party-Account-Verknüpfungen** (Linked Accounts) sofern nicht nötig.
- Blockiere/limitiere **Cookies/Tracker** im Browser (Abwägung: mögliche Funktionseinschränkungen laut Anbieter).
- Backup-Strategie: Für wichtige Daten regelmäßig **lokal exportieren** (Abwägung: mehr Eigenaufwand).

**Abwägung:** weniger Komfort (Sharing/Onboarding/Tracking), dafür weniger Metadaten und weniger optionale Identitätsbindung.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne Nutzung strikt: eigenes Gerät/Profil nur für pCloud-Account (Isolation).
- Lege sensible Daten ausschließlich im **Crypto Folder** ab und nutze separate Identitäten/Accounts für Sharing.
- Vermeide „Trusted devices“ auf gemeinsam genutzten Systemen (Abwägung: häufigere 2FA-Abfragen).
- Beschränke Teilen/Links auf das Nötigste und prüfe Link-Statistiken/Sharing-Übersichten regelmäßig.

**Abwägung:** hoher Aufwand, mögliche Einschränkungen beim Teilen/Arbeiten über Geräte hinweg.

</details>

## Features
- Datenregion EU (Luxemburg) oder USA (Dallas, Texas) wählbar; Umzug der Datenregion ist möglich (kostenpflichtig)
- Transport/At-Rest-Schutz laut Anbieter: TLS/SSL + AES-256 für gespeicherte Dateien
- Optional: clientseitige Verschlüsselung (pCloud Encryption / Crypto Folder, Zero-Knowledge laut Anbieter)
- 2FA (Authenticator-App oder SMS/Systembenachrichtigungen) + Recovery Codes
- Extended File History (bis zu 365 Tage) / Rewind (laut Anbieter)
- Offline-Nutzung über Apps möglich (laut Anbieter)

## Alternativen
- Nextcloud (Self-Hosting möglich; Abwägung: eigener Betrieb/Updates/Backups)
- Syncthing (direkte Gerät-zu-Gerät-Synchronisation; Abwägung: kein zentraler Cloud-Account, Verfügbarkeit an Geräte gekoppelt)
- Tresorit (Cloud mit Fokus auf clientseitige Verschlüsselung; Abwägung: anderes Preismodell/Ökosystem)
- Proton Drive (Cloud & Account-Ökosystem; Abwägung: andere Metadaten-/Sharing-Mechaniken)
- MEGA (Cloud mit clientseitiger Verschlüsselung; Abwägung: anderes Trust-/Jurisdiktionsprofil)

## Nicht gelöst / offene Punkte
- Öffentliche Liste von **Subprozessoren** und/oder ein **DPA** ist nicht eindeutig auffindbar.
- App-seitige **Telemetrie/Diagnosedaten** (außer Cookie-/Tracking-Hinweisen) sind nicht klar dokumentiert.
- Ein klarer **Vulnerability-Disclosure-Prozess** (Security-Seite/SECURITY.md) ist nicht bestätigt.

## Quellen

- ISO 27001: "2013 (ISMS) Zertifizierung (laut Anbieter)
- ISO 9001: "2015 (QMS) Zertifizierung (laut Anbieter)
- Transport/At-Rest-Schutz laut Anbieter: "TLS/SSL + AES-256 für gespeicherte Dateien
- Optional: "clientseitige Verschlüsselung (pCloud Encryption / Crypto Folder, Zero-Knowledge laut Anbieter)
- Nextcloud (Self-Hosting möglich; Trade-off: "eigener Betrieb/Updates/Backups)
- Syncthing (direkte Gerät-zu-Gerät-Synchronisation; Trade-off: "kein zentraler Cloud-Account, Verfügbarkeit an Geräte gekoppelt)
- Tresorit (Cloud mit Fokus auf clientseitige Verschlüsselung; Trade-off: "anderes Preismodell/Ökosystem)
- Proton Drive (Cloud & Account-Ökosystem; Trade-off: "andere Metadaten-/Sharing-Mechaniken)
- MEGA (Cloud mit clientseitiger Verschlüsselung; Trade-off: "anderes Trust-/Jurisdiktionsprofil)
- https://github.com/pcloud
- [pCloud – Privacy Policy](https://www.pcloud.com/privacy_policy.html)
- [pCloud – Terms and Conditions](https://www.pcloud.com/terms_and_conditions.html)
- [pCloud – Privacy options](https://www.pcloud.com/help/privacy.html)
- [pCloud Help – Wie kann ich die Zwei-Faktor-Authentifizierung einrichten?](https://www.pcloud.com/de/help/general-help-center/how-can-i-set-up-two-factor-authentication)
- [pCloud Help – What is two-factor authentication?](https://www.pcloud.com/help/general-help-center/what-is-two-factor-authentication)
- [pCloud Help – How are my files secured if I'm not subscribed to pCloud Encryption?](https://www.pcloud.com/help/general-help-center/how-are-my-files-secured-if-im-not-subscribed-to-pcloud-encryption)
- [pCloud Help – What is pCloud Encryption?](https://www.pcloud.com/help/general-help-center/what-is-pcloud-encryption)
- [pCloud Help – What happens to my account if I don't use it for a long time?](https://www.pcloud.com/help/general-help-center/what-happens-to-my-account-if-i-dont-use-it-for-a-long-time)
- [pCloud Help – Can I change the data region of my account?](https://www.pcloud.com/help/general-help-center/can-i-change-the-data-region-of-my-account)
- [pCloud – Certification](https://www.pcloud.com/company/certification.html)
- [pCloud – Data regions](https://www.pcloud.com/data-regions/)
- [pCloud Open Source (GitHub-Organisation)](https://github.com/pcloud)
- [pCloud/pcloud-sdk-js (MIT)](https://github.com/pCloud/pcloud-sdk-js)
