---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Proton Drive"
url: "/anbieter/proton-drive/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von Proton Drive (Kategorie: Cloud & Sync)."
provider: ""
name: "Proton Drive"
category: "Cloud & Sync"
website: "https://proton.me/drive"
repo: "https://github.com/ProtonDriveApps"
license: "Nicht angegeben"
policies: ""
privacy: "https://proton.me/drive/privacy-policy"
terms: "Nicht angegeben"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "partial"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "unknown"
kyc_required: "no"
jurisdiction: "Schweiz (Proton AG, Genf)"
region: "ch"
logs: "configurable"
retention: "mid"
retention_notes: "Temporär (Anti-Abuse) / solange Auth-Logging aktiv (Opt-in); gelöschte Datei-Backups: bis zu 30 Tage"
retention_max_days: "30"
data_notes: "Datei-Inhalte werden Ende-zu-Ende verschlüsselt; der Anbieter verarbeitet Metadaten (z.B. Datei-/Ordnernamen, Größe, Zeitstempel) und Account-/Abuse-Daten (z.B. IP-Logs temporär)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Proton Drive ist ein Anbieter aus der Kategorie **Cloud & Sync**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Cloud-Speicher mit **Ende-zu-Ende-/Zero-Access-Verschlüsselung** nutzen willst und damit leben kannst, dass bei einem Cloud-Dienst **Metadaten** anfallen.
- **Weniger geeignet wenn:** du ohne Account arbeiten willst oder **maximal wenig Metadaten/Serverkontakt** (z.B. rein lokal/offline) benötigst.
- **Wichtigster Abwägung:** **Verschlüsselte Inhalte** vs. **unvermeidbare Metadaten + Account-/Abuse-Logs** bei einem Online-Dienst.

## Sofortmaßnahmen
- **2FA aktivieren:** reduziert Risiko durch Passwort-Leaks bei Account-Zugriff.
- **FIDO2/U2F-Security-Key ergänzen:** senkt Phishing-Risiko gegenüber reinen Einmalcodes.
- **Sharing-Links härten:** Passwort + Ablaufdatum verringern Weitergabe- und „Link-Leak“-Risiko.

## Entscheidungshilfe
- Wenn du willst, dass der Anbieter **Datei-Inhalte nicht im Klartext lesen kann**, dann nutze Proton Drive (Abwägung: Dateinamen/Ordnernamen und Zeitstempel können als Metadaten verarbeitet werden).
- Wenn du Dateien teilst, dann nutze **Passwortschutz + Ablaufdatum** für Freigabelinks (Abwägung: Passwort muss sicher verteilt werden).
- Wenn du in einer Umgebung mit Netzsperren arbeitest, dann ist **Alternative Routing/Tor-Zugriff** relevant (Abwägung: ggf. langsamer/mehr Netzpfad-Metadaten bei Dritt-Netzen).
- Wenn du dein Risiko durch Account-Übernahme senken willst, dann aktiviere **2FA + Security Key** (Abwägung: Recovery wird wichtiger, sonst kann Zugang verloren gehen).
- Wenn du die **Telefonnummer vermeiden** willst, dann plane Signup/Verifikation ein (Abwägung: SMS-Verifizierung kann in Einzelfällen als „Human verification“ auftauchen).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Proton Drive |
| Kategorie | Cloud & Sync |
| Website | https://proton.me/drive |
| Quellcode | https://github.com/ProtonDriveApps |
| Lizenz | Nicht angegeben |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | no |
| Zahlungsabwicklung | Chargebee (Billing) + Stripe/PayPal (Payment) *(laut Proton Privacy Policy)* |
| Jurisdiktion | Schweiz (Proton AG, Genf) |
| Logs | configurable |
| Retention | Temporär (Anti-Abuse) / solange Auth-Logging aktiv (Opt-in); gelöschte Datei-Backups: bis zu 30 Tage |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://proton.me/drive/privacy-policy
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Security audit of Proton Drive application for Android platform (Securitum, PDF): https://res.cloudinary.com/dbulfrlrz/images/v1714632045/wp-pme/Securitum_Proton_Drive_mobile_Android_32414504a1/Securitum_Proton_Drive_mobile_Android_32414504a1.pdf?_i=AA

**Daten-Notizen (kurz):**
- Inhalte werden clientseitig Ende-zu-Ende verschlüsselt; zusätzlich fallen **Metadaten** (z.B. Namen/Größe/Zeitstempel) an, die für den Betrieb/Sharing nötig sind.
- Account-/Abuse-Schutz kann **temporäre IP-Logs** bedeuten; optional existieren **Auth-Logs** (Opt-in) laut Proton Privacy Policy.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Accountdaten (z.B. externe Adresse optional), temporäre Daten für Verifikation/Anti-Abuse, Zahlungsdaten (bei Upgrade), sowie bei Proton Drive **Metadaten** zu Dateien/Ordnern (z.B. Namen/Größe/Erstell- und Änderungszeit).
- **Wofür:** Bereitstellung des Dienstes (Speichern/Sync/Sharing), Missbrauchs- und Betrugsabwehr, Abrechnung/Belege, Support.
- **Weitergabe/Subprozessoren:** Proton nennt u.a. Zendesk (Support), Chargebee (Billing) sowie Stripe/PayPal (Zahlungsabwicklung) in der allgemeinen Privacy Policy.
- **Drittlandtransfer:** Nicht eindeutig produktbezogen ausgeführt; Prozessoren können laut Privacy Policy außerhalb der Schweiz/EU arbeiten (z.B. USA/Singapur) mit genannten Transfer-Garantien.
- **Zahlungsabwicklung/Payment Processor:** Chargebee + Drittanbieter wie Stripe/PayPal (bei Kartenzahlung/PayPal).
- **Kontakt/DSAR/DPA:** Rechteausübung laut Proton Privacy Policy über Account-Interface bzw. Support/Legal-Kontakt.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar (Proton nennt, dass native Apps u.a. Crash-Reporting/App-Statistiken nutzen können).
- **Abschaltbar?** Nicht angegeben.
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** configurable (IP-Logging standardmäßig nicht permanent; Auth-Logs als Opt-in möglich).
- **Aufbewahrung:** temporär für Anti-Abuse; Auth-Logs solange Feature aktiv; gelöschte Datei-Backups bis zu 30 Tage.
- **Lösch-/Opt-out-Optionen:** Auth-Logs laut Proton Privacy Policy löschbar durch Deaktivierung; für Crash/Analytics nicht konkret beschrieben.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Proton Drive nennt Ende-zu-Ende- und „Zero-Access“-Verschlüsselung; Kryptografie über OpenPGP, ECC Curve25519, Chunking großer Dateien (4 MB) und Signaturen zur Integritätsprüfung.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Proton Account unterstützt 2FA per Authenticator-App (TOTP) und zusätzlich Security Keys (U2F/FIDO2) als zweiten Faktor.
- **Recovery/Account-Wiederherstellung:** Recovery-Möglichkeiten (E-Mail/Telefon/Recovery Phrase) sind über Proton Account dokumentiert; bei Passwort-Reset kann Inhalt weiterhin verschlüsselt bleiben (Recovery-Abwägung).
- **Vuln-Handling / Security-Kontakt:** Bug-Bounty ist für Proton Drive genannt; konkreter Disclosure-Prozess für Proton Drive nicht separat beschrieben.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **2FA aktivieren (Authenticator-App/TOTP)**  
   **Menüpfad:** `account.proton.me → Settings → All settings → Account and password → Two-factor authentication`  
   **Prüfen:** Login von neuem Gerät fordert 2FA-Code + Recovery-Codes sind gespeichert.
2) **Security Key (FIDO2/U2F) ergänzen (optional)**  
   **Menüpfad:** `account.proton.me → Settings → All settings → Account and password → Two-factor authentication → Security key`  
   **Prüfen:** Key ist registriert; Login akzeptiert Key als 2FA.
3) **Sharing-Links härten (wenn du teilst): Passwort + Ablaufdatum**  
   **Prüfen:** Link zeigt Passwortschutz/Ablaufdatum in den Share-Optionen; Zugriff ohne Passwort scheitert.

**Stolpersteine:**
- Recovery-Optionen (Recovery-Mail/Telefon) können Identitätsdaten erhöhen (Abwägung: Support/Recovery vs. Metadaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze soweit möglich **minimale Account-Daten** (Recovery-Optionen nur, wenn nötig).
- Teile Dateien eher **gezielt** (Passwort + Ablaufdatum), statt „dauerhafte Links“ zu erzeugen.
- Beachte Metadaten: Ordnerstruktur/Dateinamen so wählen, dass sie bei Exposure weniger preisgeben.  
**Abwägung:** weniger Komfort bei Recovery/Sharing, mehr Disziplin nötig.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Zugriff über **Tor Onion** oder alternative Routing nutzen, wenn Netzüberwachung/Zensur im Raum steht.
- Proton Drive nur in **getrennten Nutzerprofilen** (Browser/OS) nutzen, um Identitäts-/Cookie-Kopplung zu reduzieren.
- Striktes Sharing: nur kurzlebige Links, möglichst keine Weiterverteilung.  
**Abwägung:** deutlicher Komfortverlust, mehr Komplexität und potenziell geringere Performance.

</details>

## Features
- Ende-zu-Ende- und Zero-Access-Verschlüsselung für Dateien/Ordner
- Link-Sharing mit optionalem Passwort und Ablaufdatum
- Alternative Routing und Tor-Onion-Zugriff (Zensurumgehung)
- Open-Source-Apps (Client-seitig) und veröffentlichte Audit-Berichte (laut Anbieter)

## Alternativen
- Nextcloud (Self-Hosting möglich, Abwägung: eigener Betrieb/Updates/Backups)
- Tresorit (gehosteter Dienst, Abwägung: proprietär/Accountbindung)
- Cryptomator + beliebige Cloud (Client-seitig verschlüsselt, Abwägung: mehr Einrichtung/Key-Management)

## Nicht gelöst / offene Punkte
- Unklar, ob und wie **Crash-Reporting/Diagnosedaten** in Proton-Drive-Apps deaktivierbar sind.

## Quellen

- Security audit of Proton Drive application for Android platform (Securitum, PDF): "https://res.cloudinary.com/dbulfrlrz/images/v1714632045/wp-pme/Securitum_Proton_Drive_mobile_Android_32414504a1/Securitum_Proton_Drive_mobile_Android_32414504a1.pdf?_i=AA
- Nextcloud (Self-Hosting möglich, Trade-off: "eigener Betrieb/Administration)
- Tresorit (gehosteter Dienst, Trade-off: "proprietär/Accountbindung)
- Cryptomator + beliebige Cloud (Client-seitig, Trade-off: "mehr Setup/Key-Management)
- [Proton Drive](https://proton.me/drive)
- [Proton Drive Privacy Policy](https://proton.me/drive/privacy-policy)
- [Privacy Policy | Proton](https://proton.me/legal/privacy)
- [Proton Drive Security](https://proton.me/drive/security)
- [Payment options (Support)](https://proton.me/support/payment-options)
- [Human verification (Support)](https://proton.me/support/human-verification)
- [How to create a free email account (Support)](https://proton.me/support/create-a-free-email-account-address)
- [Two-factor authentication (2FA) (Support)](https://proton.me/support/two-factor-authentication-2fa)
- [2FA security key (Support)](https://proton.me/support/2fa-security-key)
- [Proton Drive Android Security Audit (Securitum, PDF)](https://res.cloudinary.com/dbulfrlrz/images/v1714632045/wp-pme/Securitum_Proton_Drive_mobile_Android_32414504a1/Securitum_Proton_Drive_mobile_Android_32414504a1.pdf?_i=AA)
- [Proton Drive mobile apps are now open source (Blog)](https://proton.meproton-drive-mobile-apps-open-source)
- [Proton Drive](https://proton.me/drive)
- [Proton Drive Privacy Policy](https://proton.me/drive/privacy-policy)
- [Privacy Policy | Proton](https://proton.me/legal/privacy)
- [Proton Drive Security](https://proton.me/drive/security)
- [Payment options (Support)](https://proton.me/support/payment-options)
- [Human verification (Support)](https://proton.me/support/human-verification)
- [How to create a free email account (Support)](https://proton.me/support/create-a-free-email-account-address)
- [Two-factor authentication (2FA) (Support)](https://proton.me/support/two-factor-authentication-2fa)
- [2FA security key (Support)](https://proton.me/support/2fa-security-key)
- [Proton Drive Android Security Audit (Securitum, PDF)](https://res.cloudinary.com/dbulfrlrz/images/v1714632045/wp-pme/Securitum_Proton_Drive_mobile_Android_32414504a1/Securitum_Proton_Drive_mobile_Android_32414504a1.pdf?_i=AA)
- [Proton Drive mobile apps are now open source (Blog)](https://proton.meproton-drive-mobile-apps-open-source)
