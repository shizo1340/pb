---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / KeePassDX"
url: "/anbieter/keepassdx/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-17"
robots: "index,follow"
description: "Kurzprofil von KeePassDX (Kategorie: Passwort-Manager)."
provider: ""
name: "KeePassDX"
category: "Passwort-Manager"
website: "https://www.keepassdx.com/"
repo: "https://github.com/Kunzisoft/KeePassDX"
license: "GPL-3.0-or-later"
policies: ""
privacy: "https://www.kunzisoft.com/privacy.html?app=KeePassDX&creator=Kunzisoft&email=kunzisoft%40gmail.com&id=com.kunzisoft.keepass.free"
terms: "Nicht angegeben"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "yes"
self_host_possible: "no"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Frankreich (Jeremy JAMET / Kunzisoft; Entwicklerangaben in Google Play)"
region: "eu"
logs: "minimal"
logs_notes: "minimal (lokale Debug-Logs möglich)"
retention: "specified"
retention_notes: "Durch Nutzer:in kontrolliert (lokale KeePass-Datei); keine Server-Retention angegeben"
data_notes: "Offline-Datei-basiert (KeePass .kdb/.kdbx); laut Privacy Policy keine Datenerhebung/-weitergabe; Sync/Cloud hängt vom genutzten Dateimanager ab."
features: ""
alternatives: ""
payment_processors: "Nicht angegeben"
sources: ""
---
## Kurzprofil

KeePassDX ist ein Anbieter aus der Kategorie **Passwort-Manager**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen **offline** nutzbaren Passwort-Manager willst, der **KeePass-Dateien** (.kdb/.kdbx) bearbeitet und **kein Konto** benötigt.
- **Weniger geeignet wenn:** du **integrierte Cloud-Synchronisation** mit Konfliktlösung „aus einer Hand“ erwartest (Sync hängt bei KeePassDX vom Dateimanager/Provider ab).
- **Wichtigster Abwägung:** **Offline/Datei-Ansatz** reduziert Server-Datenflüsse, erhöht aber die Eigenverantwortung für **Backups, Sync und Recovery** (z.B. bei verlorenem Master-Passwort).

## Sofortmaßnahmen
- **Master-Passwort + Keyfile kombinieren**, um das Öffnen der Datenbank als Mehrfaktor-Einrichtung zu nutzen (Abwägung: mehr Einrichtung/Backup-Aufwand).
- **Autofill/Credential Provider statt Clipboard** nutzen, um das Risiko durch Zwischenablage/Clipboard-Historien zu senken (Abwägung: nicht jede App unterstützt Autofill gleich gut).
- **Device-Unlock nur mit Timeout/Temp-Cache** nutzen (Settings → Device unlocking → Temp device unlocking + expiration), um das Zeitfenster bei Geräteverlust zu verkleinern (Abwägung: häufiger entsperren).

## Entscheidungshilfe
- Wenn du **ohne Konto** arbeiten willst, dann ist KeePassDX passend (Abwägung: Datei-Backups/Sync musst du selbst organisieren).
- Wenn du die Datenbank **über Cloud-Dateimanager** öffnest, dann hängt Zuverlässigkeit/Metadatenlage stark vom Provider ab (Abwägung: Cache/Revocations/Konflikte sind außerhalb von KeePassDX).
- Wenn du **schnell entsperren** willst, dann aktiviere Device-Unlocking und verknüpfe es mit dem Datenbank-Passwort (Abwägung: hängt an Gerätesicherheit/Keystore und kann bei unsicheren ROMs scheitern).
- Wenn du **Passkeys** nutzen willst, dann aktiviere den Credential Provider und nutze kompatible Browser/Apps (Abwägung: Passkeys-Provider erfordert Android 14+).
- Wenn du **Recovery** absichern willst, dann plane Master-Passwort/Keyfile-Backup (Abwägung: physische/organisatorische Risiken steigen).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | KeePassDX |
| Kategorie | Passwort-Manager |
| Website | https://www.keepassdx.com/ |
| Quellcode | https://github.com/Kunzisoft/KeePassDX |
| Lizenz | GPL-3.0-or-later |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Frankreich (Jeremy JAMET / Kunzisoft; Entwicklerangaben in Google Play) |
| Logs | minimal (lokale Debug-Logs möglich) |
| Retention | Durch Nutzer:in kontrolliert (lokale KeePass-Datei); keine Server-Retention angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.kunzisoft.com/privacy.html?app=KeePassDX&creator=Kunzisoft&email=kunzisoft%40gmail.com&id=com.kunzisoft.keepass.free
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Keine unabhängigen Audits angegeben

**Daten-Notizen (kurz):**
Offline-Datei-basiert (KeePass .kdb/.kdbx). Laut Privacy Policy werden **keine Informationen gesammelt/gespeichert/geteilt**. Sync/Cloud ist möglich, hängt aber vom verwendeten Dateimanager (Storage Access Framework) ab.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Privacy Policy: *keine Informationen werden gesammelt, gespeichert, genutzt oder geteilt* (personenbezogen oder sonstig).
- **Wofür:** App ist für lokale Nutzung gedacht; Daten liegen in einer KeePass-Datei.
- **Weitergabe/Subprozessoren:** Nicht angegeben; laut Privacy Policy keine Datenerhebung/-weitergabe.
- **Drittlandtransfer:** Nicht angegeben (Server-Transfers laut Privacy Policy nicht beschrieben).
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (Pro-Version/Spenden existieren, Zahlungsweg nicht dokumentiert).
- **Kontakt/DSAR/DPA:** Privacy Policy nennt Kontakt per E-Mail (kunzisoft@gmail.com). DSAR/DPA nicht angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy keine Datenerhebung/-weitergabe beschrieben.
- **Abschaltbar?** Nicht angegeben (da keine Telemetrie benannt wird).
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** minimal (lokale Debug-Logs möglich)
- **Aufbewahrung:** Nicht angegeben (bei lokaler Nutzung/Datei-Ansatz primär nutzerseitig)
- **Lösch-/Opt-out-Optionen:** Nicht angegeben

**Abwägung am Punkt:** Weniger Telemetrie reduziert externe Datenflüsse; gleichzeitig kann Debugging/Support schwieriger sein, wenn du Probleme reproduzieren und sauber berichten willst.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** KeePassDX arbeitet mit KeePass-Datenbanken (.kdb/.kdbx v1–v4) und nennt Support für AES/Twofish/ChaCha20 sowie Argon2 (datenbankabhängig).
- **KDF/Parameter/Schlüsselableitung:** Argon2 wird genannt; konkrete Parameter hängen von der Datenbankkonfiguration ab (nicht als globaler App-Parameter dokumentiert).
- **MFA/2FA/Passkeys/Hardware-Keys:** Datenbank-Öffnung kann mehrere Faktoren kombinieren (Master-Passwort, Keyfile, Hardware Key als Konzept im Wiki); Passkeys werden in der App seit v4.2.0 beschrieben (Android 14+ Voraussetzung).
- **Recovery/Account-Wiederherstellung:** Kein Konto/keine Server-Recovery; Wiki weist darauf hin, dass es **keine Hilfe bei verlorenem Passwort** gibt → Backup/Recovery liegt bei dir.
- **Vuln-Handling / Security-Kontakt:** GitHub „Security“ meldet „No security policy detected“ (kein SECURITY.md). Kontaktmöglichkeiten sind u.a. via GitHub Issues sowie E-Mail (Privacy Policy / Google Play).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Datenbank mit Master-Passwort öffnen (immer)** und Master-Passwort nicht „kurz & bequem“ wählen.  
   **Prüfen:** Datenbank öffnet nur mit Master-Passwort; nach App-Neustart erneut erforderlich.
2) **Mehrfaktor für die Datenbank aktivieren (Keyfile)**, wenn du den Zusatzaufwand tragen kannst.  
   **Prüfen:** Öffnen erfordert Passwort **und** Keyfile (fehlendes Keyfile → kein Zugriff).
3) **Device-Unlock sauber konfigurieren** (optional, für Alltag):  
   - `Settings → Device unlocking` → Biometric unlocking aktivieren  
   - optional: `Settings → Device unlocking → Temp device unlocking` + `device unlocking expiration` setzen  
   **Prüfen:** Entsperren klappt nur bei aktivem Screen-Lock/Keystore; Timeout greift im Test.

**Stolpersteine:**
- **Kein „Passwort vergessen“-Fallback:** wenn Master-Passwort/Keyfile weg sind, ist die Datenbank praktisch verloren → Backup/Recovery vorher planen.
- **Sync ist Dateimanager-Sache:** Cloud-/Sync-Probleme (Cache/Konflikte/Revocation) hängen vom genutzten Provider ab.

<details>
<summary>Profil B (Datensparsam)</summary>

- **Datenbank lokal halten** (Gerät/OTG) statt über Cloud-Provider öffnen.  
  **Abwägung:** weniger Komfort beim Gerätewechsel, dafür weniger Drittanbieter-Metadaten.
- **KeePassDX als Dateieditor betrachten:** Dateizugriff läuft über Storage Access Framework/externen Dateimanager; plane den Dateipfad bewusst.  
  **Abwägung:** mehr „Datei-Disziplin“ (Backups/Ordnerstruktur).
- **Zwischenablage vermeiden:** Nutze Autofill/Magikeyboard statt Copy/Paste.  
  **Abwägung:** nicht jede App/Website lässt sich gleich gut befüllen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Keyfile getrennt halten** (z.B. auf OTG/physischem Medium) und nicht gemeinsam mit der Datenbankdatei speichern.  
  **Abwägung:** höheres Risiko, dich selbst auszusperren, wenn das Medium fehlt.
- **Separates Android-Profil/Work-Profile** für KeePassDX nutzen (Isolationsziel).  
  **Abwägung:** mehr Pflegeaufwand bei Apps/Autofill.
- **Device-Unlock nur temporär** (Temp device unlocking + kurzer Expiration-Wert) oder komplett deaktivieren, wenn das Gerät in unsicherer Umgebung genutzt wird.  
  **Abwägung:** deutlich weniger Komfort.

</details>

## Features
- KeePass-Dateien (.kdb/.kdbx v1–v4) bearbeiten
- Unterstützung laut Anbieter: AES/Twofish/ChaCha20 + Argon2 (datenbankabhängig)
- Autofill & Android Credential Provider (Passkeys/Passwörter, systemabhängig)
- Biometrisches/Device-Unlock (optional) + temporärer Key-Cache mit Timeout
- OTP (HOTP/TOTP) in Einträgen

## Alternativen
- KeePass2Android (KeePass-Dateien auf Android; Abwägung: andere Bedienlogik/Integrationen)
- Bitwarden (Account-/Server-Sync; Abwägung: Server-Metadaten & Kontobindung)
- 1Password (Account-/Server-basiert; Abwägung: Konto, Sync-Infrastruktur)

## Nicht gelöst / offene Punkte
- Kein SECURITY.md/Disclosure-Prozess im Repo als formalisierte Policy sichtbar (GitHub „Security“).
- AGB/Terms sind nicht angegeben.

## Quellen

- Verschlüsselungs-/KDF-Support laut Anbieter: "AES/Twofish/ChaCha20 + Argon2 (db-abhängig)
- Bitwarden (Account-/Server-Sync; Trade-off: "Server-Metadaten & Kontobindung)
- 1Password (Account-/Server-basiert; Trade-off: "Konto, Sync-Infrastruktur)
- https://play.google.com/store/apps/details?hl=en&id=com.kunzisoft.keepass.free
- [KeePassDX – Website](https://www.keepassdx.com/)
- [Kunzisoft/KeePassDX – GitHub Quellcode (README/Lizenz/Features)](https://github.com/Kunzisoft/KeePassDX)
- [Kunzisoft – Privacy Policy für KeePassDX](https://www.kunzisoft.com/privacy.html?app=KeePassDX&creator=Kunzisoft&email=kunzisoft%40gmail.com&id=com.kunzisoft.keepass.free)
- [KeePassDX – Google Play (Data Safety, Entwicklerkontakt)](https://play.google.com/store/apps/details?hl=en&id=com.kunzisoft.keepass.free)
- [KeePassDX Wiki – Credentials](https://github.com/Kunzisoft/KeePassDX/wiki/Credentials)
- [KeePassDX Wiki – Device Unlocking](https://github.com/Kunzisoft/KeePassDX/wiki/Device-Unlocking)
- [KeePassDX Wiki – Passkeys](https://github.com/Kunzisoft/KeePassDX/wiki/Passkeys)
- [KeePassDX Wiki – File Manager and Sync](https://github.com/Kunzisoft/KeePassDX/wiki/File-Manager-and-Sync)
- [KeePassDX Wiki – Clipboard](https://github.com/Kunzisoft/KeePassDX/wiki/Clipboard)
- [KeePassDX Wiki – User Verification](https://github.com/Kunzisoft/KeePassDX/wiki/User-Verification)
- [KeePassDX Wiki – Log](https://github.com/Kunzisoft/KeePassDX/wiki/Log)
