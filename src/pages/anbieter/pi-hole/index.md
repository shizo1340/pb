---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Pi-hole"
url: "/anbieter/pi-hole/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von Pi-hole (Kategorie: Adblock & Tracking)."
provider: ""
name: "Pi-hole"
category: "Adblock & Tracking"
website: "https://pi-hole.net/"
repo: "https://github.com/pi-hole/pi-hole"
license: "EUPL-1.2"
policies: ""
privacy: "https://pi-hole.net/privacy/"
terms: "https://discourse.pi-hole.net/tos"
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
jurisdiction: "USA (Pi-hole LLC; Website laut Terms of Service)"
region: "us"
logs: "configurable"
retention: "configurable"
retention_notes: "konfigurierbar (Query-DB in Tagen; z.B. database.maxDBdays, Default laut Config-Referenz: 91d)"
data_notes: "Pi-hole ist self-hosted: DNS-Anfragen/Metadaten fallen lokal auf deinem Server an (Query Log + Long-term Query Database). Privacy Level und Logging/Retention sind konfigurierbar; weniger Logs = weniger Metadaten, aber auch weniger Diagnosemöglichkeiten."
features: ""
alternatives: ""
payment_processors: "PayPal, Stripe (Spenden); Kryptowährungen (Spenden)"
sources: ""
---
## Kurzprofil

Pi-hole ist ein Anbieter aus der Kategorie **Adblock & Tracking**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du DNS-basiertes Blocking **netzwerkweit** umsetzen willst (Smart-TV, Apps, IoT), ohne auf jedem Gerät einen Adblocker zu installieren.
- **Weniger geeignet wenn:** du kein eigenes System betreiben kannst/willst (Self-Hosting-Pflege) oder Blocking **unterwegs außerhalb deines Netzes** ohne Zusatzsetup brauchst.
- **Wichtigster Abwägung:** Pi-hole sieht (lokal) sehr viele DNS-Metadaten; weniger Logging/mehr Privacy-Level reduziert Metadaten, kann aber Diagnose/Fehlersuche spürbar erschweren.

## Sofortmaßnahmen
- Stelle **Privacy Level 2 oder 3** ein, um Domains/Clients zu verbergen bzw. Query Log & Long-term DB zu vermeiden (Wirkung: weniger sichtbare Metadaten im Dashboard).
- Reduziere die **Aufbewahrung der Long-term Query Database** (z.B. `database.maxDBdays`) oder deaktiviere sie (Wirkung: weniger Verlauf auf dem Pi-hole-Host).
- Deaktiviere **Query Logging** (`dns.queryLogging=false`), wenn du keinen detaillierten Verlauf brauchst (Wirkung: weniger DNS-Logdaten auf dem System).

## Entscheidungshilfe
- Wenn du Tracking/Ads **für viele Geräte gleichzeitig** reduzieren willst, dann ist ein DNS-Sinkhole relevant (Abwägung: DNS-Blocking hat Grenzen und kann legitime Domains treffen).
- Wenn du das Risiko minimieren willst, dass auf dem Pi-hole-Host ein **Browserverlauf rekonstruierbar** ist, dann erhöhe den Privacy Level und reduziere/deaktiviere Logs/DB (Abwägung: weniger Troubleshooting-Möglichkeiten).
- Wenn du Pi-hole im Heimnetz nutzt, dann halte die DNS- und Admin-Weboberfläche **nur intern erreichbar** (Abwägung: Remote-Admin erfordert zusätzliche Absicherung).
- Wenn du Pi-hole auch unterwegs nutzen willst, dann ist eine Anbindung via VPN/Remote-DNS-Einrichtung relevant (Abwägung: zusätzlicher Betrieb und mehr Komplexität).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Pi-hole |
| Kategorie | Adblock & Tracking |
| Website | https://pi-hole.net/ |
| Quellcode | https://github.com/pi-hole/pi-hole |
| Lizenz | EUPL-1.2 |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | PayPal, Stripe (Spenden); Kryptowährungen (Spenden) |
| Jurisdiktion | USA (Pi-hole LLC; Website laut Terms of Service) |
| Logs | configurable |
| Retention | konfigurierbar (Query-DB in Tagen; z.B. database.maxDBdays, Default laut Config-Referenz: 91d) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://pi-hole.net/privacy/
- AGB/Terms: https://discourse.pi-hole.net/tos
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Pi-hole ist self-hosted. DNS-Anfragen und daraus ableitbare Metadaten (Domains, Clients, Zeitpunkte) können lokal in Logs und der Long-term Query Database anfallen. Privacy Levels, Query Logging und Aufbewahrung sind konfigurierbar.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** lokal: DNS-Queries/Antworten (Query Log in `pihole.log`, optional Long-term Query Database); Website/Forum: typische Web-/Account-Daten laut Privacy Policy.
- **Wofür:** lokal: Statistik/Übersicht und Debugging; Website/Forum: Betrieb der Website/Community & Support.
- **Weitergabe/Subprozessoren:** Website nennt u.a. Jetpack (Statistiken) und BunnyCDN (CDN/Logs); Spenden laut Doku via PayPal/Stripe möglich.
- **Drittlandtransfer:** Nicht angegeben (relevant primär für Website/Forum-Nutzung, nicht für Self-Hosting-Instanz).
- **Zahlungsabwicklung/Payment Processor:** PayPal, Stripe (Spenden) + Krypto (Spenden).
- **Kontakt/DSAR/DPA:** Kontaktwege werden auf der Contact-Seite genannt (general/security/legal).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Für Pi-hole-Software: Nicht angegeben (self-hosted; lokale Statistiken/DB sind Standardbestandteil). Für Website/Forum: laut Privacy Policy werden u.a. Website-Statistiken beschrieben.
- **Abschaltbar?** Für Pi-hole-Software: Logs/DB sind konfigurierbar (siehe unten). Für Website/Forum: Nicht angegeben.
- **Wo (Menüpfad):** Web UI → *Settings* → *Privacy* (Privacy Level); weitere Einstellungen über FTL-Config (CLI/Config-Datei).

**Logs & Retention:**
- **Logging-Level:** configurable
- **Aufbewahrung:** konfigurierbar (z.B. `database.maxDBdays`; Default laut Config-Referenz: 91 Tage)
- **Lösch-/Opt-out-Optionen:** Query Logging deaktivierbar (`dns.queryLogging=false`); Long-term Query Database per `database.maxDBdays=0` deaktivierbar; Privacy Level 3 deaktiviert Query Log und Long-term DB Logging.

**Abwägung am Punkt:** Weniger Logging/Retention reduziert lokale Metadaten, erschwert aber Debugging (z.B. „warum wird Domain X geblockt?“) und kann Auswertungen/RegEx-Features einschränken.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben (Pi-hole ist primär DNS-Blocking/Resolver-Einrichtung; Transportverschlüsselung hängt vom Upstream/Netzwerksetup ab).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben.
- **Recovery/Account-Wiederherstellung:** Nicht zutreffend für Self-Hosting (kein zentraler Account); Admin-Zugriff hängt von deinem System-/Web-Login ab.
- **Vuln-Handling / Security-Kontakt:** Security-Kontakt wird genannt (Disclosure via E-Mail), außerdem Security Policy im offiziellen Repo.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Admin-Weboberfläche intern halten** (kein „offen ins Internet“).  
   **Prüfen:** Webserver-ACL ist gesetzt (z.B. nur dein LAN), und DNS bleibt im lokalen Listening Mode.  
   *Hinweis:* In der FTL-Konfig gibt es u.a. `dns.listeningMode` (Default: `LOCAL`) und `webserver.acl` (Default: leer).
2) **Privacy Level sinnvoll wählen** (mindestens „Domains verbergen“).  
   **Prüfen:** Web UI → *Settings* → *Privacy* → Privacy Level aktiv; Statistiken zeigen „hidden“ statt Klartext.
3) **Retention begrenzen** (Long-term Query Database nicht „ewig“ sammeln).  
   **Prüfen:** `database.maxDBdays` ist niedrig gesetzt oder `0`, wenn du die DB deaktivieren willst.

**Stolpersteine:**
- Zu strikte Privacy/Logging-Settings können Fehlersuche erschweren (Abwägung: weniger Metadaten vs. weniger Transparenz beim Debugging).
- DNS-Blocking kann legitime Dienste treffen: Allowlisting/Regex kann nötig sein (Abwägung: Pflegeaufwand).

<details>
<summary>Profil B (Datensparsam)</summary>

- Setze **Privacy Level 2** (Domains + Clients verbergen) oder **Level 3** (anonym) je nach Bedarf.  
- Deaktiviere **Query Logging** (`dns.queryLogging=false`) und/oder reduziere `database.maxDBdays` stark.  
- Begrenze Admin-Zugriff zusätzlich über `webserver.acl` auf einen kleinen IP-Bereich (z.B. nur Admin-PC/VPN-Subnetz).

**Abwägung:** Weniger Diagnose-/Historienfunktionen; Level 3 kann u.a. Query Log & Long-term DB Logging deaktivieren und RegEx-Funktionen einschränken.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne Pi-hole in ein eigenes Netzwerksegment/VLAN und erlaube nur DNS von definierten Clients.  
- Admin-Weboberfläche nur über einen separaten Admin-Pfad (z.B. Management-Netz) erreichbar machen; `webserver.acl` restriktiv setzen.  
- Logging maximal reduzieren (Privacy Level 3 + DB/Query Logging aus), falls du Metadaten auf dem Host minimieren musst.

**Abwägung:** Deutlich höherer Betriebsaufwand; Troubleshooting kann ohne Logs schwer werden.

</details>

## Features
- Netzwerkweites Blocking über DNS (ohne Client-App)
- Web-Interface mit Statistiken & Steuerung
- Query Log & Long-term Query Database (abschalt-/reduzierbar)
- Privacy Levels (Domains/Clients verbergen, bis hin zu anonymem Modus)
- Optional DHCP-Server (je nach Einrichtung)

## Alternativen
- AdGuard Home (self-hosted DNS-Blocking; Abwägung: anderes Feature-Set/Verwaltung)
- NextDNS (Hosted DNS-Filtering; Abwägung: weniger Self-Hosting-Aufwand vs. mehr Abhängigkeit von externem Dienst)

## Nicht gelöst / offene Punkte
- Unklar, ob Pi-hole eine öffentliche Subprozessoren-/DPA-Liste für Website/Forum anbietet.

## Quellen

- AdGuard Home (self-hosted DNS-Blocking; Trade-off: "anderes Feature-Set/Verwaltung)
- NextDNS (Hosted DNS-Filtering; Trade-off: "weniger Self-Hosting-Aufwand vs. mehr Abhängigkeit von externem Dienst)
- Pi-hole Website: "https://pi-hole.net/
- Pi-hole Privacy Policy: "https://pi-hole.net/privacy/
- Pi-hole Contact: "https://pi-hole.net/contact/
- Pi-hole Terms of Service (Discourse): "https://discourse.pi-hole.net/tos
- Pi-hole Docs (About): "https://docs.pi-hole.net/
- Pi-hole Docs (Privacy levels): "https://docs.pi-hole.net/ftldns/privacylevels/
- Pi-hole Docs (FTL Config Reference): "https://docs.pi-hole.net/ftldns/configfile/
- Pi-hole Docs (Query Database): "https://docs.pi-hole.net/database/ftl/
- Pi-hole Docs (pihole command): "https://docs.pi-hole.net/main/pihole-command/
- Pi-hole GitHub Security Policy: "https://github.com/pi-hole/pi-hole/security
- Pi-hole LICENSE: "https://github.com/pi-hole/pi-hole/blob/master/LICENSE
- [Pi-hole Website](https://pi-hole.net/)
- [Pi-hole Privacy Policy](https://pi-hole.net/privacy/)
- [Pi-hole Contact](https://pi-hole.net/contact/)
- [Pi-hole Terms of Service (Discourse)](https://discourse.pi-hole.net/tos)
- [Pi-hole Docs (About)](https://docs.pi-hole.net/)
- [Pi-hole Docs (Privacy levels)](https://docs.pi-hole.net/ftldns/privacylevels/)
- [Pi-hole Docs (FTL Config Reference)](https://docs.pi-hole.net/ftldns/configfile/)
- [Pi-hole Docs (Query Database)](https://docs.pi-hole.net/database/ftl/)
- [Pi-hole Docs (pihole command)](https://docs.pi-hole.net/main/pihole-command/)
- [Pi-hole GitHub Security Policy](https://github.com/pi-hole/pi-hole/security)
- [Pi-hole LICENSE](https://github.com/pi-hole/pi-hole/blob/master/LICENSE)
