---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Syncthing"
url: "/anbieter/syncthing/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-12"
robots: "index,follow"
description: "Kurzprofil von Syncthing (Kategorie: Cloud & Sync)."
provider: ""
name: "Syncthing"
category: "Cloud & Sync"
website: "https://syncthing.net/"
repo: "https://github.com/syncthing/syncthing"
license: "MPL-2.0"
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
jurisdiction: "Schweden (Syncthing Foundation)"
region: "eu"
logs: "configurable"
retention: "configurable"
retention_notes: "konfigurierbar / lokal"
data_notes: "Peer-to-peer Sync zwischen eigenen Geräten; optionale Projekt-Infrastruktur (Discovery/Relay/Updates/Crash- & Usage-Reporting) kann Metadaten (z.B. IP/Device-ID) sichtbar machen."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Syncthing ist ein Anbieter aus der Kategorie **Cloud & Sync**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Dateien **zwischen eigenen Geräten** synchronisieren willst, ohne dass Nutzdaten in eine zentrale Cloud hochgeladen werden (Peer-to-peer).
- **Weniger geeignet wenn:** du **wenig Metadaten** nach außen geben willst, aber gleichzeitig auf **globale Discovery/öffentliche Relays** angewiesen bist (z.B. wechselnde IPs, NAT ohne Portfreigaben).
- **Wichtigster Abwägung:** **Konnektivität/Bequemlichkeit vs. Metadaten** (Discovery/Relay/Upgrade-Checks/Crash- & Usage-Reporting können IP/Device-ID oder „Syncthing läuft hier“ sichtbar machen).

## Sofortmaßnahmen
- **Web-GUI lokal lassen (127.0.0.1:8384)**, damit die Admin-Oberfläche nicht im Netzwerk sichtbar wird.
- **Usage Reporting aus lassen**, um regelmäßige Metadaten-Uploads an den Projektserver zu vermeiden.
- **Crash Reporting deaktivieren (wenn nicht nötig)**, um bei High-Risk-Einrichtungen jede automatische Ausleitung zu minimieren.

## Entscheidungshilfe
- Wenn du **ohne zentralen Cloud-Account** zwischen eigenen Geräten synchronisieren willst, dann nutze Syncthing (Abwägung: Discovery/Relay kann Metadaten offenlegen).
- Wenn du **nur im Heimnetz** synchronisierst, dann nutze **Local Discovery** und statische Geräteadressen, und deaktiviere **Global Discovery** (Abwägung: außerhalb des LAN wird’s ohne weitere Maßnahmen schwieriger).
- Wenn du hinter NAT sitzt und direkte Verbindungen oft scheitern, dann lasse **Relaying** an (Abwägung: Relay-Server sehen Device-IDs, auch wenn Inhalte weiterhin verschlüsselt sind).
- Wenn du **minimale Telemetrie** willst, dann deaktiviere **Crash Reporting** und lasse **Usage Reporting** aus (Abwägung: weniger automatische Diagnose für Entwickler/Support).
- Wenn du **maximale Kontrolle** willst, dann betreibe **eigene Discovery-/Relay-Server** oder nutze nur eigene Endpunkte (Abwägung: mehr Betrieb/Administration).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Syncthing |
| Kategorie | Cloud & Sync |
| Website | https://syncthing.net/ |
| Quellcode | https://github.com/syncthing/syncthing |
| Lizenz | MPL-2.0 |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend (Software ohne Checkout) |
| Jurisdiktion | Schweden (Syncthing Foundation) |
| Logs | configurable |
| Retention | konfigurierbar / lokal |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: Nicht angegeben
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Peer-to-peer Sync zwischen eigenen Geräten; optionale Projekt-Infrastruktur (Discovery/Relay/Updates/Crash- & Usage-Reporting) kann Metadaten (z.B. IP/Device-ID) sichtbar machen.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - **Global Discovery:** Device-ID + Listening-Port(s) werden periodisch an Discovery-Server angekündigt; Queries enthalten Device-IDs.  
  - **Local Discovery:** Broadcast/Multicast im LAN enthält Device-ID + Listening-Port.  
  - **Relays:** Relay-Server lernen Device-IDs der verbindenden Geräte.  
  - **Usage Reporting (optional):** regelmäßiger HTTPS-POST mit Nutzungsdaten (im UI per „Preview“ einsehbar).  
  - **Crash Reporting (standardmäßig aktiv):** Versionsinfo + technischer Stacktrace bei Absturz; laut Doku keine Dateinamen/Device-IDs/PII, aber Build-User/Hostname können im Versionsstring enthalten sein.  
  - **Lokale Metadaten:** Konfiguration + Crypto-Keys und Index-Datenbank mit Dateimetadaten liegen lokal im Config-/State-Verzeichnis.
- **Wofür:** Gerätefinden (Discovery), Konnektivität hinter NAT (Relay), Update-Hinweise, optionale Nutzungsstatistik, Crash-Diagnose.
- **Weitergabe/Subprozessoren:** Projekt-Infrastruktur nutzt u.a. GitHub (Repos/Releases/CI), Kubernetes-Cluster bei Scaleway (Discovery/Relay-Pool/Upgrade/Crash), sowie updown.io für Status-Monitoring (laut Infrastruktur-Doku).
- **Drittlandtransfer:** Unklar (Standorte/Transfers werden in den verlinkten Dokus nicht als Datenschutz-Statement ausgeführt).
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend (Software); Spenden/Support sind separat, aber nicht Teil der Sync-Nutzung.
- **Kontakt/DSAR/DPA:** Security-Kontakt: security@syncthing.net; Foundation-Kontakt: foundation@syncthing.org.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?**  
  - **Usage Reporting:** standardmäßig **aus**, GUI fragt nach der ersten Installation einmal nach Aktivierung.  
  - **Crash Reporting:** standardmäßig **an** („enabled out of the box“) für die meisten Nutzer:innen.
- **Abschaltbar?**  
  - **Usage Reporting:** ja (Settings → Usage Reporting, inkl. Preview).  
  - **Crash Reporting:** ja (Advanced Configuration Dialog).
- **Wo (Menüpfad):** Web-GUI → **Settings** (Usage Reporting) sowie Web-GUI → **Advanced Configuration** (Crash Reporting).

**Logs & Retention:**
- **Logging-Level:** configurable (lokal, per CLI/Service-Manager/Umgebung; z.B. Debug/Tracing nach Bedarf).
- **Aufbewahrung:** konfigurierbar / lokal (abhängig von Log-Datei/Journald/Rotation des Systems).
- **Lösch-/Opt-out-Optionen:** lokale Logs liegen unter deiner Kontrolle (Datei löschen/Rotation anpassen); Remote-Dienste siehe Datenflüsse.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Geräte-zu-Gerät-Traffic ist per TLS geschützt; Device-IDs basieren auf Zertifikat-Fingerprint (SHA-256). Inhalte bleiben auch bei Relay-Nutzung verschlüsselt.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (nicht als Passwort-KDF-Modell beschrieben; Syncthing arbeitet primär mit Zertifikaten/Keys).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (kein zentrales Konto). Relevanter sind GUI-Zugangsdaten und lokale Gerätesicherheit.
- **Recovery/Account-Wiederherstellung:** Es gibt keine zentrale Konto-Recovery; Gerätezugriff wird über Device-IDs/Keys und Freigaben gesteuert (bei Verlust eines Geräts: Zugriff auf Peers entziehen).
- **Vuln-Handling / Security-Kontakt:** Sicherheitslücken sollen per Mail an security@syncthing.net gemeldet werden; PGP-Key für verschlüsselte Kommunikation ist verlinkt.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Web-GUI absichern (lokal + Login setzen).**  
   **Prüfen:** GUI läuft auf `127.0.0.1:8384` und ist mit Benutzer/Passwort geschützt.
2) **Discovery/Relays passend zum Einsatz wählen.**  
   **Prüfen:** In den Settings ist nachvollziehbar, ob **Global Discovery** und **Relaying** aktiv sind und ob Sync zuverlässig zustande kommt.
3) **Telemetry bewusst entscheiden (Usage/Crash).**  
   **Prüfen:** Usage Reporting bleibt aus, wenn nicht benötigt; Crash Reporting ist im Advanced-Dialog sichtbar und ggf. deaktiviert.

**Stolpersteine:**
- **Global Discovery/Relays** erhöhen Erreichbarkeit, machen aber Metadaten (Device-ID/IP bzw. „Syncthing läuft hier“) leichter sichtbar.
- Der **Config-/Index-Ordner** enthält Keys und Dateimetadaten; bei sensiblen Daten gehört er auf ein verschlüsseltes Laufwerk bzw. unter Full-Disk-Encryption.

<details>
<summary>Profil B (Datensparsam)</summary>

- **Global Discovery deaktivieren** und stattdessen **statische Geräteadressen** oder nur **Local Discovery** nutzen.
- **Relaying deaktivieren** oder auf **eigene/vertrauenswürdige Relays** einschränken (wenn direkte Verbindungen möglich sind).
- **Usage Reporting aus** lassen und **Crash Reporting deaktivieren**, wenn du keine automatische Ausleitung möchtest.

**Abwägung:** mehr Handarbeit bei Erreichbarkeit (NAT, wechselnde IPs), dafür weniger externe Metadatenkontakte.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Keine öffentlichen Infrastrukturpfade:** Global Discovery + öffentliche Relays aus; nur eigene Endpunkte oder eigene Netze (VPN/SSH-Tunnel) verwenden.
- **GUI nie ins Netzwerk exponieren:** GUI bleibt localhost; Remote-Zugriff nur über Tunnel/Reverse-Proxy nach offizieller Doku.
- **Angriffsfläche minimieren:** Auto-Upgrades deaktivieren und Updates kontrolliert einspielen; Advanced Settings nur gezielt anfassen (Warnhinweise beachten).

**Abwägung:** deutlicher Komfortverlust (Einrichtung/Fehlersuche), höhere Komplexität, und Konnektivität kann ohne eigene Infrastruktur schwieriger werden.

</details>

## Features
- Peer-to-peer Dateisynchronisation zwischen eigenen Geräten (kein Cloud-Upload der Nutzdaten)
- TLS-geschützte Verbindungen zwischen Geräten
- Optionale globale Discovery-Server und öffentliche Relay-Server (abschaltbar/ersetzbar)
- Web-GUI (standardmäßig nur lokal erreichbar)
- Optional: Usage Reporting (standardmäßig aus, wird einmal abgefragt)
- Automatic Crash Reporting (standardmäßig an, in Advanced Settings deaktivierbar)
- „Untrusted (Encrypted) Devices“ für verschlüsselte Ablage auf nicht-vertrauenswürdigen Geräten

## Alternativen
- Nextcloud Files (Server-basiert; Abwägung: zentraler Server/Account vs. Peer-to-peer)
- Seafile (Server-basiert; Abwägung: zentrale Administration vs. zusätzlicher Betrieb)
- Resilio Sync (proprietär; Abwägung: weniger Transparenz vs. ggf. Komfort)
- rsync/SSH (manueller/skriptbarer Sync; Abwägung: weniger Komfort vs. minimale Zusatzdienste)

## Nicht gelöst / offene Punkte
- Konkrete **Aufbewahrungsfristen** für Metadaten auf Projekt-Servern (z.B. Discovery/Relay-Pool/Upgrade/Usage/Crash) sind nicht als Retention-Statement beschrieben.

## Quellen

- Optional: "Usage Reporting (standardmäßig aus, wird einmal abgefragt)
- Nextcloud Files (Server-basiert; Trade-off: "zentraler Server/Account vs. Peer-to-peer)
- Seafile (Server-basiert; Trade-off: "zentrale Administration vs. zusätzlicher Betrieb)
- Resilio Sync (proprietär; Trade-off: "weniger Transparenz vs. ggf. Komfort)
- rsync/SSH (manueller/skriptbarer Sync; Trade-off: "weniger Komfort vs. minimale Zusatzdienste)
- https://syncthing.net/foundation/
- [Security Principles — Syncthing documentation](https://docs.syncthing.net/users/security.html)
- [Automatic Crash Reporting — Syncthing documentation](https://docs.syncthing.net/users/crashrep.html)
- [Syncthing Infrastructure — Syncthing documentation](https://docs.syncthing.net/dev/infrastructure.html)
- [Command Line Operation — Syncthing documentation](https://docs.syncthing.net/users/syncthing.html)
- [The GUI Listen Address — Syncthing documentation](https://docs.syncthing.net/users/guilisten.html)
- [Syncthing Configuration — Syncthing documentation](https://docs.syncthing.net/users/config.html)
- [Advanced Configuration — Syncthing documentation](https://docs.syncthing.net/users/advanced.html)
- [Syncthing | Security](https://syncthing.net/security/)
- [The Syncthing Foundation](https://syncthing.net/foundation/)
