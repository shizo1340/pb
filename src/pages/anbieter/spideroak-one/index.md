---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / SpiderOak One"
url: "/anbieter/spideroak-one/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-07"
robots: "index,follow"
description: "Kurzprofil von SpiderOak One (Kategorie: Backup)."
provider: ""
name: "SpiderOak One"
category: "Backup"
website: "https://spideroak.com/one/"
repo: "Nicht angegeben"
license: "Proprietär"
policies: ""
privacy: "https://spideroak.com/privacy-policy/"
terms: "https://spideroak.com/terms-of-service/"
transparency: "https://spideroak.com/transparency/"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "unknown"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "no"
kyc_required: "unknown"
jurisdiction: "USA (Kansas; laut Terms of Service)"
region: "us"
logs: "minimal"
retention: "verylong"
retention_notes: "Nach Kündigung: ~5 Tage (Backup-Daten); Billing-Records: praktisch unbegrenzt (laut Support)"
retention_max_days: "5"
data_notes: "No-Knowledge-Ansatz: Verschlüsselung clientseitig; Passphrase wird nicht serverseitig gespeichert. Account/Usage-Metadaten (z.B. IP/Request-Zeitpunkt) fallen laut Privacy Policy an."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

SpiderOak One ist ein Anbieter aus der Kategorie **Backup**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Cloud-Backup willst, bei dem laut Anbieter Inhalte und Schlüssel clientseitig geschützt sind („No Knowledge“) und du mit starker Passphrase arbeitest.
- **Weniger geeignet wenn:** du auf moderne Kontoschutz-Optionen wie regulär verfügbare 2FA für neue Accounts angewiesen bist oder eine einfache Passwort-Wiederherstellung erwartest.
- **Wichtigster Abwägung:** **No-Knowledge/Client-Verschlüsselung vs. Recovery/Support** (vergessene Passphrase kann den Zugriff dauerhaft verhindern).

## Sofortmaßnahmen
- **Passphrase lang & einzigartig setzen:** reduziert Risiko, dass dein „Master Key“ erraten/abgegriffen wird.
- **Webzugriff meiden, Desktop-Client nutzen:** reduziert Angriffsfläche bei Logins über den Browser.
- **Password Hint setzen + E-Mail-Zugriff absichern:** erhöht Chance auf Wiederherstellung ohne „Reset“ (den es laut Anbieter nicht gibt).

## Entscheidungshilfe
- Wenn du Cloud-Backup willst, aber Inhalte/Dateinamen nicht serverseitig im Klartext liegen sollen, dann nutze SpiderOak One (Abwägung: Passphrase-Verlust ist kritisch).
- Wenn du regelmäßig per Browser auf Backups zugreifen musst, dann nutze das Web-Interface nur für Download und halte den Desktop-Client aktuell (Abwägung: Web-Login bleibt ein zusätzlicher Angriffsvektor).
- Wenn du ein Einrichtung brauchst, das **für neue Accounts** moderne 2FA/MFA unterstützt, dann prüfe das vorab im Account/Billing-Portal (Abwägung: ggf. Wechsel zu anderem Kontoschutz-Modell nötig).
- Wenn du minimale Identitätsbindung willst, dann verwende keinen E-Mail-Login als Username (Abwägung: Support-/Kommunikation läuft trotzdem über die hinterlegte E-Mail-Adresse).
- Wenn du beim Anbieter-Exit sicher bleiben willst, dann plane Export/Restore-Tests ein und dokumentiere deine Geräte-/Account-Zuordnung (Abwägung: mehr Betriebsaufwand).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | SpiderOak One |
| Kategorie | Backup |
| Website | https://spideroak.com/one/ |
| Quellcode | Nicht angegeben |
| Lizenz | Proprietär |
| Preismodell | paid |
| Free Tier | no |
| Open Source | unknown |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Stripe, PayPal (laut Privacy Policy) |
| Jurisdiktion | USA (Kansas; laut Terms of Service) |
| Logs | minimal |
| Retention | Nach Kündigung: ~5 Tage (Backup-Daten); Billing-Records: praktisch unbegrenzt (laut Support) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://spideroak.com/privacy-policy/
- AGB/Terms: https://spideroak.com/terms-of-service/
- Transparency Report: https://spideroak.com/transparency/
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Datacenter Certifications: SAS 70 Type II / SSAE-16 Audit-Schedule (laut Support-Artikel)

**Daten-Notizen (kurz):**
- Privacy Policy nennt u.a. **IP-Adresse, Geräte-/OS-Infos, Fehler-/Diagnosemeldungen sowie Zeitstempel von Requests** als automatisch anfallende Nutzungsdaten.
- „No Knowledge“-Aussagen: Anbieter beschreibt mehrlagige Verschlüsselung und dass Mitarbeitende Inhalte/Dateinamen nicht einsehen können.
- Kündigung/Löschung: Backup-Daten werden nach Schließung nicht sofort gelöscht (kurzer Puffer); Billing-Records können aus Steuer-/Pflichtgründen langfristig bleiben.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Accountdaten (Username/Passphrase; E-Mail als Username optional), Billing-Infos bei bezahlten Plänen; Nutzungs-/Metadaten wie Geräte/OS, ungefähre Datenmenge, IP-Adresse, Fehlermeldungen sowie Datum/Uhrzeit von Requests.
- **Wofür:** Betrieb des Dienstes, Support, Missbrauchsverhinderung, Verbesserung/Marketing (laut Privacy Policy als Zweckbeschreibung).
- **Weitergabe/Subprozessoren:** Privacy Policy nennt u.a. Stripe, PayPal, ZenDesk und Base CRM als Drittanbieter zur Leistungserbringung.
- **Drittlandtransfer:** Service Agreement erlaubt Verarbeitung/Transfer in die USA und andere Länder.
- **Zahlungsabwicklung/Payment Processor:** Stripe, PayPal (laut Privacy Policy).
- **Kontakt/DSAR/DPA:** Privacy Policy nennt privacy@spideroak.com als Kontakt; GDPR-Info ist im Support dokumentiert.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Teilweise: Privacy Policy nennt automatisch anfallende Nutzungs-/Systemdaten (z.B. IP, Gerät/OS, Fehlerberichte, Request-Zeitpunkte).
- **Abschaltbar?** Unklar (keine eindeutige Opt-out-Option in den genutzten Primärquellen gefunden).
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** Nach Account-Schließung: typischerweise ca. 5 Tage Puffer für Daten-Purge; Billing-/Server-Records laut GDPR-Hinweis langfristig („praktisch unbegrenzt“).
- **Lösch-/Opt-out-Optionen:** Account kann gekündigt werden; Billing-Records können ggf. nicht vollständig gelöscht werden (laut Support).

**Abwägung am Punkt:** Weniger Diagnosedaten kann Support/Fehleranalyse erschweren; mehr Diagnosedaten erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Privacy Policy nennt AES-256 für Uploads und dass Nutzer die Schlüssel kontrollieren; Support beschreibt „No Knowledge“ und mehrlagige Verschlüsselung.
- **KDF/Parameter/Schlüsselableitung:** Support beschreibt PBKDF2 für die Ableitung eines äußeren Schlüssels aus der Passphrase (Master-Key-Rolle).
- **MFA/2FA/Passkeys/Hardware-Keys:** Support: Für **neue** SpiderOak-One-User wird 2FA nicht angeboten; Legacy-Accounts können (wenn bereits aktiv) Token nutzen.
- **Recovery/Account-Wiederherstellung:** Support: Passphrase kann nicht vom Anbieter zurückgesetzt/rekonstruiert werden; Passwort-Hint per E-Mail möglich.
- **Vuln-Handling / Security-Kontakt:** Privacy Policy nennt security@spideroak.com als Kontakt für Vulnerability Reports.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Passphrase als „Master Key“ behandeln** (lang, einzigartig, offline gesichert).  
   **Prüfen:** Passwort-Hint gesetzt, Recovery-Plan dokumentiert.
2) **Webzugriff minimieren** (nur bei Bedarf für Downloads), primär Desktop-Client nutzen.  
   **Prüfen:** Web-Login selten, Desktop-Client aktuell.
3) **Gerätepflege & Zugriffskontrolle** (alte Geräte deautorisieren, wenn nicht mehr genutzt).  
   **Prüfen:** Nur aktive, kontrollierte Geräte bleiben autorisiert.

**Stolpersteine:**
- Kein „Passwort-Reset“ durch den Anbieter (Abwägung: starke Privacy-Eigenschaft vs. hohes Lockout-Risiko).
- 2FA ist laut Support für neue Accounts nicht verfügbar (Abwägung: weniger Kontoschutz-Optionen vs. einfacher Betrieb).

<details>
<summary>Profil B (Datensparsam)</summary>

- Verwende **nicht** deine E-Mail als Username (laut Privacy Policy optional), um die direkte Identitätsbindung zu reduzieren.
- Nutze das Web-Interface nur als „Read/Download“-Pfad; Änderungen ausschließlich über den Client.
- Support-Interaktion: Verwende eine E-Mail-Adresse, auf die du dauerhaft Zugriff hast (für Passwort-Hint/Account-Ownership).
**Abwägung:** mehr Organisationsaufwand (Dokumentation/Accounts) statt „einfach merken“.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze getrennte Systemprofile/VM für Backup-Client vs. Alltagsbrowser (Isolation von Session-/Web-Risiken).
- Reduziere Web-Logins auf „Notfallzugriff“ und dokumentiere ein Restore-Verfahren, das ohne Web auskommt.
- Logfiles nur gezielt an Support geben (wenn nötig) und vorher prüfen/entpersonalisieren, soweit möglich.
**Abwägung:** deutlich mehr Komplexität und Wartungsaufwand.

</details>

## Features
- Cloud-Backup (Desktop-Client) mit clientseitiger Verschlüsselung
- „No Knowledge“-Architektur (Provider hat laut Doku keinen Zugriff auf Schlüssel/Dateinamen)
- Web-Interface zum Anzeigen/Download (keine Uploads/Edits/Löschung per Web)
- Deduplication (laut Support/Docs erwähnt)

## Alternativen
- [Backblaze](/anbieter/backblaze/)
- Arq + eigener Storage (Self-managed Keys/Storage, mehr Eigenbetrieb/Komplexität)
- [Syncthing](/anbieter/syncthing/)

## Nicht gelöst / offene Punkte
- Unklar, ob und wie sich Diagnose-/Telemetry-Daten im Client/Account-Portal abschalten lassen (nur automatische Datenerhebung in Privacy Policy dokumentiert).
- 2FA ist laut Support für neue Accounts nicht verfügbar; nur Legacy-Accounts können es (wenn bereits aktiv) nutzen.

## Quellen

- Datacenter Certifications: "SAS 70 Type II / SSAE-16 Audit-Schedule (laut Support-Artikel)
- https://spideroak.support/hc/en-us/articles/115001932526-Datacenter-Certifications
- [Privacy Policy | SpiderOak](https://spideroak.com/privacy-policy/)
- [Terms of Service | SpiderOak](https://spideroak.com/terms-of-service/)
- [Service Agreement | SpiderOak](https://spideroak.com/service-agreement/)
- [Transparency Report | SpiderOak](https://spideroak.com/transparency/)
- [No Knowledge Explained (Support)](https://spideroak.support/hc/en-us/articles/115001855103-No-Knowledge-Explained)
- [ONE Pricing (Support)](https://spideroak.support/hc/en-us/articles/115002048046-ONE-Pricing)
- [Data Retention for Closed/Canceled Accounts (Support)](https://spideroak.support/hc/en-us/articles/115004986543-Data-Retention-for-Closed-Canceled-Accounts)
- [GDPR and SpiderOak (Support)](https://spideroak.support/hc/en-us/articles/360002173891-GDPR-and-SpiderOak)
- [2-Factor Authentication for Your One Account (Support)](https://spideroak.support/hc/en-us/articles/115001894143-2-Factor-Authentication-for-Your-One-Account)
- [Password Change Propagation (Support)](https://spideroak.support/hc/en-us/articles/115002892366-Password-Change-Propagation)
- [Password Hints (Support)](https://spideroak.support/hc/en-us/articles/115001933346-Password-Hints)
- [Forgotten Password (Support)](https://spideroak.support/hc/en-us/articles/115001894203-Forgotten-Password)
- [ONE Web Interface (Support)](https://spideroak.support/hc/en-us/articles/115001854583-ONE-Web-Interface)
- [Datacenter Certifications (Support)](https://spideroak.support/hc/en-us/articles/115001932526-Datacenter-Certifications)
