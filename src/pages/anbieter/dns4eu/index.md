---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / DNS4EU"
url: "/anbieter/dns4eu/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-10"
robots: "index,follow"
description: "Kurzprofil von DNS4EU (Kategorie: DNS)."
provider: ""
name: "DNS4EU"
category: "DNS"
website: "https://www.joindns4.eu/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://legal-documents-dns4eu.s3.fr-par.scw.cloud/DNS4EU-Public-DNS-Resolver-policy-2025.pdf"
terms: "https://legal-documents-dns4eu.s3.fr-par.scw.cloud/DNS4EU-Public-Resolver-Terms-of-Use.pdf"
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
jurisdiction: "EU (Betrieb durch Whalebone, s.r.o., Tschechien); zusätzlich nationale Zuständigkeit je Resolver-Standort"
region: "eu"
logs: "none"
logs_notes: "minimal (keine dauerhaften Query-Logs im Normalbetrieb; Ausnahmen für Angriffserkennung/Crash-Analyse)"
retention: "long"
retention_notes: "Normalbetrieb: ms–s (RAM); Angriff/Abuse-Analyse: bis 6 Monate; Crash-/Troubleshooting (Core Dumps): bis 3 Monate"
retention_max_days: "180"
data_notes: "IP-Adressen werden zur Beantwortung der Anfrage kurz in RAM verarbeitet; anonymisierte/aggregierte Daten können für Schutz/Threat-Intelligence geteilt werden; keine Korrelation mit anderen Datenquellen."
features: ""
alternatives: ""
payment_processors: "Nicht zutreffend (kostenlos, kein Checkout)"
sources: ""
---
## Kurzprofil

DNS4EU ist ein Anbieter aus der Kategorie **DNS**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen **kostenlosen** öffentlichen DNS-Resolver nutzen willst und **verschlüsseltes DNS (DoH/DoT)** sowie optionale Schutz-/Filtermodi (Malware, Jugendschutz, Ad-Blocking) brauchst.
- **Weniger geeignet wenn:** du **vollständige Kontrolle** (Self-Hosting) oder einen **Enterprise-/ISP-Einsatz** mit garantiertem Support/SLA brauchst (Public Resolver ist auf Privatnutzung ausgelegt).
- **Wichtigster Abwägung:** Schutzfunktionen (Blocklisten, Missbrauchs-/DDoS-Abwehr, Troubleshooting) erfordern in Ausnahmefällen **temporäre Log-/Datenhaltung** (bis Monate) statt „nie irgendwas“.

## Sofortmaßnahmen
- **Nutze DoH/DoT statt Plain DNS (Port 53):** reduziert Mitlesen/Manipulation im lokalen Netz und durch „on-path“-Akteure.
- **Wähle „Unfiltered“, wenn du keine Inhalts-/Werbefilter willst:** Abwägung: weniger Schutzwirkung gegen bekannte Schad-Domains.
- **Prüfe die Einrichtung über die Testseite:** schneller Indikator, ob du wirklich über DNS4EU auflöst.

## Entscheidungshilfe
- Wenn du **Schutz vor Phishing/Malware** willst, dann nutze **Protective (86.54.11.1)** oder die entsprechenden DoH/DoT-Endpunkte (Abwägung: mögliche False Positives).
- Wenn du **Jugendschutz** brauchst, dann nutze **Protective + Child Protection** (Abwägung: Inhalte werden kategoriebasiert blockiert).
- Wenn du **Werbung auf DNS-Ebene** reduzieren willst, dann nutze **Protective + Ad Blocking** (Abwägung: manche Websites/Apps können fehlschlagen).
- Wenn du **möglichst wenig Filterlogik** willst, dann nutze **Unfiltered (86.54.11.100)** (Abwägung: keine Schutz-/Blocklistenwirkung).
- Wenn du **sehr viel DNS-Traffic** (z.B. Organisation/ISP) hast, dann ist der **Public Resolver** weniger passend (Abwägung: Rate-Limiting/DoS-Schutz kann bei High-Volume stören).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | DNS4EU |
| Kategorie | DNS |
| Website | https://www.joindns4.eu/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | free |
| Free Tier | yes |
| Open Source | unknown |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend (kostenlos, kein Checkout) |
| Jurisdiktion | EU (Betrieb durch Whalebone, s.r.o., Tschechien); zusätzlich nationale Zuständigkeit je Resolver-Standort |
| Logs | minimal (keine dauerhaften Query-Logs im Normalbetrieb; Ausnahmen für Angriffserkennung/Crash-Analyse) |
| Retention | Normalbetrieb: ms–s (RAM); Angriff/Abuse-Analyse: bis 6 Monate; Crash-/Troubleshooting (Core Dumps): bis 3 Monate |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://legal-documents-dns4eu.s3.fr-par.scw.cloud/DNS4EU-Public-DNS-Resolver-policy-2025.pdf
- AGB/Terms: https://legal-documents-dns4eu.s3.fr-par.scw.cloud/DNS4EU-Public-Resolver-Terms-of-Use.pdf
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
IP-Adressen werden zur Beantwortung der Anfrage kurz in RAM verarbeitet; anonymisierte/aggregierte Daten können für Schutz/Threat-Intelligence geteilt werden; keine Korrelation mit anderen Datenquellen.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Für die normale Auflösung wird die Client-IP zur Zustellung der Antwort kurzfristig im RAM verarbeitet; keine Speicherung in nichtflüchtigem Speicher im Normalbetrieb. In Ausnahmefällen können IP-Adresse + Zeitstempel + Query-Typ/Content-Type in Logs/Crash-Dumps enthalten sein.
- **Wofür:** DNS-Auflösung, Missbrauchs-/Angriffserkennung (z.B. DDoS) und Troubleshooting (Crash-Analyse).
- **Weitergabe/Subprozessoren:** Es werden **anonymisierte/aggregierte** Daten in begrenztem Umfang mit ausgewählten Projektpartnern (ML-Training) sowie Threat-Intelligence-Partnern unter Vertraulichkeit geteilt; keine Weitergabe identifizierender Daten.
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend (kostenlos).
- **Kontakt/DSAR/DPA:** Für Resolver-Fragen nennt der Anbieter eine DPO-Kontaktadresse (dataprotection@joindns4.eu).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Für den DNS-Resolver: kein Client/Account, daher keine „App-Telemetrie“ im klassischen Sinn. Für die **Website** nennt der Anbieter Logfiles/Cookies (Website-Privacy-Policy).
- **Abschaltbar?** DNS: nicht als Schalter. Website: nicht angegeben (Cookie-Policy ist separat erwähnt).
- **Wo (Menüpfad):** Website → „Privacy Policy“ (Cookie-Hinweis).

**Logs & Retention:**
- **Logging-Level:** minimal (keine dauerhaften Query-Logs im Normalbetrieb; Ausnahmen für Angriffserkennung/Crash-Analyse)
- **Aufbewahrung:** Normalbetrieb: ms–s (RAM); Angriff/Abuse-Analyse: bis 6 Monate; Crash-/Troubleshooting (Core Dumps): bis 3 Monate
- **Lösch-/Opt-out-Optionen:** Opt-out praktisch nur durch **Nicht-Nutzung** des Dienstes; bei seltenen Fällen (z.B. Crash-Dumps) wird Erasure als „exceedingly rare“ beschrieben.

**Abwägung am Punkt:** Weniger Logs erschwert Diagnose/Abwehr; mehr/ längere Logs erhöhen Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** DNS4EU unterstützt **DNS-over-TLS (DoT)** und **DNS-over-HTTPS (DoH)** für verschlüsselte DNS-Abfragen.
- **KDF/Parameter/Schlüsselableitung:** Nicht zutreffend (kein Konto/Passwortsystem).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (kein Konto).
- **Recovery/Account-Wiederherstellung:** Nicht zutreffend (kein Konto).
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Variante auswählen** (z.B. *Protective* oder *Unfiltered*) und als DNS eintragen.  
   **Prüfen:** Gerät/Router zeigt die gewählte DNS4EU-IP oder DoH/DoT-Endpunkt.
2) **Verschlüsseltes DNS aktivieren** (DoH oder DoT), wenn dein OS/Browser das unterstützt.  
   **Prüfen:** im System/Browser steht „Secure DNS / DNS over HTTPS/TLS“ aktiv + korrekter Endpoint.
3) **Konfiguration testen** über `test.joindns4.eu`.  
   **Prüfen:** Seite bestätigt, dass DNS4EU aktiv ist (oder Wechsel auf „Unfiltered“, falls du keine Filter willst).

**Stolpersteine:**
- **Ad-Blocking-Modus** kann Websites/Apps stören (Abwägung: weniger Werbung vs. mögliche Fehlfunktionen).
- Der **Public Resolver** ist nicht auf High-Volume-Umgebungen optimiert (Abwägung: Schutz/Rate-Limit vs. Massentraffic).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze bevorzugt **Unfiltered** und setze DNS4EU nur dort, wo du es brauchst (z.B. einzelnes Gerät statt ganzer Haushalt).
- Verwende **DoH/DoT** statt Plain DNS, um DNS-Metadaten im lokalen Netz zu reduzieren.
- Falls du Filter willst: starte mit **Protective** statt Ad-Blocking, um Breakage zu vermeiden.  
**Abwägung:** weniger Filter = weniger „automatischer“ Schutz; mehr Filter = mehr Block-/Fehlerrisiko.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne Kontexte: z.B. „Alltag“ und „sensibel“ über unterschiedliche Geräte/Profiles, mit jeweils eigener DNS-Variante.
- Vermeide Filtermodi, wenn falsche Blockaden ein Risiko darstellen; setze auf **Unfiltered + DoH/DoT**.
- Nutze zusätzlich lokale Maßnahmen (z.B. browserseitige Blocklisten/Isolierung) statt DNS-Filtern.  
**Abwägung:** mehr Eigenaufwand, weniger zentraler Schutz.

</details>

## Features
- Öffentliche Resolver (kostenlos) mit 5 Modi: Protective, Child Protection, Ad Blocking, Kombination, Unfiltered
- DNS-over-HTTPS (DoH) und DNS-over-TLS (DoT) Endpunkte pro Modus
- DNSSEC-Validierung
- Response Rate Limiting (RRL) & DDoS-Schutz
- Testseite zur Konfigurationsprüfung

## Alternativen
- [Quad9](/anbieter/quad9/)
- dns0.eu (EU-basierter Resolver; anderer Log-/Betriebsansatz)
- Mullvad DNS (fokus auf einfache Nutzung; weniger Filter-Optionen)
- [NextDNS](/anbieter/nextdns/)
- Self-Hosting: Unbound + Blocklisten/Pi-hole (mehr Kontrolle, mehr Betrieb/Updates)

## Nicht gelöst / offene Punkte
- Keine Angaben zu öffentlichem Quellcode/Lizenzierung des Resolver-Stacks gefunden (Stand: 2026-01-10).
- Keine öffentlich verlinkten unabhängigen Audits/Attestations für den Public Resolver gefunden (Stand: 2026-01-10).

## Quellen

- Öffentliche Resolver (kostenlos) mit 5 Modi: "Protective, Child Protection, Ad Blocking, Kombination, Unfiltered
- Self-Hosting: "Unbound + Blocklisten/Pi-hole (mehr Kontrolle, mehr Betrieb/Updates)
- https://www.joindns4.eu/privacy-policy
- [DNS4EU For Public](https://www.joindns4.eu/for-public)
- [DNS set up guidelines](https://www.joindns4.eu/dns-guidelines)
- [DNS4EU Public DNS Resolver Policy 2025 (PDF)](https://legal-documents-dns4eu.s3.fr-par.scw.cloud/DNS4EU-Public-DNS-Resolver-policy-2025.pdf)
- [DNS4EU Public Resolver Terms of Use (PDF)](https://legal-documents-dns4eu.s3.fr-par.scw.cloud/DNS4EU-Public-Resolver-Terms-of-Use.pdf)
- [DNS4EU Website Privacy Policy](https://www.joindns4.eu/privacy-policy)
