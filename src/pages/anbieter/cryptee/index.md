---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Cryptee"
url: "/anbieter/cryptee/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-10"
robots: "index,follow"
description: "Kurzprofil von Cryptee (Kategorie: Notizen & Docs)."
provider: ""
name: "Cryptee"
category: "Notizen & Docs"
website: "https://crypt.ee/"
repo: "https://github.com/cryptee/web-client"
license: "Unklar"
policies: ""
privacy: "https://crypt.ee/privacy"
terms: "https://crypt.ee/terms"
transparency: "https://crypt.ee/transparency"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "partial"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Estland"
region: "eu"
logs: "minimal"
retention: "long"
retention_notes: "Backups bis 90 Tage; Abuse-Detection-Logs (IP/UA) 180 Tage; Error Reports 90 Tage"
retention_max_days: "180"
data_notes: "Laut Privacy Policy: Inhalte sind clientseitig verschlüsselt; der Dienst kann Inhalte nicht im Klartext lesen. E-Mail ist optional; Abuse-Detection speichert IP/UA zeitlich begrenzt."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Cryptee ist ein Anbieter aus der Kategorie **Notizen & Docs**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du verschlüsselte Dokumente/Notizen (und optional Fotos/Dateien) als Cloud-Service nutzen willst und dabei keine Telefonnummer hinterlegen möchtest.
- **Weniger geeignet wenn:** du vollständige Open-Source-Transparenz inkl. Backend oder Self-Hosting erwartest.
- **Wichtigster Abwägung:** Komfort durch Cloud-Sync vs. unvermeidbare Metadaten/Abuse-Logs + Backup-Retention (und ein nicht vollständig offenes Backend).

## Sofortmaßnahmen
- **Account ohne E-Mail anlegen (falls möglich)** → reduziert direkte Identitätsbindung, solange du kein Recovery per Mail brauchst.
- **Regelmäßig Export/Download einplanen** → reduziert Abhängigkeit von Recovery-Mechanismen des Dienstes.
- **„Ghost Folders/Albums“ nur gezielt einsetzen** → erhöht Schutz bei erzwungenem Zugriff, aber du brauchst eine sichere Merkhilfe (Abwägung: Deniability vs. Vergessen).

## Entscheidungshilfe
- Wenn du **einfachen Multi-Device-Sync** für verschlüsselte Notizen/Docs willst, dann nutze Cryptee (Abwägung: Cloud-Metadaten + Backups bis zu definierter Frist).
- Wenn du **möglichst wenig persönliche Daten** beim Start hinterlassen willst, dann registriere **ohne Telefonnummer** und nur mit optionaler E-Mail (Abwägung: Recovery/Support kann eingeschränkt sein).
- Wenn du **Deniability gegen Zwang/Screening** brauchst, dann nutze **Ghost Folders/Albums** (Abwägung: organisatorischer Aufwand, Risiko „aus Versehen versteckt“).
- Wenn du **vollständig prüfbares System inkl. Server** willst, dann ist ein lokales/self-hostbar Einrichtung relevanter (Abwägung: mehr Eigenbetrieb, weniger Komfort).
- Wenn du **Diagnose-/Fehlerdaten minimieren** willst, dann prüfe dokumentierte Schalter zu Error-Reporting/Telemetry (Abwägung: weniger hilfreiche Debug-Infos).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Cryptee |
| Kategorie | Notizen & Docs |
| Website | https://crypt.ee/ |
| Quellcode | https://github.com/cryptee/web-client |
| Lizenz | Unklar |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Estland |
| Logs | minimal |
| Retention | Backups bis 90 Tage; Abuse-Detection-Logs (IP/UA) 180 Tage; Error Reports 90 Tage |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://crypt.ee/privacy
- AGB/Terms: https://crypt.ee/terms
- Transparency Report: https://crypt.ee/transparency
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Laut Anbieter erfolgt die Verschlüsselung clientseitig; Inhalte sollen den Dienst nicht im Klartext verlassen. Die E-Mail-Adresse ist optional; für Abuse-Prevention werden IP/UA zeitlich begrenzt gespeichert.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Account-Identifikator (z.B. Nutzername) und ggf. optionale E-Mail; verschlüsselte Inhalte; für Abuse-Prevention IP/UA; Fehlerberichte (Crash/Error) mit begrenzter Aufbewahrung; Backups mit definierter Frist.
- **Wofür:** Betrieb des Dienstes (Sync/Speicher), Abuse-Prevention, Stabilität/Fehlerdiagnose.
- **Weitergabe/Subprozessoren:** Genannt wird u.a. Error-Reporting via Sentry; eine vollständige Subprozessorenliste ist nicht eindeutig ausgewiesen.
- **Drittlandtransfer:** Nicht angegeben / Unklar.
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben / Unklar (in Checkout/Pricing prüfen).
- **Kontakt/DSAR/DPA:** Kontakt über Anbieterkanäle (Imprint), Details zu DSAR/DPA nicht klar benannt.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy gibt es ein eigenes (anonymes) Analytics-System; zusätzlich werden Fehlerberichte via Sentry genannt.
- **Abschaltbar?** Nicht angegeben / Unklar.
- **Wo (Menüpfad):** Nicht angegeben / Unklar.

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** Backups bis 90 Tage; Abuse-Detection-Logs (IP/UA) 180 Tage; Error Reports 90 Tage
- **Lösch-/Opt-out-Optionen:** Löschung laut Policy möglich, aber Backups können bis zur Frist verbleiben (Stand: Privacy Policy).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Anbieter beschreibt clientseitige Verschlüsselung (z.B. AES-256) und dass Inhalte nicht im Klartext auslesbar sein sollen.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben / Unklar.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben / Unklar.
- **Recovery/Account-Wiederherstellung:** Nicht angegeben / Unklar (E-Mail optional kann Recovery beeinflussen).
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben / Unklar (kein eindeutig benannter Disclosure-Prozess).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (2FA/MFA), falls angeboten – sonst besonders starke, einzigartige Passphrase nutzen.  
   **Prüfen:** Account-Security zeigt „aktiv“ (oder Passphrase-Check im Passwort-Manager).
2) **Auto-Lock/Timeout** am Gerät sinnvoll setzen (Bildschirmsperre + App nicht dauerhaft offen lassen).  
   **Prüfen:** Sperre greift im Test nach Inaktivität.
3) **Analytics/Telemetry deaktivieren**, falls Schalter existiert (z.B. Error-Reporting/Diagnose).  
   **Prüfen:** Schalter „aus“ + dokumentiert.

**Stolpersteine:**
- Ohne klare Recovery-Optionen kann ein Passwortverlust final sein (Abwägung: Recovery vs. Sicherheit).

<details>
<summary>Profil B (Datensparsam)</summary>

- Reduziere Identitätsbindung: optional keine E-Mail (sofern du Recovery nicht brauchst).
- Halte die Nutzung strikt „single purpose“: keine unnötigen Integrationen/Embeds, wenn sie externe Requests auslösen könnten (nur wenn dokumentiert).
- Backup/Export-Strategie: regelmäßiger Export + lokal verschlüsselt ablegen (z.B. in einem separaten Tresor).
**Abwägung:** mehr Eigenverantwortung bei Recovery/Support.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze ein separates Geräteprofil / dediziertes Gerät nur für diese Nutzung (Isolierung).
- Vermeide dauerhaft eingeloggte Sessions; nutze kurze Timeouts + konsequentes Logout.
- Optional Netzwerk-Blocking nur mit dokumentierten Endpunkten (sonst Risiko von Breakage).
**Abwägung:** deutlicher Komfortverlust, höhere Komplexität.

</details>

## Features
- Clientseitig verschlüsselte Dokumente/Notizen (Web + Apps)
- Verschlüsselter Foto-/Datei-Storage
- Ghost Folders/Albums (versteckbare Ordner/Alben)

## Alternativen
- [Standard Notes](/anbieter/standard-notes/)
- [Joplin](/anbieter/joplin/)
- CryptPad (kollaborative Docs; **Abwägung:** Team-/Collab-Fokus, anderer Workflow/Metadaten)

## Nicht gelöst / offene Punkte
- Lizenz des Web-Client-Repos konnte nicht verlässlich aus den Repo-Ansichten ausgelesen werden (Stand: 2026-01-10).

## Quellen

- Standard Notes (Notizen-App; Trade-off: "Fokus auf Notizen statt Cloud-Dokumente/Anhänge)
- Joplin (lokal + Sync; Trade-off: "mehr Setup/Sync-Verantwortung statt integrierter Cloud)
- CryptPad (kollaborative Docs; Trade-off: "anderer Fokus/Workflow, andere Metadatenlage)
- [Cryptee – Homepage](https://crypt.ee/)
- [Cryptee – Privacy Policy](https://crypt.ee/privacy)
- [Cryptee – Terms](https://crypt.ee/terms)
- [Cryptee – Transparency Report](https://crypt.ee/transparency)
- [Cryptee – FAQ](https://crypt.ee/faq)
- [Cryptee – Imprint](https://crypt.ee/imprint)
- [cryptee/web-client (GitHub)](https://github.com/cryptee/web-client)
- [Cryptee – Homepage](https://crypt.ee/)
- [Cryptee – Privacy Policy](https://crypt.ee/privacy)
- [Cryptee – Terms](https://crypt.ee/terms)
- [Cryptee – Transparency Report](https://crypt.ee/transparency)
- [Cryptee – FAQ](https://crypt.ee/faq)
- [Cryptee – Imprint](https://crypt.ee/imprint)
- [cryptee/web-client (GitHub)](https://github.com/cryptee/web-client)
