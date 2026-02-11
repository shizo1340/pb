---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / NoScript"
url: "/anbieter/noscript/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-19"
robots: "index,follow"
description: "Kurzprofil von NoScript (Kategorie: Adblock & Tracking)."
provider: ""
name: "NoScript"
category: "Adblock & Tracking"
website: "https://noscript.net/"
repo: "https://github.com/hackademix/noscript"
license: "GPL-3.0"
policies: ""
privacy: "Nicht angegeben"
terms: "Nicht angegeben"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "no"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Nicht angegeben"
region: "unknown"
logs: "none"
retention: "specified"
retention_notes: "Lokal im Browser (bis gelöscht); in Privat/Inkognito nur temporär"
data_notes: "NoScript ist eine lokale Browser-Erweiterung mit per-Site Allowlisting. In den offiziellen Quellen werden keine serverseitigen Accounts oder Pflicht-Uploads beschrieben; Einstellungen liegen im Browser-Profil."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

NoScript ist ein Anbieter aus der Kategorie **Adblock & Tracking**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Websites standardmäßig restriktiv öffnen und nur gezielt pro Domain/Funktion freigeben willst (Allowlisting statt „alles erlaubt“).
- **Weniger geeignet wenn:** du möglichst wenig Interaktion möchtest oder häufig Workflows hast, die ohne JavaScript/Frames/Fetch nicht stabil funktionieren.
- **Wichtigster Abwägung:** mehr Kontrolle über aktive Inhalte vs. mehr Bedienaufwand und potenziell „kaputte“ Seiten bis zur Freigabe.

## Sofortmaßnahmen
- **Nutze „Temp. TRUSTED“ für neue Seiten**, damit Freigaben nach dem Schließen des Browsers automatisch zurückgesetzt werden.  
- **Setze für Ausnahmen lieber „CUSTOM“ statt pauschal „TRUSTED“**, und aktiviere nur die Capabilities, die wirklich nötig sind.  
- **Lass „LAN“ in DEFAULT deaktiviert**, außer du brauchst gezielt Zugriff auf lokale Geräte/Services (Abwägung: Komfort vs. Schutz vor Cross-Zone Requests).

## Entscheidungshilfe
- Wenn du „Default Deny“ willst, dann starte im Standardverhalten (DEFAULT) und gib nur die Seiten frei, die du wirklich brauchst (Abwägung: mehr Klicks/Fehlersuche).
- Wenn du eine Seite nur kurz brauchst (z.B. einmaliger Login), dann nutze **Temp. TRUSTED** statt dauerhaft TRUSTED (Abwägung: nach Neustart erneut freigeben).
- Wenn eine Seite nur teilweise kaputt ist, dann nutze **CUSTOM** und aktiviere z.B. nur `script` und ggf. `frame`, aber nicht automatisch alles (Abwägung: etwas mehr Konfiguration).
- Wenn du Einbettungen begrenzen willst (z.B. Social Widgets), dann nutze **kontextabhängige Policies** (Abwägung: mehr Komplexität, dafür weniger Cross-Site-Freigaben).
- Wenn du Chromium nutzt, dann plane Einschränkungen durch die Extension-API ein (Abwägung: weniger tiefe Kontrolle als auf Firefox, je nach Browser/Version).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | NoScript |
| Kategorie | Adblock & Tracking |
| Website | https://noscript.net/ |
| Quellcode | https://github.com/hackademix/noscript |
| Lizenz | GPL-3.0 |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | PayPal (Spenden, optional) |
| Jurisdiktion | Nicht angegeben |
| Logs | none |
| Retention | Lokal im Browser (bis gelöscht); in Privat/Inkognito nur temporär |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: Nicht angegeben
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
NoScript arbeitet als lokale Browser-Erweiterung und verwaltet pro-Site-Berechtigungen/Policies im Browser-Profil. In den offiziellen Quellen werden keine Kontopflichten für die Nutzung beschrieben.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Nicht angegeben (keine öffentliche Privacy Policy auf noscript.net verlinkt).
- **Wofür:** Unklar (in den offiziellen Seiten steht vorrangig Funktions- und Bedien-Doku).
- **Weitergabe/Subprozessoren:** Nicht angegeben.
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Für Nutzung nicht erforderlich; optionales Spenden-Feature über PayPal genannt.
- **Kontakt/DSAR/DPA:** Nicht angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar (keine explizite Telemetrie-Erklärung auf den offiziellen Seiten/Repo-Übersicht gefunden).
- **Abschaltbar?** Unklar.
- **Wo (Menüpfad):** Falls vorhanden: NoScript → **Options/Einstellungen** → Suche nach „Telemetry/Analytics/Diagnostics“.

**Logs & Retention:**
- **Logging-Level:** none (keine serverseitigen Logs beschrieben; Policies liegen lokal im Browser-Profil).
- **Aufbewahrung:** Lokal im Browser (bis gelöscht); temporäre Berechtigungen können beim Schließen zurückgesetzt werden (z.B. im Privatmodus).
- **Lösch-/Opt-out-Optionen:** Browser-Profil/Addon-Daten löschen; zusätzlich „Revoke Temporary Permissions“ für temporäre Freigaben.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Unklar (als lokale Erweiterung stehen hier eher Policy-/Berechtigungsmechanismen im Vordergrund; keine Kryptodoku angegeben).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht anwendbar (kein Konto für Nutzung beschrieben).
- **Recovery/Account-Wiederherstellung:** Nicht anwendbar (Einstellungen sind Teil des Browser-Profils/Sync, abhängig vom Browser).
- **Vuln-Handling / Security-Kontakt:** Security Reports per E-Mail an **security@noscript.net** (PGP-Fingerprint wird angegeben).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Standardmodus nutzen (DEFAULT/Strict-Logik)** und nur bei Bedarf freigeben.  
   **Prüfen:** NoScript-Popup zeigt DEFAULT für unbekannte Domains.
2) **Temporär statt dauerhaft freigeben** (Temp. TRUSTED) für Seiten, die du selten brauchst.  
   **Prüfen:** Nach Browser-Neustart ist die Seite wieder DEFAULT.
3) **CUSTOM statt TRUSTED**, wenn nur einzelne Funktionen nötig sind (z.B. `script` ja, aber `ping`/`fetch` nicht automatisch).  
   **Prüfen:** CUSTOM ist gesetzt und nur die nötigen Capabilities sind aktiv.

**Stolpersteine:**
- „Schnell alles erlauben“ löst kurzfristig Probleme, hebt aber den eigentlichen Schutzmechanismus auf (Abwägung: Komfort vs. Risiko durch aktive Inhalte).
- Komplexe Seiten nutzen viele Subdomains/CDNs; die Fehlersuche kann Zeit kosten (Abwägung: Kontrolle vs. Aufwand).

<details>
<summary>Profil B (Datensparsam)</summary>

- Verwende **kontextabhängige Policies**, um Drittseiten nur in bestimmten Kontexten zu erlauben (z.B. Social-Embeds nur auf einer Seite, nicht global).
- Halte TRUSTED-Listen klein und räume regelmäßig auf (alte Domains zurück auf DEFAULT).
- Nutze temporäre Freigaben als Standard und mache dauerhafte Ausnahmen zur bewussten Entscheidung.  
**Abwägung:** mehr Interaktion, dafür weniger dauerhaft freigegebene Cross-Site-Ressourcen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze getrennte Browser-Profile für riskante Workflows (z.B. Recherche vs. Login/Banking), jeweils mit eigener NoScript-Policy.  
- Aktiviere Capabilities nur minimal und vermeide pauschale TRUSTED-Freigaben für große Plattformen.
- Prüfe zusätzlich Browser-Features wie DNS-over-HTTPS / Container-Tabs / Isolation (browserabhängig).  
**Abwägung:** hoher Aufwand, mehr Brüche im Alltag, anspruchsameres Debugging.

</details>

## Features
- Per-Site Trust-Level & Allowlisting (DEFAULT/TRUSTED/UNTRUSTED/CUSTOM)
- Temporäre Freigaben („Temp. TRUSTED“) + „Revoke Temporary Permissions“
- Feingranulare Capabilities (u.a. script, object, media, frame, font, webgl, fetch, ping, noscript, LAN)
- Kontextabhängige Policies (abhängig von der Top-Level-Site)
- Dokumentierter Security-Report-Kanal (security@noscript.net + PGP-Fingerprint)

## Alternativen
- **uBlock Origin** (Content-Blocking über Filterlisten; Abwägung: weniger „Script-Allowlisting“-Workflow, dafür oft weniger manuelle Freigaben)
- **Privacy Badger** (Tracking-Fokus über Heuristiken; Abwägung: weniger granular pro Capability, andere Steuerlogik)
- **LibreJS** (sehr restriktiver JS-Ansatz; Abwägung: hoher Komfortverlust/Breakage)

## Nicht gelöst / offene Punkte
- Keine offizielle, verlinkte Privacy Policy/Terms-Seite auf noscript.net gefunden (Stand: 2026-01-19).

## Quellen

- Per-Site Trust-Level: "DEFAULT / TRUSTED / UNTRUSTED / CUSTOM
- uBlock Origin (Filterlisten + dynamische Regeln, Trade-off: "anderer Fokus als Script-Allowlisting)
- Privacy Badger (Tracking-Heuristiken, Trade-off: "weniger manuelle Kontrolle pro Capability)
- LibreJS (JS-Restriktion nach Lizenz/Policy-Idee, Trade-off: "sehr restriktiv, hohe Breakage)
- title: "NoScript – Source Code (GitHub)
- [NoScript – What is it?](https://noscript.net/)
- [NoScript – Usage](https://noscript.net/usage/)
- [NoScript – FAQ](https://noscript.net/faq/)
- [NoScript – Community (Security reports / Donations)](https://noscript.net/community/)
- [NoScript – Source Code (GitHub)](https://github.com/hackademix/noscript)
