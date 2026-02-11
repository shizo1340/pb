---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Fathom Analytics"
url: "/anbieter/fathom-analytics/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-12"
robots: "index,follow"
description: "Kurzprofil von Fathom Analytics (Kategorie: Analytics)."
provider: ""
name: "Fathom Analytics"
category: "Analytics"
website: "https://usefathom.com/"
repo: "https://github.com/usefathom"
license: "proprietary (SaaS); MIT (Fathom Lite); GPL-3.0 (WordPress-Plugin)"
policies: ""
privacy: "https://usefathom.com/legal/privacy"
terms: "https://usefathom.com/legal/terms"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "partial"
self_host_possible: "yes"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Kanada (British Columbia; Conva Ventures Inc.)"
region: "ca"
logs: "minimal"
retention: "specified"
retention_notes: "Analytics-Daten: solange Konto aktiv; Access-Logs: bis ~48h; Kurzzeit-IP/User-Agent: ca. 24h; Angreifer-IP ggf. dauerhaft"
data_notes: "Cookieless Analytics; Unique-Visitor-Erkennung via gehashter Signatur (Salts werden alle 24h rotiert); EU isolation für EU-Traffic (EU-IP/User-Agent wird in der EU entfernt)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Fathom Analytics ist ein Anbieter aus der Kategorie **Analytics**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Website-Analytics ohne Cookies/Consent-Banner-Zwang willst und dabei möglichst wenig personenbezogene Daten verarbeiten möchtest.
- **Weniger geeignet wenn:** du Nutzerprofile, Cross-Site-Tracking oder sehr detaillierte Marketing-/User-Journey-Analysen brauchst (Fokus ist bewusst auf „weniger Daten“).
- **Wichtigster Abwägung:** weniger invasive Messung vs. weniger Granularität/Attribution (z.B. keine individuellen Nutzerpfade).

## Sofortmaßnahmen
- **2FA aktivieren (TOTP):** reduziert Account-Übernahmen, ohne zusätzliche Identitätsdaten wie Telefonnummern zu brauchen.
- **„Exclude your own visits“ aktivieren:** verhindert, dass interne Tests/Team-Traffic die Zahlen verfälscht (und reduziert unnötige Events).
- **Site-Firewall nutzen:** blocke Staging/Local-Hostnames oder IPs, damit Testumgebungen nicht „mitmessen“.

## Entscheidungshilfe
- Wenn du **ohne Cookies** messen willst, dann nutze das Standard-Embed-Script (Abwägung: weniger Detaildaten als bei Tracking-Stacks mit IDs/Cookies).
- Wenn du **DNT respektieren** möchtest, dann aktiviere „honour DNT“ in den Advanced Script Settings (Abwägung: Messlücken bei DNT-Nutzenden).
- Wenn du **nur Live-Domains** erfassen willst, dann nutze Site-Firewall → „Allowed domains“ (Abwägung: falsche Konfiguration kann echte Visits ausfiltern).
- Wenn du **Support/Sharing brauchst**, dann nutze „Share a dashboard“ oder E-Mail-Reports (Abwägung: zusätzliche Empfänger erhöhen Metadaten-/Zugriffsfläche).
- Wenn du **maximale Kontrolle im eigenen Betrieb** brauchst, dann ist die Self-Hosting-Option (Fathom Lite) relevant (Abwägung: mehr Admin-/Update-Aufwand).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Fathom Analytics |
| Kategorie | Analytics |
| Website | https://usefathom.com/ |
| Quellcode | https://github.com/usefathom |
| Lizenz | proprietary (SaaS); MIT (Fathom Lite); GPL-3.0 (WordPress-Plugin) |
| Preismodell | paid |
| Free Tier | no |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Stripe (Kreditkarte) |
| Jurisdiktion | Kanada (British Columbia; Conva Ventures Inc.) |
| Logs | minimal |
| Retention | Analytics-Daten: solange Konto aktiv; Access-Logs: bis ~48h; Kurzzeit-IP/User-Agent: ca. 24h; Angreifer-IP ggf. dauerhaft |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://usefathom.com/legal/privacy
- AGB/Terms: https://usefathom.com/legal/terms
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Cookieless Analytics; Unique-Visitor-Erkennung via gehashter Signatur (Salts werden alle 24h rotiert); EU isolation für EU-Traffic (EU-IP/User-Agent wird in der EU entfernt).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - **Als Kunde (Account/Abrechnung):** E-Mail-Adresse, Billing-Infos; für Trial/Payment auch Zahlungsdaten (Payment-Details werden über Stripe verarbeitet).  
  - **Als Website-Besucher (Analytics):** IP-Adresse und User-Agent werden laut DPA/Compliance-Seiten nur kurzzeitig verarbeitet/zwischengespeichert (u.a. DDoS-/Abuse-Schutz); Unique-Besuche werden über gehashte Signaturen mit regelmäßig rotierenden Salts ermittelt.
- **Wofür:** Bereitstellung des Analytics-Dienstes, Abrechnung/Vertrag, Abuse-/DDoS-Schutz, Support/Kommunikation.
- **Weitergabe/Subprozessoren:** Subprozessorenliste nennt u.a. bunny.net (EU isolation/CDN) und AWS (Infra); zusätzlich nennt der Anbieter Stripe (Zahlungen), Postmark (E-Mails) und Sentry (Error-Tracking) als genutzte Dienste.
- **Drittlandtransfer:** EU isolation verarbeitet EU-Traffic in EU-Infrastruktur; anschließend wird laut Anbieter nur anonymisierte Analytics-Daten gespeichert/ausgewertet (Dashboard). Globaler Betrieb mit AWS (je nach Traffic/Region).
- **Zahlungsabwicklung/Payment Processor:** Stripe (laut Anbieter).
- **Kontakt/DSAR/DPA:** Privacy Policy beschreibt Betroffenenrechte (Antwort i.d.R. innerhalb 30 Tagen) und verweist auf Kontaktweg; DPA ist öffentlich und laut Doku optional signierbar.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Ja, sobald das Embed-Script eingebunden ist (Tracking passiert über den Fathom-Script-Endpoint).
- **Abschaltbar?** Ja, durch Entfernen des Scripts bzw. per „honour DNT“ (Do-Not-Track) in den Advanced Script Settings (für DNT-Nutzende).
- **Wo (Menüpfad):**
  - Embed-Code: `Settings` → `Sites` → (Site wählen) → `Install`
  - Advanced Script Settings: `Settings` → `Sites` → `Script settings` → `Advanced embed script settings`
  - Exclude own visits: `Settings` → `Sites` → `Script settings` → `Exclude your own visits`

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:**  
  - Access-Logs (Zeit + Anzahl Requests pro IP) laut Privacy Policy bis ca. 48h.  
  - IP-Counts/Abuse-Handling laut „Data journey“ typischerweise bis ca. 24h, bei schweren Angriffen kann eine IP dauerhaft geblockt und damit dauerhaft gespeichert werden.  
  - Analytics-Daten: laut Anbieter bleiben sie verfügbar, solange das Kundenkonto aktiv ist.
- **Lösch-/Opt-out-Optionen:** Account-Deletion ist im Dashboard möglich; laut Terms müssen Daten vor Löschung lokal gesichert werden, weil Recovery danach nicht möglich ist.

**Abwägung am Punkt:** Weniger (oder gar keine) Telemetrie reduziert Mess- und Debug-Optionen; mehr Messung erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Transportverschlüsselung via SSL/TLS wird genannt (z.B. zwischen Besuchern und CDN). Weitere Details (z.B. at-rest) sind nicht konkret beschrieben.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA ist dokumentiert (Authenticator-App/TOTP), SMS wird nicht unterstützt; Backup-Code ist der einzige dokumentierte Wiederherstellungsweg für 2FA.
- **Recovery/Account-Wiederherstellung:** Backup-Code für 2FA; nach Account-Löschung laut Terms keine Wiederherstellung.
- **Vuln-Handling / Security-Kontakt:** Allgemeine Security-Infos vorhanden, aber kein klarer „Responsible Disclosure“-Ablauf gefunden.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **2FA aktivieren (TOTP)**  
   **Prüfen:** `Settings` → `Account` → `2FA` zeigt „on“ + Backup-Code sicher abgelegt.
2) **Interne Besuche ausschließen**  
   **Prüfen:** `Settings` → `Sites` → `Exclude your own visits` aktiv; Dashboard-Zahlen ändern sich nicht durch eigene Seitenaufrufe.
3) **DNT respektieren + Live-Domain absichern**  
   **Prüfen:** `Advanced embed script settings` → „honour DNT“ aktiv; `Site firewall settings` → „Allowed domains“ korrekt gesetzt.

**Stolpersteine:**
- **2FA-Backup-Code ist kritisch:** Ohne Backup-Code kann 2FA-Recovery schwierig werden (Abwägung: Sicherheit vs. Wiederherstellbarkeit).
- **Account-Löschung ist final:** Vorher Export/Backup der Daten machen (Abwägung: Datenminimierung vs. spätere Referenz).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **„honour DNT“** konsequent, wenn du DNT-Signale respektieren willst.  
- Reduziere Daten im Embed: tracke nur, was du brauchst (z.B. Events sparsam einsetzen).  
- Teile Dashboards/Reports nur gezielt (weniger Empfänger = weniger Metadatenfläche).  
**Abwägung:** weniger Messdaten = weniger Detail-Analysen und ggf. mehr Interpretationsaufwand.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze „Extreme EU Isolation“ Script-Endpoint (`cdn-eu…`), wenn du sämtlichen Traffic über EU-Routing laufen lassen willst (laut Doku).  
- Blocke konsequent Staging/Local/Scanner über Site-Firewall (Allowed domains + IP-Blocking).  
- Verwende getrennte Admin-Accounts/Passwort-Manager + strikte API-Token-Scope (nur Read-only wo möglich).  
**Abwägung:** mehr Komplexität + Risiko von Fehlkonfiguration (z.B. fälschlich geblockte echte Visits).

</details>

## Features
- Cookieless Analytics (Pageviews + Events)
- EU isolation (standardmäßig aktiv) + optional „Extreme EU Isolation“
- Site-Firewall (Hostnames/IPs/Countries/Pages blocken)
- Export, E-Mail-Reports, Dashboard-Sharing
- API mit Tokens & Rechteumfang
- 2FA (TOTP) + Backup-Code

## Alternativen
- Fathom Lite (Self-Hosting durch denselben Anbieter) — **Abwägung:** mehr Betrieb/Updates, dafür mehr Kontrolle im eigenen Stack.
- Plausible Analytics — **Abwägung:** anderer Funktionsumfang/Hosting-Einrichtung je nach Modell.
- [Matomo](/anbieter/matomo/) – **Abwägung:** mehr Betriebsaufwand im Self-Hosting, dafür mehr Konfigurationsspielraum.

## Nicht gelöst / offene Punkte
- Keine öffentlich genannten unabhängigen Audits/Attestationen auf den genutzten Legal-/Security-Seiten gefunden.
- „Responsible Disclosure“/Bug-Bounty/PGP-Kontakt nicht klar dokumentiert.

## Quellen

- Fathom Lite (Self-Hosting durch denselben Anbieter; Trade-off: "mehr Betrieb/Setup)
- Plausible Analytics (ähnliche Kategorie; Trade-off: "anderer Hosting-/Integrationsfokus)
- Matomo (ähnliche Kategorie; Trade-off: "mehr Betriebsaufwand, dafür mehr Kontrolle im Self-Hosting)
- https://usefathom.com/docs/start/dpa
- [Privacy policy for Fathom Analytics](https://usefathom.com/legal/privacy)
- [Fathom Analytics Terms and Conditions](https://usefathom.com/legal/terms)
- [Fathom Analytics Data Processing Agreement (DPA)](https://usefathom.com/legal/dpa)
- [Subprocessors](https://usefathom.com/legal/subprocessors)
- [ePrivacy compliance](https://usefathom.com/legal/compliance/eprivacy)
- [Security](https://usefathom.com/security)
- [Our data journey](https://usefathom.com/data)
- [Pricing](https://usefathom.com/pricing)
- [Imprint / Impressum](https://usefathom.com/about/imprint)
- [What tech stack does Fathom Analytics use?](https://usefathom.com/tech-stack)
- [Two-factor authentication (Docs)](https://usefathom.com/docs/account/2fa)
- [Add the embed script (Docs)](https://usefathom.com/docs/script/embed)
- [Advanced embed script settings (Docs)](https://usefathom.com/docs/script/script-advanced)
- [Exclude your own visits (Docs)](https://usefathom.com/docs/script/exclude-visits)
- [Site firewall settings (Docs)](https://usefathom.com/docs/script/firewall)
- [EU isolation (Docs)](https://usefathom.com/docs/script/eu-isolation)
- [Billing FAQ (Docs)](https://usefathom.com/docs/account/faq)
- [Do I need to sign the DPA? (Docs)](https://usefathom.com/docs/start/dpa)
