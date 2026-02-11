---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Mailfence"
url: "/anbieter/mailfence/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-18"
robots: "index,follow"
description: "Kurzprofil von Mailfence (Kategorie: E-Mail)."
provider: ""
name: "Mailfence"
category: "E-Mail"
website: "https://mailfence.com/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://mailfence.com/en/privacy.jsp"
terms: "https://mailfence.com/en/terms.jsp"
transparency: "https://blog.mailfence.com/transparency-report-and-warrant-canary/"
warrant_canary: "https://blog.mailfence.com/transparency-report-and-warrant-canary/"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "unknown"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Belgien (ContactOffice Group SA)"
region: "eu"
logs: "minimal"
retention: "long"
retention_notes: "45d Backups gelöschter Inhalte; Kontoschließung: 365d + 30d (laut Anbieter); Inaktivität Free: 7 Monate bis Sperre, Löschung 5 Monate später"
retention_max_days: "210"
data_notes: "Mailfence nennt Metadaten-Erfassung (u.a. IP/Betreff) und eine 45-Tage-Backup-Retention für gelöschte Inhalte; standardmäßig werden externe Bilder/aktive Inhalte in E-Mails nicht geladen."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Mailfence ist ein Anbieter aus der Kategorie **E-Mail**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen EU/Belgien-basierten Webmail-Dienst mit OpenPGP-Funktionen im Browser (E2E für Inhalte) und klassischem Mail-Client-Support (IMAP/SMTP/ActiveSync) nutzen willst.
- **Weniger geeignet wenn:** du möglichst wenig Metadaten beim Anbieter haben willst (z.B. IP/Betreff/Kommunikationspartner), oder wenn du E-Mail ohne Konto-/Aktivierungsdaten brauchst.
- **Wichtigster Abwägung:** OpenPGP-Ende-zu-Ende für Inhalte vs. unvermeidbare E-Mail-Metadaten + serverseitige Anti-Spam/Anti-Virus-Prüfung.

## Sofortmaßnahmen
- **2FA (TOTP) aktivieren** und Backup-Codes sicher ablegen → reduziert Kontoübernahmen bei Passwort-Leaks.
- **Service-spezifische Passwörter** für IMAP/SMTP/ActiveSync nutzen → begrenzt Schaden bei kompromittierten Geräten/Apps.
- **Externe Bilder/aktive Inhalte weiter restriktiv halten** (Default ist „nicht laden“) → reduziert Tracking-Pixel/Remote-Requests beim Lesen.

## Entscheidungshilfe
- Wenn du **Inhalte** vertraulich halten willst, dann nutze **OpenPGP (E2E) im Webmail** (Abwägung: Betreff/Absender/Empfänger bleiben typischerweise Metadaten; Empfänger:innen müssen OpenPGP unterstützen).
- Wenn du Mail über **Thunderbird/Outlook/Smartphone-Clients** nutzt, dann verwende **Service-spezifische Passwörter** und entziehe ungenutzten Zugängen die Berechtigung (Abwägung: etwas mehr Pflege/Rotation).
- Wenn du **Kontowiederherstellung** brauchst, dann akzeptiere die **extern geforderte Kontakt-Mailadresse** bei Registrierung (Abwägung: bessere Recovery vs. stärkere Identitätsbindung).
- Wenn du **Löschfristen** wichtig findest, dann beachte die Angaben zu **Backups gelöschter Inhalte (45 Tage)** und zu **Account-Löschung nach Schließung** (Abwägung: Wiederherstellung vs. schnelle Datenvernichtung).
- Wenn du **Drittanbieter-Zugriffe** minimieren willst, dann prüfe bei Dokumentenfunktionen, welche Features Inhalte an externe Komponenten geben können (Abwägung: Komfortfunktionen vs. zusätzlicher Datenfluss).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Mailfence |
| Kategorie | E-Mail |
| Website | https://mailfence.com/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | unknown |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Kreditkarte (Zahlungsdienstleister nicht angegeben) |
| Jurisdiktion | Belgien (ContactOffice Group SA) |
| Logs | minimal |
| Retention | 45d Backups gelöschter Inhalte; Kontoschließung: 365d + 30d (laut Anbieter); Inaktivität Free: 7 Monate bis Sperre, Löschung 5 Monate später |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://mailfence.com/en/privacy.jsp
- AGB/Terms: https://mailfence.com/en/terms.jsp
- Transparency Report: https://blog.mailfence.com/transparency-report-and-warrant-canary/
- Warrant Canary: https://blog.mailfence.com/transparency-report-and-warrant-canary/

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Mailfence nennt u.a. Metadaten-Erfassung (IP, Betreff, Kommunikationspartner, Zeitstempel) sowie Backups gelöschter Inhalte für 45 Tage. Standardmäßig werden externe Bilder/aktive Inhalte in empfangenen E-Mails nicht geladen.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** u.a. IP-Adressen, Message-IDs, Absender-/Empfängeradressen, Betreff, Browser-Version, Land, Zeitstempel; bei Registrierung eine externe E-Mailadresse; bei Zahlung per Kreditkarte einige Kartendetails.
- **Wofür:** technische Checks, rechtliche Anfragen, Support, Zahlungsabwicklung; Anti-Spam/Anti-Virus/Anti-Abuse-Prüfungen für ein- und ausgehende Nachrichten.
- **Weitergabe/Subprozessoren:** laut Privacy Policy keine Weitergabe personenbezogener Daten an Dritte, außer wenn belgisches Recht dazu verpflichtet; einzelne Funktionen können zusätzliche Datenflüsse erzeugen (z.B. Dokument-Onlinebearbeitung über Drittanbieter-Komponente laut Doku).
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Kreditkarte erwähnt, Zahlungsdienstleister nicht benannt.
- **Kontakt/DSAR/DPA:** Support-Kontakt ist öffentlich; eine Data Processing Agreement (DPA) wird erwähnt, aber nicht als öffentlicher Download verlinkt.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Authentication-Cookies (Session); laut Anbieter keine Tracking-Cookies und kein Google-Analytics-Tracking.
- **Abschaltbar?** Nicht angegeben (Session-Cookies sind funktional nötig).
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** minimal (Metadaten/Verbindungs- und Mail-Header-bezogene Angaben werden genannt).
- **Aufbewahrung:** Backups gelöschter Nachrichten/Dokumente bis zu 45 Tage; Account-Schließung: Löschung 30 Tage nach „legal expiration date“ (angegeben als 365 Tage nach Schließung); Free-Accounts: Suspend nach 7 Monaten Inaktivität, Löschung 5 Monate später.
- **Lösch-/Opt-out-Optionen:** Konto kann geschlossen werden; Details zu selektiven Log-Opt-outs nicht angegeben.

**Abwägung am Punkt:** Kürzere Aufbewahrung erleichtert Datenminimierung; längere Backups/Legal-Retention erleichtern Recovery und rechtliche Nachvollziehbarkeit.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Mailfence beschreibt OpenPGP-Ende-zu-Ende-Verschlüsselung im Browser (interoperabel mit OpenPGP).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA via TOTP (Authenticator-App) + Backup-Codes.
- **Recovery/Account-Wiederherstellung:** Backup-Codes für 2FA; externe Kontakt-Mailadresse für Aktivierung/Recovery-Kommunikation.
- **Vuln-Handling / Security-Kontakt:** Support-Kontakt inkl. OpenPGP-Key ist öffentlich; zusätzlich wird erwähnt, dass Sicherheits-Spezialist:innen/Bug-Bounty-Hunter die Anwendung testen/scannen (ohne öffentliches Programm-Detail).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **2FA aktivieren (TOTP)** und Backup-Codes erzeugen.  
   **Wo:** Settings → Password → „Set up the two-factor authentication“ (oder Settings → Account → Security → 2FA).  
   **Prüfen:** Logout → Login erfordert zusätzlich den 6-stelligen TOTP-Code.
2) **Externe Bilder/aktive Inhalte nicht laden** (Tracking reduzieren).  
   **Wo:** Settings → Messages → General → Display mode.  
   **Prüfen:** In eingehenden E-Mails werden Remote-Bilder nicht automatisch nachgeladen.
3) **Service-spezifische Passwörter** für externe Clients nutzen und ungenutzte Zugänge entziehen.  
   **Wo:** Settings → Account → Security → Services access → „Generate a specific password“.  
   **Prüfen:** Mail-Client funktioniert nur noch mit dem neuen Passwort; Web-Passwort ist dort wirkungslos.

**Stolpersteine:**
- E2E schützt Inhalte, aber **E-Mail-Metadaten** (z.B. Betreff/Kommunikationspartner) bleiben typischerweise sichtbar; zusätzlich werden laut Anbieter Metadaten protokolliert.
- Dokument-Features können (je nach Nutzung) zusätzliche Datenflüsse erzeugen, z.B. bei Online-Editoren/Integrationen (Abwägung: Komfort vs. Datenweitergabe).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **so wenig Integrationen** wie möglich (z.B. keine externen Remote-Storage-Anbindungen, keine Online-Editoren, wenn nicht nötig).
- Verwende **nur die Protokolle**, die du wirklich brauchst (Webmail-only statt IMAP/ActiveSync, wenn praktikabel).
- Setze auf **Export/Backup** in kontrollierte lokale Ablage (Abwägung: mehr Eigenaufwand bei Migration/Recovery).

**Abwägung:** weniger Komfortfunktionen, dafür weniger potenzielle Datenflüsse zu externen Komponenten/Clients.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze einen **dedizierten Browser/Profil oder eine VM** nur für Mailfence (Trennung von Cookies/Session, weniger Cross-Tracking).
- Erzwinge **OpenPGP für sensible Inhalte** und prüfe Schlüssel-Fingerprints vor dem ersten Austausch (Abwägung: mehr Bedienaufwand, Onboarding der Kontakte).
- Deaktiviere/avoid **externe Clients & Sync-Protokolle**, wenn du Angriffsfläche minimieren willst (Abwägung: weniger Gerätekomfort, weniger Offline-Workflows).

</details>

## Features
- Webmail-Suite: E-Mail, Kalender, Kontakte, Dokumente (laut Anbieter-Doku).
- OpenPGP-Ende-zu-Ende und digitale Signaturen im Web-Interface (laut Anbieter).
- 2FA via TOTP + Backup-Codes.
- Service-spezifische Passwörter für externe Clients.
- Standard-Protokolle für Sync/Clients: IMAP/SMTP/POP sowie CalDAV/CardDAV/xDAV (je nach Funktion/Plan).

## Alternativen
- [Proton Mail](/anbieter/proton-mail/) – starker Fokus auf Provider-gestützte E2E-Flows (Abwägung: Interop/Protokoll-Support je nach Nutzung).
- [Tuta Mail](/anbieter/tuta-mail/) – E2E-first Ansatz im eigenen Ökosystem (Abwägung: Interoperabilität mit klassischem PGP).
- [Posteo](/anbieter/posteo/) – datensparsame Mailbox (Abwägung: andere Schwerpunkte bei integrierten Collaboration-Tools).
- [mailbox.org](/anbieter/mailbox-org/) – E-Mail + Groupware (Abwägung: Featureset/Privacy-Defaults unterscheiden sich je nach Konfiguration).
- [Fastmail](/anbieter/fastmail/) – klassischer Mailhoster mit viel IMAP-Workflow (Abwägung: Jurisdiktion/Privacy-Positionierung je nach Bedarf prüfen).

## Nicht gelöst / offene Punkte
- Zahlungsdienstleister/Payment Processor wird in den Primärquellen nicht klar benannt (Kreditkarte ist erwähnt, aber nicht der Abwickler).
- Öffentliche DPA-/Subprozessoren-Liste ist nicht als Download/Index verlinkt (DPA wird erwähnt).
- Kryptographische Detailparameter (z.B. KDF/Key-Handling-Details) sind nicht konkretisiert.

## Quellen

- https://mailfence.com/en/gdpr.jsp
- [Privacy Policy (Mailfence)](https://mailfence.com/en/privacy.jsp)
- [Terms of Use (Mailfence)](https://mailfence.com/en/terms.jsp)
- [Transparency Report and Warrant Canary (Mailfence Blog)](https://blog.mailfence.com/transparency-report-and-warrant-canary/)
- [FAQ (Mailfence)](https://mailfence.com/en/faq.jsp)
- [How to Einrichtung Two-factor authentication (2FA) (KB)](https://kb.mailfence.com/kb/Einrichtung-2fa/)
- [Service-specific passwords to strengthen your account (KB)](https://kb.mailfence.com/kb/service-specific-passwords/)
- [How to Write an E-Mail with Mailfence (KB) — Remote-Bilder/aktive Inhalte Default](https://kb.mailfence.com/kb/how-to-write-an-email/)
- [Documents (Online documentation) — Hinweise zu Online-Editor/Drittanbieter](https://mailfence.com/en/doc/documents.jsp)
- [Contact (Mailfence) — Support-Kontakt + PGP-Key](https://mailfence.com/en/contact.jsp)
- [GDPR (Mailfence) — DPA-Erwähnung & Sicherheits-/Organisationsmaßnahmen](https://mailfence.com/en/gdpr.jsp)
