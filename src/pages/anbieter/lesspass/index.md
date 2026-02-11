---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / LessPass"
url: "/anbieter/lesspass/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-17"
robots: "index,follow"
description: "Kurzprofil von LessPass (Kategorie: Passwort-Manager)."
provider: ""
name: "LessPass"
category: "Passwort-Manager"
website: "https://lesspass.com/"
repo: "https://github.com/lesspass/lesspass"
license: "GPL-3.0 (laut Repo; Mobile zusätzlich MPL-2.0)"
policies: ""
privacy: "https://raw.githubusercontent.com/lesspass/lesspass/refs/heads/main/packages/lesspass-mobile/android/privacy-policy.md"
terms: "Nicht angegeben"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "unknown"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Nicht angegeben"
region: "unknown"
logs: "unknown"
retention: "unknown"
data_notes: "LessPass erzeugt Passwörter deterministisch aus Site+Login+Master-Passwort (offline möglich). Historisch gab es eine „Connected/Database“-Variante zum Speichern von Passwort-Profilen; laut Anbieter-Blog wurde der LessPass-Database-Server zum 01.11.2024 abgeschaltet."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

LessPass ist ein Anbieter aus der Kategorie **Passwort-Manager**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit ohne Ranking
- **Geeignet wenn:** du Passwörter deterministisch aus wenigen Eingaben (Site/Login/Master) ableiten willst und möglichst ohne Vault-Sync arbeiten möchtest.
- **Weniger geeignet wenn:** du klassische Vault-Funktionen brauchst (Teilen, Notizen/Anhänge, Geräte-Sync, Wiederherstellung, Team-Workflows).
- **Wichtigster Abwägung:** weniger zentrale Speicherung vs. mehr Verantwortung, konsistente Eingaben/Optionen zu behalten (und bei Master-Kompromittierung potenziell viele Passwörter rotieren zu müssen).

## Sofortmaßnahmen
- **Nutze eine lange Master-Passphrase** (Wirkung: erhöht den Aufwand für Offline-Bruteforce gegen abgeleitete Passwörter).
- **Verwende den „Counter“ gezielt für Rotation** (Wirkung: neues Passwort pro Konto ohne Master-Wechsel).
- **Nutze lokale Tools (Extension/App/CLI) statt Website**, wenn möglich (Wirkung: reduziert die Exposition der Eingaben gegenüber Web-Kontext/Browser-Tab).

## Entscheidungshilfe
- Wenn du Passwörter **ohne Vault-Datei** ableiten willst, dann nutze LessPass lokal (Extension/App/CLI) und halte **Site/Login/Optionen** konstant (Abwägung: mehr Disziplin bei Identifiers/Profilen).
- Wenn du regelmäßig Passwörter ändern musst, dann nutze den **Counter** pro Konto (Abwägung: du musst den Counter-Stand sicher dokumentieren).
- Wenn du **komplexe Passwortregeln pro Seite** brauchst, dann plane ein, die Regeln/Optionen selbst zu verwalten (Abwägung: weniger Komfort als „Profil speichern“).
- Wenn du eine **Server-/Account-Komponente** willst (z.B. Profile/Database), dann ist Self-Hosting relevant (Abwägung: Betrieb/Updates/Logs liegen bei dir).
- Wenn du **Sharing/Recovery/Team-Funktionen** brauchst, dann ist ein vault-basierter Ansatz naheliegend (Abwägung: Sync-/Server-Metadaten vs. Komfort).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | LessPass |
| Kategorie | Passwort-Manager |
| Website | https://lesspass.com/ |
| Quellcode | https://github.com/lesspass/lesspass |
| Lizenz | GPL-3.0 (laut Repo; Mobile zusätzlich MPL-2.0) |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no (optional/legacy für Connected-Funktionen) |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Nicht angegeben |
| Logs | unknown |
| Retention | Nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://raw.githubusercontent.com/lesspass/lesspass/refs/heads/main/packages/lesspass-mobile/android/privacy-policy.md
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
LessPass kann offline arbeiten und berechnet Passwörter deterministisch aus Site/Login/Master-Passwort und Optionen. Historisch gab es eine „LessPass Database“-Variante zum Speichern von Passwort-Profilen; laut Anbieter-Blog wurde der LessPass-Database-Server zum **01.11.2024** abgeschaltet.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Bei Offline-Nutzung: Eingaben (Site/Login/Master/Optionen) bleiben lokal; bei der (historischen) Database/Account-Nutzung: E-Mail + Passwort für Account, sowie gespeicherte Passwort-Profile (ohne Master-Passwort). Laut Blog waren Profile in der LessPass Database **nicht verschlüsselt**.
- **Wofür:** Passwortableitung (stateless) und optionales Speichern/Wiederverwenden von Profil-Optionen (Connected/Database).
- **Weitergabe/Subprozessoren:** In der Android-App-Privacy-Policy wird angegeben, dass die App **keine Drittanbieter-Services** nutzt; für Hosting/Subprozessoren der Website/Services ist öffentlich nichts Konkretes benannt.
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben.
- **Kontakt/DSAR/DPA:** Kontakt-E-Mail wird im Blog/Policy genannt: **contact@lesspass.com**.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Blog-Aussage werden keine Cookies/Analyse-Tools genannt; eine separate Telemetrie-Doku ist nicht angegeben.
- **Abschaltbar?** Nicht angegeben.
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** unknown
- **Aufbewahrung:** Nicht angegeben
- **Lösch-/Opt-out-Optionen:** Für die historische LessPass Database: Account-Löschung in der Mobile App über `My account` → `Danger Zone` → `Delete my account` (laut Blog), danach „2 Wochen“ bis aus Backups verschwunden (laut Blog).

**Abwägung am Punkt:** Weniger Telemetrie ist datensparsamer, kann aber Support/Fehlersuche erschweren; Server-Logs sind bei gehosteten Webdiensten oft unvermeidbar, wenn nicht explizit dokumentiert.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** LessPass ist „stateless“ und kann offline arbeiten; Passwörter werden aus Eingaben berechnet (nicht als Vault gespeichert).
- **KDF/Parameter/Schlüsselableitung:** Laut Blog (2016) nutzt LessPass **PBKDF2** mit **100.000 Iterationen** und **SHA-256** zur Verteuerung von Bruteforce auf das Master-Passwort (Hinweis: Blog-Beitrag ist älter; aktuelle Parameter sollten im Code geprüft werden).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben.
- **Recovery/Account-Wiederherstellung:** Kein klassisches Vault-Recovery: du brauchst Site/Login/Optionen/Counter + Master-Passwort, um Passwörter erneut abzuleiten.
- **Vuln-Handling / Security-Kontakt:** Im GitHub-Security-Tab ist **kein SECURITY.md** hinterlegt; es gibt die GitHub-Funktion „Report a vulnerability“.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Master-Passphrase sauber wählen** (lang, einzigartig, nicht wiederverwendet).  
   **Prüfen:** du kannst sie offline reproduzierbar eingeben; keine Speicherung im Browser/OS.
2) **Lokales Tool bevorzugen** (Extension/App/CLI statt Website), wenn möglich.  
   **Prüfen:** Passwortgenerierung funktioniert ohne Login/Account und ohne Cloud-Sync.
3) **Optionen konsistent halten und dokumentieren** (Länge/Zeichenklassen/Counter je Konto).  
   **Prüfen:** Passwort bleibt stabil über Geräte hinweg; Rotation über Counter nachvollziehbar.

**Stolpersteine:**
- Wenn dein Master kompromittiert ist, kann das **viele Konten** betreffen (Abwägung: kein Vault-Diebstahl vs. „ein Master“ als zentraler Schlüssel).
- Die historische Connected/Database-Funktion hatte eigene Risiken (Profil-Daten); laut Blog wurde der offizielle Database-Server abgeschaltet.

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze ausschließlich Offline-Workflows (keine Account-/Connected-Funktionen).
- Halte Site/Login-Identifier minimal und konsistent (keine realen Namen, wenn nicht nötig).
- Sichere deine „Profile“ (Optionen/Counter) lokal in einem getrennten, verschlüsselten Notizsystem.
**Abwägung:** mehr Eigenorganisation, weniger Komfort.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze LessPass in einer getrennten Umgebung (separates OS-Profil/VM) und vermeide die Website.
- Vermeide Copy/Paste über unsichere Zwischenablagen (OS-Clipboard-History prüfen/deaktivieren, falls genutzt).
- Halte Counter/Optionen offline in einem getrennten Datenträger/Medium.
**Abwägung:** deutlicher Komfortverlust, höhere Komplexität.

</details>

## Features
- Deterministische Passwort-Generierung ohne Vault-Sync (stateless, offline möglich)
- Browser-Extensions (Generierung im Browser-Kontext)
- Mobile Apps (iOS/Android) und CLI
- „Counter“ zum Ändern eines Passworts ohne Master-Wechsel
- Self-Hosting für die (historische) Database/Profil-Funktion (Docker/Docker-Compose laut Blog-Beitrag)

## Alternativen
- Bitwarden (Vault-basiert, Sync/Sharing möglich; Abwägung: Server-/Sync-Metadaten vs. Komfort)
- KeePassXC (lokale Vault-Datei, Sync über eigene Infrastruktur; Abwägung: Datei-/Backup-Handling vs. Offline-Kontrolle)
- Pass (unix-password-store) (dateibasiert, gut skriptbar; Abwägung: Workflow-Aufwand vs. minimale Angriffsfläche)

## Nicht gelöst / offene Punkte
- Keine eindeutig auffindbare Website-Privacy/Terms-Seite für lesspass.com belegt.
- Logging/Retention und Hosting-/Subprozessor-Details für Website/Services sind nicht öffentlich dokumentiert.

## Quellen

- Bitwarden (Vault-basiert, Sync/Sharing möglich; Trade-off: "Server-/Sync-Metadaten vs. Komfort)
- KeePassXC (lokale Vault-Datei, Sync via eigene Infrastruktur möglich; Trade-off: "Dateihandling/Backups vs. volle Offline-Kontrolle)
- Pass (unix-password-store) (dateibasiert, Git-Workflows möglich; Trade-off: "CLI/Workflow-Aufwand vs. minimale Angriffsfläche)
- LessPass (Website): "https://lesspass.com/
- LessPass GitHub-Repo: "https://github.com/lesspass/lesspass
- Blog: "Why LessPass changed its license? (2016-11-10): https://blog.lesspass.com/2016-11-10/why-lesspass-change-license
- Privacy Policy (Android App, Repo): "https://raw.githubusercontent.com/lesspass/lesspass/refs/heads/main/packages/lesspass-mobile/android/privacy-policy.md
- GitHub Security Overview (kein SECURITY.md): "https://github.com/lesspass/lesspass/security
- [LessPass (Website)](https://lesspass.com/)
- [LessPass GitHub-Repo](https://github.com/lesspass/lesspass)
- [Blog: LessPass — How does it work? (2016-10-19)](https://blog.lesspass.com/2016-10-19/how-does-it-work)
- [Blog: Decommissioning LessPass Database (2022-12-29)](https://blog.lesspass.com/2022-12-29/decommissioning-lesspass-database)
- [Blog: Why LessPass changed its license? (2016-11-10)](https://blog.lesspass.com/2016-11-10/why-lesspass-change-license)
- [Privacy Policy (Android App, Repo)](https://raw.githubusercontent.com/lesspass/lesspass/refs/heads/main/packages/lesspass-mobile/android/privacy-policy.md)
- [GitHub Security Overview (kein SECURITY.md)](https://github.com/lesspass/lesspass/security)
