---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Kagi"
url: "/anbieter/kagi/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-17"
robots: "index,follow"
description: "Kurzprofil von Kagi (Kategorie: Suche)."
provider: ""
name: "Kagi"
category: "Suche"
website: "https://kagi.com"
repo: "https://github.com/kagisearch"
license: "Nicht angegeben"
policies: ""
privacy: "https://kagi.com/privacy"
terms: "https://kagi.com/privacy"
transparency: "Nicht angegeben"
warrant_canary: "https://kagi.com/privacy"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "partial"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "unknown"
kyc_required: "unknown"
jurisdiction: "Delaware, USA"
region: "us"
logs: "minimal"
retention: "specified"
retention_notes: "7d (Load Balancer/VM), 90d (Sentry); Assistant-Threads: 1d"
data_notes: "Laut Privacy-Seite keine Analytics/Telemetry im Browser; Suchanfragen werden nur temporär zum Debugging geloggt und automatisch gelöscht; Debug-Logs haben feste Retention (7 Tage bzw. 90 Tage)."
features: ""
alternatives: ""
payment_processors: "Stripe, Reach, PayPal, OpenNode (je nach Zahlungsart; on-demand geladen)"
sources: ""
---
## Kurzprofil

Kagi ist ein Anbieter aus der Kategorie **Suche**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du eine kostenpflichtige Suche nutzen willst, bei der laut Anbieter keine Analytics/Telemetry im Browser geladen werden und Suchanfragen nicht dauerhaft mit dem Account verknüpft werden.
- **Weniger geeignet wenn:** du ohne Konto/Bezahlung suchen willst oder du eine komplett selbst hostbare bzw. vollständig offene Lösung brauchst.
- **Wichtigster Abwägung:** Bezahlung & Billing-Metadaten vs. weniger Tracking/Ads; zusätzlich reduziert **Privacy Pass** die Verknüpfbarkeit, schränkt aber bewusst personalisierte Features ein.

## Sofortmaßnahmen
- **2FA aktivieren:** reduziert das Risiko von Account-Übernahmen (Abwägung: zusätzlicher Login-Schritt).  
- **Privacy Pass nutzen (falls passend):** Suchanfragen werden dadurch laut Doku nicht mit deinem Konto verknüpfbar (Abwägung: Personalisierung deaktiviert).  
- **Session Link wie ein Passwort behandeln:** verhindert, dass ein „Login-Token“ aus Versehen weitergegeben wird (Abwägung: etwas mehr Sorgfalt im Alltag).

## Entscheidungshilfe
- Wenn du **keine Suchhistorie an ein Konto binden** willst, dann nutze **Privacy Pass** (Abwägung: keine Custom Bangs/Lenses/Personalized Results während Privacy Pass aktiv ist).
- Wenn du **regelmäßig im privaten Modus** suchst (Cookies werden gelöscht), dann nutze **Session Link** oder die Extensions-Variante aus den Docs (Abwägung: Session Link ist ein Zugriffstoken und muss geschützt werden).
- Wenn du **Zahlungsdaten von Suchnutzung trennen** willst, dann achte auf die Zahlungsart und halte Privacy Pass/Tor in Betracht (Abwägung: je nach Zahlungsart entstehen externe Zahlungs-Metadaten).
- Wenn du **Kagi Maps** nutzt, dann rechne mit on-demand geladenen Drittanbietern (Abwägung: Karten/POI-Funktionen vs. zusätzliche Drittressourcen im Browser).
- Wenn du **Kagi Assistant/AI-Tools** nutzt, dann beachte die kurzzeitige Speicherung für Debugging sowie die automatische Thread-Löschung nach einem Tag (Abwägung: Komfort/Features vs. zusätzliche Datenflüsse zu AI-Anbietern).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Kagi |
| Kategorie | Suche |
| Website | https://kagi.com |
| Quellcode | https://github.com/kagisearch |
| Lizenz | Nicht angegeben |
| Preismodell | Mixed (Trial + Paid-Pläne) |
| Free Tier | Ja (Trial mit Limit) |
| Open Source | Teilweise (einige Repos/Komponenten öffentlich, Dienst selbst nicht als OSS beschrieben) |
| Konto erforderlich | Ja (für Kagi Search als Paid Service) |
| Telefon erforderlich | Unklar |
| KYC erforderlich | Unklar |
| Zahlungsabwicklung | Stripe, Reach, PayPal, OpenNode (on-demand) |
| Jurisdiktion | Delaware, USA |
| Logs | Minimal (Debug-/Security-Logs mit fester Retention) |
| Retention | 7 Tage (LB/VM), 90 Tage (Sentry); Assistant-Threads: 1 Tag |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://kagi.com/privacy
- AGB/Terms: https://kagi.com/privacy (Terms of Service auf derselben Seite)
- Transparency Report: Nicht angegeben
- Warrant Canary: https://kagi.com/privacy (Abschnitt „Warrant Canary“)

**Audits (laut Anbieter):**
- Illumant — Web Application Security Assessment (Executive Summary, PDF), 2022-08-26

**Daten-Notizen (kurz):**
- Laut Privacy-Seite lädt Kagi **keine Analytics/Telemetry** im Browser.
- Web-Requests können **temporär** zu Debugging-Zwecken gespeichert werden, „nicht mit einem Account verknüpft“, mit festen Retention-Zeiten (LB/VM: 7 Tage; Sentry: 90 Tage).
- Für Billing wird **Usage-Volumen** gespeichert; Suchanfragen selbst werden laut Anbieter nur kurzzeitig zum Debugging geloggt und danach gelöscht.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Session-/Security-Cookies (z.B. Session-ID, CSRF), optional ein Location-Cookie für Maps, sowie begrenzter LocalStorage für Performance/Maps; außerdem temporäre Debug-Logs auf Servern.
- **Wofür:** Login/Sicherheit (Session/CSRF), Maps/Geolocation optional, Stabilität/Fehleranalyse (Debugging/Sentry), Billing/Abrechnung (Usage-Volumen).
- **Weitergabe/Subprozessoren:** On-demand geladene Drittanbieter u.a. Apple Maps/Mapbox/Yelp/TripAdvisor (Maps) sowie Stripe/Reach/PayPal/OpenNode (Payment); Social-Login lädt Apple/Google/Microsoft (wenn genutzt).
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Stripe, Reach, PayPal, OpenNode (laut Privacy-Seite).
- **Kontakt/DSAR/DPA:** Support-Kontakt via support@kagi.com; DPA/DSAR-Prozess nicht explizit beschrieben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy-Seite: keine Analytics/Telemetry im Browser.
- **Abschaltbar?** Nicht nötig, wenn keine geladen wird; Maps/3rd-Party-Loads sind funktionsabhängig (on-demand).
- **Wo (Menüpfad):** Nicht angegeben (für Analytics), Maps-Nutzung ist produktseitig.

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** Load Balancer Logs 7 Tage; Virtual Machine Logs 7 Tage; Sentry 90 Tage; Kagi Assistant Threads standardmäßig 1 Tag.
- **Lösch-/Opt-out-Optionen:** Assistant-Threads können laut Privacy-Seite auch sofort über die UI gelöscht werden; weitere Opt-outs nicht angegeben.

**Abwägung am Punkt:** Weniger Logs/Telemetrie senkt Metadatenrisiko, kann aber Debugging/Support einschränken; AI-Features bringen zusätzliche Datenflüsse zu Modellanbietern (laut Docs mit Privacy-Fokus je Provider).

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA via Authenticator-App wird dokumentiert; Backup-Codes werden angeboten.
- **Recovery/Account-Wiederherstellung:** Backup-Codes für 2FA; Session Link/Passwortwechsel invalidiert Sessions (laut Docs).
- **Vuln-Handling / Security-Kontakt:** security@kagi.com, Bug-Bounty + Safe-Harbor; security.txt vorhanden.
- **Audit (laut Anbieter):** unabhängiges Security-Audit durch Illumant (Executive Summary als PDF veröffentlicht).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **2FA aktivieren** (Authenticator + Backup-Codes).  
   **Wo:** `Settings → Account → 2FA` (laut Docs „Account Settings“/„Two-Factor Authentication“).  
   **Prüfen:** 2FA-Status „enabled“ + Backup-Codes gespeichert.
2) **Session Link bewusst einsetzen** (nur wenn du häufig Private Browsing nutzt).  
   **Wo:** `Settings → Account → Session Link` (laut „Account Settings“/„Private Browser Session Link“).  
   **Prüfen:** Link ist nicht geteilt/gespeichert in unsicheren Notizen; Logout/Passwortwechsel invalidiert Sessions.
3) **Privacy Pass optional aktivieren** (wenn du weniger Verknüpfbarkeit willst).  
   **Wo:** Browser-Extension/Orion-Menüpfad laut „Kagi Privacy Pass“-Docs.  
   **Prüfen:** Privacy-Pass-Indikator aktiv; personalisierte Features sind erwartbar deaktiviert.

**Stolpersteine:**
- **Session Link ist ein Zugriffstoken:** Wer ihn kennt, kann auf die Session zugreifen (Abwägung: Komfort in Private Windows vs. Token-Schutz).
- **Privacy Pass reduziert Features absichtlich:** Custom Bangs/Lenses/Personalized Results stehen währenddessen nicht zur Verfügung (Abwägung: Personalisierung vs. geringere Verknüpfbarkeit).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **Privacy Pass** für Suche, wenn du Account-Verknüpfung pro Query vermeiden willst (Abwägung: weniger Personalisierung).
- Nutze **Private Browser Sessions** gezielt und verwalte Session Links minimal (Abwägung: mehr Einrichtung/Token-Hygiene).
- Vermeide **Social Login** (Apple/Google/Microsoft), wenn du keine zusätzlichen Identitäts-Provider involvieren willst (Abwägung: weniger Komfort beim Login).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze **Tor-Zugriff + Privacy Pass** (laut Privacy-Seite/Doku vorgesehen) für zusätzliche Trennung (Abwägung: Performance/Komfort).
- Trenne Nutzung strikt nach Kontext (separates Browser-Profil/VM nur für Kagi) (Abwägung: hoher Aufwand).
- Vermeide Maps/POI-Funktionen, wenn du keine on-demand Drittanbieter-Ressourcen im Browser laden willst (Abwägung: weniger lokale/visuelle Features).

</details>

## Features
- Privacy Pass (Suche ohne Identitätsbindung pro Query; Einschränkungen bei Personalisierung)
- Tor-Zugriff möglich (laut Privacy-Doku)
- 2FA (Authenticator-App) + Backup-Codes
- Private Browser Sessions via Session Link
- Bug-Bounty, Safe-Harbor & Security-Kontakt (security@kagi.com)
- Teilweise Open-Source (z.B. Repos/Docs; Dienst selbst nicht als OSS beschrieben)

## Alternativen
- [DuckDuckGo](/anbieter/duckduckgo/)
- [Brave Search](/anbieter/brave-search/)
- [Startpage](/anbieter/startpage/)
- [SearXNG](/anbieter/searxng/)

## Nicht gelöst / offene Punkte
- Öffentliche Subprozessoren-/DPA-Liste wurde in den offiziellen Seiten/Docs nicht gefunden (Stand: 2026-01-17).

## Quellen

- [Privacy + Terms (inkl. Logs/Retention, Payment, Warrant Canary)](https://kagi.com/privacy)
- [Pricing](https://kagi.com/pricing)
- [FAQ](https://www.kagi.com/faq)
- [Kagi Docs: "Commitment to Open Source](https://help.kagi.com/kagi/support-and-community/open-source.html)
- [Illumant Audit (Executive Summary, PDF)](https://staticmedia.kagi.com/kagi-features/Illumant_WASA_Executive_Summary_Report_for_Kagi_20220826_v1_0.pdf)
- [GitHub: "kagisearch (Org)](https://github.com/kagisearch)
- [Privacy + Terms (inkl. Logs/Retention, Payment, Warrant Canary)](https://kagi.com/privacy)
- [Pricing](https://kagi.com/pricing)
- [FAQ](https://www.kagi.com/faq)
- [Kagi Docs: Privacy Pass](https://help.kagi.com/kagi/privacy/privacy-pass.html)
- [Kagi Docs: Two-Factor Authentication](https://help.kagi.com/kagi/privacy/two-factor-authentication.html)
- [Kagi Docs: Private Browser Session Link](https://help.kagi.com/kagi/privacy/private-browser-sessions.html)
- [Kagi Docs: Security](https://help.kagi.com/kagi/privacy/security.html)
- [Kagi Docs: Bug Bounty Program](https://help.kagi.com/kagi/privacy/bug-bounty-program.html)
- [Kagi Docs: Safe Harbor (Legal)](https://help.kagi.com/kagi/privacy/safe-harbor.html)
- [Illumant Audit (Executive Summary, PDF)](https://staticmedia.kagi.com/kagi-features/Illumant_WASA_Executive_Summary_Report_for_Kagi_20220826_v1_0.pdf)
- [GitHub: kagisearch (Org)](https://github.com/kagisearch)
- [Kagi Docs: Commitment to Open Source](https://help.kagi.com/kagi/support-and-community/open-source.html)
