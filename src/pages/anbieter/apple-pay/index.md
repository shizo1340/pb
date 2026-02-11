---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Apple Pay"
url: "/anbieter/apple-pay/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-05"
robots: "index,follow"
description: "Kurzprofil von Apple Pay (Kategorie: Zahlungen)."
provider: ""
name: "Apple Pay"
category: "Zahlungen"
website: "https://www.apple.com/apple-pay/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://www.apple.com/legal/privacy/data/en/apple-pay/"
terms: "https://www.apple.com/legal/internet-services/apple-pay-wallet/us/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "no"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "unknown"
kyc_required: "yes"
jurisdiction: "USA (Apple Inc.)"
region: "us"
logs: "unknown"
retention: "unknown"
data_notes: "Apple Pay nutzt Tokenisierung; laut Apple sieht Apple nicht deine vollständigen Kartennummern und speichert Transaktionsinfos nicht in einer Form, die mit dir verknüpft ist (Details siehe Apple Pay & Privacy)."
features: ""
alternatives: ""
payment_processors: "Über Bank/Issuer & Händler/Payment Network (Apple verarbeitet keine Zahlungen laut Terms)"
sources: ""
---
## Kurzprofil

Apple Pay ist ein Anbieter aus der Kategorie **Zahlungen**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du kontaktlos sowie in Apps/auf Websites bezahlen willst und dabei Wert auf Tokenisierung + Gerätefreigabe (Passcode/Face ID/Touch ID) legst.
- **Weniger geeignet wenn:** du Zahlungen ohne Apple-Ökosystem/Apple-Account nutzen willst oder wenn du Zahlungsdaten grundsätzlich nicht mit einem Geräte-/Account-Kontext kombinieren möchtest.
- **Wichtigster Abwägung:** Komfort (Wallet-Sync, Express Mode, Web-/In-App-Payments) vs. zusätzlicher Geräte-/Account-Kontext und Metadatenflüsse (z.B. Eligibility/Fraud-Checks, anonyme Transaktionsmetrik).

## Sofortmaßnahmen
- **Express Mode nur wenn nötig:** Deaktiviere Express Mode für Karten, die nicht „ohne Entsperren“ funktionieren sollen (Wirkung: reduziert Missbrauchsrisiko bei Verlust/Diebstahl).
- **Apple Pay Merchant Identification aus:** `Einstellungen > Datenschutz & Sicherheit > Ortungsdienste > Systemdienste` → **Apple Pay Merchant Identification aus** (Wirkung: weniger standortbasierte Zuordnung von Händlernamen in Wallet).
- **Wallet-Sync prüfen:** `Einstellungen > [Dein Name] > iCloud > In iCloud gespeichert > Alle anzeigen > Wallet` → **aus**, wenn du keine Wallet-Synchronisierung brauchst (Wirkung: weniger Wallet-Daten in iCloud).

## Entscheidungshilfe
- Wenn du Apple Pay **nur kontaktlos im Laden** nutzt, dann deaktiviere **Apple Pay im Web** in Safari (Abwägung: weniger Komfort bei Online-Checkout).
- Wenn du **minimale Standortbezüge** willst, dann schalte **Apple Pay Merchant Identification** in Systemdiensten aus (Abwägung: Händlernamen/Transaktionshistorie in Wallet ggf. weniger „sauber“ zugeordnet).
- Wenn du **Wallet auf mehreren Geräten** nutzt, dann lasse Wallet-iCloud aktiv und setze auf **starken Geräteschutz** (Abwägung: mehr Sync-Komfort vs. mehr Cloud-Kontext).
- Wenn du **risikosensitiv** bist (z.B. viel ÖPNV/Express Transit), dann vermeide **Express Mode**, wo es nicht zwingend nötig ist (Abwägung: langsameres Bezahlen/Check-in).
- Wenn du **Recurring/Merchant-Initiated Charges** kontrollieren willst, dann prüfe in Wallet die **merchant-spezifischen Account Numbers** (Abwägung: etwas mehr Verwaltungsaufwand).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Apple Pay |
| Kategorie | Zahlungen |
| Website | https://www.apple.com/apple-pay/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | free |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | yes |
| Zahlungsabwicklung | Über Bank/Issuer & Händler/Payment Network (Apple verarbeitet keine Zahlungen laut Terms) |
| Jurisdiktion | USA (Apple Inc.) |
| Logs | unknown |
| Retention | Unklar |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.apple.com/legal/privacy/data/en/apple-pay/
- AGB/Terms: https://www.apple.com/legal/internet-services/apple-pay-wallet/us/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Apple Pay nutzt Tokenisierung; laut Apple sieht Apple nicht deine vollständigen Kartennummern und speichert Transaktionsinfos nicht in einer Form, die mit dir verknüpft ist (Details siehe Apple Pay & Privacy).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Apple können beim **Hinzufügen einer Karte** u.a. Karteninformationen, Standort (wenn aktiv), Geräte-/Setting-Infos und Geräte-Nutzungsmuster (z.B. „in motion“, ungefähre Anrufanzahl pro Woche) ausgewertet werden. Zusätzlich können u.a. Apple-Account-Daten (Name/Adresse), Geräteinfos inkl. Identifier sowie ggf. Telefonnummer/Modell von iPhone/Watch relevant sein (für Eligibility und Fraud-Prevention).
- **Wofür:** Eligibility/Provisioning (Karte für Apple Pay freischalten), Fraud-Prevention, sowie Verbesserung von Apple Pay (teilweise mit Daten, die nicht mehr mit dir verknüpft sind).
- **Weitergabe/Subprozessoren:** Apple kann für Eligibility/Fraud-Checks Daten an **Kartenausgeber/Bank**, **Payment Network** bzw. von Issuern autorisierte Provider weitergeben. Bei Zahlungen in Apps/Web werden für die Zahlungsabwicklung notwendige Infos an die App/Website und deren **Payment Processor** gesendet; Händler erhalten dabei laut Apple **nicht** deine echte Kartennummer. Optional kannst du Kontodaten/Transaktionshistorie mit **Finanz-Apps** teilen; Apple sieht/speichert diese Details dabei laut Apple nicht.
- **Drittlandtransfer:** Nicht angegeben (siehe Apple Privacy Policy für allgemeine Transfer-Infos).
- **Zahlungsabwicklung/Payment Processor:** Apple nennt, dass Apple keine Bank ist und keine Zahlungen verarbeitet; Abwicklung liegt bei Issuer/Payment Network/Händler bzw. deren Prozessor.
- **Kontakt/DSAR/DPA:** Apple verweist für Rechteanfragen auf privacy.apple.com sowie Kontaktmöglichkeiten über die Apple Privacy Policy.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Apple beschreibt, dass Apple anonyme Transaktionsmetrik behalten kann (z.B. ungefährer Betrag, App/Developer, Datum/Uhrzeit grob, Erfolg/Fehlschlag) sowie Nutzungsmetriken (z.B. Dauer zum Hinzufügen einer Karte/Abschluss einer Zahlung) zur Verbesserung von Apple Pay.
- **Abschaltbar?** Teilweise über iOS/macOS-Optionen, z.B. Standortfunktion für Merchant Identification oder Wallet-iCloud-Sync.
- **Wo (Menüpfad):**
  - `Einstellungen > Datenschutz & Sicherheit > Ortungsdienste > Systemdienste` → **Apple Pay Merchant Identification** (an/aus)
  - `Einstellungen > [Dein Name] > iCloud > In iCloud gespeichert > Alle anzeigen > Wallet` → Wallet-Sync (an/aus)
  - `Einstellungen > Apps > Safari > Erweitert` → **Apple Pay** (an/aus) *(Option je nach iOS-Version)*

**Logs & Retention:**
- **Logging-Level:** unknown
- **Aufbewahrung:** Unklar (Apple nennt Grundsatz „so lange wie nötig“; konkrete Zeiträume für anonyme Transaktionsmetrik werden nicht genannt)
- **Lösch-/Opt-out-Optionen:** Wallet-Sync und einzelne Funktionen/Sharing lassen sich deaktivieren; kartenspezifische Verwaltung in Wallet (z.B. merchant-spezifische Account Numbers) ist möglich.

**Abwägung am Punkt:** Weniger Telemetrie/Sharing kann Diagnose/Verbesserungen und Komfort (z.B. Web-Payments, Merchant-Zuordnung) reduzieren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Apple nennt, dass Kartendaten beim Hinzufügen verschlüsselt übertragen werden; Wallet-Daten werden in iCloud verschlüsselt übertragen und verschlüsselt gespeichert. Für In-App/Web-Zahlungen werden Transaktionen laut Apple re-verschlüsselt (developer-spezifischer Key).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Apple Pay setzt mindestens einen **Gerätecode** voraus; zusätzlich Face ID/Touch ID/Optic ID (optional). Apple Pay ist an den Apple Account gebunden (Terms/Einrichtung-Kontext).
- **Recovery/Account-Wiederherstellung:** Bei Verlust kann Apple Pay über **Lost Mode** / Fernlöschen gestoppt werden; Karten lassen sich über die Apple-Account-Seite von Zahlungen entfernen (Suspend/Remove).
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben (Apple Pay-spezifisch) – allgemeine Apple-Support/Security-Dokumentation existiert.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Gerätecode + Biometrie aktivieren** (Face ID/Touch ID/Optic ID).  
   **Pfad:** `Einstellungen > Face ID & Code` (iOS) / entsprechende Biometrie-Settings.  
   **Prüfen:** Wallet-Zahlung verlangt Entsperren/Biometrie (außer Express Mode).
2) **Wallet-iCloud-Sync bewusst setzen** (nur wenn du ihn brauchst).  
   **Pfad:** `Einstellungen > [Dein Name] > iCloud > In iCloud gespeichert > Alle anzeigen > Wallet`.  
   **Prüfen:** Wallet-Toggle ist wie gewünscht an/aus; Karten bleiben lokal nutzbar.
3) **Apple Pay Merchant Identification prüfen** (Standort-Metadaten).  
   **Pfad:** `Einstellungen > Datenschutz & Sicherheit > Ortungsdienste > Systemdienste > Apple Pay Merchant Identification`.  
   **Prüfen:** Schalter bleibt aus, wenn du keine standortbasierte Händlerzuordnung willst.

**Stolpersteine:**
- **Express Mode** kann Zahlungen/Transit ohne klassische Authentifizierung erlauben (Abwägung: schneller Zugriff vs. höheres Missbrauchsrisiko bei Verlust).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Apple Pay im Web deaktivieren**, wenn du es nicht brauchst.  
  **Pfad:** `Einstellungen > Apps > Safari > Erweitert > Apple Pay` (je nach iOS-Version).
- **Kein Teilen von Kontoaktivität** mit Finanz-Apps, wenn du diese Datenflüsse nicht willst (Sharing ist optional).
- **Merchant Identification aus** lassen (siehe Profil A).
**Abwägung:** weniger Komfort bei Checkout und weniger automatische Zuordnung/Features in Wallet.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Express Mode vermeiden**, außer zwingend nötig (Transit/Access).  
- **Payments on Mac deaktivieren**, wenn du Angriffsfläche reduzieren willst.  
  **Pfad:** `Einstellungen > Wallet & Apple Pay > Zahlungen auf Mac erlauben` → aus (Bezeichnung je nach iOS/macOS-Version).
- **Wallet-iCloud aus**, wenn du Sync nicht brauchst (reduziert Cloud-Kontext, erhöht aber Einrichtung-Aufwand bei Gerätewechsel).
**Abwägung:** deutlich weniger Komfort (vor allem Multi-Device und Web-/Mac-Workflows).

</details>

## Features
- Kontaktlos zahlen
- In-App/Web-Payments
- Tokenisierung/Device Account Number
- Biometrische Freigabe (Face ID/Touch ID)

## Alternativen.
- Google Pay – ähnliche Wallet-/Tokenisierung-Logik für kontaktlos + In-App/Web (Abwägung: anderes Ökosystem/Konto-Bindung, andere Datenflüsse je nach Region/Bank).
- Samsung Wallet (Samsung Pay) – ähnliche mobile Wallet mit kontaktlosem Bezahlen (Abwägung: herstellergebunden, Verfügbarkeit/Bank-Support je nach Land/Device).
- Garmin Pay – ähnliche „Wallet auf Gerät“-Zahlung (Wearable) (Abwägung: kleineres Ökosystem, begrenzter Bank-Support).
- Fitbit Pay – ähnliche Wearable-Wallet (Abwägung: Verfügbarkeit/Support abhängig vom Geräte-Ökosystem).
- PayPal (in-store via PayPal/Wallet, wo angeboten) – Zahlungsdienst mit Wallet-Ansatz (Abwägung: oft stärkere Konto-/Online-Bindung statt device-zentrierter Tokenisierung).
- Kontaktlos mit physischer Karte (EMV NFC) – gleiche Zahlungsart „tap to pay“ ohne Telefon-Wallet (Abwägung: weniger Geräte-/App-Metadaten, aber weniger Sperr-/Kontrollfunktionen auf Wallet-Ebene).

## Nicht gelöst / offene Punkte
- Konkrete Aufbewahrungsdauer der von Apple genannten **anonymen Transaktionsmetrik** (z.B. approx. amount/date/time/app name) unbekannt. 

## Quellen

- title: "Apple Privacy Policy (Legal)
- [Apple Pay & Privacy (Legal)](https://www.apple.com/legal/privacy/data/en/apple-pay/)
- [Apple Pay Wallet Terms and Conditions (US)](https://www.apple.com/legal/internet-services/apple-pay-wallet/us/)
- [Apple Pay security and privacy overview (Apple Support)](https://support.apple.com/en-us/101554)
- [Apple Privacy Policy (Legal)](https://www.apple.com/legal/privacy/en-ww/)

