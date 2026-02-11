---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Notesnook"
url: "/anbieter/notesnook/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-19"
robots: "index,follow"
description: "Kurzprofil von Notesnook (Kategorie: Notizen & Docs)."
provider: ""
name: "Notesnook"
category: "Notizen & Docs"
website: "https://notesnook.com/"
repo: "https://github.com/streetwriters/notesnook"
license: "GPL-3.0 (laut GitHub-Repo)"
policies: ""
privacy: "https://notesnook.com/privacy/"
terms: "https://notesnook.com/terms/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "yes"
self_host_possible: "partial"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Islamic Republic of Pakistan (Governing Law laut Terms)"
region: "other"
logs: "unknown"
retention: "unknown"
retention_notes: "Nicht angegeben (nur allgemein: „as long as necessary“; Usage Data „shorter period“)"
data_notes: "Laut Privacy Policy werden Notiz-Inhalte clientseitig verschlüsselt; Server-Standort wird als Deutschland genannt. Zahlungsabwicklung über Paddle; Web-Analytics via selbst-gehostetem Umami. Governing Law in den Terms: Pakistan."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Notesnook ist ein Anbieter aus der Kategorie **Notizen & Docs**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Notizen mit **clientseitiger Verschlüsselung** und Cloud-Sync nutzen willst, ohne dass der Anbieter den Notizinhalt im Klartext verarbeiten soll.
- **Weniger geeignet wenn:** du **ohne Konto** arbeiten willst oder du eine komplett **lokal-dateibasierte** Arbeitsweise ohne Account-/Sync-Infrastruktur bevorzugst.
- **Wichtigster Abwägung:** **Komfort (Sync/Recovery/Support)** vs. **Metadaten** (z.B. Konto-/Kommunikationsdaten, Nutzungsdaten laut Privacy Policy).

## Sofortmaßnahmen
- **App Lock aktivieren + kurzen Timeout setzen** → reduziert „offen liegende App“-Risiko bei entsperrtem Gerät.
- **Backup-Verschlüsselung prüfen** (Settings → Backup & export) → schützt Export/Backups vor Klartext-Leaks in Cloud/Dateisystem.
- **Privacy Mode aktivieren (Desktop, falls verfügbar)** → reduziert OS-Previews/Screenshot-Risiko bei sensiblen Notizen.

## Entscheidungshilfe
- Wenn du **Cloud-Sync** willst, dann nutze Notesnook mit aktivem Konto und prüfe die Verschlüsselungsdoku (Abwägung: Account-Metadaten bleiben).
- Wenn du **Notizen lokal vor Mitlesern am Gerät** absichern musst, dann nutze zusätzlich **Vault** und/oder **App Lock** (Abwägung: mehr Passwörter/Unlock-Schritte).
- Wenn du **Backups extern speicherst** (Cloud/USB), dann nutze **verschlüsselte Backups** (Abwägung: ohne Passwort ist Restore nicht möglich).
- Wenn du **Telemetry/Analytics minimieren** willst, dann verifiziere den aktuellen Stand im Client (Abwägung: weniger Diagnosemöglichkeiten bei Bugs).
- Wenn du **Self-Hosting** brauchst, dann prüfe „Server-URL ändern / Self-Hosting“-Optionen und den offiziellen Sync-Server-Stand (Abwägung: mehr Betriebsaufwand, Alpha-Status möglich).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Notesnook |
| Kategorie | Notizen & Docs |
| Website | https://notesnook.com/ |
| Quellcode | https://github.com/streetwriters/notesnook |
| Lizenz | GPL-3.0 (laut GitHub-Repo) |
| Preismodell | freemium (Free + Paid-Pläne laut Pricing) |
| Free Tier | yes (laut Website: „Start for free. No credit card required.“) |
| Open Source | yes (laut Website/Repo) |
| Konto erforderlich | yes (laut Terms: „When you create an account…“) |
| Telefon erforderlich | no (laut 2FA-Post: SMS als Option, nicht als Pflicht) |
| KYC erforderlich | no |
| Zahlungsabwicklung | Paddle (laut Privacy Policy; Terms erwähnen u.a. PayPal als Zahlungsmethode) |
| Jurisdiktion | Islamic Republic of Pakistan (Governing Law laut Terms) |
| Logs | unknown |
| Retention | Nicht angegeben (nur allgemein: „as long as necessary“; Usage Data „shorter period“) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://notesnook.com/privacy/
- AGB/Terms: https://notesnook.com/terms/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Laut Privacy Policy werden Notiz-Inhalte clientseitig verschlüsselt; Daten können an Server in Deutschland übertragen und dort verarbeitet werden (Notizinhalt verschlüsselt). Web-Analytics wird als selbst-gehostetes Umami genannt; Zahlungen laufen über Paddle.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Privacy Policy u.a. „Personal Data“ (z.B. E-Mail/Kontoangaben) und „Usage Data“; Notizinhalt soll vor Transfer clientseitig verschlüsselt werden.
- **Wofür:** Konto-/Servicebetrieb (Account-Hinweise, Subscription/Billing, Sicherheit), interne Analyse (Usage Data), Kommunikation/Ankündigungen laut Terms.
- **Weitergabe/Subprozessoren:** In der Privacy Policy genannt: selbst-gehostetes **Umami** (Analytics), **Paddle** (Payment), **GitHub** (CI/CD/Entwicklung). Weitere Service Provider werden allgemein erwähnt, aber nicht als vollständige Liste ausgeführt.
- **Drittlandtransfer:** Privacy Policy: Daten können außerhalb der eigenen Jurisdiktion verarbeitet werden; zusätzlich Hinweis: Server in Deutschland.
- **Zahlungsabwicklung/Payment Processor:** Paddle (Privacy Policy), Terms nennen u.a. Kreditkarte/PayPal als Zahlungsmethoden.
- **Kontakt/DSAR/DPA:** Privacy Policy nennt Kontakt per E-Mail (u.a. für GDPR/DSAR-Anfragen).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy: Usage Data für Analyse; zusätzlich „Umami“ (self-hosted) als Analytics. Laut Release Notes v3.0.14: „No telemetry. No analytics. … blind on the client side.“
- **Abschaltbar?** Unklar (Privacy Policy beschreibt generell Datenverarbeitung; Release Notes deuten auf Entfernen clientseitiger Telemetrie hin).
- **Wo (Menüpfad):** Wenn vorhanden: Settings → Privacy & security (Terms nennen dort u.a. „Marketing emails“-Toggle).

**Logs & Retention:**
- **Logging-Level:** unknown (keine öffentlich dokumentierten Log-Level; Release Notes v3.0.7 erwähnen App-Logs als intern/technisch).
- **Aufbewahrung:** Nicht angegeben (Privacy Policy: Personal Data „as long as necessary“, Usage Data „shorter period“ ohne konkrete Zeiten).
- **Lösch-/Opt-out-Optionen:** Account-Löschung ist dokumentiert; danach keine Wiederherstellung möglich.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Help/Privacy nennen clientseitige Verschlüsselung mit **XChaCha20-Poly1305-IETF** und **Argon2**, inkl. libsodium; Notizen werden vor Transfer verschlüsselt.
- **KDF/Parameter/Schlüsselableitung:** Help erklärt Argon2 als PKDF (argon2i) und Passwort-Hashing (argon2id) sowie Salt-Handling.
- **MFA/2FA/Passkeys/Hardware-Keys:** Blogpost beschreibt 2FA-Optionen (Authenticator/TOTP, SMS, E-Mail). In Help „Recovering your account“ wird 2FA als Pflichtschritt im Recovery-Flow erwähnt.
- **Recovery/Account-Wiederherstellung:** Help beschreibt Account-Recovery (u.a. Recovery Key) und dass man dabei von Geräten ausgeloggt wird.
- **Vuln-Handling / Security-Kontakt:** Kein dedizierter Disclosure-Prozess öffentlich dokumentiert; Kontakt per E-Mail wird in Privacy Policy/Terms genannt.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **App Lock aktivieren**  
   **Menüpfad:** Settings → App lock  
   **Prüfen:** Sperre greift nach App-Wechsel/Timeout (Test: App in Hintergrund → zurück).
2) **App-Lock Timeout kurz setzen** (z.B. 1–5 Minuten statt „Never“)  
   **Prüfen:** Timeout-Wert sichtbar und reproduzierbar.
3) **Backup-Verschlüsselung prüfen/aktivieren**  
   **Menüpfad:** Settings → Backup & export → „Backup encryption“  
   **Prüfen:** Backup-Dateien werden als „encrypted“ erzeugt (nicht als Klartext-Export).

**Stolpersteine:**
- Recovery-Optionen (z.B. E-Mail-basierte Flows) erhöhen Identitätsbindung (Abwägung: Support/Recovery vs. Metadaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze eine dedizierte E-Mail-Adresse/Alias nur für Notesnook (Abwägung: zusätzlicher Account-Verwaltungsaufwand).
- Aktiviere Privacy Mode (Desktop, falls vorhanden) für sensible Arbeitskontexte (Abwägung: Komfortfunktionen wie OS-Previews können eingeschränkt sein; nicht auf Linux verfügbar).
- Export/Backups bevorzugt lokal + verschlüsselt speichern (Abwägung: eigener Backup-Prozess/Disziplin nötig).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze getrennte Arbeitsumgebungen (z.B. separates OS-Profil/VM) für Notizen mit hoher Sensitivität (Abwägung: deutlich mehr Reibung).
- Nutze Vault zusätzlich zum App Lock für „Need-to-know“-Notizen (Abwägung: mehr Entsperr-Schritte, Risiko bei Passwortverlust).
- Wenn Self-Hosting ernsthaft relevant ist: prüfe Server-URL-Optionen und Sync-Server-Projektstatus (Abwägung: Betriebsrisiko/Fehlkonfiguration möglich).

</details>

## Features
- Ende-zu-Ende-verschlüsselte Notizen & Sync (clientseitig, laut Help/Privacy).
- App Lock mit Timeout & optionalen Methoden (Help).
- Private Vault für einzelne Notizen (Help).
- Privacy Mode (Desktop; nicht Linux) für Screen-Capture/Preview-Reduktion (Help).
- Encrypted Backups (ab v2.6.0 standardmäßig aktiv laut Help) + Export (Help).
- Monographs: Notizen teilen/veröffentlichen, optional mit Passwortschutz & One-time-View („Self destruct“) (Help).
- Open Source Clients (GitHub) und Self-Hosting-Bausteine (Sync-Server-Repo).

## Alternativen
- Standard Notes (Abwägung: anderer Produktfokus/Ökosystem, andere Account-/Planstruktur).
- Joplin (Abwägung: stärker lokal-datei-/sync-tool-orientiert, mehr Einrichtung-Freiheit möglich).
- Obsidian (Abwägung: lokal-zentriert, Workflow stark datei-/vaultbasiert).

## Nicht gelöst / offene Punkte
- Öffentliche Subprozessoren-/DPA-Dokumente: unklar, ob eine vollständige, aktuelle Liste verfügbar ist.
- Aktueller Stand zu Telemetrie/Analytics (Client vs. Website) ist zwischen Privacy Policy und Release Notes nicht vollständig eindeutig.

## Quellen

- Monographs: "Notizen veröffentlichen/teilen (optional mit Passwortschutz & „Self destruct“)
- Self-Hosting: "Sync-Server als (Alpha-)Projekt im offiziellen Repo-Umfeld
- https://github.com/streetwriters/notesnook-sync-server
- [Notesnook – Website/Overview](https://notesnook.com/)
- [Pricing plans](https://notesnook.com/pricing/)
- [Privacy Policy](https://notesnook.com/privacy/)
- [Terms of Service](https://notesnook.com/terms/)
- [Notesnook Help – How is my data encrypted?](https://help.notesnook.com/how-is-my-data-encrypted)
- [Notesnook Help – App lock](https://help.notesnook.com/app-lock)
- [Notesnook Help – Backup and restore](https://help.notesnook.com/backup-and-restore-notes-in-notesnook)
- [Notesnook Help – Privacy mode](https://help.notesnook.com/privacy-mode)
- [Notesnook Help – Private vault](https://help.notesnook.com/lock-notes-with-private-vault)
- [Notesnook Help – Recovering your account](https://help.notesnook.com/recovering-your-account)
- [Notesnook Help – Deleting your account](https://help.notesnook.com/deleting-your-account)
- [Blog – Notesnook v3.0.14 (Telemetry entfernt)](https://blog.notesnook.com/notesnook-v3.0.14/)
- [Blog – Notesnook v3.0.7 (Logs in SQLite)](https://blog.notesnook.com/notesnook-v3.0.7/)
- [Blog – Improving User Account Security with 2FA](https://blog.notesnook.com/improving-user-account-security-with-2fa/)
- [Blog – Introducing new pricing plans](https://blog.notesnook.com/introducing-new-pricing-plans/)
- [GitHub – streetwriters/notesnook](https://github.com/streetwriters/notesnook)
- [GitHub – streetwriters/notesnook-sync-server](https://github.com/streetwriters/notesnook-sync-server)
