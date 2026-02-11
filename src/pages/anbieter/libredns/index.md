---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / LibreDNS"
url: "/anbieter/libredns/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-17"
robots: "index,follow"
description: "Kurzprofil von LibreDNS (Kategorie: DNS)."
provider: ""
name: "LibreDNS"
category: "DNS"
website: "https://libredns.gr/"
repo: "https://github.com/libreops/libredns.gr"
license: "AGPL-3.0"
policies: ""
privacy: "https://libredns.gr/ (Privacy-Abschnitt auf der Seite)"
terms: "https://libreops.cc/terms/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "partial"
self_host_possible: "yes"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Unklar"
region: "unknown"
logs: "none"
retention: "specified"
retention_notes: "none"
data_notes: "LibreDNS bietet DoH/DoT (optional mit Ads/Tracker-Blocking). Laut Anbieter werden keine DNS-Logs geführt (Logging im DNS-Daemon deaktiviert). Für die Auflösung wird ein lokaler Resolver genutzt; Upstream/Tier-1 wird genannt."
features: ""
alternatives: ""
payment_processors: "Nicht zutreffend (kostenloser Dienst; Spenden optional)"
sources: ""
---
## Kurzprofil

LibreDNS ist ein Anbieter aus der Kategorie **DNS**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du DNS-Anfragen **verschlüsselt** (DoH/DoT) auflösen willst und dabei einen Dienst ohne Benutzerkonto nutzen möchtest.
- **Weniger geeignet wenn:** du DNS komplett **selbst betreiben** willst oder rechtliche Zuständigkeiten/Betreiber-Details als harte Voraussetzung brauchst.
- **Wichtigster Abwägung:** Verschlüsselung auf der Strecke (DoH/DoT) vs. **Vertrauen in den Resolver-Betreiber** (DNS-Inhalte sieht der Resolver technisch trotzdem während der Verarbeitung).

## Sofortmaßnahmen
- Nutze **DoT (OS-weit)** statt DoH nur im Browser → weniger „Fallback auf unsicheres DNS“ außerhalb des Browsers.
- Prüfe nach dem Umstellen auf LibreDNS die Webseite **libredns.gr** → zeigt direkt an, ob du LibreDNS nutzt.
- Nutze das **No-Ads/No-Trackers**-Endpoint nur, wenn du Blocklisten willst → weniger Tracking-Domains, aber mögliches Breakage einzelner Dienste.

## Entscheidungshilfe
- Wenn du **nur den Browser** absichern willst, dann konfiguriere **DoH im Browser** (Abwägung: andere Apps nutzen evtl. weiterhin das System-DNS).
- Wenn du **das ganze Gerät** absichern willst, dann nutze **DoT auf OS-Ebene** (Abwägung: je nach OS/Netzwerk kann Troubleshooting komplexer sein).
- Wenn du **Werbung/Tracker per DNS blocken** willst, dann nutze das **/noads**-Endpoint (Abwägung: manche Domains/Apps können unerwartet nicht mehr funktionieren).
- Wenn du **keine Metadaten-Spuren** willst, dann beachte: DNS wird zwar verschlüsselt übertragen, aber der Resolver verarbeitet Anfragen trotzdem (Abwägung: weniger Netzwerk-Mitlesen vs. Vertrauen in den Betreiber).
- Wenn du **maximale Kontrolle** willst, dann ist **Self-Hosting** mit eigenem Resolver relevant (Abwägung: eigener Wartungs- und Sicherheitsaufwand).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | LibreDNS |
| Kategorie | DNS |
| Website | https://libredns.gr/ |
| Quellcode | https://github.com/libreops/libredns.gr |
| Lizenz | AGPL-3.0 |
| Preismodell | free |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend (kostenloser Dienst; Spenden optional) |
| Jurisdiktion | Unklar |
| Logs | none |
| Retention | none |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://libredns.gr/ (Privacy-Abschnitt auf der Seite)
- AGB/Terms: https://libreops.cc/terms/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
LibreDNS bietet DoH und DoT, optional mit Ads/Tracker-Blocking. Laut Anbieter werden **keine Logs** geführt (Logging für den DNS-Daemon ist deaktiviert). Für die Auflösung wird ein lokaler Resolver genutzt; als Tier-1-Upstream wird OpenNIC genannt.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** DNS-Anfragen werden zur Auflösung verarbeitet; laut Anbieter werden **keine DNS-Logs gespeichert**.
- **Wofür:** Auflösung von Domainnamen; optional Blockieren einer „crowdsourced list“ von Ads/Tracking-Domains über separate Endpoints.
- **Weitergabe/Subprozessoren:** Nicht angegeben / Unklar (keine öffentliche Subprozessorenliste; Upstream/Tier-1 wird genannt).
- **Drittlandtransfer:** Nicht angegeben / Unklar.
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend (Dienst ist kostenlos; Spenden optional).
- **Kontakt/DSAR/DPA:** Nicht angegeben / Unklar (LibreOps Terms nennen generell keine Analytics/Access-Logs).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Anbieter: keine DNS-Logs; LibreOps Terms: keine Analytics/Access-Logs auf den Servern.
- **Abschaltbar?** Nicht zutreffend (laut Anbieter bereits „no logs“).
- **Wo (Menüpfad):** Nicht zutreffend.

**Logs & Retention:**
- **Logging-Level:** none
- **Aufbewahrung:** none
- **Lösch-/Opt-out-Optionen:** Nicht zutreffend (laut Anbieter wird nicht geloggt).

**Abwägung am Punkt:** Ohne Logs ist weniger Fehlersuche/Support-Diagnose möglich; mit Logs steigt das Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Transportverschlüsselung über **DoH** und **DoT** (verschlüsselte DNS-Übertragung).
- **KDF/Parameter/Schlüsselableitung:** Nicht zutreffend (kein Account/Secrets-Design wie bei Passwortdiensten).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (kein Konto).
- **Recovery/Account-Wiederherstellung:** Nicht zutreffend.
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben / Unklar.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Browser (DoH) konfigurieren** (wenn du nur Web absichern willst).  
   **Firefox:** Einstellungen → Allgemein → Netzwerk-Einstellungen → „DNS über HTTPS aktivieren“ → „Benutzerdefiniert“ → `https://doh.libredns.gr/dns-query`  
   **Chromium/Chrome:** Einstellungen → Datenschutz und Sicherheit → Sicherheit → „Sicheres DNS verwenden“ → „Benutzerdefiniert“ → `https://doh.libredns.gr/dns-query`  
   **Prüfen:** https://libredns.gr/ zeigt „You are using LibreDNS“.
2) **OS-weit (DoT) nutzen** (wenn möglich).  
   **Android:** Einstellungen → Suche „Private DNS“ → „Benutzerdefiniert“ → `dot.libredns.gr` (oder `noads.libredns.gr`)  
   **Prüfen:** Private DNS ist aktiv; libredns.gr bestätigt Nutzung.
3) **Apple-Geräte: Profil installieren** (DoH/DoT).  
   **Prüfen:** Profil ist installiert und aktiv; libredns.gr bestätigt Nutzung.

**Stolpersteine:**
- **No-Ads/No-Trackers** kann legitime Domains mitblocken (Abwägung: weniger Tracking vs. mögliche Funktionsstörungen).
- DoH nur im Browser schützt nicht automatisch andere Apps (Abwägung: schnelle Umstellung vs. inkonsistenter Schutz).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze bevorzugt **DoT auf OS-Ebene**, damit möglichst alle Apps verschlüsselt auflösen.
- Verwende **/noads** nur, wenn du Blocklisten wirklich willst; sonst Standard-Endpoint nutzen.
- Vermeide parallele DNS-„Mixer“ (z.B. zusätzliches VPN-DNS + Browser-DoH), wenn du Debugging vereinfachen willst.  
**Abwägung:** weniger Metadaten im lokalen Netz, aber mehr Komplexität bei Fehlersuche.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze getrennte Profile/Devices für High-Risk und Alltag (Isolation von DNS-Konfigurationen).  
- Kombiniere DoT/DoH nur mit klarer Kette (z.B. VPN **oder** DoT) und prüfe nach jeder Änderung via libredns.gr.  
- Optional self-hosted Resolver (mit eigener Policy), wenn du Betreibervertrauen minimieren willst.  
**Abwägung:** deutlicher Aufwand, höhere Betriebs- und Wartungslast.

</details>

## Features
- DNS over HTTPS (DoH) Endpoint: `https://doh.libredns.gr/dns-query`
- DoH mit Ads/Tracker-Blocking: `https://doh.libredns.gr/noads`
- DNS over TLS (DoT): `dot.libredns.gr` (Port `853`)
- DoT mit Ads/Tracker-Blocking: `noads.libredns.gr`
- Apple Device-Management-Profile für DoH/DoT (Download von der LibreDNS-Seite)
- Öffentliches Deployment-Repo (Ansible-Skripte)

## Alternativen
- Andere öffentliche DoH/DoT-Resolver – Abwägung: Policy/Transparenz/Logging/Filter unterscheiden sich je Betreiber
- self-hosted Resolver (eigener Betrieb) – Abwägung: maximale Kontrolle vs. Wartung/Updates/Monitoring
- Lokales DNS-Blocking im Heimnetz (z.B. eigener Filter-Resolver) – Abwägung: lokal steuerbar vs. zusätzliche Infrastruktur

## Nicht gelöst / offene Punkte
- Jurisdiktion/Verantwortliche Stelle für LibreDNS ist auf den genutzten Seiten nicht explizit ausgewiesen (Stand: 2026-01-17).

## Quellen

- DNS over HTTPS (DoH) Endpoint: "https://doh.libredns.gr/dns-query
- DoH mit Ads/Tracker-Blocking: "https://doh.libredns.gr/noads
- DNS over TLS (DoT) Domain: "dot.libredns.gr (Port 853)
- DoT mit Ads/Tracker-Blocking: "noads.libredns.gr
- Andere öffentliche DoH/DoT-Resolver – Trade-off: "Policy/Transparenz/Logging/Filterfunktionen unterscheiden sich je Anbieter
- self-hosted Resolver (z.B. eigener Unbound/Resolver + DoT/DoH) – Trade-off: "maximale Kontrolle vs. eigener Betriebs-/Updateaufwand
- DNS-Blocklisten lokal (z.B. Pi-hole/Adblock-DNS im Heimnetz) – Trade-off: "lokale Kontrolle vs. zusätzliche Infrastruktur/Administration
- https://libredns.gr/mobileconfig/LibreDNS-noads-DoT.mobileconfig
- [LibreDNS (Website + Doku/Privacy/Endpoints)](https://libredns.gr/)
- [LibreOps – About](https://libreops.cc/about/)
- [LibreOps – Terms of Service](https://libreops.cc/terms/)
- [Repo: LibreDNS Website (GitHub)](https://github.com/libreops/libredns.gr)
- [Repo: LibreDNS Ansible-Konfiguration (GitHub)](https://github.com/libreops/libredns-cfg)
- [Apple Profil: LibreDNS DoH (mobileconfig)](https://libredns.gr/mobileconfig/LibreDNS-DoH.mobileconfig)
- [Apple Profil: LibreDNS DoH No Ads (mobileconfig)](https://libredns.gr/mobileconfig/LibreDNS-noads-DoH.mobileconfig)
- [Apple Profil: LibreDNS DoT (mobileconfig)](https://libredns.gr/mobileconfig/LibreDNS-DoT.mobileconfig)
- [Apple Profil: LibreDNS DoT No Ads (mobileconfig)](https://libredns.gr/mobileconfig/LibreDNS-noads-DoT.mobileconfig)
