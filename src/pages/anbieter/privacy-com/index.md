---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Privacy.com (Virtual Cards)"
url: "/anbieter/privacy-com/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von Privacy.com (Virtual Cards) (Kategorie: Zahlungen)."
provider: ""
name: "Privacy.com (Virtual Cards)"
category: "Zahlungen"
website: "https://www.privacy.com/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://www.privacy.com/privacy-policy"
terms: "https://www.privacy.com/terms"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "no"
self_host_possible: "no"
account_required: "yes"
phone_required: "yes (US-Telefonnummer laut Help Center)"
kyc_required: "yes"
jurisdiction: "USA (Lithic, Inc. d/b/a Privacy.com; Adresse in New York, NY; Governing Law: New York)"
region: "us"
logs: "unknown"
retention: "verylong"
retention_notes: "u.a. 5 Jahre (Identity Verification & Payment Card Data nach Kontoschließung), 3 Jahre (Audit Logs), 6 Jahre (Funding-Bank-Info & ACH) – laut Privacy Policy"
retention_max_days: "2190"
data_notes: "Privacy.com ist ein US-Dienst für virtuelle Zahlungskarten. Für Nutzung sind Account + Identitätsprüfung erforderlich (u.a. ID-Nummer/SSN, US-Telefonnummer, US-Checking-Account). Transaktions- und Gerätedaten werden laut Anbieter für Anti-Fraud/Payment Protection verarbeitet; Aufbewahrung ist regulatorisch begründet und teilweise mehrjährig."
features: ""
alternatives: ""
payment_processors: "Patriot Bank, N.A. (Kartenausgeber); Visa/Mastercard (Kartennetzwerke); Identity-Verification/Consumer-Reporting-Services (nicht einzeln benannt)"
sources: ""
---
## Kurzprofil

Privacy.com (Virtual Cards) ist ein Anbieter aus der Kategorie **Zahlungen**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du bei Online-Zahlungen **Kartendaten gegenüber Händlern abschirmen** willst (virtuelle Karten statt physischer Kartendaten) und mit **US-Konto + Identitätsprüfung** leben kannst.
- **Weniger geeignet wenn:** du **ohne KYC/US-Telefonnummer/US-Checking-Account** zahlen willst oder möglichst kurze Datenaufbewahrung brauchst (regulatorisch begründete, mehrjährige Retention).
- **Wichtigster Abwägung:** **Kontrollierbare Kartennutzung vs. starke Kontobindung** (KYC + Fraud-Prevention-Daten inkl. Geräte-/Transaktionsdaten, plus mehrjährige Logs/Retention).

## Sofortmaßnahmen
- **TOTP oder Passkeys aktivieren:** reduziert Account-Übernahmen (Abwägung: Recovery muss sauber geplant sein).
- **Standardmäßig Merchant-Locked oder Single-Use nutzen:** begrenzt Missbrauch, wenn Kartendaten abfließen (Abwägung: mehr Kartenverwaltung).
- **Pro Karte Spend Limits setzen:** reduziert Schaden bei Abo-Fallen/Fehlbuchungen (Abwägung: Fehlbuchungen durch zu enge Limits möglich).

## Entscheidungshilfe
- Wenn du **US-only Voraussetzungen** nicht erfüllst (US-Checking-Account, US-Telefonnummer, ID-Nummer/SSN), dann ist der Dienst **praktisch nicht nutzbar** (Abwägung: keine Alternative innerhalb desselben Kontos).
- Wenn du **Kartendaten vor Händlern minimieren** willst, dann nutze Privacy-Karten statt deiner echten Karten-/Bankdaten (Abwägung: Merchant sieht weiterhin Billing Address + ggf. deinen Namen beim Checkout).
- Wenn du **Abo-/Trial-Risiken** begrenzen willst, dann nutze Single-Use oder Merchant-Locked + strikte Limits (Abwägung: für wiederkehrende Zahlungen brauchst du passende Kartentypen).
- Wenn du **Angriffsfläche im Browser** reduzieren willst, dann vermeide Autofill/Browser-Extension auf High-Risk-Systemen (Abwägung: weniger Komfort beim Checkout).
- Wenn du **Bank-Transparenz minimieren** willst, prüfe vorab die Statement-Descriptor-Logik („PWP*…/Privacy.com“) (Abwägung: deine Bank sieht weiterhin Händlerinfos im Descriptor-Kontext).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Privacy.com (Virtual Cards) |
| Kategorie | Zahlungen |
| Website | https://www.privacy.com/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | yes |
| Telefon erforderlich | yes (US-Telefonnummer laut Help Center) |
| KYC erforderlich | yes |
| Zahlungsabwicklung | Patriot Bank, N.A. (Kartenausgeber); Visa/Mastercard (Kartennetzwerke); Identity-Verification/Consumer-Reporting-Services (nicht einzeln benannt) |
| Jurisdiktion | USA (Lithic, Inc. d/b/a Privacy.com; Adresse in New York, NY; Governing Law: New York) |
| Logs | unknown |
| Retention | u.a. 5 Jahre (Identity Verification & Payment Card Data nach Kontoschließung), 3 Jahre (Audit Logs), 6 Jahre (Funding-Bank-Info & ACH) – laut Privacy Policy |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.privacy.com/privacy-policy
- AGB/Terms: https://www.privacy.com/terms
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- PCI-DSS (laut Anbieter, jährliche Zertifizierungen)
- SOC 2 (laut Anbieter, jährliche Zertifizierungen)
- SOC 1 Type 2 & ISO 27001 (laut Anbieter)

**Daten-Notizen (kurz):**
Privacy.com verarbeitet Identitäts- und Transaktionsdaten für Kontoeröffnung, Zahlungsausführung sowie Anti-Fraud/Payment Protection. Händler bekommen die virtuelle Kartennummer inkl. Ablauf/CVV plus die beim Checkout eingegebene Billing Address; deine Bank/Finanzquelle sieht im Descriptor „PWP*…/Privacy.com“.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Identitätsdaten (Name, E-Mail, Telefonnummer, Geburtsdatum, staatliche ID-Nummer/SSN), Funding-Daten (Bankkonto/Zahlungsmittel), Transaktionsdaten (wann/wo/wie), Gerätedaten (u.a. IP, Browser/OS, Geräte-IDs), Cookies/Analytics.
- **Wofür:** Identitätsprüfung/Eligibility, Fraud-Prevention & Payment Protection, Bereitstellung/Betrieb/Verbesserung der Services, Dispute-Handling.
- **Weitergabe/Subprozessoren:** Weitergabe in „kontrollierten Umständen“ u.a. an Dienstleister zur Bereitstellung, an Banken/Processor/Payment Card Associations im Zahlungsprozess sowie an Identity-Verification- und Consumer-Reporting-Quellen (ohne öffentliche Namensliste).
- **Drittlandtransfer:** Nicht konkret benannt (US-Dienst; Rechts-/Compliance-Kontext wird betont).
- **Zahlungsabwicklung/Payment Processor:** Kartenprogramm laut Cardholder Agreement über Patriot Bank, N.A.; Program Manager Lithic, Inc. (d/b/a Privacy.com); Kartennetzwerke Visa/Mastercard.
- **Kontakt/DSAR/DPA:** Kontakt via support@privacy.com und Telefon; CCPA-Notice ist vorhanden.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Cookies werden laut Privacy Policy auch für Analytics genutzt; Drittanbieter-Cookies können eingesetzt werden.
- **Abschaltbar?** Browserseitig blockierbar; Hinweis: einzelne Funktionen können ohne Cookies eingeschränkt sein.
- **Wo (Menüpfad):** Browser → Einstellungen → Datenschutz/Tracking → Cookies/Website-Daten (Block/Whitelist).

**Logs & Retention:**
- **Logging-Level:** unknown (Privacy nennt Audit Logs und fraud-/paymentbezogene Device/Transaction-Daten, aber ohne vollständige Log-Kataloge)
- **Aufbewahrung:** Identity Verification & Payment Card Data: 5 Jahre nach Kontoschließung; Funding Bank Account Info & ACH: 6 Jahre; Audit Logs: 3 Jahre (laut Privacy Policy).
- **Lösch-/Opt-out-Optionen:** Opt-out für Marketing-Kommunikation; Accountdaten können im Konto korrigiert werden; regulatorische Mindestaufbewahrung bleibt bestehen.

**Abwägung am Punkt:** Weniger Telemetrie/Cookies kann Funktionen und Diagnose erschweren; mehr Telemetrie erhöht Metadatenrisiko (Geräte-/Transaktionskontext).

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** „Sensitive data“ wird laut Security-Seite verschlüsselt; Datenübertragung via TLS + HSTS; Inter-DC-Kommunikation via IPsec mit AES-256.
- **KDF/Parameter/Schlüsselableitung:** Passwort-Hashing via PBKDF2 (100k Iterationen, Salt) laut Security-Seite.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA ist laut Help Center verfügbar (E-Mail, SMS, Authenticator-App/TOTP); Passkeys werden unterstützt und sind in „Security“/„Account“ verwaltbar.
- **Recovery/Account-Wiederherstellung:** New-Device-Login Codes/2FA-Flows sind dokumentiert; Details zur vollständigen Account-Recovery sind nicht zentral zusammengefasst.
- **Vuln-Handling / Security-Kontakt:** Vulnerability Disclosure Policy mit Meldeweg vdp@privacy.com.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Starken Login aktiv nutzen (Passkey oder TOTP-2FA)**  
   **Wo:** Account/Security → *Passkeys* → „Add Passkey“ **oder** Account → *Two-Factor Authentication* → „Authentication App“.  
   **Prüfen:** Login klappt ohne SMS-only; Backup-Option (zweites Gerät/Authenticator-Backup) existiert.
2) **Kartentyp passend wählen + Limits setzen**  
   **Wo:** App/Website → „New Card“ → Merchant-Locked oder Single-Use → Spend Limit setzen.  
   **Prüfen:** Limit greift in einem Testkauf (kleiner Betrag), Pause/Close funktioniert.
3) **Browser-Extension bewusst einsetzen**  
   **Wo:** Browser → Extensions/Add-ons → Privacy Extension.  
   **Prüfen:** Nur auf vertrauenswürdigem Browserprofil; Autofill nur wenn nötig.

**Stolpersteine:**
- Identitäts-/Eligibility-Anforderungen (US-Phone, US-Checking, ID/SSN) sind Teil des Produkts (Abwägung: Zahlungsfunktion & Compliance vs. Pseudonymität).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze möglichst **Merchant-Locked statt Everywhere Cards**, wenn In-Person/Multi-Merchant nicht nötig ist (Abwägung: weniger Flexibilität).
- Halte **Billing Address/Checkout-Daten konsistent**, aber teile beim Merchant nur, was für Lieferung/Vertrag nötig ist (Abwägung: weniger Datenminimierung bei physischen Waren).
- Prüfe Wallet-Anbindung bewusst: Apple Pay/Google Pay teilen minimale Identitätsdaten zur Verifizierung (Abwägung: Wallet-Anbieter als zusätzlicher Datenpunkt).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Verwende getrennte Geräte-/Browserprofile für Zahlungen (Abwägung: deutlich mehr Aufwand).
- Blockiere Drittanbieter-Cookies und nutze nur whitelisted Payment-Flows (Abwägung: Funktionsprobleme möglich).
- Setze sehr enge Spend Limits + sofortiges Pausieren nach Nutzung (Abwägung: mehr manuelle Verwaltung, mehr Fehl-Declines).

</details>

## Features
- Virtuelle Karten: Single-Use, Merchant-Locked, Category-Locked, Shared Cards (planabhängig)
- Spend Limits pro Karte (Transaktion/Monat/Jahr/Gesamt)
- Karten pausieren/schließen
- Browser-Erweiterung: Card-Generierung & Autofill am Checkout
- 2FA: E-Mail, SMS, Authenticator-App (TOTP)
- Passkeys (Account-Login)
- „Everywhere Cards“ für Multi-Merchant + Mobile Wallet (planabhängig)

## Alternativen
- Banken/Kartenanbieter mit „Virtual Card Numbers“ (Abwägung: weniger Kartentypen/Controls möglich, anderes Daten-/Konto-Modell)
- Revolut (virtuelle Karten; Abwägung: Fintech-Konto + eigenes KYC/Compliance-Profil)
- Wise (virtuelle Karten; Abwägung: Fintech-Konto + eigenes KYC/Compliance-Profil)
- Apple Pay / Google Pay (Tokenisierung im Wallet; Abwägung: Wallet-Anbieter als zusätzlicher Datenpunkt)

## Nicht gelöst / offene Punkte
- Drittanbieter für Identity Verification / Consumer Reporting und Website-Analytics werden nicht konsistent namentlich gelistet.
- Logs sind funktional beschrieben (Fraud/Payment Protection, Audit Logs), aber ohne vollständige öffentliche Log-Taxonomie.

## Quellen

- Virtuelle Karten: "Single-Use, Merchant-Locked, Category-Locked, Shared Cards (planabhängig)
- Banken/Kartenanbieter mit „Virtual Card Numbers“ (Trade-off: "anderer Funktionsumfang + andere Datenflüsse)
- Revolut (virtuelle Karten; Trade-off: "Konto-/Fintech-Bindung + anderes KYC-Profil)
- Wise (virtuelle Karten; Trade-off: "Konto-/Fintech-Bindung + anderes KYC-Profil)
- Apple Pay / Google Pay (Tokenisierung im Wallet; Trade-off: "Wallet-Anbieter als zusätzlicher Datenpunkt)
- [Privacy.com – Website](https://www.privacy.com/)
- [Privacy.com – Privacy Policy](https://www.privacy.com/privacy-policy)
- [Privacy.com – Terms of Service](https://www.privacy.com/terms)
- [Privacy.com – Pricing](https://www.privacy.com/pricing)
- [Privacy.com – Cardholder Agreement](https://www.privacy.com/cardholder-agreement)
- [Privacy.com – Security](https://www.privacy.com/security)
- [Privacy.com – Vulnerability Disclosure Policy](https://www.privacy.com/legal/security)
- [Help Center: "Privacy Everywhere Cards](https://support.privacy.com/hc/en-us/articles/32699362913687-Privacy-Everywhere-Cards)
- [Privacy.com – Website](https://www.privacy.com/)
- [Privacy.com – Privacy Policy](https://www.privacy.com/privacy-policy)
- [Privacy.com – Terms of Service](https://www.privacy.com/terms)
- [Privacy.com – Pricing](https://www.privacy.com/pricing)
- [Privacy.com – Cardholder Agreement](https://www.privacy.com/cardholder-agreement)
- [Privacy.com – Security](https://www.privacy.com/security)
- [Privacy.com – Vulnerability Disclosure Policy](https://www.privacy.com/legal/security)
- [Help Center: Who can use Privacy?](https://support.privacy.com/hc/en-us/articles/360012046934-Who-can-use-Privacy)
- [Help Center: Do you support Two-Factor Authentication (2FA)?](https://support.privacy.com/hc/en-us/articles/360012047174-Do-you-support-Two-Factor-Authentication-2FA)
- [Help Center: Do you support passkeys?](https://support.privacy.com/hc/en-us/articles/35605200221335-Do-you-support-passkeys)
- [Help Center: What information does Privacy share with the merchant?](https://support.privacy.com/hc/en-us/articles/24450438423063-What-information-does-Privacy-share-with-the-merchant)
- [Help Center: What will I see on my bank statement when I make a purchase with Privacy?](https://support.privacy.com/hc/en-us/articles/360012407533-What-will-I-see-on-my-bank-statement-when-I-make-a-purchase-with-Privacy)
- [Help Center: How do I create a new Privacy Card?](https://support.privacy.com/hc/en-us/articles/360012402693-How-do-I-create-a-new-Privacy-Card)
- [Help Center: How does the Privacy Browser Extension work?](https://support.privacy.com/hc/en-us/articles/7971463780759-How-does-the-Privacy-Browser-Extension-work)
- [Help Center: Privacy Everywhere Cards](https://support.privacy.com/hc/en-us/articles/32699362913687-Privacy-Everywhere-Cards)
