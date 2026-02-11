---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / PrivadoVPN"
url: "/anbieter/privadovpn/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von PrivadoVPN (Kategorie: VPN)."
provider: ""
name: "PrivadoVPN"
category: "VPN"
website: "https://privadovpn.com/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://privadovpn.com/privacy-policy/"
terms: "https://privadovpn.com/terms-of-service/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "unknown"
self_host_possible: "no"
account_required: "yes"
phone_required: "no"
kyc_required: "unknown"
jurisdiction: "Schweiz (Zug)"
region: "ch"
logs: "minimal"
retention: "unknown"
retention_notes: "Nicht angegeben („as long as necessary“)"
data_notes: "Konto via E-Mail + Username; Zahlung über Drittanbieter; Website-Cookies/Analytics (u.a. Google); App-Diagnose via selbst gehostetem Sentry; Bandbreitenmessung; optional: Control Tower (Smart DNS) mit IP-Registrierung."
features: ""
alternatives: ""
payment_processors: "Nicht angegeben (Third-party PCI DSS-compliant vendor)"
sources: ""
---
## Kurzprofil

PrivadoVPN ist ein Anbieter aus der Kategorie **VPN**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen VPN-Dienst mit Freemium-Option (begrenztes Datenvolumen) oder Abo-Modell nutzen willst und mit Konto via E-Mail/Username leben kannst.
- **Weniger geeignet wenn:** du möglichst wenig Anbieter-Metadaten willst (z.B. ohne Website-Analytics/Cookies oder ohne App-Diagnosedaten/Crash-Reporting).
- **Wichtigster Abwägung:** Komfort-Features (App, Support, „Control Tower“/Smart DNS, Freemium) vs. zusätzliche Metadaten (Konto, Zahlungsfluss über Drittanbieter, Website-Cookies/Analytics, App-Diagnose/Marketing-IDs).

## Sofortmaßnahmen
- **Kill Switch aktivieren:** reduziert Risiko von IP-Leaks bei Verbindungsabbrüchen (Abwägung: bei VPN-Ausfall ggf. kompletter Internet-Block bis Reconnect).
- **Freemium-Limit im Blick behalten:** nach 10 GB/30 Tage wird auf **1 Mbps** gedrosselt (Abwägung: planbar, aber spürbare Einschränkung nach Verbrauch).
- **Mobile Tracking-IDs begrenzen:** iOS/Android erlauben Reset/Opt-out von Werbe-IDs (Abwägung: kann Attribution/Partner-Statistiken beeinträchtigen).

## Entscheidungshilfe
- Wenn du **ohne Zahlungsdaten** starten willst, dann nutze den **Freemium-Plan** (Abwägung: 10 GB pro 30 Tage + danach Drossel).
- Wenn du **mehr Datenvolumen/mehr Geräte** brauchst, dann nutze **Premium** (Abwägung: Zahlung über Drittanbieter; je nach Zahlungsmethode mehr Abrechnungsdaten).
- Wenn du **App-basiertes Risiko bei Verbindungsabbrüchen** minimieren willst, dann aktiviere den **Kill Switch** (Abwägung: kurzfristig kein Internetzugang bei VPN-Ausfall).
- Wenn du **DNS-Regeln/Smart-DNS** nutzen willst, dann prüfe „Control Tower“ (Abwägung: je nach Nutzung ggf. IP-Registrierung im Web-Portal).
- Wenn du **Einrichtung ohne PrivadoVPN-App** brauchst (z.B. Router/Firewall), dann nutze die **manuelle OpenVPN/WireGuard-Konfiguration (Premium)** (Abwägung: mehr Konfigurationsaufwand/Fehlerquellen).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | PrivadoVPN |
| Kategorie | VPN |
| Website | https://privadovpn.com/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | unknown |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Nicht angegeben (Third-party PCI DSS-compliant vendor) |
| Jurisdiktion | Schweiz (Zug) |
| Logs | minimal |
| Retention | Nicht angegeben („as long as necessary“) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://privadovpn.com/privacy-policy/
- AGB/Terms: https://privadovpn.com/terms-of-service/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Konto via E-Mail + Username; Zahlung über Drittanbieter; Website-Cookies/Analytics (u.a. Google); App-Diagnose via selbst gehostetem Sentry; Bandbreitenmessung; optional: Control Tower (Smart DNS) mit IP-Registrierung.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**
  - Konto: **E-Mail-Adresse + Username**.
  - Payment: über **Drittanbieter-Zahlungsabwickler**; Kreditkartendaten werden laut Anbieter **nicht** von PrivadoVPN gespeichert.
  - Support: Inhalte, die du an den Support sendest; ggf. Nutzung von Drittparteien für Support-Reporting.
  - Apps: App-Version(en) für Troubleshooting; anonyme, aggregierte Nutzungsstatistiken (z.B. Install/Uninstall/Active Users).
  - Crash/Diagnose: **self-hosted Sentry** für Crash-Reports.
  - Mobile Identifiers (iOS/Android): für Marketing-/Channel-Partner-Statistiken; laut Anbieter reset-/deaktivierbar.
  - Android (TrustedNetwork): Standortberechtigung zur Erkennung des WLAN-SSID; laut Anbieter **nur lokal gespeichert, nicht übertragen**.
  - Website: Cookies/Pixel/ähnliche Technologien; Analytics-Provider „wie Google“ setzen Cookies.
  - Bandbreite: Messung der genutzten Bandbreite (Summe nicht zur Verhaltensanalyse laut Anbieter).
  - Control Tower (Smart DNS): kann **IP-Registrierung** erfordern (Web), um Regeln auf Profil zu mappen.
- **Wofür:** Betrieb/Verbesserung der Services, Transaktionen, Support-Kommunikation, Kapazitätsplanung/Trend-Analyse, Betrugsprävention/Legal Compliance, Marketing-Kommunikation (Opt-out möglich).
- **Weitergabe/Subprozessoren:** Drittanbieter für Payment; ggf. Drittanbieter für Support-Reporting; Website-Analytics-Provider via Cookies (keine öffentliche, vollständige Subprozessorenliste im Policy-Text).
- **Drittlandtransfer:** mögliche Transfers außerhalb Schweiz/EEA mit Maßnahmen wie Standardvertragsklauseln.
- **Zahlungsabwicklung/Payment Processor:** Drittanbieter (Name nicht genannt).
- **Kontakt/DSAR/DPA:** support@privadovpn.com; laut Anbieter kannst du Daten direkt im Service einsehen/löschen/exportieren oder per E-Mail anfragen.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?**
  - Website: Cookies/Analytics (u.a. Google) laut Privacy Policy.
  - Apps: Crash-Reports via selbst gehostetem Sentry; anonyme, aggregierte App-Statistiken.
  - Mobile Identifier: Marketing-/Partner-Statistiken (iOS/Android).
- **Abschaltbar?**
  - Mobile Identifier: laut Anbieter reset-/deaktivierbar über iOS/Android.
  - Website-Analytics: Opt-out über Browser-Add-on für Google Analytics (laut Privacy Policy).
  - App-Crash/Diagnose-Schalter: Nicht angegeben.
- **Wo (Menüpfad):**
  - iOS: *Einstellungen → Datenschutz & Sicherheit → Tracking* (App Tracking deaktivieren).
  - Android: je nach Version *Einstellungen → Datenschutz → Werbung* (Werbe-ID zurücksetzen/Opt-out).

**Logs & Retention:**
- **Logging-Level:** minimal (keine VPN-Traffic-Logs laut Anbieter; Diagnose/Crash/Website-Analytics können Metadaten erzeugen)
- **Aufbewahrung:** Nicht angegeben („as long as necessary“)
- **Lösch-/Opt-out-Optionen:** Datenzugriff/-löschung/-export laut Privacy Policy direkt im Service oder via support@privadovpn.com; Marketing-E-Mails per Opt-out-Link oder per E-Mail abbestellbar.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** PrivadoVPN nennt „Encrypt all data over the PrivadoVPN connections“; Kill-Switch-Seite nennt 256-bit AES für VPN-Verschlüsselung (Implementierungsdetails je Protokoll nicht vollständig aufgeschlüsselt).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben.
- **Recovery/Account-Wiederherstellung:** Passwort-Reset via „forgot-password“-Flow (Support nennt: Username ist nicht änderbar; Passwort kann neu generiert werden).
- **Vuln-Handling / Security-Kontakt:** Bug-Reports per E-Mail an help@privadovpn.com; allgemeiner Kontakt/Privacy: support@privadovpn.com.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Account-Zugang absichern** (Password Manager + einzigartiges Passwort/Reset-Flow nutzen).  
   **Prüfen:** Login funktioniert, Passwort ist nicht wiederverwendet.
2) **Kill Switch aktivieren** (Toggle auf dem Startscreen in der App).  
   **Prüfen:** Kill Switch „an“; Test: VPN trennen → Traffic wird blockiert bis Reconnect.
3) **Freemium-Quota beachten** (10 GB/30 Tage; danach 1 Mbps bis Renewal).  
   **Prüfen:** In der Admin-Area „Refresh My Data“ sichtbar/bedienbar (Freemium).

**Stolpersteine:**
- **Freemium nach Verbrauch gedrosselt:** nach Quota läuft Traffic weiter, aber deutlich langsamer (Abwägung: Weiterbetrieb vs. Performance).
- **Control Tower (Smart DNS):** kann IP-Registrierung erfordern, wenn du es über die Website einrichtest (Abwägung: Funktionalität vs. IP-Handle im Profil).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze Funktionen, die **keine zusätzlichen Identitätsdaten** erfordern (z.B. erst Freemium testen, bevor Zahlungsdaten fließen).
- Verzichte auf **Control Tower** (Smart DNS) wenn du keine IP-Registrierung im Kundenportal möchtest.
- Android: **TrustedNetwork nur aktivieren**, wenn du es wirklich brauchst (Abwägung: Komfort bei WLAN-Wechsel vs. Standortberechtigung auf dem Gerät).

**Abwägung:** weniger Metadaten/Features, ggf. weniger Komfort.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze **manuelle Konfigurationen (Premium)** für OpenVPN/WireGuard über eigene Clients/Router/Firewall (Abwägung: Einrichtung-Aufwand, Debugging komplexer).
- Bei restriktiven Netzen: OpenVPN-Varianten/Ports/Scramble aus der manuellen Konfiguration prüfen (Abwägung: mehr Tuning, ggf. geringere Performance).
- Trenne VPN-Nutzung strikt nach Kontext (z.B. separates OS-Profil für VPN-Workflows) (Abwägung: deutlich mehr Aufwand).

**Abwägung:** höhere Komplexität, mehr Fehlerrisiko im Einrichtung.

</details>

## Features
- VPN-Protokolle: OpenVPN (UDP/TCP/Scramble/DCO), WireGuard, IKEv2
- Kill Switch (in App per Toggle auf dem Startscreen)
- Split-Tunneling (app-basiert)
- Freemium: 10 GB / 30 Tage, danach 1 Mbps Drossel bis Renewal
- Premium: unbegrenztes Datenvolumen + manuelle OpenVPN/WireGuard-Konfigurationen
- Control Tower (Smart DNS) inkl. DNS-Regeln; optional IP-Registrierung erforderlich (Web) oder via Client ohne IP-Registrierung

## Alternativen
- Mullvad VPN (ähnliche Kategorie; Abwägung: anderes Konto-/Zahlungsmodell)
- Proton VPN (ähnliche Kategorie; Abwägung: anderes Konto-/Ökosystem)
- IVPN (ähnliche Kategorie; Abwägung: anderes Preis-/Plankonzept)
- Windscribe (ähnliche Kategorie; Abwägung: anderes Feature-Set/Account-Modell)

## Nicht gelöst / offene Punkte
- Keine öffentliche Subprozessoren-/DPA-Liste gefunden.
- Unklar, ob PrivadoVPN 2FA/Passkeys unterstützt.

## Quellen

- VPN-Protokolle: "OpenVPN (UDP/TCP/Scramble/DCO), WireGuard, IKEv2
- Freemium: "10 GB / 30 Tage, danach 1 Mbps Drossel bis Renewal
- Premium: "unbegrenztes Datenvolumen + manuelle OpenVPN/WireGuard-Konfigurationen
- Mullvad VPN (ähnliche Kategorie; Trade-off: "anderes Konto-/Zahlungsmodell)
- Proton VPN (ähnliche Kategorie; Trade-off: "anderes Konto-/Ökosystem)
- IVPN (ähnliche Kategorie; Trade-off: "anderes Preis-/Plankonzept)
- Windscribe (ähnliche Kategorie; Trade-off: "anderes Feature-Set/Account-Modell)
- [PrivadoVPN Privacy Policy](https://privadovpn.com/privacy-policy/)
- [PrivadoVPN Terms of Service](https://privadovpn.com/terms-of-service/)
- [Cookie Policy](https://privadovpn.com/cookie-policy/)
- [Imprint](https://privadovpn.com/imprint/)
- [Support: "How to generate a Wireguard or OpenVPN configuration file for manual setups](https://support.privadovpn.com/kb/article/1130-how-to-generate-a-wireguard-or-openvpn-configuration-file-for-manual-setups/)
- [VPN Kill Switch (Feature-Seite)](https://privadovpn.com/features/kill-switch/)
- [PrivadoVPN Privacy Policy](https://privadovpn.com/privacy-policy/)
- [PrivadoVPN Terms of Service](https://privadovpn.com/terms-of-service/)
- [Cookie Policy](https://privadovpn.com/cookie-policy/)
- [Imprint](https://privadovpn.com/imprint/)
- [Support: Is PrivadoVPN a no log VPN?](https://support.privadovpn.com/kb/article/346-is-privadovpn-a-no-log-vpn/)
- [Support: Who is handling your payments? Do you store my card data?](https://support.privadovpn.com/kb/article/146-who-is-handling-your-payments-do-you-store-my-card-data/)
- [Support: What is the difference between the free and paid VPN plans?](https://support.privadovpn.com/kb/article/875-what-is-the-difference-between-the-free-and-paid-vpn-plans/)
- [Support: How to generate a Wireguard or OpenVPN configuration file for manual Einrichtungen](https://support.privadovpn.com/kb/article/1130-how-to-generate-a-wireguard-or-openvpn-configuration-file-for-manual-Einrichtungen/)
- [VPN Kill Switch (Feature-Seite)](https://privadovpn.com/features/kill-switch/)
