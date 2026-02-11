---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Fastmail Masked E-Mail"
url: "/anbieter/fastmail-masked-email/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-12"
robots: "index,follow"
description: "Kurzprofil von Fastmail Masked E-Mail (Kategorie: E-Mail-Aliasing)."
provider: ""
name: "Fastmail Masked E-Mail"
category: "E-Mail-Aliasing"
website: "https://www.fastmail.com/features/masked-email/"
repo: "https://github.com/fastmail"
license: "Nicht angegeben"
policies: ""
privacy: "https://www.fastmail.com/policies/privacy/"
terms: "https://www.fastmail.com/policies/terms-of-service/"
transparency: "https://www.fastmail.com/policies/transparency-report/"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "partial"
self_host_possible: "no"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Australien (Fastmail Pty Ltd)"
region: "other"
logs: "minimal"
retention: "long"
retention_notes: "IP-Logs bis zu 1 Jahr; E-Mail-Adresse bis zu 6 Monate nach Schließung; Kontodaten innerhalb 7 Tagen gelöscht (+ kurzes Archiv)"
retention_max_days: "365"
data_notes: "Masked E-Mail erzeugt pro Dienst einzigartige Alias-Adressen im Fastmail-Postfach. Adressen können aktiv/blockiert/gelöscht werden; gelöscht bedeutet Bounce. Optional ist eine eigene Domain für Masked E-Mail möglich (Trade-off: Portabilität vs. zusätzliche Identitätsbindung an die Domain)."
features: ""
alternatives: ""
payment_processors: "PayPal; Paddle (je nach Plan/Checkout); Kreditkarte (Visa/Mastercard/Amex/Discover/Diner’s Club); weitere Zahlungsdienstleister laut DPA-Anhang"
sources: ""
---
## Kurzprofil

Fastmail Masked E-Mail ist ein Anbieter aus der Kategorie **E-Mail-Aliasing**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Alias-Adressen direkt in einem Fastmail-Postfach verwalten willst (ohne separaten Forwarding-Dienst) und pro Dienst eine eigene Adresse nutzen möchtest.
- **Weniger geeignet wenn:** du E-Mail-Aliasing ohne kostenpflichtiges Postfach brauchst oder Inhalte „Zero-Access“/E2E als harte Anforderung hast (Fastmail verarbeitet Inhalte serverseitig z.B. für Suche/Spamfilter).
- **Wichtigster Abwägung:** integrierter Komfort (Postfach + Alias-Management) vs. zentrale Metadaten-/Account-Bindung an einen Provider (inkl. Logs/Retention laut Policy).

## Sofortmaßnahmen
- **Pro Dienst eine eigene Masked E-Mail + Beschreibung setzen** → reduziert Konto-Korrelation und erleichtert Leck-/Spam-Zuordnung.
- **Bei Leak/Spam Adresse auf „Deleted“ stellen** → eingehende Mails bouncen statt nur im Papierkorb zu landen.
- **2FA/Passkeys aktivieren & API-Token minimal halten** → senkt Risiko durch Passwort-Leaks und Dritt-Integrationen.

## Entscheidungshilfe
- Wenn du Alias-Adressen ohne zusätzlichen Weiterleitungsanbieter willst, dann nutze Masked E-Mail direkt im Fastmail-Account (Abwägung: Bindung an Fastmail-Konto & dessen Richtlinien).
- Wenn du Alias-Adressen später leichter zu einem anderen Mail-Provider mitnehmen willst, dann nutze Masked E-Mail mit eigener Domain (Abwägung: Domain wird zu einem stabilen Identifier; entfernst du die Domain aus Fastmail, bouncen die Adressen).
- Wenn ein Alias kompromittiert ist, dann wähle **Deleted** (Bounce) statt **Blocked** (landet im Trash) (Abwägung: Bounce kann bei legitimen Mails „hart“ sein, ist aber klarer).
- Wenn du Masked E-Mails in Passwort-Managern/Tools erzeugen willst, dann nutze einen **API-Token mit minimalem Zugriff** und widerrufe ihn bei Nichtgebrauch (Abwägung: weniger Komfort, aber weniger Integrations-Risiko).
- Wenn du Mails aus Masked E-Mail an eine andere Inbox weiterleiten willst, dann setze eine Regel über den Header `Fastmail-MaskedEmail` (Abwägung: zusätzliche Weitergabe/Metadaten an den Zielanbieter).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Fastmail Masked E-Mail |
| Kategorie | E-Mail-Aliasing |
| Website | https://www.fastmail.com/features/masked-email/ |
| Quellcode | https://github.com/fastmail |
| Lizenz | Nicht angegeben |
| Preismodell | paid |
| Free Tier | no |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | PayPal; Paddle (je nach Plan/Checkout); Kreditkarte (Visa/Mastercard/Amex/Discover/Diner’s Club); weitere Zahlungsdienstleister laut DPA-Anhang |
| Jurisdiktion | Australien (Fastmail Pty Ltd) |
| Logs | minimal |
| Retention | IP-Logs bis zu 1 Jahr; E-Mail-Adresse bis zu 6 Monate nach Schließung; Kontodaten innerhalb 7 Tagen gelöscht (+ kurzes Archiv) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.fastmail.com/policies/privacy/
- AGB/Terms: https://www.fastmail.com/policies/terms-of-service/
- Transparency Report: https://www.fastmail.com/policies/transparency-report/
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Masked E-Mail ist Teil des Fastmail-Postfachs: Alias-Adressen werden im Account erzeugt, können „blocked“ (Trash) oder „deleted“ (Bounce) werden und sind (je nach Status) wiederherstellbar. Optional lässt sich eine eigene Domain für Masked E-Mail wählen; entfernst du diese Domain aus Fastmail, werden die Masked-Addresses gelöscht und Mails bouncen.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Privacy Policy u.a. Account-/Kontakt- und Zahlungsdaten, Nutzungs-/Gerätedaten (z.B. IP-Adresse), sowie Inhalte/Metadaten, die zur Bereitstellung von E-Mail nötig sind.  
- **Wofür:** Bereitstellung des Dienstes, Sicherheit/Abuse-Prevention, Support, Weiterentwicklung/Analyse (teils de-identifiziert vor Analyse).
- **Weitergabe/Subprozessoren:** Fastmail beschreibt Weitergabe an notwendige Dienstleister (z.B. Anti-Spam-Partner, Zahlungsabwicklung, Support/Exception-Alerting) und verweist auf eine Vendor-Liste im DPA (Annex 3).
- **Drittlandtransfer:** Privacy Policy beschreibt globale Verarbeitung/Transfers (je nach Dienstleistung/Standort) und nennt explizit mehrere Länder/Regionen.
- **Zahlungsabwicklung/Payment Processor:** Laut Fastmail-Dokumentation u.a. PayPal und Paddle (je nach Checkout/Plan); DPA-Anhang nennt weitere Dienstleister.
- **Kontakt/DSAR/DPA:** Privacy Policy nennt Kontakt für Datenschutz-Anfragen; Fastmail bietet ein Data Processing Agreement (DPA) inkl. Vendor-Liste/Anhängen.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy werden Nutzungsdaten analysiert; DPA Vendor-Liste nennt u.a. Analytics/Logging-Dienstleister (z.B. PostHog, Sentry).
- **Abschaltbar?** Unklar (öffentlich nicht als globaler Schalter dokumentiert).
- **Wo (Menüpfad):** Prüfen in der Web-App unter **Settings → Privacy & Security** sowie Cookie-/Consent-Optionen (sofern angeboten).

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** Privacy Policy nennt u.a. IP-Logs bis zu 1 Jahr sowie Fristen nach Account-Schließung (z.B. E-Mail-Adresse bis zu 6 Monate; Kontodaten Löschung innerhalb weniger Tage + kurzes Archiv).
- **Lösch-/Opt-out-Optionen:** Account-Löschung/Schließung laut Policy; Alias-Status (blocked/deleted) direkt im Masked-E-Mail-Management.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Fastmail nennt Verschlüsselung **in Transit** und **at rest**; kein E2E in den eigenen Apps (PGP/S/MIME ggf. über Dritt-Apps).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Fastmail dokumentiert Zwei-Faktor/Two-step Verification sowie Passkeys/Hardware-Keys (je nach Einrichtung/Client).
- **Recovery/Account-Wiederherstellung:** Two-step Verification erfordert eine Recovery-Telefonnummer beim Aktivieren; kann danach entfernt werden.
- **Vuln-Handling / Security-Kontakt:** Bug-Bounty/Responsible Disclosure ist dokumentiert.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Masked E-Mails sauber anlegen (pro Dienst 1 Adresse + Beschreibung)**  
   **Pfad:** Settings → Masked E-Mail → New Masked E-Mail address → Beschreibung → Save  
   **Prüfen:** Adresse erscheint in Liste; Status „Active“.
2) **Leak/Spam sauber stoppen (Status richtig wählen)**  
   **Pfad:** Settings → Masked E-Mail → Adresse bearbeiten → „Blocked“ (Trash) oder „Deleted“ (Bounce)  
   **Prüfen:** „Deleted“ bounct Zustellung; „Blocked“ landet im Trash.
3) **Kontoschutz aktivieren (2FA/Passkey) + Integrationen begrenzen**  
   **Pfad:** Settings → Privacy & Security → Two-step verification/Passkeys; API tokens nur falls nötig  
   **Prüfen:** 2FA/Passkey als „aktiv“ sichtbar; API-Token-Liste enthält nur benötigte Tokens.

**Stolpersteine:**
- **Custom-Domain für Masked E-Mail:** Wenn du die Domain aus dem Fastmail-Account entfernst, werden Masked-Addresses auf dieser Domain gelöscht und Mails bouncen (Abwägung: Portabilität/Branding vs. Betriebsrisiko bei Domain-Wechsel).
- **Blocked vs Deleted:** „Blocked“ sammelt Mails im Trash (Metadaten bleiben sichtbar), „Deleted“ bounct (bricht aber ggf. legitime Kommunikation).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze Masked E-Mail konsequent pro Dienst/Anmeldung und vermeide Wiederverwendung (Abwägung: mehr Verwaltungsaufwand).
- Falls du Masked E-Mails weiterleitest: nutze eine Regel nur für Masked E-Mails über Header `Fastmail-MaskedEmail` statt „All messages“ (Abwägung: trotzdem zusätzlicher Datenfluss an Zielanbieter).
- Reduziere Dritt-Integrationen: API-Token nur temporär und mit minimalem Zugriff, danach widerrufen (Abwägung: weniger Komfort bei Generierung).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne Nutzung: eigenes Browser-Profil nur für Fastmail-Login (Abwägung: mehr Einrichtung/Komplexität).
- Erzwinge starke Authentisierung (Passkey/Security-Key) und entferne nicht benötigte Recovery-Wege/Integrationen (Abwägung: Recovery kann schwieriger werden).
- Minimierte externe Inhalte: Remote Images standardmäßig blockieren bzw. nur für Kontakte laden (Abwägung: mehr manuelle Freigaben bei Newslettern).

</details>

## Features
- Masked E-Mail direkt in Fastmail: Erstellen, beschreiben, suchen und verwalten (Active/Blocked/Deleted, inkl. Restore).
- Custom-Domain-Option für Masked E-Mail (Domain-Auswahl im Admin-/Sharing-Kontext).
- Regeln/Filter für Masked E-Mails (u.a. Header `Fastmail-MaskedEmail`).
- API-Token für Integrationen (Zugriffsniveau wählbar, Token widerrufbar; nicht in allen Tarifen verfügbar).

## Alternativen
- SimpleLogin (Aliasing/Forwarding; Abwägung: zusätzlicher Weiterleitungsanbieter zwischen Dienst und deinem Postfach).
- AnonAddy (Aliasing/Forwarding; Abwägung: Zustellbarkeit und Metadaten hängen vom Forwarding/Provider ab).
- Firefox Relay (Aliasing; Abwägung: Funktionsumfang abhängig vom Relay-Dienst und dessen Policies).
- iCloud „Hide My E-Mail“ (Aliasing; Abwägung: starke Bindung an Apple-ID/Apple-Infrastruktur).

## Nicht gelöst / offene Punkte
- Abschaltbarkeit von Analytics/Exception-Logging (z.B. PostHog/Sentry) ist in öffentlichen Quellen nicht als klarer Nutzer-Schalter dokumentiert.  

## Quellen

- Optional: "Masked E-Mail auf eigener Domain
- SimpleLogin (Aliasing/Forwarding; Trade-off: "zusätzlicher Weiterleitungs-Hop/Anbieter)
- AnonAddy (Aliasing/Forwarding; Trade-off: "Zustellbarkeit & Betrieb abhängig vom Forwarding-Setup)
- Firefox Relay (Aliasing; Trade-off: "Funktionsumfang & Modell abhängig vom Relay-Dienst)
- iCloud „Hide My E-Mail“ (Aliasing; Trade-off: "Bindung an Apple-ID/Ökosystem)
- https://www.fastmail.com/policies/cookies/
- [Masked E-Mail (Help Center)](https://www.fastmail.help/hc/en-us/articles/4406536368911-Masked-E-Mail)
- [API tokens (Help Center)](https://www.fastmail.help/hc/en-us/articles/5254602856719-API-tokens)
- [Fastmail privacy (Help Center)](https://www.fastmail.help/hc/en-us/articles/6049922252943-Fastmail-privacy)
- [Privacy policy](https://www.fastmail.com/policies/privacy/)
- [Terms of service](https://www.fastmail.com/policies/terms-of-service/)
- [Data Transparency Report](https://www.fastmail.com/policies/transparency-report/)
- [Data Processing Agreement – Annex 3 (Vendors/Subprocessors)](https://www.fastmail.com/policies/dpa/annex3/)
- [Cookies Policy](https://www.fastmail.com/policies/cookies/)
- [Security (Features)](https://www.fastmail.com/features/security/)
- [Bug Bounty Program](https://www.fastmail.com/bug-bounty/)
