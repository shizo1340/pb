---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Standard Notes"
url: "/anbieter/standard-notes/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-08"
robots: "index,follow"
description: "Kurzprofil von Standard Notes (Kategorie: Notizen & Docs)."
provider: ""
name: "Standard Notes"
category: "Notizen & Docs"
website: "https://standardnotes.com/"
repo: "https://github.com/standardnotes/app"
license: "AGPL-3.0-only (Apps) / GPL-3.0-only (Server)"
policies: ""
privacy: "https://standardnotes.com/legal/privacy"
terms: "https://standardnotes.com/legal/terms"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "unknown"
phone_required: "no"
kyc_required: "no"
jurisdiction: "United States"
region: "us"
logs: "minimal"
retention: "mid"
retention_notes: "Backups: bis zu 14 Tage nach Account-Löschung (laut Anbieter)"
retention_max_days: "14"
data_notes: "E2EE-Notizen; minimale Metadaten (z.B. Erstell-/Änderungsdatum); Website-Analytics via Plausible; Support über Zendesk; Payment über Stripe/PayPal/Coinbase (laut Privacy Policy)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Standard Notes ist ein Anbieter aus der Kategorie **Notizen & Docs**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Notizen plattformübergreifend synchronisieren willst, aber Inhalte client-seitig verschlüsselt bleiben sollen (E2EE), und du 2FA/Hardware-Keys nutzen möchtest.
- **Weniger geeignet wenn:** du möglichst wenige Drittanbieter-Kontakte (Payment/Support/Anti-Abuse) tolerierst oder ein reines Offline-/Lokalkonzept ohne Cloud-Flows brauchst.
- **Wichtigster Abwägung:** Komfort (Cloud-Sync, Support, Zahlungen) vs. zusätzliche Metadaten-/Drittanbieter-Kontakte (z.B. Support-System, Payment-Prozessoren).

## Sofortmaßnahmen
- **2FA aktivieren** (Authenticator oder Hardware-Key), um Kontoübernahmen deutlich zu erschweren.
- **Strict Sign In nutzen**, um Login nur mit der neuesten Kryptoversion zuzulassen (Abwägung: ältere Clients können aussperren).
- **User-Agent-Speicherung deaktivieren**, um Geräte-Metadaten im Konto zu reduzieren.

## Entscheidungshilfe
- Wenn du **Cloud-Sync** brauchst, dann nutze Standard Notes mit Konto (Abwägung: Account-/Payment-/Support-Metadaten).
- Wenn du **pseudonym** bleiben willst, dann prüfe **Private Username Mode** (Abwägung: nicht jede Kommunikation/Abrechnung ist dadurch automatisch anonym).
- Wenn du **ohne Konto** arbeiten willst, dann nutze den **Offline-Modus** mit **Application Passcode** (Abwägung: kein Sync ohne eigenes Einrichtung).
- Wenn du **Server-Abhängigkeit minimieren** willst, dann nutze **Self-Hosting** (Abwägung: Betrieb/Updates/Backup liegen bei dir).
- Wenn du **Zugriffsausfall** absichern willst, dann teste den **Offline-Decryptor** für Exporte (Abwägung: Backup-Handling wird dein Job).
- Wenn du **alte Clients** nutzt, dann sei vorsichtig mit **Strict Sign In** (Abwägung: Logins können blockiert werden, bis du aktualisierst).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Standard Notes |
| Kategorie | Notizen & Docs |
| Website | https://standardnotes.com/ |
| Quellcode | https://github.com/standardnotes/app (Server: https://github.com/standardnotes/server) |
| Lizenz | AGPL-3.0-only (Apps) / GPL-3.0-only (Server) |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | Je nach Nutzung (Offline: nein; Sync/Cloud: ja) |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Stripe; PayPal/Braintree; Coinbase (laut Privacy Policy) |
| Jurisdiktion | United States |
| Logs | minimal |
| Retention | Backups: bis zu 14 Tage nach Account-Löschung (laut Anbieter) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://standardnotes.com/legal/privacy
- AGB/Terms: https://standardnotes.com/legal/terms
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Cure53 — Pentest 2022 (PDF): https://assets.standardnotes.com/security/2022-Pentest-Report.pdf
- Shackle Labs — Kryptodesign-Review 2017 (PDF): https://assets.standardnotes.com/security/Report-SN-Audit.pdf

**Daten-Notizen (kurz):**
- Inhalte werden laut Anbieter **client-seitig verschlüsselt**, Server kann Inhalte nicht lesen.
- Server speichert laut Anbieter **Metadaten** wie Erstell-/Änderungsdatum (nicht Inhalt).
- Subprozessoren u.a. **AWS/Cloudflare/Stripe/PayPal/Braintree/Coinbase/Zendesk/ProtonMail** sind genannt.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Website-Analytics (Plausible, IP anonymisiert), Accountdaten (je nach Konto-Typ), Geräte-/Browser-User-Agent (optional), Metadaten (z.B. Erstell-/Änderungsdatum), Support-Kommunikation, Zahlungsdaten über Payment-Prozessoren.
- **Wofür:** Betrieb der Website/Apps, Accountverwaltung, Anti-Abuse (Human Verification), Support, Abrechnung.
- **Weitergabe/Subprozessoren:** In der Privacy Policy wird eine Subprozessorenliste genannt (u.a. AWS, Cloudflare, Stripe, PayPal/Braintree, Coinbase, GitHub, ProtonMail).
- **Drittlandtransfer:** Subprozessoren/Verarbeitung teils „global“ (z.B. AWS/Cloudflare), Zahlungsabwicklung laut Anbieter in den USA; Support über Zendesk.
- **Zahlungsabwicklung/Payment Processor:** Stripe, PayPal/Braintree, Coinbase (laut Privacy Policy).
- **Kontakt/DSAR/DPA:** Kontakt über Support-Inbox; zusätzlich wird eine Proton-Mail-Adresse für verschlüsselte Kommunikation genannt (laut Privacy Policy).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Website: Plausible-Analytics (laut Privacy Policy). Apps: laut Anbieter keine nutzungsbasierte Tracking-/Location-Daten.
- **Abschaltbar?** Marketing-Benachrichtigungen lassen sich laut Anbieter in den Preferences deaktivieren; User-Agent-Speicherung ist laut Anbieter abschaltbar.
- **Wo (Menüpfad):** In den Apps: *Account/Preferences* (laut Anbieter: „from your preferences“) für User-Agent-Storage/Marketing-Opt-out.

**Logs & Retention:**
- **Logging-Level:** minimal (laut Anbieter keine IP-Adressen in eigenen Datenbanken; User-Agent optional).
- **Aufbewahrung:** Backups werden laut Anbieter nach Account-Löschung innerhalb von **bis zu 14 Tagen** entfernt; IPs können laut Anbieter bei Cloudflare/AWS-Firewall zur Abuse-Abwehr kurzzeitig anfallen.
- **Lösch-/Opt-out-Optionen:** Account-Löschung (inkl. Backup-Auslaufzeit), User-Agent-Storage deaktivierbar, Marketing-Opt-out in Preferences.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Laut Anbieter werden Daten **auf dem Gerät** verschlüsselt, bevor sie synchronisiert werden; der Inhalt bleibt für den Server unlesbar.
- **KDF/Parameter/Schlüsselableitung:** In der Encryption-Whitepaper-Doku sind KDF/Key-Handling beschrieben (Details je nach Spezifikations-/Account-Version).
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA ist laut Help Center verfügbar; zusätzlich Hardware-Security-Key-Authentifizierung (WebAuthn) wird beschrieben.
- **Recovery/Account-Wiederherstellung:** 2FA-Secrets/Recovery-Key müssen sicher gespeichert werden; ohne diese kann Wiederherstellung scheitern (laut Help Center).
- **Vuln-Handling / Security-Kontakt:** Security-Audits sind verlinkt; Support-Kontakt ist dokumentiert.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **2FA aktivieren** (Authenticator).  
   **Pfad:** Profil-Icon (unten links) → *Account settings* → *Security* → *Two-factor authentication* aktivieren.  
   **Prüfen:** Beim Login wird ein 2FA-Code abgefragt.
2) **Hardware Security Key hinzufügen** (optional).  
   **Pfad:** Profil-Icon → *Account settings* → *Security* → *Hardware Security Key Authentication* → *Add Device*.  
   **Prüfen:** Login akzeptiert WebAuthn/NFC/USB-Authentifizierung.
3) **Strict Sign In nutzen** (wenn du aktuelle Clients verwendest).  
   **Prüfen:** Login mit „Strict sign in“ funktioniert; ältere App-Versionen ggf. vorher aktualisieren.

**Stolpersteine:**
- Wenn du 2FA aktivierst, sichere Secret/Recovery-Informationen offline (Abwägung: mehr Kontoschutz vs. Risiko von Account-Lockout).
- Strict Sign In kann Logins blockieren, wenn dein Konto noch ein altes Crypto-Upgrade braucht (Abwägung: Härtung vs. Kompatibilität).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **Private Username Mode** für pseudonyme Accounts (Abwägung: je nach Zahlung/Support bleibt ein separater Identifikationskanal möglich).
- Deaktiviere **User-Agent-Speicherung** in den Preferences (Abwägung: weniger Geräte-Übersicht im Konto).
- Nutze **Offline-Modus** oder **Self-Hosting**, wenn du Drittanbieter-Kontakte reduzieren willst (Abwägung: mehr Eigenbetrieb/Komplexität).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze **Self-Hosting** (Docker) und trenne Arbeitsumgebungen (Browser-Profil/VM) für die Web-App (Abwägung: hoher Betriebsaufwand).
- Erzwinge **Strict Sign In** konsequent und halte Clients aktuell (Abwägung: Update-Disziplin erforderlich).
- Plane einen **Disaster-Recovery-Test**: Export + Offline-Decryptor lokal testen (Abwägung: zusätzlicher Prozess, aber weniger Überraschungen im Ernstfall).

</details>

## Features
- Ende-zu-Ende-Verschlüsselung (Client-seitig vor Sync)
- 2FA (Authenticator) + Hardware-Security-Key (WebAuthn)
- Optional: Strict Sign In (nur neueste Crypto-Version akzeptieren)
- Offline-Nutzung ohne Konto (mit Application Passcode)
- Self-Hosting (Docker/Docs) + Home-Server-Option in der Desktop-App
- Offlines-Entschlüsselungstool für Exporte

## Alternativen
- [Joplin](/anbieter/joplin/)
- [Notesnook](/anbieter/notesnook/)
- [Obsidian](/anbieter/obsidian/)

## Nicht gelöst / offene Punkte
- Keine Transparency-Report-/Warrant-Canary-Seite gefunden.
- Unklar, welche konkreten „Human Verification Methods“ (z.B. welcher Anbieter) eingesetzt werden und wie lange dabei erhobene Daten genau vorgehalten werden.

## Quellen

- Cure53 — Pentest 2022 (PDF): "https://assets.standardnotes.com/security/2022-Pentest-Report.pdf
- Shackle Labs — Kryptodesign-Review 2017 (PDF): "https://assets.standardnotes.com/security/Report-SN-Audit.pdf
- Optional: "Strict Sign In (nur neueste Crypto-Version akzeptieren)
- [Standard Notes – Website](https://standardnotes.com/)
- [Privacy Policy](https://standardnotes.com/legal/privacy)
- [Terms of Service](https://standardnotes.com/legal/terms)
- [Help: "Self-Hosting mit Docker](https://standardnotes.com/help/self-hosting/docker)
- [Offline-Entschlüsselungstool](https://standardnotes.com/offline)
- [Standard Notes Encryption Whitepaper](https://standardnotes.com/help/self-hosting/encryption-whitepaper)
- [Auditübersicht (Help)](https://standardnotes.com/help/77/has-standard-notes-completed-a-third-party-security-audit)
- [Cure53 Pentest 2022 (PDF)](https://assets.standardnotes.com/security/2022-Pentest-Report.pdf)
- [Shackle Labs Review 2017 (PDF)](https://assets.standardnotes.com/security/Report-SN-Audit.pdf)
- [GitHub: "standardnotes/server](https://github.com/standardnotes/server)
- [Standard Notes – Website](https://standardnotes.com/)
- [Privacy Policy](https://standardnotes.com/legal/privacy)
- [Terms of Service](https://standardnotes.com/legal/terms)
- [Help: What information does Standard Notes collect about me?](https://standardnotes.com/help/5/what-information-does-standard-notes-collect-about-me)
- [Help: What services does Standard Notes use for daily operation?](https://standardnotes.com/help/52/what-services-does-standard-notes-use-for-daily-operation)
- [Help: 2FA aktivieren](https://standardnotes.com/help/25/how-do-i-enable-two-factor-authentication-for-my-account)
- [Help: Hardware Security Key (2FA)](https://standardnotes.com/help/two-factor-authentication/how-do-i-protect-my-account-with-a-hardware-security-key)
- [Help: Security Updates & Strict Sign In](https://standardnotes.com/help/security)
- [Help: Offline ohne Konto](https://standardnotes.com/help/59/can-i-use-standard-notes-totally-offline)
- [Help: Private Username Mode](https://standardnotes.com/help/80/what-is-private-username-mode)
- [Help: Self-Hosting – Einstieg](https://standardnotes.com/help/self-hosting/getting-started)
- [Help: Self-Hosting mit Docker](https://standardnotes.com/help/self-hosting/docker)
- [Offline-Entschlüsselungstool](https://standardnotes.com/offline)
- [Standard Notes Encryption Whitepaper](https://standardnotes.com/help/self-hosting/encryption-whitepaper)
- [Auditübersicht (Help)](https://standardnotes.com/help/77/has-standard-notes-completed-a-third-party-security-audit)
- [Cure53 Pentest 2022 (PDF)](https://assets.standardnotes.com/security/2022-Pentest-Report.pdf)
- [Shackle Labs Review 2017 (PDF)](https://assets.standardnotes.com/security/Report-SN-Audit.pdf)
- [GitHub: standardnotes/app](https://github.com/standardnotes/app)
- [GitHub: standardnotes/server](https://github.com/standardnotes/server)
