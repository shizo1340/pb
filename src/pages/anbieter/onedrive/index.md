---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / OneDrive"
url: "/anbieter/onedrive/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-19"
robots: "index,follow"
description: "Kurzprofil von OneDrive (Kategorie: Cloud & Sync)."
provider: ""
name: "OneDrive"
category: "Cloud & Sync"
website: "https://www.microsoft.com/de-de/microsoft-365/onedrive/compare-onedrive-plans"
repo: "Nicht angegeben"
license: "Proprietär (kein Open-Source-Client / kein Server-Code veröffentlicht)"
policies: ""
privacy: "https://www.microsoft.com/de-de/privacy/privacystatement"
terms: "https://www.microsoft.com/en/servicesagreement"
transparency: "https://www.microsoft.com/en-us/corporate-responsibility/reports/transparency-report"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "no"
self_host_possible: "no"
account_required: "yes"
phone_required: "unknown"
kyc_required: "no"
jurisdiction: "USA (Microsoft Corporation); im EWR/UK/CH: Microsoft Ireland Operations Limited"
region: "uk"
logs: "unknown"
retention: "long"
retention_notes: "Papierkorb: 30 Tage (Privatkonto), 93 Tage (Work/School – Standard, kann admin-abhängig sein)"
retention_max_days: "93"
data_notes: "Serverseitige Verschlüsselung (TLS in Transit, AES-256 at rest pro Datei; Schlüsselverwaltung durch Microsoft). Kein expliziter Hinweis auf Ende-zu-Ende-/Zero-Knowledge-Verschlüsselung in OneDrive-Primärquellen."
features: ""
alternatives: ""
payment_processors: "Nicht angegeben (Zahlungsarten laut Microsoft: u.a. Kreditkarte/Lastschrift, je nach Region/Plan)"
sources: ""
---
## Kurzprofil

OneDrive ist ein Anbieter aus der Kategorie **Cloud & Sync**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Cloud-Sync/Sharing im Microsoft-Ökosystem brauchst (Windows/Microsoft-365) und ein Microsoft-Konto für dich ok ist.
- **Weniger geeignet wenn:** du Ende-zu-Ende-/Zero-Knowledge-Verschlüsselung erwartest oder Daten/Metadaten möglichst wenig an ein zentrales Konto binden willst.
- **Wichtigster Abwägung:** Komfort (Sync, Sharing, Recovery) vs. **Anbieterzugriff auf Inhalte/Metadaten** und starke Konto-/Ökosystembindung.

## Sofortmaßnahmen
- **Passkey oder zweistufige Überprüfung aktivieren** → reduziert Kontoübernahmen durch Phishing/Passwortleaks.
- **Personal Vault für besonders sensible Dateien nutzen** → zusätzlicher 2FA-Schritt + Auto-Lock senkt “offen liegengelassen”-Risiko.
- **Freigabelinks härten (Ablaufdatum/Passwort, wo verfügbar)** → senkt Risiko durch weitergeleitete oder vergessene Links.

## Entscheidungshilfe
- Wenn du in Windows/Microsoft-365 ohnehin angemeldet bist und “Dateien überall” brauchst, dann nutze OneDrive-Sync (Abwägung: Microsoft-Konto + cloudtypische Metadaten).
- Wenn du Dateien teilst, dann verwende bevorzugt **„Bestimmte Personen“** statt „Jeder mit dem Link“ (Abwägung: Empfänger brauchen passende Identität/Konto).
- Wenn du Links nutzen musst, dann setze **Ablaufdatum/Passwort** (Abwägung: Extra-Reibung, Passwort muss separat übermittelt werden; nur für Microsoft-365-Abos).
- Wenn du Ausweis-/Steuer-/Backup-Archive speicherst, dann lege sie in den **Personal Vault** (Abwägung: jedes Öffnen verlangt eine starke zweite Prüfung).
- Wenn du “Provider darf Inhalte technisch nicht lesen” als Anforderung hast, dann ist eine E2E/Zero-Knowledge-Lösung relevant (Abwägung: weniger Integrationen/Komfort, anderes Recovery-Modell).
- Wenn es ein Work/School-Tenant ist, dann prüfe DPA/Compliance/Sharing-Policies der Organisation (Abwägung: Admin-Policies können Komfortfunktionen einschränken).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | OneDrive |
| Kategorie | Cloud & Sync |
| Website | https://www.microsoft.com/de-de/microsoft-365/onedrive/compare-onedrive-plans |
| Quellcode | Nicht angegeben |
| Lizenz | Proprietär (kein Open-Source-Client / kein Server-Code veröffentlicht) |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben (Zahlungsarten laut Microsoft: u.a. Kreditkarte/Lastschrift, je nach Region/Plan) |
| Jurisdiktion | USA (Microsoft Corporation); im EWR/UK/CH: Microsoft Ireland Operations Limited |
| Logs | unknown |
| Retention | Papierkorb: 30 Tage (Privatkonto), 93 Tage (Work/School – Standard, kann admin-abhängig sein) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.microsoft.com/de-de/privacy/privacystatement
- AGB/Terms: https://www.microsoft.com/en/servicesagreement
- Transparency Report: https://www.microsoft.com/en-us/corporate-responsibility/reports/transparency-report
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- SOC 1 Type 2 / SOC 2 Type 2 / SOC 3 (Office 365 inkl. OneDrive; Berichte über Service Trust Portal abrufbar)
- ISO/IEC 27001:2013 (Office 365 inkl. OneDrive; jährlich durch Auditoren geprüft, Zertifikate/Reports über Service Trust Portal)

**Daten-Notizen (kurz):**
Serverseitige Verschlüsselung (TLS in Transit, AES-256 at rest pro Datei; Schlüsselverwaltung durch Microsoft). Kein expliziter Hinweis auf Ende-zu-Ende-/Zero-Knowledge-Verschlüsselung in OneDrive-Primärquellen.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Microsoft beschreibt Erhebung/Verwendung personenbezogener Daten in der Microsoft-Datenschutzerklärung; Inhalte umfassen u.a. Dateien/Dokumente, die du hochlädst oder speicherst.
- **Wofür:** Bereitstellung des Dienstes, Schutz vor Malware/Spam/Phishing sowie Betrieb und Verbesserung der Microsoft-Dienste (laut Terms/Privacy).
- **Weitergabe/Subprozessoren:** Microsoft verweist für Online Services auf DPA und Trust-Center-Informationen; Subprozessor-/Disclosure-Informationen werden über Microsoft Trust Center/Service Trust Portal beschrieben.
- **Drittlandtransfer:** Microsoft verweist in der Datenschutzerklärung u.a. auf EU-USA/UK-Erweiterung/Schweiz-USA-Datenschutzabkommen sowie Abschnitte zu Speicher-/Verarbeitungsorten.
- **Zahlungsabwicklung/Payment Processor:** In Primärquellen werden Zahlungsdienstleister nicht konsistent namentlich aufgeführt; Zahlungsarten/Abrechnung sind regions-/planabhängig.
- **Kontakt/DSAR/DPA:** Datenschutzerklärung nennt Kontaktwege (Privacy-Team/DSB) und verweist auf Privacy-Support/Anfragen; DPA ist als Dokument abrufbar (v.a. für Org/Enterprise).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar (OneDrive-spezifische Telemetrie-Einstellungen sind in den öffentlich auffindbaren OneDrive-Docs nicht als “Schalterliste” zusammengefasst).
- **Abschaltbar?** Teilweise/kontextabhängig (z.B. Diagnose-/Feedback in OS/App-Umgebung möglich; OneDrive-spezifische Details: Unklar).
- **Wo (Menüpfad):** Nicht angegeben (OneDrive-Client/Web/Mobil unterscheiden sich).

**Logs & Retention:**
- **Logging-Level:** unknown
- **Aufbewahrung:** Papierkorb: 30 Tage (Privatkonto) bzw. 93 Tage (Work/School – Standard); “Restore your OneDrive” kann Aktivitäten der letzten 30 Tage rückgängig machen (mit Microsoft-365-Abo).
- **Lösch-/Opt-out-Optionen:** Dateien/Ordner lassen sich löschen; dauerhaft gelöschte Inhalte aus dem Papierkorb sind nicht wiederherstellbar (laut Microsoft Support).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Microsoft beschreibt TLS-verschlüsselte Verbindungen (“in transit”) und serverseitige Verschlüsselung “at rest” (u.a. AES-256 pro Datei mit separaten Schlüsseln; Schlüsselmaterial wird über Microsofts Key-Management verwaltet). Ende-zu-Ende/Zero-Knowledge wird in OneDrive-Primärquellen nicht als Standard beschrieben.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Microsoft-Konto unterstützt zweistufige Überprüfung; Passkeys (“Hauptschlüssel”) werden unterstützt, inkl. FIDO2-Hardware-Sicherheitsschlüssel. Personal Vault erfordert 2FA.
- **Recovery/Account-Wiederherstellung:** Microsoft warnt, dass bei zweistufiger Überprüfung mehrere Kontaktmethoden nötig sind und Wiederherstellung sonst dauern/fehlschlagen kann (Recovery-Abwägung).
- **Vuln-Handling / Security-Kontakt:** Offizieller Meldeweg über MSRC (Microsoft Security Response Center) ist dokumentiert.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Passkey oder zweistufige Überprüfung aktivieren** (Microsoft-Konto).  
   **Menüpfad:** account.microsoft.com/security → „Zusätzliche Sicherheit“ → „Überprüfung in zwei Schritten“ (oder Passkey unter „Erweiterte Sicherheitsoptionen“).  
   **Prüfen:** Anmeldung erfordert zweiten Faktor / Passkey erscheint als Option.
2) **Personal Vault für “wirklich sensibel” nutzen** (z.B. Ausweis-Scans).  
   **Menüpfad (Web):** OneDrive.com → Einstellungen → Personal Vault → Enable.  
   **Prüfen:** Zugriff fragt jedes Mal eine starke zweite Prüfung ab; Auto-Lock greift (Web: nach ~20 Minuten Inaktivität laut Support).
3) **Freigaben härten** (wenn du teilst).  
   **Menüpfad (Web):** Datei/Ordner → „Share“ → Link-Einstellungen (Zahnrad) → „Set expiration date“ / „Set password“ (nur Microsoft-365-Abos).  
   **Prüfen:** Link funktioniert nach Ablauf nicht mehr; Passwort wird abgefragt.

**Stolpersteine:**
- Recovery-Optionen (z.B. zweite Kontaktmethode, ggf. Telefonnummer) erhöhen Identitätsbindung (Abwägung: Support/Recovery vs. Metadaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- Trenne “Cloud-Sync-Konto” und “Hauptidentität” (separates Microsoft-Konto nur für OneDrive, soweit praktikabel).
- Teile bevorzugt über **„Bestimmte Personen“** statt „Jeder mit dem Link“ (reduziert Forwarding-Risiko).
- Minimierter Datenumfang: nur das synchronisieren, was wirklich nötig ist; sensibelstes Material in Personal Vault.
**Abwägung:** mehr Konten-/Gerätemanagement, mehr Reibung beim Teilen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze getrennte Geräteprofile/VM oder ein dediziertes Nutzerkonto nur für OneDrive-Zugriff.
- Verzichte auf Link-Sharing mit „Jeder“ (nur direkte Einladungen/„Specific people“).
- Personal Vault konsequent + kurze Nutzungssessions (manuell “Lock” nach Nutzung).
**Abwägung:** deutlicher Komfortverlust, höhere Komplexität, weniger “schnell teilen”.

</details>

## Features
- Cloud-Speicher + Geräte-Sync (Windows/macOS/iOS/Android/Web)
- Freigabelinks mit Berechtigungen; optional Passwort/Ablaufdatum (je nach Plan)
- Versionierung & Wiederherstellungsfunktionen (z.B. 'Restore your OneDrive' für letzte 30 Tage mit Microsoft-365-Abo)
- Personal Vault (zusätzliche Schutzschicht via 2FA, Auto-Lock)

## Alternativen
- Google Drive (Cloud & Sync; Abwägung: anderer zentraler Anbieter, Konto-/Metadatenbindung)
- Dropbox (Cloud & Sync; Abwägung: ähnliches Anbieter-/Metadatenmodell)
- iCloud Drive (Cloud & Sync; Abwägung: Apple-ID/Ökosystem-Bindung)
- Nextcloud (Cloud & Sync; Abwägung: Self-Hosting möglich, aber eigener Betrieb/Updates nötig)

## Nicht gelöst / offene Punkte
- Öffentliche, OneDrive-spezifische Angaben zu **Diagnose-/Telemetrie-Schaltern** (pro Plattform: Windows/macOS/Mobile/Web) sind nicht als zentrale, verifizierbare Liste dokumentiert.

## Quellen

- ISO/IEC 27001: "2013 (Office 365 inkl. OneDrive; jährlich durch Auditoren geprüft, Zertifikate/Reports über Service Trust Portal)
- Google Drive (Cloud & Sync; Trade-off: "anderer zentraler Anbieter, Konto-/Metadatenbindung)
- Dropbox (Cloud & Sync; Trade-off: "ähnliches Anbieter-/Metadatenmodell)
- iCloud Drive (Cloud & Sync; Trade-off: "Apple-ID/Ökosystem-Bindung)
- Nextcloud (Cloud & Sync; Trade-off: "Self-Hosting möglich, aber eigener Betrieb/Updates nötig)
- https://www.microsoft.com/licensing/docs/view/microsoft-products-and-services-data-protection-addendum-dpa
- [OneDrive-Pläne vergleichen (Microsoft)](https://www.microsoft.com/de-de/microsoft-365/onedrive/compare-onedrive-plans)
- [Microsoft-Datenschutzbestimmungen (DE)](https://www.microsoft.com/de-de/privacy/privacystatement)
- [Microsoft Services Agreement (Consumer Terms)](https://www.microsoft.com/en/servicesagreement)
- [How OneDrive safeguards your data in the cloud (Microsoft Support)](https://support.microsoft.com/en-us/office/how-onedrive-safeguards-your-data-in-the-cloud-23c6ea94-3608-48d7-8bf6-80a8d0f7562f)
- [Share files and folders in Microsoft OneDrive (Microsoft Support)](https://support.microsoft.com/en-us/office/share-files-and-folders-in-microsoft-onedrive-9fcc2f7d-de0c-4cec-93b0-a82024800c07)
- [Protect your OneDrive files in Personal Vault (Microsoft Support)](https://support.microsoft.com/en-us/office/protect-your-onedrive-files-in-personal-vault-6540ef37-e9bf-4121-a773-56f98dce78c4)
- [Restore your OneDrive (Microsoft Support)](https://support.microsoft.com/en-us/office/restore-your-onedrive-fa231298-759d-41cf-bcd0-25ac53eb8a15)
- [Restore a previous version of a file stored in OneDrive (Microsoft Support)](https://support.microsoft.com/en-us/office/restore-a-previous-version-of-a-file-stored-in-onedrive-159cad6a-f780-482d-bc4b-50870e77b9ef)
- [Zweistufige Überprüfung aktivieren (Microsoft Support, DE)](https://support.microsoft.com/de-de/account-billing/aktivieren-der-zweistufigen-%C3%BCberpr%C3%BCfung-f%C3%BCr-ihr-microsoft-konto-c7910146-672f-01e9-50a0-93b4585e7eb4)
- [Anmelden mit einem Hauptschlüssel / Passkey (Microsoft Support, DE)](https://support.microsoft.com/de-de/account-billing/anmelden-mit-einem-hauptschl%C3%BCssel-09a49a86-ca47-406c-8acc-ed0e3c852c6d)
- [Privacy, security, and compliance in Microsoft OneDrive (Microsoft Learn)](https://learn.microsoft.com/en-us/sharepoint/onedrive-privacy-security-overview)
- [Microsoft Trust Center – Data Access](https://www.microsoft.com/en-us/trust-center/privacy/data-access)
- [Microsoft Products and Services Data Protection Addendum (DPA)](https://www.microsoft.com/licensing/docs/view/microsoft-products-and-services-data-protection-addendum-dpa)
- [SOC 2 Type 2 (Microsoft Compliance / Learn)](https://learn.microsoft.com/en-us/compliance/regulatory/offering-soc-2)
- [ISO/IEC 27001:2013 (Microsoft Compliance / Learn)](https://learn.microsoft.com/en-us/compliance/regulatory/offering-iso-27001)
- [Microsoft Transparency Report](https://www.microsoft.com/en-us/corporate-responsibility/reports/transparency-report)
