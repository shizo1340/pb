---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Passbolt"
url: "/anbieter/passbolt/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von Passbolt (Kategorie: Passwort-Manager)."
provider: ""
name: "Passbolt"
category: "Passwort-Manager"
website: "https://www.passbolt.com/"
repo: "https://github.com/passbolt"
license: "AGPL-3.0-or-later (je Projekt; z.B. passbolt_api)"
policies: ""
privacy: "https://www.passbolt.com/privacy"
terms: "https://www.passbolt.com/terms"
transparency: "https://www.passbolt.com/incidents"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "yes"
phone_required: "unknown"
kyc_required: "unknown"
jurisdiction: "Luxembourg (Passbolt SA)"
region: "eu"
logs: "configurable"
retention: "configurable"
retention_notes: "Cloud: Löschung auf Anfrage/bei Ende i.d.R. innerhalb 30 Business Days; Backups: bis ~6 Wochen (laut DPA). Self-Hosting: konfigurierbar"
retention_max_days: "42"
data_notes: "Passbolt nutzt Ende-zu-Ende-Verschlüsselung auf Basis von OpenPGP; Secret Keys werden laut Sicherheitsmodell nicht im Klartext an den Server gesendet. In Passbolt Cloud werden Dienstleister (Subprozessoren) u.a. für Hosting, Billing und Monitoring genannt."
features: ""
alternatives: ""
payment_processors: "Stripe (laut DPA Subprozessorenliste, Passbolt Cloud)"
sources: ""
---
## Kurzprofil

Passbolt ist ein Anbieter aus der Kategorie **Passwort-Manager**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen **teamfähigen Passwort-/Credential-Manager** mit **Self-Hosting-Option** suchst und mit **Schlüsselverwaltung (Recovery Kit / Private Key)** umgehen kannst.
- **Weniger geeignet wenn:** du **ohne Server/Accounts** arbeiten willst (rein lokale/offline Tresore) oder du keine Verantwortung für **Key-Backups** übernehmen kannst/willst.
- **Wichtigster Abwägung:** **Kollaboration & zentrale Verwaltung** vs. **Metadaten/Administrationsdaten auf dem Server** (und der Pflicht, den **Private Key sicher zu sichern**, sonst droht Datenverlust).

## Sofortmaßnahmen
- **Recovery Kit sofort sichern:** verhindert dauerhaften Verlust des Zugriffs, wenn Gerät/Browser-Profil verloren geht.
- **(Wenn verfügbar) Zusatz-Faktor aktivieren:** reduziert Risiko bei Passwort-Diebstahl (Abwägung: mehr Reibung beim Login).
- **(Wenn möglich) „Encrypted resource metadata“ aktivieren:** reduziert Klartext-Metadaten bei Datenbank-/Backup-Exposure (Abwägung: Migration/Kompatibilität prüfen).

## Entscheidungshilfe
- Wenn du **maximale Datenhoheit** willst, dann nutze **Self-Hosting** (Abwägung: Betrieb/Updates/Backups liegen bei dir).
- Wenn du **schnell startklar** sein willst, dann nutze **Passbolt Cloud** (Abwägung: Subprozessoren/Monitoring und Cloud-Betrieb).
- Wenn du **Metadaten (Namen/URLs/Usernames)** zusätzlich schützen willst, dann aktiviere **Encrypted resource metadata** (Abwägung: Migration nötig, Feature-Verfügbarkeit versionsabhängig).
- Wenn du **kein Schlüssel-Backup** sicher hinbekommst, dann plane Passbolt erst nach einem sauberen **Recovery-Kit-Workflow** (Abwägung: mehr Initialaufwand).
- Wenn du **Auditierbarkeit/Granulare Rechte** brauchst, dann nutze Passbolt mit Gruppen/Rollen (Abwägung: mehr Admin-Struktur als bei Single-User-Managern).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Passbolt |
| Kategorie | Passwort-Manager |
| Website | https://www.passbolt.com/ |
| Quellcode | https://github.com/passbolt |
| Lizenz | AGPL-3.0-or-later (je Projekt; z.B. passbolt_api) |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Stripe (laut DPA Subprozessorenliste, Passbolt Cloud) |
| Jurisdiktion | Luxembourg (Passbolt SA) |
| Logs | configurable |
| Retention | Cloud: Löschung auf Anfrage/bei Ende i.d.R. innerhalb 30 Business Days; Backups: bis ~6 Wochen (laut DPA). Self-Hosting: konfigurierbar |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.passbolt.com/privacy
- AGB/Terms: https://www.passbolt.com/terms
- Transparency Report: https://www.passbolt.com/incidents
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Cure53 Security Assessment / Pentest Report (PBL-12) (PDF): https://www.passbolt.com/docs/files/PBL-12-report.pdf

**Daten-Notizen (kurz):**
Passbolt nennt **Ende-zu-Ende-Verschlüsselung (OpenPGP)** und dass der **Secret Key nicht im Klartext an den Server gesendet** wird. In der Passbolt Cloud nennt der Anbieter eine **Subprozessorenliste** (u.a. für Billing/Monitoring).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - Website: u.a. Referrer, IP-Adresse, User-Agent/Browser-Merkmale, Timestamp (Security/Abuse-Prevention).  
  - Cloud: u.a. Name, E-Mail, Profilbild, IP-Adresse, Gruppen-Zugehörigkeiten, „credentials to other systems“ und Nutzungsinformationen (für Dienstbereitstellung).
- **Wofür:** Security/Abuse-Prevention, Bereitstellung der Services (Cloud), Support/Vertrieb je nach Kontaktaufnahme, Billing bei Kauf.
- **Weitergabe/Subprozessoren:** In der Passbolt Cloud DPA werden Subprozessoren in „Schedule 3“ gelistet (z.B. Stripe, New Relic, AWS SES, Chargebee, ChartMogul).
- **Drittlandtransfer:** DPA nennt Einschränkung von Transfers außerhalb EEA nur mit vorheriger schriftlicher Zustimmung bzw. nach GDPR Chapter V; Website-Privacy weist außerdem auf Abhängigkeit von US-registrierten Dienstleistern hin.
- **Zahlungsabwicklung/Payment Processor:** Privacy Policy: keine direkte Kreditkarten-Verarbeitung durch Passbolt; Verarbeitung durch Payment-Processing-Services. Cloud DPA: Stripe als Subprozessor genannt.
- **Kontakt/DSAR/DPA:** Privacy/DPA/Terms sind öffentlich verlinkt; Kontaktadresse in Legal-Seiten vorhanden.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy: „We do not collect analytics and advertising data in the Products or on the Cloud Site.“ (Website-Analytics sind separat und per Cookie-Banner opt-in/opt-out).
- **Abschaltbar?** Für Website-Analytics: Opt-in/Opt-out via Cookie-Banner; für Produkte/Cloud: Analytics/Advertising laut Policy nicht erhoben.
- **Wo (Menüpfad):** Website: Cookie-Banner (Consent/Tracking). Produkt/Cloud: nicht angegeben (da laut Policy nicht erhoben).

**Logs & Retention:**
- **Logging-Level:** configurable (Self-Hosting); Cloud-Operational/Monitoring-Einrichtung laut DPA Subprozessorenliste implizit vorhanden.
- **Aufbewahrung:** Cloud: Löschung/Return nach Ende bzw. auf Anfrage laut DPA innerhalb definierter Fristen; Self-Hosting: konfigurierbar durch Betreiber:in.
- **Lösch-/Opt-out-Optionen:** Cloud: Löschung/Return laut DPA; Website: Cookie-Consent für Analytics/Ads.

**Abwägung am Punkt:** Weniger Telemetrie reduziert externe Datenabflüsse, kann aber Diagnose/Support (insb. Cloud-Monitoring) erschweren.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Passbolt beschreibt Ende-zu-Ende-Verschlüsselung auf Basis von OpenPGP; der Secret Key wird laut Sicherheitsmodell nicht im Klartext an den Server gesendet.
- **KDF/Parameter/Schlüsselableitung:** In den Security-Whitepapers werden OpenPGP-Mechanismen und Key-Derivation (S2K) beschrieben (Details editions-/versionabhängig).
- **MFA/2FA/Passkeys/Hardware-Keys:** Passbolt nennt „Secret key authentication (2FA)“ und „Additional factor authentication (3-step verification)“ auf der Pricing-Seite (Feature-Verfügbarkeit abhängig von Edition/Einrichtung).
- **Recovery/Account-Wiederherstellung:** Recovery Kit / Private Key ist kritisch: wenn der Key verloren geht, sind verschlüsselte Daten nicht mehr zugreifbar (auch bei intaktem Server).
- **Vuln-Handling / Security-Kontakt:** Sicherheitskontakt wird u.a. in offiziellen Repos genannt (security@passbolt.com); zusätzlich existiert eine Security-Seite.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Recovery Kit sofort herunterladen & offline sichern** (Key/Kit in getrenntem Backup).  
   **Prüfen:** Recovery Kit liegt in mindestens 2 getrennten, getesteten Backups.
2) **Zusatz-Faktor/3-Step Verification aktivieren**, falls in deiner Edition verfügbar.  
   **Prüfen:** Login zeigt aktiven zweiten Schritt (z.B. zusätzlicher Prompt/Challenge).
3) **(Wenn verfügbar) „Encrypted resource metadata“ aktivieren** und Migration planen.  
   **Prüfen:** UI/Settings zeigen aktiviertes Feature + Migrationsstatus erfolgreich.

**Stolpersteine:**
- **Key-Verlust = Datenverlust:** Ohne Private Key/Recovery Kit sind E2E-verschlüsselte Inhalte praktisch nicht wiederherstellbar (Abwägung: starke Client-Krypto vs. Recovery-Aufwand).
- **Team-Funktionen erzeugen Metadaten:** Gruppen, Freigaben und (je nach Einrichtung) unverschlüsselte Metadaten können Rückschlüsse erlauben (Abwägung: Zusammenarbeit vs. Metadaten-Minimierung).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **Self-Hosting**, wenn du Subprozessoren/Cloud-Betrieb vermeiden willst (Hosting/Logs unter eigener Kontrolle).
- Reduziere Identitätsbindung: nur erforderliche Account-Daten, keine optionalen Profilbilder/Infos.
- **Export-/Backup-Strategie:** regelmäßige Backups (Server + Recovery Kits), Restore-Test in separater Umgebung.  
**Abwägung:** mehr Eigenverantwortung bei Betrieb, Updates und Notfall-Tests.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Verwende **eigenen PGP Secret Key** statt generiertem Key, wenn dein Bedrohungsmodell Key-Lifecycle-Kontrolle verlangt.
- Trenne Nutzungskontext: eigener Browser/Profil/VM nur für Passbolt (reduziert Cross-Site/Extension-Risiken).
- Reduziere Angriffsfläche: minimale Plugins/Erweiterungen, striktes Update-Fenster, Admin-Zugänge stark abschotten.  
**Abwägung:** deutlicher Komfortverlust und höherer Betriebs-/Key-Management-Aufwand.

</details>

## Features
- Ende-zu-Ende-Verschlüsselung (OpenPGP) mit per-User Verschlüsselung und granularen Rechten.
- Self-Hosting (Community/Pro) oder Cloud-Hosting (EU-Cloud) als Betriebsmodell.
- Browser-Erweiterungen und CLI (laut Pricing-Seite).
- Optional: verschlüsselte Resource-Metadaten (Version/Edition abhängig).

## Alternativen
- **Bitwarden:** eher klassisches Vault-/Account-Modell (Abwägung: anderes Hosting-/Client-Ökosystem).
- **1Password:** stark integriertes SaaS-/Client-Ökosystem (Abwägung: proprietärer Stack vs. Komfort/Integration).
- **KeePassXC:** lokal/offline Datei-Tresor möglich (Abwägung: weniger eingebaute Team-/Server-Kollaboration).

## Nicht gelöst / offene Punkte
- Offen: Konkrete Retention für Cloud-Monitoring/Operational-Logs.
- Unklar: Ob/wo Passbolt in bestimmten Flows eine Telefonnummer abfragt (nicht als Pflicht genannt).

## Quellen

- Cure53 Security Assessment / Pentest Report (PBL-12) (PDF): "https://www.passbolt.com/docs/files/PBL-12-report.pdf
- Optional: "verschlüsselte Resource-Metadaten (ab Version 5.1+)
- https://www.passbolt.com/docs/files/security_paper.pdf
- [Passbolt – Produktseite](https://www.passbolt.com/)
- [Passbolt – Security Model](https://www.passbolt.com/security)
- [Passbolt – Privacy Policy](https://www.passbolt.com/privacy)
- [Passbolt – Terms Übersicht](https://www.passbolt.com/terms)
- [Passbolt Cloud – Data Processing Agreement (DPA)](https://www.passbolt.com/terms/cloud/dpa)
- [Passbolt – Credits/Impressum](https://www.passbolt.com/credits)
- [Passbolt – Pro Pricing](https://www.passbolt.com/pricing/pro)
- [GitHub – passbolt/passbolt_api (Lizenz/Code)](https://github.com/passbolt/passbolt_api)
- [GitHub – passbolt/passbolt-mad (Security Contact Hinweis)](https://github.com/passbolt/passbolt-mad)
- [Doku – Install (CE) inkl. Recovery Kit Hinweis](https://www.passbolt.com/docs/hosting/install/ce/ubuntu/)
- [Security White Paper (PDF)](https://www.passbolt.com/docs/files/security_paper.pdf)
- [Cure53 Pentest Report (PBL-12) (PDF)](https://www.passbolt.com/docs/files/PBL-12-report.pdf)
