---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / hide.me"
url: "/anbieter/hide-me/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-15"
robots: "index,follow"
description: "Kurzprofil von hide.me (Kategorie: VPN)."
provider: ""
name: "hide.me"
category: "VPN"
website: "https://hide.me/"
repo: "https://github.com/eventure/hide.client.linux"
license: "Proprietär (Dienst) / GPL-2.0-only (Client-Repo: hide.client.linux)"
policies: ""
privacy: "https://hide.me/en/privacy"
terms: "https://hide.me/en/legal"
transparency: "https://hide.me/checklisten/hide.me-transparency-report-2024.pdf"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "partial"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Malaysia"
region: "other"
logs: "minimal"
retention: "specified"
retention_notes: "ein paar Stunden (Troubleshooting-Log); Accountdaten bis Kündigung/Deletion"
data_notes: "Minimaler Account-Datensatz (E-Mail, verschlüsselt gespeichert); nicht persistenter Troubleshooting-Log (zufälliger Username + interne IP) wird alle paar Stunden gelöscht; Website-Serverlogs (IP/Browser/Navigation) laut Policy möglich; Zahlungen über externe Zahlungsanbieter."
features: ""
alternatives: ""
payment_processors: "Paddle.com Market Ltd; Cleverbridge AG; PayPal; CoinPayments; Apple Store In-App Payments; Google Play In-App Payments"
sources: ""
---
## Kurzprofil

hide.me ist ein Anbieter aus der Kategorie **VPN**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen VPN-Dienst mit Free-Tier ohne Konto-Zwang nutzen willst und dir eine dokumentierte No-Logs-Aussage plus Audit/Transparenzreport wichtig ist.
- **Weniger geeignet wenn:** du eine komplett Open-Source-Lösung (Client *und* Service/Server-Stack) erwartest oder eine öffentliche, detaillierte Subprozessoren-Liste brauchst.
- **Wichtigster Abwägung:** weniger persistente Logs erhöhen Privacy, aber reduzieren forensische Nachvollziehbarkeit/„Beweisbarkeit“ bei Supportfällen (Troubleshooting bleibt als kurzlebiger Minimal-Log).

## Sofortmaßnahmen
- **Kill Switch aktivieren**, damit bei Verbindungsabbruch kein Traffic „ungeschützt“ rausgeht.
- **Diagnostik/Crash-Reports nur bei Bedarf teilen**, um Metadaten zu minimieren.
- **Protokoll bewusst wählen (z.B. WireGuard/IKEv2)**, weil Stabilität/Blockbarkeit je nach Netzwerk variiert.

## Entscheidungshilfe
- Wenn du **ohne feste Konto-Bindung starten** willst, dann nutze den **Free-Tier** (Abwägung: Free-Tier kann Funktions-/Nutzungsgrenzen haben).
- Wenn du **einheitlich alles über den VPN-Tunnel** schicken willst, dann **deaktiviere Split-Tunneling** (Abwägung: einzelne Apps/Services können dann schlechter funktionieren, z.B. wenn VPN blockiert wird).
- Wenn du **Leak-Risiko bei Dropouts** reduzieren willst, dann **aktiviere Kill Switch/Firewall-Funktionen** (Abwägung: bei Verbindungsproblemen kann die Netzverbindung „hart“ blockieren, bis VPN wieder steht).
- Wenn du **Support-Diagnose brauchst**, dann **erstelle/teile Logs nur gezielt** (Abwägung: Log-Upload erhöht kurzfristig Datenweitergabe an Support-Prozesse).
- Wenn du **mit Zahlung möglichst wenig Account-Daten verknüpfen** willst, dann beachte, dass **Payment über externe Provider** läuft (Abwägung: Zahlungsmetadaten liegen primär beim Payment-Processor).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | hide.me |
| Kategorie | VPN |
| Website | https://hide.me/ |
| Quellcode | https://github.com/eventure/hide.client.linux |
| Lizenz | Proprietär (Dienst) / GPL-2.0-only (Client-Repo: hide.client.linux) |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Paddle.com Market Ltd; Cleverbridge AG; PayPal; CoinPayments; Apple Store In-App Payments; Google Play In-App Payments |
| Jurisdiktion | Malaysia |
| Logs | minimal |
| Retention | ein paar Stunden (Troubleshooting-Log); Accountdaten bis Kündigung/Deletion |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://hide.me/en/privacy
- AGB/Terms: https://hide.me/en/legal
- Transparency Report: https://hide.me/checklisten/hide.me-transparency-report-2024.pdf
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- No-Log Policy Audit (Securitum, 2024-06-07): https://hide.me/checklisten/Securitum_Hide.me_no-log-policy_20240607.pdf

**Daten-Notizen (kurz):**
Minimaler Account-Datensatz (E-Mail, verschlüsselt gespeichert); nicht persistenter Troubleshooting-Log (zufälliger Username + interne IP) wird alle paar Stunden gelöscht; Website-Serverlogs (IP/Browser/Navigation) laut Policy möglich; Zahlungen über externe Zahlungsanbieter.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** E-Mail (Account), kurzlebige Troubleshooting-Verbindungsdaten (zufälliger Username + interne, nicht öffentliche IP), aggregierte monatliche Traffic-Zähler für Abrechnung/Qualität; Website-Serverlogs (IP, grobe Location, Browser/OS, Seitenaufrufe/Navigation); Support-Korrespondenz (Tickets/Chat).  
- **Wofür:** Konto/Vertragsabwicklung, Support, Abrechnung, Service-Qualität, Website-Analyse/Sicherheit.  
- **Weitergabe/Subprozessoren:** Support über **Zendesk**; E-Mail-Versand über **Mailgun**; Zahlungsabwicklung über mehrere Payment-Provider (z.B. Paddle, Cleverbridge, PayPal, CoinPayments, App-Store-In-App).  
- **Drittlandtransfer:** Policy nennt Datenübertragung/Verarbeitung in **Malaysia** und potenziell außerhalb des Nutzerlandes.  
- **Zahlungsabwicklung/Payment Processor:** externe Payment-Processor; hide.me nennt u.a. Paddle.com Market Ltd und Cleverbridge AG (plus weitere).  
- **Kontakt/DSAR/DPA:** Rechteausübung laut Policy bevorzugt per E-Mail an **support@hide.me**.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Policy: Diagnostik/Crash-Reports nur **mit Einwilligung**.
- **Abschaltbar?** Ja, laut Policy in den **App-Einstellungen** steuerbar.
- **Wo (Menüpfad):** App → Einstellungen → Diagnose/Crash-Reports (Bezeichnung je Plattform unterschiedlich).

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** ein paar Stunden (Troubleshooting-Log); Accountdaten bis Kündigung/Deletion
- **Lösch-/Opt-out-Optionen:** Accountdaten werden laut Policy bei Account-Terminierung gelöscht; Paid-Plan nennt Option, E-Mail aus dem System zu entfernen und Dienst weiter zu nutzen.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** VPN-Tunnel über unterstützte Protokolle (u.a. WireGuard/IKEv2/OpenVPN); Datentransfer Website↔Server laut Policy mindestens TLS 1.2.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (anbieter-spezifisch; Protokolle definieren Details).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben in den hier geprüften Doku-Seiten.
- **Recovery/Account-Wiederherstellung:** Passwort-Reset per E-Mail (Support/Account-Flow).
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben (kein dedizierter Disclosure-Prozess in den hier geprüften Primärseiten gefunden).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kill Switch aktivieren** (falls in deiner App verfügbar).  
   **Prüfen:** VPN trennen/Netzwerk kurz unterbrechen → kein Traffic ohne VPN.
2) **Protokoll festlegen** (z.B. WireGuard/IKEv2), statt „Auto“, wenn du Stabilität willst.  
   **Prüfen:** App zeigt Protokoll an + Verbindung bleibt in wechselnden Netzen stabil.
3) **Diagnose/Crash-Reports deaktivieren**, solange du keinen Support-Fall hast.  
   **Prüfen:** Option steht auf „aus“; bei Support gezielt temporär aktivieren.

**Stolpersteine:**
- **Split-Tunneling** kann absichtlich Traffic am VPN vorbeileiten (Abwägung: App-Kompatibilität vs. Leak-Risiko).
- **Support-Logs hochladen** hilft bei Fehlern, erhöht aber Datenweitergabe an Support-Prozesse (Abwägung: Diagnose vs. Metadaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze den Dienst **ohne dauerhaftes Konto**, sofern dein Nutzungsszenario das erlaubt (Abwägung: weniger Komfort bei Gerätewechsel/Verwaltung).
- Vermeide **Split-Tunneling** und setze auf „Full Tunnel“ (Abwägung: einzelne Dienste könnten langsamer/gesperrt sein).
- Teile Support-Logs **nur selektiv** und lösche Tickets/Anhänge nach Abschluss, falls möglich (Abwägung: weniger Historie im Support).

**Abwägung:** mehr Eigenverantwortung bei Fehlersuche/Recovery.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze **getrennte Profile/VMs** für VPN-Nutzung vs. Identitätskonten (Abwägung: hoher Aufwand).
- Kombiniere **Kill Switch + StealthGuard/Firewall-Funktionen**, um „Fail-Closed“ zu erzwingen (Abwägung: Netz kann bei Problemen komplett blockiert sein).
- Isoliere Zahlungen/Account getrennt vom Alltagsprofil (Abwägung: höhere Komplexität, mehr Konten/Flows).

**Abwägung:** deutlicher Komfortverlust, höhere Komplexität.

</details>

## Features
- VPN-Protokolle (u.a. WireGuard, OpenVPN, IKEv2, SSTP, SoftEther)
- Kill Switch (Desktop-Apps laut Feature-Seite: macOS/Windows)
- Split-Tunneling (Apps selektiv durch VPN routen)
- StealthGuard (App-/System-Firewall an VPN koppeln)
- Eigene DNS-Server pro VPN-Server (laut Feature-Seite „Secure DNS“)
- IPv6-Unterstützung (laut Feature-Seite)

## Alternativen
- [Mullvad VPN](/anbieter/mullvad-vpn/) – Fokus auf anonyme Konto-IDs/Bezahlung (Abwägung: anderes Feature-/Account-Modell).
- [IVPN](/anbieter/ivpn/) – Fokus auf klare Account-Struktur & Sicherheitsfunktionen (Abwägung: anderes Preismodell/Netzwerk).
- [Proton VPN](/anbieter/proton-vpn/) – Fokus auf Account-Ökosystem (Mail/Drive) + VPN (Abwägung: stärkere Konto-Bindung).

## Nicht gelöst / offene Punkte
- Öffentliche **Subprozessoren-/DPA-Liste** nicht eindeutig auffindbar (außer benannten Einzelanbietern wie Zendesk/Mailgun/Payment).

## Quellen

- No-Log Policy Audit (Securitum, 2024-06-07): "https://hide.me/checklisten/Securitum_Hide.me_no-log-policy_20240607.pdf
- Kill Switch (Desktop-Apps laut Feature-Seite: "macOS/Windows)
- Mullvad VPN – Fokus auf anonyme Konto-IDs/Bezahlung (Trade-off: "anderes Feature-/Account-Modell).
- IVPN – Fokus auf klare Account-Struktur & Sicherheitsfunktionen (Trade-off: "anderes Preismodell/Netzwerk).
- Proton VPN – Fokus auf Account-Ökosystem (Mail/Drive) + VPN (Trade-off: "stärkere Konto-Bindung).
- [hide.me – Website](https://hide.me/)
- [hide.me – Privacy Policy](https://hide.me/en/privacy)
- [hide.me – Legal/Terms](https://hide.me/en/legal)
- [hide.me – Transparency Report 2013–2024 (PDF)](https://hide.me/checklisten/hide.me-transparency-report-2024.pdf)
- [Securitum – No-Log Policy Audit (PDF)](https://hide.me/checklisten/Securitum_Hide.me_no-log-policy_20240607.pdf)
- [VPN Kill Switch (Feature)](https://hide.me/en/features/vpn-kill-switch)
- [Split-Tunneling (Feature)](https://hide.me/en/features/vpn-split-tunnel)
- [StealthGuard (Feature)](https://hide.me/en/features/stealth-guard)
- [VPN Protocols (Feature)](https://hide.me/en/features/vpn-protocols)
- [Secure DNS / Zero-logging DNS (Feature)](https://hide.me/en/features/zero-logging-dns)
- [IPv6 Support (Feature)](https://hide.me/en/features/ipv6-vpn)
- [Support-Artikel: "Diagnostik-Log senden](https://hide.me/en/knowledgebase/i-cant-access-any-website-while-vpn-is-connected/)
- [GitHub: "eventure/hide.client.linux](https://github.com/eventure/hide.client.linux)
- [hide.me – Website](https://hide.me/)
- [hide.me – Privacy Policy](https://hide.me/en/privacy)
- [hide.me – Legal/Terms](https://hide.me/en/legal)
- [hide.me – Transparency Report 2013–2024 (PDF)](https://hide.me/checklisten/hide.me-transparency-report-2024.pdf)
- [Securitum – No-Log Policy Audit (PDF)](https://hide.me/checklisten/Securitum_Hide.me_no-log-policy_20240607.pdf)
- [VPN Kill Switch (Feature)](https://hide.me/en/features/vpn-kill-switch)
- [Split-Tunneling (Feature)](https://hide.me/en/features/vpn-split-tunnel)
- [StealthGuard (Feature)](https://hide.me/en/features/stealth-guard)
- [VPN Protocols (Feature)](https://hide.me/en/features/vpn-protocols)
- [Secure DNS / Zero-logging DNS (Feature)](https://hide.me/en/features/zero-logging-dns)
- [IPv6 Support (Feature)](https://hide.me/en/features/ipv6-vpn)
- [Support-Artikel: Diagnostik-Log senden](https://hide.me/en/knowledgebase/i-cant-access-any-website-while-vpn-is-connected/)
- [GitHub: eventure/hide.client.linux](https://github.com/eventure/hide.client.linux)
