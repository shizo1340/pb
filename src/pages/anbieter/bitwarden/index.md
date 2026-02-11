---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Bitwarden"
url: "/anbieter/bitwarden/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-05"
robots: "index,follow"
description: "Kurzprofil von Bitwarden (Kategorie: Passwort-Manager)."
provider: ""
name: "Bitwarden"
category: "Passwort-Manager"
website: "https://bitwarden.com/"
repo: "https://github.com/bitwarden"
license: "AGPL-3.0 oder Bitwarden License v1.0 (je Repo)"
policies: ""
privacy: "https://bitwarden.com/privacy/"
terms: "https://bitwarden.com/terms/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "partial"
self_host_possible: "yes"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA (Bitwarden, Inc.)"
region: "us"
logs: "configurable"
retention: "verylong"
retention_notes: "Administrative Data: solange Kunde; Org-Event-Logs: unbegrenzt (einsehbar bis 367 Tage); Mobile Flight-Recorder-Logs lokal bis 30 Tage"
retention_max_days: "367"
data_notes: "Bitwarden nutzt eine Zero-Knowledge-/Ende-zu-Ende-Verschlüsselungs-Architektur: Tresor-Inhalte bleiben clientseitig verschlüsselt. Zusätzlich fallen Administrative Daten (z.B. E-Mail) für Konto, Support und Zahlung an; angebundene Dienstleister (z.B. Hosting/Payment) sind in der Subprocessor-Liste aufgeführt."
features: ""
alternatives: ""
payment_processors: "Stripe; PayPal (inkl. Braintree); BitPay"
sources: ""
---
## Kurzprofil

Bitwarden ist ein Anbieter aus der Kategorie **Passwort-Manager**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen Passwort-Tresor mit Multi-Device-Sync willst und dabei Wert auf Zero-Knowledge/E2E-Verschlüsselung sowie 2FA (inkl. Passkeys/Hardware-Keys) legst.
- **Weniger geeignet wenn:** du gar keine Kontobindung (E-Mail/Konto-Metadaten) oder keinen Cloud-Betrieb akzeptieren willst und Self-Hosting für dich nicht praktikabel ist.
- **Wichtigster Abwägung:** **Komfort (Sync, Web-Zugriff, Recovery-Optionen)** vs. **Administrative Daten + Infrastruktur-/Subprozessor-Abhängigkeiten**.

## Sofortmaßnahmen
- **2FA mit Passkey (FIDO2/WebAuthn) aktivieren:** reduziert Risiko durch Passwort-Leak deutlich, weil Login zusätzlich an ein Gerät/Hardware-Key gebunden wird.
- **KDF auf Argon2id stellen und Work-Factor erhöhen:** erhöht den Aufwand für Offline-Angriffe auf das Master-Passwort (Abwägung: Unlock dauert länger).
- **Vault Timeout kurz setzen (Lock/Logout):** verringert das Risiko bei offenem Gerät oder geteilten Sessions.

## Entscheidungshilfe
- Wenn du **Cloud-Sync** möchtest, dann nutze die Standard-Cloud (Abwägung: Administrative Daten + Subprozessoren laut Liste).
- Wenn du **Brute-Force-Risiko** reduzieren willst, dann erhöhe KDF-Kosten (PBKDF2/Argon2id) (Abwägung: langsameres Entsperren auf schwachen Geräten).
- Wenn du **2FA möglichst phishing-resistent** willst, dann nutze Passkey/Hardware-Key (Abwägung: Backup-Key/Recovery muss sauber organisiert sein).
- Wenn du **Datenhaltung & Infrastruktur stärker kontrollieren** willst, dann ist **Self-Hosting** relevant (Abwägung: Betrieb, Updates, Backup-Verantwortung).
- Wenn du **Organisations-Auditing** brauchst, dann nutze Event Logs/Policies (Abwägung: zusätzliche Metadaten wie IP/Events in Org-Kontext).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Bitwarden |
| Kategorie | Passwort-Manager |
| Website | https://bitwarden.com/ |
| Quellcode | https://github.com/bitwarden |
| Lizenz | AGPL-3.0 oder Bitwarden License v1.0 (je Repo) |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Stripe; PayPal (inkl. Braintree); BitPay |
| Jurisdiktion | USA (Bitwarden, Inc.) |
| Logs | configurable |
| Retention | Administrative Data: solange Kunde; Org-Event-Logs: unbegrenzt (einsehbar bis 367 Tage); Mobile Flight-Recorder-Logs lokal bis 30 Tage |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://bitwarden.com/privacy/
- AGB/Terms: https://bitwarden.com/terms/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- 2024 Client Applications Security Assessment (IOActive)
- 2024 Web App & Network Security Assessment (Fracture Labs)
- 2024 Mobile Apps & SDK Security Assessment (Cure53)
- SOC 2 Type II & SOC 3 (laut Anbieter; Details teils auf Anfrage)

**Daten-Notizen (kurz):**
Bitwarden nutzt eine Zero-Knowledge-/Ende-zu-Ende-Verschlüsselungs-Architektur: Tresor-Inhalte bleiben clientseitig verschlüsselt. Zusätzlich fallen Administrative Daten (z.B. E-Mail) für Konto, Support und Zahlung an; angebundene Dienstleister (z.B. Hosting/Payment) sind in der Subprocessor-Liste aufgeführt.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** 
  - **Tresor-/Vault-Daten**: laut Anbieter Ende-zu-Ende verschlüsselt (Subprozessoren haben keinen Zugriff auf unverschlüsselte Vault-Daten).
  - **Administrative Daten**: u.a. Daten für Account-Erstellung, Nutzung, Support und Zahlung; werden „so lange wie du Kunde bist“ gespeichert (plus gesetzliche Pflichten).
- **Wofür:** Konto-/Servicebetrieb, Support und Abrechnung; Sicherheitsfunktionen (z.B. neue Geräte).
- **Weitergabe/Subprozessoren:** Es gibt eine veröffentlichte Subprocessor-Liste (u.a. Hosting-Infrastruktur, E-Mail-Versand, Payment, Monitoring).
- **Drittlandtransfer:** Subprozessoren/Verarbeitungsorte sind u.a. USA und EU aufgeführt; für Transfers nennt Bitwarden u.a. SCC/DPF als Mechanismen.
- **Zahlungsabwicklung/Payment Processor:** Stripe; PayPal (inkl. Braintree); BitPay (laut Subprocessor-Liste).
- **Kontakt/DSAR/DPA:** Privacy-Requests sind per E-Mail an privacypolicy@bitwarden.com beschrieben; DPA/Vertragsmechanismen werden im Compliance-Bereich erwähnt.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar (clientseitige Telemetrie wird nicht als genereller, einheitlicher Standard-Schalter über alle Apps dokumentiert).
- **Abschaltbar?** Teilweise dokumentiert:
  - Android: Crash-Reporting kann deaktiviert werden; der F-Droid-Build entfernt laut Anbieter Crash-Reporting/Tracking-Komponenten.
  - Mobile Support-Diagnose: „Flight Recorder“ zeichnet Logs lokal auf und stellt sie zur Support-Weitergabe bereit.
- **Wo (Menüpfad):**
  - Mobile Flight Recorder: **Settings → About → View recorded logs** (Bitwarden Mobile).
  - Vault Timeout: je Client über „Session timeout / Vault timeout“ konfigurierbar.

**Logs & Retention:**
- **Logging-Level:** konfigurierbar (z.B. lokale Mobile-Logs; Org-Event-Logs).
- **Aufbewahrung:** 
  - Administrative Daten: solange Kundenbeziehung + rechtliche Anforderungen.
  - Event Logs (Teams/Enterprise): werden laut Anbieter unbegrenzt gespeichert, aber nur bis zu 367 Tage am Stück einsehbar.
  - Flight-Recorder-Logs (Mobile): bis Löschung oder **30 Tage** nach Erstellung.
  - Data Storage (Cloud-Backup/PITR): für Disaster-Recovery nennt Bitwarden **7 Tage Retention** für PITR (keine Langzeitaufbewahrung).
- **Lösch-/Opt-out-Optionen:** Unklar (für Cloud-Server-Access-Logs gibt es keine öffentlich bezifferte Standard-Retention in der Kurz-Doku).

**Abwägung am Punkt:** Weniger Diagnosedaten kann Support/Fehlersuche erschweren; mehr Diagnosedaten erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Vault-Daten sind laut Anbieter Ende-zu-Ende/Zero-Knowledge verschlüsselt (auch bei Self-Hosting).
- **KDF/Parameter/Schlüsselableitung:** PBKDF2 oder Argon2id sind dokumentiert; Work-Factor ist konfigurierbar (Einstellungen im Web Vault).
- **MFA/2FA/Passkeys/Hardware-Keys:** Two-Step Login ist dokumentiert, inkl. Passkey (FIDO2/WebAuthn) und weiteren Methoden; „Remember me“ ist pro Gerät und 30 Tage aktiv.
- **Recovery/Account-Wiederherstellung:** Recovery Codes für Two-Step Login sind dokumentiert; zusätzlich gibt es „Emergency Access“ (plan-/featureabhängig).
- **Vuln-Handling / Security-Kontakt:** Bug-Bounty-Programm wird über HackerOne beschrieben; regelmäßige Third-Party-Audits sind gelistet.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Two-Step Login aktivieren** (z.B. Passkey/FIDO2 oder Authenticator-App).  
   **Prüfen:** Konto zeigt „Two-step login: enabled“ + Recovery Code ist gesichert.
2) **Vault/Session Timeout setzen** (kurz) und passende Timeout-Aktion wählen (Lock oder Logout).  
   **Prüfen:** Timeout greift im Test nach Inaktivität (laut Session-Timeout-Doku).
3) **Diagnose-/Crash-Optionen prüfen** (v.a. Android) und nur bei Bedarf aktiv lassen.  
   **Prüfen:** Crash-Reporting-Schalter „aus“ (falls vorhanden) und Flight-Recorder nur bei Support nutzen.

**Stolpersteine:**
- „Remember me“ bei 2FA kann pro Gerät 30 Tage aktiv bleiben (Abwägung: weniger Reibung vs. weniger häufige 2FA-Abfrage).
- Höhere KDF-Kosten können alte/kleine Geräte spürbar verlangsamen (Abwägung: Widerstand gegen Offline-Angriffe vs. Komfort).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze eine dedizierte E-Mail/Weiterleitung für das Konto, um Identitätsbindung zu reduzieren (Abwägung: Recovery/Account-Verwaltung hängt an dieser Adresse).
- Prüfe Self-Hosting, wenn du Infrastruktur-/Subprozessor-Abhängigkeiten reduzieren willst (Abwägung: Betrieb/Updates/Backups liegen bei dir).
- Halte Support-Logs (Flight Recorder) nur situativ und lösche sie nach Nutzung (Abwägung: weniger Diagnose-Material).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze einen Hardware-Key/Passkey als 2FA und halte einen Backup-Key getrennt bereit (Abwägung: höherer organisatorischer Aufwand).
- Trenne Nutzungskontexte (z.B. eigener Browser-Profil/Container nur für Vault-Zugriff) (Abwägung: mehr Reibung im Alltag).
- Self-Hosting + restriktive Netzregeln nur auf dokumentierte Bitwarden-Endpoints (Abwägung: höhere Komplexität und Fehleranfälligkeit).

</details>

## Features
- Passwort-Tresor mit Sync über Geräte
- 2FA inkl. Passkeys (FIDO2/WebAuthn) + Recovery Codes
- KDF wählbar (PBKDF2/Argon2id) + konfigurierbarer Work Factor
- Self-Hosting möglich

## Alternativen
- [KeePassXC](/anbieter/keepassxc/) – **Abwägung:** Sync/Backups/Sharing musst du selbst organisieren.
- [1Password](/anbieter/1password/) – **Abwägung:** Closed-Source/anderes Account-Modell, dafür integrierte Cloud-Workflows.
- [Proton Pass](/anbieter/proton-pass/) – **Abwägung:** stärker an ein Anbieter-Konto/Ökosystem gebunden.

## Nicht gelöst / offene Punkte
- Exakte Aufbewahrungsdauer für **Cloud-Server-Access-Logs** (IP/HTTP-Logs) ist in den öffentlich Dokumenten nicht konkret beziffert.

## Quellen

- title: "Emergency Access
- [Bitwarden – Website](https://bitwarden.com/)
- [Bitwarden Privacy Policy](https://bitwarden.com/privacy/)
- [Bitwarden Terms of Service](https://bitwarden.com/terms/)
- [Pricing & Plans](https://bitwarden.com/pricing/)
- [Compliance, Audits, and Certifications](https://bitwarden.com/help/is-bitwarden-audited/)
- [Bitwarden Subprocessors](https://bitwarden.com/help/subprocessors/)
- [Security FAQs](https://bitwarden.com/help/security-faqs/)
- [KDF Algorithms](https://bitwarden.com/help/kdf-algorithms/)
- [Automatic Logout or Lock (Vault Timeout)](https://bitwarden.com/help/vault-timeout/)
- [Flight Recorder (Mobile Logs)](https://bitwarden.com/help/flight-recorder/)
- [Event Logs](https://bitwarden.com/help/event-logs/)
- [Administrative Data](https://bitwarden.com/help/administrative-data/)
- [Data Storage](https://bitwarden.com/help/data-storage/)
- [Passkey Two-Step Login (FIDO2/WebAuthn)](https://bitwarden.com/help/Einrichtung-two-step-login-fido/)
- [Two-Step Login FAQs](https://bitwarden.com/help/twostep-faqs/)
- [Two-step Login Recovery Code](https://bitwarden.com/help/two-step-recovery-code/)
- [Emergency Access](https://bitwarden.com/help/emergency-access/)

