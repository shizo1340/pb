---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / UncensoredDNS"
url: "/anbieter/uncensoreddns/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-17"
robots: "index,follow"
description: "Kurzprofil von UncensoredDNS (Kategorie: DNS)."
provider: ""
name: "UncensoredDNS"
category: "DNS"
website: "https://blog.uncensoreddns.org/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "Nicht angegeben"
terms: "Nicht angegeben"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: "[]"
pricing: "free"
free_tier: "yes"
open_source: "unknown"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Dänemark (Betrieb durch Privatperson; Anycast auch außerhalb DK möglich)"
region: "eu"
logs: "none"
retention: "unknown"
data_notes: "Laut FAQ werden keine personenbezogenen Nutzungsdaten geloggt; es werden nur aggregierte Query-Zahlen für Kapazitätsplanung geführt."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

UncensoredDNS ist ein Anbieter aus der Kategorie **DNS**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen öffentlichen DNS-Resolver ohne Konto nutzen willst und Wert auf **verschlüsselte DNS-Protokolle** (DoT/DoH/DoQ) legst.
- **Weniger geeignet wenn:** du eine **vertragliche Zusage** (SLA/Support/Compliance-Dokumente) oder eine formale Privacy/DPA-Dokumentation brauchst.
- **Wichtigster Abwägung:** DNS-Anfragen werden bei einem Drittanbieter aufgelöst (Trust-Verlagerung weg vom ISP) vs. weniger Abhängigkeit von Provider-DNS/Filtern.

## Sofortmaßnahmen
- **Nutze DoT/DoH/DoQ statt unverschlüsseltem DNS**, damit DNS-Abfragen nicht im Klartext im Netz sichtbar sind.
- **Stelle konsequent nur einen Resolver ein** (System + Browser), damit keine „Fallback“-Leaks zu anderen DNS-Servern entstehen.
- **Teste nach der Umstellung aktiv**, ob wirklich UncensoredDNS genutzt wird (z.B. per DoH/DoT-Test im Client oder DNS-Check).

## Entscheidungshilfe
- Wenn du **ohne Konto/Identitätsbindung** DNS nutzen willst, dann ist ein öffentlicher Resolver wie UncensoredDNS passend (Abwägung: Vertrauen in einen externen Betreiber statt ISP).
- Wenn du **verschlüsselte DNS-Protokolle** willst, dann konfiguriere DoT/DoH/DoQ im System bzw. Client (Abwägung: manche Netzwerke blocken oder drosseln solche Protokolle).
- Wenn du **Transparenz über Datenverarbeitung** als Dokument (Privacy/DPA/Subprozessoren) brauchst, dann ist fehlende formale Doku ein Risiko (Abwägung: weniger Papier, aber schwerer prüfbar).
- Wenn du **Filter/Blocklisten/Kinderschutz** willst, dann ist ein Resolver mit Profilen/Policy-Optionen relevanter (Abwägung: Filter können Fehlblockaden erzeugen).
- Wenn du **High-Risk/Targeted Threats** abbilden willst, dann ist DNS-Härtung nur ein Baustein (Abwägung: zusätzlicher Aufwand, weiterhin Metadaten über Ziel-Domains beim Resolver).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | UncensoredDNS |
| Kategorie | DNS |
| Website | https://blog.uncensoreddns.org/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | free |
| Free Tier | yes |
| Open Source | unknown |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Keine (kostenloser Dienst) |
| Jurisdiktion | Dänemark (Betrieb durch Privatperson; Anycast auch außerhalb DK möglich) |
| Logs | none |
| Retention | Nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: Nicht angegeben
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Laut FAQ werden keine personenbezogenen Nutzungsdaten geloggt; es werden nur aggregierte Query-Zahlen für Kapazitätsplanung geführt.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** DNS-Abfragen müssen technisch verarbeitet werden; laut FAQ werden **keine personenbezogenen Daten über Nutzer oder Nutzung geloggt**, nur aggregierte Query-Zahlen.
- **Wofür:** Aggregierte Zahlen laut FAQ für **Kapazitätsplanung**.
- **Weitergabe/Subprozessoren:** Nicht angegeben.
- **Drittlandtransfer:** Nicht angegeben (Anycast kann Standorte außerhalb DK haben).
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend (kostenloser Dienst).
- **Kontakt/DSAR/DPA:** Kontaktmöglichkeiten sind angegeben; DSAR/DPA nicht angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Keine Client-Telemetrie dokumentiert (es gibt keinen Pflicht-Account/Client).
- **Abschaltbar?** Nicht zutreffend auf Client-Seite.
- **Wo (Menüpfad):** Nicht zutreffend.

**Logs & Retention:**
- **Logging-Level:** none (laut FAQ keine personenbezogenen Logs; nur aggregierte Query-Zähler).
- **Aufbewahrung:** Nicht angegeben.
- **Lösch-/Opt-out-Optionen:** Nicht angegeben (für Aggregatdaten).

**Abwägung am Punkt:** Weniger Logging reduziert Metadaten, erschwert aber Missbrauchsanalyse/Fehlerdiagnose auf Betreiber-Seite.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Verschlüsselte DNS-Protokolle sind dokumentiert (DoT/DoH; zusätzlich DoQ/DoH3 laut Blogpost).
- **KDF/Parameter/Schlüsselableitung:** Nicht zutreffend (kein Account-/Schlüsselmaterial für Nutzerkonten).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (kein Konto).
- **Recovery/Account-Wiederherstellung:** Nicht zutreffend.
- **Vuln-Handling / Security-Kontakt:** Ein allgemeiner Kontakt ist angegeben; ein offizieller Disclosure-Prozess ist nicht angegeben.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **DNS im System auf verschlüsselt umstellen** (DoT/DoH/DoQ – je nach OS/Client).  
   **Prüfen:** Status zeigt „verschlüsselt“ und Resolver-Hostname stimmt.
2) **Nur einen Resolver-Pfad nutzen** (System + Browser konsistent konfigurieren).  
   **Prüfen:** keine „Fallback“-Resolver in Browser/Apps aktiv.
3) **Endpoint korrekt wählen** (Anycast vs. Unicast).  
   **Prüfen:** im DNS-Client wird der erwartete Hostname genutzt.

**Stolpersteine:**
- In restriktiven Netzwerken (Hotel/Firma) können DoH/DoT/DoQ blockiert sein (Abwägung: Verfügbarkeit vs. Metadaten im Klartext-DNS).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze bevorzugt **verschlüsselte Protokolle** (DoT/DoH/DoQ) und vermeide unverschlüsseltes DNS vollständig.
- Reduziere parallele DNS-Resolver (kein zusätzlicher Browser-DoH-Anbieter neben Systemresolver).
- Prüfe, ob dein Client „Happy Eyeballs“-Fallbacks macht (Abwägung: Zuverlässigkeit vs. eindeutige Datenpfade).
**Abwägung:** mehr Test-/Kontrollaufwand, potenziell mehr Kompatibilitätsprobleme in manchen Netzen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze getrennte Geräte/Profiles für unterschiedliche Identitäten (um DNS-Metadaten nicht zu vermischen).
- Verwende nur DNS-Clients, die **strict encrypted DNS** ohne Fallback erzwingen können.
- Ergänze DNS-Härtung mit Netzwerkisolation (VPN/Tor-Einrichtung je nach Bedrohungsmodell).  
**Abwägung:** deutlich mehr Komplexität, höhere Ausfallwahrscheinlichkeit in „kaputten“ Netzen.

</details>

## Features
- Öffentlicher DNS-Resolver ohne Konto/Registrierung.
- Verschlüsselte DNS-Protokolle: DNS-over-TLS (DoT) und DNS-over-HTTPS (DoH).
- Zusätzlich QUIC-basierte Varianten: DNS-over-QUIC (DoQ) und DNS-over-HTTP/3 (DoH3).
- Anycast- und Unicast-Endpoints mit dokumentierten Hostnames/Ports/URLs.
- Laut Anbieter: keine personenbezogenen Logs; nur aggregierte Query-Zähler für Kapazitätsplanung.

## Alternativen
- Quad9 (öffentlicher Resolver, teils mit Security-Blocking möglich; Abwägung: Filterpolitik vs. „neutraler“ Resolver).
- Cloudflare 1.1.1.1 (großer Betreiber, breite Infrastruktur; Abwägung: Skalierung/Abhängigkeit vs. Zentralisierung von DNS-Metadaten).
- Google Public DNS (sehr verbreitet; Abwägung: Robustheit vs. Vertrauen in Großanbieter).
- NextDNS (profil-/konto-basierte Policies; Abwägung: feingranulare Kontrolle vs. zusätzliche Identitätsbindung).

## Nicht gelöst / offene Punkte
- Es sind keine separaten Privacy-/Terms-Dokumente verlinkt (Stand der Prüfung: 2026-01-17).

## Quellen

- Verschlüsselte DNS-Protokolle: "DNS-over-TLS (DoT) und DNS-over-HTTPS (DoH).
- Zusätzlich QUIC-basierte Varianten: "DNS-over-QUIC (DoQ) und DNS-over-HTTP/3 (DoH3).
- Laut Anbieter: "keine personenbezogenen Logs; nur aggregierte Query-Zähler für Kapazitätsplanung.
- Quad9 (öffentlicher Resolver, teils mit Security-Blocking möglich; Trade-off: "Filterpolitik vs. „neutraler“ Resolver).
- Cloudflare 1.1.1.1 (großer Betreiber, breite Infrastruktur; Trade-off: "Skalierung/Abhängigkeit vs. Zentralisierung von DNS-Metadaten).
- Google Public DNS (sehr verbreitet; Trade-off: "Robustheit vs. Vertrauen in Großanbieter).
- NextDNS (profil-/konto-basierte Policies; Trade-off: "feingranulare Kontrolle vs. zusätzliche Identitätsbindung).
- https://blog.uncensoreddns.org/43-full-doq-and-doh3-support/
- [UncensoredDNS (Startseite)](https://blog.uncensoreddns.org/)
- [Frequently Asked Questions](https://blog.uncensoreddns.org/faq/)
- [DNS Servers](https://blog.uncensoreddns.org/dns-servers/)
- [About this service](https://blog.uncensoreddns.org/about/)
- [Contact](https://blog.uncensoreddns.org/contact/)
- [Full DoQ and DoH3 Support](https://blog.uncensoreddns.org/43-full-doq-and-doh3-support/)
