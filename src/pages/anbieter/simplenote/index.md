---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Simplenote"
url: "/anbieter/simplenote/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-21"
robots: "index,follow"
description: "Kurzprofil von Simplenote (Kategorie: Notizen & Docs)."
provider: ""
name: "Simplenote"
category: "Notizen & Docs"
website: "https://simplenote.com/"
repo: "https://github.com/Automattic/simplenote-electron"
license: "GPL-2.0-only"
policies: ""
privacy: "https://automattic.com/privacy/"
terms: "https://simplenote.com/terms/"
transparency: "https://transparency.automattic.com/"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "partial"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA / Irland (Automattic Inc. / Aut O’Mattic A8C Ireland Ltd., je nach Region laut Privacy Policy)"
region: "us"
logs: "unknown"
retention: "unknown"
data_notes: "Notizen sind **nicht** verschlüsselt gespeichert (kein „at rest“-Schutz); Transport ist verschlüsselt. Konto (E-Mail) ist zwingend erforderlich."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Simplenote ist ein Anbieter aus der Kategorie **Notizen & Docs**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einfache, geräteübergreifend synchronisierte Notizen willst und Inhalte nicht als „hoch-sensitiv“ behandeln musst.
- **Weniger geeignet wenn:** du erwartest, dass Notizinhalte serverseitig nicht lesbar sind (z.B. durch standardmäßige Ende-zu-Ende-Verschlüsselung).
- **Wichtigster Abwägung:** Komfort durch Cloud-Sync & Sharing vs. **Notizen sind nicht verschlüsselt gespeichert** (Serverzugriff prinzipiell möglich).

## Sofortmaßnahmen
- **Nutze ein starkes Passwort** und sichere vor allem dein E-Mail-Konto (Login kann per E-Mail-Code erfolgen).  
- **Exportiere regelmäßig Backups** (Web: Menü → Settings → Tools → Export Notes), damit du unabhängig von Account/Sync bleibst.  
- **Vermeide „Publish to Web“ für vertrauliche Inhalte**, weil alle mit Link den Inhalt lesen können.

## Entscheidungshilfe
- Wenn du nur Alltagsnotizen brauchst (To-dos, Entwürfe, Checklisten), dann nutze Simplenote als Sync-Notizbuch (Abwägung: Inhalte liegen unverschlüsselt gespeichert vor).
- Wenn du Notizen teilst oder kollaborierst, dann nutze die eingebaute Kollaboration (Abwägung: E-Mail-Adressen der Beteiligten + Metadaten des Share-Flows).
- Wenn du Notizen veröffentlichst („Publish to Web“), dann prüfe den Inhalt wie bei einem öffentlichen Paste-Link (Abwägung: Link-Weitergabe = Zugriff).
- Wenn du offline arbeiten willst, dann nutze die nativen Apps oder installiere die Web-App als PWA (Abwägung: Web-App braucht initial Online-Login/Sitzung).
- Wenn dein Bedrohungsmodell „Gerät in fremden Händen“ einschließt, dann verlasse dich nicht auf „Notizen verstecken“ (das bietet Simplenote nicht) und arbeite stattdessen mit Geräte-Sperre + Logout (Abwägung: mehr Reibung).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Simplenote |
| Kategorie | Notizen & Docs |
| Website | https://simplenote.com/ |
| Quellcode | https://github.com/Automattic/simplenote-electron |
| Lizenz | GPL-2.0-only |
| Preismodell | free |
| Free Tier | yes |
| Open Source | partial (Clients offen; Backend nicht als Self-Hosting dokumentiert) |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Keine (Dienst ist kostenlos; keine Zahlung notwendig) |
| Jurisdiktion | USA / Irland (Automattic Inc. / Aut O’Mattic A8C Ireland Ltd., je nach Region laut Privacy Policy) |
| Logs | unknown |
| Retention | Nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://automattic.com/privacy/
- AGB/Terms: https://simplenote.com/terms/
- Transparency Report: https://transparency.automattic.com/
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Notizen sind **nicht** verschlüsselt gespeichert („at rest“), aber während der Übertragung verschlüsselt. Der Anbieter weist darauf hin, Simplenote nicht für „besonders sensible“ Informationen (z.B. Passwörter, Zahlungsdaten) zu nutzen.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Account-E-Mail (Konto ist Pflicht) + Notiz-Inhalte/Tags; bei Sharing: E-Mail-Adressen der Beteiligten; bei „Publish to Web“ wird Inhalt über einen Link abrufbar.  
- **Wofür:** Synchronisation über Geräte/Apps, Teilen/Kollaboration, Veröffentlichung per Link, Account-Verwaltung (Login/Reset/Löschung).  
- **Weitergabe/Subprozessoren:** Privacy Policy gilt über Automattic; eine Simplenote-spezifische öffentliche Subprozessorenliste ist nicht genannt.  
- **Drittlandtransfer:** Nicht spezifisch für Simplenote dokumentiert (siehe Automattic Privacy Policy).  
- **Zahlungsabwicklung/Payment Processor:** Nicht relevant (kostenlos).  
- **Kontakt/DSAR/DPA:** Kontakt/Anfragen werden über Automattic-Privacy-Prozesse abgedeckt (siehe Privacy Policy).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nicht angegeben / Unklar.
- **Abschaltbar?** Nicht angegeben / Unklar.
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** unknown
- **Aufbewahrung:** Nicht angegeben (keine konkrete Frist in Simplenote-Help/Terms).
- **Lösch-/Opt-out-Optionen:** Account-Löschung ist möglich (Web-App); laut Help werden Notizen dauerhaft gelöscht und Accountdaten (z.B. E-Mail) „purged“.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Notizen sind **nicht** verschlüsselt gespeichert („at rest“); Übertragung ist verschlüsselt (in transit).  
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben (Help beschreibt Login per E-Mail-Code oder per Passwort, aber keine separaten 2FA-Optionen).
- **Recovery/Account-Wiederherstellung:** Passwort-Reset per E-Mail-Link; ohne Zugriff auf die Konto-E-Mail ist Account-Recovery nicht möglich.  
- **Vuln-Handling / Security-Kontakt:** Automattic betreibt einen Security-Prozess inkl. Bug-Bounty/Disclosure über die offizielle Security-Seite.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz: Passwort + E-Mail absichern** (weil Login auch per E-Mail-Code möglich ist).  
   **Prüfen:** Login klappt über „Login with Password“/E-Mail-Code; E-Mail-Konto ist selbst abgesichert.
2) **Logout-Routine für geteilte Geräte** (Simplenote kann nicht „Notizen verstecken“).  
   **Prüfen:** In der App/auf Web wirklich ausgeloggt; Gerät ist mit Screen-Lock geschützt.
3) **Backup per Export einrichten** (z.B. monatlich).  
   **Prüfen:** Export-Datei ist vorhanden und lokal geschützt (z.B. verschlüsselte Ablage).

**Stolpersteine:**
- Notizen sind **nicht** verschlüsselt gespeichert → sensible Inhalte nicht in Simplenote ablegen.
- „Publish to Web“ macht Inhalte für alle mit Link lesbar (Link-Weitergabe = Zugriff).
- Remote-Logout über alle Geräte ist laut Help nicht möglich; Logout pro Gerät nötig.

<details>
<summary>Profil B (Datensparsam)</summary>

- Verwende eine dedizierte (getrennte) E-Mail-Adresse für den Account, um Identitätsbindung zu reduzieren.  
- Teile Notizen nur gezielt und lösche „Publish“-Links wieder, wenn nicht mehr nötig.  
- Halte lokale Exporte getrennt vom Alltagssystem (z.B. verschlüsseltes Backup-Medium).  
**Abwägung:** mehr Einrichtung/Disziplin, weniger „einfach nebenbei“.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze Simplenote nur in einem isolierten Kontext (separates OS-Profil/VM) und behandle Inhalte als potentiell serverseitig zugreifbar.  
- Blocke Netzwerkzugriff nur gezielt und dokumentiert (z.B. wenn du Troubleshooting machst): Help nennt u.a. `app.simplenote.com`, `api.simperium.com`, `auth.simperium.com`.  
- Vermeide Kollaboration/Publishing vollständig.  
**Abwägung:** deutlicher Komfortverlust, eingeschränkte Funktionalität.

</details>

## Features
- Sync über Apps + Web
- Offline-Nutzung (Apps; Web optional via PWA)
- Export/Import (u.a. JSON, Text/Markdown)
- Markdown, Checklists, Tags, Suche
- Kollaboration (E-Mail-basiert)
- „Publish to Web“ (Link-Ansicht, öffentlich für Link-Inhaber)

## Alternativen
- Joplin (Abwägung: mehr Kontrolle/Optionen vs. mehr Einrichtung-Aufwand)
- Standard Notes (Abwägung: anderer Schwerpunkt bei Schutzmodellen vs. weniger „einfach“)
- Obsidian (Abwägung: lokal-first Workflows möglich vs. Sync/Team-Features je nach Einrichtung)
- Nextcloud Notes (Abwägung: eigener Server/Hosting vs. Wartungsaufwand)

## Nicht gelöst / offene Punkte
- Telemetrie/Analytics im Client nicht dokumentiert (Schalter/Opt-out unklar).
- Subprozessoren-/DPA-Übersicht für Simplenote nicht als eigene öffentliche Liste auffindbar.

## Quellen

- Joplin (Trade-off: "mehr Kontrolle/Optionen vs. mehr Setup-Aufwand)
- Standard Notes (Trade-off: "anderer Schwerpunkt bei Schutzmodellen vs. weniger „einfach“)
- Obsidian (Trade-off: "lokal-first Workflows möglich vs. Sync/Team-Features je nach Setup)
- https://simplenote.com/2016/08/11/ios-android-and-macos-apps-now-open-source/
- [Help – Simplenote](https://simplenote.com/help/)
- [Terms of Service – Simplenote](https://simplenote.com/terms/)
- [Privacy Policy – Automattic](https://automattic.com/privacy/)
- [Security – Automattic](https://automattic.com/security/)
- [Transparency Report – Automattic](https://transparency.automattic.com/)
- [GitHub – Automattic/simplenote-electron](https://github.com/Automattic/simplenote-electron)
- [Blog: iOS, Android, and macOS Apps Now Open Source](https://simplenote.com/2016/08/11/ios-android-and-macos-apps-now-open-source/)
