---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / GoatCounter"
url: "/anbieter/goatcounter/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-13"
robots: "index,follow"
description: "Kurzprofil von GoatCounter (Kategorie: Analytics)."
provider: ""
name: "GoatCounter"
category: "Analytics"
website: "https://www.goatcounter.com/"
repo: "https://github.com/arp242/goatcounter"
license: "EUPL-1.2 (modifiziert)"
policies: ""
privacy: "https://www.goatcounter.com/help/privacy"
terms: "https://www.goatcounter.com/help/terms"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Irland (Betrieb laut Anbieter)"
region: "eu"
logs: "minimal"
logs_notes: "minimal (laut Anbieter: keine IPs/volle User-Agents/Tracker-IDs in DB; Session-Mapping nur im RAM bis 8h)"
retention: "mid"
retention_notes: "Bis Löschung (Account/Site); Backups bis zu 30 Tage (hosted); Session-Mapping im RAM bis zu 8 Stunden"
retention_max_days: "30"
data_notes: "GoatCounter speichert standardmäßig aggregierte Statistik-Tabellen (Tag/Stunde) ohne Verknüpfung zwischen Datentypen; optionales „Individual pageviews“-Logging ist standardmäßig deaktiviert."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

GoatCounter ist ein Anbieter aus der Kategorie **Analytics**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Web-Analytics mit Fokus auf aggregierten Statistiken ohne nutzerbezogene IDs suchst und Self-Hosting als Option haben willst.
- **Weniger geeignet wenn:** du detaillierte User-Journeys/Personalisierung oder sehr feingranulare Nutzerprofile erwartest (GoatCounter arbeitet primär aggregiert; Detailmodus ist optional).
- **Wichtigster Abwägung:** Mehr Detail (z.B. „Individual pageviews“) bedeutet mehr Metadaten in der Datenbank; weniger Detail reduziert Auswertungsmöglichkeiten.

## Sofortmaßnahmen
- **Detailmodus vermeiden:** „Individual pageviews“ nur aktivieren, wenn du es wirklich brauchst (Wirkung: weniger linkbare Metadaten in der DB).  
- **SRI nutzen:** für stabile Einbindung `count.vX.js` mit `integrity=` verwenden (Wirkung: Schutz vor unbemerkten Script-Änderungen).  
- **CSP sauber setzen:** `script-src`/`connect-src` (und ggf. `img-src`) nach Doku ergänzen (Wirkung: weniger Angriffsfläche durch restriktive Script-Policies).

## Entscheidungshilfe
- Wenn du **möglichst wenig Metadaten** willst, dann bleibe bei **aggregierten Statistiken** und lasse „Individual pageviews“ deaktiviert (Abwägung: weniger Detail/Debugging-Möglichkeiten).
- Wenn du **keine Cookies/Browser-Speicher** nutzen willst, dann ist die Standard-Integration passend (Abwägung: Blocker/Restriktionen können Requests trotzdem verhindern).
- Wenn du **JavaScript vermeiden** willst, dann nutze den **Tracking-Pixel** (Abwägung: kein Referrer/Screen-Size, potenziell mehr Bot-Traffic).
- Wenn du **Dritt-Host für `count.js`** vermeiden willst, dann hoste `count.js` selbst oder inline (Abwägung: keine automatischen Updates).
- Wenn du **Betrieb/Datenspeicher vollständig kontrollieren** willst, dann ist **Self-Hosting** relevant (Abwägung: Wartung/Backups/Updates liegen bei dir).
- Wenn du **alle Daten entfernen** willst, dann nutze die Löschfunktion im Dashboard (Abwägung: Backups können bis zu 30 Tage bestehen).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | GoatCounter |
| Kategorie | Analytics |
| Website | https://www.goatcounter.com/ |
| Quellcode | https://github.com/arp242/goatcounter |
| Lizenz | EUPL-1.2 (modifiziert) |
| Preismodell | free (Spenden-basiert, „reasonable public usage“) |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | yes (für goatcounter.com hosted) |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | GitHub Sponsors (optional, Spenden) |
| Jurisdiktion | Irland (Betrieb laut Anbieter) |
| Logs | minimal (keine IPs/volle User-Agents/Tracker-IDs in DB; Session-Mapping nur im RAM bis 8h) |
| Retention | Bis Löschung; Backups bis 30 Tage (hosted); Session-Mapping im RAM bis 8h |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.goatcounter.com/help/privacy
- AGB/Terms: https://www.goatcounter.com/help/terms
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
GoatCounter speichert standardmäßig aggregierte Statistiken pro Tag/Stunde (ohne verknüpfbare Nutzerprofile). Optional kann „Individual pageviews“ aktiviert werden; das erhöht Detailgrad und Metadaten in der Datenbank.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Aggregierte Zählwerte pro Pfad/Tag oder Pfad/Stunde; zusätzlich aggregierte Kategorien wie Browser, System, Sprache, Screen-Width und Standort (Standort aus IP abgeleitet, IP selbst wird laut Anbieter nicht gespeichert). Optional: „Individual pageviews“ (pro Seitenaufruf ein Datensatz).  
- **Wofür:** Darstellung von Nutzungsstatistiken (Pageviews, Referrer, Kampagnen etc.) im Dashboard.  
- **Weitergabe/Subprozessoren:** Laut Anbieter werden keine Informationen mit Dritten geteilt; Daten liegen bei der hosted Variante auf Servern von Hetzner (Finnland/Deutschland).  
- **Drittlandtransfer:** Nicht angegeben (genannt sind Finnland und Deutschland als Serverstandorte für hosted).  
- **Zahlungsabwicklung/Payment Processor:** Keine Pflichtzahlung; Spenden optional via GitHub Sponsors.  
- **Kontakt/DSAR/DPA:** Support per E-Mail (support@goatcounter.com) oder GitHub Issues; DPA/AV-Vertrag nicht angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nicht angegeben als separate Produkt-Telemetrie; Kernfunktion ist das Analytics-Counting über `/count`.
- **Abschaltbar?** Datentypen (Browser/System/Location/Language/Width) können laut Anbieter pro Site deaktiviert werden.
- **Wo (Menüpfad):** Im Dashboard in den Site-/Settings (genaue UI-Bezeichnung nicht in den Docs festgelegt).

**Logs & Retention:**
- **Logging-Level:** minimal (laut Anbieter: keine IP-Adressen, keine vollständigen User-Agent-Header und keine Tracker-IDs in der Datenbank).
- **Aufbewahrung:** Session-Mapping (site + IP + User-Agent → Random-ID) nur im RAM bis zu 8 Stunden; hosted Backups bis zu 30 Tage; sonst bis zur Löschung.
- **Lösch-/Opt-out-Optionen:** Account- und Datentotal-Löschung über `Settings → Delete Account` (hosted).

**Abwägung am Punkt:** Weniger Detaildaten erschweren Diagnose/Support und reduzieren Analyse-Tiefe; mehr Detaildaten erhöhen Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben (Analytics-Daten sind serverseitig gespeichert; Self-Hosting-Datenbank liegt bei dir).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben.
- **Recovery/Account-Wiederherstellung:** Nicht angegeben (hosted Login über Account; Kontaktkanäle sind dokumentiert).
- **Vuln-Handling / Security-Kontakt:** Support via `support@goatcounter.com` oder öffentliche GitHub Issues.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren:** starkes, einzigartiges Passwort + Passwort-Manager; E-Mail für den Account aktuell halten (Pflicht laut Terms).  
   **Prüfen:** Login funktioniert, Account-Mail ist korrekt hinterlegt.
2) **Sitzungsrisiko reduzieren:** nach Admin-Nutzung ausloggen; keine „dauerhaft angemeldet“-Browserprofile auf Shared-Geräten.  
   **Prüfen:** Logout beendet Session (Cookie wird entfernt).
3) **Datensparsam tracken:** „Individual pageviews“ deaktiviert lassen und nur benötigte Datentypen erfassen (Browser/System/Location/Width/Language).  
   **Prüfen:** in der Statistik fehlen deaktivierte Kategorien (z.B. keine Screen-Size-Auswertung).

**Stolpersteine:**
- „Individual pageviews“ speichert pro Aufruf zusätzliche Details (Abwägung: Detailanalyse vs. mehr Metadaten in der DB).
- Referrer-Tracking kann URLs von Drittseiten enthalten (Abwägung: Kampagnenanalyse vs. mehr Kontextdaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- Deaktiviere möglichst viele Datentypen pro Site (z.B. Standort/Screen-Details), wenn du sie nicht brauchst.
- Nutze den Tracking-Pixel nur, wenn du JavaScript vermeiden willst (und akzeptiere die Einschränkungen: kein Referrer/Screen-Size).
- Hoste `count.js` selbst (oder inline), wenn du externe Script-Hosts vermeiden willst.  
**Abwägung:** weniger Metadaten/Abhängigkeiten, aber mehr Wartung und weniger Komfort.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Self-Hosting** (eigene Domain, eigene DB) und striktes Server-Härtung (Updates/Backups/Access-Control).
- Nutze **SRI + versionierte Scripts** oder self-hosted `count.js`, um Supply-Chain-Risiken zu reduzieren.
- CSP restriktiv halten (`script-src`, `connect-src`, ggf. `img-src`) und nur exakt benötigte Endpunkte freigeben.  
**Abwägung:** maximale Kontrolle, aber deutlich mehr Betriebsaufwand und potenziell mehr Fehlerquellen.

</details>

## Features
- Aggregierte Statistiken ohne Cookies/Tracker-IDs (laut Anbieter keine Speicherung von IPs/vollem User-Agent in DB).
- Optionales „Individual pageviews“-Logging (standardmäßig deaktiviert).
- Mehrere Integrationswege: JavaScript, Tracking-Pixel, Backend/API, Import aus Server-Logfiles.
- Exportmöglichkeiten („Own your data“) und jederzeitige Löschung (hosted: `Settings → Delete Account`).
- Dokumentierte CSP- und SRI-Optionen sowie Möglichkeit, `count.js` selbst zu hosten.

## Alternativen
- Plausible Analytics (ähnliche Kategorie; Abwägung: anderes Hosting-/Betriebsmodell und andere Defaults möglich).
- Matomo (ähnliche Kategorie; Abwägung: mehr Funktionsumfang kann mehr Einrichtung/Komplexität bedeuten).
- Fathom Analytics (ähnliche Kategorie; Abwägung: anderes Preismodell/Hosting-Fokus möglich).

## Nicht gelöst / offene Punkte
- Nicht angegeben: Ob und wie lange Webserver-/Access-Logs (außerhalb der Datenbank) gespeichert werden.
- Nicht angegeben: 2FA/MFA/Passkeys für hosted Accounts.

## Quellen

- Plausible Analytics (ähnliche Kategorie; Trade-off: "anderes Hosting-/Betriebsmodell)
- Matomo (ähnliche Kategorie; Trade-off: "mehr Funktionsumfang, mehr Setup/Komplexität möglich)
- Fathom Analytics (ähnliche Kategorie; Trade-off: "anderes Preismodell/Hosting-Fokus möglich)
- https://github.com/arp242/goatcounter
- [GoatCounter – Homepage (Features & Pricing)](https://www.goatcounter.com/)
- [Privacy Policy](https://www.goatcounter.com/help/privacy)
- [Terms of use](https://www.goatcounter.com/help/terms)
- [Content-Security-Policy](https://www.goatcounter.com/help/csp)
- [Tracking pixel](https://www.goatcounter.com/help/pixel)
- [Use SRI with count.js (versionierte Scripts)](https://www.goatcounter.com/help/countjs-versions)
- [Host count.js somewhere else](https://www.goatcounter.com/help/countjs-host)
- [GDPR consent notices (Anbieter-Einordnung)](https://www.goatcounter.com/help/gdpr)
- [Source Code (GitHub)](https://github.com/arp242/goatcounter)
