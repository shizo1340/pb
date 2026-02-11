---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Microsoft Edge"
url: "/anbieter/microsoft-edge/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-19"
robots: "index,follow"
description: "Kurzprofil von Microsoft Edge (Kategorie: Browser)."
provider: ""
name: "Microsoft Edge"
category: "Browser"
website: "https://www.microsoft.com/edge"
repo: "Nicht angegeben"
license: "Proprietär (Microsoft)"
policies: ""
privacy: "https://www.microsoft.com/de-de/privacy/privacystatement"
terms: "https://www.microsoft.com/de-de/servicesagreement"
transparency: "https://www.microsoft.com/de-de/digitalsafety/transparency-reports"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "partial"
self_host_possible: "no"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA / Irland (EWR)"
region: "us"
logs: "configurable"
retention: "verylong"
retention_notes: "bis zu 2 Jahre (Diagnosedaten; aggregiert/identifikator-bereinigt)"
retention_max_days: "730"
data_notes: "Edge sendet erforderliche Diagnosedaten; optionale Diagnosedaten (inkl. besuchte Websites) sind abschaltbar und werden laut Doku nicht mit dem Microsoft-Konto gespeichert."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Microsoft Edge ist ein Anbieter aus der Kategorie **Browser**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen Chromium-basierten Browser mit integrierten Schutzfunktionen (z.B. SmartScreen) und Microsoft-Integrationen (Sync, Dienste) nutzen willst.
- **Weniger geeignet wenn:** du möglichst wenige Datenflüsse zu Microsoft willst und cloudbasierte Sicherheits-/Komfortfunktionen vermeiden möchtest.
- **Wichtigster Abwägung:** Schutzfunktionen & Komfort (z.B. Reputation Checks, Sync, Personalisierung) vs. zusätzliche Metadaten/Diagnosedaten an Microsoft.

## Sofortmaßnahmen
- **Optionales Senden von Diagnosedaten deaktivieren** (Einstellungen → *Datenschutz, Suche und Dienste* → *Datenschutz* → „Optionale Diagnosedaten senden“ aus): reduziert Übermittlung von Nutzungs- und Website-Daten.  
- **Tracking Prevention auf „Strict“ stellen** (Einstellungen → *Datenschutz, Suche und Dienste* → *Tracking prevention*): reduziert Third-Party-Tracking im Alltag.  
- **Secure DNS aktivieren** (Einstellungen → *Datenschutz, Suche und Dienste* → *Sicherheit* → „Secure DNS verwenden“ an): schützt DNS-Anfragen besser vor Mitlesen/Manipulation im Netz.

## Entscheidungshilfe
- Wenn du **ohne Microsoft-Konto** surfst, dann nutze Edge ohne Anmeldung und verzichte auf Sync (Abwägung: keine geräteübergreifenden Favoriten/Passwörter).  
- Wenn du **Sync** brauchst, dann melde dich an und wähle bewusst, was synchronisiert wird (Abwägung: mehr konto-/dienstbezogene Datenflüsse).  
- Wenn du **weniger Diagnosedaten** willst, dann deaktiviere optionale Diagnosedaten und prüfe `edge://data-viewer` (Abwägung: weniger Diagnosen/Verbesserungsdaten).  
- Wenn du **Phishing-/Malware-Schutz** willst, dann lasse Microsoft Defender SmartScreen aktiv (Abwägung: Reputation-Checks können Metadaten verursachen).  
- Wenn du **kurze, nicht nachverfolgbare Sitzungen** willst, dann nutze Gastmodus oder InPrivate (Abwägung: weniger Komfort wie persistente Logins/Autofill).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Microsoft Edge |
| Kategorie | Browser |
| Website | https://www.microsoft.com/edge |
| Quellcode | Nicht angegeben |
| Lizenz | Proprietär (Microsoft) |
| Preismodell | free |
| Free Tier | yes |
| Open Source | partial *(Edge basiert auf Chromium, enthält aber proprietäre Komponenten)* |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend (kostenlos) |
| Jurisdiktion | USA / Irland (EWR) |
| Logs | configurable |
| Retention | bis zu 2 Jahre (Diagnosedaten; aggregiert/identifikator-bereinigt) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.microsoft.com/de-de/privacy/privacystatement
- AGB/Terms: https://www.microsoft.com/de-de/servicesagreement
- Transparency Report: https://www.microsoft.com/de-de/digitalsafety/transparency-reports
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Edge erfasst erforderliche Diagnosedaten (u.a. Konfiguration/Inventar) und bietet optionales Diagnosedaten-Senden, das u.a. besuchte Websites umfassen kann; diese optionalen Daten werden laut Doku nicht mit dem Microsoft-Konto gespeichert und sind abschaltbar.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - **Erforderliche Diagnosedaten** (u.a. Konnektivität, Konfiguration, Software-Einrichtung, Inventar).  
  - **Optionale Diagnosedaten** können u.a. Feature-Nutzung, Performance, Speicherverbrauch sowie **besuchte Websites** (z.B. URL, Seitentitel, Navigationsinfos) enthalten.  
  - **InPrivate/Gastmodus:** „Websites, die du besuchst“ werden in diesen Modi nicht als optionale Diagnosedaten gesendet.  
- **Wofür:** Produktzuverlässigkeit, Sicherheit, Updates, Fehleranalyse und Produktverbesserung (Diagnosedaten).  
- **Weitergabe/Subprozessoren:** Nicht Edge-spezifisch als öffentliche Liste in der Edge-Privacy-Doku angegeben.  
- **Drittlandtransfer:** Nicht Edge-spezifisch angegeben (siehe Microsoft Privacy Statement).  
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend (kostenlos).  
- **Kontakt/DSAR/DPA:** Datenschutzanfragen über Microsoft Privacy Statement/Privacy Support (siehe Quellen).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Erforderliche Diagnosedaten: **ja** (laut Doku); optionale Diagnosedaten: **nur mit Einwilligung/Einstellung**.
- **Abschaltbar?** Optionale Diagnosedaten: **ja**; erforderliche Diagnosedaten: **nein** (laut Doku).
- **Wo (Menüpfad):** Einstellungen → *Datenschutz, Suche und Dienste* → *Datenschutz* → „Optionale Diagnosedaten senden …“ (Toggle).

**Logs & Retention:**
- **Logging-Level:** configurable
- **Aufbewahrung:** Diagnosedaten werden laut Doku **bis zu zwei Jahre** gespeichert (nach Aggregation/Entfernung persönlicher Identifikatoren).
- **Lösch-/Opt-out-Optionen:** Optionale Diagnosedaten deaktivierbar; Diagnosedaten-Löschung unter Windows über *Einstellungen → Datenschutz & Sicherheit → Diagnose & Feedback → Diagnosedaten löschen*.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Diagnosedaten/Modul-Downloads werden laut Doku über **HTTPS** übertragen; weitere Details zu lokaler Verschlüsselung sind nicht Edge-spezifisch angegeben.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht Edge-spezifisch angegeben (betrifft ggf. Microsoft-Konto bei Anmeldung).
- **Recovery/Account-Wiederherstellung:** Nicht angegeben (betrifft ggf. Microsoft-Konto bei Anmeldung).
- **Vuln-Handling / Security-Kontakt:** MSRC (Microsoft Security Response Center) + Microsoft Edge Bounty Program sind öffentlich dokumentiert.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (nur falls du Sync nutzt): Microsoft-Konto zusätzlich absichern (z.B. starke Anmeldung).  
   **Prüfen:** Edge zeigt „Angemeldet“ nur, wenn du es aktiv willst; Sync-Kategorien sind sichtbar.
2) **Auto-Lock/Timeout** sinnvoll setzen (OS-Ebene) und Browser-Sessions nicht unbeaufsichtigt lassen.  
   **Prüfen:** Gerät sperrt zuverlässig; Edge-Profile sind nicht dauerhaft offen auf geteilten Geräten.
3) **Analytics/Telemetry deaktivieren** (Optionale Diagnosedaten).  
   **Prüfen:** Einstellungen → *Datenschutz, Suche und Dienste* → Toggle „Optionale Diagnosedaten“ ist „aus“.

**Stolpersteine:**
- Schutzfunktionen (z.B. SmartScreen) können Abfragen an Microsoft auslösen (Abwägung: Sicherheitsgewinn vs. zusätzliche Metadaten).
- Sync bindet Browserdaten an ein Konto (Abwägung: Komfort vs. Konto-/Dienstbezug).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **ohne Anmeldung**, wenn du keinen Sync brauchst (Abwägung: keine geräteübergreifende Historie/Favoriten).
- Nutze **InPrivate oder Gastmodus** für kurzfristige Sessions (Abwägung: weniger Komfort, weniger Persistenz).
- Stelle Tracking Prevention auf **Strict** und deaktiviere optionale Diagnosedaten (Abwägung: manche Seiten/Flows können „ruckeliger“ wirken).

**Abwägung:** weniger Personalisierung/Komfort, dafür weniger Datenflüsse.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze **separaten OS-User** oder separate Edge-Profile nur für kritische Identitäten (Abwägung: mehr Aufwand im Alltag).
- Aktiviere „**Enhance your security on the web**“ (Einstellungen → *Datenschutz, Suche und Dienste* → *Sicherheit*) (Abwägung: mögliche Kompatibilitäts-/Performance-Effekte).
- Deaktiviere optionale Diagnosedaten konsequent und arbeite bevorzugt in InPrivate/Gastmodus (Abwägung: weniger Diagnosemöglichkeiten).

**Abwägung:** deutlicher Komfortverlust, höhere Komplexität.

</details>

## Features
- Tracking Prevention (Basic/Balanced/Strict) mit klarer Umschaltung in den Einstellungen.
- InPrivate- und Gastmodus (weniger Persistenz von Browserdaten; Websites werden dort nicht als optionale Diagnosedaten gesendet).
- Microsoft Defender SmartScreen (Schutz vor Phishing/Malware, per Toggle steuerbar).
- Secure DNS (verschlüsselte DNS-Abfragen per Toggle).
- „Enhance your security on the web“ (zusätzlicher Sicherheitsmodus).

## Alternativen
- Mozilla Firefox (anderer Engine-Fokus; andere Telemetrie-/Sync-Defaults).
- [Brave](/anbieter/brave/)
- [Safari](/anbieter/safari/)
- Chromium (weniger Microsoft-Dienste; weniger integrierte Schutz-/Sync-Funktionen).

## Nicht gelöst / offene Punkte
- Edge-Consumer: keine dedizierte, öffentlich verlinkte Subprozessoren-Liste in der Edge-Datenschutzdoku gefunden.

## Quellen

- https://www.microsoft.com/de-de/privacy/privacystatement
- [Microsoft Edge (Produktseite)](https://www.microsoft.com/edge)
- [User data and privacy in Microsoft Edge](https://learn.microsoft.com/en-us/legal/microsoft-edge/privacy)
- [Microsoft Edge, browsing data, and privacy](https://support.microsoft.com/en-us/microsoft-edge/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd)
- [Securely browse the web in Microsoft Edge](https://support.microsoft.com/en-us/microsoft-edge/securely-browse-the-web-in-microsoft-edge-c7beb47a-de9e-4aec-839d-28224a13a5d2)
- [How can SmartScreen help protect me in Microsoft Edge?](https://support.microsoft.com/en-us/microsoft-edge/how-can-smartscreen-help-protect-me-in-microsoft-edge-1c9a874a-6826-be5e-45b1-67fa445a74c8)
- [Browse more safely with Microsoft Edge (Enhanced Security Mode)](https://learn.microsoft.com/en-us/deployedge/microsoft-edge-security-browse-safer)
- [Microsoft Edge Bounty Program (MSRC)](https://www.microsoft.com/en-us/msrc/bounty-new-edge)
- [Microsoft Privacy Statement](https://www.microsoft.com/de-de/privacy/privacystatement)
- [Microsoft Services Agreement](https://www.microsoft.com/de-de/servicesagreement)
- [Microsoft Transparency Reports](https://www.microsoft.com/de-de/digitalsafety/transparency-reports)
