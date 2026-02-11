---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / SimpleX Chat"
url: "/anbieter/simplex-chat/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-03"
robots: "index,follow"
description: "Kurzprofil von SimpleX Chat (Kategorie: Messenger)."
provider: ""
name: "SimpleX Chat"
category: "Messenger"
website: "https://simplex.chat/"
repo: "https://github.com/simplex-chat/simplex-chat"
license: "AGPL-3.0-only"
policies: ""
privacy: "https://simplex.chat/privacy/"
terms: "https://simplex.chat/privacy/#conditions-of-use-of-software-and-infrastructure"
transparency: "https://simplex.chat/transparency/"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "UK (England & Wales; laut Conditions of Use/Transparency)"
region: "uk"
logs: "minimal"
retention: "mid"
retention_notes: "21d (undelivered Messages), 48h (undelivered Files), bis ~1 Monat (Server-Logs/Backups; laut Privacy Policy)"
retention_max_days: "30"
data_notes: "Keine Konten/IDs auf Servern; Metadaten-Trade-offs v.a. bei iOS-Instant-Push & Link-Previews; Self-Hosting/Server-Auswahl möglich."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

SimpleX Chat ist ein Anbieter aus der Kategorie **Messenger**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen Messenger ohne Telefonnummer/Account nutzen willst und bereit bist, Server-/Notification-Abwägungen bewusst zu wählen.
- **Weniger geeignet wenn:** du auf „klassische“ Kontowiederherstellung (Account-Reset) oder ein zentrales Web-Login-Ökosystem angewiesen bist.
- **Wichtigster Abwägung:** Komfort (z.B. iOS-Instant-Push, automatische Link-Previews) vs. Metadaten (z.B. Beobachtbarkeit von Queue-Aktivität / Web-Requests).

## Sofortmaßnahmen
- **SimpleX Lock aktivieren:** reduziert Risiko bei Gerätezugriff (App öffnet nicht ohne Geräte-Auth).
- **„Send link previews“ deaktivieren:** verhindert, dass dein Gerät Vorschauen direkt von Websites lädt (IP/Timing-Leak).
- **Benachrichtigungsmodus bewusst wählen:** „Instant“ ist bequemer, kann aber mehr Metadaten an Notification-Server preisgeben.

## Entscheidungshilfe
- Wenn du **keine Telefonnummer/E-Mail als Login** willst, dann ist SimpleX Chat relevant (Abwägung: kein klassischer Account-Reset, Daten sind primär lokal).
- Wenn du auf **iOS maximale Bequemlichkeit** brauchst, dann nutze „Instant notifications“ (Abwägung: Notification-Server kann Metadaten wie Queue-Anzahl und ungefähre Nachrichtenfrequenz beobachten).
- Wenn du **Link-Metadaten minimieren** willst, dann deaktiviere Link-Previews in *Einstellungen → Privacy & security* (Abwägung: weniger Komfort bei URLs).
- Wenn du **Server-/Jurisdiktions-Kontrolle** willst, dann nutze eigene/selbst betriebene Relays in *Einstellungen → Network & servers* (Abwägung: mehr Einrichtung- und Betriebsaufwand).
- Wenn du **IP-Leaks bei Calls** minimieren willst, dann nutze Calls über Relay/TURN (Abwägung: Relay kann u.a. Call-Dauer sehen; bei P2P kennt dein Kontakt deine IP).
- Wenn du **Netzwerk-Korrelation** stärker reduzieren willst, dann nutze Tor/Proxy und (Beta) Transport-Isolation (Abwägung: mehr Latenz/Traffic, mehr Fehlerquellen).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | SimpleX Chat |
| Kategorie | Messenger |
| Website | https://simplex.chat/ |
| Quellcode | https://github.com/simplex-chat/simplex-chat |
| Lizenz | AGPL-3.0-only |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | GitHub Sponsors, Open Collective (Spenden; optional) |
| Jurisdiktion | UK (England & Wales; laut Conditions of Use/Transparency) |
| Logs | minimal |
| Retention | 21d (undelivered Messages), 48h (undelivered Files), bis ~1 Monat (Server-Logs/Backups; laut Privacy Policy) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: [SimpleX Privacy Policy & Conditions of Use](https://simplex.chat/privacy/)
- AGB/Terms: [Conditions of Use (im selben Dokument)](https://simplex.chat/privacy/#conditions-of-use-of-software-and-infrastructure)
- Transparency Report: [Transparency Reports](https://simplex.chat/transparency/)
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- [Trail of Bits Review (PDF)](https://github.com/trailofbits/publications/blob/master/reviews/SimpleXChat.pdf)
- [SimpleX Design Review 2024 Summary (PDF)](https://github.com/simplex-chat/simplex-chat/blob/stable/docs/SimpleX_Design_Review_2024_Summary_Report_12_08_2024.pdf)

**Daten-Notizen (kurz):**
- Keine Nutzerkonten/IDs auf Relay-Servern (laut Privacy Policy).
- Undelivered Messages/Files werden serverseitig zwischengespeichert (zeitlich begrenzt).
- iOS-Instant-Push ist ein dokumentierter Metadaten-Abwägung.
- Self-Hosting/Custom-Server und Tor/Proxy sind dokumentiert möglich.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Profile, zugestellte Nachrichten/Dateien liegen laut Anbieter **nur auf dem Gerät**; auf Servern können u.a. **undelivered Messages/Files** sowie **technische Tokens/Keys** zwischengespeichert werden.
- **Wofür:** Zustellung/Weiterleitung (Relays), Dateitransfer (File-Relays), Benachrichtigungen (iOS-Push), optional Directory/Support.
- **Weitergabe/Subprozessoren:** Preset-Operatoren nutzen laut Anbieter **Drittparteien** (z.B. Hosting/Netzwerk); außerdem Drittanbieter für E-Mail-Support (Anbieter nennt den konkreten Dienst nicht).
- **Drittlandtransfer:** Nicht angegeben (Standort/Betreiber der Relays hängt von deiner Server-Auswahl ab).
- **Zahlungsabwicklung/Payment Processor:** Spenden optional über GitHub/Open Collective (kein Pflicht-Checkout für Nutzung).
- **Kontakt/DSAR/DPA:** Kontakt laut Anbieter per E-Mail (chat@simplex.chat) oder Support-Chat; DPA/AVV nicht angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Conditions of Use sollen Client-Apps **kein Tracking/Analytics** enthalten und keine Tracking-Informationen teilen.
- **Abschaltbar?** Nicht zutreffend für klassische Analytics; relevante Privacy-Schalter sind u.a. **Link-Previews** und **Auto-accept images**.
- **Wo (Menüpfad):** App → Profilbild oben links → **Settings** → **Privacy & security**.

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** 21 Tage (undelivered Messages), 48 Stunden (undelivered Files), bis ca. 1 Monat (Append-only Logs/Backups, laut Privacy Policy)
- **Lösch-/Opt-out-Optionen:** Löschung/Retention lokal (z.B. Datenbank/Export) und per App-Optionen; serverseitige Zustell-Daten werden laut Anbieter nur so lange wie nötig gehalten.

**Abwägung am Punkt:** Weniger Metadaten (z.B. keine Instant-Push, keine Link-Previews) kann Komfort reduzieren; mehr Komfort erhöht beobachtbare Metadaten.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Ende-zu-Ende-Verschlüsselung mit Double Ratchet (laut Privacy Policy/Security-Doku).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (auf Nutzer-Ebene); Datenbank-Passphrase wird lokal verwaltet (KeyChain/KeyStore) und kann angepasst werden.
- **MFA/2FA/Passkeys/Hardware-Keys:** Kein klassisches Konto-Login → nicht zutreffend; Fokus liegt auf Geräteschutz (Lock/Passphrase).
- **Recovery/Account-Wiederherstellung:** Kein Account-Reset; Daten sind geräte-/datenbankbasiert → Export/Backup ist der relevante Recovery-Punkt.
- **Vuln-Handling / Security-Kontakt:** Security Policy nennt Meldeweg per E-Mail + PGP-Fingerprint.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **App-Sperre aktivieren (SimpleX Lock)**  
   Menü: App → Profilbild oben links → **Settings → Privacy & security → SimpleX Lock**.  
   **Prüfen:** Beim Öffnen/Resume wird Geräte-Auth verlangt.
2) **Lock-/Preview-Verhalten anpassen**  
   Menü: **Settings → Notifications** (Message Preview) + **Privacy & security → Protect app screen**.  
   **Prüfen:** Keine Vorschau im Lockscreen/Notification, Recents sind geschützt.
3) **Link-Previews deaktivieren**  
   Menü: **Settings → Privacy & security → Send link previews (aus)**.  
   **Prüfen:** Beim Senden von Links werden keine Vorschauen automatisch erzeugt.

**Stolpersteine:**
- „Instant notifications“ auf iOS ist ein dokumentierter Metadaten-Abwägung (Komfort vs. beobachtbare Queue-Aktivität).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Benachrichtigungsmodus wählen:** Menü: **Settings → Notifications → periodic / only when the app is running** (Abwägung: Verzögerung/Komfort).
- **Auto-accept images deaktivieren:** Menü: **Settings → Privacy & security → Auto-accept images (aus)** (Abwägung: mehr Klicks, weniger „Online“-Signal).
- **Incognito/Hidden Profiles nutzen:** Menü: **Settings → Incognito** bzw. Hidden Profiles (Abwägung: mehr Komplexität bei Identitäts-/Profilverwaltung).
- **Datenbank-Passphrase selbst setzen & nicht im Gerät speichern (optional):** Menü: **Settings → Database passphrase & export** (Abwägung: häufiger manuelle Eingabe, ggf. Einschränkungen bei Notifications).

**Abwägung:** Weniger Metadaten/Bequemlichkeit → mehr manuelle Schritte und potenziell mehr Latenz.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Tor/Proxy verwenden:**  
  Android: **Settings → Network & servers → Use SOCKS proxy** (z.B. Orbot), ggf. **Use .onion hosts: required**.  
  iOS: Orbot als VPN + **Use .onion hosts** (Abwägung: mehr Latenz/Fehlerquellen).
- **Transport-Isolation (BETA) aktivieren:** über Developer Tools → „Transport isolation“ (Abwägung: mehr Traffic, mögliche Instabilität).
- **Eigene Server nutzen:** **Settings → Network & servers → SMP servers** (Abwägung: Betrieb/Monitoring liegt bei dir).
- **Calls härten:**  
  **Settings → Audio & video calls**: „Always use relay“ anlassen (IP-Schutz) oder ICE/TURN selbst hosten (Abwägung: Einrichtung-Aufwand).  
  Optional iOS Call-Interface deaktivieren, falls Lock-Screen-Accept unerwünscht ist.

**Abwägung:** Maximale Kontrolle/Isolation → deutlich höherer Einrichtung- und Betriebsaufwand.

</details>

## Features
- Ende-zu-Ende-verschlüsselte Chats (Double Ratchet)
- Verbindungen ohne Telefonnummer/Username/Account
- Mehrere Profile, Incognito-Mode, Hidden Profiles
- Sicherheitscode-Verifikation pro Kontakt
- Datenbank-Passphrase, Export/Import, lokale Datenhaltung
- Audio-/Video-Anrufe via WebRTC (Konfig-Optionen für Relay/P2P/ICE)
- Eigene SMP-/XFTP-Server möglich, Tor/Proxy-Optionen

## Alternativen
- Signal (Abwägung: Telefonnummer/zentraler Dienst vs. großer Mainstream-Client)
- Session (Abwägung: anderes Routing/Bedrohungsmodell vs. abweichende UX/Ökosystem)
- Matrix/Element (Abwägung: Föderation/Serverwahl vs. Admin-/Metadatenmodell)
- Briar (Abwägung: P2P/Offline-Fokus vs. Erreichbarkeit/Kompatibilität)
- Threema (Abwägung: anderes Account-/App-Modell vs. Infrastruktur/Features)

## Nicht gelöst / offene Punkte
- Unklar: öffentliche Liste konkreter Hosting-/E-Mail-Subprozessoren für SimpleX Chat Ltd (nur Kategorien genannt).

## Quellen

- Trail of Bits: "SimpleX Design Review 2024 – Summary Report (PDF)
- [SimpleX Privacy Policy & Conditions of Use](https://simplex.chat/privacy/)
- [Security Policy](https://simplex.chat/security/)
- [Transparency Reports](https://simplex.chat/transparency/)
- [Donate](https://simplex.chat/donate/)
- [User Guide](https://simplex.chat/docs/guide/readme.html)
- [App settings (Guide)](https://simplex.chat/docs/guide/app-settings.html)
- [Privacy & security (Guide)](https://simplex.chat/docs/guide/privacy-security.html)
- [Audio & video calls (Guide)](https://simplex.chat/docs/guide/audio-video-calls.html)
- [Hosting your own SMP Server](https://simplex.chat/docs/server.html)
- [GitHub Repo: "simplex-chat/simplex-chat](https://github.com/simplex-chat/simplex-chat)
- [Trail of Bits Review (PDF)](https://github.com/trailofbits/publications/blob/master/reviews/SimpleXChat.pdf)
- [SimpleX Design Review 2024 Summary (PDF)](https://github.com/simplex-chat/simplex-chat/blob/stable/docs/SimpleX_Design_Review_2024_Summary_Report_12_08_2024.pdf)
- [SimpleX Privacy Policy & Conditions of Use](https://simplex.chat/privacy/)
- [Security Policy](https://simplex.chat/security/)
- [Transparency Reports](https://simplex.chat/transparency/)
- [Donate](https://simplex.chat/donate/)
- [User Guide](https://simplex.chat/docs/guide/readme.html)
- [App settings (Guide)](https://simplex.chat/docs/guide/app-settings.html)
- [Privacy & security (Guide)](https://simplex.chat/docs/guide/privacy-security.html)
- [Audio & video calls (Guide)](https://simplex.chat/docs/guide/audio-video-calls.html)
- [Hosting your own SMP Server](https://simplex.chat/docs/server.html)
- [GitHub Repo: simplex-chat/simplex-chat](https://github.com/simplex-chat/simplex-chat)
- [Trail of Bits Review (PDF)](https://github.com/trailofbits/publications/blob/master/reviews/SimpleXChat.pdf)
- [SimpleX Design Review 2024 Summary (PDF)](https://github.com/simplex-chat/simplex-chat/blob/stable/docs/SimpleX_Design_Review_2024_Summary_Report_12_08_2024.pdf)
