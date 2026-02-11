---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Google Public DNS"
url: "/anbieter/google-public-dns/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-14"
robots: "index,follow"
description: "Kurzprofil von Google Public DNS (Kategorie: DNS)."
provider: ""
name: "Google Public DNS"
category: "DNS"
website: "https://developers.google.com/speed/public-dns"
repo: "Nicht angegeben"
license: "Proprietär (Dienst)"
policies: ""
privacy: "https://developers.google.com/speed/public-dns/privacy"
terms: "https://developers.google.com/speed/public-dns/terms"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "no"
self_host_possible: "no"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Europa: Google Ireland Limited (Irland); sonst: Google LLC (USA)"
region: "us"
logs: "minimal"
retention: "specified"
retention_notes: "24–48h (Temporary Logs inkl. IP); Permanent Logs: anonymisiert, Aufbewahrung nicht befristet genannt"
data_notes: "Temporary Logs enthalten IP + DNS-Query (24–48h); Permanent Logs sind eine Stichprobe ohne IP (stattdessen Stadt/Region). Laut Anbieter keine Nutzung für Ad-Targeting."
features: ""
alternatives: ""
payment_processors: "Nicht zutreffend (kostenlos)"
sources: ""
---
## Kurzprofil

Google Public DNS ist ein Anbieter aus der Kategorie **DNS**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen kostenlosen, global erreichbaren Resolver ohne Konto nutzen willst und optional **DNS-over-TLS (DoT)** oder **DNS-over-HTTPS (DoH)** einsetzen kannst.
- **Weniger geeignet wenn:** du DNS-Metadaten nicht bei einem großen zentralen Anbieter bündeln willst oder eine klar dokumentierte Aufbewahrungsdauer für dauerhaft gespeicherte (anonymisierte) Logs brauchst.
- **Wichtigster Abwägung:** **Verschlüsselter Transport (DoT/DoH)** schützt DNS im Netzweg vor Mitlesen/Manipulation, verlagert die Sicht auf DNS-Anfragen aber zu Google (inkl. protokollierter Metadaten laut Privacy Statement).

## Sofortmaßnahmen
- **DoT/DoH aktivieren, wo möglich** (reduziert Mitlesen/Manipulation von DNS zwischen Gerät und Resolver).
- **Nach der Umstellung prüfen, ob wirklich Google genutzt wird** (verhindert stillen Fallback auf ISP-/Router-DNS).
- **Bei DoH möglichst „schlanke“ Requests nutzen** (weniger Zusatz-Metadaten auf HTTP-Ebene, z.B. RFC-8484 POST statt GET, wenn dein Client das kann).

## Entscheidungshilfe
- Wenn du primär verhindern willst, dass dein lokales Netz/Hotspot DNS-Anfragen mitlesen oder verändern kann, dann nutze **DoT/DoH** zu Google Public DNS (Abwägung: mehr Metadaten-Sicht beim Resolver, mögliche Netzwerk-Blocks).
- Wenn du eine einfache DNS-Umstellung ohne Apps/Konten willst, dann nutze die klassischen Resolver-IP-Adressen (Abwägung: unverschlüsseltes DNS über UDP/TCP bleibt mitlesbar).
- Wenn du Wert auf DNSSEC-Validierung legst, dann kann ein Resolver mit dokumentierter DNSSEC-Unterstützung relevant sein (Abwägung: DNSSEC löst nicht die Metadatenfrage, nur Integrität/Authentizität).
- Wenn du CDN-/Geo-Optimierung möchtest, ist **EDNS Client Subnet (ECS)** im Ökosystem relevant (Abwägung: Teil-Standort-/Subnetz-Informationen können an autoritative Nameserver/CDNs weitergereicht werden, abhängig von Zone/Implementierung).
- Wenn du möglichst klare, konfigurierbare Logging-/Retention-Optionen brauchst, dann ist ein Resolver mit expliziten Opt-outs/Policies wichtiger als „Standardbetrieb“ (Abwägung: ggf. mehr Einrichtungsaufwand oder weniger Komfort).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Google Public DNS |
| Kategorie | DNS |
| Website | [developers.google.com/speed/public-dns](https://developers.google.com/speed/public-dns) |
| Quellcode | Nicht angegeben |
| Lizenz | Proprietär (Dienst) |
| Preismodell | free |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend (kostenlos) |
| Jurisdiktion | Europa: Google Ireland Limited (Irland); sonst: Google LLC (USA) |
| Logs | minimal |
| Retention | 24–48h (Temporary Logs inkl. IP); Permanent Logs: anonymisiert, Aufbewahrung nicht befristet genannt |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: [Your Privacy](https://developers.google.com/speed/public-dns/privacy)
- AGB/Terms: [Terms of Service](https://developers.google.com/speed/public-dns/terms)
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
- Temporary DNS Logs enthalten **IP-Adresse + Query** und werden laut Anbieter **innerhalb von 24–48 Stunden** gelöscht (Ausnahme: länger nur zur Bearbeitung von Security-/Abuse-Fällen).
- Permanent DNS Logs sind laut Anbieter eine **Stichprobe ohne IP-Adresse**, statt dessen mit **Stadt-/Region-Level** und technischen Metadaten (z.B. Domain, Typ, Transport, Timestamp).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - **Temporary Logs:** IP-Adresse des anfragenden Geräts + DNS-Query-Details; bei DoH zusätzlich *Content-Type* und *Accept*-Header.  
  - **Permanent Logs (Stichprobe):** u.a. angefragter Domainname, Request-Typ, Transportprotokoll, ASN, Geolocation auf Land/Region/Stadt-Level, Timestamp, Response-Code, Flags, Größen/Timing.
- **Wofür:** Security-/Abuse-Abwehr, Betrieb/Fehlerbehebung/Verbesserung, sowie aggregierte nicht-personenbezogene Nutzungszusammenfassungen.
- **Weitergabe/Subprozessoren:** Nicht angegeben.
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend (kostenlos).
- **Kontakt/DSAR/DPA:** Public DNS verweist auf die [Google Privacy Policy](https://policies.google.com/privacy); spezifische DPA/Unterauftragsliste für Public DNS: Nicht angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Ja (serverseitige DNS-Logs laut Privacy Statement).
- **Abschaltbar?** Nicht angegeben (kein Opt-out für Logging beschrieben).
- **Wo (Menüpfad):** Nicht zutreffend (kein Konto/kein Dashboard).

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** 24–48h (Temporary Logs inkl. IP); Permanent Logs: anonymisiert, Aufbewahrung nicht befristet genannt
- **Lösch-/Opt-out-Optionen:** Nicht angegeben.

**Abwägung am Punkt:** Weniger Logging wäre datensparsamer, kann aber Betrieb/Abuse-Abwehr erschweren; mehr/weitergehendes Logging erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Transportverschlüsselung per **DoT** und **DoH** (verschlüsselte Verbindung zwischen Gerät und Resolver); klassische DNS-Anfragen über UDP/TCP sind unverschlüsselt.
- **KDF/Parameter/Schlüsselableitung:** Nicht zutreffend (kein Konto/keine Passwörter).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (kein Konto).
- **Recovery/Account-Wiederherstellung:** Nicht zutreffend (kein Konto).
- **Vuln-Handling / Security-Kontakt:** Security-bezogene Probleme/Vulnerabilities sollen laut Anbieter über den **Issue Tracker** gemeldet werden (siehe „Discussion Groups and Issue Reporting“).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Resolver setzen** (klassisch): IPv4 `8.8.8.8` und `8.8.4.4` (oder IPv6 `2001:4860:4860::8888` / `::8844`) im OS/Router eintragen.  
   **Prüfen:** Aufruf von `https://dns.google/` zeigt Resolver-Ergebnisse; oder Diagnose laut Doku.
2) **Wenn möglich: DoT aktivieren** (Hostname `dns.google`, Port 853) – z.B. über OS-Funktion „Privates DNS“ (Android 9+).  
   **Prüfen:** DoT-Verbindung steht stabil, keine DNS-Ausfälle bei Captive Portals.
3) **Fallback-Risiko minimieren**: Stelle sicher, dass nicht parallel ein ISP-/Router-DNS konfiguriert ist (außer bewusst als Backup).  
   **Prüfen:** DNS-Tests zeigen konsistente Antworten vom gewählten Resolver.

**Stolpersteine:**
- In restriktiven Netzen (Hotel, Campus, Firmen-WLAN) können DoT/DoH blockiert sein → Risiko von Ausfällen oder ungewolltem Fallback.
- CDN-/Geolocation-Optimierung kann über Mechanismen wie ECS indirekt mehr Standort-/Subnetz-Metadaten ins DNS-Ökosystem tragen.

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze bevorzugt **verschlüsselte Transporte (DoT/DoH)**, um DNS auf dem Transportweg zu schützen (keine Klartext-DNS im lokalen Netz).
- Vermeide unnötige DoH-Zusatzdaten: Wenn dein Client es unterstützt, sind Requests mit wenig Headern/Optionen datensparsamer.
- Wenn du ECS als Problem siehst: Beachte, dass ECS im DNS-Ökosystem zur Geo-Optimierung genutzt werden kann; du kannst das als Kriterium bei der Resolver-Wahl berücksichtigen.
**Abwägung:** weniger Metadaten auf dem Weg, aber weiterhin zentrale Sicht beim Resolver; außerdem mögliche Kompatibilitätsprobleme in manchen Netzen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Isoliere DNS-Konfiguration pro Kontext (z.B. separates Geräteprofil/VM/Tunnel), damit DNS nicht „nebenbei“ über andere Resolver abfließt.
- Erzwinge, wo möglich, strikt verschlüsselte DNS-Transporte (DoT/DoH ohne opportunistischen Fallback), um Mitlesen/Manipulation zu reduzieren.
- Prüfe regelmäßig per Diagnose (z.B. `dns.google`-Tests aus der Troubleshooting-Doku), ob die erwarteten Resolver tatsächlich genutzt werden.
**Abwägung:** höhere Komplexität, mehr Ausfallrisiko bei Netz-Blocking und Captive Portals.

</details>

## Features
- Klassische Namensauflösung (DNS über UDP/TCP) via 8.8.8.8 / 8.8.4.4
- DNS-over-TLS (DoT) via `dns.google:853`
- DNS-over-HTTPS (DoH) via `https://dns.google/dns-query` (RFC 8484) und JSON API `https://dns.google/resolve`
- DNSSEC-Validierung (Integrität/Authentizität bei DNSSEC-signierten Zonen)
- DNS64 (für IPv6-only Netze mit NAT64, reservierter Prefix `64:ff9b::/96`)
- EDNS Client Subnet (ECS) Unterstützung (für Geo-optimierte Antworten in passenden Zonen)

## Alternativen
- [Cloudflare 1.1.1.1](/anbieter/cloudflare-1-1-1-1/)
- [Quad9](/anbieter/quad9/)
- [OpenDNS (Cisco)](/anbieter/opendns/)
- Wikimedia DNS (anderer Betreiber; Community/Non-Profit-Kontext)

## Nicht gelöst / offene Punkte
- Unklar, wie lange „Permanent DNS Logs“ aufbewahrt werden (keine befristete Retention-Angabe in der Public-DNS-Privacy-Seite).

## Quellen

- DNS-over-TLS (DoT) via dns.google: "853
- DNS-over-HTTPS (DoH) via https://dns.google/dns-query und JSON API /resolve
- https://policies.google.com/privacy
- [Google Public DNS (Übersicht)](https://developers.google.com/speed/public-dns)
- [Your Privacy (Public DNS Privacy Statement)](https://developers.google.com/speed/public-dns/privacy)
- [Terms of Service (Public DNS)](https://developers.google.com/speed/public-dns/terms)
- [Secure transports for DNS (DoH/DoT, Endpoints, TLS)](https://developers.google.com/speed/public-dns/docs/secure-transports)
- [Security Benefits (DNSSEC, Sicherheitsmaßnahmen)](https://developers.google.com/speed/public-dns/docs/security)
- [Get Started / Using Google Public DNS (IPs, Einrichtung)](https://developers.google.com/speed/public-dns/docs/using)
- [FAQ (Konto, Blocking/Filtering-Ausnahmen, Basisinfos)](https://developers.google.com/speed/public-dns/faq)
- [Troubleshooting (Diagnose/Prüfschritte)](https://developers.google.com/speed/public-dns/docs/troubleshooting)
- [EDNS Client Subnet (ECS) Guidelines](https://developers.google.com/speed/public-dns/docs/ecs)
- [Discussion Groups and Issue Reporting (inkl. Security-Issue-Tracker-Hinweis)](https://developers.google.com/speed/public-dns/groups)
- [Google Privacy Policy](https://policies.google.com/privacy)
