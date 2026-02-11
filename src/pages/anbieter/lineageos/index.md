---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / LineageOS"
url: "/anbieter/lineageos/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-17"
robots: "index,follow"
description: "Kurzprofil von LineageOS (Kategorie: Betriebssysteme)."
provider: ""
name: "LineageOS"
category: "Betriebssysteme"
website: "https://lineageos.org/"
repo: "https://github.com/LineageOS"
license: "Mixed (Apache-2.0 + GPL-2.0; je nach Komponente)"
policies: ""
privacy: "https://lineageos.org/legal/"
terms: "https://lineageos.org/legal/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Nicht angegeben"
region: "unknown"
logs: "minimal"
retention: "specified"
retention_notes: "90d (LineageOS Statistics Backend; nur letzter Check-in je Gerät)"
data_notes: "LineageOS Statistics kann täglich Geräte-Metadaten (gehashte ANDROID_ID, Modell/Version, Land/Carrier, Zeitstempel) erfassen; Aufbewahrung laut Backend-Repo 90 Tage."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

LineageOS ist ein Anbieter aus der Kategorie **Betriebssysteme**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du ein freies Android-basiertes Betriebssystem ohne zwingendes Online-Konto nutzen willst und bereit bist, Installation/Updates selbst zu verwalten.
- **Weniger geeignet wenn:** du ein Einrichtung ohne Bootloader-/Installationsaufwand brauchst oder ein “alles vorkonfiguriert”-Ökosystem erwartest.
- **Wichtigster Abwägung:** Geräte-Freiheit & Anpassbarkeit vs. Installations-/Update-Aufwand und mögliche Hardware-/Bootloader-Fallstricke.

## Sofortmaßnahmen
- **Updates über den integrierten Updater durchführen** (reduziert Update-Reibung und hält den Patch-Stand aktuell).
- **„LineageOS Statistics“ in den Einstellungen prüfen und bei Bedarf deaktivieren** (reduziert Geräte-Metadaten, falls aktiv).
- **Optionale Add-ons (z.B. Google Apps) nur installieren, wenn du sie wirklich brauchst** (Abwägung: App-Kompatibilität vs. zusätzliche Datenflüsse).

## Entscheidungshilfe
- Wenn du **ohne Account-Zwang** starten willst, dann nutze LineageOS ohne zusätzliche Dienste (Abwägung: manche Apps/Push-Funktionen hängen von Add-ons ab).
- Wenn du **Metadaten minimieren** willst, dann prüfe „LineageOS Statistics“ und deaktiviere es, falls vorhanden (Abwägung: weniger Projekt-Statistiken/Diagnose-Signale).
- Wenn du **Updates stabil und mit Add-on-Backup** willst, dann aktualisiere über **Einstellungen → System → Updater** (Abwägung: alternative Update-Wege können Add-ons je nach Geräte-Layout schlechter sichern).
- Wenn du **SIM-basierte Metadaten** reduzieren willst, dann betreibe das Gerät ohne SIM oder mit separater SIM (Abwägung: Erreichbarkeit/Telefonie).
- Wenn du **Bootloader-/Verified-Boot-Risiken** vermeiden willst, dann plane Installation und (Re-)Locking sehr bewusst (Abwägung: Installierbarkeit vs. Geräteschutz-Status).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | LineageOS |
| Kategorie | Betriebssysteme |
| Website | https://lineageos.org/ |
| Quellcode | https://github.com/LineageOS |
| Lizenz | Mixed (Apache-2.0 + GPL-2.0; je nach Komponente) |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Nicht angegeben |
| Logs | minimal |
| Retention | 90d (LineageOS Statistics Backend; nur letzter Check-in je Gerät) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://lineageos.org/legal/
- AGB/Terms: https://lineageos.org/legal/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
LineageOS Statistics (falls aktiv) sendet laut Stats-Backend ungefähr täglich:
- Geräte-ID als **SHA-256 von `Settings.Secure.ANDROID_ID`** (reset bei Wipe)
- Gerätemodell und Versions-String
- Land/Carrier/Carrier-ID (SIM-basiert, falls vorhanden)
- Zeitstempel der Anfrage  
Aufbewahrung laut Backend: **90 Tage**, pro Gerät nur der **letzte Check-in**.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Bei LineageOS Statistics: gehashte ANDROID_ID (Device-ID), Modell/Version, Land/Carrier/Carrier-ID (SIM), Zeitstempel.
- **Wofür:** Statistik-Tracking/“Devices check in … daily” (LineageOS Statistics Backend).
- **Weitergabe/Subprozessoren:** Nicht angegeben (Hosting/Unterauftragsverarbeiter werden in den genutzten Primärquellen nicht benannt).
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben.
- **Kontakt/DSAR/DPA:** Nicht angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar (LineageOS Statistics existiert; Aktivierung/Default hängt von Build/Einrichtung ab).
- **Abschaltbar?** Unklar in Doku; praktisch über Geräteeinstellungen zu prüfen (Suche nach „Statistics/Statistik“).
- **Wo (Menüpfad):** In der Praxis: **Einstellungen → Suche → „Statistics/Statistik“** (Bezeichnung kann je nach Version variieren).

**Logs & Retention:**
- **Logging-Level:** minimal (LineageOS Statistics: täglicher Check-in, Metadaten wie oben).
- **Aufbewahrung:** 90 Tage (laut Backend; nur letzter Check-in je Gerät).
- **Lösch-/Opt-out-Optionen:** Unklar (in Doku nicht eindeutig beschrieben; am Gerät prüfen).

**Abwägung am Punkt:** Weniger Telemetrie kann Projekt-Statistiken/Diagnose erschweren; mehr Telemetrie erhöht Metadatenrisiko (z.B. SIM-basiertes Land/Carrier).

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben (geräte-/Android-abhängig).
- **KDF/Parameter/Schlüsselableitung:** Nicht zutreffend (kein Anbieter-Account/Vault-Konzept).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (kein Anbieter-Login).
- **Recovery/Account-Wiederherstellung:** Wiederherstellung erfolgt typischerweise über lokale Backups/Neuinstallation (Installation kann Datenverlust bedeuten).
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben (kein zentraler Disclosure-Prozess in den genutzten Primärquellen eindeutig dokumentiert).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Gerätesperre aktivieren** (PIN/Passwort; Biometrics optional).  
   **Prüfen:** Sperrbildschirm ist aktiv, Entsperr-Timeout sinnvoll.
2) **Updates über den integrierten Updater einspielen.**  
   **Prüfen:** *Einstellungen → System → Updater* zeigt verfügbare Updates und installiert sie.
3) **„LineageOS Statistics/Statistik“ prüfen und bei Bedarf deaktivieren.**  
   **Prüfen:** In Einstellungen-Suche „Statistics/Statistik“ → Status ist aus (falls Option vorhanden).

**Stolpersteine:**
- **Bootloader/Installation:** Geräte-Installationsschritte können Bootloader-Änderungen und Datenverlust bedeuten (Abwägung: Flashbarkeit vs. Gerätezustand/Verified Boot).
- **Relocking-Risiko:** (Re-)Locking des Bootloaders kann je nach Gerät zu Problemen führen (Abwägung: Geräteschutz vs. Brick-Risiko).
- **Add-ons & Updates:** Auf manchen Geräten werden Add-ons nur zuverlässig gesichert, wenn Updates über den eingebauten Updater laufen (Abwägung: Komfort/Backup vs. alternative Update-Wege).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Keine optionalen Add-ons installieren**, wenn du sie nicht brauchst (Abwägung: weniger App-/Dienste-Kompatibilität).
- **Ohne SIM betreiben** oder SIM strikt trennen, wenn SIM-Metadaten vermieden werden sollen (Abwägung: Telefonie/Erreichbarkeit).
- **App-Auswahl klein halten** und Berechtigungen restriktiv vergeben (Abwägung: mehr manueller Aufwand im Alltag).

**Abwägung:** weniger Metadaten, aber mehr Handarbeit (Apps/Komfort).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Dediziertes Gerät/Profil** für sensible Nutzung, keine privaten Accounts darauf (Abwägung: zusätzlicher Geräte- und Pflegeaufwand).
- **Netzwerk/Radio-Disziplin:** Offline/Flugmodus, WLAN nur gezielt, möglichst ohne SIM (Abwägung: starke Einschränkung der Nutzbarkeit).
- **Minimaler App-Satz + restriktive Berechtigungen** (Abwägung: Komfortverlust; Funktionsumfang sinkt).

**Abwägung:** maximale Isolation, aber deutlich weniger Komfort und mehr Komplexität.

</details>

## Features
- **Open-Source-Codebasis** über die offiziellen GitHub-Organisationen (LineageOS / lineageos-infra).
- **LineageOS Statistics Backend** mit dokumentierten Datenkategorien und Retention (90 Tage, letzter Check-in je Gerät).
- **Integrierter Updater** (Einstellungen → System → Updater) für Systemupdates.
- **Optionale Add-ons** (z.B. Google Apps) separat installierbar (eigene Abwägungen durch zusätzliche Komponenten).

## Alternativen
- **GrapheneOS:** Fokus auf Härtung und Sicherheits-Defaults (Abwägung: meist auf bestimmte Geräte/Modelle beschränkt).
- **/e/OS:** Fokus auf alternative Defaults/Ökosystem (Abwägung: Komponentenmix und Update-/Kompatibilitätsfragen).
- **CalyxOS:** Fokus auf Privacy-orientierte Defaults (Abwägung: Geräteauswahl und Release-/Update-Strategie unterscheidet sich).

## Nicht gelöst / offene Punkte
- Unklar, ob und wie **LineageOS Statistics** standardmäßig aktiviert ist (geräte-/build-abhängig).
- Unklar, ob es eine **zentrale Security-Disclosure-Adresse** für LineageOS gibt (nicht eindeutig dokumentiert).

## Quellen

- GrapheneOS (anderer Schwerpunkt: "starke Hardening-Maßnahmen; Trade-off: eingeschränkte Geräteauswahl)
- /e/OS (anderer Schwerpunkt: "eigene Cloud-/App-Defaults; Trade-off: anderes Ökosystem/Komponentenmix)
- CalyxOS (anderer Schwerpunkt: "Privacy-Defaults; Trade-off: Geräte-/Update-Strategie unterscheidet sich)
- https://github.com/LineageOS/android_kernel_oneplus_sm8750/blob/lineage-23.0/Kconfig
- [LineageOS (GitHub-Organisation)](https://github.com/LineageOS)
- [LineageOS Statistics Backend (tribble-tracker)](https://github.com/lineageos-infra/tribble-tracker)
- [Update (Beispiel): Updater-App Pfad & Hinweise](https://wiki.lineageos.org/devices/earth/update/variant3/)
- [Optional Add-ons (Google Apps)](https://wiki.lineageos.org/gapps/)
- [Installation (Beispielgerät): flame](https://wiki.lineageos.org/devices/flame/install/)
- [Legal / Privacy](https://lineageos.org/legal/)
- [Beispiel Apache-2.0 (Frameworks Base)](https://github.com/LineageOS/android_frameworks_base/blob/lineage-23.0/Android.bp)
- [Beispiel GPL-2.0 (Kernel-Konfig)](https://github.com/LineageOS/android_kernel_oneplus_sm8750/blob/lineage-23.0/Kconfig)
