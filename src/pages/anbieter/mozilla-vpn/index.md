---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Mozilla VPN"
url: "/anbieter/mozilla-vpn/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-19"
robots: "index,follow"
description: "Kurzprofil von Mozilla VPN (Kategorie: VPN)."
provider: ""
name: "Mozilla VPN"
category: "VPN"
website: "https://www.mozilla.org/products/vpn/"
repo: "https://github.com/mozilla-mobile/mozilla-vpn-client"
license: "Nicht angegeben (LICENSE.md im Repo vorhanden)"
policies: ""
privacy: "https://www.mozilla.org/privacy/subscription-services/"
terms: "https://www.mozilla.org/about/legal/terms/subscription-services/"
transparency: "https://www.mozilla.org/about/policy/transparency/"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "partial"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "no"
kyc_required: "unknown"
jurisdiction: "USA (laut Terms: Recht von Kalifornien)"
region: "us"
logs: "minimal"
retention: "specified"
retention_notes: "90d (Server-Logs mit IP-Adresse, laut Privacy Notice)"
data_notes: "Laut Anbieter keine Logs zur Netzwerkaktivität (z.B. besuchte Websites); es gibt minimale Server-/Verbindungslogs (u.a. IP-Adresse) mit 90 Tagen Aufbewahrung; optionale Diagnosedaten/Usage-Statistiken können per Schalter deaktiviert werden."
features: ""
alternatives: ""
payment_processors: "Stripe, Apple, PayPal, Google Pay"
sources: ""
---
## Kurzprofil

Mozilla VPN ist ein Anbieter aus der Kategorie **VPN**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen VPN-Dienst mit offiziellen Apps (inkl. Open-Source-Client-Code) nutzen willst und Features wie **Multi-Hop** oder **DNS-basiertes Blocking** brauchst.
- **Weniger geeignet wenn:** du **ohne Account** arbeiten willst oder wenn selbst „minimale“ Verbindungs-/Server-Logs (inkl. IP-Adresse, Aufbewahrung laut Anbieter) für deinen Use-Case zu viel Metadatenrisiko sind.
- **Wichtigster Abwägung:** **Betrieb/Abrechnung + Support** (Mozilla-Konto, Zahlungen, Diagnose) vs. **Metadaten-Minimierung** (Verbindungs-/Server-Logs, optionale Diagnosedaten).

## Sofortmaßnahmen
- **Mozilla-Konto: 2FA aktivieren**, um Account-Übernahmen abzusichern.
- **„Share technical data“ deaktivieren**, um optionale Diagnosedaten/Usage-Statistiken zu minimieren.
- **Multi-Hop nur gezielt nutzen**, weil zusätzliche Hops Verbindungen merklich verlangsamen können.

## Entscheidungshilfe
- Wenn du **App-weit** (nicht nur im Browser) einen Tunnel brauchst, dann nutze die Mozilla-VPN-App (Abwägung: VPN wirkt auf alle Apps, Fehlersuche kann komplexer werden).
- Wenn du **Tracking/Ads/Malware** schon auf DNS-Ebene entschärfen willst, dann aktiviere die „Privacy features“ im Client (Abwägung: DNS-Blocking kann legitime Inhalte/Apps stören).
- Wenn du **Exit-Standort + zusätzliche Trennung** willst, dann aktiviere **Multi-Hop** (Abwägung: mehr Latenz, potenziell schlechtere Performance).
- Wenn einzelne Apps **nicht** über den Tunnel laufen sollen (Banking/Streaming/Corporate VPN), dann nutze **App Exclusions** (Abwägung: ausgeschlossene Apps sind dann nicht durch den VPN-Tunnel geschützt).
- Wenn du pro Website schnell „umschalten“ willst, dann nutze die **Firefox-Erweiterung** (Abwägung: zusätzliche Komponente im Browser, eigener Einstellpfad).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Mozilla VPN |
| Kategorie | VPN |
| Website | https://www.mozilla.org/products/vpn/ |
| Quellcode | https://github.com/mozilla-mobile/mozilla-vpn-client |
| Lizenz | Nicht angegeben (LICENSE.md im Repo vorhanden) |
| Preismodell | paid |
| Free Tier | no |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Stripe, Apple, PayPal, Google Pay |
| Jurisdiktion | USA (laut Terms: Recht von Kalifornien) |
| Logs | minimal |
| Retention | 90d (Server-Logs mit IP-Adresse, laut Privacy Notice) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.mozilla.org/privacy/subscription-services/
- AGB/Terms: https://www.mozilla.org/about/legal/terms/subscription-services/
- Transparency Report: https://www.mozilla.org/about/policy/transparency/
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Mozilla VPN completes Cure53 security audit (Mozilla Blog): https://blog.mozilla.org/en/mozilla/mozilla-vpn-completes-cure53-security-audit/

**Daten-Notizen (kurz):**
Laut Anbieter werden **keine Logs zur Netzwerkaktivität** (z.B. besuchte Websites/DNS-Anfragen) geführt; es gibt **minimale Server-/Verbindungslogs** (inkl. IP-Adresse) mit **90 Tagen** Aufbewahrung. Zusätzlich gibt es **optionale Diagnosedaten/Usage-Statistiken**, die per Schalter deaktiviert werden können.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Mozilla nennt u.a. **Account-/Abo-Daten** (Mozilla-Konto) sowie **minimale Verbindungs-/Server-Logs** für den Betrieb; zusätzlich optional **Diagnose-/Nutzungsdaten** zur Verbesserung/Fehlersuche (Details laut Privacy Notice/Support).
- **Wofür:** Betrieb des Dienstes (VPN-Funktion, Abrechnung) sowie optional Service-Verbesserung/Diagnose.
- **Weitergabe/Subprozessoren:** Mozilla nennt in der Privacy Notice u.a. Weitergaben an **Zahlungsanbieter** (Stripe/Apple/PayPal/Google Pay) sowie Dienstleister für Betrieb/Diagnose/Marketing-Messung (Details in der Privacy Notice).
- **Drittlandtransfer:** Nicht angegeben (Privacy Notice enthält allgemeine Hinweise zu internationaler Verarbeitung/Übertragung – im Zweifel dort prüfen).
- **Zahlungsabwicklung/Payment Processor:** Stripe, Apple, PayPal, Google Pay (laut Privacy Notice).
- **Kontakt/DSAR/DPA:** Nicht angegeben (Prüfung über Privacy Notice → Kontakt-/Rechte-Abschnitte).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar (Support beschreibt „limited data“ und eine Abschalt-Option für technische Daten).
- **Abschaltbar?** Ja: „Share technical data“ kann deaktiviert werden.
- **Wo (Menüpfad):** Mozilla VPN → **Settings** → **Preferences** → **Share technical data** (Toggle).

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** 90d (Server-Logs mit IP-Adresse, laut Privacy Notice)
- **Lösch-/Opt-out-Optionen:** Laut Support löscht das Opt-out („Share technical data“ aus) auch historische Informationen zur Datenerhebung (für Telemetrie/Diagnose).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** VPN-Tunnel-Verschlüsselung via **WireGuard®** (laut Mozilla-Feature-Seiten); Multi-Hop routet zusätzlich über zwei Standorte.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Mozilla-Konto unterstützt **Two-step authentication** (2FA) über die Kontoeinstellungen.
- **Recovery/Account-Wiederherstellung:** 2FA bietet Backup-/Recovery-Codes (laut Mozilla-Account-2FA-Flows).
- **Vuln-Handling / Security-Kontakt:** GitHub-Repo enthält **SECURITY.md** / „Security policy“ und verweist auf den offiziellen Prozess (Repo/SECURITY).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren (2FA)** im Mozilla-Konto.  
   **Prüfen:** Mozilla-Account-Settings → **Security** → Two-step authentication = aktiv.
2) **Technische Daten abschalten**, wenn du das nicht brauchst.  
   **Prüfen:** Mozilla VPN → **Settings** → **Preferences** → **Share technical data** = aus.
3) **Kill-Switch-Verhalten testen** (Fail-Closed).  
   **Prüfen:** VPN aktivieren → Netzwerk kurz trennen → keine ungeschützte Verbindung „leakt“ (Support beschreibt, dass der Kill Switch ungeschützten Traffic blockt, wenn die Verbindung instabil ist).

**Stolpersteine:**
- **DNS-Blocking/Privacy features** können Websites/Apps beschädigen (Abwägung: weniger Tracking/Malware vs. Kompatibilität).
- **App Exclusions** reduziert Schutz für ausgeschlossene Apps (Abwägung: Funktionalität vs. Tunnel-Schutz).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze ein **separates Mozilla-Konto nur für VPN**, um Identitätskopplung mit anderen Mozilla-Diensten zu reduzieren.
- Aktiviere **nur** die Privacy-Features, die du wirklich brauchst (z.B. nur Tracker-Blocking statt „alles“).
- Verwende **App Exclusions** nur für zwingende Ausnahmen (z.B. Unternehmens-VPN / Banking-App), und dokumentiere die Entscheidung.
**Abwägung:** etwas mehr Pflegeaufwand und gelegentliches Debugging bei DNS-/Site-Problemen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze **separate Benutzerprofile/VM** für VPN-Nutzung mit sensiblen Workflows (Trennung von Identitäten, Cookies, Fingerprints).
- Aktiviere **Multi-Hop** und teste die Stabilität (Performance/Abbrüche sind wahrscheinlicher).
- Halte **Telemetry/Diagnose** konsequent aus, und führe Updates kontrolliert durch (Release Notes/Repo).
**Abwägung:** deutlich weniger Komfort, mehr Wartung, potenziell schlechtere Performance.

</details>

## Features
- WireGuard®-basiertes VPN (App-weit, nicht nur Browser)
- Multi-Hop (Verkehr über zwei Standorte routen)
- Custom DNS + DNS-basierte „Privacy features“ (Ads/Tracker/Malware-Blocking)
- Kill Switch (blockt ungeschützten Traffic bei Verbindungsproblemen)
- Split-Tunneling / App Exclusions
- Firefox-Erweiterung: Standort pro Website setzen

## Alternativen
- [Mullvad VPN](/anbieter/mullvad-vpn/)
- [Proton VPN](/anbieter/proton-vpn/)
- [IVPN](/anbieter/ivpn/)

## Nicht gelöst / offene Punkte
- Die öffentlich dokumentierte **Subprozessoren-/DPA-Übersicht speziell für Mozilla VPN** ist nicht eindeutig auffindbar (Privacy Notice nennt Dienstleister, aber keine „Subprocessor List“ als eigenes Verzeichnis).

## Quellen

- [Mozilla VPN completes Cure53 security audit (Mozilla Blog)](https://blog.mozilla.org/en/mozilla/mozilla-vpn-completes-cure53-security-audit/)
- Firefox-Erweiterung: "Standort pro Website setzen
- [Mozilla VPN – Produktseite](https://www.mozilla.org/products/vpn/)
- [Features – Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/features/)
- [Mozilla VPN auf Linux (Produktseite)](https://www.mozilla.org/en-US/products/vpn/desktop/linux/)
- [Mozilla Privacy Notice – Subscription Services (inkl. Mozilla VPN)](https://www.mozilla.org/privacy/subscription-services/)
- [Mozilla Terms – Subscription Services](https://www.mozilla.org/about/legal/terms/subscription-services/)
- [Transparency Report (Mozilla)](https://www.mozilla.org/about/policy/transparency/)
- [GitHub: "mozilla-mobile/mozilla-vpn-client](https://github.com/mozilla-mobile/mozilla-vpn-client)
- [View and control data collected by Mozilla VPN (Support)](https://support.mozilla.org/en-US/kb/what-information-does-mozilla-vpn-collect)
- [Welche Informationen werden von Mozilla VPN erfasst? (Support, DE)](https://support.mozilla.org/de/kb/welche-informationen-erfasst-mozilla-vpn)
- [What is the Mozilla VPN kill switch? (Support)](https://support.mozilla.org/en-US/kb/mozilla-vpn-kill-switch)
- [Multi-Hop – Encrypt your data twice… (Support)](https://support.mozilla.org/en-US/kb/multi-hop-encrypt-your-data-twice-enhanced-security)
- [Exclude applications from Mozilla VPN protection (Support)](https://support.mozilla.org/en-US/kb/split-tunneling-app-permissions)
- [How do I change my Privacy features? (Support)](https://support.mozilla.org/en-US/kb/how-do-i-change-my-privacy-features)
- [How will DNS work when using the VPN extension? (Support)](https://support.mozilla.org/en-US/kb/how-will-dns-work-when-using-vpn-extension)
- [Set a specific location for a website (Mozilla VPN Extension) (Support)](https://support.mozilla.org/en-US/kb/change-your-location-specific-website)
- [Mozilla VPN – Produktseite](https://www.mozilla.org/products/vpn/)
- [Features – Mozilla VPN](https://www.mozilla.org/en-US/products/vpn/features/)
- [Mozilla VPN auf Linux (Produktseite)](https://www.mozilla.org/en-US/products/vpn/desktop/linux/)
- [Mozilla Privacy Notice – Subscription Services (inkl. Mozilla VPN)](https://www.mozilla.org/privacy/subscription-services/)
- [Mozilla Terms – Subscription Services](https://www.mozilla.org/about/legal/terms/subscription-services/)
- [Transparency Report (Mozilla)](https://www.mozilla.org/about/policy/transparency/)
- [GitHub: mozilla-mobile/mozilla-vpn-client](https://github.com/mozilla-mobile/mozilla-vpn-client)
- [View and control data collected by Mozilla VPN (Support)](https://support.mozilla.org/en-US/kb/what-information-does-mozilla-vpn-collect)
- [Welche Informationen werden von Mozilla VPN erfasst? (Support, DE)](https://support.mozilla.org/de/kb/welche-informationen-erfasst-mozilla-vpn)
- [What is the Mozilla VPN kill switch? (Support)](https://support.mozilla.org/en-US/kb/mozilla-vpn-kill-switch)
- [Multi-Hop – Encrypt your data twice… (Support)](https://support.mozilla.org/en-US/kb/multi-hop-encrypt-your-data-twice-enhanced-security)
- [Exclude applications from Mozilla VPN protection (Support)](https://support.mozilla.org/en-US/kb/split-tunneling-app-permissions)
- [How do I change my Privacy features? (Support)](https://support.mozilla.org/en-US/kb/how-do-i-change-my-privacy-features)
- [How will DNS work when using the VPN extension? (Support)](https://support.mozilla.org/en-US/kb/how-will-dns-work-when-using-vpn-extension)
- [Set a specific location for a website (Mozilla VPN Extension) (Support)](https://support.mozilla.org/en-US/kb/change-your-location-specific-website)
- [Mozilla VPN completes Cure53 security audit (Mozilla Blog)](https://blog.mozilla.org/en/mozilla/mozilla-vpn-completes-cure53-security-audit/)
