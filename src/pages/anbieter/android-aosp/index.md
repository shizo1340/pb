---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Android (AOSP)"
url: "/anbieter/android-aosp/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-05"
robots: "index,follow"
description: "Kurzprofil von Android (AOSP) (Kategorie: Betriebssysteme)."
provider: ""
name: "Android (AOSP)"
category: "Betriebssysteme"
website: "https://source.android.com/"
repo: "https://android.googlesource.com/"
license: "Apache-2.0"
policies: ""
privacy: "https://policies.google.com/privacy"
terms: "https://policies.google.com/terms"
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
jurisdiction: "Unklar (Quellcode-Projekt; betrieben von Google LLC / Open Handset Alliance)"
region: "unknown"
logs: "some"
logs_notes: "Nicht zutreffend (Quellcode-Projekt; Logging hängt von Distribution/Build ab)"
retention: "specified"
retention_notes: "Nicht zutreffend (Quellcode-Projekt)"
data_notes: "AOSP ist ein Quellcode-Projekt. Datenschutz-/Telemetry-Fragen betreffen vor allem konkrete Android-Distributionen (z.B. OEM-ROMs, Custom-ROMs) und installierte Apps/Dienste."
features: ""
alternatives: ""
payment_processors: "Nicht zutreffend"
sources: ""
---
## Kurzprofil

Android (AOSP) ist ein Anbieter aus der Kategorie **Betriebssysteme**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Android als **offene Basis** verstehen, anpassen oder selbst bauen willst (z.B. für eigene Geräte-/ROM-Projekte) und Kontrolle über Komponenten/Apps wichtig ist.
- **Weniger geeignet wenn:** du eine „fertige“ Endnutzer-Distribution mit garantierten Updates/Support erwartest (AOSP liefert Quellcode und Referenz-Teile, nicht automatisch ein voll gepflegtes Endnutzer-ROM für jedes Gerät).
- **Wichtigster Abwägung:** **Kontrolle & Anpassbarkeit** vs. **Wartungsaufwand (Build, Treiber, Updates, Geräte-Support)**.

## Sofortmaßnahmen
- **Prüfe Security Patch Level der konkreten Distribution:** reduziert Risiko durch bekannte Lücken (AOSP-Fixes kommen regelmäßig in Security Bulletins).
- **Nutze getrennte Nutzerprofile/Arbeitsprofile für „untrusted“ Apps:** reduziert Seiteneffekte auf deinen Haupt-User (Abwägung: etwas mehr Einrichtung-Aufwand).
- **„Sensors off“ gezielt verwenden (Developer Options):** schnelle Notbremse für Sensorzugriff (Abwägung: Apps/Funktionen können ausfallen).

## Entscheidungshilfe
- Wenn du **minimale Bindung an Google-Dienste** willst, dann ist „AOSP-basierte Distribution ohne zusätzliche proprietäre Services“ relevant (Abwägung: weniger Komfort/Kompatibilität bei Play-abhängigen Apps).
- Wenn du **maximale Geräte-Kompatibilität** brauchst, dann ist eine OEM-Distribution oder ein stark gerätespezifisches ROM relevant (Abwägung: zusätzliche Hersteller-Apps/Telemetrie möglich).
- Wenn du **eigene Builds** betreiben willst, dann plane Update-Prozesse entlang der Security Bulletins ein (Abwägung: laufender Wartungsaufwand).
- Wenn du **Privacy-Kontrollen im UI** brauchst, dann prüfe, ob die Distribution AOSP-Features wie Privacy Indicators unterstützt (Abwägung: je nach Android-Version unterschiedlich).
- Wenn du **forensisch/Debugging** machst, dann nutze Bugreport/Logs bewusst und lokal (Abwägung: Bugreports können sehr viele Gerätezustände enthalten).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Android (AOSP) |
| Kategorie | Betriebssysteme |
| Website | https://source.android.com/ |
| Quellcode | https://android.googlesource.com/ |
| Lizenz | Apache-2.0 |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend |
| Jurisdiktion | Unklar (Quellcode-Projekt; betrieben von Google LLC / Open Handset Alliance) |
| Logs | Nicht zutreffend (Quellcode-Projekt; Logging hängt von Distribution/Build ab) |
| Retention | Nicht zutreffend (Quellcode-Projekt) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://policies.google.com/privacy
- AGB/Terms: https://policies.google.com/terms
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
AOSP ist ein Quellcode-Projekt. Datenschutz-/Telemetry-Fragen betreffen vor allem konkrete Android-Distributionen (z.B. OEM-ROMs, Custom-ROMs) und installierte Apps/Dienste.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** AOSP ist Quellcode/Dokumentation; keine Endnutzer-„Account-Daten“ für AOSP als Projekt erforderlich.
- **Wofür:** Bereitstellung von Quellcode, Dokumentation, Security Bulletins und Entwicklungs-/Build-Infos.
- **Weitergabe/Subprozessoren:** Nicht angegeben (für AOSP als Quellcode-Projekt nicht als klassischer SaaS-Dienst beschrieben).
- **Drittlandtransfer:** Unklar (Projektbetrieb/Hosting durch Google; Details nicht als „Datenflüsse“ für Endnutzer beschrieben).
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend.
- **Kontakt/DSAR/DPA:** Nicht zutreffend (Quellcode-Projekt; Endnutzer-Datenflüsse entstehen primär durch konkrete Distribution/Apps).

**Prüf-Schritte (selbst verifizieren):**
1) Für dein konkretes ROM: Einstellungen → Datenschutz/Sicherheit → „Diagnose“, „Feedback“, „Nutzungsdaten“  
   **Indikator:** klarer Schalter + Beschreibung, was gesendet wird.
2) App-Liste prüfen: vorinstallierte Dienste (OEM/Google/3rd party) → Berechtigungen/Netzwerkzugriff  
   **Indikator:** systemnahe Apps mit weitreichenden Berechtigungen sind transparent benannt.
3) Netzwerkverkehr stichprobenartig prüfen (Firewall/VPN-Log)  
   **Indikator:** reproduzierbare Endpunkte; ungewöhnliche „phone home“-Calls fallen auf.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nicht zutreffend (AOSP ist Quellcode; Telemetrie hängt von Distribution/Apps ab).
- **Abschaltbar?** Unklar (distribution-spezifisch).
- **Wo (Menüpfad):** typischerweise Einstellungen → Datenschutz/Sicherheit → Diagnose/Nutzungsdaten (distribution-spezifisch).

**Logs & Retention:**
- **Logging-Level:** Nicht zutreffend (Quellcode-Projekt; Gerätelogging ist OS-/Build-spezifisch)
- **Aufbewahrung:** Nicht zutreffend (Quellcode-Projekt)
- **Lösch-/Opt-out-Optionen:** auf Geräten distribution-spezifisch (z.B. Logs/Bugreports lokal löschen).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht zutreffend als Anbieter-Aussage (AOSP ist Quellcode; Geräteschutz hängt von der konkreten OS-Version/Build-Config ab).
- **KDF/Parameter/Schlüsselableitung:** Nicht zutreffend (kein Konto-/Vault-System).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (kein Anbieter-Account für AOSP).
- **Recovery/Account-Wiederherstellung:** Nicht zutreffend (betrifft Geräte-/ROM-Einrichtung, nicht AOSP als Projekt).
- **Vuln-Handling / Security-Kontakt:** Android Security Bulletins werden veröffentlicht; AOSP-Fixes werden darüber dokumentiert, und Bugs können über den Issue Tracker gemeldet werden.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Security Patch Level regelmäßig prüfen** (je nach ROM: Einstellungen → Über das Telefon).  
   **Prüfen:** aktuelles Datum/Monat erkennbar, Updates verfügbar/installiert.
2) **App-Berechtigungen sauber halten** (Kamera/Mikro/Standort nur wenn nötig).  
   **Prüfen:** Berechtigungsübersicht zeigt wenige „Immer erlaubt“.
3) **„Sensors off“ als Notfall-Option kennen** (Developer Options).  
   **Prüfen:** Schalter/Tile vorhanden und deaktiviert Sensorzugriffe im Test.

**Stolpersteine:**
- „AOSP-basiert“ sagt wenig über Datenschutz aus: **vorinstallierte Dienste/Apps** sind oft entscheidender (Abwägung: Komfort/Kompatibilität vs. Metadaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze möglichst wenige vorinstallierte Online-Dienste/Assistenten (nur wenn in deiner Distribution vorhanden).
- Trenne Apps nach Vertrauensniveau über Nutzerprofile/Arbeitsprofile.
- Halte die App-Auswahl schlank (weniger Angriffs- und Metadatenfläche).
**Abwägung:** weniger Komfort (z.B. Push/Sync je nach App-Stack).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Strikte Trennung: dediziertes Nutzerprofil für „gefährliche“ Apps oder separate Geräte-Workflows.
- Sensor-/Berechtigungs-Disziplin: Kamera/Mikro/Standort nur zeitweise aktivieren.
- Debug-Features aus lassen (USB-Debugging/Developer Options nur kurzzeitig und bewusst).
**Abwägung:** deutlicher Komfortverlust, mehr Prozessdisziplin.

</details>

## Features
- Quelloffene Android-Basis
- Builds/ROMs für Geräte möglich
- Upstream für viele Android-Derivate

## Alternativen
- GrapheneOS (hardened Android; Abwägung: Fokus auf unterstützte Geräte/Ökosystem)
- LineageOS (Custom ROM; Abwägung: Updates/Feature-Set je nach Gerät/Build-Variante)

## Nicht gelöst / offene Punkte
- AOSP als Quellcode beantwortet nicht automatisch, welche Daten eine konkrete Distribution tatsächlich sendet (OEM/ROM/Apps sind entscheidend).

## Quellen

- GrapheneOS (hardened Android; Trade-off: "Fokus auf unterstützte Geräte/Ökosystem)
- LineageOS (Custom ROM; Trade-off: "Updates/Feature-Set je nach Gerät/Build-Variante)
- title: "AOSP – Privacy indicators
- [Android Open Source Project (AOSP) – Source Android](https://source.android.com/)
- [Android Open Source Project – Licenses (About licenses)](https://source.android.com/docs/Einrichtung/about/licenses)
- [android.googlesource.com – AOSP Git Repositories](https://android.googlesource.com/)
- [AOSP – Legal notice](https://source.android.com/legal)
- [AOSP – Android Security Bulletins (Overview)](https://source.android.com/docs/security/bulletin/asb-overview)
- [AOSP – Android Security Bulletin—January 2026](https://source.android.com/docs/security/bulletin/2026/2026-01-01)
- [AOSP – Report and track bugs (Issue Tracker)](https://source.android.com/docs/Einrichtung/contribute/report-bugs)
- [AOSP – Sensors off (Developer options)](https://source.android.com/docs/core/interaction/sensors/sensors-off)
- [AOSP – Privacy indicators](https://source.android.com/docs/core/permissions/privacy-indicators)

