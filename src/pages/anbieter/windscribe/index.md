---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Windscribe"
url: "/anbieter/windscribe/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-09"
robots: "index,follow"
description: "Kurzprofil von Windscribe (Kategorie: VPN)."
provider: ""
name: "Windscribe"
category: "VPN"
website: "https://windscribe.com/"
repo: "https://github.com/Windscribe"
license: "GPL-2.0-only"
policies: ""
privacy: "https://windscribe.com/privacy/"
terms: "https://windscribe.com/terms/"
transparency: "https://windscribe.com/transparency"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "partial"
self_host_possible: "no"
account_required: "yes"
phone_required: "no"
kyc_required: "unknown"
jurisdiction: "Kanada (Ontario; Windscribe Limited)"
region: "ca"
logs: "minimal"
retention: "specified"
retention_notes: "rolling 30d (Bandwidth-Counter); Payment-Transaktions-ID 30d; Verbindungsdaten nur im RAM bis Disconnect"
data_notes: "Konto benötigt nur Username+Passwort (E-Mail optional). Anbieter nennt keine historischen VPN-Session-Logs, keine Source-IP-Logs und keine Besuchslisten; gespeichert werden u.a. Bandbreite (30 Tage) und „Last activity“-Zeitstempel."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Windscribe ist ein Anbieter aus der Kategorie **VPN**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen VPN-Dienst mit Free-Tier nutzen willst und dabei möglichst wenig Identitätsdaten hinterlegen möchtest (E-Mail ist laut Anbieter optional).
- **Weniger geeignet wenn:** du eine vollständig „accountfreie“ Nutzung brauchst oder eine öffentlich dokumentierte Subprozessoren-/DPA-Liste erwartest.
- **Wichtigster Abwägung:** weniger Identitätsbindung (z.B. ohne E-Mail / „Hashed Login“) vs. **Recovery & Account-Wiederherstellung** und ggf. Free-Tier-Limits.

## Sofortmaßnahmen
- **2FA aktivieren (My Account → Security):** reduziert das Risiko von Account-Übernahmen.
- **Firewall/Kill-Switch aktivieren (App-Einstellungen):** verhindert typische Leaks bei VPN-Drops.
- **Free-Tier ohne E-Mail nutzen (2GB/Monat laut Anbieter):** weniger Identitätsdaten, Abwägung: weniger Bandbreite.

## Entscheidungshilfe
- Wenn du **keine E-Mail verknüpfen** willst, dann erstelle ein Konto ohne E-Mail oder nutze „Hashed Login“ (Abwägung: Recovery/Passwort-Reset wird schwierig oder unmöglich).
- Wenn du **Free-Tier** nutzt, dann entscheide bewusst zwischen **2GB (ohne E-Mail)** und **10GB (mit bestätigter E-Mail)** (Abwägung: mehr Bandbreite vs. zusätzliche Kontodaten).
- Wenn du **Zahlungsdaten minimieren** willst, dann beachte: der Anbieter nutzt **Drittanbieter-Zahlungsabwicklung** (Abwägung: bequeme Bezahlung vs. Payment-Metadaten bei Prozessoren).
- Wenn du **Leak-Resilienz** brauchst (WLAN/unstabile Netze), dann aktiviere **Firewall/Kill-Switch** und teste den Abbruchfall (Abwägung: kann Verbindungen blocken, bis die App wieder sauber verbunden ist).
- Wenn du **pro Netzwerk unterschiedliche Regeln** willst (Android), dann kann die „Network Whitelist“ Background-Location benötigen (Abwägung: zusätzliche OS-Permission vs. Komfort pro WLAN).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Windscribe |
| Kategorie | VPN |
| Website | https://windscribe.com/ |
| Quellcode | https://github.com/Windscribe |
| Lizenz | GPL-2.0-only *(für Desktop-App-Repo; weitere Repos können abweichen)* |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Stripe (Kreditkarte), Paymentwall (Local Payments), CoinPayments (Krypto), PayPal (als Methode) |
| Jurisdiktion | Kanada (Ontario; Windscribe Limited) |
| Logs | minimal |
| Retention | rolling 30d (Bandwidth-Counter); Payment-Transaktions-ID 30d; Verbindungsdaten nur im RAM bis Disconnect |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://windscribe.com/privacy/
- AGB/Terms: https://windscribe.com/terms/
- Transparency Report: https://windscribe.com/transparency
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- [Has Windscribe been audited? (KB – Linkliste)](https://windscribe.com/knowledge-base/articles/has-windscribe-been-audited)

**Daten-Notizen (kurz):**
Windscribe nennt als gespeicherte Kontodaten u.a. **Bandbreite (rolling 30 Tage)** und **Zeitstempel der letzten Aktivität**; während aktiver Verbindung werden bestimmte Werte (z.B. Username/Connection-Time/Data) laut Anbieter nur im **Server-RAM** gehalten und beim Disconnect verworfen. Kein Speichern von **Source-IP**, **historischen Sessions** oder **besuchten Seiten** laut Privacy Policy.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Username+Passwort (E-Mail optional); bei Nutzung: Bandbreite (30 Tage) + „Last activity“-Zeitstempel; bei aktivem Tunnel: Protokoll-Username/Verbindungszeit/Datenmenge im RAM; außerdem Zähler/Parallelverbindungen zur Abuse-Prevention.
- **Wofür:** Free-Tier-Limits durchsetzen, Abuse verhindern, inaktive Accounts ausdünnen; Fraud-Prevention über Transaktions-ID (30 Tage).
- **Weitergabe/Subprozessoren:** „3rd party payment processors“ werden genannt; keine öffentliche Subprozessorenliste in der Privacy Policy.
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Stripe (Kreditkarte), Paymentwall (Local Payments), CoinPayments (Krypto) – laut Help Center; PayPal als Zahlungsmethode im Checkout.
- **Kontakt/DSAR/DPA:** Nicht angegeben (Privacy Policy nennt keinen dedizierten DSAR/DPA-Prozess auf der Seite).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Website: ja (selbst gehostetes Piwik/„open source Piwik web analytics“, laut Privacy Policy). App: Unklar.
- **Abschaltbar?** Nicht angegeben.
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** rolling 30 Tage (Bandwidth-Counter); Transaktions-ID 30 Tage; Verbindungsdaten nur im RAM bis Disconnect
- **Lösch-/Opt-out-Optionen:** Account-Löschung über „My Account“; weitere Opt-outs nicht angegeben.

**Abwägung am Punkt:** Weniger Telemetrie/Logs reduziert Metadaten – kann aber Abuse-Prevention, Betrugs-/Support-Prozesse erschweren.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** VPN-Protokolle genannt (OpenVPN/IKEv2/WireGuard); keine weiteren Krypto-Details auf den genutzten Seiten.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA vorhanden (TOTP/Authenticator-App über „My Account → Security“).
- **Recovery/Account-Wiederherstellung:** E-Mail ist optional; „Hashed Login“ als Option ohne klassisches Passwort/Username (Abwägung: Recovery/Reset).
- **Vuln-Handling / Security-Kontakt:** VDP vorhanden (Meldeweg für Sicherheitslücken).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren (2FA)**  
   **Wo:** Website → *My Account → Security → Two-Factor Authentication*  
   **Prüfen:** 2FA-Status ist „enabled“ und du hast Recovery-Infos gesichert.
2) **Firewall/Kill-Switch aktivieren** (Leak-Prevention)  
   **Wo:** App → *Settings/Preferences → Connection/Firewall* (Bezeichnung je Plattform unterschiedlich)  
   **Prüfen:** VPN trennen (WLAN aus/an) → kein Traffic ohne Tunnel.
3) **R.O.B.E.R.T-Regeln prüfen** (wenn genutzt)  
   **Wo:** Website/App → *R.O.B.E.R.T*  
   **Prüfen:** Test-Domain/Ad-Block wirkt wie erwartet; keine unerwarteten Breakages.

**Stolpersteine:**
- **E-Mail hinzufügen** kann Bandbreite erhöhen (Free-Tier), erzeugt aber mehr Kontobindung (Abwägung: Komfort/Bandbreite vs. zusätzliche Kontodaten).
- **Android „Network Whitelist“** kann Background-Location verlangen (Abwägung: OS-Permission vs. Komfort pro WLAN).

<details>
<summary>Profil B (Datensparsam)</summary>

- Konto **ohne E-Mail** betreiben (Abwägung: kein Passwort-Reset).
- Optional „Hashed Login“ nutzen (Abwägung: sehr eingeschränkte Wiederherstellung).
- Zahlungen so planen, dass Payment-Metadaten minimiert werden (Abwägung: weniger Komfort/Optionen je Methode).

**Abwägung:** mehr Eigenverantwortung bei Recovery/Support.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Getrenntes Browser-/OS-Profil nur für VPN-Accountverwaltung (Abwägung: mehr Aufwand).
- Strikte Leak-Tests: DNS/WebRTC/IPv6 in den Client-Einstellungen prüfen (Abwägung: höhere Komplexität).
- Android: Network-Whitelist nur aktivieren, wenn du die Location-Permission bewusst akzeptierst (Abwägung: Komfort vs. zusätzliche Permission).

**Abwägung:** deutlicher Komfortverlust, höhere Komplexität.

</details>

## Features
- Multi-Plattform VPN-Clients + Browser-Extensions
- OpenVPN / IKEv2 / WireGuard (Config-Generator/Upgrade-Seite)
- Firewall/Kill-Switch (Leak-Prevention)
- R.O.B.E.R.T (Blocklisten gegen Ads/Tracker/Malware)
- 2FA für Accounts (TOTP)

## Alternativen
- Mullvad (VPN) – anderer Schwerpunkt: Account ohne E-Mail möglich; Abwägung: anderes Payment-/Client-Einrichtung
- [Proton VPN](/anbieter/proton-vpn/) – anderer Schwerpunkt: stärkeres Suite-/Account-Ökosystem; Abwägung: mehr Account-Verknüpfung
- [IVPN](/anbieter/ivpn/) – anderer Schwerpunkt: reduziertes Produktportfolio; Abwägung: andere Preis-/Planstruktur

## Nicht gelöst / offene Punkte
- Öffentliche Subprozessoren-/DPA-Liste: Nicht gefunden (nur Hinweis auf „3rd party payment processors“).
- App-Telemetrie/Crash-Reporting: nicht dokumentiert gefunden (außer Website-Piwik).

## Quellen

- Protokolle/Configs: "OpenVPN, IKEv2, WireGuard (laut Upgrade/Config-Generator)
- Mullvad (VPN) – anderer Schwerpunkt: "Account ohne E-Mail/Personenbezug möglich, Trade-off: anderes Payment-/Client-Ökosystem
- Proton VPN (VPN) – anderer Schwerpunkt: "Konto in Suite-Ökosystem, Trade-off: mehr Account-Verknüpfung
- IVPN (VPN) – anderer Schwerpunkt: "reduziertes Produktportfolio, Trade-off: andere Preis-/Planstruktur
- https://github.com/Windscribe
- [Windscribe (Startseite)](https://windscribe.com/)
- [Privacy Policy](https://windscribe.com/privacy/)
- [Privacy Policy for Android](https://windscribe.com/privacy/android/)
- [Terms of Use](https://windscribe.com/terms/)
- [Transparency Report](https://windscribe.com/transparency)
- [VDP – Vulnerability Disclosure Policy](https://windscribe.com/vdp)
- [How much does it cost to use Windscribe? (KB)](https://windscribe.com/knowledge-base/articles/how-much-does-it-cost-to-use-windscribe/)
- [Upgrade / Checkout](https://windscribe.com/upgrade)
- [What type of payment options do you accept? (KB)](https://windscribe.com/knowledge-base/articles/what-type-of-payment-options-do-you-accept/)
- [How do I enable 2-factor authentication on my account? (KB)](https://windscribe.com/knowledge-base/articles/how-do-i-enable-2-factor-authentication-on-my-account/)
- [Has Windscribe been audited? (KB)](https://windscribe.com/knowledge-base/articles/has-windscribe-been-audited)
- [Hashed Login (Blog)](https://blog.windscribe.com/hashed-login/)
- [Windscribe GitHub Organization](https://github.com/Windscribe)
