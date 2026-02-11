---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / WhatsApp"
url: "/anbieter/whatsapp/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-19"
robots: "index,follow"
description: "Kurzprofil von WhatsApp (Kategorie: Messenger)."
provider: ""
name: "WhatsApp"
category: "Messenger"
website: "https://www.whatsapp.com/"
repo: "https://github.com/WhatsApp"
license: "Proprietär (App); einzelne Repos mit eigener Lizenz"
policies: ""
privacy: "https://www.whatsapp.com/legal/privacy-policy-eea"
terms: "https://www.whatsapp.com/legal/terms-of-service-eea"
transparency: "https://www.whatsapp.com/transparency"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "partial"
self_host_possible: "no"
account_required: "yes"
phone_required: "yes"
kyc_required: "no"
jurisdiction: "Irland (WhatsApp Ireland Limited, EEA) / USA (WhatsApp LLC, je nach Region)"
region: "us"
logs: "minimal"
retention: "long"
retention_notes: "Undeliverte Nachrichten bis 30 Tage; Troubleshooting/Debugging-Daten i.d.R. bis 90 Tage (weitere Regeln laut Privacy Policy)"
retention_max_days: "90"
data_notes: "Chats/Anrufe sind standardmäßig Ende-zu-Ende verschlüsselt; Metadaten (z.B. Verbindungs-/Nutzungsdaten) fallen dennoch an. Cloud-Backups laufen über Drittanbieter (Google Drive/iCloud) und können optional als Ende-zu-Ende verschlüsseltes Backup aktiviert werden."
features: ""
alternatives: ""
payment_processors: "Nicht angegeben"
sources: ""
---
## Kurzprofil

WhatsApp ist ein Anbieter aus der Kategorie **Messenger**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen verbreiteten Messenger brauchst und Ende-zu-Ende-Verschlüsselung für Chats/Anrufe im Standard willst.
- **Weniger geeignet wenn:** du Metadaten (z.B. Nutzungs- und Verbindungsdaten) möglichst stark reduzieren willst oder ein Konto ohne Telefonnummer brauchst.
- **Wichtigster Abwägung:** Reichweite/Komfort vs. Metadaten & Anbieter-Ökosystem (inkl. Datentransfers/Verarbeitung innerhalb globaler Infrastruktur).

## Sofortmaßnahmen
- **2-Stufen-Verifizierung aktivieren:** reduziert Risiko von Account-Übernahme via SMS/Registrierungscodes.
- **Passkey einrichten:** macht Logins/Verifizierung robuster gegen SIM-Swap/Phishing.
- **Ende-zu-Ende verschlüsseltes Backup aktivieren:** schützt Chat-Backups zusätzlich vor Zugriff ohne deinen Schlüssel.

## Entscheidungshilfe
- Wenn du **E2E-Chats/Anrufe als Default** willst, dann nutze WhatsApp wie vorgesehen (Abwägung: Verbindungs-/Nutzungsdaten fallen weiterhin an).
- Wenn du **Account-Sicherheit gegen Übernahmen** erhöhen willst, dann aktiviere **2-Stufen-Verifizierung + Passkey** (Abwägung: mehr Aufwand bei Gerätewechsel/Recovery).
- Wenn du **Cloud-Backups** nutzt, dann aktiviere **Ende-zu-Ende verschlüsseltes Backup** (Abwägung: ohne Schlüssel/Passkey keine Wiederherstellung möglich).
- Wenn du **Datenweitergabe im Meta-Ökosystem minimieren** willst, dann prüfe konsequent **Privacy-Einstellungen + Berechtigungen** (Abwägung: Komfortfunktionen können eingeschränkt sein).
- Wenn du **kein Telefon als Identifier** willst, dann ist ein anderes Account-Modell relevant (Abwägung: anderer Messenger/Netzwerkeffekt).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | WhatsApp |
| Kategorie | Messenger |
| Website | https://www.whatsapp.com/ |
| Quellcode | https://github.com/WhatsApp |
| Lizenz | Proprietär (App); einzelne Repos mit eigener Lizenz |
| Preismodell | free |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | yes |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Irland (WhatsApp Ireland Limited, EEA) / USA (WhatsApp LLC, je nach Region) |
| Logs | minimal |
| Retention | Undeliverte Nachrichten bis 30 Tage; Troubleshooting/Debugging-Daten i.d.R. bis 90 Tage (weitere Regeln laut Privacy Policy) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.whatsapp.com/legal/privacy-policy-eea
- AGB/Terms: https://www.whatsapp.com/legal/terms-of-service-eea
- Transparency Report: https://www.whatsapp.com/transparency
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Chats/Anrufe sind standardmäßig Ende-zu-Ende verschlüsselt; Metadaten (z.B. Verbindungs-/Nutzungsdaten) fallen dennoch an. Cloud-Backups laufen über Drittanbieter (Google Drive/iCloud) und können optional als Ende-zu-Ende verschlüsseltes Backup aktiviert werden.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** u.a. Account-Informationen (z.B. Telefonnummer), Geräte-/Verbindungsinformationen, Nutzungsinformationen, User Choices; zusätzlich Inhalte wie Nachrichten/Calls sind zwar E2E-verschlüsselt, aber Zustell-/Nutzungsmetadaten bleiben relevant.
- **Wofür:** Betrieb/Erbringung der Dienste, Sicherheit/Integrität, Missbrauchsbekämpfung, Support/Debugging sowie rechtliche Pflichten (Details in Privacy Policy).
- **Weitergabe/Subprozessoren:** globaler Austausch innerhalb der Meta-Unternehmen sowie Weitergabe an Drittanbieter-Dienstleister und weitere Kategorien (z.B. Behörden bei rechtlichen Anforderungen) gemäß Privacy Policy.
- **Drittlandtransfer:** laut Privacy Policy werden Daten außerhalb der EEA verarbeitet/übertragen; genannt werden u.a. Angemessenheitsbeschlüsse, EU-US Data Privacy Framework und Standardvertragsklauseln (SCC).
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (für Standard-Messenger-Nutzung kein Checkout dokumentiert).
- **Kontakt/DSAR/DPA:** Kontakt- und DPO-Hinweise sind in der Privacy Policy enthalten (inkl. Postadresse).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy fallen u.a. Log- und Troubleshooting-Informationen an (z.B. für Debugging/Sicherheit/Betrieb).
- **Abschaltbar?** Nicht angegeben (prüfe In-App „Privacy Checkup“/Privatsphäre-Einstellungen und OS-Berechtigungen).
- **Wo (Menüpfad):** z.B. *Einstellungen → Privatsphäre* (Privacy/Checkup-Features sind im Help Center beschrieben).

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** undeliverte Nachrichten bis 30 Tage; Troubleshooting/Debugging-Infos i.d.R. bis 90 Tage; Konto-/Löschprozesse können bis zu 90 Tage dauern (Details in Privacy Policy).
- **Lösch-/Opt-out-Optionen:** Konto kann in der App gelöscht werden; bei Inaktivität werden Accounts typischerweise nach längerer Zeit gelöscht (laut Privacy Policy/Help Center).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Chats/Calls sind Ende-zu-Ende verschlüsselt; unzustellbare Nachrichten werden für Zustellversuche temporär (bis 30 Tage) auf Servern vorgehalten.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2-Stufen-Verifizierung (PIN) und Passkeys werden im Help Center beschrieben; App-Lock als zusätzliche lokale Sperre.
- **Recovery/Account-Wiederherstellung:** 2-Stufen-Verifizierung kann optional mit E-Mail für Reset kombiniert werden; bei E2E-Backups ist Wiederherstellung ohne Passwort/Key/Passkey nicht möglich.
- **Vuln-Handling / Security-Kontakt:** WhatsApp veröffentlicht Security Advisories mit CVEs; ein dedizierter Disclosure-Prozess/Contact für Reports ist nicht zentral auf einer SECURITY.md dokumentiert.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren (2-Stufen-Verifizierung + Passkey)**  
   - 2-Stufen-Verifizierung: *Einstellungen → Account → Two-step verification*  
   - Passkey: *⋮ (More Options) → Settings → Account → Passkeys → Create passkey*  
   **Prüfen:** PIN aktiv + Passkey vorhanden (Help Center bestätigt Schritte).
2) **App-Lock aktivieren** (Biometrie/Passwort)  
   - Android/iOS: *⋮ → Settings → Privacy → App lock*  
   **Prüfen:** App sperrt nach definierter Zeit; entsperren nur per Biometrie/Passwort.
3) **Backups bewusst konfigurieren**  
   - E2E-Backup: *Settings → Chats → Chat Backup → End-to-end encrypted backup*  
   **Prüfen:** Backup-Schutz ist aktiv; Schlüssel/Passkey sicher verwahrt.

**Stolpersteine:**
- Ende-zu-Ende verschlüsselte Backups sind nur wiederherstellbar, wenn Passwort/Key/Passkey verfügbar ist (Abwägung: Privatsphäre vs. Recovery).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Privatsphäre-Einstellungen durchgehen** (z.B. wer Profilbild/Status/Zuletzt online sieht; „Privacy Checkup“ nutzen).
- **Berechtigungen minimieren** (z.B. Standort nur bei Bedarf, Kontakte nur wenn nötig für Komfortfunktionen).
- **Cloud-Backup nur wenn nötig**; sonst lokale Gerätesicherheit/Backups getrennt denken.  
**Abwägung:** weniger Komfort bei Kontakte/Sync/Recovery.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Gerät & WhatsApp isolieren** (separates Nutzerprofil/Arbeitsprofil, getrennte SIM/eSIM je nach Risiko-Modell).
- **Striktes Locking** (App-Lock + Chat-Lock für sensible Chats; Benachrichtigungsinhalte ausblenden).
- **Netzwerk-/Link-Hygiene** (keine automatischen Medien-Downloads, Vorsicht bei unbekannten Dateien/Links).  
**Abwägung:** deutlich mehr Aufwand, höhere Fehleranfälligkeit im Alltag.

</details>

## Features
- Ende-zu-Ende verschlüsselte Chats & Anrufe (Standard)
- Gruppen/Communities/Channels
- Verschwinden­de Nachrichten, „View Once“
- App-Lock/Chat-Lock (zusätzliche lokale Sperre)
- Passkeys & 2-Stufen-Verifizierung (PIN)
- Optional: Ende-zu-Ende verschlüsselte Backups

## Alternativen
- Signal (anderer Schwerpunkt: eigenes Netzwerk/Client-Ökosystem; Abwägung: Kontakte müssen ggf. umsteigen)
- Threema (anderer Schwerpunkt: anderes Account-/Vertriebsmodell; Abwägung: geringere Verbreitung je nach Umfeld)
- Element (anderer Schwerpunkt: Matrix-Ökosystem; Abwägung: mehr Einrichtung/Komplexität möglich)
- Wire (anderer Schwerpunkt: Team-/Business-orientierte Nutzung möglich; Abwägung: anderes Ökosystem)

## Nicht gelöst / offene Punkte
- Öffentliche, vollständige Subprozessorenliste für den Consumer-Messenger ist nicht klar auffindbar.
- Offizieller Vulnerability-Reporting/Disclosure-Kanal ist nicht als zentraler Prozess dokumentiert.

## Quellen

- Optional: "Ende-zu-Ende verschlüsselte Backups
- Signal (anderer Schwerpunkt: "eigenes Netzwerk/Client-Ökosystem; Trade-off: Kontakte müssen ggf. umsteigen)
- Threema (anderer Schwerpunkt: "anderes Account-/Vertriebsmodell; Trade-off: geringere Verbreitung je nach Umfeld)
- Element (anderer Schwerpunkt: "Matrix-Ökosystem; Trade-off: mehr Setup/Komplexität möglich)
- Wire (anderer Schwerpunkt: "Team-/Business-orientierte Nutzung möglich; Trade-off: anderes Ökosystem)
- [WhatsApp – Privacy Policy (EEA)](https://www.whatsapp.com/legal/privacy-policy-eea)
- [WhatsApp – Terms of Service (EEA)](https://www.whatsapp.com/legal/terms-of-service-eea)
- [WhatsApp – Transparency Reports](https://www.whatsapp.com/transparency)
- [WhatsApp – Security Advisories](https://www.whatsapp.com/security/advisories)
- [WhatsApp Help Center – About end-to-end encryption](https://faq.whatsapp.com/820124435853543)
- [WhatsApp Help Center – About end-to-end encrypted backup](https://faq.whatsapp.com/490592613091019)
- [WhatsApp Help Center – About two-step verification](https://faq.whatsapp.com/1278661612895630)
- [WhatsApp Help Center – Create a passkey](https://faq.whatsapp.com/1850567238795036)
- [WhatsApp Help Center – How to use app lock](https://faq.whatsapp.com/1726618467788240)
- [GitHub – WhatsApp Organization](https://github.com/WhatsApp)
- [WhatsApp – Privacy Policy (EEA)](https://www.whatsapp.com/legal/privacy-policy-eea)
- [WhatsApp – Terms of Service (EEA)](https://www.whatsapp.com/legal/terms-of-service-eea)
- [WhatsApp – Transparency Reports](https://www.whatsapp.com/transparency)
- [WhatsApp – Security Advisories](https://www.whatsapp.com/security/advisories)
- [WhatsApp Help Center – About end-to-end encryption](https://faq.whatsapp.com/820124435853543)
- [WhatsApp Help Center – About end-to-end encrypted backup](https://faq.whatsapp.com/490592613091019)
- [WhatsApp Help Center – About two-step verification](https://faq.whatsapp.com/1278661612895630)
- [WhatsApp Help Center – Create a passkey](https://faq.whatsapp.com/1850567238795036)
- [WhatsApp Help Center – How to use app lock](https://faq.whatsapp.com/1726618467788240)
- [GitHub – WhatsApp Organization](https://github.com/WhatsApp)
