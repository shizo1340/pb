---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Strongbox (iOS)"
url: "/anbieter/strongbox/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-10"
robots: "index,follow"
description: "Kurzprofil von Strongbox (iOS) (Kategorie: Passwort-Manager)."
provider: ""
name: "Strongbox (iOS)"
category: "Passwort-Manager"
website: "https://strongboxsafe.com/"
repo: "https://github.com/strongbox-password-safe/Strongbox"
license: "AGPL-3.0 (source-available; laut Repo nicht OSI-konform vollständig buildbar)"
policies: ""
privacy: "https://strongboxsafe.com/privacy/"
terms: "https://strongboxsafe.com/terms/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "partial"
self_host_possible: "yes"
account_required: "unknown"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Vereinigtes Königreich (England; Phoebe Code Limited)"
region: "uk"
logs: "configurable"
logs_notes: "configurable (lokale Sync-/Debug-Logs, manuell teilbar)"
retention: "unknown"
data_notes: "Offline-first; Datenbank bleibt lokal, optional verschlüsselte Datei-Synchronisation über Cloud/WebDAV/SFTP oder Strongbox Sync (Apple CloudKit). Einige Features können externe Requests auslösen (z.B. FavIcons, Connectivity-Check, HIBP-Audit)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Strongbox (iOS) ist ein Anbieter aus der Kategorie **Passwort-Manager**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du auf iPhone/iPad einen KeePass/Password-Safe-kompatiblen Passwort-Manager willst und Kontrolle über Speicherort/Sync (lokal, WebDAV/SFTP, Cloud) behalten möchtest.
- **Weniger geeignet wenn:** du einen vollständig reproduzierbar buildbaren Open-Source-Client erwartest (laut Repo ist das Projekt nicht vollständig OSI-konform buildbar) oder wenn du strikt *keine* externen Netzwerk-Requests riskieren willst (FavIcon-/Connectivity-/Audit-Features).
- **Wichtigster Abwägung:** **Komfortfeatures (Sync, FavIcons, Online-Audits) vs. zusätzliche Metadaten/Netzwerkverbindungen**.

## Sofortmaßnahmen
- **KDF sinnvoll einstellen (Argon2id/d):** reduziert Brute-Force-Risiko, ohne iOS-AutoFill zu destabilisieren.
- **Offline-Connectivity-Check deaktivieren:** verhindert den Standard-Request zu `duckduckgo.com` für “Online/Offline”-Erkennung.
- **FavIcon-Autodownload abschalten:** reduziert externe Requests basierend auf Entry-URLs (Metadatenleck-Risiko).

## Entscheidungshilfe
- Wenn du **ohne Cloud/Accounts** arbeiten willst, dann nutze **lokale Datenbanken** (Abwägung: du brauchst eigene Backup-Disziplin).
- Wenn du **eigenen Server** nutzen willst, dann verwende **WebDAV/SFTP** als Sync-Ziel (Abwägung: Betrieb/Absicherung des Servers ist dein Thema).
- Wenn du **maximal wenig Netzwerk-Exposure** willst, dann deaktiviere **FavIcon-Downloader** und **Offline-Connectivity-Check** (Abwägung: weniger Komfort/UX).
- Wenn du **Passwort-Leaks prüfen** willst, dann aktiviere das **HIBP-Audit** gezielt (Abwägung: regelmäßige API-Calls; Standard ist “off”).
- Wenn du **schnelle Entsperrung** willst (Face ID/PIN/Quick Launch), dann prüfe die **Passcode-Fallback/Coalesce**-Optionen (Abwägung: mehr Komfort kann Angriffsfläche über Geräte-Passcode erhöhen).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Strongbox (iOS) |
| Kategorie | Passwort-Manager |
| Website | https://strongboxsafe.com/ |
| Quellcode | https://github.com/strongbox-password-safe/Strongbox |
| Lizenz | AGPL-3.0 (source-available; laut Repo nicht OSI-konform vollständig buildbar) |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | no (optional, je nach Sync/Payment) |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Apple App Store (In-App Purchase); ggf. Direktkauf außerhalb App Store (laut Terms) |
| Jurisdiktion | Vereinigtes Königreich (England; Phoebe Code Limited) |
| Logs | configurable (lokale Sync-/Debug-Logs, manuell teilbar) |
| Retention | Nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://strongboxsafe.com/privacy/
- AGB/Terms: https://strongboxsafe.com/terms/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- CASA Tier 2 Audit (jährlich, laut Anbieter)

**Daten-Notizen (kurz):**
Offline-first. Verschlüsselte Datenbanken können lokal bleiben oder als **verschlüsselte Datei** zu einem Storage-/Serverziel synchronisiert werden. Einige Komfortfunktionen können externe Verbindungen auslösen (FavIcons, Connectivity-Check, Online-Audits).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** App ist client-seitig; Passwortdaten bleiben laut Anbieter auf dem Gerät, bei Sync wird nur die **verschlüsselte Datenbankdatei** übertragen.
- **Wofür:** Sync/Storage-Integrationen (iCloud/Files/Cloud/WebDAV/SFTP), optional FavIcon-Download und Online-Audits.
- **Weitergabe/Subprozessoren:** Website-Analytics via Plausible; Support-Kommunikation via Google Workspace/Microsoft 365; Helpdesk via Re:Amaze (laut Privacy Policy).
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Apple App Store; außerdem erwähnt der Anbieter Käufe außerhalb des App Stores (Terms).
- **Kontakt/DSAR/DPA:** Kontaktmöglichkeit in Privacy Policy genannt (keine separate DPA-Seite in den genutzten Quellen gefunden).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** In-App-Analytics laut Anbieter: **nein**. Website-Analytics via Plausible.
- **Abschaltbar?** Website-Analytics: nicht dokumentiert als Opt-out; in App: keine Analytics laut Anbieter.
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** configurable (lokale Debug-Infos & Sync-Logs können kopiert werden, z.B. für Support).
- **Aufbewahrung:** Nicht angegeben.
- **Lösch-/Opt-out-Optionen:** Sync-Log ist einsehbar/kopierbar; Löschpfad nicht angegeben.

**Abwägung am Punkt:** Weniger Online-Features/Logs erleichtert Datenminimierung, kann aber Diagnose/Support und Komfortfunktionen einschränken.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Strongbox nutzt KeePass/Password-Safe-Formate; Datenbank ist lokal verschlüsselt (Details in Kryptografie-Artikel). Anbieter beschreibt „Zero knowledge“ und keine Passwort-Reset-Möglichkeit.
- **KDF/Parameter/Schlüsselableitung:** Anbieter empfiehlt **Argon2d oder Argon2id**; Memory für iOS AutoFill typischerweise **≤ 16MB** und Unlock-Zeit ~ **1 Sekunde** (anpassbar).
- **MFA/2FA/Passkeys/Hardware-Keys:** Hardware-Key/YubiKey-Support (Feature/Helpdesk); zusätzlich Biometrie/PIN-Optionen innerhalb der App/Datenbank.
- **Recovery/Account-Wiederherstellung:** Laut Privacy Policy **kein Passwort-Reset** (Design/Zero Knowledge).
- **Vuln-Handling / Security-Kontakt:** Support-Kontakt vorhanden; Repo hat **keine SECURITY.md** (laut GitHub Security Overview).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Datenbank-Härtung setzen (KDF & Format)**  
   **Pfad:** Datenbank entsperren → *Database Settings* (Sliders oben links) → **Encryption**  
   **Prüfen:** Argon2id/d aktiv; Memory so gewählt, dass AutoFill stabil bleibt (z.B. 16MB) und Unlock ~1s dauert.
2) **Locking/Timeout definieren**  
   **Pfad:** **Settings → Security & Privacy → Locking**  
   **Prüfen:** Auto-Lock greift (Test: App in Hintergrund → Rückkehr → erneute Auth erforderlich).
3) **Netzwerk-Features bewusst schalten**  
   - Offline-Connectivity-Check (Advanced Preferences) bei Bedarf deaktivieren.  
   - FavIcon-Downloader/Auto-Fetch deaktivieren, wenn du keine externen URL-Requests willst.  
   **Prüfen:** keine unerwarteten Requests beim Öffnen/Browsen von Einträgen.

**Stolpersteine:**
- **Passcode-Fallback + „Coalesce“ + Quick Launch** kann bedeuten, dass Geräte-Passcode indirekt zur Datenbank-Entsperrung beiträgt (Abwägung: sehr schnell vs. Risiko bei bekanntem Geräte-Passcode).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Speicherort minimieren:** lokale Datenbank oder eigener WebDAV/SFTP-Server statt Drittanbieter-Cloud.  
- **Online-Audits nur gezielt:** HIBP-Audit ist opt-in; nutze es nur, wenn dir der Online-Check den Abwägung wert ist.  
- **Metadaten durch Icons reduzieren:** FavIcon-Autodownload aus; vermeide URL-basierte Icon-Suche, wenn URLs sensibel sind.  
**Abwägung:** weniger Komfort (Optik/Sync/Audits), mehr Eigenaufwand bei Backups.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Offline-only Einrichtung:** lokale Datenbank, keine Cloud-/Sync-Integrationen; Netzwerk-Features (Connectivity/FavIcon/Audits) deaktivieren.  
- **Entsperrung strenger:** keine Convenience-Unlocks/Quick Launch, stattdessen immer Master-Creds (ggf. mit Keyfile/Hardware-Key, wenn du das nutzt).  
- **Gerätetrennung:** dediziertes iOS-Profil/Device für Secrets, keine unnötigen Apps/Profiles.  
**Abwägung:** deutlich weniger Alltagstauglichkeit; hohe Backup-/Recovery-Disziplin nötig.

</details>

## Features
- KeePass (KDB/KDBX) & Password Safe (v3) kompatibel
- Lokale Datenbanken oder Sync via iCloud/Files/Cloud-Provider/WebDAV/SFTP
- Strongbox Sync (CloudKit/iCloud) inkl. Sharing (optional)
- YubiKey/Hardware-Key-Integration (optional)
- Duress PIN (Pro)
- Have I Been Pwned? Passwort-Audit (opt-in, Pro)

## Alternativen
- [KeePassXC](/anbieter/keepassxc/) – lokal, du organisierst Sync/Backups selbst (Abwägung: weniger Cloud-Komfort, mehr Kontrolle)
- [KeePassDX](/anbieter/keepassdx/) – KeePass-Dateien mobil, anderes UI/Feature-Set (Abwägung: App-/Plattformunterschiede)
- [Bitwarden](/anbieter/bitwarden/) – Account-/Server-basiert (Abwägung: mehr Komfort/Sync, andere Metadatenlage durch Serverbetrieb)

## Nicht gelöst / offene Punkte
- Source-available, aber laut Repo nicht vollständig OSI-konform buildbar (praktische „Open Source“-Einschränkung).
- Kein öffentlich dokumentierter Responsible-Disclosure-Prozess im Repo (SECURITY.md fehlt).
- Support-Mailbox-Retention wird nur als „regularly purged/expunged“ beschrieben (ohne Zeitangabe).

## Quellen

- KeePassXC (Desktop): "lokal, du organisierst Sync/Backups selbst
- KeePassDX (Android): "KeePass-Dateien mobil, andere UI/Feature-Set
- Bitwarden: "Account-/Server-basiert (mehr Komfort, andere Metadatenlage)
- https://github.com/strongbox-password-safe/Strongbox
- [Privacy Policy](https://strongboxsafe.com/privacy/)
- [Terms of Use](https://strongboxsafe.com/terms/)
- [Preise (DE)](https://strongboxsafe.com/de/preise/)
- [What Network Connections Can Strongbox Make?](https://strongbox.reamaze.com/kb/security-and-privacy/what-network-connections-can-strongbox-make)
- [Recommended Encryption Settings](https://strongbox.reamaze.com/kb/security-and-privacy/what-particular-encryption-settings-do-you-recommend-i-use-to-protect-my-database)
- [What Type of Cryptography Does Strongbox Use?](https://strongbox.reamaze.com/kb/security-and-privacy/what-type-of-cryptography-does-strongbox-use)
- [New Security Audit: ‘Have I Been Pwned?’](https://strongboxsafe.com/new-security-audit-have-i-been-pwned/)
- [Strongbox Sync – Frequently Asked Questions](https://strongbox.reamaze.com/kb/sync/strongbox-sync-frequently-asked-questions)
- [Convenience Auto Unlock Timeout for AutoFill](https://strongbox.reamaze.com/kb/autofill/convenience-auto-unlock-timeout-for-autofill)
- [Configuration Issue: Convenience Unlock… Device Passcode Fallback](https://strongbox.reamaze.com/kb/security-and-privacy/i-get-a-message-about-a-configuration-issue-face-slash-touch-id-app-lock-and-quick-launch-with-device-passcode-fallback)
- [GitHub Quellcode](https://github.com/strongbox-password-safe/Strongbox)
