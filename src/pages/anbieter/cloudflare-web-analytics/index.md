---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Cloudflare Web Analytics"
url: "/anbieter/cloudflare-web-analytics/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-09"
robots: "index,follow"
description: "Kurzprofil von Cloudflare Web Analytics (Kategorie: Analytics)."
provider: ""
name: "Cloudflare Web Analytics"
category: "Analytics"
website: "https://www.cloudflare.com/web-analytics/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://www.cloudflare.com/privacypolicy/"
terms: "https://www.cloudflare.com/terms/"
transparency: "https://www.cloudflare.com/transparency/"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "unknown"
self_host_possible: "no"
account_required: "yes"
phone_required: "unknown"
kyc_required: "no"
jurisdiction: "USA (Cloudflare, Inc.)"
region: "us"
logs: "minimal"
retention: "long"
retention_notes: "6 Monate (Zugriff im Dashboard laut Anbieter)"
retention_max_days: "180"
data_notes: "Client-seitige Messung (RUM) via JS-Beacon; laut Anbieter keine Cookies/LocalStorage und keine Query-Strings; Beacon lädt von static.cloudflareinsights.com und sendet an /cdn-cgi/rum."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Cloudflare Web Analytics ist ein Anbieter aus der Kategorie **Analytics**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Web-Traffic und Performance client-seitig messen willst, ohne eigene Analytics-Infrastruktur zu betreiben (JS-Beacon auf der Website).
- **Weniger geeignet wenn:** du Analytics komplett ohne Drittanbieter/Cloud-Dienst brauchst (Self-Hosting ist nicht vorgesehen).
- **Wichtigster Abwägung:** weniger Komfort-/Integrationsoptionen vs. geringere Datenerhebung (z.B. keine Query-Strings/UTMs laut Anbieter).

## Sofortmaßnahmen
- **2FA für den Cloudflare-Account aktivieren** (reduziert Risiko von Account-Übernahme).
- **CSP prüfen/anpassen** (Beacon muss von `static.cloudflareinsights.com` laden, sonst keine Messung).
- **Manuelles Einrichtung bevorzugen, wenn du Reichweite begrenzen willst** (nur Seiten mit Snippet werden gemessen).

## Entscheidungshilfe
- Wenn du **nur Basis-Metriken** brauchst (Pageviews + Performance), dann reicht das **manuelle Snippet** (Abwägung: keine automatische Abdeckung aller Subdomains).
- Wenn deine Domain **über Cloudflare proxied** ist (orange cloud), dann ist **automatisches Einrichtung** möglich (Abwägung: Injection kann an technischen Headers/HTML scheitern).
- Wenn du **keine Query-Strings erfassen** willst (z.B. wegen sensibler Parameter), dann passt das Modell, da Cloudflare Web Analytics laut Anbieter **keine Query-Strings loggt** (Abwägung: keine UTM-Auswertung).
- Wenn du bei SPAs **keine automatische Route-Tracking-Logik** willst, dann setze `spa=false` im Beacon (Abwägung: weniger automatische SPA-Sichtbarkeit).
- Wenn du Daten länger als **6 Monate** vergleichen willst, dann plane Export/Reporting extern (Abwägung: zusätzlicher Aufwand).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Cloudflare Web Analytics |
| Kategorie | Analytics |
| Website | https://www.cloudflare.com/web-analytics/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | unknown |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | USA (Cloudflare, Inc.) |
| Logs | minimal |
| Retention | 6 Monate (Zugriff im Dashboard laut Anbieter) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.cloudflare.com/privacypolicy/
- AGB/Terms: https://www.cloudflare.com/terms/
- Transparency Report: https://www.cloudflare.com/transparency/
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Client-seitige Messung (RUM) via JS-Beacon; laut Anbieter keine Cookies/LocalStorage und keine Query-Strings; Beacon lädt von static.cloudflareinsights.com und sendet an /cdn-cgi/rum.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Timing-/Performance-Metriken aus dem Browser (RUM) + Pageviews/Visitors; laut Doku „minimum amount of information – timing metrics“.  
- **Wofür:** Performance/Traffic-Übersicht im Web-Analytics-Dashboard.
- **Weitergabe/Subprozessoren:** Cloudflare veröffentlicht eine Subprozessoren-Liste für „Cloudflare services“.  
- **Drittlandtransfer:** Nicht konkret für Web Analytics angegeben (Cloudflare ist US-Anbieter; Details typischerweise in Privacy Policy/DPA).
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (Feature ist auf Plänen verfügbar; Billing abhängig vom Cloudflare-Account/Plan).
- **Kontakt/DSAR/DPA:** Privacy Policy nennt Kontaktwege; Cloudflare bietet DPA und eine öffentliche Subprozessorenliste.

**Wichtige Implementations-Fakten (aus Doku):**
- Beacon lädt von `https://static.cloudflareinsights.com/beacon.min.js`.  
- Beacon sendet Daten an `https://<deinedomain>/cdn-cgi/rum` (proxied) oder `https://cloudflareinsights.com/cdn-cgi/rum` (nicht proxied).  
- Laut FAQ: Zugriff auf Daten im Dashboard „previous six months“.  
- Laut FAQ: Query-Strings/UTM-Parameter werden aktuell nicht geloggt („do not log query strings“).  
- Für Core Web Vitals: keine Cookies/`localStorage`; Vitals Explorer fingerprintet laut Doku keine Personen über IP/User-Agent.  

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nur wenn du Web Analytics aktivierst und den Beacon einbindest (manuell oder via automatische Injection bei proxied Sites).
- **Abschaltbar?** Ja: Beacon entfernen bzw. Feature im Dashboard deaktivieren (keine Messung mehr).
- **Wo (Menüpfad):** Cloudflare Dashboard → **Web Analytics** → Site auswählen → Einrichtung/Manage (je nach Zone).

**Logs & Retention:**
- **Logging-Level:** minimal (Timing-/Performance-Metriken + Dimensions, laut Doku „minimum amount of information – timing metrics“).
- **Aufbewahrung:** 6 Monate (Zugriff im Dashboard laut FAQ).
- **Lösch-/Opt-out-Optionen:** Nicht konkret für einzelne Besucher beschrieben (Deaktivierung/Entfernung des Beacons stoppt neue Erhebung).

**Abwägung am Punkt:** Weniger Erhebung (z.B. keine Query-Strings) reduziert Analyse-Tiefe; mehr Erhebung würde Metadatenrisiken erhöhen.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben (Analytics-Event-Übertragung erfolgt über HTTPS-Endpunkte; Details nicht als Sicherheitsgarantie dokumentiert).
- **KDF/Parameter/Schlüsselableitung:** Nicht relevant (kein Passwort-Manager/Key-Storage-Produkt).
- **MFA/2FA/Passkeys/Hardware-Keys:** Cloudflare bietet 2FA für Logins (TOTP, Security Key/WebAuthn, E-Mail 2FA) über Dashboard → My Profile → Authentication.
- **Recovery/Account-Wiederherstellung:** Backup-Codes für 2FA (laut 2FA-Doku).
- **Vuln-Handling / Security-Kontakt:** Cloudflare hat eine Vulnerability Disclosure Policy.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren (2FA)** für den Cloudflare-Account.  
   **Menüpfad:** Cloudflare Dashboard → **My Profile** → **Authentication** → Two-Factor Authentication → **Manage**.  
   **Prüfen:** 2FA aktiv + Backup-Codes gesichert.
2) **Beacon bewusst einbinden (manuell)** statt blind „auto“, wenn du Kontrolle willst.  
   **Prüfen:** Nur Seiten mit Snippet senden Requests an `/cdn-cgi/rum`.
3) **CSP prüfen**, falls du eine strenge Content-Security-Policy nutzt.  
   **Prüfen:** Beacon darf von `static.cloudflareinsights.com` geladen werden und Reporting an `/cdn-cgi/rum` ist erlaubt.

**Stolpersteine:**
- **Automatic Einrichtung** (Injection) kann fehlschlagen, z.B. wenn Origin `Cache-Control: public, no-transform` setzt (laut FAQ) → dann kein automatisches Einfügen des Snippets.
- **SPAs:** Beacon kann Route-Changes tracken; falls unerwünscht, `spa=false` setzen (Abwägung: weniger SPA-Messungen).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **manuelles Einrichtung** (nur gezielte Seiten messen, keine automatische Abdeckung aller Subdomains).
- Vermeide Tracking über Query-Strings: Cloudflare loggt laut FAQ **keine Query-Strings/UTMs** (Abwägung: weniger Kampagnen-Attribution).
- Beschränke Sites im Account (soft limit laut FAQ: 10) auf das Nötige.  
**Abwägung:** weniger Überblick über mehrere Properties.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Verwende getrennte Admin-Accounts/Rollen im Cloudflare-Account (Least Privilege, wenn Organisation/Team genutzt wird).
- Setze 2FA bevorzugt mit **Security Key (WebAuthn)** ein (phishing-resistenter als E-Mail 2FA; laut Cloudflare 2FA-Doku verfügbar).
- Minimale Beacon-Konfiguration (kein zusätzliches SPA-Tracking, wenn nicht nötig).  
**Abwägung:** weniger Komfort/Debug-Features, mehr Einrichtung-Aufwand.

</details>

## Features
- Pageviews/Visitors + Performance-Metriken (RUM über Performance API)
- Core Web Vitals Debug-Ansicht (VITALS Explorer)
- Automatische Beacon-Injection (bei proxied Zones) oder manuelles Snippet
- Filter/Rules (planabhängig)

## Alternativen
- Plausible (Cloud-Analytics, Abwägung: externer Dienst + eigene Datenerhebung)
- Matomo (Self-Hosting möglich, Abwägung: eigener Betrieb/Updates/Angriffsfläche)
- GoatCounter (minimalistisch, Abwägung: weniger Enterprise-Integrationen)

## Nicht gelöst / offene Punkte
- Unklar: konkrete Aussagen zur **IP-Verarbeitung/Anonymisierung** speziell in Web Analytics (über die Vitals-Explorer-Aussage hinaus).


## Quellen

- Plausible (Cloud-Analytics, Trade-off: "externer Dienst + eigene Datenerhebung)
- Matomo (Self-Hosting möglich, Trade-off: "eigener Betrieb/Updates/Angriffsfläche)
- GoatCounter (minimalistisch, Trade-off: "weniger Enterprise-Integrationen)
- [Cloudflare Web Analytics (Produktseite)](https://www.cloudflare.com/web-analytics/)
- [Cloudflare Web Analytics – About](https://developers.cloudflare.com/web-analytics/about/)
- [Data origin and collection](https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/)
- [FAQs (Retention, Query-Strings, Endpunkte, Limits)](https://developers.cloudflare.com/web-analytics/faq/)
- [Core Web Vitals – Information collected](https://developers.cloudflare.com/web-analytics/data-metrics/core-web-vitals/)
- [Limits (Plan-/Account-Limits)](https://developers.cloudflare.com/web-analytics/limits/)
- [Web Analytics for SPAs (spa=false)](https://developers.cloudflare.com/web-analytics/get-started/web-analytics-spa/)
- [Cloudflare Privacy Policy](https://www.cloudflare.com/privacypolicy/)
- [Cloudflare Sub-Processors (Übersicht)](https://www.cloudflare.com/gdpr/subprocessors/)
- [Sub-Processors – For Cloudflare services](https://www.cloudflare.com/de-de/gdpr/subprocessors/cloudflare-services/)
- [Cloudflare Self-Serve Subscription Agreement](https://www.cloudflare.com/terms/)
- [Cloudflare Transparency Report](https://www.cloudflare.com/transparency/)
- [Two-factor authentication (Cloudflare Fundamentals)](https://developers.cloudflare.com/fundamentals/user-profiles/2fa/)
- [Vulnerability Disclosure Policy](https://www.cloudflare.com/disclosure/)
- [Cloudflare Web Analytics (Produktseite)](https://www.cloudflare.com/web-analytics/)
- [Cloudflare Web Analytics – About](https://developers.cloudflare.com/web-analytics/about/)
- [Data origin and collection](https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/)
- [FAQs (Retention, Query-Strings, Endpunkte, Limits)](https://developers.cloudflare.com/web-analytics/faq/)
- [Core Web Vitals – Information collected](https://developers.cloudflare.com/web-analytics/data-metrics/core-web-vitals/)
- [Limits (Plan-/Account-Limits)](https://developers.cloudflare.com/web-analytics/limits/)
- [Web Analytics for SPAs (spa=false)](https://developers.cloudflare.com/web-analytics/get-started/web-analytics-spa/)
- [Cloudflare Privacy Policy](https://www.cloudflare.com/privacypolicy/)
- [Cloudflare Sub-Processors (Übersicht)](https://www.cloudflare.com/gdpr/subprocessors/)
- [Sub-Processors – For Cloudflare services](https://www.cloudflare.com/de-de/gdpr/subprocessors/cloudflare-services/)
- [Cloudflare Self-Serve Subscription Agreement](https://www.cloudflare.com/terms/)
- [Cloudflare Transparency Report](https://www.cloudflare.com/transparency/)
- [Two-factor authentication (Cloudflare Fundamentals)](https://developers.cloudflare.com/fundamentals/user-profiles/2fa/)
- [Vulnerability Disclosure Policy](https://www.cloudflare.com/disclosure/)
