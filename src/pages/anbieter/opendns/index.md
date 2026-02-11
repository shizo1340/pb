---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / OpenDNS (Cisco)"
url: "/anbieter/opendns/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-19"
robots: "index,follow"
description: "Kurzprofil von OpenDNS (Cisco) (Kategorie: DNS)."
provider: ""
name: "OpenDNS (Cisco)"
category: "DNS"
website: "https://www.opendns.com/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://www.cisco.com/c/en/us/about/legal/privacy-full.html"
terms: "https://www.opendns.com/consumer-terms/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "no"
self_host_possible: "unknown"
account_required: "no"
phone_required: "unknown"
kyc_required: "unknown"
jurisdiction: "USA (Cisco Systems, Inc.)"
region: "us"
logs: "unknown"
logs_notes: "configurable (Umbrella); unklar für reine öffentliche Resolver-Nutzung"
retention: "verylong"
retention_notes: "bis 30 Tage (detailliert) / bis 2 Jahre (Summary) – laut Cisco-Umbrella-Doku"
retention_max_days: "730"
data_notes: "DNS-Auflösung ist ein Metadaten-Hotspot: der Resolver sieht angefragte Domains. Verschlüsselter Transport (z.B. DoH) schützt vor Mitlesern im lokalen Netz/ISP, nicht vor dem Resolver selbst."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

OpenDNS (Cisco) ist ein Anbieter aus der Kategorie **DNS**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du DNS-Auflösung zentral steuern möchtest (z.B. Filter/Policies/Reports im Cisco-Umbrella-Umfeld) und dafür einen externen Resolver nutzt.
- **Weniger geeignet wenn:** du möglichst wenig DNS-Metadaten bei einem zentralen Drittanbieter hinterlassen willst oder eine reine Self-Hosting-Lösung bevorzugst.
- **Wichtigster Abwägung:** zentrale DNS-Security/Verwaltung vs. sichtbare DNS-Metadaten beim Resolver (und ggf. längere Aufbewahrung durch Reporting/Logs).

## Sofortmaßnahmen
- **DNS-Transport verschlüsseln (DoH/DoT), wenn möglich:** reduziert Mitlesen im WLAN/ISP (Abwägung: Resolver sieht die Domains weiterhin).
- **Nur so viel Reporting aktivieren wie nötig:** weniger Logs = weniger Metadaten (Abwägung: weniger Diagnose/Forensik).
- **DNS-Leaks prüfen:** sicherstellen, dass Geräte nicht auf Fallback-DNS (z.B. ISP) zurückfallen (Abwägung: bei Störungen weniger „automatische“ Ausweichwege).

## Entscheidungshilfe
- Wenn du **nur DNS-Auflösung ohne Dashboard/Policies** brauchst, dann nutze die öffentlichen Resolver-Funktionen ohne Login (Abwägung: weniger Transparenz/Steuerung, Log-/Retention-Details sind für diese Nutzung in den Consumer-Quellen nicht konkret beschrieben).
- Wenn du **Filterregeln/Reports** brauchst, dann nutze die Dashboard-/Policy-Funktionen (Abwägung: mehr Kontobindung und typischerweise mehr Logging/Metadaten).
- Wenn du **in fremden Netzen** (Hotel/WLAN) DNS vor Mitlesern schützen willst, dann nutze **DoH** (Abwägung: Captive Portals/Netzwerkfilter können Probleme machen; DoH ist schwerer zu debuggen).
- Wenn du **Incident-Response/Forensik** brauchst, dann ist längere Log-Aufbewahrung nützlich (Abwägung: längere Metadatenhaltung beim Anbieter oder in eigenen Export-Zielen).
- Wenn du **Metadaten minimieren** willst, dann reduziere Identitätsbindung (keine Nutzer-/AD-Integrationen) und prüfe lokale Zwischenresolver (Abwägung: mehr Betriebsaufwand, weniger Komfort).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | OpenDNS (Cisco) |
| Kategorie | DNS |
| Website | https://www.opendns.com/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | no (für öffentliche Resolver); ja für Dashboard/Policy-Funktionen |
| Telefon erforderlich | unknown |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | USA (Cisco Systems, Inc.) |
| Logs | configurable (Umbrella); unklar für reine öffentliche Resolver-Nutzung |
| Retention | bis 30 Tage (detailliert) / bis 2 Jahre (Summary) – laut Cisco-Umbrella-Doku |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.cisco.com/c/en/us/about/legal/privacy-full.html
- AGB/Terms: https://www.opendns.com/consumer-terms/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
DNS-Anfragen verraten besuchte Domains/Services. Verschlüsselter DNS-Transport (z.B. DoH) schützt primär gegen lokale/ISP-Mitleser, nicht gegen den DNS-Resolver als Betreiber.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Unklar (Consumer Terms verweisen auf das Cisco Online Privacy Statement, nennen aber keine OpenDNS-spezifischen Datenkategorien).
- **Wofür:** Bereitstellung der DNS-/Cloud-Service-Funktionen (Details in den verlinkten Cisco-Policies/Terms).
- **Weitergabe/Subprozessoren:** Unklar (keine öffentliche Subprozessorenliste in den hier genutzten Consumer-Quellen gefunden).
- **Drittlandtransfer:** Unklar.
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben.
- **Kontakt/DSAR/DPA:** Unklar (in den Consumer-Quellen nicht konkret als eigener Prozess/Link beschrieben).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar (für Consumer-Resolver ohne Dashboard in den genutzten Quellen nicht beschrieben).
- **Abschaltbar?** Unklar.
- **Wo (Menüpfad):** Unklar (abhängig vom genutzten Produkt/Console).

**Logs & Retention:**
- **Logging-Level:** configurable (Umbrella); unklar für reine öffentliche Resolver-Nutzung
- **Aufbewahrung:** bis 30 Tage (detailliert) / bis 2 Jahre (Summary) – laut Cisco-Umbrella-Doku
- **Lösch-/Opt-out-Optionen:** Unklar (in den hier genutzten Quellen nicht als konkreter Self-Service-Prozess belegt).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Unklar (DNS ist transport-/serverseitig; E2E im Sinne von „nur Client kann entschlüsseln“ ist hier typischerweise nicht anwendbar).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Unklar (Security-Docs nennen 2-Step-Verification als Thema, Details wurden in den genutzten Ausschnitten nicht vollständig sichtbar).
- **Recovery/Account-Wiederherstellung:** Unklar (produkt-/kontoabhängig).
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben (keine OpenDNS-spezifische Disclosure-Seite in den genutzten Quellen verifiziert).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (2FA/MFA), falls du ein Dashboard/Policies nutzt.  
   **Prüfen:** Security-/Login-Einstellungen zeigen 2FA als „aktiv“.
2) **DNS-Transport härten** (DoH/DoT), falls deine Umgebung das unterstützt.  
   **Prüfen:** DNS-Test zeigt verschlüsselten Transport; keine Klartext-DNS-Anfragen im Netz-Monitoring.
3) **Logging/Reports bewusst wählen** (nur so viel wie nötig).  
   **Prüfen:** Report-/Logging-Optionen sind nachvollziehbar konfiguriert; unnötige Exporte sind aus.

**Stolpersteine:**
- DNS-over-HTTPS kann Captive-Portals, Unternehmens-Proxys oder Debugging erschweren (Abwägung: weniger lokale Einsicht vs. weniger Mitlesen).
- Zentrales Reporting ist praktisch, erhöht aber Metadatenfläche (Abwägung: Sichtbarkeit/Forensik vs. Datenminimierung).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze möglichst **ohne Konto**, wenn du keine Policies/Reports brauchst (geringere Identitätsbindung).
- Vermeide Identitäts-Integrationen (z.B. Nutzer-/Directory-Anbindung), wenn nicht zwingend nötig.
- Optional: Setze einen **lokalen Cache-Resolver** (z.B. auf Router/Server) als Zwischenschicht, um Geräte-Granularität zu reduzieren.  
  **Abwägung:** mehr Eigenbetrieb/Monitoring, potentiell weniger Komfort beim Troubleshooting.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne DNS-Nutzung strikt nach Kontext (z.B. getrennte Geräte/Netzprofile), um Korrelation zu reduzieren.
- Erzwinge verschlüsselten DNS-Transport und blockiere Fallbacks auf Klartext-DNS auf Netzwerkebene (nur wenn du die Auswirkungen testen kannst).
- Plane Ausfälle ein (zweiter Resolver/Failover), ohne automatische Rückfälle auf ungewollte DNS-Server zuzulassen.  
  **Abwägung:** deutlich mehr Komplexität; Fehlersuche und Kompatibilität werden schwieriger.

</details>

## Features
- Öffentliche DNS-Resolver (OpenDNS) sowie DNS-Security/Policy-Funktionen im Cisco-Umbrella-Kontext
- Zentrale Reports/Logging (je nach Paket) inkl. Export/Log-Management (Umbrella)
- Dokumentation zu DNS-over-HTTPS (DoH) im Cisco-Umbrella-Umfeld

## Alternativen
- [Quad9](/anbieter/quad9/) – Fokus auf Security-Blocking; Abwägung: externer Resolver sieht DNS-Metadaten
- [Cloudflare 1.1.1.1](/anbieter/cloudflare-1-1-1-1/) – Fokus auf Performance/DoH/DoT; Abwägung: externer Resolver sieht DNS-Metadaten
- [NextDNS](/anbieter/nextdns/) – viele Policy-/Filter-Optionen; Abwägung: Konto + zentraler Anbieter
- Unbound (Self-Hosting DNS Resolver): mehr Kontrolle lokal; Abwägung: eigener Betriebsaufwand/Updates

## Nicht gelöst / offene Punkte
- Unklar, welche **OpenDNS-spezifischen** Datenkategorien (für reine öffentliche Resolver-Nutzung) im Detail erhoben/aufbewahrt werden.

## Quellen

- Quad9 (DNS): "Fokus auf Security-Blocking; Trade-off: externer Resolver sieht DNS-Metadaten
- Cloudflare 1.1.1.1 (DNS): "Fokus auf Performance/DoH/DoT; Trade-off: externer Resolver sieht DNS-Metadaten
- NextDNS (DNS): "viele Policy-/Filter-Optionen; Trade-off: Konto + zentraler Anbieter
- Unbound (Self-Hosting DNS Resolver): "mehr Kontrolle lokal; Trade-off: eigener Betriebsaufwand/Updates
- [OpenDNS Consumer Terms of Use](https://www.opendns.com/consumer-terms/)
- [Cisco Online Privacy Statement](https://www.cisco.com/c/en/us/about/legal/privacy-full.html)
- [Cisco Umbrella: "Manage Your Logs (Docs)](https://securitydocs.cisco.com/docs/umbrella-dns/olh/146468.dita)
- [Cisco Umbrella (Managed Services): "Log Retention (Docs)](https://securitydocs.cisco.com/docs/umbrella/managed-services/user-guide/155424.dita)
- [Cisco Umbrella SIG: "Data Retention (Docs)](https://securitydocs.cisco.com/docs/umbrella-sig/olh/150804.dita)
- [Cisco Umbrella Blog: "DoH! What""s all the fuss about DNS over HTTPS?](https://umbrella.cisco.com/doh-whats-all-the-fuss-about-dns-over-https)
- [OpenDNS Home Free Signup](https://signup.opendns.com/homefree/)
- [OpenDNS Consumer Terms of Use](https://www.opendns.com/consumer-terms/)
- [Cisco Online Privacy Statement](https://www.cisco.com/c/en/us/about/legal/privacy-full.html)
- [Cisco Umbrella: Manage Your Logs (Docs)](https://securitydocs.cisco.com/docs/umbrella-dns/olh/146468.dita)
- [Cisco Umbrella (Managed Services): Log Retention (Docs)](https://securitydocs.cisco.com/docs/umbrella/managed-services/user-guide/155424.dita)
- [Cisco Umbrella SIG: Data Retention (Docs)](https://securitydocs.cisco.com/docs/umbrella-sig/olh/150804.dita)
- [Cisco Umbrella Blog: DoH! What's all the fuss about DNS over HTTPS?](https://umbrella.cisco.com/doh-whats-all-the-fuss-about-dns-over-https)
- [OpenDNS Home Free Signup](https://signup.opendns.com/homefree/)
