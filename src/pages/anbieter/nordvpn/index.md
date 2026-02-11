---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / NordVPN"
url: "/anbieter/nordvpn/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-19"
robots: "index,follow"
description: "Kurzprofil von NordVPN (Kategorie: VPN)."
provider: ""
name: "NordVPN"
category: "VPN"
website: "https://nordvpn.com/"
repo: "https://github.com/NordSecurity/nordvpn-linux"
license: "GPL-3.0-only (Linux-Client); andere Clients nicht angegeben"
policies: ""
privacy: "https://my.nordaccount.com/de/legal/privacy-policy/nordvpn/"
terms: "https://my.nordaccount.com/de/legal/terms-of-service/nordvpn/"
transparency: "https://nordvpn.com/trust/"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "partial"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "NordVPN S.A. (Sitz/Details in den genutzten Quellen nicht eindeutig genannt)"
region: "eu"
logs: "minimal"
retention: "unknown"
retention_notes: "15 Minuten (Session-Timestamp); 30 Tage (Nutzungsstatus); sonst nicht angegeben"
retention_max_days: "30"
data_notes: "NordVPN beschreibt No-Logs für Online-Aktivitäten, nutzt aber technische Betriebsdaten (z.B. Serverlast, Missbrauchsschutz) und optional/abschaltbar In-App-Event-/Analytics-Daten. Zusatzfeatures (Threat Protection, SmartDNS/Dedicated IP, Meshnet, Rufschutz) erweitern die Datenflüsse."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

NordVPN ist ein Anbieter aus der Kategorie **VPN**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du ein VPN mit Account-Login nutzen willst und bereit bist, für Komfort-Features (z.B. Threat Protection, SmartDNS/Dedicated IP) zusätzliche Datenflüsse zu akzeptieren.
- **Weniger geeignet wenn:** du ein Einrichtung ohne Konto/Abrechnungsspuren oder ohne optionale Analytics/Diagnose-Datenflüsse brauchst.
- **Wichtigster Abwägung:** Zusatzfeatures & Support-Diagnose vs. zusätzliche Metadaten (z.B. Analytics-Opt-in, Feature-spezifische Datenverarbeitung).

## Sofortmaßnahmen
- **MFA im Nord Account aktivieren**: reduziert Kontoübernahme-Risiko.
- **„Share analytics data“ deaktivieren (falls aktiv)**: reduziert Diagnosedaten/Metadaten aus der App.
- **Threat Protection nur nutzen, wenn du den Funktionsumfang brauchst**: je nach Modus entstehen zusätzliche Datenflüsse (z.B. URL/Download-Checks).

## Entscheidungshilfe
- Wenn du **nur Tunneling** willst, dann nutze die VPN-Kernfunktion ohne zusätzliche Module (Abwägung: weniger Schutz-/Komfortfunktionen).
- Wenn du **weniger App-Metadaten** willst, dann deaktiviere **Analytics/In-App-Events** in den App-Einstellungen bzw. im Linux-Client per `nordvpn set analytics on/off` (Abwägung: weniger Diagnosedaten für Support).
- Wenn du **Kontoabsicherung** brauchst, dann aktiviere **MFA im Nord Account** (Abwägung: zusätzlicher Schritt beim Login, Backup-Codes verwalten).
- Wenn du **Dedicated IP / SmartDNS** nutzt, dann plane ein, dass dafür **zusätzliche Zuordnung/ Speicherung** nötig ist (Abwägung: Feature-Funktionalität vs. mehr Identitäts-/IP-Bezug).
- Wenn du **Zahlungsmetadaten minimieren** willst, dann nutze Zahlungsarten mit weniger direkter Identitätsbindung, wo verfügbar (Abwägung: evtl. weniger Komfort/Regionseinschränkungen).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | NordVPN |
| Kategorie | VPN |
| Website | https://nordvpn.com/ |
| Quellcode | https://github.com/NordSecurity/nordvpn-linux |
| Lizenz | GPL-3.0-only (Linux-Client); andere Clients nicht angegeben |
| Preismodell | paid (Abo; laut Zusatzbedingungen ggf. eingeschränkte Testversion/Coupons) |
| Free Tier | no |
| Open Source | partial (Linux-Client) |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben (Zahlungsarten genannt; u.a. Kreditkarte, PayPal, Krypto; CoinPayments wird als Option erwähnt) |
| Jurisdiktion | NordVPN S.A. (Sitz/Details nicht eindeutig in den genutzten Quellen) |
| Logs | minimal |
| Retention | 15 Minuten (Session-Timestamp); 30 Tage (Nutzungsstatus); sonst nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://my.nordaccount.com/de/legal/privacy-policy/nordvpn/
- AGB/Terms: https://my.nordaccount.com/de/legal/terms-of-service/nordvpn/
- Transparency Report: https://nordvpn.com/trust/
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- No-Logs-Audit (Assurance Engagement) durch Deloitte Audit Lithuania – laut Anbieter (Report über Nord Account zugänglich): https://nordvpn.com/nordvpn-no-logs-audit-2024/
- Security Assessment durch Cure53 (Apps/Add-ons + Infrastruktur) – laut Anbieter (Reports verlinkt): https://nordvpn.com/cure53-latest-security-assessment/

**Daten-Notizen (kurz):**
NordVPN beschreibt No-Logs für Online-Aktivitäten, nutzt aber technische Betriebsdaten (z.B. Serverlast, Missbrauchsschutz) und optional/abschaltbar In-App-Event-/Analytics-Daten. Zusatzfeatures (Threat Protection, SmartDNS/Dedicated IP, Meshnet, Rufschutz) erweitern die Datenflüsse.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** laut Support u.a. **E-Mail-Adresse**, **Benutzername** für VPN-Verbindung sowie **Billing/Order-ID** für Erstattungen; zusätzlich technische Daten wie **Serverlast/Performance**, **Benutzername + Zeitstempel der letzten Session (bis 15 Minuten)**, **Nutzungsstatus der letzten 30 Tage**, **Interaktionsdaten** zur Missbrauchserkennung sowie optional **In-App-Event-/Analytics-Daten** (App-/Geräte-/Netzwerk-/Account- und Crash-/Fehlerdaten).
- **Wofür:** Betrieb/Optimierung (Serverempfehlung), Missbrauchs-/Scraping-Schutz, Diagnosen/Crash-Fixes, Bereitstellung von Zusatzfunktionen.
- **Weitergabe/Subprozessoren:** in der NordVPN-spezifischen Privacy Notice keine öffentliche Liste; für **Rufschutz** wird erwähnt, dass „vertrauenswürdige Datenverarbeiter“ eingesetzt werden können.
- **Drittlandtransfer:** Nicht angegeben / Unklar (verweist auf allgemeine Datenschutzrichtlinie).
- **Zahlungsabwicklung/Payment Processor:** konkrete Prozessoren nicht genannt; Zahlungsarten werden aufgeführt (Karte, PayPal, Krypto, u.a.).
- **Kontakt/DSAR/DPA:** in der NordVPN-spezifischen Privacy Notice nicht detailliert; verweist auf allgemeine Datenschutzrichtlinie.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar (Opt-in/Opt-out ist dokumentiert, Default nicht eindeutig in den genutzten Quellen).
- **Abschaltbar?** Ja: u.a. per App-Setting „Share analytics data“ (macOS App Store) bzw. im Linux-Client per `nordvpn set analytics on/off`.
- **Wo (Menüpfad):**  
  - macOS (App Store): App → **Settings** → „**Share analytics data**“ (Bezeichnung laut Support)  
  - Linux: Terminal → `nordvpn set analytics on/off`

**Logs & Retention:**
- **Logging-Level:** minimal (No-Logs für Online-Aktivitäten, aber technische Betriebs-/Abuse-/Diagnosedaten)
- **Aufbewahrung:** **Zeitstempel der letzten Session bis 15 Minuten**, **Nutzungsstatus der letzten 30 Tage**; weitere Retention nicht angegeben.
- **Lösch-/Opt-out-Optionen:** Analytics/Performance-Daten sind abschaltbar; Account-Daten können laut Support durch Account-Löschung entfernt werden.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben / Unklar (VPN-Protokolle/Details sind in den hier genutzten Quellen nicht vollständig beschrieben).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben / Unklar
- **MFA/2FA/Passkeys/Hardware-Keys:** **MFA für Nord Account ist dokumentiert** (Support-Anleitung inkl. Aktivierung & Backup-Codes).
- **Recovery/Account-Wiederherstellung:** Passwort-Reset über Nord Account möglich; Backup-Codes für MFA vorhanden (laut Support).
- **Vuln-Handling / Security-Kontakt:** GitHub-Sicherheitsrichtlinie verweist auf **HackerOne** für Vulnerability Reports.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (MFA im Nord Account).  
   **Prüfen:** Nord Account → Konto-Einstellungen → Multi-Faktor-Authentifizierung (MFA) zeigt „aktiv“ + Backup-Codes vorhanden.
2) **Auto-Lock/Timeout** sinnvoll setzen.  
   **Prüfen:** falls App/OS eine Sperre/Timeout für Kontozugriff bietet: Teste Re-Login nach Inaktivität.
3) **Analytics/Telemetry deaktivieren**, falls Schalter existiert.  
   **Prüfen:** App-Einstellungen zeigen „Share analytics data“ (oder ähnlich) = aus; Linux: `nordvpn set analytics off`.

**Stolpersteine:**
- **Diagnose-Logs/Crashdaten** können für Support nützlich sein, sind aber zusätzliche Metadaten (Abwägung: Supportfähigkeit vs. Minimierung).
- **Zusatzfeatures** (Threat Protection, SmartDNS, Dedicated IP, Rufschutz, Meshnet) können zusätzliche Verarbeitung erfordern (Abwägung: Feature vs. Datenfluss).

<details>
<summary>Profil B (Datensparsam)</summary>

- Deaktiviere „Share analytics data“ / Analytics-Consent in der App (und vermeide das Senden von Diagnose-Logs, wenn nicht nötig).
- Nutze Zusatzfeatures nur selektiv (z.B. Threat Protection nur bei Bedarf).
- Zahlungsart wählen, die weniger direkte Identitätsdaten koppelt, sofern verfügbar (Abwägung: Komfort/Verfügbarkeit je Region).

**Abwägung:** weniger Diagnosedaten/Komfort, mehr Eigenaufwand bei Fehlersuche.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne Identitäten: separater Nord Account + dedizierte Geräte-/Browserprofile für den Login.
- Reduziere Funktionsumfang: nur VPN-Kernfunktion, keine Feature-Module (Threat Protection, SmartDNS/Dedicated IP, Rufschutz, Meshnet), sofern möglich.
- Strikte OS-Controls: „Always-on VPN/Block without VPN“ (Android) und konsequenter Kill Switch.

**Abwägung:** deutlicher Komfortverlust, mehr Einrichtung-Disziplin nötig.

</details>

## Features
- VPN-App mit Nord Account Login (MFA möglich)
- Kill Switch / Auto-connect (je nach Plattform)
- Analytics-Opt-in/-Opt-out (z.B. „Share analytics data“ bzw. Linux: `nordvpn set analytics on/off`)
- Threat Protection (URL- & Download-Checks, je nach Modus)
- Meshnet, Dedicated IP, SmartDNS, Dark Web Monitor, Rufschutz (Optionen mit zusätzlichen Datenflüssen)

## Alternativen
- [Mullvad VPN](/anbieter/mullvad-vpn/)
- [Proton VPN](/anbieter/proton-vpn/)
- [IVPN](/anbieter/ivpn/)

## Nicht gelöst / offene Punkte
- Subprozessoren/DPA/DSAR-Details: öffentlich auffindbare Liste/Anlaufstelle ist in den genutzten NordVPN-spezifischen Legal-Seiten nicht eindeutig verifiziert.
- Jurisdiktion: rechtliche Sitz-/Controller-Details sind nicht eindeutig zusammengeführt (NordVPN S.A. wird genannt, Sitz bleibt hier offen).
- Default-Status „Share analytics data“: abschaltbar ist dokumentiert, aber ob es je Plattform default-on/off ist, ist unklar.

## Quellen

- No-Logs-Audit (Assurance Engagement) durch Deloitte Audit Lithuania – laut Anbieter (Report über Nord Account zugänglich): "https://nordvpn.com/nordvpn-no-logs-audit-2024/
- Security Assessment durch Cure53 (Apps/Add-ons + Infrastruktur) – laut Anbieter (Reports verlinkt): "https://nordvpn.com/cure53-latest-security-assessment/
- Analytics-Opt-in/-Opt-out (z.B. „Share analytics data“ bzw. Linux: "`nordvpn set analytics on/off`)
- https://nordvpn.com/cure53-latest-security-assessment/
- [NordVPN Privacy Notice (Nord Account)](https://my.nordaccount.com/de/legal/privacy-policy/nordvpn/)
- [NordVPN Zusatzbedingungen / Terms (Nord Account)](https://my.nordaccount.com/de/legal/terms-of-service/nordvpn/)
- [Was ist die MFA und wie wird sie aktiviert? (Nord Support)](https://support.nordvpn.com/hc/de/articles/19442299167889-Was-ist-die-MFA-und-wie-wird-sie-aktiviert)
- [What information does NordVPN store? (Nord Support)](https://support.nordvpn.com/hc/en-us/articles/19744151372945-What-information-does-NordVPN-store)
- [What payment methods does NordVPN accept (Nord Support)](https://support.nordvpn.com/hc/en-us/articles/19685782821265-What-payment-methods-does-NordVPN-accept)
- [Installing NordVPN on Linux distributions (Nord Support)](https://support.nordvpn.com/hc/en-us/articles/20196094470929-Installing-NordVPN-on-Linux-distributions)
- [Einrichtung der NordVPN (App Store)-Version auf macOS (Nord Support)](https://support.nordvpn.com/hc/de/articles/20492395403921-Einrichtung-der-NordVPN-App-Store-Version-auf-macOS)
- [NordVPN Linux Client (GitHub)](https://github.com/NordSecurity/nordvpn-linux)
- [Security Policy / Vulnerability Reporting (GitHub)](https://github.com/NordSecurity/nordvpn-linux/security)
- [NordVPN No-Logs Audit 2024 (Blog)](https://nordvpn.com/nordvpn-no-logs-audit-2024/)
- [Cure53 latest security assessment (Blog)](https://nordvpn.com/cure53-latest-security-assessment/)
- [NordVPN Trust Center](https://nordvpn.com/trust/)
