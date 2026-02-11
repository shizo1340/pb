---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / MEGA"
url: "/anbieter/mega/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-18"
robots: "index,follow"
description: "Kurzprofil von MEGA (Kategorie: Cloud & Sync)."
provider: ""
name: "MEGA"
category: "Cloud & Sync"
website: "https://mega.io"
repo: "https://github.com/meganz"
license: "BSD-2-Clause (MEGA SDK); MEGA Limited Code Review Licence (u.a. Webclient/Clients)"
policies: ""
privacy: "https://mega.nz/#privacy"
terms: "https://mega.nz/#terms"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "unknown"
free_tier: "unknown"
open_source: "partial"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "unknown"
kyc_required: "unknown"
jurisdiction: "Neuseeland (in Code-Review-Lizenz genannt; Dienst-AGB nicht verifiziert)"
region: "eu"
logs: "unknown"
retention: "unknown"
data_notes: "MEGA beschreibt clientseitige/Ende-zu-Ende-Verschlüsselung („User Controlled Encryption“). Details zu Datenerhebung, Subprozessoren, Logs/Retention sind ohne auswertbare Privacy-Doku hier unklar."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

MEGA ist ein Anbieter aus der Kategorie **Cloud & Sync**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Cloud-Speicher nutzen willst, bei dem der Anbieter clientseitige/Ende-zu-Ende-Verschlüsselung („User Controlled Encryption“) beschreibt und du mit Desktop/Web/CLI-Clients arbeiten möchtest.
- **Weniger geeignet wenn:** du für dein Threat-Model eine klar dokumentierte, öffentlich leicht auffindbare Aufstellung zu Datenerhebung, Subprozessoren, Logs und Retention brauchst.
- **Wichtigster Abwägung:** **Komfort (Sync/Sharing/Support)** vs. **Kontrolle über Schlüssel/Client-Verhalten** (lokale Caches/Metadaten auf deinen Geräten).

## Sofortmaßnahmen
- **Webclient nur im separaten Browser-Profil nutzen** (Wirkung: reduziert Vermischung von Cookies/Local Storage/IndexDB-Metadaten mit deinem normalen Surf-Profil).
- **Auf gemeinsam genutzten Geräten nach Nutzung ausloggen und Browser-Speicher löschen** (Wirkung: reduziert verbleibende lokale Metadaten-Caches des Webclients).
- **Sync nur für wirklich nötige Ordner aktivieren** (Wirkung: minimiert lokale Dateikopien und verringert die Angriffsfläche bei Gerätekompromittierung).

## Entscheidungshilfe
- Wenn du **Cloud-Sync zwischen Geräten** brauchst, dann nutze den Desktop-Client/CLI für definierte Ordner (Abwägung: lokale Kopien/Metadaten liegen auf dem Gerät).
- Wenn du **nur gelegentlich auf Dateien zugreifst**, dann nutze den Webclient in einem separaten Browser-Profil (Abwägung: Browser speichert lokale Metadaten-Caches, z.B. in IndexedDB).
- Wenn du **Schlüsselkontrolle** als zentrales Ziel hast, dann prüfe beim Onboarding, welche Recovery-/Account-Mechaniken angeboten werden (Abwägung: mehr Recovery-Komfort kann mehr Kontometadaten bedeuten).
- Wenn du **automatisierte Workflows/Backups** brauchst, dann ist eine CLI (MEGAcmd) relevant (Abwägung: du musst Berechtigungen/Token/Storage-Pfade sauber härten).
- Wenn du **Self-Hosting/Offline-first** willst, dann ist MEGA dafür nicht dokumentiert als Self-Hosting-Option in den Primärquellen dieser Seite (Abwägung: weniger Betriebsaufwand, aber weniger Kontrolle über Serverbetrieb/Standort).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | MEGA |
| Kategorie | Cloud & Sync |
| Website | https://mega.io |
| Quellcode | https://github.com/meganz |
| Lizenz | BSD-2-Clause (MEGA SDK); MEGA Limited Code Review Licence (u.a. Webclient/Clients) |
| Preismodell | unknown |
| Free Tier | unknown |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Neuseeland (in Code-Review-Lizenz genannt; Dienst-AGB nicht verifiziert) |
| Logs | unknown |
| Retention | unknown |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://mega.nz/#privacy
- AGB/Terms: https://mega.nz/#terms
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
MEGA beschreibt „User Controlled Encryption“ (UCE) und nennt Ende-zu-Ende-Verschlüsselung sowie verschlüsselte Transfers. Im Webclient werden Upload/Download clientseitig ver- und entschlüsselt (Worker), und Metadaten können lokal gecacht werden (IndexedDB).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Unklar (keine auswertbare Privacy-Policy-Datenerhebung hier dokumentiert)
- **Wofür:** Unklar
- **Weitergabe/Subprozessoren:** Unklar
- **Drittlandtransfer:** Unklar
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben
- **Kontakt/DSAR/DPA:** Unklar

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar
- **Abschaltbar?** Unklar
- **Wo (Menüpfad):** Unklar (je nach Plattform/Client)

**Logs & Retention:**
- **Logging-Level:** unknown
- **Aufbewahrung:** unknown
- **Lösch-/Opt-out-Optionen:** Unklar

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** MEGA beschreibt Ende-zu-Ende-Verschlüsselung („User Controlled Encryption“) und dass Dateien sowie Transfers verschlüsselt sind.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben
- **MFA/2FA/Passkeys/Hardware-Keys:** Unklar
- **Recovery/Account-Wiederherstellung:** Unklar
- **Vuln-Handling / Security-Kontakt:** Unklar (kein allgemeines SECURITY.md in mehreren Repos sichtbar; Bug-Bounty/VDP-Link existiert, Details nicht ausgewertet)

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (2FA/MFA), falls angeboten.  
   **Prüfen:** Nach Login im Account-/Security-Bereich steht „aktiv“ und zeigt die Methode.
2) **Sync/Backup bewusst begrenzen** (nur benötigte Ordner synchronisieren).  
   **Prüfen:** Sync-Liste zeigt nur definierte Ordner; Test mit Dummy-Datei (Upload/Download in beide Richtungen).
3) **Webclient im getrennten Browser-Profil nutzen** (z.B. „MEGA“-Profil).  
   **Prüfen:** Nur dieses Profil hat Login-Cookies/Local Storage; anderes Profil bleibt getrennt.

**Stolpersteine:**
- Browser-/Client-Caches können lokale Metadaten enthalten (Abwägung: Performance/Komfort vs. Spuren auf dem Gerät).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze MEGA vorzugsweise über Desktop/CLI statt im Hauptbrowser (reduziert Tracking-/Cookie-Kopplung).
- Vermeide unnötige Integrationen (z.B. automatische Medien-Uploads), falls in deinem Client vorhanden.
- Lege eine klare Geräte-Policy fest: Welche Geräte dürfen synchronisieren, welche nur lesen?  
**Abwägung:** mehr Bedienaufwand, mehr Disziplin bei Gerätewechsel/Einrichtung.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze MEGA nur aus einer separaten VM oder einem separaten Benutzerkonto (Isolation von Browser/Dateisystem).
- Beschränke Netzwerkzugriffe auf definierte Zwecke (z.B. nur während Sync-Fenstern) – **nur wenn** du dafür valide Endpunkte/Regeln dokumentiert hast.
- Trenne Identitäten strikt (separate Mail/Account-Kontexte), falls dein Modell das erfordert.  
**Abwägung:** deutlicher Komfortverlust, höhere Komplexität, Fehleranfälligkeit.

</details>

## Features
- Cloud-Speicher mit Sync/Backup (Desktop-App)
- Webclient (Browser)
- CLI-Zugriff inkl. Sync/Backup, WebDAV/Streaming-Server (MEGAcmd)
- Clientseitige Ver-/Entschlüsselung im Webclient (Upload/Download-Worker)

## Alternativen
- Nextcloud (Self-Hosting möglich; Abwägung: eigener Betrieb/Updates)
- Syncthing (Peer-to-Peer statt Cloud; Abwägung: keine zentrale Cloud-Historie/Sharing wie bei Hosted-Diensten)
- Proton Drive (Hosted; Abwägung: anderes Ökosystem/Kontoabhängigkeit)

## Nicht gelöst / offene Punkte
- Unklar: Öffentliche, detailreiche Angaben zu Datenerhebung, Subprozessoren, Logs und Retention.

## Quellen

- Nextcloud (Self-Hosting möglich; Trade-off: "eigener Betrieb/Updates)
- Syncthing (Peer-to-Peer statt Cloud; Trade-off: "keine zentrale Cloud-Historie/Sharing wie bei Hosted-Diensten)
- Proton Drive (Hosted; Trade-off: "anderes Ökosystem/Kontoabhängigkeit)
- [MEGA SDK – README (GitHub)](https://github.com/meganz/sdk)
- [MEGA Webclient – README (GitHub)](https://github.com/meganz/webclient)
- [MEGA Desktop (MEGAsync) – README (GitHub)](https://github.com/meganz/MEGAsync)
- [MEGAcmd – README (GitHub)](https://github.com/meganz/MEGAcmd)
- [MEGA Limited Code Review Licence (Legacy Firefox Extension, GitHub)](https://github.com/meganz/firefox-extension)
- [MEGA SDK – README (GitHub)](https://github.com/meganz/sdk)
- [MEGA Webclient – README (GitHub)](https://github.com/meganz/webclient)
- [MEGA Desktop (MEGAsync) – README (GitHub)](https://github.com/meganz/MEGAsync)
- [MEGAcmd – README (GitHub)](https://github.com/meganz/MEGAcmd)
- [MEGA Limited Code Review Licence (Legacy Firefox Extension, GitHub)](https://github.com/meganz/firefox-extension)
