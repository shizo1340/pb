---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / dnsforge.de"
url: "/anbieter/dnsforge/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-11"
robots: "index,follow"
description: "Kurzprofil von dnsforge.de (Kategorie: DNS)."
provider: ""
name: "dnsforge.de"
category: "DNS"
website: "https://dnsforge.de/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://adminforge.de/datenschutz/"
terms: "https://adminforge.de/nutzungsbestimmungen/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "unknown"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Deutschland (Köln, laut Impressum)"
region: "eu"
logs: "none"
logs_notes: "none (DNS Query-Logging laut Anbieter deaktiviert)"
retention: "unknown"
retention_notes: "Nicht angegeben (keine Query-Logs genannt; übrige Betriebslogs unklar)"
data_notes: "Public DNS-Resolver mit DoT/DoH/DoQ und optionalen Blocklisten-Profilen (Blank/Normal/Clean/Hard). Laut Anbieter ist DNS-Query-Logging deaktiviert (Query Log: off)."
features: ""
alternatives: ""
payment_processors: "Nicht zutreffend (kein Checkout)"
sources: ""
---
## Kurzprofil

dnsforge.de ist ein Anbieter aus der Kategorie **DNS**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen öffentlichen DNS-Resolver mit **verschlüsselten DNS-Protokollen (DoT/DoH/DoQ)** nutzen willst, ohne Konto-Anmeldung.
- **Weniger geeignet wenn:** du **nachvollziehbare Audit-Nachweise**, detaillierte öffentliche Doku zu Betriebslogs/Retention oder per-Account fein konfigurierbare Filterregeln brauchst.
- **Wichtigster Abwägung:** DNS-Anfragen laufen technisch über einen Drittanbieter-Resolver (Metadaten-Risiko); Filterprofile können **False Positives** verursachen (Abwägung: weniger Tracking/Malware-Domains vs. gelegentliches „Site broken“).

## Sofortmaßnahmen
- **Wechsle von unverschlüsseltem DNS (Port 53) auf DoT/DoH/DoQ**, um DNS-Traffic im Netz zu schützen.
- **Nutze „Blank“ als unfiltrierten Default**, wenn du nur Verschlüsselung willst (Abwägung: kein DNS-Blocking).
- **Teste nach Umstellung mit einem DNS-Leak-Test**, um Fallback auf ISP-DNS zu erkennen.

## Entscheidungshilfe
- Wenn du **nur verschlüsseltes DNS ohne Filter** willst, dann nutze **dnsforge „Blank“** (Abwägung: kein Schutz durch Blocklisten).
- Wenn du **Tracking/Ads/Malware-Domains auf DNS-Ebene** reduzieren willst, dann nutze **„Normal“** (Abwägung: mögliche Fehlblockaden).
- Wenn du **SafeSearch/Jugendschutz** brauchst, dann nutze **„Clean“** (Abwägung: zusätzliche Einschränkungen/Filterwirkung).
- Wenn du **sehr striktes Blocking** willst, dann nutze **„Hard“** (Abwägung: laut Anbieter keine Whitelist → mehr Breakage-Risiko).
- Wenn du **Android „Privates DNS“** nutzen willst, dann wähle **DoT-Hostname** des passenden Profils (Abwägung: DoT ist systemweit, einzelne Apps lassen sich meist nicht ausnehmen).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | dnsforge.de |
| Kategorie | DNS |
| Website | https://dnsforge.de/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | free |
| Free Tier | yes |
| Open Source | unknown |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend (kein Checkout) |
| Jurisdiktion | Deutschland (Köln, laut Impressum) |
| Logs | none (DNS Query-Logging laut Anbieter deaktiviert) |
| Retention | Nicht angegeben (keine Query-Logs genannt; übrige Betriebslogs unklar) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://adminforge.de/datenschutz/
- AGB/Terms: https://adminforge.de/nutzungsbestimmungen/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Public DNS-Resolver mit DoT/DoH/DoQ und optionalen Blocklisten-Profilen (Blank/Normal/Clean/Hard). Laut Anbieter ist DNS-Query-Logging deaktiviert (Query Log: off).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** DNS-Anfragen an den Resolver; laut Anbieter **keine Aufzeichnung von DNS-Zugriffen** (Query Log: off).
- **Wofür:** Namensauflösung; je nach Profil zusätzlich Filterung per Blocklisten/SafeSearch.
- **Weitergabe/Subprozessoren:** Nicht angegeben.
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend (kein Checkout).
- **Kontakt/DSAR/DPA:** Kontakt-E-Mail ist im Datenschutzhinweis genannt (kontakt@adminforge.de).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nicht zutreffend (DNS-Resolver ohne App-Konto), Website-Analytics nicht angegeben.
- **Abschaltbar?** Nicht angegeben.
- **Wo (Menüpfad):** Nicht zutreffend.

**Logs & Retention:**
- **Logging-Level:** none (DNS Query-Logging laut Anbieter deaktiviert)
- **Aufbewahrung:** Nicht angegeben (keine Query-Logs genannt; übrige Betriebslogs unklar)
- **Lösch-/Opt-out-Optionen:** Nicht angegeben.

**Abwägung am Punkt:** Weniger Logs reduziert Nachvollziehbarkeit (Support/Abuse), mehr Logs erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Transportverschlüsselung via **DoT/DoH/DoQ** (E2E nicht angegeben).
- **KDF/Parameter/Schlüsselableitung:** Nicht zutreffend (kein Konto/Passwortsystem).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (kein Konto).
- **Recovery/Account-Wiederherstellung:** Nicht zutreffend.
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Profil wählen (Blank/Normal/Clean/Hard) und DoT-Hostname setzen**.  
   **Beispiel (Android):** Einstellungen → Netzwerk & Internet → **Privates DNS** → „Privater DNS-Anbieterhostname“ → z.B. `dot1.dnsforge.de` (Normal).  
   **Prüfen:** Gerät zeigt „Verbunden“/keine DNS-Fehler.
2) **DoH im Browser aktivieren (optional zusätzlich zum System-DNS)**.  
   **Beispiel (Firefox):** Einstellungen → Datenschutz & Sicherheit → **DNS über HTTPS**.  
   **Prüfen:** Browser nutzt DoH-Endpunkt (kein Fallback).
3) **Nach dem Umstellen testen** (z.B. DNS-Leak-Test / Auflösung von Testdomains).  
   **Prüfen:** Resolver-IP/Hostname entspricht dem gewünschten Profil.

**Stolpersteine:**
- **„Hard“ kann legitime Domains blocken** und ist laut Anbieter ohne Whitelist (Abwägung: strikteres Blocking vs. höhere Breakage-Wahrscheinlichkeit).
- **Rate-Limit** kann bei sehr chatty Netzwerken/IoT auffallen (Abwägung: Abuse-Schutz vs. mögliche Timeouts).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **„Blank“** und ergänze Blocking lokal (z.B. im Browser/OS), wenn du DNS-Filterung nicht zentral auslagern willst.  
- Vermeide zusätzliche Identitätsbindung: **kein Konto**, keine App-Registrierung (laut Anbieter nicht nötig).  
- Halte DoH/DoT-Endpunkte möglichst **systemweit konsistent** (weniger „DNS-Split-Brain“).

**Abwägung:** weniger zentrale Filterwirkung, mehr Eigenaufwand bei Blocklisten/Schutz.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne Kontexte: unterschiedliches DNS-Profil je Gerät/Profil (z.B. Arbeitsprofil vs. Privatprofil).  
- Nutze bevorzugt **verschlüsseltes DNS** und reduziere Fallbacks (Apps/OS prüfen).  
- Optional: Netzwerk-Monitoring, ob aus dem System unverschlüsseltes DNS abfließt.

**Abwägung:** höhere Komplexität, mehr Fehlersuche bei Netzwerkproblemen.

</details>

## Features
- DNS-over-TLS (DoT), DNS-over-HTTPS (DoH) und DNS-over-QUIC (DoQ)
- Vier Resolver-Profile: Blank (ohne Filter), Normal (Ads/Tracker/Malware), Clean (zusätzlich Jugendschutz/SafeSearch), Hard (sehr striktes Blocking)
- DNSSEC-Validierung laut Anbieter
- Rate-Limit pro IP (laut Anbieter 100 Anfragen / 10 Sekunden)

## Alternativen
- Quad9 (DNS, Fokus auf Security-Blocking; Abwägung: anderer Betreiber/Policy-Set)
- Cloudflare 1.1.1.1 (DNS; Abwägung: große Infrastruktur, Policy-Details prüfen)
- NextDNS (DNS, per-Account konfigurierbar; Abwägung: Konto/Abrechnung & mehr Metadaten möglich)
- Control D (DNS, per-Account konfigurierbar; Abwägung: Konto/Abrechnung & mehr Metadaten möglich)
- CleanBrowsing (DNS, Filterprofile; Abwägung: Betreiber-/Logging-Details prüfen)

## Nicht gelöst / offene Punkte
- Unklar: Ob neben „Query Log: off“ weitere Betriebs-/Abuse-Logs gespeichert werden und wie lange.

## Quellen

- Vier Resolver-Profile: "Blank (ohne Filter), Normal (Ads/Tracker/Malware), Clean (zusätzlich Jugendschutz/SafeSearch), Hard (sehr striktes Blocking)
- Quad9 (DNS, Fokus auf Security-Blocking; Trade-off: "anderer Betreiber/Policy-Set)
- Cloudflare 1.1.1.1 (DNS; Trade-off: "große Infrastruktur, Policy-Details prüfen)
- NextDNS (DNS, per-Account konfigurierbar; Trade-off: "Konto/Abrechnung & mehr Metadaten möglich)
- Control D (DNS, per-Account konfigurierbar; Trade-off: "Konto/Abrechnung & mehr Metadaten möglich)
- CleanBrowsing (DNS, Filterprofile; Trade-off: "Betreiber-/Logging-Details prüfen)
- [dnsforge.de – Resolver-Profile, Endpunkte, Setup-Hinweise](https://dnsforge.de/)
- [adminForge – Datenschutzhinweis](https://adminforge.de/datenschutz/)
- [adminForge – Impressum](https://adminforge.de/impressum/)
- [adminForge – Nutzungsbestimmungen](https://adminforge.de/nutzungsbestimmungen/)
- [dnsforge.de – Resolver-Profile, Endpunkte, Einrichtung-Hinweise](https://dnsforge.de/)
- [adminForge – Datenschutzhinweis](https://adminforge.de/datenschutz/)
- [adminForge – Impressum](https://adminforge.de/impressum/)
- [adminForge – Nutzungsbestimmungen](https://adminforge.de/nutzungsbestimmungen/)
