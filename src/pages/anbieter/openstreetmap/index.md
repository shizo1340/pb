---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / OpenStreetMap"
url: "/anbieter/openstreetmap/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-19"
robots: "index,follow"
description: "Kurzprofil von OpenStreetMap (Kategorie: Karten & Navigation)."
provider: ""
name: "OpenStreetMap"
category: "Karten & Navigation"
website: "https://www.openstreetmap.org/"
repo: "https://github.com/openstreetmap/openstreetmap-website"
license: "ODbL-1.0 (Daten), GPL-2.0-only (Website-Software)"
policies: ""
privacy: "https://osmfoundation.org/wiki/Privacy_Policy"
terms: "https://osmfoundation.org/wiki/Terms_of_Use"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "unknown"
phone_required: "unknown"
kyc_required: "no"
jurisdiction: "Vereinigtes Königreich (OpenStreetMap Foundation)"
region: "uk"
logs: "minimal"
retention: "specified"
retention_notes: "Analytics (Piwik): 180d; Beiträge/Änderungshistorie: dauerhaft öffentlich"
data_notes: "OSM ist offenes Community-Projekt: Beiträge (Changesets) sind öffentlich nachvollziehbar; OSMF betreibt u.a. API, Tiles (Standardstil) und Nominatim, teils via CDN."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

OpenStreetMap ist ein Anbieter aus der Kategorie **Karten & Navigation**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Karten ansehen/verwenden möchtest, ohne zwingend ein Konto anzulegen, und du mit üblichen Server-Logs (IP/Browserdaten) leben kannst.
- **Weniger geeignet wenn:** du Beiträge vollständig „nicht zuordenbar“ machen willst (Edits/Changesets sind öffentlich nachvollziehbar) oder du 2FA/MFA als Pflicht erwartest.
- **Wichtigster Abwägung:** Offene, nachvollziehbare Mitwirkung & offene Daten vs. **öffentliche Edit-Historie + Metadaten** (Zeitpunkte, Nutzername, Changesets) und **Netzwerk-Metadaten** beim Abruf von Tiles/API.

## Sofortmaßnahmen
- **Nur anschauen?** Nutze openstreetmap.org ohne Login. *(Wirkung: weniger Kontodaten, weniger Bindung.)*
- **Beim Konto: Home-Location leer lassen** und keine präzisen Profilinfos eintragen. *(Wirkung: reduziert Standort-Leakage im Profil.)*
- **Kein Gravatar nutzen** (Avatar nicht an E-Mail-Hash koppeln). *(Wirkung: weniger externer Abgleich über Dienste hinweg.)*

## Entscheidungshilfe
- Wenn du **nur Karten konsumierst**, dann nutze OpenStreetMap **ohne Konto** (Abwägung: IP/Browserdaten fallen weiterhin als technische Logdaten an).
- Wenn du **editierst**, dann verwende ein **Pseudonym** und halte Profilfelder minimal (Abwägung: weniger „Community-Wiedererkennung“ vs. weniger Identitätsbindung).
- Wenn du OSMF-**Standard-Tiles** einbindest, dann beachte: der Browser/Client verbindet sich zu OSMF-Servern (teils via CDN) (Abwägung: einfache Einbindung vs. externe Verbindungsdaten).
- Wenn du in openstreetmap.org **nicht-OSMF-betriebene Layer/Routing** nutzt, dann entstehen zusätzliche Datenflüsse zu deren Betreibern (Abwägung: mehr Funktionen vs. weitere Parteien).
- Wenn du **Metadaten minimieren** willst, dann setze **eigenes Caching/Proxying** für Tiles/Geocoding ein (Abwägung: mehr Betrieb/Komplexität).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | OpenStreetMap |
| Kategorie | Karten & Navigation |
| Website | https://www.openstreetmap.org/ |
| Quellcode | https://github.com/openstreetmap/openstreetmap-website |
| Lizenz | ODbL-1.0 (Daten), GPL-2.0-only (Website-Software) |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no (Kartenansicht), ja (Beiträge/Editieren) |
| Telefon erforderlich | Unklar (nicht angegeben) |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben (keine Zahlung für Nutzung erforderlich) |
| Jurisdiktion | Vereinigtes Königreich (OpenStreetMap Foundation) |
| Logs | minimal |
| Retention | Analytics (Piwik): 180d; Beiträge/Änderungshistorie: dauerhaft öffentlich |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://osmfoundation.org/wiki/Privacy_Policy
- AGB/Terms: https://osmfoundation.org/wiki/Terms_of_Use
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
OSM ist ein offenes Community-Projekt: Beiträge (Changesets) sind öffentlich nachvollziehbar; OSMF betreibt u.a. API, Tiles (Standardstil) und Nominatim, teils via CDN.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut OSMF-Privacy-Policy u.a. technische Nutzungsdaten (z.B. IP-Adresse, Browser/Device/OS, Zeitpunkt, angeforderte Seiten/URLs, Referrer), Cookies sowie Kontodaten wie E-Mail-Adresse (bei Account) und ggf. Profilangaben; Beiträge/Edits sind öffentlich sichtbar.  
- **Wofür:** Betrieb der Dienste, Sicherheit/Abuse-Prevention, Verbesserung/Statistik sowie Community-Funktionen (z.B. Accounts/Kommunikation).  
- **Weitergabe/Subprozessoren:** OSMF nennt externe Dienstleister/Anbieter für bestimmte Funktionen (z.B. CDN für Tile-Auslieferung) und weist darauf hin, dass einige Funktionen auf openstreetmap.org nicht von der OSMF betrieben werden.  
- **Drittlandtransfer:** Nicht eindeutig als Liste angegeben; Verarbeitung kann (je nach Dienst/Anbieter) auch außerhalb eines Landes stattfinden.  
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (für Nutzung nicht erforderlich).  
- **Kontakt/DSAR/DPA:** Kontaktwege und Rechte sind in der OSMF-Privacy-Policy beschrieben; für Tile-/Service-Nutzung sagt OSMF explizit, dass sie keine DPA im Data-Controller/Data-Processor-Sinn anbietet.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** OSMF nennt Tracking/Analytics (z.B. Piwik) für Nutzungsstatistiken; IP-Adressen werden dabei gekürzt.  
- **Abschaltbar?** Nicht eindeutig als globaler „Opt-out“-Schalter dokumentiert.  
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** OSMF nennt für detaillierte Nutzungsdaten aus dem Tracking (Piwik) eine Aufbewahrung von **180 Tagen**; für andere Logtypen nicht eindeutig als feste Frist dokumentiert.
- **Lösch-/Opt-out-Optionen:** Konto-Löschung möglich, aber Beiträge/Änderungshistorie bleiben als öffentliche Historie erhalten (Zurechnung wird laut Policy pseudonymisiert).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Abuse-Prevention erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben (OSM ist kein E2E-Produkt; Daten/Edits sind grundsätzlich öffentlich).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Laut OSM-Help-Archiv: **keine 2FA-Option** für OSM-Accounts genannt.
- **Recovery/Account-Wiederherstellung:** Passwort-Reset erfolgt per E-Mail (übliches Konto-Reset-Verfahren).
- **Vuln-Handling / Security-Kontakt:** Security-Issues sollen laut OSMF-Operations-Policy an **security@openstreetmap.org** gemeldet werden.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Ohne Konto nutzen**, wenn du nur Karten ansiehst (Login nur fürs Editieren).  
   **Prüfen:** keine Anmeldung aktiv, keine Profilseite angelegt.
2) **Profil-Daten minimieren:** Home-Location nicht setzen/aktualisieren.  
   **Menüpfad (Web):** rechts oben → „My settings“ → „Home location“ / „Update home location…“  
   **Prüfen:** Home-Location ist leer bzw. nicht präzise; Update-Option aus.
3) **Avatar ohne Gravatar:** keine externe Avatar-Verknüpfung aktivieren.  
   **Prüfen:** in den Einstellungen kein Gravatar ausgewählt; Profil zeigt keinen externen Avatar.

**Stolpersteine:**
- Edits/Changesets sind öffentlich nachvollziehbar (Abwägung: Transparenz/Qualitätssicherung vs. Metadaten/Profiling).
- Zusätzliche Layer/Routing in openstreetmap.org können von Dritten betrieben werden (Abwägung: Features vs. zusätzliche Datenflüsse).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Pseudonym + separate E-Mail-Adresse** (Alias/Weiterleitung) für den OSM-Account nutzen.
- **Keine Home-Location**, keine Bio mit Ortsbezug, keine wiedererkennbaren Social-Links im Profil.
- **Tiles/API in eigenen Projekten:** statt direkter Einbindung optional **Proxy/Cache** zwischen Nutzer:innen und OSMF schalten.  
**Abwägung:** mehr Eigenbetrieb/Komplexität vs. weniger direkte Verbindungen zu externen Servern.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Strikte Trennung:** separater Browser/Profil/VM nur für OSM-Editing; keine Misch-Nutzung mit privaten Accounts.
- **Eigene Infrastruktur:** wenn realistisch, **eigene Tile-/Geocoding-Instanzen** bzw. self-hosted OSM-Stack betreiben (Software ist Open Source).  
- **Keine lokalen Edits mit Personenbezug:** Beiträge so planen, dass sie nicht als „Wohnort/Arbeitsort“-Signal dienen.  
**Abwägung:** deutlicher Komfortverlust, hoher Betriebsaufwand, geringere Community-Interaktion.

</details>

## Features
- Kartenansicht auf openstreetmap.org (ohne Konto nutzbar)
- Bearbeiten via Web-Editor (iD) und externe Editoren (Remote Control/JOSM)
- OSMF-Services: Editing-/Notes-/GPX-APIs, Nominatim-Geocoding, Standard-Kacheln (Tiles)
- Export-Funktion und Daten-/Lizenzhinweise (Attribution)

## Alternativen
- Google Maps (Abwägung: proprietär, typischerweise mehr Telemetrie/Tracking)
- HERE WeGo (Abwägung: proprietär, Datenflüsse abhängig von App/Account)
- Mapbox (Abwägung: kommerzielle API, Keys/Abrechnung bei Nutzung)
- Organic Maps (Abwägung: Offline-Fokus, weniger Serverkontakt; Datenstand/Features je nach Region)
- OsmAnd (Abwägung: Offline/Apps, je nach Modus zusätzliche Online-Dienste/Plugins)

## Nicht gelöst / offene Punkte
- Öffentliche, vollständige Liste aller eingesetzten Dienstleister/Subprozessoren für OSMF-Services ist nicht eindeutig auffindbar.
- 2FA/MFA für OSM-Accounts ist nicht dokumentiert/verfügbar; Kontoschutz basiert primär auf Passwort + E-Mail-Recovery.

## Quellen

- OSMF-Services: "Editing-/Notes-/GPX-APIs, Nominatim-Geocoding, Standard-Kacheln (Tiles)
- Google Maps (Trade-off: "proprietär, typischerweise mehr Telemetrie/Tracking)
- HERE WeGo (Trade-off: "proprietär, Datenflüsse abhängig von App/Account)
- Mapbox (Trade-off: "kommerzielle API, Keys/Abrechnung bei Nutzung)
- Organic Maps (Trade-off: "Offline-Fokus, weniger Serverkontakt; Datenstand/Features je nach Region)
- OsmAnd (Trade-off: "Offline/Apps, je nach Modus zusätzliche Online-Dienste/Plugins)
- https://wiki.openstreetmap.org/wiki/Gravatar
- [OSMF Privacy Policy](https://osmfoundation.org/wiki/Privacy_Policy)
- [OSMF Terms of Use](https://osmfoundation.org/wiki/Terms_of_Use)
- [Services and tile users privacy FAQ (OSMF)](https://osmfoundation.org/wiki/Services_and_tile_users_privacy_FAQ)
- [Copyright and License | OpenStreetMap](https://www.openstreetmap.org/copyright)
- [openstreetmap/openstreetmap-website (GitHub)](https://github.com/openstreetmap/openstreetmap-website)
- [Security Reporting Policy (OSMF OWG)](https://operations.osmfoundation.org/policies/security/)
- [adding 2fa to my account? (OSM Help Archive)](https://help.openstreetmap.org/questions/87125/adding-2fa-to-my-account/)
- [OpenStreetMap account (OSM Wiki)](https://wiki.openstreetmap.org/wiki/OpenStreetMap_account)
- [do I set my home location (OSM Help Archive)](https://help.openstreetmap.org/questions/954/do-i-set-my-home-location)
- [Gravatar (OSM Wiki)](https://wiki.openstreetmap.org/wiki/Gravatar)
