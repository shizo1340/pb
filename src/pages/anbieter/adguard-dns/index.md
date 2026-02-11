---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / AdGuard DNS"
url: "/anbieter/adguard-dns/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-06"
robots: "index,follow"
description: "Kurzprofil von AdGuard DNS (Kategorie: DNS)."
provider: ""
name: "AdGuard DNS"
category: "DNS"
website: "https://adguard-dns.io/"
repo: "https://github.com/AdguardTeam/AdGuardDNS"
license: "AGPL-3.0-only"
policies: ""
privacy: "https://adguard-dns.io/en/privacy.html"
terms: "https://adguard-dns.io/en/eula.html"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: "[]"
pricing: "mixed"
free_tier: "yes"
open_source: "partial"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Zypern (AdGuard Software Limited)"
region: "eu"
logs: "configurable"
retention: "unknown"
retention_notes: "konfigurierbar (genaue Zeiträume nicht angegeben)"
data_notes: "Public DNS ohne Konto nutzbar; Private DNS (Dashboard, Geräte, Statistiken) erfordert Konto. Query-Logs sind optional und lassen sich laut Privacy Policy deaktivieren."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

AdGuard DNS ist ein Anbieter aus der Kategorie **DNS**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du **DNS-basiertes Blocking** nutzen willst (Ads/Tracker/Threat-Domains) und dafür **verschlüsselte DNS-Protokolle** (DoH/DoT/DoQ) einsetzen möchtest.
- **Weniger geeignet wenn:** du ein **DNS-Query-Protokoll in einem Cloud-Dashboard** grundsätzlich vermeiden willst oder wenn du sehr genaue, öffentlich dokumentierte **Retention-Zeiträume** erwartest (hier nicht konkret benannt).
- **Wichtigster Abwägung:** **Komfort (Dashboard/Statistiken/Regeln)** vs. **Metadaten (DNS-Queries, Gerätebezeichnungen, Log-Retention)**.

## Sofortmaßnahmen
- **Encrypted DNS aktivieren (DoH/DoT/DoQ):** verhindert einfache Mitlesbarkeit im lokalen Netz/Provider-Pfad.
- **Query-Log im Private-DNS-Dashboard deaktivieren:** reduziert gespeicherte DNS-Metadaten (falls du Private DNS nutzt).
- **Gerätenamen neutral halten:** senkt Identifizierbarkeit in Statistiken/Logs (z.B. keine Klarnamen).

## Entscheidungshilfe
- Wenn du **ohne Konto** starten willst, dann nutze **Public AdGuard DNS** (Abwägung: weniger Individualisierung, kein eigenes Dashboard).
- Wenn du **eigene Regeln/Statistiken** brauchst, dann nutze **Private AdGuard DNS** (Abwägung: Konto + optionales Query-Logging im Dashboard).
- Wenn du **DNS-Queries nicht speichern** willst, dann deaktiviere das **Anfragenprotokoll/Query-Log** (Abwägung: weniger Debugging/Transparenz bei „warum wurde etwas geblockt?“).
- Wenn du **Netzwerkbedingungen wechselst** (WLAN/Mobil/VPN), dann prüfe die **automatische Geräteverbindung** (Abwägung: Komfort vs. zusätzliche Geräte-/Token-Verwaltung).
- Wenn du **iCloud Privat-Relay** nutzt, dann prüfe die KB zum Zusammenspiel (Abwägung: Privat-Relay kann DNS/Filterwirkung einschränken).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | AdGuard DNS |
| Kategorie | DNS |
| Website | https://adguard-dns.io/ |
| Quellcode | https://github.com/AdguardTeam/AdGuardDNS |
| Lizenz | AGPL-3.0-only |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Zypern (AdGuard Software Limited) |
| Logs | configurable |
| Retention | konfigurierbar (genaue Zeiträume nicht angegeben) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://adguard-dns.io/en/privacy.html
- AGB/Terms: https://adguard-dns.io/en/eula.html
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Public DNS ohne Konto nutzbar; Private DNS (Dashboard, Geräte, Statistiken) erfordert Konto. Query-Logs sind optional und lassen sich laut Privacy Policy deaktivieren.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Produktmodus-abhängig. **Public DNS** ist ohne Konto nutzbar. **Private DNS** nutzt ein Konto/Dashboard und kann u.a. Geräte, Einstellungen, Statistiken sowie optional ein **Anfragenprotokoll (Query-Log)** enthalten.
- **Wofür:** DNS-Auflösung/Filtering (Blocklisten/Regeln), optional Statistik & Troubleshooting im Dashboard.
- **Weitergabe/Subprozessoren:** Nicht angegeben (in den verlinkten DNS-Quellen keine öffentliche Subprozessoren-Liste gesehen).
- **Drittlandtransfer:** Nicht angegeben / Unklar (bitte in Privacy Policy prüfen).
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (Pricing ist „mixed“, aber der konkrete Payment-Flow ist hier nicht belegt).
- **Kontakt/DSAR/DPA:** Privacy Policy ist vorhanden; DPA ist verlinkt (AdGuard).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar (für Website/Dashboard nicht explizit in den verlinkten KB-Seiten belegt).
- **Abschaltbar?** Unklar.
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** configurable (insb. Query-Log/Anfragenprotokoll und Statistikfunktionen im Private-DNS-Dashboard).
- **Aufbewahrung:** konfigurierbar (genaue Zeiträume nicht angegeben).
- **Lösch-/Opt-out-Optionen:** Query-Logs lassen sich laut Daten-Notizen/Privacy Policy deaktivieren; Details zur Löschung im Dashboard bitte in den KB-Seiten „Anfragenprotokoll“ / „Statistiken“ prüfen.

**Abwägung am Punkt:** Weniger Logs reduziert Metadaten, erschwert aber Analyse von Fehlblocking/Problemen; mehr Logs erleichtert Debugging, erhöht aber Sensitivität (DNS-Verlauf).

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben (DNS ist Transport-verschlüsselt via DoH/DoT/DoQ, aber keine E2E-Behauptung im Sinne von „nur der Client kann lesen“ belegt).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben.
- **Recovery/Account-Wiederherstellung:** Nicht angegeben.
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben (im verlinkten Repo kein SECURITY.md in den Daten angegeben; bitte Repo prüfen).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Encrypted DNS nutzen (DoH/DoT/DoQ)** statt Klartext-DNS.  
   **Prüfen:** Gerät/Router zeigt DoH/DoT/DoQ aktiv; DNS-Leak-Test zeigt nur den gewählten Resolver.
2) **Auto-Lock/Timeout** im Dashboard prüfen (falls Private DNS genutzt wird).  
   **Prüfen:** Session endet nach Inaktivität oder du loggst dich bewusst aus (falls verfügbar).
3) **Analytics/Telemetry deaktivieren**, falls Schalter existiert (Website/Dashboard).  
   **Prüfen:** Opt-out ist sichtbar und bleibt nach Reload aktiv.

**Stolpersteine:**
- **iCloud Privat-Relay** kann DNS-/Filterwirkung beeinflussen → KB zum Zusammenspiel beachten.
- **Query-Log/Statistiken** sind nützlich, aber sensibel (DNS-Metadaten) → Logging/Retention aktiv steuern.
- **„Known issues“**: Prüfe die KB-Seite bei Verbindungsproblemen/Device-Registration.

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **Public DNS ohne Konto**, wenn keine Dashboard-Funktionen nötig sind.
- In **Private DNS**: Query-Log deaktivieren und Gerätebezeichnungen neutral halten.
- Regeln sparsam einsetzen (nur wirklich benötigte Filter), um Debugging/Fehlerdiagnose zu vereinfachen.
**Abwägung:** weniger Komfort bei Fehlersuche und weniger Transparenz über Blockentscheidungen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Private DNS nur mit **minimaler Log-Konfiguration** (Query-Log aus), und getrennte Geräteprofile für unterschiedliche Identitäten.
- Nutze die **API** nur mit minimalen Tokens/Rechten und rotiere Schlüssel regelmäßig (wenn du API verwendest).
- Vermeide Mischbetrieb, der DNS-Pfade verwischt (z.B. Privat-Relay/VPN/MDM), wenn du deterministische Filterwirkung brauchst.
**Abwägung:** mehr Betriebsaufwand und potenziell häufiger manuelle Fehlersuche.

</details>

## Features
- Public DNS (Default / Unfiltered / Family)
- DNS-over-HTTPS (DoH), DNS-over-TLS (DoT), DNS-over-QUIC (DoQ)
- DNS-Blocking gegen Ads/Tracker/Phishing/Malware-Domains
- Private DNS: Dashboard mit Statistiken & Anfragenprotokoll
- Eigene Regeln (DNS-Filter-Syntax)

## Alternativen
- [AdGuard Home](/anbieter/adguard-home/) – Abwägung: lokale Kontrolle/keine Cloud-Logs vs. eigener Betrieb/Updates.
- [NextDNS](/anbieter/nextdns/) – Abwägung: Cloud-Dashboard/Policies vs. Metadaten/Retention-Management beim Anbieter.
- [Control D](/anbieter/control-d/) – Abwägung: sehr flexible Policies vs. Konto-/Dashboard-Abhängigkeit.
- [Quad9](/anbieter/quad9/) – Abwägung: Fokus auf Security-Blocking vs. weniger individuelle Listen/Regeln (je nach Einsatz).

## Nicht gelöst / offene Punkte
- **Retention-Zeiträume** für Query-Log/Statistiken sind als „konfigurierbar“ beschrieben, aber nicht mit konkreten Zeiträumen belegt.
- **2FA/MFA für das Private-DNS-Konto** ist in den hier genutzten Quellen nicht eindeutig dokumentiert.

## Quellen

- Private DNS: "Dashboard mit Statistiken & Anfragenprotokoll
- [Connect to public AdGuard DNS server](https://adguard-dns.io/en/public-dns.html)
- [AdGuard DNS Privacy Policy](https://adguard-dns.io/en/privacy.html)
- [AdGuard DNS — EULA](https://adguard-dns.io/en/eula.html)
- [AdGuard DNS (GitHub)](https://github.com/AdguardTeam/AdGuardDNS)
- [Known issues (KB)](https://adguard-dns.io/kb/private-dns/solving-problems/known-iss%C3%BCs/)
- [Verwendung neben iCloud Privat-Relay (KB)](https://adguard-dns.com/kb/de/private-dns/solving-problems/icloud-private-relay/)
- [Statistiken und Anfragenprotokoll (KB)](https://adguard-dns.com/kb/de/private-dns/statistics-and-log/)
- [Anfragenprotokoll (KB)](https://adguard-dns.com/kb/de/private-dns/statistics-and-log/query-log/)
- [Statistiken (KB)](https://adguard-dns.com/kb/de/private-dns/statistics-and-log/statistics/)
- [Syntax der DNS-Filterregeln (KB)](https://adguard-dns.com/kb/de/general/dns-filtering-syntax/)
- [Automatische Geräteverbindung (KB)](https://adguard-dns.io/kb/de/private-dns/connect-devices/other-options/automatic-connection/)
- [About AdGuard DNS](https://adguard-dns.io/en/about.html)
- [AdGuard Data Processing Agreement](https://adguard.com/en/data-processing-agreement.html)
- [AdGuard DNS API overview](https://adguard-dns.io/kb/api/overview/)
- [Erweiterte Einstellungen (KB)](https://adguard-dns.io/kb/de/private-dns/server-and-settings/advanced-settings/)
- [Connect to public AdGuard DNS server](https://adguard-dns.io/en/public-dns.html)
- [AdGuard DNS Privacy Policy](https://adguard-dns.io/en/privacy.html)
- [AdGuard DNS — EULA](https://adguard-dns.io/en/eula.html)
- [AdGuard DNS (GitHub)](https://github.com/AdguardTeam/AdGuardDNS)
- [Known issues (KB)](https://adguard-dns.io/kb/private-dns/solving-problems/known-iss%C3%BCs/)
- [Verwendung neben iCloud Privat-Relay (KB)](https://adguard-dns.com/kb/de/private-dns/solving-problems/icloud-private-relay/)
- [Statistiken und Anfragenprotokoll (KB)](https://adguard-dns.com/kb/de/private-dns/statistics-and-log/)
- [Anfragenprotokoll (KB)](https://adguard-dns.com/kb/de/private-dns/statistics-and-log/query-log/)
- [Statistiken (KB)](https://adguard-dns.com/kb/de/private-dns/statistics-and-log/statistics/)
- [Syntax der DNS-Filterregeln (KB)](https://adguard-dns.com/kb/de/general/dns-filtering-syntax/)
- [Automatische Geräteverbindung (KB)](https://adguard-dns.io/kb/de/private-dns/connect-devices/other-options/automatic-connection/)
- [About AdGuard DNS](https://adguard-dns.io/en/about.html)
- [AdGuard Data Processing Agreement](https://adguard.com/en/data-processing-agreement.html)
- [AdGuard DNS API overview](https://adguard-dns.io/kb/api/overview/)
- [Erweiterte Einstellungen (KB)](https://adguard-dns.io/kb/de/private-dns/server-and-settings/advanced-settings/)

