---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Beeper"
url: "/anbieter/beeper/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-05"
robots: "index,follow"
description: "Kurzprofil von Beeper (Kategorie: Messenger)."
provider: ""
name: "Beeper"
category: "Messenger"
website: "https://www.beeper.com/"
repo: "https://github.com/beeper"
license: "Nicht angegeben (Produkt); teilweise Open Source (Komponenten/Bridges mit z.B. Apache-2.0 oder AGPL-3.0)"
policies: ""
privacy: "https://www.beeper.com/privacy"
terms: "https://www.beeper.com/terms"
transparency: ""
warrant_canary: ""
audits: "[]"
pricing: "freemium"
free_tier: "yes"
open_source: "partial"
self_host_possible: "partial"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA (Automattic Inc.)"
region: "us"
logs: "some"
logs_notes: "Automatisch erhobene Logs/Performance-Daten laut Privacy Policy (Details/Umfang je Nutzung)"
retention: "unknown"
retention_notes: "Bis Löschung des Kontos (Privacy Policy); Details zur Log-Retention nicht angegeben"
data_notes: "Beeper verbindet mehrere Messaging-Dienste. Datenschutz/Sicherheit hängen auch von den angebundenen Diensten und deren ToS/Clients ab."
features: ""
alternatives: ""
payment_processors: "Nicht angegeben (Privacy Policy erwähnt Payment Processors, benennt sie aber nicht)"
sources: ""
---
## Kurzprofil

Beeper ist ein Anbieter aus der Kategorie **Messenger**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du mehrere Chat-Netzwerke in **einer** Inbox bündeln willst und akzeptierst, dass Privacy/Security je nach angebundenem Dienst und Verbindungsmodus (On-Device vs. Cloud) variieren.
- **Weniger geeignet wenn:** du einen Messenger mit **klarer, einheitlicher E2EE-Eigenschaft** ohne Brücken-/Aggregator-Komplexität suchst.
- **Wichtigster Abwägung:** **Komfort (eine Inbox, Sync über Geräte)** vs. **zusätzliche Angriffsfläche/Metadaten** durch Aggregation, Account-Layer und ggf. Cloud-Komponenten.

## Sofortmaßnahmen
- **On-Device Connections nutzen, wenn verfügbar:** reduziert Server-Datenflüsse, weil Nachrichten laut Anbieter dann nicht über Beeper-Server laufen.
- **Recovery Code sicher ablegen:** ohne Recovery Code kann verschlüsselte Historie nicht mehr lokal entschlüsselt werden (Abwägung: Recovery-Bequemlichkeit vs. Schlüssel-Sorgfalt).
- **Desktop-API nicht ins Internet öffnen:** Remote Access erhöht das Risiko, dass Dritte Chat-Inhalte/Senderechte abgreifen können.

## Entscheidungshilfe
- Wenn du **minimieren willst, was auf Beeper-Servern landet**, dann nutze **On-Device Connections**, wo das für dein Netzwerk angeboten wird (Abwägung: ggf. mehr Einrichtung-Aufwand bei neuen Geräten).
- Wenn du **mehrere Geräte parallel** nutzen willst und ein Netzwerk On-Device nicht gut unterstützt, dann kann **Beeper Cloud** relevant sein (Abwägung: Nachrichten/Anhänge können dabei laut Anbieter auf Servern liegen – wenn auch „zero-access“ verschlüsselt).
- Wenn du **Cloud vermeiden**, aber trotzdem die Inbox-Bündelung willst, dann prüfe **Self-Hosting von Bridges** (Abwägung: weniger Komfort/Support, mehr Eigenbetrieb).
- Wenn du **Support-Diagnosen** brauchst, dann kann Telemetrie/Logging hilfreich sein (Abwägung: mehr Diagnosedaten = mehr Metadaten).
- Wenn du **hohes Risiko** (Targeting/Account-Takeover) erwartest, dann behandle Beeper als **zusätzliche Schicht** zwischen dir und den Netzwerken (Abwägung: ein Konto/Schlüsselset wird kritischer Single Point).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Beeper |
| Kategorie | Messenger |
| Website | https://www.beeper.com/ |
| Quellcode | https://github.com/beeper |
| Lizenz | Nicht angegeben (Produkt); teilweise Open Source (Komponenten/Bridges mit z.B. Apache-2.0 oder AGPL-3.0) |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben (Privacy Policy erwähnt Payment Processors, benennt sie aber nicht) |
| Jurisdiktion | USA (Automattic Inc.) |
| Logs | Automatisch erhobene Logs/Performance-Daten laut Privacy Policy (Details/Umfang je Nutzung) |
| Retention | Bis Löschung des Kontos (Privacy Policy); Details zur Log-Retention nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.beeper.com/privacy
- AGB/Terms: https://www.beeper.com/terms
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Beeper verbindet mehrere Messaging-Dienste. Datenschutz/Sicherheit hängen auch von den angebundenen Diensten und deren ToS/Clients ab.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** laut Privacy Policy u.a. Identifiers (z.B. Username, Vor-/Nachname), Profilinfos (z.B. Social-Media-Profilname/-bild), Kontaktinfos (E-Mail, ggf. Telefonnummern), IP-Adresse (zur groben Standortableitung), sowie automatisch erhobene Logs/Performance-Daten (z.B. Gerätedaten/Device IDs, OS, Crash-/Fehlerdaten, Nutzungsmetriken).
- **Wofür:** Betrieb des Dienstes (u.a. Accounts verbinden), Support/Fehlerbehebung, Produktverbesserung/Tests, Missbrauchs-/Fraud-Erkennung, sowie Preisbestimmung anhand des ungefähren Standorts (Privacy Policy nennt „approximate location“).
- **Weitergabe/Subprozessoren:** es wird an „Service Providers“ für u.a. Payment Processing, Security, Network Management und Cloud Storage weitergegeben; eine konkrete öffentliche Liste wird nicht genannt.
- **Drittlandtransfer:** die Privacy Policy beschreibt Maßnahmen für Übermittlungen außerhalb Europas (z.B. Standardvertragsklauseln), ohne alle Empfänger konkret zu listen.
- **Zahlungsabwicklung/Payment Processor:** Payment Processors werden erwähnt, aber nicht benannt.
- **Kontakt/DSAR/DPA:** Kontakt per E-Mail (privacy@beeper.com); Löschung laut Privacy Policy via E-Mail oder in Account-Settings möglich.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Privacy Policy nennt automatisch erhobene Logs/Performance-Daten sowie Website-Cookies zur Nutzungsanalyse/Service-Verbesserung; ein App-Schalter wird nicht dokumentiert.
- **Abschaltbar?** Nicht angegeben.
- **Wo (Menüpfad):** Nicht angegeben (in der App nach „Analytics“, „Diagnostics“, „Crash reports“ suchen).

**Logs & Retention:**
- **Logging-Level:** Automatisch erhobene Logs/Performance-Informationen (Details in der Privacy Policy beschrieben).
- **Aufbewahrung:** laut Privacy Policy bis zur Kontolöschung bzw. bis du Löschung anfragst; separate Fristen für Diagnose-/Serverlogs werden nicht genannt.
- **Lösch-/Opt-out-Optionen:** Kontolöschung laut Terms/Privacy möglich; Opt-out für Diagnosedaten nicht angegeben.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:**  
  - **On-Device Connections:** laut Privacy Policy werden Nachrichten/Kontakte/Credentials „never stored on or transit our servers“ und E2EE bleibt erhalten, sofern der jeweilige Messaging-Dienst E2EE unterstützt.  
  - **Beeper Cloud:** laut Privacy Policy werden Nachrichten/Anhänge/Contacts/Credentials serverseitig gespeichert, die Historie sei mit „zero-access encryption“ verschlüsselt und Beeper habe keine Decryption Keys für die Historie.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Für Beeper-Account selbst nicht beschrieben; Help Center dokumentiert 2FA-Themen primär im Kontext der angebundenen Netzwerke bei deren Login.
- **Recovery/Account-Wiederherstellung:** Help Center beschreibt Recovery Code als Schlüssel für die verschlüsselte Historie; Reset führt dazu, dass alte verschlüsselte Nachrichten nicht mehr zugänglich sind und Netzwerke neu verbunden werden müssen.
- **Vuln-Handling / Security-Kontakt:** FAQ nennt security@beeper.com für Vulnerability-Meldungen; außerdem Teilnahme an Automattic-Bug-Bounty (HackerOne wird in der FAQ verlinkt).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **On-Device Connections bevorzugen**, wenn dein Netzwerk das unterstützt.  
   **Prüfen:** In der App/Netzwerk-Einrichtung wird On-Device vs. Cloud genannt (je nach Netzwerk).
2) **Recovery Code sichern** (Password Manager oder Offline-Notiz in Tresor).  
   **Prüfen:** Recovery Code ist auffindbar/abgelegt, nicht nur als Screenshot.
3) **Desktop-API Remote Access aus lassen** (nur lokal nutzen).  
   **Prüfen:** In den Desktop-Einstellungen ist Remote-Access nicht aktiviert (Default: localhost).

**Stolpersteine:**
- **Aggregator-Abwägung:** selbst wenn Inhalte verschlüsselt sind, kann die Bündelung von Netzwerken Metadaten/Angriffsfläche erhöhen (ein Konto/Client bündelt viele Identitäten).
- **Recovery-Reset:** Wenn Recovery Code verloren ist, führt Reset laut Help Center zu neuem Schlüssel und potenziell nicht wiederherstellbarer Historie je Netzwerk.

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **E-Mail-Login**, wenn du keine zusätzliche Identitätsbindung möchtest (Telefon ist laut Terms nicht notwendig).
- Verbinde **nur die wirklich benötigten Netzwerke** und entferne nicht genutzte Accounts wieder (reduziert Datenflüsse/Attack Surface).
- Wenn du Cloud vermeiden willst: prüfe **Self-Hosting von Bridges** (Beeper Bridge Manager `bbctl` in den Dev-Docs).  
**Abwägung:** mehr Eigenbetrieb/Komplexität und laut Dev-Docs eingeschränkter Support bei Self-Hosting.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze Beeper **isoliert** (separates OS-Profil/VM) und trenne Arbeits-/Privat-Netzwerke (Abwägung: mehr Aufwand).
- Vermeide **Remote-Access** der Desktop-API und jede Exponierung ins Internet (Abwägung: weniger Automatisierung/Integrationen).
- Plane Recovery: **Recovery Code offline**, plus Gerät/Account-Hygiene (Abwägung: höhere Disziplin nötig).

</details>

## Features
- Multi-Messenger Inbox (mehrere Netzwerke in einer Inbox)
- On-Device Connections oder Beeper Cloud (je nach Netzwerk/Einrichtung)
- Optional: Beeper Plus (Abo) für Zusatzfunktionen

## Alternativen
- **Signal:** Fokus auf Ende-zu-Ende-Verschlüsselung in einem einzelnen Netzwerk (Abwägung: keine Multi-Inbox über viele Dienste).
- **Element (Matrix):** offenes Protokoll, föderiert, eigene Server möglich (Abwägung: Einrichtung/Server-/Client-Komplexität je nach Ziel).
- **Franz/Ferdi:** bündelt Web-UIs mehrerer Messenger in einer Desktop-App (Abwägung: andere Daten-/Session-Risiken durch Web-Embedding und weniger „Bridge“-Kontrolle).

## Nicht gelöst / offene Punkte
- Öffentliche **Subprozessoren-/Payment-Processor-Liste** ist in den Beeper-Primärquellen nicht klar auffindbar.
- Ob und wie **Telemetrie/Crash-Reports** im Client abschaltbar sind, ist nicht eindeutig dokumentiert.
- Lizenzstatus des **kompletten Clients/Backend** ist nicht als einheitliche Produktlizenz angegeben (nur teilweise Open Source für einzelne Projekte).

## Quellen

- Optional: "Beeper Plus (Abo) für Zusatzfunktionen
- Signal (Fokus: "E2EE, weniger Aggregation)
- Element (Matrix) (Fokus: "offenes Protokoll, föderiert)
- Franz/Ferdi (Desktop-Aggregator) (Fokus: "UI-Bündelung ohne gleiche Brücken-Architektur)
- title: "The New Beeper (Blog)
- [Beeper – Website](https://www.beeper.com/)
- [Beeper Privacy Policy](https://www.beeper.com/privacy)
- [Beeper Terms of Service](https://www.beeper.com/terms)
- [Beeper FAQ](https://www.beeper.com/faq)
- [Open Source – Beeper Developer Docs](https://developers.beeper.com/open-source)
- [Bridges & Self-Hosting – Beeper Developer Docs](https://developers.beeper.com/bridges)
- [Self-Hosting Bridges – Beeper Developer Docs](https://developers.beeper.com/bridges/self-hosting)
- [Remote Access – Beeper Desktop API](https://developers.beeper.com/desktop-api/advanced/remote-access)
- [How to verify a Beeper app? – Help Center](https://help.beeper.com/en_US/quick-references/how-to-verify-a-beeper-app)
- [Reset Secure Storage / Recovery Code – Help Center](https://help.beeper.com/en_US/troubleshooting/reset-secure-storage-recovery-code-restore)
- [The New Beeper (Blog)](https://blog.beeper.com/2025/07/16/the-new-beeper/)

