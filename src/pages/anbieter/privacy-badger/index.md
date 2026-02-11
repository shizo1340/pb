---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Privacy Badger"
url: "/anbieter/privacy-badger/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von Privacy Badger (Kategorie: Adblock & Tracking)."
provider: ""
name: "Privacy Badger"
category: "Adblock & Tracking"
website: "https://privacybadger.org/"
repo: "https://github.com/EFForg/privacybadger"
license: "GPL-3.0-or-later"
policies: ""
privacy: "https://www.eff.org/code/privacy/policy"
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
jurisdiction: "USA (Electronic Frontier Foundation, EFF)"
region: "us"
logs: "minimal"
retention: "short"
retention_notes: "bis zu 7 Tage (EFF-Website-Logs; danach Aggregation; für pbconfig.json laut FAQ keine IP-Retention)"
retention_max_days: "7"
data_notes: "Privacy Badger läuft lokal als Browser-Erweiterung. Netzwerkabrufe für Updates/Konfiguration (u.a. EFF CDN/Fastly, pbconfig.json). Laut FAQ keine Cookies/IP-Retention für pbconfig.json-Checks; Browsing-Daten werden nur bei freiwilligem „Broken Site Report“ geteilt."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Privacy Badger ist ein Anbieter aus der Kategorie **Adblock & Tracking**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Third-Party-Tracking im Browser reduzieren willst, ohne Konto/Cloud-Einrichtung, und du die Erweiterung als lokal laufendes Tool einsetzen möchtest.
- **Weniger geeignet wenn:** du möglichst keine Browser-Erweiterungen mit weitreichenden Rechten installieren willst (Add-ons haben grundsätzlich breiten Zugriff im Browser-Kontext).
- **Wichtigster Abwägung:** Schutz vor Trackern vs. **Add-on-Angriffsfläche & potenzielle Website-Breakage** (dann sind lokale Ausnahmen nötig oder du teilst Daten über einen „Broken Site Report“).

## Sofortmaßnahmen
- **Bei Breakage zuerst „Disable for this site“ nutzen**, statt die Erweiterung global zu deaktivieren (reduziert Nebenwirkungen).
- **„Report broken site“ nur bei Bedarf verwenden**, da damit (laut FAQ) Browsing-Daten freiwillig geteilt werden können.
- **Auto-Updates im Browser aktiv lassen**, damit Blocklogik/Regeln aktuell bleiben.

## Entscheidungshilfe
- Wenn du ohne Konto/Sync arbeiten willst, dann nutze Privacy Badger als lokale Erweiterung (Abwägung: Add-on muss im Browser vertraut werden).
- Wenn dich Verbindungen zu externen IPs beim Browserstart stören, dann prüfe die dokumentierten Update-/Konfig-Abrufe (Fastly/EFF CDN, z.B. pbconfig.json) (Abwägung: ohne Aktualität können Erkennungen/Workarounds veralten).
- Wenn eine Website nicht funktioniert, dann setze die Seite auf „Disable for this site“ oder passe Slider gezielt an (Abwägung: weniger Blocking auf dieser Seite, potenziell mehr Tracking dort).
- Wenn du möglichst wenig Daten nach außen geben willst, dann vermeide „Broken Site Reports“ oder prüfe den Report-Inhalt vor dem Senden (Abwägung: weniger Feedback für Fixes).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Privacy Badger |
| Kategorie | Adblock & Tracking |
| Website | https://privacybadger.org/ |
| Quellcode | https://github.com/EFForg/privacybadger |
| Lizenz | GPL-3.0-or-later |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend (kein Kaufprozess) |
| Jurisdiktion | USA (Electronic Frontier Foundation, EFF) |
| Logs | minimal |
| Retention | bis zu 7 Tage (EFF-Website-Logs; danach Aggregation; für pbconfig.json laut FAQ keine IP-Retention) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.eff.org/code/privacy/policy
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Privacy Badger läuft lokal als Browser-Erweiterung. Netzwerkabrufe für Updates/Konfiguration (u.a. EFF CDN/Fastly, pbconfig.json). Laut FAQ keine Cookies/IP-Retention für pbconfig.json-Checks; Browsing-Daten werden nur bei freiwilligem „Broken Site Report“ geteilt.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Lokal im Browser anfallende Beobachtungen zu Third-Party-Domains/Blocking-Entscheidungen (für die Funktion der Erweiterung); laut FAQ wird Browsing-Daten-Weitergabe nur bei freiwilligem „Broken Site Report“ ausgelöst.
- **Wofür:** Blockieren/Restriktieren von Third-Party-Trackern, Cookie-Blocking (Yellowlist), Widget-Platzhalter, Link-Cleaning sowie periodische Learning-Updates (Badger Sett).
- **Weitergabe/Subprozessoren:** EFF nennt Fastly als CDN für EFF-Webressourcen; für pbconfig.json-Checks laut FAQ ohne Cookies/IP-Retention. Bei Bug-/Broken-Site-Reports können Inhalte an Entwickler:innen gehen (und laut EFF-Software-Policy ggf. auch an Dritte, wenn zur Verbesserung nötig).
- **Drittlandtransfer:** EFF verarbeitet/überträgt Informationen in die USA (laut EFF-Software-Policy).
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend (kein Kaufprozess).
- **Kontakt/DSAR/DPA:** Kontakt für Privacy-Policy-Anfragen: privacypolicy@eff.org (laut EFF-Software-Policy).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Keine Nutzungs-Analytics in der FAQ als „Tracking/Telemetry“ beschrieben; dokumentiert sind Update-/Konfig-Abrufe sowie optionales Reporting.
- **Abschaltbar?** „Broken Site Report“ ist freiwillig (Button); zu weiteren Telemetrie-Schaltern macht die FAQ keine generelle Aussage.
- **Wo (Menüpfad):** Browser-Toolbar → Privacy-Badger-Icon → „Report broken site“ (nur bei Bedarf).

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** EFF-Website-Logs laut EFF-Privacy-Policy i.d.R. bis zu 7 Tage; Software-Policy: Bug Reports/Datensätze solange relevant; IPs i.d.R. nicht gespeichert, gelegentlich zu Debugging.
- **Lösch-/Opt-out-Optionen:** Für eingereichte personenbezogene Daten nennt EFF einen Lösch-/Korrekturweg per E-Mail an privacypolicy@eff.org.

**Abwägung am Punkt:** Weniger Reporting/Kommunikation nach außen reduziert Metadaten, kann aber die Fehlersuche und Fixes bei Website-Problemen verlangsamen.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht zutreffend im Sinne eines Cloud-Tresors (lokale Browser-Erweiterung).
- **KDF/Parameter/Schlüsselableitung:** Nicht zutreffend.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (kein Konto).
- **Recovery/Account-Wiederherstellung:** Nicht zutreffend (kein Konto).
- **Vuln-Handling / Security-Kontakt:** Sicherheitslücken können laut GitHub-Security-Übersicht über „private vulnerability reporting“ gemeldet werden.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Aus offizieller Quelle installieren** (Browser-Store oder privacybadger.org).  
   **Prüfen:** Publisher/Projektseite verweist auf EFF + Repo-Link vorhanden.
2) **Auto-Updates aktiv lassen** (Browser/Store-Default).  
   **Prüfen:** Browser zeigt „aktuell“ / Updates werden automatisch eingespielt.
3) **Bei Problemen pro Seite ausnehmen statt global** („Disable for this site“).  
   **Prüfen:** Button im Popup aktiv, Seite lädt danach wieder.

**Stolpersteine:**
- Erweiterungen haben weitreichende Berechtigungen („read and change … data“): installiere nur Add-ons, denen du vertraust, und halte die Anzahl installierter Erweiterungen klein.

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze ein separates Browser-Profil für „sensiblere“ Nutzung (weniger Cross-Site-Korrelation durch andere Add-ons/Settings).
- Vermeide „Broken Site Reports“, außer du willst bewusst Debug-Infos teilen.
- Kombiniere nur mit wenigen weiteren Privacy-Add-ons, um Add-on-Fingerprinting/Komplexität zu reduzieren.

**Abwägung:** mehr Trennung/Organisation im Alltag, ggf. mehr manueller Aufwand bei Ausnahmen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Verwende eine isolierte Browser-Umgebung (z.B. getrenntes OS-Userkonto oder VM) für besonders riskante Workflows.
- Deaktiviere die Erweiterung auf Seiten, die du nicht stören willst, und nutze gezielte Ausnahmen statt pauschaler Freigaben.
- Optional: nutze Tor Browser nur, wenn dein Threat-Model Anonymisierung erfordert (Abwägung: deutliche Usability-Einschränkungen).

**Abwägung:** hoher Aufwand, mehr Breakage-Risiko, komplexere Fehleranalyse.

</details>

## Features
- Blockiert/limitiert Third-Party-Tracker (rot/gelb/grün-Slider)
- Cookie-Blocking (Yellowlist) für funktional notwendige Drittanbieter
- Sendet Global Privacy Control (GPC) + Do Not Track (DNT)
- Click-to-activate Platzhalter für Widgets (Video/Kommentare etc.)
- Entfernt ausgehendes Link-Tracking auf Facebook & Google
- Periodische Learning-Updates via „Badger Sett“ (Remote Learning)

## Alternativen
- uBlock Origin (Filterlisten + sehr granular konfigurierbar; Abwägung: mehr Tuning/Komplexität möglich)
- AdGuard Browser Extension (Tracker-/Ad-Blocking als Produktfamilie; Abwägung: je nach Nutzung kommerzielles Ökosystem)
- NoScript (Script-Blocking/Whitelisting; Abwägung: häufige Website-Breakage & hoher Pflegeaufwand)

## Nicht gelöst / offene Punkte
- Unklar, welche Debug-/Kontextdaten ein „Report broken site“ im Detail überträgt, bevor er abgesendet wird.

## Quellen

- uBlock Origin (Filterlisten + sehr granular konfigurierbar; Trade-off: "mehr Tuning/Komplexität möglich)
- AdGuard Browser Extension (Tracker-/Ad-Blocking als Produktfamilie; Trade-off: "je nach Nutzung kommerzielles Ökosystem)
- NoScript (Script-Blocking/Whitelisting; Trade-off: "häufige Website-Breakage & hoher Pflegeaufwand)
- https://github.com/EFForg/privacybadger/security
- [Privacy Badger – FAQ & Downloads (privacybadger.org)](https://privacybadger.org/)
- [EFF – Privacy Policy: Software and Technology Projects](https://www.eff.org/code/privacy/policy)
- [EFF – Privacy Policy (eff.org Website)](https://www.eff.org/policy)
- [GitHub – EFForg/privacybadger (Repo)](https://github.com/EFForg/privacybadger)
- [GitHub – EFForg/privacybadger Security (Vulnerability Reporting)](https://github.com/efforg/privacybadger/security)
