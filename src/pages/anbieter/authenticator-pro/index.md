---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Authenticator Pro"
url: "/anbieter/authenticator-pro/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-05"
robots: "index,follow"
description: "Kurzprofil von Authenticator Pro (Kategorie: 2FA)."
provider: ""
name: "Authenticator Pro"
category: "2FA"
website: "https://stratumauth.com/"
repo: "https://github.com/stratumauth/app"
license: "GPL-3.0-or-later"
policies: ""
privacy: "https://stratumauth.com/privacy"
terms: "Nicht angegeben"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "unknown"
account_required: "unknown"
phone_required: "unknown"
kyc_required: "unknown"
jurisdiction: "Nicht angegeben"
region: "unknown"
logs: "minimal"
logs_notes: "minimal (optional „Log Data“ nur wenn du sie teilst)"
retention: "unknown"
data_notes: "Das Projekt wird auf der Website als „Stratum (formerly Authenticator Pro)“ geführt. Laut Privacy Policy sammelt die App keine Daten und nutzt keine Third-Party-Services. Stratum funktioniert offline (kein Internet nötig); Backups können verschlüsselt exportiert werden. Achtung: Die Google-Play-Version nennt „proprietary components (Wear OS)“."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Authenticator Pro ist ein Anbieter aus der Kategorie **2FA**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du eine **lokale/offline** 2FA-App willst, bei der laut Privacy Policy **keine Daten gesammelt** werden und die ohne Internetzugriff funktioniert.
- **Weniger geeignet wenn:** du **eingebaute Cloud-Sync** oder Account-basierte Wiederherstellung erwartest (das Projekt betont Offline-Betrieb; Cloud-Sync ist explizit nicht geplant).
- **Wichtigster Abwägung:** **Komfort (Sync/Recovery) vs. Kontrolle & Offline-Design** – du musst Backups selbst sicher verwalten, sonst wird Geräteverlust schnell zum Konto-Problem.

## Sofortmaßnahmen
- **App-Sperre setzen (Passwort/Biometrie, falls verfügbar):** reduziert Risiko bei Gerätezugriff durch Dritte.
- **Verschlüsseltes Backup erstellen und getrennt speichern:** schützt vor „Phone lost / wiped“ und reduziert Lockout-Risiko.
- **Distribution bewusst wählen (Google Play vs. FOSS-Repo):** Wear-OS-Komfort kann mit proprietären Komponenten einhergehen.

## Entscheidungshilfe
- Wenn du **maximal offline** bleiben willst, dann nutze Stratum/Authenticator Pro ohne Internet-Features (Abwägung: kein automatischer Sync).
- Wenn du **Wear OS** brauchst, dann nutze die Google-Play-Variante (Abwägung: laut Download-Seite „proprietary components (Wear OS)“).
- Wenn du **100% Free-Software-Distribution** willst, dann installiere über die genannten F-Droid/Repo-Optionen (Abwägung: ggf. größere APK/kein Wear OS).
- Wenn du **Backups** nutzt, dann setze eine starke Backup-Passphrase und dokumentiere sie sicher (Abwägung: ohne Passwort sind Backups laut FAQ nicht wiederherstellbar).
- Wenn du von **Google Authenticator** migrierst, dann beachte den Hinweis zur „Privacy Screen“-Einstellung beim Import (Abwägung: kurzzeitig weniger Screen-Protection beim Transfer).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Authenticator Pro |
| Kategorie | 2FA |
| Website | https://stratumauth.com/ |
| Quellcode | https://github.com/stratumauth/app |
| Lizenz | GPL-3.0-or-later |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | Nicht angegeben |
| Telefon erforderlich | Nicht angegeben |
| KYC erforderlich | Nicht angegeben |
| Zahlungsabwicklung | Keine (Nutzung kostenlos). Optionaler Spendenlink („Buy Me a Coffee“) im Repo. |
| Jurisdiktion | Nicht angegeben |
| Logs | minimal (optional „Log Data“ nur wenn du sie teilst) |
| Retention | Nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://stratumauth.com/privacy
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Das Projekt wird auf der Website als „Stratum (Früher Authenticator Pro)“ beschrieben. Laut Privacy Policy sammelt die App keine Daten und nutzt keine Third-Party-Services. Die App ist offline nutzbar (kein Internet nötig) und Backups können verschlüsselt exportiert werden. Die Download-Seite nennt je nach Distribution Unterschiede (u.a. Wear OS und proprietäre Komponenten).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Privacy Policy „keine Datenerhebung“; keine Drittanbieter-Services zur Identifikation.
- **Wofür:** Nicht zutreffend für zentrale App-Funktion (Offline-App); optional „Log Data“ bei Fehlern, wenn du sie teilst.
- **Weitergabe/Subprozessoren:** Laut Privacy Policy keine Third-Party-Services genannt.
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Keine für Nutzung; optional Spendenlink im Repo.
- **Kontakt/DSAR/DPA:** Nicht angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy: keine Datensammlung; keine Third-Party-Services genannt.
- **Abschaltbar?** Nicht angegeben (bei „keine Erhebung“ normalerweise nicht relevant).
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** minimal (optional „Log Data“ bei Fehlern, wenn du sie teilst)
- **Aufbewahrung:** Nicht angegeben.
- **Lösch-/Opt-out-Optionen:** Nicht angegeben.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Backups sind laut Doku verschlüsselt; App arbeitet offline.
- **KDF/Parameter/Schlüsselableitung:** Backup-Format nennt u.a. **Argon2id** (Parallelism 4, Memory 64 MiB, Iterations 3) mit **AES-GCM**; zusätzlich wird ein (legacy) Format mit **PBKDF2-SHA1 (64000 Iterationen)** + **AES-CBC-PKCS7** beschrieben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (die App ist selbst der 2FA-Generator; kein eigenes Online-Konto beschrieben).
- **Recovery/Account-Wiederherstellung:** Laut FAQ: Ohne Backup/Passwort gibt es keinen Weg an die verschlüsselten Daten zu kommen; Verantwortung liegt bei dir (Recovery-Codes der jeweiligen Dienste werden wichtig).
- **Vuln-Handling / Security-Kontakt:** GitHub Security Overview zeigt „No security policy detected“ (kein SECURITY.md).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **App-Sperre aktivieren** (Passwort/Biometrie), falls angeboten.  
   **Prüfen:** App fordert beim Öffnen/Wechsel in die App eine Entsperrung.
2) **Backup-Workflow festlegen** (verschlüsselt, getrennte Speicherung).  
   **Prüfen:** Du kannst ein Backup zurückspielen (Test auf Zweitgerät/Profil).
3) **QR-Import sauber durchführen** (Kamera-Permission nur bei Bedarf).  
   **Prüfen:** Berechtigung nur aktiv, wenn du QR-Codes scannst; sonst entziehbar.

**Stolpersteine:**
- **Passwort vergessen = Daten weg:** Laut FAQ gibt es „keinen Weg drum herum“ – ohne Passwort keine Entschlüsselung.
- **Migration von Google Authenticator:** Für den Transfer kann „Privacy Screen“ temporär im Weg sein (laut Import-Anleitung).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze die **FOSS-Distribution** (Repo/F-Droid-Variante), wenn du die im Download erwähnten proprietären Komponenten vermeiden willst.
- Halte Backups **lokal/physisch getrennt** (z.B. verschlüsselt auf externem Medium), statt Cloud-Sync in der App zu erwarten.
- Minimierte App-Rechte: Kamera nur bei Bedarf, sonst entziehen.  
**Abwägung:** mehr Eigenverantwortung bei Backup/Recovery, evtl. weniger Komfort (z.B. ohne Wear OS je nach Variante).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze getrennte Geräteprofile/Work-Profile für 2FA-Daten (Isolation gegenüber Alltags-Apps).
- Backups nur offline und zusätzlich in einem zweiten Schritt verschlüsseln (Defense-in-Depth).
- Keine Watch/Companion-Features nutzen, wenn du Angriffsfläche minimieren willst.  
**Abwägung:** deutlicher Komfortverlust und höherer Pflegeaufwand.

</details>

## Features
- Offline-2FA (TOTP/HOTP u.a.) ohne Internetzugang
- Verschlüsselte Backups/Restore inkl. dokumentiertem Backup-Format
- Import/Export und Migration von anderen Apps
- Icons, Kategorien, Anpassungen (laut Website/Repo)
- Wear OS Companion (je nach Distribution)

## Alternativen
- Aegis (Android): anderer Schwerpunkt auf UI/Backup-Handling (Abwägung: Bedienung/Featureset anders).
- [2FAS](/anbieter/2fas/) – anderer Schwerpunkt auf Multi-Device-Workflows (Abwägung: je nach Einrichtung mehr Metadaten/Sync-Komplexität).
- [Ente Auth](/anbieter/ente-auth/) – anderer Schwerpunkt auf plattformübergreifender Nutzung (Abwägung: ggf. Account-/Sync-Optionen statt rein offline).

## Nicht gelöst / offene Punkte
- AGB/Terms sind auf der Website nicht als eigene Seite angegeben.
- Jurisdiktion/Impressum/Betreiberangaben sind nicht explizit genannt.
- Retention/Details zu optional geteilten „Log Data“ (Aufbewahrungsdauer) sind nicht angegeben.
- Kein SECURITY.md / keine dokumentierte Disclosure-Policy im Repo (Stand: 2026-01-05).

## Quellen

- Wear OS: "je nach Distribution (Google Play erwähnt proprietäre Komponenten)
- Aegis (Android, lokal; anderer Schwerpunkt: "UI/Backup-Handling)
- 2FAS (Android/iOS; anderer Schwerpunkt: "Multi-Device/Companion-Ansätze)
- Ente Auth (Multi-Platform; anderer Schwerpunkt: "Sync/Account-Optionen möglich)
- title: "stratumauth/app – GitHub Security Overview
- [Stratum – Website (ehemals Authenticator Pro)](https://stratumauth.com/)
- [Stratum – Privacy Policy](https://stratumauth.com/privacy)
- [Stratum – Download (Distribution/Proprietary-Komponenten-Hinweis)](https://stratumauth.com/download)
- [Stratum – Wiki: Backup Format (Verschlüsselung & KDF-Parameter)](https://stratumauth.com/wiki/backup-format)
- [Stratum – Wiki: FAQ](https://stratumauth.com/wiki/faq)
- [stratumauth/app – GitHub Quellcode](https://github.com/stratumauth/app)
- [stratumauth/app – GitHub Security Overview](https://github.com/stratumauth/app/security)

