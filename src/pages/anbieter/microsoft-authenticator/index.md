---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Microsoft Authenticator"
url: "/anbieter/microsoft-authenticator/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-18"
robots: "index,follow"
description: "Kurzprofil von Microsoft Authenticator (Kategorie: 2FA)."
provider: ""
name: "Microsoft Authenticator"
category: "2FA"
website: "https://support.microsoft.com/en-us/account-billing/about-microsoft-authenticator-9783c865-0305-4700-a09b-f7dcefc6ba39"
repo: "Nicht angegeben"
license: "Nicht angegeben (proprietär)"
policies: ""
privacy: "https://privacy.microsoft.com/en-us/privacystatement"
terms: "https://www.microsoft.com/de-de/servicesagreement"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "no"
self_host_possible: "no"
account_required: "no"
phone_required: "unknown"
kyc_required: "no"
jurisdiction: "USA (Microsoft); EWR/UK/CH: Microsoft Ireland Operations Limited (siehe Privacy Statement)"
region: "uk"
logs: "minimal"
logs_notes: "minimal (Usage Data optional; Diagnose-Logs lokal bis Upload)"
retention: "specified"
retention_notes: "variabel (Privacy Statement; keine festen Zeiten genannt)"
data_notes: "TOTP-Codes werden lokal erzeugt; Push-Login erfordert Microsoft-Backend. Minimal notwendige Nutzungsdaten werden erfasst, zusätzliche Nutzungsdaten sind per Toggle optional. Diagnose-Logs bleiben lokal bis zum manuellen Senden. Standortdaten können bei Conditional-Access-Policies genutzt werden (Koordinaten laut FAQ nicht dauerhaft gespeichert). Backup: iOS via iCloud, Android via Microsoft-Konto."
features: ""
alternatives: ""
payment_processors: "Nicht zutreffend (kostenlos)"
sources: ""
---
## Kurzprofil

Microsoft Authenticator ist ein Anbieter aus der Kategorie **2FA**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du TOTP/Einmalcodes auf dem Smartphone nutzen willst und optional Push-Bestätigungen für Microsoft-Konten brauchst.
- **Weniger geeignet wenn:** du zwingend eine vollständig offline nutzbare Lösung ohne Cloud-Optionen/Policies (z.B. Standortpflicht im Unternehmen) brauchst.
- **Wichtigster Abwägung:** Komfort (Push/Backup/Recovery) vs. zusätzliche Kontobindung und Metadaten (Cloud- und Policy-Anbindung).

## Sofortmaßnahmen
- **App Lock aktiviert lassen** → reduziert Risiko bei offenem/entsperrtem Gerät.
- **„Usage Data“ ausgeschaltet lassen** → vermeidet zusätzliche (optionale) Nutzungsdatenübermittlung.
- **„Screen Capture“ aus lassen** → verhindert, dass OTP-Codes per Screenshot/Screen-Capture abfließen.

## Entscheidungshilfe
- Wenn du **nur TOTP-Codes** für Drittanbieter brauchst, dann nutze Authenticator ohne Microsoft-Konto (Abwägung: kein Cloud-Backup/kein Push-Login).
- Wenn du **Gerätewechsel ohne Neuaufbau** willst, dann aktiviere Backup (Abwägung: iOS nutzt iCloud, Android ein Microsoft-Konto).
- Wenn du in einer **Work/School-Umgebung** bist, dann rechne mit Admin-Policies wie Conditional Access (Abwägung: z.B. Standortfreigabe kann nötig sein).
- Wenn du **weniger Diagnosedaten** willst, dann sende keine Feedback-Logs und lasse „Usage Data“ aus (Abwägung: Support/Fehleranalyse schwieriger).
- Wenn Push-Bestätigungen auf ein **altes Gerät** gehen, dann entferne/unregister das alte Gerät (Abwägung: zusätzlicher Schritt in Konto-/Org-Einstellungen).
- Wenn du **Passkeys** mit „Passkey in Microsoft Authenticator“ nutzen willst, dann prüfe OS-Version und ob die Methode in den Security-Infos angeboten wird (Abwägung: Geräte-/Plattformabhängigkeit).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Microsoft Authenticator |
| Kategorie | 2FA |
| Website | https://support.microsoft.com/en-us/account-billing/about-microsoft-authenticator-9783c865-0305-4700-a09b-f7dcefc6ba39 |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben (proprietär) |
| Preismodell | free |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | no (TOTP), ja für Push/Cloud-Backup (Microsoft-Konto) |
| Telefon erforderlich | unknown |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend (kostenlos) |
| Jurisdiktion | USA (Microsoft); EWR/UK/CH: Microsoft Ireland Operations Limited (siehe Privacy Statement) |
| Logs | minimal (Usage Data optional; Diagnose-Logs lokal bis Upload) |
| Retention | variabel (Privacy Statement; keine festen Zeiten genannt) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://privacy.microsoft.com/en-us/privacystatement
- AGB/Terms: https://www.microsoft.com/de-de/servicesagreement
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
TOTP-Codes werden lokal erzeugt; Push-Login erfordert Microsoft-Backend. Minimal notwendige Nutzungsdaten werden erfasst, zusätzliche Nutzungsdaten sind per Toggle optional. Diagnose-Logs bleiben lokal bis zum manuellen Senden. Standortdaten können bei Conditional-Access-Policies genutzt werden (Koordinaten laut FAQ nicht dauerhaft gespeichert). Backup: iOS via iCloud, Android via Microsoft-Konto.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - Konto-Informationen, die du beim Hinzufügen angibst (lokal auf dem Gerät; entfernbar durch Entfernen des Kontos).  
  - Minimale, nicht-personenbezogene Nutzungsdaten (aggregiert; z.B. Erfolg/Fehlschlag wichtiger Operationen).  
  - Optional: zusätzliche nicht-personenbezogene Nutzungsdaten per „Usage Data“-Toggle.  
  - Diagnose-Logs (können personenbezogene Daten wie E-Mail/Server/IP enthalten), bleiben lokal bis „Send feedback“.  
  - Standortdaten (GPS) können bei Conditional-Access-Policies genutzt werden: Country-Name wird gespeichert/ggf. an IT-Admin gemeldet; Koordinaten laut FAQ nicht auf Microsoft-Servern gespeichert.
- **Wofür:** Betrieb/Sicherheit/Fehlerbehebung der App, Push/Sign-in-Flows, Policy-Prüfungen (z.B. Länderfreigaben), Support bei gemeldeten Problemen.
- **Weitergabe/Subprozessoren:** Nicht eindeutig Authenticator-spezifisch öffentlich angegeben (Microsoft Privacy Statement ist generisch).
- **Drittlandtransfer:** Laut Privacy Statement verarbeitet Microsoft Daten global (Details abhängig vom Dienst/Region).
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend (kostenlos).
- **Kontakt/DSAR/DPA:** DSAR/Privacy-Mechanismen über Microsoft Privacy Statement (Konten/Privacy-Portal).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Ja: minimale, nicht-personenbezogene Nutzungsdaten (laut FAQ; Akzeptanzhinweis bei Erststart).
- **Abschaltbar?** Zusätzliche Nutzungsdaten ja („Usage Data“-Toggle); Diagnose-Logs werden erst beim manuellen Senden übertragen.
- **Wo (Menüpfad):** Authenticator → **Settings** → **Usage Data** (Toggle).

**Logs & Retention:**
- **Logging-Level:** minimal (zusätzlich Diagnose-Logs lokal bis Upload).
- **Aufbewahrung:** variabel (keine festen Zeiten Authenticator-spezifisch genannt; siehe Privacy Statement).
- **Lösch-/Opt-out-Optionen:**  
  - Konto-Daten lokal löschen: Konto in Authenticator entfernen.  
  - Zusätzliche Nutzungsdaten: „Usage Data“ deaktivieren.  
  - Diagnose-Logs: nicht senden (bleiben laut FAQ nur in der App, bis aktiv übermittelt).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Für TOTP lokal (Code-Erzeugung auf dem Gerät); konkrete Kryptodetails zur Cloud-Backup-Verschlüsselung sind öffentlich nicht detailliert beschrieben.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:**  
  - TOTP/Einmalcodes (auch Drittanbieter).  
  - Push-Bestätigungen für Microsoft-Konten (privat sowie Work/School).  
  - Passkeys: Authenticator kann als Methode „Passkey in Microsoft Authenticator“ angeboten werden (Work/School; OS-abhängig).  
- **Recovery/Account-Wiederherstellung:**  
  - Backup/Wiederherstellung abhängig vom OS: iOS via iCloud, Android via Microsoft-Konto; Restore nur auf gleichem Gerätetyp (iOS→iOS, Android→Android).
- **Vuln-Handling / Security-Kontakt:** Meldung über Microsoft Security Response Center (MSRC) via Researcher Portal.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **App Lock aktivieren/prüfen**  
   **Menüpfad:** Authenticator → **Settings** → **App Lock**  
   **Prüfen:** Beim Öffnen der App wird PIN/Biometrie abgefragt.
2) **Backup bewusst konfigurieren** (nur wenn du es wirklich nutzt)  
   **Menüpfad (Android):** Authenticator → **Settings** → **Cloud backup** → Microsoft-Konto auswählen  
   **Prüfen:** Backup ist sichtbar aktiv, Restore funktioniert nur Android→Android.
3) **„Usage Data“ bewusst setzen**  
   **Menüpfad:** Authenticator → **Settings** → **Usage Data**  
   **Prüfen:** Toggle entspricht deinem Wunsch (an/aus).

**Stolpersteine:**
- Push-Bestätigungen können auf ein **altes Gerät** gehen, wenn es nicht sauber abgemeldet/unregistriert ist (Abwägung: Komfort vs. zusätzlicher Account-Hygiene-Schritt).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Kein Cloud-Backup nutzen**, wenn du mit manuellem Neuaufbau leben kannst (Abwägung: Gerätewechsel wird aufwändiger).
- **„Usage Data“ aus** lassen und **keine Diagnose-Logs senden** (Abwägung: weniger Kontext bei Supportfällen).
- **Standortrechte restriktiv setzen**, außer eine Work/School-Policy verlangt es (Abwägung: Conditional-Access kann dich sonst blockieren).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Separates Gerät** nur für Authenticator nutzen (Abwägung: zusätzliche Hardware/Komplexität).
- **Kein Push**, sondern nur TOTP (Abwägung: weniger Komfort, dafür weniger Cloud-Abhängigkeit im Auth-Flow).
- **Screen Capture aus**, minimale Berechtigungen, regelmäßiges **Unregister alter Geräte** (Abwägung: mehr Maintenance).

</details>

## Features
- TOTP/Einmalcodes (auch für Drittanbieter).
- Push-Bestätigungen für Microsoft-Konten (personal sowie Work/School; keine Pushes für Drittanbieter).
- App Lock (PIN/Biometrie) + optional Screen Capture Toggle.
- Cloud-Backup (iOS: iCloud; Android: Microsoft-Konto) inkl. Restore nur auf gleichem Gerätetyp.
- Passkeys: „Passkey in Microsoft Authenticator“ (Work/School; iOS/Android-Versionen beachten).
- Hinweis: Autofill in Microsoft Authenticator wurde laut FAQ Mitte August 2025 eingestellt.

## Alternativen
- Aegis (Android) – ähnliche Kategorie, Fokus auf lokal/offline (Abwägung: Backup/Migration stärker manuell).
- FreeOTP / FreeOTP+ – ähnliche Kategorie, minimalistische App (Abwägung: weniger Komfortfeatures).
- Yubico Authenticator – ähnliche Kategorie, Hardware-gebunden (Abwägung: zusätzlicher Token nötig).
- [Google Authenticator](/anbieter/google-authenticator/) – ähnliche Kategorie, einfacher Standard-Flow (Abwägung: Konto-/Ökosystembindung je nach Nutzung).

## Nicht gelöst / offene Punkte
- Keine öffentlich bestätigte, produkt-spezifische Subprozessorenliste für Microsoft Authenticator gefunden (Microsoft Privacy Statement ist allgemeingültig).
- Kryptografische Detailtiefe zur Cloud-Backup-Verschlüsselung/Schlüsselführung ist in den Support-Texten nicht umfassend dokumentiert.

## Quellen

- Push-Bestätigungen (nur Microsoft-Konten: "privat sowie Work/School)
- Cloud-Backup (iOS: "iCloud; Android: Microsoft-Konto)
- Passkeys: "Option „Passkey in Microsoft Authenticator“ (Work/School, OS-abhängig)
- Aegis (Android) – lokal/offline, kein Cloud-Backup (Trade-off: "Migration/Backup manuell)
- FreeOTP / FreeOTP+ – minimaler Funktionsumfang (Trade-off: "weniger Komfortfeatures)
- Yubico Authenticator – Hardware-gebunden (Trade-off: "zusätzlicher Token nötig)
- Google Authenticator – einfacher Standard-Flow (Trade-off: "Daten- & Konto-Ökosystem)
- https://msrc.microsoft.com/create-report
- [Microsoft Authenticator FAQs](https://support.microsoft.com/en-us/account-billing/microsoft-authenticator-faqs-12d283d1-bcef-4875-9ae5-ac360e2945dd)
- [Sichern Ihrer Konten in Microsoft Authenticator](https://support.microsoft.com/de-de/account-billing/sichern-ihrer-konten-in-microsoft-authenticator-bb939936-7a8d-4e88-bc43-49bc1a700a40)
- [Informationen zu Microsoft Authenticator](https://support.microsoft.com/en-us/account-billing/about-microsoft-authenticator-9783c865-0305-4700-a09b-f7dcefc6ba39)
- [Wiederherstellen von Kontoanmeldeinformationen auf einem neuen Gerät](https://support.microsoft.com/en-us/account-billing/restore-account-credentials-on-a-new-device-a558b1e8-69c8-4681-aa56-c6fc3b971a7a)
- [Signing in with a passkey](https://support.microsoft.com/en-us/account-billing/signing-in-with-a-passkey-09a49a86-ca47-406c-8acc-ed0e3c852c6d)
- [Microsoft Privacy Statement](https://privacy.microsoft.com/en-us/privacystatement)
- [Microsoft-Servicevertrag](https://www.microsoft.com/de-de/servicesagreement)
- [MSRC Researcher Portal – Create Report](https://msrc.microsoft.com/create-report)
