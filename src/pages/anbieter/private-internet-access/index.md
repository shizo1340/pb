---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Private Internet Access (PIA)"
url: "/anbieter/private-internet-access/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von Private Internet Access (PIA) (Kategorie: VPN)."
provider: ""
name: "Private Internet Access (PIA)"
category: "VPN"
website: "https://www.privateinternetaccess.com"
repo: "https://github.com/pia-foss"
license: "Clients: GPL-3.0-only (Desktop), MIT (Android); Dienst/Server-Infrastruktur nicht als Open-Source angegeben"
policies: ""
privacy: "https://www.privateinternetaccess.com/privacy-policy"
terms: "https://www.privateinternetaccess.com/terms-of-service"
transparency: "https://www.privateinternetaccess.com/transparency-report"
warrant_canary: "https://www.privateinternetaccess.com/why-pia-doesnt-fly-a-warrant-canary-its-solving-the-wrong-problem/"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "partial"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA (Colorado; Gerichtsstand Denver laut Terms)"
region: "us"
logs: "none"
retention: "specified"
retention_notes: "Kein fester Zeitraum genannt (Privacy Policy: „as long as needed“ / rechtliche Pflichten)"
data_notes: "PIA gibt an, keine Nutzungs-/Verbindungslogs zu speichern; für Accounts fallen E-Mail + Zahlungsdaten beim jeweiligen Zahlungsdienst an. Zusätzlich nennt PIA anonymisierte Nutzungsmetriken (Opt-out in App-Einstellungen laut Anbieter)."
features: ""
alternatives: ""
payment_processors: "Stripe, PayPal, BitPay, Amazon Payments (laut Privacy Policy); Apple App Store bei In-App-Käufen (laut Terms)"
sources: ""
---
## Kurzprofil

Private Internet Access (PIA) ist ein Anbieter aus der Kategorie **VPN**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen VPN-Dienst mit Account-Login nutzen willst und Wert auf dokumentierte Härtung-Features wie Kill Switch, Split-Tunneling und Port Forwarding legst.
- **Weniger geeignet wenn:** du möglichst wenig Kontometadaten (E-Mail/Zahlung) an einen Anbieter binden willst oder ein System ohne zentrale Vertrauensinstanz brauchst.
- **Wichtigster Abwägung:** Ein VPN verschiebt Vertrauen vom Internetzugang/Netzwerk zum VPN-Anbieter (Abwägung: weniger Sichtbarkeit für lokale Netze/ISPs vs. zentrale Sichtbarkeit beim VPN-Anbieter).

## Sofortmaßnahmen
- **Aktiviere 2FA im Kundenkonto (CCP):** reduziert Risiko durch Passwortdiebstahl (Abwägung: zusätzlicher Recovery-Aufwand).
- **Setze Kill Switch auf „Always“ + „Advanced Kill Switch“ (Desktop):** minimiert IP-Leaks bei Verbindungsabbrüchen (Abwägung: kein Internet ohne aktiven VPN möglich).
- **Nutze Split-Tunneling sparsam:** verhindert, dass einzelne Apps ungewollt „am VPN vorbei“ laufen (Abwägung: einzelne Apps sind dann nicht verschlüsselt).

## Entscheidungshilfe
- Wenn du das Risiko von IP-Leaks bei VPN-Abbrüchen minimieren willst, dann aktiviere **Kill Switch „Always“** (Abwägung: bei Verbindungsproblemen kann Internet komplett blockiert sein).
- Wenn du bestimmte Apps bewusst **nicht** über den VPN schicken willst (z.B. lokale Geräte), dann nutze **Split-Tunneling** (Abwägung: diese Apps nutzen die direkte ISP-IP und sind nicht im VPN-Tunnel geschützt).
- Wenn du eingehende Verbindungen brauchst (z.B. bestimmte P2P-Einrichtungen), dann nutze **Port Forwarding** (Abwägung: nur bestimmte Standorte unterstützen es, und es kann zusätzliche Angriffsfläche schaffen).
- Wenn du eine feste Exit-IP brauchst, dann ist **Dedicated IP** eine Option (Abwägung: höhere Linkbarkeit über Zeit, selbst wenn Einrichtung tokenbasiert beschrieben wird).
- Wenn du Diagnose-Daten minimieren willst, dann deaktiviere/limitiere **Debug/Diagnostics** soweit möglich (Abwägung: Support kann weniger Kontext haben).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Private Internet Access (PIA) |
| Kategorie | VPN |
| Website | https://www.privateinternetaccess.com |
| Quellcode | https://github.com/pia-foss |
| Lizenz | Clients: GPL-3.0-only (Desktop), MIT (Android); Dienst/Server-Infrastruktur nicht als Open-Source angegeben |
| Preismodell | paid |
| Free Tier | no |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Stripe, PayPal, BitPay, Amazon Payments (laut Privacy Policy); Apple App Store bei In-App-Käufen (laut Terms) |
| Jurisdiktion | USA (Colorado; Gerichtsstand Denver laut Terms) |
| Logs | none |
| Retention | Kein fester Zeitraum genannt (Privacy Policy: „as long as needed“ / rechtliche Pflichten) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.privateinternetaccess.com/privacy-policy
- AGB/Terms: https://www.privateinternetaccess.com/terms-of-service
- Transparency Report: https://www.privateinternetaccess.com/transparency-report
- Warrant Canary: https://www.privateinternetaccess.com/why-pia-doesnt-fly-a-warrant-canary-its-solving-the-wrong-problem/

**Audits (laut Anbieter):**
- Deloitte Audit Romania: zwei Third-Party-Audits (laut Anbieter); Audit-Report nur im Kundenkonto einsehbar

**Daten-Notizen (kurz):**
PIA gibt an, keine Nutzungs-/Verbindungslogs zu speichern; für Accounts fallen E-Mail + Zahlungsdaten beim jeweiligen Zahlungsdienst an. Zusätzlich nennt PIA anonymisierte Nutzungsmetriken (Opt-out in App-Einstellungen laut Anbieter).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** E-Mail-Adresse für das Konto; Zahlungsdaten liegen beim jeweiligen Zahlungsdienstleister (PIA nennt u.a. Stripe/PayPal/BitPay/Amazon Payments); zusätzlich z.B. Support-Kommunikation und Website-/Cookie-Daten gemäß Privacy Policy.
- **Wofür:** Account-Verwaltung, Zahlungsabwicklung, Support und Betrieb/Verbesserung der Services (laut Privacy Policy/Terms).
- **Weitergabe/Subprozessoren:** In der Privacy Policy werden Zahlungsdienstleister genannt; Support-Portal ist „Powered by Deskpro“ (Support-Seiten).
- **Drittlandtransfer:** Anbieterbezug/Storage in den USA wird in den Anbietertexten/Legal-Kontexten ersichtlich; Details zu Transfers ergeben sich aus der Privacy Policy.
- **Zahlungsabwicklung/Payment Processor:** Stripe, PayPal, BitPay, Amazon Payments (Privacy Policy); Apple App Store für In-App-Abos (Terms).
- **Kontakt/DSAR/DPA:** Kontaktwege sind in Privacy Policy/Support/Contact verlinkt; explizite DPA-Links sind nicht klar als öffentliche Seite ausgewiesen.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Anbieter nennt anonymisierte Nutzungsmetriken; Details sind in Privacy Policy/No-Logs-Seite beschrieben.
- **Abschaltbar?** Laut No-Logs-Seite ist ein Opt-out in den App-Einstellungen möglich (Anbieterangabe).
- **Wo (Menüpfad):** Je nach Plattform in den App-Einstellungen nach „Diagnostics/Debug Logs/Usage“ suchen; zusätzlich kann Debug-Log-Submission im Client auftauchen (Support/Release Notes erwähnen „Submit Debug Logs“).

**Logs & Retention:**
- **Logging-Level:** none (PIA bezeichnet sich als „No-Logs“; zusätzlich existieren optionale/anonymisierte Metriken laut Anbietertexten).
- **Aufbewahrung:** Kein fester Zeitraum genannt; Privacy Policy beschreibt Speicherung „as long as needed“/für rechtliche Pflichten.
- **Lösch-/Opt-out-Optionen:** Opt-out für anonymisierte Nutzungsmetriken wird genannt; Account-Daten/Anfragen sind über Support/Legal-Prozesse zu klären.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** VPN-Transport ist per Protokoll (z.B. WireGuard/OpenVPN) abgesichert; konkrete Parameter hängen von Client/Settings ab (Support/Docs zu Protokollen).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (für VPN-Account/Client nicht als KDF-Dokumentation dargestellt).
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA wird im Client Control Panel angeboten; Codes via Authenticator-App + Recovery Codes (Support-Artikel).
- **Recovery/Account-Wiederherstellung:** Recovery Codes werden bei 2FA-Einrichtung ausgegeben; zusätzlich Standard-Account-Prozesse im CCP (Support-Artikel).
- **Vuln-Handling / Security-Kontakt:** Vulnerability Disclosure Program (YesWeHack) mit Bug-Reporting (VDP-Seite).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (2FA/MFA), falls angeboten.  
   **Wo:** Client Control Panel → Account Settings → Two-factor Authentication (2FA).  
   **Prüfen:** Login erfordert zusätzlich TOTP-Code + Recovery Codes sind gesichert.
2) **Auto-Lock/Timeout** sinnvoll setzen.  
   **Hinweis:** Bei VPN-Clients ist „Auto-Lock“ meist nicht relevant; stattdessen „Always-on“/Automation prüfen.  
   **Android (OS):** Einstellungen → Netzwerk & Internet → VPN → PIA → **Always-on VPN** + **Block connections without VPN**.  
   **Prüfen:** Ohne VPN-Verbindung geht kein Traffic raus.
3) **Analytics/Telemetry deaktivieren**, falls Schalter existiert.  
   **Wo:** App-Einstellungen nach „Diagnostics/Usage/Debug Logs“ durchsuchen.  
   **Prüfen:** Debug/Diagnostics sind aus; keine automatische „Submit Debug Logs“-Option aktiv.

**Stolpersteine:**
- Split-Tunneling kann Apps außerhalb des VPN routen (Abwägung: lokale Geräte/Kompatibilität vs. direkte ISP-IP ohne VPN-Schutz).
- Kill Switch (Advanced) kann dich bei Login-/DNS-Problemen „aussperren“ (Abwägung: Leak-Schutz vs. Troubleshooting-Aufwand).

<details>
<summary>Profil B (Datensparsam)</summary>

- Reduziere Identitätsbindung über das Konto (z.B. separate E-Mail-Adresse nur für diesen Zweck).
- Bezahlmethode bewusst wählen (Abwägung: weniger Zahlungsmetadaten vs. eingeschränkte Rückerstattung/Supportwege je nach Payment-Flow).
- Vermeide Dedicated IP, wenn du Linkbarkeit über Zeit reduzieren willst (Abwägung: Captchas/Blocklisten können häufiger auftreten).

**Abwägung:** mehr Eigenverantwortung bei Account-Management, Recovery und Zahlungs-Handling.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze getrennte Profile/VMs für VPN-Nutzung und „normales“ Browsing, wenn du Trennung brauchst (Abwägung: deutlich mehr Einrichtung/Fehlerquellen).
- Desktop: Kill Switch **Always** + **Advanced Kill Switch** aktiv, Split-Tunneling deaktivieren.  
- Android: System-Always-on VPN + „Block connections without VPN“ aktiv lassen.
- Port Forwarding/Dedicated IP nur einsetzen, wenn zwingend erforderlich (Abwägung: zusätzliche Angriffsfläche bzw. höhere Linkbarkeit).

**Abwägung:** deutlicher Komfortverlust, höhere Komplexität, mehr Risiko durch Fehlkonfiguration.

</details>

## Features
- VPN-Clients für Desktop & Mobile; Protokolle u.a. WireGuard/OpenVPN (laut Support/Docs)
- Kill Switch (VPN Kill Switch + Advanced Kill Switch) (Desktop) / Always-on VPN + „Block connections without VPN“ (Android OS)
- Split-Tunneling (Desktop)
- MACE (DNS-basiertes Blocking, optional)
- Port Forwarding (per App; nur unterstützte Standorte)
- Dedicated IP (zusätzlich; tokenbasiertes Einrichtung laut Anbieter)
- Vulnerability Disclosure Program (YesWeHack, Bug-Reporting)

## Alternativen
- Mullvad VPN (VPN; Abwägung: anderer Konto-/Zahlungsansatz, Funktionsumfang/Standorte unterscheiden sich)
- IVPN (VPN; Abwägung: anderes Client-/Feature-Set, Organisations-/Jurisdiktionsrahmen kann abweichen)
- Proton VPN (VPN; Abwägung: stärkeres Account-Ökosystem möglich, andere Datenflüsse/Pläne)

## Nicht gelöst / offene Punkte
- Auditberichte: laut Anbieter vorhanden, aber nicht öffentlich zugänglich (nur im Kundenkonto einsehbar).

## Quellen

- Deloitte Audit Romania: "zwei Third-Party-Audits (laut Anbieter); Audit-Report nur im Kundenkonto einsehbar
- Mullvad VPN (VPN; Trade-off: "anderer Konto-/Zahlungsansatz, Funktionsumfang/Standorte unterscheiden sich)
- IVPN (VPN; Trade-off: "anderes Client-/Feature-Set, Organisations-/Jurisdiktionsrahmen kann abweichen)
- Proton VPN (VPN; Trade-off: "stärkeres Account-Ökosystem möglich, andere Datenflüsse/Pläne)
- [Privacy and Cookie Policy (PIA)](https://www.privateinternetaccess.com/privacy-policy)
- [Terms of Service (PIA)](https://www.privateinternetaccess.com/terms-of-service)
- [No Logs Policy (PIA)](https://www.privateinternetaccess.com/no-logs-vpn/)
- [Transparency Report (PIA)](https://www.privateinternetaccess.com/transparency-report)
- [Vulnerability Disclosure Program (PIA)](https://www.privateinternetaccess.com/vulnerability-disclosure-program)
- [Warum PIA keinen Warrant Canary nutzt (PIA Blog)](https://www.privateinternetaccess.com/why-pia-doesnt-fly-a-warrant-canary-its-solving-the-wrong-problem/)
- [PIA schließt zweiten Security Audit ab (PIA Blog)](https://www.privateinternetaccess.com/private-internet-access-concludes-second-security-audit/)
- [2FA aktivieren & nutzen (PIA Support)](https://helpdesk.privateinternetaccess.com/kb/articles/how-do-i-enable-and-use-two-factor-authentication)
- [Kill Switch (PIA Support)](https://helpdesk.privateinternetaccess.com/kb/articles/the-kill-switch-and-ensuring-your-security-and-privacy-are-not-interrupted)
- [Android Kill Switch über OS-Always-on (PIA Support)](https://helpdesk.privateinternetaccess.com/kb/articles/android-killswitch-settings)
- [Split-Tunneling (Desktop) (PIA Support)](https://helpdesk.privateinternetaccess.com/kb/articles/desktop-application-split-tunneling-feature)
- [MACE erklärt (PIA Support)](https://helpdesk.privateinternetaccess.com/kb/articles/what-is-mace)
- [Port Forwarding aktivieren (PIA Support)](https://helpdesk.privateinternetaccess.com/kb/articles/how-do-i-enable-port-forwarding-on-my-vpn)
- [Dedicated IP (PIA Support)](https://helpdesk.privateinternetaccess.com/kb/articles/do-you-offer-dedicated-ip-addresses)
- [PIA Desktop App (Open Source) (GitHub)](https://github.com/pia-foss/desktop)
- [Privacy and Cookie Policy (PIA)](https://www.privateinternetaccess.com/privacy-policy)
- [Terms of Service (PIA)](https://www.privateinternetaccess.com/terms-of-service)
- [No Logs Policy (PIA)](https://www.privateinternetaccess.com/no-logs-vpn/)
- [Transparency Report (PIA)](https://www.privateinternetaccess.com/transparency-report)
- [Vulnerability Disclosure Program (PIA)](https://www.privateinternetaccess.com/vulnerability-disclosure-program)
- [Warum PIA keinen Warrant Canary nutzt (PIA Blog)](https://www.privateinternetaccess.com/why-pia-doesnt-fly-a-warrant-canary-its-solving-the-wrong-problem/)
- [PIA schließt zweiten Security Audit ab (PIA Blog)](https://www.privateinternetaccess.com/private-internet-access-concludes-second-security-audit/)
- [2FA aktivieren & nutzen (PIA Support)](https://helpdesk.privateinternetaccess.com/kb/articles/how-do-i-enable-and-use-two-factor-authentication)
- [Kill Switch (PIA Support)](https://helpdesk.privateinternetaccess.com/kb/articles/the-kill-switch-and-ensuring-your-security-and-privacy-are-not-interrupted)
- [Android Kill Switch über OS-Always-on (PIA Support)](https://helpdesk.privateinternetaccess.com/kb/articles/android-killswitch-settings)
- [Split-Tunneling (Desktop) (PIA Support)](https://helpdesk.privateinternetaccess.com/kb/articles/desktop-application-split-tunneling-feature)
- [MACE erklärt (PIA Support)](https://helpdesk.privateinternetaccess.com/kb/articles/what-is-mace)
- [Port Forwarding aktivieren (PIA Support)](https://helpdesk.privateinternetaccess.com/kb/articles/how-do-i-enable-port-forwarding-on-my-vpn)
- [Dedicated IP (PIA Support)](https://helpdesk.privateinternetaccess.com/kb/articles/do-you-offer-dedicated-ip-addresses)
- [PIA Desktop App (Open Source) (GitHub)](https://github.com/pia-foss/desktop)
