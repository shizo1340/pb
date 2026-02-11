---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Swetrix"
url: "/anbieter/swetrix/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-12"
robots: "index,follow"
description: "Kurzprofil von Swetrix (Kategorie: Analytics)."
provider: ""
name: "Swetrix"
category: "Analytics"
website: "https://swetrix.com/"
repo: "https://github.com/Swetrix/swetrix"
license: "AGPL-3.0-only"
policies: ""
privacy: "https://swetrix.com/privacy"
terms: "https://swetrix.com/terms"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "no"
open_source: "yes"
self_host_possible: "yes"
account_required: "yes"
phone_required: "no"
kyc_required: "unknown"
jurisdiction: "Vereinigtes Königreich (Schottland); Datenverarbeitung laut Privacy Policy: Deutschland (EU)"
region: "uk"
logs: "minimal"
retention: "specified"
retention_notes: "Solange Konto aktiv; Backups ggf. für „reasonable period“; Analytics-Daten bis Löschung durch Nutzer"
data_notes: "Cookieless Tracking; IP/User-Agent werden laut Data Policy nicht dauerhaft gespeichert (nur in-memory zur Session-Hash-Generierung); Analytics-Daten in der EU (Hetzner, DE); optionale User-Profile (monatlicher Salt) und optionales Error-/Performance-Tracking."
features: ""
alternatives: ""
payment_processors: "Paddle (Cloud-Abos)"
sources: ""
---
## Kurzprofil

Swetrix ist ein Anbieter aus der Kategorie **Analytics**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Web-Analytics willst, die **ohne Cookies** arbeitet und laut Anbieter **keine IP/User-Agent dauerhaft speichert**, aber trotzdem Sessions/Flows auswerten kann.
- **Weniger geeignet wenn:** du keinerlei externe Verarbeitung von Nutzungsdaten möchtest (dann ist Self-Hosting oder Offline-Auswertung relevanter).
- **Wichtigster Abwägung:** weniger persistente Identifier (Privacy) vs. weniger Langzeit-/Kohorten-Analysen; optionales „User Profiles“-Tracking erhöht Metadaten-/Consent-Komplexität.

## Sofortmaßnahmen
- **2FA aktivieren:** reduziert Risiko durch Passwort-Leaks (Dashboard-Zugriff).  
- **User Profiles deaktiviert lassen:** vermeidet monatliche Wiedererkennung (Abwägung: weniger Retention-/Profil-Insights).  
- **URLs/Parameter minimieren:** Query-/Hash-Tracking nur aktivieren, wenn nötig (Abwägung: weniger Detail in Reports).

## Entscheidungshilfe
- Wenn du **Analytics ohne Cookies** willst, dann ist Swetrix nutzbar (Abwägung: Seiten-URL, Referrer, UTM, Geräte-/Region-Daten bleiben als Metadaten sichtbar).
- Wenn du **keine Langzeit-Wiedererkennung** brauchst, dann nutze nur Sessions (Abwägung: weniger Kohorten/Retention-Statistiken).
- Wenn du **Nutzer*innen eindeutig identifizieren** willst (z.B. via eigene `profileIds`), dann ist das möglich (Abwägung: Consent/Compliance + höhere Identifizierbarkeit).
- Wenn du **sensible URLs/Parameter** hast (z.B. IDs in Query-Strings), dann deaktiviere entsprechende Optionen und/oder bereinige URLs vor dem Senden (Abwägung: weniger Debug/Attribution).
- Wenn du **Datenhaltung selbst kontrollieren** willst, dann nutze die Community Edition (Abwägung: eigener Betrieb, Updates, Backups, Monitoring).
- Wenn du **verwaltetes Hosting + Abrechnung** willst, dann nutze die Cloud-Variante (Abwägung: zusätzliche Zahlungs-/Accountdaten und Subprozessoren).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Swetrix |
| Kategorie | Analytics |
| Website | https://swetrix.com/ |
| Quellcode | https://github.com/Swetrix/swetrix |
| Lizenz | AGPL-3.0-only |
| Preismodell | mixed |
| Free Tier | no |
| Open Source | yes |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Paddle (Cloud-Abos) |
| Jurisdiktion | Vereinigtes Königreich (Schottland); Datenverarbeitung laut Privacy Policy: Deutschland (EU) |
| Logs | minimal |
| Retention | Solange Konto aktiv; Backups ggf. für „reasonable period“; Analytics-Daten bis Löschung durch Nutzer |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://swetrix.com/privacy
- AGB/Terms: https://swetrix.com/terms
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Cookieless Tracking; IP/User-Agent werden laut Data Policy nicht dauerhaft gespeichert (nur in-memory zur Session-Hash-Generierung); Analytics-Daten in der EU (Hetzner, DE); optionale User-Profile (monatlicher Salt) und optionales Error-/Performance-Tracking.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - **Kundendaten:** Name/E-Mail + ggf. Rechnungsdaten bei Paid-Plan; Nutzungsdaten/Logfiles auf swetrix.com (Privacy Policy).  
  - **End-User/Visitor-Daten (Analytics):** Projekt-ID, Host/URL, Referrer, UTM-Parameter, Browser/OS/Device, Sprache/Locale, grobe Geodaten (Country/Region/City) sowie optionale Events/Metadata; IP/User-Agent werden laut Data Policy **nicht** dauerhaft gespeichert.
- **Wofür:** Betrieb des Dienstes, Reports/Statistiken, Support/Sicherheit; Analytics-/Error-/Performance-Auswertung je nach aktivierten Modulen (Privacy Policy + Data Policy).
- **Weitergabe/Subprozessoren:** Paddle (Zahlung), Fastmail/AWS (E-Mails), Sentry (Error Tracking), Hetzner (Hosting), OpenRouter (AI-Chat) – laut Privacy Policy.
- **Drittlandtransfer:** In der Privacy Policy werden Subprozessoren u.a. in USA/Australien/UK genannt; Hosting in Deutschland (Hetzner).
- **Zahlungsabwicklung/Payment Processor:** Paddle (laut Privacy Policy + Billing-Docs).
- **Kontakt/DSAR/DPA:** Kontakt via `contact@swetrix.com`; DSAR laut Privacy Policy per E-Mail möglich.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Ja – sobald du das Tracking-Script einbindest, werden Events an Swetrix gesendet (Produktzweck).
- **Abschaltbar?** Ja – Script entfernen oder Projekt/Account löschen (Docs).
- **Wo (Menüpfad):** Dashboard → Projekt/Site Settings (Tracking-Einrichtung) bzw. Account settings → Account (Löschung).

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** Solange Konto aktiv; Backups ggf. für „reasonable period“; Analytics-Daten bis Löschung durch Nutzer.
- **Lösch-/Opt-out-Optionen:** Account-Löschung im Dashboard löscht laut Docs alle Daten dauerhaft; für Websites kann man Daten zurücksetzen/löschen (Docs/Data Policy).

**Abwägung am Punkt:** Weniger (oder nur kurzlebige) Identifier senkt Tracking-Reichweite, reduziert aber auch Langzeit-Analysen und kann Debugging erschweren.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Der Anbieter nennt „privacy-enhancing technologies such as encryption“ (Privacy Policy), Details zu Verfahren/At-Rest nicht konkretisiert.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA per TOTP + Recovery Code (Docs).
- **Recovery/Account-Wiederherstellung:** 2FA-Recovery-Code; Passwort-Reset ist in den Account-Settings dokumentiert (Docs-Navigation).
- **Vuln-Handling / Security-Kontakt:** Kontakt für Security-Fragen: `security@swetrix.com` (Privacy Policy).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **2FA aktivieren (TOTP)**  
   **Wo:** Account settings → Account → „Two-factor authentication (2FA)“ (Docs).  
   **Prüfen:** Login verlangt zusätzlich Code; Recovery Code sicher abgelegt.
2) **Team-/Sharing-Zugriffe begrenzen** (nur falls genutzt)  
   **Prüfen:** nur notwendige Mitglieder/Rollen; öffentliche Links vermeiden, falls nicht nötig.
3) **Privacy-Features bewusst wählen** (z.B. User Profiles aus lassen, Query-/Hash-Tracking nur bei Bedarf)  
   **Prüfen:** Reports enthalten keine unnötigen URL-Parameter/Suchstrings.

**Stolpersteine:**
- Wenn du mit Google/GitHub SSO ein Konto erstellt hast, kann das ggf. nicht wieder entkoppelt werden (Docs: „Socialisations“).  
- Eigene `profileIds` (User Identification) erhöhen Identifizierbarkeit und können Consent/Compliance auslösen (Data Policy Abwägung).

<details>
<summary>Profil B (Datensparsam)</summary>

- Vermeide „User Profiles“ und keine eigenen `profileIds` senden (kein Long-term Identifier).
- Keine unnötigen Metadaten mitschicken (Metadata/Events sparsam, keine PII in Event-Namen/URLs).
- Self-Hosting nutzen, wenn du Hosting-/Logdaten vollständig in eigener Kontrolle halten willst.  
**Abwägung:** mehr Betriebsaufwand (Updates/Monitoring/Backups).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Self-Hosting in isolierter Umgebung (separates Netzwerk/VM) + restriktive Firewall-Egress-Regeln (nur notwendige Ziele).
- Striktes Rollenmodell für Teamzugriffe, keine öffentlichen Dashboards/Links.
- Tracking minimalistisch: keine Custom Events mit Identifikatoren, keine externen Integrationen.  
**Abwägung:** deutlich weniger Komfort/Integrationen und geringere Auswertetiefe.

</details>

## Features
- Cookieless Web-Analytics (Pageviews + Custom Events)
- Session-Analyse ohne persistente Identifier (Hash-Mechanismus, täglich rotierender Salt)
- Optionale User Profiles (monatlicher Salt) oder eigene `profileIds` (Consent-/Identifikations-Abwägung)
- Optionale Performance-Metriken (Web Performance API) und Error Tracking
- Team-/Org-Funktionen, Einladungen, öffentliche/geschützte Dashboards (laut Website/Docs)
- Community Edition zum Self-Hosting

## Alternativen
- Plausible (Analytics; Abwägung: anderer Feature-/Datenmodell-Fokus je nach Einrichtung)
- Matomo (Analytics; Abwägung: typischerweise mehr Betriebs-/Konfigurationsaufwand bei Self-Hosting)
- Umami (Analytics; Abwägung: typischerweise weniger Komplettfunktionen, je nach Hosting/Einrichtung)

## Nicht gelöst / offene Punkte
- Details zu Verschlüsselung „at rest“/Schlüsselmanagement sind nicht konkret beschrieben.
- Transparency Report / Warrant Canary: nicht angegeben.

## Quellen

- Plausible (Analytics; Trade-off: "anderer Feature-/Datenmodell-Fokus je nach Setup)
- Matomo (Analytics; Trade-off: "typischerweise mehr Betriebs-/Konfigurationsaufwand bei Self-Hosting)
- Umami (Analytics; Trade-off: "typischerweise weniger Komplettfunktionen, je nach Hosting/Setup)
- [Swetrix (Website & Pricing)](https://swetrix.com/)
- [Swetrix Data Policy](https://swetrix.com/data-policy)
- [Swetrix Privacy Policy](https://swetrix.com/privacy)
- [Swetrix Terms](https://swetrix.com/terms)
- [Docs: "Upgrade von Trial zu Abo](https://docs.swetrix.com/billing-and-subscription/upgrade-from-trial)
- [GitHub: "Swetrix Repository](https://github.com/Swetrix/swetrix)
- [Swetrix (Website & Pricing)](https://swetrix.com/)
- [Swetrix Data Policy](https://swetrix.com/data-policy)
- [Swetrix Privacy Policy](https://swetrix.com/privacy)
- [Swetrix Terms](https://swetrix.com/terms)
- [Docs: 2FA einrichten](https://docs.swetrix.com/settings/2-factor-authentication)
- [Docs: Account löschen](https://docs.swetrix.com/settings/delete-account)
- [Docs: Upgrade von Trial zu Abo](https://docs.swetrix.com/billing-and-subscription/upgrade-from-trial)
- [GitHub: Swetrix Quellcode](https://github.com/Swetrix/swetrix)
