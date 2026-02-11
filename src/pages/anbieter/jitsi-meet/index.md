---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Jitsi Meet"
url: "/anbieter/jitsi-meet/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-17"
robots: "index,follow"
description: "Kurzprofil von Jitsi Meet (Kategorie: Video & Meetings)."
provider: ""
name: "Jitsi Meet"
category: "Video & Meetings"
website: "https://meet.jit.si/"
repo: "https://github.com/jitsi/jitsi-meet"
license: "Apache-2.0"
policies: ""
privacy: "https://jitsi.org/meet-jit-si-privacy/"
terms: "https://jitsi.org/meet-jit-si-terms-of-service/"
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
jurisdiction: "USA (8x8, Inc., Delaware)"
region: "us"
logs: "unknown"
retention: "specified"
retention_notes: "Dauer des Meetings; Cloud-Recordings bis Upload (max. 24h, meet.jit.si)"
data_notes: "Räume sind ephemer (werden nach Ende des Meetings zerstört). Chat/Speaker-Stats werden laut Anbieter nur während des Meetings gehalten. meet.jit.si nutzt Analytics (Amplitude/Datadog/Crashlytics) und erfordert seit 2023 ein Konto für Raum-Ersteller."
features: ""
alternatives: ""
payment_processors: "Nicht zutreffend (meet.jit.si ist kostenlos; keine Zahlungsabwicklung genannt)"
sources: ""
---
## Kurzprofil

Jitsi Meet ist ein Anbieter aus der Kategorie **Video & Meetings**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du schnell Video-Meetings über eine URL starten willst und bei Bedarf selbst hosten möchtest, um Konfiguration/Telemetrie stärker zu kontrollieren.
- **Weniger geeignet wenn:** du für den offiziellen Dienst **meet.jit.si** keine Kontopflicht oder keine Analytics im Produktumfeld akzeptieren willst.
- **Wichtigster Abwägung:** **Komfort (Hosted-Service) vs. Kontrolle (Self-Hosting & eigenes Logging/Analytics-Einrichtung)**.

## Sofortmaßnahmen
- **Nutze lange, zufällige Raumnamen** (Collision-Risiko sinkt, weniger „Zufallsbesuche“).
- **Setze immer ein Meeting-Passwort** (Link allein reicht dann nicht zum Beitritt).
- **Aktiviere E2EE nur gezielt** und kenne die Grenzen (Abwägung: Schutz des Medieninhalts vs. Feature-Einschränkungen/Kompatibilität).

## Entscheidungshilfe
- Wenn du **ohne Serverbetrieb starten** willst, dann nutze **meet.jit.si** (Abwägung: laut Anbieter Analytics auf der offiziellen Instanz; Kontopflicht für Raum-Ersteller kann gelten).
- Wenn du **Telemetrie/Analytics minimieren** willst, dann ist **Self-Hosting** relevant, weil Jitsi Meet laut Anbieter **keine vor-konfigurierte Analytics-Engine** mitbringt (Abwägung: Betrieb/Updates/Monitoring liegen bei dir).
- Wenn du **nur eingeladene Personen** zulassen willst, dann nutze **Passwort + starken Raumnamen** (Abwägung: Passwort muss sicher verteilt werden und wird nach Meeting-Ende zurückgesetzt).
- Wenn du **Medieninhalte gegen den Server/Bridge** schützen willst, dann aktiviere **End-to-End Encryption** (Abwägung: E2EE gilt laut Anbieter nicht für Chat/Polls und ist auf Audio/Video/Screensharing begrenzt).
- Wenn du **Moderationsrechte einschränken** willst, dann betreibe eine eigene Instanz und konfiguriere **„secure domain“/Authentifizierung** (Abwägung: zusätzlicher Einrichtung- und Admin-Aufwand).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Jitsi Meet |
| Kategorie | Video & Meetings |
| Website | https://meet.jit.si/ |
| Quellcode | https://github.com/jitsi/jitsi-meet |
| Lizenz | Apache-2.0 |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | mixed |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend (meet.jit.si ist kostenlos; keine Zahlungsabwicklung genannt) |
| Jurisdiktion | USA (8x8, Inc., Delaware) |
| Logs | unknown |
| Retention | Dauer des Meetings; Cloud-Recordings bis Upload (max. 24h, meet.jit.si) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: [meet.jit.si Privacy Supplement](https://jitsi.org/meet-jit-si-privacy/)
- AGB/Terms: [meet.jit.si Terms of Service](https://jitsi.org/meet-jit-si-terms-of-service/)
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Räume sind laut Anbieter **ephemer** (existieren nur während des Meetings). Inhalte wie **Chat** oder **Speaker-Stats** werden laut Anbieter **nur für die Dauer des Meetings** gespeichert und danach zerstört. Cloud-Recordings werden (wenn aktiviert) bis zum Upload gehalten (auf meet.jit.si max. 24h). Auf der offiziellen Instanz werden Analytics verwendet.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Privacy Supplement können u.a. Drittanbieter-Account-Credentials zur Authentifizierung, die Meeting-URL, Telefon-Infos bei Einwahl sowie optionale Profilangaben (Name/E-Mail/Bild-Link) verarbeitet werden.
- **Wofür:** Bereitstellung des Dienstes, Troubleshooting/Verbesserung sowie Betrugs-/Missbrauchsuntersuchung.
- **Weitergabe/Subprozessoren:** Nicht angegeben (außer: Hinweise zu YouTube bei Livestreaming).
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend (kostenloser Dienst; keine Zahlungsabwicklung beschrieben).
- **Kontakt/DSAR/DPA:** DPO-Kontakt ist angegeben (E-Mail im Privacy Supplement).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Für Jitsi Meet allgemein: laut Anbieter **keine vor-konfigurierte Analytics-Engine**. Für **meet.jit.si**: Analytics sind in Nutzung (Amplitude, Datadog, Crashlytics).
- **Abschaltbar?** Nicht als globaler Schalter dokumentiert; der Anbieter nennt als Option, „Incognito“ zu nutzen, falls ein Identifier stört.
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** unknown
- **Aufbewahrung:** Chat/Speaker-Stats laut Anbieter **nur während des Meetings**, danach zerstört. Cloud-Recordings (wenn aktiviert) werden bis zum Upload gehalten; auf meet.jit.si werden sie laut Anbieter nach **24h** gelöscht, falls der Upload nicht gelingt.
- **Lösch-/Opt-out-Optionen:** Für Meeting-Inhalte: Ende des Meetings zerstört; weitere Löschpfade für Analytics nicht angegeben.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Audio/Video-Verkehr ist laut Anbieter auf dem Netz **DTLS-SRTP-verschlüsselt**; in klassischen SFU-Szenarien werden Daten auf der Videobridge für das Routing entschlüsselt (ohne Persistenz; laut Anbieter nur im Speicher). Optional gibt es **End-to-End Encryption (E2EE)**.
- **KDF/Parameter/Schlüsselableitung:** In der E2EE-Doku wird u.a. HKDF/HMAC-SHA256 und AES-GCM beschrieben (Details siehe offizielle PDF).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben.
- **Recovery/Account-Wiederherstellung:** Nicht angegeben.
- **Vuln-Handling / Security-Kontakt:** Es gibt eine offizielle Anlaufstelle für Security-Issues („Reporting security issues“) auf der Security-&-Privacy-Seite.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Raumnamen als Geheimnis behandeln & stark wählen** (am besten zufällig/lang).  
   **Prüfen:** Raumname ist nicht „sprechbar“ kurz (z.B. kein „/coffee“), sondern lang/zufällig.
2) **Meeting-Passwort setzen** (und sicher verteilen).  
   **Prüfen:** Beitritt ohne Passwort scheitert; Passwort gilt nur für laufendes Meeting.
3) **E2EE gezielt aktivieren** (wenn du Medieninhalte zusätzlich schützen willst).  
   **Wo:** Im Meeting → Overflow-Menü (⋯) → Security options → „End-to-end Encryption“ (laut Anbieter).  
   **Prüfen:** E2EE-Status sichtbar; beachte: gilt nur für Audio/Video/Screensharing (nicht Chat/Polls).

**Stolpersteine:**
- Auf meet.jit.si sind laut Anbieter **alle Nutzer Moderator:innen**; wenn du das nicht willst, ist Self-Hosting + Authentifizierung relevant (Abwägung: Admin-Aufwand).
- **Passwort/Chat/Speaker-Stats werden zurückgesetzt**, sobald die letzte Person den Raum verlässt (Passwort ggf. neu setzen).
- Cloud-Recording/Livestreaming erzeugt zusätzliche Datenflüsse (z.B. Dropbox/YouTube), wenn aktiviert (Abwägung: Funktion vs. zusätzliche Dritte).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Self-Hosting statt meet.jit.si** erwägen, wenn du Analytics der öffentlichen Instanz vermeiden willst.  
  **Abwägung:** Betrieb, Updates, Monitoring liegen bei dir.
- **Keine optionalen Profilangaben** (Name/E-Mail/Bild-Link) setzen, wenn du nur minimal identifizierbar sein willst.  
  **Abwägung:** weniger Komfort/Erkennbarkeit im Call.
- **Livestreaming/Cloud-Recording vermeiden**, falls nicht nötig (zusätzliche Drittanbieter).  
  **Abwägung:** weniger Feature-Komfort.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Eigene Instanz + strikte Authentifizierung/„secure domain“** (Moderation/Room-Erstellung nur für autorisierte Nutzer:innen).  
  **Abwägung:** hoher Einrichtung- und Betriebsaufwand.
- **Getrennte Browser-Profile/VM für Meetings**, wenn Identitäts-/Tracking-Trennung wichtig ist.  
  **Abwägung:** deutlicher Komfortverlust.
- **E2EE konsequent aktivieren**, wenn Medieninhalte als besonders sensibel gelten.  
  **Abwägung:** Einschränkungen/Kompatibilität je nach Client/Browser.

</details>

## Features
- Browserbasierte Video-Meetings über URL-Räume (ephemer)
- Meeting-Passwort & Sicherheitsoptionen
- Optional: End-to-End Encryption (E2EE) für Audio/Video/Screensharing
- Self-Hosting möglich (z.B. Docker/Quick-Install laut Anbieter)
- Optionale Integrationen (meet.jit.si): Livestream/YouTube, Dropbox-Upload für Cloud-Recording

## Alternativen
- BigBlueButton (Self-Hosting; Abwägung: Betrieb/Administration)
- Zoom (Hosted; Abwägung: Komfort/Enterprise-Features vs. Anbieterabhängigkeit)
- Matrix/Element Call (dezentral; Abwägung: Ökosystem-Komplexität/Interoperabilität)

## Nicht gelöst / offene Punkte
- Unklar, ob und wo **Subprozessoren** (für meet.jit.si) als öffentliche Liste/DPA gepflegt werden.
- Unklar, welche **Server-Logs** (z.B. IP/Diagnose) im Detail anfallen und wie lange sie auf meet.jit.si aufbewahrt werden.

## Quellen

- Optional: "End-to-End Encryption (E2EE) für Audio/Video/Screensharing
- Optionale Integrationen (meet.jit.si): "Livestream/YouTube, Dropbox-Upload für Cloud-Recording
- BigBlueButton (ähnliche Kategorie; Trade-off: "Self-Hosting-Setup & Betrieb)
- Zoom (ähnliche Kategorie; Trade-off: "Komfort/Features vs. stärkere Anbieterbindung)
- Matrix/Element Call (ähnliche Kategorie; Trade-off: "dezentrales Ökosystem & mehr Komplexität)
- title: "End-to-End Encryption in Jitsi Meet (PDF)
- [Jitsi Meet (Produktseite)](https://jitsi.org/jitsi-meet/)
- [Jitsi Meet Security & Privacy](https://jitsi.org/security/)
- [meet.jit.si Privacy Supplement](https://jitsi.org/meet-jit-si-privacy/)
- [meet.jit.si Terms of Service](https://jitsi.org/meet-jit-si-terms-of-service/)
- [Jitsi Meet FAQ (Handbook)](https://jitsi.github.io/handbook/docs/faq/)
- [Jitsi Meet Quellcode](https://github.com/jitsi/jitsi-meet)
- [Jitsi Meet LICENSE](https://github.com/jitsi/jitsi-meet/blob/master/LICENSE)
- [End-to-End Encryption Calls in Jitsi Meet Demo (Blog)](https://jitsi.org/e2ee/)
- [End-to-End Encryption in Jitsi Meet (PDF)](https://jitsi.org/wp-content/uploads/2021/08/jitsi-e2ee-1.0.pdf)
