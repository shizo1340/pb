---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Notion"
url: "/anbieter/notion/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-19"
robots: "index,follow"
description: "Kurzprofil von Notion (Kategorie: Notizen & Docs)."
provider: ""
name: "Notion"
category: "Notizen & Docs"
website: "https://www.notion.com/"
repo: "https://github.com/makenotion"
license: "Nicht angegeben (proprietär)"
policies: ""
privacy: "https://www.notion.com/trust/privacy-policy"
terms: "https://www.notion.so/terms"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "no"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA (Notion Labs, Inc., San Francisco, CA)"
region: "us"
logs: "unknown"
retention: "short"
retention_notes: "30d nach Workspace-Löschung (Inhalt sofort unzugänglich; danach Löschung laut Notion)"
data_notes: "- Server-seitig gehostet (AWS); Verschlüsselung „at rest“ und „in transit“, aber **kein** E2E/Client-side-Modell genannt."
features: ""
alternatives: ""
payment_processors: "Stripe (Web); Apple Pay (Web/iOS); SEPA Direct Debit (Europa, Web)"
sources: ""
---
## Kurzprofil

Notion ist ein Anbieter aus der Kategorie **Notizen & Docs**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen **Cloud-Workspace** für Notizen/Docs/Team-Wissen mit Kollaboration brauchst und serverseitige Speicherung für dich akzeptabel ist.
- **Weniger geeignet wenn:** du **Ende-zu-Ende-/Client-side-Verschlüsselung** für Inhalte brauchst oder ein **lokal-first/Offline**-Modell erzwingen möchtest.
- **Wichtigster Abwägung:** Komfort (Kollaboration/Recovery/Support) vs. **Inhalts- und Metadaten** beim Anbieter (inkl. möglichem internen Zugriff für Troubleshooting).

## Sofortmaßnahmen
- **Passkey oder 2-Step Verification aktivieren:** reduziert Account-Übernahmen durch Phishing/Password-Reuse.
- **„Share to web“ bewusst prüfen:** verhindert versehentliche öffentliche Freigaben.
- **Tracking/Analytics minimieren:** Opt-out prüfen (Abwägung: Support/Diagnose kann eingeschränkt sein).

## Entscheidungshilfe
- Wenn du Notion als **Team-Wiki/Projekt-Doku** nutzt, dann halte Freigaben strikt („Guests/Links“ sparsam) (Abwägung: weniger spontanes Teilen).
- Wenn du **sensible Inhalte** verwaltest, dann vermeide öffentliche Links und beschränke Workspace-Mitglieder (Abwägung: mehr Admin-Aufwand).
- Wenn du **minimalen Login-Angriff** willst, dann nutze Passkeys (ggf. hardwaregebunden/FIDO2) oder TOTP-2FA (Abwägung: Geräte-/Recovery-Plan nötig).
- Wenn du **EU-Storage „at rest“** brauchst, dann ist Data Residency (Enterprise) relevant (Abwägung: gilt laut Doku nicht für alle Datenkategorien).
- Wenn du **Werbe-/Tracking-Reduktion** willst, dann nutze Cookie-Einstellungen und Opt-out-Optionen (Abwägung: weniger Diagnose/Support-Komfort möglich).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Notion |
| Kategorie | Notizen & Docs |
| Website | https://www.notion.com/ |
| Quellcode | https://github.com/makenotion |
| Lizenz | Nicht angegeben (proprietär) |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Stripe (Web); Apple Pay (Web/iOS); SEPA Direct Debit (Europa, Web) |
| Jurisdiktion | USA (Notion Labs, Inc., San Francisco, CA) |
| Logs | unknown |
| Retention | 30d nach Workspace-Löschung (Inhalt sofort unzugänglich; danach Löschung laut Notion) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.notion.com/trust/privacy-policy
- AGB/Terms: https://www.notion.so/terms
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- SOC 2 Type 2 (laut Notion)
- ISO 27001 / 27701 / 27017 / 27018 (laut Notion)
- PCI DSS v4.0 Merchant Level 2 (laut Notion)
- BSI C5 (laut Notion)

**Daten-Notizen (kurz):**
- Server-seitig gehostet (AWS); Verschlüsselung „at rest“ und „in transit“, aber **kein** E2E/Client-side-Modell genannt.
- Interner Zugriff ist für Troubleshooting/Recovery vorgesehen (Abwägung: Support/Recovery vs. Vertraulichkeit).
- Datenresidenz (US/EU) ist als Enterprise-Feature beschrieben; gilt nur für bestimmte Datenkategorien „at rest“.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Kontoangaben (Name, E-Mail, Passwort, optional Profilfoto), Kommunikationsdaten (z.B. E-Mail/Telefon/Adresse bei Support/Newsletter), Zahlungsdaten via Payment Provider; automatisch u.a. IP-Adresse, Geräte-/Browserdaten, Cookie-IDs, Nutzungs-/Interaktionsdaten.
- **Wofür:** Bereitstellung der Services, Support, Abrechnung, Sicherheit/Fraud-Prevention, Analyse/Produktverbesserung sowie Marketing/Kommunikation.
- **Weitergabe/Subprozessoren:** Nutzung von Dienstleistern/Subprozessoren wird erwähnt; eine „List of Subprocessors“ ist verlinkt.
- **Drittlandtransfer:** Internationale Datentransfers werden beschrieben; für EU-Transfers werden Standardvertragsklauseln (SCC) genannt.
- **Zahlungsabwicklung/Payment Processor:** Zahlungen werden laut Anbieter über Stripe verarbeitet (je nach Region/Plattform zusätzlich Apple Pay/SEPA).
- **Kontakt/DSAR/DPA:** Privacy-Kontakt ist per E-Mail angegeben; ein DPA wird verlinkt.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Tracking/Analytics auf Website/Marketing ist beschrieben; für die App/Services werden Analytics-Technologien ebenfalls erwähnt.
- **Abschaltbar?** Cookie-Einstellungen sind vorhanden; zusätzlich wird ein Opt-out für Tracking/Analytics per Support-Kontakt beschrieben.
- **Wo (Menüpfad):** Website/Policy nennt „Cookie settings“ sowie Einstellungen in Notion („Settings & Members“ → Bereich „My notifications & settings“) für bestimmte Cookie-Optionen (je nach UI-Version).

**Logs & Retention:**
- **Logging-Level:** unknown
- **Aufbewahrung:** 30d nach Workspace-Löschung (Inhalt sofort unzugänglich; danach Löschung laut Notion)
- **Lösch-/Opt-out-Optionen:** Workspace/Account-Löschung ist beschrieben; Tracking/Analytics-Opt-out ist beschrieben.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Verschlüsselung „at rest“ (AES-256) und „in transit“ (TLS 1.2+) ist beschrieben; E2E/Client-side für Inhalte wird nicht als Modell genannt.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2-Step Verification (Authenticator/Telefon) ist beschrieben; Passkeys werden unterstützt (inkl. hardwaregebunden/FIDO2 als „device-bound passkeys“).
- **Recovery/Account-Wiederherstellung:** 2FA-Backup-Codes werden erwähnt; interner Zugriff für Troubleshooting/Recovery wird beschrieben.
- **Vuln-Handling / Security-Kontakt:** Responsible Disclosure Policy/Bug-Bounty ist verlinkt; Trust/Compliance-Kontakt wird genannt.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Passkey oder 2-Step Verification aktivieren**  
   **Menüpfad (Web/Desktop):** `Settings` → `{dein Name}` → **Account security** → `Add passkey` **oder** `2-step verification`  
   **Prüfen:** Login zeigt „Continue with Passkey“ bzw. 2FA ist „aktiv“, Backup-Codes sind gespeichert.
2) **Freigaben reduzieren („Share to web“)**
   **Menüpfad:** Seite öffnen → `Share` → „Share to web“ **aus**, Link-Sharing nur wenn nötig  
   **Prüfen:** Externer Browser (Inkognito) kann Inhalte ohne Freigabe nicht sehen.
3) **Zahlungs-/Billing-Zugriff nur bei Bedarf**
   **Menüpfad:** `Settings` → `Billing` → Payment Method prüfen/aktualisieren  
   **Prüfen:** Nur notwendige Zahlungsarten hinterlegt (Abwägung: weniger spontane Upgrades).

**Stolpersteine:**
- Recovery/Support kann internen Zugriff erfordern (Abwägung: Support/Recovery vs. Metadaten/Vertraulichkeit).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Workspace-Trennung:** Private und Team-Inhalte trennen (z.B. separater Workspace/Account).  
- **Integrationen minimieren:** Nur wirklich benötigte Integrationen aktiv lassen (Abwägung: weniger Automationen/Komfort).
- **Backup/Export-Strategie:** Regelmäßiger Workspace-Export (Markdown) als Offline-Kopie.  
**Abwägung:** mehr Eigenverantwortung (Exports, Rechte-/Freigabe-Review, Recovery).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Isolierung:** Getrennter Browser-Profil/Container/VM nur für Notion-Login.  
- **Hardware-gebundene Passkeys (FIDO2)** nutzen, wenn dein Einrichtung das trägt.  
- **Data Residency (Enterprise) prüfen:** EU-Region „at rest“ für definierte Datenkategorien.  
**Abwägung:** deutlicher Komfortverlust, höhere Komplexität, ggf. Enterprise-Abhängigkeit.

</details>

## Features
- Kollaborative Seiten & Datenbanken (Cloud-Workspace)
- Granulare Freigaben (Members/Guests/Links) und Admin-Funktionen
- Export/Import (z.B. Workspace-Export als Markdown)
- Passkeys & 2-Step Verification (TOTP/SMS) für Kontoschutz
- Enterprise-Optionen wie SAML SSO/SCIM, Audit Log, Data Residency

## Alternativen
- Obsidian (lokal-first; Abwägung: Sync/Collab separat organisieren)
- Joplin (Notizen mit Sync-Optionen; Abwägung: weniger „All-in-one“-Workspace)
- Nextcloud Notes / Collabora (Self-Hosting-nah; Abwägung: Admin-Aufwand)
- Google Docs / Microsoft OneNote (Cloud-Suite; Abwägung: Ökosystem-/Tracking-Integration)

## Nicht gelöst / offene Punkte
- App-/Service-**Telemetrie & Log-Retention**: öffentlich dokumentierte Details fehlen.

## Quellen

- Interner Zugriff ist für Troubleshooting/Recovery vorgesehen (Trade-off: "Support/Recovery vs. Vertraulichkeit).
- Obsidian (lokal-first; Trade-off: "Sync/Collab separat organisieren)
- Joplin (Notizen mit Sync-Optionen; Trade-off: "weniger „All-in-one“-Workspace)
- Nextcloud Notes / Collabora (Self-Hosting-nah; Trade-off: "Admin-Aufwand)
- Google Docs / Microsoft OneNote (Cloud-Suite; Trade-off: "Ökosystem-/Tracking-Integration)
- https://www.notion.com/help/data-residency
- [Notion Privacy Policy](https://www.notion.com/trust/privacy-policy)
- [Security practices (Help Center)](https://www.notion.com/help/security-and-privacy)
- [GDPR at Notion (Help Center)](https://www.notion.com/help/gdpr-at-notion)
- [Passkeys (Help Center)](https://www.notion.com/help/passkeys)
- [Two-step verification (Help Center)](https://www.notion.com/help/two-step-verification)
- [Payment methods (Help Center)](https://www.notion.com/help/payment-methods)
- [Data residency for Notion (Help Center)](https://www.notion.com/help/data-residency)
