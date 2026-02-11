---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Tor Project"
url: "/anbieter/tor-project/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-15"
robots: "index,follow"
description: "Kurzprofil von Tor Project (Kategorie: Tor & Anonymität)."
provider: ""
name: "Tor Project"
category: "Tor & Anonymität"
website: "https://www.torproject.org/"
repo: "https://github.com/torproject/tor"
license: "BSD-3-Clause"
policies: ""
privacy: "https://www.torproject.org/about/privacy_policy/"
terms: "https://www.torproject.org/about/trademark/"
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
jurisdiction: "USA (The Tor Project, Inc.)"
region: "us"
logs: "none"
retention: "specified"
retention_notes: "keine serverseitigen personenbezogenen Daten angegeben; lokal: Session bis Exit/New Identity"
data_notes: "Tor Browser leitet Traffic über das Tor-Netzwerk und nennt laut Privacy Policy keine Telemetrie/Analytics. Spenden werden über Drittanbieter abgewickelt (z.B. Stripe/PayPal/BTCPay), was Identitäts-/Zahlungsdaten betreffen kann."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Tor Project ist ein Anbieter aus der Kategorie **Tor & Anonymität**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du ohne Konto/IP-Bindung browsen willst und Zensur-/Tracking-Risiken reduzieren möchtest (Tor Browser + Tor-Netzwerk).
- **Weniger geeignet wenn:** du „normales“ Web-Feeling ohne Einschränkungen brauchst (z.B. JavaScript/Media überall) oder sehr stabile Performance erwartest.
- **Wichtigster Abwägung:** mehr Anonymitäts-/Anti-Tracking-Schutz vs. teils weniger Website-Kompatibilität und höhere Komplexität (Bridges, Security-Level).

## Sofortmaßnahmen
- **Security Level auf „Safer“ oder „Safest“ setzen**, um riskante Web-Features (v.a. JavaScript) stärker zu begrenzen.
- **HTTPS-Only Mode aktiv lassen/aktivieren**, um unverschlüsselte HTTP-Verbindungen zu vermeiden.
- **„New Identity“ nutzen**, wenn du Sitzungen klar trennen willst (Tabs schließen + neue Circuits + private Daten löschen).

## Entscheidungshilfe
- Wenn du **Tracking/Profiling** minimieren willst, dann nutze **Tor Browser** (Abwägung: manche Seiten funktionieren eingeschränkt, v.a. bei „Safest“).
- Wenn du **in zensierten Netzen** bist, dann nutze **Bridges (Moat/Website/Telegram/E-Mail)** (Abwägung: zusätzliche Schritte beim Einrichtung, ggf. geringere Geschwindigkeit).
- Wenn du **Sitzungen strikt trennen** willst, dann nutze **New Identity** statt nur Tabs zu schließen (Abwägung: Downloads/Aktivitäten werden abgebrochen).
- Wenn du **Ende-zu-Ende-Verschlüsselung zum Zielserver** brauchst, dann nutze **HTTPS-Only** und achte auf HTTPS (Abwägung: HTTP-only Seiten werden blockiert/erfordern Ausnahmen).
- Wenn du **kein Tor-Routing** willst, aber Anti-Fingerprinting wichtig ist, dann ist **Mullvad Browser** eine Alternative mit anderem Fokus (Abwägung: kein Zugriff auf Onion Services, keine Tor-Circuit-Isolation).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Tor Project |
| Kategorie | Tor & Anonymität |
| Website | https://www.torproject.org/ |
| Quellcode | https://github.com/torproject/tor |
| Lizenz | BSD-3-Clause |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Stripe, PayPal, BTCPay Server (Spenden, laut Donor-FAQ) |
| Jurisdiktion | USA (The Tor Project, Inc.) |
| Logs | none |
| Retention | keine serverseitigen personenbezogenen Daten angegeben; lokal: Session bis Exit/New Identity |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.torproject.org/about/privacy_policy/
- AGB/Terms: https://www.torproject.org/about/trademark/
- Transparency Report: https://www.torproject.org/about/reports/
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Verlinkte Audit-/Assessment-Berichte (Sammlung): https://www.torproject.org/about/reports/

**Daten-Notizen (kurz):**
Tor Browser ist ein auf Privacy ausgelegter Browser, der Traffic über das Tor-Netzwerk leitet (IP-Verbergung, Anti-Tracking). Laut Privacy Policy nennt Tor Project **keine Telemetrie/Analytics** im Tor Browser. Spenden laufen über Drittanbieter (Payment/Metadaten-Risiko bei Zahlung).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Privacy Policy: Tor Browser „trackt“ nicht; keine Telemetrie/Analytics genannt; keine IP-Adressen-Sammlung genannt.
- **Wofür:** Bereitstellung von Tor Browser / Tor-Netzwerkzugriff; Sicherheits-/Privacy-Funktionen (z.B. Identitäts-Trennung, HTTPS-Only).
- **Weitergabe/Subprozessoren:** Für Spenden nennt das Projekt Zahlungsdienstleister (z.B. Stripe/PayPal/BTCPay) in der Donor-FAQ; zusätzlich existieren verlinkte Reports/Audits.
- **Drittlandtransfer:** Nicht angegeben (für Tor Browser selbst); bei Spenden abhängig vom Zahlungsweg.
- **Zahlungsabwicklung/Payment Processor:** Stripe, PayPal, BTCPay (Donor-FAQ).
- **Kontakt/DSAR/DPA:** In der Privacy Policy beschrieben (Kontakt/Regelungen); kein klassisches DPA-Modell für „Tor Browser ohne Konto“ angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy: keine Telemetrie/Analytics im Tor Browser genannt.
- **Abschaltbar?** Nicht anwendbar (wenn keine Telemetrie aktiv ist).
- **Wo (Menüpfad):** Kein Telemetrie-Schalter dokumentiert (relevant sind stattdessen Security Level / HTTPS-Only / Bridges).

**Logs & Retention:**
- **Logging-Level:** none
- **Aufbewahrung:** keine serverseitige personenbezogene Retention genannt; lokal werden Identitätsdaten durch „New Identity“ (Cookies/History etc.) geleert.
- **Lösch-/Opt-out-Optionen:** „New Identity“ trennt Sitzungen (Tabs/Windows schließen + private Daten löschen); Browser-Daten lokal über Browser-Funktionen löschbar.

**Abwägung am Punkt:** Weniger Telemetrie reduziert Diagnosedaten; Support/Fehlersuche kann dadurch stärker auf Nutzerberichte angewiesen sein.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Tor Browser bietet HTTPS-Only Mode; Tor vs. HTTPS wird in der Support-Doku getrennt erläutert.
- **KDF/Parameter/Schlüsselableitung:** Nicht anwendbar (kein Konto/kein Master-Passwort-Modell).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht anwendbar (Tor Browser benötigt kein Konto).
- **Recovery/Account-Wiederherstellung:** Nicht anwendbar (kein Konto).
- **Vuln-Handling / Security-Kontakt:** security.txt nennt Meldeweg und PGP-Fingerprint.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Security Level passend setzen** (Standard/Safer/Safest).  
   **Menüpfad:** Schild-Icon neben der Adressleiste → „Settings…“ → Security Level.  
   **Prüfen:** Security Level ist sichtbar gesetzt; Websites verhalten sich entsprechend (z.B. weniger Script).
2) **HTTPS-Only Mode aktiv lassen/aktivieren.**  
   **Menüpfad:** Einstellungen → Privacy/Security → „HTTPS-Only Mode“ (Support zeigt die Einstellung).  
   **Prüfen:** HTTP wird auf HTTPS upgegradet oder blockiert (mit Hinweisdialog).
3) **Sitzungen trennen bei Bedarf („New Identity“).**  
   **Menüpfad:** Tor Browser Toolbar → „New Identity“.  
   **Prüfen:** Tabs schließen sich, private Daten werden geleert, neue Circuits werden genutzt.

**Stolpersteine:**
- „Safest“ kann viele Seiten teilweise unbenutzbar machen (Abwägung: weniger Angriffsfläche vs. weniger Komfort).
- Downloads/Datei-Öffnen kann Kontext außerhalb des Browsers erzeugen (Abwägung: Komfort vs. zusätzlicher Leak-Raum im System).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **Bridges (Moat/Website/Telegram/E-Mail)**, wenn du Tor-Verbindungen verschleiern musst.  
  **Abwägung:** mehr Einrichtung + ggf. geringere Geschwindigkeit.
- Nutze **New Identity** häufiger, wenn du Themen/Personas trennen willst.  
  **Abwägung:** Arbeitsfluss wird unterbrochen (Tabs/Downloads stoppen).
- Halte Erweiterungen minimal (keine zusätzlichen Add-ons installieren).  
  **Abwägung:** weniger Komfort-Features, aber weniger Fingerprinting-Risiko.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze **strikte Trennung** (separates OS/VM/Profil) für Tor Browser.  
  **Abwägung:** höherer Aufwand, mehr Komplexität.
- Setze **Safest** + konsequent HTTPS-Only + möglichst wenige Interaktionen mit Nicht-Tor-Apps (z.B. keine externen Viewer).  
  **Abwägung:** viele Seiten brechen, Workflow stark eingeschränkt.
- Bei Zensur/Überwachung: **Bridges + Connection Assist** und (falls dokumentiert) passende Pluggable Transports.  
  **Abwägung:** höhere Fehlersuche/Support-Aufwand.

</details>

## Features
- Tor Browser (Desktop/Android) routet Traffic über das Tor-Netzwerk und versteckt die echte IP-Adresse.
- Security Levels (Standard/Safer/Safest) steuern riskante Web-Funktionen (z.B. JavaScript-Verhalten).
- HTTPS-Only Mode erzwingt HTTPS für Webverbindungen.
- „New Identity“ trennt Sitzungen (Tabs schließen, private Daten löschen, neue Circuits).
- Bridges/Pluggable Transports zur Umgehung von Zensur.

## Alternativen
- I2P (anderes Anonymitätsnetz; Abwägung: anderes Ökosystem/Erreichbarkeit, nicht „Web wie gewohnt“)
- VPN-Dienste (anderes Bedrohungsmodell; Abwägung: zentraler Anbieter als Vertrauenspunkt statt verteiltes Relaying)
- Mullvad Browser (Anti-Fingerprinting ohne Tor-Routing; Abwägung: keine Onion Services, keine Tor-Circuit-Isolation)

## Nicht gelöst / offene Punkte
- Konkrete **Retention/Server-Logs** für Update-/Bridge-Distribution-Endpunkte sind in den öffentlich sichtbaren Stellen nicht als feste Zeiträume beschrieben.

## Quellen

- Berichte & verlinkte Security-Audits: "https://www.torproject.org/about/reports/
- I2P (anderes Anonymitätsnetz; Trade-off: "anderes Ökosystem/Kompatibilität)
- VPN-Dienste (anderes Bedrohungsmodell; Trade-off: "zentraler Vertrauenspunkt)
- Mullvad Browser (Fokus Anti-Fingerprinting ohne Tor-Routing; Trade-off: "kein Onion/keine Tor-Circuits)
- https://donate.torproject.org/donor-faq/
- [Tor Project (Startseite)](https://www.torproject.org/)
- [Privacy Policy](https://www.torproject.org/about/privacy_policy/)
- [Reports / Transparenz & verlinkte Audits](https://www.torproject.org/about/reports/)
- [Copyright, Trademark and Brand Policy](https://www.torproject.org/about/trademark/)
- [security.txt (Security-Kontakt)](https://www.torproject.org/security.txt)
- [About Tor Browser (Support)](https://support.torproject.org/tor-browser/getting-started/about-tor-browser/)
- [Tor Browser best practices / Using Tor Browser safely](https://support.torproject.org/tor-browser/security/using-tb-safely/)
- [Security levels](https://support.torproject.org/tor-browser/features/security-levels/)
- [Managing identities (New Identity / New Circuit)](https://support.torproject.org/tor-browser/features/managing-identities/)
- [Secure connections (HTTPS-Only Mode)](https://support.torproject.org/tor-browser/features/secure-connections/)
- [Getting bridges](https://support.torproject.org/tor-browser/circumvention/getting-bridges/)
- [Difference between Mullvad Browser and Tor Browser](https://support.torproject.org/mullvad-browser/faqs/what-is-difference-mullvad-browser-tor-browser/)
- [Donor FAQ (Zahlungswege/Spenden)](https://donate.torproject.org/donor-faq/)
- [Tor (Source) LICENSE](https://github.com/torproject/tor/blob/main/LICENSE)
