---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / SimpleLogin"
url: "/anbieter/simplelogin/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-21"
robots: "index,follow"
description: "Kurzprofil von SimpleLogin (Kategorie: E-Mail-Aliasing)."
provider: ""
name: "SimpleLogin"
category: "E-Mail-Aliasing"
website: "https://simplelogin.io/"
repo: "https://github.com/simple-login/app"
license: "AGPL-3.0-only (Server/Webapp; weitere Komponenten siehe Repos)"
policies: ""
privacy: "https://simplelogin.io/privacy/"
terms: "https://simplelogin.io/terms/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "yes"
phone_required: "unknown"
kyc_required: "no"
jurisdiction: "Schweiz (Proton AG)"
region: "ch"
logs: "minimal"
retention: "mid"
retention_notes: "7 Tage (z.B. IP-Logs/Unzustellbar) bis max. 30 Tage (System-Logs/Account-Purge; Backups bis 14 Tage laut Privacy Policy)"
retention_max_days: "30"
data_notes: "SimpleLogin speichert laut Privacy Policy keine zugestellten E-Mails dauerhaft (Weiterleitung, danach Löschung), behält aber SMTP-bedingt Metadaten (Absender/Empfänger, IP, Betreff, Zeiten). IPs können in Server-Logs auftauchen (Standard: Löschung >7 Tage; bei Missbrauch ggf. dauerhaft). Native Apps können Crash-Diagnosedaten via „mobile analytics“ senden. Drittservices u.a. hCaptcha, Zendesk; Infrastruktur u.a. Proton/UpCloud (inkl. Object Storage für Profilbilder & temporäre Unzustellbar-Mails)."
features: ""
alternatives: ""
payment_processors: "Paddle (Karte/PayPal/Apple Pay/Überweisung), Apple In-App (iOS), Coinbase Commerce (Krypto), ProxyStore (Reseller-Coupons)"
sources: ""
---
## Kurzprofil

SimpleLogin ist ein Anbieter aus der Kategorie **E-Mail-Aliasing**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du E-Mail-Aliase zum Abschirmen deiner echten Adresse nutzen willst (inkl. Antworten „vom Alias“) und Open-Source + Self-Hosting als Option relevant sind.
- **Weniger geeignet wenn:** du möglichst wenig Metadaten beim Mail-Transit haben willst (E-Mail-Weiterleitung erzeugt zwangsläufig SMTP-Metadaten) oder du kein zusätzliches Konto/Service in deinem Login-Einrichtung möchtest.
- **Wichtigster Abwägung:** Alias-Komfort & Zustellbarkeit vs. unvermeidbare E-Mail-Metadaten (Absender/Empfänger/IP/Betreff/Zeiten) und Support-/Missbrauchs-Logs.

## Sofortmaßnahmen
- **2FA aktivieren (TOTP oder WebAuthn/FIDO):** reduziert das Risiko, dass ein Konto durch Passwort-Leaks übernommen wird.
- **Recovery Codes sicher ablegen:** verhindert Lockout nach Gerätewechsel/Key-Verlust.
- **PGP für Mailbox aktivieren (Premium):** schützt die weitergeleiteten Inhalte vor dem Mailbox-Anbieter (Abwägung: zusätzlicher Schlüssel-/Client-Aufwand).

## Entscheidungshilfe
- Wenn du nur wenige Aliase brauchst, dann starte mit dem Free-Tier (Abwägung: Alias-/Mailbox-Limits).
- Wenn du eigene Domains/Catch-all nutzen willst, dann ist Premium relevant (Abwägung: Zahlungsdaten bei Payment-Providern).
- Wenn du Antworten „vom Alias“ brauchst, dann prüfe vorab das Reply-/Reverse-Alias-Konzept (Abwägung: mehr Komplexität im Mailflow).
- Wenn du Datenflüsse möglichst selbst kontrollieren willst, dann ist Self-Hosting eine Option (Abwägung: Betrieb/Updates/Abuse-Handling liegen bei dir).
- Wenn du Apps nutzt, dann rechne mit möglichen Crash-/Diagnosedaten aus nativen Apps (Abwägung: Stabilitätsdiagnose vs. Zusatz-Metadaten).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | SimpleLogin |
| Kategorie | E-Mail-Aliasing |
| Website | https://simplelogin.io/ |
| Quellcode | https://github.com/simple-login/app |
| Lizenz | AGPL-3.0-only (Server/Webapp; weitere Komponenten siehe Repos) |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | no |
| Zahlungsabwicklung | Paddle (Karte/PayPal/Apple Pay/Überweisung), Apple In-App (iOS), Coinbase Commerce (Krypto), ProxyStore (Reseller-Coupons) |
| Jurisdiktion | Schweiz (Proton AG) |
| Logs | minimal |
| Retention | 7 Tage (z.B. IP-Logs/Unzustellbar) bis max. 30 Tage (System-Logs/Account-Purge; Backups bis 14 Tage laut Privacy Policy) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://simplelogin.io/privacy/
- AGB/Terms: https://simplelogin.io/terms/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Securitum Security report (Web) – 2022-03-15 (PDF): https://simplelogin.io/audit2022/web.pdf
- Securitum Security report (Android) – 2022-03-14 (PDF): https://simplelogin.io/audit2022/android.pdf

**Daten-Notizen (kurz):**
SimpleLogin speichert laut Privacy Policy keine zugestellten E-Mails dauerhaft (Weiterleitung, danach Löschung), behält aber SMTP-bedingt Metadaten (Absender/Empfänger, IP, Betreff, Zeiten). IPs können in Server-Logs auftauchen (Standard: Löschung >7 Tage; bei Missbrauch ggf. dauerhaft). Native Apps können Crash-Diagnosedaten via „mobile analytics“ senden. Drittservices u.a. hCaptcha, Zendesk; Infrastruktur u.a. Proton/UpCloud (inkl. Object Storage für Profilbilder & temporäre Unzustellbar-Mails).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Konto-E-Mail (Pflicht), optional Name/Profilbild; bei Zahlung: Rechnungsdaten über Payment-Provider; Support-Korrespondenz; E-Mail-Metadaten (z.B. Absender/Empfänger, eingehende IP, Betreff, Sende-/Empfangszeiten); Nutzungsdaten wie letzte Anmeldung und Volumen/Anzahl.
- **Wofür:** Betrieb des Alias-Dienstes, Abrechnung, Support, Missbrauchsabwehr/Legal-Compliance, Fehleranalyse (Crash-Daten in Apps).
- **Weitergabe/Subprozessoren:** Genannt werden u.a. Paddle (Zahlungen), Apple (iOS In-App), hCaptcha (Bot-Schutz), Zendesk (Support), UpCloud (Infrastruktur/Object Storage), Proton (Infrastruktur).
- **Drittlandtransfer:** Nicht angegeben (Datacenter laut Privacy Policy u.a. DE/CH/NL/FR).
- **Zahlungsabwicklung/Payment Processor:** Paddle (Karte/PayPal), iOS via Apple; zusätzlich Coinbase Commerce (Krypto) laut Pricing-Seite.
- **Kontakt/DSAR/DPA:** Kontakt für Privacy-Anfragen: privacy@simplelogin.io (in der Privacy Policy genannt); DPA/Subprozessoren-Liste als separate Seite nicht angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Website-Analytics via Plausible (laut Privacy Policy). Native Apps: Crash-Informationen können über „mobile analytics“ gesendet werden.
- **Abschaltbar?** Nicht angegeben (Privacy Policy beschreibt Erhebung, aber keinen konkreten Opt-out-Schalter).
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** Standard: Logs >7 Tage gelöscht (z.B. IP in Postfix/Nginx); System-Logs bis 30 Tage; Account-Löschung: Purge max. 30 Tage, Backups bis 14 Tage (laut Privacy Policy). Unzustellbare E-Mails/bounced: 7 Tage (laut Privacy Policy / Security).
- **Lösch-/Opt-out-Optionen:** Account kann gelöscht werden (Purge max. 30 Tage laut Privacy Policy); Opt-out für App-Crash-Analytics nicht dokumentiert.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** TLS für Datenübertragung; Datenbanken + Backups verschlüsselt „at rest“. Kein generelles E2E für weitergeleitete E-Mails; optional PGP-Verschlüsselung für Weiterleitung (Premium) möglich.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA via TOTP sowie WebAuthn (FIDO) dokumentiert; Recovery Codes werden nach 2FA-Einrichtung bereitgestellt.
- **Recovery/Account-Wiederherstellung:** Recovery Codes (einmalig nutzbar) nach 2FA-Einrichtung; weitere Recovery-Details nicht angegeben.
- **Vuln-Handling / Security-Kontakt:** Bug-Bounty/Responsible Disclosure: Meldung an security@proton.me (laut SimpleLogin-Blog).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **2FA aktivieren (TOTP oder WebAuthn/FIDO)**.  
   **Wo:** Web-App → *Settings* → *Security* → „Einrichtung TOTP“ oder „Einrichtung WebAuthn“.  
   **Prüfen:** 2FA ist als aktiv markiert; Recovery Codes wurden gespeichert.
2) **Session-Hygiene nutzen (Logout auf Shared Devices)**.  
   **Prüfen:** Nach Logout ist Dashboard nicht mehr erreichbar, erneuter Login erforderlich.
3) **PGP für Mailbox aktivieren (wenn Premium + Bedarf)**.  
   **Wo:** Dashboard → *Mailboxes* → Mailbox auswählen → *Edit* → „PGP“ aktivieren → Public Key hinterlegen.  
   **Prüfen:** Weitergeleitete Mails kommen verschlüsselt an; Betreff-Option (optional) geprüft.

**Stolpersteine:**
- E-Mail-Aliasing reduziert Spam/Tracking-Risiken bei der Adresse, löst aber nicht das Grundproblem von E-Mail-Metadaten (SMTP).
- Missbrauchsabwehr kann bei Verdachtsfällen zu stärkerer Log-Retention führen (Abwägung: Abuse-Prevention vs. Metadaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **nur die nötigsten Aliase** (z.B. pro Dienst), statt „für alles automatisch“ (Abwägung: weniger Komfort, dafür weniger Alias-Verwaltung).
- Vermeide unnötige Profilangaben (Name/Profilbild sind optional) (Abwägung: weniger Personalisierung).
- Nutze bevorzugt Mailboxen, die PGP/„Zero-access“-Modelle unterstützen, oder aktiviere PGP in SimpleLogin (Premium) (Abwägung: Schlüsselmanagement).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne Identitäten strikt: eigener Browser/Profil nur für SimpleLogin-Accountzugriff (Abwägung: Mehraufwand).
- Self-Hosting erwägen, um Infrastruktur/Datenflüsse selbst zu kontrollieren (Abwägung: Betrieb, Updates, Abuse-Handling).
- Minimale App-Nutzung (z.B. nur Web über isoliertes Profil), falls Crash-/Diagnosedaten ein Risiko darstellen (Abwägung: weniger Komfort unterwegs).

</details>

## Features
- E-Mail-Aliase erstellen & verwalten (Web, Apps, Browser-Extensions)
- Antworten *vom Alias* (Reply from alias)
- Eigene Domains + Catch-all (Premium)
- Reverse-Alias / neue Mail *vom Alias aus* initiieren (Premium)
- Mehrere Mailboxen & Weiterleitungsregeln (Premium: unbegrenzt)
- Optional: PGP-Verschlüsselung für Weiterleitung (Premium)

## Alternativen
- AnonAddy (E-Mail-Aliasing; Abwägung: anderer Funktionsumfang/Bedienmodell, ebenfalls Self-Hosting-fokussiert)
- Firefox Relay (E-Mail-Aliase; Abwägung: stärker an Firefox/Ökosystem gekoppelt, Funktionsumfang je nach Plan)
- DuckDuckGo E-Mail Protection (Alias/Weiterleitung; Abwägung: weniger Steuerung/Domain-Optionen)
- Apple „Hide My E-Mail“ (Alias; Abwägung: iCloud/Apple-Ökosystem, weniger Portabilität)

## Nicht gelöst / offene Punkte
- Unklar, ob und wie **Crash-/Diagnosedaten** in iOS/Android-Apps deaktivierbar sind (und welcher Analytics-Anbieter konkret genutzt wird).

## Quellen

- Securitum Security report (Web) – 2022-03-15 (PDF): "https://simplelogin.io/audit2022/web.pdf
- Securitum Security report (Android) – 2022-03-14 (PDF): "https://simplelogin.io/audit2022/android.pdf
- Mehrere Mailboxen & Weiterleitungsregeln (Premium: "unbegrenzt)
- Optional: "PGP-Verschlüsselung für Weiterleitung (Premium)
- AnonAddy (E-Mail-Aliasing; Trade-off: "anderer Funktionsumfang/Bedienmodell, ebenfalls Self-Hosting-fokussiert)
- Firefox Relay (E-Mail-Aliase; Trade-off: "stärker an Firefox/Ökosystem gekoppelt, Funktionsumfang je nach Plan)
- DuckDuckGo E-Mail Protection (Alias/Weiterleitung; Trade-off: "weniger Steuerung/Domain-Optionen)
- Apple „Hide My E-Mail“ (Alias; Trade-off: "iCloud/Apple-Ökosystem, weniger Portabilität)
- https://simplelogin.io/audit2022/android.pdf
- [SimpleLogin Privacy Policy](https://simplelogin.io/privacy/)
- [SimpleLogin Terms and Conditions](https://simplelogin.io/terms/)
- [SimpleLogin Pricing](https://simplelogin.io/pricing/)
- [SimpleLogin Security Overview](https://simplelogin.io/security/)
- [SimpleLogin Docs: 2FA enable](https://simplelogin.io/docs/2fa/2fa-enable/)
- [SimpleLogin Docs: PGP encryption](https://simplelogin.io/docs/mailbox/pgp-encryption/)
- [SimpleLogin Blog: Bug bounty program](https://simplelogin.io/bug-bounty-program/)
- [Audit PDF: Web Security report (Securitum, 2022)](https://simplelogin.io/audit2022/web.pdf)
- [Audit PDF: Android Security report (Securitum, 2022)](https://simplelogin.io/audit2022/android.pdf)
