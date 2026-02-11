---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / GrapheneOS"
url: "/anbieter/grapheneos/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-14"
robots: "index,follow"
description: "Kurzprofil von GrapheneOS (Kategorie: Betriebssysteme)."
provider: ""
name: "GrapheneOS"
category: "Betriebssysteme"
website: "https://grapheneos.org/"
repo: "https://github.com/GrapheneOS"
license: "Mixed (OSI-approved Open-Source-Lizenzen; u.a. MIT für eigenständige Projekte)"
policies: ""
privacy: "https://grapheneos.org/faq#what-is-the-privacy-policy-for-grapheneos-services"
terms: "Nicht angegeben"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Kanada (GrapheneOS Foundation; Projekt international)"
region: "ca"
logs: "minimal"
retention: "specified"
retention_notes: "max. 10d (teilweise weniger / keine persistenten Logs für bestimmte Dienste)"
data_notes: "GrapheneOS nennt keine Analytics/Telemetry. Standard-Verbindungen gehen primär zu GrapheneOS-Diensten (Updates, Zeit, Connectivity-Checks). Für öffentliche Dienste: Log-Retention max. 10 Tage."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

GrapheneOS ist ein Anbieter aus der Kategorie **Betriebssysteme**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du ein Android-kompatibles OS mit Fokus auf Härtung/Privacy nutzen willst und mit der offiziellen Geräteunterstützung (Pixel) leben kannst.
- **Weniger geeignet wenn:** du GrapheneOS auf Nicht-Pixel-Geräten einsetzen musst oder du eine „fertig vorkonfigurierte“ Komplettlösung ohne Installations-/Bootloader-Schritte suchst.
- **Wichtigster Abwägung:** maximale Kontrolle/Härtung vs. Kompatibilitäts- und Bedienungs-Abwägungen (z.B. Apps, die Google Play Services erwarten) sowie klar dokumentierte Standard-Verbindungen zu GrapheneOS-Update-/Service-Endpunkten.

## Sofortmaßnahmen
- **Bootloader nach der Installation sperren:** schließt eine zentrale Sicherheitslücke im Installationsprozess und aktiviert Verified Boot als Schutzlinie.
- **USB-C-Port auf „Charging-only when locked“ lassen:** reduziert Angriffsfläche bei physischem Zugriff, ohne alltägliche Nutzung stark zu bremsen.
- **Internet-Connectivity-Check bewusst wählen (GrapheneOS/Standard/Off):** steuert Netzwerkverhalten (Captive Portals/Fallbacks) und den Kontakt zu bestimmten Endpunkten.

## Entscheidungshilfe
- Wenn du **Apps brauchst, die Play Services erwarten**, dann installiere Sandboxed Google Play (Abwägung: zusätzliche Google-Komponenten als normale Apps, dafür ohne privilegierte Systemintegration).
- Wenn du **möglichst wenig auffallen willst**, dann vermeide exotische DNS-/Connectivity-Check-Konfigurationen (Abwägung: Standard-Settings können zu mehr Kontakt mit Mainstream-Endpunkten führen).
- Wenn du **das Risiko durch physische Angriffe** reduzieren willst, dann nutze die USB-C-Port-Einschränkungen bei gesperrtem Gerät (Abwägung: bestimmte Kabel-/Zubehör-Workflows werden unbequemer).
- Wenn du **Netzwerkzugriffe pro App minimieren** willst, dann nutze den Network-Permission-Toggle für Apps ohne Online-Bedarf (Abwägung: Push/Sync/Updates können brechen).
- Wenn du **Lieferketten-Risiko reduzieren** willst, dann nutze die offiziellen Installationswege und prüfe den Verified-Boot-Key-Hash (Abwägung: zusätzlicher Einrichtung-Aufwand).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | GrapheneOS |
| Kategorie | Betriebssysteme |
| Website | https://grapheneos.org/ |
| Quellcode | https://github.com/GrapheneOS |
| Lizenz | Mixed (upstream-Lizenzen + MIT für eigenständige Projekte, laut FAQ) |
| Preismodell | free (spendenfinanziert) |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no (für die OS-Nutzung) |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Spenden: GitHub Sponsors (Kreditkarte), Wise/Banktransfer, PayPal, Kryptowährungen, Interac e-Transfer |
| Jurisdiktion | Kanada (GrapheneOS Foundation; Projekt international) |
| Logs | minimal |
| Retention | max. 10d (teilweise weniger / keine persistenten Logs für bestimmte Dienste) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: [FAQ: Privacy policy for GrapheneOS services](https://grapheneos.org/faq#what-is-the-privacy-policy-for-grapheneos-services)
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Laufende externe Code-Reviews/Audits (kein einzelnes Audit-Report verlinkt; Verweise über öffentliche PRs/Issue-Tracker)

**Daten-Notizen (kurz):**
- Laut FAQ gibt es **keine Analytics/Telemetry** in GrapheneOS.
- Standard-Verbindungen gehen primär zu **GrapheneOS-Diensten** (Updates/App-Repo/Zeit/Connectivity-Checks) und zu den **vom Netzwerk vorgegebenen DNS-Resolvern**.
- Für öffentlich verfügbare GrapheneOS-Dienste: **Log-Retention max. 10 Tage** (teilweise weniger/keine persistente Logs).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut FAQ werden bei Standard-Verbindungen zu GrapheneOS-Servern **generisches Gerätemodell** (z.B. Pixel-Modell) und **OS-Version** sichtbar, um Updates zu beziehen; es gibt **keine Analytics/Telemetry**.
- **Wofür:** Updates (System/App-Repo/Vanadium), Zeitabgleich, Internet-Connectivity-Checks, sowie weitere funktionale Abrufe (z.B. unterstützende Location-Daten, Attestation/Provisioning).
- **Weitergabe/Subprozessoren:** Nicht angegeben.
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Spendenoptionen u.a. via GitHub Sponsors, Wise/Banktransfer, PayPal und Kryptowährungen (siehe Donate-Seite).
- **Kontakt/DSAR/DPA:** Kontakt per E-Mail ist dokumentiert (contact@grapheneos.org; security@grapheneos.org). DSAR/DPA nicht angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nein (laut FAQ: keine Analytics/Telemetry).
- **Abschaltbar?** Entfällt (nicht vorhanden); einzelne Netzwerkfunktionen (z.B. Connectivity Checks, Network time) sind separat konfigurierbar.
- **Wo (Menüpfad):**  
  - Connectivity Checks: **Einstellungen → Network & internet → Internet connectivity check** (GrapheneOS / Standard / Off)  
  - Network time: **Einstellungen → System → Date & time → Set time automatically** (Toggle)

**Logs & Retention:**
- **Logging-Level:** minimal (für öffentlich verfügbare Dienste).
- **Aufbewahrung:** max. 10 Tage (teilweise weniger / keine persistenten Logs für bestimmte Dienste).
- **Lösch-/Opt-out-Optionen:** Nicht angegeben (für Server-Logs); clientseitige Minimierung erfolgt über OS-Einstellungen (z.B. Toggles) und Netzwerkrouting (z.B. VPN-Always-on).

**Abwägung am Punkt:** Weniger Hintergrund-Checks kann Captive-Portal-Erkennung und Netz-Fallbacks beeinträchtigen; mehr Checks bedeuten mehr definierte Verbindungen (Metadaten wie Zeitpunkt/Quelle).

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Gerätespeicher nutzt Androids Datei-basierte Verschlüsselung; Profile sind verschlüsselt, und nach Neustart muss der Owner entsperrt werden, bevor sekundäre Profile verfügbar sind (siehe FAQ zur Disk Encryption).
- **KDF/Parameter/Schlüsselableitung:** Passphrase/PIN wird als Teil der Schlüsselableitung verwendet; Details sind in der FAQ zur Disk Encryption beschrieben (hardwaregestützte Komponenten, Ableitung/Token-Konzept).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (kein GrapheneOS-Konto für die OS-Nutzung).
- **Recovery/Account-Wiederherstellung:** Wiederherstellung entspricht OS-/Gerätesperre (Owner Unlock nach Reboot); keine projektseitige Account-Recovery.
- **Vuln-Handling / Security-Kontakt:** security@grapheneos.org ist für hochpriorisierte Security-Issues dokumentiert; allgemeine Themen über contact@grapheneos.org und Issue-Tracker.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Installation abschließen: Bootloader sperren + Verified Boot aktiv**  
   **Prüfen:** Warnung „bootloader not locked“ erscheint nicht mehr; Installation ist abgeschlossen (FAQ erklärt, dass ein entsperrter Bootloader eine unsichere/incomplete Installation ist).
2) **Gerätesperre & Auto-Lock sinnvoll setzen** (PIN/Passphrase, kurzer Timeout).  
   **Prüfen:** Sperre greift zuverlässig, Entsperrung nach Neustart erforderlich (Owner).
3) **USB-C-Port-Default beibehalten** („Charging-only when locked“).  
   **Wo:** Einstellungen → **Security → Exploit protection → USB-C port**  
   **Prüfen:** Datenverbindungen werden bei gesperrtem Gerät blockiert (FAQ beschreibt Default-Verhalten).

**Stolpersteine:**
- Connectivity-Checks „Off“ kann Captive Portals/Netzwechsel/Job-Scheduling beeinträchtigen (Abwägung: weniger Checks vs. weniger Komfort/Automatik).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **Profile als Identitäten/Trennung** (z.B. „Arbeit“, „Privat“, „Tests“) und lösche temporäre Profile nach Bedarf.  
- Deaktiviere **Connectivity Checks** nur, wenn du die Folgen (Captive Portals/Fallbacks) akzeptierst; alternativ nutze „Standard“-Endpoints statt projekt-eigener (Abwägung: Funktion/„Blend-in“ vs. Kontakt zu Google-URLs).
- Setze **Network Permission** pro App restriktiv (Apps ohne Online-Bedarf offline halten).  
**Abwägung:** mehr manuelle Pflege (Push/Sync/Updates je App) und höheres Risiko, dass Apps unerwartet nicht funktionieren.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze **Always-on VPN + „Block connections without VPN“** (wenn du VPN-Provider/Threat-Model dafür hast).  
- Verwende **Airplane Mode** als harte Funkabschaltung, wenn du temporär keine Mobilfunk-Exponierung willst.  
- Isoliere riskante Apps in einem **separaten Profil** und lösche das Profil nach dem Einsatz (ephemeral Nutzung).  
**Abwägung:** deutlicher Komfortverlust, komplexeres Betriebsmodell und mehr Fehlkonfigurationen möglich.

</details>

## Features
- Keine Analytics/Telemetry laut FAQ (Standard-OS-Verhalten).
- Nutzersteuerung für App-Netzwerkzugriff über **Network Permission Toggle** (robuster als reine Paketfilter).
- Automatische Hintergrund-Updates; Update-Client nutzt Signaturprüfung/Downgrade-Schutz + Verified Boot.
- Konfigurierbare Internet-Connectivity-Checks (GrapheneOS / Standard / Off).
- USB-C-Port-Verhalten bei gesperrtem Gerät („Charging-only when locked“ als Default).
- Optional: Sandboxed Google Play zur App-Kompatibilität (ohne privilegierte Systemrechte).

## Alternativen
- CalyxOS (ähnliche Kategorie; Abwägung: anderer Fokus bei Geräte-/Update-Politik und Integrationen)
- LineageOS (ähnliche Kategorie; Abwägung: breitere Gerätebasis vs. andere Härtung-Entscheidungen)
- /e/OS (ähnliche Kategorie; Abwägung: anderer Schwerpunkt bei Cloud-/Service-Integration)

## Nicht gelöst / offene Punkte
- Unklar, ob GrapheneOS eine **öffentliche Subprozessoren-/Hosting-Liste** oder DPA-Informationen für seine öffentlich verfügbaren Dienste veröffentlicht.

## Quellen

- https://github.com/GrapheneOS
- [GrapheneOS – Startseite](https://grapheneos.org/)
- [FAQ (u.a. Default-Verbindungen, Privacy Policy für Services, Disk Encryption)](https://grapheneos.org/faq)
- [Features](https://grapheneos.org/features)
- [Usage Guide](https://grapheneos.org/usage)
- [Install](https://grapheneos.org/install/)
- [Contact (contact@ / security@ / Issue-Tracker)](https://grapheneos.org/contact)
- [History (Jurisdiktion/GrapheneOS Foundation in Kanada)](https://grapheneos.org/history/)
- [Donate (Spendenwege/Payment)](https://grapheneos.org/donate)
- [Source code (Übersicht + GitHub)](https://grapheneos.org/source)
- [GitHub Organisation: GrapheneOS](https://github.com/GrapheneOS)
