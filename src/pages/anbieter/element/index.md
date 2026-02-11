---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Element (Matrix client)"
url: "/anbieter/element/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-11"
robots: "index,follow"
description: "Kurzprofil von Element (Matrix client) (Kategorie: Messenger)."
provider: ""
name: "Element (Matrix client)"
category: "Messenger"
website: "https://element.io/"
repo: "https://github.com/element-hq/element-web"
license: "AGPL-3.0"
policies: ""
privacy: "https://element.io/legal/privacy"
terms: "https://element.io/legal/terms-of-use"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "yes"
phone_required: "unknown"
kyc_required: "unknown"
jurisdiction: "Nicht angegeben"
region: "unknown"
logs: "minimal"
retention: "specified"
retention_notes: "bis 180d (je nach Dienst/Logtyp)"
data_notes: "Element ist ein Matrix-Client: Inhalte/Metadaten liegen primär auf dem gewählten Homeserver. Für Element-eigene Dienste nennt der Anbieter u.a. IP-/User-Agent-Logs (teils bis 180 Tage) sowie optionale Analytics (Opt-in)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Element (Matrix client) ist ein Anbieter aus der Kategorie **Messenger**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Matrix/Föderation nutzen willst und selbst festlegen möchtest, **auf welchem Homeserver** dein Konto liegt (inkl. Self-Hosting-Option).
- **Weniger geeignet wenn:** du einen Messenger ohne Server-/Homeserver-Entscheidung suchst (und keine Abhängigkeit von Serverregeln/Moderation möchtest).
- **Wichtigster Abwägung:** Föderation & Serverfreiheit vs. **Metadaten/Policies hängen stark vom gewählten Homeserver** ab (und ggf. von Element-eigenen Zusatzdiensten).

## Sofortmaßnahmen
- **Analytics nur aktivieren, wenn nötig:** reduziert zusätzliche Messdaten außerhalb des eigentlichen Chats.
- **Geräte/Session-Liste prüfen & aufräumen:** senkt Risiko durch alte oder vergessene Geräte.
- **Verschlüsselte Räume bewusst nutzen:** schützt Inhalte, aber kann Backups/Recovery komplizierter machen.

## Entscheidungshilfe
- Wenn du **maximale Kontrolle** willst, dann nutze einen eigenen oder vertrauten Homeserver (Abwägung: Admin-Aufwand/Verfügbarkeit liegt bei dir oder dem Betreiber).
- Wenn du **nur mit minimaler Zusatz-Telemetrie** arbeiten willst, dann lasse Analytics in Element deaktiviert und nutze nur notwendige Funktionen (Abwägung: weniger Diagnosedaten bei Bugs).
- Wenn du **mit vielen Communities** interagierst, dann ist Föderation hilfreich (Abwägung: Moderation/Abuse-Handling ist verteilt und je nach Server unterschiedlich).
- Wenn du **Anrufe** nutzt, prüfe ob Voice/Video über zusätzliche Komponenten läuft (Abwägung: zusätzliche Infrastruktur/Endpunkte können ins Spiel kommen).
- Wenn du **hohe Ausfallsicherheit** brauchst, dann ist die Wahl eines stabil betriebenen Homeservers relevant (Abwägung: weniger „Selbstbestimmung“ als beim Self-Hosting).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Element (Matrix client) |
| Kategorie | Messenger |
| Website | https://element.io/ |
| Quellcode | https://github.com/element-hq/element-web |
| Lizenz | AGPL-3.0 |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Nicht angegeben |
| Logs | minimal |
| Retention | bis 180d (je nach Dienst/Logtyp) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://element.io/legal/privacy
- AGB/Terms: https://element.io/legal/terms-of-use
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Element ist ein Matrix-Client: Inhalte/Metadaten liegen primär auf dem gewählten Homeserver. Für Element-eigene Dienste nennt der Anbieter u.a. IP-/User-Agent-Logs (teils bis 180 Tage) sowie optionale Analytics (Opt-in).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Bei Element-eigenen Diensten nennt der Anbieter u.a. **IP-Adresse & User-Agent** (z.B. für Zugriffe/Logs), sowie Diagnosedaten bei Support/Fehlermeldungen (je nach Feature/Nutzung).
- **Wofür:** Betrieb, Sicherheit/Abuse-Prevention, Stabilität/Diagnose, Support (je nach Dienst).
- **Weitergabe/Subprozessoren:** Für Element Matrix Services nennt der Anbieter u.a. Infrastruktur über **AWS** und **Cloudflare** (im Kontext von Hosting/CDN).
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben.
- **Kontakt/DSAR/DPA:** Über Legal-Seiten verfügbar (Details bitte in Privacy/DPA prüfen).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Cookie Policy: Analytics wird nur genutzt, wenn Nutzer:innen **zugestimmt** haben (Opt-in).
- **Abschaltbar?** Ja (über Cookie-/Analytics-Einstellungen; je nach Client/Plattform unterschiedlich benannt).
- **Wo (Menüpfad):** In der App typischerweise unter **Einstellungen → Datenschutz/Analytics** (Bezeichnungen können je nach Plattform abweichen).

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** bis 180d (je nach Dienst/Logtyp)
- **Lösch-/Opt-out-Optionen:** Für Analytics über Opt-in/Consent; für Server-Logs abhängig vom Dienst und vom Homeserver-Betreiber.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Element beschreibt Ende-zu-Ende-Verschlüsselung für Chats sowie E2EE für Voice/Video (Element Call, je nach Einrichtung).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben (Kontoschutz hängt primär vom Homeserver ab).
- **Recovery/Account-Wiederherstellung:** Schlüssel-/Recovery-Mechanismen sind vorhanden (Details je nach Client/Einrichtung).
- **Vuln-Handling / Security-Kontakt:** Es gibt eine Vulnerability-Disclosure-Policy mit offiziellem Meldeweg.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Geräte prüfen & verifizieren** (z.B. Sicherheits-/Verifizierungscheck im Client).  
   **Prüfen:** Geräteliste ist vollständig; unbekannte Geräte entfernt.
2) **Recovery/Key-Backup bewusst setzen** (nur falls du Multi-Device nutzt).  
   **Prüfen:** Du kannst einen Gerätewechsel ohne Datenverlust testen (Abwägung: Backup/Recovery vs. zusätzliche Angriffsfläche).
3) **Analytics/Telemetry ausgeschaltet lassen**, solange du sie nicht brauchst.  
   **Prüfen:** Consent/Analytics-Status ist „aus“ (oder nicht zugestimmt).

**Stolpersteine:**
- Ein „bequemer“ Homeserver-Account kann mehr Identitätsdaten binden (Abwägung: Komfort/Account-Recovery vs. Metadaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze einen Homeserver mit klarer Privacy Policy und minimalen Identitätsanforderungen.
- Vermeide unnötige Zusatzfeatures (z.B. öffentliche Profil-/Discovery-Funktionen), wenn nicht nötig.
- Halte die Zahl deiner Devices klein und räume Sessions regelmäßig auf.  
**Abwägung:** weniger Komfort bei Gerätewechsel/Recovery.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne Messenger-Identität strikt (separates Browserprofil/VM, getrennte Accounts).
- Nutze Self-Hosting nur, wenn du Härtung/Monitoring selbst abdecken kannst.
- Vermeide Voice/Video, wenn du dafür keine zusätzliche Infrastruktur akzeptieren willst.  
**Abwägung:** deutlicher Komfortverlust, höhere Komplexität.

</details>

## Features
- Matrix-Client (1:1-Chats, Räume, Spaces) mit Server-Auswahl (Homeserver)
- Ende-zu-Ende-Verschlüsselung für Chat (abhängig von Raum/Einrichtung)
- Geräte-Verifizierung & Sicherheitschecks
- Key-/Recovery-Backup (falls aktiviert)
- Sprach-/Videoanrufe (Element Call / MatrixRTC, je nach Einrichtung)

## Alternativen
- [Signal](/anbieter/signal/)
- [DeltaChat](/anbieter/deltachat/)
- [Threema](/anbieter/threema/)
- FluffyChat (Matrix-Client; anderer Schwerpunkt bei UI/Features)

## Nicht gelöst / offene Punkte
- Unklar, ob Element eine **dedizierte, versionierte Subprozessoren-Liste** öffentlich pflegt (statt nur Nennungen in Privacy/DPA).

## Quellen

- Matrix-Client (1: "1-Chats, Räume, Spaces) mit Server-Auswahl (Homeserver)
- https://element.io/end-to-end-encrypted-voice-and-video-for-self-hosted-community-users/
- [Element – Legal (Übersicht)](https://element.io/legal)
- [Element – Privacy Notice](https://element.io/legal/privacy)
- [Element – Cookie Policy](https://element.io/legal/cookies)
- [Element – Terms of Use (PDF)](https://element.io/legal/terms-of-use)
- [Element – Vulnerability Disclosure Policy](https://element.io/legal/vulnerability-disclosure-policy)
- [GitHub – element-hq/element-web](https://github.com/element-hq/element-web)
- [Element Blog – Welcome to Element!](https://element.io/welcome-to-element/)
- [Element Blog – End-to-end encrypted voice and video for self-hosted community users](https://element.io/end-to-end-encrypted-voice-and-video-for-self-hosted-community-users/)
