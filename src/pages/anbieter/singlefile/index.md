---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / SingleFile"
url: "/anbieter/singlefile/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-04"
robots: "index,follow"
description: "Kurzprofil von SingleFile (Kategorie: Browser Addon)."
provider: ""
name: "SingleFile"
category: "Browser Addon"
website: "https://www.getsinglefile.com/"
repo: "https://github.com/gildas-lormeau/SingleFile"
license: "AGPL-3.0"
policies: ""
privacy: "https://github.com/gildas-lormeau/SingleFile/blob/master/privacy.md"
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
jurisdiction: "Unklar (nicht angegeben)"
region: "unknown"
logs: "none"
retention: "specified"
retention_notes: "lokal (bis manuell gelöscht)"
data_notes: "Standardmäßig lokale Verarbeitung; optionaler Upload zu Drittanbietern über konfigurierbare Ziele."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

SingleFile ist ein Anbieter aus der Kategorie **Browser Addon**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Webseiten lokal und offline als **eine** Datei archivieren willst, ohne separate Asset-Ordner.
- **Weniger geeignet wenn:** du keinerlei Add-ons mit umfangreichem Seitenzugriff nutzen möchtest (Abwägung: Komfort vs. Erweiterungs-Rechte/Angriffsfläche).
- **Wichtigster Abwägung:** lokale Archivierung ist datensparsam – **optional aktivierte Upload-Ziele** (z.B. GitHub/S3/Google Drive/WebDAV) verändern den Datenfluss deutlich.

## Sofortmaßnahmen
- **Ziel „lokal speichern“ prüfen:** verhindert unbeabsichtigtes Hochladen von Inhalten an Drittanbieter.
- **Auto-Save gezielt einsetzen:** reduziert unbeabsichtigtes Speichern sensibler Seiten (Abwägung: weniger Komfort).
- **Beim Speichern „Skripte entfernen“ nutzen (falls aktivierbar):** senkt Risiko, dass gespeicherte Seiten später aktiv nachladen/ausführen.

## Entscheidungshilfe
- Wenn du **nur offline archivieren** willst, dann nutze SingleFile mit lokalem Ziel (Abwägung: Dateien müssen selbst gesichert/organisiert werden).
- Wenn du **Cloud-Sync/Sharing** brauchst, dann aktiviere ein Upload-Ziel (Abwägung: Inhalte gehen an den jeweiligen Drittanbieter, inkl. dessen Metadaten/Logs).
- Wenn du **möglichst wenig Erweiterungs-Risiko** willst, dann verwende SingleFile nur bei Bedarf und deaktiviere Auto-Save (Abwägung: mehr manuelle Schritte).
- Wenn du **Archiv-Dateien später ohne aktive Inhalte** öffnen willst, dann aktiviere (falls vorhanden) Optionen zum Entfernen/Deaktivieren von Skripten (Abwägung: Seitenfunktionalität kann eingeschränkt sein).
- Wenn du **reproduzierbare, automatisierte Archivierung** brauchst, dann ist SingleFile CLI relevant (Abwägung: mehr Einrichtung/Automatisierungsaufwand).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | SingleFile |
| Kategorie | Browser Addon |
| Website | https://www.getsinglefile.com/ |
| Quellcode | https://github.com/gildas-lormeau/SingleFile |
| Lizenz | AGPL-3.0 |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Unklar (nicht angegeben) |
| Logs | none |
| Retention | lokal (bis manuell gelöscht) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://github.com/gildas-lormeau/SingleFile/blob/master/privacy.md
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Standardmäßig lokale Verarbeitung; optionaler Upload zu Drittanbietern über konfigurierbare Ziele.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Inhalte der besuchten Webseite (HTML, eingebettete Ressourcen wie Bilder/Styles/Fonts/Frames) werden zu einer lokalen HTML-Datei zusammengesetzt.  
- **Wofür:** Offline-Archivierung/Speichern als einzelne Datei.
- **Weitergabe/Subprozessoren:** Laut Privacy Policy werden Daten standardmäßig **nicht** an Anbieter-Server oder Dritte gesendet; **optional** kann ein Upload-Ziel konfiguriert werden (z.B. GitHub/S3/Google Drive/WebDAV).  
- **Drittlandtransfer:** Nicht angegeben (bei aktivierten Upload-Zielen abhängig vom gewählten Drittanbieter).
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben.
- **Kontakt/DSAR/DPA:** Nicht angegeben (kein typisches SaaS-Konto in der Basisnutzung).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nicht angegeben; laut Privacy Policy werden standardmäßig keine Daten an Anbieter-Server/Dritte gesendet.
- **Abschaltbar?** Unklar (wenn keine Telemetrie vorhanden ist, gibt es ggf. keinen Schalter).
- **Wo (Menüpfad):** Add-on/Extension → **Optionen/Einstellungen** (Pfad je nach Browser: Rechtsklick auf Symbol → „Optionen“ / „Manage extension“).

**Logs & Retention:**
- **Logging-Level:** none (lokale Nutzung ohne Anbieter-Backend)
- **Aufbewahrung:** lokal (bis manuell gelöscht)
- **Lösch-/Opt-out-Optionen:** gespeicherte HTML-Dateien lokal löschen; bei aktivierten Upload-Zielen zusätzlich im Zielsystem löschen.

**Abwägung am Punkt:** Weniger Telemetrie bedeutet weniger Diagnose-Daten; optionale Upload-Ziele erhöhen Metadaten- und Drittanbieter-Abhängigkeiten.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht zutreffend als Produktversprechen (lokale Dateierstellung; keine E2E-Cloud-Architektur genannt).
- **KDF/Parameter/Schlüsselableitung:** Nicht zutreffend (kein Konto/Passwort-Einrichtung in der Basisnutzung).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (kein SingleFile-Konto nötig).
- **Recovery/Account-Wiederherstellung:** Nicht zutreffend.
- **Vuln-Handling / Security-Kontakt:** Im GitHub-Security-Tab ist **keine** SECURITY.md/Security Policy hinterlegt.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Ziel „lokal speichern“ setzen** (keine Upload-Ziele aktivieren).  
   **Prüfen:** In den Optionen ist als Destination ein lokales Speichern konfiguriert.
2) **Berechtigungen/Scope prüfen** (Browser „Erweiterungen/Add-ons“ → Details).  
   **Prüfen:** Seitenzugriff ist nachvollziehbar (insb. wenn du nur selten speicherst: Nutzung bewusst „on demand“).
3) **Auto-Save deaktivieren**, wenn du nicht regelmäßig archivierst.  
   **Prüfen:** Kein automatisches Speichern nach Seitenladen/Tab-Wechsel.

**Stolpersteine:**
- Aktivierte Upload-Ziele (GitHub/S3/Google Drive/WebDAV) ändern den Datenfluss: Inhalte und ggf. Metadaten liegen dann beim jeweiligen Drittanbieter.

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze SingleFile nur für ausgewählte Seiten (kein Auto-Save).
- Vermeide Cloud-Ziele und speichere nur lokal; sichere Dateien separat (z.B. verschlüsseltes Backup).
- Nutze (falls verfügbar) Optionen, die Skripte/aktive Inhalte entfernen oder blockieren.
**Abwägung:** weniger Komfort/Automatisierung, mehr manuelles Handling.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze einen getrennten Browser/Profil nur fürs Archivieren (reduziert Vermischung von Cookies/Logins).
- Speichere Inhalte nur lokal und öffne Archive in einem isolierten Umfeld (z.B. separater Viewer/Profil).
- Deaktiviere alle Integrationen/Uploads konsequent; vermeide User-Scripts/Automationen, wenn nicht zwingend nötig.
**Abwägung:** deutlich mehr Aufwand und eingeschränkter Workflow.

</details>

## Features
- Speichert komplette Webseiten als eine HTML-Datei inkl. Ressourcen
- Auswahl speichern (nur markierter Bereich)
- Annotation/Notizen im Speicherdialog
- Auto-Save und Batch-Save
- Optionale Upload-/Sync-Ziele (GitHub, Amazon S3, Google Drive, WebDAV)
- Profile/Option-Sets, ggf. URL-basiert
- CLI-Variante verfügbar

## Alternativen
- Browser-Funktion „Seite speichern“ (HTML+Ordner) – **Abwägung:** weniger Add-on-Komplexität, aber mehr Dateichaos/Portabilitätsaufwand.
- „Drucken → PDF speichern“ – **Abwägung:** oft gut teilbar, aber nicht immer „faithful copy“ (Layout/Interaktivität kann abweichen).
- self-hosted Web-Archiving (z.B. ArchiveBox) – **Abwägung:** zentrale Sammlung/Suche möglich, aber eigener Betrieb/Updates nötig.

## Nicht gelöst / offene Punkte
- Es ist keine separate Security/Disclosure-Policy (SECURITY.md) dokumentiert.


## Quellen

- Browser-Funktion „Seite speichern“ (HTML+Ordner) – Trade-off: "mehr Dateien/Ordner, weniger Portabilität
- „Drucken → PDF speichern“ – Trade-off: "Layout/Interaktivität kann verloren gehen
- self-hosted Web-Archiving (z.B. ArchiveBox) – Trade-off: "eigener Betrieb/Storage/Updates nötig
- [SingleFile – Website](https://www.getsinglefile.com/)
- [SingleFile – GitHub Repository (README)](https://github.com/gildas-lormeau/SingleFile)
- [SingleFile – Privacy Policy (Repo)](https://github.com/gildas-lormeau/SingleFile/blob/master/privacy.md)
- [SingleFile – Security (GitHub Security Tab)](https://github.com/gildas-lormeau/SingleFile/security)
- [SingleFile – Website](https://www.getsinglefile.com/)
- [SingleFile – GitHub Quellcode (README)](https://github.com/gildas-lormeau/SingleFile)
- [SingleFile – Privacy Policy (Repo)](https://github.com/gildas-lormeau/SingleFile/blob/master/privacy.md)
- [SingleFile – Security (GitHub Security Tab)](https://github.com/gildas-lormeau/SingleFile/security)
