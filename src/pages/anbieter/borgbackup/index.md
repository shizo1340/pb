---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / BorgBackup"
url: "/anbieter/borgbackup/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-05"
robots: "index,follow"
description: "Kurzprofil von BorgBackup (Kategorie: Backup)."
provider: ""
name: "BorgBackup"
category: "Backup"
website: "https://www.borgbackup.org/"
repo: "https://github.com/borgbackup/borg"
license: "BSD-3-Clause"
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
jurisdiction: "Nicht angegeben (Open-Source-Projekt)"
region: "unknown"
logs: "configurable"
retention: "configurable"
retention_notes: "konfigurierbar (lokal, z.B. via prune-Policy)"
data_notes: "BorgBackup ist ein lokales Backup-Tool (CLI). Daten liegen in einem Repository (lokal oder remote, z.B. via SSH). Bei aktivierter Verschlüsselung erfolgt die Verschlüsselung client-seitig; ein Remote-Host sieht weder Passphrase noch unverschlüsselte Daten."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

BorgBackup ist ein Anbieter aus der Kategorie **Backup**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Backups lokal oder auf einem eigenen/vertrauenswürdigen Ziel speichern willst (z.B. NAS/Server via SSH) und Verschlüsselung client-seitig nutzen möchtest.
- **Weniger geeignet wenn:** du einen vollständig gemanagten Cloud-Backup-Dienst mit Konto, Web-UI und Recovery-Support erwartest.
- **Wichtigster Abwägung:** maximale Kontrolle (Speicherort/Keys/Retention) vs. mehr Eigenaufwand (Key-Handling, Automatisierung, Restore-Tests).

## Sofortmaßnahmen
- **Quellcode mit Verschlüsselung anlegen:** reduziert Risiko, dass ein Remote-Speicher Ziel die Inhalte lesen kann.
- **Borg-Key außerhalb des Repos sichern (borg key export):** verhindert „Aussperren“ bei Verlust des Key-Materials.
- **Retention aktiv definieren (borg prune):** begrenzt Altstände und Kosten/Angriffsfläche durch „zu viele“ Backups.

## Entscheidungshilfe
- Wenn dein Backup-Ziel **nicht voll vertrauenswürdig** ist (z.B. gemieteter Server), dann nutze ein **verschlüsseltes Quellcode** (Abwägung: Key/Passphrase-Verlust = Datenverlust).
- Wenn du **keine Verschlüsselung** nutzen willst, dann nutze mindestens **authentifizierte Modi** statt `none` (Abwägung: weiterhin Metadaten/Dateiinhalte offen je nach Modus).
- Wenn du Backups remote per SSH betreibst, dann ist **Server-seitiges Härtung (borg serve, Restriktionen)** relevant (Abwägung: mehr Einrichtung/Testing).
- Wenn du Ransomware-/Account-Compromise-Szenarien abfedern willst, dann nutze **Append-only**-Mechanismen (Abwägung: schützt nicht automatisch vor allen Löschaktionen, erfordert Verständnis der Limits).
- Wenn du definierte Aufbewahrung brauchst (z.B. „7 Tage täglich, 6 Monate monatlich“), dann setze **prune-Regeln** und teste Restore (Abwägung: falsche Regeln können zu aggressiv löschen).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | BorgBackup |
| Kategorie | Backup |
| Website | https://www.borgbackup.org/ |
| Quellcode | https://github.com/borgbackup/borg |
| Lizenz | BSD-3-Clause |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend |
| Jurisdiktion | Nicht angegeben (Open-Source-Projekt) |
| Logs | configurable |
| Retention | konfigurierbar (lokal, z.B. via prune-Policy) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: Nicht angegeben
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
BorgBackup ist ein lokales Backup-Tool. Backups landen in einem Quellcode (lokal oder remote via SSH). Bei aktivierter Verschlüsselung erfolgt die Verschlüsselung client-seitig; ein Remote-Host sieht weder Passphrase noch unverschlüsselte Inhalte.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Backup-Inhalte + Metadaten im Borg-Quellcode (lokal oder auf deinem Remote-Ziel).
- **Wofür:** Erstellung/Verwaltung von Backups (Deduplikation, Restore, Integritätsprüfung).
- **Weitergabe/Subprozessoren:** Nicht zutreffend (keine Anbieter-Cloud als Produktbestandteil).
- **Drittlandtransfer:** Nicht zutreffend (Datenfluss hängt von deinem Speicherziel ab).
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend.
- **Kontakt/DSAR/DPA:** Nicht zutreffend (Software-Projekt ohne DSAR/DPA-Prozess als Dienst).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nicht angegeben (in den offiziellen Docs wird keine Telemetrie/Analytics-Funktion als Produktbestandteil beschrieben).
- **Abschaltbar?** Nicht angegeben.
- **Wo (Menüpfad):** Nicht zutreffend (CLI).

**Logs & Retention:**
- **Logging-Level:** configurable (u.a. über Logging-Konfiguration/Umgebungsvariablen in der Doku beschrieben).
- **Aufbewahrung:** konfigurierbar (z.B. per `borg prune`-Regeln).
- **Lösch-/Opt-out-Optionen:** Lokal steuerbar (löschen/prunen durch dich; keine zentrale Anbieter-Aufbewahrung).

**Abwägung am Punkt:** Detailliertere Logs helfen beim Debugging; auf Systemen mit mehreren Nutzer:innen können Logs/Command-History sensible Pfade/Repo-URLs preisgeben.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Verschlüsselung erfolgt lokal beim Client; Remote-Host sieht keine unverschlüsselten Inhalte (bei aktivierter Verschlüsselung).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (für Details siehe jeweilige Doku-Version/„Internals/Security“).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (kein Anbieter-Konto).
- **Recovery/Account-Wiederherstellung:** Kein „Account-Recovery“; Zugriff hängt von **Key + Passphrase** ab (Key-Backup ist entscheidend).
- **Vuln-Handling / Security-Kontakt:** Security-Kontakt ist in der offiziellen Support-Doku genannt.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Quellcode verschlüsselt initialisieren** (z.B. `borg init --encryption repokey /pfad/zum/repo` oder remote `user@host:repo`).  
   **Prüfen:** `borg info REPO` funktioniert nur mit Key+Passphrase.
2) **Key-Backup erstellen** (`borg key export REPO > key-backup.txt` oder sichere Ausgabeform).  
   **Prüfen:** Key-Backup liegt **nicht nur** im Repo/auf dem zu sichernden System.
3) **Retention + regelmäßige Checks einplanen** (`borg prune …` und `borg check …`).  
   **Prüfen:** nach einem Testlauf sind erwartete Generationen vorhanden; `borg check` ohne Fehler.

**Stolpersteine:**
- **Key/Passphrase-Verlust sperrt dich aus** (Abwägung: starke Vertraulichkeit vs. kein „Passwort zurücksetzen“).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze konsequent Verschlüsselung und vermeide „none“-Modus (Metadaten/Inhalte sonst offen).
- Reduziere Identitäts-/Metadaten-Leaks bei Remote-Repos: z.B. neutrale Repo-Namen/Pfade auf dem Server.
- Minimaler Datenabdruck durch klare Retention (z.B. nur tägliche Backups, begrenzte Historie).
**Abwägung:** weniger Historie kann Recovery-Optionen einschränken.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Remote-Repo zusätzlich serverseitig härten: `borg serve` mit Restriktionen (z.B. Pfad-Bindung) und **Append-only**-Mechanismen, wo sinnvoll.
- Keys getrennt vom Backup-Client halten (z.B. Offline-Backup/Print) und Restore-Prozedur dokumentieren.
- Separates Backup-System/Account für Remote-Zugriff (SSH-Key nur für Borg, keine Shell).
**Abwägung:** deutlich mehr Einrichtung- und Testaufwand, mehr Komplexität bei Recovery.

</details>

## Features
- Deduplizierende Backups (Chunking)
- Optionale Kompression
- Verschlüsselte Repositories (client-seitig, optional)
- Remote-Repositories (z.B. via SSH / borg serve)
- Aufbewahrung per Policy (z.B. borg prune)

## Alternativen
- Duck-typed CLI-Backup-Tools wie **restic** (Abwägung: anderes Repo-/Key-Modell und andere Defaults/Integrationen).
- **Kopia** (Abwägung: anderes Speichermodell/Feature-Set, ggf. andere Bedienlogik).
- **Duplicity** (Abwägung: anderes Archivformat/Backend-Fokus, je nach Einrichtung mehr Komponenten).

## Nicht gelöst / offene Punkte
- BorgBackup ist Software ohne zentrale Anbieter-Privacy-Policy/ToS als Dienst (Rechtsrahmen hängt von deinem Speicherziel ab).
- In den offiziellen Docs wird Telemetrie nicht als Funktion beschrieben; explizite Aussage dazu ist nicht zentral gebündelt 

## Quellen

- title: "Borg Doku: Support (Security Contact)
- [BorgBackup – Website](https://www.borgbackup.org/)
- [Borg GitHub Quellcode](https://github.com/borgbackup/borg)
- [Borg Doku: borg init (Verschlüsselung/Key-Backup/Remote)](https://borgbackup.readthedocs.io/en/stable/usage/init.html)
- [Borg Doku: Additional Notes (Append-only)](https://borgbackup.readthedocs.io/en/stable/usage/notes.html)
- [Borg Doku: borg serve](https://borgbackup.readthedocs.io/en/stable/usage/serve.html)
- [Borg Doku: borg prune (Retention-Policy)](https://borgbackup.readthedocs.io/en/stable/usage/prune.html)
- [Borg Doku: Usage General (Logging/Env Vars)](https://borgbackup.readthedocs.io/en/stable/usage/general.html)
- [Borg Doku: Support (Security Contact)](https://borgbackup.readthedocs.io/en/latest/support.html)

