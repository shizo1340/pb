---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / OsmAnd"
url: "/anbieter/osmand/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-19"
robots: "index,follow"
description: "Kurzprofil von OsmAnd (Kategorie: Karten & Navigation)."
provider: ""
name: "OsmAnd"
category: "Karten & Navigation"
website: "https://osmand.net/"
repo: "https://github.com/osmandapp/OsmAnd"
license: "GPL-3.0-only (Code); CC-BY-NC-ND (Artwork)"
policies: ""
privacy: "https://osmand.net/help-online/privacy-policy/"
terms: "https://osmand.net/help-online/terms-of-use/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "yes"
self_host_possible: "no"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Niederlande (OsmAnd B.V.)"
region: "eu"
logs: "configurable"
retention: "short"
retention_notes: "Teilweise angegeben (Tracker: bis 48h; Cloud-Löschung: ≤ 7 Tage nach „Delete your data“)"
retention_max_days: "7"
data_notes: "Beim Karten-Download über OsmAnd-Server fallen UUID+IP+Zeitpunkt+Regionenliste an; optional (default aus) können „Visited Screens“ geteilt werden. OsmAnd Cloud nutzt E-Mail zur Konto-Identifikation und speichert Sync-Daten auf Scaleway/Amazon; Website-Käufe laufen über FastSpring."
features: ""
alternatives: ""
payment_processors: "FastSpring (Web); App Stores (Google Play / Apple App Store) für In-App-Käufe"
sources: ""
---
## Kurzprofil

OsmAnd ist ein Anbieter aus der Kategorie **Karten & Navigation**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Navigation/Karten möglichst **offline** nutzen willst und dafür **kein dauerhaftes Konto** brauchst (Cloud ist optional).
- **Weniger geeignet wenn:** du bei Karten-Downloads **gar keine serverseitigen Metadaten** (z.B. IP/UUID/Download-Historie) riskieren willst oder **Cloud-Sync ohne E-Mail** brauchst.
- **Wichtigster Abwägung:** Offline-first & lokale Kontrolle vs. **Metadaten bei Downloads/Optional-Cloud** (Komfort/Synchronisation ↔ zusätzliche Datenflüsse).

## Sofortmaßnahmen
- **Analytics/„Send anonymous data“ auslassen**: reduziert übermittelte Nutzungsmetadaten (z.B. Karten-Downloads/Visited Screens).
- **Android: „Identifiers“/Datenerhebung deaktivieren**: verhindert, dass die UUID bei Karten-Downloads mitgesendet wird.
- **Speicherort auf „Internal app memory“ setzen**: erschwert anderen Apps den Zugriff auf lokale OsmAnd-Daten.

## Entscheidungshilfe
- Wenn du OsmAnd **nur offline** nutzt, dann vermeide Online-Kartenquellen und nutze lokale Karten/POIs (Abwägung: weniger Live-Daten, mehr Speicherbedarf).
- Wenn du Karten über OsmAnd-Server **downloadest**, dann rechne mit **UUID/IP/Downloadzeit + Regionenliste** als Metadaten (Abwägung: einfache Updates vs. Download-Metadaten).
- Wenn du die **Metadaten-Übertragung minimieren** willst, dann lasse „Visited Screens“ deaktiviert und nutze (Android) den Schalter zum Deaktivieren der Datenerhebung/UUID (Abwägung: weniger Diagnosedaten).
- Wenn du **Sync/Backup** zwischen Geräten willst, dann ist **OsmAnd Cloud** relevant (Abwägung: E-Mail-Konto + Cloud-Speicherung vs. Komfort).
- Wenn du Netzwerk-Requests **abschirmen** willst, dann nutze unter Android die Proxy-Option für OsmAnd (Abwägung: Einrichtung/Fehleranfälligkeit).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | OsmAnd |
| Kategorie | Karten & Navigation |
| Website | https://osmand.net/ |
| Quellcode | https://github.com/osmandapp/OsmAnd |
| Lizenz | GPL-3.0-only (Code); CC-BY-NC-ND (Artwork) |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no *(für OsmAnd Cloud: ja, E-Mail)* |
| Telefon erforderlich | no *(Tracker-Plugin kann Telefonnummer nutzen)* |
| KYC erforderlich | no |
| Zahlungsabwicklung | FastSpring (Web); App Stores (Google Play / Apple App Store) für In-App-Käufe |
| Jurisdiktion | Niederlande (OsmAnd B.V.) |
| Logs | configurable |
| Retention | Teilweise angegeben (Tracker: bis 48h; Cloud-Löschung: ≤ 7 Tage nach „Delete your data“) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://osmand.net/help-online/privacy-policy/
- AGB/Terms: https://osmand.net/help-online/terms-of-use/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Beim Karten-Download über OsmAnd-Server fallen UUID+IP+Zeitpunkt+Regionenliste an; optional (default aus) können „Visited Screens“ geteilt werden. OsmAnd Cloud nutzt E-Mail zur Konto-Identifikation und speichert Sync-Daten auf Scaleway/Amazon; Website-Käufe laufen über FastSpring.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Aggregierte Nutzungsdaten wie App-Installationen/Starts, Gerätemodell, Softwareversion, Land, Sprache, Download-Infos; beim Karten-Download über OsmAnd-Server: **UUID + IP-Adresse + Datum/Uhrzeit + Liste heruntergeladener Regionen**.
- **Wofür:** Statistik/Reports, Ressourcenplanung (Downloads), optional auch Discount/Pop-ups; „Visited Screens“ dient laut Anbieter der Funktionsverbesserung.
- **Weitergabe/Subprozessoren:** Für Web-Käufe: **FastSpring** als Reseller/Controller für Checkout-Daten; für **OsmAnd Cloud**: Speicherung auf OsmAnd-Servern sowie bei **Scaleway** und **Amazon**; Tracker-Plugin: Übergabe der Telefonnummer an **Telegram** (laut Privacy Policy).
- **Drittlandtransfer:** Für Web-Käufe nennt OsmAnd mögliche Transfers durch FastSpring (z.B. USA) mit Schutzmaßnahmen (SCCs).
- **Zahlungsabwicklung/Payment Processor:** Web: FastSpring; In-App typischerweise über App Stores (Android/iOS) laut Kauf-Doku.
- **Kontakt/DSAR/DPA:** Kontaktadresse für Privacy-Anfragen: **contactus@osmand.net**; Antwortziel innerhalb von 30 Tagen (laut Privacy Policy).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Teilweise: Karten-Download-Metadaten (UUID) sind vorgesehen; „Visited Screens“ ist laut Privacy Policy **standardmäßig deaktiviert**.
- **Abschaltbar?** Ja: In den Einstellungen gibt es Schalter für Analytics/„Send anonymous data“ und (Android) für „Identifiers“/Datenerhebung; dann wird die UUID nicht mit Download-Requests gesendet.
- **Wo (Menüpfad):**
  - Android: **Menu → Settings → OsmAnd settings → Analytics**
  - iOS: **Menu → Settings → OsmAnd settings → Send anonymous data**
  - Android UUID/Datenerhebung: **Menu → Settings → OsmAnd settings → Privacy and security → Identifiers**

**Logs & Retention:**
- **Logging-Level:** configurable
- **Aufbewahrung:** Teilweise angegeben (Tracker: bis 48h; Cloud-Löschung: ≤ 7 Tage nach „Delete your data“)
- **Lösch-/Opt-out-Optionen:** History ist in Kategorien steuerbar (Enable/Disable) und kann exportiert/gelöscht werden; Cloud-Account kann per Link gelöscht werden.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben (für Offline-Nutzung i.d.R. kein Konto; für Cloud-Konto wird E-Mail genannt, aber keine 2FA-Option dokumentiert).
- **Recovery/Account-Wiederherstellung:** Für OsmAnd Cloud wird ein Account-Delete-Link genannt; Details zur Wiederherstellung sind in den hier genutzten Quellen nicht beschrieben.
- **Vuln-Handling / Security-Kontakt:** Im GitHub-Quellcode ist **keine SECURITY.md/Security Policy** hinterlegt (Stand laut GitHub Security-Übersicht).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Analytics/„Send anonymous data“ deaktiviert lassen**.  
   **Prüfen:** Menüpfad *Settings → OsmAnd settings → Analytics* (Android) bzw. *Send anonymous data* (iOS) steht auf „aus“.
2) **Android: „Identifiers“/Datenerhebung deaktivieren**, wenn du Karten über OsmAnd-Server downloadest.  
   **Prüfen:** *Settings → OsmAnd settings → Privacy and security → Identifiers* ist deaktiviert; Hinweis: UUID wird nicht mit Download-Requests gesendet.
3) **History reduzieren (lokal)**, wenn du Such-/Navigationsverläufe nicht dauerhaft behalten willst.  
   **Prüfen:** *Settings → OsmAnd settings → History* → Kategorien (Search/Navigation/Map markers) gezielt deaktivieren + „Clear/Delete all history“ testen.

**Stolpersteine:**
- **OsmAnd Cloud** erhöht Datenflüsse (E-Mail + Sync-Daten auf Cloud-Servern); Abwägung: Komfort/Synchronisation vs. zusätzliche Metadaten.
- **Tracker-Plugin** ist ein separater Datenfluss (Telegram + 48h Location-Buffer laut Privacy Policy) und passt nicht zu einem „offline-only“-Einrichtung.

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze OsmAnd ohne Cloud-Konto (keine E-Mail-Bindung) und sichere lokal per Export/Dateibackup.
- Halte „Visited Screens“ deaktiviert und deaktiviere (Android) „Identifiers“, wenn möglich.
- Nutze (Android) **Proxy** für alle Netzwerk-Requests, wenn du IP-Metadaten gegenüber Download-Servern reduzieren willst.  
  **Abwägung:** mehr Einrichtung-Aufwand; Fehlerdiagnose schwieriger.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne Identitäten: eigenes Geräteprofil/Arbeitsprofil nur für Navigation, keine Cloud-Sync-Funktionen.
- Vermeide Online-Kartenquellen (Raster/Tile-Webquellen), nutze ausschließlich offline Karten & deaktivierte Analytics.
- Optional Netzwerk-Restriktion (Firewall/VPN), um unbeabsichtigte Requests zu vermeiden.  
  **Abwägung:** weniger Komfort (z.B. kein dynamisches Nachladen), höhere Komplexität.

</details>

## Features
- Offline-Karten & Offline-Navigation (OSM-basiert)
- Optionale Telemetrie-Schalter (Analytics/Identifiers) in den App-Einstellungen
- OsmAnd Cloud (Backup/Sync) für Pro-Abos
- Proxy-Unterstützung für Netzwerk-Requests (Android)

## Alternativen
- Organic Maps (Offline-OSM-App; Abwägung: Funktionsumfang/Ökosystem kann abweichen)
- Magic Earth (Navigation; Abwägung: andere Daten-/Online-Schwerpunkte möglich)
- HERE WeGo (Navigation; Abwägung: stärkerer Online-/Account-Fokus möglich)

## Nicht gelöst / offene Punkte
- Keine klare Angabe gefunden, wie lange serverseitige Download-Metadaten (UUID/IP/Regionenliste) gespeichert werden.
- Keine dedizierte Security-Policy/Disclosure-Anleitung im offiziellen GitHub-„Security“-Bereich erkennbar (Stand: 2026-01-19).

## Quellen

- Organic Maps (Offline-OSM-App; Trade-off: "Funktionsumfang/Ökosystem kann abweichen)
- Magic Earth (Navigation; Trade-off: "andere Daten-/Online-Schwerpunkte möglich)
- HERE WeGo (Navigation; Trade-off: "stärkerer Online-/Account-Fokus möglich)
- https://osmand.net/pricing
- [Privacy Policy (OsmAnd)](https://osmand.net/help-online/privacy-policy/)
- [Terms of Use (OsmAnd)](https://osmand.net/help-online/terms-of-use/)
- [Global Settings / Privacy & Security (OsmAnd Docs)](https://osmand.net/docs/user/personal/global-settings/)
- [Purchases (OsmAnd Docs)](https://osmand.net/docs/user/purchases/)
- [License (OsmAnd)](https://osmand.net/help-online/license/)
- [Pricing (OsmAnd)](https://osmand.net/pricing)
