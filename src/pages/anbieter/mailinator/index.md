---
layout: ../../../layouts/DocLayout.astro
title: Anbieter / Mailinator (Temp Mail)
url: /anbieter/mailinator/
chapter: Anbieter
type: single
format: provider
level: ''
money: maybe
status: done
updated: '2026-01-18'
robots: index,follow
description: 'Kurzprofil von Mailinator (Temp Mail) (Kategorie: E-Mail-Aliasing).'
provider: ''
name: Mailinator (Temp Mail)
category: E-Mail-Aliasing
website: https://www.mailinator.com/
repo: https://github.com/manybrain/mailinator-java-client
license: Nicht angegeben
policies: ''
privacy: https://www.mailinator.com/privacy-policy/
terms: https://www.mailinator.com/terms-of-use/
transparency: Nicht angegeben
warrant_canary: Nicht angegeben
audits: ''
pricing: mixed
free_tier: 'yes'
open_source: partial
self_host_possible: unknown
account_required: 'no'
phone_required: 'no'
kyc_required: 'no'
jurisdiction: USA (Michigan; Manybrain, LLC)
region: us
logs: minimal
retention: unknown
retention_notes: 'Public: mehrere Stunden; Private: ""Permanent Storage"" (Dauer nicht
  angegeben); Subscriber-Activity-Logs: 6 Wochen; Backups: 1 Monat (hot) / bis 1 Jahr
  (off-net)'
retention_max_days: '365'
data_notes: Public-Inboxes sind bewusst öffentlich (kein Vertraulichkeitsversprechen).
  Private Domains sind für Subscriber gedacht; Private-Mails laut Anbieter „encrypted
  at rest“. Website nutzt Cookies/Google Analytics; Web-Traffic über Cloudflare; Hosting
  u.a. bei Linode/DigitalOcean; Zahlung über Stripe.
features: ''
alternatives: ''
sources: ''
---
## Kurzprofil

Mailinator (Temp Mail) ist ein Anbieter aus der Kategorie **E-Mail-Aliasing**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du kurzfristig eine Einweg-Adresse brauchst (z.B. für Low-Risk-Signups/Tests) und dir bewusst ist, dass Public-Inboxes öffentlich einsehbar sind.
- **Weniger geeignet wenn:** du vertrauliche Inhalte empfängst oder E-Mail als Recovery-Kanal für wichtige Konten nutzt (Public-Inbox kann von Dritten mitgelesen werden).
- **Wichtigster Abwägung:** **kein Konto & schnelle Nutzung** vs. **keine Vertraulichkeit** im Public-System (und zusätzlich Website-Tracking/Analytics auf der Weboberfläche).

## Sofortmaßnahmen
- **Nutze zufällige Inbox-Namen** (lange, nicht erratbare Strings) und verwende sie nur einmalig: reduziert das Risiko, dass Dritte dieselbe Inbox finden.  
- **Public-Inbox nur für „nichts Geheimes“ verwenden:** vermeidet, dass OTP/Reset-Codes oder persönliche Daten öffentlich sichtbar werden.  
- **Browser-Tracking reduzieren** (z.B. Drittanbieter-Cookies/Analytics blocken): verringert Website-Metadaten wie IP/Referrer über Analytics.

## Entscheidungshilfe
- Wenn du nur eine einmalige Bestätigungsmail ohne sensible Inhalte brauchst, dann nutze eine **Public Inbox** (Abwägung: Inhalte sind grundsätzlich öffentlich).  
- Wenn du Testmails/OTPs **nicht öffentlich** sehen willst, dann nutze **Private Domains** (Abwägung: Account/Verifikation und ggf. Zahlung).  
- Wenn du verhindern willst, dass E-Mail-Inhalte im Klartext öffentlich abrufbar sind, dann vermeide **@mailinator.com Public** und nutze **Private** (Abwägung: mehr Einrichtung/Identitätsbindung).  
- Wenn du E-Mails **senden** musst, dann passt Mailinator nicht (Abwägung: Mailinator ist „receive-only“).  
- Wenn du Website-Metadaten (IP/Referrer) minimieren willst, dann nutze Tracking-Blocker oder ein getrenntes Browserprofil (Abwägung: einzelne Website-Funktionen können eingeschränkt sein).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Mailinator (Temp Mail) |
| Kategorie | E-Mail-Aliasing |
| Website | https://www.mailinator.com/ |
| Quellcode | https://github.com/manybrain/mailinator-java-client |
| Lizenz | Nicht angegeben |
| Preismodell | mixed (Public kostenlos; Verified Pro kostenlos mit Verifikation; weitere Pläne kostenpflichtig) |
| Free Tier | yes |
| Open Source | partial (SDK/Client-Code öffentlich; Dienst selbst nicht als Open Source beschrieben) |
| Konto erforderlich | no (Public Inbox), ja für Private/Verified/Paid |
| Telefon erforderlich | no (Public Inbox); für Verified Pro wird „Phone number OR LinkedIn Profile“ abgefragt |
| KYC erforderlich | no |
| Zahlungsabwicklung | Stripe (laut Anbieter) |
| Jurisdiktion | USA (Michigan; Manybrain, LLC) |
| Logs | minimal (Public: keine User-Activity-Logs; Subscriber: Aktivität 6 Wochen) |
| Retention | Public: mehrere Stunden; einzelne Inhalte ggf. wenige Tage (Spam/Abuse); Subscriber-Activity-Logs: 6 Wochen; Backups: 1 Monat/ bis 1 Jahr |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.mailinator.com/privacy-policy/
- AGB/Terms: https://www.mailinator.com/terms-of-use/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Public-Mailboxen sind laut Anbieter „public domain data“ (keine Privatheit). Website-Nutzung kann über Cookies/Google Analytics Metadaten erfassen; Cloudflare als Proxy; Hosting u.a. Linode/DigitalOcean; Zahlung über Stripe.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - Website: Cookies/Usage-Daten inkl. Browsertyp, IP-Adresse, Referrer-URL, Zeitstempel/Seitenaufrufe; außerdem Google Analytics (laut Privacy Policy).  
  - Account/Subscription (falls genutzt): personenbezogene Angaben zur Identitäts-/Accountverwaltung (laut Privacy Policy).  
  - Public System: E-Mails sind öffentlich; „no expectation of privacy“ (laut Privacy Policy/Security).  
- **Wofür:** Betrieb der Website/Services, Analytics/Optimierung, Login/Accountverwaltung, Sicherheit/Integrität, Support-Kommunikation (laut Privacy Policy).  
- **Weitergabe/Subprozessoren:**  
  - Drittanbieter-Dienste/Service Provider (nicht als vollständige Liste genannt).  
  - Explizit genannt: Google Analytics; Cloudflare (Proxy); Hosting bei Linode & DigitalOcean; Zahlungsabwicklung über Stripe.  
- **Drittlandtransfer:** Verarbeitung/Server in den USA; Zugriff von außerhalb → Transfer/Verarbeitung in den USA (laut Privacy Policy).  
- **Zahlungsabwicklung/Payment Processor:** Stripe (laut Security).  
- **Kontakt/DSAR/DPA:** Support-Kontakt wird genannt (support@manybrain.com); DSAR/DPA-Prozess nicht konkret beschrieben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy: Website nutzt Cookies/Usage Reports und kann Google Analytics einsetzen.  
- **Abschaltbar?** Teilweise über Browser-Einstellungen/Blocker (Cookies/Analytics); kann Website-Funktionen beeinträchtigen (laut Privacy Policy).  
- **Wo (Menüpfad):** Browser → Datenschutz → Cookies/Tracking-Schutz (geräte-/browserabhängig).

**Logs & Retention:**
- **Logging-Level:** minimal  
  - Public: „No user activity is logged“ im Public-System (laut Security).  
  - Subscriber: „Subscriber activity is logged and kept for 6 weeks“ (laut Security).  
- **Aufbewahrung:**  
  - Public E-Mails: laut FAQ üblicherweise mehrere Stunden; einzelne Mails können für Spam/Abuse-Analyse bis zu wenige Tage vorgehalten werden.  
  - Backups: hot backups 1 Monat; off-net backups bis 1 Jahr (laut Security).  
- **Lösch-/Opt-out-Optionen:** Für Public-Inboxes keine privaten Löschgarantien (öffentliches System); für Website-Tracking Opt-out primär über Browser/Consent/Blocker.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:**  
  - Web/API: HTTPS wird erzwungen; REST API ebenfalls über HTTPS (laut Security).  
  - SMTP: STARTTLS wird unterstützt (laut Security).  
  - Private System: „Bodies of E-Mails … encrypted at rest“ (laut Security).  
  - Public System: E-Mail im Public-System „not encrypted“ und öffentlich verfügbar (laut Security/Privacy).  
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben; Passwörter werden als „irreversible cryptographic hash“ gespeichert (laut Security).  
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben (für Mailinator-Account).  
- **Recovery/Account-Wiederherstellung:** Passwort-Recovery per E-Mail wird angeboten (laut Public Inbox/Terms).  
- **Vuln-Handling / Security-Kontakt:** Drittanbieter-Reviews/Penetrationstests „at least yearly“; High-Impact-Issues innerhalb 30 Tagen (laut Security). Kontakt: support@manybrain.com (laut Security/Support).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Public Inbox nur für Low-Risk verwenden** (z.B. Wegwerf-Signups/Tests).  
   **Prüfen:** Inhalt enthält keine privaten Daten/Recovery-Codes.
2) **Inbox-Namen randomisieren** (lang & unerratbar).  
   **Prüfen:** Name ist nicht wiederverwendet und nicht ableitbar (z.B. kein Nickname).
3) **Tracking reduzieren** (Cookies/Analytics blocken, getrenntes Browserprofil).  
   **Prüfen:** Drittanbieter-Cookies blockiert; Seite funktioniert noch ausreichend.

**Stolpersteine:**
- Public-System ist explizit öffentlich (Abwägung: maximaler Komfort vs. keinerlei Vertraulichkeit).
- E-Mail ist „receive-only“: kein Versand möglich, kein „echtes“ Alias-Weiterleiten.

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze statt Public-Inbox eine **Private Domain** (Verified Pro/Plan), wenn Inhalte nicht öffentlich sein sollen.  
- Verwende ein separates Browserprofil nur für diesen Dienst (reduziert Cross-Site-Linking).  
- Reduziere Identitätsbindung bei Verifikation (z.B. falls „Phone OR LinkedIn“ angeboten wird: das wählen, was weniger Daten preisgibt).  
**Abwägung:** Konto/Verifikation + ggf. Kosten; mehr Verwaltung.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze Private Domains nur in isolierter Umgebung (VM/Container/isoliertes Browserprofil).  
- Netzwerkhärtung: nur HTTPS-Endpunkte zulassen (wenn du Netzwerkregeln pflegst); API getrennt vom Browser.  
- Keine sensiblen Inhalte in Testmails; nutze Dummy-Daten (auch in Private Domains).  
**Abwägung:** hoher Aufwand, weniger Komfort; Test-Realismus kann sinken.

</details>

## Features
- Öffentliche Einweg-Inboxes ohne Registrierung (Public Inbox)
- Private Domains für Subscriber/Verified Pro (nicht öffentlich einsehbar)
- API-Zugriff & Automatisierung (je nach Plan)
- Receive-only (kein Versand von E-Mails)
- TLS/HTTPS für Web/API; SMTP mit STARTTLS (laut Anbieter)

## Alternativen
- Eigene Domain mit Catch-all/Weiterleitung (Abwägung: eigener Mailbetrieb/Provider, mehr Kontrolle über Retention)
- Plus-Addressing/Subaddressing (Abwägung: nicht überall akzeptiert, Alias-Struktur erkennbar)
- Aliasing-Dienste mit Weiterleitung ins Hauptpostfach (Abwägung: zusätzlicher Vermittler, aber bequeme Zustellung)

## Nicht gelöst / offene Punkte
- Keine öffentlich auffindbare, vollständige Subprozessoren-/DPA-Liste.
- Unklar, ob Mailinator-Accounts 2FA/MFA für Logins unterstützen.

## Quellen

- "Eigene Domain mit Catch-all/Weiterleitung (Trade-off: "eigener Mailbetrieb/Provider, mehr Kontrolle über Retention)"
- "Plus-Addressing/Subaddressing (Trade-off: "nicht überall akzeptiert, Alias-Struktur erkennbar)"
- "Aliasing-Dienste mit Weiterleitung ins Hauptpostfach (Trade-off: "zusätzlicher Vermittler, aber bequeme Zustellung)"
- https://github.com/manybrain/mailinator-java-client"
- [Mailinator – Privacy Policy](https://www.mailinator.com/privacy-policy/)
- [Mailinator – Terms of Use](https://www.mailinator.com/terms-of-use/)
- [Mailinator – Mailinator FAQs](https://www.mailinator.com/mailinator-faq/)
- [Mailinator – Security (v4)](https://www.mailinator.com/v4/security.html)
- [Mailinator – Security Details](https://www.mailinator.com/v4/security-details.html)
- [Mailinator – Pricing](https://www.mailinator.com/pricing/)
- [Mailinator – Verified Pro Plan](https://www.mailinator.com/verified-pro-plan/)
- [GitHub – manybrain/mailinator-java-client](https://github.com/manybrain/mailinator-java-client)
