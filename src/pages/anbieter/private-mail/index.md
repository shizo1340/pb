---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Private-Mail"
url: "/anbieter/private-mail/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von Private-Mail (Kategorie: E-Mail)."
provider: ""
name: "Private-Mail"
category: "E-Mail"
website: "https://privatemail.com/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://privatemail.com/privacy.php"
terms: "https://privatemail.com/terms.php"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "unknown"
self_host_possible: "no"
account_required: "yes"
phone_required: "unknown"
kyc_required: "unknown"
jurisdiction: "Vereinigte Staaten (PrivateMail LLC)"
region: "other"
logs: "minimal"
retention: "unknown"
retention_notes: "Nicht angegeben (Webserver-Logs: „regularly purged“)"
data_notes: "OpenPGP-Schlüssel werden lokal gespeichert; Anbieter nennt keinen Zugriff auf verschlüsselte Inhalte. Website nutzt u.a. Google Analytics; beim Kauf kann IP zur Betrugsprävention geprüft werden."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Private-Mail ist ein Anbieter aus der Kategorie **E-Mail**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du OpenPGP-basierte Ende-zu-Ende-Verschlüsselung nutzen willst und Key-Management (Schlüssel/Passphrasen/Backups) selbst sauber umsetzen kannst.
- **Weniger geeignet wenn:** du möglichst wenig Komplexität bei Verschlüsselung willst oder US-Jurisdiktion/Hosting für deinen Kontext ausschließen möchtest.
- **Wichtigster Abwägung:** **E2E durch OpenPGP + lokale Schlüsselablage vs. Aufwand/Fehleranfälligkeit beim Key-Management** (und je nach Nutzung weiterhin Metadaten/Standard-E-Mail-Verhalten).

## Sofortmaßnahmen
- **2FA aktivieren:** reduziert Risiko durch Passwort-Leaks und Phishing-Kompromittierung.
- **OpenPGP-Key exportieren & sicher sichern:** verhindert Lockout bei Gerätewechsel/Reset.
- **Mobile Contacts/Calendar Sync nur bei Bedarf aktivieren:** reduziert zusätzliche Sync-Metadaten und Angriffsfläche.

## Entscheidungshilfe
- Wenn du vertrauliche Inhalte per E-Mail senden willst, dann aktiviere OpenPGP in den Einstellungen und arbeite konsequent mit Schlüssel-Austausch (Abwägung: mehr Einrichtung-Aufwand, Plain-Text-Einschränkungen bei OpenPGP).
- Wenn du Identitätsbindung bei der Anmeldung minimieren willst, dann prüfe den Zahlungsweg (Abwägung: laut Anbieter kann die IP beim Kauf zur Betrugsprävention geprüft werden).
- Wenn du Files mit Dritten teilst, dann nutze SecureShare mit **Passwort-basiertem** oder **Key-basiertem** Zugriff (Abwägung: Passwort muss separat und sicher übermittelt werden).
- Wenn du Kontakte/Kalender nicht zwingend brauchst, dann lasse Sync-Funktionen deaktiviert (Abwägung: weniger Komfort auf Mobilgeräten).
- Wenn du Apps nutzt, dann plane Key-Backups und Gerätehygiene (PIN/Lock, Updates) als Teil des Einrichtungen ein (Abwägung: mehr Eigenverantwortung, weniger „Plug & Play“).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Private-Mail |
| Kategorie | E-Mail |
| Website | https://privatemail.com/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | paid |
| Free Tier | no |
| Open Source | unknown |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Nicht angegeben (Zahlungsdienstleister nicht öffentlich benannt); laut Anbieter u.a. Kryptowährungen möglich |
| Jurisdiktion | Vereinigte Staaten (PrivateMail LLC) |
| Logs | minimal |
| Retention | Nicht angegeben (Webserver-Logs: „regularly purged“) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://privatemail.com/privacy.php
- AGB/Terms: https://privatemail.com/terms.php
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben (keine verlinkten Auditberichte gefunden)

**Daten-Notizen (kurz):**
OpenPGP-Schlüssel werden lokal gespeichert; Anbieter nennt keinen Zugriff auf verschlüsselte Inhalte. Website nutzt u.a. Google Analytics; beim Kauf kann IP zur Betrugsprävention geprüft werden.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** laut Privacy Policy u.a. Kontaktdaten/Account-Daten, Zahlungs-/Abrechnungsdaten (bei Kauf), Geräte-/Browserdaten, IP-Adresse/Netzwerkdaten sowie Cookie-/Analytics-Daten; zusätzlich nennt der Anbieter eine IP-Prüfung beim Kauf zur Betrugsprävention.
- **Wofür:** Bereitstellung/Betrieb der Dienste, Abrechnung/Vertragsabwicklung, Sicherheit/Fraud-Prevention sowie (laut Privacy Policy) auch Marketing/Kommunikation.
- **Weitergabe/Subprozessoren:** Kategorien werden beschrieben (z.B. Zahlungsabwicklung/„merchant partners“, Dienstleister/Partner), aber keine öffentliche Subprozessorenliste genannt.
- **Drittlandtransfer:** Anbieter nennt US-Bezug (Unternehmen und Hosting in den USA) und beschreibt Datenübertragung/Verarbeitung unter US-Recht, auch für Nutzer außerhalb der USA.
- **Zahlungsabwicklung/Payment Processor:** „merchant partners“/Zahlungsabwicklung wird erwähnt, konkrete Anbieter werden nicht öffentlich benannt.
- **Kontakt/DSAR/DPA:** Kontaktmöglichkeit über in der Privacy Policy genannte Kontaktadresse; DPA/Subprozessorenliste nicht angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Auf der Website nennt der Anbieter Google Analytics (Cookies/Tracking im Web-Kontext).
- **Abschaltbar?** Über Browser-/Cookie-Blocking und (laut Privacy Policy) Opt-out-Mechanismen für Analytics möglich; für Apps/Client-Telemetrie ist keine explizite Aussage als zentrale Policy gefunden.
- **Wo (Menüpfad):** Website/Browserebene (Cookie-/Tracking-Kontrolle); in den App-/Account-Einstellungen nicht dokumentiert.

**Logs & Retention:**
- **Logging-Level:** minimal (laut Privacy Policy u.a. Apache-Webserver-Logs; „No usernames or passwords are logged“; laut Anbieter zudem „No Inbox IP Logging“; IP kann beim Kauf zur Betrugsprävention geprüft werden).
- **Aufbewahrung:** Nicht angegeben (Webserver-Logs werden laut Privacy Policy „regularly purged“).
- **Lösch-/Opt-out-Optionen:** Unklar (keine konkrete Retention-/Löschfrist oder Self-Service-Flow als Policy gefunden).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Anbieter beschreibt OpenPGP für E-Mail sowie clientseitige Verschlüsselung mit lokaler Schlüsselablage (Schlüssel nicht serverseitig gespeichert; Anbieter nennt keinen Zugriff auf verschlüsselte Inhalte).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA wird dokumentiert (QR-Code/Secret Key via Authenticator-App, PIN-basiert).
- **Recovery/Account-Wiederherstellung:** Unklar (kein zentraler Recovery-Prozess als Policy gefunden; Support/Account-Portal existiert).
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben (kein dedizierter Responsible-Disclosure-Prozess als eigene Seite gefunden).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren (2FA)**  
   **Menüpfad:** `Settings` → `Two Factor Verification` → `Enable` → QR-Code mit Authenticator-App scannen → PIN eintragen → speichern.  
   **Prüfen:** Login erfordert zusätzlich den Einmalcode.

2) **OpenPGP aktivieren + Key-Backup einplanen**  
   **Menüpfad (Webmail):** `Settings` → `OpenPGP` → OpenPGP aktivieren → `Generate new Key`.  
   **Prüfen:** Public/Private Key ist sichtbar; Testmail lässt sich signieren/verschlüsseln.  
   **Stolperstein:** OpenPGP-E-Mails werden laut Knowledgebase als Plain-Text verarbeitet (HTML/Formatierung kann eingeschränkt sein).

3) **Sync-/Sharing-Funktionen bewusst nutzen**  
   - **Kontakte/Kalender-Sync:** nur aktivieren, wenn du es wirklich brauchst (laut Anbieter sind Mobile-Sync-Optionen standardmäßig deaktiviert und müssen aktiv eingeschaltet werden).  
   - **SecureShare:** für externe Empfänger „Password based“ nutzen und das Passwort getrennt vom Link übermitteln.  
   **Prüfen:** Empfänger kann Datei/Link öffnen; Entschlüsselung klappt mit Passwort oder Key.

**Stolpersteine:**
- Key-Management ist dein Risiko: Verlust der Private Keys/Passphrase kann Zugriff auf verschlüsselte Inhalte verhindern (Abwägung: echte E2E-Eigenschaften vs. Recovery-Komfort).

<details>
<summary>Profil B (Datensparsam)</summary>

- Verwende nur die Kontodaten, die zwingend nötig sind; prüfe beim Kauf den Bezahlweg (Abwägung: weniger Account-Bindung, aber ggf. eingeschränkte Zahlungsoptionen).
- Reduziere Web-Tracking über Browser-Härtung (Third-Party-Cookies blocken, Content-Blocker) (Abwägung: Support/Website-Funktionen können eingeschränkt sein).
- Nutze Aliase gezielt für unterschiedliche Kontexte (`Settings` → `Email Accounts` → `Add alias`) (Abwägung: mehr Pflege/Inbox-Organisation).

**Abwägung:** weniger Metadaten/Tracking im Web-Kontext, dafür mehr manuelle Pflege und potenziell mehr Reibung beim Support.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze getrennte Geräteprofile/Work-Profile für Mail-App und Key-Material; halte private Schlüssel strikt getrennt (Abwägung: hoher Aufwand, mehr Fehlerquellen bei Migration).
- Vermeide externe Konto-Integrationen (z.B. „Add external account“), wenn du die zusätzliche Verbindung nicht brauchst (Abwägung: weniger Komfort, weniger zentrale Inbox-Verwaltung).
- Für Datei-/Link-Sharing strikt zeitlich begrenzen (Self-Destruct/Message lifetime) und Passwörter separat über sicheren Kanal zustellen (Abwägung: Koordinationsaufwand).

**Abwägung:** maximale Trennung/Isolation, aber deutlich weniger Komfort und höherer Betriebsaufwand.

</details>

## Features
- OpenPGP-verschlüsselte E-Mail mit lokaler Schlüsselablage (Webmail + Apps).
- Encrypted Cloud Storage mit clientseitiger AES-256-„Paranoid Encryption“ (laut Anbieter).
- SecureShare: verschlüsseltes File-Sharing per Link (Key- oder Passwort-basiert).
- Self-Destructing E-Mail (OpenPGP-basiert; Lifetime auswählbar).
- E-Mail-Aliase (Standard/Pro planabhängig).
- Kontakte/Kalender-Sync (optional; laut Anbieter standardmäßig deaktiviert und durch Nutzer aktivierbar).
- Multi-Device: Web, Android, iOS sowie Desktop-Clients.

## Alternativen
- Andere E-Mail-Anbieter mit integriertem Verschlüsselungsmodell (Abwägung: weniger OpenPGP-Kompatibilität nach außen oder anderes IMAP/Client-Modell).
- Klassische Mailhoster ohne integrierte E2E-Verschlüsselung (Abwägung: weniger Key-Management, aber Inhalte liegen typischerweise unverschlüsselt serverseitig vor).
- Eigener Mailserver (Abwägung: maximale Kontrolle, aber hoher Betriebs-/Patch-/Spam-/Deliverability-Aufwand).

## Nicht gelöst / offene Punkte
- Subprozessoren-/Zahlungsdienstleister werden in den Policies nicht als konkrete Liste veröffentlicht.
- App-/Client-Telemetrie (Crash-Reports, Diagnosedaten) ist nicht als zentrale Aussage/Policy auffindbar.
- Verantwortliche Meldestelle für Sicherheitslücken (Responsible Disclosure) ist nicht als dedizierte Policy auffindbar.

## Quellen

- Andere E-Mail-Anbieter (Trade-off: "anderer Ansatz bei E2E/IMAP/Kompatibilität)
- Eigener Mailserver (Trade-off: "hoher Betriebs- und Sicherheitsaufwand)
- https://privatemail.com/members/index.php?rp=%2Fknowledgebase%2F1%2FHow-to-Generate-a-New-Private-Key-Pair-on-PrivateMail-Webmail.html
- [Private-Mail Startseite](https://privatemail.com/)
- [Privacy Policy](https://privatemail.com/privacy.php)
- [Terms of Service](https://privatemail.com/terms.php)
- [Pricing](https://privatemail.com/pricing.php)
- [Features](https://privatemail.com/features.php)
- [Anonymous E-Mail](https://privatemail.com/anonymous-email.php)
- [OpenPGP Encryption](https://privatemail.com/openpgp-encryption.php)
- [Secure File Sharing](https://privatemail.com/secure-file-sharing.php)
- [Support](https://privatemail.com/support.php)
- [Knowledgebase: How to Einrichtung 2factor authentication](https://privatemail.com/members/index.php?rp=%2Fknowledgebase%2F50%2FHow-to-Einrichtung-2factor-authentication-.html)
- [Knowledgebase: How to Generate a New Private Key Pair on PrivateMail Webmail](https://privatemail.com/members/index.php?rp=%2Fknowledgebase%2F1%2FHow-to-Generate-a-New-Private-Key-Pair-on-PrivateMail-Webmail.html)
- [Knowledgebase: How to Generate an OpenPGP Key for an Identity](https://privatemail.com/members/index.php?rp=%2Fknowledgebase%2F52%2FHow-to-Generate-an-OpenPGP-Key-for-an-Identity-.html)
- [Knowledgebase: How to send an OpenPGP encrypted Self Destructing E-Mail](https://privatemail.com/members/index.php?rp=%2Fknowledgebase%2F79%2FHow-to-send-an-OpenPGP-encrypted-Self-Destructing-E-Mail.html)
- [Knowledgebase: How to use Secure Share to Share an Encrypted File Link](https://privatemail.com/members/index.php?rp=%2Fknowledgebase%2F27%2FHow-to-use-Secure-Share-to-Share-an-Encrypted-File-Link.html)
- [Knowledgebase: How to create an email Alias](https://privatemail.com/members/index.php?rp=%2Fknowledgebase%2F53%2FHow-to-create-an-email-Alias.html)
