---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Keeper"
url: "/anbieter/keeper/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-17"
robots: "index,follow"
description: "Kurzprofil von Keeper (Kategorie: Passwort-Manager)."
provider: ""
name: "Keeper"
category: "Passwort-Manager"
website: "https://www.keepersecurity.com/"
repo: "https://github.com/Keeper-Security"
license: "Nicht angegeben (öffentliche Repos mit unterschiedlichen Lizenzen; Kernprodukt proprietär)"
policies: ""
privacy: "https://www.keepersecurity.com/privacypolicy.html"
terms: "https://www.keepersecurity.com/termsofuse.html"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "partial"
self_host_possible: "partial"
account_required: "yes"
phone_required: "unknown"
kyc_required: "unknown"
jurisdiction: "USA (Illinois, laut Terms)"
region: "us"
logs: "minimal"
retention: "unknown"
retention_notes: "Unklar; laut Terms: Datei-Records können nach 90 Tagen ohne Verlängerung gelöscht werden, Free-Accounts nach 12 Monaten Inaktivität"
data_notes: "Zero-Knowledge/Client-side Verschlüsselung laut Anbieter; Account-Daten: E-Mail/Username + ggf. Telefonnummer; Gerätedaten (Device-ID/OS/IP/Performance) können anfallen; Kreditkartendaten werden tokenisiert für Zahlungsabwicklung (nicht gespeichert); Datenregion (z.B. EU) ist bei Kontoerstellung wählbar."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Keeper ist ein Anbieter aus der Kategorie **Passwort-Manager**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen cloudbasierten Passwort-Manager mit **Zero-Knowledge/Client-side Verschlüsselung**, **2FA (inkl. Hardware-Key)** und **regionwählbarer Datenablage (z.B. EU)** nutzen willst.
- **Weniger geeignet wenn:** du **vollständig lokale Speicherung/Self-Hosting des Vaults** brauchst oder Telemetrie-/Log-Details **bis auf Feld-/Retention-Ebene** dokumentiert erwartest.
- **Wichtigster Abwägung:** **Komfort (Cloud-Sync, Gerätewechsel, Sharing)** vs. **Metadaten/Account-Spuren (IP/Device-Infos, Login-Events, ggf. Telefonnummer)**.

## Sofortmaßnahmen
- **2FA auf FIDO2/WebAuthn oder TOTP stellen**: reduziert Kontoübernahme-Risiko bei geleakten Passwörtern.  
- **Auto-Logout (Inactivity Timer) aktivieren und kurz halten**: senkt Risiko bei entsperrten Geräten/Sessions.  
- **Offline-Zugriff nicht „Always“, sondern begrenzt**: verringert lokale Datenexposition bei Geräteverlust.

## Entscheidungshilfe
- Wenn du **Cloud-Sync über mehrere Geräte** brauchst, dann nutze Keeper mit EU-Region (Abwägung: Account- und Geräte-Metadaten bleiben trotzdem möglich).  
- Wenn du **SIM-Swap-Risiko** reduzieren willst, dann nutze **FIDO2/WebAuthn oder TOTP statt SMS** (Abwägung: Hardware-Key/Authenticator müssen verfügbar sein).  
- Wenn du regelmäßig Geräte wechselst, dann aktiviere **2FA + Device Approval** (Abwägung: mehr Reibung beim Onboarding neuer Geräte).  
- Wenn du oft offline arbeitest, dann aktiviere **Offline Access** mit kurzer Laufzeit (Abwägung: Offline-Nutzung wird häufiger neu „geprimed“).  
- Wenn du „Stay Logged In“ nutzt, dann setze zwingend einen **Inactivity Logout Timer** (Abwägung: Komfort vs. Session-Risiko).  

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Keeper |
| Kategorie | Passwort-Manager |
| Website | https://www.keepersecurity.com/ |
| Quellcode | https://github.com/Keeper-Security |
| Lizenz | Nicht angegeben (öffentliche Repos mit unterschiedlichen Lizenzen; Kernprodukt proprietär) |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Nicht angegeben (Kreditkarte wird laut Anbieter „tokenized“ verarbeitet, nicht gespeichert) |
| Jurisdiktion | USA (Illinois, laut Terms) |
| Logs | minimal |
| Retention | Unklar; laut Terms: Datei-Records können nach 90 Tagen ohne Verlängerung gelöscht werden, Free-Accounts nach 12 Monaten Inaktivität |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.keepersecurity.com/privacypolicy.html
- AGB/Terms: https://www.keepersecurity.com/termsofuse.html
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- SOC 2 Type 2 (laut Keeper, Berichte über Trust Center / Anfrage möglich)
- ISO 27001 / 27017 / 27018 (laut Keeper)
- FIPS 140-3 Validierung (laut Keeper)

**Daten-Notizen (kurz):**
Zero-Knowledge/Client-side Verschlüsselung laut Anbieter; Account-Daten: E-Mail/Username + ggf. Telefonnummer; Gerätedaten (Device-ID/OS/IP/Performance) können anfallen; Kreditkartendaten werden tokenisiert für Zahlungsabwicklung (nicht gespeichert); Datenregion (z.B. EU) ist bei Kontoerstellung wählbar.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** E-Mail/Username, (laut Anbieter) Telefonnummer für Account-Verifikation und 2FA; Geräte-/Nutzungsdaten wie OS-Version, zufällig generierte Device-ID, System-Performance und IP-Adresse; Website-Traffic-Statistiken; bei Abo: Kreditkartendaten tokenisiert (nicht gespeichert).  
- **Wofür:** Authentifizierung/Zugang, Account-Sicherheit, Betrieb/Diagnose und Website-Administration; Kommunikation per E-Mail (inkl. Opt-out für Marketing).  
- **Weitergabe/Subprozessoren:** In der Privacy Policy wird „onward transfer“ im Rahmen des Data Privacy Framework erwähnt, aber keine öffentliche Subprozessorenliste gefunden.  
- **Drittlandtransfer:** Keeper nennt EU–US/UK/Swiss Data Privacy Framework (DPF) als Basis für Datenübermittlungen.  
- **Zahlungsabwicklung/Payment Processor:** Tokenisierung erwähnt, konkreter Dienstleister nicht benannt.  
- **Kontakt/DSAR/DPA:** Löschanfrage via E-Mail (deleteme@…); DPA-Download/Anforderung über GDPR-Seite.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy fallen beim Produktgebrauch Geräte-/Performance-Daten und IP-Adresse an; Website-Traffic wird geloggt.  
- **Abschaltbar?** Unklar (in Docs/Privacy keine klare Opt-out-Anleitung für Produkt-Diagnosedaten gefunden).  
- **Wo (Menüpfad):** Website: Cookie-Consent/Widerruf wird angeboten; App/Vault: nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** minimal  
- **Aufbewahrung:** Unklar; Terms nennen Löschungsschwellen für Inhalte: nach Abo-Ende ggf. Löschung von Records mit Dateien nach 90 Tagen ohne Verlängerung; Free-Accounts bei 12 Monaten Inaktivität.  
- **Lösch-/Opt-out-Optionen:** DSAR/Löschung via deleteme@…; Marketing-E-Mails abbestellbar (Unsubscribe-Link).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Keeper beschreibt Zero-Knowledge: Ver- und Entschlüsselung erfolgt lokal; Vault-Records nutzen AES-256 (u.a. GCM) und ECC für Key-Sharing.  
- **KDF/Parameter/Schlüsselableitung:** PBKDF2 mit **1.000.000 Iterationen** (Master-Passwort → Data Key).  
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA u.a. per SMS, TOTP-Apps sowie **FIDO2/WebAuthn Hardware-Keys**; zusätzlich Duo/RSA SecurID (teils Admin-Einrichtung).  
- **Recovery/Account-Wiederherstellung:** Master Password ist nicht durch Keeper wiederherstellbar; Export im Web Vault möglich; Löschung/DSAR per E-Mail.  
- **Vuln-Handling / Security-Kontakt:** Vulnerability Disclosure + Bug-Bounty (Bugcrowd) und Security-Kontakt per security@… beschrieben.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **2FA aktivieren** (TOTP oder FIDO2/WebAuthn), falls möglich ohne SMS.  
   **Wo:** Vault → Account-Dropdown (E-Mail) → **Settings → Security → Two-Factor Authentication**.  
   **Prüfen:** Login fordert zweiten Faktor; Recovery-Codes/Backup-Optionen geprüft.
2) **Auto-Logout/Inactivity Timer setzen** (auch wenn „Stay Logged In“ aktiv ist).  
   **Wo:** Web Vault/Desktop/Extension → Account-Dropdown → **Settings → Security** → „Auto-Logout / Inactivity Logout Timer“.  
   **Prüfen:** Session endet nach Inaktivität im Test.
3) **Offline Access nur wenn nötig aktivieren und begrenzen** (z.B. 7–14 Tage).  
   **Wo:** Vault → Account-Dropdown → **Settings → Security → Allow Offline Access** → Dauer wählen.  
   **Prüfen:** „Available Offline“-Indikator sichtbar; Ablauf nach gesetzter Dauer nachvollziehbar.

**Stolpersteine:**
- Offline Access erzeugt eine **lokale Kopie des verschlüsselten Vaults** (Abwägung: Verfügbarkeit vs. Risiko bei Geräteverlust).
- SMS-2FA bindet Telefonnummer (Abwägung: einfache Nutzung vs. SIM-Swap/Metadaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Datenregion bewusst wählen** (z.B. EU) bei Kontoerstellung.  
- **2FA ohne SMS** verwenden (TOTP/FIDO2), falls du Telefonnummern-Metadaten vermeiden willst.  
- **Sharing sparsam nutzen** (nur nötige Freigaben) und regelmäßig prüfen, welche Records geteilt sind.  
**Abwägung:** weniger Komfort bei „schnell teilen“ und bei recovery-nahen Optionen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **FIDO2/WebAuthn als 2FA** bevorzugen und „Stay Logged In“ deaktiviert lassen.  
- **Offline Access aus** oder auf **1 Tag** begrenzen, wenn das Gerät ein höheres Verlust-/Durchsuchungsrisiko hat.  
- **Getrennte Profile/Browser** für Vault-Nutzung (kein Autofill im Alltag), falls du Web-Tracking/Phishing-Flächen reduzieren willst.  
**Abwägung:** deutlich mehr Reibung und höhere Wahrscheinlichkeit, ausgesperrt zu sein, wenn 2FA/Keys fehlen.

</details>

## Features
- Zero-Knowledge / End-to-End Encryption (Client-side)
- 2FA inkl. TOTP und FIDO2/WebAuthn Hardware-Keys
- Offline-Zugriff mit einstellbarer Dauer
- Auto-Logout/Inactivity Timer + „Stay Logged In“ Option
- Export/Backup (CSV/PDF) im Web Vault
- Regionale Datenablage (z.B. EU/Frankfurt) wählbar

## Alternativen
- Bitwarden (Abwägung: anderer Lizenz-/Hosting-Ansatz; Details im jeweiligen Anbieterprofil prüfen)
- 1Password (Abwägung: anderes Konto-/Recovery-Modell; Details im jeweiligen Anbieterprofil prüfen)
- Proton Pass (Abwägung: anderes Konto-/Ökosystem; Details im jeweiligen Anbieterprofil prüfen)
- KeePassXC (Abwägung: lokal/offline-first; Sync/Sharing eigener Aufbau)

## Nicht gelöst / offene Punkte
- Öffentliche Subprozessoren-/Unterauftragsverarbeiter-Liste ist auf den genutzten Keeper-Seiten nicht eindeutig auffindbar.
- Opt-out/Consent für Produkt-Diagnosedaten/Telemetrie ist nicht klar dokumentiert (Stand: 2026-01-17).

## Quellen

- https://www.keepersecurity.com/vulnerability-disclosure-policy.html
- [Keeper Privacy Policy](https://www.keepersecurity.com/privacypolicy.html)
- [Keeper Terms of Use](https://www.keepersecurity.com/termsofuse.html)
- [Keeper Security (Security Disclosure)](https://www.keepersecurity.com/security.html)
- [Keeper GDPR Compliance / DPA / Datenregionen](https://www.keepersecurity.com/GDPR.html)
- [Keeper Encryption Model (Docs)](https://docs.keeper.io/en/enterprise-guide/keeper-encryption-model)
- [Two-Factor Authentication (Docs)](https://docs.keeper.io/en/enterprise-guide/two-factor-authentication)
- [Stay Logged In + Auto-Logout (Docs)](https://docs.keeper.io/en/user-guides/tips-and-tricks/stay-logged-in)
- [Vault Offline Access (Docs)](https://docs.keeper.io/en/user-guides/vault-offline-access)
- [Keeper Personal / Free Plan Übersicht (DE)](https://www.keepersecurity.com/de_DE/personal.html)
- [Vulnerability Disclosure Policy](https://www.keepersecurity.com/vulnerability-disclosure-policy.html)
- [Keeper Security auf GitHub](https://github.com/Keeper-Security)
