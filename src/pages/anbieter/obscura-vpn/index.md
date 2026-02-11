---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Obscura VPN"
url: "/anbieter/obscura-vpn/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-19"
robots: "index,follow"
description: "Kurzprofil von Obscura VPN (Kategorie: VPN)."
provider: ""
name: "Obscura VPN"
category: "VPN"
website: "https://obscura.net/"
repo: "https://github.com/Sovereign-Engineering/obscuravpn-client"
license: "Unklar (LICENSE.md im Repo)"
policies: ""
privacy: "https://obscura.net/legal/"
terms: "https://obscura.net/legal/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "paid"
free_tier: "unknown"
open_source: "yes"
self_host_possible: "no"
account_required: "yes"
phone_required: "no"
kyc_required: "unknown"
jurisdiction: "USA (Sovereign Engineering Inc.; Terms: Governing law New York)"
region: "us"
logs: "none"
retention: "unknown"
data_notes: "Laut Anbieter: kein Zugriff auf Internet-Traffic (end-to-end verschlüsselt bis zum Exit-Hop), keine Persistenz/Logs der IP-Adresse. Website nutzt Plausible Analytics; Zahlungsdaten laufen je nach Methode über externe Prozessoren (z.B. Stripe, App Store)."
features: ""
alternatives: ""
payment_processors: "Stripe (Kreditkarte/Abos); Apple App Store (iOS-Abos); Bitcoin Lightning; Monero"
sources: ""
---
## Kurzprofil

Obscura VPN ist ein Anbieter aus der Kategorie **VPN**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du ein VPN suchst, bei dem laut Anbieter **kein Klartext-Traffic** beim Anbieter anfallen soll und die Anmeldung ohne Name/E-Mail/Telefon möglich ist.
- **Weniger geeignet wenn:** du eine **vollständig dokumentierte Subprozessoren-/Telemetrie-Übersicht** erwartest oder eine rechtlich/organisatorisch sehr detaillierte Security-Policy brauchst.
- **Wichtigster Abwägung:** **Two-Party-Architektur vs. Abhängigkeit von mehreren Parteien** (Relay + unabhängiger Exit-Hop) – plus ggf. **Payment-Metadaten** bei bestimmten Zahlungswegen (z.B. E-Mail bei Stripe-Abos).

## Sofortmaßnahmen
- **Kill Switch aktivieren (On demand kill switch):** blockiert Traffic bei Tunnel-Abbruch, damit die reale IP weniger leicht „durchrutscht“.
- **DNS-Option bewusst setzen:** entweder integriertes DNS-Blocking nutzen oder ein eigenes DNS-Profil verwenden (Abwägung: Blocklisten können Sites brechen).
- **WireGuard-Configs aufräumen:** ungenutzte Configs löschen, weil sie bei Obscura „Slots“ belegen können (Abwägung: etwas mehr Kontopflege).

## Entscheidungshilfe
- Wenn du **möglichst wenig Identitätsdaten** beim Login willst, dann nutze den **Zugang per zufälliger Account-Nummer** (Abwägung: du musst die Nummer selbst sicher verwahren).
- Wenn du **Payment-Metadaten reduzieren** willst, dann nutze **Top-ups statt Abo** bzw. privacy-freundlichere Zahlarten, falls verfügbar (Abwägung: manuelles Nachladen statt Auto-Renew).
- Wenn du in einem Umfeld mit **Netzwerkfiltern/Zensur** bist, dann nutze den **Obscura-Client mit QUIC-Stealth** (Abwägung: Nutzung via „plain WireGuard“ hat laut Anbieter nicht dieselbe Obfuscation).
- Wenn du Obscura auf einer Plattform ohne native App nutzen musst, dann verwende **WireGuard-Konfigurationen** aus dem User-Portal (Abwägung: jede Config kann dauerhaft einen Verbindungs-Slot reservieren).
- Wenn du auf **öffentlichem WLAN** mit lokaler Angreifer:in-Position setzt, dann ist **Strict Leak Protection** relevant (Abwägung: laut Anbieter experimentell und kann auf macOS/iOS zu Verbindungsproblemen führen).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Obscura VPN |
| Kategorie | VPN |
| Website | https://obscura.net/ |
| Quellcode | https://github.com/Sovereign-Engineering/obscuravpn-client |
| Lizenz | Unklar (LICENSE.md im Repo) |
| Preismodell | paid (laut Website: 8 USD/Monat) |
| Free Tier | unknown |
| Open Source | yes (laut Website: „entire source code“ auf GitHub) |
| Konto erforderlich | yes (Account-Nummer / User Account) |
| Telefon erforderlich | no (laut Website: „No phone numbers necessary“) |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Stripe (Kreditkarte/Abos); Apple App Store (iOS-Abos); Bitcoin Lightning; Monero |
| Jurisdiktion | USA (Sovereign Engineering Inc.; Terms: Governing law New York) |
| Logs | none (laut Privacy Policy: IP-Adresse wird nicht persistiert/geloggt) |
| Retention | Nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://obscura.net/legal/
- AGB/Terms: https://obscura.net/legal/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Laut Anbieter ist der VPN-Traffic so gebaut, dass Obscura ihn nicht im Klartext sieht (WireGuard-Ende-zu-Ende bis zum Exit-Hop). In der Privacy Policy steht außerdem, dass die IP-Adresse beim VPN-Einsatz nicht gespeichert/geloggt wird. Für Website-Analytics wird Plausible genannt; Zahlungen können – je nach Methode – zusätzliche Daten bei externen Prozessoren erfordern.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - **VPN:** IP-Adresse wird laut Privacy Policy nicht persistiert/geloggt/gespeichert.  
  - **Payment:** je nach Methode zusätzliche Daten beim Zahlungsdienstleister (Beispiel in der Privacy Policy: Stripe braucht Kartendaten und bei Abos eine E-Mail).  
  - **Website:** Plausible Analytics.  
  - **Optional:** freiwillige Kontaktinfos (z.B. E-Mail für Waitlist/Support).
- **Wofür:** Betrieb/Verwaltung des Dienstes, Support, Debugging/Troubleshooting (laut Privacy Policy).
- **Weitergabe/Subprozessoren:** genannt werden u.a. **Stripe** (Kreditkarte/Abos) und **Plausible** (Website-Analytics); weitere öffentliche Liste ist nicht angegeben.
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Stripe; außerdem werden Zahlungen via Bitcoin/Lightning und Monero erwähnt; iOS-Abos können über den App Store laufen.
- **Kontakt/DSAR/DPA:** Privacy Policy nennt Kontakt über legal@obscura.net; Lösch-/Auskunftsanfragen werden per E-Mail beschrieben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar (für die Apps nicht eindeutig dokumentiert).
- **Abschaltbar?** Unklar.
- **Wo (Menüpfad):** Nicht angegeben.  
  *(Hinweis: Für die Website nennt Obscura Plausible Analytics; das ist getrennt von App-Telemetrie.)*

**Logs & Retention:**
- **Logging-Level:** none (laut Privacy Policy: IP-Adresse wird nicht persistiert/geloggt/gespeichert).
- **Aufbewahrung:** Nicht angegeben (außer: IP-Adresse wird nicht gespeichert).
- **Lösch-/Opt-out-Optionen:** Account-Löschung in der App; zusätzlich kann man laut Knowledge Base einen Datenlösch-Request an support@obscura.net senden.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Laut Website/Privacy Policy: Traffic ist per WireGuard® Ende-zu-Ende bis zum Exit-Hop verschlüsselt; Obscura-Server sollen den Traffic nicht entschlüsseln können.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben.
- **Recovery/Account-Wiederherstellung:** Login erfolgt per Account-Nummer (laut Website). „Recovery“ entspricht praktisch dem sicheren Aufbewahren dieser Nummer (Abwägung: wenig Identitätsbindung, aber weniger „Rettungsanker“).
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben (außer allgemeine Support-/Legal-Kontakte).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kill Switch aktivieren** (falls du IP-Leaks bei Tunnel-Abbrüchen vermeiden willst).  
   **Menüpfad:** Obscura App → **Settings** → **Experimental** → **On demand kill switch**.  
   **Prüfen:** VPN kurz trennen/simulieren → Traffic wird blockiert bis zur Wiederverbindung.
2) **DNS bewusst setzen** (Blocking oder eigenes Profil).  
   **Menüpfad:** Obscura App → **Settings** → **DNS Server** →  
   - **Use Obscura DNS** (+ Kategorien wählen) oder  
   - **Use installed custom DNS profile**.  
   **Prüfen:** Testdomain aufrufen (Ad/Tracker-Test) oder DNS-Status im Gerät prüfen.
3) **Konto-/Abo-Aufräumen kennen** (für „sauberen Exit“).  
   **Menüpfad Account löschen:** Obscura App → **Account** → **Delete Account**.  
   **Prüfen:** App bestätigt Löschung; danach erneutes Login erzeugt laut Knowledge Base einen frischen Account ohne alte Daten.

**Stolpersteine:**
- **Stripe-Abos können eine E-Mail erfordern** (Abwägung: Auto-Renew/Komfort vs. Payment-Metadaten).
- **Strict Leak Protection** kann laut Knowledge Base auf macOS/iOS zu „Internet kaputt“ führen (Abwägung: Schutz im lokalen Netz vs. Stabilität).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Zahlungsweg wählen:** Wenn du E-Mail bei Abos vermeiden willst, nutze eher Top-ups statt Subscription (Abwägung: manuelles Nachladen).
- **WireGuard-Configs minimieren:** Nur so viele Configs erzeugen wie nötig, da sie Slots belegen können (Abwägung: weniger Bequemlichkeit bei Gerätewechsel).
- **Support-Kontakt sparsam:** Supportanfragen enthalten oft freiwillige Informationen (Abwägung: weniger Kontext kann Problembehebung erschweren).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Strict Leak Protection nur gezielt nutzen:** z.B. auf öffentlichem WLAN mit lokalem Angreifer-Modell (Abwägung: bekannte OS-Bugs/Verbindungsabbrüche möglich).
- **Plattformtrennung:** VPN-Nutzung in separatem Nutzerprofil/VM, wenn du Tracking-Silos brauchst (Abwägung: mehr Einrichtung/Komplexität).
- **WireGuard ohne Stealth vermeiden, wenn Zensur relevant ist:** plain WireGuard laut Anbieter ohne QUIC-Obfuscation (Abwägung: evtl. einfacher zu blocken).

</details>

## Features
- Two-Party-Architektur mit unabhängigem Exit-Hop
- WireGuard®-basierte Ende-zu-Ende-Verschlüsselung bis zum Exit-Hop
- Stealth/Obfuscation über QUIC (HTTP/3-ähnlich) im nativen Obscura-Client
- Kill Switch (Connect-on-demand) als experimentelle Option
- DNS-Blocking im Client (Kategorien) + Nutzung eigener DNS-Profile
- Nutzung via WireGuard-Konfigurationen (Android/Windows etc.)
- Account-Löschung in der App + optionaler Datenlösch-Request per Support

## Alternativen
- Mullvad (VPN) – Abwägung: klassisches VPN-Modell ohne Two-Party-Trennung (dafür anderes Bedien-/Servermodell).
- [IVPN](/anbieter/ivpn/) – Abwägung: klassisches VPN-Modell; andere App-/Feature-Schwerpunkte.
- [Proton VPN](/anbieter/proton-vpn/) – Abwägung: breites Produkt-Ökosystem (Account-Integration kann je nach Nutzung mehr Metadaten bedeuten).

## Nicht gelöst / offene Punkte
- App-Telemetrie/Diagnosedaten sind nicht klar dokumentiert  (Datenschutz, Telemetrie, Sicherheit; Stand: 2026-01-19).

## Quellen

- Mullvad (VPN) – Trade-off: "klassisches VPN-Modell ohne Two-Party-Trennung
- IVPN (VPN) – Trade-off: "klassisches VPN-Modell; andere App-/Feature-Schwerpunkte
- Proton VPN (VPN) – Trade-off: "breites Produkt-Ökosystem, dafür mehr Konto-/Account-Integration möglich
- Obscura: "Legal (Privacy Policy + Terms) – https://obscura.net/legal/
- Obscura Knowledge Base: "Nutzung via WireGuard – https://obscura.net/knowledge/using-obscura-via-wireguard/
- Obscura GitHub: "Client-Repo – https://github.com/Sovereign-Engineering/obscuravpn-client
- [Obscura: Startseite & FAQ](https://obscura.net/)
- [Obscura: Legal (Privacy Policy + Terms)](https://obscura.net/legal/)
- [Obscura Knowledge Base: Obscura's VPN Kill Switch](https://obscura.net/knowledge/kill-switch/)
- [Obscura Knowledge Base: DNS Options in Obscura](https://obscura.net/knowledge/dns-options/)
- [Obscura Knowledge Base: Strict Leak Protection Bugs](https://obscura.net/knowledge/strict-leak-protection-bugs/)
- [Obscura Knowledge Base: How to Delete an Obscura Account](https://obscura.net/knowledge/deleting-account/)
- [Obscura Knowledge Base: Using Obscura via WireGuard](https://obscura.net/knowledge/using-obscura-via-wireguard/)
- [Obscura GitHub: obscuravpn-client](https://github.com/Sovereign-Engineering/obscuravpn-client)
