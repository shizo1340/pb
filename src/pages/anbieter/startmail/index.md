---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / StartMail"
url: "/anbieter/startmail/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-09"
robots: "index,follow"
description: "Kurzprofil von StartMail (Kategorie: E-Mail)."
provider: ""
name: "StartMail"
category: "E-Mail"
website: "https://www.startmail.com/"
repo: "Nicht angegeben"
license: "Nicht angegeben (proprietär; laut Whitepaper: Closed Source)"
policies: ""
privacy: "https://www.startmail.com/privacy"
terms: "https://www.startmail.com/terms-of-service"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "no"
self_host_possible: "no"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Niederlande (StartMail B.V., Zeist)"
region: "eu"
logs: "minimal"
logs_notes: "minimal (7 Tage SMTP-Metadaten-Logs laut Privacy Policy)"
retention: "verylong"
retention_notes: "SMTP-Metadaten-Logs: 7 Tage; Backups: max. 3 Tage; Support-Kommunikation: max. 2 Jahre"
retention_max_days: "730"
data_notes: "E-Mail-Inhalte im „User Vault“ verschlüsselt (Server in NL). Für Betrieb/Spam-Schutz: 7 Tage Logs mit SMTP-Metadaten. Zahlung über Stripe/PayPal + Abo-Management via Chargebee (teils USA)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

StartMail ist ein Anbieter aus der Kategorie **E-Mail**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen **bezahlten E-Mail-Dienst** mit Webmail + IMAP nutzen willst und Wert auf **Alias-Workflows** sowie **OpenPGP im Webmail** legst.
- **Weniger geeignet wenn:** du **Free-Tier** brauchst oder **Open-Source** als Pflichtkriterium setzt (StartMail beschreibt den Dienst als „closed source“ im Whitepaper).
- **Wichtigster Abwägung:** **Komfort (Webmail, Recovery, IMAP-Sync) vs. Metadaten & Schlüssel-/Session-Risiken** (z.B. 7 Tage SMTP-Metadaten-Logs; Keys/Decryption im Account-Kontext).

## Sofortmaßnahmen
- **2FA aktivieren (TOTP) + Backup-Code offline sichern** → reduziert Kontoübernahme bei Passwort-Leak.
- **Recovery-Code speichern & Recovery-Mail bewusst wählen** → verhindert Account-Lockout (Abwägung: Recovery erhöht ggf. Identitätsbindung).
- **IMAP nur mit Gerätepasswörtern nutzen** → Clients bekommen nicht dein Hauptpasswort; Gerätezugriffe lassen sich einzeln entziehen.

## Entscheidungshilfe
- Wenn du **Webmail nutzt**, dann aktiviere **2FA (TOTP)** in den Login-Einstellungen (Abwägung: du brauchst zusätzlich ein Authenticator-Gerät).
- Wenn du **IMAP in Mail-Clients** nutzen willst, dann erstelle **Gerätepasswörter** und entferne verlorene Geräte in „Trusted devices/IMAP“ (Abwägung: lokale Mail-Kopien liegen dann auch auf Endgeräten).
- Wenn du **Metadaten minimieren** willst, dann halte **Remote Content blockiert** (Standard) und aktiviere kein automatisches Laden (Abwägung: weniger Komfort bei Newslettern/HTML-Mails).
- Wenn du **Recovery ohne Zweitadresse** willst, dann nutze **Recovery Code** statt Recovery E-Mail (Abwägung: Verlust des Codes = hoher Lockout-Risiko).
- Wenn du **PGP außerhalb des Webmails** nutzen willst, dann exportiere Keys und nutze einen lokalen Client (Abwägung: mehr Einrichtung/Key-Management auf eigenen Geräten).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | StartMail |
| Kategorie | E-Mail |
| Website | https://www.startmail.com/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben (proprietär; laut Whitepaper: Closed Source) |
| Preismodell | paid |
| Free Tier | no (7 Tage Testphase laut Anbieter) |
| Open Source | no |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Stripe, PayPal (Payment) + Chargebee (Subscription Management) |
| Jurisdiktion | Niederlande (StartMail B.V., Zeist) |
| Logs | minimal (7 Tage SMTP-Metadaten-Logs laut Privacy Policy) |
| Retention | SMTP-Metadaten-Logs: 7 Tage; Backups: max. 3 Tage; Support-Kommunikation: max. 2 Jahre |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.startmail.com/privacy
- AGB/Terms: https://www.startmail.com/terms-of-service
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben (im Whitepaper werden unabhängige Audits erwähnt, aber ohne öffentlich verlinkte Berichte)

**Daten-Notizen (kurz):**
E-Mail-Inhalte werden in einem verschlüsselten „User Vault“ auf Servern in den Niederlanden gespeichert. Für Betrieb/Spam-Schutz nennt StartMail 7 Tage Logs mit SMTP-Metadaten. Zahlungen laufen über Stripe/PayPal, Abo-Verwaltung über Chargebee; diese Daten können (je nach Anbieter) außerhalb der EU verarbeitet werden.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Accountdaten (E-Mail-Adresse, Passwort), Zahlungs-/Abo-Daten über Stripe/PayPal/Chargebee, Support-Kommunikation (Zendesk), sowie Betriebsdaten inkl. SMTP-Metadaten-Logs (siehe unten).
- **Wofür:** Bereitstellung des Dienstes, Abrechnung/Abo-Verwaltung, Spam-/Phishing-Abwehr und Troubleshooting, Support.
- **Weitergabe/Subprozessoren:** Stripe, PayPal (Payment), Chargebee (Abo-Management), Zendesk (Support), hCaptcha (Spam-Schutz), Matomo (anonyme Statistik, selbst gehostet) – jeweils laut Privacy Policy / Help Center.
- **Drittlandtransfer:** Payment-/Subscription-Daten werden laut Privacy Policy bei Stripe/Chargebee in den USA verarbeitet; Absicherung über SCCs wird genannt.
- **Zahlungsabwicklung/Payment Processor:** Stripe, PayPal; Subscription Management via Chargebee.
- **Kontakt/DSAR/DPA:** Kontakt laut Privacy Policy: legal@startmail.com (für Fragen zu Privacy/Datenauskunft).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Auf der Website wird Matomo für anonyme Statistik genannt; zusätzlich setzt Matomo laut Help Center ein persistentes Cookie („_pk_id“) für wiederkehrende Besucher.
- **Abschaltbar?** Nicht angegeben (im Webmail sind Session-/funktionale Cookies für Betrieb/Features vorgesehen).
- **Wo (Menüpfad):** Nicht angegeben (Analytics ist laut Anbieter Website-/Marketing-bezogen, nicht als App-Schalter dokumentiert).

**Logs & Retention:**
- **Logging-Level:** minimal (laut Privacy Policy: 7 Tage Logs)
- **Aufbewahrung:** 7 Tage SMTP-Metadaten-Logs (Privacy Policy); Backups max. 3 Tage (Terms/Privacy); Support-Kommunikation max. 2 Jahre (Privacy Policy).
- **Lösch-/Opt-out-Optionen:** „Deleted is Deleted“: Gelöschte Mail sofort aus dem Vault; verschlüsselte Backup-Kopie max. 3 Tage. Account-Daten werden nach Beendigung gelöscht (laut Privacy Policy).

**Abwägung am Punkt:** Weniger Logs erschwert Spam-/Betriebsanalyse; mehr Logs erhöhen Metadatenrisiko (z.B. SMTP-Absender/Empfänger + Remote-Server-IP in Logs).

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Transport per TLS; Mailbox/Ordner in „User Vault“ verschlüsselt, Vault wird beim Login geöffnet (Privacy Policy). OpenPGP wird unterstützt; private Schlüssel zusätzlich mit Passphrase verschlüsselt (Privacy Policy / Support).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA via TOTP (Support). Passkeys/Hardware-Keys: Nicht angegeben.
- **Recovery/Account-Wiederherstellung:** Recovery E-Mail + One-time Recovery Code (Support). Zusätzlich 2FA-Backup-Code für Notfälle (Support).
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben (in Terms wird abuse@startmail.com für Konto-Missbrauch genannt; ein dedizierter Vulnerability-Disclosure-Prozess ist nicht dokumentiert).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **2FA aktivieren (TOTP)**  
   **Menüpfad:** Webmail → **Settings** → *Account settings* → *Login settings* → *Two-factor authentication* → **Enable**  
   **Prüfen:** 2FA ist „Enabled“ + Backup-Code sicher gespeichert.
2) **Recovery sauber einrichten (und bewusst wählen)**  
   **Menüpfad:** Webmail → **Settings** → **Generate recovery code** (und/oder) **Recovery E-Mail Address** bestätigen  
   **Prüfen:** Recovery-Code offline vorhanden **oder** Recovery-E-Mail ist verifiziert.  
   **Abwägung:** Recovery-E-Mail erleichtert Wiederherstellung, erhöht aber ggf. Verknüpfbarkeit zu einem anderen Konto.
3) **IMAP nur mit Gerätepasswörtern nutzen** *(wenn du Clients nutzt)*  
   **Menüpfad:** Webmail → **Settings** → **Trusted devices/IMAP** → IMAP aktivieren → **ADD DEVICE**  
   **Prüfen:** Client nutzt das Gerätepasswort (nicht das Account-Passwort); bei Geräteverlust: **Remove device**.

**Stolpersteine:**
- **Remote Content** ist standardmäßig blockiert (Privacy Policy). Wenn du automatisches Laden aktivierst, steigt das Tracking-Risiko durch E-Mail-Absender.
- **PGP-Passphrase vs. Account-Passwort:** PGP-Passphrase kann getrennt geändert werden; Passwortwechsel ändert die PGP-Passphrase nicht automatisch (Help Center).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Recovery eher „Code“ statt Zweitadresse**, wenn du Identitätsbindung reduzieren willst.  
  **Abwägung:** Code-Verlust = hoher Lockout-Risiko.
- **Remote Content weiter blockiert lassen** (keine „Always load remote content“-Option aktivieren).  
  **Abwägung:** weniger Komfort bei bildlastigen E-Mails.
- **Aliase konsequent nutzen**, damit Hauptadresse seltener auftaucht (Support: Burner aliases / Aliases).  
  **Abwägung:** mehr Ordnung/Filter-Regeln nötig.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Webmail in separatem Browser-Profil/Container** nutzen (Isolation von Cookies/Sessions).  
  **Abwägung:** mehr Reibung im Alltag.
- **IMAP vermeiden**, wenn lokale Kopien auf Endgeräten zu riskant sind.  
  **Abwägung:** weniger Flexibilität bei Clients/Offline.
- **PGP-Keys exportieren und lokale Schlüsselhygiene ernst nehmen** (z.B. Export-Datei nach Import wieder löschen – Help Center).  
  **Abwägung:** deutlich mehr Key-Management-Aufwand.

</details>

## Features
- Webmail + IMAP (kein POP3)
- 2FA (TOTP) + Backup-Code
- OpenPGP im Webmail (Keys im Account verwaltet, Export möglich)
- Unbegrenzte Aliase + „Burner Alias“ (automatisch nach 1h gelöscht)
- Remote Content in E-Mails standardmäßig blockiert

## Alternativen
- [Proton Mail](/anbieter/proton-mail/) – anderer Betreiber & anderer Funktionsmix (Abwägung: anderes Konto-/Client-Modell)
- [Tuta](/anbieter/tuta/) – anderer Betreiber & anderes Feature-Set (Abwägung: anderer Umgang mit Clients/Interoperabilität)
- [mailbox.org](/anbieter/mailbox-org/) – anderer Betreiber & Paketumfang (Abwägung: andere Admin-/Groupware-Schwerpunkte)
- [Fastmail](/anbieter/fastmail/) – anderer Betreiber & Fokus (Abwägung: anderer Privacy-/Feature-Fokus)

## Nicht gelöst / offene Punkte
- Unabhängige Audits werden im Whitepaper erwähnt, aber ohne öffentlich verlinkte Auditberichte.

## Quellen

- Proton Mail (E-Mail) — anderer Betreiber & anderer Funktionsmix (Trade-off: "anderes Konto-/Client-Modell)
- Tuta (E-Mail) — anderer Betreiber & anderes Feature-Set (Trade-off: "anderer Umgang mit Clients/Interoperabilität)
- Mailbox.org (E-Mail) — anderer Betreiber & Paketumfang (Trade-off: "andere Admin-/Groupware-Schwerpunkte)
- Fastmail (E-Mail) — anderer Betreiber & Fokus (Trade-off: "anderer Privacy-/Feature-Fokus)
- [StartMail Privacy Policy](https://www.startmail.com/privacy)
- [StartMail Terms of Service](https://www.startmail.com/terms-of-service)
- [StartMail Signup / Preise](https://www.startmail.com/signup)
- [Security Whitepaper (Download-Seite)](https://www.startmail.com/whitepaper)
- [Support: "External scripts on some pages](https://support.startmail.com/hc/en-us/articles/360013726458-External-scripts-on-some-pages)
- [StartMail Privacy Policy](https://www.startmail.com/privacy)
- [StartMail Terms of Service](https://www.startmail.com/terms-of-service)
- [StartMail Signup / Preise](https://www.startmail.com/signup)
- [Security Whitepaper (Download-Seite)](https://www.startmail.com/whitepaper)
- [Support: Two-factor authentication (2FA)](https://support.startmail.com/hc/en-us/articles/360006682158-Two-factor-authentication-2FA)
- [Support: Configure a trusted device / IMAP password](https://support.startmail.com/hc/en-us/articles/360006536217-Configure-a-trusted-device-IMAP-password)
- [Support: One-time Recovery Code](https://support.startmail.com/hc/en-us/articles/360012717758-One-time-Recovery-Code)
- [Support: I forgot my password - now what?](https://support.startmail.com/hc/en-us/articles/360007388898-I-forgot-my-password-now-what)
- [Support: Cookies](https://support.startmail.com/hc/en-us/articles/360006636657-Cookies)
- [Support: Burner aliases](https://support.startmail.com/hc/en-us/articles/18157024221469-Burner-aliases)
- [Support: Encrypting and decrypting messages](https://support.startmail.com/hc/en-us/articles/360006843058-Encrypting-and-decrypting-messages)
- [Support: External scripts on some pages](https://support.startmail.com/hc/en-us/articles/360013726458-External-scripts-on-some-pages)
