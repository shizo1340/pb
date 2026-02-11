---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Matomo"
url: "/anbieter/matomo/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-18"
robots: "index,follow"
description: "Kurzprofil von Matomo (Kategorie: Analytics)."
provider: ""
name: "Matomo"
category: "Analytics"
website: "https://matomo.org/"
repo: "https://github.com/matomo-org/matomo"
license: "GPL-3.0-or-later"
policies: ""
privacy: "https://matomo.org/matomo-cloud-privacy-policy/"
terms: "https://matomo.org/matomo-cloud-terms-of-service/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "no"
phone_required: "Unklar (keine Telefonpflicht dokumentiert)"
kyc_required: "Unklar"
jurisdiction: "Neuseeland (InnoCraft Ltd)"
region: "eu"
logs: "configurable"
retention: "configurable"
retention_notes: "konfigurierbar (u.a. automatisches Löschen alter Rohdaten; Empfehlung: 3–6 Monate Rohdaten)"
retention_max_days: "180"
data_notes: "On-Premise speichert Analytics-Daten in der eigenen Datenbank; Matomo Cloud nutzt benannte Subprozessoren (Liste öffentlich)."
features: ""
alternatives: ""
payment_processors: "Paddle.com (Matomo Cloud; Merchant of Record), Braintree (Matomo Marketplace; laut Anbieter)"
sources: ""
---
## Kurzprofil

Matomo ist ein Anbieter aus der Kategorie **Analytics**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Web-/App-Analytics **selbst hosten** willst oder eine **Cloud-Instanz mit DPA/Subprozessorliste** brauchst und Privacy-Optionen gezielt konfigurieren möchtest.
- **Weniger geeignet wenn:** du **gar keine** Verarbeitung von Nutzer-/Traffic-Daten im eigenen Scope haben willst (Analytics ist hier das Produkt) oder du keine Kapazität für Betrieb/Administration hast (bei On-Premise).
- **Wichtigster Abwägung:** **Datenkontrolle & Konfiguration** vs. **Betriebsaufwand/Komplexität** (Self-Hosting) bzw. **Account + Subprozessoren** (Cloud).

## Sofortmaßnahmen
- **IP-Anonymisierung aktivieren:** reduziert Personenbezug in Besucher-Daten (Abwägung: weniger genaue Geolokation/Diagnose).
- **Alte Rohdaten automatisch löschen:** minimiert Langzeit-Metadaten (Abwägung: weniger historische Detailauswertung).
- **2FA aktivieren und erzwingen:** senkt Account-Risiko bei Passwort-Leaks (Abwägung: Recovery-Codes sicher verwahren).

## Entscheidungshilfe
- Wenn du **volle Kontrolle** über Speicherung und Zugriff willst, dann nutze **Matomo On-Premise** (Abwägung: Betrieb/Updates/Backups liegen bei dir).
- Wenn du **Hosting und Wartung** abgeben willst, dann nutze **Matomo Cloud** (Abwägung: Konto nötig, Subprozessoren beteiligt).
- Wenn du **Datenminimierung** brauchst, dann aktiviere **IP-Anonymisierung + kurze Retention + Opt-out/Do-Not-Track** (Abwägung: weniger Granularität und Historie).
- Wenn du **möglichst wenig ausgehende Verbindungen** willst (Self-Hosting), dann deaktiviere Internet-Features in der Server-Konfiguration (Abwägung: Updates/Marketplace/GeoIP-Downloads eingeschränkt).
- Wenn mehrere Personen Zugriff haben, dann setze **2FA-Pflicht + starke Passwörter + eingeschränkte Domains/IP-Ranges** (Abwägung: mehr Admin-Aufwand).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Matomo |
| Kategorie | Analytics |
| Website | https://matomo.org/ |
| Quellcode | https://github.com/matomo-org/matomo |
| Lizenz | GPL-3.0-or-later |
| Preismodell | mixed (On-Premise kostenlos, Cloud kostenpflichtig) |
| Free Tier | yes (On-Premise) |
| Open Source | yes |
| Konto erforderlich | Nein (On-Premise), Ja (Matomo Cloud) |
| Telefon erforderlich | Unklar (keine Telefonpflicht dokumentiert) |
| KYC erforderlich | Unklar |
| Zahlungsabwicklung | Paddle.com (Matomo Cloud), Braintree (Matomo Marketplace; laut Anbieter) |
| Jurisdiktion | Neuseeland (InnoCraft Ltd) |
| Logs | configurable |
| Retention | konfigurierbar (auto-delete; Empfehlung: 3–6 Monate Rohdaten) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://matomo.org/matomo-cloud-privacy-policy/
- AGB/Terms: https://matomo.org/matomo-cloud-terms-of-service/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- ISO/IEC 27001:2022 Zertifizierung (Matomo Cloud; laut Anbieter)
- PCI DSS: jährliche Assessment-Angabe für Matomo Marketplace; Matomo Cloud Zahlungen via Paddle (PCI DSS SAQ A, laut Anbieter)

**Daten-Notizen (kurz):**
Matomo On-Premise speichert Analytics-Daten in der eigenen Datenbank (Self-Hosting). Matomo Cloud verarbeitet Kundendaten unter DPA und nutzt eine öffentlich dokumentierte Subprozessorliste.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - **Matomo Cloud (Customer-Daten):** u.a. Account-/Kontakt- und Abrechnungsdaten sowie Nutzungs-/Aktivitätsdaten laut Cloud Privacy Policy und DPA.  
  - **Tracking-Daten (Analytics):** Website-/App-Nutzungsdaten, je nach Konfiguration inkl. IP/Request-Daten; Privacy-Optionen sind in Matomo konfigurierbar.
- **Wofür:** Bereitstellung und Betrieb der Cloud-Services, Support, Abrechnung sowie Betrieb/Sicherheit laut Cloud Privacy Policy/Terms.
- **Weitergabe/Subprozessoren:** Matomo Cloud listet Subprozessoren öffentlich (z.B. AWS EU, Oblivion Cloud Control, Tideways) inkl. Zweck/Standort.
- **Drittlandtransfer:** Subprozessorliste nennt u.a. EU-Verarbeitung (Frankfurt) und Hinweise zu EU-US Data Privacy Framework bei AWS.
- **Zahlungsabwicklung/Payment Processor:** Matomo Cloud Bestellprozess kann über Paddle.com laufen (Merchant of Record); PCI-Info ebenfalls dokumentiert.
- **Kontakt/DSAR/DPA:** DPA ist öffentlich verfügbar; Cloud Privacy Policy beschreibt Rechte/Anfragen für Kundendaten.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Bei On-Premise können einzelne Funktionen ausgehende Internetverbindungen nutzen (z.B. Updates/Marketplace/GeoIP je nach Einrichtung).
- **Abschaltbar?** Ja: Self-Hosting kann ohne Internet betrieben werden; Internet-Features lassen sich per Konfiguration deaktivieren (`enable_internet_features = 0` in `config/config.ini.php`).
- **Wo (Menüpfad):** Self-Hosting: Server-Datei `config/config.ini.php` (nicht im UI-Schalter).

**Logs & Retention:**
- **Logging-Level:** configurable (Retention/Datenerhebung sind in Matomo konfigurierbar).
- **Aufbewahrung:** konfigurierbar; Matomo beschreibt automatisches Löschen alter Rohdaten und nennt als praktikable Spanne häufig **3–6 Monate** für Rohdaten (Kontext: Datenschutz/Minimierung).
- **Lösch-/Opt-out-Optionen:** Privacy-Funktionen enthalten Opt-out/Anonymisierung sowie Daten-Retention-Einstellungen (je nach Einrichtung).

**Abwägung am Punkt:** Weniger Rohdaten und weniger Internet-Features reduzieren Metadaten, können aber Betrieb/Diagnose und Auswertungs-Detailtiefe einschränken.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben (Matomo ist serverseitige Analytics; Transport-/Server-Sicherheit hängt von Deployment/TLS ab).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (klassische Passwort-Login-Mechanik; Details nicht in den genutzten Quellen spezifiziert).
- **MFA/2FA/Passkeys/Hardware-Keys:** **2FA vorhanden** (App-basierte Tokens) inkl. Recovery Codes; kann von Superusern für alle Nutzer erzwungen werden.
- **Recovery/Account-Wiederherstellung:** Recovery Codes werden bei 2FA-Einrichtung erzeugt; bei Verlust sind Admin-Reset oder CLI-Disable möglich (Self-Hosting).
- **Vuln-Handling / Security-Kontakt:** Security-/Guides sind dokumentiert; Bug-Bounty/Responsible-Disclosure ist auf der Security-Seite beschrieben.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: solide Sicherheit ohne Spezialsetup.

1) **2FA aktivieren** (für Admins mindestens).  
   **Wo:** Administration (Zahnrad) → Personal → Security → „Turn on Two-Factor Authentication“.  
   **Prüfen:** 2FA-Abfrage beim Login + Recovery Codes sicher abgelegt.
2) **Starke Passwörter erzwingen** (Superuser).  
   **Wo:** Administration → System → General settings → Login → „Force strong passwords“.  
   **Prüfen:** UI zeigt aktiv; neue Passwörter müssen Mindestanforderungen erfüllen.
3) **Datenminimierung einschalten** (Privacy + Retention).  
   **Wo:** Administration → Privacy (je nach Einrichtung) → IP-Anonymisierung + „Delete old visitor logs“/Retention.  
   **Prüfen:** IP wird maskiert; Auto-Deletion ist aktiv und greift nach Ablauf.

**Stolpersteine:**
- Kürzere Retention reduziert Risiko, kann aber Analysen über lange Zeiträume erschweren (Abwägung: Minimierung vs. Langzeit-Historie).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Self-Hosting bevorzugen**, wenn du Datenflüsse zu Cloud/Subprozessoren vermeiden willst.  
- **Cookieless/Consent-Mode nutzen**, falls du Nutzerbindung reduzieren möchtest (Abwägung: weniger Wiedererkennung über Sessions).  
- **Internet-Features deaktivieren** (Self-Hosting): `enable_internet_features = 0` in `config/config.ini.php`.  
  **Abwägung:** eingeschränkte Auto-Updates/Marketplace/GeoIP-Downloads; mehr manueller Betrieb.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Admin-Zugang stark einschränken:** Zugriff nur über VPN/Allowlist (Matomo bietet IP-Restriktionen laut Security-Guides) und 2FA-Pflicht.  
- **Getrennte Infrastruktur:** dedizierte VM/Segmentierung, strikte Firewall-Regeln (nur HTTP(S) inbound; outbound minimal, ggf. deaktiviert).  
- **Harte Datenminimierung:** sehr kurze Rohdaten-Retention + regelmäßige Export/Backup-Strategie, die Metadaten minimiert.  
**Abwägung:** deutlich mehr Betriebsaufwand und weniger Komfort bei Updates/Support.

</details>

## Features
- On-Premise (Self-Hosting) und Matomo Cloud
- Privacy-Konfiguration (u.a. IP-Anonymisierung, Opt-out/Do-Not-Track je nach Einrichtung)
- Konfigurierbare Datenaufbewahrung (inkl. automatischem Löschen alter Rohdaten)
- 2FA inkl. Recovery Codes; erzwingbare Passwortregeln
- Öffentliche Subprozessorliste (Matomo Cloud)

## Alternativen
- Plausible (Analytics; Abwägung: weniger Funktions-/Detailtiefe möglich, dafür oft weniger Konfiguration)
- Fathom (Analytics; Abwägung: weniger Granularität möglich, dafür oft schlankere Reports)
- Umami (Analytics; Abwägung: weniger Compliance-/Enterprise-Features möglich, dafür Self-Hosting-fokussiert)

## Nicht gelöst / offene Punkte
- Die konkrete Ausgestaltung von TLS/Transportverschlüsselung liegt beim Deployment (Self-Hosting) und ist nicht als feste Matomo-Eigenschaft dokumentiert.
- Details zur ISO/IEC-27001-Zertifikatsurkunde (Scope/Zertifikatsnummer) sind in der verlinkten Anbieter-Info nicht vollständig im Text ersichtlich.

## Quellen

- ISO/IEC 27001: "2022 Zertifizierung (Matomo Cloud; laut Anbieter)
- PCI DSS: "jährliche Assessment-Angabe für Matomo Marketplace; Matomo Cloud Zahlungen via Paddle (PCI DSS SAQ A, laut Anbieter)
- Plausible (Analytics; anderer Schwerpunkt: "stark reduzierter Tracking-/Konfigurationsumfang, weniger Detailtiefe möglich)
- Fathom (Analytics; anderer Schwerpunkt: "simple Metriken, weniger Granularität möglich)
- Umami (Analytics; anderer Schwerpunkt: "Self-Hosting-first, weniger Enterprise-/Compliance-Funktionen möglich)
- [Matomo – Website](https://matomo.org/)
- [GitHub Repo: "matomo-org/matomo](https://github.com/matomo-org/matomo)
- [LICENSE (GPL-3.0-or-later)](https://github.com/matomo-org/matomo/blob/master/LICENSE)
- [Matomo Cloud Privacy Policy](https://matomo.org/matomo-cloud-privacy-policy/)
- [Matomo Cloud Terms of Service](https://matomo.org/matomo-cloud-terms-of-service/)
- [Matomo Cloud DPA](https://matomo.org/matomo-cloud-dpa/)
- [Matomo Cloud DPA – Sub-processors](https://matomo.org/matomo-cloud-dpa/subprocessors/)
- [Privacy: "Configure Privacy Settings in Matomo (FAQ)](https://matomo.org/faq/general/configure-privacy-settings-in-matomo/)
- [Data Retention (FAQ innerhalb Privacy-Setup)](https://matomo.org/faq/general/faq_27052/)
- [Betrieb ohne Internet: "Matomo On-Premise (FAQ)](https://matomo.org/faq/on-premise/how-do-i-configure-matomo-on-a-server-without-internet-connection/)
- [Security Guide (Übersicht)](https://matomo.org/guide/manage-matomo/security/)
- [Configure Matomo (Cloud) for security (FAQ)](https://matomo.org/faq/cloud/configure-matomo-cloud-for-security/)
- [Configure Matomo (On-Premise) for security (FAQ)](https://matomo.org/faq/on-premise/how-to-configure-matomo-for-security/)
- [2FA: "What is Two-Factor Authentication? (FAQ)](https://matomo.org/faq/general/faq_27245/)
- [Payment: "What is Paddle in relation to Matomo? (FAQ)](https://matomo.org/faq/troubleshooting/what-is-paddle-in-relation-to-matomo/)
- [PCI Compliance (FAQ)](https://matomo.org/faq/pci-compliance/)
- [ISO 27001 Zertifizierung (Anbieter-Info)](https://matomo.org/2025/06/matomo-cloud-iso27001-certified/)
- [Matomo – Website](https://matomo.org/)
- [GitHub Repo: matomo-org/matomo](https://github.com/matomo-org/matomo)
- [LICENSE (GPL-3.0-or-later)](https://github.com/matomo-org/matomo/blob/master/LICENSE)
- [Matomo Cloud Privacy Policy](https://matomo.org/matomo-cloud-privacy-policy/)
- [Matomo Cloud Terms of Service](https://matomo.org/matomo-cloud-terms-of-service/)
- [Matomo Cloud DPA](https://matomo.org/matomo-cloud-dpa/)
- [Matomo Cloud DPA – Sub-processors](https://matomo.org/matomo-cloud-dpa/subprocessors/)
- [Privacy: Configure Privacy Settings in Matomo (FAQ)](https://matomo.org/faq/general/configure-privacy-settings-in-matomo/)
- [Data Retention (FAQ innerhalb Privacy-Einrichtung)](https://matomo.org/faq/general/faq_27052/)
- [Betrieb ohne Internet: Matomo On-Premise (FAQ)](https://matomo.org/faq/on-premise/how-do-i-configure-matomo-on-a-server-without-internet-connection/)
- [Security Guide (Übersicht)](https://matomo.org/guide/manage-matomo/security/)
- [Configure Matomo (Cloud) for security (FAQ)](https://matomo.org/faq/cloud/configure-matomo-cloud-for-security/)
- [Configure Matomo (On-Premise) for security (FAQ)](https://matomo.org/faq/on-premise/how-to-configure-matomo-for-security/)
- [2FA: What is Two-Factor Authentication? (FAQ)](https://matomo.org/faq/general/faq_27245/)
- [Payment: What is Paddle in relation to Matomo? (FAQ)](https://matomo.org/faq/troubleshooting/what-is-paddle-in-relation-to-matomo/)
- [PCI Compliance (FAQ)](https://matomo.org/faq/pci-compliance/)
- [ISO 27001 Zertifizierung (Anbieter-Info)](https://matomo.org/2025/06/matomo-cloud-iso27001-certified/)
