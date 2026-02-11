---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / DNS.WATCH"
url: "/anbieter/dns-watch/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-11"
robots: "index,follow"
description: "Kurzprofil von DNS.WATCH (Kategorie: DNS)."
provider: ""
name: "DNS.WATCH"
category: "DNS"
website: "https://dns.watch/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "Nicht angegeben"
terms: "Nicht angegeben"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "unknown"
self_host_possible: "no"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Unklar (keine Anbieterangabe auf der Website gefunden)"
region: "unknown"
logs: "none"
logs_notes: "none (laut Website: „No Logging“)"
retention: "unknown"
data_notes: "DNS.WATCH ist ein öffentlich nutzbarer rekursiver DNS-Resolver (IPv4/IPv6). Laut Website: DNSSEC aktiviert und „No Logging“. Es gibt keine dokumentierte Privacy Policy/Terms auf der Website; zusätzlich werden auf der Startseite aggregierte Query-Statistiken angezeigt (Antwortcodes/Query-Summen, laut Hinweis aktuell „out-of-date“)."
features: ""
alternatives: ""
payment_processors: "Nicht angegeben"
sources: ""
---
## Kurzprofil

DNS.WATCH ist ein Anbieter aus der Kategorie **DNS**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen **einfachen Public DNS Resolver** ohne Konto nutzen willst (IPv4/IPv6) und DNSSEC-Validierung beim Resolver wichtig ist.
- **Weniger geeignet wenn:** du eine **schriftlich dokumentierte** Datenschutz-/Logging-Policy, klare Betreiberangaben oder verschlüsselte DNS-Protokolle (DoH/DoT/DoQ) als Mindestanforderung brauchst.
- **Wichtigster Abwägung:** **Schnelles Einrichtung vs. Transparenz** (Website sagt „No Logging“, aber es gibt keine verlinkte Privacy Policy/Terms mit Details zu Datenkategorien/Retention).

## Sofortmaßnahmen
- **Router statt Einzelgerät konfigurieren** → reduziert DNS-Leaks durch „vergessene“ Geräte.
- **IPv6 mitkonfigurieren** → verhindert, dass Geräte bei IPv6 automatisch andere Resolver nutzen.
- **Port-53-Egress begrenzen (optional)** → reduziert Umgehungen durch Apps/Devices (Abwägung: kann bei Reisen/Hotspots stören).

## Entscheidungshilfe
- Wenn du **ohne Konto** einen Resolver brauchst, dann nutze DNS.WATCH als Public Resolver (Abwägung: weniger dokumentierte Transparenz zu Logs/Retention).
- Wenn du **DNSSEC-Validierung** willst, dann prüfe, ob dein Client „DNSSEC enabled“ beim Resolver tatsächlich nutzt (Abwägung: DNSSEC schützt Integrität, nicht Vertraulichkeit).
- Wenn du **verschlüsseltes DNS (DoH/DoT/DoQ)** als Pflicht hast, dann ist eine Alternative relevant, weil DNS.WATCH das auf der Website nicht dokumentiert (Abwägung: andere Anbieter haben ggf. andere Metadaten-/Policy-Modelle).
- Wenn du verhindern willst, dass Geräte „ausbrechen“, dann setze Router/Firewall-Regeln für DNS (Abwägung: Fehlersuche und Sonderfälle werden komplexer).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | DNS.WATCH |
| Kategorie | DNS |
| Website | https://dns.watch/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | free |
| Free Tier | yes |
| Open Source | unknown |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Unklar (keine Anbieterangabe auf der Website gefunden) |
| Logs | none (laut Website: „No Logging“) |
| Retention | Nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: Nicht angegeben
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
DNS.WATCH ist ein öffentlich nutzbarer Resolver (IPv4/IPv6). Auf der Website werden „No Logging“ und „DNSSEC enabled“ genannt. Zusätzlich zeigt die Startseite Query-Statistiken als Summen/Verteilungen (Antwortcodes/Query-Arten); Detailangaben zu Datenkategorien und Aufbewahrung fehlen.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Auf der Website wird keine Privacy Policy genannt; die Startseite zeigt aggregierte Query-Statistiken (Summe von Queries/Antwortcodes, als „out-of-date“ markiert).
- **Wofür:** Nicht angegeben.
- **Weitergabe/Subprozessoren:** Nicht angegeben.
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben.
- **Kontakt/DSAR/DPA:** Nicht angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nicht angegeben (kein Dashboard/App dokumentiert).
- **Abschaltbar?** Nicht angegeben.
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** none (laut Website: „No Logging“)
- **Aufbewahrung:** Nicht angegeben
- **Lösch-/Opt-out-Optionen:** Nicht angegeben

**Abwägung am Punkt:** Weniger Telemetrie/Logging reduziert Metadaten, erschwert aber nachvollziehbares Debugging und belastbare Transparenz (ohne Policy schwer verifizierbar).

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben (verschlüsselte DNS-Protokolle werden auf der Website nicht dokumentiert).
- **KDF/Parameter/Schlüsselableitung:** Nicht anwendbar (kein Konto/Secret-Management dokumentiert).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht anwendbar (kein Konto erforderlich).
- **Recovery/Account-Wiederherstellung:** Nicht anwendbar.
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben.
- **DNSSEC:** Laut Website: „DNSSEC enabled“.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **DNS im Router setzen** (statt nur auf einem Gerät).  
   **Beispiel (Fritz!Box laut How-To):** Internet → Zugangsdaten → DNS-Server → DNS.WATCH-Adressen eintragen.  
   **Prüfen:** Geräte erhalten diese Resolver per DHCP/RA.
2) **IPv6-DNS mitsetzen** (wenn IPv6 aktiv ist).  
   **Prüfen:** Gerät nutzt nicht „automatisch“ einen anderen IPv6-Resolver.
3) **Fallback vermeiden** (z.B. „automatische DNS“ deaktivieren, wenn Router das zulässt).  
   **Prüfen:** Bei Test-Ausfall wird nicht unbemerkt auf ISP-DNS gewechselt.

**Stolpersteine:**
- Klassisches DNS über Port 53 ist in vielen Netzen **nicht vertraulich** (Abwägung: einfacher Betrieb vs. Abhörbarkeit im lokalen Netz/Providerpfad).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze Router/Firewall-Regeln: **DNS nur zum gewünschten Resolver erlauben** (Port 53 outbound begrenzen).
- Setze DNS nur dort, wo du Kontrolle hast (z.B. Heimnetz), nicht in fremden Netzen.
- Prüfe regelmäßig, ob IPv6/„Private DNS“-Funktionen deiner Geräte DNS umleiten.
**Abwägung:** mehr Pflegeaufwand und Fehlerpotenzial bei Sonderfällen (Captive Portals, Reisen, Gastnetze).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Verwende getrennte Netzwerkprofile/VMs für sensible Workflows und erzwinge DNS strikt.
- Kombiniere DNS-Härtung mit zusätzlicher Netzwerkisolation (z.B. eigener Router/VPN-Gateway), wenn das zu deinem Threat-Model passt.
- Plane für Resolver-Ausfälle: kontrollierter Fallback statt „Silent fallback“.
**Abwägung:** deutlich mehr Komplexität, potenziell schlechtere Verfügbarkeit bei restriktiven Regeln.

</details>

## Features
- Öffentliche Resolver-Adressen (IPv4/IPv6) ohne Konto
- DNSSEC (laut Website: aktiviert)
- „No Logging“ (Aussage auf der Website, ohne verlinkte Policy)
- How-To-Anleitungen (z.B. Fritz!Box-Konfiguration)

## Alternativen
- Quad9 (Public Resolver; Abwägung: anderer Fokus bei Threat-Blocking/Logging-Transparenz je nach Policy prüfen)
- Cloudflare 1.1.1.1 (Public Resolver; Abwägung: andere Jurisdiktion/Telemetrie-Policy prüfen)
- NextDNS (konfigurierbarer Resolver mit Account; Abwägung: Konto/Metadaten vs. Filter/Control)
- self-hosted Unbound (lokaler Resolver; Abwägung: eigener Betrieb/Updates vs. maximale Kontrolle)

## Nicht gelöst / offene Punkte
- Keine verlinkte Privacy Policy/Terms/Impressum gefunden (Betreiber, Datenkategorien, Retention, DSAR/DPA unklar).
- Keine dokumentierten Angaben zu verschlüsselten DNS-Protokollen (DoH/DoT/DoQ) auf der Website gefunden.

## Quellen

- DNSSEC (laut Website: "aktiviert)
- Quad9 (Public Resolver; Trade-off: "anderer Fokus bei Threat-Blocking/Logging-Transparenz je nach Policy prüfen)
- Cloudflare 1.1.1.1 (Public Resolver; Trade-off: "andere Jurisdiktion/Telemetrie-Policy prüfen)
- NextDNS (konfigurierbarer Resolver mit Account; Trade-off: "Konto/Metadaten vs. Filter/Control)
- self-hosted Unbound (lokaler Resolver; Trade-off: "eigener Betrieb/Updates vs. maximale Kontrolle)
- [DNS.WATCH – Startseite](https://dns.watch/)
- [How-To: "DNS auf Fritz!Box setzen (DNS.WATCH)](https://dns.watch/how-to-fritzbox.php)
- [DNS.WATCH – Startseite](https://dns.watch/)
- [How-To: DNS auf Fritz!Box setzen (DNS.WATCH)](https://dns.watch/how-to-fritzbox.php)
