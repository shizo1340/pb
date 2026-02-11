---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Kanary"
url: "/anbieter/kanary/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-17"
robots: "index,follow"
description: "Kurzprofil von Kanary (Kategorie: Datenbroker Removal)."
provider: ""
name: "Kanary"
category: "Datenbroker Removal"
website: "https://www.kanary.com/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://www.kanary.com/privacy-and-security"
terms: "https://www.kanary.com/terms"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "no"
self_host_possible: "no"
account_required: "yes"
phone_required: "unknown"
kyc_required: "no"
jurisdiction: "Unklar (Kanary beschreibt sich als US-based; Fokus auf US-Datenquellen)"
region: "unknown"
logs: "minimal"
retention: "short"
retention_notes: "1w (Application Logs); Kontodaten bei Konto-Löschung sofort gelöscht (laut Anbieter)"
data_notes: "Kanary nutzt PostHog (App/Web-Analytics) und speichert Daten in AWS. Verschlüsselung at rest + SSL, Passwort-Hashing via PBKDF2 (SHA-256). 2FA/SSO verfügbar. Application-Logs: 1 Woche."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Kanary ist ein Anbieter aus der Kategorie **Datenbroker Removal**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du öffentlich auffindbare persönliche Daten (z.B. Adressen/Telefon/Profil-Exposures) regelmäßig monitoren und Removal-Requests mit Unterstützung/Automation abwickeln willst.
- **Weniger geeignet wenn:** du deine Identitätsdaten grundsätzlich nicht an einen Removal-Dienstleister geben willst (Abwägung: weniger Outsourcing vs. mehr manueller Aufwand).
- **Wichtigster Abwägung:** Für erfolgreiche Removals braucht Kanary personenbezogene Daten zur Suche/Verifikation (Abwägung: Wirksamkeit/Komfort vs. zusätzliche zentrale Datenhaltung beim Dienstleister).

## Sofortmaßnahmen
- **2FA/SSO aktivieren**, falls verfügbar: reduziert Risiko von Kontoübernahmen bei einem Dienst, der mit sensitiven Daten arbeitet.
- **Nur die Daten hinterlegen, die für Removals nötig sind:** verringert Umfang der gespeicherten Identitätsdaten.
- **Nach Abschluss Konto löschen, wenn du keinen Dauer-Monitoring-Bedarf hast:** laut Anbieter wird dann die Kontoinformation sofort gelöscht.

## Entscheidungshilfe
- Wenn du nur gelegentlich einzelne Treffer entfernen willst, dann starte mit dem kostenlosen/DIY-Ansatz (Abwägung: mehr Handarbeit, weniger kontinuierliches Monitoring).
- Wenn du monatliche Rescans und laufende Nachverfolgung möchtest, dann ist ein Premium-Abo relevant (Abwägung: mehr Datenverarbeitung beim Anbieter).
- Wenn du keine (zusätzliche) Telefonbindung willst, dann plane ein, dass bestimmte Removals blockiert sein können (Abwägung: weniger Identitätsbindung vs. ggf. geringere Erfolgsquote bei schwierigen Brokern).
- Wenn du Diagnosedaten minimieren willst, dann prüfe in App/Web, ob Analytics-Opt-outs dokumentiert sind (Abwägung: weniger Telemetrie vs. potenziell schlechtere Fehlersuche/Support).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Kanary |
| Kategorie | Datenbroker Removal |
| Website | https://www.kanary.com/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Unklar (Kanary beschreibt sich als US-based; Fokus auf US-Datenquellen) |
| Logs | minimal |
| Retention | 1w (Application Logs); Kontodaten bei Konto-Löschung sofort gelöscht (laut Anbieter) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.kanary.com/privacy-and-security
- AGB/Terms: https://www.kanary.com/terms
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- SOC2 Type 2 (in progress, laut Anbieter; kein Bericht verlinkt)

**Daten-Notizen (kurz):**
Kanary nennt PostHog (Analytics) und AWS (Hosting). Daten werden verschlüsselt gespeichert (at rest) und Verbindungen per SSL abgesichert. Passwörter werden laut Anbieter per PBKDF2 (SHA-256) gehasht. Application-Logs werden 1 Woche aufbewahrt; bei Konto-Löschung wird Kontodatenbestand sofort gelöscht.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Angaben, die du im Profil hinterlegst (u.a. Stadt/Bundesstaat als notwendige Information zur Erkennung von Exposures); laut Anbieter werden „minimale Identifiers und Location“ genutzt, damit App/Service funktioniert.
- **Wofür:** Finden und Verifizieren von Removals; Verbesserung der Scan- und Removal-Genauigkeit über Zeit; Kommunikation zu komplexen Removals per E-Mail.
- **Weitergabe/Subprozessoren:** Genannt werden AWS (Datenhaltung) und PostHog (Analytics). Weitere Subprozessoren-/Listen sind auf den verlinkten Seiten nicht ausgewiesen.
- **Drittlandtransfer:** Nicht angegeben / Unklar.
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben / Unklar (Checkout ist nicht öffentlich dokumentiert).
- **Kontakt/DSAR/DPA:** Kontakt über [email protected] (laut Privacy & Security / Terms).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Anbieter wird „across our site and app“ App-Analytics über PostHog eingesetzt.
- **Abschaltbar?** Unklar (keine dokumentierte Opt-out-Anleitung auf der Privacy & Security-Seite).
- **Wo (Menüpfad):** Nicht dokumentiert; im Web-Dashboard bzw. in der App unter Account/Settings nach „Analytics“, „Tracking“ oder „Privacy“ suchen.

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** 1 Woche (Application Logs), danach gelöscht (laut Anbieter).
- **Lösch-/Opt-out-Optionen:** Konto-Löschung: Kontodaten werden laut Anbieter sofort gelöscht; einzelne Datenfelder sollen beim Entfernen ebenfalls systemweit gelöscht werden.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Serverseitige Verschlüsselung at rest wird genannt; Transportverschlüsselung via HTTPS/SSL. E2E/Client-side-Verschlüsselung wird nicht beschrieben.
- **KDF/Parameter/Schlüsselableitung:** Passwörter: PBKDF2 mit SHA-256 (laut Anbieter; Django-Standards).
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA und SSO (Apple, Google, Okta, EntraID u.a.) werden als verfügbar für alle Accounts genannt.
- **Recovery/Account-Wiederherstellung:** Nicht angegeben / Unklar (keine dokumentierten Recovery-Optionen oder Schritte).
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben; allgemeiner Kontakt wird über [email protected] genannt.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (2FA/SSO), falls angeboten.  
   **Prüfen:** 2FA/SSO ist aktiv (z.B. zusätzliche Abfrage/Bestätigung bei Login).
2) **Auto-Lock/Timeout** sinnvoll setzen (geräteseitig).  
   **Prüfen:** iOS/Android sperrt nach kurzer Zeit; App/Web ist nicht dauerhaft offen.
3) **Analytics/Telemetry einschränken**, wo möglich (z.B. OS-App-Tracking deaktivieren).  
   **Prüfen:** System-Tracking ist aus; in App/Web existieren (falls vorhanden) Privacy-Schalter.

**Stolpersteine:**
- Für bestimmte Removals kann laut Anbieter eine Verifikation von E-Mail/Telefon nötig sein (Abwägung: Safety/Verifikation vs. zusätzliche Identitätsbindung).
- Manche Removals erfordern Aktionen durch dich selbst (laut Terms).

<details>
<summary>Profil B (Datensparsam)</summary>

- Hinterlege nur die minimalen Profilangaben, die für Treffer-Erkennung und Removals nötig sind (z.B. keine zusätzlichen Alias-Daten ohne Bedarf).
- Nutze (wo möglich) SSO statt zusätzlicher Passwort-/E-Mail-Kombinationen, um weniger Login-„Surface“ zu pflegen.
- Plane eine Exit-Strategie: Wenn Cleanup abgeschlossen und kein Monitoring nötig ist → Konto löschen (laut Anbieter: Daten werden dann gelöscht).  
**Abwägung:** weniger langfristige Datenhaltung beim Anbieter, aber du verlierst laufende Rescans/Tracking.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze ein separates Gerät/Profil für Privacy-Tools (Trennung von Alltag/High-Risk-Nutzung).  
- Minimiere Kommunikationskanäle: falls sensible Eskalationen nötig sind, bevorzuge Ende-zu-Ende-verschlüsselte Messenger/E-Mail-Anbieter (Kanary nennt z.B. Signal/ProtonMail als mögliche Kanäle).  
- Reduziere Angriffsfläche: keine unnötigen App-Rechte (z.B. Standortzugriff nur, wenn zwingend erforderlich und dokumentiert).  
**Abwägung:** höherer Aufwand und ggf. mehr „blocked“ Removals durch fehlende Verifikationsoptionen.

</details>

## Features
- Automatisierte Scans nach öffentlich auffindbaren Exposures (laut Anbieter: Ergebnisse typ. nach ~24h).
- Automatisierte Removal-Requests + Verifikation/Rescans (inkl. Nachfassen bei abgelehnten/blocked Requests).
- Web-Dashboard + monatliche Fortschrittsberichte per E-Mail (laut Anbieter).
- Verifikations-Workflows für bestimmte Removals (z.B. Bestätigung, dass du Zugriff auf Telefon/E-Mail hast).

## Alternativen
- DeleteMe (Datenbroker-Removal; Abwägung: anderes Abdeckungs-/Supportmodell, Policies/Tracking je Anbieter prüfen)
- Optery (Datenbroker-Removal; Abwägung: andere Automations-/Verifikationsprozesse möglich)
- OneRep (Datenbroker-Removal; Abwägung: Anbieter-Policies/Datennutzung je nach Produkt prüfen)
- DIY/Manuell (Opt-out/DSAR selbst; Abwägung: weniger Datenweitergabe an Dienstleister, mehr Zeitaufwand)

## Nicht gelöst / offene Punkte
- Zahlungsabwicklung/Payment Processor wird auf den öffentlich zugänglichen Kanary-Seiten nicht eindeutig benannt.
- Ob PostHog-Telemetrie im Produkt deaktivierbar ist, ist öffentlich nicht dokumentiert.

## Quellen

- Automatisierte Scans nach öffentlich auffindbaren Exposures (laut Anbieter: "Web-Scan, Ergebnisse typ. nach ~24h)
- DeleteMe (Datenbroker-Removal; Trade-off je nach Anbieter: "anderes Support-/Abdeckungsmodell, eigene Datenflüsse prüfen)
- Optery (Datenbroker-Removal; Trade-off: "unterschiedliche Automations-/Verifikationsprozesse möglich)
- OneRep (Datenbroker-Removal; Trade-off: "Anbieter-Policies/Tracking/Verifizierung je nach Produkt prüfen)
- DIY/Manuell (Opt-out/DSAR selbst durchführen; Trade-off: "weniger Datenweitergabe an Dienstleister, mehr Zeitaufwand)
- [Kanary – Homepage / FAQ-Blöcke](https://www.kanary.com/)
- [Kanary – Privacy & Security](https://www.kanary.com/privacy-and-security)
- [Kanary – Terms & Agreement](https://www.kanary.com/terms)
- [Kanary – How Kanary Cloud Works](https://www.kanary.com/how-it-works)
- [Kanary Blog – Pricing Announcements For 2024](https://www.kanary.com/pricing-announcements-for-2024)
- [Kanary – Teams FAQ](https://www.kanary.com/teams-frequently-asked-questions)
- [Kanary – Homepage / FAQ-Blöcke](https://www.kanary.com/)
- [Kanary – Privacy & Security](https://www.kanary.com/privacy-and-security)
- [Kanary – Terms & Agreement](https://www.kanary.com/terms)
- [Kanary – How Kanary Cloud Works](https://www.kanary.com/how-it-works)
- [Kanary Blog – Pricing Announcements For 2024](https://www.kanary.com/pricing-announcements-for-2024)
- [Kanary – Teams FAQ](https://www.kanary.com/teams-frequently-asked-questions)
