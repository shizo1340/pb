---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Outline VPN"
url: "/anbieter/outline-vpn/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-19"
robots: "index,follow"
description: "Kurzprofil von Outline VPN (Kategorie: VPN)."
provider: ""
name: "Outline VPN"
category: "VPN"
website: "https://getoutline.org/"
repo: "https://github.com/OutlineFoundation/outline-apps"
license: "Apache-2.0"
policies: ""
privacy: "https://s3.amazonaws.com/outline-vpn/static_downloads/Outline-Privacy-Policy.html"
terms: "https://s3.amazonaws.com/outline-vpn/static_downloads/Outline-Terms-of-Service.html"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Unklar (Sitz/Impressum auf getoutline.org nicht konkret genannt)"
region: "unknown"
logs: "configurable"
retention: "specified"
retention_notes: "60d (nur bei Opt-in-Metriken; danach Aggregation auf Länderebene)"
data_notes: "Outline ist VPN-Software zum Self-Hosting (kein klassischer VPN-Dienst). Betrieb erfordert einen eigenen Server bei einem Cloud/VPS-Anbieter (separater Vertrag/Bezahlung)."
features: ""
alternatives: ""
payment_processors: "Keine (Software kostenlos); Hosting/Cloud-Anbieter separat"
sources: ""
---
## Kurzprofil

Outline VPN ist ein Anbieter aus der Kategorie **VPN**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

**Wichtig zur Einordnung:** Outline ist **kein klassischer VPN-Dienst**, sondern Software, mit der du **deinen eigenen Server** betreibst und Access Keys verteilst. (Im FAQ wird es explizit als „not a VPN“ beschrieben.)  

## Kurzfazit
- **Geeignet wenn:** du einen **eigenen** „VPN“-Exit (self-hosted) betreiben willst und Metadaten eher bei **dir/Hoster** statt bei einem VPN-Dienst konzentrieren möchtest.
- **Weniger geeignet wenn:** du einen **fertigen** VPN-Anbieter mit One-Click-Konto, Support & Abrechnung suchst (Outline ist primär ein **Self-Hosting-Einrichtung**).
- **Wichtigster Abwägung:** **Kontrolle vs. Betriebsaufwand** – du gewinnst Kontrolle über Server/Keys, trägst aber Verantwortung für Hosting, Updates, Sperrlisten/Abuse & das Metadatenprofil deines Server-Standorts.

## Sofortmaßnahmen
- **Usage-Metrics-Sharing ausgeschaltet lassen** (Outline Manager → *Settings*): reduziert externe Metadatenweitergabe (Abwägung: weniger Produkt-Telemetrie für das Outline-Team).
- **Keine Access Keys „weiterleiten“**, sondern Keys **rotieren** (neu erstellen, alte widerrufen), wenn du Kontrolle verloren hast (Abwägung: kurzer Verbindungsabbruch).
- **Android: Produktions-Version statt Beta nutzen**, wenn du zusätzliche Debug-Datenerfassung vermeiden willst (Abwägung: ggf. weniger frühe Fixes/Features).

## Entscheidungshilfe
- Wenn du **keinen eigenen Server** betreiben kannst/willst, dann ist Outline **weniger geeignet** (Abwägung: weniger Kontrolle, dafür weniger Betriebsaufwand mit einem klassischen VPN-Dienst).
- Wenn du **deinen VPN-Exit gezielt platzieren** willst (Land/Region über den Hoster), dann passt Outline eher (Abwägung: Standortwahl kann dein Metadatenprofil prägen).
- Wenn du Access Keys an andere weitergibst, dann setze **pro Key Datenlimits** und widerrufe Keys bei Bedarf (Abwägung: mehr Admin-Aufwand).
- Wenn du **möglichst wenig Telemetrie** willst, dann aktiviere **kein Opt-in-Metriken-Sharing** und nutze Feedback-Formulare sparsam (Abwägung: weniger Diagnoseinfos bei Problemen).
- Wenn du **Anonymität** erwartest, dann ist Outline **nicht dafür gedacht** (Abwägung: verschlüsselt Transportweg, ersetzt aber keine Anonymisierungsstrategie).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Outline VPN |
| Kategorie | VPN |
| Website | [getoutline.org](https://getoutline.org/) |
| Quellcode | [OutlineFoundation/outline-apps](https://github.com/OutlineFoundation/outline-apps) |
| Lizenz | Apache-2.0 |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Keine (Software kostenlos); Hosting/Cloud-Anbieter separat |
| Jurisdiktion | Unklar (Sitz/Impressum auf getoutline.org nicht konkret genannt) |
| Logs | configurable |
| Retention | 60d (nur bei Opt-in-Metriken; danach Aggregation auf Länderebene) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: [Outline Privacy Policy (Redirect)](https://s3.amazonaws.com/outline-vpn/static_downloads/Outline-Privacy-Policy.html)
- AGB/Terms: [Outline Additional Terms of Service](https://s3.amazonaws.com/outline-vpn/static_downloads/Outline-Terms-of-Service.html)
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- [Radically Open Security – Penetration Test Report (03/2018)](https://s3.amazonaws.com/outline-vpn/static_downloads/ros-report.pdf)
- [Cure53 – Pentest & Audit Report (12/2018)](https://s3.amazonaws.com/outline-vpn/static_downloads/cure53-report.pdf)
- [Radically Open Security – Penetration Test Report (12/2022)](https://s3.amazonaws.com/outline-vpn/static_downloads/ros-report-2022.pdf)
- [Cure53 – Pentest Report Outline VPN SDK (01/2024)](https://s3.amazonaws.com/outline-vpn/static_downloads/cure53-report-SDK-2024.pdf)

**Daten-Notizen (kurz):**
Outline ist **Software zum Self-Hosting**: Daten/Traffic laufen über **deinen** Server. Outline selbst beschreibt, dass es **keine Webseiteninhalte** sammelt, außer du gibst Daten aktiv/opt-in frei (siehe Data Collection). Die Bezahlung läuft typischerweise über deinen **Cloud/VPS-Anbieter**, nicht über Outline.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - Standard: keine „Webseiten/Kommunikationsinhalte“ laut Anbieter; personenbezogene Daten nur bei Opt-in.  
  - Automatisch: Server-IP (für automatische Updates über Quay.io), Crash/Exception-Telemetrie (Land/Locale/OS/Version etc.) via Sentry.  
  - Opt-in: stündliche „Usage metrics“ (Bytes, Verbindungszeit, Länder + AS der Herkunft pro Access Key, Feature-Flags), gebunden an eine Server-ID; nach 60 Tagen Aggregation auf Länderebene.
- **Wofür:** Stabilität/Performance (Crash Reports), Produktverbesserung/Trendmessung (nur bei Opt-in-Metriken-Sharing).
- **Weitergabe/Subprozessoren:** Genannt werden **Quay.io** (Server-IP bei Updates) und **Sentry** (Crash Reports); für Android-Beta ggf. **Firebase** für Debugging.
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Outline selbst nimmt laut Beschreibung keine Payments; Hosting/Cloud-Vertrag separat.
- **Kontakt/DSAR/DPA:** Nicht angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Teilweise: Crash/Exception-Telemetrie wird nur bei Abstürzen/Fatal Exceptions gesendet; „Usage metrics“ sind **standardmäßig nicht** an das Outline-Team geteilt (Opt-in).
- **Abschaltbar?** „Usage metrics sharing“ ist per **Opt-in/Opt-out** im Outline Manager steuerbar; Crash-Berichte sind ereignisbasiert (Crash/Feedback).
- **Wo (Menüpfad):** Outline Manager → **Settings** → (Usage metrics sharing / server settings).

**Logs & Retention:**
- **Logging-Level:** configurable (Server-Admin kontrolliert den Serverbetrieb; Outline beschreibt keine Inhalte-Logs beim Outline-Team).
- **Aufbewahrung:** Opt-in-Metriken: **nach 60 Tagen** Aggregation auf Länderebene.
- **Lösch-/Opt-out-Optionen:** Opt-out über Settings im Outline Manager; Feedback-E-Mail optional, nicht verpflichtend.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Transportverschlüsselung zwischen Client und Outline Server; Outline nennt AEAD **ChaCha20-Poly1305** (256-bit).  
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht anwendbar (kein Outline-Konto erforderlich).
- **Recovery/Account-Wiederherstellung:** Access Keys werden im Outline Manager verwaltet; „Recovery“ bedeutet praktisch: **neue Keys erzeugen**, alte widerrufen.
- **Vuln-Handling / Security-Kontakt:** In den GitHub-Repos ist **kein SECURITY.md** hinterlegt (GitHub zeigt „No security policy detected“).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Nur offizielle Downloads nutzen** (Manager/Client)  
   **Prüfen:** Quelle ist getoutline.org bzw. das offizielle „outline-releases“ Repo.
2) **Usage-Metrics-Sharing deaktiviert lassen** (Default prüfen)  
   **Prüfen:** Outline Manager → *Settings* zeigt, dass Sharing aus ist.
3) **Access Keys als „Credentials“ behandeln** (nur an Vertrauenspersonen, rotieren bei Zweifel)  
   **Prüfen:** Unbenutzte/alte Keys im Manager widerrufen, neue erstellen.

**Stolpersteine:**
- **„Nicht anonym“:** Outline schützt vor lokalen Netzwerk-Onlookern, aber Websites/Apps können dich weiter identifizieren (Logins/Fingerprinting/GPS).  
- **Hoster-Metadaten:** Dein Server-Standort/IP kann Nutzungsmuster verraten (z.B. wann du online bist).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Kein Key-Sharing über integrierte Einladungen**, wenn du keine zusätzlichen Metadaten (E-Mail/Telefon) nutzen willst; stattdessen Key über einen separaten, bereits etablierten sicheren Kanal übertragen.
- **Kein Feedback mit E-Mail**, wenn du keine Rückverbindung willst (E-Mail-Feld ist optional).
- **Android: Beta meiden**, wenn du zusätzliche Debug-Erfassung über Firebase reduzieren willst.  
**Abwägung:** weniger Komfort bei Einladungen/Support, ggf. weniger Diagnosedaten.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Getrennte Nutzungskontexte**: Outline-Client in separatem OS-Profil/VM nutzen, wenn du Identitäts-/Arbeitskontexte trennen willst.
- **Key-Hygiene maximal**: kurze Lebensdauer für Keys, regelmäßige Rotation, minimale Verteilung.
- **Server-Exposure minimieren**: nur notwendige Ports/Services auf dem VPS, OS-Updates und Minimal-Einrichtung.  
**Abwägung:** deutlicher Komfortverlust, höhere Komplexität beim Betrieb.

</details>

## Features
- Outline Manager (Desktop) zur Server-Erstellung/Verwaltung und Key-Management
- Outline Client (Desktop/Mobile) zur Verbindung per Access Key
- Pro Access Key: Bandbreiten-/Nutzungsmetriken (Bytes übertragen), optional Datenlimits
- Optionales, anonymes Usage-Metrics-Sharing (Opt-in; Standard ist aus)
- Open Source (Apache-2.0) + veröffentlichte Audit-Reports laut Anbieter

## Alternativen
- WireGuard (self-hosted) – Abwägung: mehr manuelle Einrichtung, dafür Standard-VPN-Protokoll.
- OpenVPN (self-hosted) – Abwägung: etabliert, aber häufig mehr Tuning/Komplexität.
- Algo VPN / Streisand (self-hosted) – Abwägung: eher Infrastruktur-/Skript-getrieben statt GUI-Manager + Access-Key-Verteilung.

## Nicht gelöst / offene Punkte
- **Jurisdiktion/Sitz:** Auf getoutline.org ist kein konkretes Impressum/Standort genannt (Stand: 2026-01-19).
- **Subprozessoren/DPA/DSAR:** außer Quay.io/Sentry (und ggf. Firebase für Android-Beta) keine vollständige öffentliche Liste gefunden.
- **Responsible Disclosure:** kein SECURITY.md in den GitHub-Repos; offizieller Prozess außerhalb von GitHub unklar.

## Quellen

- https://s3.amazonaws.com/outline-vpn/static_downloads/cure53-report-SDK-2024.pdf
- Pro Access Key: "Bytes/Verbindungszeit als Admin-Metrik, optional Datenlimits
- WireGuard (self-hosted) – Trade-off: "mehr manuelle Einrichtung, dafür Standard-VPN-Protokoll
- OpenVPN (self-hosted) – Trade-off: "etabliert, aber oft mehr Tuning/Komplexität
- Algo VPN/Streisand (self-hosted) – Trade-off: "Skript-/Infra-Fokus statt GUI-Manager
- title: "Audit: Cure53 – Outline SDK (2024)
- [getoutline.org – Startseite](https://getoutline.org/)
- [getoutline.org – FAQ](https://getoutline.org/faq)
- [Outline Additional Terms of Service (S3)](https://s3.amazonaws.com/outline-vpn/static_downloads/Outline-Terms-of-Service.html)
- [Data Collection Policy (S3)](https://s3.amazonaws.com/outline-vpn/static_downloads/Outline-Data-Collection-Policy.html)
- [Outline Help: Security & privacy while using Outline](https://support.google.com/outline/answer/14919822?hl=en)
- [Outline Help: Data and Information collection](https://support.google.com/outline/answer/15331222?hl=en)
- [OutlineFoundation/outline-apps (GitHub)](https://github.com/OutlineFoundation/outline-apps)
- [OutlineFoundation/outline-server (GitHub)](https://github.com/OutlineFoundation/outline-server)
- [Jigsaw-Code/outline-releases (offizielle Downloads)](https://github.com/Jigsaw-Code/outline-releases)
- [Audit: Radically Open Security (2018)](https://s3.amazonaws.com/outline-vpn/static_downloads/ros-report.pdf)
- [Audit: Cure53 (2018)](https://s3.amazonaws.com/outline-vpn/static_downloads/cure53-report.pdf)
- [Audit: Radically Open Security (2022)](https://s3.amazonaws.com/outline-vpn/static_downloads/ros-report-2022.pdf)
- [Audit: Cure53 – Outline SDK (2024)](https://s3.amazonaws.com/outline-vpn/static_downloads/cure53-report-SDK-2024.pdf)
