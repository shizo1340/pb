---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / ExpressVPN"
url: "/anbieter/expressvpn/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-12"
robots: "index,follow"
description: "Kurzprofil von ExpressVPN (Kategorie: VPN)."
provider: ""
name: "ExpressVPN"
category: "VPN"
website: "https://www.expressvpn.com/"
repo: "https://github.com/expressvpn/lightway-core"
license: "Proprietär (Open-Source-Komponente: lightway-core unter GPL-2.0-only)"
policies: ""
privacy: "https://www.expressvpn.com/privacy-policy"
terms: "https://www.expressvpn.com/tos"
transparency: "https://www.expressvpn.com/trust"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "partial"
self_host_possible: "no"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "British Virgin Islands (BVI)"
region: "eu"
logs: "minimal"
retention: "verylong"
retention_notes: "Aktivierungsstatus bis 24 Monate; transaktionale Kommunikation bis 10 Jahre; sonst zweckgebunden (laut Privacy Policy)"
retention_max_days: "3650"
data_notes: "Laut Anbieter keine Aktivitäts-/Verbindungslogs; optionales anonymes Analytics-Sharing und optionales App-Diagnose-Reporting (Opt-in)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

ExpressVPN ist ein Anbieter aus der Kategorie **VPN**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen kommerziellen VPN-Dienst mit Kill-Switch und dokumentierten Audit-Berichten nutzen willst und dafür einer zentral betriebenen Infrastruktur vertraust.
- **Weniger geeignet wenn:** du zwingend **Self-Hosting** brauchst oder nur Software nutzen willst, die vollständig Open Source ist.
- **Wichtigster Abwägung:** **Komfort (Apps, Infrastruktur, Support) vs. Anbieter-Vertrauen/Metadaten-Rest** (Account-/Zahlungsdaten, optionale Diagnose-/Analytics-Daten).

## Sofortmaßnahmen
- **Internet Kill Switch prüfen** (standardmäßig aktiv) → reduziert Leaks bei Verbindungsabbrüchen.
- **Anonymes Analytics-Sharing deaktivieren** → weniger Diagnosedaten/Metadaten, ggf. weniger hilfreiche Fehlersuche.
- **Auto-connect aktivieren** (Start/unsichere Netze) → reduziert “vergessen zu verbinden”.

## Entscheidungshilfe
- Wenn du **Leak-Schutz bei Verbindungsabbrüchen** brauchst, dann nutze den **Internet Kill Switch** (Abwägung: bei Fehlkonfiguration kann Internet/Netzwerkzugriff blockiert werden).
- Wenn du **Tracking/Ads/Malware-Domains** auf Netzwerkebene blocken willst, dann aktiviere **Advanced Protection** (Abwägung: benötigt **Lightway + aktives VPN** und kann Fehlblockaden verursachen).
- Wenn du **möglichst wenig Diagnose-Daten** senden willst, dann deaktiviere **anonymes Analytics-Sharing** und vermeide optionales Diagnostik-Opt-in (Abwägung: Support/Debugging wird schwieriger).
- Wenn du **Offline-/Self-Hosting-Kontrolle** brauchst, dann ist ExpressVPN weniger passend (Abwägung: eigener Betrieb/Serverpflege bei Alternativen).
- Wenn du **LAN-Geräte im gleichen Netz** (Drucker/NAS) während VPN nutzen willst, dann prüfe die **LAN-Option** im Kill-Switch-Menü (Abwägung: LAN erlauben kann lokale Angriffsfläche erhöhen).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | ExpressVPN |
| Kategorie | VPN |
| Website | https://www.expressvpn.com/ |
| Quellcode | https://github.com/expressvpn/lightway-core |
| Lizenz | Proprietär (Open-Source-Komponente: lightway-core unter GPL-2.0-only) |
| Preismodell | paid |
| Free Tier | no |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | PayPal, BitPay, Paymentwall, Stripe (je nach Standort; laut Privacy Policy) |
| Jurisdiktion | British Virgin Islands (BVI) |
| Logs | minimal |
| Retention | Aktivierungsstatus bis 24 Monate; transaktionale Kommunikation bis 10 Jahre; sonst zweckgebunden (laut Privacy Policy) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.expressvpn.com/privacy-policy
- AGB/Terms: https://www.expressvpn.com/tos
- Transparency Report: https://www.expressvpn.com/trust
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Übersicht & Audit-Liste (chronologisch): [ExpressVPN Trust Center](https://www.expressvpn.com/trust)
- Beispiel (zugängliche Einstiegsseite): [KPMG Audit-Update (Juni 2025) – Zugriff auf Bericht via Trust Center](https://www.expressvpn.com/kpmg-2025-no-logs-policy-audit/)

**Daten-Notizen (kurz):**
ExpressVPN nennt eine **No-Logs-Ausrichtung** (keine Aktivitäts- und Verbindungslogs) sowie **optionales** anonymes Analytics-/Diagnose-Reporting. Für Website-Nutzung werden (wie üblich) Cookies/Tracking-Kategorien erläutert (Privacy Policy).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Account-/Kontaktangaben (z.B. E-Mail), Zahlungs-/Abrechnungsdaten (über Zahlungsdienstleister), begrenzte Nutzungs-/Diagnose-Daten je nach Opt-in (Privacy Policy).
- **Wofür:** Bereitstellung des Dienstes, Zahlungsabwicklung, Support, Produktverbesserung/Qualitätssicherung (Privacy Policy).
- **Weitergabe/Subprozessoren:** Zahlungsdienstleister (z.B. PayPal, Stripe, BitPay, Paymentwall – je nach Standort); Support-/Tooling-Anbieter werden im Kontext “Service Providers” und Cookie-Kategorien genannt (Privacy Policy).
- **Drittlandtransfer:** Nicht angegeben (in der öffentlich auffindbaren Policy nicht als eigene Liste/Übersicht).
- **Zahlungsabwicklung/Payment Processor:** PayPal, BitPay, Paymentwall, Stripe (Privacy Policy).
- **Kontakt/DSAR/DPA:** DSAR über Kontaktweg laut Privacy Policy; DPO-Adresse: dpo@expressvpn.com.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Teilweise konfigurierbar/Opt-in (z.B. anonymes Analytics-Sharing; optionales Diagnostik-Reporting laut Privacy Policy).
- **Abschaltbar?** Ja, für „anonymous analytics sharing“ gibt es eine Einstellmöglichkeit (Support-Doku).
- **Wo (Menüpfad):** In den Apps typischerweise unter **Einstellungen/Options → Privacy/Advanced** (siehe Support-Anleitung zum Analytics-Sharing).

**Logs & Retention:**
- **Logging-Level:** minimal (laut Anbieter keine Aktivitäts- oder Verbindungslogs; begrenzte Statistik-/Diagnosedaten möglich).
- **Aufbewahrung:** Aktivierungsstatus bis 24 Monate; transaktionale Kommunikation bis 10 Jahre; weitere Daten zweckgebunden (Privacy Policy).
- **Lösch-/Opt-out-Optionen:** Privacy Policy nennt Rechte auf Löschung/Restriktion/Opt-out im Rahmen geltender Gesetze; Analytics-Sharing ist per App-Einstellung änderbar.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Für die VPN-Verbindung nennt ExpressVPN u.a. AES-256 sowie Lightway-Eigenschaften wie Perfect Forward Secrecy und wolfSSL (Trust Center).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (für den VPN-Dienst in den genutzten Quellen nicht als konkrete Parameter dokumentiert).
- **MFA/2FA/Passkeys/Hardware-Keys:** Für das **Kundenkonto** in den genutzten Quellen nicht eindeutig dokumentiert (Unklar).
- **Recovery/Account-Wiederherstellung:** Nicht angegeben (typisch via Account/E-Mail, aber nicht als konkreter Prozess in den genutzten Quellen belegt).
- **Vuln-Handling / Security-Kontakt:** Bug-Bounty-Programm (Trust Center; gemanagt über YesWeHack).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kill-Switch aktiv lassen** (standardmäßig aktiv).  
   **Prüfen:**  
   - Windows: Menü → **Options** → **General** → „Stop all internet traffic if the VPN disconnects unexpectedly“  
   - macOS/Linux GUI: **Profile** → **Internet Kill Switch** → „Enable when connected“  
2) **Auto-connect aktivieren** (Start/unsichere Netze).  
   **Prüfen:**  
   - macOS/Linux GUI: **Profile** → **Auto-connect** → „Enable Auto-connect“  
   - Android: VPN-Tab → **Auto-connect** (Start/„untrusted networks“)  
3) **Anonymous analytics sharing deaktivieren**, wenn du weniger Diagnosedaten willst.  
   **Prüfen:** Einstellung „aus“ + Dokumentation im Support-Center zur Analytics-Sharing-Option.

**Stolpersteine:**
- **Advanced/Always-on Kill Switch** kann Internet komplett blocken, wenn VPN nicht aktiv ist (Abwägung: Leak-Schutz vs. „kein Internet ohne VPN“).
- **LAN-Zugriff** kann je nach Bedarf erlaubt/gesperrt werden (Abwägung: Komfort im Heimnetz vs. lokale Angriffsfläche).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Diagnose/Analytics minimieren:** Analytics-Sharing aus; optionale Diagnose-Opt-ins vermeiden (Abwägung: weniger verwertbare Supportdaten).
- **Identitätsbindung reduzieren:** falls möglich, Konto mit einer E-Mail betreiben, die du getrennt verwaltest (Abwägung: Recovery/Support wird heikler).
- **Advanced Protection bewusst einsetzen:** kann Tracking/Ads blocken, aber auch Fehlblockaden verursachen (Abwägung: weniger Dritt-Kontakte vs. Kompatibilität).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Advanced Internet Kill Switch („Enable at all times“) aktivieren** (wo verfügbar), um Leaks auch bei „VPN aus“ zu vermeiden.  
  **Abwägung:** kein Internet ohne aktives VPN; Fehler werden “hart” spürbar.
- **LAN-Zugriff deaktivieren**, wenn lokale Netze als Risiko gelten.  
  **Abwägung:** Drucker/NAS/Local Services ggf. nicht erreichbar.
- **Getrennte Browser-/OS-Profile** (z.B. separates Nutzerprofil/VM) für VPN-Nutzung.  
  **Abwägung:** mehr Aufwand, höhere Komplexität.

</details>

## Features
- Internet Kill Switch / Network Lock inkl. LAN-Option und (plattformabhängig) „Advanced Internet Kill Switch“ (Support).
- Advanced Protection: Threat Manager / Ad Blocker / Parental Controls, **DNS-basierter Blocker auf dem Gerät**, Nutzung von Blocklists (Support).
- Hinweis laut Anbieter: Advanced Protection funktioniert nur mit **aktivem VPN** und **Lightway-Protokoll** (Support).
- Lightway-Protokoll: Eigenschaften wie Perfect Forward Secrecy; Core-Bibliothek als Open Source (Trust Center + Repo).
- TrustedServer-Ansatz (RAM-only, Wipe on reboot) laut Anbieter (Trust Center).
- Audit-/Transparenzbereich inkl. Audit-Liste und Transparency Report (Trust Center).

## Alternativen
- self-hosted WireGuard (eigener Server/VPS) – **Abwägung:** voller Betrieb/Updates selbst, Hoster sieht Quell-IP.
- [Tor Browser](/anbieter/tor-browser/) – **Abwägung:** langsamer, höhere Inkompatibilität/Rate-Limits bei manchen Diensten.
- Unternehmens-VPN/Zero-Trust-Access (je nach Umfeld) – **Abwägung:** stärkeres Identitäts-/Policy-Einrichtung, weniger „privat“ gedacht.

## Nicht gelöst / offene Punkte
- Öffentliche Subprozessoren-Liste/DPA bei ExpressVPN: **nicht eindeutig auffindbar** in den genutzten Quellen.
- Kundenkonto-2FA/MFA/Passkeys: **unklar** in den genutzten Quellen.

## Quellen

- Audit-Übersicht (Liste der Berichte): "https://www.expressvpn.com/trust
- KPMG (No-Logs/Privacy Commitments, Juni 2025 – Bericht via Trust Center): "https://www.expressvpn.com/trust
- PwC (TrustedServer, Juni 2019 – Bericht via Trust Center): "https://www.expressvpn.com/trust
- Cure53/Praetorian (Lightway-Protokoll, 2021–2024 – Berichte via Trust Center): "https://www.expressvpn.com/trust
- self-hosted WireGuard (eigener Server/VPS) – Trade-off: "eigener Betrieb/Angriffsfläche, Hoster sieht Quell-IP
- Tor Browser – Trade-off: "deutlich langsamer, manche Dienste blocken/limitieren
- ExpressVPN Privacy Policy: "https://www.expressvpn.com/privacy-policy
- ExpressVPN Terms of Service: "https://www.expressvpn.com/tos
- ExpressVPN Trust Center (Audits/Transparenz/Bug Bounty): "https://www.expressvpn.com/trust
- Internet Kill Switch (Network Lock) – Support: "https://www.expressvpn.com/support/knowledge-hub/network-lock/
- Advanced Protection – Support: "https://www.expressvpn.com/support/knowledge-hub/what-is-advanced-protection/
- Blocklists (Advanced Protection) – Support: "https://www.expressvpn.com/support/knowledge-hub/blocklists/
- Lightway Core (Repo): "https://github.com/expressvpn/lightway-core
- [ExpressVPN Privacy Policy](https://www.expressvpn.com/privacy-policy)
- [ExpressVPN Terms of Service](https://www.expressvpn.com/tos)
- [ExpressVPN Trust Center (Audits/Transparenz/Bug Bounty)](https://www.expressvpn.com/trust)
- [Internet Kill Switch / Network Lock – Support](https://www.expressvpn.com/support/knowledge-hub/network-lock/)
- [What is Advanced Protection? – Support](https://www.expressvpn.com/support/knowledge-hub/what-is-advanced-protection/)
- [Who is on ExpressVPN’s blocklists? – Support](https://www.expressvpn.com/support/knowledge-hub/blocklists/)
- [Lightway Core (GitHub Repo)](https://github.com/expressvpn/lightway-core)
- [KPMG Audit-Update (Juni 2025) – Blog/Entry zum Reportzugriff](https://www.expressvpn.com/kpmg-2025-no-logs-policy-audit/)
