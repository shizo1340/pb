---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / AzireVPN"
url: "/anbieter/azirevpn/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-05"
robots: "index,follow"
description: "Kurzprofil von AzireVPN (Kategorie: VPN)."
provider: ""
name: "AzireVPN"
category: "VPN"
website: "https://www.azirevpn.com/"
repo: "https://github.com/AzireVPN"
license: "Proprietär (EULA); Repo-Lizenz: Nicht angegeben"
policies: ""
privacy: "https://www.azirevpn.com/legal/privacy-policy"
terms: "https://www.azirevpn.com/legal/terms-of-service"
transparency: "https://www.azirevpn.com/legal/transparency-report"
warrant_canary: "https://api.azirevpn.com/v3/warrantcanary"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "partial"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA (Malwarebytes Inc., Santa Clara CA; Streitigkeiten nach kalifornischem Recht)"
region: "us"
logs: "none"
logs_notes: "none (laut FAQ: keine Traffic-/IP-/Timestamp-/DNS-/Session-Logs; System-Logs deaktiviert)"
retention: "specified"
retention_notes: "Kontodaten solange Konto aktiv; Token nur solange aktiv; Payment-ID-Beziehung nach 6 Monaten entfernt; E-Mails nach 3 Monaten Inaktivität gelöscht"
data_notes: "AzireVPN ist ein VPN-Dienst mit Account (Username/Passwort), optionaler E-Mail und optionalen Features wie Port Forwarding. Laut Anbieter werden keine Nutzungs-/Traffic-Logs geführt; es gibt Transparency Report und Warrant Canary. Trade-off: E-Mail weglassen reduziert Identitätsbindung, erschwert aber Recovery."
features: ""
alternatives: ""
payment_processors: "Cleverbridge (für neue Zahlungen seit 2025), Stripe (historisch genannt), PayPal, CONFIRMO"
sources: ""
---
## Kurzprofil

AzireVPN ist ein Anbieter aus der Kategorie **VPN**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen VPN-Dienst mit **Account (Username/Passwort)** nutzen willst und Wert auf **Transparenz-Dokumente** (Transparency Report, Warrant Canary) legst.
- **Weniger geeignet wenn:** du **gar keinen Account** anlegen möchtest oder zwingend **sichere Account-Recovery** brauchst, ohne Identitätsdaten zu hinterlegen.
- **Wichtigster Abwägung:** **E-Mail weglassen = weniger Identitätsbindung**, aber **Recovery/Support wird schwieriger** (z.B. Passwort-Reset nur mit E-Mail möglich).

## Sofortmaßnahmen
- **Registrierung ohne E-Mail**, wenn du weniger Identitätsbindung willst (Wirkung: weniger personenbezogene Kontodaten beim Anbieter, Abwägung: Recovery eingeschränkt).
- **Kill Switch Status prüfen** (Wirkung: reduziert Risiko von Traffic-Leaks bei Verbindungsabbrüchen; laut FAQ standardmäßig aktiv).
- **Transparency Report + Warrant Canary regelmäßig anschauen** (Wirkung: schnelleres Erkennen von Änderungen bei Behördenanfragen/Statements).

## Entscheidungshilfe
- Wenn du **Account-Recovery per E-Mail** brauchst, dann hinterlege eine E-Mail (Abwägung: mehr Identitäts-/Kontaktbindung, potenziell Marketing-Kommunikation laut Privacy Policy).
- Wenn du **Datensparsamkeit** priorisierst, dann registriere **nur mit Username/Passwort** (Abwägung: ohne E-Mail sind Recovery-Optionen laut FAQ limitiert).
- Wenn du **minimale Nutzungsdaten beim VPN-Anbieter** willst, dann ist die **No-logging-Policy** zentral (Abwägung: weniger Diagnosedaten kann Support/Fehlersuche erschweren).
- Wenn du **Port Forwarding** nutzen willst, dann aktiviere es nur für konkrete Zwecke (Abwägung: zusätzliche Angriffsfläche/Exponierung von Diensten).
- Wenn du **OpenVPN** noch nutzt, dann plane die Umstellung (Abwägung: ältere Einrichtungen/Clients können betroffen sein, da OpenVPN-Support laut FAQ endet).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | AzireVPN |
| Kategorie | VPN |
| Website | https://www.azirevpn.com/ |
| Quellcode | https://github.com/AzireVPN |
| Lizenz | Proprietär (EULA); Repo-Lizenz: Nicht angegeben |
| Preismodell | paid |
| Free Tier | no |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Cleverbridge (für neue Zahlungen seit 2025), Stripe (historisch genannt), PayPal, CONFIRMO |
| Jurisdiktion | USA (Malwarebytes Inc., Santa Clara CA; Streitigkeiten nach kalifornischem Recht) |
| Logs | none (laut FAQ: keine Traffic-/IP-/Timestamp-/DNS-/Session-Logs; System-Logs deaktiviert) |
| Retention | Kontodaten solange Konto aktiv; Token nur solange aktiv; Payment-ID-Beziehung nach 6 Monaten entfernt; E-Mails nach 3 Monaten Inaktivität gelöscht |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.azirevpn.com/legal/privacy-policy
- AGB/Terms: https://www.azirevpn.com/legal/terms-of-service
- Transparency Report: https://www.azirevpn.com/legal/transparency-report
- Warrant Canary: https://api.azirevpn.com/v3/warrantcanary

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
AzireVPN beschreibt in der Privacy Policy u.a. **Username/Passwort**, optional **E-Mail**, **WireGuard Public Keys** (für Auth), sowie **Payment-Identifikationsdaten**. Laut FAQ werden **keine Traffic-/Aktivitäts-Logs** gespeichert.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Username/Passwort, (optionale) E-Mail, Referral Code, WireGuard Public Keys, Token-Metadaten (Beschreibung), Payment Identification Number (Privacy Policy).
- **Wofür:** Nutzung des Dienstes, Account-Recovery/Support-Kommunikation, Marketing-Kommunikation (E-Mail, wenn hinterlegt), Zahlungsstatus/Refund (Privacy Policy).
- **Weitergabe/Subprozessoren:** Stripe, PayPal (Europe), CONFIRMO (Subprozessorenliste in Privacy Policy).
- **Drittlandtransfer:** AzireVPN verweist auf die Malwarebytes Data Privacy Framework (DPF) Einhaltung für EU/UK/Schweiz und globale Transfers (Privacy Policy).
- **Zahlungsabwicklung/Payment Processor:** Blog nennt Wechsel zu **Cleverbridge** für neue Zahlungen (ab 26.05.2025); Privacy Policy listet zusätzlich Stripe/PayPal/CONFIRMO als Subprozessoren.
- **Kontakt/DSAR/DPA:** Datenschutzkontakt laut Privacy Policy: **privacy@malwarebytes.com**; Rechteausübung teils über Account möglich (Privacy Policy).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Keine Drittanbieter-Analytics wie Google Analytics/Facebook Pixel laut Service/About; eigene Website-Analytics/Tools laut About in-house (Details unklar).
- **Abschaltbar?** Unklar (keine dokumentierte Client-Telemetrie-Option in den Quellen).
- **Wo (Menüpfad):** Unklar (kein öffentlich dokumentierter Pfad).

**Logs & Retention:**
- **Logging-Level:** none (laut FAQ: keine Traffic-/Aktivitäts-/DNS-/IP-/Timestamp-/Session-Logs; System-Logs deaktiviert).
- **Aufbewahrung:** Token nur solange aktiv; Payment-ID-Beziehung nach 6 Monaten entfernt; E-Mails nach 3 Monaten Inaktivität gelöscht; Kontodaten grundsätzlich solange Konto aktiv (Privacy Policy).
- **Lösch-/Opt-out-Optionen:** Konto kann laut Terms per E-Mail an Support gekündigt werden; Betroffenenrechte (Access/Erasure etc.) in Privacy Policy beschrieben.

**Abwägung am Punkt:** Weniger Telemetrie/Logs kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** VPN-Tunnel via WireGuard oder OpenVPN (FAQ); WireGuard nutzt Public Keys zur Authentisierung (Privacy Policy).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben.
- **Recovery/Account-Wiederherstellung:** Passwort-Reset per E-Mail möglich, wenn E-Mail hinterlegt; ohne E-Mail sind Recovery-Optionen laut FAQ eingeschränkt.
- **Vuln-Handling / Security-Kontakt:** Bug Reports an **security@azirevpn.com** (Contact-Seite).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kill Switch prüfen** (laut FAQ standardmäßig aktiv und nicht abschaltbar).  
   **Prüfen:** In der App nach „Kill Switch/Always-on“ schauen und testen (VPN trennen → Traffic sollte blockiert bleiben).
2) **Protokoll prüfen** (WireGuard/OpenVPN) und alte Einrichtungen rechtzeitig anpassen.  
   **Prüfen:** In der App/Client das aktive Protokoll anzeigen lassen; OpenVPN-Ende laut FAQ beachten.
3) **E-Mail bewusst entscheiden** (optional bei Registrierung).  
   **Prüfen:** Im Account hinterlegte Kontaktdaten prüfen; ohne E-Mail ist Recovery laut FAQ eingeschränkt.

**Stolpersteine:**
- **Ohne E-Mail**: weniger Kontodaten, aber **Passwort-/Account-Recovery kann scheitern** (Abwägung: Datensparsamkeit vs. Wiederherstellbarkeit).
- **Port Forwarding**: praktisch für bestimmte Use-Cases, aber **exponiert Dienste** (Abwägung: Funktion vs. Angriffsfläche).

<details>
<summary>Profil B (Datensparsam)</summary>

- Account ohne E-Mail anlegen (Abwägung: Recovery eingeschränkt).
- Zahlungsart passend zum eigenen Bedrohungsmodell wählen (FAQ nennt u.a. PayPal/Kreditkarte/SEPA; Blog beschreibt Cleverbridge als Processor).
- Port Forwarding nur gezielt nutzen und nur die nötigen Ports freigeben (Abwägung: Komfort vs. Angriffsfläche).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- VPN nur auf einem getrennten Profil/Device verwenden (Abwägung: mehr Aufwand, weniger Vermischung von Identitäten).
- Minimaler Account-Footprint (ohne E-Mail) + konsequente Trennung von Payment-Identität (Abwägung: Recovery/Abrechnung komplexer).
- Strikte Leak-Tests (DNS/IP) nach Client-Updates wiederholen (Abwägung: mehr Wartung).

</details>

## Features
- VPN-Tunnel (WireGuard; OpenVPN bis 15.03.2025 laut FAQ)
- Kill Switch (laut FAQ standardmäßig aktiv und nicht deaktivierbar)
- No-logging-Aussagen inkl. „Blind Operator mode“ (laut FAQ)
- Transparency Report (jährliche Behördenanfragen)
- Warrant Canary (PGP-signed Text)
- Port Forwarding (laut FAQ)

## Alternativen
- Mullvad (VPN, anderer Account-/Zahlungs-Abwägung)
- [IVPN](/anbieter/ivpn/)
- [Proton VPN](/anbieter/proton-vpn/)

## Nicht gelöst / offene Punkte
- Client-Telemetrie/Diagnosedaten sind in den öffentlich nicht konkret beschrieben (nur Aussagen zu „keine Drittanbieter-Tools“ für Business/Website).

## Quellen

- title: "AzireVPN – GitHub Organisation
- [AzireVPN – Website](https://www.azirevpn.com/)
- [AzireVPN – Privacy Policy](https://www.azirevpn.com/legal/privacy-policy)
- [AzireVPN – Terms of Service](https://www.azirevpn.com/legal/terms-of-service)
- [AzireVPN – EULA](https://www.azirevpn.com/legal/eula)
- [AzireVPN – Transparency Report](https://www.azirevpn.com/legal/transparency-report)
- [AzireVPN – FAQ](https://www.azirevpn.com/support/faq)
- [AzireVPN – Contact (Support/Bug reports)](https://www.azirevpn.com/support/contact)
- [AzireVPN – About (No third-party tools)](https://www.azirevpn.com/about)
- [AzireVPN – Pricing](https://www.azirevpn.com/pricing)
- [AzireVPN – Warrant Canary (API)](https://api.azirevpn.com/v3/warrantcanary)
- [AzireVPN Blog – Payment Processor Wechsel zu Cleverbridge](https://blog.azirevpn.com/bye-stripe-hello-cleverbridge/)
- [AzireVPN – GitHub Organisation](https://github.com/AzireVPN)

