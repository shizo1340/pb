---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / SoloKey"
url: "/anbieter/solokey/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-06"
robots: "index,follow"
description: "Kurzprofil von SoloKey (Kategorie: Security-Key)."
provider: ""
name: "SoloKey"
category: "Security-Key"
website: "https://solokeys.com/"
repo: "https://github.com/solokeys"
license: "Apache-2.0 OR MIT (Software/Firmware); CERN-OHL-1.2 OR CC-BY-SA-4.0 (Hardware); CC-BY-SA-4.0 (Docs)"
policies: ""
privacy: "https://solokeys.com/policies/privacy-policy"
terms: "https://solokeys.com/policies/terms-of-service"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "yes"
self_host_possible: "unknown"
account_required: "unknown"
phone_required: "unknown"
kyc_required: "unknown"
jurisdiction: "USA (Adresse: Newark, Delaware; Rechtswahl: Kalifornien laut Terms)"
region: "us"
logs: "minimal"
retention: "unknown"
retention_notes: "Unklar (Privacy Policy: Raw data logs nur temporär; E-Mails gelöscht, wenn nicht mehr benötigt)"
data_notes: "SoloKey ist ein Hardware-Security-Key (FIDO2/U2F). Für die Nutzung fallen typischerweise keine Anbieter-Accounts an; beim Kauf/Support gelten Website-/Shop-Datenflüsse (Cookies/Analytics, Bestell- und Kommunikationsdaten)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

SoloKey ist ein Anbieter aus der Kategorie **Security-Key**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit ohne Ranking
- **Geeignet wenn:** du Phishing-resistentere Logins via **FIDO2/WebAuthn oder U2F** nutzen willst und **Open-Source-Firmware/-Hardware** für Nachvollziehbarkeit relevant ist.
- **Weniger geeignet wenn:** du keine **Backup-Strategie** (zweiter Key / Wiederherstellung) betreiben kannst oder willst.
- **Wichtigster Abwägung:** **starker Login-Schutz** vs. **physischer Besitz & Verlust-Risiko** (Recovery ist ohne Zweit-Key/Backup oft unbequem oder nicht möglich).

## Sofortmaßnahmen
- **Zwei Keys pro wichtigem Konto registrieren** (ein Key „am Mann“, ein Key sicher gelagert) → reduziert Lockout-Risiko bei Verlust.
- **Firmware nur über dokumentierte Wege aktualisieren** (Web-Update/CLI) → senkt Risiko, mit alten Fixes/Versionen hängen zu bleiben.
- **Browser-/Konto-Einrichtung testen** (Login + Backup-Login) → verhindert Überraschungen im Ernstfall.

## Entscheidungshilfe
- Wenn du Logins gegen **Phishing und Kontoübernahmen** härten willst, dann nutze einen **FIDO2/U2F Security-Key** als zweiten Faktor (Abwägung: du musst den Key physisch dabeihaben).
- Wenn du wichtige Konten absichern willst, dann registriere **mindestens zwei Keys** und lagere einen getrennt (Abwägung: zusätzliche Kosten + Lagerdisziplin).
- Wenn du die **Hacker-Variante** nutzt, dann behandle sie als **Entwicklungsgerät** und nicht als Schlüssel für High-Value-Accounts (Abwägung: mehr Flexibilität, aber deutlich höhere Manipulations-/Reflash-Risiken bei physischem Zugriff).
- Wenn du Firmware aktualisierst, dann nutze **offizielle Update-Anleitungen/Tools** und prüfe vorher, ob dein Gerät überhaupt ein Update braucht (Abwägung: Update-Prozess kann bei Fehlern „bricken“, besonders bei tieferen Flash-Vorgängen).
- Wenn du Website-Tracking minimieren willst, dann interagiere mit Shop/Docs möglichst **ohne Newsletter/Marketing-Opt-ins** und blockiere Third-Party-Tracker im Browser (Abwägung: mögliche Usability-Einschränkungen bei Support/Shop).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | SoloKey |
| Kategorie | Security-Key |
| Website | https://solokeys.com/ |
| Quellcode | https://github.com/solokeys |
| Lizenz | Apache-2.0 OR MIT (Software/Firmware); CERN-OHL-1.2 OR CC-BY-SA-4.0 (Hardware); CC-BY-SA-4.0 (Docs) |
| Preismodell | paid |
| Free Tier | no |
| Open Source | yes |
| Konto erforderlich | Unklar |
| Telefon erforderlich | Unklar |
| KYC erforderlich | Unklar |
| Zahlungsabwicklung | Nicht eindeutig dokumentiert (Privacy Policy nennt u.a. Kickstarter & Airbrite/Trycelery) |
| Jurisdiktion | USA (Adresse: Newark, Delaware; Rechtswahl: Kalifornien laut Terms) |
| Logs | minimal |
| Retention | Unklar (Privacy Policy: Raw data logs nur temporär; E-Mails gelöscht, wenn nicht mehr benötigt) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://solokeys.com/policies/privacy-policy
- AGB/Terms: https://solokeys.com/policies/terms-of-service
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Doyensec: Security Assessment Report (Solo Firmware v3.0.1, 2020) – https://doyensec.com/resources/Doyensec_SoloKeys_TestingReport_Q12020_v3.pdf

**Daten-Notizen (kurz):**
SoloKey ist ein Hardware-Security-Key (FIDO2/U2F). Relevante Datenflüsse entstehen primär über **Website/Shop/Support** (Cookies/Analytics, Bestell- und Kommunikationsdaten), nicht durch den Key „an sich“.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Privacy Policy u.a. **personenbezogene Daten** wie Name/Adresse/E-Mail/Telefon (falls angegeben), **automatisch erhobene Nutzungs-/Gerätedaten** (z.B. IP-Adresse, Browser-Infos) sowie **Cookies/Tracking-Technologien**.
- **Wofür:** u.a. Betrieb/Verbesserung der Website, Kommunikation/Support, Marketing/Newsletter (falls genutzt), Sicherheits-/Missbrauchsprävention.
- **Weitergabe/Subprozessoren:** Genannt werden u.a. **Google Analytics**, **MailChimp** (Newsletter), sowie Zahlungs-/Sales-Kontexte wie **Kickstarter** und **Airbrite (Trycelery)**.
- **Drittlandtransfer:** Nicht als eigene Liste ausgewiesen; aus den genannten Diensten ergibt sich typischerweise Verarbeitung/Anbieterbezug außerhalb der EU (Details: Privacy Policy).
- **Zahlungsabwicklung/Payment Processor:** Privacy Policy nennt u.a. Kickstarter & Airbrite (Trycelery); aktueller Checkout-/Shop-Processor ist nicht klar als eigene Liste dokumentiert.
- **Kontakt/DSAR/DPA:** Kontaktwege und Auskunft/Deletion werden in der Privacy Policy beschrieben; eine separate öffentliche DPA-/Subprocessor-Liste ist nicht ersichtlich.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Für die Website: **ja** (Privacy Policy erwähnt Cookies/Tracking und Google Analytics).
- **Abschaltbar?** Auf Produkt-/Account-Ebene nicht beschrieben; praktisch über Browser-/Content-Blocker steuerbar (nicht als Anbieter-Schalter dokumentiert).
- **Wo (Menüpfad):** Browser → Einstellungen → Tracking-/Cookie-Blocker (bzw. Content-Blocker/Privacy-Add-ons).

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** Unklar (Privacy Policy: Raw data logs nur temporär; E-Mails gelöscht, wenn nicht mehr benötigt)
- **Lösch-/Opt-out-Optionen:** In der Privacy Policy werden Betroffenenrechte (Auskunft/Löschung etc.) beschrieben; konkrete Self-Service-Opt-outs sind nicht als Produktfunktion dokumentiert.

**Abwägung am Punkt:** Weniger Tracking/Telemetry reduziert Metadaten, kann aber Website-Funktion/Support-Kommunikation beeinflussen.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Für einen Hardware-Key so nicht beschrieben (Fokus liegt auf FIDO2/U2F-Authentisierung).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Produkt ist ein **Hardware Security Key** für FIDO2/WebAuthn und U2F (laut Start/FAQ/Doku).
- **Recovery/Account-Wiederherstellung:** SoloKeys empfiehlt **zwei Keys zu registrieren** und einen sicher zu lagern („Redundancy is key“), um Lockouts zu vermeiden.
- **Vuln-Handling / Security-Kontakt:** Ein öffentlich dokumentierter Meldeweg ist in den hier erreichbaren Primärquellen nicht zuverlässig abrufbar; allgemeine Kontaktadresse für Fragen ist genannt (hello@solokeys.com).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Pro Konto zwei Keys registrieren** (Primär + Backup).  
   **Prüfen:** Beide Keys funktionieren als 2FA/Login-Option; Backup-Key ist getestet und separat gelagert.
2) **FIDO2-PIN/User Verification nutzen**, wenn der Dienst/das OS es anbietet.  
   **Prüfen:** Login fordert zusätzlich zur Berührung ggf. PIN/UV (dienstabhängig).
3) **Firmware-Update nur nach Bedarf** und nur nach offizieller Anleitung (Web-Guide/CLI).  
   **Prüfen:** Gerät wird korrekt erkannt; Update-Prozess entspricht Doku; nach Update Login-Test erfolgreich.

**Stolpersteine:**
- **Ohne Backup-Key** kann Verlust/Defekt zu Account-Lockout führen (Abwägung: mehr Hardware vs. bessere Recovery).
- **Hacker-Varianten** sind laut Doku für Entwicklung gedacht und bei physischem Zugriff leichter manipulierbar (Abwägung: Flexibilität vs. Geräteschutz).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze SoloKey ohne Newsletter/Marketing-Opt-ins und blockiere Third-Party-Tracker im Browser, wenn du Shop/Docs besuchst.
- Aktualisiere Firmware über eine möglichst „saubere“ Umgebung (separates Browser-Profil) und reduziere unnötige Online-Interaktionen rund um Support/Shop.
- Dokumentiere Recovery offline: Wo liegt der Backup-Key, welche Konten sind damit registriert (ohne sensible Details zu speichern).

**Abwägung:** weniger Metadaten/Tracking, dafür mehr organisatorischer Aufwand.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze eine getrennte Update-Umgebung (separates Gerät/VM) für Firmware-Operationen.
- Vermeide Hacker-Varianten für High-Value-Accounts; nutze gesicherte Modelle/Update-Mechanismen laut Doku.
- Plane „Key Compromise“-Szenarien: Konten mit Key entfernen/ersetzen, wenn physischer Zugriff nicht ausgeschlossen werden kann.

**Abwägung:** deutlich mehr Aufwand und Prozessdisziplin.

</details>

## Features
- FIDO2/WebAuthn + U2F (laut SoloKeys Start/FAQ/Doku)
- Open-Source-Firmware/-Hardware (GitHub-Repos)
- Dokumentierte Firmware-Update-Wege (Web-Guide/CLI + technische Doku)
- Hinweise zu gesicherten vs. „Hacker“-Builds (Sicherheits-/Manipulations-Abwägung laut Doku)

## Alternativen
- YubiKey (Abwägung: Modell-/Ökosystem-Auswahl vs. gewünschte Offenheit/DIY)
- Nitrokey (Abwägung: Produktfokus/Features je nach Modell vs. gewünschte Einfachheit)
- Google Titan (Abwägung: Ökosystem-/Beschaffungsmodell vs. gewünschte Offenheit/DIY)

## Nicht gelöst / offene Punkte
- Unklar: Ob der Shop-Kauf ohne Konto möglich ist bzw. welche Kontopflichten im Checkout konkret entstehen.
- Unklar: Konkrete Retention-Fristen für Bestell-/Supportdaten sind nicht als klare Zeiträume ausgewiesen.

## Quellen

- Doyensec: "Security Assessment Report (Solo Firmware v3.0.1, 2020) – verlinkt über SoloKeys-Blog
- Hacker-Variante: "für Entwicklung gedacht, weniger sicher bei physischem Zugriff (laut Doku)
- https://docs.solokeys.de/v/bootloader-mode/
- [SoloKeys (Website)](https://solokeys.com/)
- [SoloKeys – Privacy Policy](https://solokeys.com/policies/privacy-policy)
- [SoloKeys – Terms of Service](https://solokeys.com/policies/terms-of-service)
- [SoloKeys – Start / Einrichtung (inkl. „Redundancy is key“)](https://solokeys.com/pages/start)
- [SoloKeys – FAQ](https://solokeys.com/pages/faq)
- [SoloKeys Blog – Security Analysis of the Solo Firmware (Doyensec)](https://solokeys.com/blogs/news/security-analysis-of-the-solo-firmware-by-doyensec)
- [Doyensec – Security Auditing Report (PDF)](https://doyensec.com/resources/Doyensec_SoloKeys_TestingReport_Q12020_v3.pdf)
- [GitHub – Solo 1 Firmware Lizenz (Apache)](https://github.com/solokeys/solo1/blob/master/LICENSE-APACHE)
- [GitHub – Solo Hardware Sources](https://github.com/solokeys/solo-hw)
- [Solo Technical Documentation (Start)](https://docs.solokeys.de/v/)
- [Solo Technical Documentation – Programming/Updating](https://docs.solokeys.de/v/programming/)
- [Solo Technical Documentation – Bootloader mode](https://docs.solokeys.de/v/bootloader-mode/)
