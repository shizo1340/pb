---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Google Pay"
url: "/anbieter/google-pay/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-14"
robots: "index,follow"
description: "Kurzprofil von Google Pay (Kategorie: Zahlungen)."
provider: ""
name: "Google Pay"
category: "Zahlungen"
website: "https://pay.google.com/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=privacynotice&ldl=en-GB"
terms: "https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=buyertos"
transparency: "https://transparency.google/our-policies/product-terms/google-pay"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "no"
self_host_possible: "no"
account_required: "yes"
phone_required: "unknown"
kyc_required: "unknown"
jurisdiction: "Google Ireland Limited (EEA-Datencontroller laut Google Payments Privacy Notice)"
region: "eu"
logs: "unknown"
retention: "specified"
retention_notes: "Dauer der Nutzung + zusätzlich zur Erfüllung rechtlicher/regulatorischer Pflichten (kein Zeitraum genannt)"
data_notes: "Google Pay/Wallet ist an ein Google-Konto gebunden; je nach Nutzung können Identitäts-, Finanz-, Standort- sowie Diagnose-/Nutzungsdaten anfallen."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Google Pay ist ein Anbieter aus der Kategorie **Zahlungen**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du ohnehin ein Google-Konto nutzt und kontaktlos/online zahlen willst, ohne jedes Mal Kartendaten einzutippen (Wallet/Pay-Integration).
- **Weniger geeignet wenn:** du Zahlungen strikt ohne Konto-Bindung und ohne zentrale Kontohistorie abwickeln willst (Account- & Aktivitätsbezug ist Teil des Modells).
- **Wichtigster Abwägung:** Komfort (ein Konto, viele Zahlungsarten) vs. **Metadaten/Profiling-Risiko** durch transaktionsnahe Daten, Gerätekennungen sowie Diagnose-/Nutzungsdaten im Google-Ökosystem.

## Sofortmaßnahmen
- **2-Schritt-Bestätigung oder Passkeys aktivieren**: reduziert Kontoübernahmen (direkt relevant, weil Zahlungen am Google-Konto hängen).
- **Standortberechtigung nur „Während der Nutzung“ setzen**: begrenzt Standortdaten auf konkrete Fälle (Abwägung: weniger detaillierte Belege/Maps).
- **Zahlungs-/Aktivitätsdaten regelmäßig prüfen & löschen**: reduziert Sichtbarkeit im Verlauf (Abwägung: Support/Beleg-Historie kann eingeschränkt sein).

## Entscheidungshilfe
- Wenn du **Tap-to-Pay** nutzt, dann setze **Gerätesperre + Biometrie/PIN** strikt (Abwägung: mehr Reibung beim Entsperren, weniger Missbrauchsrisiko).
- Wenn du **möglichst wenig Standortbezug** willst, dann halte die **Standortberechtigung restriktiv** und prüfe, ob Belegdetails ohne Standort reichen (Abwägung: weniger Komfort bei „detaillierten Belegen“).
- Wenn du **Transaktionsverlauf/Metadaten minimieren** willst, dann nutze Lösch- und Exportfunktionen im Google-Konto (Abwägung: weniger nachvollziehbare Historie).
- Wenn du **Kontorisiko senken** willst, dann verwende **Security Key (FIDO) / Passkeys** für den Google-Login (Abwägung: Recovery wird wichtiger).
- Wenn du **Bank-/Issuer-Abhängigkeiten** vermeiden willst, dann berücksichtige: Google ist (außer als Issuer) **nicht Vertragspartei** deines Kartenvertrags; Issuer-Bedingungen gelten weiter (Abwägung: Probleme oft beim Issuer klären).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Google Pay |
| Kategorie | Zahlungen |
| Website | https://pay.google.com/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | free |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Google Ireland Limited (EEA-Datencontroller laut Google Payments Privacy Notice) |
| Logs | unknown |
| Retention | Dauer der Nutzung + zusätzlich zur Erfüllung rechtlicher/regulatorischer Pflichten (kein Zeitraum genannt) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=privacynotice&ldl=en-GB
- AGB/Terms: https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=buyertos
- Transparency Report: https://transparency.google/our-policies/product-terms/google-pay
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Google Pay/Wallet ist an ein Google-Konto gebunden; je nach Nutzung können Identitäts-, Finanz-, Standort- sowie Diagnose-/Nutzungsdaten anfallen.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** u.a. Registrierungs-/Profilinformationen (z.B. Adresse, Telefonnummer, Geburtsdatum, ggf. Ausweis-/Steuer-ID), Zahlungs-/Kontodaten, Transaktionsdaten (Datum/Uhrzeit/Betrag, Händlerbeschreibung und ggf. Standort), sowie Informationen aus Drittquellen (z.B. Issuer/Finanzinstitut, Händler/Payment Service Provider).  
- **Wofür:** Bereitstellung des Zahlungsdienstes, Betrugsprävention/Sicherheit/Compliance, Kundenservice, sowie Unterstützung von Drittparteien bei angefragten Leistungen; außerdem Modellierung von Betrugsrisiken.  
- **Weitergabe/Subprozessoren:** Daten können an Google-Affiliate-Unternehmen weitergegeben werden; externe Weitergabe erfolgt laut Anbieter „wie beschrieben“ in Privacy Notice/Google Privacy Policy (keine vollständige öffentliche Liste in den verlinkten Dokumenten).  
- **Drittlandtransfer:** Nicht angegeben (Details über generelle Google-Datenverarbeitung siehe Google Privacy Policy).  
- **Zahlungsabwicklung/Payment Processor:** Google Pay ist (außer als Issuer) nicht Vertragspartei deiner Kartenverträge; Issuer/Payment-Network bleiben beteiligt. Google kann Transaktionsinfos vom Issuer erhalten, um Details in Google Pay anzuzeigen.  
- **Kontakt/DSAR/DPA:** Export und Löschung von Google Pay/Wallet-Informationen sind über Google-Kontoseiten und Support-Flows beschrieben (siehe Quellen).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Google nennt u.a. Daten zur App-Nutzung, Suchverlauf in der App, Absturzberichte, Diagnosedaten und App-Leistungsdaten als mögliche Datenerhebung.  
- **Abschaltbar?** Teilweise: In Google Pay gibt es Privacy-Einstellungen (z.B. „Google Pay-Informationen mit anderen Unternehmen teilen“) auf der Website; für Diagnose-/Crashdaten ist keine eindeutige globale „Aus“-Aussage in den verlinkten Quellen genannt.  
- **Wo (Menüpfad):** pay.google.com → **Einstellungen** → **Privacy settings** (Schalter je nach Konto/Region).

**Logs & Retention:**
- **Logging-Level:** unknown
- **Aufbewahrung:** Dauer der Nutzung + zusätzlich zur Erfüllung rechtlicher/regulatorischer Pflichten (kein Zeitraum genannt)
- **Lösch-/Opt-out-Optionen:** Zahlungs-/Aktivitätsdaten können im Google-Konto gelöscht werden; der Anbieter weist darauf hin, dass bestimmte Informationen ggf. weiter aufbewahrt werden müssen.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Google nennt Verschlüsselung „während der Übertragung“ (in transit) und verweist insgesamt auf Sicherheitspraktiken; E2E wird für Zahlungsdaten in den hier genutzten Quellen nicht als Standard beschrieben.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Google-Konto unterstützt 2-Schritt-Bestätigung, Security Keys (FIDO) und Passkeys (Google Account-Ebene).
- **Recovery/Account-Wiederherstellung:** Über Google-Konto-Recovery/Anmeldeflüsse (Details nicht spezifisch nur für Google Pay in den hier genutzten Quellen).
- **Vuln-Handling / Security-Kontakt:** Sicherheitslücken können über Google Bug Hunters gemeldet werden.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (2-Schritt-Bestätigung/Passkeys im Google-Konto).  
   **Prüfen:** Google-Konto → Sicherheit → Methode als „aktiv“ sichtbar.
2) **Gerätesperre streng setzen** (PIN statt Muster, Biometrie nur zusätzlich).  
   **Prüfen:** Display-Sperre aktiv + Zahlungen nur nach Entsperren möglich.
3) **Privacy-Schalter prüfen** (z.B. Teilen von Google-Pay-Infos mit anderen Unternehmen).  
   **Prüfen:** pay.google.com → Einstellungen → Privacy settings → Status sichtbar.

**Stolpersteine:**
- Identitäts-/Verifizierungsabfragen können zusätzliche Daten erfordern (Abwägung: Fraud-Schutz/Compliance vs. mehr Identitätsbindung).
- Standort kann für Belegdetails genutzt werden (Abwägung: detailreichere Belege vs. Standortmetadaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- Standortberechtigung restriktiv: **Android → Einstellungen → Apps → Google Wallet → Berechtigungen → Standort → „Nur während der Nutzung“** (oder deaktiviert, wenn Belegdetails nicht gebraucht werden).
- Reduziere verknüpfte Dienste/Integrationen (nur Funktionen aktiv lassen, die du nutzt).
- Zahlungs-/Aktivitätsverlauf regelmäßig aufräumen: **Google-Konto → Zahlungen & Abos → Google Pay verwalten → Aktivität löschen**.  
**Abwägung:** weniger Komfort bei Historie/Belegen und ggf. Support-Fällen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Verwende für Zahlungen ein **separates Nutzerprofil** auf Android (getrennte Apps/Accounts), um Querverknüpfungen zu reduzieren.
- Setze 2FA mit **Hardware-Security-Key** als primäre Methode und prüfe Recovery-Optionen (kein schwacher Fallback).
- Minimale App-Berechtigungen: Kontakte/SMS/Standort nur, wenn eine konkrete Funktion sonst nicht nutzbar ist.  
**Abwägung:** deutlich mehr Einrichtung-Aufwand, potenziell weniger Komfort (Autofill/Verknüpfungen/Belege).

</details>

## Features
- Kontaktloses Bezahlen (Tap to Pay) mit Google Wallet / Google Pay
- Online-/In-App-Zahlungen mit gespeicherten Zahlungsmethoden
- Virtuelle Kartennummern (je nach Karte/Region) und Anzeige von Transaktionsdetails
- Verlauf/Verwaltung von Zahlungsdaten im Google-Konto (Export/Löschung)

## Alternativen
- Apple Pay (Abwägung: Apple-Ökosystem/Apple-ID-Bindung vs. Nutzung auf iOS)
- Samsung Wallet (Abwägung: Geräte-/Herstellerbindung vs. Integration in Samsung-Ökosystem)
- Garmin Pay (Abwägung: Wearable-Fokus vs. eingeschränktere Geräte-/Bank-Abdeckung)
- PayPal (Abwägung: Konto-basiert/Online-Fokus vs. andere Datenflüsse als Wallet/Tokenisierung)

## Nicht gelöst / offene Punkte
- Unklar, ob es eine öffentliche Subprozessoren-/DPA-Liste speziell für Google Payments gibt.

## Quellen

- Apple Pay (Trade-off: "Apple-Ökosystem/Apple-ID-Bindung vs. Nutzung auf iOS)
- Samsung Wallet (Trade-off: "Geräte-/Herstellerbindung vs. Integration in Samsung-Ökosystem)
- Garmin Pay (Trade-off: "Wearable-Fokus vs. eingeschränktere Geräte-/Bank-Abdeckung)
- PayPal (Trade-off: "Konto-basiert/Online-Fokus vs. andere Datenflüsse als Wallet/Tokenisierung)
- [Google Payments Privacy Notice](https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=privacynotice&ldl=en-GB)
- [Google Payments Terms of Service](https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=buyertos)
- [So schützt Google Pay Ihre Daten (Google Pay-Hilfe, DE)](https://support.google.com/googlepay/answer/10223752?co=GENIE.Platform%3DDesktop&hl=de)
- [Google Pay- und Google Wallet-Informationen suchen, exportieren oder löschen](https://support.google.com/googlepay/answer/9015738?hl=de)
- [Google Privacy Policy](https://myaccount.google.com/privacypolicy)
- [Turn on 2-Step Verification (Google Account)](https://support.google.com/accounts/answer/185839?hl=de)
- [Use a security key for 2-Step Verification (Google Account)](https://support.google.com/accounts/answer/6103523?hl=de)
- [Report a security vulnerability in a Google-owned product (Bug Hunters)](https://bughunters.google.com/report)
- [Google Payments Privacy Notice](https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=privacynotice&ldl=en-GB)
- [Google Payments Terms of Service](https://payments.google.com/payments/apis-secure/get_legal_document?ldo=0&ldt=buyertos)
- [So schützt Google Pay Ihre Daten (Google Pay-Hilfe, DE)](https://support.google.com/googlepay/answer/10223752?co=GENIE.Platform%3DDesktop&hl=de)
- [Google Pay- und Google Wallet-Informationen suchen, exportieren oder löschen](https://support.google.com/googlepay/answer/9015738?hl=de)
- [Google Privacy Policy](https://myaccount.google.com/privacypolicy)
- [Turn on 2-Step Verification (Google Account)](https://support.google.com/accounts/answer/185839?hl=de)
- [Use a security key for 2-Step Verification (Google Account)](https://support.google.com/accounts/answer/6103523?hl=de)
- [Report a security vulnerability in a Google-owned product (Bug Hunters)](https://bughunters.google.com/report)
