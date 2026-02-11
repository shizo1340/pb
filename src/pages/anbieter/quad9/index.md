---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Quad9"
url: "/anbieter/quad9/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von Quad9 (Kategorie: DNS)."
provider: ""
name: "Quad9"
category: "DNS"
website: "https://quad9.net/"
repo: "https://github.com/Quad9DNS"
license: "AGPL-3.0 (z.B. quad9-connect, documentation; Details je Repo)"
policies: ""
privacy: "https://quad9.net/privacy/policy/"
terms: "Nicht angegeben"
transparency: "https://quad9.net/about/transparency-report/"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "partial"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Schweiz (Zürich)"
region: "ch"
logs: "minimal"
retention: "specified"
retention_notes: "Zähler/Metadaten können in permanenten Archiven gespeichert werden (Dauer nicht spezifiziert)"
data_notes: "Quad9 betreibt einen öffentlichen rekursiven DNS-Resolver (Anycast). Laut DNS-Service-Privacy-Policy sammelt Quad9 hauptsächlich aggregierte Zähler (u.a. Protokolle, Regionen, BGP-Präfixe) sowie Zeitpunkte der ersten/letzten Sichtung je Query-Label; IP-Adressen sollen dabei nicht mit Query-Labels korreliert werden. Unter „anomalous conditions“ (z.B. bei Angriffen) gelten abweichende Regeln mit erweiterten Datenflüssen."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Quad9 ist ein Anbieter aus der Kategorie **DNS**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen öffentlichen DNS-Resolver ohne Registrierung nutzen willst und DNS-Transportverschlüsselung (DoT/DoH/DNSCrypt) einsetzen möchtest.
- **Weniger geeignet wenn:** du DNS-Filterung (Blocklisten) grundsätzlich vermeiden willst oder du zwingend DoH-Clients ohne HTTP/2-Unterstützung nutzen musst.
- **Wichtigster Abwägung:** Schutz durch DNS-Blockierung vs. mögliche False-Positives/Debug-Aufwand; zusätzlich: ECS (CDN-Optimierung) vs. zusätzliche Metadaten.

## Sofortmaßnahmen
- **DoT statt Klartext-DNS aktivieren** (z.B. Android „Privates DNS“ → `dns.quad9.net`): reduziert Mitlesbarkeit im Netzwerk.
- **ECS-Variante vermeiden, wenn nicht nötig**: weniger Weitergabe von Standort-/Netzwerk-Metadaten an Dritte.
- **Nach dem Umstellen verifizieren**: `on.quad9.net` öffnen und optional `proto.on.quad9.net` testen (Protokoll-Check).

## Entscheidungshilfe
- Wenn du **Malware-/Phishing-Domains blockieren** willst, dann nutze die „Recommended“-Resolver (Abwägung: Blocklisten können vereinzelt legitime Domains treffen).
- Wenn du **keine Filterung** möchtest, dann nutze die „Unsecured“-Resolver (Abwägung: laut Anbieter dort **keine** Malware-Blockierung und **keine** DNSSEC-Validierung).
- Wenn du **verschlüsseltes DNS** willst, dann nutze **DoT** (`tls://dns.quad9.net`) oder **DoH** (`https://dns.quad9.net/dns-query`) (Abwägung: DoH benötigt HTTP/2-Unterstützung beim Client).
- Wenn du **CDN/Geo-Optimierung** brauchst (z.B. Streaming/CDNs liefern falsch), dann teste den ECS-fähigen Resolver (Abwägung: zusätzliche Metadaten über Netz/Region können an Partner fließen).
- Wenn du Quad9 **über eine VPN-App** nutzen willst, dann prüfe die VPN-Option „Custom DNS“ (Abwägung: laut Quad9 kann dabei DoT/DoH lokal wirkungslos sein, je nach VPN-Implementierung).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Quad9 |
| Kategorie | DNS |
| Website | https://quad9.net/ |
| Quellcode | https://github.com/Quad9DNS |
| Lizenz | AGPL-3.0 (z.B. quad9-connect, documentation; Details je Repo) |
| Preismodell | free |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben (DNS-Service ohne Signup/Checkout) |
| Jurisdiktion | Schweiz (Zürich) |
| Logs | minimal |
| Retention | Zähler/Metadaten können in permanenten Archiven gespeichert werden (Dauer nicht spezifiziert) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://quad9.net/privacy/policy/
- AGB/Terms: Nicht angegeben
- Transparency Report: https://quad9.net/about/transparency-report/
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Quad9 beschreibt die Datenerhebung im DNS-Dienst vor allem als **aggregierte Zähler** (u.a. Protokoll-/Transportarten, Regionen, BGP-Präfixe) plus **Zeitpunkte** der ersten/letzten Sichtung je Query-Label; IP-Adressen sollen dabei nicht mit Query-Labels verknüpft werden. Außerdem teilt Quad9 **limitierte statistische Daten** mit Threat-Intelligence-Partnern (u.a. Zeitstempel bei Treffern auf deren „malicious domains“). Unter „anomalous conditions“ gelten abweichende Regeln mit erweiterten Datenflüssen.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Quad9 nennt Zähler u.a. nach Query-Typ/Response-Typ/Transport (IPv4/IPv6, TCP/UDP, DoT/DoH/DNSCrypt), Herkunft nach Region und BGP-Präfix sowie Zeitpunkte der ersten/letzten Sichtung je Query-Label; IP-Adressen („Reply To Addresses“) werden als PII behandelt und sollen nicht mit Query-Labels korreliert werden.  
- **Wofür:** Kapazitätsplanung/Forecasting und Betrieb; bei „malicious domains“ zusätzlich Statistik über Treffer nach Region/BGP-Präfix.  
- **Weitergabe/Subprozessoren:** Quad9 nennt die Weitergabe sehr limitierter statistischer Daten an Threat-Intelligence-Analysten (u.a. Zeitstempel je Treffer pro „malicious domain“ sowie Zähler nach Region/BGP-Präfix); zusätzlich beschreibt Quad9 Threat-Intelligence-Partner öffentlich.  
- **Drittlandtransfer:** Für den DNS-Dienst nicht spezifisch als „Transfer“ beschrieben; für Website/Support nennt Quad9 Zendesk (USA) und Mailchimp (USA) sowie Support-Antworten durch Personal auch außerhalb der EEA.  
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (DNS-Dienst ohne Signup).  
- **Kontakt/DSAR/DPA:** Die DNS-Service-Privacy-Policy nennt Betroffenenrechte und verweist auf Kontaktangaben in der Policy; die Website-Policy nennt zusätzlich `support@quad9.net`.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Beim DNS-Dienst: ja, in Form aggregierter Zähler/Statistiken (z.B. Protokolle/Regionen/BGP-Präfixe) sowie Zeitpunkte der ersten/letzten Sichtung je Query-Label.
- **Abschaltbar?** Nicht angegeben (öffentlicher Resolver ohne individuelles Opt-out beschrieben).
- **Wo (Menüpfad):** Nicht anwendbar (kein Konto/Dashboard).

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** Laut DNS-Service-Privacy-Policy können die genannten Daten „in permanenten Archiven“ gespeichert werden; Website-Serverlogs werden laut Website-Policy nach 24 Monaten gelöscht.
- **Lösch-/Opt-out-Optionen:** Nicht angegeben (DNS-Dienst ohne Konto); Website-Newsletter-Abmeldung per Link in E-Mails beschrieben.

**Abwägung am Punkt:** Weniger Metadaten reduziert Auswertbarkeit/Debugging; mehr Statistik kann Betriebs- und Sicherheitsanalysen erleichtern, erhöht aber Metadatenumfang.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Transportverschlüsselung für DNS wird über **DoT** und **DoH** angeboten; zusätzlich **DNSCrypt** als Option.
- **KDF/Parameter/Schlüsselableitung:** Nicht anwendbar (kein Passwort-Tresor/Client-Speicher im DNS-Dienst beschrieben).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht anwendbar (kein Konto nötig).
- **Recovery/Account-Wiederherstellung:** Nicht anwendbar (kein Konto).
- **Vuln-Handling / Security-Kontakt:** Kein zentraler Disclosure-Prozess auf quad9.net in den geprüften Seiten eindeutig genannt; in GitHub-Repos existieren projektbezogene SECURITY.md (z.B. für „quad9-connect“), aber nicht als allgemeine Service-Policy dokumentiert.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Quad9 als DNS-Resolver setzen (Recommended)**  
   **Werte:** IPv4 `9.9.9.9`, `149.112.112.112` · IPv6 `2620:fe::fe`, `2620:fe::9`  
   **Prüfen:** `on.quad9.net` zeigt Nutzung von Quad9.
2) **DNS verschlüsseln (DoT oder DoH)**  
   **DoT:** `tls://dns.quad9.net` · **DoH:** `https://dns.quad9.net/dns-query`  
   **Prüfen:** `dig +short txt proto.on.quad9.net.` → erwartete Antwort `dot` oder `doh`.
3) **ECS nur nutzen, wenn nötig**  
   **ECS-Endpoint:** `9.9.9.11` / `dns11.quad9.net` (DoT/DoH entsprechend)  
   **Prüfen:** Nur aktivieren, wenn CDN/Geo-Probleme ohne ECS auftreten.

**Stolpersteine:**
- **Unsecured-Resolver**: laut Quad9 ohne Malware-Blockierung **und** ohne DNSSEC-Validierung (mehr Kompatibilität/Neutralität, aber weniger Schutz gegen Manipulation/Bad-Domains).
- **DoH benötigt HTTP/2:** Quad9 hat HTTP/1.1 für DoH global deaktiviert (seit 15.12.2025) → ältere Clients/Router können ausfallen.
- **VPN + Custom DNS:** laut Quad9 kann DNS-Transportverschlüsselung dadurch wirkungslos sein (je nach VPN-Client).

<details>
<summary>Profil B (Datensparsam)</summary>

- **ECS deaktiviert lassen** und keine ECS-Endpunkte verwenden.  
- **Klartext-DNS vermeiden:** DoT bevorzugen (geringerer Web-Stack als DoH; Abwägung: Port 853 kann in manchen Netzen blockiert sein).  
- **Lokales Query-Logging vermeiden**, wenn du „Quad9 Connect“ nutzt (die App nennt ein „full log of DNS queries“ als Feature).  
**Abwägung:** weniger Debug-Möglichkeiten bei Netzwerkproblemen/False-Positives.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Lokalen Forwarder/Resolver** nutzen (z.B. als Systemdienst), der ausschließlich verschlüsselt zu Quad9 spricht (DoT/DoH mit HTTP/2), und Clients nur lokal anbinden.  
- **Trennung nach Gerätegruppen** (IoT/Smart-TV) über VLAN/Router-DNS, um DNS-Leaks zu reduzieren.  
- **Verifikation erzwingen:** regelmäßig `proto.on.quad9.net` und Leak-Checks nutzen (DNS-Leak-Tests können je nach Anycast/Provider-Namen verwirrend sein; Quad9 verweist auf `on.quad9.net`).  
**Abwägung:** mehr Komplexität, mehr Komponenten, mehr Fehlersuche.

</details>

## Features
- Öffentlicher rekursiver DNS-Resolver (Anycast)
- Malware-/Phishing-Blockierung (gefilterte Resolver) + Domain-Block-Tester (laut Docs/Website)
- DNSSEC-Validierung (bei „Recommended“/„Secured w/ECS“)
- Verschlüsselte DNS-Transporte: DoT, DoH (HTTP/2), DNSCrypt
- Optional ECS-fähiger Resolver (für CDN/Geo-Optimierung)

## Alternativen
- Cloudflare Public DNS (ähnliche Kategorie; Abwägung: anderer Betreiber-/Datenverarbeitungsrahmen)
- Google Public DNS (ähnliche Kategorie; Abwägung: anderer Betreiber-/Datenverarbeitungsrahmen)
- NextDNS (ähnliche Kategorie; Abwägung: konto-/konfigurationsbasierte Features möglich, dafür mehr Identitätsbindung)
- Eigenbetrieb (z.B. lokaler Resolver/Forwarder) (Abwägung: mehr Betrieb/Komplexität, volle Kontrolle lokal)

## Nicht gelöst / offene Punkte
- Exakte Dauer/Details der „permanent archives“ (DNS-Service-Privacy-Policy spricht von permanenter Archivierung, ohne Zeitrahmen).

## Quellen

- Verschlüsselte DNS-Transporte: "DoT/DoH (HTTP/2) und DNSCrypt
- Optional ECS-fähiger Resolver (für CDN/Geo-Optimierung, Trade-off: "mehr Metadaten)
- Cloudflare Public DNS (ähnliche Kategorie; Trade-off: "anderer Betreiber-/Datenverarbeitungsrahmen)
- Google Public DNS (ähnliche Kategorie; Trade-off: "anderer Betreiber-/Datenverarbeitungsrahmen)
- NextDNS (ähnliche Kategorie; Trade-off: "konto-/konfigurationsbasierte Features möglich, dafür mehr Identitätsbindung)
- Eigenbetrieb (z.B. lokaler Resolver/Forwarder) (Trade-off: "mehr Betrieb/Komplexität, volle Kontrolle lokal)
- [Quad9 Service](https://quad9.net/service/)
- [Service Addresses & Features](https://quad9.net/service/service-addresses-and-features/)
- [Quad9 DNS Service Privacy Policy (Data and Privacy Policy)](https://quad9.net/privacy/policy/)
- [Anomalous Conditions Document](https://quad9.net/privacy/anomalous-conditions/)
- [Website Privacy Policy](https://quad9.net/privacy/website-policy/)
- [Partners](https://quad9.net/about/partners/)
- [Quad9 Docs – FAQs](https://docs.quad9.net/FAQs/)
- [Transparency Report](https://quad9.net/about/transparency-report/)
- [Quad9DNS (GitHub Org)](https://github.com/Quad9DNS)
- [Quad9 Service](https://quad9.net/service/)
- [Service Addresses & Features](https://quad9.net/service/service-addresses-and-features/)
- [Quad9 DNS Service Privacy Policy (Data and Privacy Policy)](https://quad9.net/privacy/policy/)
- [Anomalous Conditions Document](https://quad9.net/privacy/anomalous-conditions/)
- [Website Privacy Policy](https://quad9.net/privacy/website-policy/)
- [Partners](https://quad9.net/about/partners/)
- [Quad9 Docs – FAQs](https://docs.quad9.net/FAQs/)
- [Transparency Report](https://quad9.net/about/transparency-report/)
- [Quad9DNS (GitHub Org)](https://github.com/Quad9DNS)
