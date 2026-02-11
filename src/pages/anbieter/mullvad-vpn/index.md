---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Mullvad VPN"
url: "/anbieter/mullvad-vpn/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-19"
robots: "index,follow"
description: "Kurzprofil von Mullvad VPN (Kategorie: VPN)."
provider: ""
name: "Mullvad VPN"
category: "VPN"
website: "https://mullvad.net/"
repo: "https://github.com/mullvad/mullvadvpn-app"
license: "GPL-3.0-only (Client-App; iOS-App im App Store unter Apple App Store EULA)"
policies: ""
privacy: "https://mullvad.net/en/help/privacy-policy"
terms: "https://mullvad.net/en/help/terms-service"
transparency: "https://mullvad.net/en/help/how-we-handle-government-requests-user-data"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "partial"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Schweden (Mullvad VPN AB)"
region: "eu"
logs: "none"
retention: "verylong"
retention_notes: "Keine Aktivitätslogs; Zahlungs-Referenzen typischerweise 20 Tage; Supportfälle 70 Tage; Buchhaltung je nach Pflicht bis 7 Jahre"
retention_max_days: "2555"
data_notes: "Account basiert auf zufälliger Nummer (ohne E-Mail/Passwort). Personenbezogene Daten entstehen vor allem über Zahlungswege (z.B. PayPal/Kreditkarte) oder Support-Kontakt. Es gibt dokumentierte Versions-/Update-Checks über die API (aggregiert), ohne Aktivitätslogging."
features: ""
alternatives: ""
payment_processors: "Stripe (Kreditkarte); PayPal; SEB (Bank/Swish); Apple App Store (iOS In-App); Google Play (In-App)"
sources: ""
---
## Kurzprofil

Mullvad VPN ist ein Anbieter aus der Kategorie **VPN**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du ein VPN mit nummeriertem Account ohne E-Mail/Passwort nutzen willst und Zahlungs-/Kontakt-Metadaten bewusst steuern möchtest.
- **Weniger geeignet wenn:** du zwingend OpenVPN brauchst (Support wird laut Anbieter am **15.01.2026** entfernt) oder ein kostenloses Angebot erwartest.
- **Wichtigster Abwägung:** weniger Kontobindung ist möglich (Account-Nummer), aber Zahlungswege und App-Distribution (z.B. App Store/Google Play) können Metadaten erzeugen.

## Sofortmaßnahmen
- **Lockdown mode aktivieren:** reduziert das Risiko von Leaks, wenn du trennst/neu verbindest (Abwägung: Internet ist dann ohne VPN blockiert).
- **Bezahlmethode bewusst wählen:** Kreditkarte/PayPal sind bequem, aber erzeugen Zahlungsmetadaten bei Zahlungsdienstleistern.
- **Bei Supportfällen Logs lokal prüfen:** „Report a problem“ ist hilfreich, kann aber Diagnosedaten übertragen (Abwägung: Supportfähigkeit vs. Metadaten).

## Entscheidungshilfe
- Wenn du **kein E-Mail-Login** willst, dann nutze den nummerierten Account und sichere die Account-Nummer offline (Abwägung: Recovery hängt an Account-Nummer/Payment-Fenster).
- Wenn du mit **Kreditkarte/PayPal** zahlst, dann plane Zahlungsmetadaten bei **Stripe/PayPal** ein (Abwägung: Komfort vs. Linkbarkeit).
- Wenn du **in restriktiven Netzen** bist, dann nutze Obfuscation/Bridges (z.B. Shadowsocks/Bridge mode) (Abwägung: mehr Komplexität, ggf. mehr Latenz).
- Wenn du **Traffic-Korrelation erschweren** willst, dann aktiviere Multihop (Abwägung: Geschwindigkeit/Latenz können schlechter werden).
- Wenn du **„store telemetry“ minimieren** willst, dann prüfe Installationswege (z.B. nicht über In-App-Kauf) (Abwägung: Updates/Abrechnung weniger bequem).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Mullvad VPN |
| Kategorie | VPN |
| Website | https://mullvad.net/ |
| Quellcode | https://github.com/mullvad/mullvadvpn-app |
| Lizenz | GPL-3.0-only (Client-App; iOS-App im App Store unter Apple App Store EULA) |
| Preismodell | paid |
| Free Tier | no |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Stripe (Kreditkarte); PayPal; SEB (Bank/Swish); Apple App Store (iOS In-App); Google Play (In-App) |
| Jurisdiktion | Schweden (Mullvad VPN AB) |
| Logs | none |
| Retention | Keine Aktivitätslogs; Zahlungs-Referenzen typischerweise 20 Tage; Supportfälle 70 Tage; Buchhaltung je nach Pflicht bis 7 Jahre |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://mullvad.net/en/help/privacy-policy
- AGB/Terms: https://mullvad.net/en/help/terms-service
- Transparency Report: https://mullvad.net/en/help/how-we-handle-government-requests-user-data
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- [App-Security-Audit 2024 (X41 D-Sec) – Bericht](https://mullvad.net/enthe-report-for-the-2024-security-audit-of-the-app-is-now-available)
- [Infrastructure-Audit 2024 (Cure53) – Blogpost](https://mullvad.net/enfourth-infrastructure-audit-completed-by-cure53)
- [Web-App-Audit 2025 (Assured) – Blogpost](https://mullvad.net/enindependent-security-audit-of-our-web-app-completed-by-assured)

**Daten-Notizen (kurz):**
Account basiert auf zufälliger Nummer (ohne E-Mail/Passwort). Personenbezogene Daten entstehen vor allem über Zahlungswege (z.B. PayPal/Kreditkarte) oder Support-Kontakt. Es gibt dokumentierte Versions-/Update-Checks über die API (aggregiert), ohne Aktivitätslogging.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Account-Nummer/Account-Zeit; je nach Nutzung z.B. Zahlungsdaten (Kreditkarte/PayPal/Bank), Support-E-Mails, Problemberichte/Logs (optional), sowie technische API-Anfragen für Version/Update-Checks.
- **Wofür:** Betrieb/Abrechnung (inkl. gesetzlicher Buchhaltung), Support, Funktionsbetrieb (z.B. Serverliste/Version Checks).
- **Weitergabe/Subprozessoren:** Zahlungsdienstleister werden genannt (u.a. Stripe, PayPal, SEB) sowie App-Store/Play-Store bei In-App-Käufen; weitere Empfänger je nach Kontext (z.B. Support-Kommunikation).
- **Drittlandtransfer:** Laut Privacy Policy wird Verarbeitung primär im EU/EWR-Kontext beschrieben; Details hängen vom konkreten Dienst ab.
- **Zahlungsabwicklung/Payment Processor:** Stripe (Kreditkarte), PayPal, SEB (Bank/Swish), Apple App Store, Google Play.
- **Kontakt/DSAR/DPA:** Datenschutzanfragen laufen laut Privacy Policy über Mullvad (Kontaktweg in der Policy).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut No-logging-Policy keine Analytics/Tracking im Sinne von Nutzeraktivitäts-Profiling; es gibt dokumentierte API-Kommunikation für Versions-/Update-Checks (z.B. App-/OS-Version, aggregierte Zähler).
- **Abschaltbar?** Nicht angegeben (Problemberichte sind optional; Versionschecks sind Bestandteil des Betriebs laut Policy).
- **Wo (Menüpfad):**
  - Desktop: **Settings → Report a problem → View app logs** (Logs ansehen, bevor du sendest).
  - Android (System): **Always-on VPN / Block connections without VPN** (entspricht Auto-connect/Lockdown-Konzept laut Mullvad-Doku).

**Logs & Retention:**
- **Logging-Level:** none (kein Aktivitätslogging laut Anbieter); lokale Logdateien existieren zur Diagnose.
- **Aufbewahrung:** Zahlungs-Referenzen typischerweise 20 Tage; Supportfälle 70 Tage; Buchhaltung je nach Pflicht bis 7 Jahre.
- **Lösch-/Opt-out-Optionen:** Problemberichte sind optional; Account-Löschung erfolgt laut Hilfe per Anfrage an den Support.

**Abwägung am Punkt:** Weniger Telemetrie reduziert Metadaten, kann aber Fehlersuche/Support (und schnelle Problemlösung) erschweren.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** VPN-Tunnel via WireGuard; zusätzliche Option „Quantum-resistant tunnel“ (WireGuard-Einstellung).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (für VPN-Accountmodell ohne Passwort typischerweise nicht relevant).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben (Account-Login erfolgt über Account-Nummer, ohne klassisches Passwort-Login).
- **Recovery/Account-Wiederherstellung:** Account-Recovery ist laut Doku möglich, wenn eine Website-Zahlung „kürzlich (unter 20 Tagen)“ erfolgt ist; bei Google-Play-Käufen laut Android-Guide keine Recovery über Mullvad.
- **Vuln-Handling / Security-Kontakt:** Meldung von Bugs/Vulnerabilities ist über die offizielle Anleitung möglich (inkl. Kontaktweg und bevorzugtem Inhalt der Meldung).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Lockdown mode aktivieren** (Leak-Schutz auch bei Disconnect/Quit).  
   **Menüpfad:** Settings → VPN settings → Lockdown mode  
   **Prüfen:** App zeigt aktiv an, dass Internet im „Disconnected“-Zustand blockiert ist.
2) **Auto-connect aktivieren** (insbesondere auf Mobilgeräten).  
   **Android-Prüfen:** System-VPN-Einstellungen „Always-on VPN“ + „Block connections without VPN“ aktiv.
3) **Problemberichte bewusst nutzen** (Logs vorher ansehen).  
   **Menüpfad:** Settings → Report a problem → View app logs  
   **Prüfen:** nur senden, wenn nötig; sensiblen Inhalt vorher prüfen.

**Stolpersteine:**
- Lockdown mode blockiert Internet ohne VPN komplett (Abwägung: Leak-Schutz vs. „kein Internet“, wenn Mullvad nicht verbindet).
- OpenVPN wird laut Anbieter am **15.01.2026** entfernt (Abwägung: Legacy-Kompatibilität vs. Fokus auf WireGuard).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze Zahlungswege mit weniger Identitätsbindung (Abwägung: weniger Komfort, ggf. keine Refunds bei Cash).
- Vermeide Support-Kommunikation mit personenbezogenen Daten; wenn nötig: PGP nutzen (Abwägung: Aufwand).
- Nutze Multihop nur für ausgewählte Situationen (Abwägung: zusätzliche Latenz).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Aktiviere „Quantum-resistant tunnel“ in den WireGuard-Einstellungen (Abwägung: zusätzlicher Overhead/Komplexität).
- Nutze Obfuscation/Bridges (z.B. Shadowsocks/Bridge mode) in restriktiven Netzen (Abwägung: Verbindung kann instabiler oder langsamer sein).
- Trenne Nutzungskontexte (separate Geräte/VM/Profiles) und vermeide In-App-Käufe über Stores (Abwägung: Wartung/Updates aufwendiger).

</details>

## Features
- WireGuard als Standard; OpenVPN wird laut Anbieter ab 15.01.2026 vollständig entfernt.
- Kill Switch (integriert) + optionaler Lockdown mode (blockt Internet auch im „Disconnected“-Zustand).
- Multihop (Entry/Exit trennen) inkl. SOCKS5-Proxy-Optionen.
- Obfuscation/Bridges (z.B. Shadowsocks/Bridge mode) für restriktive Netze.
- Quantum-resistant tunnel (WireGuard-Option) für Post-Quantum-Key-Exchange.

## Alternativen
- Mozilla VPN (VPN; anderer Account-/Ökosystem-Fokus – Details beim Anbieter prüfen).
- Proton VPN (VPN; anderes Konto-/Produkt-Bundle – Details beim Anbieter prüfen).
- IVPN (VPN; anderer Schwerpunkt bei Konto/Payment – Details beim Anbieter prüfen).

## Nicht gelöst / offene Punkte
- Öffentliche, vollständige Subprozessorenliste für alle Betriebsbereiche (über Payment hinaus) ist nicht als zentrale Liste dokumentiert.

## Quellen

- [App-Security-Audit 2024 (X41 D-Sec) – Bericht](https://mullvad.net/enthe-report-for-the-2024-security-audit-of-the-app-is-now-available)
- [Infrastructure-Audit 2024 (Cure53) – Blogpost](https://mullvad.net/enfourth-infrastructure-audit-completed-by-cure53)
- [Web-App-Audit 2025 (Assured) – Blogpost](https://mullvad.net/enindependent-security-audit-of-our-web-app-completed-by-assured)
- [Privacy Policy](https://mullvad.net/en/help/privacy-policy)
- [No-logging of user activity policy](https://mullvad.net/en/help/no-logging-data-policy)
- [Terms of service](https://mullvad.net/en/help/terms-service)
- [We value open source](https://mullvad.net/en/open-source)
- [Using the Mullvad VPN app](https://mullvad.net/en/help/using-mullvad-vpn-app)
- [Removing OpenVPN 15th January 2026](https://mullvad.net/enremoving-openvpn-15th-january-2026)
- [Multihop with WireGuard](https://mullvad.net/en/help/multihop-wireguard)
- [Quantum-resistant tunnels with WireGuard](https://mullvad.net/en/help/quantum-resistant-tunnels-with-wireguard)
- [How to report a bug or vulnerability](https://mullvad.net/en/help/how-report-bug-or-vulnerability)
- [Pricing](https://mullvad.net/en/pricing)
- [Privacy Policy](https://mullvad.net/en/help/privacy-policy)
- [No-logging of user activity policy](https://mullvad.net/en/help/no-logging-data-policy)
- [Terms of service](https://mullvad.net/en/help/terms-service)
- [We value open source](https://mullvad.net/en/open-source)
- [Using the Mullvad VPN app](https://mullvad.net/en/help/using-mullvad-vpn-app)
- [Removing OpenVPN 15th January 2026](https://mullvad.net/enremoving-openvpn-15th-january-2026)
- [Multihop with WireGuard](https://mullvad.net/en/help/multihop-wireguard)
- [Quantum-resistant tunnels with WireGuard](https://mullvad.net/en/help/quantum-resistant-tunnels-with-wireguard)
- [How to report a bug or vulnerability](https://mullvad.net/en/help/how-report-bug-or-vulnerability)
- [Pricing](https://mullvad.net/en/pricing)
