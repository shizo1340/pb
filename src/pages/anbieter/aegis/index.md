---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Aegis Authenticator"
url: "/anbieter/aegis/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-06"
robots: "index,follow"
description: "Kurzprofil von Aegis Authenticator (Kategorie: 2FA)."
provider: ""
name: "Aegis Authenticator"
category: "2FA"
website: "https://getaegis.app/"
repo: "https://github.com/beemdevelopment/Aegis"
license: "GPL-3.0-only"
policies: ""
privacy: "https://getaegis.app/privacy/"
terms: "Nicht angegeben"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: "[]"
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Unklar (keine Angabe auf Website/Privacy Policy gefunden)"
region: "unknown"
logs: "none"
retention: "specified"
retention_notes: "lokal (bis gelöscht/überschrieben; abhängig von Android-Backup/Dateispeicher)"
data_notes: "Lokale 2FA-Tokens werden in einer Vault-Datei gespeichert (JSON). Optional verschlüsselt: AES-256-GCM (AEAD). Entsperren per Passwort (scrypt) oder Biometrics (Android Keystore). Export als Klartext oder verschlüsselt; automatische Backups an einen frei wählbaren Speicherort."
features: ""
alternatives: ""
payment_processors: "Nicht angegeben (kostenlos; optional Spendenlink auf der Website)"
sources: ""
---
## Kurzprofil

Aegis Authenticator ist ein Anbieter aus der Kategorie **2FA**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du 2FA-Tokens **lokal/offline** verwalten willst und **Backups/Exports selbst steuerst** (Datei/Storage deiner Wahl).
- **Weniger geeignet wenn:** du **iOS** brauchst oder **Sync/Recovery „out of the box“** über ein Anbieter-Konto erwartest.
- **Wichtigster Abwägung:** **Eigenkontrolle vs. Eigenverantwortung** – du bekommst Kontrolle über Vault/Backups, musst aber Backup/Recovery sauber selbst organisieren (z.B. Verlust/Diebstahl des Geräts).

## Sofortmaßnahmen
- **Vault mit Passwort verschlüsseln:** schützt Tokens, falls jemand an die Vault-Datei kommt (Abwägung: du musst das Passwort sicher verwalten).
- **Auto-Backups aktivieren & Ziel bewusst wählen:** verhindert Token-Verlust beim Gerätewechsel (Abwägung: Backup-Ort kann Metadaten/Angriffsfläche erhöhen).
- **Screen Security / Tap-to-reveal nutzen:** reduziert Schulterblick-/Screenshot-Risiko (Abwägung: etwas weniger Komfort beim Ablesen).

## Entscheidungshilfe
- Wenn du **keine Account-Bindung** willst, dann nutze Aegis lokal (Abwägung: Recovery hängt an deinem Backup-Konzept).
- Wenn du **Biometrics** zum Entsperren nutzen willst, dann aktiviere sie zusätzlich zum Passwort (Abwägung: Entsperren hängt an Android-Biometrics/Keystore).
- Wenn du **Backups in Cloud-Speicher** legst, dann nutze **verschlüsselte Exporte/Backups** (Abwägung: du brauchst ein starkes Vault-Passwort + sichere Aufbewahrung).
- Wenn du **maximale Isolation** willst, dann halte Backups **offline** (z.B. Wechseldatenträger) (Abwägung: mehr Aufwand, manuelle Pflege).
- Wenn du **Klartext-Export** nutzt (z.B. für Migration), dann behandle die Datei wie ein Passwort-Backup (Abwägung: sehr hohes Risiko bei Leaks).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Aegis Authenticator |
| Kategorie | 2FA |
| Website | https://getaegis.app/ |
| Quellcode | https://github.com/beemdevelopment/Aegis |
| Lizenz | GPL-3.0-only |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben (kostenlos; optional Spendenlink auf der Website) |
| Jurisdiktion | Unklar (keine Angabe auf Website/Privacy Policy gefunden) |
| Logs | none |
| Retention | lokal (bis gelöscht/überschrieben; abhängig von Android-Backup/Dateispeicher) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://getaegis.app/privacy/
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Keine angegeben.

**Daten-Notizen (kurz):**
Lokale 2FA-Tokens werden in einer Vault-Datei gespeichert (JSON). Optional verschlüsselt: **AES-256-GCM (AEAD)**. Passwort-Entsperren nutzt **scrypt**; zusätzlich kann ein **Biometrics/Android-Keystore**-Slot existieren. Backups/Exports sind **Klartext oder verschlüsselt** möglich.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Privacy Policy **keine Datensammlung vom Gerät**; Kamera-Zugriff nur für QR-Code-Scan.
- **Wofür:** QR-Codes scannen (lokale Verarbeitung).
- **Weitergabe/Subprozessoren:** Nicht angegeben (laut Privacy Policy keine Datensammlung vom Gerät).
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (App ist kostenlos; Website bietet optionalen Spendenlink).
- **Kontakt/DSAR/DPA:** In der Privacy Policy wird ein Kontakt-/Meldeweg über „let us know“ verlinkt; kein formaler DSAR/DPA-Prozess genannt.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy: **keine Datensammlung vom Gerät** (keine Telemetrie genannt).
- **Abschaltbar?** Nicht zutreffend, wenn keine Telemetrie vorhanden ist.
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** none
- **Aufbewahrung:** lokal (bis gelöscht/überschrieben; abhängig von Android-Backup/Dateispeicher)
- **Lösch-/Opt-out-Optionen:** Löschen über App/Dateispeicher möglich; keine serverseitigen Opt-outs genannt.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.


## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Vault kann **unverschlüsselt** oder **verschlüsselt** gespeichert werden; Verschlüsselung nutzt **AES-256-GCM** (AEAD).
- **KDF/Parameter/Schlüsselableitung:** Passwort-Schlüsselableitung via **scrypt** (N=2^15, r=8, p=1).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (kein Anbieter-Konto).
- **Recovery/Account-Wiederherstellung:** Keine Account-Recovery; Wiederherstellung läuft über **Import/Backup**.
- **Vuln-Handling / Security-Kontakt:** Kein SECURITY.md im GitHub-Repo angegeben; Bug-/Kontakt-Hinweis ist über Website/Repo verlinkt, aber ohne formalen Disclosure-Prozess.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Vault-Verschlüsselung per Passwort aktivieren** (nicht unverschlüsselt betreiben).  
   **Prüfen:** App fordert beim Start/Unlock ein Passwort an (oder zeigt Vault als „encrypted“).
2) **Auto-Lock/Timeout aktivieren** (z.B. beim App-Wechsel).  
   **Prüfen:** Vault sperrt nach Timeout oder beim Verlassen der App.
3) **Regelmäßige Backups einrichten (verschlüsselt)** und Rücksicherung testen.  
   **Prüfen:** Backup-Datei existiert am Zielort + Import klappt auf einem Testgerät/Profil.

**Stolpersteine:**
- **Unverschlüsselte Exporte/Backups** sind ein Volltreffer für Angreifer (Abwägung: einfache Migration vs. sehr hohes Leak-Risiko).
- **Cloud-Backup** ist bequem, aber dein Speicheranbieter wird Teil deines Threat-Modells (Abwägung: Komfort vs. zusätzliche Angriffsfläche).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **keine Cloud-Backups**, wenn du Metadaten minimieren willst; verwende stattdessen Offline-Backup.
- Halte Exporte **standardmäßig verschlüsselt** und nutze Klartext nur kurzzeitig für Migration.
- Speichere Backups getrennt von deinem Hauptgerät (z.B. anderes Gerät/Medium).
**Abwägung:** mehr Eigenverantwortung und manueller Aufwand.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze ein **separates Android-Profil/Arbeitsprofil** für 2FA (Isolation von Alltags-Apps).
- Deaktiviere/limitiere **Biometrics**, wenn dein Risiko eher „Zwang/Device-Seizure“ ist (Passwort-only, ggf. längeres Passwort).
- Backups **offline + redundant** (mind. 2 physisch getrennte Kopien) und regelmäßig Import-Test.
**Abwägung:** deutlicher Komfortverlust, höhere Komplexität.

</details>

## Features
- HOTP & TOTP (kompatibel zu vielen Diensten)
- Verschlüsselter Vault (AES-256-GCM), Unlock per Passwort oder Biometrics
- Export (Klartext oder verschlüsselt) & Import aus vielen Apps
- Automatische Backups an einen Speicherort deiner Wahl
- Screen-capture prevention, Tap-to-reveal

## Alternativen
- **2FAS (Android/iOS):** anderer Sync-/Backup-Ansatz (Abwägung: Plattformbreite/Komfort vs. anderes Metadaten-/Cloud-Modell).
- **andOTP (eingestellt):** nur als Legacy-Option (Abwägung: ggf. weniger Wartung/Sicherheitsupdates).
- **KeePass (TOTP-Felder/Plugin):** 2FA im Passwort-Manager-Workflow (Abwägung: alles in einem Tresor vs. Trennung von Passwort & OTP).

## Nicht gelöst / offene Punkte
- Unklar: **Jurisdiktion/Verantwortliche Stelle** (keine Betreiberangaben auf Website/Privacy Policy gefunden).

## Quellen

- [Aegis Authenticator (Website)](https://getaegis.app/)
- [Aegis Authenticator – Privacy Policy](https://getaegis.app/privacy/)
- [beemdevelopment/Aegis (GitHub)](https://github.com/beemdevelopment/Aegis)
- [Aegis Vault Design & Format (docs/vault.md)](https://raw.githubusercontent.com/beemdevelopment/Aegis/master/docs/vault.md) 
- [Aegis Authenticator (Website)](https://getaegis.app/)
- [Aegis Authenticator – Privacy Policy](https://getaegis.app/privacy/)
- [beemdevelopment/Aegis (GitHub)](https://github.com/beemdevelopment/Aegis)
- [Aegis Vault Design & Format (docs/vault.md)](https://raw.githubusercontent.com/beemdevelopment/Aegis/master/docs/vault.md)

