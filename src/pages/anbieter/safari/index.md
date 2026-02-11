---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Safari"
url: "/anbieter/safari/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-21"
robots: "index,follow"
description: "Kurzprofil von Safari (Kategorie: Browser)."
provider: ""
name: "Safari"
category: "Browser"
website: "https://www.apple.com/safari/"
repo: "https://github.com/WebKit/WebKit"
license: "Proprietär (Safari); WebKit: LGPL-2.1-or-later, BSD-2-Clause"
policies: ""
privacy: "https://www.apple.com/legal/privacy/data/en/safari/"
terms: "https://www.apple.com/legal/sla/"
transparency: "https://www.apple.com/legal/transparency/"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "partial"
self_host_possible: "no"
account_required: "unknown"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA (Apple Inc.)"
region: "us"
logs: "configurable"
retention: "unknown"
retention_notes: "Webpage Translation: Webseiten-Adresse bis zu 5 Jahre (wenn nicht in Private Browsing); sonst nicht angegeben"
retention_max_days: "1825"
data_notes: "Safari kann je nach aktivierten Features Daten an Apple und teils Drittanbieter (z.B. Safe Browsing) senden; viele Schutzfunktionen sind per Einstellung konfigurierbar."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Safari ist ein Anbieter aus der Kategorie **Browser**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen Browser suchst, der in Apple-Geräte integriert ist und viele Tracking-Schutzfunktionen direkt mitbringt (ohne zusätzliches Konto für Basisnutzung).
- **Weniger geeignet wenn:** du maximale Transparenz/Offenheit über den kompletten Browser-Stack willst oder zwingend identische Einstellungen auf allen Plattformen (inkl. Nicht-Apple) brauchst.
- **Wichtigster Abwägung:** einige Schutzfunktionen laufen über Apple-Dienste und teils Drittanbieter-Checks (Abwägung: Schutz/Komfort vs. zusätzliche Metadaten-/Netzwerkflüsse).

## Sofortmaßnahmen
- **„Prevent Cross-Site Tracking“ aktiv lassen/aktivieren**, um Cross-Site-Tracking zu reduzieren.
- **„Hide IP Address“ auf „Trackers Only“ setzen**, damit bekannte Tracker weniger zuverlässig verbinden können.
- **Safari-Erweiterungen nur mit minimalen Website-Rechten betreiben**, da Extensions Seiteninhalte lesen/modifizieren dürfen.

## Entscheidungshilfe
- Wenn du **weniger Cross-Site-Tracking** willst, dann aktiviere **Prevent Cross-Site Tracking** (Abwägung: manche Login-/Embed-Flows können zicken).
- Wenn du **IP-Korrelation durch Tracker reduzieren** willst, dann nutze **Hide IP Address → Trackers Only** (Abwägung: zusätzliche Relay-Wege können Debugging/Geo-Funktionen beeinflussen).
- Wenn du **maximal wenig Cloud-Spuren** willst, dann deaktiviere **iCloud Syncing für Safari** (Abwägung: kein Tabs/Bookmarks/History-Sync).
- Wenn du **Phishing/Malware-Schutz** möchtest, dann lasse **Fraudulent Website Warning** aktiv (Abwägung: dabei können Anfragen an Safe-Browsing-Provider anfallen).
- Wenn du **Webseiten-Übersetzung** nutzt, dann beachte: Inhalte werden zur Übersetzung an Apple gesendet, die Webseiten-Adresse kann (außerhalb Private Browsing) länger gespeichert werden (Abwägung: Komfort vs. zusätzliche Metadaten).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Safari |
| Kategorie | Browser |
| Website | https://www.apple.com/safari/ |
| Quellcode | https://github.com/WebKit/WebKit *(WebKit-Engine)* |
| Lizenz | Proprietär (Safari); WebKit: LGPL-2.1-or-later, BSD-2-Clause |
| Preismodell | free |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | no *(optional für iCloud-Sync/iCloud Keychain/Private Relay)* |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend |
| Jurisdiktion | USA (Apple Inc.) |
| Logs | configurable |
| Retention | Webpage Translation: Webseiten-Adresse bis zu 5 Jahre (wenn nicht in Private Browsing); sonst nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.apple.com/legal/privacy/data/en/safari/
- AGB/Terms: https://www.apple.com/legal/sla/
- Transparency Report: https://www.apple.com/legal/transparency/
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Safari kann je nach aktivierten Features Daten an Apple und teils Drittanbieter senden (z.B. Safe Browsing). Wichtige Schutzfunktionen und Netzwerkflüsse sind über Safari-Einstellungen steuerbar (z.B. Cross-Site-Tracking, IP-Schutz, Phishing-Checks, iCloud-Sync).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Feature-abhängig, u.a. Daten zur Anti-Tracking-Funktion, Safe-Browsing-Checks, Übersetzungsanfragen, optional iCloud-Sync-Daten.
- **Wofür:** u.a. Schutz vor Cross-Site-Tracking, Phishing/Malware-Erkennung, Übersetzung von Webseiten, Geräte-Sync.
- **Weitergabe/Subprozessoren:** Safe-Browsing-Checks können an **Google Safe Browsing** gehen; je nach Region auch **Tencent Safe Browsing**. Für **Hide IP Address** wird ein Relay-Modell mit zwei getrennten Relays beschrieben (Betreiber nicht im Detail benannt).
- **Drittlandtransfer:** Nicht angegeben (siehe Apple Privacy Policy).
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend.
- **Kontakt/DSAR/DPA:** Apple verweist auf zentrale Privacy-Informationen/Privacy Policy (Details siehe Apple Privacy Policy).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Teilweise (z.B. Tracking-Schutz ist laut Apple standardmäßig aktiv; einzelne Features sind optional).
- **Abschaltbar?** Ja, mehrere Privacy-/Security-Features sind in Safari-Einstellungen umschaltbar.
- **Wo (Menüpfad):**
  - iOS/iPadOS: **Einstellungen → Apps → Safari**
  - macOS: **Safari → Einstellungen → Datenschutz / Sicherheit / Erweiterungen**

**Logs & Retention:**
- **Logging-Level:** configurable
- **Aufbewahrung:** Webpage Translation: Webseiten-Adresse bis zu **5 Jahre** (wenn nicht in Private Browsing); sonst nicht angegeben.
- **Lösch-/Opt-out-Optionen:** Opt-out per Toggle (z.B. Fraudulent Website Warning, Hide IP Address, Privacy Preserving Ad Measurement) in Safari-Einstellungen.

**Abwägung am Punkt:** Mehr Schutzfunktionen (Safe-Browsing, Übersetzung, IP-Relays) können zusätzliche Netzwerkflüsse erzeugen; weniger davon reduziert Metadaten, kann aber Sicherheit/Komfort mindern.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Passkeys werden als **Ende-zu-Ende-verschlüsselt** beschrieben und via iCloud Keychain synchronisiert (wenn genutzt).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Passkeys werden unterstützt; Konto-Schutz hängt ansonsten vom Apple-Account ab (nur relevant, wenn iCloud-Sync genutzt wird).
- **Recovery/Account-Wiederherstellung:** Nicht zutreffend für Safari ohne Konto; bei iCloud-Sync gelten Apple-Account-Recovery-Mechanismen.
- **Vuln-Handling / Security-Kontakt:** Apple bietet einen offiziellen Meldeweg für Security/Privacy-Vulnerabilities sowie ein Security-Bounty-Programm; Security-Updates werden regelmäßig als Security Content Notes veröffentlicht.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Cross-Site-Tracking blockieren**  
   iOS/iPadOS: **Einstellungen → Apps → Safari → Prevent Cross-Site Tracking**  
   macOS: **Safari → Einstellungen → Datenschutz → Cross-Site-Tracking verhindern** *(Wortlaut kann je nach Version leicht abweichen)*  
   **Prüfen:** Schalter ist aktiv; Testseite zeigt weniger Third-Party-Cookies.
2) **IP-Schutz gegen Tracker aktivieren**  
   iOS/iPadOS: **Einstellungen → Apps → Safari → Hide IP Address → Trackers Only**  
   **Prüfen:** Option steht nicht auf „Off“.
3) **Phishing/Malware-Warnungen bewusst konfigurieren**  
   iOS/iPadOS: **Einstellungen → Apps → Safari → Fraudulent Website Warning**  
   **Prüfen:** aktiv, wenn du den Check nutzen willst; deaktiviert nur, wenn du bewusst darauf verzichtest.

**Stolpersteine:**
- **Erweiterungen** können Webseiten lesen/modifizieren: Berechtigungen eng setzen (Abwägung: Komfort/Features vs. zusätzliche Zugriffsmöglichkeiten).

<details>
<summary>Profil B (Datensparsam)</summary>

- **iCloud Safari Sync deaktivieren**, wenn du keinen Geräte-Sync brauchst: iOS/iPadOS → **Einstellungen → [dein Name] → iCloud → „Safari“ aus**.  
- **Private Browsing häufiger nutzen** (keine iCloud-Sync-Tabs, weniger lokale Spuren).  
- **Erweiterungen minimieren** und Website-Zugriff auf „nur diese Seite/1 Tag“ begrenzen (sofern angeboten).  
**Abwägung:** weniger Komfort (Sync, Extensions), mehr Handarbeit bei Multi-Device-Nutzung.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Private Browsing konsequent** + Fenster-Sperre nutzen (wenn verfügbar), um lokale Spuren zu reduzieren.  
- **Kein iCloud-Sync für Safari/Keychain**, wenn du Geräte-Korrelation minimieren willst.  
- **Erweiterungen komplett vermeiden**, da sie eine große Angriffs-/Tracking-Fläche darstellen können.  
**Abwägung:** deutlicher Komfortverlust (kein Sync, weniger Features), teils geringere Kompatibilität.

</details>

## Features
- Intelligent Tracking Prevention (ITP) / Cross-Site-Tracking-Schutz
- Hide IP Address (Trackers Only / Trackers and Websites via Private Relay)
- Privacy Report
- Private Browsing (ohne iCloud-Sync von Tabs/History)
- Fraudulent Website Warning (Safe Browsing)
- Privacy Preserving Ad Measurement
- Webpage Translation (optional, serverseitig bei Apple)
- Passkeys + iCloud Keychain Sync
- Erweiterungen mit granularen Berechtigungen

## Alternativen
- Firefox (Abwägung: andere Telemetrie-/Sync-Optionen, andere Engine/Ökosystem)
- Brave (Abwägung: eigenes Blocking-/Feature-Set, teils zusätzliche Komponenten)
- Chromium/Chrome (Abwägung: andere Datenflüsse/Account-Integration)
- Tor Browser (Abwägung: sehr hoher Komfort-/Kompatibilitätsverlust)

## Nicht gelöst / offene Punkte
- Unklar: detaillierte Log-/Retention-Angaben zu Relay-Betreibern bei „Hide IP Address/Private Relay“ (öffentliche Dokumentation je nach Region/Plan).

## Quellen

- Firefox (Trade-off: "andere Telemetrie-/Sync-Modelle, andere Engine)
- Brave (Trade-off: "eigenes Feature-/Blocking-Konzept, teils zusätzliche Komponenten)
- Chromium/Chrome (Trade-off: "andere Datenflüsse/Account-Integration)
- Tor Browser (Trade-off: "stark eingeschränkter Komfort/Kompatibilität)
- https://github.com/WebKit/WebKit
- [Safari & Privacy (Apple Legal)](https://www.apple.com/legal/privacy/data/en/safari/)
- [Privacy Features – Safari (Apple)](https://www.apple.com/privacy/features/)
- [Apple Privacy (Übersicht, inkl. Safari/Private Browsing Hinweise)](https://www.apple.com/privacy/)
- [Apple Privacy Policy (Legal)](https://www.apple.com/legal/privacy/en-ww/)
- [Apple Transparency Report](https://www.apple.com/legal/transparency/)
- [Report a security or privacy vulnerability (Apple Support)](https://support.apple.com/en-us/102549)
- [The WebKit Open Source Project – Licensing](https://webkit.org/project/)
- [WebKit Quellcode (GitHub)](https://github.com/WebKit/WebKit)
