---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Session"
url: "/anbieter/session/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-21"
robots: "index,follow"
description: "Kurzprofil von Session (Kategorie: Messenger)."
provider: ""
name: "Session"
category: "Messenger"
website: "https://getsession.org"
repo: "https://github.com/session-foundation"
license: "GPL-3.0-only (Client-Repos, z.B. session-desktop)"
policies: ""
privacy: "https://getsession.org/privacy-policy"
terms: "https://getsession.org/terms-of-service"
transparency: "https://session.foundation/transparency-reports"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "partial"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Schweiz (Session Technology Foundation als Steward)"
region: "ch"
logs: "minimal"
retention: "long"
retention_notes: "App: keine IP/User-Agent Speicherung laut Privacy Policy; Nachrichtenabruf bis 14 Tage; Kontakt-/Gruppen-Konfiguration bis 30 Tage; Website-Daten bis 6 Monate; Cloudflare HTTP-Logs bis 7 Tage"
retention_max_days: "180"
data_notes: "Seed-Node (STF) kann beim ersten Start die IP sehen, laut Privacy Policy wird sie nicht gespeichert. Push (Fast Mode) exponiert Push-Token + Geräte-IP an Apple/Google sowie Account ID + Token an STF-Push-Server. Calls sind E2E, aber Peer-to-Peer: IP wird dem Gesprächspartner + STF STUN/TURN sichtbar."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Session ist ein Anbieter aus der Kategorie **Messenger**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen Messenger nutzen willst, der **ohne Telefonnummer/E-Mail** auskommt und bei Nachrichtenversand **Metadaten minimiert** (Onion-Routing laut Anbieter).
- **Weniger geeignet wenn:** du **zuverlässige Push-Erreichbarkeit ohne Abwägungen** brauchst oder **häufig Calls** nutzt, ohne IP-Exposure in Kauf zu nehmen.
- **Wichtigster Abwägung:** **Anonymes Account-Modell (Recovery-Phrase) vs. Recovery/Verfügbarkeit** (Verlust der Recovery-Phrase = praktisch keine Konto-Wiederherstellung; Slow-Mode = mehr Akku/Foreground-Nutzung).

## Sofortmaßnahmen
- **Slow Mode statt Fast Mode** nutzen, wenn du weniger Drittanbieter-Metadaten über Push willst (Abwägung: mehr Akku/evtl. geringere Erreichbarkeit).
- **App sperren**: Mobile „Lock Session“ aktivieren, Desktop „Set account password“ setzen (reduziert Risiko bei Gerätezugriff).
- **Calls aus lassen**, wenn IP-Exposure für dich problematisch ist (Abwägung: keine Voice/Video-Calls).

## Entscheidungshilfe
- Wenn du **keine Telefonnummer/E-Mail** binden willst, dann nutze Session mit Account ID + Recovery-Phrase (Abwägung: Recovery hängt an sicherer Aufbewahrung der Phrase).
- Wenn du **Push mit minimaler Drittanbieter-Beteiligung** willst, dann nutze **Slow Mode** (Abwägung: App pollt im Hintergrund, kann Akku kosten).
- Wenn du **schnelle Push-Benachrichtigungen** brauchst, dann nutze **Fast Mode** (Abwägung: Push-Token + Geräte-IP an Apple/Google; Account ID + Token an STF-Push-Server).
- Wenn du **Calls** nutzen willst, dann aktiviere sie bewusst in den Privacy-Einstellungen (Abwägung: Calls sind E2E, aber Peer-to-Peer → IP wird Call-Partner + STF STUN/TURN sichtbar).
- Wenn du **Installationsintegrität** wichtig findest, dann prüfe bei Desktop-Releases **GPG/Hashes** gemäß GitHub-Anleitung (Abwägung: zusätzlicher Aufwand beim Update).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Session |
| Kategorie | Messenger |
| Website | https://getsession.org |
| Quellcode | https://github.com/session-foundation |
| Lizenz | GPL-3.0-only (Client-Repos, z.B. session-desktop) |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | yes (Account ID/Recovery-Phrase) |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend (Messenger) / Nicht angegeben |
| Jurisdiktion | Schweiz (Session Technology Foundation als Steward) |
| Logs | minimal |
| Retention | App: keine IP/User-Agent Speicherung laut Privacy Policy; Nachrichtenabruf bis 14 Tage; Kontakt-/Gruppen-Konfiguration bis 30 Tage; Website-Daten bis 6 Monate; Cloudflare HTTP-Logs bis 7 Tage |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: [Session Privacy Policy](https://getsession.org/privacy-policy)
- AGB/Terms: [Session Terms of Service](https://getsession.org/terms-of-service)
- Transparency Report: [Session Technology Foundation – Transparency Reports](https://session.foundation/transparency-reports)
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- [Quarkslab Security Audit (PDF)](https://quarkslab.com/resources/audit_reports/Session-Report.pdf)

**Daten-Notizen (kurz):**
Seed-Node (STF) kann beim ersten Start die IP sehen, laut Privacy Policy wird sie nicht gespeichert. Push (Fast Mode) exponiert Push-Token + Geräte-IP an Apple/Google sowie Account ID + Token an STF-Push-Server. Calls sind E2E, aber Peer-to-Peer: IP wird dem Gesprächspartner + STF STUN/TURN sichtbar.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Privacy Policy speichert die App **keine identifizierenden Geräteinfos** wie **IP-Adresse** oder **User-Agent**; Seed-Node kann beim ersten Abruf der Serverliste die IP sehen (nicht gespeichert). Website: begrenzte Nutzungsdaten; Newsletter-E-Mail (optional).
- **Wofür:** Website-Daten laut Anbieter zur Verbesserung der Website; Push-Registrierung zur Zustellung von Benachrichtigungen; Calls/Anhänge für die jeweiligen Funktionen.
- **Weitergabe/Subprozessoren:** Website via **Cloudflare** (HTTP-Request-Logs bis 7 Tage); Newsletter via **Campaign Monitor** (E-Mail bis Abmeldung). Push-Fast-Mode nutzt **FCM (Google)** bzw. **APNs (Apple)** + STF Push-Server.
- **Drittlandtransfer:** Nicht angegeben (z.B. Länder/Regionen der Subprozessoren werden in den genannten Seiten nicht vollständig aufgeschlüsselt).
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend / Nicht angegeben.
- **Kontakt/DSAR/DPA:** Kontakt laut Privacy Policy/ToS: **[email protected]**.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy können **Apple/Google** auf iOS/Android **OS-Telemetrie** erfassen (z.B. Öffnen/Schließen, Nutzungsdauer, Crash-Logs, Gerätemodell).
- **Abschaltbar?** Nicht durch Session allein (OS-Feature); Push kann zwischen **Slow Mode** und **Fast Mode** gewählt werden.
- **Wo (Menüpfad):**
  - Push-Option wird laut FAQ u.a. beim Account-Recovery/Einrichtung abgefragt (Slow/Fast).
  - App-Lock: **Settings → Privacy → Lock Session** (Mobile) / **Settings → Privacy → Set account password** (Desktop).

**Logs & Retention:**
- **Logging-Level:** minimal (laut Privacy Policy keine Speicherung von IP/User-Agent durch die App; Website über Cloudflare mit Request-Logs).
- **Aufbewahrung:** Nachrichtenabruf nach Restore **bis 14 Tage**; Kontakt-/Gruppen-Konfiguration **bis 30 Tage**; Website-Daten **bis 6 Monate**; Cloudflare HTTP-Logs **bis 7 Tage**.
- **Lösch-/Opt-out-Optionen:** Newsletter: Abmeldung → E-Mail wird gelöscht (laut Privacy Policy); lokale Chat-/Kontaktlöschung in der App möglich (FAQ/Support).

**Abwägung am Punkt:** Weniger Telemetrie (Slow Mode, Store vermeiden) kann Komfort/Erreichbarkeit senken; mehr Telemetrie/Push erhöht Metadatenoberfläche (Token/IP bei Push-Diensten).

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** ToS/FAQ beschreiben **Ende-zu-Ende-Verschlüsselung** für Nachrichten; Messages werden zusätzlich in Onion-Layern geroutet.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (in den hier genutzten Primärquellen nicht detailliert).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben (Account basiert auf Account ID + Recovery-Phrase, ohne klassischen Login).
- **Recovery/Account-Wiederherstellung:** Wiederherstellung über **Recovery-Phrase (mnemonic seed)**; laut FAQ werden beim Restore **Nachrichten der letzten 14 Tage** nachgezogen; Kontakte/Gruppen können nach **>30 Tagen offline** nicht wiederherstellbar sein.
- **Vuln-Handling / Security-Kontakt:** Kein klarer „SECURITY.md“-Prozess in den genutzten Repos/Seiten ersichtlich; Kontakt-E-Mail in Privacy Policy/ToS vorhanden.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **App-Sperre aktivieren** (Mobile/Device-Lock bzw. Desktop-Passwort).  
   **Prüfen:** Mobile: *Settings → Privacy → Lock Session* aktiv; Desktop: *Settings → Privacy → Set account password* gesetzt.
2) **Recovery-Phrase offline sichern** (Papier/Offline-Backup).  
   **Prüfen:** Phrase ist vorhanden, korrekt notiert, physisch getrennt gelagert.
3) **Calls nur bei Bedarf aktivieren** (standardmäßig aus, Opt-in).  
   **Prüfen:** *Settings → Privacy → Voice and video calls* nur dann aktiv, wenn du das IP-Abwägung akzeptierst.

**Stolpersteine:**
- Ohne Recovery-Phrase gibt es keinen klassischen „Passwort-Reset“ (Abwägung: Anonymität/kein Account-Binding vs. Recovery-Komfort).
- Slow Mode kann Push/Calls einschränken (Abwägung: weniger Push-Metadaten vs. Erreichbarkeit).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Slow Mode** für Benachrichtigungen nutzen (weniger Push-Metadaten über Apple/Google; Abwägung: Akku/Foreground).
- App-Installation **ohne Play Store/App Store** prüfen (F-Droid Repo oder GitHub-Downloads laut Privacy Policy; Abwägung: Updates/Trust-Chain selbst managen).
- **Anhänge vor Versand lokal bereinigen**, wenn Metadaten gegenüber Chatpartnern relevant sind (FAQ weist darauf hin, dass Partner Dateimetadaten ggf. sehen kann).

**Abwägung:** mehr Eigenaufwand bei Updates/Benachrichtigungen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Keine Calls aktivieren** (Peer-to-Peer kann IP exponieren).
- **Netzwerk- und App-Isolation** (separates Geräteprofil/VM) nur, wenn dein Threat-Model das verlangt (Abwägung: deutlich weniger Komfort).
- **Verifikation von Desktop-Releases** via GPG/Hashes gemäß GitHub-Anleitung (Abwägung: zusätzlicher Update-Prozess).

**Abwägung:** deutlich mehr Komplexität und eingeschränkte Nutzbarkeit.

</details>

## Features
- Keine Telefonnummer/E-Mail für Accounts nötig (Account ID + Recovery-Phrase)
- Onion-Routing für Nachrichten (Metadata-Minimierung laut Anbieterbeschreibung)
- Push-Benachrichtigungen: Slow Mode (Polling) oder Fast Mode (FCM/APNs)
- Dateianhänge über Session File Server: verschlüsselt; EXIF-Strip (Desktop, außer Videos)
- App-Lock/Passwortschutz: Mobile via Gerätesperre, Desktop mit App-Passwort
- Voice/Video-Calls (Beta, standardmäßig aus; Opt-in in Privacy-Einstellungen)

## Alternativen
- Signal (ähnliche Kategorie; Abwägung: anderes Metadaten-/Account-Modell je nach Nutzung)
- Threema (ähnliche Kategorie; Abwägung: anderer Vertriebs-/Lizenzierungsansatz)
- Matrix/Element (ähnliche Kategorie; Abwägung: Föderation & Serverabhängigkeiten)
- Briar (ähnliche Kategorie; Abwägung: anderer Kommunikations-/Erreichbarkeitsfokus)
- SimpleX Chat (ähnliche Kategorie; Abwägung: anderer Netzwerk-/Routing-Ansatz)

## Nicht gelöst / offene Punkte
- In den genutzten Primärquellen sind **Krypto-Details (KDF/Parameter)** nicht kompakt zentral dokumentiert („wo genau steht was?“).

## Quellen

- Quarkslab Security Audit (PDF, verlinkt in der offiziellen FAQ): "https://quarkslab.com/resources/audit_reports/Session-Report.pdf
- Push-Benachrichtigungen: "Slow Mode (Polling) oder Fast Mode (FCM/APNs)
- Dateianhänge über Session File Server: "verschlüsselt; EXIF-Strip (Desktop, außer Videos)
- App-Lock/Passwortschutz: "Mobile via Gerätesperre, Desktop mit App-Passwort
- Matrix/Element (ähnliche Kategorie, föderiert; Trade-off: "Server-/Raum-Metadaten je nach Setup)
- Briar (ähnliche Kategorie, anderer Routing-Ansatz; Trade-off: "Bedienung/Erreichbarkeit)
- https://github.com/session-foundation/session-desktop
- [Session Privacy Policy](https://getsession.org/privacy-policy)
- [Session App Privacy Policy](https://getsession.org/app-privacy-policy)
- [Session Terms of Service](https://getsession.org/terms-of-service)
- [Session FAQ](https://getsession.org/faq)
- [Session Support: App-Passwort/Lock Session](https://sessionapp.zendesk.com/hc/en-us/articles/4416523054873-Can-I-Use-A-Password-To-Protect-My-Session-Account)
- [Session Support: Where is Session based?](https://sessionapp.zendesk.com/hc/en-us/articles/40512410161305-Where-is-Session-based)
- [Session Support: Response to information requests](https://sessionapp.zendesk.com/hc/en-us/articles/40512506456729-What-is-Session-s-response-to-information-requests)
- [Session Technology Foundation: Transparency Reports](https://session.foundation/transparency-reports)
- [GitHub: session-desktop (License + Signatur-Verifikation)](https://github.com/session-foundation/session-desktop)
- [Quarkslab Audit (PDF, via offizieller FAQ verlinkt)](https://quarkslab.com/resources/audit_reports/Session-Report.pdf)
