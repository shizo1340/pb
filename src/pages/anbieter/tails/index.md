---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Tails OS"
url: "/anbieter/tails/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-12"
robots: "index,follow"
description: "Kurzprofil von Tails OS (Kategorie: Betriebssysteme)."
provider: ""
name: "Tails OS"
category: "Betriebssysteme"
website: "https://tails.net/"
repo: "https://gitlab.tails.boum.org/"
license: "GPL-3.0-or-later"
policies: ""
privacy: "Nicht angegeben"
terms: "Nicht angegeben"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Nicht angegeben (Projekt beim Tor Project)"
region: "unknown"
logs: "unknown"
retention: "unknown"
data_notes: "Tails ist ein Live-System von USB: keine Konto-Anmeldung vorgesehen; Internet-Verbindungen laufen über Tor. Optionaler WhisperBack-Fehlerbericht kann System-/Fehlerdaten senden; Persistent Storage ist optional und verschlüsselt."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Tails OS ist ein Anbieter aus der Kategorie **Betriebssysteme**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du ein Live-System von USB willst, das nach dem Herunterfahren standardmäßig keine lokalen Spuren auf dem Rechner hinterlässt und Internet-Verkehr über Tor führt.
- **Weniger geeignet wenn:** du dauerhaft „installiert“ arbeiten musst (Updates/Apps/Dateien immer persistent) oder Tor-Nutzung in deinem Umfeld auffällig/blocked ist.
- **Wichtigster Abwägung:** **„Amnesie“ vs. Komfort** – sobald du Persistent Storage nutzt oder Fehlerberichte sendest, entstehen zusätzliche Daten (lokal bzw. beim Support).

## Sofortmaßnahmen
- **MAC address anonymization aktiv lassen** (Default) → reduziert Tracking im lokalen Netzwerk.
- **Persistent Storage nur für das Nötigste aktivieren** → weniger Daten bleiben dauerhaft auf dem USB-Stick.
- **WhisperBack-Reports ohne E-Mail-Adresse senden** → weniger Identitätsbindung an Support-Kommunikation.

## Entscheidungshilfe
- Wenn du **möglichst wenig lokale Spuren** hinterlassen willst, dann nutze Tails ohne Persistent Storage (Abwägung: weniger Komfort bei Dateien/Settings).
- Wenn du **Daten zwischen Sessions brauchst**, dann aktiviere Persistent Storage gezielt nur für benötigte Bereiche (Abwägung: dauerhaft gespeicherte Daten auf dem USB-Stick).
- Wenn du **in fremden/öffentlichen Netzwerken** arbeitest, dann lasse MAC-Address-Anonymisierung aktiv (Abwägung: einzelne Netzwerke können Probleme machen).
- Wenn du **auf Netzwerke mit MAC-Whitelist** angewiesen bist, dann deaktiviere MAC-Address-Anonymisierung im Welcome Screen (Abwägung: leichter im lokalen Netz wiedererkennbar).
- Wenn du **Support brauchst**, dann nutze WhisperBack (Abwägung: technische System-/Fehlerdaten werden an das Projekt übermittelt; optional E-Mail-Adresse möglich).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Tails OS |
| Kategorie | Betriebssysteme |
| Website | https://tails.net/ |
| Quellcode | https://gitlab.tails.boum.org/ |
| Lizenz | GPL-3.0-or-later |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Keine (optional Spenden via Tor Project, nicht Teil des OS-Einrichtungen) |
| Jurisdiktion | Nicht angegeben (Projekt beim Tor Project) |
| Logs | unknown |
| Retention | Nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: Nicht angegeben
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Security audit of automatic upgrades and recent changes (Radically Open Security, Report verlinkt): https://tails.net/news/audit_by_ROS_2024/

**Daten-Notizen (kurz):**
Tails wird als Live-System von USB gestartet. Standardziel ist „Amnesie“ (keine Nutzung der internen Festplatte; RAM wird beim Shutdown geleert). Internet-Verbindungen laufen über Tor. Persistent Storage ist optional und verschlüsselt; Fehlerberichte via WhisperBack sind optional.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** lokal genutzte Daten/Spuren in RAM; optional dauerhaft im **Persistent Storage** auf dem USB-Stick; optional technische Daten in **WhisperBack-Reports**.
- **Wofür:** Tails zielt auf „Leave no trace“ am Rechner und Tor-Nutzung fürs Internet; Persistent Storage dient als optionaler, verschlüsselter Bereich; WhisperBack dient der Fehleranalyse.
- **Weitergabe/Subprozessoren:** Nicht angegeben / Unklar (Tails ist primär ein OS; Support-/Reporting-Flows sind dokumentiert, aber keine Subprozessor-Liste gefunden).
- **Drittlandtransfer:** Nicht angegeben / Unklar.
- **Zahlungsabwicklung/Payment Processor:** Keine (OS-Nutzung); Spenden sind separat.
- **Kontakt/DSAR/DPA:** Kontaktseite vorhanden; DSAR/DPA nicht als Prozess beschrieben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Keine klassische Telemetrie/Analytics genannt; optionaler Fehlerbericht via WhisperBack (manuell).
- **Abschaltbar?** WhisperBack ist optional; du entscheidest, ob du Reports sendest.
- **Wo (Menüpfad):** Anwendungen → Tails → *Report an error* (WhisperBack).

**Logs & Retention:**
- **Logging-Level:** unknown
- **Aufbewahrung:** Nicht angegeben
- **Lösch-/Opt-out-Optionen:** Beim Nicht-Senden von WhisperBack-Reports fallen keine Support-Daten an; lokale „Amnesie“ gilt ohne Persistent Storage.

**Abwägung am Punkt:** Weniger Fehlerberichte erschweren Diagnose/Support; gesendete Reports erhöhen Metadaten-/Diagnosedaten-Risiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Persistent Storage ist **optional** und wird **verschlüsselt** auf dem USB-Stick genutzt.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben / Unklar.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht anwendbar (kein Online-Konto).
- **Recovery/Account-Wiederherstellung:** Kein Konto; Zugriff auf Persistent Storage hängt an der Passphrase.
- **Vuln-Handling / Security-Kontakt:** Es gibt eine veröffentlichte „security issue response policy“ und Security-Advisories; Kontaktwege sind dokumentiert.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Persistent Storage bewusst aktivieren (oder weglassen).**  
   **Prüfen:** Persistent Storage ist entweder deaktiviert (amnesisch) oder nur für benötigte Bereiche aktiv.
2) **MAC address anonymization aktiv lassen** (Default).  
   **Prüfen:** Welcome Screen → *Additional Settings* → „MAC Address Anonymization“ zeigt die Standard-Option.
3) **WhisperBack nur bei Bedarf nutzen** und Identitätsdaten minimieren.  
   **Prüfen:** Report-Inhalt prüfen; E-Mail-Adresse nur angeben, wenn notwendig.

**Stolpersteine:**
- Das Aktivieren von Persistent Storage ist ein Komfortgewinn, macht aber Daten dauerhaft auf dem USB-Stick vorhanden (Abwägung: Komfort vs. Spuren/Diebstahlrisiko).
- Tails kann nicht immer schützen, wenn Hardware/Host-System kompromittiert ist (Abwägung: Portabilität vs. Hardware-Vertrauen).

<details>
<summary>Profil B (Datensparsam)</summary>

- Persistent Storage nur für absolut notwendige Funktionen aktivieren oder komplett vermeiden.
- WhisperBack-Reports ohne E-Mail-Adresse senden (oder gar nicht), wenn Identitätsbindung vermieden werden soll.
- MAC-Address-Anonymisierung im Normalfall aktiviert lassen; bei Problemen nur gezielt für einzelne Netze deaktivieren.
**Abwägung:** mehr Reibung bei Updates/Support/Workflow.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutzung auf möglichst kontrollierter Hardware (Tails kann bei bösartiger Hardware nicht vollständig schützen).
- Keine Administration Password setzen, wenn du keine Admin-Tasks brauchst (reduziert Angriffsfläche bei physischem Zugriff während der Session).
- Persistent Storage so klein wie möglich halten; Notfall-Workflow für schnelles Shutdown kennen.
**Abwägung:** deutlich weniger Komfort, höherer Betriebsaufwand.

</details>

## Features
- Live-System von USB mit standardmäßigem „Amnesie“-Ansatz (keine Nutzung der internen Festplatte; RAM wird beim Shutdown geleert).
- Tor für Internet-Verbindungen (inkl. Tor Browser; Apps werden blockiert, wenn sie ohne Tor ins Netz wollen).
- Optionaler, verschlüsselter Persistent Storage auf dem USB-Stick.
- MAC-Address-Anonymisierung (standardmäßig aktiv, im Welcome Screen steuerbar).
- Optionales Bug-Reporting via WhisperBack (verschlüsselt über Tor).

## Alternativen
- **Whonix:** stärker VM-/Gateway-orientiert (Abwägung: Isolation/Architektur vs. VM-Komplexität).
- **Qubes OS:** Fokus auf starke Isolation durch VMs (Abwägung: Isolation vs. Hardwarebedarf/Einrichtung-Aufwand).
- **Kicksecure:** gehärtetes System ohne Live-„Amnesie“-Workflow (Abwägung: langfristiger Desktop vs. weniger „Leave no trace“).

## Nicht gelöst / offene Punkte
- Aufbewahrungs-/Löschpraxis für WhisperBack-Reports ist nicht konkret dokumentiert.
- Jurisdiktion/Legal/Privacy-Policy als eigenständige Seite wurde auf tails.net nicht gefunden.

## Quellen

- Security audit of automatic upgrades and recent changes (Radically Open Security, Report verlinkt): "https://tails.net/news/audit_by_ROS_2024/
- Whonix (anderer Trade-off: "VM-/Gateway-Architektur, stärker auf Workstation-Isolation ausgelegt)
- Qubes OS (anderer Trade-off: "starke Isolation durch VMs, höherer Hardware-/Setup-Aufwand)
- Kicksecure (anderer Trade-off: "gehärtetes System ohne „Amnesie“/Live-Workflow)
- https://tails.net/doc/upgrade/index.en.html
- [Tails OS (Startseite)](https://tails.net/)
- [How Tails works](https://tails.net/about/index.en.html)
- [How can I trust Tails?](https://tails.net/doc/about/trust/index.en.html)
- [License and source code distribution](https://tails.net/doc/about/license/index.en.html)
- [Persistent Storage](https://tails.net/doc/persistent_storage/index.en.html)
- [Reporting an error using WhisperBack](https://tails.net/doc/first_steps/whisperback/index.en.html)
- [MAC address anonymization](https://tails.net/doc/first_steps/welcome_screen/mac_spoofing/index.en.html)
- [Tails security issue response policy](https://tails.net/contribute/security_policy/)
- [Contact](https://tails.net/doc/about/contact/index.en.html)
- [Security audit of automatic upgrades and recent changes](https://tails.net/news/audit_by_ROS_2024/)
- [Upgrading a Tails USB stick](https://tails.net/doc/upgrade/index.en.html)
