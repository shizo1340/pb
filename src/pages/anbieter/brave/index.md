---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Brave"
url: "/anbieter/brave/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-05"
robots: "index,follow"
description: "Kurzprofil von Brave (Kategorie: Browser)."
provider: ""
name: "Brave"
category: "Browser"
website: "https://brave.com/"
repo: "https://github.com/brave/brave-browser"
license: "MPL-2.0"
policies: ""
privacy: "https://brave.com/privacy/browser/"
terms: "https://brave.com/terms-of-use/"
transparency: "https://brave.com/transparency/"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "yes"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA (Brave Software, Inc.)"
region: "us"
logs: "minimal"
retention: "unknown"
retention_notes: "P3A: 30 Tage (Log-Level), aggregiert langfristig; Sync: Ablauf nach 12 Monaten Inaktivität; sonst: Nicht angegeben"
retention_max_days: "30"
data_notes: "Brave ist ein Browser mit integrierten Privacy-Features. Standard-Browsing funktioniert ohne Konto. Zusätzliche Module (z.B. Rewards/Ads, Talk, Firewall+VPN, Leo) können zusätzliche Datenflüsse und Identifier einführen."
features: ""
alternatives: ""
payment_processors: "Nicht angegeben"
sources: ""
---
## Kurzprofil

Brave ist ein Anbieter aus der Kategorie **Browser**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen Browser ohne Pflicht-Konto nutzen willst und integrierte Schutzfunktionen (Tracker/Cookies/Fingerprinting) bevorzugst.
- **Weniger geeignet wenn:** du zusätzliche Online-Module (z.B. Rewards/Ads, Talk, Leo, VPN) vermeiden musst und strikt nur „Browser ohne Zusatzdienste“ willst.
- **Wichtigster Abwägung:** Komfortfunktionen & Zusatzdienste vs. zusätzliche Identifier/Datenflüsse (z.B. Rewards Payment ID, Premium-Accounts, Meeting-Metadaten).

## Sofortmaßnahmen
- **P3A abschalten** (Einstellungen → Privacy & Security), reduziert produktbezogene Telemetrie (Abwägung: weniger Diagnosedaten).
- **Shields-Strenge prüfen** (Standard → ggf. strenger), reduziert Tracking (Abwägung: mehr Site-Breakage).
- **Rewards/Ads deaktiviert lassen** (oder gezielt abschalten), vermeidet zusätzliche IDs/Anti-Fraud-Checks (Abwägung: keine BAT/Ads-Funktionen).

## Entscheidungshilfe
- Wenn du **nur Web-Browsing** willst, dann nutze Brave ohne Rewards/Ads/Leo/Premium-Module (Abwägung: weniger integrierte Zusatzfunktionen).
- Wenn du **Safe Browsing** nutzen willst, dann prüfe die Plattform-Unterschiede (Desktop proxied; Android/iOS anders) (Abwägung: Schutz vor Malware/Phishing vs. Metadaten-Anfragen an Dritte).
- Wenn du **Sync** aktivierst, dann behandle die Sync-Chain / den Wiederherstellungscode wie ein Geheimnis (Abwägung: Komfort über mehrere Geräte vs. zusätzliche Server-Komponente).
- Wenn du **Brave Rewards** aktivierst, dann rechne mit einer Rewards Payment ID und Anti-Fraud-Verarbeitung (Abwägung: Rewards/Ads-Funktionen vs. zusätzliche Identifier/Retention je nach Zweck).
- Wenn du **High-Risk-Browsing** brauchst, dann nutze getrennte Profile + möglichst wenige aktivierte Module (Abwägung: mehr Aufwand, weniger Komfort).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Brave |
| Kategorie | Browser |
| Website | https://brave.com/ |
| Quellcode | https://github.com/brave/brave-browser |
| Lizenz | MPL-2.0 |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | USA (Brave Software, Inc.) |
| Logs | minimal |
| Retention | P3A: 30 Tage (Log-Level), aggregiert langfristig; Sync: Ablauf nach 12 Monaten Inaktivität; sonst: Nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://brave.com/privacy/browser/
- AGB/Terms: https://brave.com/terms-of-use/
- Transparency Report: https://brave.com/transparency/
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Brave ist ein Browser mit integrierten Privacy-Features. Standard-Browsing funktioniert ohne Konto. Zusätzliche Module (z.B. Rewards/Ads, Talk, Firewall+VPN, Leo) können zusätzliche Datenflüsse und Identifier einführen.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** u.a. Update-Check-Anfragen (aggregiert gezählt), Safe-Browsing-Checks (Teil-Hash), optional Sync-Daten (verschlüsselt), optional Rewards-/Premium-/Feature-spezifische Daten (z.B. Payment ID / Meeting-Metadaten / Leo-Queries).
- **Wofür:** Updates/Sicherheitsfixes, Schutz vor unsicheren Inhalten (Safe Browsing), Gerätesynchronisation (Sync), Feature-Betrieb (z.B. Rewards/Ads, Talk, Leo, VPN).
- **Weitergabe/Subprozessoren:** je Feature benannte Dritte, z.B. Google Safe Browsing; auf iOS je Region Google/Tencent via Apple-Proxy; bei Premium-Features zusätzliche Dienstleister (z.B. Firewall+VPN/Support).
- **Drittlandtransfer:** Brave nennt sich als US-basiert; bestimmte Identifier (z.B. Rewards Payment ID) werden laut Browser-Privacy-Policy auf Servern in den USA gespeichert.
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben.
- **Kontakt/DSAR/DPA:** Kontakt für Datenschutzanfragen: privacy@brave.com (laut Browser-Privacy-Policy).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nicht angegeben (P3A ist dokumentiert und abschaltbar).
- **Abschaltbar?** Ja: P3A kann in den Einstellungen deaktiviert werden.
- **Wo (Menüpfad):** Einstellungen → „Privacy and Security“ → P3A-Schalter (Bezeichnung kann je Plattform/Version leicht abweichen).

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** P3A: 30 Tage (Log-Level), aggregiert langfristig; zusätzlich Retention je optionalem Feature (z.B. Sync-Ablauf nach 12 Monaten Inaktivität).
- **Lösch-/Opt-out-Optionen:** Opt-out über Feature-Schalter (z.B. P3A aus, Rewards aus), lokale Browserdaten löschbar (Cookies/Cache/History lokal).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Sync speichert Daten als verschlüsselte Datei in Cloud-Storage; laut Anbieter besitzt nur der Nutzer den Entschlüsselungsschlüssel.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben (für reines Browser-Browsing ohne Konto nicht relevant; für Premium-/Partner-Accounts abhängig vom jeweiligen Dienst).
- **Recovery/Account-Wiederherstellung:** Für Sync relevant: Wiederherstellung über Sync-Chain/Schlüssel (praktisch: wie ein Seed behandeln).
- **Vuln-Handling / Security-Kontakt:** Security-Kontakt/Disclosure ist im Repo dokumentiert (SECURITY.md); zusätzlich verweist Brave auf „Report a security issue“.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Optional-Funktionen bewusst halten:** Rewards/Ads/Leo/Premium nur aktivieren, wenn du sie wirklich nutzt.  
   **Prüfen:** In Brave-Menüs sind die Module sichtbar und ggf. deaktiviert (z.B. Rewards/Ads aus).
2) **Safe Browsing prüfen** (Schutz vs. Metadaten):  
   **Prüfen:** Einstellungen → Privacy & Security → Safe Browsing (Modus/Schalter sichtbar).
3) **P3A (Product Analytics) abschalten**, wenn du weniger Telemetrie willst.  
   **Prüfen:** Einstellungen → Privacy & Security → P3A ist „aus“.

**Stolpersteine:**
- Strengere Block-Settings können Logins, Captchas oder Payment-Flows stören (Abwägung: weniger Tracking vs. mehr Kompatibilitätsprobleme).
- Safe Browsing aus reduziert Schutz vor bekannten schädlichen Domains/Downloads (Abwägung: weniger Drittanfragen vs. weniger Schutz).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Kein Sync**, wenn du Cloud-Komponenten minimieren willst (Abwägung: kein automatisches Geräte-Einrichtung).
- **Cookies/Website-Daten restriktiver**: Drittanbieter-Cookies blocken und Site-Daten regelmäßig löschen (Abwägung: häufiger neu einloggen).
- **Modul-Reduktion**: Rewards/Ads, News, Wallet, Leo nur bei Bedarf aktiv (Abwägung: weniger Komfortfunktionen).

**Abwägung:** mehr Eigenverantwortung bei Komfortfunktionen (Sync/Recovery/Onboarding).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Isolation:** getrennte Browser-Profile/OS-User (oder VM) für sensible Nutzung (Abwägung: höherer Aufwand).
- **Minimale Online-Features:** Rewards/Ads/Leo/Talk/VPN deaktiviert lassen, wenn nicht zwingend nötig (Abwägung: weniger integrierte Dienste).
- **Netzwerk/Angriffsfläche reduzieren:** nur benötigte Erweiterungen, sparsame Berechtigungen, regelmäßige Updates (Abwägung: mehr Wartung).

**Abwägung:** deutlicher Komfortverlust, höhere Komplexität.

</details>

## Features
- Integrierter Tracker-/Cookie-/Fingerprinting-Schutz (Shields)
- Safe Browsing (Google; je Plattform unterschiedlich umgesetzt)
- Sync ohne Konto (verschlüsselt, Schlüssel bleibt beim Nutzer)
- Optionale Zusatzdienste: Rewards/Ads, Talk, Firewall+VPN, Leo

## Alternativen
- Firefox (Browser; Abwägung: weniger eingebaut, mehr Konfiguration/Add-ons)
- Tor Browser (Browser; Abwägung: langsamer/mehr Blockaden, andere Bedienlogik)
- Mullvad Browser (Browser; Abwägung: Fokus auf Anti-Fingerprinting, weniger Komfortfunktionen)
- Chromium + uBlock Origin (Browser; Abwägung: Einrichtung/Härtung stärker in eigener Hand)

## Nicht gelöst / offene Punkte
- Unklar: Gibt es eine zentrale, öffentliche Subprozessoren-/Trust-Center-Liste speziell für Browser-nahe Dienste (jenseits der featureweisen Nennung in der Browser-Privacy-Policy)?

## Quellen

- Optionale Zusatzdienste: "Rewards/Ads, Talk, Firewall+VPN, Leo
- Firefox (Browser; Trade-off: "weniger eingebaut, mehr Konfiguration/Add-ons)
- Tor Browser (Browser; Trade-off: "langsamer/mehr Blockaden, andere Bedienlogik)
- Mullvad Browser (Browser; Trade-off: "Fokus auf Anti-Fingerprinting, weniger Komfortfunktionen)
- Chromium + uBlock Origin (Browser; Trade-off: "Setup/Hardening stärker in eigener Hand)
- title: "brave-browser SECURITY.md
- [Brave Browser Privacy Policy](https://brave.com/privacy/browser/)
- [Brave Terms of Use](https://brave.com/terms-of-use/)
- [What is P3A in Brave?](https://support.brave.com/hc/en-us/articles/9140465918093-What-is-P3A-in-Brave)
- [Transparency Data Feed](https://brave.com/transparency/)
- [brave/brave-browser (Quellcode)](https://github.com/brave/brave-browser)
- [brave-browser LICENSE (MPL-2.0)](https://github.com/brave/brave-browser/blob/master/LICENSE)
- [brave-browser SECURITY.md](https://github.com/brave/brave-browser/blob/master/SECURITY.md)

