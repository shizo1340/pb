---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Revolut"
url: "/anbieter/revolut/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von Revolut (Kategorie: Zahlungen)."
provider: ""
name: "Revolut"
category: "Zahlungen"
website: "https://www.revolut.com/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://www.revolut.com/en-DE/legal/privacy/"
terms: "https://www.revolut.com/en-DE/legal/terms/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "no"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "yes"
kyc_required: "yes"
jurisdiction: "Litauen (Revolut Bank UAB; Zweigniederlassung Deutschland für DE laut Legal/Help)"
region: "eu"
logs: "unknown"
retention: "verylong"
retention_notes: "bis zu 10 Jahre nach Ende der Geschäftsbeziehung (EWR; laut Privacy Policy)"
retention_max_days: "3650"
data_notes: "Finanzdienstleister mit KYC/AML-Pflichten: Identitätsprüfung (inkl. Selfie/ID) möglich; optionale Kontakt-Synchronisierung/Discoverability; Marketing- und Cookie-Tracking auf Website; Aufbewahrungspflichten bis zu 10 Jahre (EWR)."
features: ""
alternatives: ""
payment_processors: "Nicht angegeben"
sources: ""
---
## Kurzprofil

Revolut ist ein Anbieter aus der Kategorie **Zahlungen**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Zahlungen/Transfers per App nutzen willst und die typischen Pflichten eines Finanzdienstleisters (KYC/AML, Transaktionsdaten) akzeptierst.
- **Weniger geeignet wenn:** du Zahlungen ohne Identitätsprüfung, ohne Telefonnummer oder ohne App-Zwang brauchst.
- **Wichtigster Abwägung:** Finanz-/Compliance-Funktionen bedeuten **mehr Identitäts- und Transaktionsdaten + längere Aufbewahrung** (bis zu 10 Jahre im EWR) vs. App-Komfort.

## Sofortmaßnahmen
- **In-App Discoverability & Kontakt-Sync aus**, wenn du keine „Revolut-Kontakte“-Funktionen brauchst → weniger Kontakt-Metadaten in der App.
- **Passcode + Biometrie aktivieren** (Face ID/Fingerprint) → reduziert Risiko bei Geräteverlust.
- **Web-Cookies strikt setzen** (Cookie-Banner / Cookie-Preferences) → reduziert Website-Tracking durch Drittanbieter.

## Entscheidungshilfe
- Wenn du **eine App-basierte Zahlungs-/Kontolösung** brauchst, dann nutze Revolut (Abwägung: KYC/AML + Transaktionsdaten sind Teil des Modells).
- Wenn du **nicht auffindbar** sein willst, dann deaktiviere **Kontakt-Sync/Discoverability/Revtag-Suche** in den Privacy-Einstellungen der App (Abwägung: P2P-Funktionen wie „Freunde finden“ können eingeschränkt sein).
- Wenn du **Marketing-Tracking reduzieren** willst, dann opt-out über **Privacy-Einstellungen** (z.B. personalisierte Werbung) und setze Website-Cookies restriktiv (Abwägung: weniger personalisierte Angebote/Onboarding-Messung).
- Wenn du **Account-Sicherheit priorisierst**, dann nutze **Passkeys** (falls verfügbar) und halte Geräte-OS/App aktuell (Abwägung: Login/Recovery stärker an Geräte-/Cloud-Ökosystem gebunden).
- Wenn du **Custom ROM/Root** nutzt, dann prüfe die **Device-Integrity-Anforderungen** (Abwägung: Revolut kann auf modifizierten Geräten nicht funktionieren).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Revolut |
| Kategorie | Zahlungen |
| Website | https://www.revolut.com/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | yes |
| Telefon erforderlich | yes |
| KYC erforderlich | yes |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Litauen (Revolut Bank UAB; Zweigniederlassung Deutschland für DE laut Legal/Help) |
| Logs | unknown |
| Retention | bis zu 10 Jahre nach Ende der Geschäftsbeziehung (EWR; laut Privacy Policy) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.revolut.com/en-DE/legal/privacy/
- AGB/Terms: https://www.revolut.com/en-DE/legal/terms/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Finanzdienstleister mit KYC/AML-Pflichten: Identitätsprüfung (inkl. Selfie/ID) möglich; optionale Kontakt-Synchronisierung/Discoverability; Marketing- und Cookie-Tracking auf Website; Aufbewahrungspflichten bis zu 10 Jahre (EWR).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** u.a. Identitäts- und Kontaktdaten (Onboarding), Transaktions-/Zahlungsdaten (z.B. Name/IBAN bei Transfers), optionale Kontaktlisten-Synchronisierung/Discoverability, Website-/E-Mail-Tracking (Cookies, Pixel in Marketing-E-Mails), sowie technische Daten zur Verbesserung von Website/Apps (z.B. über Analytics-Anbieter).  
- **Wofür:** Bereitstellung von Zahlungs-/Kontodiensten, Identitätsprüfung/KYC, Betrugsprävention/Compliance, Produktverbesserung (Website/Apps) und Marketing (mit Opt-out-Möglichkeiten in der App).  
- **Weitergabe/Subprozessoren:** Revolut nennt Kategorien von Empfängern (z.B. IT/AI/Payment-Lieferanten, Zahlnetzwerke wie Visa/Mastercard, KYC-Dienstleister, Communications- und Analytics-Anbieter) sowie Behörden/Fraud-Prevention bei rechtlichen Pflichten.  
- **Drittlandtransfer:** möglich, da internationaler Service (z.B. internationale Zahlungen/Support); Revolut nennt vertragliche Schutzmaßnahmen bei Transfers außerhalb UK/EEA.  
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (Revolut ist selbst Zahlungsdienst; konkrete Abrechnungsdienstleister für Pläne werden in den genutzten Quellen nicht eindeutig benannt).  
- **Kontakt/DSAR/DPA:** Privacy Policy enthält Kontaktwege (u.a. E-Mail für Opt-out bei Advertising Sharing; weitere Kontakte über App/Help).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Website nutzt Analytics- und Advertising-Cookies (laut Cookie Policy); für App-Analytics nennt die Privacy Policy „Analytics providers“, aber ohne konkrete In-App-Schalterbeschreibung.
- **Abschaltbar?** Website: Cookie-Consent/Preferences; App: Privacy-Einstellungen (z.B. Discoverability, Marketing/Advertising Sharing) laut Privacy Policy.
- **Wo (Menüpfad):**  
  - Website: Cookie-Banner → Cookie-Preferences  
  - App: Profil → *Privacy settings* (Bezeichnung kann je nach Version/Region variieren)

**Logs & Retention:**
- **Logging-Level:** unknown
- **Aufbewahrung:** im EWR „no more than 10 years after our business relationship ends“ (laut Privacy Policy); längere Aufbewahrung möglich bei Rechtsgründen/Ansprüchen.
- **Lösch-/Opt-out-Optionen:** Opt-out für Advertising Sharing und Direktmarketing über App-Privacy-Einstellungen genannt; Details zu technischen Logs nicht angegeben.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Privacy Policy nennt HTTPS/TLS für App/Web/Payment-Processing; weitere Kryptodetails nicht angegeben.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Help Center beschreibt **Passkeys** als Login-Option; Passkey-Verwaltung in der App unter *Account → Passkeys* (inkl. Revoke).
- **Recovery/Account-Wiederherstellung:** Wiederherstellung kann Identitätsprüfung per **Selfie + Ausweis** erfordern (z.B. „Forgot passcode“ / „Lost access to phone number“; Support teils via anonymem Chat).
- **Vuln-Handling / Security-Kontakt:** Revolut beschreibt ein **Responsible Disclosure Program** (Meldung via Intigriti-Plattform).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Passcode + Biometrie aktivieren** (Face ID/Fingerprint), falls verfügbar.  
   **Prüfen:** Login/Autorisierung fragt Biometrie oder Passcode ab.
2) **Passkeys einrichten**, falls die Option in deinem Konto verfügbar ist.  
   **Prüfen:** Profil → Account → Passkeys zeigt einen Eintrag; Revoke ist möglich.
3) **Lost-Device-Workflow kennen** (schnell sperren/einfrieren).  
   **Prüfen:** Profil → Security → Lost device ist erreichbar; Website-Alternative existiert.

**Stolpersteine:**
- Recovery (Selfie/ID) erhöht Identitätsbindung (Abwägung: schneller Zugriff zurück vs. mehr personenbezogene Daten im Prozess).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Kontakt-Sync deaktivieren** (keine „Revolut-Kontakte“-Erkennung).  
- **Discoverability einschränken** (z.B. nicht per Revtag suchbar, falls Toggle vorhanden).  
- **Website-Cookies restriktiv setzen** (Analytics/Ads aus) und Marketing-Opt-outs in der App prüfen.  
**Abwägung:** weniger Komfort bei P2P/„Freunde finden“ + weniger personalisierte Angebote.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze ein **dediziertes Geräteprofil** nur für Banking/Payments (weniger App-Korrelation).  
- Beachte **Device-Integrity-Anforderungen**: Revolut nennt u.a. gesperrten Bootloader (Android) und schränkt modifizierte Geräte ein.  
- Nutze **Lost-Device-Funktionen** (Remote Logout/Karten einfrieren) als festen Notfall-Runbook-Schritt.  
**Abwägung:** mehr organisatorischer Aufwand; Custom-ROM/Root-Einrichtungen können inkompatibel sein.

</details>

## Features
- Zahlungskonto/App für Überweisungen, Karten-Zahlungen und Währungswechsel
- Passcode + Biometrie (Face ID/Fingerprint) und Passkeys (falls verfügbar)
- Lost-Device-Workflow (Geräte abmelden, Karten einfrieren)
- Geräteintegritätsanforderungen (Android: gesperrter Bootloader laut Help Center)

## Alternativen
- [Wise](/anbieter/wise/) – Abwägung zwischen Transfer-Fokus und zentraler Konto-/KYC-Abwicklung.
- [PayPal](/anbieter/paypal/) – Abwägung zwischen breiter Merchant-Akzeptanz und zentraler Account-/Metadatenlage.
- **N26** (Mobile Banking): Abwägung zwischen klassischem Bankkonto-Modell und KYC/Compliance + App-Pflicht.

## Nicht gelöst / offene Punkte
- Öffentliche Liste konkreter Subprozessoren/IT-Lieferanten (Namen) nicht gefunden; in der Privacy Policy werden primär Kategorien genannt.
- Dokumentation zu **App-internen** Telemetrie-/Crashreport-Schaltern (separat von Website-Cookies) ist nicht eindeutig beschrieben.

## Quellen

- Geräteintegrität: "kein Root/Custom ROM; Android-Bootloader soll gesperrt sein (laut Help Center)
- Wise (internationale Transfers; Trade-off: "Konto/KYC + zentrale Abwicklung)
- PayPal (Online-Zahlungen; Trade-off: "zentraler Account + Metadaten/Dispute-Prozesse)
- N26 (Mobile Banking; Trade-off: "Bank-KYC/Compliance + App-Pflicht)
- https://help.revolut.com/en-DE/help/security-logging-in/device-integrity-requirements/bootloader-lock-requirement-android/
- [Privacy Policy](https://www.revolut.com/en-DE/legal/privacy/)
- [Personal Terms (DE, Revolut Bank UAB Zweigniederlassung Deutschland)](https://www.revolut.com/en-DE/legal/terms/)
- [Cookie Policy](https://www.revolut.com/en-DE/legal/cookies-policy/)
- [Responsible Disclosure Program Policy](https://www.revolut.com/en-DE/responsible-disclosure-program/)
- [Help Center: What are passkeys?](https://help.revolut.com/en-DE/help/profile-and-plan/log-in-issues/what-are-passkeys/)
- [Contact us (Account recovery / Support-Kontakt)](https://www.revolut.com/contact-us/)
- [Report Lost Device](https://www.revolut.com/en-AT/report-lost-device/)
- [Help Center: Bootloader lock requirement (Android)](https://help.revolut.com/en-DE/help/security-logging-in/device-integrity-requirements/bootloader-lock-requirement-android/)
