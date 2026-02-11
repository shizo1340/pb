---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / deSEC (authoritative DNS hosting)"
url: "/anbieter/desec/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-10"
robots: "index,follow"
description: "Kurzprofil von deSEC (authoritative DNS hosting) (Kategorie: DNS)."
provider: ""
name: "deSEC (authoritative DNS hosting)"
category: "DNS"
website: "https://desec.io/"
repo: "https://github.com/desec-io/desec-stack"
license: "MIT"
policies: ""
privacy: "https://desec.io/privacy-policy"
terms: "https://desec.io/terms"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "yes"
phone_required: "no"
kyc_required: "unknown"
jurisdiction: "Deutschland (deSEC e.V.)"
region: "eu"
logs: "unknown"
retention: "unknown"
data_notes: "Für DNS-Management ist ein Konto (E-Mail + Verifikation) nötig. API-Zugriff erfolgt über Tokens, die eingeschränkt werden können (IP-Restriktion/Expiry/Scoping). 2FA ist über die Weboberfläche möglich; Sicherheitskontakt via security.txt."
features: ""
alternatives: ""
payment_processors: "Nicht angegeben (kein Checkout/Bezahlprozess dokumentiert; Dienst ist kostenlos)"
sources: ""
---
## Kurzprofil

deSEC (authoritative DNS hosting) ist ein Anbieter aus der Kategorie **DNS**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du authoritative DNS-Zonen per **API** verwalten willst und dabei DNSSEC/Automatisierung (z.B. ACME DNS-01) eine Rolle spielt.
- **Weniger geeignet wenn:** du **kein Konto mit E-Mail-Verifikation** nutzen willst oder DNS-Verwaltung komplett ohne externen Dienst/Control-Panel brauchst.
- **Wichtigster Abwägung:** Managed DNS spart Betriebsaufwand, bindet dich aber an externe Infrastruktur (inkl. möglicher Metadaten wie DNS-Query- oder Zugriffslogs, sofern vorhanden/nicht dokumentiert).

## Sofortmaßnahmen
- **2FA im Web-Account aktivieren**, um Token-/Domain-Aktionen besser abzusichern.
- **API-Tokens restriktiv konfigurieren** (Expiry + IP-Restriktion), um Schäden bei Leak zu begrenzen.
- **Outreach/Ankündigungen per API reduzieren** (`outreach_preference: false`), um zusätzliche E-Mail-Metadaten zu minimieren.

## Entscheidungshilfe
- Wenn du DNS-Zonen **automatisiert** verwalten willst, dann nutze **API-Tokens** statt Login-Sessions (Abwägung: Token-Handling/Rotation ist Eigenaufgabe).
- Wenn du ACME **DNS-01** per Tooling nutzt, dann erstelle ein **separates Token** nur für diesen Zweck (Abwägung: mehr Tokens zu verwalten).
- Wenn du Token-Leaks erwartest (z.B. CI/CD), dann setze **allowed_subnets + max_age/max_unused_period** (Abwägung: Ausfälle bei IP-Wechsel/Token-Expiry).
- Wenn du nur einzelne Records schreiben lassen willst (z.B. `_acme-challenge`), dann nutze **Token-Scoping-Policies** (Abwägung: Initialaufwand).
- Wenn Konto-/E-Mail-Bindung ein Problem ist, dann ist **self-hosted authoritative DNS** relevant (Abwägung: eigener Betrieb/Monitoring/Updates).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | deSEC (authoritative DNS hosting) |
| Kategorie | DNS |
| Website | https://desec.io/ |
| Quellcode | https://github.com/desec-io/desec-stack |
| Lizenz | MIT |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Nicht angegeben (kein Checkout/Bezahlprozess dokumentiert; Dienst ist kostenlos) |
| Jurisdiktion | Deutschland (deSEC e.V.) |
| Logs | unknown |
| Retention | Nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://desec.io/privacy-policy
- AGB/Terms: https://desec.io/terms
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Für DNS-Management ist ein Konto (E-Mail + Verifikation) nötig. API-Zugriff erfolgt über Tokens, die eingeschränkt werden können (IP-Restriktion/Expiry/Scoping). 2FA ist über die Weboberfläche möglich; Sicherheitskontakt via security.txt.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Konto-Registrierung per API erfordert **E-Mail-Adresse** (mit Verifikation) und optional Passwort; außerdem Token-Metadaten (z.B. Ablauf/Name/IP-Restriktion) im Account-Kontext.
- **Wofür:** Konto-/Token-Verwaltung, Wiederherstellung/Bestätigung kritischer Aktionen per E-Mail-Link, Betrieb des DNS-Managements.
- **Weitergabe/Subprozessoren:** Unklar (keine öffentliche Liste in den zugänglichen Anbieterquellen gefunden).
- **Drittlandtransfer:** Unklar.
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (Dienst ist kostenlos).
- **Kontakt/DSAR/DPA:** Unklar (Privacy Policy vorhanden; Details bitte dort prüfen).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar (Website/Control-Panel ohne öffentlich dokumentierte Analytics-Übersicht in den zugänglichen Quellen).
- **Abschaltbar?** Unklar.
- **Wo (Menüpfad):** Unklar.

**Logs & Retention:**
- **Logging-Level:** unknown
- **Aufbewahrung:** Nicht angegeben
- **Lösch-/Opt-out-Optionen:** Unklar

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Für API/Webzugriff wird TLS genutzt (Details siehe Privacy Policy/Docs).
- **KDF/Parameter/Schlüsselableitung:** Passwortspeicherung erfolgt laut Doku via **Django Default (PBKDF2)**.
- **MFA/2FA/Passkeys/Hardware-Keys:** **2FA** kann über die Weboberfläche eingerichtet werden; es gibt „Step-up Authentication“ für sensible Aktionen, und die API erwähnt zukünftige Faktor-Typen (z.B. FIDO2).
- **Recovery/Account-Wiederherstellung:** Aktivierung/Reset/Deletion laufen über **E-Mail-Links mit Ablauf** (typisch 12h laut Doku).
- **Vuln-Handling / Security-Kontakt:** security.txt nennt **security@desec.io** als Kontaktadresse.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (2FA), falls angeboten.  
   **Prüfen:** 2FA ist im Account aktiv (Step-up greift bei sensiblen Aktionen).
2) **Token-Lebensdauer setzen** (Expiry), statt „ewiger“ Tokens.  
   **Prüfen:** Token-Felder `max_age` / `max_unused_period` sind gesetzt und im Test wirksam.
3) **Token-IP einschränken**, falls möglich.  
   **Prüfen:** `allowed_subnets` ist gesetzt (z.B. nur eigene Netze/CI-IP).

**Stolpersteine:**
- API-Tokens sind ein starkes Zugriffsobjekt: ohne Scoping/Expiry/IP-Restriktion ist der Schaden bei Leak größer (Abwägung: Komfort bei Automatisierung vs. Risiko bei Token-Handling).

<details>
<summary>Profil B (Datensparsam)</summary>

- Setze `outreach_preference: false` (weniger nicht-kritische E-Mails; breaking-change Hinweise bleiben).
- Nutze **separate Tokens pro Use-Case** (z.B. ACME, dynDNS, Admin), statt „ein Token für alles“.
- Verwende **Token-Scoping-Policies** (z.B. Schreibrechte nur auf `_acme-challenge`).
**Abwägung:** mehr Initialaufwand und mehr „Token-Hygiene“ (Rotation/Inventar).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne DNS-Admin-Identität von Alltagskonten (separate E-Mail/Account-Zugänge).
- Setze **enge allowed_subnets** (nur feste IPs/VPN-Egress) und kurze Expiry, plus regelmäßige Rotation.
- Prüfe Self-Hosting (deSEC Stack ist offen verfügbar) nur wenn du Betrieb/Monitoring sicher abdecken kannst.
**Abwägung:** deutlicher Betriebs- und Wartungsaufwand; höheres Risiko von Ausfällen durch Fehlkonfiguration.

</details>

## Features
- Authoritative DNS Hosting mit REST-API (Domains & RRsets verwalten)
- DNSSEC-Unterstützung (Schlüsselinfos via UI/API abrufbar; DS/DNSKEY an Registrar/Registry weitergeben)
- Token-Management mit Ablauf (max_age/max_unused_period) und IP-Restriktionen (allowed_subnets)
- Token-Scoping-Policies (Einschränkung auf bestimmte RRsets/Schreibrechte)
- 2-Factor Authentication (Step-up für sensible Aktionen; API-Tokens bleiben nutzbar)
- dynDNS-/IP-Update-API (für automatische Updates)
- ACME-DNS-01 Integration z.B. via certbot-dns-desec Plugin

## Alternativen
- self-hosted Authoritative DNS (z.B. PowerDNS/BIND): Abwägung Betrieb/Updates/Monitoring in eigener Verantwortung
- Managed DNS bei Domain-Registrar: Abwägung weniger API-/Sicherheitsfunktionen vs. weniger separates Konto
- Cloud-basierte DNS-Anbieter mit Zusatzdiensten (CDN/WAF): Abwägung mehr Plattform-Abhängigkeiten/Metadaten

## Nicht gelöst / offene Punkte
- Unklar: Ob/wie deSEC DNS-Query-Logs führt und wie lange diese aufbewahrt werden.

## Quellen

- self-hosted Authoritative DNS (z.B. PowerDNS/BIND): "Trade-off Betrieb/Updates/Monitoring in eigener Verantwortung
- Managed DNS bei Domain-Registrar: "Trade-off weniger API-/Sicherheitsfunktionen vs. weniger separates Konto
- Cloud-basierte DNS-Anbieter mit Zusatzdiensten (CDN/WAF): "Trade-off mehr Plattform-Abhängigkeiten/Metadaten
- [deSEC – Free Secure DNS (Startseite)](https://desec.io/)
- [deSEC Privacy Policy](https://desec.io/privacy-policy)
- [deSEC Terms of Use](https://desec.io/terms)
- [deSEC DNS API Docs: "Manage Tokens](https://desec.readthedocs.io/en/latest/auth/tokens.html)
- [deSEC Stack (GitHub)](https://github.com/desec-io/desec-stack)
- [certbot-dns-desec (GitHub)](https://github.com/desec-io/certbot-dns-desec)
- [security.txt (Kontakt)](https://desec.io/.well-known/security.txt)
- [deSEC Community Privacy (Forum)](https://talk.de/sec.io/privacy) 
- [deSEC – Free Secure DNS (Startseite)](https://desec.io/)
- [deSEC Privacy Policy](https://desec.io/privacy-policy)
- [deSEC Terms of Use](https://desec.io/terms)
- [deSEC DNS API Docs: Manage Account](https://desec.readthedocs.io/en/latest/auth/account.html)
- [deSEC DNS API Docs: Manage Tokens](https://desec.readthedocs.io/en/latest/auth/tokens.html)
- [deSEC Stack (GitHub)](https://github.com/desec-io/desec-stack)
- [certbot-dns-desec (GitHub)](https://github.com/desec-io/certbot-dns-desec)
- [security.txt (Kontakt)](https://desec.io/.well-known/security.txt)
- [deSEC Community Privacy (Forum)](https://talk.de/sec.io/privacy)
