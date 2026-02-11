---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Cryptomator"
url: "/anbieter/cryptomator/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-10"
robots: "index,follow"
description: "Kurzprofil von Cryptomator (Kategorie: Verschlüsselung)."
provider: ""
name: "Cryptomator"
category: "Verschlüsselung"
website: "https://cryptomator.org/"
repo: "https://github.com/cryptomator/cryptomator"
license: "GPL-3.0 / AGPL-3.0 (je nach Projekt, siehe Repos)"
policies: ""
privacy: "https://cryptomator.org/privacy/"
terms: "https://cryptomator.org/terms/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "yes"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Deutschland (laut Privacy Policy/Impressum des Anbieters)"
region: "eu"
logs: "minimal"
retention: "specified"
retention_notes: "7d (Webserver-Logs), bis 30d (Update-/Diagnose-Logs), laut Privacy Policy"
data_notes: "Client-seitige Verschlüsselung von „Tresoren“ (Vaults) für lokale Ordner/Cloud-Sync. Keine Konto-Pflicht für die App; optionale Komfortfunktionen (z.B. Passwort im System-Keychain speichern) erhöhen die Angriffsfläche bei Gerätekompromittierung."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Cryptomator ist ein Anbieter aus der Kategorie **Verschlüsselung**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Dateien vor dem Upload lokal/Client-seitig verschlüsseln willst und dabei keine Konto-Pflicht für die App möchtest.
- **Weniger geeignet wenn:** du „Passwort vergessen“-Recovery ohne Recovery Key erwartest (Abwägung: Recovery vs. tatsächliche Zugriffskontrolle).
- **Wichtigster Abwägung:** Komfortfunktionen wie Passwort-/Key-Speicherung im OS-Keychain können Bedienung erleichtern, erhöhen aber das Risiko bei Gerätekompromittierung.

## Sofortmaßnahmen
- **Recovery Key pro Tresor anzeigen und offline sichern** (Wirkung: verhindert Datenverlust bei vergessenem Passwort).  
- **Passwortspeicherung im System-Keychain nur bewusst aktivieren** (Wirkung: weniger Eingaben, aber größerer Impact bei kompromittiertem Gerät).  
- **Auto-Lock/Unlock-Dauer kurz halten** (Wirkung: reduziert das Zeitfenster, in dem entsperrte Tresore auslesbar sind).

## Entscheidungshilfe
- Wenn du **Cloud-Sync nutzen** willst, dann arbeite mit einem **Cryptomator-Tresor im Sync-Ordner** (Abwägung: Cloud-Anbieter sieht weiterhin Sync-Metadaten wie Zeitpunkte/Dateigrößen, aber nicht Klartextinhalte).
- Wenn du **Risiko durch Gerätediebstahl/Malware** minimieren willst, dann **deaktiviere Passwortspeicherung** im System-Keychain und setze **kurze Auto-Lock-Zeiten** (Abwägung: häufiger Passwort/Unlock nötig).
- Wenn du **Bedienbarkeit** priorisierst, dann nutze **Keychain/biometrische Optionen**, wo verfügbar (Abwägung: Schlüsselmaterial liegt länger/komfortabler im Systemspeicher).
- Wenn du **Passwort-Reset ohne Support** brauchst, dann nutze den **Recovery Key** als zweiten Faktor zur Wiederherstellung (Abwägung: Recovery Key muss wie ein Passwort geschützt werden).
- Wenn du **lange Dateinamen / tief verschachtelte Pfade** hast, dann plane Migration/Umbenennung ein (Abwägung: mehr manueller Aufwand bei Kompatibilitätsgrenzen).  

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Cryptomator |
| Kategorie | Verschlüsselung |
| Website | https://cryptomator.org/ |
| Quellcode | https://github.com/cryptomator/cryptomator |
| Lizenz | GPL-3.0 / AGPL-3.0 (je nach Projekt, siehe Repos) |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Paddle (Webshop), Apple App Store, Google Play (laut Pricing/Terms) |
| Jurisdiktion | Deutschland (laut Privacy Policy/Impressum des Anbieters) |
| Logs | minimal |
| Retention | 7d (Webserver-Logs), bis 30d (Update-/Diagnose-Logs), laut Privacy Policy |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://cryptomator.org/privacy/
- AGB/Terms: https://cryptomator.org/terms/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Client-seitige Verschlüsselung von „Tresoren“ (Vaults) für lokale Ordner/Cloud-Sync. Keine Konto-Pflicht für die App; optionale Komfortfunktionen (z.B. Passwort im System-Keychain speichern) erhöhen die Angriffsfläche bei Gerätekompromittierung.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Privacy Policy u.a. Website-/Support-/Kaufabwicklung-Daten (kontextabhängig) sowie technische Daten bei Update-/Diagnose-Funktionen (z.B. Verbindungs-/Geräteparameter).  
- **Wofür:** Betrieb der Website/Downloads, Kaufabwicklung/Verträge, Support/Diagnose, sowie Update-Prüfung (je nach Nutzung).  
- **Weitergabe/Subprozessoren:** Nicht als öffentliche Subprozessoren-Liste angegeben (Privacy Policy beschreibt Verarbeitung, aber keine zentrale „Subprocessor List“).  
- **Drittlandtransfer:** Nicht klar als separater Abschnitt „Transfers“ zusammengefasst (ggf. aus Privacy Policy ableitbar, hier nicht als Liste dokumentiert).  
- **Zahlungsabwicklung/Payment Processor:** Kaufabwicklung je nach Kanal (Webshop/App Stores); Details über Pricing/Terms.  
- **Kontakt/DSAR/DPA:** Kontaktwege in der Privacy Policy (z.B. Datenschutz-Kontakt) dokumentiert.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nicht eindeutig als „Telemetry“ benannt; laut Privacy Policy existieren Website-Analytics/Server-Logs und technische Daten im Kontext von Updates/Diagnose.  
- **Abschaltbar?** Unklar je nach Teilbereich (Website vs. App).  
- **Wo (Menüpfad):** App-spezifisch; Update-/Diagnose-Optionen sind in den Apps/Prefs zu prüfen.

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** 7d (Webserver-Logs), bis 30d (Update-/Diagnose-Logs), laut Privacy Policy
- **Lösch-/Opt-out-Optionen:** Nicht einheitlich dokumentiert; abhängig von Kontext (z.B. App-Funktion vs. Website).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Tresor-Format ist dokumentiert; u.a. werden Directory IDs und Dateinamen mit **AES-SIV** verarbeitet/verschlüsselt (Details im Vault-Cryptography-Doc).  
- **KDF/Parameter/Schlüsselableitung:** Tresor-Schlüssel werden aus dem Passwort abgeleitet; die Sicherheit hängt maßgeblich von der Passwortstärke ab (siehe Desktop-Doku zu Password/Recovery Key).  
- **MFA/2FA/Passkeys/Hardware-Keys:** Kein klassisches Konto-Login → kein 2FA im Account-Sinne; auf iOS/OS-Keychain sind biometrische Komfortfunktionen möglich (Abwägung: Schlüssel im Keychain).  
- **Recovery/Account-Wiederherstellung:** Recovery Key kann ein Passwort zurücksetzen, ist „human readable form of your decrypted masterkey“ und muss wie ein Passwort geschützt werden; ohne Passwort/Recovery Key kein Reset durch den Anbieter.  
- **Vuln-Handling / Security-Kontakt:** Offizieller Meldeweg über GitHub Security Policy dokumentiert.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Starkes Tresor-Passwort setzen + Recovery Key sichern**  
   **Menüpfad (Desktop):** Tresor auswählen → `Vault Options` → Tab `Password` → `Display Recovery Key` (bzw. Passwort ändern/reset)  
   **Prüfen:** Recovery Key lässt sich anzeigen; offline gespeichert (Papier/zweiter Tresor).  
2) **Keychain/„Passwort merken“ bewusst entscheiden**  
   **Menüpfad (Desktop):** Preferences → `General` → `Store passwords with …` (optional)  
   **Prüfen:** Option ist nur aktiv, wenn du sie explizit einschaltest; „Remember password“ nur für vertrauenswürdige Geräte nutzen.  
3) **Auto-Lock aktiv konfigurieren (Mobile)**  
   **Menüpfad (Android):** Settings → `Automatic Locking` → z.B. 2–10 Minuten statt „Never“  
   **Prüfen:** App sperrt nach Inaktivität; Bildschirm-Sperre-Option passt zu deinem Nutzungsszenario.

**Stolpersteine:**
- Komfortfunktionen (Keychain/biometrisch, „Unlock Duration“) bedeuten, dass Schlüsselmaterial länger auf dem Gerät verfügbar ist (Abwägung: weniger Reibung vs. höherer Impact bei kompromittiertem Gerät).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze Cryptomator primär **lokal/offline** und synchronisiere nur bei Bedarf (Abwägung: weniger Metadaten über Sync-Zeitpunkte, aber mehr manueller Ablauf).
- **Keine Passwortspeicherung** im OS-Keychain, wenn du Gerätekompromittierung ernsthaft einplanst (Abwägung: häufiger Passwort-Eingabe).
- Halte den Recovery Key **getrennt vom Gerät** (z.B. Papier/Offline-Safe) (Abwägung: mehr Aufwand in der Verwaltung).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze ein **dediziertes Geräteprofil / separates Benutzerkonto** nur für Tresor-Arbeit (Abwägung: mehr Komplexität).
- Vermeide „Unlock Duration“/dauerhaft entsperrt auf iOS, wenn du mit Zugriff bei Beschlagnahme/Device-Forensik rechnest (Abwägung: weniger Komfort).
- Arbeite mit **temporären Klartext-Arbeitsordnern** nur, wenn nötig, und lösche sie direkt nach dem Transfer (Abwägung: mehr Disziplin im Workflow).

</details>

## Features
- Client-seitige Tresor-Verschlüsselung (Vaults) für lokale Speicher/Cloud-Sync
- Dokumentiertes Tresor-Format inkl. Namensverschlüsselung (AES-SIV für Namen/IDs)
- Recovery Key (Wiederherstellungsschlüssel) pro Tresor
- Optional: Passwortspeicherung im System-Keychain (Desktop) / Keychain-Features (iOS)
- Automatisches Sperren (Auto-Lock) auf Mobile-Plattformen konfigurierbar

## Alternativen
- VeraCrypt (Container/Volumes; Abwägung: weniger „Cloud-Workflow“, mehr manuelles Handling)
- gocryptfs (FUSE-Dateisystem; Abwägung: eher CLI/Technik-Einrichtung, stark plattformabhängig)
- rclone crypt (Sync/Backup-Verschlüsselung; Abwägung: CLI-orientiert, weniger GUI-Workflow)
- age + restic/borg (Backup-Fokus; Abwägung: nicht „live“ als Dateiexplorer nutzbar)

## Nicht gelöst / offene Punkte
- Unklar, ob es eine **öffentliche Subprozessoren-/DPA-Liste** als eigene Seite gibt (relevant v.a. für Website/Kaufabwicklung/Cloud-nahe Dienste).

## Quellen

- Optional: "Passwortspeicherung im System-Keychain (Desktop) / Keychain-Features (iOS)
- VeraCrypt (Container/Volumes; Trade-off: "weniger „Cloud-Workflow“, mehr manuelles Handling)
- gocryptfs (FUSE-Dateisystem; Trade-off: "eher CLI/Technik-Setup, stark plattformabhängig)
- rclone crypt (Sync/Backup-Verschlüsselung; Trade-off: "CLI-orientiert, weniger GUI-Workflow)
- age + restic/borg (Backup-Fokus; Trade-off: "nicht „live“ als Dateiexplorer nutzbar)
- [Cryptomator Website](https://cryptomator.org/)
- [Pricing](https://cryptomator.org/pricing/)
- [Privacy Policy](https://cryptomator.org/privacy/)
- [Terms and Conditions](https://cryptomator.org/terms/)
- [GitHub Repository (Cryptomator)](https://github.com/cryptomator/cryptomator)
- [Security Policy (GitHub)](https://github.com/cryptomator/cryptomator/security/policy)
- [Vault Cryptography (Docs)](https://docs.cryptomator.org/security/vault/)
- [Password and Recovery Key (Desktop Docs)](https://docs.cryptomator.org/desktop/password-and-recovery-key/)
- [Settings (Android Docs)](https://docs.cryptomator.org/android/settings/)
- [Vault Management (iOS Docs)](https://docs.cryptomator.org/ios/vault-management/)
- [Cryptomator Website](https://cryptomator.org/)
- [Pricing](https://cryptomator.org/pricing/)
- [Privacy Policy](https://cryptomator.org/privacy/)
- [Terms and Conditions](https://cryptomator.org/terms/)
- [GitHub Quellcode (Cryptomator)](https://github.com/cryptomator/cryptomator)
- [Security Policy (GitHub)](https://github.com/cryptomator/cryptomator/security/policy)
- [Vault Cryptography (Docs)](https://docs.cryptomator.org/security/vault/)
- [Password and Recovery Key (Desktop Docs)](https://docs.cryptomator.org/desktop/password-and-recovery-key/)
- [Settings (Android Docs)](https://docs.cryptomator.org/android/settings/)
- [Vault Management (iOS Docs)](https://docs.cryptomator.org/ios/vault-management/)
