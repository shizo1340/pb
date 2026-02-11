---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Ackee"
url: "/anbieter/ackee/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-06"
robots: "index,follow"
description: "Kurzprofil von Ackee (Kategorie: Analytics)."
provider: ""
name: "Ackee"
category: "Analytics"
website: "https://ackee.electerious.com/"
repo: "https://github.com/electerious/Ackee"
license: "MIT"
policies: ""
privacy: "https://electerious.com/privacy-policy"
terms: "https://electerious.com/terms-of-service"
transparency: ""
warrant_canary: ""
audits: "[]"
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Deutschland (Betreiber/Projektseite Electerious); Datenstandort beim Self-Hosting: abhängig vom eigenen Hosting"
region: "eu"
logs: "unknown"
retention: "unknown"
data_notes: "self-hosted Web-Analytics (Node.js) mit MongoDB. Projekt wirbt mit: keine Cookies, kein Unique-User-Tracking, mehrstufige Anonymisierung."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Ackee ist ein Anbieter aus der Kategorie **Analytics**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Web-Analytics **selbst hosten** willst und dabei auf **cookie-freies Tracking ohne Unique-User-Tracking** setzt (laut Projekt).
- **Weniger geeignet wenn:** du ein „fertig gehostetes“ Analytics-Angebot mit klarer Subprozessoren-/DPA-Dokumentation suchst (bei Ackee hängt vieles am eigenen Hosting).
- **Wichtigster Abwägung:** **Kontrolle über Daten & Infrastruktur** vs. **eigene Betriebsverantwortung** (Updates, Absicherung, Logs/Backups, Datenbank).

## Sofortmaßnahmen
- **`ackee-tracker` ohne „detailed“ nutzen** (Standard): reduziert Risiko, dass zusätzliche (vom Projekt als „personal data“ bezeichnete) Felder übertragen werden.
- **Ackee nur über HTTPS betreiben** (Reverse Proxy/TLS davor setzen): verhindert, dass Tracking-/Login-Traffic im Klartext läuft.
- **CORS/Origins restriktiv konfigurieren:** senkt das Risiko, dass Dritte dein Ackee-Endpunkt missbrauchen (z.B. fremde Seiten, die ungewollt Daten senden).

## Entscheidungshilfe
- Wenn du **Daten im eigenen Hosting** halten willst, dann nutze **Ackee self-hosted** (Abwägung: du musst Betrieb, Updates und Absicherung selbst übernehmen).
- Wenn du **kein Consent-Banner für Analytics** aus Cookie-Gründen willst, dann ist „cookie-frei / kein Unique-User-Tracking“ relevant (Abwägung: trotzdem entstehen Metadaten wie Referrer, Geräte-/Browserinfos).
- Wenn du **Events (Klicks, Signups)** messen willst, dann nutze das Event-Tracking über `ackee-tracker` (Abwägung: mehr Ereignisdaten = mehr potenziell sensible Metadaten).
- Wenn du **Single-Page-Apps** trackst, dann nutze programmatic Tracking (Abwägung: mehr Implementierungsaufwand, dafür kontrollierbare Messpunkte).
- Wenn du **zusätzliche Detaildaten** erfassen willst, dann aktiviere `detailed` nur bewusst (Abwägung: laut Tracker-Doku „personal data“, also höheres Datenschutz-/Rechtsrisiko).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Ackee |
| Kategorie | Analytics |
| Website | https://ackee.electerious.com/ |
| Quellcode | https://github.com/electerious/Ackee |
| Lizenz | MIT |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Deutschland (Betreiber/Projektseite Electerious); Datenstandort beim Self-Hosting: abhängig vom eigenen Hosting |
| Logs | Nicht angegeben |
| Retention | Nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://electerious.com/privacy-policy
- AGB/Terms: https://electerious.com/terms-of-service
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
self-hosted Web-Analytics (Node.js) mit MongoDB. Projekt wirbt mit: keine Cookies, kein Unique-User-Tracking, mehrstufige Anonymisierung.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Projekt u.a. **Anzahl der Besuche**, **Besuchsdauer**, **Referrer**, **Sprache**, **Bildschirmdimensionen**, **Displayfarben**, **Betriebssystem**, **Browser**, **Gerät**.
- **Wofür:** Web-Analytics/Statistiken (Traffic-Insights) auf eigener Infrastruktur.
- **Weitergabe/Subprozessoren:** Für den **self-hosted Betrieb**: abhängig vom eigenen Hosting/Serverbetrieb (Provider-seitig keine Subprozessoren-Liste für dein Deployment genannt).
- **Drittlandtransfer:** Beim Self-Hosting abhängig von deinem Hosting-Standort/Einrichtung.
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (kein regulärer Checkout für Ackee dokumentiert).
- **Kontakt/DSAR/DPA:** Kontaktangaben/Verantwortlicher stehen in der Electerious Privacy Policy (für die Projekt-/Webseiten).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nicht angegeben / Unklar (bei Self-Hosting liegt alles auf deinem Server; externe Produkt-Telemetrie ist nicht dokumentiert).
- **Abschaltbar?** Nicht angegeben / Unklar
- **Wo (Menüpfad):** Nicht angegeben

**Logs & Retention:**
- **Logging-Level:** Nicht angegeben
- **Aufbewahrung:** Nicht angegeben
- **Lösch-/Opt-out-Optionen:** Nicht angegeben / Unklar (relevant ist v.a. das Löschen in deiner MongoDB/Backups)

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben / Unklar (typisch Server-side Speicherung im eigenen Einrichtung).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben / Unklar
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben / Unklar
- **Recovery/Account-Wiederherstellung:** Nicht angegeben / Unklar (Self-Hosting: abhängig von deinem Admin-/DB-Backup)
- **Vuln-Handling / Security-Kontakt:** Laut GitHub-Sicherheitsübersicht **keine SECURITY.md / keine Security Policy** hinterlegt.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Zugriff auf das Ackee-Dashboard absichern** (starkes Admin-Passwort, getrennte Admin-URL oder zusätzlicher Reverse-Proxy-Schutz).  
   **Prüfen:** Admin-UI ist nicht öffentlich offen (z.B. nicht ohne Auth erreichbar).
2) **HTTPS erzwingen** (Reverse Proxy vor Ackee; Ackee selbst bietet laut Doku keinen TLS-Endpunkt).  
   **Prüfen:** Aufruf der Oberfläche und `/api` nur via `https://…`, kein Klartext-HTTP.
3) **Tracking sparsam starten**: `ackee-tracker` mit Standardoptionen einsetzen und **`detailed: false` lassen**.  
   **Prüfen:** Im Tracking-Code/Config ist kein `detailed: true` gesetzt.

**Stolpersteine:**
- Wenn du `detailed` aktivierst, nennt der Tracker das „personal data“ (Abwägung: mehr Details vs. höheres Datenschutzrisiko).
- Eine falsch konfigurierte CORS/Origin-Policy kann dazu führen, dass fremde Seiten Daten in deine Instanz senden (Abwägung: einfache Integration vs. Missbrauchsfläche).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze `ackee-tracker` bewusst **ohne „detailed“** und tracke nur Seiten/Events, die du wirklich brauchst.
- Setze `ignoreLocalhost: true`, um lokale Tests nicht zu erfassen (reduziert „Noise“ in Daten).
- Vermeide Event-Keys/Values, die sensible Inhalte tragen könnten (z.B. E-Mail/IDs als „key“).

**Abwägung:** weniger Messdetails, dafür geringere Metadatenmenge.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Isoliere Ackee (eigene VM/Container-Netz, restriktive Firewall, Zugriff nur via VPN/Allowlist).
- Schütze Admin-Zugriff zusätzlich (z.B. Reverse Proxy + starke Authentisierung, getrennte Admin-Domain).
- Halte Abhängigkeiten aktuell und beachte Release-Hinweise (z.B. Fixes zu Anonymisierung/Unique-Visitor-Zählung).

**Abwägung:** höherer Betriebsaufwand, mehr Komplexität bei Deployments/Updates.

</details>

## Features
- self-hosted (eigener Server)
- Cookie-frei (laut Projekt)
- Kein Unique-User-Tracking (laut Projekt)
- Mehrstufige Anonymisierung (laut Projekt)
- GraphQL API
- ackee-tracker (Script/Modul) inkl. SPA-tauglichem programmatic Tracking

## Alternativen
- Plausible Analytics – ähnliche Kategorie; Abwägung: anderer Funktionsumfang/Hosting-Einrichtung je nach Nutzung.
- [Matomo](/anbieter/matomo/) – ähnliche Kategorie; Abwägung: typischerweise mehr Feature-Komplexität und Konfigurationsfläche.
- [Umami](/anbieter/umami/) – ähnliche Kategorie; Abwägung: andere Datenmodelle/Integrationswege.
- [GoatCounter](/anbieter/goatcounter/) – ähnliche Kategorie; Abwägung: andere Detailtiefe und Bedienlogik.

## Nicht gelöst / offene Punkte
- Server-Logs, Retention und Löschpfade sind in den Primärquellen nicht konkret dokumentiert (Self-Hosting: hängt stark vom eigenen Betrieb ab).
- Security/Disclosure-Prozess ist nicht als SECURITY.md hinterlegt (Stand: 2026-01-06).

## Quellen

- title: "Electerious – Privacy Policy
- [Ackee – Website](https://ackee.electerious.com/)
- [Ackee – GitHub (Quellcode/README)](https://github.com/electerious/Ackee)
- [ackee-tracker – GitHub](https://github.com/electerious/ackee-tracker)
- [Ackee – Releases (Hinweis zu Anonymisierung/Unique-Visitor-Fix v3.3.1)](https://github.com/electerious/Ackee/releases)
- [Electerious – Imprint](https://electerious.com/imprint)
- [Electerious – Terms of Service](https://electerious.com/terms-of-service)
- [Electerious – Privacy Policy](https://electerious.com/privacy-policy)

