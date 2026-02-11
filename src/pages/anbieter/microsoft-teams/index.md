---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Microsoft Teams"
url: "/anbieter/microsoft-teams/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-19"
robots: "index,follow"
description: "Kurzprofil von Microsoft Teams (Kategorie: Messenger)."
provider: ""
name: "Microsoft Teams"
category: "Messenger"
website: "https://www.microsoft.com/de-de/microsoft-teams/group-chat-software"
repo: "Nicht angegeben"
license: "Nicht angegeben (proprietär)"
policies: ""
privacy: "https://www.microsoft.com/de-de/privacy/privacystatement"
terms: "https://www.microsoft.com/en/servicesagreement"
transparency: "https://www.microsoft.com/de-de/digitalsafety/transparency-reports"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "no"
self_host_possible: "no"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA (Microsoft Corporation)"
region: "us"
logs: "configurable"
retention: "configurable"
retention_notes: "konfigurierbar (Microsoft Purview Retention Policies)"
data_notes: "Teams ist ein Cloud-Dienst im Microsoft-365-Ökosystem. Daten liegen je nach Funktion u.a. im Teams-Chatdienst (Azure), Exchange (Hidden Folder für Chats), SharePoint/OneDrive (Dateien) und werden zusätzlich über Diagnose-/Servicedatenflüsse für Betrieb & Support ergänzt."
features: ""
alternatives: ""
payment_processors: "Nicht angegeben"
sources: ""
---
## Kurzprofil

Microsoft Teams ist ein Anbieter aus der Kategorie **Messenger**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Teams im Microsoft-365-Kontext nutzt (Organisation/Tenant), zentrale Admin-Policies/Compliance brauchst und Meetings/Chat/Dateien in einem System bündeln willst.
- **Weniger geeignet wenn:** du einen Messenger ohne Hersteller-Account/Cloud-Ökosystem oder mit minimalen Betriebs-/Diagnosedatenflüssen suchst.
- **Wichtigster Abwägung:** Produktivität & Admin-/Compliance-Funktionen vs. Cloud-gebundene Metadaten/Diagnosedaten und (in Organisationen) Admin-Zugriffsmöglichkeiten.

## Sofortmaßnahmen
- **Optional connected experiences** in Teams deaktivieren (falls sichtbar) → reduziert zusätzliche Cloud-Funktionen/Verknüpfungen.  
- **E2EE für 1:1-Anrufe** aktivieren (wenn Policy erlaubt) → schützt Call-Inhalte stärker, aber schränkt Features ein.  
- **Retention Policy für Teams-Chats** im Tenant prüfen/setzen → verhindert „ewige“ Aufbewahrung und reduziert Datenaltlast.

## Entscheidungshilfe
- Wenn du **Compliance/eDiscovery** im Unternehmen brauchst, dann prüfe Retention- und Compliance-Policies im Tenant (Abwägung: mehr zentrale Steuerung, potenziell mehr Admin-Zugriff).
- Wenn du **sehr sensible 1:1-Gespräche** führst, dann aktiviere **E2EE für 1:1-Anrufe** (Abwägung: bestimmte Komfort-/Meeting-Funktionen können entfallen).
- Wenn du **Telemetrie minimieren** willst, dann suche in Teams nach **Privacy/Diagnosedaten-Schaltern** (Abwägung: Diagnose/Support kann schwerer werden).
- Wenn du **Datenlebensdauer begrenzen** willst, dann nutze **Microsoft Purview Retention Policies** für Chats/Channel-Nachrichten (Abwägung: Inhalte können nach Frist nicht mehr verfügbar sein).
- Wenn du **Arbeits-/Privat-Kontext trennen** willst, dann nutze getrennte Konten/Umgebungen (Abwägung: Wechsel/Bedienaufwand).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Microsoft Teams |
| Kategorie | Messenger |
| Website | https://www.microsoft.com/de-de/microsoft-teams/group-chat-software |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben (proprietär) |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | USA (Microsoft Corporation) |
| Logs | configurable |
| Retention | konfigurierbar (Microsoft Purview Retention Policies) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.microsoft.com/de-de/privacy/privacystatement
- AGB/Terms: https://www.microsoft.com/en/servicesagreement
- Transparency Report: https://www.microsoft.com/de-de/digitalsafety/transparency-reports
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Teams ist ein Cloud-Dienst im Microsoft-365-Ökosystem. Daten liegen je nach Funktion u.a. im Teams-Chatdienst (Azure), Exchange (Hidden Folder für Chats), SharePoint/OneDrive (Dateien) und werden zusätzlich über Diagnose-/Servicedatenflüsse für Betrieb & Support ergänzt.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Microsoft beschreibt für Teams u.a. „required service data“ und Diagnosedaten; **optionale Diagnosedaten** sind laut Teams-Datensammlung **nur für mobile Apps** vorgesehen (nicht für Desktop/Web).  
- **Wofür:** Betrieb/Sicherheit/Updates sowie „detect, diagnose, and fix problems“ (insb. bei Teams Free).  
- **Weitergabe/Subprozessoren:** In Microsoft-Cloud-Verträgen/DPA werden Subprozessoren i.d.R. über Microsofts DPA-/Trust-Dokumente adressiert; eine Teams-spezifische, frei zugängliche Liste ist nicht in jedem Einstiegspunkt sichtbar.  
- **Drittlandtransfer:** In der Microsoft-Datenschutzbestimmung und vertraglichen Cloud-Dokumenten geregelt (tenant-/vertragsabhängig).  
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (variiert je nach Plan/Vertragsmodell).  
- **Kontakt/DSAR/DPA:** DSAR/Privacy-Kontakt über Microsoft Privacy Statement; Enterprise-Verträge typischerweise über Microsofts DPA/Produktbedingungen.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Ja: „required service data“ und Diagnosedaten sind Teil des Betriebs (umfang/Typ abhängig vom Client und Kontext).  
- **Abschaltbar?** Teilweise: Teams Free beschreibt optionales Diagnosedaten-Senden als umschaltbar; zusätzlich gibt es „optional connected experiences“ (sichtbar, wenn Admin/Policy das zulässt).  
- **Wo (Menüpfad):**
  - **Teams (Client):** *Einstellungen* → *Datenschutz/Privacy* → „Optional connected experiences“ (wenn vorhanden).  
  - **Teams Free:** *Settings* → *Privacy* → Optional diagnostic data **On/Off** (laut Support-Doku).  
  - **Einblick:** *Einstellungen* → *Datenschutz/Privacy* → „Diagnostic Data Viewer“ (wenn verfügbar, via Microsoft-Doku beschrieben).

**Logs & Retention:**
- **Logging-Level:** configurable (Support-/Diagnoselogik + manuelle Logsammlung möglich).  
- **Aufbewahrung:** konfigurierbar über Microsoft-365-Retention (z.B. Retention Policies für Teams).  
- **Lösch-/Opt-out-Optionen:** Für **Teams Free** beschreibt Microsoft Export/Löschung (u.a. Nachrichten/Medien/Diagnose). In Organisationen hängt Löschung/Retention stark von Tenant-Policies ab.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Microsoft beschreibt Teams-Sicherheitsmechanismen inkl. Verschlüsselung „in transit“ und „at rest“ (Teams Security Guide). **E2EE** ist als Option für **1:1-Teams-Anrufe** dokumentiert (Policy + Client-Setting).  
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (aus Nutzersicht nicht konfigurierbar dokumentiert).  
- **MFA/2FA/Passkeys/Hardware-Keys:** Teams hängt an Microsoft-Konto/Entra-ID – MFA ist typischerweise Konto-/Tenant-Feature, nicht Teams-spezifisch in einer einzelnen Einstellung beschrieben.  
- **Recovery/Account-Wiederherstellung:** Über Microsoft-Konto/Organisation (Admin) geregelt (Abwägung: Recovery/Account-Lifecycle vs. zusätzliche Identitätsdaten).  
- **Vuln-Handling / Security-Kontakt:** Vulnerability-Reporting über Microsoft Security Response Center (MSRC).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (MFA/2FA über Microsoft-Konto oder Entra-ID/Organisation), falls angeboten.  
   **Prüfen:** Konto-Sicherheitsseite zeigt MFA aktiv oder Admin fordert MFA/Conditional Access.
2) **Geräte-Sperre/Timeout** sinnvoll setzen (OS/MDM) – Teams schützt keine ungesperrten Geräte.  
   **Prüfen:** Gerät sperrt automatisch, Teams ist danach geschützt.
3) **Privacy-Schalter in Teams prüfen** (z.B. „Optional connected experiences“, Teams-Free: optionale Diagnosedaten).  
   **Prüfen:** Schalter „aus“ bzw. dokumentiert, ggf. durch Org-Policy erzwungen.

**Stolpersteine:**
- In Organisationen können Admins Retention/Compliance-Zugriffe steuern (Abwägung: Unternehmensanforderungen vs. persönliche Kontrolle).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze getrennte Konten/Umgebungen für unterschiedliche Rollen (Arbeit/Privat), statt alles in einem Konto zu bündeln.
- Deaktiviere **optionale** connected experiences/optionale Diagnosedaten (wo möglich) und vermeide unnötige App-Integrationen.
- Prüfe Retention im Tenant: kürzere Aufbewahrung für Chat/Channel-Nachrichten, wenn fachlich möglich.  
**Abwägung:** weniger Komfort/Automatisierung und ggf. weniger Support-Diagnosefähigkeit.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze ein separates Nutzerprofil/Device für Teams (keine Parallel-Nutzung mit privaten Konten/Browserprofilen).
- Aktiviere (wenn verfügbar) **E2EE für 1:1-Anrufe** und vermeide Features, die E2EE ausschließen.  
- Minimiere Datenabfluss über Dateifreigaben: Links/Anhänge sparsam, lieber „Need-to-know“.  
**Abwägung:** deutlich weniger Komfort, mehr Prozessdisziplin, teils eingeschränkte Meeting-Funktionen.

</details>

## Features
- Chat, Kanäle, Meetings/Calls (Cloud)
- Verschlüsselung in Transit/At Rest (Teams Security Guide)
- Optional: End-to-End Encryption (E2EE) für 1:1-Teams-Anrufe (Policy + Client-Setting)
- Privacy-Controls (z.B. „Optional connected experiences“) und Diagnosedaten-Mechanismen
- Aufbewahrung/Löschung über Microsoft-365-Retention & Compliance-Funktionen (tenantabhängig)

## Alternativen
- Signal (Abwägung: Telefonnummer nötig; weniger Admin-/Compliance-Integration)
- Matrix (Protokoll; Abwägung: Föderations-Metadaten & Server-/Client-Auswahl)
- Slack (Abwägung: anderes Ökosystem/Policy-Stack; Cloud-Dienst)
- Mattermost (Abwägung: Self-Hosting möglich, aber eigener Betrieb/Updates)

## Nicht gelöst / offene Punkte
- Teams-spezifische **Subprozessoren-Liste** ist im Alltag nicht als einzelne, leicht auffindbare Teams-Seite dokumentiert (typisch über DPA/Trust-Dokumente gelöst).
- Welche Privacy-/Telemetrie-Schalter genau sichtbar sind, hängt stark von **Client-Version** und **Tenant-Policies** ab.


## Quellen

- Optional: "End-to-End Encryption (E2EE) für 1:1-Teams-Anrufe (Policy + Client-Setting)
- Signal (Trade-off: "Telefonnummer nötig; weniger Admin-/Compliance-Integration)
- Matrix (Protokoll; Trade-off: "Föderations-Metadaten & Server-/Client-Auswahl)
- Slack (Trade-off: "anderes Ökosystem/Policy-Stack; Cloud-Dienst)
- Mattermost (Trade-off: "Self-Hosting möglich, aber eigener Betrieb/Updates)
- https://msrc.microsoft.com/report/
- [Microsoft Teams (Produktseite)](https://www.microsoft.com/de-de/microsoft-teams/group-chat-software)
- [Microsoft-Datenschutzbestimmungen (Privacy Statement)](https://www.microsoft.com/de-de/privacy/privacystatement)
- [Microsoft Services Agreement (Consumer Terms)](https://www.microsoft.com/en/servicesagreement)
- [Microsoft Transparenzberichte (Digital Safety)](https://www.microsoft.com/de-de/digitalsafety/transparency-reports)
- [Data collection summary for Microsoft Teams](https://www.microsoft.com/en-us/privacy/data-collection-teams)
- [Diagnostic data in Microsoft Teams Free](https://support.microsoft.com/en-us/office/diagnostic-data-in-microsoft-teams-free-ed02daf4-cd4c-4c08-9793-1302fda85438)
- [Export or delete your data in Microsoft Teams Free](https://support.microsoft.com/en-us/office/export-or-delete-your-data-in-microsoft-teams-free-1ed6ac68-5fb4-41be-9861-1a4127fecf68)
- [Microsoft Teams security guide](https://learn.microsoft.com/en-us/microsoftteams/teams-security-guide)
- [End-to-end encryption for one-to-one Microsoft Teams calls](https://learn.microsoft.com/en-us/microsoftteams/teams-end-to-end-encryption)
- [Use end-to-end encryption for Microsoft Teams calls (Support)](https://support.microsoft.com/en-us/office/use-end-to-end-encryption-for-microsoft-teams-calls-1274b4d2-b5c5-4b24-a376-606fa6728a90)
- [Optional connected experiences in Microsoft Teams (Overview)](https://learn.microsoft.com/en-us/microsoftteams/privacy/teams-privacy-oce-overview)
- [Data locations for Microsoft Teams](https://learn.microsoft.com/en-us/microsoftteams/data-location)
- [Retention policies for Microsoft Teams](https://learn.microsoft.com/en-us/microsoft-365/compliance/retention-policies-teams)
- [Collect log files for monitoring and troubleshooting in Teams](https://learn.microsoft.com/en-us/microsoftteams/log-files)
- [Microsoft Security Response Center (Report a vulnerability)](https://msrc.microsoft.com/report/)
