---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Hushmail"
url: "/anbieter/hushmail/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-15"
robots: "index,follow"
description: "Kurzprofil von Hushmail (Kategorie: E-Mail)."
provider: ""
name: "Hushmail"
category: "E-Mail"
website: "https://www.hushmail.com/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://www.hushmail.com/privacy"
terms: "https://www.hushmail.com/terms"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "unknown"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "unknown"
kyc_required: "unknown"
jurisdiction: "Kanada (Büro: Vancouver, BC; Server: Vancouver/Calgary) / USA (Delaware Holding)"
region: "us"
logs: "unknown"
retention: "verylong"
retention_notes: "E-Mails solange Account aktiv; Aktivitätslogs ~18 Monate; Backups ~3 Wochen (Details siehe Datenschutz)"
retention_max_days: "540"
data_notes: "PGP-verschlüsselte Mails liegen verschlüsselt auf Hushmail-Servern; unverschlüsselte Mails unverschlüsselt. Aktivitätslogs können u. a. IP, Absender/Empfänger, Betreff und Attachment-Dateinamen enthalten."
features: ""
alternatives: ""
payment_processors: "Nicht angegeben (Payment Processor + Anti-Fraud-Service laut Privacy Policy, ohne Namen)"
sources: ""
---
## Kurzprofil

Hushmail ist ein Anbieter aus der Kategorie **E-Mail**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du gehostete E-Mail mit „verschlüsselt senden“-Workflow brauchst, inkl. Secure-Message-Abholung für Empfänger ohne Hushmail und optionaler 2-Schritt-Verifizierung.
- **Weniger geeignet wenn:** du ein System brauchst, bei dem der Anbieter technisch keine Klartext-Verarbeitung während der Sitzung machen kann (Hushmail beschreibt serverseitige Kryptographie-Komponenten im Webmail).
- **Wichtigster Abwägung:** Komfort & IMAP/Client-Integration vs. serverseitige Sitzungs-Verarbeitung (Passwort/Private-Key-Nutzung) und Metadaten-Logs.

## Sofortmaßnahmen
- **Zwei-Schritt-Verifizierung aktivieren** (Webmail → Menü oben rechts → *Preferences* → *Security* → Stift-Icon): reduziert Kontoübernahmen.
- **Verschlüsselungs-Default bewusst setzen** (Webmail: „Encrypted“-Schalter; Dritt-Clients: Admin-Setting/Keyword): verhindert unbeabsichtigte Klartext-Mails.
- **Externe Empfänger absichern**: beim ersten verschlüsselten Versand an „Nicht-Hushmail“-Empfänger optional eine **Security Question** setzen.

## Entscheidungshilfe
- Wenn du häufig an **Nicht-Hushmail-Empfänger** schreibst, dann nutze den **Encrypted-Versand** mit Secure-Message-Abholung (Abwägung: Empfänger muss Link/Portal nutzen und ggf. Passwort/SSO einsetzen).
- Wenn du **Outlook/Apple Mail/IMAP** nutzen willst, dann prüfe Admin-Optionen für SMTP-Verschlüsselung bzw. **Subject-Line-Keyword** (Abwägung: bei „Send without encryption“ kann die erste Mail an neue externe Kontakte unverschlüsselt rausgehen).
- Wenn du **Metadaten minimieren** willst, dann berücksichtige, dass Hushmail laut Privacy Policy Aktivitätsdaten wie IP/Betreff/Absender/Empfänger protokollieren kann (Abwägung: Support/Abuse-Schutz vs. mehr Protokolldaten).
- Wenn du ein **Bedrohungsmodell mit kompromittiertem Webserver während der Sitzung** annimmst, dann ist Webmail laut Anbieter in diesem Szenario „nicht geschützt“ (Abwägung: Web-Komfort vs. Angriffsfläche während aktiver Sitzung).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Hushmail |
| Kategorie | E-Mail |
| Website | https://www.hushmail.com/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | unknown |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Nicht angegeben (Payment Processor + Anti-Fraud-Service laut Privacy Policy, ohne Namen) |
| Jurisdiktion | Kanada (Büro: Vancouver, BC; Server: Vancouver/Calgary) / USA (Delaware Holding) |
| Logs | unknown |
| Retention | E-Mails solange Account aktiv; Aktivitätslogs ~18 Monate; Backups ~3 Wochen (Details siehe Datenschutz) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.hushmail.com/privacy
- AGB/Terms: https://www.hushmail.com/terms
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
PGP-verschlüsselte Mails liegen verschlüsselt auf Hushmail-Servern; unverschlüsselte Mails unverschlüsselt. Aktivitätslogs können u. a. IP, Absender/Empfänger, Betreff und Attachment-Dateinamen enthalten.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Website-/Account-Nutzung inkl. IP-Adresse; beim Login/Benutzen werden Aktivitäten protokolliert (z.B. Lesen/Verschieben), inkl. Metadaten wie Absender/Empfänger, Betreff, Attachment-Dateinamen und u. U. URLs in unverschlüsselten Mail-Bodies.
- **Wofür:** Abuse-Prevention, Betrieb/Wartung und Support; außerdem Markt-/Nutzungsanalyse.
- **Weitergabe/Subprozessoren:** Drittanbieter für Website-Teile (z.B. Help-System), Payment Processing (PCI-Dienste), Anti-Fraud-Service, sowie Sales/Marketing/Customer-Care-Systeme (Namen nicht öffentlich in der Privacy Policy genannt).
- **Drittlandtransfer:** Laut Privacy Policy liegen Server in Kanada; Drittanbieter-Dienste können eigene Datenrichtlinien haben (keine vollständige öffentliche Subprozessor-Liste genannt).
- **Zahlungsabwicklung/Payment Processor:** Payment-Info wird an Payment Processor übertragen; zusätzlich IP/Stadt/Land/Postleitzahl an Anti-Fraud-Dienst; Kreditkartennummer wird laut Anbieter nicht auf Hushmail-Servern gespeichert.
- **Kontakt/DSAR/DPA:** Kontakt über Formular/Support; Chief Privacy Officer per Kontaktweg/Adresse laut Privacy Policy.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Ja: Website-Aktivität und Account-Aktivitäten können protokolliert werden; Cookies werden für Session/Settings genutzt.
- **Abschaltbar?** Nicht angegeben (Login/Session-Cookies sind funktional erforderlich; ohne Cookies ist Sign-in laut Privacy Policy nicht möglich).
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** unknown (Privacy Policy beschreibt Aktivitäts- und Metadaten-Logging für Betrieb/Support/Abuse)
- **Aufbewahrung:** Aktivitäts-Records werden laut Privacy Policy nach ca. **18 Monaten** gelöscht; Backups können ca. **3 Wochen** enthalten. Account-Löschung entfernt Account & Mails, aber nicht zwingend Aktivitäts-Records; Free/Trial-Accounts haben eigene Deaktivierungs-/Löschfristen.
- **Lösch-/Opt-out-Optionen:** E-Mails/Account lassen sich löschen; Aktivitäts-Records bleiben bis zur Löschfrist bestehen (laut Privacy Policy).

**Abwägung am Punkt:** Weniger Protokolle erschweren Diagnose/Abuse-Bekämpfung; mehr Protokolle erhöhen Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Hushmail beschreibt OpenPGP-basierte Verschlüsselung, aber Webmail nutzt eine serverseitige „Encryption Engine“: Passwörter/Private-Keys werden während der Sitzung serverseitig genutzt; Mail-Bodies sind dabei kurzzeitig serverseitig sichtbar, bevor PGP greift; Header sind in Storage nicht verschlüsselt.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (in öffentlich sichtbaren Primärquellen hier nicht konkret beschrieben).
- **MFA/2FA/Passkeys/Hardware-Keys:** Zwei-Schritt-Verifizierung verfügbar (Code per SMS, E-Mail an Backup-Adresse oder via Smartphone-App).
- **Recovery/Account-Wiederherstellung:** Passwort wird nicht gespeichert (nur Hash); vergessene Passphrase ist nicht durch den Anbieter „einfach wiederherstellbar“ – Business-/Team-Einrichtungen können Admin-Reset vorsehen (laut Help Center).
- **Vuln-Handling / Security-Kontakt:** Support-Kontakt vorhanden; dedizierter Vulnerability-Disclosure-Prozess nicht angegeben.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Zwei-Schritt-Verifizierung aktivieren**  
   **Menüpfad:** Webmail → Menü oben rechts → *Preferences* → Tab *Security* → Stift-Icon.  
   **Prüfen:** Nach Login wird zusätzlicher Code verlangt; Backup-Code sicher ablegen.
2) **Verschlüsselung bewusst nutzen (Webmail & Mail-Apps unterscheiden)**  
   **Webmail:** Beim Schreiben „Encrypted“-Schalter **ein** (grünes Schloss sichtbar).  
   **Mail-Apps (IMAP/SMTP):** Admin-Einstellung „SMTP Encryption“ oder Subject-Line-Keyword nutzen, wenn Verschlüsselung erzwungen werden soll.  
   **Prüfen:** Testmail an externen Empfänger → landet als Link/Abholseite statt Klartext im Posteingang.
3) **Sign-in-Auffälligkeiten prüfen**  
   **Prüfen:** Hushmail zeigt laut Privacy Policy „recent sign-in activity“ (Zeit/Datum/ungefähre Region/IP des ISP) – auf Abweichungen reagieren (Passphrase ändern + 2SV prüfen).

**Stolpersteine:**
- **IMAP/Outlook kann unverschlüsselt senden**, je nach Admin-Setting/Empfänger-Historie (Abwägung: Komfort/Kompatibilität vs. Risiko von Klartext-Mails).
- **Account löschen ≠ alle Logs weg:** Aktivitäts-Records bleiben bis zur Löschfrist bestehen (Abwägung: Betrieb/Abuse-Schutz vs. Metadaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze 2SV bevorzugt über **Backup-E-Mail/App** statt SMS, wenn du die Telefonnummerbindung reduzieren willst (Abwägung: weniger SMS-Abhängigkeit vs. Recovery-Komplexität).
- Verwende Verschlüsselung bewusst auch bei Dritt-Clients (Admin-Setting „Send with encryption“ oder Subject-Line-Keyword) (Abwägung: Empfänger müssen Portal/Passwort nutzen).
- Löschroutine: sensible Mails/Anhänge nach Bedarf entfernen; beachten, dass Backups zeitverzögert sind (Abwägung: weniger Daten im Postfach vs. geringerer „Verlauf“).

**Abwägung:** mehr Eigenverantwortung (Konfiguration/Tests), weniger „aus Versehen Klartext“.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Webmail nur in gehärteter Umgebung nutzen (separates Browser-Profil/VM, strenge Erweiterungen, keine Fremd-Plugins) (Abwägung: hoher Aufwand).
- Bedrohungsmodell „Server während Sitzung kompromittiert“ berücksichtigen: Anbieter beschreibt Webmail in diesem Szenario als „nicht geschützt“ (Abwägung: Designgrenze des Webmail-Modells).
- Externe Empfänger: zusätzlich **Security Question** setzen und Inhalte minimieren (Abwägung: mehr Reibung für Empfänger).

**Abwägung:** deutlicher Komfortverlust, höhere Komplexität.

</details>

## Features
- Webmail + iPhone-App; Versand verschlüsselter Mails per „Encrypted“-Schalter
- Secure Message Center für Empfänger ohne Hushmail (Link zum Abholen/Antworten)
- Zwei-Schritt-Verifizierung (SMS/E-Mail/App) + Security-Code für IMAP/POP-Clients
- IMAP/SMTP nutzbar; Verschlüsselungs-Default für Drittclients per Admin-Setting/Keyword steuerbar
- Formulare & E-Signaturen (je nach Plan)

## Alternativen
- Proton Mail (Abwägung: anderes Hosting-/Jurisdiktionsmodell, andere E2E-Workflows)
- Tuta Mail (Abwägung: Fokus auf integrierte E2E; IMAP-Interoperabilität typischerweise eingeschränkt)
- Mailbox.org (Abwägung: klassisches Mail-Hosting; Verschlüsselung oft als Nutzer-Workflow/Tooling)

## Nicht gelöst / offene Punkte
- Subprozessoren/Zahlungsdienstleister werden nicht namentlich vollständig aufgelistet.

## Quellen

- Proton Mail (ähnliche Kategorie; Trade-off: "anderes Hosting-/Jurisdiktionsmodell, andere E2E-Workflows)
- Tuta Mail (ähnliche Kategorie; Trade-off: "Fokus auf integrierte E2E, Interoperabilität mit IMAP typischerweise eingeschränkt)
- Mailbox.org (ähnliche Kategorie; Trade-off: "klassisches Mail-Hosting/Groupware, Verschlüsselung oft als Nutzer-Setup/Workflow)
- https://help.hushmail.com/article/703-changing-your-passphrase
- [Privacy Policy | Hushmail](https://www.hushmail.com/privacy)
- [Pricing | Hushmail](https://www.hushmail.com/pricing)
- [Terms of Service - Free Accounts | Hushmail](https://www.hushmail.com/terms/free)
- [Turn on two-step verification | Hushmail Help](https://help.hushmail.com/article/740-turn-on-two-step-verification-for-your-hushmail-account)
- [Security Analysis | Hushmail Help](https://help.hushmail.com/article/731-security-analysis)
- [Access to your password and private keys | Hushmail Help](https://help.hushmail.com/article/730-access-to-your-passphrase-and-private-keys)
- [Sending encrypted messages | Hushmail Help](https://help.hushmail.com/article/697-sending-encrypted-email)
- [Set Your Encryption Options | Hushmail Help](https://help.hushmail.com/article/1202-set-your-encryption-options)
- [Send securely with subject line encryption | Hushmail Help](https://help.hushmail.com/article/1170-send-email-with-subject-line-encryption)
- [Change your password | Hushmail Help](https://help.hushmail.com/article/703-changing-your-passphrase)
