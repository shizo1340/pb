---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Status"
url: "/anbieter/status/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-09"
robots: "index,follow"
description: "Kurzprofil von Status (Kategorie: Messenger)."
provider: ""
name: "Status"
category: "Messenger"
website: "https://status.app"
repo: "https://github.com/status-im/status-app"
license: "MPL-2.0"
policies: ""
privacy: "https://status.app/legal/privacy-policy"
terms: "https://status.app/legal/terms-of-use"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "unknown"
jurisdiction: "Schweiz (Status Research & Development GmbH, Zug)"
region: "ch"
logs: "minimal"
retention: "specified"
retention_notes: "15d (IP-Logs auf Status-Infrastruktur); Waku-Telemetry max. 30d (opt-in)"
data_notes: "Status ist ein dezentraler Messenger mit Wallet-Funktionen. Im Betrieb können Metadaten anfallen (z.B. IP-Adresse/Topics bei Waku-Nodes, Wallet-Abfragen/Transaktionen über Proxy/RPC, Drittanbieter bei Wallet-Features)."
features: ""
alternatives: ""
payment_processors: "On-/Off-Ramp (optional, Drittanbieter): Mercuryo, MoonPay, Ramp"
sources: ""
---
## Kurzprofil

Status ist ein Anbieter aus der Kategorie **Messenger**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen **dezentralen Messenger ohne Telefon-/E-Mail-Pflicht** nutzen willst und Wallet-Funktionen (EVM) im selben Client akzeptierst.
- **Weniger geeignet wenn:** du **möglichst wenig Netzwerk-/Metadaten** (z.B. IP/Topics) preisgeben willst oder Wallet-/Web3-Komponenten bewusst trennen möchtest.
- **Wichtigster Abwägung:** **Dezentralität & integrierte Wallet-Features vs. zusätzliche Metadaten-/Drittanbieter-Kontakte** (z.B. Waku-Nodes, Proxy/RPC, On-/Off-Ramps).

## Sofortmaßnahmen
- **Recovery Phrase sofort sichern:** reduziert Risiko eines endgültigen Konto-/Wallet-Verlusts bei Geräteverlust.
- **Waku-Telemetry nicht aktivieren (opt-in):** verringert zusätzliche Diagnose-/Metadaten-Erfassung.
- **VPN/Tor nutzen, wenn IP-Exposure kritisch ist:** kann IP-Bezug bei Node-Verbindungen reduzieren (Abwägung: Performance/Kompatibilität).

## Entscheidungshilfe
- Wenn du **ohne Telefonnummer/E-Mail** starten willst, dann nutze Status (Abwägung: Schlüssel/Recovery sind allein deine Verantwortung).
- Wenn du **Wallet-Funktionen** nutzt (RPC/Preise/Swaps), dann rechne mit **Drittanbieter-Kontakten** (Abwägung: Komfort/Marktdaten vs. zusätzliche Datenflüsse).
- Wenn du **IP-Exposure minimieren** willst, dann nutze VPN/Tor (Abwägung: Latenz, mögliche Verbindungsprobleme).
- Wenn du **keine On-/Off-Ramps** willst, dann nutze diese Features nicht (Abwägung: weniger Convenience beim Fiat→Krypto-Einstieg).
- Wenn du **eigene/vertrauenswürdige Infrastruktur** bevorzugst, dann beobachte die Status-Pläne zu **Third-Party-/self-hosted Nodes** (Abwägung: mehr Aufwand/Komplexität, ggf. nicht sofort verfügbar).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Status |
| Kategorie | Messenger |
| Website | https://status.app |
| Quellcode | https://github.com/status-im/status-app |
| Lizenz | MPL-2.0 |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | On-/Off-Ramp (optional, Drittanbieter): Mercuryo, MoonPay, Ramp |
| Jurisdiktion | Schweiz (Status Research & Development GmbH, Zug) |
| Logs | minimal |
| Retention | 15d (IP-Logs auf Status-Infrastruktur); Waku-Telemetry max. 30d (opt-in) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://status.app/legal/privacy-policy
- AGB/Terms: https://status.app/legal/terms-of-use
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Status ist ein dezentraler Messenger mit Wallet-Funktionen. Im Betrieb können Metadaten anfallen (z.B. IP-Adresse/Topics bei Waku-Nodes, Wallet-Abfragen/Transaktionen über Proxy/RPC, Drittanbieter bei Wallet-Features).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Je nach Funktion u.a. **IP-Adresse** (z.B. bei Waku-Store/Bootstrap-Nodes, Proxy), **Content-Topics** (bei Waku als Plaintext-Element), sowie bei Wallet-Funktionen u.a. **EVM-Adresse/Transaktionsdetails** (durchgeleitet).  
- **Wofür:** Nachrichtentransport/Offline-Zustellung (Waku), Infrastruktur-Betrieb/Diagnose, Wallet-Funktionen (RPC/Preise/Swaps/Collectibles) und On-/Off-Ramps.  
- **Weitergabe/Subprozessoren:** Wallet- und Datenservices können Drittanbieter einbeziehen (z.B. On-Ramp: Mercuryo/MoonPay/Ramp; Preise: CoinGecko; RPC: Infura/Grove; Collectibles: OpenSea/Alchemy/Rarible; Swaps: Paraswap).  
- **Drittlandtransfer:** Nicht angegeben.  
- **Zahlungsabwicklung/Payment Processor:** On-/Off-Ramps sind optional und laufen über Drittanbieter im Browser; Status teilt dabei u.a. Referral-ID und EVM-Adresse.  
- **Kontakt/DSAR/DPA:** Kontakt-E-Mail ist dokumentiert (legal@status.im); eine öffentliche DPA-/Subprozessor-Liste ist nicht angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nein (Waku-Telemetry ist laut Anbieter **opt-in**).  
- **Abschaltbar?** Ja (opt-in → nicht aktivieren).  
- **Wo (Menüpfad):** Nicht angegeben (in App-Einstellungen nach „Waku telemetry“/„Telemetry“ suchen).

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** IP-Logs auf Status-Infrastruktur teils **15 Tage**; Waku-Telemetry (opt-in) **max. 30 Tage**.
- **Lösch-/Opt-out-Optionen:** Opt-out durch Nicht-Aktivierung der Telemetrie; weitere Löschmechanismen nicht angegeben.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Status nennt **Ende-zu-Ende-Verschlüsselung** im Messenger; Transport via Waku.  
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.  
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA/Passkeys nicht angegeben; optional existiert Keycard-Support (Hardware).  
- **Recovery/Account-Wiederherstellung:** Wiederherstellung erfolgt über **Recovery Phrase**; ohne diese ist Recovery praktisch nicht möglich (Eigenverantwortung).  
- **Vuln-Handling / Security-Kontakt:** Security-Kontakt und Bug-Bounty sind veröffentlicht (security@status.im / HackenProof).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Recovery Phrase sichern** (und offline aufbewahren).  
   **Wo:** Messages-Tab → Profilbild → **Privacy and security** → **Back up recovery phrase**.  
   **Prüfen:** Phrase ist notiert/gesichert, Zugriff getestet (ohne sie digital zu teilen).
2) **Gerätesperre/App-Schutz hart einstellen** (OS-PIN, Biometrie, sichere Backups).  
   **Prüfen:** Gerät sperrt zuverlässig; keine ungesicherten Cloud-Backups sensibler Daten.
3) **Waku-Telemetry nicht aktivieren** (opt-in).  
   **Prüfen:** Telemetry bleibt aus; keine Diagnosefreigaben aktiviert, wenn nicht nötig.

**Stolpersteine:**
- Wallet-/Web3-Funktionen können zusätzliche Datenflüsse zu Drittanbietern erzeugen (Abwägung: Komfort vs. Metadaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze Messenger-Funktionen ohne Wallet-Extras, sofern du Drittanbieter-Kontakte minimieren willst.
- Setze bei IP-Sensitivität auf VPN/Tor (Abwägung: Verbindungsqualität).
- Prüfe, ob sich Drittanbieter-Features (On-Ramp/Swaps/Collectibles) bewusst meiden lassen, indem du sie nicht nutzt.
**Abwägung:** weniger Komfort/„All-in-one“-Erlebnis, weniger Funktionsumfang.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne Nutzungskontexte (z.B. getrennte Geräte/Profile für Chat vs. Wallet).
- Nutze VPN/Tor konsequent, wenn IP/Standortschutz kritisch ist (Abwägung: Performance/Blockaden).
- Wenn Proxy/RPC-Ziele konfigurierbar sind (oder werden): eigene/vertrauenswürdige Endpunkte prüfen (Abwägung: Einrichtung-Aufwand, potenzielle Instabilität).
**Abwägung:** deutlicher Komfortverlust, höhere Komplexität und Fehlersuche.

</details>

## Features
- Dezentraler Messenger (Waku), Ende-zu-Ende verschlüsselt
- Community-Chats
- Ethereum/EVM-Wallet-Integration
- Optional: On-/Off-Ramp, Swaps und weitere Wallet-Dienste über Drittanbieter
- Backup per Recovery Phrase; optional Keycard-Unterstützung

## Alternativen
- [Signal](/anbieter/signal/)
- Matrix (Messenger; anderer Schwerpunkt: Föderation & optional Self-Hosting)
- Session (Messenger; anderer Schwerpunkt: Metadaten-Reduktion über Routing-Design)

## Nicht gelöst / offene Punkte
- Separate, öffentlich verlinkte **Status-Software**-AGB/Privacy-Policy-Dokumente (nicht „Website“-Version) sind über die Website nicht eindeutig auffindbar.

## Quellen

- Optional: "On-/Off-Ramp, Swaps und weitere Wallet-Dienste über Drittanbieter
- Matrix (Messenger; anderer Schwerpunkt: "Föderation & optional Self-Hosting)
- Session (Messenger; anderer Schwerpunkt: "Metadaten-Reduktion über Routing-Design)
- Status App Repository (README + Lizenz): "https://github.com/status-im/status-app
- What is Status?: "https://status.app/help/getting-started/what-is-status
- Understand your Status keys and recovery phrase: "https://status.app/help/getting-started/understand-your-status-keys-and-recovery-phrase
- Back up and secure your recovery phrase: "https://status.app/help/getting-started/back-up-and-secure-your-recovery-phrase
- Prioritising User Privacy in Status Software: "https://status.app/help/getting-started/prioritising-user-privacy-in-status-software
- Privacy With Status Infrastructure and Insights: "https://status.app/help/getting-started/privacy-with-status-infrastructure-and-insights
- Privacy With Status Third Parties: "https://status.app/help/getting-started/privacy-with-status-third-parties
- Security: "https://status.app/security
- Status Website - Privacy Policy: "https://status.app/legal/privacy-policy
- Status Website - Terms of Use: "https://status.app/legal/terms-of-use
- [Status App Quellcode (README + Lizenz)](https://github.com/status-im/status-app)
- [What is Status?](https://status.app/help/getting-started/what-is-status)
- [Understand your Status keys and recovery phrase](https://status.app/help/getting-started/understand-your-status-keys-and-recovery-phrase)
- [Back up and secure your recovery phrase](https://status.app/help/getting-started/back-up-and-secure-your-recovery-phrase)
- [Prioritising User Privacy in Status Software](https://status.app/help/getting-started/prioritising-user-privacy-in-status-software)
- [Privacy With Status Infrastructure and Insights](https://status.app/help/getting-started/privacy-with-status-infrastructure-and-insights)
- [Privacy With Status Third Parties](https://status.app/help/getting-started/privacy-with-status-third-parties)
- [Security](https://status.app/security)
- [Status Website - Privacy Policy](https://status.app/legal/privacy-policy)
- [Status Website - Terms of Use](https://status.app/legal/terms-of-use)
