---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / LastPass"
url: "/anbieter/lastpass/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-17"
robots: "index,follow"
description: "Kurzprofil von LastPass (Kategorie: Passwort-Manager)."
provider: ""
name: "LastPass"
category: "Passwort-Manager"
website: "https://www.lastpass.com/"
repo: "https://github.com/lastpass/lastpass-cli"
license: "GPL-2.0-only (LastPass CLI); Haupt-Apps: Nicht angegeben"
policies: ""
privacy: "https://www.lastpass.com/legal-center/privacy-notice"
terms: "https://www.lastpass.com/legal-center/terms-of-service"
transparency: "https://www.lastpass.com/trust-center/guidelines-for-law-enforcement-requests"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "partial"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Je nach Region (z.B. LastPass Ireland Limited oder LastPass US LP; siehe Contracting Entities)"
region: "eu"
logs: "unknown"
retention: "verylong"
retention_notes: "Backups bis 18 Monate; Free-Accounts werden nach 2 Jahren Inaktivität automatisch gelöscht (laut TOMs)"
retention_max_days: "540"
data_notes: "Vault-Daten werden clientseitig verschlüsselt (Zero-Knowledge/Local-Only); Master-Passwort wird nicht unverschlüsselt gespeichert. Subprozessoren u.a. für Hosting/Payment/Telemetrie sind dokumentiert."
features: ""
alternatives: ""
payment_processors: "Stripe (laut Sub-Processor Disclosure)"
sources: ""
---
## Kurzprofil

LastPass ist ein Anbieter aus der Kategorie **Passwort-Manager**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen cloud-synchronisierten Passwort-Manager mit Vault, Sharing und MFA nutzen willst und ein zentrales Konto akzeptierst.
- **Weniger geeignet wenn:** du eine strikt lokale/offline-first Nutzung ohne Anbieter-Backend brauchst oder möglichst wenig Metadaten über Serverkontakte erzeugen willst.
- **Wichtigster Abwägung:** Komfort durch Sync/Sharing vs. Abhängigkeit vom Anbieter-Backend und potenziell mehr Metadaten (Logins, Geräte, IP/Region, Subprozessoren).

## Sofortmaßnahmen
- **MFA aktivieren:** reduziert das Risiko bei kompromittiertem Master-Passwort oder Phishing des Login-Flows.
- **Password Iterations prüfen/erhöhen:** erschwert Offline-Bruteforce-Angriffe auf abgeleitete Schlüssel/Hashes (Abwägung: Login kann langsamer werden).
- **„Trusted Devices“ sparsam nutzen:** verhindert, dass MFA über lange Zeit auf einem Gerät ausgesetzt wird (Abwägung: häufiger MFA-Prompt).

## Entscheidungshilfe
- Wenn du **Sync über mehrere Geräte** brauchst, dann nutze LastPass mit aktivierter MFA (Abwägung: mehr Serverkontakte/Metadaten als bei rein lokalem Vault).
- Wenn du **Sharing (Shared Folders/Emergency Access)** verwenden willst, dann plane die Berechtigungen bewusst (Abwägung: mehr Komplexität, mehr potenzielle Fehlkonfigurationen).
- Wenn du **hohe Offline-Resilienz** brauchst, dann teste den Offline-Zugriff (Abwägung: lokale Cache-Daten müssen mit Geräte-Schutz abgesichert werden).
- Wenn du **PBKDF2-Iterationshärtung** willst, dann erhöhe „Password iterations“ in den Einstellungen (Abwägung: langsamere Logins auf schwächerer Hardware).
- Wenn du **minimale Telemetrie** willst, dann prüfe Opt-outs/Privacy-Optionen vor dem Rollout (Abwägung: weniger Diagnose-Daten bei Problemen).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | LastPass |
| Kategorie | Passwort-Manager |
| Website | https://www.lastpass.com/ |
| Quellcode | https://github.com/lastpass/lastpass-cli *(CLI; Haupt-Apps nicht als Repo angegeben)* |
| Lizenz | GPL-2.0-only *(für lastpass-cli); Haupt-Apps: Nicht angegeben* |
| Preismodell | mixed *(Free + paid Pläne laut Anbieter)* |
| Free Tier | yes |
| Open Source | partial *(OSS-CLI + OSS-Disclosure; Kernprodukt nicht vollständig offen)* |
| Konto erforderlich | yes |
| Telefon erforderlich | no *(z.B. SMS-Recovery optional, nicht zwingend)* |
| KYC erforderlich | no |
| Zahlungsabwicklung | Stripe *(laut Sub-Processor Disclosure)* |
| Jurisdiktion | Je nach Region (z.B. LastPass Ireland Limited oder LastPass US LP; Contracting Entities) |
| Logs | unknown |
| Retention | Backups bis 18 Monate; Free-Accounts: automatische Löschung nach 2 Jahren Inaktivität (laut TOMs) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.lastpass.com/legal-center/privacy-notice
- AGB/Terms: https://www.lastpass.com/legal-center/terms-of-service
- Transparency Report: https://www.lastpass.com/trust-center/guidelines-for-law-enforcement-requests
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- SOC 2 (laut Compliance Center im Trust Center)
- ISO/IEC 27001 (laut Compliance Center im Trust Center)
- ISO/IEC 27701 (laut Trust Center / Privacy)
- TRUSTe Enterprise Privacy & Data Governance Certification (laut Trust Center / Privacy)

**Daten-Notizen (kurz):**
- Vault-Daten werden laut Anbieter in einem **Zero-Knowledge / Local-Only** Modell clientseitig ver- und entschlüsselt; das Master-Passwort wird nicht unverschlüsselt gespeichert.
- Subprozessoren (u.a. für Hosting, Payment, Support/Telemetry) sind als Liste im Trust Center dokumentiert.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Kontodaten (z.B. E-Mail), Nutzungs-/Geräte- und Website-Daten laut Privacy Notice; Vault-Inhalte werden als verschlüsselte Daten gespeichert (Zero-Knowledge/Local-Only laut Whitepaper/TOMs).
- **Wofür:** Betrieb des Dienstes, Sicherheit/Account-Verifikation, Support/Verbesserung (Privacy Notice/Whitepaper).
- **Weitergabe/Subprozessoren:** Öffentliche Sub-Processor Disclosures im Trust Center (inkl. Kategorien wie Hosting, Payment, Support/Analytics).
- **Drittlandtransfer:** Mechanismen und globale Transfers werden in TOMs/Trust Center beschrieben (inkl. DPF-Hinweisen in TOMs).
- **Zahlungsabwicklung/Payment Processor:** Stripe ist als Subprozessor für Payment benannt.
- **Kontakt/DSAR/DPA:** Privacy Notice + „Your Privacy Choices“ im Trust Center; DPA ist im Legal Center verfügbar; Account-Löschung über „Delete your Account“-Seite laut TOMs.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Technical Whitepaper können anonymisierte Error-/Crash-Reports anfallen; außerdem sind Analytics-/Monitoring-Subprozessoren im Trust Center gelistet.
- **Abschaltbar?** Crash/Error-Reports: Opt-out wird im Technical Whitepaper erwähnt; für Analytics ist ein allgemeiner, produktweiter Opt-out-Menüpfad in den genutzten Quellen nicht eindeutig dokumentiert.
- **Wo (Menüpfad):** Crash/Error-Reports: Opt-out „bei Installation“ laut Technical Whitepaper; weitere Schalter: Unklar.

**Logs & Retention:**
- **Logging-Level:** unknown *(TOMs beschreiben Plattform-Logging/Alerting für Security Operations, aber ohne öffentliche Detailtiefe pro Logtyp).*
- **Aufbewahrung:** Backups laut TOMs bis 18 Monate; Löschung von Free-Accounts nach 2 Jahren Inaktivität (TOMs).
- **Lösch-/Opt-out-Optionen:** Account-Löschung ist laut TOMs möglich; Details zu Log-Retention pro Kategorie: Unklar.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Laut Anbieter „Local-Only/Zero-Knowledge“: Ver- und Entschlüsselung auf dem Gerät; Vault-Daten werden AES-256-verschlüsselt gespeichert/gesynct (Technical Whitepaper/TOMs/„How is LastPass secure?“).
- **KDF/Parameter/Schlüsselableitung:** PBKDF2-SHA256; Iterations sind laut Support-Doku mindestens 600.000 (für neue/aktualisierte Konten) und sind konfigurierbar (Technical Whitepaper + Support).
- **MFA/2FA/Passkeys/Hardware-Keys:** MFA ist verfügbar; Support-Doku nennt mehrere MFA-Optionen (u.a. Authenticator-Apps, Security Keys, Duo etc.).
- **Recovery/Account-Wiederherstellung:** Device Verification via E-Mail-Link (Technical Whitepaper); Account-Löschung/Recovery-Prozesse sind im Support Center beschrieben (TOMs verweisen auf Support).
- **Vuln-Handling / Security-Kontakt:** Responsible Disclosure / Vulnerability Disclosure ist im Trust Center dokumentiert; Bug-Bounty ist über Bugcrowd verlinkt (Anbieter-Link).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **MFA aktivieren** (Support-Pfad):  
   **Account Settings** → **Multifactor Options** → **Enabled = Yes**.  
   **Prüfen:** MFA wird beim nächsten Login abgefragt; „Default Multifactor Option“ ist gesetzt.
2) **Password iterations prüfen/setzen** (Mobile-App):  
   **Settings** → **Security** → **Password iterations** → Wert prüfen/setzen.  
   **Prüfen:** Wert ist gespeichert; Login dauert nicht unzumutbar lange.
3) **Trusted Devices bewusst handhaben**:  
   Wenn Geräte „trusted“ sind, kann MFA zeitweise übersprungen werden (Support: Trusted Devices).  
   **Prüfen:** Liste vertrauenswürdiger Geräte ist überschaubar; Laufzeiten sind nachvollziehbar.

**Stolpersteine:**
- Höhere Iterations können Logins auf schwachen/älteren Geräten verlangsamen (Abwägung: Härtung vs. UX/Performance).
- Recovery-Optionen (z.B. SMS/Recovery-Flows) können zusätzliche Identitätsdaten erfordern (Abwägung: Recovery vs. Metadaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- Vermeide optionale Identitätsbindung, wenn nicht nötig (z.B. keine SMS-Recovery aktivieren, sofern Alternativen ausreichen).
- Nutze „Trusted Devices“ restriktiv und nur auf Geräten mit starkem Geräteschutz (PIN/Biometrie + Vollverschlüsselung).
- Speichere besonders sensitive Informationen (z.B. Identitätsdokumente) nur, wenn du den lokalen Geräteschutz + Account-Schutz (MFA) konsequent durchziehst.  
**Abwägung:** weniger Komfort bei Recovery/Support und ggf. häufigere MFA-Prompts.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne Nutzungskontexte (z.B. eigener Browser/Profil nur für LastPass; keine parallelen Extensions, die Form-Fill beeinflussen).
- Erhöhe Iterations soweit praktikabel und teste Logins auf allen Geräten vor dem Rollout (Abwägung: Performance).
- Reduziere Angriffsfläche durch minimale Erweiterungen, Updates und konsequentes Patch-Management; Offline-Cache nur auf gehärteten Geräten nutzen.  
**Abwägung:** deutlicher Komfortverlust und mehr Betriebsaufwand.

</details>

## Features
- Passwort-Tresor (Vault) mit Save & Autofill
- Passwort-Sharing (inkl. Shared Folders)
- Emergency Access
- Multifactor Authentication (MFA/2FA)
- Passkeys speichern & verwalten
- Offline-Zugriff über lokal gecachten Vault-Stand (laut TOMs)

## Alternativen
- Bitwarden (Abwägung: anderer Betriebs-/Transparenzansatz je nach Einrichtung; Details pro Anbieter prüfen)
- 1Password (Abwägung: anderer Konto-/Sync-Ansatz; Details pro Anbieter prüfen)
- KeePassXC / KeePass (Abwägung: lokal/offline-first statt Cloud-Sync; Details pro Anbieter prüfen)

## Nicht gelöst / offene Punkte
- Detaillierte, öffentlich dokumentierte **Retention pro Log-Kategorie** (Betriebs-/Security-Logs) ist nicht klar beziffert.

## Quellen

- KeePassXC / KeePass (anderer Schwerpunkt: "lokal/offline-first; Details pro Anbieter prüfen)
- https://support.lastpass.com/help/about-password-iterations-lp030027
- [Privacy Notice (Legal Center)](https://www.lastpass.com/legal-center/privacy-notice)
- [Terms of Service (Legal Center)](https://www.lastpass.com/legal-center/terms-of-service)
- [Trust Center – Privacy](https://www.lastpass.com/trust-center/privacy)
- [Trust Center – Resources](https://www.lastpass.com/trust-center/resources)
- [Sub-processor disclosures (Trust Center)](https://www.lastpass.com/trust-center/sub-processor-disclosures)
- [Security architecture (Trust Center)](https://www.lastpass.com/trust-center/security-architecture)
- [Security vulnerability disclosure (Trust Center)](https://www.lastpass.com/trust-center/security-vulnerability-disclosure)
- [How is LastPass secure?](https://www.lastpass.com/how-is-lastpass-secure)
- [Technical Whitepaper v2.1 (PDF)](https://www.lastpass.com/-/media/88a42919fbc646e6966f64c37fbd29ee.pdf)
- [Technical & Organizational Measures v.5 (PDF)](https://www.lastpass.com/-/media/175854c49fcb489baeaa87e78579e28f.pdf)
- [Enable multifactor authentication for LastPass (Support)](https://support.lastpass.com/help/enable-multifactor-authentication-lp010002)
- [Supported multifactor authentication options (Support)](https://support.lastpass.com/help/supported-multifactor-authentication-options)
- [About password iterations (Support)](https://support.lastpass.com/help/about-password-iterations-lp030027)
- [Change your password iterations (Support)](https://support.lastpass.com/help/how-do-i-change-my-password-iterations-for-lastpass)
- [Open Source Software Disclosure (Legal Center)](https://www.lastpass.com/legal-center/open-source-disclosure)
- [Contracting Entities table (Legal Center)](https://www.lastpass.com/legal-center/contracting-entities)
- [LastPass CLI Quellcode (GitHub)](https://github.com/lastpass/lastpass-cli)
