---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / RiseupVPN"
url: "/anbieter/riseupvpn/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-21"
robots: "index,follow"
description: "Kurzprofil von RiseupVPN (Kategorie: VPN)."
provider: ""
name: "RiseupVPN"
category: "VPN"
website: "https://riseup.net/en/vpn"
repo: "https://0xacab.org/leap/bitmask-vpn"
license: "GPL-3.0-only"
policies: ""
privacy: "https://riseup.net/en/privacy-policy"
terms: "https://riseup.net/tos"
transparency: "Nicht angegeben"
warrant_canary: "https://help.riseup.net/canary"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA (Washington State)"
region: "us"
logs: "minimal"
retention: "unknown"
retention_notes: "Unklar (nicht angegeben)"
data_notes: "RiseupVPN ist spendenbasiert. Laut Riseup werden keine IP-Adressen geloggt; als einzige Log-Angabe wird ein „Record des Tages, an dem ein User verbindet“ genannt. DNS-Queries sollen nicht geloggt werden."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

RiseupVPN ist ein Anbieter aus der Kategorie **VPN**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen **einfach nutzbaren, spendenbasierten Personal-VPN-Client** willst und mit **US-Jurisdiktion** leben kannst.
- **Weniger geeignet wenn:** du **harte, auditierte Nachweise** oder **präzise dokumentierte Retention/Log-Details** brauchst (mehrere Punkte sind nicht öffentlich spezifiziert).
- **Wichtigster Abwägung:** **Niedrige Einstiegshürde/kein Abo** vs. **Rest-Metadaten (z.B. Verbindungstag) + Vertrauen in Betrieb/Policy**.

## Sofortmaßnahmen
- **Kill-Switch/Traffic-Block im Alltag testen:** VPN kurz trennen → sicherstellen, dass **kein Traffic** ohne Tunnel rausgeht (je nach Plattform unterschiedlich dokumentiert).
- **Android: System-„Always-on VPN“ aktivieren:** reduziert Leaks, wenn Apps kurz „am VPN vorbei“ funken.
- **TLS trotzdem nutzen:** VPN ersetzt nicht HTTPS/verschlüsselte App-Protokolle (Abwägung: weniger Schutz, wenn du dich nur aufs VPN verlässt).

## Entscheidungshilfe
- Wenn du primär **WLAN/ISP-Mitmitschneiden reduzieren** willst, dann nutze RiseupVPN als „Always-on“-Tunnel (Abwägung: ein Anbieter sieht deine VPN-Nutzung als Metadatum).
- Wenn du **Tracker-/Werbe-Blocking auf Netzwerkebene** willst, dann nutze die Anbieter-Filterfunktion (Abwägung: weniger transparente Filterliste/Mechanik).
- Wenn du **Windows nutzt**, dann plane ein, Leaks/Kill-Switch selbst zu testen (Abwägung: Dokumentation ist dazu nicht eindeutig).
- Wenn du **präzise Retention brauchst** (z.B. für Org-Policies), dann ist eine Anbieter-Doku zu Log-Aufbewahrung entscheidend (Abwägung: ohne klare Angaben bleibt es Risiko-Abwägung).
- Wenn du **High-Risk-Anonymität** brauchst, dann ist Tor als separates Konzept relevant (Abwägung: deutlich weniger Performance/Komfort).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | RiseupVPN |
| Kategorie | VPN |
| Website | https://riseup.net/en/vpn |
| Quellcode | https://0xacab.org/leap/bitmask-vpn |
| Lizenz | GPL-3.0-only |
| Preismodell | free (spendenbasiert) |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Liberapay, PayPal, Bitcoin (Spenden) |
| Jurisdiktion | USA (Washington State) |
| Logs | minimal |
| Retention | Unklar (nicht angegeben) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://riseup.net/en/privacy-policy
- AGB/Terms: https://riseup.net/tos
- Transparency Report: Nicht angegeben
- Warrant Canary: https://help.riseup.net/canary

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Riseup nennt für RiseupVPN „keine Logs“ mit der Einschränkung **„Record des Tages, an dem ein User verbindet“**; außerdem: **keine IP-Logs** und **keine DNS-Query-Logs** werden behauptet. Spenden laufen über **Liberapay/PayPal/Bitcoin**.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** „Record des Tages, an dem ein User verbindet“ (zusätzlich zu „keine IP-Logs“/„keine DNS-Logs“ laut Help-Seite).
- **Wofür:** Betrieb/Angebot eines „Personal VPN“ (Traffic wird verschlüsselt zu Riseup getunnelt und dann ins Internet geroutet).
- **Weitergabe/Subprozessoren:** Nicht angegeben (außer Spenden-Zahlungswege).
- **Drittlandtransfer:** Unklar (Anbieter sitzt in den USA; konkrete Transfer-/Hosting-Angaben nicht aufgelistet).
- **Zahlungsabwicklung/Payment Processor:** Liberapay, PayPal, Bitcoin (Spendenlinks auf der RiseupVPN-Seite).
- **Kontakt/DSAR/DPA:** Kontakt/Support über Helpdesk (support.riseup.net) und Kontaktseite; eine öffentliche DPA/Subprozessorenliste ist nicht ersichtlich.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nicht angegeben / Unklar.
- **Abschaltbar?** Nicht angegeben / Unklar.
- **Wo (Menüpfad):** Nicht angegeben (App wirkt „minimal UI“; Settings sind je Plattform begrenzt).

**Logs & Retention:**
- **Logging-Level:** minimal (laut Anbieter: kein IP-Logging, kein DNS-Logging; jedoch „Record des Tages“).
- **Aufbewahrung:** Unklar (nicht angegeben).
- **Lösch-/Opt-out-Optionen:** Nicht angegeben / Unklar.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Anbieter beschreibt, dass der Client **allen Traffic durch eine verschlüsselte Verbindung** zu riseup.net leitet (VPN-Tunnel).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben / Unklar.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben / Unklar (RiseupVPN wird auf der Hauptseite als „ohne Konto-Registrierung“ beschrieben).
- **Recovery/Account-Wiederherstellung:** Entfällt für den App-Use-Case ohne Konto; ansonsten nicht angegeben.
- **Vuln-Handling / Security-Kontakt:** Security-Kontakt wird als **verschlüsselte Kontaktaufnahme** beschrieben; Bugreports/Feature-Requests für Windows über Bitmask/0xacab.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **RiseupVPN installieren** (Linux/macOS/Windows/Android über die offiziellen Download-Links).  
   **Prüfen:** App startet, VPN verbindet, Server-/Statusanzeige sichtbar.
2) **Kill-Switch/Traffic-Block im Alltag testen** (kurz trennen, dann Browser öffnen).  
   **Prüfen:** Ohne VPN-Verbindung keine Netzverbindung (oder klarer „blocked“-Status).  
   *Hinweis:* Die Hauptseite beschreibt „Traffic blocked“-Zustände, die Windows-Seite sagt jedoch explizit „kein Kill-Switch auf Windows“ → daher: testen statt annehmen.
3) **Android (OS-Level): „Always-on VPN“ aktivieren** und **„Verbindungen ohne VPN blockieren“**, falls verfügbar.  
   **Prüfen:** Flugmodus an/aus + Reconnect → kein Traffic ohne VPN.

**Stolpersteine:**
- **Windows:** laut Windows-Doku „kein Kill-Switch“ und „nicht battle tested“ bzgl. Leaks → Abwägung: Komfort vs. Risiko von kurzen Leaks.
- **VPN ≠ HTTPS:** Nach dem Exit aus dem VPN gilt weiterhin: unsichere Protokolle bleiben unsicher.

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze RiseupVPN **nur bei Bedarf** (z.B. unterwegs), statt dauerhaft (Abwägung: weniger Metadaten beim Anbieter vs. weniger Schutz im Alltag).
- Halte Spendenwege getrennt von deiner Alltagsidentität, wenn du das möchtest (Abwägung: weniger Zuordenbarkeit vs. weniger Komfort/Transparenz).
- Plane einen „Plan B“ (z.B. Tor als separater Modus), falls VPN-Nutzung im Umfeld auffällig ist (Abwägung: Performance vs. Anonymitätsmodell).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne Nutzungskontexte: eigenes OS-Profil/VM für VPN/Tor-Aktivitäten (Abwägung: Aufwand + mögliche App-Kompatibilitätsprobleme).
- Behandle „Block tracking“ als Zusatzschutz, nicht als vollständigen Tracker-Schutz (Abwägung: weniger lokale Browser-Härtung vs. Rest-Tracking).
- Vermeide Annahmen über Kill-Switch auf Windows: nutze ggf. zusätzliche OS-Firewall-Regeln als Absicherung (Abwägung: komplexer, Debugging schwieriger).

</details>

## Features
- Clients für GNU/Linux, macOS, Windows und Android (offizielle Download-Links auf der RiseupVPN-Seite).
- Personal-VPN: gesamter Traffic wird per VPN-Tunnel über Riseup geroutet.
- „Block tracking“/Werbe- & Tracker-Blocking (Anbieterangabe; Details zur Filterliste sind nicht öffentlich erläutert).
- Individuelle öffentliche IP pro Verbindung (ändert sich bei Reconnect; bei Knappheit ggf. Shared-IP laut Help-Seite).
- Spendenbasiert (Liberapay/PayPal/Bitcoin) statt Abo.
- Open-Source-Clients basierend auf Bitmask/LEAP (GPLv3).

## Alternativen
- Kommerzielle VPN-Anbieter (Abo/Account üblich) – **Abwägung:** mehr Support/Features vs. mehr Abrechnungs- & Kontometadaten.
- Eigener VPN (Self-Hosting, z.B. WireGuard auf eigenem Server) – **Abwägung:** mehr Kontrolle vs. eigener Betrieb/Monitoring + Server-IP als stabiler Anker.
- Tor – **Abwägung:** anderes Anonymitätsmodell vs. deutlich geringere Performance/Kompatibilität.

## Nicht gelöst / offene Punkte
- Kill-Switch/„Traffic blocked“-Verhalten ist in den Riseup-Quellen **nicht konsistent** für Windows dokumentiert (Hauptseite vs. Windows-FAQ).
- Aufbewahrungsdauer für den „Record des Verbindungstags“ ist **nicht angegeben**.

## Quellen

- Verschlüsselter Tunnel: "gesamter Traffic über Riseup-Server
- Kommerzielle VPN-Anbieter (Abo/Account-Pflicht möglich) – Trade-off: "mehr Features/Support vs. mehr Abrechnungs- & Kontometadaten
- Eigener VPN (Self-Hosting, z.B. WireGuard auf VPS) – Trade-off: "mehr Kontrolle vs. Betrieb/OpSec + eigene Server-IP als Anker
- Tor – Trade-off: "stärkeres Anonymitätsmodell vs. deutlich weniger Komfort/Speed
- https://riseup.net/en/about-us/contact
- [RiseupVPN (Hauptseite)](https://riseup.net/en/vpn)
- [Privacy Policy (Riseup)](https://riseup.net/en/privacy-policy)
- [Terms of Service (Riseup)](https://riseup.net/tos)
- [Riseup VPN – Help-Seite (Logs/DNS/Tracking/IP)](https://we.riseup.net/riseuphelp%2Ben/riseup-vpn)
- [VPN Donate (kurze Feature-Zusammenfassung)](https://crabgrass.riseup.net/riseuphelp%2Ben/vpn-donate)
- [RiseupVPN for Windows (Logs/Kill-Switch-Hinweis)](https://riseup.net/en/windows)
- [Bitmask-VPN Lizenz (GPLv3-only)](https://0xacab.org/leap/bitmask-vpn/-/blob/main/LICENSE)
- [Warrant Canary / Canary Statement (Riseup)](https://help.riseup.net/canary)
- [Security (Riseup) inkl. Security Contact](https://riseup.net/en/security)
- [Contact (Riseup)](https://riseup.net/en/about-us/contact)
