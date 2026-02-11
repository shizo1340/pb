---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Apple Maps"
url: "/anbieter/apple-maps/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-05"
robots: "index,follow"
description: "Kurzprofil von Apple Maps (Kategorie: Karten & Navigation)."
provider: ""
name: "Apple Maps"
category: "Karten & Navigation"
website: "https://www.apple.com/maps/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://www.apple.com/legal/privacy/data/en/apple-maps/"
terms: "https://www.apple.com/legal/internet-services/maps/terms-en.html"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "no"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA (Apple Inc.)"
region: "us"
logs: "unknown"
retention: "unknown"
data_notes: "Apple beschreibt Maps als so gestaltet, dass keine personenbezogenen Daten mit der Nutzung verknüpft werden; Features wie Sync/Sign-In können Apple-ID-Bezug herstellen."
features: ""
alternatives: ""
payment_processors: "Nicht zutreffend (kostenlos)"
sources: ""
---
## Kurzprofil

Apple Maps ist ein Anbieter aus der Kategorie **Karten & Navigation**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du eine Karten-/Navigation-App ohne Pflicht-Account nutzen willst und du iOS/macOS-Settings gezielt zur Datensparsamkeit einstellen möchtest.
- **Weniger geeignet wenn:** du eine Kartenlösung willst, die *ohne* Serveranfragen an den Anbieter auskommt (z.B. strikt offline) oder wenn du vollständige Transparenz zu Subprozessoren/Service-Providern brauchst.
- **Wichtigster Abwägung:** Komfortfunktionen (z.B. präzise Navigation, Traffic, AR-Features, Sync) vs. mehr Datenübermittlung/Metadaten an Apple bzw. Partner (teils aggregiert).

## Sofortmaßnahmen
- **Präzise Ortung nur bei Bedarf:** `Einstellungen > Apps > Karten > Standort` → **Präzise Ortung aus**, wenn du keine exakte Navigation brauchst (Abwägung: schlechtere Genauigkeit).
- **Routing/Traffic-Beiträge deaktivieren:** `Einstellungen > Datenschutz & Sicherheit > Ortungsdienste > Systemdienste` → **Routing & Traffic aus** (Abwägung: weniger Beiträge zur Verbesserung).
- **AR-Verbesserungen abschalten:** `Einstellungen > Datenschutz & Sicherheit > Analyse & Verbesserungen` → **Improve AR Location Accuracy aus** (Abwägung: AR-Walking/Refine Location ggf. ungenauer).

## Entscheidungshilfe
- Wenn du **Maps ohne Account-Bindung** nutzen willst, dann verwende Apple Maps **ohne Apple-Account-Sign-in** (Abwägung: weniger Sync/Personalisierung über Geräte hinweg).
- Wenn du **Navigation mit maximaler Präzision** brauchst, dann lasse **Präzise Ortung** an (Abwägung: mehr Standortgenauigkeit wird verarbeitet/übertragen).
- Wenn du **weniger Standort-Metadaten** möchtest, dann schalte **Routing & Traffic** in den Systemdiensten aus (Abwägung: weniger „Live“-Optimierung/Qualitätssignale).
- Wenn du **Spuren auf dem Gerät** reduzieren willst, dann lösche **zuletzt genutzte Routen/Verlauf** in Maps regelmäßig (Abwägung: weniger Komfort durch fehlende Recents).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Apple Maps |
| Kategorie | Karten & Navigation |
| Website | https://www.apple.com/maps/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | free |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend (kostenlos) |
| Jurisdiktion | USA (Apple Inc.) |
| Logs | unknown |
| Retention | Unklar |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.apple.com/legal/privacy/data/en/apple-maps/
- AGB/Terms: https://www.apple.com/legal/internet-services/maps/terms-en.html
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Apple beschreibt Maps als so gestaltet, dass **keine personenbezogenen Daten mit der Nutzung verknüpft** werden; Features wie Sync/Sign-In können Apple-ID-Bezug herstellen.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Apple nennt in „Apple Maps & Privacy“ u.a. **Zeitpunkt der Anfrage**, **Gerätemodell/OS-Version**, **Eingabesprache**, **Gerätestandort (wenn erlaubt)**, **sichtbarer Kartenausschnitt**, sowie **Interaktionen** (z.B. Suchbegriffe, genutzte Features, angesehene Orte, Benachrichtigungs-Interaktionen).
- **Wofür:** Bereitstellung und **Verbesserung** von Maps und standortbasierten Diensten (inkl. Routing/Traffic-Funktionen).
- **Weitergabe/Subprozessoren:** Apple beschreibt Weitergabe/Verarbeitung durch **trusted service providers** sowie Fälle, in denen Daten an **Partner** oder **Dritte** weitergegeben werden können (z.B. Fehlerreports „Report an Issue“, CarPlay Route Sharing).
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend (kostenlos).
- **Kontakt/DSAR/DPA:** Nicht angegeben (Maps-spezifisch). Allgemeine Privacy-Kontaktwege stehen in Apples Privacy Policy.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Apple beschreibt Nutzungs- und Diagnosedaten im Kontext von Maps-Funktionen; Details hängen von Feature/Plattform ab.
- **Abschaltbar?** Teilweise: einzelne Verbesserungsprogramme/Features lassen sich in iOS-Settings deaktivieren.
- **Wo (Menüpfad):**
  - `Einstellungen > Datenschutz & Sicherheit > Ortungsdienste > Systemdienste` → **Routing & Traffic**
  - `Einstellungen > Datenschutz & Sicherheit > Analyse & Verbesserungen` → **Improve AR Location Accuracy**
  - `Einstellungen > Apps > Karten > Standort` → **Präzise Ortung** (je nach iOS-Version)

**Logs & Retention:**
- **Logging-Level:** unknown
- **Aufbewahrung:** Unklar
- **Lösch-/Opt-out-Optionen:** In Maps/iOS existieren Lösch- und Opt-out-Optionen für einzelne Verlauf-/Feature-Daten (je nach Version).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben (Maps-spezifisch).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben (Maps-spezifisch).
- **Recovery/Account-Wiederherstellung:** Nicht angegeben.
- **Vuln-Handling / Security-Kontakt:** Apple nennt einen offiziellen Weg, um Security- oder Privacy-Schwachstellen zu melden (Apple Support).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (2FA/MFA), falls angeboten.  
   **Prüfen:** Einstellung zeigt „aktiv“ + verwendete Methode.
2) **Auto-Lock/Timeout** sinnvoll setzen.  
   **Prüfen:** Timeout-Wert sichtbar, greift im Test.
3) **Analytics/Telemetry deaktivieren**, falls Schalter existiert.  
   **Prüfen:** Schalter „aus“ + dokumentiert.

**Stolpersteine:**
- Recovery-Optionen können Identitätsdaten erhöhen (Abwägung: Support/Recovery vs. Metadaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- Reduziere Identitätsbindung (z.B. keine Telefonnummer, falls optional).
- Minimierte Integrationen/Sync-Optionen (nur wenn dokumentiert).
- Backup/Export-Strategie: Nicht angegeben.  
**Abwägung:** mehr Eigenverantwortung bei Recovery/Support.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Getrennte Profile/Browser/VM (nur wenn relevant fürs Produkt).
- Strengste Sicherheitsparameter, **falls** Anbieter konfigurierbar dokumentiert.
- Optional Netzwerk-Blocking nur mit dokumentierten Endpunkten.  
**Abwägung:** deutlicher Komfortverlust, höhere Komplexität.

</details>

## Features
- Navigation & Routen
- Suche nach Orten
- (Optional) Sync/Personalisierung über Apple-ID

## Alternativen
- [Organic Maps](/anbieter/organic-maps/) – ähnliche Kategorie (Abwägung: Offline-Fokus möglich, Live-Daten/Komfort je nach Region).
- [Google Maps](/anbieter/google-maps/) – ähnliche Kategorie (Abwägung: stärkere Konto-/Cloud-Integration je nach Nutzung).
- [HERE WeGo](/anbieter/here-wego/) – ähnliche Kategorie (Abwägung: Datenschutz-/Kontomodell und Offline-Optionen separat prüfen).

## Nicht gelöst / offene Punkte
- Öffentliche, konkrete Liste von „trusted service providers“/Subprozessoren speziell für Apple Maps ist in den genutzten Primärquellen nicht eindeutig ausgewiesen.

## Quellen

- title: "Report a security or privacy vulnerability (Apple Support)
- [Apple Maps & Privacy (Legal)](https://www.apple.com/legal/privacy/data/en/apple-maps/)
- [Apple Maps Terms of Use (Legal)](https://www.apple.com/legal/internet-services/maps/terms-en.html)
- [Apple Privacy Policy (Legal)](https://www.apple.com/legal/privacy/en-ww/)
- [Set your location and map view in Maps on iPhone (Apple Support)](https://support.apple.com/guide/iphone/set-your-location-and-map-view-iph10d7bdf26/ios)
- [Report a security or privacy vulnerability (Apple Support)](https://support.apple.com/en-us/102549)

