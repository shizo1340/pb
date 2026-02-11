---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Linux (allgemein)"
url: "/anbieter/linux/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-17"
robots: "index,follow"
description: "Kurzprofil von Linux (allgemein) (Kategorie: Betriebssysteme)."
provider: ""
name: "Linux (allgemein)"
category: "Betriebssysteme"
website: "https://www.kernel.org/"
repo: "https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git"
license: "GPL-2.0-only WITH Linux-syscall-note"
policies: ""
privacy: "Nicht angegeben (Linux ist kein zentraler Online-Dienst; je nach Distribution/Projektseiten unterschiedlich)"
terms: "Nicht angegeben (Linux ist kein zentraler Dienst; kernel.org hat Legal Disclaimers: https://www.kernel.org/legal.html)"
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
jurisdiction: "Nicht angegeben (dezentral / global)"
region: "unknown"
logs: "configurable"
retention: "configurable"
retention_notes: "konfigurierbar (lokal; abhängig von systemd-journald/logrotate)"
data_notes: "Linux (allgemein) ist kein zentraler Anbieter mit Account-Backend, sondern ein Ökosystem aus Kernel + Distributionen. Datenflüsse (Updates/Repos, Telemetrie, Crash-Reporting) hängen stark von der gewählten Distribution und aktivierten Diensten ab."
features: ""
alternatives: ""
payment_processors: "Nicht zutreffend"
sources: ""
---
## Kurzprofil

Linux (allgemein) ist ein Anbieter aus der Kategorie **Betriebssysteme**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du ein Betriebssystem ohne Account-Pflicht nutzen willst und Kontrolle über Updates, Dienste und Datenflüsse selbst verwalten kannst.
- **Weniger geeignet wenn:** du ein einheitliches „Produkt“ mit zentraler Privacy Policy, Support-Prozess und festen Server-Zusagen erwartest (Linux ist dezentral: Distributionen unterscheiden sich).
- **Wichtigster Abwägung:** maximale Anpassbarkeit vs. mehr Verantwortung für sichere Defaults, Updates, Diensthärtung und Backup/Recovery.

## Sofortmaßnahmen
- **Full-Disk-Encryption bei der Installation aktivieren** → reduziert Risiko bei Geräteverlust (Abwägung: Recovery/Passphrase-Handling).
- **MAC/LSM einschalten (z.B. AppArmor-Profiling)** → begrenzt App-Rechte über klassische Dateirechte hinaus (Abwägung: Kompatibilität/Tuning).
- **Kernel-Härtung prüfen (Lockdown/Modul-Signaturen, wo verfügbar)** → erschwert Kernel-Manipulationen (Abwägung: Debugging/Custom-Module).

## Entscheidungshilfe
- Wenn du **ohne Konto/Cloud-Zwang** arbeiten willst, dann ist Linux als lokales OS grundsätzlich passend (Abwägung: du pflegst Updates/Backups selbst).
- Wenn du **weniger Datenabfluss** willst, dann reduziere unnötige Online-Dienste (z.B. Crash-Reporter, „Phone-home“-Features der Distribution) (Abwägung: weniger Diagnose/Komfort).
- Wenn du **Laptop-Diebstahl** realistisch einpreist, dann ist Full-Disk-Encryption relevant (Abwägung: Schlüsselmanagement/Recovery).
- Wenn du **High-Risk** hast, dann sind LSM/MAC und Kernel-Härtung (Lockdown/Signaturen) wichtig (Abwägung: mehr Einrichtung, weniger „Bastel-Flexibilität“).
- Wenn du **Self-Hosting/Offline** priorisierst, dann setze auf lokale Datenhaltung + lokale Backups statt Cloud-Sync (Abwägung: mehr Eigenbetrieb).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Linux (allgemein) |
| Kategorie | Betriebssysteme |
| Website | https://www.kernel.org/ |
| Quellcode | https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git |
| Lizenz | GPL-2.0-only WITH Linux-syscall-note |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend |
| Jurisdiktion | Nicht angegeben (dezentral / global) |
| Logs | configurable |
| Retention | konfigurierbar (lokal; abhängig von systemd-journald/logrotate) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: Nicht angegeben (Linux ist kein zentraler Online-Dienst; je nach Distribution/Projektseiten unterschiedlich)
- AGB/Terms: Nicht angegeben (Linux ist kein zentraler Dienst; kernel.org hat Legal Disclaimers: https://www.kernel.org/legal.html)
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Linux (allgemein) ist kein zentraler Anbieter mit Account-Backend, sondern ein Ökosystem aus Kernel + Distributionen. Datenflüsse (Updates/Repos, Telemetrie, Crash-Reporting) hängen stark von der gewählten Distribution und aktivierten Diensten ab.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Nicht zentral definiert (Kernel/OS ist lokal; Netzwerkverkehr entsteht durch Distribution/Repos/zusätzliche Software).
- **Wofür:** Updates/Quellcode-Zugriff, Zeit-Sync, Paketquellen, ggf. Crash-/Fehlerberichte (distributionabhängig).
- **Weitergabe/Subprozessoren:** Nicht angegeben (keine zentrale Subprozessor-Struktur).
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend.
- **Kontakt/DSAR/DPA:** Nicht angegeben (kein zentraler Dienst). *(Für Kernel-Sicherheitsmeldungen existiert ein Security-Team-Kontakt, siehe Abschnitt „Sicherheit“.)*

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nicht angegeben (kernel-seitig keine einheitliche Telemetrie; distribution-/softwareabhängig).
- **Abschaltbar?** Unklar (abhängig von Distribution/Installationsprofil).
- **Wo (Menüpfad):** Distribution-spezifisch (z.B. „Privacy“, „Diagnostics“, „Problem Reporting“).

**Logs & Retention:**
- **Logging-Level:** configurable
- **Aufbewahrung:** konfigurierbar (lokal; abhängig von systemd-journald/logrotate)
- **Lösch-/Opt-out-Optionen:** lokal möglich (Logrotation/Journal-Settings), aber abhängig vom Einrichtung.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** dm-crypt bietet transparente Blockgeräte-Verschlüsselung über die Kernel Crypto API (Userland-Einrichtung nötig).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (bei Full-Disk-Encryption typischerweise userland-/LUKS-abhängig, nicht kernelweit festgelegt).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (kein zentrales Konto).
- **Recovery/Account-Wiederherstellung:** OS-/Distribution-abhängig (z.B. Boot-/Disk-Recovery, Backups, Rescue-Medien).
- **Vuln-Handling / Security-Kontakt:** Kernel-Sicherheitslücken sollen an das Linux kernel security team gemeldet werden (Kontakt: security@kernel.org laut Kernel-Doku).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Full-Disk-Encryption aktivieren** (bei Neuinstallation im Installer: „Disk verschlüsseln“).  
   **Prüfen:** Boot fragt Passphrase / LUKS aktiv; Swap ggf. verschlüsselt.
2) **Firewall aktivieren** (Distribution-Tool, z.B. `ufw` oder `firewalld`).  
   **Prüfen:** Standard-Policy „deny incoming“ (sofern passend), nur benötigte Ports offen.
3) **MAC/LSM nutzen (wenn verfügbar)** (z.B. AppArmor aktiv und Profile geladen).  
   **Prüfen:** LSM ist aktiv; Anwendungen laufen nicht global „unconfined“, soweit Profile existieren.

**Stolpersteine:**
- Verschlüsselung schützt Daten „at rest“, nicht vor Malware im laufenden System (Abwägung: Geräteverlust vs. Runtime-Risiko).
- „Alles minimal“ kann Usability kosten (z.B. weniger automatische Diagnose, mehr manuelle Fehlersuche).

<details>
<summary>Profil B (Datensparsam)</summary>

- Reduziere Hintergrunddienste auf das Nötigste (z.B. keine unnötigen Online-Accounts/Sync-Services).
- Deaktiviere optionales Crash-Reporting/Metrics (sofern vorhanden).
- Nutze lokale Backups (offline/extern) statt Cloud-Sync.
**Abwägung:** weniger Komfort/Automatisierung, mehr Eigenpflege.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Kernel-Härtung prüfen: **Lockdown-Modus** (Kernel-Parameter `lockdown=`) und **Modul-Signaturprüfung** (wenn Distribution/Boot-Chain das unterstützt).
- Erhöhe Prozess-Isolation (MAC/LSM strikt, getrennte Benutzer/Container/VM je Risiko-Domäne).
- Striktes Update- und Patch-Management (zeitnah, aber kontrolliert; Kernel-/Firmware-Kette beachten).
**Abwägung:** deutlich mehr Komplexität, potenzielle Inkompatibilitäten (Treiber/Debugging/Custom-Kernel).

</details>

## Features
- Lokales Betriebssystem ohne Konto-Pflicht
- Kernel-Sicherheitsmechanismen (LSM wie AppArmor/Yama), Kernel-Lockdown, Modul-Signaturen (je nach Einrichtung)
- Unterstützung für Blockgeräte-Verschlüsselung via dm-crypt (Userland-Einrichtung erforderlich)

## Alternativen
- FreeBSD (Abwägung: anderer Kernel/Userspace, teils andere Treiber-/App-Verfügbarkeit)
- OpenBSD (Abwägung: Fokus auf Sicherheitsdefaults, oft weniger Hardware-/Desktop-Komfort)
- Windows (Abwägung: proprietär + enges Cloud-Ökosystem vs. breite App-/Treiberbasis)
- macOS (Abwägung: proprietär + Apple-Ökosystem vs. integrierte Sicherheits-/Recovery-Workflows)

## Nicht gelöst / offene Punkte
- „Linux (allgemein)“ hat keine zentrale Privacy-/Terms-Dokumentation wie ein Cloud-Anbieter; Aussagen zu Telemetrie/Datenflüssen sind distributionabhängig.
- Logs/Retention sind lokal konfigurierbar, aber in der Praxis stark von Distribution und Defaults (journald/logrotate) abhängig.

## Quellen

- FreeBSD (Trade-off: "anderer Kernel/Userspace, teils andere Treiber-/App-Verfügbarkeit)
- OpenBSD (Trade-off: "Fokus auf Sicherheitsdefaults, oft weniger Hardware-/Desktop-Komfort)
- Windows (Trade-off: "proprietär + enges Cloud-Ökosystem vs. breite App-/Treiberbasis)
- macOS (Trade-off: "proprietär + Apple-Ökosystem vs. integrierte Sicherheits-/Recovery-Workflows)
- https://www.kernel.org/legal.html
- [The Linux Kernel Archives (kernel.org)](https://www.kernel.org/)
- [git.kernel.org (Kernel Repositories)](https://git.kernel.org/)
- [Linux Kernel COPYING / Lizenzhinweis](https://www.kernel.org/doc/linux/COPYING)
- [Security bugs (Kernel-Doku)](https://docs.kernel.org/process/security-bugs.html)
- [dm-crypt (Kernel-Doku)](https://docs.kernel.org/admin-guide/device-mapper/dm-crypt.html)
- [Kernel module signing facility (Kernel-Doku)](https://docs.kernel.org/admin-guide/module-signing.html)
- [Kernel command-line parameters (Lockdown u.a.)](https://docs.kernel.org/admin-guide/kernel-parameters.html)
- [AppArmor (Kernel-Doku)](https://docs.kernel.org/admin-guide/LSM/apparmor.html)
- [Yama LSM (Kernel-Doku)](https://docs.kernel.org/admin-guide/LSM/Yama.html)
- [kernel.org Legal Disclaimers](https://www.kernel.org/legal.html)
