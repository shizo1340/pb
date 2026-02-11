---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / F-Droid"
url: "/anbieter/f-droid/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "no"
status: "done"
updated: "2026-01-12"
robots: "index,follow"
description: "Kurzprofil von F-Droid (Kategorie: Android App Store)."
provider: ""
name: "F-Droid"
category: "Android App Store"
website: "https://f-droid.org/"
repo: "https://gitlab.com/fdroid"
license: "GPL-3.0-or-later (Client) / AGPL-3.0-or-later (Server-Tools) — komponentenabhängig"
policies: ""
privacy: "https://forum.f-droid.org/privacy"
terms: "https://forum.f-droid.org/tos"
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
jurisdiction: "USA (Kalifornien; Terms of Service für Website/Forum)"
region: "us"
logs: "minimal"
retention: "verylong"
retention_notes: "Server-Logs (IP): max. 90 Tage; Forum-Account-IP: max. 5 Jahre (laut Privacy Policy)"
retention_max_days: "1825"
data_notes: "Kein Konto nötig fürs App-Browsing/Installieren. Beim Abruf von Repository-Daten sieht der jeweilige Repo-Server typischerweise IP/Requests; F-Droid beschreibt zusätzlich ein Opt-in-Metriksystem."
features: ""
alternatives: ""
payment_processors: "Nicht angegeben (Spenden optional, z.B. Open Collective/Liberapay)"
sources: ""
---
## Kurzprofil

F-Droid ist ein Anbieter aus der Kategorie **Android App Store**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Apps ohne Google-Konto verwalten willst und Wert auf nachvollziehbare Integritätsprüfungen (Repo-Signaturen/APK-Hashes) legst.
- **Weniger geeignet wenn:** du möglichst wenig Metadaten an Server preisgeben willst, aber kein Tor/Proxy nutzen kannst (Repo-Server sehen sonst typischerweise IP + Abrufe).
- **Wichtigster Abwägung:** Komfort (zentraler Store + Auto-Updates) vs. Netzwerk-Metadaten (welche Repos/Apps du abrufst).

## Sofortmaßnahmen
- **F-Droid.apk vor der Installation verifizieren** (PGP-Signatur) → reduziert Risiko von manipulierten Downloads.
- **Opt-in-Metriken aus lassen** → verhindert zusätzliche Diagnosedaten-/Nutzungsberichte vom Client.
- **Nur benötigte Repos aktiv lassen** → weniger unnötige Netzwerkabrufe/Metadaten zu Dritt-Repos.

## Entscheidungshilfe
- Wenn du **nur freie Apps** über einen Store-Workflow (Updates/Benachrichtigungen) möchtest, dann nutze F-Droid mit dem Standard-Repo (Abwägung: Repo-Server sieht Abrufe).
- Wenn du **eigene Quellen** verteilen willst (Team/Projekt), dann richte ein **eigenes F-Droid-kompatibles Repo** ein und aktiviere nur dieses im Client (Abwägung: Betrieb/Signierschlüssel-Handling liegt bei dir).
- Wenn du **Auto-Updates** aktivierst, dann akzeptierst du weniger manuelle Kontrolle über Installationszeitpunkte (Abwägung: Bequemlichkeit vs. „Änderungen passieren im Hintergrund“).
- Wenn du **Metadaten minimieren** willst, dann nutze Tor/Proxy (falls in deinem Einrichtung verfügbar) und reduziere die Anzahl aktiver Repos (Abwägung: langsamer/fragiler, mehr Aufwand).
- Wenn du **Metriken/Nutzungsberichte** vermeiden willst, dann lasse Expert Mode/„Send to F-Droid Metrics“ aus (Abwägung: weniger Feedback für Projekt/Entwickler).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | F-Droid |
| Kategorie | Android App Store |
| Website | https://f-droid.org/ |
| Quellcode | https://gitlab.com/fdroid |
| Lizenz | GPL-3.0-or-later (Client) / AGPL-3.0-or-later (Server-Tools) — komponentenabhängig |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben (Spenden optional, z.B. Open Collective/Liberapay) |
| Jurisdiktion | USA (Kalifornien; Terms of Service für Website/Forum) |
| Logs | minimal |
| Retention | Server-Logs (IP): max. 90 Tage; Forum-Account-IP: max. 5 Jahre (laut Privacy Policy) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://forum.f-droid.org/privacy
- AGB/Terms: https://forum.f-droid.org/tos
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- [Second Audit Report (Radically Open Security, 2018)](https://f-droid.org/docs/Second_Audit_Report/)
- [Third Audit Report (Radically Open Security, 2022)](https://f-droid.org/docs/Third_Audit_Report/)

**Daten-Notizen (kurz):**
Kein Konto nötig fürs App-Browsing/Installieren. Beim Abruf von Quellcode-Daten sieht der jeweilige Repo-Server typischerweise IP/Requests; zusätzlich existiert ein **opt-in** Metriksystem für Website/Client.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - Forum/Website (bei Nutzung): E-Mail (Verifikation), ggf. Name, Cookies; IP-Adresse beim Posten; Server-Logs können IP jeder Anfrage enthalten.  
  - Client/Repos: Abrufe von Repo-Metadaten/APKs über Netzwerk (Repo-Server sieht Requests; F-Droid beschreibt Maßnahmen gegen serverseitiges Tracking).
- **Wofür:** Betrieb des Forums/Supports und Website-Funktion; bei opt-in Metriken: Nutzungsdaten ohne direkte Identifikatoren (laut Beschreibung).
- **Weitergabe/Subprozessoren:** Privacy Policy nennt „third-party service providers“ für Website-Analyse/Verbesserung, ohne öffentliche Liste.
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (Spenden optional).
- **Kontakt/DSAR/DPA:** Nicht angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Im Client: keine verpflichtende Telemetrie angegeben; Metrik-Submission ist **opt-in** (nur nach Aktivierung von Expert Mode + Install History + „Send to F-Droid Metrics“).
- **Abschaltbar?** Ja (Schalter nicht aktivieren bzw. deaktivieren).
- **Wo (Menüpfad):** Einstellungen → **Expert Mode** → **Keep Install History** → **Send to F-Droid Metrics** (nur wenn Expert Mode aktiv ist).

**Logs & Retention:**
- **Logging-Level:** minimal (Forum/Website betreiben Server-Logs; F-Droid beschreibt zusätzlich „privacy-preserving logging“ für Teile der Infrastruktur).
- **Aufbewahrung:** Privacy Policy nennt IP-Serverlogs max. 90 Tage und IPs bei Forum-Posts bis max. 5 Jahre.
- **Lösch-/Opt-out-Optionen:** Für Client-Metriken: Opt-in/Opt-out über Schalter; für Website/Forum: nicht angegeben.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Projektfeedback erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht zutreffend wie bei Messengern; Transport erfolgt über HTTPS/TLS (Repo/Website).
- **KDF/Parameter/Schlüsselableitung:** Nicht zutreffend (kein Passwort-Tresor-System).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben (Client benötigt kein Konto; Forum-Konto unabhängig).
- **Recovery/Account-Wiederherstellung:** Nicht zutreffend für Client ohne Konto; Forum-Account abhängig vom Forum-Login.
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **F-Droid.apk vor Installation verifizieren** (PGP-Signatur).  
   **Prüfen:** Signatur „Good signature“ + Fingerprint passt zur Doku.
2) **Repo-Einrichtung minimal halten** (nur benötigte Repos aktiv).  
   **Prüfen:** Repo-Liste enthält nur Standard-Repo bzw. gezielt hinzugefügte Quellen.
3) **Opt-in-Metriken deaktiviert lassen** (Expert Mode/Metrics aus).  
   **Prüfen:** „Send to F-Droid Metrics“ ist aus/nicht aktiviert.

**Stolpersteine:**
- Zusätzliche Dritt-Repositories können eigene Policies/Logs haben (Abwägung: mehr Quellen vs. mehr Metadaten an Dritte).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze Tor/Proxy im Netzwerk-Einrichtung (falls verfügbar), um IP-Metadaten gegenüber Repo-Servern zu reduzieren.
- Schalte Auto-Updates nur ein, wenn du damit leben kannst, dass Downloads/Installationen häufiger im Hintergrund passieren.
- Deaktiviere alle optionalen Features, die Install-Historie/Metrikberichte erzeugen.
**Abwägung:** mehr Aufwand, ggf. langsamer/instabiler bei Tor.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Isoliere App-Install/Updates in einem getrennten Android-Profil oder separatem Gerät (z.B. ohne persönliche Accounts).
- Verwende nur einen eigenen/vertrauenswürdigen Repo-Endpunkt (Custom Repo) und deaktiviere alle anderen Repos.
- Verifiziere Downloads/Release-Keys konsequent vor dem Erstinstall.
**Abwägung:** deutlich mehr Betriebsaufwand (Repo/Keys) und weniger Komfort bei App-Auswahl/Updates.

</details>

## Features
- Installierbarer Katalog freier Android-Apps (Browsing/Install/Updates).
- Verbindung zu beliebigen **F-Droid-kompatiblen Repositories** (Standard-Repo: f-droid.org).
- Sicherheitschecks: **Repo-Index-Signaturen** und **APK-Hashes**.
- Optional: Updates automatisch herunterladen und installieren.
- Versionen verwalten (z.B. ältere/beta Builds) + Gerätekompatibilität filtern.
- Eigene Repos erstellen/betreiben (fdroidserver; Repo-Signierschlüssel als zentraler Trust-Anker).

## Alternativen
- Aurora Store (Abwägung: Zugriff auf Google Play Backend; zusätzliche Metadaten/Token möglich).
- Google Play Store (Abwägung: Google-Konto/Play Services, proprietäres Ökosystem).
- Obtainium (Abwägung: direkte App-Quellen statt Repo; weniger zentrale Metadaten-/Signatur-Checks).

## Nicht gelöst / offene Punkte
- Öffentliche Subprozessoren-/Dienstleisterliste für Website/Forum ist nicht angegeben.
- Offizieller Security/Disclosure-Kanal ist nicht eindeutig dokumentiert.

## Quellen

- Second Audit Report (Radically Open Security, 2018): "https://f-droid.org/docs/Second_Audit_Report/
- Third Audit Report (Radically Open Security, 2022): "https://f-droid.org/docs/Third_Audit_Report/
- Optional: "Auto-Update/Auto-Install für Updates
- Google Play Store (Trade-off: "Google-Konto/Play-Services-Integration, proprietärer Katalog)
- Aurora Store (Trade-off: "nutzt Google-Play-Backend; zusätzliche Metadaten/Token möglich)
- Obtainium (Trade-off: "direkte Quellen wie GitHub-Releases; weniger zentrale Repo-Metadaten/Signatur-Checks)
- https://f-droid.org/docs/Third_Audit_Report/
- [About / Projekt-Überblick](https://f-droid.org/about/)
- [Docs (Übersicht)](https://f-droid.org/docs/)
- [F-Droid (Client-App Paketseite)](https://f-droid.org/packages/org.fdroid.fdroid/)
- [Security Model](https://f-droid.org/docs/Security_Model)
- [Einrichtung an F-Droid App Repo (Self-Hosting Repo)](https://f-droid.org/docs/Setup_an_F-Droid_App_Repo)
- [Verifying downloaded F-Droid.apk](https://f-droid.org/en/docs/Verifying_Downloaded_APK/)
- [Release Channels and Signing Keys](https://f-droid.org/en/docs/Release_Channels_and_Signing_Keys/)
- [Privacy Policy (Forum)](https://forum.f-droid.org/privacy)
- [Terms of Service (Forum)](https://forum.f-droid.org/tos)
- [F-Droid Metrics and Clean Insights](https://f-droid.org/2021/03/01/fdroid-metrics-and-clean-insights.html)
- [Privacy Preserving Analytics](https://f-droid.org/2019/04/15/privacy-preserving-analytics.html)
- [Second Audit Report](https://f-droid.org/docs/Second_Audit_Report/)
- [Third Audit Report](https://f-droid.org/docs/Third_Audit_Report/)
