---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Matrix (Protokoll)"
url: "/anbieter/matrix/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-18"
robots: "index,follow"
description: "Kurzprofil von Matrix (Protokoll) (Kategorie: Messenger)."
provider: ""
name: "Matrix (Protokoll)"
category: "Messenger"
website: "https://matrix.org/"
repo: "https://github.com/matrix-org/matrix-spec"
license: "Apache-2.0"
policies: ""
privacy: "https://matrix.org/legal/privacy-notice/"
terms: "https://matrix.org/legal/terms-and-conditions/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Vereinigtes Königreich (Matrix.org Foundation C.I.C.)"
region: "uk"
logs: "configurable"
retention: "configurable"
retention_notes: "konfigurierbar (matrix.org: IP-Logs bis max. 180 Tage laut Privacy Notice)"
retention_max_days: "180"
data_notes: "Matrix ist ein föderiertes Protokoll: Datenflüsse, Logs, Aufbewahrung und Jurisdiktion hängen stark vom gewählten Homeserver/Client und von Federation/Bridges ab."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Matrix (Protokoll) ist ein Anbieter aus der Kategorie **Messenger**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du ein **föderiertes** System willst (eigener Homeserver möglich) und bereit bist, dir **Server/Client/Room-Settings** bewusst auszuwählen (Abwägung: mehr Eigenaufwand).
- **Weniger geeignet wenn:** du **kontrollierte Datenflüsse ohne Federation/Bridges** brauchst (Abwägung: Matrix repliziert Daten über teilnehmende Homeserver/verbundene Dienste).
- **Wichtigster Abwägung:** **Föderation & Interoperabilität vs. Metadaten-/Verbreitungsrisiko** (Nachrichten können über mehrere Server/Dienste verteilt werden; Löschung/Erasure ist über Fremdserver nicht garantiert).

## Sofortmaßnahmen
- **E2EE aktiv nutzen:** nur in **verschlüsselten DMs/Einladungsräumen** schreiben, wenn Inhaltsvertraulichkeit nötig ist (Abwägung: Features/Komfort je nach Client).
- **Bridges meiden:** keine bridged Räume nutzen, wenn Inhalte nicht bei Drittplattformen landen sollen (Abwägung: weniger Interop).
- **Identitätsbindung klein halten:** keine Telefonnummer/E-Mail für Lookups/Identity-Services verknüpfen, wenn du Zuordnung vermeiden willst (Abwägung: weniger Komfort beim Auffinden von Kontakten).

## Entscheidungshilfe
- Wenn du **Kontrolle über Speicherort/Jurisdiktion** brauchst, dann nutze einen **eigenen Homeserver** oder einen Betreiber mit klarer Policy (Abwägung: Einrichtung/Administration).
- Wenn du **Inhaltsvertraulichkeit** brauchst, dann nutze **E2EE-Räume** (Abwägung: manche Funktionen/Backups sind anders).
- Wenn du **minimale Weiterverbreitung** willst, dann vermeide **offene Räume** und Räume mit **Federation/Bridges** (Abwägung: Reichweite/Interop).
- Wenn du **Account-Recovery** brauchst, dann nutze **Secure Message Recovery/Key-Backup** (Abwägung: verschlüsselte Schlüssel landen auf dem Homeserver; Risiko bei schwacher Recovery-Passphrase).
- Wenn du **Datenlöschung** erwartest, dann plane damit, dass Federation/Bridges Löschung **nicht erzwingen** können (Abwägung: Dezentralität).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Matrix (Protokoll) |
| Kategorie | Messenger |
| Website | https://matrix.org/ (Info) / https://spec.matrix.org (Spezifikation) |
| Quellcode | https://github.com/matrix-org/matrix-spec |
| Lizenz | Apache-2.0 |
| Preismodell | free (Protokoll; Betrieb/Hosting je nach Homeserver) |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | yes (für Nutzung eines Homeservers) |
| Telefon erforderlich | no (optional, homeserverabhängig) |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben (Protokoll; ggf. abhängig vom Homeserver/Anbieter) |
| Jurisdiktion | Vereinigtes Königreich (Matrix.org Foundation C.I.C.) |
| Logs | configurable (homeserverabhängig) |
| Retention | konfigurierbar (matrix.org: IP-Logs bis max. 180 Tage laut Privacy Notice) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://matrix.org/legal/privacy-notice/
- AGB/Terms: https://matrix.org/legal/terms-and-conditions/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Least Authority – Audit von vodozemac (Matrix E2EE Referenz-Implementierung), PDF (2022-03-30): https://matrix.org/media/Least%20Authority%20-%20Matrix%20vodozemac%20Final%20Audit%20Report.pdf

**Daten-Notizen (kurz):**
Matrix ist ein föderiertes Protokoll: Datenflüsse, Logs, Aufbewahrung und Jurisdiktion hängen stark vom gewählten Homeserver/Client und von Federation/Bridges ab.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Beim **matrix.org Homeserver** u.a. Benutzername, Passwort-Hash, optional Displayname/E-Mail/Telefon; Inhalte (Nachrichten/Dateien) werden gespeichert/verteilt; IP-Adressen werden geloggt (Abuse/Debug).  
- **Wofür:** Betrieb des Dienstes (Kommunikation), Sicherheit/Abuse-Abwehr, Fehleranalyse, Weiterentwicklung; bei Federation/Bridges technische Zustellung.  
- **Weitergabe/Subprozessoren:** Für **matrix.org** wird **Element** als Processor genannt; zusätzlich werden bei bestimmten Funktionen Drittanbieter (z.B. Shop/Spenden) genannt.  
- **Drittlandtransfer:** Federation kann Daten an Homeserver weltweit replizieren; Transfers außerhalb EU werden als inhärent möglich beschrieben.  
- **Zahlungsabwicklung/Payment Processor:** Protokoll: nicht anwendbar; matrix.org nennt u.a. Big Cartel (Shop) und Donorbox (Spenden) im Privacy Notice.  
- **Kontakt/DSAR/DPA:** matrix.org nennt Kontaktwege (u.a. legal@matrix.org) und beschreibt DSGVO-Rechte/Erasure-Einschränkungen.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Protokoll: abhängig von Client/Homeserver. Für **matrix.org**: Website-Analytics (Plausible) und Account-Analytics (PostHog) werden genannt.
- **Abschaltbar?** Nicht angegeben (für matrix.org Account-Analytics wird kein Opt-out-Schalter beschrieben).
- **Wo (Menüpfad):** Nicht angegeben (server-/clientabhängig; in Policies/Docs prüfen).

**Logs & Retention:**
- **Logging-Level:** configurable (homeserverabhängig)
- **Aufbewahrung:** konfigurierbar (matrix.org: IP-Logs bis max. 180 Tage laut Privacy Notice)
- **Lösch-/Opt-out-Optionen:** Account-Deaktivierung mit „forget messages“ wird für matrix.org beschrieben; Federation/Bridges können Löschung nicht garantieren.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Matrix unterstützt E2EE; laut Matrix-Doku basiert E2EE auf **Olm/Megolm**.
- **KDF/Parameter/Schlüsselableitung:** Für **matrix.org**: Passwörter werden nicht im Klartext gespeichert; Passwort-Hashes mit mindestens 4096 bcrypt-Runden inkl. Salt und serverseitigem Pepper werden genannt.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben (protokoll-/homeserverabhängig).
- **Recovery/Account-Wiederherstellung:** Secure Message Recovery wird als Konzept beschrieben (verschlüsselte Key-Backups am Homeserver, geschützt durch Passphrase/Key).
- **Vuln-Handling / Security-Kontakt:** Security Disclosure Policy mit Kontakt **security@matrix.org** und PGP-Key wird genannt.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Konto absichern** (starkes Passwort; E-Mail/Telefon nur wenn nötig; 2FA nur falls Homeserver das anbietet).  
   **Prüfen:** Login funktioniert; optionale Identitätsdaten sind nicht gesetzt, wenn nicht gebraucht.
2) **E2EE bewusst nutzen** (für sensible Inhalte nur in verschlüsselten DMs/privaten Räumen schreiben).  
   **Prüfen:** Client zeigt „verschlüsselt“/Lock-Icon oder entsprechende Raum-Info.
3) **Geräte-Verifikation nutzen (Cross-signing)** und Recovery nur bewusst aktivieren.  
   **Prüfen:** neues Gerät ist als „verifiziert/vertrauenswürdig“ markiert; Recovery-Key/Passphrase ist sicher gespeichert.

**Stolpersteine:**
- **Federation/Bridges** verteilen Inhalte auf andere Server/Dienste (Abwägung: Interoperabilität vs. Kontrolle).
- **Secure Message Recovery** erhöht Komfort, bedeutet aber: verschlüsselte Schlüssel werden beim Homeserver gespeichert (Abwägung: Recovery vs. zusätzliche Angriffs-/Metadatenfläche).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze einen Homeserver mit klarer Policy oder self-hostbar (weniger externe Abhängigkeiten).
- Vermeide Identity-Server-Features (kein E-Mail/Telefon-Lookup), wenn Zuordnung minimiert werden soll.
- Räume möglichst „geschlossen“ halten (Einladungsräume statt öffentliche Verzeichnisse).
**Abwägung:** weniger Komfort beim Finden von Kontakten/Discovery, mehr Orga-Aufwand.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Eigener Homeserver + eigene Föderations-Policy (z.B. Federation einschränken, wenn Einsatzkonzept das erlaubt).
- Keine Bridges, keine Bots/Widgets in sensitiven Räumen (Bots/Widgets können Raum-Inhalte sehen, wenn sie teilnehmen).
- Geräte strikt trennen (separate Geräte/OS-Profile) und Verifikation konsequent nutzen.
**Abwägung:** deutlicher Komfortverlust; mehr Betriebs- und Sicherheitsaufwand.

</details>

## Features
- Offenes, föderiertes Messenger-Protokoll (Server-zu-Server Federation).
- End-to-End-Verschlüsselung (E2EE) basiert auf Olm/Megolm (optional; in vielen Clients für private Unterhaltungen standardmäßig aktiv).
- Geräte-Verifikation (Cross-signing) und optionales Key-Backup/Recovery (Secure Message Recovery).
- Raum-/Zugriffsregeln, Redactions/Erasure-Mechanismen (Wirksamkeit über Federation abhängig).

## Alternativen
- XMPP (föderiert; Abwägung: Funktionsumfang/Clients/OMEMO je nach Ökosystem).
- Signal (zentraler Dienst; Abwägung: weniger Föderations-Metadatenpfade, aber Abhängigkeit von einem Betreiber).
- SimpleX Chat (anderes Metadaten-Modell; Abwägung: anderes UX/Ökosystem, ggf. weniger Integration).
- Session (anderes Netzwerkmodell; Abwägung: andere Sicherheits-/Abuse-Eigenschaften, anderes UX).

## Nicht gelöst / offene Punkte
- Föderation/Bridges: Löschung/Erasure über Fremdserver nicht erzwingbar (inhärenter Abwägung).
- Subprozessoren-/DPA-Übersicht für matrix.org: öffentlich nicht eindeutig auffindbar.

## Quellen

- Least Authority – Audit von vodozemac (Matrix E2EE Referenz-Implementierung), PDF (2022-03-30): "https://matrix.org/media/Least%20Authority%20-%20Matrix%20vodozemac%20Final%20Audit%20Report.pdf
- XMPP (föderiert; Trade-off: "Funktionsumfang/Clients/OMEMO je nach Ökosystem).
- Signal (zentraler Dienst; Trade-off: "weniger Föderations-Metadatenpfade, aber Abhängigkeit von einem Betreiber).
- SimpleX Chat (anderes Metadaten-Modell; Trade-off: "anderes UX/Ökosystem, ggf. weniger Integration).
- Session (anderes Netzwerkmodell; Trade-off: "andere Sicherheits-/Abuse-Eigenschaften, anderes UX).
- [Matrix.org Legal – Übersicht](https://matrix.org/legal/)
- [Matrix.org Foundation Privacy Notice (matrix.org Homeserver)](https://matrix.org/legal/privacy-notice/)
- [Matrix.org Homeserver Terms & Conditions](https://matrix.org/legal/terms-and-conditions/)
- [Security Disclosure Policy (security@matrix.org)](https://matrix.org/security-disclosure-policy/)
- [Matrix Spec (Repository)](https://github.com/matrix-org/matrix-spec)
- [Matrix Docs – End-to-End Encryption (Olm/Megolm)](https://matrix.org/docs/matrix-concepts/end-to-end-encryption/)
- [Blog – E2EE by default (private conversations)](https://matrix.org/2020/05/06/cross-signing-and-end-to-end-encryption-by-default-is-here/)
- [Blog – Secure Message Recovery & Cross-signing (Konzept/Trade-offs)](https://matrix.org/2018/11/02/user-experience-preview-end-to-end-encryption-by-default/)
- [Blog – Vodozemac Audit-Ankündigung](https://matrix.org/2022/05/16/independent-public-audit-of-vodozemac-a-native-rust-reference-implementation-of-matrix-end-to-end-encryption/)
- [Matrix.org Legal – Übersicht](https://matrix.org/legal/)
- [Matrix.org Foundation Privacy Notice (matrix.org Homeserver)](https://matrix.org/legal/privacy-notice/)
- [Matrix.org Homeserver Terms & Conditions](https://matrix.org/legal/terms-and-conditions/)
- [Security Disclosure Policy (security@matrix.org)](https://matrix.org/security-disclosure-policy/)
- [Matrix Spec (Quellcode)](https://github.com/matrix-org/matrix-spec)
- [Matrix Docs – End-to-End Encryption (Olm/Megolm)](https://matrix.org/docs/matrix-concepts/end-to-end-encryption/)
- [Blog – E2EE by default (private conversations)](https://matrix.org/2020/05/06/cross-signing-and-end-to-end-encryption-by-default-is-here/)
- [Blog – Secure Message Recovery & Cross-signing (Konzept/Abwägungen)](https://matrix.org/2018/11/02/user-experience-preview-end-to-end-encryption-by-default/)
- [Blog – Vodozemac Audit-Ankündigung](https://matrix.org/2022/05/16/independent-public-audit-of-vodozemac-a-native-rust-reference-implementation-of-matrix-end-to-end-encryption/)
- [Least Authority – Matrix vodozemac Final Audit Report (PDF)](https://matrix.org/media/Least%20Authority%20-%20Matrix%20vodozemac%20Final%20Audit%20Report.pdf)
