---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Thexyz"
url: "/anbieter/thexyz/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-13"
robots: "index,follow"
description: "Kurzprofil von Thexyz (Kategorie: E-Mail)."
provider: ""
name: "Thexyz"
category: "E-Mail"
website: "https://www.thexyz.com/"
repo: "https://github.com/thexyz"
license: "Nicht angegeben"
policies: ""
privacy: "https://www.thexyz.com/about/privacy-policy"
terms: "https://www.thexyz.com/terms-of-service"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "partial"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "unknown (optional für SMS-MFA/Reset)"
kyc_required: "unknown"
jurisdiction: "Kanada (Toronto, Ontario)"
region: "ca"
logs: "minimal"
retention: "long"
retention_notes: "Account-Daten 14–30 Tage nach Kündigung; Audit-Logs: 2 Wochen; Abuse-Reports: 1 Jahr"
retention_max_days: "365"
data_notes: "Website nutzt u.a. Google Analytics; Webmail laut Anbieter ohne Tracking. Support-Zugriff auf Postfach nur mit Erlaubnis und wird protokolliert. Zahlungen über externe Zahlungsdienstleister."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Thexyz ist ein Anbieter aus der Kategorie **E-Mail**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du eine klassische Mailbox (IMAP/SMTP/Webmail) willst und Kontoschutz (MFA/2FA) sauber nutzen kannst.
- **Weniger geeignet wenn:** du einen Dienst suchst, bei dem Ende-zu-Ende-Verschlüsselung *standardmäßig* für jede Mail ohne Zusatzsetup gilt.
- **Wichtigster Abwägung:** **Standard-Kompatibilität (IMAP/SMTP/Webmail) vs. Inhalts-/Metadaten-Schutz** (E2E erfordert Zusatzsetup wie PGP/S/MIME; Provider sieht sonst Mailinhalte im Normalfall serverseitig).

## Sofortmaßnahmen
- **2FA aktivieren (App oder YubiKey):** reduziert Risiko durch Passwort-Leaks/Reuse auf dem Kundenkonto.
- **In Webmail/Mail-Client externe Inhalte blockieren:** mindert Tracking über Remote-Bilder/„Spy Pixels“ in Marketing-Mails.
- **E2E für Inhalte nutzen (PGP via Mailvelope oder S/MIME):** verhindert, dass Mailinhalte beim Provider oder unterwegs im Klartext lesbar sind (Abwägung: mehr Einrichtung/Komplexität).

## Entscheidungshilfe
- Wenn du **IMAP/SMTP** für eigene Clients (Thunderbird, iOS/Android, Desktop) brauchst, dann passt ein klassischer Mailhost wie Thexyz (Abwägung: Inhalte sind ohne E2E typischerweise serverseitig verarbeitbar).
- Wenn du **Phishing/Account-Takeover** reduzieren willst, dann aktiviere **MFA/2FA** und nutze nach Möglichkeit **App-/Hardware-basierte Verfahren** statt SMS (Abwägung: Recovery kann aufwendiger werden).
- Wenn du **weniger Identitätsbindung** willst, dann nutze **kein SMS-Reset** und hinterlege keine Telefonnummer, solange es optional bleibt (Abwägung: Passwort-Reset kann komplizierter sein).
- Wenn du **Inhaltsvertraulichkeit** auch gegenüber dem Provider brauchst, dann nutze **PGP/S/MIME** (Abwägung: Schlüsselverwaltung und Austausch sind zusätzliche Arbeit).
- Wenn du **Abuse-Reports** über das Anbieter-Tool einreichst, plane ein, dass Reports laut Anbieter **1 Jahr gespeichert** werden (Abwägung: Unterstützung bei Abuse-Bekämpfung vs. zusätzliche gespeicherte Metadaten).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Thexyz |
| Kategorie | E-Mail |
| Website | https://www.thexyz.com/ |
| Quellcode | https://github.com/thexyz |
| Lizenz | Nicht angegeben |
| Preismodell | paid |
| Free Tier | no (teilweise Testzeiträume je Produkt) |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown (optional für SMS-MFA/Reset) |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | PayPal, Stripe, 2Checkout (laut Privacy Policy); LiquidNet Ltd. (laut Billing/Order-Info) |
| Jurisdiktion | Kanada (Toronto, Ontario) |
| Logs | minimal |
| Retention | Account-Daten 14–30 Tage nach Kündigung; Audit-Logs: 2 Wochen; Abuse-Reports: 1 Jahr |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.thexyz.com/about/privacy-policy
- AGB/Terms: https://www.thexyz.com/terms-of-service
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- SOC 2 Type II (laut Anbieter; Bericht nicht öffentlich verlinkt)

**Daten-Notizen (kurz):**
- Website-Nutzung enthält laut Privacy Policy u.a. **Google Analytics**; für **Webmail** wird angegeben, dass dort **kein Tracking** eingebaut ist.
- Provider beschreibt **Support-Zugriff auf Postfach nur mit Erlaubnis** und mit **Protokollierung**.
- In der Privacy Policy werden mehrere **Drittanbieter** (z.B. Analytics/Chat/Newsletter/Payment) genannt.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Privacy Policy u.a. Account-/Kontakt- und Abrechnungsdaten (z.B. Name, Adresse, E-Mail, ggf. Telefonnummer), sowie technische Daten wie IP-Adresse, Browser-/Geräteinfos und Cookies bei Website-Nutzung.
- **Wofür:** Betrieb des Dienstes, Abrechnung/Support, Sicherheit sowie Website-Analyse (Google Analytics wird genannt).
- **Weitergabe/Subprozessoren:** Genannt werden u.a. Google Analytics (Website), Olark (Live-Chat), MailChimp (Newsletter), Vanilla Forums (Community) sowie Zahlungsdienstleister (PayPal, Stripe, 2Checkout). Zusätzlich: Bei Abuse/Spam kann laut Privacy Policy „Junk Mail“-Inhalt an Dritte zur Analyse/Abuse-Bekämpfung geteilt werden.
- **Drittlandtransfer:** Nicht konkret als Liste/Mechanismus angegeben (nur allgemein über Dienstbetrieb/Provider-Dienste).
- **Zahlungsabwicklung/Payment Processor:** PayPal, Stripe, 2Checkout (Privacy Policy) und ein Hinweis, dass Zahlungen „handled by LiquidNet Ltd.“ (Billing/Order-Info) sind.
- **Kontakt/DSAR/DPA:** GDPR-/Datenexport wird über ein Support-Formular beschrieben (Export als JSON).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Website: Google Analytics wird genannt; Webmail: laut Anbieter ohne Tracking.
- **Abschaltbar?** Clientseitig indirekt (z.B. per Content-Blocker/Privacy-Einstellungen), serverseitige Opt-out-Details werden nicht als zentraler Schalter beschrieben.
- **Wo (Menüpfad):** Browser → Tracking-Schutz/Content-Blocker; Webmail: keine Tracking-Option beschrieben, da „kein Tracking“ angegeben.

**Logs & Retention:**
- **Logging-Level:** minimal (Audit-Logs für Zugriffe werden genannt).
- **Aufbewahrung:** Audit-Logs laut Anbieter **2 Wochen**; Account-Daten nach Kündigung **14–30 Tage**; Abuse-Reports **1 Jahr**.
- **Lösch-/Opt-out-Optionen:** Account-Deletion wird beschrieben (Daten werden nach Kündigung binnen 14–30 Tagen entfernt); weitere Löschwege für einzelne Log-Kategorien sind nicht als Self-Service beschrieben.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Privacy Policy nennt verschlüsselte Zugriffe (Webmail/IMAP/POP) sowie Verschlüsselung „at rest“; E2E ist nicht Standard, kann aber via PGP (Mailvelope) oder S/MIME umgesetzt werden.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA/MFA wird beschrieben (Authenticator-App, SMS) und YubiKey wird unterstützt.
- **Recovery/Account-Wiederherstellung:** Passwort-Reset kann über MFA erleichtert werden; SMS-Reset ist als Option beschrieben (setzt Telefonnummer voraus).
- **Vuln-Handling / Security-Kontakt:** Security-Features/Commitment-Seiten nennen organisatorische Sicherheitsmaßnahmen und Audit-Logs; ein formaler Disclosure-Prozess (z.B. SECURITY.md) ist nicht als zentraler Link dokumentiert.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **2FA im Kundenkonto aktivieren** (App oder YubiKey).  
   **Wo:** Login → Menü oben rechts („Hello, …“) → **Security Settings** → Two-factor authentication aktivieren.  
   **Prüfen:** Login fordert zweiten Faktor / YubiKey tatsächlich an.
2) **MFA für Webmail nutzen (wenn angeboten/aktiviert)** und „Remember this device“ bewusst wählen.  
   **Prüfen:** Webmail-Login zeigt MFA-Abfrage und akzeptiert den Code.
3) **Remote-Bilder/Tracking in Mails minimieren** (Mail-Client/Webmail-Einstellungen).  
   **Prüfen:** Externe Bilder laden nicht automatisch; Marketing-Mails zeigen keine „read/open“-Signale durch Bildabruf.

**Stolpersteine:**
- **SMS-Reset/MFA** erfordert ggf. eine Telefonnummer (Abwägung: einfachere Wiederherstellung vs. zusätzliche Identitätsbindung).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **App-basierte MFA** statt SMS (vermeidet Telefonnummer als Recovery-Kanal).
- Trenne Rollen: **Admin-Konto** nur für Verwaltung, Mailbox-Login nur für Nutzung (wo möglich).
- Nutze **E2E für Inhalte** (PGP via Mailvelope oder S/MIME) für sensible Kommunikation.  
**Abwägung:** mehr Einrichtung/Schlüsselverwaltung, mögliche Support- und Kompatibilitätsprobleme.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze **separates Browser-Profil/VM** nur für Webmail und Admin-Portal; keine Browser-Erweiterungen außer notwendigen (z.B. Mailvelope).
- **Netzwerk-Minimierung:** Blockiere Website-Tracker (z.B. Analytics) clientseitig; teste Auswirkungen auf Login/Support-Chat.
- Für besonders sensible Inhalte: **E2E + separate Identitäten/Aliasse** (organisatorische Trennung).  
**Abwägung:** deutlicher Komfortverlust, mehr Fehlerquellen durch Komplexität.

</details>

## Features
- IMAP/POP/SMTP + Webmail (klassische Client-Kompatibilität)
- MFA/2FA: Authenticator-App, SMS (optional), YubiKey
- Verschlüsselung in Transit & „at rest“ (laut Privacy Policy)
- GDPR-Datenexport (JSON) über Support-Workflow
- Phishing/Spam-Reporting-Tool (Reports laut Anbieter 1 Jahr gespeichert)

## Alternativen
- Proton Mail (Abwägung: stärker integrierte E2E-Workflows vs. weniger Standard-Protokoll-Fokus)
- Tutanota (Abwägung: eigener Ansatz/Clients vs. klassische IMAP-Interoperabilität)
- Fastmail (Abwägung: klassischer Mailhost-Ansatz vs. andere Jurisdiktion/Policy-Schwerpunkte)
- Mailbox.org (Abwägung: EU/DE-Kontext vs. anderes Bedien- und Feature-Set)

## Nicht gelöst / offene Punkte
- In Privacy Policy/Docs nicht ersichtlich, wie lange **Zugriffs-/SMTP-/IMAP-Logs** (z.B. IP, Login-Zeit, Fehler) gespeichert werden und ob es Self-Service-Löschoptionen gibt (Stand: 2026-01-13).

## Quellen

- Proton Mail (Fokus: "E2E innerhalb des Dienstes; Trade-off: Ökosystem/Kompatibilität)
- Tutanota (Fokus: "E2E + eigener Client/Ansatz; Trade-off: Standard-Protokolle/Interoperabilität)
- Fastmail (Fokus: "klassische IMAP-Mailbox + Features; Trade-off: andere Jurisdiktion/Policy-Details)
- Mailbox.org (Fokus: "DE/EU-Anbieter; Trade-off: anderer Funktionsumfang/Bedienkonzept)
- https://www.thexyz.com/report-abuse
- [Privacy Policy](https://www.thexyz.com/about/privacy-policy)
- [Terms of Service](https://www.thexyz.com/terms-of-service)
- [About Thexyz](https://www.thexyz.com/about.html)
- [Commitment to Security](https://www.thexyz.com/about/commitment-to-security)
- [GDPR Client Data Export](https://www.thexyz.com/input/gdpr-client-data-export/)
- [Enabling two-factor authentication (Knowledgebase)](https://www.thexyz.com/account/knowledgebase/15/Enabling-two-factor-authentication.html)
- [Manage Multi-Factor Authentication for Thexyz Webmail (Knowledgebase)](https://www.thexyz.com/account/knowledgebase/191/Manage-Multi-Factor-Authentication-for-Thexyz-Webmail.html)
- [PGP in Thexyz Webmail with Mailvelope (Knowledgebase)](https://www.thexyz.com/account/knowledgebase/184/How-to-install-end-to-end-encryption-PGP-for-the-Thexyz-Webmail-with-Mailvelope.html)
- [Security Features (Help Center)](https://help.thexyz.com/en/articles/6634851-security-features)
- [Accounting / Pricing / Billing (Help Center)](https://help.thexyz.com/en/articles/6624236-accounting-pricing-billing)
- [Report Abuse (Retention: 1 Jahr)](https://www.thexyz.com/report-abuse)
