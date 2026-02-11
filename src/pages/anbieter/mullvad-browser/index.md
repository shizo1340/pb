---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Mullvad Browser"
url: "/anbieter/mullvad-browser/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-19"
robots: "index,follow"
description: "Kurzprofil von Mullvad Browser (Kategorie: Browser)."
provider: ""
name: "Mullvad Browser"
category: "Browser"
website: "https://mullvad.net/en/browser"
repo: "https://github.com/mullvad/mullvad-browser"
license: "MPL-2.0"
policies: ""
privacy: "https://mullvad.net/en/help/privacy-policy"
terms: "https://mullvad.net/en/help/terms-service"
transparency: "https://mullvad.net/en/help/how-we-handle-government-requests-user-data"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Schweden (Mullvad VPN AB, Göteborg)"
region: "eu"
logs: "none"
retention: "specified"
retention_notes: "Nicht zutreffend (keine Telemetrie laut Anbieter); lokale Daten je nach Browser-Session"
data_notes: "Private Browsing standardmäßig aktiv; Telemetrie/Crash-Reporting deaktiviert; definierte Hintergrundverbindungen (Updates/DoH/Extension-Updates)."
features: ""
alternatives: ""
payment_processors: "Nicht zutreffend (Browser ist kostenlos)"
sources: ""
---
## Kurzprofil

Mullvad Browser ist ein Anbieter aus der Kategorie **Browser**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen Browser mit **Anti-Fingerprinting-Defaults** nutzen willst, der **ohne Konto** auskommt und laut Anbieter **keine Telemetrie** sendet.
- **Weniger geeignet wenn:** du auf **maximale Anonymität über ein spezielles Anonymisierungsnetzwerk** angewiesen bist oder du viele Anpassungen/Extensions brauchst, die dich wieder **eindeutiger** machen können.
- **Wichtigster Abwägung:** **„Unauffälligkeit durch Gleichförmigkeit“ vs. Komfort/Kompatibilität** (jede Abweichung von Defaults kann Fingerprinting-Risiken erhöhen; höhere Security-Level können Websites spürbar einschränken).

## Sofortmaßnahmen
- **Signatur prüfen** vor der Installation (reduziert Supply-Chain-Risiko).
- **Security-Level auf „Safer“/„Safest“** setzen, wenn du auf unbekannten Seiten unterwegs bist (Abwägung: weniger Website-Funktionen).
- **„New identity“ nutzen**, wenn du eine Sitzung schnell entkoppeln willst (Abwägung: Tabs/Downloads werden beendet; IP ändert sich nicht automatisch).

## Entscheidungshilfe
- Wenn du **Fingerprinting reduzieren** willst, dann nutze Mullvad Browser **mit unveränderten Defaults** (Abwägung: weniger „Tuning“, weniger Personalisierung).
- Wenn du **ohne VPN** surfst, dann bleibt deine **IP-Adresse sichtbar** (Abwägung: weniger Einrichtung, aber mehr Zuordenbarkeit über IP).
- Wenn du **mehr Angriffsschutz gegen Web-Features** brauchst, dann erhöhe den **Security-Level** (Abwägung: JavaScript/Medien können ausfallen).
- Wenn du **Sitzungen trennen** willst, dann nutze **„New identity“** oder mehrere getrennte Profile/VMs (Abwägung: zusätzlicher Aufwand).
- Wenn du **DNS-Metadaten** reduzieren willst, dann beachte die **DoH-Konfiguration** (Abwägung: DNS geht über den eingestellten Resolver, nicht über deinen Standard-DNS).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Mullvad Browser |
| Kategorie | Browser |
| Website | https://mullvad.net/en/browser |
| Quellcode | https://github.com/mullvad/mullvad-browser |
| Lizenz | MPL-2.0 |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend (Browser ist kostenlos) |
| Jurisdiktion | Schweden (Mullvad VPN AB, Göteborg) |
| Logs | none |
| Retention | Nicht zutreffend (keine Telemetrie laut Anbieter); lokale Daten je nach Browser-Session |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://mullvad.net/en/help/privacy-policy
- AGB/Terms: https://mullvad.net/en/help/terms-service
- Transparency Report: https://mullvad.net/en/help/how-we-handle-government-requests-user-data
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben (für Mullvad Browser werden in den Anbieterquellen keine unabhängigen Audits genannt).

**Daten-Notizen (kurz):**
- Private Browsing ist standardmäßig aktiv (Cookies/Cache/History nicht zwischen Sessions gespeichert).
- Telemetrie und Crash-Reporting sind laut Anbieter deaktiviert; es gibt dennoch definierte automatische Verbindungen (Updates/DoH/Extension-Updates).
- DoH ist vorkonfiguriert (ohne Fallback), wenn du das nicht willst: bewusst prüfen.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Anbieter **keine** (Mullvad Browser selbst).  
- **Wofür:** Nicht zutreffend (kein Telemetrie-/Tracking-Zweck genannt).
- **Weitergabe/Subprozessoren:** Für den Browser selbst nicht angegeben; für Support/Website gelten die allgemeinen Anbieter-Richtlinien.
- **Drittlandtransfer:** In der Privacy Policy wird für personenbezogene Daten-Verarbeitung (z.B. Support/Payments) EU/EEA genannt; für den Browser selbst keine Datenerhebung angegeben.
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend (Browser ist kostenlos).
- **Kontakt/DSAR/DPA:** DSAR-Kontakt laut Privacy Policy über support@mullvadvpn.net.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nein (laut Anbieter deaktiviert; Crash-Reporting ebenfalls deaktiviert).
- **Abschaltbar?** Nicht nötig (laut Anbieter compile-time deaktiviert).
- **Wo (Menüpfad):** Nicht zutreffend (kein Schalter erforderlich).

**Logs & Retention:**
- **Logging-Level:** none
- **Aufbewahrung:** Nicht zutreffend (keine Telemetrie laut Anbieter)
- **Lösch-/Opt-out-Optionen:** Browserdaten sind primär lokal; „New identity“ setzt die Session zurück.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht zutreffend (Browser-Produkt; kein eigener E2E-Dienst).
- **KDF/Parameter/Schlüsselableitung:** Nicht zutreffend.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (kein Konto).
- **Recovery/Account-Wiederherstellung:** Nicht zutreffend.
- **Vuln-Handling / Security-Kontakt:** Meldung von Bugs/Vulnerabilities laut Anbieter via support@mullvadvpn.net (optional PGP-verschlüsselt) oder über GitHub.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (2FA/MFA), falls angeboten.  
   **Nicht zutreffend:** Mullvad Browser nutzt kein Konto.
2) **Private Browsing & Session-Reset nutzen** (Default + „New identity“ bei Bedarf).  
   **Prüfen:** Neues Fenster/Session enthält keine alten Cookies; „New identity“ schließt Tabs und setzt zurück.
3) **Security-Level bei Bedarf erhöhen** (Standard → Safer/Safest).  
   **Prüfen:** Einstellungen → Security Level sichtbar; JS/Medien-Verhalten ändert sich wie beschrieben.

**Stolpersteine:**
- Viele Anpassungen (z.B. zusätzliche Extensions) können dich **eindeutiger** machen (Abwägung: Komfort/Features vs. Gleichförmigkeit/Fingerprinting-Schutz).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze den Browser möglichst **ohne zusätzliche Extensions** und ohne UI/Config-Änderungen, die dich aus dem „Crowd“-Profil herauslösen.
- Verwende **„New identity“** gezielt nach Logins/Accounts, die dich identifizieren.
- Prüfe bewusst die automatisch aufgebauten Verbindungen (Updates/DoH) und entscheide, ob das zu deinem Metadatenmodell passt.  
**Abwägung:** weniger Komfort (z.B. weniger Erweiterungen/Personalisierung), dafür konsistenteres Fingerprinting-Profil.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze **separate Umgebungen** (z.B. VM) für stark getrennte Identitäten/Workflows.
- Nutze **„Safest“** für riskante Inhalte/unsichere Quellen (Abwägung: deutlich mehr Site-Breakage).
- Wenn du Linux nutzt: Installation über Quellcode kann zusätzliche OS-Schutzmechanismen (z.B. AppArmor-Profil) mitbringen (Abwägung: weniger „portable“ Installation).  
**Abwägung:** hoher Aufwand, stärkere Einschränkungen bei Komfort/Kompatibilität.

</details>

## Features
- Private Browsing standardmäßig aktiv (keine Cookies/Cache/History zwischen Sessions).
- Anti-Fingerprinting (u.a. ResistFingerprinting & Letterboxing).
- Security-Level (Standard/Safer/Safest) zum Reduzieren gefährlicher Web-Features.
- „New identity“-Button zum schnellen Session-Reset.
- DoH vorkonfiguriert (Mullvad DoH, ohne Fallback).
- uBlock Origin integriert (plus zusätzliche Listen laut „Hard facts“).
- NoScript integriert (u.a. Backend für Security-Level).
- Telemetrie und Crash-Reporting laut Anbieter vollständig deaktiviert.
- Hintergrundverbindungen sind laut Anbieter dokumentiert (u.a. Updates, Zertifikatsprüfungen, Filterlisten).

## Alternativen
- **Tor Browser:** ähnlicher Browser-Fokus, aber anderes Netzwerkmodell (Abwägung: anderes Performance-/Blockierungsprofil).
- **Firefox (ESR) mit Härtung-Profil:** mehr Anpassbarkeit (Abwägung: Wartung/Kompatibilitätsarbeit; Fingerprinting kann durch Abweichungen steigen).
- **Chromium-basierte Browser mit Blockern:** andere Engine/Kompatibilität (Abwägung: andere Defaults und anderes Fingerprinting-/Feature-Profil).

## Nicht gelöst / offene Punkte
- Unklar: Ob und wie **Server-seitige Logs/Retention** bei den Mullvad-eigenen Browser-Endpunkten (Update/DoH/Extension-Update) dokumentiert sind.

## Quellen

- https://github.com/mullvad/mullvad-browser
- [Mullvad Browser – Overview](https://mullvad.net/en/browser)
- [Mullvad Browser – Hard facts (Settings/Telemetry/Connections)](https://mullvad.net/en/browser/hard-facts)
- [Mullvad Help Center – Mullvad Browser (FAQ, DE)](https://mullvad.net/de/help?Topic=mullvad-browser)
- [Install Mullvad Browser](https://mullvad.net/en/help/install-mullvad-browser)
- [Verifying Mullvad Browser signature](https://mullvad.net/en/help/verifying-mullvad-browser-signature)
- [Privacy policy](https://mullvad.net/en/help/privacy-policy)
- [How we handle government requests for user data](https://mullvad.net/en/help/how-we-handle-government-requests-user-data)
- [How to report a bug or vulnerability](https://mullvad.net/en/help/how-report-bug-or-vulnerability)
- [Quellcode: mullvad/mullvad-browser](https://github.com/mullvad/mullvad-browser)
