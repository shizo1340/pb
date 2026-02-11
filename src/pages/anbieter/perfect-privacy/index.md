---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Perfect Privacy"
url: "/anbieter/perfect-privacy/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von Perfect Privacy (Kategorie: VPN)."
provider: ""
name: "Perfect Privacy"
category: "VPN"
website: "https://www.perfect-privacy.com/"
repo: "https://github.com/perfect-privacy/vpn-client"
license: "GPL-3.0-only (VPN-Client)"
policies: ""
privacy: "https://www.perfect-privacy.com/en/privacy-policy"
terms: "https://www.perfect-privacy.com/en/terms"
transparency: "Nicht angegeben"
warrant_canary: "https://www.perfect-privacy.com/en/warrant-canary"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "partial"
self_host_possible: "no"
account_required: "yes"
phone_required: "no"
kyc_required: "unknown"
jurisdiction: "Deutschland (CyberDock IT Solutions GmbH, Hamburg)"
region: "eu"
logs: "minimal"
retention: "specified"
retention_notes: "bis Abschluss/Beendigung; gesetzliche Aufbewahrungsfristen (keine festen Zeiten genannt)"
data_notes: "VPN: keine Traffic-Logs (keine IPs/Zeiten/Dauer pro Nutzer), aber Server-Gesamtlast; Konto: Login, Ablaufdatum, E-Mail; Website: Cookies/Analytics (u.a. Google Analytics)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Perfect Privacy ist ein Anbieter aus der Kategorie **VPN**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen VPN-Dienst mit (laut Anbieter) **ohne Traffic-Logs** nutzen willst und dabei Features wie **Kill-Switch/Leak-Protection, Multi-Hop und Stealth-Optionen** brauchst.
- **Weniger geeignet wenn:** du **kein Konto mit E-Mail-Adresse** nutzen möchtest oder eine **öffentliche Liste unabhängiger Audits** erwartest.
- **Wichtigster Abwägung:** **Mehr Schutzfunktionen (Leak-Protection/Multi-Hop/Stealth)** vs. **mehr Komplexität & mehr Stellschrauben**, die du aktiv korrekt setzen musst.

## Sofortmaßnahmen
- **Leak Protection auf „Permanent“ oder „Program“ setzen**: reduziert das Risiko von IP-/DNS-Leaks bei Verbindungsabbrüchen (Abwägung: ohne aktiven Tunnel ggf. kein Internet).
- **TrackStop nur gezielt aktivieren**: blockt Domains serverseitig, kann aber Logins/Services (z.B. über Google/Facebook) brechen.
- **DNS-Leak-Test nach jeder Änderung ausführen**: zeigt schnell, ob DNS-Anfragen im Tunnel bleiben oder „ausbrechen“.

## Entscheidungshilfe
- Wenn du **Leaks bei Disconnects** vermeiden willst, dann aktiviere **Leak Protection (Kill-Switch)** im VPN Manager (Abwägung: je nach Modus kann Internet komplett blockiert werden).
- Wenn du **Metadaten im Exit-Punkt reduzieren** willst, dann nutze **Multi-Hop (Cascading)** (Abwägung: höhere Latenz, mehr Fehlersuche bei Problemen).
- Wenn du in einem Netz bist, das VPN-Verkehr blockiert, dann aktiviere **Stealth VPN** (Abwägung: typischerweise langsamer, mehr Konfigurationsaufwand).
- Wenn du **Tracking/Ads** serverseitig filtern willst, dann aktiviere **TrackStop-Kategorien** (Abwägung: einzelne Dienste/Websites funktionieren ggf. nicht mehr).
- Wenn du **eingehende Verbindungen** brauchst (z.B. bestimmte P2P-/Self-Hosted-Use-Cases), dann nutze **Port Forwarding** (Abwägung: zusätzliche Angriffsfläche; Ports laufen laut Anbieter nach 7 Tagen aus, wenn nicht erneuert).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Perfect Privacy |
| Kategorie | VPN |
| Website | https://www.perfect-privacy.com/ |
| Quellcode | https://github.com/perfect-privacy/vpn-client |
| Lizenz | GPL-3.0-only (VPN-Client) |
| Preismodell | paid |
| Free Tier | no |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Paymentwall (Gateway), PayPal, Bitcoin (BitPay), Stripe |
| Jurisdiktion | Deutschland (CyberDock IT Solutions GmbH, Hamburg) |
| Logs | minimal |
| Retention | bis Abschluss/Beendigung; gesetzliche Aufbewahrungsfristen (keine festen Zeiten genannt) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.perfect-privacy.com/en/privacy-policy
- AGB/Terms: https://www.perfect-privacy.com/en/terms
- Transparency Report: Nicht angegeben
- Warrant Canary: https://www.perfect-privacy.com/en/warrant-canary

**Audits (laut Anbieter):**
- Nicht angegeben (keine unabhängigen Audit-Reports auf der Anbieter-Website verlinkt gefunden)

**Daten-Notizen (kurz):**
- Laut Privacy Policy werden bei der **VPN-Nutzung keine Traffic-Logs** geführt (keine IP-Adressen, Zugriffszeiten, Dauer oder Bandbreite pro Nutzer); erfasst wird **nur die Gesamtlast einzelner Server**.
- Für **Billing/Support** speichert der Anbieter **Login-Daten, Ablaufdatum und E-Mail-Adresse** (anonyme E-Mail-Provider sind laut Anbieter erlaubt).
- Zahlungen laufen über **Zahlungsdienstleister** (Paymentwall wird explizit genannt); je nach Methode kommen weitere Zahlungsanbieter hinzu (z.B. BitPay bei Bitcoin).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - **VPN-Nutzung:** keine Traffic-Logs; keine IPs/Zeiten/Dauer/Bandbreite pro Nutzer; Server-Gesamtlast (für Betrieb/Status/Fehleranalyse).  
  - **Konto:** Login-Credentials, Ablaufdatum, E-Mail-Adresse.  
  - **Website:** technische Daten beim Aufruf; Cookies/Analytics (u.a. Google Analytics).
- **Wofür:** Betrieb der Server, Anzeige von Serverinfos/Status, Fehleranalyse; Abrechnung & Kundensupport; Website-Funktion und Nutzungsanalyse.
- **Weitergabe/Subprozessoren:** Paymentwall als Zahlungsdienstleister; Website-Dienste wie Google Analytics (laut Privacy Policy).
- **Drittlandtransfer:** in der Privacy Policy werden Dienste mit Verarbeitung/Übertragung in die USA beschrieben (z.B. Google Analytics; Paymentwall ist in den USA genannt).
- **Zahlungsabwicklung/Payment Processor:** Paymentwall (Privacy Policy); Bestellseite nennt PayPal/Bitcoin/Stripe als Methoden (automatisch verarbeitet).
- **Kontakt/DSAR/DPA:** Rechteauskunft/Löschung wird in der Privacy Policy beschrieben; Ansprechpartner sind im Legal/Imprint-Bereich verlinkt.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Auf der Website werden laut Privacy Policy Analytics/Cookies eingesetzt (u.a. Google Analytics).
- **Abschaltbar?** Für Google Analytics nennt die Privacy Policy eine Opt-out-Option („Disable Google Analytics“) bzw. Browser-Plugin.
- **Wo (Menüpfad):** Website → Cookie-/Opt-out-Hinweise in Privacy Policy.

**Logs & Retention:**
- **Logging-Level:** minimal (laut Anbieter keine Traffic-Logs; zusätzlich Server-Gesamtlast).
- **Aufbewahrung:** bis Abschluss/Beendigung; gesetzliche Fristen (keine festen Zeiten genannt).
- **Lösch-/Opt-out-Optionen:** Privacy Policy nennt Auskunft/Löschung; konkrete Self-Service-Abläufe (z.B. Button im Konto) sind nicht beschrieben.

**Abwägung am Punkt:** Weniger Telemetrie/Logs reduziert Metadaten, kann aber Debugging/Support erschweren (z.B. bei Verbindungsproblemen).

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** VPN-Verbindungen via OpenVPN oder IPsec (VPN Manager); im OpenVPN-Teil werden Cipher-Optionen genannt (Default u.a. AES-256-GCM).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (für VPN typischerweise nicht als KDF-Thema dokumentiert).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben (in den gefundenen Anbieterquellen keine 2FA-Option beschrieben).
- **Recovery/Account-Wiederherstellung:** Konto ist an Login + E-Mail gebunden; Ablaufdatum wird im Client angezeigt (laut Manuals/Terms).
- **Vuln-Handling / Security-Kontakt:** Keine öffentliche Responsible-Disclosure-/SECURITY.md-Policy im offiziellen Repo gefunden.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Leak Protection aktivieren (Kill-Switch)**  
   **Menüpfad (Windows VPN Manager):** *Leak Protection* → Modus **Tunnel** (Default) oder **Program**/**Permanent**.  
   **Prüfen:** Wenn VPN getrennt ist, dürfen keine Verbindungen mehr durchkommen (DNS-Leak-Test + Check-IP).
2) **TrackStop gezielt einschalten**  
   **Menüpfad (Windows VPN Manager):** *TrackStop* → Kategorien anhaken.  
   **Prüfen:** Teste kritische Logins/Apps nach Aktivierung (Abwägung: einzelne Dienste können blockiert werden).
3) **DNS-Leak verifizieren**  
   **Prüfen:** Anbieter-Testseite „DNS Leak Test“ aufrufen und prüfen, welche DNS-Server genutzt werden.

**Stolpersteine:**
- **Port Forwarding** kann nützlich sein, erhöht aber die Angriffsfläche; laut VPN Manager laufen Forwardings nach **7 Tagen** aus, wenn nicht erneuert/auto-renewed.
- In Windows kann **Drittanbieter-Firewall-Software** die Leak-Protection stören (Anbieter beschreibt einen manuellen Test).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze eine **separate E-Mail-Adresse** (laut Privacy Policy sind anonyme E-Mail-Provider erlaubt).
- Vermeide Zahlungsarten, die du nicht mit deinem Bedrohungsmodell vereinbaren kannst (Abwägung: je nach Methode andere Refund-/Abwicklungsregeln).
- In den Einstellungen („Preferences“) **NeuroRouting** und **Enforce Primary IP** bewusst setzen (Abwägung: Routing/Exit-IP-Verhalten wird anders als „fixer Exit“).

**Abwägung:** weniger Identitätsbindung kann Support/Abrechnung/Refund komplizierter machen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Leak Protection = Permanent** (Internet nur über VPN) und nach Systemstart testen (Abwägung: wenn der Client nicht startet, bist du offline).
- **Multi-Hop bis zu 4 Hops** nutzen, wenn du zusätzliche Trennung zwischen Entry/Exit willst (Abwägung: Performance/Fehlersuche).
- **Stealth VPN** aktivieren (z.B. OBFS/SSH/Stunnel), wenn VPN-Erkennung/Blocking relevant ist (Abwägung: stabilitäts-/performanceabhängig).

**Abwägung:** deutlicher Komfortverlust und mehr Komplexität bei Verbindungsproblemen.

</details>

## Features
- Kein Traffic-Logging laut Anbieter (keine IP-/Zeit-/Dauer-Logs pro Nutzer), dafür Server-Gesamtlast zur Betriebsdiagnose.
- TrackStop: Domain-Blocking nach Kategorien direkt auf VPN-Servern.
- Leak Protection (Firewall & DNS/Kill-Switch) mit mehreren Modi (Tunnel/Program/Permanent).
- Multi-Hop (Cascading) bis zu 4 Hops.
- Stealth VPN (Stunnel/SOCKS/HTTP/OBFS/SSH) zur Verschleierung von VPN-Traffic.
- Port Forwarding (Default + Custom; Renew/Auto-Renew laut VPN Manager).

## Alternativen
- Mullvad (VPN) – anderer Schwerpunkt beim Account-/Bezahlmodell (Abwägung: andere Jurisdiktion/Features).
- [IVPN](/anbieter/ivpn/) – anderer Schwerpunkt bei Apps/Account-Handling (Abwägung: andere Feature-Pakete).
- [Proton VPN](/anbieter/proton-vpn/) – anderer Schwerpunkt im Ökosystem (Abwägung: Konto-Anbindung/Integration).

## Nicht gelöst / offene Punkte
- Unklar: Ob die VPN-Apps **Telemetrie/Crash-Reports** senden (keine explizite Doku in den gefundenen Manuals/Privacy-Texten).

## Quellen

- https://github.com/perfect-privacy/vpn-client
- [Perfect Privacy – Website](https://www.perfect-privacy.com/)
- [Privacy Policy](https://www.perfect-privacy.com/en/privacy-policy)
- [VPN Customer Policy / Terms](https://www.perfect-privacy.com/en/terms)
- [Imprint](https://www.perfect-privacy.com/en/imprint)
- [Order / Pricing & Payment Methods](https://www.perfect-privacy.com/en/order)
- [Warrant Canary](https://www.perfect-privacy.com/en/warrant-canary)
- [Windows VPN Manager Documentation](https://www.perfect-privacy.com/en/manuals/windows_vpnmanager_doc)
- [TrackStop (DE)](https://www.perfect-privacy.com/de/features/trackstop)
- [Accepting Bitcoin / BitPay](https://www.perfect-privacy.com/en/bitcoin-vpn)
- [Zero-Knowledge DNS (Blog)](https://www.perfect-privacy.com/enzero-knowledge-dns)
- [DNS Leak Test](https://www.perfect-privacy.com/en/tests/dns-leaktest)
- [GitHub Repo: VPN Client](https://github.com/perfect-privacy/vpn-client)
