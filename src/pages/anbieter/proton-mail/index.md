---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Proton Mail"
url: "/anbieter/proton-mail/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von Proton Mail (Kategorie: E-Mail)."
provider: ""
name: "Proton Mail"
category: "E-Mail"
website: "https://proton.me/mail"
repo: "https://github.com/ProtonMail/WebClients"
license: "GPL-3.0-or-later"
policies: ""
privacy: "https://proton.me/mail/privacy-policy"
terms: "https://proton.me/legal/terms"
transparency: "https://proton.me/legal/transparency"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "partial"
self_host_possible: "no"
account_required: "yes"
phone_required: "unknown"
kyc_required: "no"
jurisdiction: "Schweiz (Proton AG)"
region: "ch"
logs: "configurable"
retention: "configurable"
retention_notes: "konfigurierbar (Auth-/Security-Event-Logs nur bei Aktivierung; Mail-Backups bis zu 30 Tage)"
retention_max_days: "30"
data_notes: "Proton Mail verschlüsselt E-Mail-Inhalte serverseitig, sodass Proton laut eigener Aussage keine technische Möglichkeit hat, verschlüsselte Inhalte zu lesen. Metadaten (z.B. Absender/Empfänger, Betreff, Zeitstempel, Dateinamen) fallen dennoch an. IP-Logging ist laut Proton standardmäßig deaktiviert, kann aber temporär (z.B. Verifikation/Anti-Abuse) oder bei Verstößen dauerhaft erfolgen; der Aktivitätsmonitor speichert IPs nur, wenn aktiviert."
features: ""
alternatives: ""
payment_processors: "Chargebee (Billing), Stripe, PayPal, Bitcoin; Cash/Donation nach Anfrage"
sources: ""
---
## Kurzprofil

Proton Mail ist ein Anbieter aus der Kategorie **E-Mail**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du verschlüsselte E-Mail-Inhalte im Proton-Ökosystem nutzen willst und Kontoschutz (2FA + Security-Key) sauber einrichten möchtest.
- **Weniger geeignet wenn:** du vollständige Kontrolle per Self-Hosting erwartest oder IMAP/SMTP „direkt“ ohne Zusatzkomponente brauchst.
- **Wichtigster Abwägung:** **Inhalte sind geschützt, Metadaten bleiben teilweise unvermeidbar** (z.B. Empfänger/Absender/Betreff/Timing) – plus optionales Aktivitäts-Logging vs. bessere Erkennung verdächtiger Logins.

## Sofortmaßnahmen
- **2FA aktivieren + Security-Key hinzufügen:** reduziert Risiko durch Passwortdiebstahl/Phishing (Schutzschicht über das Passwort hinaus).
- **Auto-Lock in der Mobile-App aktivieren:** schützt Mails bei Geräteverlust/„kurz unbeaufsichtigt“ (PIN/Biometrie + Timer).
- **Activity monitor bewusst wählen:** deaktiviert = weniger gespeicherte IP-Metadaten, aktiviert = mehr forensische Sicht bei Kontoangriffen.

## Entscheidungshilfe
- Wenn du **Phishing-Risiko** senken willst, dann nutze **2FA (TOTP) + Security-Key** (Abwägung: Recovery/Backup-Key organisieren).
- Wenn du **IMAP/SMTP-Clients** (Thunderbird/Outlook etc.) brauchst, dann nutze **Proton Mail Bridge** (Abwägung: lokaler Cache/Entschlüsselung auf dem Gerät).
- Wenn du **Metadaten im Konto** minimieren willst, dann lasse **Activity monitor / detailed events** aus (Abwägung: weniger Nachvollziehbarkeit bei verdächtigen Logins).
- Wenn du **Zahlungsmetadaten** reduzieren willst, dann wähle eine Zahlungsart mit weniger Klartextdaten (Abwägung: ggf. weniger Komfort bei Abrechnung/Refunds).
- Wenn du in Netzen mit **Zensur/Blocking** bist, dann kann **Alternative routing** (Bridge) helfen (Abwägung: Verkehr kann über zusätzliche Routing-Mechanismen laufen).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Proton Mail |
| Kategorie | E-Mail |
| Website | https://proton.me/mail |
| Quellcode | https://github.com/ProtonMail/WebClients |
| Lizenz | GPL-3.0-or-later |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | no |
| Zahlungsabwicklung | Chargebee (Billing), Stripe, PayPal, Bitcoin; Cash/Donation nach Anfrage |
| Jurisdiktion | Schweiz (Proton AG) |
| Logs | configurable |
| Retention | konfigurierbar (Auth-/Security-Event-Logs nur bei Aktivierung; Mail-Backups bis zu 30 Tage) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: [Proton Mail – Privacy Policy](https://proton.me/mail/privacy-policy)
- AGB/Terms: [Proton – Terms and Conditions](https://proton.me/legal/terms)
- Transparency Report: [Proton – Transparency Report](https://proton.me/legal/transparency)
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- [Securitum: Security Audit Report (Proton Mail Web-App, 2021)](https://res.cloudinary.com/dbulfrlrz/image/upload/v1687791128/Securitum-ProtonMail-report.pdf)
- Kontext/Ankündigung: [Proton – Security audit (Blog)](https://proton.mesecurity-audit)

**Daten-Notizen (kurz):**
Proton Mail beschreibt, dass E-Mail-Inhalte verschlüsselt gespeichert werden und Proton keine technische Möglichkeit hat, verschlüsselte Inhalte zu lesen. Gleichzeitig nennt Proton, dass Metadaten (z.B. Absender/Empfänger, Betreff, Zeitstempel, Dateinamen) für den Betrieb anfallen können. IP-Logging ist laut Proton standardmäßig deaktiviert, kann aber in bestimmten Fällen (Verifikation/Anti-Abuse/ToS) erfolgen oder optional über den Aktivitätsmonitor erfasst werden.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Proton nennt u.a. **Metadaten** (z.B. Absender/Empfänger, Betreff, Zeitstempel, Dateinamen) sowie Account-/Nutzungsdaten (z.B. Speichernutzung). Bei Sign-up/Anti-Abuse kann eine **SMS-/E-Mail-Verifikation** vorkommen; solche Angaben sollen laut Proton temporär gespeichert werden.
- **Wofür:** Betrieb des Dienstes, Missbrauchsvermeidung, Sicherheit, Support sowie Abrechnung (bei Paid).
- **Weitergabe/Subprozessoren:** Proton listet in der allgemeinen Privacy Policy **Datenprozessoren** (u.a. für Support/Abrechnung/Payments) und beschreibt, dass Standardvertragsklauseln genutzt werden können, wenn Daten in Länder ohne gleichwertigen Schutz übertragen werden.
- **Drittlandtransfer:** Laut Proton möglich (je nach genutzten Dienstleistern), mit vertraglichen Schutzmechanismen (SCC) und ergänzenden Maßnahmen.
- **Zahlungsabwicklung/Payment Processor:** Proton nennt u.a. **Chargebee**, sowie Drittanbieter für Kreditkarte/PayPal/Bitcoin; Kartendaten sollen nicht vollständig von Proton gespeichert werden.
- **Kontakt/DSAR/DPA:** Rechteausübung laut Proton über Account-Interface/Support; Enterprise/Business wird über DPA/Verträge abgedeckt (DPA ist öffentlich verlinkt).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Web: Proton beschreibt eigene Analytics („self-developed“) und dass IPs dabei nicht gespeichert werden; Apps/Bridge: Nutzung abhängig von Einstellungen/Modulen.
- **Abschaltbar?** Bridge: ja („Collect usage diagnostics“ kann deaktiviert werden). Für Crash-/Analytics in allen Clients ist die vollständige Opt-out-Doku nicht an einer Stelle gebündelt.
- **Wo (Menüpfad):**
  - Bridge → **Settings** → **Collect usage diagnostics** (toggle)
  - Mail Web → **Settings → All settings → Account → Security and privacy → Activity monitor** (für Security Events/Logs)

**Logs & Retention:**
- **Logging-Level:** configurable (IP-Logging standardmäßig aus; temporär möglich; Activity monitor optional und kann IPs erfassen)
- **Aufbewahrung:** konfigurierbar (Activity monitor nur bei Aktivierung; Backups bis zu 30 Tage laut Proton Mail Privacy Policy)
- **Lösch-/Opt-out-Optionen:** Activity monitor kann deaktiviert werden; laut Proton wird dabei die History gelöscht; in Activity monitor gibt es außerdem „Wipe“/„Download“ (CSV).

**Abwägung am Punkt:** Weniger Telemetrie/Events reduziert gespeicherte Metadaten, kann aber Diagnose/Incident-Analyse erschweren; mehr Events liefern Kontext bei Angriffen, erhöhen aber Metadaten-Fußabdruck (z.B. IPs).

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Proton beschreibt verschlüsselte Speicherung; verschlüsselte Inhalte sind für Proton laut eigener Aussage nicht lesbar. Schlüssel/Key-Material wird clientseitig verwaltet (u.a. Hinweis: Private Key im Browser verschlüsselt über „mailbox password“).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Proton unterstützt 2FA per Authenticator-App (TOTP) und zusätzlich U2F/FIDO2-Security-Keys (Security-Key erfordert zuvor aktiviertes TOTP).
- **Recovery/Account-Wiederherstellung:** Recovery-E-Mail/Recovery-Phone möglich; Recovery Phrase + Recovery File + Device-based recovery; „Emergency Access“ ist laut Proton ein Feature für Paid-Pläne.
- **Vuln-Handling / Security-Kontakt:** Offizielle Vulnerability-Disclosure-Policy + Meldung per E-Mail an security@proton.me.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **2FA aktivieren (TOTP)**  
   **Wo:** Account/Support-Anleitung „Two-factor authentication (2FA)“  
   **Prüfen:** Login fordert zusätzlich Code aus Authenticator-App.
2) **Security-Key hinzufügen (U2F/FIDO2)** *(wenn verfügbar)*  
   **Prüfen:** Login am Web klappt auch mit Security-Key (und du hast mindestens 1 Backup-Methode).
3) **Auto-Lock in der Mobile-App setzen (PIN/Biometrie + Timer)**  
   **Wo (Android):** App → **Settings → Auto Lock**  
   **Prüfen:** App sperrt nach Schließen oder nach Zeit; Unlock per PIN/Biometrie.

**Stolpersteine:**
- **Activity monitor / detailed events** speichert IP-Adressen nur bei Aktivierung (Abwägung: mehr Metadaten vs. bessere Erkennung verdächtiger Zugriffe).
- Recovery-Optionen (Recovery-Mail/Phone/Emergency Access) erhöhen den Recovery-Komfort, können aber zusätzliche Identitäts- oder Kontaktmetadaten binden (Abwägung: Recovery vs. Datensparsamkeit).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Recovery ohne Telefonnummer priorisieren** (z.B. Recovery Phrase/File statt Recovery Phone).  
  **Abwägung:** mehr Eigenverantwortung bei Verlust/Wechsel von Geräten.
- **Activity monitor deaktiviert lassen**, wenn du keine IP-Events speichern willst.  
  **Abwägung:** weniger Nachvollziehbarkeit bei Kontoübernahme.
- **Bridge-Telemetrie deaktivieren**, falls du Bridge nutzt → Settings → „Collect usage diagnostics“ aus.  
  **Abwägung:** weniger Diagnoseinfos bei Supportfällen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Getrennte Browser-Profile/VM** für Mail-Zugriff (reduziert Cross-Tracking/Leakage über Browser-Umgebung).  
  **Abwägung:** höherer Aufwand im Alltag.
- **Security-Key only Workflow** (mit Backup-Key), Recovery-Oberfläche/Notfallkontakte bewusst minimieren.  
  **Abwägung:** Risiko „Lockout“, wenn Backup fehlt.
- **Bridge nur wenn nötig** nutzen (lokaler Cache/Entschlüsselungspunkt), Alternative routing nur bei Bedarf aktivieren.  
  **Abwägung:** weniger Angriffs-/Leak-Fläche vs. weniger Kompatibilität/Resilienz.

</details>

## Features
- Verschlüsselte Speicherung + E2EE zwischen Proton-Konten (Inhalte), Metadaten bleiben technisch bedingt sichtbar
- 2FA (TOTP) + Security-Key (U2F/FIDO2) für Konto-Login
- Key Transparency (Integrität von Schlüsseln für Proton-Kontakte verifizierbar)
- Proton Mail Bridge für IMAP/SMTP-Clients (lokale Entschlüsselung + verschlüsselter Cache)
- Aktivitätsmonitor / Security Events (optional, inkl. IPs bei „detailed events“)
- Account-Recovery: Recovery Phrase/File/Device-based Recovery + Emergency Access (laut Proton nur für Paid)

## Alternativen
- Tuta Mail (ähnliche Kategorie; Abwägung: anderes Feature-/Kompatibilitätsprofil)
- Mailbox.org (ähnliche Kategorie; Abwägung: klassischer Mailhost, andere Metadaten-/Admin-Pflichten)
- Posteo (ähnliche Kategorie; Abwägung: Fokus auf Datensparsamkeit, weniger Komfortfunktionen)
- self-hosted Mailserver (Postfix/Dovecot) (ähnliche Kategorie; Abwägung: Betrieb/Updates/Spam-Zustellbarkeit in eigener Verantwortung)

## Nicht gelöst / offene Punkte
- Standard-Opt-out/Schalter für Crash-/Diagnosedaten in **allen** Proton-Mail Clients (Desktop/iOS) ist nicht zentral dokumentiert.

## Quellen

- Securitum: "Security Audit Report (Proton Mail Web-App, 2021) – https://res.cloudinary.com/dbulfrlrz/image/upload/v1687791128/Securitum-ProtonMail-report.pdf
- Account-Recovery: "Recovery Phrase/File/Device-based Recovery + Emergency Access (laut Proton nur für Paid)
- Tuta Mail (ähnliche Kategorie; Trade-off: "anderes Feature-/Kompatibilitätsprofil)
- Mailbox.org (ähnliche Kategorie; Trade-off: "klassischer Mailhost, andere Metadaten-/Admin-Pflichten)
- Posteo (ähnliche Kategorie; Trade-off: "Fokus auf Datensparsamkeit, weniger Komfortfunktionen)
- self-hosted Mailserver (Postfix/Dovecot) (ähnliche Kategorie; Trade-off: "Betrieb/Updates/Spam-Zustellbarkeit in eigener Verantwortung)
- title: "Proton – Security audit (Blogpost)
- [Proton Mail – Privacy Policy](https://proton.me/mail/privacy-policy)
- [Proton – Privacy Policy](https://proton.me/legal/privacy)
- [Proton – Terms and Conditions](https://proton.me/legal/terms)
- [Proton – Transparency Report](https://proton.me/legal/transparency)
- [Proton – Open source](https://proton.me/community/open-source)
- [ProtonMail/WebClients (GitHub)](https://github.com/ProtonMail/WebClients)
- [Proton – Vulnerability disclosure policy](https://proton.me/security/vulnerability-disclosure)
- [How to set up two-factor authentication (2FA)](https://proton.me/support/two-factor-authentication-2fa)
- [How to use a 2FA security key](https://proton.me/support/2fa-security-key)
- [Security events (Activity monitor)](https://proton.me/support/security-events)
- [What is Key Transparency?](https://proton.me/support/key-transparency)
- [Comprehensive guide to Bridge settings](https://proton.me/support/comprehensive-guide-to-bridge-settings)
- [How to use the auto-lock feature on Android](https://proton.me/support/pin-lock-and-auto-lock-on-android)
- [Set account recovery methods](https://proton.me/support/set-account-recovery-methods)
- [How to grant emergency access to your Proton Account](https://proton.me/support/emergency-access)
- [Securitum – Security Audit Report (PDF)](https://res.cloudinary.com/dbulfrlrz/image/upload/v1687791128/Securitum-ProtonMail-report.pdf)
- [Proton – Security audit (Blogpost)](https://proton.mesecurity-audit)
