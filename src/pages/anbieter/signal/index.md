---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Signal"
url: "/anbieter/signal/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-21"
robots: "index,follow"
description: "Kurzprofil von Signal (Kategorie: Messenger)."
provider: ""
name: "Signal"
category: "Messenger"
website: "https://signal.org/"
repo: "https://github.com/signalapp"
license: "AGPL-3.0-only (u.a. Signal-Android)"
policies: ""
privacy: "https://signal.org/legal/"
terms: "https://signal.org/legal/"
transparency: "https://signal.org/bigbrother/"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "yes"
kyc_required: "no"
jurisdiction: "USA (Signal Messenger, LLC)"
region: "us"
logs: "minimal"
retention: "unknown"
retention_notes: "Unklar (nicht angegeben; laut Anbieter können i.d.R. nur Registrierungszeitpunkt + letzte Verbindung produziert werden)"
data_notes: "Telefonnummer-basierte Registrierung; Inhalte standardmäßig Ende-zu-Ende verschlüsselt; Nachrichtenverlauf liegt lokal auf dem Gerät (Server hat keinen Zugriff auf Inhalte)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Signal ist ein Anbieter aus der Kategorie **Messenger**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Ende-zu-Ende Verschlüsselung als Default willst und eine **Telefonnummer** für die Registrierung akzeptierst.
- **Weniger geeignet wenn:** du **keine Telefonnummer** einsetzen willst (Registrierung ist telefonnummer-basiert) oder wenn du eine vollständig dezentrale/föderierte Messenger-Architektur brauchst.
- **Wichtigster Abwägung:** **Erreichbarkeit/Komfort (Telefonnummer, Adressbuchbezug, Zustellung/Push)** vs. **möglichst wenig Identitäts-Metadaten**.

## Sofortmaßnahmen
- **Registration Lock aktivieren:** erschwert Account-Übernahmen durch (Re-)Registrierung mit abgefangenen SMS-Codes.
- **Telefonnummer-Privatsphäre konfigurieren:** reduziert, wer dich über die Nummer finden/sehen kann (Abwägung: Auffindbarkeit für Kontakte).
- **Screen Security aktivieren:** verhindert Screenshots/Preview-Leaks auf dem Gerät (Abwägung: weniger Komfort beim Teilen).

## Entscheidungshilfe
- Wenn du Signal primär für private 1:1- und Gruppenkommunikation nutzt, dann plane **Telefonnummer als Konto-Identifier** ein (Abwägung: Identitätsbindung an eine Nummer).
- Wenn du nicht möchtest, dass andere dich über deine Nummer finden, dann setze **„Who can find me by number“** und **„Who can see my number“** restriktiver (Abwägung: Kontakte finden dich ggf. schwerer).
- Wenn du Gerätewechsel oder SIM-Swap als Risiko siehst, dann nutze **Signal PIN + Registration Lock** (Abwägung: PIN muss sicher verwahrt werden, sonst mehr Aufwand bei Recovery).
- Wenn du Support-Probleme debuggen musst, dann sende Debug-Logs nur gezielt und prüfe, was darin sichtbar sein kann (Abwägung: Support/Diagnose vs. Zusatz-Metadaten).
- Wenn du lokalen Datenabfluss begrenzen willst, dann nutze **Nachrichten-/Speicherlimits** und (Android) **Backups mit Passphrase** (Abwägung: Recovery ohne Passphrase kaum möglich).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Signal |
| Kategorie | Messenger |
| Website | https://signal.org/ |
| Quellcode | https://github.com/signalapp |
| Lizenz | AGPL-3.0-only (u.a. Signal-Android) |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | yes |
| Telefon erforderlich | yes |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend (Messenger-Nutzung kostenlos; Spenden separat) |
| Jurisdiktion | USA (Signal Messenger, LLC) |
| Logs | minimal |
| Retention | Unklar (nicht angegeben; laut Anbieter können i.d.R. nur Registrierungszeitpunkt + letzte Verbindung produziert werden) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://signal.org/legal/
- AGB/Terms: https://signal.org/legal/
- Transparency Report: https://signal.org/bigbrother/
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Telefonnummer-basierte Registrierung; Inhalte standardmäßig Ende-zu-Ende verschlüsselt; Nachrichtenverlauf liegt lokal auf dem Gerät (Server hat keinen Zugriff auf Inhalte).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Telefonnummer zur Registrierung; optional Profilname/-bild; optional Kontaktabgleich (gehashte Kontakte werden zur Ermittlung registrierter Kontakte genutzt); Debug-Logs/Crash-Reports nur wenn aktiv geteilt.
- **Wofür:** Account-Registrierung, Zustellung/Kommunikation, optional Kontakt-Findung, Support/Fehleranalyse.
- **Weitergabe/Subprozessoren:** Für die Telefonnummer-Verifizierung werden Drittanbieter eingesetzt (z.B. Telefonie-/SMS-Provider laut Support-Artikel zum Twilio-Vorfall). Weitere Subprozessoren werden in den öffentlich auffindbaren Dokumenten nicht als Liste genannt.
- **Drittlandtransfer:** In den Terms wird auf Verarbeitung/Transfer (u.a. USA und andere Länder mit Partnern/Service-Providern) hingewiesen.
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend für die Messenger-Nutzung (kostenlos).
- **Kontakt/DSAR/DPA:** Datenschutzkontakt via privacy@signal.org; Export eines Account-Datenberichts ist im Client möglich („Requesting your account data“).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Support: „no tracking in Signal“ (keine Tracking-Aussage); Debug-Logs/Crash-Reports werden nur bei Bedarf geteilt.
- **Abschaltbar?** Debug-Logs werden manuell erzeugt/gesendet; kein separater „Analytics“-Schalter dokumentiert.
- **Wo (Menüpfad):**  
  - Android: Signal → Profil → **Help** → **Debug log** → **Submit**  
  - iOS: Signal → Profil → **Help** → **Submit Debug Log** → **Copy Link**  
  - Crash-Report (iOS): iOS Einstellungen → Privacy (& Security) → Analytics (& Improvements) → Analytics Data → „Signal-(DateTime).ips“

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** Unklar (nicht angegeben; laut „Government Requests“ kann Signal typischerweise nur Registrierungszeitpunkt und letzte Verbindung produzieren)
- **Lösch-/Opt-out-Optionen:** Account kann durch „Unregistering“ beendet werden; lokale Daten lassen sich über Speicher-/Nachrichtenverwaltung reduzieren.

**Abwägung am Punkt:** Weniger Diagnose-Daten erschweren Fehleranalyse; Debug-Logs/Crash-Reports liefern Support-Kontext, können aber zusätzliche Metadaten enthalten.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Ende-zu-Ende Verschlüsselung standardmäßig; Signal hat laut Support/Legal keinen Zugriff auf Nachrichteninhalte.
- **KDF/Parameter/Schlüsselableitung:** Details sind in der Signal-Dokumentation beschrieben (z.B. Double Ratchet / PQXDH), aber im Nutzer-UI nicht konfigurierbar.
- **MFA/2FA/Passkeys/Hardware-Keys:** Kein klassisches 2FA-System für ein Web-Konto dokumentiert; stattdessen **Signal PIN** + **Registration Lock** als Schutz gegen Re-Registrierung.
- **Recovery/Account-Wiederherstellung:** Wiederherstellung/Transfer über PIN/Verfahren in der App; Android unterstützt lokale Backups mit Passphrase.
- **Vuln-Handling / Security-Kontakt:** Security-Vulnerabilities können laut Support verantwortungsvoll gemeldet werden (Signal Support → Security FAQ).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Registration Lock aktivieren (Signal PIN)**  
   **Menüpfad:** Signal → Profil → **Account** → **Registration Lock**  
   **Prüfen:** „Registration Lock: On“ / PIN gesetzt.
2) **Telefonnummer-Privatsphäre konfigurieren**  
   **Menüpfad:** Signal → Profil → **Privacy** → **Phone Number**  
   **Prüfen:** „Who can see my number“ / „Who can find me by number“ entspricht deinem Bedarf.
3) **Screenshots/Preview-Leaks reduzieren (Screen Security + Screen Lock)**  
   **Menüpfad:** Signal → Profil → **Privacy** → **Screen Security** / **Screen Lock**  
   **Prüfen:** Screenshot/Preview wird blockiert bzw. App sperrt nach Timeout.

**Stolpersteine:**
- PIN/Passphrase verlieren kann Recovery erschweren (Abwägung: Schutz gegen Übernahme vs. Recovery-Aufwand).
- Debug-Logs helfen beim Support, sind aber zusätzliche Diagnose-Daten (Abwägung: Support vs. Metadaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Auffindbarkeit reduzieren:** „Who can find me by number“ restriktiv setzen; optional Username nutzen.  
- **Lokale Datenspuren verkleinern:** Signal → Profil → **Data and Storage** → **Manage storage** → „Keep messages“ kürzer setzen.  
- **Debug-Logs nur im Ausnahmefall teilen** und vorher prüfen, ob sie wirklich nötig sind.  
**Abwägung:** Kontakte finden dich ggf. schlechter; weniger lokale Historie kann Alltagskomfort reduzieren.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Getrennte Geräte-/Profilstrategie** (z.B. separates Nutzerprofil/Device nur für Signal), um App-Daten zu isolieren.
- **Benachrichtigungen/Previews minimieren** (OS-Einstellungen + Screen Security), um Sperrbildschirm-Leaks zu reduzieren.
- **Konsequente Verifikationen** über Sicherheitsnummern bei sensiblen Kontakten.  
**Abwägung:** deutlicher Komfortverlust, höhere Komplexität und mehr Bedienfehler-Risiko.

</details>

## Features
- Ende-zu-Ende Verschlüsselung für Chats & Anrufe standardmäßig
- Telefonnummer-Privatsphäre + Username-Optionen (konfigurierbar)
- Registration Lock (PIN) gegen Re-Registrierung/Account-Übernahme
- Verschwindende Nachrichten & lokale Nachrichten-/Speicherverwaltung
- On-device Backups (Android) mit Passphrase (laut Support)

## Alternativen
- Threema (Abwägung: kostenpflichtig; anderes Identitäts-/Kontomodell möglich)
- Matrix/Element (Abwägung: Föderation/Self-Hosting möglich; Metadaten hängen am Homeserver-Betrieb)
- WhatsApp (Abwägung: andere Datenflüsse/Account-Bindung im Meta-Ökosystem)

## Nicht gelöst / offene Punkte
- Unklar, ob Signal eine **öffentliche Subprozessoren-/DPA-Liste** bereitstellt.
- Unklar, welche **konkreten Aufbewahrungsfristen** für technische Account-Metadaten (z.B. „last connection“) gelten.

## Quellen

- Threema (Trade-off: "kostenpflichtig; anderes Identitäts-/Kontomodell möglich)
- Matrix/Element (Trade-off: "Föderation/Self-Hosting möglich; Metadaten hängen am Homeserver-Betrieb)
- WhatsApp (Trade-off: "andere Datenflüsse/Account-Bindung im Meta-Ökosystem)
- https://github.com/signalapp/Signal-Android
- [Signal – Terms of Service & Privacy Policy](https://signal.org/legal/)
- [Signal – Government Requests (Transkripte/Transparenz)](https://signal.org/bigbrother/)
- [Signal Support – Cost to use Signal](https://support.signal.org/hc/en-us/articles/5286774014362-Cost-to-use-Signal)
- [Signal Support – Signal and the GDPR](https://support.signal.org/hc/en-us/articles/360007059412-Signal-and-the-General-Data-Protection-Regulation-GDPR)
- [Signal Support – Phone Number Privacy and Usernames](https://support.signal.org/hc/en-us/articles/360007318587-Phone-Number-Privacy-and-Usernames)
- [Signal Support – Debug Logs and Crash Reports](https://support.signal.org/hc/en-us/articles/360007318591-Debug-Logs-and-Crash-Reports)
- [Signal Support – Twilio Incident: What Signal Users Need to Know](https://support.signal.org/hc/en-us/articles/4850133017242-Twilio-Incident-What-Signal-Users-Need-to-Know)
- [Signal Support – Backup and Restore Messages](https://support.signal.org/hc/en-us/articles/360007059752-Backup-and-Restore-Messages)
- [GitHub – signalapp/Signal-Android](https://github.com/signalapp/Signal-Android)
