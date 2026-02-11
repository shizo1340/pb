---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Briar"
url: "/anbieter/briar/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-06"
robots: "index,follow"
description: "Kurzprofil von Briar (Kategorie: Messenger)."
provider: ""
name: "Briar"
category: "Messenger"
website: "https://briarproject.org/"
repo: "https://code.briarproject.org/briar/briar"
license: "GPL-3.0-only (Briar Android); AGPL-3.0-only (Briar Desktop)"
policies: ""
privacy: "https://briarproject.org/privacy-policy/"
terms: "Nicht angegeben"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Nicht angegeben"
region: "unknown"
logs: "minimal"
retention: "unknown"
retention_notes: "7d (Website-Logs); Feedback/Crash: nicht angegeben"
data_notes: "Briar synchronisiert Nachrichten direkt zwischen Geräten (kein zentraler Server). Internet-Verbindungen laufen über Tor; offline sind Bluetooth/WLAN/Wechseldatenträger möglich. Optional können Nutzer:innen Feedback/Crash-Reports senden."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Briar ist ein Anbieter aus der Kategorie **Messenger**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Messenger-Kommunikation **ohne zentrale Server** willst und Verbindungen **über Tor** bzw. auch **offline (Bluetooth/WLAN)** nutzen möchtest.
- **Weniger geeignet wenn:** du **Cloud-Backups**, einfache **Recovery** oder „immer online“-Komfort erwartest (Briar speichert lokal, ohne zentrale Kontowiederherstellung).
- **Wichtigster Abwägung:** **Metadaten-/Zentralisierungs-Reduktion vs. Komfort/Recovery** (lokales Konto, lokaler Speicher, eigener Betriebsaufwand bei Gerätewechsel).

## Sofortmaßnahmen
- **App-Sperre aktivieren** → reduziert Risiko bei kurzzeitigem Gerätezugriff durch Dritte.
- **Tor-Modus bewusst setzen (ggf. mit Bridges)** → beeinflusst Erreichbarkeit und Zensur-Resistenz im Alltag.
- **Internet nur bei Bedarf nutzen (z.B. mobile Daten aus)** → reduziert unerwünschte Hintergrundverbindungen.

## Entscheidungshilfe
- Wenn du **keine Telefonnummer/kein zentrales Konto** nutzen willst, dann passt Briar als **lokaler Account** auf dem Gerät (Abwägung: Wechsel/Recovery ist aufwändiger).
- Wenn du in Umgebungen mit **Netz-Blockaden** arbeitest, dann nutze **Tor mit Bridges** (Abwägung: Verbindungsaufbau kann langsamer/fragiler sein).
- Wenn du **bewusst offline** bleiben willst, dann setze „**Nicht verbinden**“ und nutze **Bluetooth/WLAN** (Abwägung: Zustellung nur, wenn Geräte sich wieder erreichen).
- Wenn du eine **geringere Angriffsfläche** willst, dann sende **Feedback/Crash-Reports nur bei Bedarf** (Abwägung: weniger Kontext für Fehlerdiagnose).
- Wenn du Inhalte breit teilen willst, sind **Foren/Blogs** relevant (Abwägung: Inhalte werden bei Abonnent:innen repliziert, es gibt keinen zentralen „Löschpunkt“).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Briar |
| Kategorie | Messenger |
| Website | https://briarproject.org/ |
| Quellcode | https://code.briarproject.org/briar/briar |
| Lizenz | GPL-3.0-only (Briar Android); AGPL-3.0-only (Briar Desktop) |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | yes (lokal auf Gerät) |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend (kostenlos) |
| Jurisdiktion | Nicht angegeben |
| Logs | minimal |
| Retention | 7d (Website-Logs); Feedback/Crash: nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://briarproject.org/privacy-policy/
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Cure53 Pentest-Report Briar Project App & Protocol (03/2017): https://briarproject.org/raw/BRP-01-report.pdf

**Daten-Notizen (kurz):**
Briar synchronisiert Nachrichten direkt zwischen Geräten (kein zentraler Server). Internet-Verbindungen laufen über Tor; offline sind Bluetooth/WLAN/Wechseldatenträger möglich. Optional können Nutzer:innen Feedback/Crash-Reports senden.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Privacy Policy keine Nutzungs-/Kommunikationsdaten über die App; Ausnahmen: Website-Logs (7 Tage) sowie optional gesendetes Feedback/Crash-Reports (inkl. optional E-Mail/Device-Infos).
- **Wofür:** Website-Logs für Betrieb der Website; Feedback/Crash zur Verbesserung der App.
- **Weitergabe/Subprozessoren:** Mailinglisten werden laut Privacy Policy über SourceForge betrieben; weitere Listen/Subprozessoren für die App selbst werden nicht genannt.
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend (kostenlos).
- **Kontakt/DSAR/DPA:** GDPR-Anfragen laut Privacy Policy über contact@briarproject.org (mit PGP-Key).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy: keine App-Nutzungsanalyse/Tracking; Website-Zugriffe werden geloggt.
- **Abschaltbar?** Website-Logs: nicht relevant als Nutzer-Schalter; App-seitig sind Feedback/Crash-Reports freiwillig (Opt-in).
- **Wo (Menüpfad):** Feedback/Crash-Reports werden laut Privacy Policy über „Send feedback“ bzw. nach Crash angeboten (Opt-in).

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** 7d (Website-Logs); Feedback/Crash: nicht angegeben
- **Lösch-/Opt-out-Optionen:** Keine App-Telemetrie laut Privacy Policy; Feedback/Crash nur senden, wenn nötig (Opt-in).

**Abwägung am Punkt:** Weniger Diagnosedaten kann Debugging/Support erschweren; freiwillige Reports können hilfreiche Kontextdaten enthalten.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Laut „How it works“ ist die Kommunikation Ende-zu-Ende verschlüsselt; Inhalte werden vor Mitlesen/Manipulation geschützt.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben (Briar arbeitet mit lokalem Konto auf dem Gerät).
- **Recovery/Account-Wiederherstellung:** Laut Benutzerhandbuch ist das Konto lokal verschlüsselt gespeichert und **nicht wiederherstellbar**, wenn Passwort vergessen oder App deinstalliert wird.
- **Vuln-Handling / Security-Kontakt:** Kontaktadresse contact@briarproject.org (mit PGP-Key) ist offiziell genannt; formaler Disclosure-Prozess ist nicht angegeben.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Gerätesperre setzen** (PIN/Muster/Passwort), weil Briar die Gerätesperre für Schutzfunktionen nutzt.  
   **Prüfen:** Android-Gerätesperre aktiv, Entsperren erforderlich.
2) **App-Sperre aktivieren**  
   **Menüpfad (Handbuch):** Hauptmenü → *Einstellungen* → *App-Sperre*; optional *Zeitlimit der Inaktivität* setzen.  
   **Prüfen:** Menüpunkt „App sperren“ erscheint; Entsperren wird erzwungen.
3) **Tor-Verbindungsmodus passend wählen**  
   **Menüpfad (Handbuch):** Hauptmenü → *Einstellungen* → *Über Internet (Tor) verbinden* (Automatisch / ohne Bridges / mit Bridges / Nicht verbinden).  
   **Prüfen:** Status ändert sich; Verbindung klappt im Test.

**Stolpersteine:**
- **Keine Recovery:** Passwort vergessen oder Deinstallation bedeutet Konto-/Datenverlust (Abwägung: lokale Kontrolle vs. Wiederherstellbarkeit).
- „Kontakt aus der Ferne hinzufügen“ kann fehlschlagen, wenn keine Verbindung zustande kommt (Handbuch nennt ~48h als Schwelle).

<details>
<summary>Profil B (Datensparsam)</summary>

- Setze *Über Internet (Tor) verbinden* auf **„Nicht verbinden“**, wenn du rein lokal (Bluetooth/WLAN) arbeiten willst.  
- Schalte *Mobile Daten benutzen* aus, wenn du Internet-Sync nur über WLAN möchtest.  
- Importiere RSS-Feeds nur, wenn du den Zweck brauchst (sie werden laut Handbuch über Tor geladen).  

**Abwägung:** weniger Hintergrundverkehr, aber Zustellung/Sync wird unzuverlässiger und stärker „situationsabhängig“.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze ein **dediziertes Geräteprofil** oder ein separates Gerät nur für Briar (Isolation).  
- Nutze **Tor mit Bridges**, wenn du Blockaden erwartest (Abwägung: potenziell instabilere Verbindung).  
- Halte das Gerät „sauber“ (wenige Apps, Updates zeitnah), weil Briar lokal speichert (Abwägung: höherer Betriebsaufwand).

**Abwägung:** mehr Isolation und weniger Kreuz-Korrelationen, aber deutlich weniger Komfort im Alltag.

</details>

## Features
- Peer-to-Peer Synchronisation ohne zentralen Server
- Internet-Verbindung über Tor (inkl. Bridges-Optionen)
- Offline-Nutzung über Bluetooth, WLAN oder Wechseldatenträger
- Private Chats, private Gruppen, Foren, Blogs
- RSS-Feeds via Tor (Android, laut Handbuch)
- App-Sperre über Gerätesperre (PIN/Muster/Passwort)

## Alternativen
- Signal (zentraler Dienst; Abwägung: Komfort/Erreichbarkeit vs. Identifier/Metadatenmodell)
- Element/Matrix (föderiert; Abwägung: Serverwahl/Metadaten vs. Interoperabilität)
- Session (dezentraler Ansatz; Abwägung: anderes Routing-/Trust-Modell)
- SimpleX Chat (ohne feste IDs; Abwägung: anderes Onboarding/Netzwerkmodell)

## Nicht gelöst / offene Punkte
- Jurisdiktion/Verantwortliche Stelle (DSGVO): nicht eindeutig auf Website/Privacy Policy benannt.


## Quellen

- Cure53 Pentest-Report Briar Project App & Protocol (03/2017): "https://briarproject.org/raw/BRP-01-report.pdf
- Signal (zentraler Dienst; Trade-off: "Komfort/Erreichbarkeit vs. Identifier/Metadatenmodell)
- Element/Matrix (föderiert; Trade-off: "Serverwahl/Metadaten vs. Interoperabilität)
- Session (dezentraler Ansatz; Trade-off: "anderes Routing-/Trust-Modell)
- SimpleX Chat (ohne feste IDs; Trade-off: "anderes Onboarding/Netzwerkmodell)
- Privacy Policy: "https://briarproject.org/privacy-policy/
- How it works: "https://briarproject.org/how-it-works/
- Briar Benutzerhandbuch (DE): "https://briarproject.org/manual/de/
- Download Briar Desktop (Feature-Tabelle): "https://briarproject.org/download-briar-desktop/
- Building the Source Code: "https://briarproject.org/building-the-source-code/
- GitLab Repo (Briar Android): "https://code.briarproject.org/briar/briar
- GitLab Repo (Briar Desktop): "https://code.briarproject.org/briar/briar-desktop/
- Audit PDF (Cure53): "https://briarproject.org/raw/BRP-01-report.pdf
- [Briar Website](https://briarproject.org/)
- [Privacy Policy](https://briarproject.org/privacy-policy/)
- [How it works](https://briarproject.org/how-it-works/)
- [Briar Benutzerhandbuch (DE)](https://briarproject.org/manual/de/)
- [Download Briar Desktop (Feature-Tabelle)](https://briarproject.org/download-briar-desktop/)
- [Building the Source Code](https://briarproject.org/building-the-source-code/)
- [GitLab Repo: briar/briar (Android)](https://code.briarproject.org/briar/briar)
- [GitLab Repo: briar/briar-desktop](https://code.briarproject.org/briar/briar-desktop/)
- [Audit PDF: Cure53 Pentest-Report (03/2017)](https://briarproject.org/raw/BRP-01-report.pdf)
