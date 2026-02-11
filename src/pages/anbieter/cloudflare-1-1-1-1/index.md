---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Cloudflare 1.1.1.1"
url: "/anbieter/cloudflare-1-1-1-1/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-09"
robots: "index,follow"
description: "Kurzprofil von Cloudflare 1.1.1.1 (Kategorie: DNS)."
provider: ""
name: "Cloudflare 1.1.1.1"
category: "DNS"
website: "https://one.one.one.one/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://www.cloudflare.com/privacypolicy/"
terms: "https://www.cloudflare.com/website-terms/"
transparency: "https://www.cloudflare.com/transparency/"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "unknown"
self_host_possible: "no"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA (Cloudflare, Inc.)"
region: "us"
logs: "minimal"
retention: "specified"
retention_notes: "25h (Public Resolver Logs)"
data_notes: "Public DNS Resolver: IP-Adressen werden laut Cloudflare nicht dauerhaft gespeichert; Quell-IP wird gekürzt und binnen 25h gelöscht. Public-Resolver-Logs werden binnen 25h gelöscht; anonymisierte Log-Abfragen für APNIC-Forschung möglich; aggregierte Statistiken können langfristig gespeichert werden."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Cloudflare 1.1.1.1 ist ein Anbieter aus der Kategorie **DNS**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du DNS ohne Konto nutzen willst und DNS-Anfragen per **DoT/DoH/ODoH** verschlüsseln möchtest (gegen Mitschneiden/Manipulation auf dem Transportweg).
- **Weniger geeignet wenn:** du DNS-Metadaten grundsätzlich keinem zentralen Drittanbieter anvertrauen willst oder eine komplett eigene Resolver-Instanz betreiben musst.
- **Wichtigster Abwägung:** **Komfort + Transportverschlüsselung** vs. **Zentralisierung von DNS-Metadaten bei einem Betreiber** (auch wenn Logs laut Anbieter begrenzt sind).

## Sofortmaßnahmen
- **Nutze verschlüsseltes DNS (DoT/DoH),** damit DNS-Anfragen nicht im Klartext über das Netz laufen.
- **Setze „Families“-Endpunkte nur gezielt ein,** wenn du Malware/Adult-Blocking auf DNS-Ebene willst (Abwägung: mögliche Fehlblockaden).
- **Verifiziere nach dem Umstellen,** ob DoH/DoT aktiv ist (Browser/OS-Statusanzeige, Test-Seiten aus der Doku).

## Entscheidungshilfe
- Wenn du **Netzwerk-Provider/Hotspot-Mitschnitt** reduzieren willst, dann aktiviere **DoT oder DoH** (Abwägung: DNS sieht weiterhin der Resolver-Betreiber).
- Wenn du **möglichst wenig lokalen Einrichtung-Aufwand** willst, dann setze 1.1.1.1 als **System-DNS** (Abwägung: DNS-Traffic eines Geräts geht gebündelt zu einem Anbieter).
- Wenn du **DNS-Blocking (Malware/Adult)** willst, dann nutze **1.1.1.1 for Families** (Abwägung: Blocklisten/Kategorisierung liegen beim Anbieter).
- Wenn du **Metadaten-Trennung** zwischen Client-IP und Query stärker möchtest, dann prüfe **ODoH** (Abwägung: höhere Komplexität/Kompatibilität).
- Wenn du **Self-Hosting** brauchst, dann passt 1.1.1.1 als öffentlicher Resolver nicht (Abwägung: eigener Betrieb/Wartung statt Managed-Service).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Cloudflare 1.1.1.1 |
| Kategorie | DNS |
| Website | https://one.one.one.one/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | freemium *(Public DNS gratis; weitere App-Funktionen können kostenpflichtig sein)* |
| Free Tier | yes |
| Open Source | unknown |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben (Public DNS); ggf. App-Store-Abrechnung bei Zusatzfunktionen |
| Jurisdiktion | USA (Cloudflare, Inc.) |
| Logs | minimal |
| Retention | 25h (Public Resolver Logs) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.cloudflare.com/privacypolicy/
- AGB/Terms: https://www.cloudflare.com/website-terms/
- Transparency Report: https://www.cloudflare.com/transparency/
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Cloudflare 1.1.1.1 Public Resolver Report (Audit, PDF): https://cf-assets.www.cloudflare.com/slt3lc6tev37/3BiN3CwF9N3pnQRDZZhBvO/5f81659acf51d0ceea30e5d372e958b7/Cloudflare_1.1.1.1_Public_Resolver_Report_-_03302020.pdf

**Daten-Notizen (kurz):**
- Laut Cloudflare werden **Quell-IP-Adressen nicht dauerhaft gespeichert**, sondern per **IP-Truncation anonymisiert** und innerhalb von **25 Stunden** gelöscht.
- **Public Resolver Logs** (Transaktions-/Debug-Logs inkl. QueryName/QueryType u.a.) werden laut Doku innerhalb von **25 Stunden** gelöscht.
- **Anonymisierte Log-Abfragen** für **APNIC** sind laut Doku möglich (Forschung/Betrieb des DNS-Systems).
- **Aggregierte Statistiken** können laut Doku **unbefristet** gespeichert werden (z.B. zur Verbesserung/Analyse).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Doku fallen **Public Resolver Logs** als Transaktions-/Debug-Daten an (u.a. `queryName`, `queryType`, Datacenter/Region-Metadaten); Quell-IP wird nicht als solche gespeichert, sondern anonymisiert (IP-Truncation) und binnen 25h gelöscht.
- **Wofür:** Betrieb des Resolvers, Debugging/DoS-Mitigation sowie Forschung; außerdem aggregierte Statistiken (z.B. Metriken/Domain-Aggregationen) für Analyse/Verbesserung.
- **Weitergabe/Subprozessoren:** Cloudflare nennt **APNIC** als Empfänger mit **begrenztem Zugriff** auf **anonymisierte** Log-Daten; weitere Dritte werden für den Public Resolver in diesem Dokument nicht genannt.
- **Drittlandtransfer:** Nicht angegeben (siehe Cloudflare Privacy Policy).
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (Public DNS ohne Zahlung).
- **Kontakt/DSAR/DPA:** Siehe Cloudflare Privacy Policy.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Für den Public DNS Resolver entstehen laut Doku **Transaktions-/Debug-Logs** (betriebsbedingt).
- **Abschaltbar?** Nicht angegeben (als öffentlicher Resolver ohne Konto-/UI-Schalter).
- **Wo (Menüpfad):** Nicht zutreffend (keine Nutzer-Konsole für Public DNS).

**Logs & Retention:**
- **Logging-Level:** minimal (laut Doku: „limited transaction and debug log data“)
- **Aufbewahrung:** 25h (Public Resolver Logs); gekürzte IP-Adressen werden binnen 25h gelöscht
- **Lösch-/Opt-out-Optionen:** Nicht angegeben (praktisch: nur Nutzung/Wechsel des Resolvers)

**Abwägung am Punkt:** Weniger Logs senkt Metadatenrisiko, erschwert aber Fehlersuche/Abuse-Handling; mehr Logs erleichtert Betrieb, erhöht Metadatenfläche.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Cloudflare beschreibt verschlüsselte DNS-Standards **DoH**, **DoT** und **ODoH** (Transportverschlüsselung bis zum Resolver; kein „Ende-zu-Ende“ bis zur Ziel-Website).
- **KDF/Parameter/Schlüsselableitung:** Nicht zutreffend (kein Passwort-/Konto-Einrichtung beim Public DNS).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (Public DNS ohne Login).
- **Recovery/Account-Wiederherstellung:** Nicht zutreffend.
- **Vuln-Handling / Security-Kontakt:** Cloudflare veröffentlicht eine Vulnerability Disclosure Policy.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **System-DNS umstellen (DoT wo möglich).**  
   **Android (DoT):** *Einstellungen → Netzwerk & Internet → Erweitert → Privates DNS → „Hostname des privaten DNS-Anbieters“* → `one.one.one.one` (oder Families-Hostname).  
   **Prüfen:** „Privates DNS“ steht auf aktiv, keine DNS-Fehler beim Surfen.
2) **Browser-DNS verschlüsseln (DoH), wenn du System-DNS nicht ändern kannst.**  
   **Chrome/Edge/Brave:** *Menü → Einstellungen → Datenschutz/Sicherheit → „Sicheres DNS verwenden“* → Provider wählen.  
   **Prüfen:** Browser zeigt Secure DNS aktiv; Testseite bestätigt DoH.
3) **Optional: Families-Endpunkte nur gezielt nutzen.**  
   **Prüfen:** Malware-/Adult-Testseiten aus der Doku werden geblockt (und echte Seiten funktionieren noch).

**Stolpersteine:**
- DNS-Blocking kann **Fehlblockaden** erzeugen (Abwägung: Schutz/Filtering vs. Erreichbarkeit).
- Verschlüsseltes DNS schützt gegen Mitlesen **auf dem Transportweg**, nicht gegen Sichtbarkeit beim Resolver-Betreiber.

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **ODoH**, wenn du zusätzliche Trennung zwischen Client und Resolver-Ziel willst (nur wenn dein Client/Einrichtung das unterstützt).  
- Setze DNS möglichst **geräteseitig** statt in Apps, um „Doppel-Konfiguration“ zu vermeiden.  
- Dokumentiere deinen DNS-Einrichtung-Stand (Hostname/IP, DoH/DoT aktiv), damit du bei Netzwerkproblemen schnell zurück kannst.  
**Abwägung:** mehr Einrichtung-Aufwand und mögliche Kompatibilitätsprobleme.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze nur **verschlüsselte DNS-Varianten** (DoH/DoT/ODoH) und vermeide Klartext-DNS im gleichen Netz.  
- Verwende getrennte Geräteprofile/Netzwerke für High-Risk-Aktivitäten, damit DNS-Metadaten nicht mit Alltagsverkehr vermischt werden.  
- Prüfe zusätzliche Optionen wie **DNS over Tor** nur, wenn du den Betriebs-/Fehleraufwand tragen kannst (Kompatibilität & Performance können leiden).  
**Abwägung:** deutlich höherer Aufwand und mehr Fehlerquellen.

</details>

## Features
- Öffentlicher DNS-Resolver ohne Konto (IPv4/IPv6)
- Verschlüsselte DNS-Standards: DoH, DoT, ODoH
- „1.1.1.1 for Families“ für Malware-/Adult-Blocking (optional)

## Alternativen
- [Quad9](/anbieter/quad9/) – DNS mit Security/Blocking-Schwerpunkt (Abwägung: andere Logging-/Policy- und Jurisdiktionslage).
- [NextDNS](/anbieter/nextdns/) – DNS mit konfigurierbaren Filtern (Abwägung: typischerweise Konto/Profilverwaltung, mehr Settings/Metadaten möglich).
- [AdGuard DNS](/anbieter/adguard-dns/) – DNS-Filtering (Abwägung: anderer Betreiber und Regelwerk).

## Nicht gelöst / offene Punkte
- Unklar, ob/wo Cloudflare für 1.1.1.1 eine **öffentliche Subprozessorenliste** speziell für den Public DNS Resolver pflegt.

## Quellen

- https://cf-assets.www.cloudflare.com/slt3lc6tev37/3BiN3CwF9N3pnQRDZZhBvO/5f81659acf51d0ceea30e5d372e958b7/Cloudflare_1.1.1.1_Public_Resolver_Report_-_03302020.pdf
- Verschlüsselte DNS-Varianten: "DoH, DoT, ODoH
- 1.1.1.1 for Families: "Malware-Blocking (optional auch Adult-Content)
- Quad9 (DNS, Schwerpunkt Security/Blocking; Trade-off: "andere Policy/Logs)
- NextDNS (DNS mit konfigurierbaren Filtern; Trade-off: "Konto/Settings-Backend möglich)
- AdGuard DNS (DNS-Blocking/Filter; Trade-off: "anderer Betreiber & Policy)
- Cloudflare Docs: 1.1.1.1 Public DNS Resolver (Privacy/Logs/APNIC): https://developers.cloudflare.com/1.1.1.1/privacy/public-dns-resolver/
- Cloudflare Docs: Terms of use (1.1.1.1): https://developers.cloudflare.com/1.1.1.1/terms-of-use/
- Cloudflare Docs: Set up 1.1.1.1 resolver: https://developers.cloudflare.com/1.1.1.1/Einrichtung/
- Cloudflare Docs: Encrypt DNS traffic (DoT/DoH/ODoH): https://developers.cloudflare.com/1.1.1.1/encryption/
- Cloudflare Docs: Configure DoH on your browser: https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/encrypted-dns-browsers/
- Cloudflare Docs: Set up 1.1.1.1 on Android (Private DNS/Hostnames): https://developers.cloudflare.com/1.1.1.1/Einrichtung/android/
- Cloudflare Docs: Set up 1.1.1.1 on iOS: https://developers.cloudflare.com/1.1.1.1/Einrichtung/ios/
- Cloudflare Docs: Set up 1.1.1.1 on a router: https://developers.cloudflare.com/1.1.1.1/Einrichtung/router/
- Cloudflare Privacy Policy: https://www.cloudflare.com/privacypolicy/
- Cloudflare Website and Online Services Terms of Use: https://www.cloudflare.com/website-terms/
- Cloudflare Transparency Report: https://www.cloudflare.com/transparency/
- Cloudflare Vulnerability Disclosure Policy: https://www.cloudflare.com/disclosure/
- Audit/Report (Public Resolver): https://cf-assets.www.cloudflare.com/slt3lc6tev37/3BiN3CwF9N3pnQRDZZhBvO/5f81659acf51d0ceea30e5d372e958b7/Cloudflare_1.1.1.1_Public_Resolver_Report_-_03302020.pdf
