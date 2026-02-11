---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Threema"
url: "/anbieter/threema/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-13"
robots: "index,follow"
description: "Kurzprofil von Threema (Kategorie: Messenger)."
provider: ""
name: "Threema"
category: "Messenger"
website: "https://threema.com/"
repo: "https://github.com/threema-ch"
license: "AGPL-3.0-only"
policies: ""
privacy: "https://threema.com/en/privacy_policy/private/extended"
terms: "https://threema.com/en/tos"
transparency: "https://threema.com/en/transparency-report"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "no"
open_source: "yes"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Schweiz"
region: "ch"
logs: "minimal"
retention: "long"
retention_notes: "u.a. Push-Token bis 180 Tage; Kauf-/Lizenzdaten i.d.R. bis 30 Tage; Support-Log bis zur Auswertung (Details: Privacy Policy)"
retention_max_days: "180"
data_notes: "Threema setzt auf Ende-zu-Ende-Verschlüsselung; serverseitig fallen v.a. technische Metadaten (z.B. Threema-ID, Public Key, Push-Token) an. Telefonnummer/E-Mail sind optional verknüpfbar."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Threema ist ein Anbieter aus der Kategorie **Messenger**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen Messenger nutzen willst, der ohne Telefonnummer-Registrierung funktioniert und dessen Clients laut Anbieter Open Source sind.
- **Weniger geeignet wenn:** du einen vollständig kostenlosen Messenger suchst oder wenn Zahlungen/Store-Konten als Metadaten-Risiko für deinen Use-Case kritisch sind.
- **Wichtigster Abwägung:** **Benachrichtigungen/Komfort vs. Drittanbieter-Push (Apple/Google) & technische Metadaten** (z.B. Push-Token, Last-Login).

## Sofortmaßnahmen
- **App-Lock aktivieren** (PIN/Biometrie), damit Chats bei kurzzeitigem Gerätezugriff nicht sofort lesbar sind.
- **Android: Master Key Passphrase setzen**, damit lokale App-Daten zusätzlich geschützt werden (Abwägung: Eingabe nach jedem Gerätestart).
- **Keine Telefonnummer/E-Mail verknüpfen**, wenn du Identitätsbindung reduzieren willst (Abwägung: weniger Komfort bei Kontaktabgleich/Recovery).

## Entscheidungshilfe
- Wenn du **ohne Telefonnummer** starten willst, dann erstelle eine Threema-ID ohne Verknüpfung von Telefon/E-Mail (Abwägung: weniger Komfort bei Kontaktfindung).
- Wenn du **Kontaktmetadaten reduzieren** willst, dann lasse die **Adressbuch-Synchronisierung deaktiviert** (Abwägung: Kontakte müssen manuell hinzugefügt/verifiziert werden).
- Wenn du **lokalen Geräteschutz** erhöhen willst, dann nutze **App-Lock** und (Android) eine **Master Key Passphrase** (Abwägung: mehr Reibung im Alltag).
- Wenn du **ohne Google-Konto** auf Android arbeiten willst, dann nutze Kauf/Download über **Threema Shop** oder **Threema Libre via F-Droid** (Abwägung: Installation/Updates laufen nicht über den Play Store).
- Wenn du **Organisationen/Teams** absichern willst, dann ist **Threema Work/OnPrem** als separates Produkt relevant (Abwägung: Lizenzierung & Admin-Aufwand).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Threema |
| Kategorie | Messenger |
| Website | https://threema.com/ |
| Quellcode | https://github.com/threema-ch |
| Lizenz | AGPL-3.0-only |
| Preismodell | mixed |
| Free Tier | no |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | App Stores (Apple/Google/Huawei) oder Threema Shop (Datatrans, laut Shop-Privacy) |
| Jurisdiktion | Schweiz |
| Logs | minimal |
| Retention | u.a. Push-Token bis 180 Tage; Kauf-/Lizenzdaten i.d.R. bis 30 Tage; Support-Log bis zur Auswertung (Details: Privacy Policy) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://threema.com/en/privacy_policy/private/extended
- AGB/Terms: https://threema.com/en/tos
- Transparency Report: https://threema.com/en/transparency-report
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- 2024: Cure53 – Threema Desktop App (Audit Report): https://threema.com/assets/6-resources/audits/3ma-03-report.v3.pdf
- 2023: Security Analysis „Ibex“ Protocol (PDF): https://threema.com/assets/6-resources/audits/security_analysis_ibex_2023.pdf
- 2020: Cure53 – Mobile Apps (PDF): https://threema.com/assets/6-resources/audits/2020_cure53_audit_mobile_apps.pdf
- 2019: FH Münster – Security Audit (PDF): https://threema.com/press-files/2_documentation/security_audit_report_threema_2019.pdf

**Daten-Notizen (kurz):**
Threema verarbeitet laut Privacy Policy v.a. technische Daten zur Zustellung (z.B. Threema-ID, Public Key, Push-Token, Last-Login). Inhalte sind Ende-zu-Ende-verschlüsselt; Telefonnummer/E-Mail sind optional.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** u.a. Threema-ID, Public Key, Erstellungsdatum/Last-Login, Push-Token (je nach Plattform), optionale Verknüpfung von Telefonnummer/E-Mail (als Hash/vergleichbare Ableitung beschrieben), sowie optional bereitgestellte Support-/Debug-Infos (Privacy Policy/FAQ).
- **Wofür:** Betrieb der Messenger-Infrastruktur (Zustellung), optionale Komfortfunktionen (z.B. Kontaktabgleich), Support/Fehleranalyse (optional).
- **Weitergabe/Subprozessoren:** je nach Funktion (z.B. Push-Services, optionale Telefon-/E-Mail-Verifizierung, Website/Shop-Captcha); Details sind in den Threema-Policies/Support-Seiten beschrieben.
- **Drittlandtransfer:** Nicht angegeben (einzelne Dienstleister können global operieren; Details/Angaben stehen in den jeweiligen Policy-Abschnitten).
- **Zahlungsabwicklung/Payment Processor:** App Stores (plattformabhängig) oder Threema Shop (u.a. Datatrans laut Shop-Privacy).
- **Kontakt/DSAR/DPA:** Kontakt/Datenschutz-Anlaufstellen sind in den Policies genannt; für Business gibt es eine DPA-Seite (Company-Navigation).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nicht angegeben (Privacy/Support nennen v.a. technische Zustelldaten und optionale Support-Logs).
- **Abschaltbar?** Teilweise: einige Funktionen sind optional (z.B. Telefonnummer/E-Mail-Verknüpfung, Adressbuch-Sync; Support-Log nur bei aktiver Übermittlung).
- **Wo (Menüpfad):** je nach Plattform/Option; im Zweifel in der Threema-App unter „Einstellungen“ nach „Sicherheit“, „Datenschutz“, „Synchronisierung“ suchen.

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** u.a. Push-Token bis 180 Tage; Kauf-/Lizenzdaten i.d.R. bis 30 Tage; Support-Log bis zur Auswertung (laut Privacy Policy/Support-Hinweisen).
- **Lösch-/Opt-out-Optionen:** Telefonnummer/E-Mail-Verknüpfung ist optional und widerrufbar; Support-Log wird nur nach aktivem Teilen verarbeitet (Details in den Policies/FAQ).

**Abwägung am Punkt:** Weniger Telemetrie/Metadaten reduziert Angriffs- und Auswertungsfläche, kann aber Diagnose/Support (und teils Komfortfunktionen wie Kontaktabgleich) erschweren.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Threema beschreibt Ende-zu-Ende-Verschlüsselung für Kommunikation; zusätzlich ist lokale Speicherung auf dem Gerät verschlüsselt (FAQ „crypto-local“).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (in FAQ/Whitepaper beschrieben; Details über „Cryptography Whitepaper“).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben (Threema nutzt kein klassisches „Account-Login“ mit 2FA; Schutz erfolgt über Geräte-/App-Sperren und Schlüsselmaterial der Threema-ID).
- **Recovery/Account-Wiederherstellung:** Threema-ID/Backups sind relevant (z.B. Threema Safe/ID-Export, siehe Support); Abwägung: Backup/Recovery erhöht Verantwortung auf Nutzerseite.
- **Vuln-Handling / Security-Kontakt:** Laut FAQ gibt es regelmäßige externe Audits und ein Bug-Bounty-Programm; Open-Source-Seite verweist auf einen Security-Kontakt.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **App-Lock aktivieren** (PIN/Biometrie, falls verfügbar).  
   **Prüfen:** App verlangt PIN/Biometrie nach Sperre bzw. nach App-Wechsel.
2) **Android: lokale Zusatzabsicherung aktivieren** (Master Key Passphrase, falls genutzt).  
   **Prüfen:** nach Geräte-Neustart wird Passphrase abgefragt.
3) **Keine optionalen Identitäts-Links setzen**, falls nicht nötig (Telefon/E-Mail).  
   **Prüfen:** Profil zeigt keine verknüpften Identitätsdaten.

**Stolpersteine:**
- Push-/Zustellmechanismen können Drittanbieter (z.B. Plattform-Push) involvieren (Abwägung: Zuverlässige Benachrichtigungen vs. Metadaten).
- Backups/Recovery brauchen Disziplin (Abwägung: Wiederherstellbarkeit vs. zusätzliche Angriffsfläche/Metadaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Adressbuch-Synchronisierung deaktiviert lassen** (nur manuelle Kontakte/QR-Verifikation).  
- **Threema Libre (F-Droid) prüfen**, wenn du proprietäre Abhängigkeiten auf Android reduzieren willst (Lizenz aus Threema Shop nötig).  
- **Backup-Strategie bewusst wählen:** nur wenn nötig Threema Safe/ID-Export nutzen und Backup sicher lagern.

**Abwägung:** weniger Komfort (Kontaktfindung/Notifications/Einrichtung) und mehr Eigenverantwortung bei Wiederherstellung.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Getrennte Geräte-/Profilnutzung** (z.B. eigener Nutzer/Work Profile) für Messenger-Identität.  
- **Minimale App-Berechtigungen** (z.B. Kontakte nur, wenn Kontaktabgleich wirklich gebraucht wird).  
- **Benachrichtigungen bewusst behandeln** (Push reduziert Metadaten nicht automatisch; ggf. nur bei Bedarf aktiv).

**Abwägung:** deutlicher Komfortverlust, höhere Komplexität, mehr Fehlkonfigurationsrisiko.

</details>

## Features
- Ende-zu-Ende-verschlüsselte Einzel- und Gruppenchats, inklusive Medien und Status
- Sprach- und Videoanrufe (laut Support/FAQ als Teil der umfassenden Verschlüsselung beschrieben)
- Nutzung ohne Telefonnummer (Telefon/E-Mail optional verknüpfbar)
- QR-basierte Kontaktverifikation (Vertrauensstufen)
- App-Lock (PIN/Biometrie) und verschlüsselte lokale Speicherung (Android AES-256; iOS Data Protection)
- Open Source (Clients) unter AGPLv3; Audit-Reports und Bug-Bounty laut Anbieter verfügbar
- Threema Shop / F-Droid (Threema Libre) als Optionen für Android ohne Google-Konto

## Alternativen
- Signal (Abwägung: Telefonnummer/Account-Bindung vs. breiter Netzwerkeffekt)
- Matrix/Element (Abwägung: Föderation/Self-Hosting möglich vs. mehr Einrichtung/Komplexität)
- Session (Abwägung: stärkere Entkopplung von Identität vs. andere Zustell-/Performance-Eigenschaften)
- Wire (Abwägung: Team-/Business-Fokus vs. Konto-/E-Mail-Bindung)

## Nicht gelöst / offene Punkte
- Unklar bleibt, ob und wie lange **temporäre Transport-/Routingdaten** (z.B. IP-bezogene Betriebsdaten während der Zustellung) konkret gespeichert werden, da dies nicht durchgehend mit festen Fristen beziffert ist.

## Quellen

- 2024: "Cure53 – Threema Desktop App (Audit Report): https://threema.com/assets/6-resources/audits/3ma-03-report.v3.pdf
- 2023: "Security Analysis „Ibex“ Protocol (PDF): https://threema.com/assets/6-resources/audits/security_analysis_ibex_2023.pdf
- 2020: "Cure53 – Mobile Apps (PDF): https://threema.com/assets/6-resources/audits/2020_cure53_audit_mobile_apps.pdf
- 2019: "FH Münster – Security Audit (PDF): https://threema.com/press-files/2_documentation/security_audit_report_threema_2019.pdf
- Signal (Trade-off: "Telefonnummer/Account-Bindung vs. breite Verbreitung)
- Matrix/Element (Trade-off: "Föderation/Self-Hosting möglich vs. mehr Setup/Komplexität)
- Session (Trade-off: "stärkere Entkopplung von Identität vs. andere Zustell-/Performance-Eigenschaften)
- Wire (Trade-off: "Team-/Business-Fokus vs. Konto-/E-Mail-Bindung)
- https://threema.com/press-files/2_documentation/security_audit_report_threema_2019.pdf
- [Privacy Policy (Threema Private, Extended)](https://threema.com/en/privacy_policy/private/extended)
- [Terms of Service](https://threema.com/en/tos)
- [Open Source](https://threema.com/en/why-threema/open-source)
- [Transparency Report](https://threema.com/en/transparency-report)
- [FAQ: How does Threema audit its code?](https://threema.com/en/faq/code-audit)
- [Audit Report 2024 (Cure53, PDF)](https://threema.com/assets/6-resources/audits/3ma-03-report.v3.pdf)
- [Security Analysis Ibex 2023 (PDF)](https://threema.com/assets/6-resources/audits/security_analysis_ibex_2023.pdf)
- [Audit Report 2020 (Cure53, PDF)](https://threema.com/assets/6-resources/audits/2020_cure53_audit_mobile_apps.pdf)
- [Audit Report 2019 (FH Münster, PDF)](https://threema.com/press-files/2_documentation/security_audit_report_threema_2019.pdf)
- [FAQ: Are messages stored in encrypted form on my device?](https://threema.com/en/faq/crypto-local)
- [Support / FAQ (Private)](https://threema.com/en/support/private)
- [Threema Shop – Privacy Policy](https://shop.threema.ch/privacy)
