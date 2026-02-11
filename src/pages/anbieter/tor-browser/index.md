---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Tor Browser"
url: "/anbieter/tor-browser/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-14"
robots: "index,follow"
description: "Kurzprofil von Tor Browser (Kategorie: Tor & Anonymität)."
provider: ""
name: "Tor Browser"
category: "Tor & Anonymität"
website: "https://www.torproject.org/download/"
repo: "https://gitlab.torproject.org/tpo/applications/tor-browser"
license: "Nicht angegeben (Open Source; siehe Repository)"
policies: ""
privacy: "https://www.torproject.org/about/privacy_policy/"
terms: "Nicht angegeben (keine separaten Terms/AGB für Tor Browser gefunden)"
transparency: "https://www.torproject.org/about/reports/"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA (The Tor Project, Inc.; Mansfield, MA)"
region: "us"
logs: "minimal"
retention: "specified"
retention_notes: "lokal/temporär (Session-Cache); Bookmarks/Downloads können lokal persistieren"
data_notes: "Laut Privacy Policy keine Telemetrie/Analytics, keine Accounts. Update-Checks (Desktop) anonym über Tor; Add-on-Updates über Mozilla Add-ons. Anti-Zensur-Fallback kann kurz non-Tor sein (ohne PII-Logging laut Anbieter)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Tor Browser ist ein Anbieter aus der Kategorie **Tor & Anonymität**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Web-Traffic über das Tor-Netzwerk leiten willst und dabei möglichst wenig Identitätsdaten beim Anbieter anfallen sollen (kein Konto, laut Policy keine Telemetrie/Analytics).
- **Weniger geeignet wenn:** du auf maximale Website-Kompatibilität angewiesen bist (höhere Security Levels schalten Features ab) oder Tor-Verbindungen in deinem Netz häufig blockiert werden.
- **Wichtigster Abwägung:** **Nutzbarkeit/Kompatibilität vs. reduzierte Angriffsfläche** (z.B. JavaScript/Medien-Funktionen) – plus **Latenz/Performance vs. Tor-Routing**.

## Sofortmaßnahmen
- **Security Level auf „Safer“ oder „Safest“ stellen**, wenn du Risiko durch Skripte reduzieren willst (Abwägung: mehr Seiten funktionieren eingeschränkt).
- **Keine zusätzlichen Add-ons installieren**, um Fingerprinting-Risiken zu reduzieren (Abwägung: weniger Komfort-/Blocker-Funktionen).
- **Bei Zensur direkt Bridges/Snowflake aktivieren**, statt lange mit „Connect“ zu scheitern (Abwägung: Einrichtung-Aufwand, ggf. kurz non-Tor Signaling).

## Entscheidungshilfe
- Wenn du möglichst viele Webseiten ohne Brüche nutzen musst, dann bleib bei **Security Level „Standard“** (Abwägung: mehr aktive Web-Features, größere Angriffsfläche).
- Wenn du Skript-/Exploit-Risiken reduzieren willst, dann nutze **„Safer“ oder „Safest“** (Abwägung: JavaScript/Medien/Fonts teils deaktiviert, Webseiten brechen häufiger).
- Wenn deine Verbindung zu Tor blockiert wird, dann aktiviere **Bridges / Pluggable Transports (z.B. Snowflake)** (Abwägung: zusätzliche Konfiguration; laut Policy kann dafür kurz ein non-Tor Signaling-Kanal genutzt werden).
- Wenn du möglichst wenig lokale Spuren willst, dann **lasse Private-Browsing-Verhalten aktiv** und nutze **„New Identity“** für Session-Reset (Abwägung: weniger Komfort, z.B. erneute Logins).
- Wenn du Add-ons zur „Optimierung“ installieren willst, dann lass es und nutze nur die mitgelieferten Funktionen (Abwägung: weniger Customization, dafür weniger Fingerprinting-Risiko).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Tor Browser |
| Kategorie | Tor & Anonymität |
| Website | https://www.torproject.org/download/ |
| Quellcode | https://gitlab.torproject.org/tpo/applications/tor-browser |
| Lizenz | Nicht angegeben (Open Source; siehe Quellcode) |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Stripe, PayPal, BTCPay Server (Spenden optional) |
| Jurisdiktion | USA (The Tor Project, Inc.; Mansfield, MA) |
| Logs | minimal |
| Retention | lokal/temporär (Session-Cache); Bookmarks/Downloads können lokal persistieren |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.torproject.org/about/privacy_policy/
- AGB/Terms: Nicht angegeben (keine separaten Terms/AGB für Tor Browser gefunden)
- Transparency Report: https://www.torproject.org/about/reports/
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Cure53 – TTP-03 (Code Audit, März 2024) – verlinkt im Reports-Bereich
- Radically Open Security – Code Audit (April 2023) – verlinkt im Reports-Bereich

**Daten-Notizen (kurz):**
Laut Privacy Policy: keine Telemetrie/Analytics, keine Accounts/Identity-Linkage. Desktop kann anonym nach Updates prüfen (über Tor) und Add-on-Updates über Mozilla Add-ons abrufen. Anti-Zensur-Fallback (Bridges/PTs, z.B. Moat) kann kurz non-Tor sein; der Anbieter sagt, dabei keine PII zu loggen.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Privacy Policy **keine Erhebung** von IP-Adresse, Browserverlauf, Device-IDs oder Standort durch Tor Browser.
- **Wofür:** Funktion (Tor-Verbindung, Anti-Zensur) + optionaler Update-Check (Desktop).
- **Weitergabe/Subprozessoren:** Laut Policy **keine Weitergabe von Nutzerdaten an Dritte** (keine Ads/Analytics). Ausnahme: **Add-on-Updates über Mozillas Add-ons Service** (z.B. NoScript) werden genannt.
- **Drittlandtransfer:** Nicht angegeben (für Tor Browser selbst laut Policy keine personenbezogenen Daten).
- **Zahlungsabwicklung/Payment Processor:** Nur relevant für Spenden: Stripe/PayPal/BTCPay Server.
- **Kontakt/DSAR/DPA:** Privacy-Kontakt laut Policy über Tor Project erreichbar (frontdesk@torproject.org).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy: **nein** („No tracking, telemetry, or analytics“).
- **Abschaltbar?** Nicht zutreffend (laut Policy nicht aktiv).
- **Wo (Menüpfad):** Nicht angegeben (kein Telemetrie-Schalter dokumentiert, da laut Policy keine Telemetrie).

**Logs & Retention:**
- **Logging-Level:** minimal (laut Policy keine personenbezogenen Daten; lokale Zustands-/Sessiondaten für Funktion).
- **Aufbewahrung:** Session-Cache laut Policy temporär; lokal können **Bookmarks/Downloads** sowie **Tor State Files** persistieren. Private Browsing ist auf Android immer aktiv; auf Desktop standardmäßig aktiv, kann aber deaktiviert werden.
- **Lösch-/Opt-out-Optionen:** Lokal: „New Identity“ (Session-Reset) bzw. Browser schließen (mit Private-Browsing aktiv) sowie Deinstallation (löscht lokale Daten laut Policy).

**Abwägung am Punkt:** Weniger lokale Persistenz reduziert Spuren auf dem Gerät, kann aber Komfort/Usability (z.B. Logins/Downloads) einschränken.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Laut Privacy Policy wird Traffic über Tor geroutet; Tor Browser bietet eingebaute Schutzmaßnahmen gegen Tracking/Fingerprinting (z.B. Uniform User-Agent, Isolation von Website-Inhalten; Screen-Size-Normalisierung auf Desktop).
- **KDF/Parameter/Schlüsselableitung:** Nicht zutreffend (kein Konto/kein Vault).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (kein Konto). Hinweis aus Tor Browser Manual: WebAuthn/U2F sind deaktiviert.
- **Recovery/Account-Wiederherstellung:** Nicht zutreffend (kein Account).
- **Vuln-Handling / Security-Kontakt:** Support nennt Bug-/Feedback-Reporting via E-Mail (frontdesk@torproject.org) und Ticketsysteme (GitLab/AnonTicket, je nach Fall).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Security Level bewusst setzen** (mind. „Standard“, bei Bedarf „Safer“).  
   **Prüfen:** Schild-Icon neben der URL → „Settings…“ → Security Level sichtbar.
2) **Keine zusätzlichen Add-ons installieren** (NoScript ist standardmäßig enthalten).  
   **Prüfen:** Menü (≡) → „Add-ons and themes“ → nur mitgelieferte Add-ons.
3) **Bei Verbindungsproblemen Bridges aktivieren**.  
   **Prüfen:** Menü (≡) → „Settings“ → „Connection“ → „Bridges“ (Built-in oder manuell) und danach Verbindungstest.

**Stolpersteine:**
- Zusätzliche Add-ons können deinen Browser-Fingerprint einzigartiger machen (Abwägung: mehr Komfort-Funktionen vs. mehr Wiedererkennbarkeit).
- Höhere Security Levels schalten Features ab (Abwägung: weniger Angriffsfläche vs. Website-Kompatibilität).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **„New Identity“** für Session-Reset, wenn du Kontext/Sessiondaten konsequent trennen willst.
- Lasse **Private-Browsing-Verhalten** aktiv (Desktop-Default) und vermeide dauerhaftes Speichern von History/Cookies.
- Verwende Bridges nur, wenn nötig (Abwägung: Verfügbarkeit in Zensur-Umgebungen vs. zusätzlicher Verbindungs-/Konfigurationspfad).

**Abwägung:** weniger Komfort (z.B. erneute Logins) und teils mehr Reibung beim täglichen Browsen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Stelle Security Level auf **„Safest“** (maximale Feature-Reduktion).
- Vermeide risky Workflows (z.B. Datei-Uploads) und beachte, dass manche Features bewusst eingeschränkt sind.
- Nutze **Bridges/Pluggable Transports** gezielt in zensierten Netzen; plane Ausweichwege (z.B. unterschiedliche PTs).

**Abwägung:** viele Seiten funktionieren eingeschränkt; Bedienung deutlich unkomfortabler.

</details>

## Features
- Traffic-Routing über das Tor-Netzwerk (Anonymisierung)
- Security Levels (Standard/Safer/Safest)
- „New Identity“ / Identitäts-Trennung
- Bridges & Pluggable Transports (z.B. Snowflake)
- Schutzmechanismen gegen Tracking/Fingerprinting (laut Privacy Policy)

## Alternativen
- Mullvad Browser (ähnliche Browser-Härtung ohne Tor-Routing; Abwägung: weniger Netzwerk-Anonymität, weniger Tor-Latenz)
- Tails (Live-System mit Tor; Abwägung: höherer Einrichtung-/Nutzungsaufwand, OS-Isolation)
- Whonix (Tor über VM-Architektur; Abwägung: höherer Ressourcen-/Einrichtung-Aufwand)

## Nicht gelöst / offene Punkte
- Keine separaten AGB/Terms speziell für Tor Browser gefunden (Stand: 2026-01-14).

## Quellen

- Mullvad Browser (ähnliche Browser-Härtung ohne Tor-Routing; Trade-off: "weniger Netzwerk-Anonymität, weniger Tor-Latenz)
- Tails (Live-System mit Tor; Trade-off: "höherer Setup-/Nutzungsaufwand, OS-Isolation)
- https://donate.torproject.org/faq/
- [Tor Project – Privacy Policy (Tor Browser)](https://www.torproject.org/about/privacy_policy/)
- [Support – Security levels](https://support.torproject.org/tor-browser/features/security-levels/)
- [Support – Plugins/Add-ons](https://support.torproject.org/tor-browser/features/plugins/)
- [Support – Using bridges](https://support.torproject.org/tor-browser/circumvention/using-bridges/)
- [Support – Getting bridges](https://support.torproject.org/tor-browser/circumvention/getting-bridges/)
- [Support – Unblocking Tor (Built-in bridges/PTs)](https://support.torproject.org/tor-browser/circumvention/unblocking-tor/)
- [Tor Browser Manual – Known issues](https://tb-manual.torproject.org/known-issues)
- [Tor Project – Reports (inkl. Code Audits)](https://www.torproject.org/about/reports/)
- [Cure53 – TTP-03 Report (PDF)](https://www.torproject.org/static/findoc/code_audits/TTP-03-report.pdf)
- [Radically Open Security – Audit Report 2023 (PDF)](https://www.torproject.org/static/findoc/code_audits/Radically_Open_Security_Audit_Report_2023.pdf)
- [Tor Project – Donate (Payment Methods)](https://donate.torproject.org/donate/)
- [Tor Project – Donation FAQ (Jurisdiction/Address)](https://donate.torproject.org/faq/)
