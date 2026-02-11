---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Ungoogled Chromium"
url: "/anbieter/ungoogled-chromium/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-16"
robots: "index,follow"
description: "Kurzprofil von Ungoogled Chromium (Kategorie: Browser)."
provider: ""
name: "Ungoogled Chromium"
category: "Browser"
website: "https://ungoogled-software.github.io/"
repo: "https://github.com/ungoogled-software/ungoogled-chromium"
license: "BSD-3-Clause"
policies: ""
privacy: "Nicht angegeben"
terms: "Nicht angegeben"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Unklar"
region: "unknown"
logs: "none"
retention: "configurable"
retention_notes: "lokal/konfigurierbar"
data_notes: "Lokale Browser-Software (kein eigenes Anbieter-Backend dokumentiert). Datenflüsse entstehen primär durch besuchte Webseiten sowie optionale/konfigurierte Browser-Funktionen."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Ungoogled Chromium ist ein Anbieter aus der Kategorie **Browser**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen Chromium-kompatiblen Browser willst, der laut Projektziel Abhängigkeiten zu Google-Webdiensten entfernt und interne Google-Requests blockiert.
- **Weniger geeignet wenn:** du „offizielle“ Hersteller-Binaries/Signaturen erwartest oder möglichst wenig manuelle Pflege (Updates/Erweiterungen) möchtest.
- **Wichtigster Abwägung:** weniger Google-Integrationen & Hintergrund-Requests vs. mehr Eigenarbeit bei Updates/Erweiterungs-Handling und mögliche Funktionsbrüche (z.B. deaktiviertes Safe Browsing).

## Sofortmaßnahmen
- **Prüfe „Website-Daten beim Beenden löschen“** (ist laut FAQ standardmäßig aktiv) → reduziert persistente Website-Tracking-Daten, kann aber Logins/Session-Komfort kosten.
- **Setze die WebRTC-IP-Policy bewusst** (Flag) → senkt IP-Leak-Risiko, kann aber WebRTC-Apps beeinträchtigen.
- **Beziehe Builds über nachvollziehbare Quellen** (Paketmanager/Plattform-Repo) → senkt Supply-Chain-Risiko, kann aber weniger bequem sein.

## Entscheidungshilfe
- Wenn du möglichst wenige Google-spezifische Browser-Funktionen willst, dann nutze Ungoogled Chromium (Abwägung: einige Komfort-/Sicherheitsfunktionen sind bewusst deaktiviert oder erfordern Handarbeit).
- Wenn du dich häufig bei Websites eingeloggt halten willst, dann ändere die Standardoption „Website-Daten beim Beenden löschen“ (Abwägung: mehr persistente Daten auf dem Gerät).
- Wenn du WebRTC nutzt (Calls/Meetings), dann prüfe die WebRTC-IP-Policy (Abwägung: strengere Policies können Verbindungen/Audio/Video beeinflussen).
- Wenn du Erweiterungen aus dem Chrome Web Store brauchst, dann nutze die im FAQ beschriebenen CRX-Installationswege (Abwägung: weniger „Click-to-install“ und je nach Methode zusätzliche Datenflüsse).
- Wenn du schnelle Security-Updates ohne Basteln willst, dann ist ein stabiler Update-Kanal deiner Plattform entscheidend (Abwägung: Auswahl an Builds/Repos variiert stark).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Ungoogled Chromium |
| Kategorie | Browser |
| Website | https://ungoogled-software.github.io/ |
| Quellcode | https://github.com/ungoogled-software/ungoogled-chromium |
| Lizenz | BSD-3-Clause |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend (lokale Software) |
| Jurisdiktion | Unklar (Community-/Open-Source-Projekt) |
| Logs | none |
| Retention | lokal/konfigurierbar |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: Nicht angegeben
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Lokale Browser-Software ohne dokumentiertes Anbieter-Backend. Relevante Datenflüsse entstehen vor allem durch Webseiten, Erweiterungen und (je nach Nutzung) optionale Browser-Funktionen.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Projektbeschreibung sollen „background requests“ zu Webdiensten entfernt und Google-Webdienst-spezifischer Code entfernt werden; Webseiten/Erweiterungen erzeugen weiterhin normale Web-Datenflüsse.
- **Wofür:** Ziel ist „Privacy, control, transparency“ durch Entfernen von Google-Integrationen und Blockieren interner Requests.
- **Weitergabe/Subprozessoren:** Nicht angegeben (kein Anbieter-Backend dokumentiert).
- **Drittlandtransfer:** Nicht angegeben (kein Anbieter-Backend dokumentiert).
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend (lokale Software).
- **Kontakt/DSAR/DPA:** Nicht zutreffend (kein Service-Konto/DPA-Dokumentation).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar (keine separate Telemetrie-Dokumentation als „Analytics“-Begriff); das Projekt beschreibt jedoch das Entfernen von Hintergrund-Requests zu Webdiensten und das Blockieren interner Google-Requests.
- **Abschaltbar?** Teilweise über Einstellungen/Flags; zusätzlich sind viele projekt-spezifische Optionen laut Features als Flags vorhanden (standardmäßig deaktiviert).
- **Wo (Menüpfad):** Prüfe `chrome://settings/privacy` sowie Flags unter `chrome://flags/` (z.B. WebRTC-IP-Policy im FAQ).

**Logs & Retention:**
- **Logging-Level:** none (keine Anbieter-Logs; lokal abhängig vom Betriebssystem/Browser)
- **Aufbewahrung:** lokal/konfigurierbar; laut FAQ ist das Löschen von Website-Daten beim Beenden standardmäßig aktiv und kann umgestellt werden.
- **Lösch-/Opt-out-Optionen:** lokal über Browser-Einstellungen (z.B. Website-Daten/Cookies/Cache).

**Abwägung am Punkt:** Weniger persistente Daten reduzieren Tracking-Spuren, erhöhen aber Re-Login-/Komfortkosten; strengere IP-Handling-Policies reduzieren Leaks, können aber WebRTC brechen.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht zutreffend (lokaler Browser; Transportverschlüsselung hängt von besuchten Websites ab).
- **KDF/Parameter/Schlüsselableitung:** Nicht zutreffend (kein Anbieter-Account).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (kein Anbieter-Account; Website-Logins sind separat).
- **Recovery/Account-Wiederherstellung:** Nicht zutreffend.
- **Vuln-Handling / Security-Kontakt:** Laut GitHub „No security policy detected“ (kein SECURITY.md eingerichtet); Support/Issues sind der dokumentierte Hauptkanal.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kein Anbieter-Konto nötig** (keine eigene Konto-/Sync-Pflicht dokumentiert).  
   **Prüfen:** keine Browser-Account-Anmeldung aktiv; Website-Logins sind bewusst getrennt.
2) **Website-Daten-Default bewusst setzen**: `chrome://settings/content/siteData` → „Delete data sites have saved … when you close all windows“ (laut FAQ standardmäßig aktiv).  
   **Prüfen:** Option ist sichtbar und entspricht deiner Entscheidung (Privacy vs. Komfort).
3) **WebRTC-Policy prüfen**: `chrome://flags/#webrtc-ip-handling-policy` (laut FAQ ist WebRTC „limited by default“).  
   **Prüfen:** Policy gesetzt + WebRTC-Anwendungstest (Call/Meeting) funktioniert.

**Stolpersteine:**
- Wenn Website-Daten beim Beenden gelöscht werden, sind häufige Re-Logins normal (Abwägung: weniger persistente Daten vs. Komfort).
- Safe Browsing ist deaktiviert, weil dafür Google-Server kontaktiert würden (Abwägung: weniger Google-Kommunikation vs. weniger integrierte Schutzmechanik).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze getrennte Browser-Profile für unterschiedliche Identitäten (privat/Arbeit/Throwaway).
- Halte Erweiterungen minimal und installiere sie nur bei Bedarf (geringere Angriffsfläche; Abwägung: weniger Komfort).
- Prüfe, ob du Suche/„Suggestions“ in `chrome://settings/searchEngines` bewusst einschränkst (Abwägung: weniger Metadaten vs. weniger Tipp-/Vorschlagskomfort).

**Abwägung:** mehr Eigenpflege und mehr „Handarbeit“ bei Erweiterungen/Komfortfunktionen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze eine getrennte Umgebung (separates OS-Profil/VM) nur für riskante Browser-Nutzung.
- Reduziere Web-APIs über Policies/Flags nur, wenn du die Folgen für Web-Kompatibilität akzeptierst.
- Nutze Netzwerk-Restriktionen nur gezielt und testbasiert (Browser ist komplex; Overblocking bricht Funktionen).

**Abwägung:** deutlicher Komfortverlust, höhere Komplexität, mehr Testaufwand.

</details>

## Features
- Entfernt laut Projektziel Abhängigkeiten zu Google-Webdiensten und „background requests“ zu Webservices.
- Deaktiviert Google-domain-spezifische Funktionen (Beispiele: Google URL Tracker, Google Cloud Messaging u.a.).
- Safe Browsing ist deaktiviert (Rationale: Kommunikation mit Google-Servern).
- Blockiert interne Requests zu Google über Domain-Substitution (`qjz9zk`) und blockt diese Domains aktiv; es werden keine Verbindungen zu `qjz9zk` versucht.
- Fügt zusätzliche Flags/Schalter hinzu (standardmäßig deaktiviert) und erweitert Konfigurierbarkeit.

## Alternativen
- Firefox (andere Engine; Abwägung: andere Erweiterungs-/Kompatibilitätslage bei Chromium-only Seiten)
- Brave (Chromium-Basis; Abwägung: zusätzlicher Feature-/Dienst-Stack des Anbieters)
- Tor Browser (Anonymitätsfokus; Abwägung: deutlich eingeschränkter Komfort/Performance/Kompatibilität)

## Nicht gelöst / offene Punkte
- „Offizielle“ Anbieter-Binaries gibt es laut Download-Seite nicht; viele Builds sind von Dritten eingereicht und nicht zwingend reproduzierbar (Authentizität muss pro Plattform bewertet werden).

## Quellen

- Firefox (anderer Engine-Fokus; Trade-off: "manche Chromium-only Features/Kompatibilität)
- Brave (Chromium-basiert; Trade-off: "eigener Feature-/Business-Stack)
- Tor Browser (Anonymitäts-Fokus; Trade-off: "deutlich mehr Einschränkungen/Performance)
- https://raw.githubusercontent.com/ungoogled-software/ungoogled-chromium/master/SUPPORT.md
- [About ungoogled-chromium](https://ungoogled-software.github.io/about/)
- [Features](https://ungoogled-software.github.io/features/)
- [FAQ (ungoogled-chromium Wiki)](https://ungoogled-software.github.io/ungoogled-chromium-wiki/faq)
- [Downloads / Binaries (Hinweis zu „nicht offiziell“)](https://ungoogled-software.github.io/ungoogled-chromium-binaries/)
- [LICENSE (BSD 3-Clause)](https://raw.githubusercontent.com/ungoogled-software/ungoogled-chromium/master/LICENSE)
- [GitHub Security (keine Security Policy erkannt)](https://github.com/ungoogled-software/ungoogled-chromium/security)
- [SUPPORT.md (Support-Kanäle / Plattform-Issue-Tracker)](https://raw.githubusercontent.com/ungoogled-software/ungoogled-chromium/master/SUPPORT.md)
