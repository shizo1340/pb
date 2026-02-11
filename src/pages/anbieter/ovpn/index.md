---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / OVPN"
url: "/anbieter/ovpn/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von OVPN (Kategorie: VPN)."
provider: ""
name: "OVPN"
category: "VPN"
website: "https://www.ovpn.com/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://www.ovpn.com/en/privacy-policy"
terms: "https://www.ovpn.com/en/tos"
transparency: "https://www.ovpn.com/en/transparency"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "unknown"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Schweden (OVPN Integritet AB); laut Privacy Policy Betrieb in der EU mit möglichem Transfer von Account-Daten in die USA"
region: "us"
logs: "minimal"
retention: "specified"
retention_notes: "Keine VPN-Browsing-Logs über die Session hinaus; Account-/Payment-Daten solange Account aktiv + danach „reasonable time“ (laut Privacy Policy)"
data_notes: "OVPN beschreibt eine No-Log-Policy für VPN-Browsing-Aktivitäten; bestimmte Add-ons (z.B. Public IPv4) haben bewusst andere Korrelationseigenschaften."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

OVPN ist ein Anbieter aus der Kategorie **VPN**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du ein klassisches VPN mit dokumentierter No-Log-Aussage für *VPN-Browsing-Aktivitäten* willst und dir bewusst ist, dass ein Konto + Zahlung trotzdem Identitäts- und Metadaten erzeugen kann.
- **Weniger geeignet wenn:** du ohne Anbieter-Account arbeiten willst oder wenn du Add-ons wie **Public IPv4** brauchst, aber keine Korrelation zwischen Account und einer festen IP riskieren möchtest.
- **Wichtigster Abwägung:** **Komfort/Add-ons (Port Forwarding, Public IPv4, Multihop)** vs. **zusätzliche Metadaten/Korrelation** (besonders bei festen, exklusiven Ressourcen).

## Sofortmaßnahmen
- **Killswitch aktivieren (Always-on):** reduziert Leaks bei Verbindungsabbrüchen und beim Booten.
- **DNS-Leak-Schutz prüfen:** stellt sicher, dass DNS-Anfragen nicht am VPN vorbei laufen.
- **„Anonymous usage statistics“ aus lassen (Default):** verhindert zusätzliche Client-Metadatenübermittlung (Feature ist laut Anbieter opt-in).

## Entscheidungshilfe
- Wenn du verhindern willst, dass unverschlüsselter Traffic bei Abbrüchen rausgeht, dann aktiviere **Killswitch → Always-on** (Abwägung: Internet ist blockiert, bis die VPN-Verbindung wieder steht).
- Wenn du eine feste, exklusiv zugeordnete IP brauchst (z.B. Server-/Whitelist-Use-Case), dann nutze **Public IPv4** (Abwägung: Anbieter kann die feste IP während der Laufzeit mit deinem Account korrelieren).
- Wenn du eingehende Verbindungen brauchst (z.B. bestimmte P2P-/Self-Hosting-Szenarien), dann nutze **Port Forwarding** (Abwägung: zusätzliche Angriffsfläche durch offene Ports; Reconnect nötig nach dem Öffnen eines Ports).
- Wenn du in restriktiven Netzen unterwegs bist, dann nutze **Stealth VPN** (Abwägung: funktioniert laut Anbieter nicht zusammen mit Split-Tunneling; macht dich nicht „unsichtbar“, sondern tarnt nur den VPN-Traffic Richtung Server).
- Wenn du bei WireGuard die Stabilität willst, aber Metadaten minimieren möchtest, dann senke den **Key-Regeneration-Intervall** (Abwägung: häufiger Key-Wechsel kann in manchen Einrichtungen/Automationen mehr Pflege bedeuten).
- Wenn du Support kontaktierst, dann prüfe vor dem Senden, ob **Logs & Diagnostic Data** angehängt werden (Abwägung: schnellere Diagnose vs. mehr Gerätezustands-/Konfigurationsinfos im Ticket).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | OVPN |
| Kategorie | VPN |
| Website | https://www.ovpn.com/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | paid |
| Free Tier | no |
| Open Source | unknown |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | PayPal; Kreditkarte; Swish; Bitcoin; Ethereum (Processor für Karten nicht angegeben) |
| Jurisdiktion | Schweden (OVPN Integritet AB); laut Privacy Policy Betrieb in der EU mit möglichem Transfer von Account-Daten in die USA |
| Logs | minimal |
| Retention | Keine VPN-Browsing-Logs über die Session hinaus; Account-/Payment-Daten solange Account aktiv + danach „reasonable time“ (laut Privacy Policy) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.ovpn.com/en/privacy-policy
- AGB/Terms: https://www.ovpn.com/en/tos
- Transparency Report: https://www.ovpn.com/en/transparency
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
OVPN schreibt, dass keine VPN-Browsing-Aktivitäten gespeichert werden (mit einer WireGuard-Ausnahme: IP-Adresse in temporärem Speicher bis Session-Ende). Für **Public IPv4** wird laut Anbieter während der Laufzeit eine Zuordnung zwischen Account und fester IP geführt (und danach wieder entfernt).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Accountdaten (Username/Passwort + Zeitstempel), E-Mail *falls angegeben*, Zahlungsdaten (z.B. Kredit-/Debitkarte), Kommunikationsinhalte bei Kontakt/Support; bei WireGuard: IP-Adresse im temporären Speicher bis Session-Ende (laut Privacy Policy).
- **Wofür:** Betrieb/Verbesserung des Dienstes, Zahlungsabwicklung, Support, Kommunikation/Newsletter sowie „business/legal purposes“ wie Betrugsprävention (laut Privacy Policy).
- **Weitergabe/Subprozessoren:** Weitergabe an Corporate Affiliates innerhalb der Pango Group sowie an Dienstleister als „processors“ (z.B. Website-Optimierung, E-Mail-Provider). Für den Chatbot nennt OVPN ausdrücklich **Zendesk** als Service Provider (laut Privacy Policy).
- **Drittlandtransfer:** Betrieb derzeit in der EU, aber Account-bezogene Daten können laut Privacy Policy in die USA oder andere Orte transferiert werden (SCCs/Transfer Addendum als Schutzmechanismus genannt).
- **Zahlungsabwicklung/Payment Processor:** Terms of Service sprechen von einem „third party payment processor“; Support nennt als Zahlungsarten PayPal, Kreditkarte, Swish, Bitcoin, Ethereum.
- **Kontakt/DSAR/DPA:** Privacy Policy nennt privacy@ovpn.com für Rechteanfragen; DPO-Kontakt wird über DPO.pango@twobirds.com angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Support ist „Collect anonymous usage statistics“ **standardmäßig deaktiviert** (opt-in).
- **Abschaltbar?** Ja (Toggle unter **Settings** im Client).
- **Wo (Menüpfad):** OVPN Client → **Settings** → „Collect anonymous usage statistics“ (Ein/Aus).  
  **Was erfasst wird (laut Support, Beispiele):** App-Events (Start/Terminate, Screenwechsel, Connect/Disconnect, Show Logs) sowie Eigenschaften wie OS/Version, Client-Version, Killswitch-Modus, DNS-Modus, Add-on-Typ, IPv6-Status, Verbindungsdauer.

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** Keine VPN-Browsing-Logs über die Session hinaus; Account-/Payment-Daten solange Account aktiv + danach „reasonable time“ (laut Privacy Policy).
- **Lösch-/Opt-out-Optionen:** Privacy Policy nennt Rechte auf Auskunft/Löschung/Korrektur (Kontakt: privacy@ovpn.com).  
  Support-Tickets können optional **Client-Logs & Diagnostic Data** enthalten (u.a. Client-Version, Add-ons, Client-Settings und „last 10 logs“, sichtbar unter **Settings → Show logs**).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** OVPN beschreibt die Nutzung von OpenVPN und WireGuard; Verschlüsselungsdetails werden in Support/Docs beschrieben (z.B. OpenVPN AES-256-GCM + DH, WireGuard Curve25519/ChaCha20).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben.
- **Recovery/Account-Wiederherstellung:** Nicht angegeben (E-Mail ist laut Privacy Policy „für Billing, falls angegeben“; ältere Aussagen zur Optionalität existieren, aktuelle Recovery-Details sind nicht zentral dokumentiert).
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben (kein klarer Responsible-Disclosure-Prozess in den genutzten Quellen).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Killswitch aktivieren** → „Always-on killswitch“.  
   **Wo:** OVPN Client → **Settings** → **Killswitch**.  
   **Prüfen:** Internet ist *ohne* aktive VPN-Verbindung blockiert; Verbindung zu OVPN-Servern bleibt möglich.
2) **DNS-Leak-Schutz nutzen** (OVPN-DNS aktiv).  
   **Prüfen:** Mit „DNS Leak test“ (Anbietertest) oder externem Leak-Check: DNS-Server zeigen nicht auf deinen ISP.
3) **Telemetrie opt-in lassen (Default „aus“) + Support-Logs bewusst senden.**  
   **Wo:** OVPN Client → **Settings** → „Collect anonymous usage statistics“ (aus).  
   **Prüfen:** Beim Support-Ticket nur anhaken/anhängen, wenn wirklich nötig (Logs enthalten u.a. Client-Settings + letzte Logs).

**Stolpersteine:**
- **Public IPv4** ist bewusst korrelierbar zum Account (Abwägung: feste IP/Server-Use-Case vs. geringere Anonymität).
- **Port Forwarding** öffnet eingehende Ports (Abwägung: Funktionalität vs. Angriffsfläche; außerdem ist ein Reconnect nötig, damit es greift).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Usage Statistics weiterhin aus lassen** und Updates/Debug-Features nur gezielt nutzen.
- **WireGuard-Key-Regeneration enger stellen** (z.B. < 14 Tage), falls du häufige Rotationen willst.  
  **Wo:** Desktop-App → **Settings** → „Regenerate every“ (1–28 Tage; Default 14 Tage).
- **Public IPv4 vermeiden**, wenn Anonymität im Vordergrund steht; stattdessen ohne Add-on verbinden (shared/dynamische IP laut Anbieter ohne Zuordnung).

**Abwägung:** weniger Komfort bei speziellen Use-Cases (feste IP/Serverbetrieb), mehr Selbstprüfung (Leaks/Killswitch testen).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Always-on killswitch + getrennte Nutzungskontexte** (z.B. separates OS-Profil/VM nur für VPN-Workflows).
- **Keine account-korrelierbaren Add-ons** (insb. Public IPv4) und möglichst keine identifizierenden Support-Interaktionen über denselben Kontext.
- **Stealth VPN** nur, wenn du Netzwerk-Blocking/Protokoll-Filter erwartest.  
  **Hinweis:** Stealth tarnt den VPN-Traffic Richtung Server, macht die Nutzung aber nicht „unsichtbar“.

**Abwägung:** deutlich mehr Reibung im Alltag (Lockouts durch Always-on, mehr Einrichtung/Trennung).

</details>

## Features
- OpenVPN & WireGuard (Anbieterprotokolle)
- Killswitch (Disable / During connection / Always-on)
- DNS-Leak-Schutz (Client setzt OVPN-DNS)
- Optional: Multihop, Port Forwarding, Public IPv4 (Add-ons)
- Optional: Stealth VPN (verschleiert VPN-Traffic Richtung Server; laut Support nicht mit Split-Tunneling kombinierbar)

## Alternativen
- Mullvad VPN (Abwägung: anderes Account-/Zahlungsmodell; andere Jurisdiktion/Policies)
- IVPN (Abwägung: anderes Set an Privacy-Defaults vs. Komfortfunktionen)
- Proton VPN (Abwägung: stärkeres Konto-/Ökosystem-Modell vs. Trennung einzelner Dienste)

## Nicht gelöst / offene Punkte
- Unklar, ob OVPN eine **öffentliche Subprozessorenliste** oder ein **DPA-Dokument** bereitstellt (jenseits allgemeiner Aussagen in der Privacy Policy).
- Unklar, ob und wie **MFA/2FA** für den Account angeboten wird (Nicht dokumentiert).

## Quellen

- VPN-Protokolle: "OpenVPN und WireGuard
- Optional: "Multihop, Port Forwarding, Public IPv4 (Add-ons)
- Mullvad VPN (Trade-off: "anderes Account-Modell/Jurisdiktion; Funktionsumfang je nach Use-Case)
- IVPN (Trade-off: "anderer Fokus bei Account/Metadaten vs. Komfort)
- Proton VPN (Trade-off: "Anbieter-Ökosystem & Konto-Integration vs. Trennung)
- [Privacy Policy](https://www.ovpn.com/en/privacy-policy)
- [Terms of service](https://www.ovpn.com/en/tos)
- [Security](https://www.ovpn.com/en/security)
- [Transparency](https://www.ovpn.com/en/transparency)
- [Simple pricing](https://www.ovpn.com/en/pricing)
- [OVPN Cookie Policy](https://www.ovpn.com/en/cookie-policy)
- [Welche Zahlungsmethoden akzeptieren Sie? (Support)](https://support.ovpn.com/hc/de-de/articles/46236309981843-Welche-Zahlungsmethoden-akzeptieren-Sie)
- [Update der akzeptierten Zahlungsmöglichkeiten (Blog)](https://www.ovpn.com/deupdate-der-akzeptierten-zahlungsmoglichkeiten)
- [Explanation: "Stealth VPN](https://support.ovpn.com/hc/en-us/articles/46236213370387-Explanation-Stealth-VPN)
- [Desktop: "Regenerate every](https://support.ovpn.com/hc/en-us/articles/46236259794323-Desktop-Regenerate-every)
- [Privacy considerations when using Public IPv4](https://support.ovpn.com/hc/en-us/articles/46236220145555-Privacy-considerations-when-using-Public-IPv4)
- [Port forwarding with OVPN](https://www.ovpn.com/enport-forwarding-with-ovpn)
- [Privacy Policy](https://www.ovpn.com/en/privacy-policy)
- [Terms of service](https://www.ovpn.com/en/tos)
- [Security](https://www.ovpn.com/en/security)
- [Transparency](https://www.ovpn.com/en/transparency)
- [Simple pricing](https://www.ovpn.com/en/pricing)
- [OVPN Cookie Policy](https://www.ovpn.com/en/cookie-policy)
- [Welche Zahlungsmethoden akzeptieren Sie? (Support)](https://support.ovpn.com/hc/de-de/articles/46236309981843-Welche-Zahlungsmethoden-akzeptieren-Sie)
- [Update der akzeptierten Zahlungsmöglichkeiten (Blog)](https://www.ovpn.com/deupdate-der-akzeptierten-zahlungsmoglichkeiten)
- [Explanation: Collect anonymous usage statistics](https://support.ovpn.com/hc/en-us/articles/46236224489363-Explanation-Collect-anonymous-usage-statistics)
- [Explanation: attach logs & diagnostic data](https://support.ovpn.com/hc/en-us/articles/46236296323603-Explanation-attach-logs-diagnostic-data)
- [Explanation: What is Killswitch?](https://support.ovpn.com/hc/en-us/articles/46236297871891-Explanation-What-is-Killswitch)
- [Explanation: How do I prevent DNS leaks?](https://support.ovpn.com/hc/en-us/articles/46236297806483-Explanation-How-do-I-prevent-DNS-leaks)
- [Explanation: Stealth VPN](https://support.ovpn.com/hc/en-us/articles/46236213370387-Explanation-Stealth-VPN)
- [Desktop: Regenerate every](https://support.ovpn.com/hc/en-us/articles/46236259794323-Desktop-Regenerate-every)
- [Privacy considerations when using Public IPv4](https://support.ovpn.com/hc/en-us/articles/46236220145555-Privacy-considerations-when-using-Public-IPv4)
- [Port forwarding with OVPN](https://www.ovpn.com/enport-forwarding-with-ovpn)
