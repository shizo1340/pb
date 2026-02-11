---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / FreeOTPPlus"
url: "/anbieter/freeotpplus/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-13"
robots: "index,follow"
description: "Kurzprofil von FreeOTPPlus (Kategorie: 2FA)."
provider: ""
name: "FreeOTPPlus"
category: "2FA"
website: "https://github.com/helloworld1/FreeOTPPlus"
repo: "https://github.com/helloworld1/FreeOTPPlus"
license: "Apache-2.0"
policies: ""
privacy: "Nicht angegeben"
terms: "Nicht angegeben"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "unknown"
free_tier: "unknown"
open_source: "yes"
self_host_possible: "no"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Unklar"
region: "unknown"
logs: "unknown"
retention: "unknown"
data_notes: "Lokal genutzte 2FA-App (Android). Laut Projekt-README unterstützt FreeOTPPlus Export/Import (u.a. Google Drive oder andere Document Provider) und optionalen App-Lock per Biometrie/PIN."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

FreeOTPPlus ist ein Anbieter aus der Kategorie **2FA**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du eine lokal nutzbare 2FA-App für Android suchst und eine **Export/Import-Strategie** (Backup/Restore) bewusst selbst steuern willst.
- **Weniger geeignet wenn:** du **klare, veröffentlichte Aussagen** zu Privacy/Telemetrie/Log-Retention brauchst (im Projekt fehlen hierfür öffentliche Policy-Texte).
- **Wichtigster Abwägung:** **Backup/Recovery vs. Secret-Exposure** – Export/Import (z.B. via Google Drive/Document Provider) kann Wiederherstellung erleichtern, aber legt 2FA-Secrets ggf. in externen Speichern ab.

## Sofortmaßnahmen
- **App-Lock aktivieren (Biometrie/PIN), falls vorhanden:** schützt Tokens bei entsperrtem Gerät vor schnellem Zugriff.
- **Backup nur in verschlüsselten Speicher legen:** reduziert das Risiko, dass Export-Dateien im Klartext in der Cloud landen.
- **Regelmäßig Restore-Test machen:** stellt sicher, dass dein Notfall-Backup wirklich funktioniert.

## Entscheidungshilfe
- Wenn du **ohne Konto/Cloud-Sync** arbeiten willst, dann nutze FreeOTPPlus rein lokal (Abwägung: Gerätewechsel erfordert manuelles Backup/Restore).
- Wenn du **Gerätewechsel** erwartest, dann nutze Export/Import (Abwägung: Backup-Datei ist ein hochsensibles Secret und muss geschützt werden).
- Wenn du **keine Drittanbieter-Speicher** einbinden willst, dann exportiere in einen lokalen, verschlüsselten Speicher statt Google Drive/Cloud (Abwägung: weniger Komfort, mehr Eigenverantwortung).
- Wenn du **App-Zugriff im Alltag absichern** willst, dann aktiviere den optionalen App-Lock per Biometrie/PIN (Abwägung: etwas mehr Reibung beim Öffnen der App).
- Wenn du **klare Aussagen zu Telemetrie/Logging** brauchst, dann ist ein Projekt mit dokumentierter Privacy/Telemetry-Policy relevant (Abwägung: ggf. andere UX/Features).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | FreeOTPPlus |
| Kategorie | 2FA |
| Website | https://github.com/helloworld1/FreeOTPPlus |
| Quellcode | https://github.com/helloworld1/FreeOTPPlus |
| Lizenz | Apache-2.0 |
| Preismodell | unknown |
| Free Tier | unknown |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Unklar |
| Logs | unknown |
| Retention | Unklar |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: Nicht angegeben
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Lokal genutzte 2FA-App (Android). Laut Projekt-README unterstützt FreeOTPPlus Export/Import (u.a. Google Drive oder andere Document Provider) und optionalen App-Lock per Biometrie/PIN.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Nicht angegeben (keine eigene Privacy Policy im Projekt verlinkt).
- **Wofür:** OTP-Codes erzeugen und Tokens verwalten; zusätzlich Export/Import-Funktion für Backup/Restore (laut README).
- **Weitergabe/Subprozessoren:** Nicht angegeben. Hinweis: Export/Import kann Tokens/Settings in den vom Nutzer gewählten Speicher (z.B. Google Drive/Document Provider) ablegen (laut README).
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben.
- **Kontakt/DSAR/DPA:** Nicht angegeben (kein offizieller DSAR/DPA-Prozess im Projekt dokumentiert).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar (im README/Wiki nicht beschrieben).
- **Abschaltbar?** Unklar.
- **Wo (Menüpfad):** Nicht angegeben (in der App nach „Telemetry“, „Analytics“, „Diagnostics“ in den Einstellungen suchen).

**Logs & Retention:**
- **Logging-Level:** unknown
- **Aufbewahrung:** Unklar
- **Lösch-/Opt-out-Optionen:** Unklar (ohne dokumentierte Policy nicht verifizierbar).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Unklar (keine dokumentierte Aussage zu lokaler Verschlüsselung der Token-Daten).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** App generiert OTPs (TOTP/HOTP) und kann per Biometrie/PIN-App-Lock geschützt werden (laut README).
- **Recovery/Account-Wiederherstellung:** Export/Import (Backup/Restore) über Google Drive oder andere Document Provider (laut README).
- **Vuln-Handling / Security-Kontakt:** Kein SECURITY.md / keine Security Policy im Repo hinterlegt (GitHub zeigt „No security policy detected“).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **App-Lock aktivieren** (Biometrie/PIN), falls angeboten.  
   **Prüfen:** App fordert beim Öffnen Biometrie/PIN an.
2) **Backup-Strategie festlegen (Export/Import)** und Export-Datei geschützt ablegen.  
   **Prüfen:** Export-Datei wird erzeugt; Restore-Test funktioniert auf einem Zweitgerät/Emulator.
3) **Telemetry/Analytics prüfen** (falls Option existiert, deaktivieren).  
   **Prüfen:** In den Einstellungen kein Analytics aktiv oder Schalter steht auf „aus“.

**Stolpersteine:**
- Export/Import kann 2FA-Secrets in externe Speicher legen (Abwägung: Recovery/Umzug vs. Secret-Exposure).
- Import aus der originalen FreeOTP-App kann besondere Voraussetzungen haben (z.B. Root/ADB laut Wiki) – das beeinflusst Migrationspfade.

<details>
<summary>Profil B (Datensparsam)</summary>

- Lege Backups **nicht** in Cloud-Speicher ab, sondern lokal/verschlüsselt (z.B. verschlüsselter Container).
- Halte die App möglichst „offline“ im Sinne von: nur QR-Scan + lokale Nutzung, keine zusätzlichen Integrationen.
- Backup/Export-Dateien nur kurzzeitig vorhalten und danach aus Downloads/Cloud entfernen.
**Abwägung:** mehr Eigenaufwand bei Gerätewechseln und Notfällen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze ein getrenntes Geräteprofil / ein dediziertes Zweitgerät nur für OTPs (wenn dein Threat Model das vorsieht).
- Halte das Authenticator-Gerät möglichst isoliert (z.B. selten online), Backups nur per kontrolliertem Offline-Transfer.
- App-Lock + Gerätesperre konsequent kombinieren.
**Abwägung:** deutlich weniger Komfort, höhere Komplexität im Alltag.

</details>

## Features
- TOTP/HOTP (OTP-Authenticator; laut Projekt-Themen/README)
- Export/Import von Tokens/Settings (z.B. Google Drive oder andere Document Provider)
- App-Lock per Biometrie/PIN (optional, laut README)
- Suche/Filter für Tokens (laut README)
- Offline-Icons/Token-Icons für viele Websites (laut README)

## Alternativen
- Aegis Authenticator (ähnliche Kategorie; Abwägung: Funktionsumfang/Backup-Optionen je nach Einrichtung)
- andOTP (ähnliche Kategorie; Abwägung: Projektstatus/Updates prüfen)
- Google Authenticator (ähnliche Kategorie; Abwägung: Ökosystem-/Konto-Integration vs. weniger Kontrolle über Datenflüsse)
- Microsoft Authenticator (ähnliche Kategorie; Abwägung: Ökosystem-/Konto-Integration vs. weniger Kontrolle über Datenflüsse)

## Nicht gelöst / offene Punkte
- Unklar, ob/wie FreeOTPPlus Telemetrie/Analytics nutzt (keine dokumentierte Aussage im Projekt gefunden).
- Unklar, ob lokale Token-Daten verschlüsselt gespeichert werden (keine dokumentierte Aussage).
- Kein dokumentierter Security-Disclosure-Prozess (kein SECURITY.md im Repo).

## Quellen

- Aegis Authenticator (anderer Schwerpunkt: "lokale Verwaltung + Backups je nach Setup)
- andOTP (anderer Schwerpunkt: "lokaler, schlanker Workflow; Projektstatus prüfen)
- Google Authenticator (anderer Schwerpunkt: "Ökosystem-/Konto-Integration)
- Microsoft Authenticator (anderer Schwerpunkt: "Ökosystem-/Konto-Integration)
- https://github.com/helloworld1/FreeOTPPlus/security/policy
- [FreeOTPPlus (GitHub Quellcode)](https://github.com/helloworld1/FreeOTPPlus)
- [FreeOTPPlus Wiki (GitHub)](https://github.com/helloworld1/FreeOTPPlus/wiki)
- [Security Policy (GitHub zeigt keine Policy)](https://github.com/helloworld1/FreeOTPPlus/security/policy)
