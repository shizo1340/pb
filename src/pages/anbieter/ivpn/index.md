---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / IVPN"
url: "/anbieter/ivpn/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-17"
robots: "index,follow"
description: "Kurzprofil von IVPN (Kategorie: VPN)."
provider: ""
name: "IVPN"
category: "VPN"
website: "https://www.ivpn.net/"
repo: "https://github.com/ivpn"
license: "GPL-3.0 (Apps/Client-Code; siehe GitHub-Repos)"
policies: ""
privacy: "https://www.ivpn.net/en/privacy/"
terms: "https://www.ivpn.net/en/tos/"
transparency: "https://www.ivpn.net/en/transparency-report/"
warrant_canary: "https://www.ivpn.net/resources/canary.txt"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "partial"
self_host_possible: "no"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Gibraltar"
region: "other"
logs: "minimal"
retention: "specified"
retention_notes: "90d (Kontodaten nach Ende), Voucher-Code 30d; gleichzeitige Sessions nur während aktiver Verbindung"
data_notes: "Signup ohne Pflichtdaten (E-Mail optional). Website-Analytics via selbst gehostetem Matomo (IP gekürzt), Crash-Logs: mobil standardmäßig (Opt-out), Desktop nur manuell."
features: ""
alternatives: ""
payment_processors: "Braintree (Karte), PayPal, BTCPay (Bitcoin; selbst betrieben), Kryptowährung/Cash/Voucher, In-App Payments (Apple/Google)"
sources: ""
---
## Kurzprofil

IVPN ist ein Anbieter aus der Kategorie **VPN**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du ein VPN mit **Konto ohne Pflichtdaten** (E-Mail optional) möchtest und Wert auf **offene Client-Apps** + nachvollziehbare Datenschutz-Angaben legst.
- **Weniger geeignet wenn:** du für Abrechnung/Recovery zwingend **klassische Konto-Identität** (E-Mail/Passwort-Reset) brauchst oder jede Form von **Crash-/Diagnosedaten** strikt vermeiden willst.
- **Wichtigster Abwägung:** **Weniger Identitätsdaten** beim Konto bedeutet oft **weniger Komfort bei Support/Recovery** (z.B. ohne E-Mail keine proaktive Kontaktaufnahme möglich).

## Sofortmaßnahmen
- **IVPN Firewall (Kill Switch) aktivieren:** reduziert Leak-Risiko bei Verbindungsabbrüchen.
- **2FA im Kundenbereich einschalten:** erschwert Account-Missbrauch bei kompromittierter Account-ID.
- **Mobile Crash-Log-Reporting deaktivieren (Opt-out):** reduziert Diagnosedaten bei App-Abstürzen.

## Entscheidungshilfe
- Wenn du **möglichst wenig Identitätsdaten** binden willst, dann registriere mit **Account-ID ohne E-Mail** (Abwägung: weniger Komfort bei Kontakt/Recovery).
- Wenn du **Zahlungs-Metadaten** minimieren willst, dann nutze **Cash/Krypto/Voucher** statt PayPal/Karte (Abwägung: weniger Komfort bei Abos/Auto-Renew).
- Wenn du **Leak-Schutz** priorisierst, dann aktiviere die **IVPN Firewall** und teste Disconnect-Szenarien (Abwägung: lokale Geräte/Netze sind ggf. blockiert, bis du LAN-Ausnahmen setzt).
- Wenn du **gezielt einzelne Apps außerhalb des Tunnels** brauchst, dann nutze **Split-Tunneling** (Abwägung: das ist ein bewusstes Bypass/„Intentional Leak“-Verhalten).
- Wenn du **Support-Triage** willst, dann aktiviere **Diagnose-Logs nur temporär** und sende sie manuell (Abwägung: zusätzliche lokale/übermittelte Diagnosedaten).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | IVPN |
| Kategorie | VPN |
| Website | https://www.ivpn.net/ |
| Quellcode | https://github.com/ivpn |
| Lizenz | GPL-3.0 (Apps/Client-Code; siehe GitHub-Repos) |
| Preismodell | paid |
| Free Tier | no |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Braintree (Karte), PayPal, BTCPay (Bitcoin; selbst betrieben), Kryptowährung/Cash/Voucher, In-App Payments (Apple/Google) |
| Jurisdiktion | Gibraltar |
| Logs | minimal |
| Retention | 90d (Kontodaten nach Ende), Voucher-Code 30d; gleichzeitige Sessions nur während aktiver Verbindung |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.ivpn.net/en/privacy/
- AGB/Terms: https://www.ivpn.net/en/tos/
- Transparency Report: https://www.ivpn.net/en/transparency-report/
- Warrant Canary: https://www.ivpn.net/resources/canary.txt

**Audits (laut Anbieter):**
- Cure53 No-Logging Audit (03/2019): https://www.ivpn.net/ivpn-no-logging-claim-verified-by-independent-audit/
- Cure53 Apps Security Audit (02–03/2022): https://www.ivpn.net/ivpn-apps-security-audit-2022-concluded/
- Cure53 Web Infrastructure Audit (04/2024): https://www.ivpn.net/ivpn-sixth-security-audit-concluded/

**Daten-Notizen (kurz):**
Signup ohne Pflichtdaten (E-Mail optional). Website-Analytics via selbst gehostetem Matomo (IP gekürzt), Crash-Logs: mobil standardmäßig (Opt-out), Desktop nur manuell.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Account-ID + Erstellzeit + Produkt + Device-Limit; Zahlungsdaten (z.B. Betrag/Währung/Zeitpunkt/Transaktions-ID); Website-Analytics (Matomo: User-Agent/Sprache/Referrer/gekürzte IP); optional Crash-Logs und optionales Device-Management.
- **Wofür:** Betrieb/Authentifizierung (Device-/Simultan-Limits), Abrechnung/Refunds, Website-Verbesserung (aggregiert), Crash-Analyse.
- **Weitergabe/Subprozessoren:** Payment über **Braintree/PayPal**; In-App Payments über **Apple/Google** (laut Help/Policy). Crash-Logs laut Policy an IVPN-eigene Server (keine Drittanbieter-Cloud für Crash-Logs).
- **Drittlandtransfer:** IVPN gibt an, **EU-Recht/GDPR-konform** zu arbeiten und Daten nicht in Jurisdiktionen mit schwächeren Regeln zu verlagern (Details/Listen nicht als eigene Subprozessoren-Seite aufgeführt).
- **Zahlungsabwicklung/Payment Processor:** Braintree (Karte), PayPal; BTCPay (selbst betrieben) für Bitcoin; weitere Methoden: Cash/Krypto/Voucher; ggf. In-App Billing.
- **Kontakt/DSAR/DPA:** DSAR laut Privacy Policy per **sar@ivpn.net**.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Website: Matomo-Analytics (self-hosted, IP gekürzt). Apps: keine dauerhafte „Analytics“-Telemetrie genannt; Crash-Logs können anfallen (siehe unten).
- **Abschaltbar?** Mobile Apps: Crash-Log-Reporting laut Privacy Policy per Opt-out in den „user preferences“. Desktop: Crash-Logs werden nur gesendet, wenn Nutzer:in manuell bestätigt.
- **Wo (Menüpfad):** Desktop: Diagnose-Logs/Support-Logs werden laut Help-Center über die App/CLI manuell erstellt und übermittelt (nicht automatisch). Mobile: Opt-out in App-Preferences (genaue Bezeichnung je OS).

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** 90d (Kontodaten nach Ende), Voucher-Code 30d; Session-/Simultan-Records werden beim Logout/Disconnect gelöscht (laut Privacy Policy).
- **Lösch-/Opt-out-Optionen:** Account-Löschung laut Privacy Policy über „delete account“ im Client Area; Crash-Logs (mobil) Opt-out.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** VPN-Verbindungen laut IVPN („Signals of Trustworthiness“) u.a. mit OpenVPN (RSA-4096/AES-256-GCM); außerdem WireGuard wird angeboten (Details je Protokoll in Docs/Help).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA wird laut Help Center angeboten (Account/Client Area).
- **Recovery/Account-Wiederherstellung:** Account basiert auf Account-ID; E-Mail ist optional (Abwägung: ohne E-Mail keine proaktive Kontaktaufnahme durch IVPN).
- **Vuln-Handling / Security-Kontakt:** Vulnerability Reporting per **security@ivpn.net** inkl. PGP-Key auf offizieller Seite.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (2FA), falls angeboten.  
   **Prüfen:** Client Area zeigt 2FA als „enabled“.
2) **IVPN Firewall (Kill Switch) aktivieren** (Desktop).  
   **Prüfen:** Disconnect-Test → kein Traffic außerhalb des Tunnels.
3) **Autoconnect aktivieren** (Desktop) für konsistenten Schutz.  
   **Prüfen:** App verbindet beim Start automatisch (Settings → General → Autoconnect).

**Stolpersteine:**
- Firewall/Kill-Switch blockiert oft **LAN/Multicast** standardmäßig; für Drucker/Local-Services ggf. `Settings > IVPN Firewall` → „Allow LAN traffic“ / „Allow Multicast“.

<details>
<summary>Profil B (Datensparsam)</summary>

- Registriere ohne E-Mail (Account-ID-only) und füge keine optionalen Identitätsdaten hinzu.
- Nutze Cash/Krypto/Voucher statt PayPal/Karte, wenn Zahlungsmetadaten relevant sind.
- Wenn möglich: Mobile Crash-Log-Reporting in den App-Preferences deaktivieren.
**Abwägung:** weniger Komfort bei Abos/Payment-Support und ggf. weniger bequeme Kontakt-/Recovery-Wege.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze getrennte Profile/VMs für VPN-Nutzung vs. „Real Identity“-Logins (Browser/OS-seitig).
- Vermeide Split-Tunneling (bewusstes Bypass-Verhalten) und teste Leak-Szenarien (DNS/WebRTC) regelmäßig.
- Für „need-to-know“-Support: Diagnose-Logs nur für den konkreten Fall erzeugen und anschließend entfernen.
**Abwägung:** deutlich weniger Komfort, mehr Test-/Betriebsaufwand.

</details>

## Features
- WireGuard & OpenVPN (Apps + manuelle Einrichtungen)
- Kill Switch / „IVPN Firewall“ (Desktop-Apps)
- Multi-hop (Entry/Exit-Auswahl)
- AntiTracker / DNS-Blocking (in der App)
- Split-Tunneling (App-basiert, bewusstes Bypass-Verhalten)
- SOCKS5-Proxy-Service (nur bei aktiver VPN-Verbindung)
- Autoconnect & „Trusted Networks/Wi-Fi Control“

## Alternativen
- Mullvad VPN (VPN; anderer Abwägung: Konto-/Zahlungsmodell, Fokus auf Minimaldaten)
- Proton VPN (VPN; anderer Abwägung: Konto-Ökosystem + Free-Plan möglich)
- AirVPN (VPN; anderer Abwägung: sehr viele Tech-Optionen, mehr Komplexität)

## Nicht gelöst / offene Punkte
- Öffentliche Subprozessoren-/DPA-Liste als separate Seite nicht gefunden (außer Payment-Processor-Nennung in Privacy Policy).
- In-App-„Crash log reporting“-Schalter ist laut Privacy Policy vorhanden (mobil), aber Menübezeichnung variiert je OS/Version.

## Quellen

- Cure53 No-Logging Audit (03/2019): "https://www.ivpn.net/ivpn-no-logging-claim-verified-by-independent-audit/
- Cure53 Apps Security Audit (02–03/2022): "https://www.ivpn.net/ivpn-apps-security-audit-2022-concluded/
- Cure53 Web Infrastructure Audit (04/2024): "https://www.ivpn.net/ivpn-sixth-security-audit-concluded/
- Mullvad VPN (VPN; anderer Trade-off: "Konto-/Zahlungsmodell, Fokus auf Minimaldaten)
- Proton VPN (VPN; anderer Trade-off: "Konto-Ökosystem + Free-Plan möglich)
- AirVPN (VPN; anderer Trade-off: "sehr viele Tech-Optionen, mehr Komplexität)
- https://www.ivpn.net/knowledgebase/general/how-to-verify-warrant-canary-signature/
- [IVPN Privacy Policy](https://www.ivpn.net/en/privacy/)
- [IVPN Terms of Service](https://www.ivpn.net/en/tos/)
- [Transparency Report](https://www.ivpn.net/en/transparency-report/)
- [Signals of Trustworthiness](https://www.ivpn.net/trust/)
- [Security & Vulnerability Reporting](https://www.ivpn.net/en/vulnerability-reporting/)
- [What payment methods do you accept?](https://www.ivpn.net/knowledgebase/billing/what-payment-methods-do-you-accept/)
- [How much does IVPN cost?](https://www.ivpn.net/knowledgebase/billing/how-much-does-ivpn-cost/)
- [Do you offer Two-Factor Authentication?](https://www.ivpn.net/knowledgebase/general/do-you-offer-two-factor-authentication/)
- [How to send diagnostic logs to IVPN](https://www.ivpn.net/knowledgebase/general/how-to-send-diagnostic-logs-to-ivpn/)
- [Split Tunnel Uses and Limitations](https://www.ivpn.net/knowledgebase/general/split-tunnel-uses-and-limitations/)
- [Firewall Exceptions](https://www.ivpn.net/knowledgebase/general/firewall-exceptions/)
- [Access local network devices (Allow LAN/Multicast)](https://www.ivpn.net/knowledgebase/troubleshooting/how-can-i-access-local-network-devices-like-printers-and-media-servers/)
- [Configuring the IVPN app to autoconnect](https://www.ivpn.net/knowledgebase/general/configuring-the-ivpn-app-to-autoconnect/)
- [SOCKS5 Proxy Service](https://www.ivpn.net/knowledgebase/general/socks5-proxy-service/)
- [How to verify Warrant Canary signature?](https://www.ivpn.net/knowledgebase/general/how-to-verify-warrant-canary-signature/)
- [No-logging audit (Cure53) – IVPN blog](https://www.ivpn.net/ivpn-no-logging-claim-verified-by-independent-audit/)
- [Apps security audit 2022 (Cure53) – IVPN blog](https://www.ivpn.net/ivpn-apps-security-audit-2022-concluded/)
- [Web infrastructure security audit 2024 (Cure53) – IVPN blog](https://www.ivpn.net/ivpn-sixth-security-audit-concluded/)
