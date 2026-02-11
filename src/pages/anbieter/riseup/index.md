---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Riseup"
url: "/anbieter/riseup/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von Riseup (Kategorie: E-Mail)."
provider: ""
name: "Riseup"
category: "E-Mail"
website: "https://riseup.net/"
repo: "https://github.com/riseupnet/riseup_help"
license: "Nicht angegeben"
policies: ""
privacy: "https://riseup.net/en/privacy-policy"
terms: "https://riseup.net/tos"
transparency: "Nicht angegeben"
warrant_canary: "https://riseup.net/en/canary"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "partial"
self_host_possible: "no"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA (Washington State)"
region: "us"
logs: "minimal"
retention: "specified"
retention_notes: "Transit-Logs täglich; Spam 7d; Papierkorb 21d"
data_notes: "Riseup nennt sehr geringe Datenerhebung (u.a. keine IP-Adress-Speicherung); für Mail-Weiterleitung fallen Metadaten-Logs (From/To) an, die laut Privacy Policy täglich gelöscht werden. Passwort-Recovery hängt an Recovery Code und/oder Recovery E-Mail (wenn gesetzt) – ohne das ist Recovery nicht möglich."
features: ""
alternatives: ""
payment_processors: "PayPal, Liberapay, Coinbase (für wiederkehrende BTC-Spenden)"
sources: ""
---
## Kurzprofil

Riseup ist ein Anbieter aus der Kategorie **E-Mail**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du E-Mail (IMAP/Webmail) nutzen willst und dabei Wert auf geringe Datenerhebung und ein spendenfinanziertes Modell legst.
- **Weniger geeignet wenn:** du eine „komfortable“ Konto-/Passwort-Wiederherstellung erwartest (ohne Recovery Code/Recovery E-Mail) oder 2FA für Webmail voraussetzt.
- **Wichtigster Abwägung:** mehr Eigenverantwortung bei Recovery (Recovery Code sicher verwahren) vs. weniger Identitäts-/Abrechnungsdaten.

## Sofortmaßnahmen
- **Recovery Code sofort offline sichern** (Passwortverlust ohne Recovery kann den Zugriff endgültig verhindern).
- **Persönlich verschlüsselte Speicherung aktivieren** (reduziert Klartextzugriff auf gespeicherte Inhalte, Abwägung: Recovery wird kritischer).
- **Service-spezifische Passwörter nutzen** (reduziert Schaden, falls ein einzelner Client kompromittiert wird).

## Entscheidungshilfe
- Wenn du **möglichst wenig Kontodaten** hinterlegen willst, dann ist ein Invite-/Spendenmodell relevant (Abwägung: Kontoerstellung und Support sind weniger „instant“).
- Wenn du **Passwortverlust abfangen** musst, dann sichere **Recovery Code** (und optional Recovery E-Mail) wie einen Schlüssel (Abwägung: Verlust = ggf. irreversibel).
- Wenn du **Webmail nutzt**, dann plane ohne Webmail-2FA (Abwägung: stärker auf starke Passwörter + Phishing-Schutz angewiesen).
- Wenn du **E2E zwischen Endgeräten** brauchst, dann nutze zusätzlich **OpenPGP** im Client (Abwägung: mehr Aufwand im Schlüssel-Handling).
- Wenn du **Tor-Ende-zu-Ende im Transportweg** willst, dann nutze die **.onion Mail-Server** für IMAP/POP3/SMTP (Abwägung: Einrichtung-/Performance-Aufwand).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Riseup |
| Kategorie | E-Mail |
| Website | https://riseup.net/ |
| Quellcode | https://github.com/riseupnet/riseup_help |
| Lizenz | Nicht angegeben |
| Preismodell | free |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | PayPal, Liberapay, Coinbase (für wiederkehrende BTC-Spenden) |
| Jurisdiktion | USA (Washington State) |
| Logs | minimal |
| Retention | Transit-Logs täglich; Spam 7d; Papierkorb 21d |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://riseup.net/en/privacy-policy
- AGB/Terms: https://riseup.net/tos
- Transparency Report: Nicht angegeben
- Warrant Canary: https://riseup.net/en/canary

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Riseup nennt sehr geringe Datenerhebung (u.a. keine IP-Adress-Speicherung); für Mail-Weiterleitung fallen Metadaten-Logs (From/To) an, die laut Privacy Policy täglich gelöscht werden. Passwort-Recovery hängt an Recovery Code und/oder Recovery E-Mail (wenn gesetzt) – ohne das ist Recovery nicht möglich.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** laut Privacy Policy u.a. Konto-Metadaten wie Registrierungsdatum (quartalsweise gerundet), Einladung/Account-Request-Verwaltung, Support-Tickets (wenn du welche erstellst) sowie technische Session-IDs; für Mail-Weiterleitung „From/To“-Metadaten (Transit-Logs).
- **Wofür:** Betrieb des Dienstes, Spam-/Missbrauchsschutz, Kontoverwaltung (z.B. Dormant Accounts) und Support.
- **Weitergabe/Subprozessoren:** keine öffentliche Liste in den genutzten Quellen gefunden (Riseup beschreibt, dass erhobene Daten nicht geteilt werden, nennt aber keine Subprozessorenliste).
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Spenden via PayPal/Liberapay; optionale wiederkehrende BTC-Spenden via Coinbase (für Spenden, nicht für Mail-Nutzung zwingend).
- **Kontakt/DSAR/DPA:** Kontakt über Helpdesk/Ticket-System und Kontaktseite (collective@riseup.net für allgemeine Anfragen; Support über support.riseup.net).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy: keine Third-Party-Cookies/Tracker; es wird eine Session-ID genutzt (technisch notwendig für Login/Sitzung).
- **Abschaltbar?** Für Session/Account-Betrieb nicht sinnvoll abschaltbar (Login-Funktion).
- **Wo (Menüpfad):** Browser → Cookies/Storage für riseup.net / mail.riseup.net prüfen.

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** Transit-Logs (From/To-Metadaten) laut Privacy Policy täglich gelöscht; Ordner-Retention: Spam 7 Tage, Papierkorb 21 Tage (automatische Löschung).
- **Lösch-/Opt-out-Optionen:** Konto kann über account.riseup.net geschlossen werden („Close my email account“); Ordner-Autolöschung ist fest definiert.

**Abwägung am Punkt:** Weniger Logs/Tracking reduziert Diagnose-/Missbrauchsanalysen; mehr Logs würde Metadatenrisiko erhöhen.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Riseup nennt Full-Disk-Encryption der Server und verschlüsselte Verbindungen zwischen Riseup-Servern; zusätzlich optional „personally encrypted storage“ pro Account (serverseitig). E2E zwischen Endgeräten ist damit nicht automatisch gelöst (für echte Ende-zu-Ende-Verschlüsselung brauchst du zusätzliche Inhaltsverschlüsselung wie OpenPGP im Client).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Für Roundcube-Webmail wird 2FA laut Doku aktuell nicht angeboten.
- **Recovery/Account-Wiederherstellung:** Recovery Code ist zentral (Riseup nennt ihn als zwingend); zusätzlich wird auf der Reset-Seite auch „Recovery E-Mail“ als Option erwähnt (wenn gesetzt). Ohne Recovery-Mechanismus kann Riseup nicht helfen.
- **Vuln-Handling / Security-Kontakt:** Security-Kontakt ist als verschlüsselte Mail beschrieben (Security-Seite), ohne formales Bug-Bounty/Ablauf in den genutzten Quellen.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Recovery Code erzeugen & offline sichern**  
   **Prüfen:** account.riseup.net → Recovery Code anzeigen/neu erzeugen → an getrenntem Ort speichern.
2) **Starkes Passwort + Phishing-Schutz anwenden**  
   **Prüfen:** in der Doku zu Phishing/Passwörtern genannte Checks umsetzen (Links nicht blind klicken, Domains prüfen).
3) **Mail-Client sauber anbinden (TLS) oder Onion-Einrichtung bewusst wählen**  
   **Prüfen:** im Client IMAP/SMTP mit sicheren Einstellungen verwenden; wenn Tor/.onion genutzt wird, die Onion-Service-Daten aus der Doku übernehmen.

**Stolpersteine:**
- **Recovery ist „hart“:** Wenn Recovery Code (und ggf. Recovery E-Mail) fehlt, kann der Accountzugriff praktisch verloren sein (Abwägung: weniger Identitätsdaten vs. keine „Support-Reset“-Hintertür).
- **Webmail ohne 2FA:** Schutz hängt stärker an Passwortqualität, Geräte-/Browserhygiene und Phishing-Vermeidung.

<details>
<summary>Profil B (Datensparsam)</summary>

- **Keine Recovery E-Mail setzen**, wenn du keine zusätzliche Identitäts-/Metadatenbindung willst (Abwägung: Recovery wird noch kritischer → Recovery Code muss sitzen).
- **Persönlich verschlüsselte Speicherung aktivieren** (Abwägung: Datenverlust-Risiko bei Recovery-Fehlern).
- **Service-spezifische Passwörter** für Clients nutzen (Abwägung: Verwaltung mehrerer Secrets).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Tor Onion Services für IMAP/POP3/SMTP** konfigurieren (Abwägung: mehr Einrichtung/Fehlersuche; ggf. Performance).
- **Getrennte Identitäten/Clients** (z.B. separates OS-Profil/VM nur für Mail) (Abwägung: hoher Aufwand).
- **Zusätzliche Inhaltsverschlüsselung (OpenPGP)** für Ende-zu-Ende einplanen (Abwägung: Schlüsselmanagement, Interop-Probleme).

</details>

## Features
- E-Mail via IMAP (zusätzlich POP3/SMTP) + Webmail
- Optional: „personally encrypted storage“ (serverseitige, pro-Account Verschlüsselung)
- Onion-Service-Zugriff auf IMAP/POP3/SMTP (Tor)
- Service-spezifische Passwörter (z.B. für Mail-Clients)
- Automatische Löschung bestimmter Ordner (Spam/Trash) nach festen Tagen

## Alternativen
- Proton Mail (E-Mail; anderer Abwägung: kommerzieller Betrieb & App-Ökosystem)
- Tuta Mail (E-Mail; anderer Abwägung: anderer Client-/Workflow-Ansatz)
- Posteo (E-Mail; anderer Abwägung: Bezahlkonto statt Invite-/Spendenmodell)

## Nicht gelöst / offene Punkte
- Keine öffentliche Subprozessoren-/Dienstleisterliste gefunden (relevant für DSGVO-/Vendor-Transparenz).
- Formaler Prozess für Vulnerability Disclosure (z.B. SECURITY.md) nicht sichtbar, nur allgemeiner Security-Kontakt.

## Quellen

- Optional: "„personally encrypted storage“ (serverseitige, pro-Account Verschlüsselung)
- Proton Mail (E-Mail; anderer Trade-off: "kommerzieller Betrieb & App-Ökosystem)
- Tuta Mail (E-Mail; anderer Trade-off: "anderer Client-/Workflow-Ansatz)
- Posteo (E-Mail; anderer Trade-off: "Bezahlkonto statt Invite-/Spendenmodell)
- https://help.riseup.net/en/about-us/contact
- [Riseup Privacy Policy](https://riseup.net/en/privacy-policy)
- [Riseup Terms of Service](https://riseup.net/tos)
- [Riseup E-Mail](https://riseup.net/en/email)
- [Mail Accounts (Settings)](https://riseup.net/en/email/settings/mail-accounts)
- [Reset Password (Account Settings)](https://account.riseup.net/reset_password)
- [2FA für Roundcube Webmail](https://riseup.net/en/email/webmail/2factorauth)
- [Onion Service configuration (IMAP/POP3/SMTP)](https://riseup.net/en/tor)
- [Donate](https://riseup.net/en/donate)
- [Security Contact](https://riseup.net/en/security)
- [Canary Statement](https://riseup.net/en/canary)
- [Support: Passwort ändern](https://support.riseup.net/help/en-us/1-e-mail/9-how-do-i-change-my-password)
- [Kontakt (Help Center)](https://help.riseup.net/en/about-us/contact)
