---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Plausible"
url: "/anbieter/plausible/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von Plausible (Kategorie: Analytics)."
provider: ""
name: "Plausible"
category: "Analytics"
website: "https://plausible.io/"
repo: "https://github.com/plausible/analytics"
license: "AGPL-3.0-or-later (Plausible CE), MIT (JavaScript-Tracker)"
policies: ""
privacy: "https://plausible.io/privacy"
terms: "https://plausible.io/terms"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "no"
open_source: "yes"
self_host_possible: "yes"
account_required: "yes"
phone_required: "unknown"
kyc_required: "unknown"
jurisdiction: "Estonia (Plausible Insights OÜ); Dateninfrastruktur laut Anbieter: Deutschland/EU"
region: "uk"
logs: "minimal"
retention: "verylong"
retention_notes: "Planabhängig (z.B. 3 Jahre Starter, 5 Jahre Business, 5+ Jahre Enterprise); nach Ablauf/Kündigung Löschung aus Backups binnen 60 Tagen"
retention_max_days: "1825"
data_notes: "Cookieless, keine persistenten Identifier; tägliche Unique-Zählung via Hash aus IP+User-Agent mit rotierendem Salt; Rohdaten (IP/User-Agent) laut Anbieter nicht auf Disk gespeichert."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Plausible ist ein Anbieter aus der Kategorie **Analytics**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Web-Analytics mit aggregierten Metriken ohne Cookies/persistente Identifier willst und dabei möglichst wenig personenbezogene Daten anfallen sollen.
- **Weniger geeignet wenn:** du User-Journeys über mehrere Tage/Geräte, Nutzerprofile oder detailliertes „Product Analytics“ brauchst (Plausible zielt laut Anbieter auf anonyme, aggregierte Messung).
- **Wichtigster Abwägung:** weniger Detailtiefe/Individualisierung vs. weniger personenbezogene Daten & weniger Consent-/Banner-Druck.

## Sofortmaßnahmen
- **2FA aktivieren:** reduziert das Risiko von Account-Übernahmen (Phishing/Passwort-Leaks).
- **Login-Sessions prüfen und alte Sessions beenden:** minimiert Risiken durch vergessene Logins auf fremden Geräten.
- **Team-2FA erzwingen (falls Team genutzt):** verhindert schwächere Accounts als Einfallstor.

## Entscheidungshilfe
- Wenn du **anonyme, aggregierte Web-Statistiken ohne Cookies** willst, dann nutze Plausible im Standardmodus (Abwägung: keine langfristige Nutzer-/Geräte-Verknüpfung).
- Wenn du **strikte EU-Verarbeitung für Visitor-Daten** brauchst, dann prüfe DPA/Hosting-Aussagen und die Subprozessoren (Abwägung: Account-/Support-Daten können trotzdem über externe Dienste laufen).
- Wenn du **volle Daten- und Infrastrukturkontrolle** brauchst, dann ist **Self-Hosting (Plausible CE)** relevant (Abwägung: du übernimmst Updates, Backups, Sicherheit, Monitoring).
- Wenn mehrere Personen Zugriff haben, dann nutze **Teams + Rollen** und **erzwinge 2FA** (Abwägung: etwas mehr Admin-Aufwand).
- Wenn du **mehr Messdaten trotz Adblockern** willst, dann ist Proxying/Managed Proxy ein Thema (Abwägung: zusätzlicher Einrichtung-Aufwand; du solltest die Datenflüsse bewusst dokumentieren).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Plausible |
| Kategorie | Analytics |
| Website | https://plausible.io/ |
| Quellcode | https://github.com/plausible/analytics |
| Lizenz | AGPL-3.0-or-later (Plausible CE), MIT (JavaScript-Tracker) |
| Preismodell | mixed |
| Free Tier | no (30 Tage Trial, laut Anbieter ohne Kreditkarte) |
| Open Source | yes |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Paddle (Hosted/Cloud) |
| Jurisdiktion | Estonia (Plausible Insights OÜ); Dateninfrastruktur laut Anbieter: Deutschland/EU |
| Logs | minimal |
| Retention | Planabhängig (z.B. 3 Jahre Starter, 5 Jahre Business, 5+ Jahre Enterprise); nach Ablauf/Kündigung Löschung aus Backups binnen 60 Tagen |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://plausible.io/privacy
- AGB/Terms: https://plausible.io/terms
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Plausible beschreibt „cookieless“ Web-Analytics ohne persistente Identifier. Unique Visitors werden pro Tag aus IP+User-Agent über einen Hash mit rotierendem Salt berechnet; Rohdaten (IP/User-Agent) werden laut Anbieter nicht auf Disk gespeichert. Visitor-Daten sollen laut Anbieter in der EU verarbeitet werden.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Plausible nennt u.a. Seiten-URL (ohne Query-Parameter standardmäßig), Referrer (HTTP Referer), Browser, Betriebssystem, Gerätetyp sowie grobe Geolokation (Land/Region/Stadt) basierend auf IP-Lookup; Kampagnenparameter (z.B. UTM) können enthalten sein. IP-Adresse und User-Agent werden laut Anbieter nicht gespeichert, sondern nur zur täglichen Unique-Berechnung gehasht.  
- **Wofür:** Web-Statistiken als aggregierte Metriken (z.B. Pageviews/Unique Visitors) und Feature-Funktionen wie Referrer-/Kampagnen-Auswertung.
- **Weitergabe/Subprozessoren:** Im DPA nennt Plausible als Subprozessoren, die mit „Site Data“ in Berührung kommen: Hetzner (Server) und BunnyWay (CDN). Weitere Dienste (z.B. für Billing/Support/Kommunikation) sind in der Privacy Policy aufgeführt.
- **Drittlandtransfer:** Unklar (Visitor-Daten laut Anbieter EU; Standorte der weiteren Drittanbieter für Account-/Support-Daten sind nicht als Länder-Liste dokumentiert).
- **Zahlungsabwicklung/Payment Processor:** Paddle (laut Terms/Docs).
- **Kontakt/DSAR/DPA:** privacy@plausible.io (DPA); Privacy Policy als zentrale Anlaufstelle.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nicht angegeben (Plausible ist selbst ein Analytics-System; zusätzliche „Produkt-Telemetrie“ der Web-App wird nicht separat beschrieben).
- **Abschaltbar?** Nicht angegeben.
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** Planabhängig (z.B. 3 Jahre Starter, 5 Jahre Business, 5+ Jahre Enterprise); nach Ablauf/Kündigung Löschung aus Backups binnen 60 Tagen.
- **Lösch-/Opt-out-Optionen:** Account-Löschung und Löschung von Site-Stats sind laut DPA möglich; außerdem nennt die Doku Login-Session-Management (Remote Logout) und automatische Session-Expiration nach 14 Tagen Inaktivität.

**Abwägung am Punkt:** Kürzere Retention reduziert Langzeitvergleiche; längere Retention erhöht die Menge gespeicherter (wenn auch aggregierter) Metriken.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Plausible nennt HTTPS „in transit“; zur Unique-Zählung wird IP+User-Agent per Hash mit rotierendem Salt verarbeitet, Rohdaten sollen nicht gespeichert werden.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA (TOTP) wird dokumentiert; Teams können 2FA erzwingen; SSO ist dokumentiert (planabhängig).
- **Recovery/Account-Wiederherstellung:** 2FA-Recovery-Codes werden beim Aktivieren erzeugt und müssen gesichert werden.
- **Vuln-Handling / Security-Kontakt:** Sicherheitsmeldungen per E-Mail an security@plausible.io (GitHub Security Overview).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **2FA aktivieren (TOTP)**  
   **Wo:** Account-Menü (oben rechts) → **Account Settings** → Bereich **Security** → „Enable 2FA“.  
   **Prüfen:** 2FA ist aktiv + Recovery-Codes sind sicher abgelegt.
2) **Login-Sessions prüfen & beenden**  
   **Wo:** Account Settings → **Security** → **Login Management** → Sessions mit Papierkorb beenden.  
   **Prüfen:** unbekannte/alte Sessions verschwinden; Hinweis: Sessions verfallen laut Doku nach **14 Tagen Inaktivität** automatisch.
3) **Team: 2FA erzwingen (falls Team genutzt)**  
   **Wo:** Team wählen → **Team Settings** → **General** → „Force Two-Factor Authentication (2FA)“.  
   **Prüfen:** Enforce-Schalter aktiv; neue/alte Mitglieder müssen 2FA nutzen.

**Stolpersteine:**
- **Recovery-Codes sind kritisch:** ohne Codes kann ein Verlust des 2FA-Geräts zum Lockout führen (Abwägung: Sicherheit vs. Recovery-Aufwand).
- **Self-Hosting ist Betrieb:** Updates, Backups und Security-Patches liegen dann bei dir (Abwägung: Kontrolle vs. Wartung).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze nur die notwendigen Workspaces/Teams und halte Zugriffslisten klein (Abwägung: weniger Komfort bei Delegation).
- Vermeide zusätzliche Integrationen (z.B. externe Benachrichtigungen/Reports), wenn du Metadatenflüsse reduzieren willst (Abwägung: weniger Automatisierung).
- Setze eine Export-/Archiv-Strategie, wenn deine Plan-Retention nicht zu deinem Bedarf passt (Abwägung: zusätzlicher Prozess).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Betreibe Plausible als **self-hosted (Plausible CE)** und trenne es organisatorisch (eigene Domain, eigener Admin-Account) (Abwägung: deutlich mehr Betriebsaufwand).
- Härtung über Infrastruktur: Reverse Proxy, TLS, striktes Patch-Management, Backup-Tests (Abwägung: Komplexität).
- Isoliere Admin-Zugriff (separates Browser-Profil/VM) (Abwägung: weniger bequem im Alltag).

</details>

## Features
- Cookieless Web-Analytics ohne persistente Identifier (laut Data Policy/DPA).
- Aggregierte Metriken (keine Cross-Site/Cross-Device-Profilbildung laut Anbieter).
- EU-Verarbeitung für Visitor-Daten in Plausible Cloud (laut DPA/Security).
- Self-Hosting als Plausible Community Edition (CE).
- 2FA (TOTP), Team-2FA-Enforcement, Login-Session-Management (Remote Logout).
- CSV-Export; Stats API (planabhängig laut Pricing/Repo).

## Alternativen
- [Matomo](/anbieter/matomo/)
- [Umami](/anbieter/umami/)
- [GoatCounter](/anbieter/goatcounter/)

## Nicht gelöst / offene Punkte
- Unklar, ob bei Billing/Checkout (Paddle) zusätzliche Pflichtdaten wie Telefonnummer/Adresse verpflichtend werden (je nach Land/Steuer).
- Nicht explizit dokumentiert, ob Plausible Cloud zusätzliche „Produkt-Telemetrie“ (über das Analytics-Produkt selbst hinaus) erhebt.

## Quellen

- https://github.com/plausible/analytics
- [Plausible Data Policy](https://plausible.io/data-policy)
- [Plausible Privacy Policy](https://plausible.io/privacy)
- [Plausible Terms of Service](https://plausible.io/terms)
- [Plausible Data Processing Agreement (DPA)](https://plausible.io/dpa)
- [Plausible Security Practices](https://plausible.io/security)
- [Plausible Imprint](https://plausible.io/imprint)
- [Plausible Docs: Plausible Community Edition (Self-Hosting)](https://plausible.io/docs/self-hosting)
- [Plausible Docs: Enable two-factor authentication (2FA)](https://plausible.io/docs/2fa)
- [Plausible Docs: Login management](https://plausible.io/docs/login-management)
- [GitHub Repo: plausible/analytics](https://github.com/plausible/analytics)
