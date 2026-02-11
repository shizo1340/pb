---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Wire"
url: "/anbieter/wire/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-07"
robots: "index,follow"
description: "Kurzprofil von Wire (Kategorie: Messenger)."
provider: ""
name: "Wire"
category: "Messenger"
website: "https://wire.com/"
repo: "https://github.com/wireapp/wire"
license: "GPL-3.0 (Clients), AGPL-3.0 (Server)"
policies: ""
privacy: "https://wire.com/en/privacy-policy"
terms: "https://wire.com/legal/#terms"
transparency: "https://wire.com/en/transparency"
warrant_canary: "Nicht angegeben"
audits: "[]"
pricing: "mixed"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Schweiz (Wire Swiss GmbH)"
region: "ch"
logs: "minimal"
retention: "long"
retention_notes: "bis zu 90 Tage (Logdaten), bis zu 365 Tage (Audit/Usage-Daten; produktabhängig)"
retention_max_days: "365"
data_notes: "Wire beschreibt Ende-zu-Ende-Verschlüsselung für Nachrichten/Calls/Files; einige Metadaten (z.B. Konto- und technische Daten) fallen für Betrieb und Sicherheit an."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Wire ist ein Anbieter aus der Kategorie **Messenger**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen Messenger mit Ende-zu-Ende-Verschlüsselung für Chats/Calls/Dateien suchst und (je nach Nutzung) auch Optionen wie Gäste-Zugriff per Browser oder On-Premises/Hybrid-Betrieb relevant sind.
- **Weniger geeignet wenn:** du ohne Konto/Identifier arbeiten möchtest oder eine Lösung suchst, bei der möglichst wenig zentrale Infrastruktur/Metadaten anfallen.
- **Wichtigster Abwägung:** Team-/Enterprise-Funktionen und Multi-Device-Komfort vs. unvermeidliche Metadaten (Konto, Geräte, technische Logdaten) für Betrieb, Sicherheit und Administration.

## Sofortmaßnahmen
- **Geräte prüfen & aufräumen:** entferne unbekannte/alte Geräte aus der Geräteliste, damit kompromittierte Sessions schneller enden.
- **Selbstlöschende Nachrichten nutzen:** setze Timer für sensible Chats, um Sichtbarkeit im Verlauf zu begrenzen (Abwägung: weniger Nachvollziehbarkeit).
- **Gäste-Zugriff bewusst einsetzen:** nutze Gäste nur für gezielte Situationen, weil Browser-Zugänge typischerweise mehr Angriffsfläche/Umgebungseinfluss haben.

## Entscheidungshilfe
- Wenn du **externe Personen schnell einbinden** willst, dann nutze **Gäste per Web** (Abwägung: weniger Kontrolle über deren Gerät/Browser-Umgebung).
- Wenn du **Datenhoheit/Deployment-Kontrolle** brauchst, dann sind **On-Premises/Hybrid-Optionen** relevant (Abwägung: Betrieb, Updates und Monitoring werden dein Aufwand).
- Wenn du **Multi-Device** nutzt, dann behandle **jedes Gerät als gleich kritisch** (Abwägung: mehr Pflegeaufwand, aber weniger Risiko durch vergessene Geräte).
- Wenn du **sensible Inhalte** sendest, dann setze **selbstlöschende Nachrichten** (Abwägung: Verlauf/Beweisführung wird schwächer).
- Wenn du **minimale Identitätsbindung** willst, dann registriere dich **ohne Telefonnummer** (Abwägung: je nach Workflow weniger Komfort bei Einladungen/Recovery).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Wire |
| Kategorie | Messenger |
| Website | https://wire.com/ |
| Quellcode | https://github.com/wireapp/wire |
| Lizenz | GPL-3.0 (Clients), AGPL-3.0 (Server) |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Stripe (laut Data Processing Addendum / Subprozessorenliste) |
| Jurisdiktion | Schweiz (Wire Swiss GmbH) |
| Logs | minimal |
| Retention | bis zu 90 Tage (Logdaten), bis zu 365 Tage (Audit/Usage-Daten; produktabhängig) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: [Wire Privacy Policy](https://wire.com/en/privacy-policy)
- AGB/Terms: [Wire Legal / Terms](https://wire.com/legal/#terms)
- Transparency Report: [Wire Transparency](https://wire.com/en/transparency)
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Wire beschreibt Ende-zu-Ende-Verschlüsselung für Nachrichten/Calls/Files; einige Metadaten (z.B. Konto- und technische Daten) fallen für Betrieb und Sicherheit an.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Kontodaten (z.B. E-Mail oder Telefonnummer), technische Daten/Logs zur Bereitstellung und Absicherung des Dienstes; für bezahlte Pläne zusätzlich Abrechnungs-/Zahlungsdaten.
- **Wofür:** Kontoerstellung, Dienstbetrieb (Messaging/Calls), Sicherheit/Fehleranalyse, ggf. Abrechnung und Administration (bei Organisations-/Business-Nutzung).
- **Weitergabe/Subprozessoren:** Im **Data Processing Addendum** nennt Wire eine Subprozessorenliste (Annex) inkl. Kategorien wie Hosting/Infrastructure, Analytics/Monitoring und Zahlungsabwicklung.
- **Drittlandtransfer:** Wire beschreibt internationale Datenübermittlungen/Safeguards in den Legal-/Privacy-Dokumenten; Details hängen von Subprozessoren und Produktnutzung ab.
- **Zahlungsabwicklung/Payment Processor:** Stripe wird als Subprozessor für Payment genannt.
- **Kontakt/DSAR/DPA:** Kontaktwege und Zusatzdokumente (DPA) sind auf den Legal-Seiten verlinkt.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar (produkt-/planabhängig; Subprozessorenliste nennt Analytics/Monitoring-Dienste für bestimmte Kontexte).
- **Abschaltbar?** Unklar (prüfe in App-/Team-Admin-Einstellungen sowie Cookie-/Consent-Einstellungen auf der Website).
- **Wo (Menüpfad):** App: *Einstellungen* → *Datenschutz/Diagnose* (falls vorhanden) / Team-Admin: *Admin Console* → *Security/Privacy* (falls vorhanden).

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** bis zu 90 Tage (Logdaten), bis zu 365 Tage (Audit/Usage-Daten; produktabhängig)
- **Lösch-/Opt-out-Optionen:** Unklar (prüfe Account-/Team-Admin-Optionen und Support-Doku).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Wire beschreibt Ende-zu-Ende-Verschlüsselung für Nachrichten, Calls und Files (Produkt-/Security-Seiten).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (in den hier genutzten Seiten nicht konkret beziffert).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben für Privatkonten; für Organisationsnutzung existieren SSO/SCIM-Kontexte (IdP-abhängig).
- **Recovery/Account-Wiederherstellung:** Unklar (je nach Konto-/Team-Einrichtung; Verlust von Geräten kann Keys/Verläufe betreffen).
- **Vuln-Handling / Security-Kontakt:** Wire bietet eine eigene „Vulnerability Reporting“-Seite mit Meldeweg.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (2FA/MFA), falls angeboten.  
   **Prüfen:** Bei Team-Accounts über SSO/IdP: MFA im IdP aktiv + Login erzwingt MFA.
2) **Auto-Lock/Timeout** sinnvoll setzen.  
   **Prüfen:** OS-Sperre aktiv (PIN/Passwort/Biometrie) + Bildschirm sperrt zuverlässig nach kurzer Inaktivität.
3) **Analytics/Telemetry deaktivieren**, falls Schalter existiert.  
   **Prüfen:** Opt-out/Consent sichtbar + nach Update weiterhin aus.

**Stolpersteine:**
- Multi-Device erhöht Angriffsfläche: ein vergessenes/kompromittiertes Gerät kann deine Wire-Sicherheit mitbestimmen (Abwägung: Komfort vs. Pflegeaufwand).
- Gäste-Zugänge senken Reibung, aber du hast weniger Kontrolle über Endgeräte externer Personen.

<details>
<summary>Profil B (Datensparsam)</summary>

- Reduziere Identitätsbindung: Registrierung ohne Telefonnummer (falls möglich) und getrennte Accounts für getrennte Kontexte.
- Nutze Gäste/Externals nur gezielt und räume Räume/Teilnehmerlisten regelmäßig auf.
- Für sensible Inhalte: selbstlöschende Nachrichten standardmäßig setzen (Abwägung: weniger Archiv/Compliance-Nachvollziehbarkeit).

**Abwägung:** mehr Eigenverantwortung bei Organisation, weniger „Bequemlichkeit“ bei Einladungen und Verlauf.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze einen separaten Geräte- oder OS-User-Kontext nur für Wire (z.B. eigenes Nutzerprofil, dediziertes Gerät).
- Minimale Angriffsfläche: keine unnötigen Browser-Erweiterungen, striktes OS-Härtung, sparsame Notifications.
- Wenn On-Prem/Hybrid genutzt wird: getrennte Admin-Accounts, restriktive Netzwerksegmente, Updates/Monitoring als Pflicht.

**Abwägung:** deutlicher Komfortverlust, höhere Komplexität und mehr Betriebsaufwand.

</details>

## Features
- Ende-zu-Ende-verschlüsselte Chats, Audio-/Video-Calls und Dateiaustausch.
- Selbstlöschende Nachrichten (Timer für Inhalte in 1:1 und Gruppen, laut Anbieter).
- Gäste können per Browser ohne Konto beitreten (kontext-/planabhängig).
- Open-Source-Code auf GitHub (Clients und Server-Komponenten).
- Deployment-Optionen laut Anbieter: Cloud, On-Premises oder Hybrid (v. a. Organisationskontext).

## Alternativen
- [Signal](/anbieter/signal/) – Abwägung: starker Fokus auf Private Messaging vs. weniger Enterprise-/On-Prem-Optionen.
- [Threema](/anbieter/threema/) – Abwägung: andere Account-/Identitätsmodelle vs. andere Ökosystem-/Team-Funktionen.
- Matrix/Element (Messenger) — Abwägung: föderiertes/selbst hostbares Ökosystem vs. mehr Admin-/Betriebsaufwand.
- [Session](/anbieter/session/) – Abwägung: andere Routing-/Metadaten-Modelle vs. andere UX/Kompatibilität.

## Nicht gelöst / offene Punkte
- Unklar: genaue Server-Retention nicht zugestellter Nachrichten .
- Unklar: dokumentierter Opt-out für Client-Diagnose/Analytics.

## Quellen

- Selbstlöschende Nachrichten (Timer für Inhalte in 1: "1 und Gruppen, laut Anbieter).
- Deployment-Optionen laut Anbieter: "Cloud, On-Premises oder Hybrid (v. a. Organisationskontext).
- [Signal](/anbieter/signal/) – Trade-off: "starker Fokus auf Private Messaging vs. weniger Enterprise-/On-Prem-Optionen.
- [Threema](/anbieter/threema/) – Trade-off: "andere Account-/Identitätsmodelle vs. andere Ökosystem-/Team-Funktionen.
- Matrix/Element (Messenger) — Trade-off: "föderiertes/selbst hostbares Ökosystem vs. mehr Admin-/Betriebsaufwand.
- [Session](/anbieter/session/) – Trade-off: "andere Routing-/Metadaten-Modelle vs. andere UX/Kompatibilität.
- [Wire Privacy Policy](https://wire.com/en/privacy-policy)
- [Wire Legal / Terms](https://wire.com/legal/#terms)
- [Wire Data Processing Addendum (DPA)](https://wire.com/en/data-processing-addendum)
- [Wire Features](https://wire.com/en/features)
- [Wire Deployment Options](https://wire.com/en/deployment-options)
- [Wire Vulnerability Reporting](https://wire.com/en/vulnerability-reporting)
- [Wire Transparency](https://wire.com/en/transparency)
- [Wire GitHub (Overview)](https://github.com/wireapp/wire)
- [Wire Server (GitHub)](https://github.com/wireapp/wire-server)
- [Wire License Information](https://wire.com/en/license-information)
- [Wire Privacy Policy](https://wire.com/en/privacy-policy)
- [Wire Legal / Terms](https://wire.com/legal/#terms)
- [Wire Data Processing Addendum (DPA)](https://wire.com/en/data-processing-addendum)
- [Wire Features](https://wire.com/en/features)
- [Wire Deployment Options](https://wire.com/en/deployment-options)
- [Wire Vulnerability Reporting](https://wire.com/en/vulnerability-reporting)
- [Wire Transparency](https://wire.com/en/transparency)
- [Wire GitHub (Overview)](https://github.com/wireapp/wire)
- [Wire Server (GitHub)](https://github.com/wireapp/wire-server)
- [Wire License Information](https://wire.com/en/license-information)
