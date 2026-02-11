---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Zoho Mail"
url: "/anbieter/zoho-mail/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-04"
robots: "index,follow"
description: "Kurzprofil von Zoho Mail (Kategorie: E-Mail)."
provider: ""
name: "Zoho Mail"
category: "E-Mail"
website: "https://www.zoho.com/mail/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://www.zoho.com/privacy.html"
terms: "https://www.zoho.com/terms.html"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "no"
self_host_possible: "no"
account_required: "yes"
phone_required: "unknown"
kyc_required: "unknown"
jurisdiction: "Zoho Group (u.a. Zoho Corporation Private Limited); DPO: Zoho Corporation BV (NL)"
region: "other"
logs: "unknown"
retention: "long"
retention_notes: "Accountdaten bis Kündigung; danach Löschung innerhalb 6 Monate (Backups +3 Monate). Zoho Mail Personal: Mailbox-Clearing nach 300 Tagen Inaktivität."
retention_max_days: "180"
data_notes: "- Zoho nennt Verschlüsselung „at rest“ und „in transit“ sowie optional S/MIME (planabhängig)."
features: ""
alternatives: ""
payment_processors: "Unklar (in Privacy Policy nicht konkret benannt)"
sources: ""
---
## Kurzprofil

Zoho Mail ist ein Anbieter aus der Kategorie **E-Mail**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du gehostetes Mailhosting mit Custom Domain und Admin-Konsole suchst und mit einem klassischen SaaS-Einrichtung leben kannst.
- **Weniger geeignet wenn:** du Ende-zu-Ende-Verschlüsselung als Default erwartest oder möglichst wenig Kontodaten preisgeben willst.
- **Wichtigster Abwägung:** Admin-/Recovery-Komfort (z.B. TFA-Reset) vs. zusätzliche Metadaten (z.B. Telefonnummer/Logdaten je nach Einrichtung).

## Sofortmaßnahmen
- **TFA/MFA aktivieren:** reduziert das Risiko von Kontoübernahmen durch Passwort-Leaks oder Phishing.
- **App-spezifische Passwörter für IMAP/POP nutzen:** begrenzt Schaden, falls ein einzelner Client kompromittiert wird.
- **Inaktivität vermeiden (Personal Mailbox):** regelmäßiger Login verhindert mögliche dauerhafte Mailbox-Löschung nach langer Inaktivität.

## Entscheidungshilfe
- Wenn du **nur Webmail** brauchst und eine kleine Domain/Organisation betreibst, dann passt der **Free-Plan** (Abwägung: **kein IMAP/POP/ActiveSync**).
- Wenn du **S/MIME** für Signatur/Verschlüsselung willst, dann benötigst du einen **Plan mit S/MIME** + ein Zertifikat (Abwägung: **Zertifikats-Handling** und Kompatibilitätsfragen).
- Wenn du **IMAP/POP/ActiveSync** einsetzt, dann nutze **App-Passwörter** statt des Hauptpassworts (Abwägung: **mehr Token-Verwaltung**, dafür feinere Kontrolle).
- Wenn du als Admin **Organisationen verwaltest**, dann erzwinge **TFA auf Org-Ebene** (Abwägung: **Support-Aufwand** bei Gerätewechseln, aber weniger Account-Risiko).
- Wenn du **Datenverlust vermeiden** willst, dann prüfe die **Inaktivitäts-/Retention-Regeln** (Abwägung: **regelmäßige Logins/Prozesse** nötig).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Zoho Mail |
| Kategorie | E-Mail |
| Website | https://www.zoho.com/mail/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | yes |
| Telefon erforderlich | Unklar |
| KYC erforderlich | Unklar |
| Zahlungsabwicklung | Unklar (in Privacy Policy nicht konkret benannt) |
| Jurisdiktion | Zoho Group (u.a. Zoho Corporation Private Limited); DPO: Zoho Corporation BV (NL) |
| Logs | unknown |
| Retention | Accountdaten bis Kündigung; danach Löschung innerhalb 6 Monate (Backups +3 Monate). Zoho Mail Personal: Mailbox-Clearing nach 300 Tagen Inaktivität. |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.zoho.com/privacy.html
- AGB/Terms: https://www.zoho.com/terms.html
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Compliance-Übersicht (ISO/IEC 27001, ISO/IEC 27701, ISO/IEC 27017, ISO/IEC 27018, SOC 2 Type 2 u.a.): https://www.zoho.com/compliance.html

**Daten-Notizen (kurz):**
- Zoho nennt Verschlüsselung „at rest“ und „in transit“ sowie optional S/MIME (planabhängig).
- Zoho dokumentiert eine allgemeine Löschfrist nach Konto-Kündigung (6 Monate aktiv + 3 Monate Backups).
- Für persönliche Zoho-Mail-Postfächer kann Mailbox-Inhalt nach längerer Inaktivität dauerhaft gelöscht werden.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Privacy Policy u.a. Kontodaten bei Signup (Name, „contact number“, E-Mail, Land), sowie automatisch erfasste Daten (IP/Browser/Device/Logfiles) und Nutzungsdaten aus Application Logs/In-house Analytics (z.B. Features/Settings, Zugriffshäufigkeit, Fehler, Performance).
- **Wofür:** Betrieb der Dienste, Konto/Support, Missbrauchserkennung, Produktverbesserung; außerdem Kommunikation über Services/Policy-Updates.
- **Weitergabe/Subprozessoren:** Zoho veröffentlicht eine Service-spezifische Subprozessorenliste (Zoho Services); Zoho Mail ist dort nicht als Filteroption sichtbar (Details unklar).
- **Drittlandtransfer:** Zoho nennt Verarbeitung/Transfer/Storage in den USA, der EEA und weiteren Ländern, mit geeigneten Vereinbarungen (z.B. EU-Modellklauseln) für Transfers.
- **Zahlungsabwicklung/Payment Processor:** Zoho nennt Payment Gateways/Payment Gateway Service Providers, benennt sie in der Privacy Policy jedoch nicht konkret.
- **Kontakt/DSAR/DPA:** Privacy Policy nennt Datenschutzkontakt (privacy@…), DPO-Kontakt (Utrecht, NL) und beschreibt, dass ein DPA angefordert werden kann (Form/Request).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy werden Nutzungsdaten aus **Application Logs** und **in-house usage analytics tools** erhoben (z.B. Klicks/Scrolls, Features, Fehler, Performance, Geräte/Standorte).
- **Abschaltbar?** Unklar (keine Zoho-Mail-spezifische Opt-out-Dokumentation gefunden).
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** unknown
- **Aufbewahrung:** Privacy Policy: nach Kündigung automatische Löschung aus aktiver DB innerhalb 6 Monate, aus Backups innerhalb weiterer 3 Monate. Zoho Mail Usage Policy: Personal-Mailbox wird nach 180 Tagen Inaktivität blockiert; nach weiteren 90 Tagen kann die Mailbox **permanent geleert** werden (insgesamt 300 Tage Inaktivität).
- **Lösch-/Opt-out-Optionen:** Unklar (Löschfristen sind dokumentiert; Telemetrie-Opt-out nicht klar).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Zoho nennt Verschlüsselung **at rest** und **in transit**; zusätzlich dokumentiert Zoho S/MIME für Signatur/Verschlüsselung (planabhängig). Eine generelle client-seitige E2E-Verschlüsselung als Standard ist nicht dokumentiert.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Zoho Mail dokumentiert Two-factor Authentication (TFA) mit OTP (z.B. SMS/Voice call oder QR-Code-App) und App-spezifischen Passwörtern für IMAP/POP/ActiveSync.
- **Recovery/Account-Wiederherstellung:** Admins können TFA für Nutzer zurücksetzen (Organisation). Terms nennen zudem einen Prozess zur Wiedererlangung von Admin-Kontrolle (Kontakt legal@…).
- **Vuln-Handling / Security-Kontakt:** Privacy Policy nennt security@… als Kontakt; „Security at Zoho“ beschreibt Security-by-design und organisatorische Maßnahmen.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren (TFA/MFA)**  
   **Menüpfad (Org):** Zoho Mail Admin Console → *Security and Compliance* → *Security* → *TFA* → ON  
   **Prüfen:** Login erfordert zweiten Faktor; Status ist im Admin-Bereich sichtbar.
2) **IMAP/POP/ActiveSync: App-spezifische Passwörter nutzen** (falls du Clients einbindest)  
   **Menüpfad:** Zoho Accounts → *Security* → *App passwords* → „Generate New Password“  
   **Prüfen:** Client funktioniert mit App-Passwort; bei Widerruf ist der Zugriff sofort weg.
3) **Inaktivität/Retention im Blick behalten** (v.a. Personal Mailbox)  
   **Prüfen:** Regelmäßiger Login (Web/IMAP/POP/App) verhindert Blockierung und mögliches Clearing.

**Stolpersteine:**
- Recovery-Optionen (z.B. SMS/Telefon) können Identitätsdaten erhöhen (Abwägung: Support/Recovery vs. Metadaten).
- Personal-Mailbox kann nach längerer Inaktivität dauerhaft geleert werden (Abwägung: „weniger Datenhaltung“ vs. Datenverlust).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Telefon-/Identitätsbindung minimieren**, soweit im Account-Einrichtung optional (Abwägung: eingeschränkte Recovery-Optionen).
- **Nur notwendige Clients/Protokolle** (z.B. IMAP/POP) aktiv nutzen; App-Passwörter regelmäßig bereinigen (Abwägung: mehr Pflege).
- **Organisationsrichtlinien einsetzen**, um Zugriffspfade zu begrenzen (z.B. Device/Network Policies, falls in deiner Edition verfügbar dokumentiert).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Getrennte Arbeitsumgebung** (separates Browser-Profil/VM) für Admin-Zugänge (Abwägung: mehr Aufwand).
- **Minimale Integrationen** und konsequente Token-/App-Passwort-Hygiene (Abwägung: Komfortverlust).
- **Organisationszugriffe stark einschränken** über Admin-Richtlinien/Policies, sofern bei dir verfügbar (Abwägung: mehr Admin-Komplexität).

</details>

## Features
- Custom-Domain-Mailhosting (inkl. Free-Plan bis 5 Nutzer, ohne IMAP/POP/ActiveSync).
- MFA/TFA für Organisationen + App-spezifische Passwörter für IMAP/POP/ActiveSync.
- Optional S/MIME (Premium/Workplace Professional; Zertifikat nötig).
- Admin-Konsole mit Sicherheits-/Compliance-Bereich (u.a. TFA, Policies).

## Alternativen
- E2E-fokussierte Maildienste (Abwägung: Interoperabilität/IMAP, Recovery-Komplexität)
- Klassische Business-Mail-Suites (Abwägung: mehr Integrationen/Features vs. mehr Plattform-Metadaten)
- self-hosted Mailserver (Abwägung: volle Kontrolle vs. Wartung/Spam-Reputation/Backup-Verantwortung)

## Nicht gelöst / offene Punkte
- Unklar, ob Zoho Mail in der öffentlichen Subprozessorenliste **vollständig** abgedeckt ist (oder ob es eine Mail-spezifische Ergänzung gibt).
- Unklar, ob/wo Zoho Mail eine **Telemetry-/Diagnose-Opt-out**-Option dokumentiert.
- Zahlungsabwicklung: Payment Gateway Service Provider wird in der Privacy Policy nicht konkret benannt.

## Quellen

- Compliance-Übersicht (ISO/IEC 27001, ISO/IEC 27701, ISO/IEC 27017, ISO/IEC 27018, SOC 2 Type 2 u.a.): "https://www.zoho.com/compliance.html
- E2E-fokussierte Maildienste (Trade-off: "Interoperabilität/IMAP, Recovery-Komplexität)
- Klassische Business-Mail-Suites (Trade-off: "mehr Integrationen/Features vs. mehr Plattform-Metadaten)
- self-hosted Mailserver (Trade-off: "volle Kontrolle vs. Wartung/Spam-Reputation/Backup-Verantwortung)
- https://www.zoho.com/compliance.html
- [Zoho Privacy Policy](https://www.zoho.com/privacy.html)
- [Zoho Terms of Service](https://www.zoho.com/terms.html)
- [Zoho – Service Specific Sub-processors and Third Parties](https://www.zoho.com/privacy/sub-processors.html)
- [Zoho Mail Pricing](https://www.zoho.com/mail/zohomail-pricing.html)
- [Zoho Mail Usage Policy](https://www.zoho.com/mail/help/usage-policy.html)
- [Zoho Mail Admin: Two-factor Authentication](https://www.zoho.com/mail/help/adminconsole/two-factor-authentication.html)
- [Zoho Mail Help: S/MIME](https://www.zoho.com/mail/help/s-mime.html)
- [Security at Zoho (Trust)](https://www.zoho.com/trust.html)
- [Compliance at Zoho (Certifications/Audits)](https://www.zoho.com/compliance.html)
