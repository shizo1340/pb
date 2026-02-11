---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / AirVPN"
url: "/anbieter/airvpn/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-05"
robots: "index,follow"
description: "Kurzprofil von AirVPN (Kategorie: VPN)."
provider: ""
name: "AirVPN"
category: "VPN"
website: "https://airvpn.org/"
repo: "https://github.com/AirVPN/Eddie"
license: "GPL-3.0-only"
policies: ""
privacy: "https://airvpn.org/privacy/"
terms: "https://airvpn.org/terms/"
transparency: "https://airvpn.org/status/"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "unknown"
free_tier: "unknown"
open_source: "partial"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Italien (Perugia, EU)"
region: "eu"
logs: "none"
logs_notes: "laut FAQ: keine Session-/Net-Activity-Logs"
retention: "unknown"
retention_notes: "Nicht angegeben (Privacy Notice derzeit JS-abhängig / nicht textbasiert abrufbar)"
data_notes: "Zahlungen über Payment-Prozessoren sind externe Datenflüsse; Kryptowährungen werden laut Buy-Seite direkt ohne Intermediäre akzeptiert."
features: ""
alternatives: ""
payment_processors: "PayPal, Amazon Pay; Kryptowährungen (BTC/LTC/BCH/DOGE/XMR) direkt; Gift Voucher"
sources: ""
---
## Kurzprofil

AirVPN ist ein Anbieter aus der Kategorie **VPN**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen VPN-Client mit **viel Kontrolle** (UI/CLI, Protokolle, Ports) und **Leak-Absicherung per Firewall-Regeln** (Network Lock) nutzen willst.
- **Weniger geeignet wenn:** du eine **vollständig lesbare Privacy-/DPA-Dokumentation ohne JavaScript** brauchst (AirVPNs Privacy Notice/Status sind teils JS-abhängig).
- **Wichtigster Abwägung:** **Maximale Leak-Sperre** (Firewall/Kill-Switch) kann bei Fehlkonfiguration **komplett Netzwerkzugriff blockieren** (Recovery/Debug-Aufwand vs. Leckrisiko).

## Sofortmaßnahmen
- **Network Lock aktivieren:** blockiert IPv4/IPv6-Verkehr außerhalb des VPN (Leak-Schutz auch bei Disconnects).
- **„Remember“ aus lassen (Default):** verhindert, dass Eddie Credentials persistent speichert (weniger lokale Spuren).
- **Zahlungsweg bewusst wählen:** Payment-Prozessoren erzeugen externe Metadaten; Krypto wird laut Anbieter „ohne Intermediäre“ akzeptiert.

## Entscheidungshilfe
- Wenn du **DNS/IPv6-Leaks auch bei Verbindungsabbrüchen** minimieren willst, dann nutze **Network Lock** (Abwägung: kann Internet „hart“ sperren, bis du es wieder deaktivierst).
- Wenn du **Automatisierung/Skripting** brauchst, dann nutze **Eddie CLI** oder die **AirVPN-API** (Abwägung: mehr Komplexität/Fehlersuche).
- Wenn du **möglichst wenig Drittparteien beim Bezahlen** willst, dann prüfe im Checkout **Krypto „direct“** (Abwägung: Zahlung ist irreversibel; Wallet-/OPSEC liegt bei dir).
- Wenn du **Support/Diagnose** brauchst, dann aktiviere ggf. **Debug-/File-Logs nur temporär** (Abwägung: lokale Logs können Metadaten enthalten).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | AirVPN |
| Kategorie | VPN |
| Website | https://airvpn.org/ |
| Quellcode | https://github.com/AirVPN/Eddie |
| Lizenz | GPL-3.0-only |
| Preismodell | kommerziell (Access-Pläne) |
| Free Tier | Nicht angegeben |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | PayPal, Amazon Pay; Kryptowährungen (BTC/LTC/BCH/DOGE/XMR) direkt; Gift Voucher |
| Jurisdiktion | Italien (Perugia, EU) |
| Logs | laut FAQ: keine Session-/Net-Activity-Logs |
| Retention | Nicht angegeben (Privacy Notice derzeit JS-abhängig / nicht textbasiert abrufbar) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://airvpn.org/privacy/
- AGB/Terms: https://airvpn.org/terms/
- Transparency Report: https://airvpn.org/status/
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Zahlungen über Payment-Prozessoren sind externe Datenflüsse; Kryptowährungen werden laut Buy-Seite direkt ohne Intermediäre akzeptiert.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Unklar (Privacy Notice ist offiziell verlinkt, aber aktuell JS-abhängig).
- **Wofür:** Nicht angegeben (in den hier abrufbaren Seiten nicht detailliert aufgelistet).
- **Weitergabe/Subprozessoren:** Nicht angegeben.
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** PayPal und Amazon Pay werden als „Allowed Payment Processors“ genannt; zusätzlich Kryptowährungen „accepted directly through no intermediaries“.
- **Kontakt/DSAR/DPA:** Nicht angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nicht angegeben.
- **Abschaltbar?** Nicht angegeben.
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** Laut FAQ: „No, we don't keep logs of that kind“ (Session-/Identity-/Net-Activity-Logs).
- **Aufbewahrung:** Nicht angegeben (Privacy Notice derzeit JS-abhängig).
- **Lösch-/Opt-out-Optionen:** Nicht angegeben.

**Client-seitig (Eddie, praktisch relevant):**
- Eddie CLI dokumentiert **Log-to-File** als Option (`log.file.enabled`, Default: `False`) und **Debug-Logging** als optional (`log.level.debug`, Default: `False`).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben (VPN-Tunnel-Technik wird beschrieben; keine „E2E“ im Messenger-Sinn).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben.
- **Recovery/Account-Wiederherstellung:** Nicht angegeben.
- **Vuln-Handling / Security-Kontakt:** security.txt nennt `security@airvpn.org` sowie einen PGP-Key-Link und eine Policy-URL.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Network Lock aktivieren** (Firewall-basierter Kill Switch).  
   **Prüfen:** Network Lock-Icon aktiv + Traffic außerhalb VPN ist blockiert.
2) **Protokoll/Modus bewusst setzen** (z.B. WireGuard/OpenVPN; Ports/Protokolle je nach Umgebung).  
   **Prüfen:** Verbindung steht stabil + keine DNS/IP-Leaks im Test.
3) **Keine persistenten Credentials** (CLI: `remember` bleibt `False`, UI entsprechend).  
   **Prüfen:** nach Neustart sind Login/Passwort nicht gespeichert.

**Stolpersteine:**
- Network Lock blockt auch dann, wenn Eddie/Verbindung hängt: Recovery heißt oft „Network Lock aus“ oder Firewall-Regeln zurücksetzen.
- „Mehr Kontrolle“ (Routen, Allowlists, Sonder-Modi) erhöht Fehlkonfigurationsrisiko (Abwägung: Flexibilität vs. Bedienfehler).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Payment-Metadaten reduzieren:** Prüfe, ob Krypto-Zahlung ohne Intermediäre für deinen Kontext passt (Abwägung: irreversibel, OPSEC-Aufwand).
- **Lokale Spuren minimieren:** Log-to-File deaktiviert lassen, Debug nur temporär (Abwägung: weniger Diagnosedaten).
- **Session-/Account-Infos per API sparsam verwenden:** API liefert u.a. Sessiondetails (Exit/Entry IP, Bytes) (Abwägung: Komfort/Monitoring vs. zusätzliche Auswertbarkeit im Account).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Strikte Isolation:** Eddie in separatem OS-Profil/VM betreiben (Abwägung: mehr Overhead).
- **Network Lock restriktiv konfigurieren:** LAN/Ping nur erlauben, wenn zwingend nötig (Abwägung: weniger „Bequemlichkeit“ im lokalen Netz).
- **Skripting nur minimal:** CLI/API nur mit minimalen Rechten und klaren Limits (Abwägung: weniger Automatisierung, weniger Angriffs-/Fehlerfläche).

</details>

## Features
- OpenVPN & WireGuard (Eddie UI/CLI)
- Kill Switch per Firewall („Network Lock“)
- CLI + API für Automatisierung

## Alternativen
- Mullvad (VPN; anderer Account-/Bezahl-Ansatz möglich)
- [IVPN](/anbieter/ivpn/)
- [Proton VPN](/anbieter/proton-vpn/)

## Nicht gelöst / offene Punkte
- 2FA/MFA-Optionen und Recovery-Mechanik sind in den öffentlich abrufbaren Seiten nicht belegt.

## Quellen

- https://eddie.website/support/security-elevated/
- [Access Plans / Payment Processors](https://airvpn.org/buy/)
- [FAQ: Logs](https://airvpn.org/faq/logs/)
- [FAQ: API](https://airvpn.org/faq/api/)
- [Terms Of Service](https://airvpn.org/tos/)
-[security.txt](https://airvpn.org/.well-known/security.txt)
- [Eddie (GitHub Quellcode)](https://github.com/AirVPN/Eddie)
- [Eddie Support: Network Lock](https://eddie.website/support/network-lock/)
- [Eddie Support: CLI](https://eddie.website/support/cli/)
- [Eddie Support: Elevated Process Security](https://eddie.website/support/security-elevated/)

