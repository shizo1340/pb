---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Umami"
url: "/anbieter/umami/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-14"
robots: "index,follow"
description: "Kurzprofil von Umami (Kategorie: Analytics)."
provider: ""
name: "Umami"
category: "Analytics"
website: "https://umami.is/"
repo: "https://github.com/umami-software/umami"
license: "MIT"
policies: ""
privacy: "https://umami.is/privacy"
terms: "https://umami.is/terms"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "yes"
phone_required: "unknown"
kyc_required: "unknown"
jurisdiction: "USA (Umami Software, Inc., San Francisco, CA) – Self-Hosting: abhängig vom eigenen Hosting"
region: "us"
logs: "configurable"
retention: "verylong"
retention_notes: "Cloud: 5 Jahre (laut Pricing); Self-Hosting: selbst bestimmbar"
retention_max_days: "1825"
data_notes: "Umami dokumentiert Standard-Webmetriken (u.a. URL-Pfad, Referrer, Browser/OS/Device, Sprache, grobe Location). Für Location wird die IP zur Bestimmung genutzt, aber laut Doku nicht gespeichert. Zusätzlich existiert optionale Produkt-Telemetrie (abschaltbar)."
features: ""
alternatives: ""
payment_processors: "Stripe (Umami Cloud)"
sources: ""
---
## Kurzprofil

Umami ist ein Anbieter aus der Kategorie **Analytics**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Web-Analytics mit dokumentiertem Fokus auf „ohne Cookies/ohne site-übergreifendes Tracking“ einsetzen willst und Self-Hosting (eigene Datenbank/Infra) für dich möglich ist.
- **Weniger geeignet wenn:** du für Compliance eine öffentlich ausformulierte Subprozessoren-Liste, formale Attestierungen/Audits oder sehr klare Cloud-Datenschutzdetails brauchst.
- **Wichtigster Abwägung:** **Self-Hosting = mehr Kontrolle über Datenflüsse & Endpunkte, aber Patch-/Betriebsaufwand**; **Cloud = weniger Betrieb, aber Daten liegen beim Anbieter + Payment über Stripe**.

## Sofortmaßnahmen
- Setze `DISABLE_TELEMETRY=1`, um die dokumentierte anonyme Produkt-Telemetrie abzuschalten.
- Setze im Tracker `data-do-not-track="true"`, um das Browser-Do-Not-Track-Signal zu respektieren.
- Setze im Tracker `data-exclude-search="true"` und `data-exclude-hash="true"`, um URL-Parameter/Fragments aus der Erfassung herauszuhalten.

## Entscheidungshilfe
- Wenn du **minimale Drittparteien-Datenflüsse** willst, dann **self-hoste** Umami und setze `PRIVATE_MODE=1` (Abwägung: mehr Betriebsaufwand, z.B. Updates/Backups).
- Wenn du **schnell starten** willst und der Betrieb nicht bei dir liegen soll, dann nutze **Umami Cloud** (Abwägung: Analytics-Daten liegen außerhalb deiner Infrastruktur; Payment läuft über Stripe).
- Wenn du **URL-Parameter** (z.B. Tokens, interne IDs) in Analytics vermeiden willst, dann aktiviere `data-exclude-search="true"` (Abwägung: weniger Detailanalyse über Query-Parameter).
- Wenn du **Hash-Fragmente** (z.B. SPA-Routing oder interne Marker) vermeiden willst, dann aktiviere `data-exclude-hash="true"` (Abwägung: weniger Detailanalyse von hash-basiertem Routing).
- Wenn du **nicht automatisch alles tracken** willst, dann setze `data-auto-track="false"` und nutze nur explizite Event-Calls (Abwägung: mehr Implementierungsaufwand).
- Wenn du **DNT respektieren** willst, dann setze `data-do-not-track="true"` (Abwägung: Lücken in Daten möglich, je nach Besuchenden-Konfiguration).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Umami |
| Kategorie | Analytics |
| Website | https://umami.is/ |
| Quellcode | https://github.com/umami-software/umami |
| Lizenz | MIT |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Stripe (Umami Cloud) |
| Jurisdiktion | USA (Umami Software, Inc., San Francisco, CA) – Self-Hosting: abhängig vom eigenen Hosting |
| Logs | configurable |
| Retention | Cloud: 5 Jahre (laut Pricing); Self-Hosting: selbst bestimmbar |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://umami.is/privacy
- AGB/Terms: https://umami.is/terms
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Umami dokumentiert u.a. folgende Metriken/Signale für Analytics:
- **Event-Metriken:** Website-ID, Hostname, URL (Pfad + optional Query), Referrer, Seitentitel.
- **Session-Metriken:** Browser/OS (aus User-Agent), Device/Screen, Language.
- **Location-Metriken:** Country/Region/City; Bestimmung über IP/Headers/GeoDB, **IP wird laut Doku nicht gespeichert**.
- **Berechnung:** Visits/Visitors als Hash-basierte Ableitungen mit rotierenden Salts.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** URL/Pfad (optional inkl. Query), Referrer, Titel, Browser/OS/Device, Screen-Größe, Sprache sowie Country/Region/City; für Location wird die IP zur Bestimmung genutzt, aber laut Doku nicht gespeichert.
- **Wofür:** Web-Analytics (Pageviews/Events/Sessions/Reports).
- **Weitergabe/Subprozessoren:** Für Umami Cloud ist **Stripe als Payment Processor** dokumentiert; weitere Subprozessoren sind öffentlich nicht eindeutig verifiziert.
- **Drittlandtransfer:** Unklar (Anbieterfirma ist in den USA; Hosting-Regionen/Transfers werden hier nicht belastbar aus Primärquellen zusammengefasst).
- **Zahlungsabwicklung/Payment Processor:** Stripe (Umami Cloud).
- **Kontakt/DSAR/DPA:** DPA als PDF verfügbar; DSAR-/Kontakt-Details in Privacy Policy verlinkt, aber in diesem Stand nicht vollständig extrahiert.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Umami dokumentiert anonyme Produkt-Telemetrie („collects completely anonymous telemetry data“).
- **Abschaltbar?** Ja, via `DISABLE_TELEMETRY=1` (Environment Variable).
- **Wo (Menüpfad):** Self-Hosting: Server-/Container-Config (`.env`), kein UI-Schalter dokumentiert.

**Logs & Retention:**
- **Logging-Level:** configurable (z.B. `DEBUG=...`, optionales Query-Logging im Dev-Modus).
- **Aufbewahrung:** Cloud: 5 Jahre (laut Pricing); Self-Hosting: abhängig von eigener DB/Backups.
- **Lösch-/Opt-out-Optionen:** Für Cloud sind Account-/Billing-Flows dokumentiert; für Self-Hosting liegt Löschung praktisch in deiner Datenbankverwaltung.

**Abwägung am Punkt:** Weniger Telemetrie/Externals kann Diagnose/Support erschweren; mehr Telemetrie/Externals erhöht Metadaten- und Netzwerk-Risiken.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben (Umami ist ein Analytics-Backend; Verschlüsselungsdetails sind in den genutzten Quellen nicht spezifiziert).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben.
- **Recovery/Account-Wiederherstellung:** Cloud-Login-Doku beschreibt Passwort-Reset via E-Mail; Self-Hosting startet mit Default-Admin (`admin`/`umami`) und soll direkt geändert werden.
- **Vuln-Handling / Security-Kontakt:** GitHub zeigt **keine SECURITY.md/Security Policy** im Repo; Meldung über „Report a vulnerability“ ist über GitHub möglich.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Admin-Passwort sofort ändern (Self-Hosting)**  
   **Menüpfad:** Settings → Profile → „Change password“  
   **Prüfen:** Login mit Default (`admin`/`umami`) funktioniert nicht mehr.
2) **Instanz-Härtung per Environment Variables**  
   **Setzen:** `APP_SECRET="..."` (zufällig) + optional `FORCE_SSL=1` bei HTTPS-Betrieb  
   **Prüfen:** Secrets nicht Standard; HSTS/SSL-Verhalten passt zu deinem Deployment.
3) **Tracker-Daten minimieren (im Script)**  
   **Setzen:** `data-do-not-track="true"`, `data-exclude-search="true"`, `data-exclude-hash="true"`  
   **Prüfen:** In „Metric definitions“ ist klar, welche Felder dadurch entfallen/verkürzt werden.

**Stolpersteine:**
- Self-Hosting startet mit **Default-Credentials**; wenn du sie nicht änderst, ist die Oberfläche trivial angreifbar.
- Externe Calls können je nach Einrichtung auftreten (z.B. Website-Icons via Standard-Favicon-Service), falls nicht deaktiviert.

<details>
<summary>Profil B (Datensparsam)</summary>

- **Produkt-Telemetrie deaktivieren:** `DISABLE_TELEMETRY=1` (Abwägung: weniger Feedback/Diagnose für den Anbieter).
- **Externals reduzieren:** `PRIVATE_MODE=1` (Abwägung: Website-Icons/komfortable Features können entfallen).
- **Updates/Checks bewusst steuern:** `DISABLE_UPDATES=1` + eigene Patch-Routine (Abwägung: du musst Updates aktiv verfolgen).
- **Eigene Besuche ausschließen:** `IGNORE_IP="..."` (Abwägung: erfordert saubere IP-/Proxy-Header-Konfiguration).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Strikte Trennung:** Umami-Dashboard in separatem Admin-Browserprofil/VM betreiben (Abwägung: mehr Aufwand im Alltag).
- **Nur explizites Tracking:** `data-auto-track="false"` und Events nur gezielt auslösen (Abwägung: Implementierungsaufwand, mehr „Lücken“).
- **Payload-Kontrolle:** `data-before-send="..."` nutzen, um Payload zu prüfen/zu kürzen oder zu blockieren (Abwägung: Wartungsaufwand, Risiko von Tracking-Fehlern).

</details>

## Features
- Self-Hosting (Docker/Source, PostgreSQL)
- Umami Cloud (gehostete Variante)
- Konfigurierbarer Tracker (DNT, Query/Hash ausschließen, manuelles Tracking)
- Reports/Insights (u.a. Funnels, Journeys, Retention, UTM)
- Teams & Rollen
- REST API

## Alternativen
- Plausible (ähnliche Kategorie; Abwägung: anderes Hosting-/Produktmodell je nach Einsatz)
- Matomo (ähnliche Kategorie; Abwägung: ggf. breiteres Einrichtung/Plugin-Umfeld, dafür mehr Betriebs- und Tuning-Aufwand möglich)
- GoatCounter (ähnliche Kategorie; Abwägung: sehr schlank gehalten, dafür ggf. weniger Analyse-/Produktfeatures)

## Nicht gelöst / offene Punkte
- Öffentliche Subprozessoren-Liste/DSAR-Kontakt nicht klar ersichtlich.

## Quellen

- Plausible (ähnliche Kategorie; Trade-off: "anderer Funktionsumfang/Hosting-Modell)
- Matomo (ähnliche Kategorie; Trade-off: "ggf. komplexere Betriebs-/Konfigurationslandschaft)
- GoatCounter (ähnliche Kategorie; Trade-off: "sehr schlank, dafür ggf. weniger Analyse-Features)
- [Umami Website](https://umami.is/)
- [Umami Docs (v3)](https://docs.umami.is/docs)
- [Umami Pricing](https://umami.is/pricing)
- [Umami Terms of Service](https://umami.is/terms)
- [Umami Privacy Policy](https://umami.is/privacy)
- [Umami Cloud Docs: "Subscription (Stripe)](https://docs.umami.is/docs/cloud/subscription)
- [Umami Docs: "Login](https://docs.umami.is/docs/login)
- [Umami DPA (PDF)](https://umami.is/umami-dpa.pdf)
- [GitHub Repository: "umami-software/umami](https://github.com/umami-software/umami)
- [GitHub Security Tab (Security Policy Status)](https://github.com/umami-software/umami/security)
- [Umami Website](https://umami.is/)
- [Umami Docs (v3)](https://docs.umami.is/docs)
- [Umami Pricing](https://umami.is/pricing)
- [Umami Terms of Service](https://umami.is/terms)
- [Umami Privacy Policy](https://umami.is/privacy)
- [Umami Cloud Docs: Overview](https://docs.umami.is/docs/cloud)
- [Umami Cloud Docs: Subscription (Stripe)](https://docs.umami.is/docs/cloud/subscription)
- [Umami Docs: Metric definitions](https://docs.umami.is/docs/metric-definitions)
- [Umami Docs: Tracker configuration](https://docs.umami.is/docs/tracker-configuration)
- [Umami Docs: Environment variables](https://docs.umami.is/docs/environment-variables)
- [Umami Docs: Installation](https://umami.is/docs/install)
- [Umami Docs: Login](https://docs.umami.is/docs/login)
- [Umami DPA (PDF)](https://umami.is/umami-dpa.pdf)
- [GitHub Quellcode: umami-software/umami](https://github.com/umami-software/umami)
- [GitHub Security Tab (Security Policy Status)](https://github.com/umami-software/umami/security)
