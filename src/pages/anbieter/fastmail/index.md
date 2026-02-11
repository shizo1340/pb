---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Fastmail"
url: "/anbieter/fastmail/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-12"
robots: "index,follow"
description: "Kurzprofil von Fastmail (Kategorie: E-Mail)."
provider: ""
name: "Fastmail"
category: "E-Mail"
website: "https://www.fastmail.com/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://www.fastmail.com/policies/privacy/"
terms: "https://www.fastmail.com/policies/terms-of-service/"
transparency: "https://www.fastmail.com/transparency/"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "unknown"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "no"
kyc_required: "unknown"
jurisdiction: "Australien (Fastmail Pty Ltd)"
region: "other"
logs: "minimal"
retention: "unknown"
retention_notes: "Login-Log: bis zu 4 Wochen; Backups gelöschter Mails: mind. 7 Tage; weitere Retention nicht angegeben"
retention_max_days: "28"
data_notes: "Serverbetriebener E-Mail-Dienst (Mail/Calendar/Contacts/Files). Laut Anbieter werden technische Nutzungs-/Sicherheitsdaten und (für Produktverbesserung) anonymisierte Nutzungsdaten verarbeitet; Subprozessoren u.a. für Payments, Analytics und Error-Monitoring."
features: ""
alternatives: ""
payment_processors: "Paddle, Apple App Store, Google Play (laut Anbieter-Subprocessor-Liste)"
sources: ""
---
## Kurzprofil

Fastmail ist ein Anbieter aus der Kategorie **E-Mail**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen kostenpflichtigen E-Mail-Dienst mit Custom-Domains, Alias/Masks und nachvollziehbaren Account-Sicherheitsfunktionen (Login-/Session-Übersicht, 2FA) nutzen willst.
- **Weniger geeignet wenn:** du für Mail-Inhalte eine Architektur brauchst, bei der der Anbieter möglichst wenig serverseitig verarbeiten kann (Abwägung: Komfort-Funktionen vs. Inhalts-/Metadaten-Verarbeitung).
- **Wichtigster Abwägung:** mehr Komfort (Webmail, Integrationen, Spam-/Security-Features) bedeutet typischerweise mehr serverseitige Verarbeitung und damit mehr Metadaten- und potenzielles Inhaltszugriffs-Risiko.

## Sofortmaßnahmen
- **2FA aktivieren (Authenticator oder Security Key):** reduziert Risiko durch Passwort-Leaks deutlich.
- **Login-/Session-Übersicht prüfen:** unbekannte Geräte sofort abmelden.
- **Nur notwendige Clients anbinden:** für IMAP/Apps separate App-Passwörter nutzen statt Hauptpasswort.

## Entscheidungshilfe
- Wenn du **eigene Domains** und mehrere Adressen/Aliase brauchst, dann plane Domain-DNS sauber (Abwägung: mehr DNS-/Admin-Aufwand).
- Wenn du **Third-Party-Mailclients (IMAP/SMTP)** nutzt, dann verwende **App-Passwörter** (Abwägung: mehr Schlüsselverwaltung).
- Wenn du **Telefonnummern vermeiden** willst, dann nutze 2FA per **Authenticator oder Security Key** und verwalte Backup-Optionen bewusst (Abwägung: Recovery wird anspruchsvoller).
- Wenn du **minimale Telemetrie** willst, dann prüfe in Privacy/DPA und den Account-Einstellungen, welche Analytics/Diagnosedaten anfallen (Abwägung: weniger Diagnose-/Support-Signal).
- Wenn du **maximale Isolation/Offline** brauchst, dann ist ein Dienst mit Selbstbetrieb/Offline-Workflow relevant (Abwägung: deutlich mehr Betriebs- und Wartungsaufwand). *(nur als Konzept — Fastmail selbst bietet kein Self-Hosting an)*

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Fastmail |
| Kategorie | E-Mail |
| Website | https://www.fastmail.com/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | paid |
| Free Tier | no |
| Open Source | unknown |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Paddle, Apple App Store, Google Play (laut Anbieter-Subprocessor-Liste) |
| Jurisdiktion | Australien (Fastmail Pty Ltd) |
| Logs | minimal |
| Retention | Login-Log: bis zu 4 Wochen; Backups gelöschter Mails: mind. 7 Tage; weitere Retention nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.fastmail.com/policies/privacy/
- AGB/Terms: https://www.fastmail.com/policies/terms-of-service/
- Transparency Report: https://www.fastmail.com/transparency/
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Serverbetriebener E-Mail-Dienst (Mail/Calendar/Contacts/Files). Laut Anbieter werden technische Nutzungs-/Sicherheitsdaten und (für Produktverbesserung) anonymisierte Nutzungsdaten verarbeitet; Subprozessoren u.a. für Payments, Analytics und Error-Monitoring.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** u.a. Account-/Kontakt- und Zahlungsdaten, technische Daten (z.B. IP-Adresse, Browser-/Gerätetyp), Kommunikationsdaten mit Support; zusätzlich (für Produktverbesserung) anonymisierte/deidentifizierte Nutzungsdaten.
- **Wofür:** Betrieb des Dienstes, Sicherheit/Fehlerbehebung/Auditing, Abrechnung sowie Produktverbesserung.
- **Weitergabe/Subprozessoren:** im DPA/Annex sind Subprozessoren aufgeführt (z.B. Payment, Analytics, Fehler-Monitoring, SMS-Provider).
- **Drittlandtransfer:** Nicht angegeben / Unklar (prüfe DPA-Text auf Transfermechanismen).
- **Zahlungsabwicklung/Payment Processor:** laut Subprocessor-Liste u.a. Paddle; in App-Stores über Apple/Google.
- **Kontakt/DSAR/DPA:** DPA ist öffentlich verlinkt; Kontakt/Anfragen sind über Anbieter-Kanäle laut Privacy Policy möglich.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy werden anonymisierte/deidentifizierte Nutzungsdaten für Produktverbesserung verarbeitet; im DPA/Annex sind u.a. Analytics/Monitoring-Subprozessoren genannt.
- **Abschaltbar?** Unklar (prüfe Account-Einstellungen + Privacy/Help Center).
- **Wo (Menüpfad):** Settings → *(Suche nach „Privacy“, „Analytics“, „Telemetry“ — je nach UI/Plan)*

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** Login-Log im Account zeigt laut Help Center „die letzten vier Wochen“; gelöschte E-Mails können laut Anbieter für Wiederherstellung/Backups mindestens 7 Tage vorgehalten werden.
- **Lösch-/Opt-out-Optionen:** Account-Datenlöschung/Export und Analytics-Opt-out sind im Detail nicht einheitlich dokumentiert (prüfen).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Fastmail nennt „robust encryption“ (Details zu Verfahren/Client-side/E2E werden auf den genutzten Einstiegsseiten nicht konkret spezifiziert).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA wird unterstützt (Authenticator-App, Security Keys/WebAuthn; optional SMS als Backup). App-Passwörter für externe Apps/Clients sind vorgesehen.
- **Recovery/Account-Wiederherstellung:** Recovery-/Backup-Optionen existieren (z.B. Recovery Code, optional Recovery Phone; kann laut Doku später wieder entfernt werden).
- **Vuln-Handling / Security-Kontakt:** „Report a security issue“ ist als offizieller Kanal verlinkt (Details je nach aktueller Support/Security-Seite prüfen).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **2FA aktivieren** (Authenticator oder Security Key).  
   **Wo:** Settings → Privacy & Security → Two-step verification (2FA)  
   **Prüfen:** 2FA-Status „On/Enabled“, Backup-Code gespeichert.
2) **Sitzungen prüfen und aufräumen.**  
   **Wo:** Settings → Privacy & Security → Logged in sessions  
   **Prüfen:** nur bekannte Geräte aktiv, sonst „Sign out“.
3) **App-Passwörter für Dritt-Apps nutzen (statt Hauptpasswort).**  
   **Wo:** Settings → Privacy & Security → App passwords  
   **Prüfen:** pro App ein eigener Token, bei Bedarf widerrufbar.

**Stolpersteine:**
- Recovery-Optionen können zusätzliche Identitätsdaten bedeuten (Abwägung: Support/Recovery vs. Metadaten).
- Mail-Features/Integrationen können zusätzliche Datenflüsse erzeugen (Abwägung: Komfort vs. Angriffsfläche).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Recovery-Phone vermeiden oder nach Einrichtung entfernen**, wenn du 2FA ohne Telefonnummer betreiben willst (Authenticator/Security Key nutzen).
- **Minimiere Integrationen** (z.B. nur notwendige Clients/Apps anbinden; App-Passwörter strikt trennen).
- **Login-/Session-Check als Routine** (z.B. monatlich): ungewöhnliche Standorte/IPs erkennen.
  
**Abwägung:** mehr Eigenverantwortung bei Recovery/Support und Schlüsselverwaltung.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Getrennter Browser/Profil/VM** nur für Mailzugriff (reduziert Cross-Site-Risiken).
- **Nur Security Keys** (WebAuthn) als 2FA, Backup-Strategie offline (Recovery Code sicher verwahren).
- **Netzwerk-/Script-Härtung** (Content-Blocking) nur, wenn Webmail dadurch stabil nutzbar bleibt.
  
**Abwägung:** deutlicher Komfortverlust, höhere Komplexität, höhere Gefahr von Self-Lockout.

</details>

## Features
- E-Mail-Hosting inkl. Kalender/Kontakte/Dateien
- Eigene Domains + Alias-/Zusatzadressen
- Masked E-Mail (E-Mail-Masken)
- 2FA inkl. Authenticator-App und Security Keys (WebAuthn) + Backup-Optionen
- Login-/Session-Übersicht im Account

## Alternativen
- Proton Mail (E-Mail; Abwägung: andere Architektur/Client-Fokus, Funktionsumfang je nach Plan)
- mailbox.org (E-Mail; Abwägung: anderes Hosting-/Jurisdiktionsmodell, Feature-Set abweichend)
- Tuta (E-Mail; Abwägung: anderer Client-/Protokoll-Ansatz, Kompatibilität zu klassischen Mail-Clients abweichend)

## Nicht gelöst / offene Punkte
- Exakte Aufbewahrungsdauer technischer Logs (Sicherheits-/Audit-/IP-Logs) ist in den genutzten Dokumenten nicht vollständig konkretisiert.

## Quellen

- Proton Mail (E-Mail; Trade-off: "andere Architektur/Client-Fokus, Funktionsumfang je nach Plan)
- mailbox.org (E-Mail; Trade-off: "anderes Hosting-/Jurisdiktionsmodell, Feature-Set abweichend)
- Tuta (E-Mail; Trade-off: "anderer Client-/Protokoll-Ansatz, Kompatibilität zu klassischen Mail-Clients abweichend)
- https://www.fastmail.help/hc/en-us/articles/1500000278042-Using-two-step-verification-2FA
- [Privacy Policy – Fastmail](https://www.fastmail.com/policies/privacy/)
- [Terms of Service – Fastmail](https://www.fastmail.com/policies/terms-of-service/)
- [Data Processing Addendum (DPA) – Fastmail](https://www.fastmail.com/policies/dpa/)
- [DPA Annex 3 – Subprocessors – Fastmail](https://www.fastmail.com/policies/dpa/annex3/)
- [Transparency Report – Fastmail](https://www.fastmail.com/transparency/)
- [Pricing – Fastmail](https://www.fastmail.com/pricing/)
- [Account security features – Fastmail Help Center](https://www.fastmail.help/hc/en-us/articles/1500000278322-Account-security-features)
- [Using two-step verification (2FA) – Fastmail Help Center](https://www.fastmail.help/hc/en-us/articles/1500000278042-Using-two-step-verification-2FA)
