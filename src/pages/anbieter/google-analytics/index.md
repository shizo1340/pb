---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Google Analytics"
url: "/anbieter/google-analytics/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-14"
robots: "index,follow"
description: "Kurzprofil von Google Analytics (Kategorie: Analytics)."
provider: ""
name: "Google Analytics"
category: "Analytics"
website: "https://analytics.google.com/"
repo: "Nicht angegeben"
license: "Proprietär"
policies: ""
privacy: "https://policies.google.com/privacy?hl=de"
terms: "https://www.google.com/analytics/terms/default.html"
transparency: "https://transparencyreport.google.com/"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "no"
self_host_possible: "no"
account_required: "yes"
phone_required: "unknown"
kyc_required: "no"
jurisdiction: "USA (Anwendbares Recht laut Terms: Kalifornien)"
region: "us"
logs: "configurable"
retention: "verylong"
retention_notes: "2 Monate oder 14 Monate (User-/Event-Daten); zusätzliche Retention-Stufen für 360 (Event-Daten)"
retention_max_days: "420"
data_notes: "Google Analytics verarbeitet Messdaten, die über Tracking-Code/SDK/Measurement Protocol erhoben werden. Es gibt Schalter für Data Sharing, Google Signals/Ads-Personalisierung sowie Retention-Controls (automatische Löschung nach definierter Zeit)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Google Analytics ist ein Anbieter aus der Kategorie **Analytics**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit ohne Ranking
- **Geeignet wenn:** du Web-/App-Messdaten zentral bei Google auswerten willst und die Integration in Google-Produkte (z.B. Verknüpfungen/Ads-Use-Cases) Teil deines Einrichtungen ist.
- **Weniger geeignet wenn:** du Messdaten ohne Drittanbieter-Verarbeitung (z.B. vollständig selbst betrieben) umsetzen musst oder möglichst wenig identifiers-/profilbasierte Auswertung willst.
- **Wichtigster Abwägung:** Analyse- & Integrationskomfort vs. Drittanbieter-Datenverarbeitung und zusätzliche Metadaten durch optionale Sharing-/Ads-Features.

## Sofortmaßnahmen
- **Data retention auf 2 Monate setzen** → reduziert, wie lange nutzer-/eventnahe Daten automatisch auf Analytics-Servern gehalten werden.
- **Google Signals & Ads-Personalisierung deaktivieren (oder regional einschränken)** → weniger Cross-Device-/Ads-Bezug, weniger Identifikatoren.
- **Data Sharing restriktiv konfigurieren** (z.B. „Google products & services“ aus) → weniger Nutzung deiner Messdaten für andere Google-Produkte.

## Entscheidungshilfe
- Wenn du **nur Basis-Metriken** brauchst, dann deaktiviere **Google Signals/Ads-Funktionen** (Abwägung: weniger Remarketing/Ads-Reporting).
- Wenn du **minimale Aufbewahrung** willst, dann setze **Data retention auf 2 Monate** (Abwägung: weniger historische Detailanalysen in Explorations).
- Wenn du **Supportfälle** erwartest, dann prüfe, ob **„Technical support“** in den Data-Sharing-Settings nötig ist (Abwägung: potenziell mehr Zugriffsmöglichkeiten für Support).
- Wenn du **keine zusätzliche Nutzung deiner Messdaten** zur Produktverbesserung willst, dann schalte **„Google products & services“** aus (Abwägung: weniger Datennutzung außerhalb der reinen Service-Erbringung).
- Wenn du **regionale Einschränkungen** brauchst, dann nutze die **per-Region-Schalter** für granularen Standort-/Geräte-Fingerprint und Google Signals (Abwägung: weniger Modellierung/Downstream-Effekte in verknüpften Ads-Einrichtungen).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Google Analytics |
| Kategorie | Analytics |
| Website | https://analytics.google.com/ |
| Quellcode | Nicht angegeben |
| Lizenz | Proprietär |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | USA (Anwendbares Recht laut Terms: Kalifornien) |
| Logs | configurable |
| Retention | 2 Monate oder 14 Monate (User-/Event-Daten); zusätzliche Retention-Stufen für 360 (Event-Daten) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://policies.google.com/privacy?hl=de
- AGB/Terms: https://www.google.com/analytics/terms/default.html
- Transparency Report: https://transparencyreport.google.com/
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Google Analytics verarbeitet Messdaten, die über Tracking-Code/SDK/Measurement Protocol erhoben werden. Es gibt Schalter für Data Sharing, Google Signals/Ads-Personalisierung sowie Retention-Controls (automatische Löschung nach definierter Zeit).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Messdaten („Customer Data“) über Besucheraktivitäten, die über Tracking-Code/SDK/Protokolle an Google-Server übertragen und dort verarbeitet werden; Retention bezieht sich u.a. auf Daten, die mit Cookies, User-IDs und Advertising-IDs verknüpft sind.  
- **Wofür:** Analyse/Reports innerhalb des Analytics-Dienstes; je nach Data-Sharing-Settings zusätzlich Nutzung zur Verbesserung von Google-Produkten oder für Support/Empfehlungen.  
- **Weitergabe/Subprozessoren:** In den Terms wird die Nutzung von Drittparteien „zur Ausführung von Aufgaben im Auftrag von Google“ (z.B. Billing/Storage) beschrieben, Details/Listen sind nicht zentral in den hier genutzten Primärquellen zusammengeführt.  
- **Drittlandtransfer:** Nicht angegeben (produktübergreifende Google-Hinweise stehen in separaten Rechts-/Transferdokumenten).  
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben.  
- **Kontakt/DSAR/DPA:** Data Processing Terms sind im Admin-Bereich akzeptierbar; dafür werden u.a. Kontaktangaben (Primary Contact, ggf. DPO/EEA Representative) verlangt.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Ja (Analytics ist selbst Datenerhebung); zusätzlich gibt es optionale **Data Sharing Settings** für weitergehende Nutzung/Zugriffe.
- **Abschaltbar?** Teilweise: Datenerhebung kann programmatisch deaktiviert werden; Data Sharing/Ads-Features sind per Schalter reduzierbar.
- **Wo (Menüpfad):**
  - Admin → **Account details** → **Data sharing settings**
  - Admin → **Data settings** → **Data retention**
  - Admin → **Data collection** (z.B. Google Signals / regionbasierte Controls, je nach Property-Einrichtung)

**Logs & Retention:**
- **Logging-Level:** configurable
- **Aufbewahrung:** 2 Monate oder 14 Monate (User-/Event-Daten); zusätzliche Retention-Stufen für 360 (Event-Daten)
- **Lösch-/Opt-out-Optionen:** Daten können über Retention automatisch gelöscht werden; außerdem existieren Löschfunktionen/Workflows (z.B. User Deletion).

**Abwägung am Punkt:** Weniger Sharing/Retention reduziert Metadaten, kann aber Analysekomfort (historische Detailauswertungen) und Support/Ads-Verknüpfungen einschränken.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Zugriff durch Google-Repräsentanten erfolgt laut Anbieter „über SSL“; E2E/Client-side-Verschlüsselung ist für Analytics nicht als Feature beschrieben.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben (Zugang erfolgt über Google-Konto; Kontoschutz hängt an den Google-Account-Einstellungen).
- **Recovery/Account-Wiederherstellung:** Nicht angegeben.
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (Google-Konto absichern), da Analytics an ein Google-Konto gebunden ist.  
   **Prüfen:** Zugriff nur mit erwarteten Konten/Rollen; unnötige Nutzer entfernen (Admin → Access Management).
2) **Data retention** passend reduzieren (z.B. 2 Monate).  
   **Prüfen:** Admin → Data settings → Data retention zeigt den Zielwert.
3) **Data Sharing + Ads-Features** restriktiv setzen.  
   **Prüfen:** Admin → Account details → Data sharing settings (Schalter aus) + Google Signals/Ads-Personalisierung deaktiviert, wenn nicht nötig.

**Stolpersteine:**
- Aktivierte Ads-/Signals-Funktionen erhöhen die Verknüpfbarkeit (Abwägung: Remarketing/Ads-Reporting vs. mehr Identifikatoren/Metadaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- Deaktiviere granularen Standort-/Geräte-Datenerhebungsumfang pro Region (falls dein Einrichtung das nutzt) und schalte Google Signals aus.
- Halte Data Sharing Settings strikt aus, außer du brauchst Supportzugriff.
- Retention minimal halten und regelmäßige Export-/Löschprozesse festlegen.
**Abwägung:** weniger Komfort bei tiefer Analyse, geringere Ads-/Modeling-Effekte.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne Admin-Zugänge strikt (dedizierte Google-Konten, minimale Rollen, keine gemeinsamen Accounts).
- Vermeide alle Ads-/Signals-/Sharing-Funktionen und nutze nur notwendige Datenerhebung.
- Prüfe ob du Analytics vollständig brauchst oder ob eine alternative, isolierbare Messstrategie nötig ist.
**Abwägung:** deutlicher Funktionsverlust und höherer Umstellungsaufwand.

</details>

## Features
- Data Sharing Settings (z.B. „Google products & services“, „Technical support“, „Recommendations“)
- Data retention Controls (2/14 Monate für User-/Event-Daten; weitere Stufen für 360 für Event-Daten)
- Regionale Steuerung: Granulare Standort-/Geräte-Daten und Google Signals pro Region aktivier-/deaktivierbar
- Ads-Features & Ads-Personalisierung (abschaltbar; Auswirkungen auf Remarketing/Ads-Reporting möglich)
- IP Masking in GA4 nicht nötig laut Anbieter (IP-Adressen werden nicht protokolliert/gespeichert)
- Löschfunktionen: Nutzer-/Gerätebezogene Löschung über Analytics-Funktionen/APIs (User Deletion)

## Alternativen
- Matomo (Abwägung: Self-Hosting möglich vs. mehr Betriebsaufwand)
- Plausible (Abwägung: weniger Identifikatoren vs. geringere Integrations-/Werbe-Features)
- Fathom (Abwägung: datensparsamere Metriken vs. weniger Granularität)

## Nicht gelöst / offene Punkte
- Subprozessoren-/Weitergabe-Details sind nicht als kompakte, produkt-spezifische Liste zusammengeführt.

## Quellen

- Regionale Steuerung: "Granulare Standort-/Geräte-Daten und Google Signals pro Region aktivier-/deaktivierbar
- Löschfunktionen: "Nutzer-/Gerätebezogene Löschung über Analytics-Funktionen/APIs (User Deletion)
- Matomo (Trade-off: "Self-Hosting möglich vs. mehr Betriebsaufwand)
- Plausible (Trade-off: "weniger Identifikatoren vs. geringere Integrations-/Werbe-Features)
- Fathom (Trade-off: "datensparsamere Metriken vs. weniger Granularität)
- [Google-Datenschutzerklärung](https://policies.google.com/privacy?hl=de)
- [Google Analytics Terms of Service](https://www.google.com/analytics/terms/default.html)
- [Safeguarding your data (Analytics Help)](https://support.google.com/analytics/answer/6004245?hl=en)
- [Privacy controls in Google Analytics (Analytics Help)](https://support.google.com/analytics/answer/9019185?hl=en)
- [Data sharing settings (Analytics Help)](https://support.google.com/analytics/answer/1011397?hl=en)
- [Data retention (Analytics Help)](https://support.google.com/analytics/answer/7667196?hl=en)
- [Data Processing Terms (Analytics Help)](https://support.google.com/analytics/answer/3379636?hl=en)
- [Google Ads Data Processing Terms](https://privacy.google.com/businesses/adsprocessorterms?hl=en)
- [DataRetentionSettings (Google Analytics Admin API)](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1beta/DataRetentionSettings)
- [Google-Datenschutzerklärung](https://policies.google.com/privacy?hl=de)
- [Google Analytics Terms of Service](https://www.google.com/analytics/terms/default.html)
- [Safeguarding your data (Analytics Help)](https://support.google.com/analytics/answer/6004245?hl=en)
- [Privacy controls in Google Analytics (Analytics Help)](https://support.google.com/analytics/answer/9019185?hl=en)
- [Data sharing settings (Analytics Help)](https://support.google.com/analytics/answer/1011397?hl=en)
- [Data retention (Analytics Help)](https://support.google.com/analytics/answer/7667196?hl=en)
- [Data Processing Terms (Analytics Help)](https://support.google.com/analytics/answer/3379636?hl=en)
- [Google Ads Data Processing Terms](https://privacy.google.com/businesses/adsprocessorterms?hl=en)
- [DataRetentionSettings (Google Analytics Admin API)](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1beta/DataRetentionSettings)
