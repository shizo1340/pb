---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Guerrilla Mail (Temp Mail)"
url: "/anbieter/guerrilla-mail/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-15"
robots: "index,follow"
description: "Kurzprofil von Guerrilla Mail (Temp Mail) (Kategorie: E-Mail-Aliasing)."
provider: ""
name: "Guerrilla Mail (Temp Mail)"
category: "E-Mail-Aliasing"
website: "https://www.guerrillamail.com/"
repo: "https://github.com/flashmob/go-guerrilla"
license: "MIT (Go-Guerrilla SMTPd; Website/Service insgesamt nicht als Open Source angegeben)"
policies: ""
privacy: "https://www.guerrillamail.com/de/about"
terms: "https://www.guerrillamail.com/de/tos"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "partial"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "unknown"
jurisdiction: "Nicht angegeben (Copyright-Hinweis: Jamit Software Limited)"
region: "unknown"
logs: "minimal"
retention: "specified"
retention_notes: "E-Mails: 1h (nach Zustellung in Inbox); Logs: 24h; Dateien/Downloads: Cache bis zu 24h"
data_notes: "Kein Login/Konto: Zugriff auf eine Inbox ist möglich, wenn die Inbox-ID bekannt ist. Website nutzt Session-Cookie sowie Drittanbieter-Cookies (Google Analytics, Google AdSense)."
features: ""
alternatives: ""
payment_processors: "PayPal, Bitcoin (Custom-Domain-Plan laut Website)"
sources: ""
---
## Kurzprofil

Guerrilla Mail (Temp Mail) ist ein Anbieter aus der Kategorie **E-Mail-Aliasing**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du für eine einmalige Registrierung/Bestätigung kurzfristig eine Adresse brauchst, ohne deine echte Mailadresse zu verwenden (keine Registrierung, kurzer Speicherzeitraum).
- **Weniger geeignet wenn:** du den Posteingang später wieder zuverlässig brauchst (z.B. Account-Recovery, Rechnungen, längere Konversationen) oder Inhalte vertraulich sind.
- **Wichtigster Abwägung:** Sehr niedrige Persistenz (1h) + kein Konto vs. **Zugriffsrisiko über erratbare Inbox-ID** und Drittanbieter-Cookies/Tracking auf der Website.

## Sofortmaßnahmen
- **Nutze eine zufällige Inbox-ID + „Alias/Scramble Address“:** senkt das Risiko, dass Dritte deinen Posteingang erraten.
- **Öffne Guerrilla Mail im privaten Fenster + lösche Cookies nach Nutzung:** reduziert Session-/Tracking-Reste.
- **Deaktiviere Drittanbieter-Cookies oder nutze Content-Blocking:** begrenzt Google Analytics/AdSense-Cookies laut Anbieterangaben.

## Entscheidungshilfe
- Wenn du nur **einen Bestätigungslink** brauchst, dann nutze Guerrilla Mail und lösche die Mail danach (Abwägung: keine spätere Wiederherstellung).
- Wenn du **Passwort-Resets oder 2FA-Codes** erwartest, dann ist Guerrilla Mail weniger passend (Abwägung: 1h Retention + mögliche Inbox-Übernahme bei bekannter ID).
- Wenn du **Metadaten minimieren** willst, dann nutze einen privaten Tab/Container-Profil und blockiere Drittanbieter-Cookies (Abwägung: Website-Funktionen/Komfort können leiden).
- Wenn du verhindern willst, dass jemand deinen Posteingang mitliest, dann vermeide „sprechende“ Inbox-IDs und nutze Scramble/Alias (Abwägung: Adresse ist schwerer zu merken).
- Wenn du **eine eigene Domain** für Wegwerf-Adressen nutzen willst, dann ist der Custom-Domain-Modus relevant (Abwägung: Zahlung/Verknüpfbarkeit über Payment-Flow).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Guerrilla Mail (Temp Mail) |
| Kategorie | E-Mail-Aliasing |
| Website | https://www.guerrillamail.com/ |
| Quellcode | https://github.com/flashmob/go-guerrilla |
| Lizenz | MIT (Go-Guerrilla SMTPd; Website/Service insgesamt nicht als Open Source angegeben) |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | PayPal, Bitcoin (Custom-Domain-Plan laut Website) |
| Jurisdiktion | Nicht angegeben (Copyright-Hinweis: Jamit Software Limited) |
| Logs | minimal |
| Retention | E-Mails: 1h (nach Zustellung in Inbox); Logs: 24h; Dateien/Downloads: Cache bis zu 24h |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.guerrillamail.com/de/about
- AGB/Terms: https://www.guerrillamail.com/de/tos
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Kein Login/Konto: Zugriff auf eine Inbox ist möglich, wenn die Inbox-ID bekannt ist. Website nutzt Session-Cookie sowie Drittanbieter-Cookies (Google Analytics, Google AdSense).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** E-Mail-Inhalte, die an die temporäre Adresse zugestellt werden; außerdem Cookie-/Webdaten (Session-Cookie, Präferenz-Cookies, Drittanbieter-Cookies wie Google Analytics/AdSense).
- **Wofür:** Zustellung/Anzeige temporärer E-Mails; Cookies zur Sitzungsfunktion und „Preferences“, sowie Analytics/Ads laut Anbieterhinweis.
- **Weitergabe/Subprozessoren:** Drittanbieter-Cookies werden genannt (Google Analytics, Google AdSense); weitere Subprozessoren werden nicht als Liste angegeben.
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Für Custom-Domain nennt die Website PayPal und Bitcoin als Zahlungsmethode.
- **Kontakt/DSAR/DPA:** Kontakt wird über Feedback-Widget bzw. Social-Kanäle beschrieben; ein formaler DSAR/DPA-Prozess ist nicht angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Drittanbieter-Cookies (Google Analytics, Google AdSense) werden im Datenschutz-Abschnitt genannt.
- **Abschaltbar?** Über Browser-Einstellungen/Content-Blocking (anbieterseitiger Opt-out-Schalter nicht angegeben).
- **Wo (Menüpfad):** Browser → Datenschutz → Drittanbieter-Cookies blockieren / Tracking-Schutz aktivieren.

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** E-Mails werden nach 1 Stunde gelöscht; Logs werden nach 24 Stunden gelöscht; Downloads sind „cached … up to 24 hours“.
- **Lösch-/Opt-out-Optionen:** „Vergessen Sie mich / Forget Me“ setzt die Inbox-ID zurück; einzelne Mails können manuell gelöscht werden.

**Abwägung am Punkt:** Kürzere Aufbewahrung reduziert Persistenz, macht aber Wiederherstellung/Support praktisch unmöglich.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Zugriff auf die Website nur via HTTPS (Transportverschlüsselung); E2E wird nicht genannt.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (kein Account/Passwortmodell für Inbox).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angeboten (kein Konto).
- **Recovery/Account-Wiederherstellung:** Keine echte Recovery; wer die Inbox-ID kennt, kann zugreifen. Scramble/Alias soll schützen, wenn die ID nicht bekannt ist.
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben; Kontakt über Feedback/Social-Kanäle genannt.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Zufallsadresse verwenden + Inbox-ID nicht „sprechend“ wählen.**  
   **Prüfen:** Inbox-ID ist nicht leicht erratbar (keine Namen/Handle).
2) **„Alias/Scramble Address“ aktivieren**, wenn du einen Link erwartest.  
   **Prüfen:** Anzeige zeigt eine gescramblete Adresse (nicht nur die einfache Inbox-ID).
3) **Nach Nutzung „Vergessen Sie mich / Forget Me“ verwenden** und Tab schließen.  
   **Prüfen:** Inbox-ID ändert sich, vorherige Inbox ist nicht mehr direkt aktiv.

**Stolpersteine:**
- Wer die Inbox-ID kennt, kann Inhalte lesen (Abwägung: kein Konto/kein Login vs. erratbare Zugriffe).
- Ausgehende E-Mails können zusätzliche Header tragen (Abwägung: Funktion „Senden“ vs. Metadaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze einen **privaten Tab/Container-Profil** und lösche Site-Daten nach der Session.
- Blockiere **Drittanbieter-Cookies** und prüfe, ob die Inbox-Funktion weiterhin klappt.
- Verwende Guerrilla Mail nur für „Einmal-Link“-Flows (keine Recovery-Kette).  
**Abwägung:** mehr Reibung (z.B. Captchas/Anzeigen/Fehlfunktionen) und weniger Komfort.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Isoliere Nutzung in einer **separaten Browser-VM** oder einem dedizierten Browser-Profil.
- Blocke Drittanbieter-Skripte/Ads aggressiv (nur wenn Inbox weiterhin nutzbar bleibt).
- Nutze temp mail **nicht** für identifizierende Konten (Banking, Behörden, Haupt-Accounts).  
**Abwägung:** deutlich höherer Aufwand; Website kann teilweise unbenutzbar werden.

</details>

## Features
- Temporäre Inbox ohne Registrierung (Zufallsadresse, Domains auswählbar)
- Eingehende E-Mails werden nach ca. 60 Minuten automatisch gelöscht
- „Alias/Scramble Address“ als zusätzlicher Schutz gegen erratbare Inbox-IDs
- Anhänge/Downloads werden laut Download-Seite bis zu 24h zwischengespeichert
- API für Inbox-Zugriff (Frontend nutzt die API laut Anbieter)
- Custom Domain: eigene Domain gegen Gebühr nutzbar

## Alternativen
- Firefox Relay (Abwägung: Weiterleitung in echtes Postfach vs. weniger „Wegwerf“-Charakter)
- SimpleLogin (Abwägung: Alias-Management + Weiterleitung vs. Konto/Einrichtung-Aufwand)
- AnonAddy (Abwägung: Alias-Weiterleitung vs. anderes Datenmodell als temporäre Inbox)
- DuckDuckGo E-Mail Protection (Abwägung: Weiterleitung/Tracker-Removal vs. Konto/Flow abhängig vom Anbieter)
- iCloud „E-Mail-Adresse verbergen“ (Abwägung: Apple-ID/Ökosystem vs. systemweite Alias-Funktion)

## Nicht gelöst / offene Punkte
- Jurisdiktion/Betreiberadresse ist in den genutzten Seiten nicht eindeutig als Impressum/Legal-Entity angegeben.

## Quellen

- Custom Domain: "eigene Domain gegen Gebühr nutzbar
- Firefox Relay (Trade-off: "Weiterleitung in echtes Postfach vs. weniger „Wegwerf“-Charakter)
- SimpleLogin (Trade-off: "Alias-Management + Weiterleitung vs. Konto/Setup-Aufwand)
- AnonAddy (Trade-off: "Alias-Weiterleitung vs. anderes Datenmodell als temporäre Inbox)
- DuckDuckGo E-Mail Protection (Trade-off: "Weiterleitung/Tracker-Removal vs. Konto/Flow abhängig vom Anbieter)
- iCloud „E-Mail-Adresse verbergen“ (Trade-off: "Apple-ID/Ökosystem vs. systemweite Alias-Funktion)
- [Guerrilla Mail (Startseite)](https://www.guerrillamail.com/)
- [Über/FAQ + Datenschutz (DE)](https://www.guerrillamail.com/de/about)
- [Terms of Service (DE)](https://www.guerrillamail.com/de/tos)
- [Compose / Senden (DE)](https://www.guerrillamail.com/de/compose)
- [Download-Seite (Cache-Hinweis)](https://www.guerrillamail.com/dl)
- [Go-Guerrilla (GitHub Repo)](https://github.com/flashmob/go-guerrilla)
- [Guerrilla Mail (Startseite)](https://www.guerrillamail.com/)
- [Über/FAQ + Datenschutz (DE)](https://www.guerrillamail.com/de/about)
- [Terms of Service (DE)](https://www.guerrillamail.com/de/tos)
- [Compose / Senden (DE)](https://www.guerrillamail.com/de/compose)
- [Download-Seite (Cache-Hinweis)](https://www.guerrillamail.com/dl)
- [Go-Guerrilla (GitHub Repo)](https://github.com/flashmob/go-guerrilla)
