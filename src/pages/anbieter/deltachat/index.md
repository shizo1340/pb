---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / DeltaChat"
url: "/anbieter/deltachat/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-10"
robots: "index,follow"
description: "Kurzprofil von DeltaChat (Kategorie: Messenger)."
provider: ""
name: "DeltaChat"
category: "Messenger"
website: "https://delta.chat/"
repo: "https://github.com/deltachat/"
license: "GPL-3.0-only (Clients) / MPL-2.0 (Core) (laut Repos)"
policies: ""
privacy: "https://privacy.de/lta.chat/gdpr"
terms: "Nicht angegeben"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Deutschland (laut Impressum)"
region: "eu"
logs: "configurable"
retention: "unknown"
retention_notes: "Unklar (abhängig vom E-Mail-/Chatmail-Provider)"
data_notes: "Delta Chat nutzt bestehende E-Mail-Infrastruktur (oder Chatmail-Profile). Nachrichten liegen lokal und typischerweise im Postfach des verwendeten Servers; Metadaten fallen serverseitig beim jeweiligen Provider an. E2E-Verschlüsselung ist möglich, aber nicht automatisch für jede Unterhaltung garantiert (abhängig von Gegenstelle/Setup)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

DeltaChat ist ein Anbieter aus der Kategorie **Messenger**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Messaging ohne zentrale Messenger-Accounts nutzen willst und dafür ein E-Mail-/Chatmail-Konto als Basis akzeptierst.
- **Weniger geeignet wenn:** du Metadaten bei E-Mail-Providern vermeiden willst oder „klassisches“ Messenger-Onboarding ohne Server-/Konto-Kontext brauchst.
- **Wichtigster Abwägung:** Dezentralität/Interoperabilität über E-Mail vs. Metadaten & Speicherung beim jeweiligen E-Mail-/Chatmail-Provider.

## Sofortmaßnahmen
- **E2E-Verbindung aktiv prüfen:** In 1:1-Chats „Secure Join“/QR-Verifikation nutzen, um Schlüsselbindung sichtbar zu machen (Abwägung: zusätzlicher Schritt im Einrichtung).
- **Statistiken deaktivieren:** In den Einstellungen „Send statistics“ ausschalten, falls aktiv (Abwägung: weniger Diagnosedaten für Fehleranalyse).
- **Identität trennen:** Für Delta Chat ein separates E-Mail-/Chatmail-Profil verwenden, um die private Hauptadresse nicht zu binden (Abwägung: zusätzlicher Account/Wechselaufwand).

## Entscheidungshilfe
- Wenn du bereits ein E-Mail-Konto hast, dann kannst du Delta Chat darauf aufsetzen (Abwägung: Metadaten/Retention hängen vom Mailprovider ab).
- Wenn du nicht möchtest, dass deine private Hauptadresse als Chat-Identität dient, dann nutze ein separates Profil/Konto (Abwägung: Kontakte müssen die neue Adresse kennen).
- Wenn du Ende-zu-Ende-Verschlüsselung brauchst, dann verifiziere Kontakte per „Secure Join“ und prüfe den Verschlüsselungsstatus im Chat (Abwägung: ohne Gegenstelle/Einrichtung ist nicht jede Konversation automatisch E2E).
- Wenn Push-Benachrichtigungen kritisch sind, dann prüfe die verwendete Push-Technik auf deinem Gerät (Abwägung: Push kann zusätzliche Drittanbieter-Komponenten einbeziehen).
- Wenn du maximale Kontrolle willst, dann ist die Wahl eines eigenen/selbstverwalteten Mailservers relevant (Abwägung: mehr Betriebsaufwand, Zustellbarkeit/Spam-Themen möglich).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | DeltaChat |
| Kategorie | Messenger |
| Website | https://delta.chat/ |
| Quellcode | https://github.com/deltachat/ |
| Lizenz | GPL-3.0-only (Clients) / MPL-2.0 (Core) (laut Repos) |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | yes (E-Mail- oder Chatmail-Profil) |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Deutschland (laut Impressum) |
| Logs | configurable (abhängig vom verwendeten Server/Provider) |
| Retention | Unklar (abhängig vom E-Mail-/Chatmail-Provider) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://privacy.de/lta.chat/gdpr
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- IncludeSec Security Review (PDF, 2020): https://delta.chat/assets2020-security-review.pdf
- IncludeSec Security Review (PDF, 2019): https://delta.chat/assets2019-security-review.pdf

**Daten-Notizen (kurz):**
Delta Chat nutzt E-Mail/Chatmail als Transport. Daten liegen lokal auf dem Gerät und typischerweise auch beim verwendeten Server (Postfach). Metadaten (z.B. Absender/Empfänger/Zeiten) fallen beim jeweiligen Provider an; E2E ist möglich, aber nicht für jede Unterhaltung automatisch garantiert.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Je nach Einrichtung u.a. E-Mail-Adresse/Accountdaten zur Einrichtung, Nachrichteninhalte als E-Mail-Daten im Postfach des genutzten Servers; optional Push-Token für Benachrichtigungen (laut App-Privacy-Policy/Help).
- **Wofür:** Betrieb des Messengers über E-Mail/Chatmail-Infrastruktur (Transport, Zustellung, Synchronisation).
- **Weitergabe/Subprozessoren:** Delta Chat selbst betreibt laut eigenen Angaben keine zentrale Nachrichten-Cloud; Weitergaben ergeben sich primär durch genutzte Plattform-/Push-Dienste und den jeweiligen E-Mail-/Chatmail-Provider.
- **Drittlandtransfer:** Nicht angegeben (hängt typischerweise an Provider/Plattformdiensten).
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (kostenloses Projekt/Apps).
- **Kontakt/DSAR/DPA:** Kontaktmöglichkeiten/Verantwortliche sind in der App-Privacy-Policy und im Impressum beschrieben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Help/FAQ gibt es eine Option „Send statistics to Delta Chat’s developers“ (nicht als Pflicht beschrieben).
- **Abschaltbar?** Ja, sofern die Option vorhanden/aktiv ist (laut Help/FAQ).
- **Wo (Menüpfad):** Einstellungen → (Erweitert/Advanced) → „Send statistics“ (Bezeichnung je nach Client leicht abweichend).

**Logs & Retention:**
- **Logging-Level:** configurable
- **Aufbewahrung:** Unklar (abhängig vom E-Mail-/Chatmail-Provider; im Zweifel verbleiben Nachrichten als E-Mail im Postfach, bis du sie löschst).
- **Lösch-/Opt-out-Optionen:** Lokal löschbar; serverseitig abhängig vom Provider und dessen Lösch-/Archivlogik.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Ende-zu-Ende-Verschlüsselung ist laut Projekt möglich (Autocrypt/OpenPGP); Verifikation per „Secure Join“ wird dokumentiert.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben (Kontoschutz hängt primär am genutzten E-Mail-/Chatmail-Konto).
- **Recovery/Account-Wiederherstellung:** Erfolgt über den jeweiligen E-Mail-/Chatmail-Provider (Passwort/Accountzugang); Delta Chat selbst stellt keine zentrale Account-Recovery-Instanz dar.
- **Vuln-Handling / Security-Kontakt:** Nicht eindeutig als Disclosure-Prozess dokumentiert (in den geprüften Quellen nicht gefunden).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **E2E-Status im Chat prüfen & Kontakte verifizieren** (Secure Join/QR), wenn verfügbar.  
   **Prüfen:** Chat zeigt „verschlüsselt“ + verifizierte Verbindung nach QR-Join.
2) **Geräteschutz & App-Sperre nutzen** (System-Sperrcode/biometrisch; App-Auto-Lock falls Client anbietet).  
   **Prüfen:** Gerät sperrt zuverlässig; App ist nach Timeout nicht direkt nutzbar.
3) **Statistiken/Diagnosedaten deaktivieren**, falls Option vorhanden.  
   **Prüfen:** „Send statistics“ ist aus (laut Help/FAQ beschrieben).

**Stolpersteine:**
- Auch bei E2E sieht der genutzte E-Mail-/Chatmail-Provider typischerweise Metadaten (Abwägung: Dezentralität/Interoperabilität vs. Metadaten beim Provider).
- Ohne E2E-Einrichtung auf beiden Seiten können Inhalte ggf. nicht Ende-zu-Ende geschützt sein (Abwägung: Kompatibilität vs. Inhaltsvertraulichkeit).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze ein separates E-Mail-/Chatmail-Profil, das nicht auf deine Hauptidentität zurückfällt.
- Reduziere Push-Abhängigkeiten, wenn das für deinen Use-Case geht (z.B. Benachrichtigungen im System eingeschränkt, weniger „Always-on“).
- Halte Postfächer klein: lösche Chats/Nachrichten regelmäßig (lokal und serverseitig, falls Provider „server löschen“ unterstützt).  
**Abwägung:** mehr Pflegeaufwand, ggf. weniger Komfort bei Synchronisation/Verlauf.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze eine strikt getrennte Geräteumgebung (separates Nutzerprofil/VM/Second Device), nur für Messenger-Kommunikation.
- Verwende einen kontrollierten Mailserver/Provider mit klaren Log-/Retention-Regeln (oder selbstverwaltet), sofern du den Aufwand tragen kannst.
- Vermeide Push, wenn du Drittanbieter-Abhängigkeiten minimieren willst (Achtung: schlechtere Zustell-UX möglich).  
**Abwägung:** deutlicher Komfortverlust, höhere Komplexität und Betriebsaufwand.

</details>

## Features
- Dezentral: nutzt bestehende E-Mail-Infrastruktur (IMAP/SMTP)
- Ende-zu-Ende-Verschlüsselung möglich (Autocrypt/OpenPGP) + „Secure Join“
- Gruppen, Anhänge, Sprachnachrichten (je nach Client)
- Optional: In-Chat-Apps (WebXDC) laut Projekt

## Alternativen
- [Briar](/anbieter/briar/) – Abwägung: funktioniert ohne E-Mail-Provider, dafür je nach Modus weniger Interoperabilität
- [Signal](/anbieter/signal/) – Abwägung: zentraler Dienst mit Kontobindung, dafür klassisches IM-UX
- Matrix-Clients (Messenger) – Abwägung: Föderation/Serverwahl, dafür typischerweise zusätzliche Server-Infrastruktur

## Nicht gelöst / offene Punkte
- Unklar, ob es eine konsolidierte öffentliche Subprozessoren-/Drittanbieter-Liste für Push/Statistiken gibt.

## Quellen

- IncludeSec Security Review (PDF, 2020): "https://delta.chat/assets2020-security-review.pdf
- IncludeSec Security Review (PDF, 2019): "https://delta.chat/assets2019-security-review.pdf
- Dezentral: "nutzt E-Mail (IMAP/SMTP) als Transport
- Optional: "In-Chat-Apps (WebXDC) laut Projekt
- Briar (Messenger) – Trade-off: "funktioniert ohne E-Mail-Provider, dafür je nach Modus weniger Interoperabilität
- Signal (Messenger) – Trade-off: "zentraler Dienst mit Kontobindung, dafür klassisches IM-UX
- Matrix-Clients (Messenger) – Trade-off: "Föderation/Serverwahl, dafür typischerweise zusätzliche Server-Infrastruktur
- [Delta Chat – Website](https://delta.chat/)
- [Delta Chat Help/FAQ](https://delta.chat/en/help)
- [Delta Chat Apps Privacy Policy](https://privacy.de/lta.chat/gdpr)
- [Delta Chat – Impressum](https://delta.chat/en/imprint)
- [Delta Chat – GitHub Organisation](https://github.com/deltachat/)
- [Delta Chat – Encrypted Messaging (Projektseite)](https://delta.chat/en/encrypted-messaging)
- [IncludeSec Security Review 2020 (PDF)](https://delta.chat/assets2020-security-review.pdf)
- [Delta Chat – Website](https://delta.chat/)
- [Delta Chat Help/FAQ](https://delta.chat/en/help)
- [Delta Chat Apps Privacy Policy](https://privacy.de/lta.chat/gdpr)
- [Delta Chat – Impressum](https://delta.chat/en/imprint)
- [Delta Chat – GitHub Organisation](https://github.com/deltachat/)
- [Delta Chat – Encrypted Messaging (Projektseite)](https://delta.chat/en/encrypted-messaging)
- [IncludeSec Security Review 2020 (PDF)](https://delta.chat/assets2020-security-review.pdf)
