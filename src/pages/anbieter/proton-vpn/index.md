---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Proton VPN"
url: "/anbieter/proton-vpn/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von Proton VPN (Kategorie: VPN)."
provider: ""
name: "Proton VPN"
category: "VPN"
website: "https://protonvpn.com"
repo: "https://github.com/ProtonVPN"
license: "GPL-3.0-only (Clients/CLI; siehe Repos)"
policies: ""
privacy: "https://protonvpn.com/privacy-policy"
terms: "https://protonvpn.com/terms-and-conditions"
transparency: "https://protonvpn.com/transparency-report/"
warrant_canary: "https://protonvpn.com/transparency-report/"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "partial"
self_host_possible: "no"
account_required: "yes"
phone_required: "unknown"
kyc_required: "no"
jurisdiction: "Schweiz (Proton AG)"
region: "ch"
logs: "minimal"
retention: "unknown"
retention_notes: "teilweise temporär (Dauer nicht angegeben)"
data_notes: "Proton VPN wirbt mit No-Logs (keine Nutzungs-/Verbindungslogs im Betrieb). Konto-/Abuse- und Zahlungsdaten fallen je nach Nutzung an. Optional: anonyme Nutzungsstatistiken/Crash-Reports (abschaltbar)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Proton VPN ist ein Anbieter aus der Kategorie **VPN**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen VPN-Dienst mit dokumentierter No-Logs-Aussage + regelmäßigen Audits suchst und die offiziellen Apps nutzen willst.
- **Weniger geeignet wenn:** du keinen Account anlegen willst oder Telemetrie/Crash-Reporting grundsätzlich komplett vermeiden möchtest (Abwägung: Diagnose/Block-Erkennung vs. Metadaten).
- **Wichtigster Abwägung:** Komfort/Support (Apps, Diagnose, Account-Recovery) vs. zusätzliche Kontodaten/Metadaten rund um Konto, Abrechnung und optionale Diagnosedaten.

## Sofortmaßnahmen
- **Kill Switch aktivieren**, um IP-/DNS-Leaks bei Verbindungsabbrüchen zu reduzieren.
- **„Usage statistics & crash reports“ deaktivieren**, wenn du keine Diagnosedaten senden willst (Abwägung: weniger Signal bei Zensur/Fehlersuche).
- **WireGuard bevorzugen**, wenn du alte OpenVPN-Konfigurationen nutzt, die laut Anbieter aktualisiert werden müssen (Abwägung: ggf. andere Kompatibilität).

## Entscheidungshilfe
- Wenn du **VPN ohne Nutzungs-/Verbindungslogs** als Ziel hast, dann prüfe die No-Logs-Seite + Auditlinks (Abwägung: Vertrauen basiert auf Anbieterprozess + Auditzeitpunkt).
- Wenn du **IP-/DNS-Leaks bei Dropouts** reduzieren willst, dann aktiviere Kill Switch/Always-on (Abwägung: bei instabilen Netzen kann das „offline wirken“).
- Wenn du **niemals ohne VPN online gehen willst**, dann nutze *Advanced Kill Switch* (Abwägung: kann Internet auch dann blockieren, wenn du bewusst trennen willst).
- Wenn du **Split-Tunneling** brauchst, dann prüfe die Kompatibilität mit Kill Switch je Plattform (Abwägung: Feature-Kombination kann eingeschränkt sein).
- Wenn du **Diagnose/Block-Erkennung** unterstützen willst, dann aktiviere Usage Statistics (Abwägung: mehr Metadatenfluss; laut Anbieter anonym/zeitlich begrenzt).
- Wenn du **Account-/Zahlungsdaten minimieren** willst, dann prüfe verfügbare Zahlungsmethoden (Abwägung: weniger Komfort/Automatisierung).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Proton VPN |
| Kategorie | VPN |
| Website | https://protonvpn.com |
| Quellcode | https://github.com/ProtonVPN |
| Lizenz | GPL-3.0-only (Clients/CLI; siehe Repos) |
| Preismodell | mixed (Free + Paid) |
| Free Tier | yes |
| Open Source | partial (Apps/Clients; Service/Server nicht vollständig offen gelegt) |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown (SMS kann je nach Verifikation/Anti-Abuse vorkommen) |
| KYC erforderlich | no (laut Anbieter existieren auch nicht-kartenbasierte Zahlungswege; Details siehe Payment-Seite) |
| Zahlungsabwicklung | Chargebee (Abo), Stripe/PayPal (Kartenzahlung), Bitcoin; weitere Methoden laut Payment-Seite |
| Jurisdiktion | Schweiz (Proton AG) |
| Logs | minimal (No-Logs für VPN-Nutzung; Konto-/Abuse-/Diagnosedaten je nach Nutzung) |
| Retention | teilweise temporär (Dauer nicht angegeben) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://protonvpn.com/privacy-policy
- AGB/Terms: https://protonvpn.com/terms-and-conditions
- Transparency Report: https://protonvpn.com/transparency-report/
- Warrant Canary: https://protonvpn.com/transparency-report/ (laut Anbieter in CH „nicht sinnvoll“ erklärt)

**Audits (laut Anbieter):**
- No-Logs-Audit 2025 (Securitum) – verlinkt auf „annual external audit“-Seite inkl. Report-Download

**Daten-Notizen (kurz):**
Proton VPN beschreibt eine **No-Logs-Policy** für die VPN-Nutzung (keine Session-/Traffic-/IP-Logs im Betrieb). Für **Account, Bezahlung, Abuse-Schutz** und optional **Diagnose/Telemetrie** können dennoch Daten anfallen (je nach Einstellungen/Plan).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Konto-/Accountdaten (z.B. Login/Account-Verwaltung), Zahlungsdaten je nach Methode, optional Diagnosedaten (Usage statistics & Crash Reports).
- **Wofür:** Betrieb/Abrechnung, Missbrauchsvermeidung, Support/Fehlersuche, (optional) Erkennung von Zensur/Blockaden über aggregierte Störungen.
- **Weitergabe/Subprozessoren:** In der Proton Privacy Policy werden externe Dienstleister/Verarbeitungen beschrieben (z.B. für Abrechnung/Support/Statistiken). Eine produkt-spezifische „Subprocessor-Liste für Proton VPN“ ist in den hier genutzten Quellen nicht eindeutig als eigene Liste ausgewiesen.
- **Drittlandtransfer:** Nicht eindeutig als VPN-spezifische Zusammenfassung angegeben (siehe generelle Proton Privacy Policy).
- **Zahlungsabwicklung/Payment Processor:** Chargebee (Aboverwaltung), Stripe/PayPal (Kartenzahlungen) sowie Kryptowährungszahlungen (Details laut Proton-Seiten).
- **Kontakt/DSAR/DPA:** DSAR/Privacy-Kontakt wird in den Legal-Seiten von Proton beschrieben; eine separate „VPN-DPA“-Übersicht ist nicht eindeutig in den genutzten Quellen auffindbar.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar (laut Support gibt es „Usage statistics & crash reports“ als Option; Default kann je Plattform variieren).
- **Abschaltbar?** Ja, laut Support-Seite zu „Usage statistics & crash reports“ (Opt-out möglich).
- **Wo (Menüpfad):** In den Apps typischerweise in den Einstellungen unter „Improve Proton“ (Bezeichnung kann je Plattform abweichen).

**Logs & Retention:**
- **Logging-Level:** minimal (VPN-Nutzung laut No-Logs; Diagnosedaten nur optional; Account-/Abuse-Daten möglich)
- **Aufbewahrung:** für optionale Usage Statistics/Crash Reports laut Support **30 Tage** (danach gelöscht).
- **Lösch-/Opt-out-Optionen:** Opt-out für Usage Statistics/Crash Reports dokumentiert; Konto-/Abodaten siehe Legal-Seiten.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support und Block-Erkennung erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** VPN-Traffic wird laut Anbieter mit **AES-256 oder ChaCha20** geschützt; Protokolle u.a. **WireGuard und OpenVPN**.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (für VPN-Tunnel i.d.R. Protokoll-spezifisch; keine Parameterliste in den hier genutzten Quellen).
- **MFA/2FA/Passkeys/Hardware-Keys:** Über den Proton Account möglich, aber VPN-spezifisch in den hier genutzten Proton VPN Quellen nicht detailliert beschrieben.
- **Recovery/Account-Wiederherstellung:** Über Proton Account (Abwägung: Recovery-Optionen können zusätzliche Identitätsdaten erfordern).
- **Vuln-Handling / Security-Kontakt:** Bug-Bounty + Meldung an **security@proton.me** dokumentiert; security.txt vorhanden.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kill Switch aktivieren** (und „Always-on VPN“, falls verfügbar).  
   **Prüfen:** Kill Switch ist „On“ + Test: kurz VPN trennen → Internet blockiert bis Reconnect.
2) **Advanced Kill Switch nur wenn du die Nebenwirkungen akzeptierst** (Windows/Linux).  
   **Prüfen:** App zeigt „Advanced“ aktiv; Gerät kommt ohne VPN nicht ins Netz.
3) **Usage statistics & crash reports deaktivieren**, wenn du Diagnosedaten vermeiden willst.  
   **Prüfen:** Option ist „Off“ in den App-Einstellungen („Improve Proton“ o.ä.).

**Stolpersteine:**
- **Advanced Kill Switch kann dich „aussperren“**, bis du ihn deaktivierst oder wieder verbunden bist (laut Doku u.a. auch beim System-Neustart relevant).
- **Split-Tunneling** und **Kill Switch** sind je nach Plattform nicht immer kombinierbar (Windows-Ausnahme laut Doku möglich).

<details>
<summary>Profil B (Datensparsam)</summary>

- Reduziere Diagnosedaten: Usage statistics & Crash Reports aus (Abwägung: weniger Signal bei Zensur/Support).
- Prüfe Zahlungsmethoden (falls du zahlst): wähle eine Methode, die zu deinem Bedrohungsmodell passt (Abwägung: Komfort/Automatisierung vs. Zahlungs-Metadaten).
- Nutze getrennte Browser-Profile für VPN- und Nicht-VPN-Nutzung (Abwägung: mehr Einrichtung/Komplexität).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze getrennte OS-Profile/VMs für VPN-Workflows (Abwägung: hoher Aufwand).
- Advanced Kill Switch + Always-on erzwingen, wenn „niemals ohne VPN“ ein Muss ist (Abwägung: kann Arbeitsfluss stören, besonders bei Captive Portals/WLAN-Login).
- Vermeide optionale Diagnosedaten und prüfe regelmäßig die Audit-/Transparenz-Updates (Abwägung: weniger Komfort, mehr Handarbeit).

</details>

## Features
- Kill Switch + Always-on VPN (Apps)
- Advanced Kill Switch (Windows/Linux)
- WireGuard & OpenVPN
- AES-256 oder ChaCha20 (laut Anbieter)
- Secure Core (Double-VPN)
- Split-Tunneling (plattformabhängig)
- NetShield (DNS-Filter, plattform-/planabhängig)

## Alternativen
- Mullvad (VPN; anderer Anbieter/Policy-Einrichtung – Details siehe eigene Seite)
- IVPN (VPN; anderer Anbieter/Policy-Einrichtung – Details siehe eigene Seite)
- OVPN (VPN; anderer Anbieter/Policy-Einrichtung – Details siehe eigene Seite)

## Nicht gelöst / offene Punkte
- Konkrete, öffentliche **Subprocessor-/DPA-Liste speziell für Proton VPN** ist in den genutzten Quellen nicht eindeutig als eigene Übersicht auffindbar.
- Default-Status von **Usage statistics & crash reports** je Plattform ist nicht einheitlich belegt.

## Quellen

- Advanced Kill Switch (Windows/Linux, mit Stolperstein: "kann Login/Connectivity blockieren)
- Protokolle: "WireGuard & OpenVPN
- Verschlüsselung laut Anbieter: "AES-256 oder ChaCha20
- [Proton VPN Privacy Policy](https://protonvpn.com/privacy-policy)
- [Does Proton VPN keep logs?](https://protonvpn.com/support/no-logs-vpn)
- [Proton VPN annual no-logs third-party audits](https://protonvpn.com/no-logs-audit/)
- [Proton VPN Transparency Report & Warrant Canary](https://protonvpn.com/transparency-report/)
- [Help us fight censorship (usage statistics & crash reports)](https://protonvpn.com/support/share-usage-statistics)
- [Proton (Legal) Privacy Policy](https://proton.me/legal/privacy)
- [Proton payment methods](https://proton.me/support/payment-methods)
- [Proton Open Source (inkl. Audit-Links)](https://proton.me/community/open-source)
- [Proton bug bounty program](https://proton.me/security/bug-bounty)
- [Proton VPN features](https://protonvpn.com/features)
- [How to use advanced kill switch](https://protonvpn.com/support/advanced-kill-switch)
- [Proton VPN (Website) – Protokolle/Verschlüsselung](https://protonvpn.com/)
- [How to use the Proton VPN app for Windows](https://protonvpn.com/support/protonvpn-windows-vpn-application)
