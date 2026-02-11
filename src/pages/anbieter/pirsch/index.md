---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Pirsch"
url: "/anbieter/pirsch/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von Pirsch (Kategorie: Analytics)."
provider: ""
name: "Pirsch"
category: "Analytics"
website: "https://pirsch.io/"
repo: "https://github.com/pirsch-analytics/pirsch"
license: "AGPL-3.0 (Open-Source Core)"
policies: ""
privacy: "https://pirsch.io/privacy"
terms: "https://pirsch.io/terms"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "partial"
self_host_possible: "yes"
account_required: "yes"
phone_required: "unknown"
kyc_required: "unknown"
jurisdiction: "Deutschland (Emvi Software GmbH)"
region: "eu"
logs: "minimal"
retention: "verylong"
retention_notes: "Unbegrenzt (SaaS, laut Pricing); User-Agent separat bis zu 3 Monate (Docs)"
retention_max_days: "90"
data_notes: "Cookiefrei; Visitor-ID als Hash aus IP+User-Agent+Datum+Salt; IP wird nicht gespeichert/geloggt; Hosting/Subprozessor: Hetzner (DE) laut DPA."
features: ""
alternatives: ""
payment_processors: "Stripe (Checkout/Portal laut Doku)"
sources: ""
---
## Kurzprofil

Pirsch ist ein Anbieter aus der Kategorie **Analytics**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Web-Analytics ohne Cookies einsetzen willst und eine klare Liste der erhobenen Datenpunkte brauchst (laut Doku) – inkl. Hosting in Deutschland (laut DPA).
- **Weniger geeignet wenn:** du zwingend dokumentierte 2FA/Passkeys für das Konto erwartest oder eine vollständige Self-Hosting-Variante ohne Enterprise-Lizenz brauchst.
- **Wichtigster Abwägung:** Wiedererkennung innerhalb von bis zu 24 Stunden basiert auf einem Hash/Fingerprint (Input u.a. IP + User-Agent) – dafür keine Cookies und laut Doku wird die IP nicht gespeichert/geloggt.

## Sofortmaßnahmen
- **Traffic Filter setzen:** reduziert interne/Testing-Zugriffe in deinen Statistiken und damit unnötige Datenmenge.
- **Dashboard-Zugriff schließen:** deaktiviere Public Access/Access Links, um unbeabsichtigte Veröffentlichung zu vermeiden.
- **Daten-Löschung testen:** lösche testweise einen Zeitraum (Settings → Danger Zone), um den Prozess im Ernstfall zu kennen.

## Entscheidungshilfe
- Wenn du **Consent-Banner vermeiden** willst, dann nutze die **cookiefreie Standard-Integration** (Abwägung: es fallen trotzdem Nutzungs-Metadaten wie Referrer/UTM an).
- Wenn du **weniger clientseitige Datenpunkte** willst, dann nutze die **Backend-Integration (API/SDK)** (Abwägung: mehr Implementierungsaufwand; manche Daten wie Screen Size fallen nur im Frontend an).
- Wenn du **Teamzugriff** brauchst, dann nutze **Member-Einladungen** statt öffentlicher Links (Abwägung: eingeladene Personen brauchen ein Pirsch-Konto).
- Wenn du **Daten minimieren** willst, dann plane **regelmäßige Löschung/Exports** (Abwägung: weniger Historie im Dashboard, mehr Betriebsaufwand).
- Wenn du **Datenhaltung komplett selbst kontrollieren** willst, dann ist **Self-Hosting** nur relevant, wenn du dafür die passende Lizenz/Variante nutzt (Abwägung: Betrieb/Updates/Monitoring in eigener Verantwortung).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Pirsch |
| Kategorie | Analytics |
| Website | https://pirsch.io/ |
| Quellcode | https://github.com/pirsch-analytics/pirsch |
| Lizenz | AGPL-3.0 (Open-Source Core) |
| Preismodell | paid |
| Free Tier | no |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Stripe (Checkout/Portal laut Doku) |
| Jurisdiktion | Deutschland (Emvi Software GmbH) |
| Logs | minimal |
| Retention | Unbegrenzt (SaaS, laut Pricing); User-Agent separat bis zu 3 Monate (Docs) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://pirsch.io/privacy
- AGB/Terms: https://pirsch.io/terms
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Cookiefrei; Visitor-ID als Hash aus IP+User-Agent+Datum+Salt; IP wird nicht gespeichert/geloggt; Hosting/Subprozessor: Hetzner (DE) laut DPA.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** laut Doku u.a. User-Agent (separat bis zu 3 Monate), Seitenpfad (nicht volle URL), Referrer, UTM-Parameter, Sprache, Besuchszeit, Browser/OS (aus User-Agent abgeleitet), Land/Stadt, Gerätetyp; Screen Size nur bei Frontend-Integration.
- **Wofür:** statistische Auswertung/Analyse von Website- oder App-Nutzung (Analytics-Service; in der Privacy Policy als vertragliche Analyseleistung beschrieben).
- **Weitergabe/Subprozessoren:** laut DPA wird als Subprozessor **Hetzner Online GmbH (Deutschland)** für Hosting/Storage genannt.
- **Drittlandtransfer:** laut Privacy Policy grundsätzlich Speicherung auf Servern in Deutschland; keine konkrete Drittlandliste genannt.
- **Zahlungsabwicklung/Payment Processor:** laut Billing-Doku **Stripe** (Checkout/Portal); der Anbieter nennt, dass Zahlungsdaten nicht selbst gespeichert werden.
- **Kontakt/DSAR/DPA:** Kontakt & Datenschutzbeauftragte/r sind in Privacy Policy/DPA benannt; DPA ist als Download verfügbar.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nicht angegeben (keine öffentliche Doku zu Produkt-Telemetrie/Diagnose außerhalb der Analytics-Daten).
- **Abschaltbar?** Nicht angegeben.
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** minimal (laut Doku: IP-Adresse wird nicht gespeichert oder geloggt; IP wird nur für Hash/Fingerprint als Input genutzt).
- **Aufbewahrung:** laut Pricing „Unlimited Data Retention“; laut Doku wird der User-Agent separat bis zu 3 Monate gespeichert, Besucher-Wiedererkennung maximal 24 Stunden.
- **Lösch-/Opt-out-Optionen:** laut Doku kannst du Daten in den Settings löschen (komplett/teilweise) und CSV-Export (letzte 12 Monate) nutzen.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben (keine konkrete öffentliche Doku zu Verschlüsselung/Key-Management für gespeicherte Analytics-Daten).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben (in der Doku nicht beschrieben).
- **Recovery/Account-Wiederherstellung:** Passwort- und E-Mail-Änderung sind über Account-Funktionen dokumentiert; Account-Löschung ist dokumentiert (inkl. Grace-Period von einer Woche über API/Account-Delete).
- **Vuln-Handling / Security-Kontakt:** allgemeiner Kontakt ist über Privacy Policy/DPA/Docs per E-Mail vorhanden; ein expliziter Disclosure-Prozess ist nicht dokumentiert.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (2FA/MFA), falls angeboten.  
   **Prüfen:** Doku/Settings zeigen eine aktivierte Methode (aktuell nicht dokumentiert → ggf. nicht verfügbar).
2) **Auto-Lock/Timeout** sinnvoll setzen.  
   **Prüfen:** falls Pirsch keinen Timeout-Schalter bietet: Browser/Passwort-Manager/OS-Sperre als Ersatz nutzen und nach Nutzung ausloggen.
3) **Analytics/Telemetry deaktivieren**, falls Schalter existiert.  
   **Prüfen:** Settings/Account zeigen Opt-out (aktuell nicht dokumentiert).

**Zusatz für Analytics (praktisch):**
- **Interne Zugriffe filtern:** Settings → Traffic Filter (z.B. Büro/VPN-IP).  
  **Prüfen:** Testaufruf taucht nicht mehr in Live/Today-Views auf.
- **Zugriff absichern:** Settings → Access Management  
  **Prüfen:** Public Access ist aus, Access Links nur wenn bewusst genutzt.

**Stolpersteine:**
- Public Access/Access Links können Dashboards nach außen öffnen (Abwägung: einfaches Teilen vs. unbeabsichtigte Veröffentlichung).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **Backend-Integration**, wenn du clientseitige Datenpunkte reduzieren willst (z.B. Screen Size fällt nur im Frontend an).  
- Halte **Referrer/UTM-Tracking** bewusst klein (Abwägung: weniger Marketing-Attribution, weniger Metadaten).
- Nutze **regelmäßige Löschung**: Settings → Danger Zone → Delete Data (Abwägung: weniger Historie, dafür Datensparsamkeit).

**Abwägung:** mehr Eigenverantwortung bei Analyse/Attribution und Datenhaltung.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne Analytics-Zugriff strikt: eigenes Browserprofil + getrennte Identität (Abwägung: mehr Aufwand).
- Teile Dashboards nur über **kurzlebige Access Links** (falls nötig) und widerrufe sie danach (Abwägung: zusätzlicher Verwaltungsaufwand).
- Prüfe Self-Hosting nur, wenn du die passende Variante/Lizenz einsetzen kannst (Abwägung: eigener Betrieb, Update- und Security-Pflege).

**Abwägung:** deutlicher Komfortverlust, höhere Komplexität.

</details>

## Features
- Cookiefreie Web-Analytics (keine Cookies)
- Events & Conversion Goals
- Funnel- und Session-Auswertungen
- REST API & SDKs (Frontend- oder Backend-Integration)
- Traffic Filter, Reports, Access-Management (laut Doku)

## Alternativen
- Matomo (Self-Hosting möglich; Abwägung: eigener Betrieb/Updates)
- Plausible (SaaS, datensparsam; Abwägung: anderer Funktionsumfang/Hosting-Optionen)
- Fathom (SaaS; Abwägung: anderer Funktionsumfang/Regionen)

## Nicht gelöst / offene Punkte
- Unklar, ob Pirsch für das Dashboard/Produkt zusätzliche Diagnosedaten/Telemetrie erhebt und ob es ein Opt-out gibt.
- Unklar, ob 2FA/MFA/Passkeys unterstützt und öffentlich dokumentiert sind.
- Kein explizit dokumentierter Vulnerability-Disclosure-Prozess gefunden.

## Quellen

- Matomo (Self-Hosting möglich; Trade-off: "eigener Betrieb/Updates)
- Plausible (SaaS, datensparsam; Trade-off: "anderer Funktionsumfang/Hosting-Optionen)
- Fathom (SaaS; Trade-off: "anderer Funktionsumfang/Regionen)
- https://github.com/pirsch-analytics/pirsch
- [Pirsch Website](https://pirsch.io/)
- [Pricing](https://pirsch.io/pricing)
- [Privacy Policy](https://pirsch.io/privacy)
- [Terms and Conditions](https://pirsch.io/terms)
- [Legal Notice](https://pirsch.io/legal)
- [Dokumentation](https://docs.pirsch.io/)
- [Docs: Privacy](https://docs.pirsch.io/privacy)
- [Docs: Billing (Stripe)](https://docs.pirsch.io/billing)
- [Docs: Access and Permissions](https://docs.pirsch.io/advanced/access)
- [DPA (PDF)](https://pirsch.io/static/files/Data%20Processing%20Agreement%20-%20Pirsch%20Analytics.pdf)
- [GitHub: Open-Source Core (AGPL-3.0)](https://github.com/pirsch-analytics/pirsch)
