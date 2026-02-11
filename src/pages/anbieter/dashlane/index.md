---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Dashlane"
url: "/anbieter/dashlane/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-10"
robots: "index,follow"
description: "Kurzprofil von Dashlane (Kategorie: Passwort-Manager)."
provider: ""
name: "Dashlane"
category: "Passwort-Manager"
website: "https://www.dashlane.com/"
repo: "https://github.com/Dashlane"
license: "Proprietär (Produkt); Client-Code teilweise öffentlich (z.B. Mobile-Code unter CC BY-NC 4.0 laut Anbieter)"
policies: ""
privacy: "https://www.dashlane.com/privacy"
terms: "https://www.dashlane.com/terms"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "partial"
self_host_possible: "no"
account_required: "yes"
phone_required: "no"
kyc_required: "unknown"
jurisdiction: "USA (Dashlane, Inc., New York); EU/Schweiz/UK-Kontakt/Datenschutz: siehe Privacy Policy (Dashlane, Inc. & Affiliates)"
region: "ch"
logs: "unknown"
retention: "long"
retention_notes: "Bis 30 Tage nach Account-Löschung (versch. Kategorien); Access-IP 45 Tage (B2C) / bis 1 Jahr (B2B); Event-Daten anonymisiert weiter gespeichert"
retention_max_days: "365"
data_notes: "Dashlane unterscheidet zwischen verschlüsselten „Secured Data“ im Tresor (Zero-Knowledge) und personenbezogenen Daten für Konto/Payment/Support. Zusätzlich erhebt Dashlane Nutzungsdaten über Logs (Event-/Behavioral-Daten) sowie Geräte/Browser-Daten."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Dashlane ist ein Anbieter aus der Kategorie **Passwort-Manager**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen cloud-synchronisierten Passwort-Manager mit Account-Login nutzen willst und mit Nutzungs-/Metadaten (Usage Data) für Betrieb/Verbesserung leben kannst.
- **Weniger geeignet wenn:** du einen komplett offline nutzbaren oder selbst hostbaren Passwort-Manager ohne Dienstkonto suchst.
- **Wichtigster Abwägung:** **Komfort (Sync/Recovery/Features) vs. Metadaten** (Nutzungsdaten, Geräte-/Browserdaten, IP-Logs; teils anonymisiert, teils mit Aufbewahrung).

## Sofortmaßnahmen
- **2FA für den Dashlane-Login aktivieren** → reduziert Risiko bei Passwort-Phishing/Leak.
- **PIN/Biometrie-Unlock + Auto-Lock nutzen** → schützt bei kurzzeitigem Gerätezugriff/Screen-Lock-Lücken.
- **Recovery-Key vorab einrichten und offline ablegen** → verhindert dauerhaften Datenverlust bei Lockout.

## Entscheidungshilfe
- Wenn du **über mehrere Geräte synchron** arbeiten willst, dann nutze Dashlane mit Account-Login (Abwägung: Serverkontakt + Usage Data/Metadaten).
- Wenn du **Metadaten minimieren** willst, dann prüfe in **Privacy & Data Settings** sowie Cookie/Tracking-Einstellungen, welche Verarbeitung abschaltbar ist (Abwägung: bestimmte Services können „ineffective upon opt out“ sein).
- Wenn du **phishing-resistente Logins** bevorzugst, dann nutze **Passkeys** dort, wo verfügbar (Abwägung: Passkey-Verfügbarkeit hängt von Website/App/Browser ab).
- Wenn du **Lockout-Risiko** reduzieren willst, dann aktiviere **Account-Recovery-Optionen** vorab (Abwägung: Recovery kann Identitätsprüfung/zusätzliche Datenflüsse auslösen).
- Wenn du **Self-Hosting/Offline** brauchst, dann ist ein anderes Modell relevant (Abwägung: mehr Eigenbetrieb/Sync-Einrichtung, weniger Komfortfunktionen „out of the box“).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Dashlane |
| Kategorie | Passwort-Manager |
| Website | https://www.dashlane.com/ |
| Quellcode | https://github.com/Dashlane |
| Lizenz | Proprietär (Produkt); Client-Code teilweise öffentlich (z.B. Mobile-Code unter CC BY-NC 4.0 laut Anbieter) |
| Preismodell | paid |
| Free Tier | no |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Stripe, PayPal, Checkout.com, ProcessOut u.a. (laut Subprocessor List) |
| Jurisdiktion | USA (Dashlane, Inc., New York); EU/Schweiz/UK-Kontakt/Datenschutz: siehe Privacy Policy (Dashlane, Inc. & Affiliates) |
| Logs | unknown |
| Retention | Bis 30 Tage nach Account-Löschung (versch. Kategorien); Access-IP 45 Tage (B2C) / bis 1 Jahr (B2B); Event-Daten anonymisiert weiter gespeichert |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.dashlane.com/privacy
- AGB/Terms: https://www.dashlane.com/terms
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- SOC 2 Type II (laut Dashlane Trust Center/Resources; Zugriff ggf. eingeschränkt)
- ISO/IEC 27001 Zertifikat (laut Dashlane Trust Center/Resources; Zugriff ggf. eingeschränkt)

**Daten-Notizen (kurz):**
Dashlane trennt **„Secured Data“** (Inhalte im Tresor) von anderen **personenbezogenen Daten** für Konto/Payment/Support. Laut Privacy Policy kann Dashlane wegen **Zero-Knowledge-Architektur** nicht auf Secured Data zugreifen. Zusätzlich fallen **Usage Data** (Event/Behavioral), **Geräte-/Browserdaten** und **IP-Daten** an; Teile davon werden nach Account-Löschung anonymisiert oder zeitlich begrenzt aufbewahrt.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** E-Mail-Adresse (Account), bei bezahlten Konten Billing-Daten (teilweise/abgeleitet), Support-Korrespondenz; technisch: IP-Adressen, Geräte-/Browserdaten, Usage Data (Event/Behavioral).  
- **Wofür:** Konto bereitstellen/absichern, Support, Payment-Abwicklung, Services betreiben/verbessern, Compliance/regionale Hinweise.  
- **Weitergabe/Subprozessoren:** Dashlane nennt eine **Subprocessors List** mit Dienstleistern für Hosting/Support/Payments/Analytics (u.a. AWS für Hosting/Storage/Sync; Zendesk für Support; Payment- und Analytics-Dienstleister je nach Zweck).  
- **Drittlandtransfer:** Dashlane nennt Affiliate-/Service-Provider-Transfers (u.a. in die USA) und beschreibt zusätzliche Schutzmaßnahmen (z.B. DPA zwischen EU/US-Affiliates).  
- **Zahlungsabwicklung/Payment Processor:** Zahlungsdaten werden von Zahlungsdienstleistern verarbeitet; Dashlane nennt mehrere Payment-bezogene Subprozessoren (z.B. Stripe, PayPal, Checkout.com, ProcessOut).  
- **Kontakt/DSAR/DPA:** Privacy Policy verweist auf „Privacy and Data Settings“ (in App), Support sowie Kontaktadressen (u.a. legal@dashlane.com, dpo@dashlane.com). Eine Data Processing Addendum (DPA)-Seite ist verfügbar.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy werden **Usage Data über Logs** erhoben (Event Data + Behavioral Data) und Geräte-/Browserdaten automatisch geloggt.
- **Abschaltbar?** Für **nicht essenzielle Cookies** nennt Dashlane eine Abschaltmöglichkeit über Cookie Preferences; ein genereller Opt-out für In-App-Usage-Logs ist in den zentralen Aussagen nicht eindeutig beschrieben.
- **Wo (Menüpfad):** In den Apps über **Account/Settings → „Privacy and Data Settings“** (laut Privacy Policy) sowie auf der Website über **Cookie Preferences**.

**Logs & Retention:**
- **Logging-Level:** Nicht angegeben (Details zu Kategorien/Verwendung in Privacy Policy).
- **Aufbewahrung (Auszug):**
  - Registration Data: bis **30 Tage** nach Account-Löschung  
  - Billing Data: bis **30 Tage** nach Account-Löschung  
  - Support-Historien: bis **30 Tage** nach Account-Löschung  
  - Originating IP: bis **30 Tage** nach Account-Löschung  
  - Access IPs: **45 Tage** (B2C) / bis **1 Jahr** (B2B)  
  - Device/Browser-Daten: nicht gelöscht, aber **innerhalb 30 Tagen anonymisiert**  
  - Event Data: wird nach Löschung **anonymisiert weiter gespeichert** (historische Records)  
- **Lösch-/Opt-out-Optionen:** Account-Löschung: personenbezogene Daten werden laut Privacy Policy **innerhalb 30 Tagen** gelöscht; Export von Secured Data ist möglich.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support und bestimmte Funktionen erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Dashlane beschreibt eine **Zero-Knowledge-Architektur**: Secured Data ist verschlüsselt, Schlüssel sind nutzerspezifisch, Dashlane hat keinen Zugriff und nennt keinen Backdoor-Mechanismus; Entschlüsselung erfolgt lokal auf autorisierten Geräten.
- **KDF/Parameter/Schlüsselableitung:** Master Password wird genutzt, um Verschlüsselungsschlüssel zu generieren; konkrete KDF-Parameter sind in den zentralen Quellen nicht eindeutig als Parameterliste ausgewiesen.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA für Dashlane-Login: **Authenticator-Token oder E-Mail-Verifizierungscode**. Zusätzlich gibt es PIN-/Biometrie-Unlock; Sicherheitskeys können für **Biometric unlock** genutzt werden, aber **nicht** als 2FA-Second-Factor (laut Support).
- **Recovery/Account-Wiederherstellung:** Recovery-Optionen (u.a. **Account Recovery Key**, Admin-assisted Recovery, Biometric recovery) müssen **vorab aktiviert** werden; Recovery Key erfordert zusätzlich einen **Identity-Verification-Schritt**.
- **Vuln-Handling / Security-Kontakt:** Dashlane veröffentlicht **security.txt** mit Kontakt (security@dashlane.com) und Verweis auf Bug-Bounty/HackerOne.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **2FA aktivieren** (Authenticator oder E-Mail-Code), falls du dich mit Master Password anmeldest.  
   **Wo:** My account → Settings → Security settings → 2-factor authentication.  
   **Prüfen:** Test-Login in neuem Browser/auf neuem Gerät fordert 6-stelligen Token/Code.
2) **PIN-/Biometrie-Unlock + Auto-Lock** nutzen (schnell sperren, sicher entsperren).  
   **Wo:** Web-App: PIN unlock / Biometric unlock (Support-Anleitung).  
   **Prüfen:** Lock/Unlock im Alltag + Master-Passwort wird periodisch weiterhin verlangt (z.B. nach X Tagen).
3) **Recovery Key vorab einrichten und offline ablegen.**  
   **Prüfen:** Recovery Key existiert, ist außerhalb von Dashlane gespeichert, und du verstehst die Verifikationsanforderungen (E-Mail/Authenticator).

**Stolpersteine:**
- Recovery-Optionen können zusätzliche Identitätsprüfung auslösen (Abwägung: Recovery/Support vs. mehr Datenflüsse).
- Account-Löschung kann erfordern, dass die Smart Extension installiert ist und du ausgeloggt bist (Härtung: vorab Export machen).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Telefonnummer nur wenn nötig** (z.B. 2FA-Recovery-Flows), sonst vermeiden (Abwägung: weniger Recovery-Wege).
- **Cookie/Tracking auf der Website reduzieren** (nicht essenzielle Cookies ablehnen; Do-Not-Share-Seite prüfen).  
- **Export-Strategie**: regelmäßiger Tresor-Export (Abwägung: Export-Dateien sind ein neuer sensitiver Speicherort → verschlüsselt ablegen).

**Abwägung:** mehr Eigenverantwortung bei Recovery/Support und bei Migration/Backups.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Getrennte Browser-Profile/VM** für Password-Manager-Nutzung, um Tracking/Session-Risiken zu senken (Abwägung: mehr Aufwand).
- **Striktere Login-Hygiene:** 2FA immer verlangen (wo möglich) + minimale Geräteanzahl (Abwägung: weniger Komfort).
- **Recovery nur mit Offline-Backup planen:** Recovery Key wie „Notfall-Schlüssel“ behandeln (Abwägung: Verlust = Lockout-Risiko).

</details>

## Features
- Unbegrenzte Passwörter & Passkeys (Planabhängig, personal Premium).
- Passkeys können in Dashlane erstellt/gespeichert werden; Sync über Geräte wird beschrieben.
- 2FA für Dashlane-Login (Authenticator-Token oder E-Mail-Code).
- PIN-/Biometrie-Unlock (inkl. Option mit Security Key für Biometric unlock; nicht als 2FA-Second-Factor).
- Account-Recovery-Optionen (Recovery Key, Admin-assisted, Biometric recovery) – erfordern Vorab-Einrichtung.
- Subprozessor-Transparenz über öffentliche Subprocessors List.

## Alternativen
- Bitwarden (wenn Open-Source-/Hosting-Aspekte wichtig sind; Abwägung: Einrichtung/Policy-Details prüfen).
- 1Password (wenn Workflow-/Teamfunktionen wichtig sind; Abwägung: stärkerer Vendor-Lock-in möglich).
- KeePassXC (wenn Offline-Dateimodell wichtig ist; Abwägung: Sync/Sharing nur mit Zusatzsetup).
- Proton Pass (wenn Ökosystem-Integration wichtig ist; Abwägung: Feature-Abdeckung je Plattform prüfen).
- Enpass (wenn lokale Speicherung bevorzugt wird; Abwägung: Sync je nach Provider/Einrichtung prüfen).

## Nicht gelöst / offene Punkte
- Unklar, welche Teile der Nutzungsdatenerhebung (Usage Data) in den Apps konkret deaktivierbar sind (jenseits Website-Cookies / Do-Not-Share / Marketing-Opt-out).
- Unklar, ob vollständige Auditberichte (SOC2/ISO) ohne zusätzliche Registrierung/Anfrage öffentlich abrufbar sind.

## Quellen

- Optional: "VPN-Integration (Partner) je nach Plan
- Bitwarden (anderer Schwerpunkt: "Open-Source-/Hosting-Optionen je nach Einsatz; Trade-off: Setup/Policy-Verwaltung prüfen)
- 1Password (anderer Schwerpunkt: "Komfort/Team-Workflows; Trade-off: stärkerer Vendor-Lock-in möglich)
- KeePassXC (anderer Schwerpunkt: "Offline-Datei; Trade-off: Sync/Sharing nur mit Zusatz-Setup)
- Proton Pass (anderer Schwerpunkt: "Ökosystem-Integration; Trade-off: Feature-Abdeckung je nach Plattform prüfen)
- Enpass (anderer Schwerpunkt: "lokale Tresor-Speicherung möglich; Trade-off: Sync je nach Provider/Setup)
- https://support.dashlane.com/
- [Dashlane Privacy Policy](https://www.dashlane.com/privacy)
- [Dashlane Subprocessors List](https://www.dashlane.com/privacy/subprocessors)
- [Dashlane Terms of Service](https://www.dashlane.com/terms)
- [Dashlane Security Whitepaper (PDF)](https://www.dashlane.com/uploads/2021/07/whitepaper.pdf)
- [Passkeys in Dashlane (Help Center)](https://support.dashlane.com/hc/en-us/articles/7888558064274-Passkeys-in-Dashlane)
- [2-factor authentication (2FA) in Dashlane (Help Center)](https://support.dashlane.com/hc/en-us/articles/202625042-2-factor-authentication-2FA-in-Dashlane)
- [Use 2FA to log in to your Dashlane account (Help Center)](https://support.dashlane.com/hc/en-us/articles/18406747387026-Use-2-factor-authentication-2FA-to-log-in-to-your-Dashlane-account)
- [Open the web app with your PIN code, fingerprint, or security key (Help Center)](https://support.dashlane.com/hc/en-us/articles/360021374760-Open-the-web-app-with-your-PIN-code-fingerprint-or-security-key)
- [Account recovery options for Dashlane (Help Center)](https://support.dashlane.com/hc/en-us/articles/11282971791634-Account-recovery-options-for-Dashlane)
- [Set up and use Dashlane’s account recovery key (Help Center)](https://support.dashlane.com/hc/en-us/articles/11004803881490-Set-up-and-use-Dashlane-s-account-recovery-key)
- [Delete your Dashlane account and data (Help Center)](https://support.dashlane.com/hc/en-us/articles/202907531-Delete-your-Dashlane-account-and-data)
- [security.txt (Dashlane)](https://www.dashlane.com/.well-known/security.txt)
- [Dashlane personal pricing](https://www.dashlane.com/pricing-personal)
- [Compare Dashlane personal plans (Help Center)](https://support.dashlane.com/hc/en-us/articles/360001166969-Compare-Dashlane-personal-plans)
- [The Dashlane Free Plan Is Ending Soon (Blog)](https://www.dashlane.com/dashlane-free-ending)
- [Dashlane’s Mobile Code Now Publicly Available (Blog)](https://www.dashlane.com/mobile-code-now-publicly-available)
