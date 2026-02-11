---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / iCloud Mail"
url: "/anbieter/icloud-mail/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-16"
robots: "index,follow"
description: "Kurzprofil von iCloud Mail (Kategorie: E-Mail)."
provider: ""
name: "iCloud Mail"
category: "E-Mail"
website: "https://www.icloud.com/mail"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://www.apple.com/de/legal/privacy/"
terms: "https://www.apple.com/legal/internet-services/icloud/de/terms.html"
transparency: "https://www.apple.com/legal/transparency/"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "no"
self_host_possible: "no"
account_required: "yes"
phone_required: "yes"
kyc_required: "unknown"
jurisdiction: "Irland (Apple Distribution International Ltd.) / USA (Apple Inc.), je nach Region"
region: "us"
logs: "unknown"
retention: "unknown"
retention_notes: "Unklar; Junk/„Gelöscht“ auf iCloud.com: 30 Tage"
retention_max_days: "30"
data_notes: "iCloud Mail ist nicht Ende-zu-Ende verschlüsselt; optional ist S/MIME möglich. Beim Zugriff über iCloud.com kann Apple bestimmte E-Mail-Metadaten (z.B. Absender/Header) für Funktionen wie Kategorisierung verarbeiten."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

iCloud Mail ist ein Anbieter aus der Kategorie **E-Mail**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du E-Mail eng in Apple-Geräten (iPhone/iPad/Mac) nutzen willst und iCloud.com als Webmail brauchst.
- **Weniger geeignet wenn:** du serverseitige Ende-zu-Ende-Verschlüsselung als Muss hast oder keinen Apple-Account als zentrale Identität möchtest.
- **Wichtigster Abwägung:** bequeme Geräte-Integration & Sync vs. Apple-Account-Bindung + iCloud Mail ist **nicht** Ende-zu-Ende verschlüsselt.

## Sofortmaßnahmen
- **„Mail-Aktivität schützen“ aktivieren** → erschwert Tracking über Pixel (IP/„geöffnet“-Signale).
- **„iCloud-Analyse teilen“ deaktivieren** → reduziert Diagnosedaten/Telemetrie, die du an Apple sendest.
- **E-Mail-Kategorisierung auf iCloud.com deaktivieren** → reduziert serverseitige Verarbeitung von Mail-Metadaten im Webmail.

## Entscheidungshilfe
- Wenn du iCloud Mail **auf vielen Apple-Geräten** nutzt, dann aktiviere Mail in iCloud pro Gerät (Abwägung: mehr Sync/Komfort, aber auch mehr Angriffsfläche über mehrere Endpunkte).
- Wenn du iCloud Mail in **Third-Party-Clients (IMAP/SMTP)** verwenden willst, dann nutze App-spezifische Passwörter (Abwägung: zusätzliche Credentials, die widerrufen/verwaltet werden müssen).
- Wenn du **weniger Metadaten-Verarbeitung im Webmail** willst, dann deaktiviere die E-Mail-Kategorisierung auf iCloud.com (Abwägung: keine Kategorie-Ansicht im Web).
- Wenn du Tracking über „Remote Content“ reduzieren willst, dann aktiviere **Mail Privacy Protection** (Abwägung: einige Newsletter/Statistiken können ungenauer werden).
- Wenn du **E2EE auf Provider-Ebene** brauchst, dann ist iCloud Mail dafür nicht ausgelegt (Abwägung: dafür klassische Interoperabilität via IMAP/SMTP).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | iCloud Mail |
| Kategorie | E-Mail |
| Website | https://www.icloud.com/mail |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | yes |
| Telefon erforderlich | yes |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Irland (Apple Distribution International Ltd.) / USA (Apple Inc.), je nach Region |
| Logs | unknown |
| Retention | Unklar; Junk/„Gelöscht“ auf iCloud.com: 30 Tage |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.apple.com/de/legal/privacy/
- AGB/Terms: https://www.apple.com/legal/internet-services/icloud/de/terms.html
- Transparency Report: https://www.apple.com/legal/transparency/
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
iCloud Mail ist nicht Ende-zu-Ende verschlüsselt; optional ist S/MIME möglich. Beim Zugriff über iCloud.com kann Apple bestimmte E-Mail-Metadaten (z.B. Absender/Header) für Funktionen wie Kategorisierung verarbeiten.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Inhalte/Anhänge der E-Mails werden im iCloud-Dienst gespeichert; beim Web-Zugriff kann Apple E-Mail-Metadaten (z.B. Absender/Header-Infos) zur Kategorisierung verarbeiten.
- **Wofür:** Betrieb der iCloud-Dienste (Speichern/Sync) sowie optionale Funktionen (z.B. Mail-Kategorisierung auf iCloud.com, Mail Privacy Protection).
- **Weitergabe/Subprozessoren:** Apple nennt Service Provider allgemein; iCloud-Inhalte können auf Apples **oder** Servern von Drittanbietern gespeichert werden (ohne öffentliche Liste an dieser Stelle).
- **Drittlandtransfer:** Apple beschreibt internationale Verarbeitung/Transfers; für EWR/UK/CH wird die Datenkontrolle i.d.R. Apple Distribution International (Irland) zugeordnet.
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (iCloud+ ist optional; konkrete Zahlungsdienstleister werden nicht als Liste genannt).
- **Kontakt/DSAR/DPA:** Datenschutzrechte laut Apple über privacy.apple.com bzw. Kontaktwege in der Datenschutzrichtlinie.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar (Apple dokumentiert einen Schalter „iCloud-Analyse teilen“).
- **Abschaltbar?** Ja: „iCloud-Analyse teilen“ kann deaktiviert werden.
- **Wo (Menüpfad):** iOS/iPadOS: **Einstellungen → Datenschutz & Sicherheit → Analyse & Verbesserungen → „iCloud-Analyse teilen“**.

**Logs & Retention:**
- **Logging-Level:** unknown
- **Aufbewahrung:** Unklar; in iCloud.com Mail werden Nachrichten in „Gelöscht“ bzw. „Junk“ laut Apple nach **30 Tagen** automatisch entfernt.
- **Lösch-/Opt-out-Optionen:** iCloud-Analyse lässt sich deaktivieren; Mails können über iCloud.com aufgeräumt/gelöscht werden.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** iCloud-Daten werden bei Übertragung verschlüsselt und am Ablageort verschlüsselt gespeichert; iCloud Mail ist **nicht** Ende-zu-Ende verschlüsselt.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Apple-Accounts nutzen Zwei-Faktor-Authentifizierung; dafür wird u.a. eine „vertrauenswürdige Telefonnummer“ beschrieben.
- **Recovery/Account-Wiederherstellung:** Bei aktiviertem „Erweiterten Datenschutz“ (Advanced Data Protection) werden zusätzliche Recovery-Methoden (Recovery Contact / Recovery Key) gefordert; das erhöht Eigenverantwortung bei Account-Recovery.
- **Vuln-Handling / Security-Kontakt:** Apple beschreibt einen offiziellen Meldeweg (Apple Security Research / product-security@apple.com).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (2FA/MFA) im Apple-Account.  
   **Prüfen:** Apple-Account zeigt 2FA aktiv; vertrauenswürdige Telefonnummer(n) hinterlegt.
2) **Mail Privacy Protection aktivieren** („Mail-Aktivität schützen“).  
   **Prüfen:**  
   - iOS/iPadOS: **Einstellungen → Apps → Mail → Datenschutz → „Mail-Aktivität schützen“** = an  
   - iCloud.com: **Einstellungen → Datenschutz & Sicherheit → „Mail-Aktivität schützen“** = an
3) **iCloud-Analyse deaktivieren** + Third-Party-Zugriffe sauber trennen.  
   **Prüfen:**  
   - iOS/iPadOS: **Einstellungen → Datenschutz & Sicherheit → Analyse & Verbesserungen → „iCloud-Analyse teilen“** = aus  
   - Bei IMAP/SMTP-Clients: App-spezifisches Passwort unter **account.apple.com → Anmelden & Sicherheit → App-spezifische Passwörter** genutzt.

**Stolpersteine:**
- **iCloud-Speicher voll** kann iCloud-Funktionen (inkl. Mail) beeinträchtigen (Abwägung: mehr Speicher/Abokosten vs. Zustell-/Sync-Probleme).
- App-spezifische Passwörter müssen bei Gerätewechsel/Client-Änderungen erneuert werden (Abwägung: Sicherheit vs. Wartungsaufwand).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze iCloud.com seltener und bevorzuge die Mail-App auf dem Gerät, wenn du serverseitige Metadaten-Verarbeitung minimieren willst.  
- Deaktiviere **E-Mail-Kategorisierung auf iCloud.com**: **Mail → Einstellungen → E-Mail-Kategorisierung**.  
- Halte Third-Party-Zugriffe klein (nur notwendige Clients; App-spezifische Passwörter regelmäßig prüfen/widerrufen).  
**Abwägung:** weniger Komfort (z.B. Kategorien/Webmail-Features), mehr manuelle Pflege.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Reduziere Web-Angriffsfläche: **„Zugriff auf iCloud-Daten im Web“** deaktivieren (iCloud.com nur temporär freischalten, wenn nötig).  
- Nutze getrennte Geräteprofile/Browserprofile für iCloud.com-Login, um Cross-Context-Leaks zu reduzieren.  
- Wenn du hohe Anforderungen an Vertraulichkeit hast, plane zusätzlich Client-seitige Ende-zu-Ende-Verschlüsselung auf Nachrichtenebene (z.B. S/MIME) als Prozess-Thema ein.  
**Abwägung:** deutlich weniger Komfort, höherer Einrichtung- und Recovery-Aufwand.

</details>

## Features
- Webmail über iCloud.com
- IMAP/SMTP-Zugriff (mit App-spezifischem Passwort bei 2FA)
- Mail Privacy Protection (IP-Adresse verbergen / Open-Tracking erschweren)
- E-Mail-Kategorisierung auf iCloud.com (abschaltbar)
- Eigene E-Mail-Domain mit iCloud+ (optional)

## Alternativen
- [Proton Mail](/anbieter/proton-mail/) – Fokus auf Ende-zu-Ende-Verschlüsselung (Abwägung: stärkerer App-/Account-Workflow, je nach Nutzung weniger klassische IMAP-Workflows)
- [Tuta](/anbieter/tuta/) – Ende-zu-Ende-Verschlüsselung + eigener Client (Abwägung: weniger Standard-IMAP/POP)
- [mailbox.org](/anbieter/mailbox-org/) – klassischer Mailhoster (Abwägung: anderes Jurisdiktions-/Metadatenprofil)
- Eigener Mailserver (Postfix/Dovecot) – volle Kontrolle (Abwägung: hoher Betriebs-, Backup- & Spam-Schutz-Aufwand)

## Nicht gelöst / offene Punkte
- Unklar, ob Apple eine **öffentliche Subprozessorenliste/DPA** speziell für iCloud Mail bereitstellt (über die generellen Angaben hinaus).
- Unklare, **konkret dokumentierte** Aussagen zu Server-Logs und Retention für iCloud Mail (über Ordner-Auto-Löschfristen hinaus).

## Quellen

- Proton Mail – Fokus auf Ende-zu-Ende-Verschlüsselung (Trade-off: "stärkerer App-/Account-Workflow, je nach Nutzung weniger klassische IMAP-Workflows)
- Tuta (Tutanota) – Ende-zu-Ende-Verschlüsselung + eigener Client (Trade-off: "weniger Standard-IMAP/POP)
- mailbox.org – klassischer Mailhoster (Trade-off: "anderes Jurisdiktions-/Metadatenprofil)
- Eigener Mailserver (Postfix/Dovecot) – volle Kontrolle (Trade-off: "hoher Betriebs-, Backup- & Spam-Schutz-Aufwand)
- https://privacy.apple.com/
- [iCloud Mail (Web)](https://www.icloud.com/mail)
- [Apple Datenschutzrichtlinie](https://www.apple.com/de/legal/privacy/)
- [Bedingungen für iCloud](https://www.apple.com/legal/internet-services/icloud/de/terms.html)
- [Sicherheitsüberblick – iCloud-Daten](https://support.apple.com/de-de/102651)
- [Legal – iCloud-Analyse & Datenschutz](https://www.apple.com/legal/privacy/data/de/icloud-analytics/)
- [Legal – E-Mail-Datenschutz & Datenschutz (Mail Privacy Protection)](https://www.apple.com/legal/privacy/data/de/mail-privacy-protection/)
- [Legal – E-Mail-Kategorisierung & Datenschutz](https://www.apple.com/legal/privacy/data/de/mail-categorization/)
- [iCloud Mail auf all deinen Geräten einrichten](https://support.apple.com/de-de/guide/icloud/mmdd8d1d47/icloud)
- [iCloud Mail server settings for other email client apps](https://support.apple.com/en-us/102525)
- [Mit deinem Apple Account bei Apps mit App-spezifischen Passwörtern anmelden](https://support.apple.com/de-de/102654)
- [Report a security or privacy vulnerability](https://support.apple.com/en-us/102549)
- [iCloud Mail Cleanup](https://support.apple.com/de-de/109017)
- [E-Mails löschen und wiederherstellen (iCloud.com)](https://support.apple.com/de-de/109020)
- [Manage web access to your iCloud data](https://support.apple.com/en-us/102630)
- [Apple Transparency Report](https://www.apple.com/legal/transparency/)
- [Apple Data & Privacy Portal](https://privacy.apple.com/)
