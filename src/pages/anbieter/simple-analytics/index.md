---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Simple Analytics"
url: "/anbieter/simple-analytics/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-21"
robots: "index,follow"
description: "Kurzprofil von Simple Analytics (Kategorie: Analytics)."
provider: ""
name: "Simple Analytics"
category: "Analytics"
website: "https://www.simpleanalytics.com/"
repo: "https://github.com/simpleanalytics/scripts"
license: "MIT"
policies: ""
privacy: "https://dashboard.simpleanalytics.com/privacy-policy"
terms: "https://dashboard.simpleanalytics.com/general-terms-and-conditions"
transparency: "https://dashboard.simpleanalytics.com/open"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "partial"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "unknown"
kyc_required: "unknown"
jurisdiction: "Niederlande (Bussum)"
region: "eu"
logs: "minimal"
retention: "long"
retention_notes: "planabhängig (Free: ca. 30 Tage; bezahlt: mehrere Jahre) + Backups/Fehlerlogs bis 90 Tage"
retention_max_days: "90"
data_notes: "Keine Cookies oder Geräte-IDs für Website-Besucher laut Anbieter; IP-Adressen werden verworfen; Hosting/Verarbeitung in der EU (NL) beschrieben; Abrechnung über Stripe."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Simple Analytics ist ein Anbieter aus der Kategorie **Analytics**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Web-Analytics ohne Cookies und ohne persistente Besucher-IDs einsetzen willst und dafür mit aggregierten Kennzahlen arbeitest.
- **Weniger geeignet wenn:** du zwingend Self-Hosting brauchst oder detailreiche Nutzer-/Session-Attribution erwartest (die bei datensparsamen Einrichtungen typischerweise eingeschränkt ist).
- **Wichtigster Abwägung:** weniger Detailtiefe/Attribution vs. weniger personenbezogene Daten/geringeres Tracking-Risiko (insbesondere ohne Cookies/IPs).

## Sofortmaßnahmen
- **DNT respektieren:** nichts an `data-collect-dnt` ändern, wenn du DNT-Besuche standardmäßig nicht erfassen willst (reduziert Datenmenge, respektiert Nutzer-Signal).
- **URL-Parameter nicht ausweiten:** `data-allow-params` weglassen, damit nur die vorgesehenen UTMs/`ref` gespeichert werden (senkt Risiko, versehentlich PII in URLs mitzunehmen).
- **Sensible Pfade ignorieren:** `data-ignore-pages` für Login-/Account-/Token-URLs setzen (verhindert, dass sensible Pfad-Metadaten in Statistiken auftauchen).

## Entscheidungshilfe
- Wenn du Analytics ohne Cookies und ohne Geräte-IDs nutzen willst, dann ist die Standard-Integration per Script relevant (Abwägung: Kennzahlen sind bewusst „grob“ und nicht für individuelles Tracking gedacht).
- Wenn du DNT-Besucher **nicht** erfassen willst, dann lasse die Standardeinstellung aktiv (Abwägung: weniger vollständige Zahlen).
- Wenn du DNT-Besucher **doch** erfassen musst, dann setze `data-collect-dnt="true"` (Abwägung: mehr Erfassung, aber DNT-Signal wird ignoriert).
- Wenn URLs bei dir potenziell personenbezogene Parameter enthalten, dann belasse es bei den Default-Parametern (UTMs/`ref`) und aktiviere keine Zusatzparameter (Abwägung: weniger Kampagnen-/Produktdetail im Reporting).
- Wenn du Datenlangezeit-Historie brauchst, dann ist ein bezahlter Plan relevant (Abwägung: Abrechnung/Payment-Metadaten bei Stripe + längere Aufbewahrung).
- Wenn du Self-Hosting/On-Prem erzwingen musst, dann passt ein reiner Cloud-Dienst oft nicht (Abwägung: Self-Hosting bedeutet mehr Wartung/Verantwortung).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Simple Analytics |
| Kategorie | Analytics |
| Website | https://www.simpleanalytics.com/ |
| Quellcode | https://github.com/simpleanalytics/scripts |
| Lizenz | MIT |
| Preismodell | freemium (Free + Paid) |
| Free Tier | yes |
| Open Source | partial (z.B. Script-Repo) |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Stripe (laut Anbieterunterlagen) |
| Jurisdiktion | Niederlande (Bussum) |
| Logs | minimal |
| Retention | planabhängig (Free: ca. 30 Tage; bezahlt: mehrere Jahre) + Backups/Fehlerlogs bis 90 Tage |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://dashboard.simpleanalytics.com/privacy-policy
- AGB/Terms: https://dashboard.simpleanalytics.com/general-terms-and-conditions
- Transparency Report: https://dashboard.simpleanalytics.com/open
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Keine Cookies oder Geräte-IDs für Website-Besucher laut Anbieter; IP-Adressen werden verworfen; Hosting/Verarbeitung in der EU (NL) beschrieben; Abrechnung über Stripe.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - **Kundenkonto:** u.a. Name, E-Mail, Website-Name, Passwort (je nach Login-Optionen) sowie Abrechnungsdaten.  
  - **Website-Besucher (Analytics-Daten):** aggregierte Metriken ohne Cookies/Device-IDs; laut Doku u.a. Referrer, (Standard-)UTM-Parameter, Zeitzone (als Proxy für Land) und anonymisierte User-Agent-Werte; IP-Adressen werden verworfen.
- **Wofür:** Bereitstellung des Analytics-Dienstes (Dashboard/Reports/API), Betrieb/Support, Abrechnung.
- **Weitergabe/Subprozessoren:** In der Doku werden Hosting/Server (Worldstream, Leaseweb), CDN (Bunny CDN) sowie Stripe für Abrechnung genannt.
- **Drittlandtransfer:** Doku beschreibt Hosting/Verarbeitung in der EU (NL) und keine Transfers außerhalb der EU für den Betrieb der Analytics-Daten.
- **Zahlungsabwicklung/Payment Processor:** Stripe (Abonnement/Abrechnung).
- **Kontakt/DSAR/DPA:** Privacy-Kontakt via privacyquestions@simpleanalytics.com; für Rechteanfragen kann Identitätsprüfung gefordert sein (z.B. ID-Kopie laut Privacy Policy).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Für eingebundene Websites: ja (durch Script-Integration). Für die Simple-Analytics-Webapp: laut Cookie Statement existieren funktionale Cookies/Techniken.
- **Abschaltbar?** Besucher-Tracking lässt sich durch Entfernen des Scripts stoppen; DNT-Erfassung ist per Script-Attribut steuerbar.
- **Wo (Menüpfad):**
  - **DNT-Verhalten:** Script-Attribut `data-collect-dnt` (Docs: „Do Not Track“).
  - **URL-Parameter:** Default nur UTM/`ref`, zusätzliche Parameter via `data-allow-params` (Docs: „Allow URL parameters“).
  - **Seiten ausschließen:** `data-ignore-pages` (Docs: „Ignore pages“).

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** planabhängig (Free: ca. 30 Tage; bezahlt: mehrere Jahre); bei Account-Löschung: Backups/Fehlerlogs laut Doku bis 90 Tage.
- **Lösch-/Opt-out-Optionen:** Account kann gelöscht werden; dabei werden Analytics-Daten entfernt, Abo in Stripe gekündigt; bestimmte Abrechnungs- und Log-/Backup-Bestände bleiben befristet bestehen.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Kundendaten werden laut Doku „at rest“ und „in transit“ verschlüsselt; nur Simple Analytics hält die Schlüssel.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben.
- **Recovery/Account-Wiederherstellung:** Nicht angegeben (praktisch: Login/Reset-Prozesse über Account-Funktionen, Details in Doku begrenzt).
- **Vuln-Handling / Security-Kontakt:** Security-Fragen laut Doku an info@simpleanalytics.com.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Account-Passwort setzen/prüfen**, falls du nicht nur per E-Mail-Login arbeitest.  
   **Wo:** Dashboard → Account settings → „Passwords“ (laut Doku).  
   **Prüfen:** Passwort-Update bestätigt; Passwort möglichst lang wählen (laut Doku-Hinweis).
2) **DNT respektieren (Default beibehalten)**, wenn du DNT-Besucher nicht erfassen willst.  
   **Wo:** Script-Einbindung → kein `data-collect-dnt="true"` setzen.  
   **Prüfen:** DNT-Clients tauchen nicht in den Zahlen auf (Test mit DNT aktiv).
3) **Sensible Seiten/Parameter vermeiden**, um keine PII über URLs zu erfassen.  
   **Wo:** Script-Einbindung → `data-ignore-pages="..."` nutzen und `data-allow-params` weglassen.  
   **Prüfen:** Login-/Account-/Token-Pfade erscheinen nicht; Query-Strings außerhalb UTMs werden nicht gespeichert.

**Stolpersteine:**
- Zusätzliche URL-Parameter zu erlauben ist bequem, erhöht aber das Risiko, dass personenbezogene Infos in URLs in Metriken landen (Abwägung: Detailtiefe vs. Datensparsamkeit).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Datenminimalismus beibehalten:** keine Zusatzparameter (`data-allow-params`) und DNT-Default nicht überschreiben.
- **Retention klein halten:** wenn möglich eine kürzere Datenhistorie wählen (Abwägung: weniger Langzeit-Analysen).
- **Export-Strategie:** regelmäßig Export/Backups ziehen (API/Export), statt sehr lange serverseitige Historie zu halten.  
**Abwägung:** mehr Eigenorganisation, ggf. zusätzliche lokale Datenspeicherung.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Trenne Rollen/Accounts:** nur notwendige Personen einladen (Team-Rollen sind produktabhängig), keine Passwortweitergabe.
- **Script-Einrichtung streng halten:** möglichst wenige Features aktivieren (keine Extra-Parameter, kein DNT-Override, konsequent Ignore-Pages).
- **Web-Härtung im Umfeld:** CSP für die erlaubten Endpunkte sauber setzen, um Script-Missbrauch zu erschweren (Abwägung: mehr Aufwand beim Web-Deploy).  
**Abwägung:** deutlicher Komfortverlust, höhere Komplexität.

</details>

## Features
- Cookie-lose Besucher-Messung ohne lokale Speichertechniken (laut Anbieter-Doku).
- DNT-Unterstützung (standardmäßig werden DNT-Besuche nicht erfasst; optional per Script umschaltbar).
- Steuerung von URL-Parametern (Default nur UTMs/`ref`; Zusatzparameter explizit erlaubbar).
- Ignore-Pages/Ignore-Mechanismen zur Reduktion sensibler Pfad-Metadaten.
- Export-/Stats-/Admin-API für Datenportabilität und Automatisierung.
- Account-Löschung inkl. Datenlöschung + definierte Aufbewahrung für Backups/Fehlerlogs (90 Tage laut Doku).

## Alternativen
- Plausible Analytics (ähnliche Kategorie; Abwägung: Open-Source/Self-Hosting möglich vs. mehr Betriebsaufwand)
- Matomo (ähnliche Kategorie; Abwägung: sehr umfangreich/konfigurierbar vs. höherer Wartungsaufwand)
- GoatCounter / Umami (ähnliche Kategorie; Abwägung: minimalistische Tools vs. weniger Enterprise-/Team-Funktionen)

## Nicht gelöst / offene Punkte
- 2FA/MFA/Passkeys sind in den genutzten Anbieterquellen nicht klar dokumentiert (Stand: 2026-01-21).
- Öffentliche DPA/Subprozessoren-Liste ist nicht eindeutig auffindbar.
- Formeller Vulnerability-Disclosure-Prozess (SECURITY.md/Bug-Bounty) ist nicht eindeutig auffindbar.

## Quellen

- Plausible Analytics (ähnliche Kategorie; Trade-off: "Open-Source/Self-Hosting vs. mehr Betriebsaufwand)
- Matomo (ähnliche Kategorie; Trade-off: "sehr viele Features vs. komplexere Konfiguration)
- GoatCounter (ähnliche Kategorie; Trade-off: "minimalistisch vs. weniger Enterprise-Funktionen)
- https://github.com/simpleanalytics/scripts
- [Simple Analytics (Website)](https://www.simpleanalytics.com/)
- [Pricing](https://www.simpleanalytics.com/pricing)
- [Privacy Policy](https://dashboard.simpleanalytics.com/privacy-policy)
- [General Terms and Conditions](https://dashboard.simpleanalytics.com/general-terms-and-conditions)
- [Cookie statement](https://dashboard.simpleanalytics.com/cookie-statement)
- [Open Startup (Transparenz/Metriken)](https://dashboard.simpleanalytics.com/open)
- [Docs: Metrics / What we collect](https://docs.simpleanalytics.com/what-we-collect)
- [Docs: Do Not Track](https://docs.simpleanalytics.com/dnt)
- [Docs: Allow URL parameters](https://docs.simpleanalytics.com/allow-params)
- [Docs: Ignore pages](https://docs.simpleanalytics.com/ignore-pages)
- [Docs: Data Security and Ownership](https://docs.simpleanalytics.com/data-security-and-ownership)
- [Docs: How to delete my account](https://docs.simpleanalytics.com/delete-account)
- [Docs: Passwords](https://docs.simpleanalytics.com/passwords)
- [GitHub: scripts (Simple Analytics)](https://github.com/simpleanalytics/scripts)
