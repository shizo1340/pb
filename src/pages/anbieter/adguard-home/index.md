---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / AdGuard Home"
url: "/anbieter/adguard-home/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-06"
robots: "index,follow"
description: "Kurzprofil von AdGuard Home (Kategorie: Adblock & Tracking)."
provider: ""
name: "AdGuard Home"
category: "Adblock & Tracking"
website: "https://adguard.com/en/adguard-home/overview.html"
repo: "https://github.com/AdguardTeam/AdGuardHome"
license: "GPL-3.0-only"
policies: ""
privacy: "https://adguard.com/en/privacy/home.html"
terms: "https://github.com/AdguardTeam/AdGuardHome/blob/master/LICENSE.txt"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: "[]"
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Zypern (Adguard Software Ltd.; Projekt/Publisher)."
region: "eu"
logs: "configurable"
retention: "configurable"
retention_notes: "konfigurierbar"
data_notes: "DNS-Query-Log & Logs liegen lokal auf dem Gerät; Upstream-DNS sieht weiterhin deine DNS-Anfragen. Optional (standardmäßig aus): Safe-Browsing/Parental-Control-Checks per Hash-Präfix."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

AdGuard Home ist ein Anbieter aus der Kategorie **Adblock & Tracking**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du **netzwerkweit DNS-basiert** Werbung/Tracking-Domains filtern willst und die **DNS-Metadaten lokal** auf einem eigenen Gerät behalten möchtest.
- **Weniger geeignet wenn:** du keinen eigenen Betrieb/Updates übernehmen willst oder wenn du erwartest, dass DNS-Anfragen „unsichtbar“ sind (Upstream-DNS sieht weiterhin deine Queries).
- **Wichtigster Abwägung:** **Lokale Kontrolle (Self-Hosting, lokale Logs)** vs. **Betriebsaufwand + Upstream-Metadaten** (welcher Resolver die DNS-Anfragen am Ende sieht).

## Sofortmaßnahmen
- **Admin-Weboberfläche absichern:** nur aus dem LAN/VPN erreichbar machen → reduziert Angriffsfläche.
- **Query Log minimal halten:** Logging/Retention reduzieren oder deaktivieren → weniger lokale Metadaten.
- **Upstream per DoT/DoH/DoQ konfigurieren:** schützt DNS-Transport gegen Mitlesen im Netzwerkpfad.

## Entscheidungshilfe
- Wenn du **Cloud-DNS-Logging vermeiden** willst, dann ist **AdGuard Home als Self-Hosting** relevant (Abwägung: du betreibst/patchst selbst).
- Wenn du **Debugging/„Was wird geblockt?“** brauchst, dann nutze **Query Log/Statistiken** (Abwägung: DNS-Verlauf ist sensibel).
- Wenn du **DNS im Transit verschlüsseln** willst, dann setze **Upstream DoT/DoH/DoQ** (Abwägung: manche Resolver/Netze blocken oder stören DoH/DoQ).
- Wenn du **Safe Browsing/Parental Control** aktivierst, dann passieren laut Anbieter **Hash-Präfix-Checks** (Abwägung: zusätzliche Requests an Anbieter-Endpunkte, auch wenn keine Klartext-URL gesendet wird).
- Wenn du **Client-spezifische Policies** brauchst, dann nutze **Clients/Tags/Regeln** (Abwägung: mehr Pflegeaufwand bei Gerätewechseln).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | AdGuard Home |
| Kategorie | Adblock & Tracking |
| Website | https://adguard.com/en/adguard-home/overview.html |
| Quellcode | https://github.com/AdguardTeam/AdGuardHome |
| Lizenz | GPL-3.0-only |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Zypern (Adguard Software Ltd.; Projekt/Publisher). |
| Logs | configurable |
| Retention | konfigurierbar |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://adguard.com/en/privacy/home.html
- AGB/Terms: https://github.com/AdguardTeam/AdGuardHome/blob/master/LICENSE.txt
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
DNS-Query-Log & Logs liegen lokal auf dem Gerät; Upstream-DNS sieht weiterhin deine DNS-Anfragen. Optional (standardmäßig aus): Safe-Browsing/Parental-Control-Checks per Hash-Präfix.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Lokal auf deinem Host: **DNS-Query-Log**, Statistiken und Betriebslogs (konfigurierbar). Optional (wenn aktiviert): **Safe Browsing/Parental Control** nutzt Hash-Präfix-Anfragen.
- **Wofür:** DNS-Blocking/Filterregeln, lokale Auswertung (Statistiken/Query Log), optional Schutzfunktionen (Safe Browsing/Parental Control).
- **Weitergabe/Subprozessoren:** Standardbetrieb: keine Cloud-Verarbeitung nötig (Self-Hosting). Optional: Safe-Browsing/Parental-Control-Checks senden Hash-Präfixe an Anbieter-Endpunkte.
- **Drittlandtransfer:** Nicht angegeben / Unklar (für Self-Hosting typischerweise nur relevant, wenn optionale Online-Checks aktiv sind).
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend (free) / Nicht angegeben.
- **Kontakt/DSAR/DPA:** Privacy Notice ist vorhanden (AdGuard Home); für den Self-Hosting-Betrieb ist DSAR typischerweise nur für Anbieter-Kontaktdaten relevant.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nicht angegeben / Unklar (Self-Hosting; keine klar dokumentierte „Telemetrie nach außen“ in den verlinkten Quellen).
- **Abschaltbar?** Nicht angegeben / Unklar.
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** configurable (Query Log/Statistiken/Betriebslogs je nach Einstellung).
- **Aufbewahrung:** konfigurierbar (Retention je nach Einstellung/Config).
- **Lösch-/Opt-out-Optionen:** Query Log kann in der Web-UI geleert/deaktiviert oder in der Konfiguration reduziert werden (genauer Pfad/Option produktabhängig).

**Abwägung am Punkt:** Weniger lokale Logs reduziert Metadaten, erschwert aber Fehlersuche („welcher Client fragt was an?“); mehr Logs helfen Debugging, erhöhen aber Sensitivität.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** DNS-Encryption ist konfigurierbar (Upstream via DoT/DoH/DoQ; zusätzlich „Encryption settings“ für Clients laut Feature-Liste/KB).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (nicht relevant im klassischen Sinne; kein Account-Secret aus Doku ableitbar).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (kein Konto).
- **Recovery/Account-Wiederherstellung:** Nicht zutreffend (Self-Hosting; Recovery entspricht Backup/Restore der Konfiguration).
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben / Unklar (im Repo nicht in den gelieferten Quellen belegt).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Admin-Weboberfläche nur intern erreichbar machen** (LAN/VPN, keine offene WAN-Freigabe).  
   **Prüfen:** Zugriff von außen schlägt fehl; Zugriff im LAN funktioniert.
2) **Starkes Admin-Passwort setzen** und Default-Zugang prüfen.  
   **Prüfen:** Login erfordert Auth, kein Gastzugang.
3) **Query Log/Statistiken bewusst konfigurieren** (Retention klein oder Logging aus, wenn nicht nötig).  
   **Prüfen:** Query Log zeigt nur gewünschte Zeitspanne oder bleibt leer.

**Stolpersteine:**
- DNS-Blocking ist **Metadaten-intensiv**: selbst lokal bleibt der DNS-Verlauf sensibel (Abwägung: Kontrolle/Debugging vs. Privacy).
- Upstream-Resolver sieht weiterhin DNS-Anfragen (Abwägung: lokaler Filter vs. Upstream-Metadaten).
- Verschlüsselte DNS-Protokolle können in manchen Netzen geblockt/instabil sein (Abwägung: Vertraulichkeit vs. Kompatibilität).

<details>
<summary>Profil B (Datensparsam)</summary>

- Query Log deaktivieren oder Retention minimal setzen (nur für kurze Fehlersuche aktivieren).
- Safe Browsing/Parental Control nur aktivieren, wenn du den zusätzlichen Online-Check akzeptierst.
- Upstream gezielt wählen und (falls möglich) per DoT/DoH/DoQ nutzen.
**Abwägung:** weniger Transparenz bei Problemen und weniger Komfort bei „warum ist etwas geblockt?“.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Betrieb auf gehärtetem Host (z.B. minimaler Linux-Server/VM), Updates zeitnah einspielen.
- Admin-UI nur über VPN/SSH-Tunnel; kein Port-Forwarding ins Internet.
- Safe Browsing/Parental Control deaktiviert lassen, wenn du keinerlei externe Checks möchtest.
**Abwägung:** deutlich mehr Betriebsaufwand und höhere Komplexität bei Zugriff/Administration.

</details>

## Features
- Netzwerkweites DNS-Blocking (Filterlisten, eigene Regeln)
- Web-UI, Query Log, Statistiken
- Upstream via DNS/DoT/DoH/DoQ/DNSCrypt (je nach Konfiguration)
- Client-spezifische Regeln/Policies
- Optionale sichere DNS-Protokolle für Clients (Encryption settings)

## Alternativen
- [Pi-hole](/anbieter/pi-hole/) – Abwägung: ähnlicher Self-Hosting-Ansatz, anderes UI/Ökosystem; Betrieb/Updates bleiben bei dir.
- Unbound + Blocklisten — Abwägung: sehr schlank, aber mehr Handarbeit/Config statt komfortabler UI.
- [NextDNS](/anbieter/nextdns/) – Abwägung: Cloud-Dashboard/Policies vs. DNS-Metadaten/Retention beim Anbieter.
- [AdGuard DNS](/anbieter/adguard-dns/) – Abwägung: weniger Eigenbetrieb vs. Konto/Dashboard und providerseitige Metadaten.

## Nicht gelöst / offene Punkte
- Exakte Default-Retention/Standardwerte für Query Log/Statistiken sind in den bereitgestellten Quellen nicht konkret benannt.
- Security/Disclosure-Prozess (SECURITY.md) im Repo ist hier nicht belegt.

## Quellen

- [AdGuard Home – Overview](https://adguard.com/en/adguard-home/overview.html)
- [AdGuard Home Privacy Notice](https://adguard.com/en/privacy/home.html)
- [AdGuard Home – Getting started (Knowledge Base)](https://adguard-dns.io/kb/adguard-home/getting-started/)
- [Setting up AdGuard Home securely (Knowledge Base)](https://adguard-dns.io/kb/adguard-home/running-securely/)
- [AdGuard Home – FAQ (Knowledge Base)](https://adguard-dns.io/kb/adguard-home/faq/)
- [AdGuard Home – Configuration (Wiki)](https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration)
- [AdGuard Home – Clients (Wiki)](https://github.com/AdguardTeam/AdGuardHome/wiki/Clients)
- [AdGuard Home – Overview](https://adguard.com/en/adguard-home/overview.html)
- [AdGuard Home Privacy Notice](https://adguard.com/en/privacy/home.html)
- [AdGuard Home – Getting started (Knowledge Base)](https://adguard-dns.io/kb/adguard-home/getting-started/)
- [Setting up AdGuard Home securely (Knowledge Base)](https://adguard-dns.io/kb/adguard-home/running-securely/)
- [AdGuard Home – FAQ (Knowledge Base)](https://adguard-dns.io/kb/adguard-home/faq/)
- [AdGuard Home – Configuration (Wiki)](https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration)
- [AdGuard Home – Clients (Wiki)](https://github.com/AdguardTeam/AdGuardHome/wiki/Clients)

