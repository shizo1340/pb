---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / 2FAS"
url: "/anbieter/2fas/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-06"
robots: "index,follow"
description: "Kurzprofil von 2FAS (Kategorie: 2FA)."
provider: ""
name: "2FAS"
category: "2FA"
website: "https://2fas.com/"
repo: "https://github.com/twofas/2fas-android"
license: "GPL-3.0 (laut GitHub)"
policies: ""
privacy: "https://2fas.com/auth/privacy-policy/"
terms: "https://2fas.com/auth/eula/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: "Nicht angegeben"
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "unknown"
account_required: "no"
phone_required: "unknown"
kyc_required: "no"
jurisdiction: "USA (Delaware; Anbieteradresse u.a. in Henderson, Nevada genannt)"
region: "us"
logs: "minimal"
logs_notes: "Anonyme Crash-Reports (Firebase Crashlytics) optional/abschaltbar"
retention: "unknown"
data_notes: "Laut Anbieter werden keine Schlüssel/Tokens/Passwörter/PINs übertragen oder gesammelt; Analytics seien entfernt, außer optionalen anonymen Crash-Reports (Firebase Crashlytics). Tokens/Keys werden lokal gespeichert; bei iCloud/Google-Drive-Backup bzw. Export/Import werden Verschlüsselung/Passwortschutz beschrieben, Details zu Verfahren/Retention/Subprozessoren bleiben teils unklar."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

2FAS ist ein Anbieter aus der Kategorie **2FA**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen **Authenticator ohne Konto** suchst, der **lokal/offline** funktioniert und Backup/Transfer über **Export** oder **iCloud/Google Drive** abdecken kann.
- **Weniger geeignet wenn:** du **keine** Berührung mit Drittanbietern wie **Apple/Google** (bei Cloud-Backup) oder **Firebase** (bei optionalen Crash-Reports/Push) möchtest.
- **Wichtigster Abwägung:** **Komfort (Sync/Push/Crash-Reports)** vs. **Metadaten/Third-Party-Abhängigkeiten**.

## Sofortmaßnahmen
- **Anonyme Crash-Reports deaktivieren:** reduziert diagnostische Metadaten, die sonst an Firebase Crashlytics gehen können.
- **Backup/Export immer mit Passwort nutzen:** minimiert Risiko bei Datei-/Cloud-Zugriff, weil Export laut Support dann verschlüsselt ist.
- **Widget kritisch prüfen/abschalten:** Tokens im Widget sind laut Support nicht durch PIN/Biometrie geschützt (Abwägung: schneller Zugriff vs. Sichtbarkeit am Lockscreen/Home).

## Entscheidungshilfe
- Wenn du 2FA **ohne Konto** nutzen willst, dann verwende 2FAS nur lokal auf dem Gerät (Abwägung: Wiederherstellung liegt komplett bei dir).
- Wenn du mehrere Geräte nutzen willst, dann aktiviere **Google Drive/iCloud Sync** bzw. nutze **Export/Import** über „2FAS Backup“ (Abwägung: Cloud-/Datei-Handling erhöht die Angriffsfläche und Abhängigkeit von Apple/Google).
- Wenn du Debugging/Support unterstützen willst, dann kannst du **anonyme Crash-Reports** aktivieren (Abwägung: zusätzliche Diagnosedaten an einen Drittanbieter).
- Wenn du „One-Tap“-Komfort am Desktop willst, dann nutze die **Browser-Erweiterung** (Abwägung: Push/Kommunikationspfad kommt dazu; sinnvoll nur, wenn du den Use-Case wirklich brauchst).
- Wenn du möglichst wenig Metadaten möchtest, dann bleib bei **offline Nutzung ohne Cloud-Sync und ohne Browser-Extension** (Abwägung: weniger Komfort bei Transfer/Recovery).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | 2FAS |
| Kategorie | 2FA |
| Website | https://2fas.com/ |
| Quellcode | https://github.com/twofas/2fas-android |
| Lizenz | GPL-3.0 (laut GitHub) |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | unknown |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben (Nutzung kostenlos; Spenden möglich, Zahlungsdienstleister nicht klar benannt) |
| Jurisdiktion | USA (Delaware; Anbieteradresse u.a. in Henderson, Nevada genannt) |
| Logs | Anonyme Crash-Reports (Firebase Crashlytics) optional/abschaltbar |
| Retention | Nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://2fas.com/auth/privacy-policy/
- AGB/Terms: https://2fas.com/auth/eula/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Laut Anbieter werden keine Schlüssel/Tokens/Passwörter/PINs übertragen oder gesammelt; Analytics seien entfernt, außer optionalen anonymen Crash-Reports (Firebase Crashlytics). Tokens/Keys werden lokal gespeichert; bei iCloud/Google-Drive-Backup bzw. Export/Import werden Verschlüsselung/Passwortschutz beschrieben, Details zu Verfahren/Retention/Subprozessoren bleiben teils unklar.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** laut Support/Privacy keine Analytics; optional können anonyme Crash-Reports anfallen (Crashlytics). Bei Nutzung der Browser-Extension/Push können technische Daten an Drittanbieter-Infrastruktur (z.B. Firebase) übertragen werden.
- **Wofür:** Stabilität/Fehlerdiagnose (Crash-Reports) und Funktionsbetrieb (z.B. Push/Browser-Extension).
- **Weitergabe/Subprozessoren:** genannt wird u.a. Firebase (Crashlytics/Push); bei Cloud-Backup liegen Daten (verschlüsselt) in iCloud bzw. Google Drive.
- **Drittlandtransfer:** Nicht angegeben / Unklar.
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben / Unklar (App ist kostenlos; Spenden möglich).
- **Kontakt/DSAR/DPA:** Nicht angegeben / Unklar.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Support: keine Analytics; Crash-Reports (Crashlytics) werden verwendet, aber opt-out ist möglich.
- **Abschaltbar?** Ja (Opt-out per Toggle in der App laut Support).
- **Wo (Menüpfad):** Nicht angegeben (in der App nach „Anonymous Crash Reports“/„Crash Reports“ suchen).

**Logs & Retention:**
- **Logging-Level:** Anonyme Crash-Reports (Firebase Crashlytics) optional/abschaltbar
- **Aufbewahrung:** Nicht angegeben
- **Lösch-/Opt-out-Optionen:** Opt-out für Crash-Reports laut Support; Lösch-Details/Retention nicht angegeben.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** laut Support/Produktseiten werden Backup/Sync mit **Ende-zu-Ende-Verschlüsselung** beschrieben; Export mit Passwort soll Daten verschlüsseln.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben / Unklar.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (Produkt ist selbst 2FA-App für TOTP/HOTP).
- **Recovery/Account-Wiederherstellung:** ohne Konto; Wiederherstellung über iCloud/Google Drive Sync oder Export/Import (2FAS Backup) laut Support.
- **Vuln-Handling / Security-Kontakt:** Security-Meldung via security@2fas.com (GitHub Security Policy).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **App-Sperre aktivieren (PIN/Biometrie)**, falls du das Gerät nicht ausschließlich selbst nutzt.  
   **Prüfen:** App fragt beim Öffnen nach PIN/Biometrie (nach Timeout/Lock).
2) **Crash-Reports deaktivieren**, wenn du keine Diagnosedaten senden willst.  
   **Prüfen:** „Anonymous Crash Reports“ steht auf „aus“ (Bezeichnung kann abweichen).
3) **Backup/Transfer sauber einrichten:** im Menü **„2FAS Backup“** Sync aktivieren oder Export/Import nutzen – **Export bevorzugt mit Passwort**.  
   **Prüfen:** Export-Datei lässt sich ohne Passwort nicht sinnvoll lesen; Import auf Zweitgerät funktioniert.

**Stolpersteine:**
- **Widget:** Tokens im Widget sind laut Support **nicht** durch PIN/Biometrie geschützt (auch wenn sie standardmäßig verborgen sind).  
  Abwägung: Schnellzugriff vs. Sichtbarkeit auf Homescreen/Locksreen.
- **Cloud-Sync:** iCloud/Google Drive reduziert Aufwand bei Gerätewechsel, erhöht aber Abhängigkeit von Apple/Google (Abwägung: Komfort vs. zusätzliche Drittpartei).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Kein Cloud-Sync:** nutze nur lokalen Speicher + **Export/Import** bei Gerätewechsel (im Menü „2FAS Backup“).  
- **Keine Browser-Extension**, wenn du Push/Kommunikationspfade minimieren willst.  
- **Crash-Reports deaktiviert lassen** und nur bei Fehlersuche temporär aktivieren.

**Abwägung:** mehr Eigenverantwortung bei Recovery/Transfer; weniger Komfort beim Gerätewechsel.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Offline-First strikt:** kein Cloud-Sync, keine Browser-Extension, keine Crash-Reports.  
- **Separates Gerät/Profil** nur für 2FA-Codes (z.B. altes Smartphone ohne Alltags-Apps).  
- **Backups ausschließlich manuell & passwortgeschützt**, Datei zusätzlich in einem getrennten, verschlüsselten Speicher ablegen.

**Abwägung:** deutlich weniger Komfort; Transfer/Recovery wird aufwändiger und fehleranfälliger.

</details>

## Features
- TOTP/HOTP (Authenticator-App)
- Offline nutzbar (Codes lokal)
- Kein Account erforderlich
- Open Source (Android/iOS, weitere Repos öffentlich)
- Backup/Sync (iCloud/Google Drive) sowie Export/Import (2FAS-Backup-Dateien)
- Optionale Browser-Erweiterung (2FAS Auth)

## Alternativen

- **Ägis (Android):** Fokus auf lokale Nutzung/Android-Ökosystem (Abwägung: Plattformbindung).
- **Tofu (iOS):** iOS-fokussiert (Abwägung: Plattformbindung).
- **Ente Auth (iOS/Android):** andere Sync-/Ökosystem-Entscheidungen (Abwägung: je nach Einrichtung mehr Komponenten).

## Nicht gelöst / offene Punkte
- **Subprozessorenliste / Datenweitergabe im Detail:** öffentlich nicht als vollständige Liste auffindbar; Firebase wird genannt, Details zu weiteren Dienstleistern unklar.
- **Retention/Löschung:** konkrete Aufbewahrungsfristen für Crash-Reports/Diagnosedaten sind nicht angegeben.
- **Kryptografie-Details:** E2E/Passwortschutz wird beschrieben, aber Verfahren/Parameter (z.B. KDF) sind nicht öffentlich konkretisiert.

## Quellen

- [2FAS Auth (Produktseite)](https://2fas.com/auth/)
- [2FAS Auth – Privacy Policy](https://2fas.com/auth/privacy-policy/)
- [2FAS Auth – EULA](https://2fas.com/auth/eula/)
- [2FAS – Terms of Service](https://2fas.com/website/terms-of-service/)
- [2FAS – About Us (Adresse/Impressum-ähnlich)](https://2fas.com/about-us/)
- [Support: "How do you earn money?](https://2fas.com/support/donations/how-do-you-earn-money/)
- [Donate to 2FAS](https://2fas.com/donate/)
- [Donor Privacy Policy](https://2fas.com/donor-privacy-policy/)
- [GitHub Repo: "twofas/2fas-browser-extension](https://github.com/twofas/2fas-browser-extension)
- [GitHub Security Policy (2fas-android)](https://github.com/twofas/2fas-android/security)
- [2FAS Browser Extension (Produktseite)](https://2fas.com/auth/browser-extension/)
- [2FAS Auth (Produktseite)](https://2fas.com/auth/)
- [2FAS Auth – Privacy Policy](https://2fas.com/auth/privacy-policy/)
- [2FAS Auth – EULA](https://2fas.com/auth/eula/)
- [2FAS – Terms of Service](https://2fas.com/website/terms-of-service/)
- [2FAS – About Us (Adresse/Impressum-ähnlich)](https://2fas.com/about-us/)
- [Support: Does 2FAS Auth respect my privacy?](https://2fas.com/support/2fas-auth-security-privacy/does-2fas-respect-my-privacy/)
- [Support: What data do you acquire?](https://2fas.com/support/2fas-auth-security-privacy/what-data-do-you-acquire/)
- [Support: Where do you store the tokens?](https://2fas.com/support/2fas-auth-security-privacy/where-do-you-store-the-tokens/)
- [Support: Is 2FAS Auth secure?](https://2fas.com/support/2fas-auth-security-privacy/is-2fas-secured/)
- [Support: Is 2FAS Auth Backup safe?](https://2fas.com/support/2fas-auth-security-privacy/is-2fas-backup-safe/)
- [Support: Where is my Google Drive backup file? Is it encrypted?](https://2fas.com/support/2fas-auth-mobile-app/where-is-my-google-drive-backup-file-is-it-encrypted/)
- [Support: How does Google Drive Synchronization work?](https://2fas.com/support/2fas-auth-mobile-app/how-does-google-drive-synchronization-work/)
- [Support: How to use/sync more devices with 2FAS?](https://2fas.com/support/2fas-auth-mobile-app/how-to-use-sync-more-devices-with-2fas/)
- [Support: Transfer tokens between iOS and Android](https://2fas.com/support/2fas-auth-mobile-app/i-want-to-move-copy-transfer-tokens-codes-between-ios-and-android/)
- [Support: 2FAS Auth App Tutorial](https://2fas.com/support/2fas-auth-mobile-app/2fas-auth-app-tutorial/)
- [Support: Is my biometric data safe with 2FAS?](https://2fas.com/support/2fas-auth-security-privacy/is-my-biometric-data-safe-with-2fas/)
- [Support: Are tokens on my widget safe?](https://2fas.com/support/2fas-auth-security-privacy/are-tokens-on-my-widget-safe/)
- [Support: How do you earn money?](https://2fas.com/support/donations/how-do-you-earn-money/)
- [Donate to 2FAS](https://2fas.com/donate/)
- [Donor Privacy Policy](https://2fas.com/donor-privacy-policy/)
- [GitHub Repo: twofas/2fas-android](https://github.com/twofas/2fas-android)
- [GitHub Security Policy (2fas-android)](https://github.com/twofas/2fas-android/security)
- [GitHub Repo: twofas/2fas-browser-extension](https://github.com/twofas/2fas-browser-extension)
- [2FAS Browser Extension (Produktseite)](https://2fas.com/auth/browser-extension/)

