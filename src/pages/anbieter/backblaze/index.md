---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Backblaze"
url: "/anbieter/backblaze/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-05"
robots: "index,follow"
description: "Kurzprofil von Backblaze (Kategorie: Backup)."
provider: ""
name: "Backblaze"
category: "Backup"
website: "https://www.backblaze.com/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://www.backblaze.com/company/policy/privacy"
terms: "https://www.backblaze.com/company/policy/terms-of-service"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "no"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA (Backblaze, Inc.)"
region: "us"
logs: "unknown"
retention: "long"
retention_notes: "30 Tage (Standard Version History), optional 1 Jahr / Forever (Extended Version History, je nach Tarif/Upgrade)"
retention_max_days: "365"
data_notes: "Backblaze ist ein Cloud-Backup/Storage-Anbieter (u.a. Computer Backup, B2 Cloud Storage). Laut Privacy Notice verarbeitet Backblaze Account-/Zahlungs-/Supportdaten sowie Service-Metadaten (z.B. IP/OS, Dateitypen und Anzahl/Name/Größe übertragener Dateien). Optional kann ein „Private Encryption Key“ gesetzt werden; Restore-Prozesse sind dann besonders sensibel zu prüfen."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Backblaze ist ein Anbieter aus der Kategorie **Backup**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Cloud-Backup/Storage mit Account-Login nutzen willst und akzeptierst, dass dabei Account- und Nutzungsmetadaten beim Anbieter anfallen.
- **Weniger geeignet wenn:** du ein Einrichtung brauchst, bei dem der Anbieter **weder Inhalte noch aussagekräftige Metadaten** (z.B. Dateinamen/Dateigrößen) verarbeitet bzw. du Restore-Prozesse ausschließlich lokal ohne Server-Schritte willst.
- **Wichtigster Abwägung:** **Komfort (Web-/Restore-Workflows, Version History, Support) vs. Metadaten & Restore-Angriffsfläche** (insb. beim optionalen „Private Encryption Key“: zusätzlicher Schutz, aber Restore bleibt ein sensibler Punkt).

## Sofortmaßnahmen
- **2FA/2FV aktivieren (TOTP oder SMS) und Backup-Codes sichern:** senkt Risiko bei Passwort-Diebstahl; Backup-Codes reduzieren Lockout-Risiko.
- **Version History prüfen (Standard 30 Tage) und ggf. auf 1 Jahr / Forever umstellen:** reduziert Risiko, dass gelöschte/überschriebene Stände nach Ablauf nicht mehr wiederherstellbar sind (Abwägung: ggf. Upgrade/Mehrkosten bei „Forever“).
- **Private Encryption Key nur setzen, wenn du die Passphrase sicher verwalten kannst:** erhöht Schutz bei kompromittierten Login-Daten (Abwägung: bei Verlust ist Restore unmöglich).

## Entscheidungshilfe
- Wenn du **Account-Zugriff absichern** willst, dann aktiviere **2FA/2FV** und sichere **Backup-Codes** offline oder im Passwort-Manager (Abwägung: zusätzlicher Schritt beim Login).
- Wenn du willst, dass ein Angreifer mit nur Passwort **keine Restores erstellen** kann, dann setze einen **Private Encryption Key (PEK)** (Abwägung: PEK-Verlust = kein Restore).
- Wenn du **gelöschte/überschriebene Dateien länger als 30 Tage** zurückholen willst, dann aktiviere **1 Jahr** oder **Forever Version History** (Abwägung: bei „Forever“ können zusätzliche Kosten nach >1 Jahr anfallen).
- Wenn du **Telefonbindung vermeiden** willst, dann nutze **TOTP** ohne SMS-Fallback (Abwägung: weniger „Notfallweg“, du brauchst Backup-Codes).
- Wenn du **SSO** nutzt, dann gelten die 2FA/2FV-Optionen ggf. über den SSO-Provider (Abwägung: Abhängigkeit von dessen Policy/Recovery).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Backblaze |
| Kategorie | Backup |
| Website | https://www.backblaze.com/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | paid |
| Free Tier | no |
| Open Source | no |
| Konto erforderlich | yes |
| Telefon erforderlich | no (SMS nur, wenn du SMS-2FA nutzt) |
| KYC erforderlich | no |
| Zahlungsabwicklung | Stripe (Kreditkarten; laut Privacy Notice/Compliance) |
| Jurisdiktion | USA (Backblaze, Inc.) |
| Logs | unknown |
| Retention | 30 Tage (Standard Version History), optional 1 Jahr / Forever |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.backblaze.com/company/policy/privacy
- AGB/Terms: https://www.backblaze.com/company/policy/terms-of-service
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- SOC 2 Type 2 (laut Compliance-Seite)

**Daten-Notizen (kurz):**
Backblaze verarbeitet laut Privacy Notice neben Account-/Zahlungs-/Supportdaten auch automatisch erfasste Service-Metadaten (u.a. IP/OS/Zeitpunkt von Requests) und bei Backup-Services zusätzlich Informationen wie **Namen externer Laufwerke, übertragene Dateitypen sowie Anzahl/Name/Größe übertragener Dateien**. Optional kann ein **Private Encryption Key (PEK)** gesetzt werden; ohne PEK ist Restore nicht möglich.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** E-Mail + Passwort (Account), optional Telefonnummer (z.B. 2FA/Service Alerts), Billing-/Zahlungsdaten, Support-Kommunikation; automatisch: IP-Adresse, OS/Software, Zeitpunkt von Requests; bei Backup: u.a. Namen externer Drives, Dateitypen, Anzahl/Name/Größe übertragener Dateien.
- **Wofür:** Betrieb/Optimierung der Dienste, Account-Verwaltung, Abrechnung, Support, Diagnose von Problemen, Missbrauchs-/Betrugsprävention, Kommunikation (Service-E-Mails; Marketing nach Präferenzen).
- **Weitergabe/Subprozessoren:** Weitergabe an Dienstleister nur für begrenzte Zwecke (z.B. Payment, E-Mail, Support/Chat, SMS für 2FA); öffentliche Subprocessor-Liste ist verfügbar.
- **Drittlandtransfer:** Privacy Notice beschreibt DPF/UK DataBridge-Bezug und verlinkt zu EU/EEA/UK/CH-spezifischen Notices/DPAs.
- **Zahlungsabwicklung/Payment Processor:** Stripe wird genannt (Zahlungsabwicklung; Kreditkartendaten werden verschlüsselt übertragen, Security-Code/PIN werden laut Privacy Notice nicht gespeichert).
- **Kontakt/DSAR/DPA:** Privacy Notice verweist auf Kontakt/Request-Formulare und DPAs für EU/EEA und UK.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Notice nutzt Backblaze Drittanbieter-Tools u.a. für Website-Optimierung (z.B. Klicktests, Mausbewegungs-Aufzeichnungen, Seitenbesuche, Umfragen) und verarbeitet dabei u.a. IP-Adressen.
- **Abschaltbar?** Unklar (Steuerung laut Cookie Policy/Consent; Details je nach Region/Browser).
- **Wo (Menüpfad):** Website → Cookie Policy/Consent (laut Privacy Notice verlinkt).

**Logs & Retention:**
- **Logging-Level:** unknown
- **Aufbewahrung:** Privacy Notice: „so lange wie nötig“ für die Zwecke; Gründe für längere Aufbewahrung werden genannt (Security/Fraud, Finanzunterlagen, rechtliche Pflichten, Kontinuität, direkte Kommunikation). Für Backup-Inhalte gilt zusätzlich die **Version History** (Standard 30 Tage; optional 1 Jahr / Forever).
- **Lösch-/Opt-out-Optionen:** Service-E-Mails sind laut Privacy Notice nicht abwählbar ohne Kündigung; Marketing-E-Mails sind abwählbar. Privacy Requests über bereitgestellte Formulare.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.


## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Computer Backup verschlüsselt Daten mit einem pro Backup-Session erzeugten **AES-128**-Key; der AES-Key wird mit dem **Public Key** des Nutzers geschützt und die Übertragung erfolgt über **HTTPS**. (Details in „Encryption“.)
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Help Center nennt **TOTP-App** oder **SMS** (SMS erst nach erster erfolgreich verarbeiteter Zahlung; optionaler SMS-Fallback bei TOTP) plus **Backup-Codes**. Eine weitere Doku nennt zusätzlich **E-Mail MFA** als Standardoption sowie SSO als Alternative.
- **Recovery/Account-Wiederherstellung:** Backup-Codes sind als Fallback dokumentiert; bei PEK-geschützten Backups ist Restore ohne PEK unmöglich.
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **2FA/2FV aktivieren (TOTP oder SMS) + Backup-Codes sichern.**  
   **Menüpfad (Web):** Sign in → **My Settings** → **Sign In Settings** → Two Factor Authentication „On“.  
   **Prüfen:** Test-Login verlangt zweiten Faktor; Backup-Codes funktionieren als Fallback.
2) **Version History bewusst setzen (30 Tage / 1 Jahr / Forever).**  
   **Prüfen:** In Restore-/Rollback-Ansicht ist ein Datum wählbar und entspricht deiner Retention.
3) **Private Encryption Key nur setzen, wenn du Schlüsselmanagement beherrschst.**  
   **Menüpfad (Windows-Client):** Control Panel → Settings → **Security** → Private Encryption Key.  
   **Prüfen:** Restore wird ohne PEK nicht möglich; PEK ist sicher dokumentiert (z.B. Passwort-Manager + Offline-Backup).

**Stolpersteine:**
- **PEK-Verlust = kein Restore:** Das ist in der Doku explizit als „Backblaze kann nicht helfen“ beschrieben.
- **SMS-2FA ist nicht sofort verfügbar:** Laut Help Center erst nach erster erfolgreich verarbeiteter Zahlung (typisch nach 30 Tagen).
- **Restore-Prozess prüfen:** Bei PEK muss der Schlüssel für Restore-Aktionen bereitgestellt werden (Abwägung: Komfort vs. sensible Schlüsselverarbeitung).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **TOTP ohne SMS-Fallback**, wenn du Telefonbindung minimieren willst (Abwägung: stärkere Abhängigkeit von Backup-Codes).
- Reduziere Web-Konsole-Nutzung auf das Nötigste (Abwägung: weniger Komfort bei spontanen Restores/Checks).
- Verwende „Forever“ nur, wenn du die Langzeit-Aufbewahrung wirklich brauchst (Abwägung: größere Datenhaltung/ggf. Kosten).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze ein **dediziertes Profil/Device** für Login & Restores (z.B. separates Browser-Profil/VM).  
- Behandle **Restores als Hochrisiko-Aktion**: Zeitfenster minimieren, Restore-Downloads lokal absichern, Restore danach bereinigen.  
- PEK nur setzen, wenn du **Offline-Key-Backups** + Notfallprozess wirklich getestet hast.  
**Abwägung:** deutlich mehr Aufwand, höhere Lockout-Gefahr.

</details>

## Features
- Computer Backup (Cloud-Backup für Mac/Windows)
- B2 Cloud Storage (Objekt-Storage)
- Version History: 30 Tage (Standard), optional 1 Jahr / Forever
- Optional: Private Encryption Key (PEK)
- 2FA/2FV: TOTP-App oder SMS (mit Backup-Codes)
- Compliance-/Attestations-Hinweise (u.a. SOC 2 Type 2, laut Anbieter)

## Alternativen
- Arq + eigener Storage — Abwägung: mehr Kontrolle über Storage/Metadaten vs. mehr Einrichtung-/Betriebsaufwand.
- [Tresorit](/anbieter/tresorit/) – Abwägung: stärker auf E2E-Storage/Sharing ausgerichtet vs. anderes Produktprofil als klassisches „Computer Backup“.
- iDrive — Abwägung: anderer Funktions-/Plattform-Fokus vs. eigene Privacy-/Kontoanforderungen.

## Nicht gelöst / offene Punkte
- Unklar, welche **zusätzlichen Diagnosedaten/Reports** der Backup-Client im Problemfall an Backblaze sendet und ob/wo das deaktivierbar ist.

## Quellen

- Optional: "Private Encryption Key (PEK) als zusätzliche Verschlüsselungsstufe
- Arq + eigener Storage (Trade-off: "mehr Kontrolle über Storage/Metadaten vs. mehr Setup-/Betriebsaufwand)
- Tresorit (Trade-off: "stärker auf E2E-Storage/Sharing ausgerichtet vs. anderes Produktprofil als klassisches „Computer Backup“)
- iDrive (Trade-off: "anderer Funktions-/Plattform-Fokus vs. eigene Privacy-/Kontoanforderungen)
- title: "Why does Backblaze need my private encryption key to restore? (Help Center)
- [Backblaze Privacy Notice](https://www.backblaze.com/company/policy/privacy)
- [Backblaze Terms of Service](https://www.backblaze.com/company/policy/terms-of-service)
- [Backblaze Subprocessors](https://www.backblaze.com/company/policy/subprocessors)
- [Backblaze Cloud Storage Security Compliance Policies](https://www.backblaze.com/cloud-storage/compliance)
- [Extended Version History (Feature-Seite)](https://www.backblaze.com/cloud-backup/features/extended-version-history)
- [Setting Up Extended Version History (Help Center)](https://help.backblaze.com/hc/en-us/articles/360036946513-Setting-Up-Extended-Version-History)
- [Two Factor Verification (Help Center)](https://help.backblaze.com/hc/en-us/articles/217666588-Two-Factor-Verification)
- [Encryption (Computer Backup Docs)](https://www.backblaze.com/computer-backup/docs/encryption)
- [Configure Security Settings (Windows) (Computer Backup Docs)](https://www.backblaze.com/computer-backup/docs/configure-security-settings-windows)
- [Why does Backblaze need my private encryption key to restore? (Help Center)](https://help.backblaze.com/hc/en-us/articles/360038171794-Why-does-Backblaze-need-my-private-encryption-key-to-restore)

