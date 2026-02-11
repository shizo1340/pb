---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Restic"
url: "/anbieter/restic/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von Restic (Kategorie: Backup)."
provider: ""
name: "Restic"
category: "Backup"
website: "https://restic.net/"
repo: "https://github.com/restic/restic"
license: "BSD-2-Clause"
policies: ""
privacy: "https://forum.restic.net/privacy"
terms: "Nicht angegeben"
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
jurisdiction: "Nicht angegeben (Open-Source-Projekt)"
region: "unknown"
logs: "configurable"
retention: "configurable"
retention_notes: "konfigurierbar (Snapshots löschen via `forget` + Datenbereinigung via `prune`)"
data_notes: "Restic ist eine lokale Backup-Software (CLI), kein gehosteter Dienst: Kein Konto nötig. Backups werden in einem Repository abgelegt und laut Doku immer verschlüsselt und authentifiziert; das Ziel (lokal/remote Backend) wählst du selbst."
features: ""
alternatives: ""
payment_processors: "Nicht zutreffend"
sources: ""
---
## Kurzprofil

Restic ist ein Anbieter aus der Kategorie **Backup**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Backups lokal/remote ablegen willst, dabei aber **Inhalte standardmäßig verschlüsselt** speichern möchtest – ohne Nutzerkonto beim Projekt.
- **Weniger geeignet wenn:** du ein „Hosted Backup“-Produkt mit Web-UI, Account-Verwaltung und Support-Prozessen aus einer Hand erwartest.
- **Wichtigster Abwägung:** Verschlüsselung schützt Inhalte auf untrusted Storage – dafür hängt alles an deiner **Quellcode-Passphrase** (Passphrase weg = Restore praktisch nicht möglich).

## Sofortmaßnahmen
- **Nutze eine starke Quellcode-Passphrase + sichere Ablage:** schützt Backup-Inhalte auf Fremdspeicher, verhindert „Backup als Klartext-Leak“.
- **Lege Retention fest und automatisiere `forget --prune`:** begrenzt Datenwachstum (Abwägung: `prune` kann lange dauern und sperrt das Repo währenddessen).
- **Plane regelmäßige Integritätschecks (`restic check`):** erkennt Schäden früh (Abwägung: mit `--read-data` I/O-lastig).

## Entscheidungshilfe
- Wenn du Backups auf **nicht vertrauenswürdigen Speicher** (z.B. NAS/Cloud-Object-Storage) legen willst, dann nutze Restic als „Client-seitige Verschlüsselung“ (Abwägung: Passphrase-Management wird kritisch).
- Wenn du **schnelle Backups** brauchst, dann nutze den lokalen Cache (Abwägung: Cache existiert auf dem Gerät; laut Doku ist er verschlüsselt, aber bleibt ein lokales Artefakt).
- Wenn du **definierte Aufbewahrung** willst, dann nutze `forget` (Snapshots entfernen) + `prune` (nicht mehr referenzierte Daten entfernen) (Abwägung: `prune` sperrt das Quellcode und kann lange laufen).
- Wenn du ein **hohes Integritätsniveau** brauchst, dann nutze `restic check --read-data` oder `--read-data-subset` (Abwägung: dauert länger, mehr Netzwerk/IO).
- Wenn du Metadaten auf dem Zielsystem minimieren willst, dann halte Backups **offline/air-gapped** oder trenne Storage-Standorte (Abwägung: mehr Operativaufwand).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Restic |
| Kategorie | Backup |
| Website | https://restic.net/ |
| Quellcode | https://github.com/restic/restic |
| Lizenz | BSD-2-Clause |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend |
| Jurisdiktion | Nicht angegeben (Open-Source-Projekt) |
| Logs | configurable |
| Retention | konfigurierbar (Snapshots löschen via `forget` + Datenbereinigung via `prune`) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://forum.restic.net/privacy
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Restic ist eine lokale Backup-Software (CLI), kein gehosteter Dienst: Kein Konto nötig. Backups werden in einem Quellcode abgelegt und laut Doku immer verschlüsselt und authentifiziert; das Ziel (lokal/remote Backend) wählst du selbst.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Kein Account nötig; im Quellcode liegen verschlüsselte Daten/Metadaten. In den Key-Dateien sind laut Design-Doku u.a. „hostname“/„username“ als Metadatenfelder enthalten (zur Information) und KDF-Parameter (`scrypt`, `N`, `r`, `p`, `salt`).
- **Wofür:** Backups + Wiederherstellung aus Snapshots; Quellcode-Keys werden aus Passphrase via scrypt abgeleitet.
- **Weitergabe/Subprozessoren:** Nicht zutreffend (lokale Software, kein zentraler Dienst).
- **Drittlandtransfer:** Nicht zutreffend (abhängig vom von dir gewählten Storage/Backend).
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend.
- **Kontakt/DSAR/DPA:** Nicht zutreffend (Open-Source-Projekt ohne Konto-/Kundendatenfluss).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nicht angegeben (keine dokumentierte Telemetrie-Funktion als Produktmerkmal).
- **Abschaltbar?** Nicht zutreffend / Unklar (da keine Telemetrie-Option dokumentiert ist).
- **Wo (Menüpfad):** CLI: Ausgabe/Logs entstehen lokal durch deinen Aufruf (z.B. Cron/Systemd-Logging).

**Logs & Retention:**
- **Logging-Level:** configurable (lokale Ausgabe; Debug/Verbosity hängt vom Aufruf/Umfeld ab).
- **Aufbewahrung:** konfigurierbar über Snapshot-Policies (`forget`) und Datenbereinigung (`prune`).
- **Lösch-/Opt-out-Optionen:** Snapshots entfernen per `restic forget`; unreferenzierte Daten entfernen per `restic prune` (optional automatisiert über `forget --prune`).

**Abwägung am Punkt:** Weniger Logging vereinfacht Datenschutz, erschwert aber Fehlersuche; aggressive Retention spart Speicher, erhöht aber Risiko von „zu wenig Wiederherstellungspunkten“.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Quellcode-Daten sind laut Design-Doku verschlüsselt (AES-256-CTR) und authentifiziert (Poly1305-AES).
- **KDF/Parameter/Schlüsselableitung:** scrypt; Key-Bytes werden aus Passphrase + `salt` und Parametern (`N`, `r`, `p`) abgeleitet (Design-Doku).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (kein Konto/kein Login-Prozess).
- **Recovery/Account-Wiederherstellung:** Wiederherstellung hängt von Quellcode + Passphrase ab; Passphrase-Handling ist dein Recovery-Faktor.
- **Vuln-Handling / Security-Kontakt:** Auf GitHub ist „No security policy detected“ für `restic/restic` ausgewiesen.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Quellcode initialisieren + starke Passphrase setzen**  
   **Prüfen:** `restic init` erfolgreich; Passphrase ist lang & einzigartig (Password Manager).
2) **Passphrase sicher automatisieren** (z.B. `RESTIC_PASSWORD_FILE`)  
   **Prüfen:** Passwortdatei hat restriktive Rechte (nur Benutzer lesbar) und wird nicht mitgesichert/aus Versehen geteilt.
3) **Retention + Wartung einplanen** (`forget --prune` + regelmäßiges `check`)  
   **Prüfen:** `forget` entfernt erwartete Snapshots; `prune` läuft in Wartungsfenstern; nach dem Prune ggf. `restic check`.

**Stolpersteine:**
- **`prune` sperrt das Quellcode** und kann lange dauern (Abwägung: Speicheraufbau vs. Wartungsfenster).
- **Passphrase-Verlust** ist ein Restore-Blocker (Abwägung: starke Verschlüsselung vs. Recovery-Verantwortung).

<details>
<summary>Profil B (Datensparsam)</summary>

- Halte Backups bevorzugt **offline** oder in separaten Storage-Zonen (Abwägung: weniger Komfort/Automatisierung).
- Trenne Backup-Identität: eigener System-User/Service-Account nur für Backups (Abwägung: mehr Einrichtung).
- Minimiere lokale Spuren: Cache-Location/Temp-Verzeichnisse bewusst wählen (Abwägung: Performance kann sinken).

**Abwägung:** weniger Metadaten und geringere Koppelung an Online-Dienste, dafür mehr Betriebsaufwand.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Backup-System strikt isolieren (separates Gerät/VM), Repo-Ziel nur über definierte Kanäle erreichbar (Abwägung: höhere Komplexität).
- Regelmäßige Integritätsprüfungen mit Datenlese-Checks (`--read-data`/Subset) (Abwägung: sehr I/O-lastig).
- Wiederherstellung testen (stichprobenartig Restore in isolierte Umgebung) (Abwägung: Zeit/Prozessaufwand).

**Abwägung:** maximaler Prozess- und Härtungsaufwand, dafür höhere Robustheit gegen lokale Kompromittierung und stille Datenkorruption.

</details>

## Features
- Quellcode-Inhalte sind verschlüsselt (AES-256-CTR) und authentifiziert (Poly1305-AES) laut Design-Doku
- Schlüsselableitung via scrypt (KDF-Parameter werden im Key-File gespeichert, laut Design-Doku)
- Lokaler Cache zur Beschleunigung; Cache-Ordner ist pro Quellcode getrennt (laut Doku)
- Snapshot-basierte Backups + Aufbewahrung/Retention per `forget`/`prune` (laut Doku)
- Integritätsprüfung per `restic check` und optional `--read-data`/`--read-data-subset` (laut Doku)

## Alternativen
- BorgBackup (Backup; Abwägung: anderes Repo-Format/Workflow, erfordert ebenfalls Passphrase-Handling)
- Kopia (Backup; Abwägung: anderes Feature-/Policy-Einrichtung, GUI/CLI je nach Nutzung)
- Duplicati (Backup; Abwägung: anderes Runtime-/Ökosystem, andere Restore-/Repo-Mechanik)

## Nicht gelöst / offene Punkte
- Offizieller Security/Disclosure-Prozess ist im `restic/restic` GitHub-Security-Tab nicht als Policy hinterlegt.
- Forum-Privacy-Policy existiert; eine separate Privacy-/Legal-Seite für rein lokale Tool-Nutzung ist nicht als eigene Policy ausgewiesen.

## Quellen

- BorgBackup (Backup; Trade-off: "anderes Repo-Format/Workflow, erfordert ebenfalls Passphrase-Handling)
- Kopia (Backup; Trade-off: "anderes Feature-/Policy-Setup, GUI/CLI je nach Nutzung)
- Duplicati (Backup; Trade-off: "anderes Runtime-/Ökosystem, andere Restore-/Repo-Mechanik)
- [restic – Homepage](https://restic.net/)
- [restic/restic (GitHub)](https://github.com/restic/restic)
- [Design: "Encryption & KDF (restic Doku)](https://restic.readthedocs.io/en/v0.13.1/design.html)
- [References: "Local Cache (restic Doku)](https://restic.readthedocs.io/en/stable/100_references.html)
- [Manual: "Caching (restic Doku)](https://restic.readthedocs.io/en/latest/manual_rest.html)
- [Snapshots entfernen: "forget/prune (restic Doku)](https://restic.readthedocs.io/en/stable/060_forget.html)
- [GitHub Security Overview (restic/restic)](https://github.com/restic/restic/security)
- [Forum Privacy Policy (restic)](https://forum.restic.net/privacy)
- [restic – Homepage](https://restic.net/)
- [restic/restic (GitHub)](https://github.com/restic/restic)
- [Design: Encryption & KDF (restic Doku)](https://restic.readthedocs.io/en/v0.13.1/design.html)
- [References: Local Cache (restic Doku)](https://restic.readthedocs.io/en/stable/100_references.html)
- [Manual: Caching (restic Doku)](https://restic.readthedocs.io/en/latest/manual_rest.html)
- [Snapshots entfernen: forget/prune (restic Doku)](https://restic.readthedocs.io/en/stable/060_forget.html)
- [GitHub Security Overview (restic/restic)](https://github.com/restic/restic/security)
- [Forum Privacy Policy (restic)](https://forum.restic.net/privacy)
