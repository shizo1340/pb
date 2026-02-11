---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Tuta Mail"
url: "/anbieter/tuta-mail/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-15"
robots: "index,follow"
description: "Kurzprofil von Tuta Mail (Kategorie: E-Mail)."
provider: ""
name: "Tuta Mail"
category: "E-Mail"
website: "https://tuta.com/"
repo: "https://github.com/tutao/tutanota"
license: "GPL-3.0"
policies: ""
privacy: "https://tuta.com/privacy-policy"
terms: "https://tuta.com/terms"
transparency: "https://tuta.com/transparency-report"
warrant_canary: "https://tuta.com/transparency-report"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "partial"
self_host_possible: "no"
account_required: "yes"
phone_required: "no"
kyc_required: "unknown"
jurisdiction: "Deutschland (Tutao GmbH, Hannover)"
region: "eu"
logs: "minimal"
retention: "mid"
retention_notes: "Mailserver-Logs max. 7 Tage; Datenlöschung i.d.R. spätestens 30 Tage nach Vertragsende (Ausnahmen: Abrechnung/gesetzliche Pflichten)"
retention_max_days: "30"
data_notes: "- Laut Privacy Statement wird als „Inventory Data“ mindestens die neu registrierte E-Mail-Adresse erhoben; bei bezahlten Tarifen zusätzlich u.a. Land, optional Name/Rechnungsadresse."
features: ""
alternatives: ""
payment_processors: "PayPal (Europe); Kreditinstitut (für Lastschrift)"
sources: ""
---
## Kurzprofil

Tuta Mail ist ein Anbieter aus der Kategorie **E-Mail**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du E-Mail mit integrierter Ende-zu-Ende-Verschlüsselung nutzen willst und dabei mit den offiziellen Tuta-Clients arbeiten kannst.
- **Weniger geeignet wenn:** du IMAP/klassische Mail-Clients brauchst oder eine Self-Hosting-Option suchst.
- **Wichtigster Abwägung:** **Kompatibilität/Client-Freiheit vs. Verschlüsselungs-Design** (kein IMAP, dafür eigene Clients + lokale/verschlüsselte Suchmechanik laut Anbieter).

## Sofortmaßnahmen
- **2FA aktivieren (TOTP oder U2F):** reduziert Risiko durch Passwort-Leaks.
- **Nutzungsstatistiken deaktivieren/Einwilligung entziehen:** senkt Diagnose-/Telemetry-Metadaten.
- **Externe Inhalte in E-Mails blockiert lassen (Default):** erschwert Tracking über Remote-Assets.

## Entscheidungshilfe
- Wenn du **E2E auch zu externen Empfängern** brauchst, dann nutze **Passwort-geschützte Mails** (Abwägung: Passwort-Handling/Support-Aufwand).
- Wenn du **klassische Mail-Clients per IMAP** benötigst, dann ist Tuta **weniger geeignet** (Abwägung: Kompatibilität vs. Anbieter-Design ohne IMAP).
- Wenn du **minimale Zahlungsdaten** willst, dann nutze den **Free-Tier**, solange dein Use-Case passt (Abwägung: Limits bei Speicher/Features je nach Plan).
- Wenn du **Telemetry minimieren** willst, dann prüfe in den **Kontoeinstellungen** die Teilnahme an **Usage Statistics** (Abwägung: weniger Diagnose-Daten kann Support/Fehleranalyse erschweren).
- Wenn du **Anonymität bei der Registrierung** priorisierst, dann nutze den **Tor Browser** (Abwägung: mögliche Reibung/Rate-Limits je nach Abuse-Schutz).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Tuta Mail |
| Kategorie | E-Mail |
| Website | https://tuta.com/ |
| Quellcode | https://github.com/tutao/tutanota |
| Lizenz | GPL-3.0 |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | PayPal (Europe); Kreditinstitut (für Lastschrift) |
| Jurisdiktion | Deutschland (Tutao GmbH, Hannover) |
| Logs | minimal |
| Retention | Mailserver-Logs max. 7 Tage; Datenlöschung i.d.R. spätestens 30 Tage nach Vertragsende (Ausnahmen: Abrechnung/gesetzliche Pflichten) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://tuta.com/privacy-policy
- AGB/Terms: https://tuta.com/terms
- Transparency Report: https://tuta.com/transparency-report
- Warrant Canary: https://tuta.com/transparency-report

**Audits (laut Anbieter):**
- Penetrationstest durch SySS GmbH (laut Anbieter; kein öffentlich verlinkter Report gefunden)

**Daten-Notizen (kurz):**
- Laut Privacy Statement wird als „Inventory Data“ mindestens die neu registrierte E-Mail-Adresse erhoben; bei bezahlten Tarifen zusätzlich u.a. Land, optional Name/Rechnungsadresse.
- Mailserver-Logs: max. 7 Tage; enthalten u.a. Sender-/Empfängeradressen und Verbindungszeit, aber keine Kunden-IP-Adressen.
- IP-Adressen können zur Missbrauchsprävention verarbeitet werden; laut Anbieter nur anonymisiert gespeichert.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** neu registrierte E-Mail-Adresse; bei Paid-Plänen u.a. Land, optional Name/Rechnungsadresse; Zahlungsdaten je nach Methode (z.B. Bankdaten, Kreditkarte, PayPal-Username).
- **Wofür:** Vertragserfüllung (Bereitstellung von E-Mail/Kontakten/Kalender) und Abrechnung/Steuer; Missbrauchsprävention und Betrieb/Fehlerdiagnose.
- **Weitergabe/Subprozessoren:** Zahlungsdaten werden je nach Methode an **PayPal (Europe)** (PayPal/Kreditkarte) bzw. ein **Kreditinstitut** (Lastschrift) weitergegeben; sonstige Dritte werden (außer Zahlungsdaten) laut Anbieter nicht offengelegt.
- **Drittlandtransfer:** Nicht angegeben (in der Privacy Statement nicht als eigener Abschnitt benannt).
- **Zahlungsabwicklung/Payment Processor:** PayPal (Europe) sowie Kreditinstitut für Lastschrift (laut Privacy Statement).
- **Kontakt/DSAR/DPA:** Kontakt: hello@tutao.de; Datenschutzkontakt/DSB: privacy@tutao.de. DPA/Order Processing Agreement wird vom Anbieter genannt (Details/Link im Produkt bzw. Support-Hinweisen).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Statement nur nach **vorheriger Einwilligung** („consented in advance“) für anonymisierte Nutzungsstatistiken.
- **Abschaltbar?** Ja, per Deaktivierung in den **Kontoeinstellungen** (Einwilligung widerrufbar).
- **Wo (Menüpfad):** Konto-/App-Einstellungen → Option zu „Usage statistics“/Nutzungsstatistiken (Bezeichnung je nach Client).

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** Mailserver-Logs max. 7 Tage; Datenlöschung i.d.R. spätestens 30 Tage nach Vertragsende (mit Ausnahmen für Abrechnung/gesetzliche Pflichten).
- **Lösch-/Opt-out-Optionen:** Opt-out für Nutzungsstatistiken in Einstellungen; lokale ID/Client-Daten laut Anbieter durch Löschen von Website-/App-Daten entfernbar.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Laut Anbieter E2E-verschlüsselte Speicherung; Server speichern verschlüsselte Daten, Schlüssel liegen beim Nutzer (Zero-Knowledge-Architektur wird beschrieben).
- **KDF/Parameter/Schlüsselableitung:** Passwort-Hashing mit **Argon2** und **SHA256** (laut Security-Seite).
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA via **TOTP oder U2F** (laut Pricing/Security-Seite).
- **Recovery/Account-Wiederherstellung:** Recovery Code wird in Support-Hinweisen erwähnt (u.a. für Reset des zweiten Faktors); Details im Support/Account einsehbar.
- **Vuln-Handling / Security-Kontakt:** Security Policy im offiziellen GitHub-Repo; Meldung über GitHub „Report a vulnerability“ (private Disclosure) möglich.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **2FA aktivieren** (TOTP oder U2F), falls möglich mit Hardware-Key (U2F).  
   **Prüfen:** Login verlangt zweiten Faktor; Backup-Optionen dokumentiert.
2) **Externe Inhalte blockiert lassen** (Remote-Bilder/Videos nur bei Bedarf nachladen).  
   **Prüfen:** E-Mails laden keine externen Inhalte automatisch; manuelles „anzeigen“/„laden“ möglich.
3) **Nutzungsstatistiken deaktivieren** bzw. Einwilligung entziehen.  
   **Prüfen:** Teilnahme ist aus; keine Statistikabfrage aktiv.

**Stolpersteine:**
- **Kein IMAP:** Integrationen mit klassischen Mail-Clients/Automationen können eingeschränkt sein (Abwägung: Kompatibilität vs. Anbieter-Design).
- **Externe Empfänger:** Passwort-Austausch ist zusätzlicher Prozess (Abwägung: Sicherheit vs. Komfort).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze (wenn möglich) **Free-Tier ohne Zahlungsdaten**, solange dein Use-Case passt.
- **Signup ohne Kampagnen-Link** (direkt über die Website statt Referral/Ads), um Campaign-Tracking-Felder zu minimieren.
- Prüfe, ob **Usage Statistics** wirklich aus ist (Opt-out) und lösche lokale App-/Website-Daten, falls du die Geräte-ID zurücksetzen willst.  
**Abwägung:** mehr Eigenverantwortung, ggf. weniger Komfort bei Fehlerdiagnose/Support.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze **separaten Browser/Profil/VM** für Webmail oder dedizierte Geräteprofile für die App.
- Verwende **Tor Browser** für Registrierung/Logins, wenn du Netzwerkmetadaten zusätzlich reduzieren willst.
- Setze **U2F/Hardware-Key** als 2FA, sofern im Einrichtung möglich.  
**Abwägung:** deutlicher Komfortverlust, höhere Komplexität (Login/Recovery besonders kritisch).

</details>

## Features
- Ende-zu-Ende-Verschlüsselung für Mailbox-Daten (inkl. Kontakte & Kalender laut Anbieter)
- Verschlüsselte Kommunikation mit externen Empfängern via geteiltem Passwort
- 2FA: TOTP oder U2F
- Externe Inhalte (Bilder/Videos) in E-Mails standardmäßig blockiert; manuelles Nachladen möglich
- Clients (Web/Desktop/Mobil) als Open Source im offiziellen GitHub-Repo
- Serverstandort Deutschland (ISO 27001-zertifizierte Rechenzentren laut Anbieter)
- Kein IMAP (eigene Clients statt klassischer Mail-Clients)

## Alternativen
- Proton Mail (E-Mail; anderer Jurisdiktions-/Ökosystem-Fokus — Abwägung: andere Account-/Integrationsmodelle)
- Mailbox.org (E-Mail; klassisches Mail-Ökosystem mit IMAP — Abwägung: Kompatibilität/Workflow vs. anderes Metadaten-/Krypto-Modell)
- Posteo (E-Mail; Fokus auf Datensparsamkeit — Abwägung: anderer Funktionsumfang/Workflow)
- Fastmail (E-Mail; Fokus auf Produktivität/Integration — Abwägung: Komfort/Integrationen vs. anderes Privacy-Modell)

## Nicht gelöst / offene Punkte
- Öffentliche **Subprozessorenliste** (über Zahlungsanbieter hinaus) ist nicht eindeutig auffindbar.
- „KYC erforderlich“: Nicht explizit als eigener Punkt dokumentiert (Stand: 2026-01-15).

## Quellen

- Mailserver-Logs: "max. 7 Tage; enthalten u.a. Sender-/Empfängeradressen und Verbindungszeit, aber keine Kunden-IP-Adressen.
- 2FA: "TOTP oder U2F
- Proton Mail (E-Mail; anderer Jurisdiktions-/Ökosystem-Fokus — Trade-off: "andere Account-/Integrationsmodelle)
- Mailbox.org (E-Mail; klassisches Mail-Ökosystem mit IMAP — Trade-off: "Kompatibilität/Workflow vs. anderes Metadaten-/Krypto-Modell)
- Posteo (E-Mail; Fokus auf Datensparsamkeit — Trade-off: "anderer Funktionsumfang/Workflow)
- Fastmail (E-Mail; Fokus auf Produktivität/Integration — Trade-off: "Komfort/Integrationen vs. anderes Privacy-Modell)
- [Privacy Statement](https://tuta.com/privacy-policy)
- [Security](https://tuta.com/security)
- [Pricing](https://tuta.com/pricing)
- [Open Source](https://tuta.com/open-source)
- [Transparency Report & Warrant Canary](https://tuta.com/transparency-report)
- [GitHub: "tutao/tutanota](https://github.com/tutao/tutanota)
- [Privacy Statement](https://tuta.com/privacy-policy)
- [Security](https://tuta.com/security)
- [Pricing](https://tuta.com/pricing)
- [Open Source](https://tuta.com/open-source)
- [Transparency Report & Warrant Canary](https://tuta.com/transparency-report)
- [GitHub: tutao/tutanota](https://github.com/tutao/tutanota)
