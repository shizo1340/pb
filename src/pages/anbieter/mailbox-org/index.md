---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / mailbox.org"
url: "/anbieter/mailbox-org/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-18"
robots: "index,follow"
description: "Kurzprofil von mailbox.org (Kategorie: E-Mail)."
provider: ""
name: "mailbox.org"
category: "E-Mail"
website: "https://mailbox.org/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://mailbox.org/en/data-protection/"
terms: "https://mailbox.org/en/t-cs/"
transparency: "https://mailbox.org/en/transparency-report/"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "unknown"
self_host_possible: "no"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Deutschland (Berlin)"
region: "eu"
logs: "minimal"
retention: "short"
retention_notes: "4–7 Tage für Verbindungs-/Mailserver-Logs; weitere Fristen siehe Datenschutz"
retention_max_days: "7"
data_notes: "Website-Analytics via selbst betriebenem Matomo (ohne Cookies); Mailserver-Protokolle enthalten Metadaten (keine Inhalte laut Anbieter)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

mailbox.org ist ein Anbieter aus der Kategorie **E-Mail**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen **gehosteten E-Mail-Dienst** mit Standardprotokollen (IMAP/SMTP/CalDAV/CardDAV) nutzen willst und dabei **2FA** sowie **PGP/S/MIME im Webmail** brauchst.
- **Weniger geeignet wenn:** du maximale Nachvollziehbarkeit über **alle Subprozessoren/Zahlungsabwickler** aus öffentlichen Listen erwartest (nicht als zentrale öffentliche Liste auffindbar).
- **Wichtigster Abwägung:** **Komfort & Kompatibilität** (Standardprotokolle, Webmail, Sync) vs. **Metadaten aus Verbindungs- und Mailserver-Logs** (laut Anbieter begrenzt, aber vorhanden).

## Sofortmaßnahmen
- **2FA aktivieren (TOTP):** reduziert das Risiko durch Passwortdiebstahl deutlich.
- **App-Passwörter strikt nutzen:** externe Mail-/Sync-Apps bekommen eigene Zugangsdaten, die du separat sperren kannst.
- **Aliases/Wegwerf-Adressen verwenden:** senkt die Wiederverwendbarkeit deiner Hauptadresse und reduziert Spam-/Leak-Folgen.

## Entscheidungshilfe
- Wenn du **E-Mail mit Standardprotokollen (IMAP/SMTP)** brauchst, dann nutze mailbox.org und sichere den Zugang mit **2FA** ab (Abwägung: externe Apps brauchen danach oft App-Passwörter).
- Wenn du **PGP im Browser ohne Zusatzsoftware** willst, dann nutze **Guard** im Webmail (Abwägung: Schlüsselmanagement bleibt weiterhin dein Risiko).
- Wenn du **möglichst wenig Website-Tracking** willst, dann prüfe die Analytics-Angaben: mailbox.org nennt **Matomo ohne Cookies** auf der Website (Abwägung: Grund-Statistiken bleiben möglich).
- Wenn du **anonymere Nutzung** willst, dann nutze (wo für dich praktikabel) **Aliases** und die vom Anbieter genannten **anonymen Zahlungsoptionen** (Abwägung: weniger Komfort bei Abwicklung/Support).
- Wenn du über **Tor** zugreifen willst, dann folge den Anbieter-Hinweisen zum Tor-Browser (Abwägung: zusätzliche Browser-Freigaben wie Canvas können nötig sein).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | mailbox.org |
| Kategorie | E-Mail |
| Website | https://mailbox.org/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | paid (mit 30-Tage-Test laut Anbieter) |
| Free Tier | no |
| Open Source | unknown |
| Konto erforderlich | yes |
| Telefon erforderlich | no (nicht als Pflicht genannt) |
| KYC erforderlich | no (laut Anbieter: anonyme Registrierung möglich) |
| Zahlungsabwicklung | Nicht angegeben (genannt werden u.a. Überweisung, SEPA-Lastschrift, Kreditkarte, PayPal sowie Bargeld-Optionen) |
| Jurisdiktion | Deutschland (Berlin) |
| Logs | minimal (Metadaten/Verbindungsdaten laut Anbieter) |
| Retention | 4–7 Tage für Verbindungs-/Mailserver-Logs; weitere Fristen siehe Datenschutz |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://mailbox.org/en/data-protection/
- AGB/Terms: https://mailbox.org/en/t-cs/
- Transparency Report: https://mailbox.org/en/transparency-report/
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- ISO 27001 (laut Anbieter)
- BSI C5 (laut Anbieter)
- BSI IT Security Label / BSI TR 03108 (laut Anbieter)

**Daten-Notizen (kurz):**
Website-Analytics via selbst betriebenem Matomo (ohne Cookies); Mailserver-Protokolle enthalten Metadaten (keine Inhalte laut Anbieter).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Website-Zugriffe (Server-Logs), Registrierungs-/Nutzungsmetadaten, sowie Mailserver-Metadaten (z.B. Sender/Empfänger/Message-ID/Größe; keine Mail-Inhalte in diesen Logs). Zudem Login-/Zugriffsmetadaten (Account + Zeitpunkt + IP) bei POP3/IMAP.  
- **Wofür:** Betrieb/Sicherheit, Missbrauchsschutz, Zustell-/Fehleranalyse bei Mailproblemen, Support.  
- **Weitergabe/Subprozessoren:** In der Datenschutzerklärung wird für Registrierungs-/Nutzungsdaten „grundsätzlich keine Weitergabe“ genannt, außer gesetzlich erforderlich; eine zentrale öffentliche Subprozessorenliste ist dort nicht als Liste aufgeführt.  
- **Drittlandtransfer:** Serverstandort wird als **exklusiv Deutschland (Berlin)** beschrieben.  
- **Zahlungsabwicklung/Payment Processor:** Zahlungsarten werden genannt, konkrete Payment-Processor/Acquirer sind nicht benannt.  
- **Kontakt/DSAR/DPA:** Datenschutzkontakt/DSB wird mit **privacy@mailbox.org** angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Website-Analytics via **Matomo** (laut Anbieter) – ohne Cookies; im eingeloggten Bereich nur technische Cookies.  
- **Abschaltbar?** Nicht angegeben (kein Opt-out-Schalter dokumentiert; Matomo wird als „ohne Cookies“ beschrieben).  
- **Wo (Menüpfad):** Nicht angegeben (betrifft Website/Plattformbetrieb, nicht eine Nutzer-Einstellung).

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** 4–7 Tage für Portal-/Mailserver-Logs (je nach Typ); weitere Kategorien mit längeren Fristen (z.B. Support) laut Privacy Policy.
- **Lösch-/Opt-out-Optionen:** Nicht als Opt-out beschrieben; Löschfristen werden als feste „erasure periods“ angegeben.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** PGP/S/MIME im Webmail („Guard“), optional mit Mailvelope; Transportverschlüsselung via SSL/TLS.  
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.  
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA wird genannt; in der Doku werden **TOTP** und eine **OTP-Variante („Login 2.0“)**
  beschrieben.  
- **Recovery/Account-Wiederherstellung:** Nicht angegeben (Details zur Wiederherstellung nicht dokumentiert auf den genutzten Seiten).  
- **Vuln-Handling / Security-Kontakt:** security.txt nennt einen Security-Kontakt (E-Mail) und PGP-Infos.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren (2FA/MFA)**.  
   **Wo:** *All settings → Security → Two-Factor Authentication* (TOTP).  
   **Prüfen:** Login verlangt nach Passwort + aktuellem Code.
2) **Auto-Lock/Timeout** sinnvoll setzen.  
   **Prüfen:** nach Nutzung konsequent ausloggen (besonders auf geteilten Geräten); „angemeldet bleiben“ nur nutzen, wenn du dem Gerät vertraust.
3) **Analytics/Telemetry deaktivieren**, falls Schalter existiert.  
   **Prüfen:** nicht als Nutzer-Schalter dokumentiert; Website nutzt laut Anbieter Matomo ohne Cookies, nach Login nur technische Cookies.

**Stolpersteine:**
- Nach Aktivierung von 2FA brauchst du für externe Sync-/Mail-Apps oft **App-Passwörter** statt deines normalen Logins (Abwägung: mehr Sicherheit, aber mehr Einrichtung-Aufwand).
- Bei Vertragsende/auslaufendem Guthaben kann ein Konto laut Anbieter in einen „limited account“-Zustand wechseln und später gelöscht werden (Abwägung: Kostendisziplin vs. Datenverlust ohne Backup).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze (wo möglich) **Aliases/Wegwerf-Adressen**, um die Hauptadresse zu entkoppeln.
- Für Zahlungen: nutze – sofern passend – die vom Anbieter genannten **anonymeren Zahlungsoptionen** (Abwägung: weniger Komfort).
- Reduziere externe Clients: Webmail statt vieler Apps/Syncs, wenn du Metadaten- und Token-Flächen klein halten willst (Abwägung: weniger Offline-/Push-Komfort).

**Abwägung:** mehr Eigenverantwortung bei Workflow/Komfort (z.B. weniger Automatisierung, mehr manuelle Prozesse).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Verwende getrennte Browserprofile/VMs für Mailzugang und andere Konten (Abwägung: deutlich mehr Aufwand).
- Tor-Nutzung: folge den Anbieter-Hinweisen (Security-Level „Medium/Safer“, bevorzugt Sprache Englisch); Office kann Canvas-Freigaben benötigen (Abwägung: Kompatibilität vs. Angriffs-/Fingerprint-Fläche).
- App-Passwörter sehr restriktiv: pro Gerät/App getrennt, bei Verdacht sofort sperren (Abwägung: mehr Pflegeaufwand).

**Abwägung:** deutlicher Komfortverlust, höhere Komplexität und Fehlerrisiko.

</details>

## Features
- Webmail + IMAP/SMTP/POP3 (Standardprotokolle)
- PGP/S/MIME im Webmail (Guard) + optional Mailvelope
- 2FA (TOTP/OTP) + App-Passwörter für externe Apps
- Alias-/Wegwerf-Adressen, Custom Domains
- CalDAV/CardDAV + Drive/Office/Meet als Suite (tarifabhängig)

## Alternativen
- Proton Mail (Abwägung: stärker an eigenes Client-/Ökosystem gebunden, andere Kompatibilitäts-/Metadaten-Profile möglich)
- Tuta (Abwägung: integrierte E2E-Logik, dafür weniger Standardprotokoll-Kompatibilität)
- Posteo (Abwägung: reduzierter Funktionsumfang/Suite, Fokus auf schlankere Nutzung)

## Nicht gelöst / offene Punkte
- Keine zentrale öffentliche Subprozessoren-/AVV-Liste in den Anbieter-Quellen gefunden.

## Quellen

- Proton Mail (anderer Schwerpunkt: "Anbieter-Ökosystem mit integrierten Clients, andere Protokoll-/Kompatibilitäts-Trade-offs möglich)
- Tuta (anderer Schwerpunkt: "integrierte Ende-zu-Ende-Verschlüsselung, eingeschränktere Standardprotokolle)
- Posteo (anderer Schwerpunkt: "minimalistisches Angebot, Fokus auf Datensparsamkeit/Metadaten-Reduktion)
- [Data Protection](https://mailbox.org/en/data-protection/)
- [Security](https://mailbox.org/en/security/)
- [Terms and conditions](https://mailbox.org/en/t-cs/)
- [Transparency report](https://mailbox.org/en/transparency-report/)
- [Secure email service (Product: "Mail)](https://mailbox.org/en/product/mail/)
- [How to use two-factor authentication - 2FA (KB)](https://kb.mailbox.org/en/private/security-and-privacy/how-to-use-two-factor-authentication-2fa/)
- [Configuring the Tor Browser (KB)](https://kb.mailbox.org/en/private/security-and-privacy/configuring-the-tor-browser/)
- [Cancellation policy](https://mailbox.org/en/t-cs-cancellation-policy/)
- [security.txt](https://mailbox.org/.well-known/security.txt)
- [Legal notice](https://mailbox.org/en/legal-notice/)
- [Data Protection](https://mailbox.org/en/data-protection/)
- [Security](https://mailbox.org/en/security/)
- [Terms and conditions](https://mailbox.org/en/t-cs/)
- [Transparency report](https://mailbox.org/en/transparency-report/)
- [Secure email service (Product: Mail)](https://mailbox.org/en/product/mail/)
- [How to use two-factor authentication - 2FA (KB)](https://kb.mailbox.org/en/private/security-and-privacy/how-to-use-two-factor-authentication-2fa/)
- [Configuring the Tor Browser (KB)](https://kb.mailbox.org/en/private/security-and-privacy/configuring-the-tor-browser/)
- [Cancellation policy](https://mailbox.org/en/t-cs-cancellation-policy/)
- [security.txt](https://mailbox.org/.well-known/security.txt)
- [Legal notice](https://mailbox.org/en/legal-notice/)
