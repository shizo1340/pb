---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / uBlock Origin"
url: "/anbieter/ublock-origin/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-16"
robots: "index,follow"
description: "Kurzprofil von uBlock Origin (Kategorie: Adblock & Tracking)."
provider: ""
name: "uBlock Origin"
category: "Adblock & Tracking"
website: "https://github.com/gorhill/uBlock"
repo: "https://github.com/gorhill/uBlock"
license: "GPL-3.0-only"
policies: ""
privacy: "https://github.com/gorhill/uBlock/wiki/Privacy-policy"
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
retention_notes: "Nicht zutreffend (kein Backend)"
data_notes: "Kein Backend/kein Konto; laut Anbieter keine Telemetrie. Remote-Verbindungen nur für Filterlisten-/Asset-Updates; optional Cloud-Sync über Browser-Sync (Firefox Sync/Google Account)."
features: ""
alternatives: ""
payment_processors: "Keine"
sources: ""
---
## Kurzprofil

uBlock Origin ist ein Anbieter aus der Kategorie **Adblock & Tracking**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du in Browsern Werbung/Tracker/Malware über Filterlisten blocken willst, ohne ein Konto beim Anbieter.
- **Weniger geeignet wenn:** du strikt vermeiden willst, dass dein Browser regelmäßig Filterlisten von externen Hosts herunterlädt (IP/Timing-Metadaten).
- **Wichtigster Abwägung:** weniger externe Updates/Sync (weniger Metadaten) vs. aktuellere Filterlisten & bequeme Gerätesynchronisation.

## Sofortmaßnahmen
- **Dashboard → Settings:** „Cloud storage support“ nur aktivieren, wenn du wirklich über Browser-Sync synchronisieren willst (Abwägung: Browserkonto als Metadaten-Anker).
- **Dashboard → Filter lists:** Zusätzliche Listen nur gezielt aktivieren, weil jede aktivierte Liste regelmäßig vom jeweiligen Host aktualisiert wird (Abwägung: mehr Abdeckung vs. mehr externe Downloads).
- **Bei Website-Problemen:** statt „Trusted site“ (komplett aus) erst mit dem **Logger** prüfen, was genau blockiert wird (Abwägung: etwas mehr Zeit vs. weniger pauschales Whitelisting).

## Entscheidungshilfe
- Wenn du **ohne Konto** blocken willst, dann nutze uBlock Origin wie vorgesehen (Abwägung: Filterlisten-Updates laden Inhalte von externen Hosts).
- Wenn du **Synchronisation über Geräte** willst, dann aktiviere „Cloud storage support“ (Abwägung: Sync läuft über Firefox Sync/Google Account im Browser).
- Wenn du **minimale Remote-Verbindungen** willst, dann deaktiviere Auto-Updates der Filterlisten und aktualisiere manuell (Abwägung: Listen werden schneller veraltet).
- Wenn du **Seiten gezielt freischalten** willst, dann nutze Per-Site-Schalter statt „Trusted sites“ (Abwägung: mehr Feintuning statt „alles oder nichts“).
- Wenn du **Metadaten (3rd-party Requests) stärker drücken** willst, dann prüfe dynamisches Filtern/„medium mode“ (Abwägung: mehr Webseiten-Breakage und Pflegeaufwand).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | uBlock Origin |
| Kategorie | Adblock & Tracking |
| Website | https://github.com/gorhill/uBlock |
| Quellcode | https://github.com/gorhill/uBlock |
| Lizenz | GPL-3.0-only |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Keine |
| Jurisdiktion | Nicht angegeben |
| Logs | none |
| Retention | Nicht zutreffend (kein Backend) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: [Privacy policy](https://github.com/gorhill/uBlock/wiki/Privacy-policy)
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Kein Anbieter-Backend und kein Konto nötig; laut Anbieter keine Telemetrie. Remote-Verbindungen erfolgen nur für Filterlisten-/Asset-Updates (abschaltbar über Auto-Update). Optionaler Settings-Sync läuft über die Sync-Funktion des Browsers.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Anbieter werden keine Daten gesammelt; es gibt keinen „Home-Server“ und keine Analytics-/Telemetrie-Hooks im Code.
- **Wofür:** Filterlisten und Assets werden regelmäßig aktualisiert; das ist laut Anbieter der einzige Zeitpunkt mit Remote-Verbindungen.
- **Weitergabe/Subprozessoren:** Nicht angegeben; laut Anbieter kein Backend.
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Keine (laut Anbieter werden keine Spenden/Finanzierung angenommen).
- **Kontakt/DSAR/DPA:** Nicht angegeben (Open-Source-Repo/Wiki als Kontaktpunkt).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Anbieter: keine Analytics-/Telemetrie-Hooks im Code.
- **Abschaltbar?** Nicht zutreffend (laut Anbieter nicht vorhanden).
- **Wo (Menüpfad):** —

**Logs & Retention:**
- **Logging-Level:** none (kein Anbieter-Backend)
- **Aufbewahrung:** Nicht zutreffend (kein Backend)
- **Lösch-/Opt-out-Optionen:** Filterlisten-Auto-Update deaktivierbar (Remote-Verbindungen für Updates reduzieren).

**Abwägung am Punkt:** Weniger Remote-Updates reduziert Metadaten (IP/Timing zu List-Hosts), kann aber mit veralteten Listen mehr Durchrutschen/Breakage bedeuten.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben / nicht zutreffend (keine Anbieter-Cloud, keine Accounts).
- **KDF/Parameter/Schlüsselableitung:** Nicht zutreffend.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (kein Konto).
- **Recovery/Account-Wiederherstellung:** Nicht zutreffend.
- **Vuln-Handling / Security-Kontakt:** Laut GitHub-Security-Tab: keine SECURITY.md/Security-Policy im Repo erkannt.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Filterlisten aktuell halten** (Auto-Update aktiv lassen oder bewusst manuell pflegen).  
   **Prüfen:** Dashboard → Filter lists → „Auto-update filter lists“ Status sichtbar.
2) **Cloud storage support deaktiviert lassen**, wenn du keinen Geräte-Sync brauchst.  
   **Prüfen:** Dashboard → Settings → Checkbox „Enable cloud storage support“ aus.
3) **Kein pauschales Vertrauen setzen:** „Trusted sites“ sparsam nutzen, weil uBO dann komplett deaktiviert ist.  
   **Prüfen:** Dashboard → Trusted sites / Popup-Indikator: Seite ist vollständig ausgenommen.

**Stolpersteine:**
- Zusätzliche Filterlisten bedeuten zusätzliche regelmäßige Downloads vom jeweiligen Host (Abwägung: Abdeckung vs. Metadaten).
- „Allow custom filters requiring trust“ kann riskant sein (Abwägung: mehr Macht über Seiten vs. höhere Missbrauchs-/Fehlkonfigurationsgefahr).

<details>
<summary>Profil B (Datensparsam)</summary>

- Deaktiviere „Cloud storage support“ dauerhaft, um Browser-Sync als Datenpfad zu vermeiden.
- Reduziere externe Update-Kontakte, indem du Auto-Update bewusst deaktivierst und nur bei Bedarf „Update now“ nutzt.
- Nutze Per-Site-Schalter statt kompletter Deaktivierung über „Trusted sites“.
**Abwägung:** mehr Wartung/Feintuning, potenziell veraltete Listen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze dynamisches Filtern/„medium mode“, um 3rd-party Requests strikter zu behandeln.
- Prüfe Breakage zuerst im Logger, bevor du ausnimmst/whitelistest.
- Halte die Erinnerung präsent: jede zusätzlich aktivierte Liste ist ein weiterer externer Update-Endpoint.
**Abwägung:** deutlich mehr Breakage, hoher Pflegeaufwand.

</details>

## Features
- Blockieren von Werbung/Trackern/Malware per Filterlisten (Netzwerk + kosmetische Filter)
- Filterlisten-Verwaltung inkl. Auto-Update & manueller Updates (Dashboard)
- Per-Site-Schalter (temporär/permanent)
- Dynamisches Filtern („Firewall“-Regeln)
- „Trusted sites“: komplett deaktivieren pro Site
- Logger zur Analyse von Requests/Scriptlets/Filter-Treffern
- Optional: Cloud storage Export/Import über Browser-Sync

## Alternativen
- [AdGuard](/anbieter/adguard/) – anderer Schwerpunkt: teils eigene Apps/Ökosystem statt nur Browser-Extension.
- Adblock Plus – anderer Schwerpunkt: traditionelles Listen-/Bedienmodell; Abwägung meist weniger Feinsteuerung.
- [Privacy Badger](/anbieter/privacy-badger/) – anderer Schwerpunkt: heuristische Tracker-Erkennung statt Listen-zentriert; Abwägung andere Erkennungslogik.
- Brave Shields – anderer Schwerpunkt: im Browser integriert statt als separate Extension; Abwägung Bindung an Browser-Ökosystem.

## Nicht gelöst / offene Punkte
- Offizielle Jurisdiktion/Verantwortliche Stelle (rechtlicher „Anbieter“) ist nicht klar benannt.

## Quellen

- „Trusted sites“: "uBO pro Seite komplett deaktivieren.
- AdGuard (Adblock & Tracking) – anderer Schwerpunkt: "teils eigene Apps/Ökosystem statt nur Browser-Extension.
- Adblock Plus (Adblock & Tracking) – anderer Schwerpunkt: "traditionelle Listen/Bedienmodell, weniger Fokus auf Feinsteuerung.
- Privacy Badger (Adblock & Tracking) – anderer Schwerpunkt: "heuristische Tracker-Erkennung statt Listen-zentriert.
- Brave Shields (Adblock & Tracking) – anderer Schwerpunkt: "im Browser integriert statt als separate Extension.
- https://github.com/gorhill/uBlock/security
- [uBlock Origin (GitHub Quellcode)](https://github.com/gorhill/uBlock)
- [uBlock Origin Wiki: Privacy policy](https://github.com/gorhill/uBlock/wiki/Privacy-policy)
- [uBlock Origin Wiki: Dashboard – Filter lists](https://github.com/gorhill/uBlock/wiki/Dashboard%3A-Filter-lists)
- [uBlock Origin Wiki: Cloud storage](https://github.com/gorhill/uBlock/wiki/Cloud-storage)
- [uBlock Origin Wiki: The logger](https://github.com/gorhill/uBlock/wiki/The-logger)
- [uBlock Origin Wiki: Permissions](https://github.com/gorhill/uBlock/wiki/Permissions)
- [uBlock Origin Wiki: Dashboard – My filters](https://github.com/gorhill/uBlock/wiki/Dashboard%3A-My-filters)
- [uBlock Origin Wiki: Per site switches](https://github.com/gorhill/uBlock/wiki/Per-site-switches)
- [uBlock Origin Wiki: Blocking mode – medium mode](https://github.com/gorhill/uBlock/wiki/Blocking-mode%3A-medium-mode)
- [uBlock Origin (GitHub): Security](https://github.com/gorhill/uBlock/security)
