---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / AliasVault"
url: "/anbieter/aliasvault/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-05"
robots: "index,follow"
description: "Kurzprofil von AliasVault (Kategorie: Passwort-Manager)."
provider: ""
name: "AliasVault"
category: "Passwort-Manager"
website: "https://www.aliasvault.net/"
repo: "https://github.com/aliasvault/aliasvault"
license: "AGPL-3.0"
policies: ""
privacy: "https://www.aliasvault.net/privacy-policy"
terms: "https://www.aliasvault.net/terms-and-conditions"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "unknown"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "unknown"
phone_required: "Nein (laut Privacy Policy wird nur ein Username benötigt)."
kyc_required: "Nein"
jurisdiction: "Niederlande (Projektbetrieb laut Anbieter); Cloud-Serverstandort: Deutschland (EU)."
region: "eu"
logs: "unknown"
retention: "unknown"
retention_notes: "Nicht angegeben (Account-Löschung soll Daten entfernen; Server-Log-Retention nicht dokumentiert)."
data_notes: "Zero-Knowledge/E2E: Vault-Inhalte werden client-seitig verschlüsselt; für Cloud-Nutzung wird laut Anbieter nur ein Username benötigt. E-Mail-Aliase werden als Routing-„Claims“ serverseitig geführt; eingehende E-Mails werden laut Anbieter sofort verschlüsselt gespeichert."
features: ""
alternatives: ""
payment_processors: "Nicht angegeben (Stand: 2026-01-05 keine öffentlichen kostenpflichtigen Pläne)."
sources: ""
---
## Kurzprofil

AliasVault ist ein Anbieter aus der Kategorie **Passwort-Manager**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen Passwort-Manager mit integriertem E-Mail-Aliasing nutzen willst und dabei Wert auf client-seitige Verschlüsselung/Zero-Knowledge legst (laut Anbieter).
- **Weniger geeignet wenn:** du E-Mail-Aliase auch zum **Senden/Antworten** brauchst oder du regelmäßig sehr große E-Mails verarbeiten musst (laut Anbieter: Aliase sind derzeit receive-only, 10 MB Limit).
- **Wichtigster Abwägung:** **Komfort (Cloud + integrierter Mailserver)** vs. **Betriebsaufwand/Verantwortung beim Self-Hosting** (Updates, Mail-Einrichtung, Monitoring).

## Sofortmaßnahmen
- **2FA (TOTP) aktivieren**, falls du Cloud nutzt: reduziert Risiko bei gestohlenen Zugangsdaten.
- **Nicht-identifizierenden Username verwenden** (falls möglich): reduziert direkte Identitätsbindung im Account.
- **Export-/Backup-Routine festlegen:** weil der Anbieter bei verlorenem Master-Passwort keinen Vault-Inhalt wiederherstellen kann.

## Entscheidungshilfe
- Wenn du **Passwörter + Aliase + verschlüsselten E-Mail-Empfang** in einem System willst, dann nutze AliasVault (Abwägung: Aliase sind aktuell **nur Empfang**, keine Antworten; 10 MB Limit).
- Wenn du **keine Infrastruktur betreiben** willst, dann nutze die Cloud-Variante (Abwägung: du verlässt dich auf den Anbieterbetrieb/Serverstandort).
- Wenn du **maximale Kontrolle über Betrieb & Datenhaltung** willst, dann ist Self-Hosting relevant (Abwägung: Patch- und Betriebsaufwand liegt bei dir).
- Wenn du **Account-Recovery ohne Risiko** brauchst, dann plane vorab deine Recovery/Backups (Abwägung: strengere Zero-Knowledge-Modelle bedeuten oft weniger „Passwort vergessen“-Hilfe).
- Wenn du **möglichst wenig Tracking** erwartest, dann prüfe die Aussagen zu Analytics/Telemetrie (Abwägung: weniger Telemetrie kann Support/Diagnose erschweren).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | AliasVault |
| Kategorie | Passwort-Manager |
| Website | https://www.aliasvault.net/ |
| Quellcode | https://github.com/aliasvault/aliasvault |
| Lizenz | AGPL-3.0 |
| Preismodell | Der Kern von AliasVault ist laut Anbieter aktuell kostenlos (Cloud & Self-Hosting); optionale Premium-Features sind angekündigt, aber (Stand: 2026-01-05) nicht konkret bepreist. |
| Free Tier | Ja (Core-Funktionen kostenlos laut Anbieter). |
| Open Source | Ja (Quellcode öffentlich auf GitHub). |
| Konto erforderlich | Ja (Login/Account zur Nutzung der Vault; laut Privacy Policy reicht ein frei gewählter Username). |
| Telefon erforderlich | Nein (laut Privacy Policy wird nur ein Username benötigt). |
| KYC erforderlich | Nein |
| Zahlungsabwicklung | Nicht angegeben (Stand: 2026-01-05 keine öffentlichen kostenpflichtigen Pläne). |
| Jurisdiktion | Niederlande (Projektbetrieb laut Anbieter); Cloud-Serverstandort: Deutschland (EU). |
| Logs | Nicht angegeben |
| Retention | Nicht angegeben (Account-Löschung soll Daten entfernen; Server-Log-Retention nicht dokumentiert). |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.aliasvault.net/privacy-policy
- AGB/Terms: https://www.aliasvault.net/terms-and-conditions
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Zero-Knowledge/E2E: Vault-Inhalte werden client-seitig verschlüsselt; für Cloud-Nutzung wird laut Anbieter nur ein Username benötigt. E-Mail-Aliase werden als Routing-„Claims“ serverseitig geführt; eingehende E-Mails werden laut Anbieter sofort verschlüsselt gespeichert.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** laut Privacy Policy wird **nur ein Username** zur Authentifizierung benötigt; Vault-Inhalte inkl. E-Mails sind Ende-zu-Ende verschlüsselt.
- **Wofür:** Username für Authentifizierung; E-Mail-Alias-„Name/Claim“ für Routing eingehender E-Mails (bei Cloud).
- **Weitergabe/Subprozessoren:** nicht als Liste angegeben; Website-Analytics laut Anbieter über **self-hosted Plausible** (anonymisiert, auf eigenen Servern).
- **Drittlandtransfer:** nicht konkret beschrieben; Cloud-Hosting laut Anbieter **in Deutschland (EU)**.
- **Zahlungsabwicklung/Payment Processor:** nicht angegeben (Core kostenlos; Premium angekündigt).
- **Kontakt/DSAR/DPA:** Kontakt per E-Mail/Contact-Seite; Account-Löschung über den Client möglich, alternativ Löschanfrage per Support.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Website: laut Privacy Policy ja (self-hosted Plausible, anonymisiert). Client-Apps/Vault: Unklar.
- **Abschaltbar?** Nicht angegeben.
- **Wo (Menüpfad):** Nicht angegeben (in App nach „Settings“/„Privacy“/„Diagnostics“ suchen).

**Logs & Retention:**
- **Logging-Level:** Nicht angegeben
- **Aufbewahrung:** Nicht angegeben (Account-Löschung soll Daten löschen; Server-Log-Retention unklar)
- **Lösch-/Opt-out-Optionen:** Account-Löschung im offiziellen Client beschrieben; Telemetrie-Opt-out nicht dokumentiert.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** laut Doku/Website client-seitige Verschlüsselung (Zero-Knowledge) und **AES-256-GCM** für Vault-Daten.
- **KDF/Parameter/Schlüsselableitung:** laut Architektur-Doku **Argon2id** (lokal) zur Schlüsselableitung; Authentifizierung über **SRP**.
- **MFA/2FA/Passkeys/Hardware-Keys:** laut Architektur-Doku optional **2FA via TOTP**; Passkeys über WebAuthn (virtueller Authenticator, laut Doku).
- **Recovery/Account-Wiederherstellung:** laut Privacy Policy: bei verlorenem Master-Passwort kann der Anbieter Vault-Inhalte nicht wiederherstellen.
- **Vuln-Handling / Security-Kontakt:** Responsible Disclosure Prozess mit security@support.aliasvault.net; Hall-of-Fame/Advisories werden verlinkt.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (2FA/MFA), falls genutzt.  
   **Prüfen:** 2FA ist sichtbar „aktiv“ + TOTP-App funktioniert im Test-Login.
2) **Auto-Lock/Timeout** sinnvoll setzen (Client/Extension, falls Option vorhanden).  
   **Prüfen:** Timeout-Wert sichtbar, greift im Test (Bildschirm sperren → Re-Lock).
3) **Analytics/Telemetry deaktivieren**, falls Schalter existiert.  
   **Prüfen:** Schalter „aus“ + dokumentiert (oder im Privacy-Text erklärt).

**Stolpersteine:**
- **Master-Passwort verloren = Inhalte weg** (Abwägung: Zero-Knowledge vs. Recovery-Hilfe).
- **E-Mail-Aliase derzeit receive-only** (Abwägung: Anti-Missbrauch vs. Reply-Workflows).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze einen **nicht-identifizierenden Username** (kein Klarnamen-/Primärmail-Handle, falls möglich).
- Nutze Aliase konsequent pro Dienst (damit Leaks besser trennbar bleiben).
- Lege eine **Offline-Export/Backup-Routine** fest (z.B. verschlüsselt, getrennt vom Hauptgerät).
**Abwägung:** mehr Eigenverantwortung bei Recovery/Support.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Self-Hosting mit **separatem Host/VM** und minimierten Zugriffswegen (wenn du den Betriebsaufwand tragen kannst).
- Trenne Nutzung in **dedizierte Browser-Profile** (z.B. Vault/Extension nur dort) zur Reduktion von Cross-Tracking.
- Patch-Disziplin erhöhen: Updates zeitnah einspielen (insbesondere bei Self-Hosting).
**Abwägung:** deutlicher Komfortverlust, höhere Komplexität (Betrieb, Monitoring, Updates).

</details>

## Features
- Passwort- und Passkey-Speicher (E2E/Zero-Knowledge laut Anbieter)
- Alias-/Identitätsgenerator (separate Identitäten für Dienste)
- Built-in E-Mail-Server für Alias-Adressen (Empfang im Client, Inhalte verschlüsselt)
- Cloud-Nutzung oder Self-Hosting per Docker
- Browser-Extensions + Mobile Apps (laut Website/Repo)
- Optionales 2FA via TOTP (laut Doku)

## Alternativen
- Bitwarden (Passwort-Manager; Abwägung: E-Mail-Aliasing separat lösen)
- KeePassXC (lokale Passwort-Datenbank; Abwägung: Sync/Sharing je nach Einrichtung extra Aufwand)
- Proton Pass (Passwort-Manager; Abwägung: andere Produkt-Schwerpunkte/Account-Ökosystem)
- SimpleLogin (E-Mail-Aliasing; Abwägung: Passwortverwaltung separat)

## Nicht gelöst / offene Punkte
- Unklar, ob es eine öffentliche **Subprozessoren-/DPA-Liste** gibt. 
- Unklar, ob und welche **Diagnose-/Telemetriedaten** in den Client-Apps erhoben werden. 
- **Server-Log-Retention** (Cloud) ist nicht dokumentiert. 

## Quellen

- Bitwarden (Passwort-Manager; Trade-off: "E-Mail-Aliasing separat lösen)
- KeePassXC (lokale Passwort-Datenbank; Trade-off: "Sync/Sharing je nach Setup extra Aufwand)
- Proton Pass (Passwort-Manager; Trade-off: "andere Produkt-Schwerpunkte/Account-Ökosystem)
- SimpleLogin (E-Mail-Aliasing; Trade-off: "Passwortverwaltung separat)
- https://github.com/aliasvault/aliasvault
- [AliasVault – Website](https://www.aliasvault.net/)
- [Privacy Policy](https://www.aliasvault.net/privacy-policy)
- [Terms and Conditions](https://www.aliasvault.net/terms-and-conditions)
- [Contact Us](https://www.aliasvault.net/contact)
- [Responsible Disclosure](https://www.aliasvault.net/responsible-disclosure)
- [AliasVault Documentation – Home](https://docs.aliasvault.net/)
- [AliasVault Documentation – Architecture](https://docs.aliasvault.net/architecture/)
- [GitHub Quellcode: aliasvault/aliasvault](https://github.com/aliasvault/aliasvault)

