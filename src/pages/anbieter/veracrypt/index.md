---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / VeraCrypt"
url: "/anbieter/veracrypt/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-19"
robots: "index,follow"
description: "Kurzprofil von VeraCrypt (Kategorie: Verschlüsselung)."
provider: ""
name: "VeraCrypt"
category: "Verschlüsselung"
website: "https://veracrypt.jp/"
repo: "https://github.com/veracrypt/VeraCrypt"
license: "VeraCrypt License (siehe License.txt / VeraCrypt License Seite)"
policies: ""
privacy: "Nicht angegeben"
terms: "https://veracrypt.io/en/VeraCrypt%20License.html"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Nicht angegeben"
region: "unknown"
logs: "minimal"
retention: "configurable"
retention_notes: "konfigurierbar (lokale History-/Konfigdateien; abschaltbar)"
data_notes: "Lokale Verschlüsselungssoftware ohne Konto/Cloud. Privacy-Risiken entstehen eher durch OS-Spuren (History/Cache, RAM/Hibernation) und durch unsichere Nutzung (z.B. Passwort in CLI/History)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

VeraCrypt ist ein Anbieter aus der Kategorie **Verschlüsselung**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du lokale Laufwerks-/Container-Verschlüsselung ohne Online-Konto brauchst und bereit bist, ein paar Sicherheitsoptionen bewusst zu setzen (Cache/History/Auto-Unmount).
- **Weniger geeignet wenn:** du „nahtlos OS-integriertes“ Full-Disk-Einrichtung ohne extra Tool/Workflows willst (z.B. ohne Mount/Unmount) oder wenn dein Risiko-Modell starke Abhängigkeit von sauberem Host-OS nicht toleriert.
- **Wichtigster Abwägung:** starke lokale Verschlüsselung vs. **Metadaten/Spuren am Host-System** (History/Cache, RAM/Hibernation/Swap, „Recent Files“ etc.).

## Sofortmaßnahmen
- **„Never Save History“ aktivieren** → reduziert lokale Pfad-/Volume-Spuren in der VeraCrypt-History.
- **Passwort-Cache deaktivieren + „Wipe Cache“ nach Nutzung** → reduziert Risiko durch gecachte Passwörter/Keyfile-Ableitungen im RAM.
- **Auto-Unmount vor Energiesparmodus/Hibernation aktivieren** → reduziert Risiko, dass gemountete Volumes/Keys „zu lange“ offen bleiben.

## Entscheidungshilfe
- Wenn du Container-Dateien flexibel zwischen Systemen bewegen willst, dann nutze **File Container** (Abwägung: Mount/Unmount ist Teil des Workflows).
- Wenn du Brute-Force-Resistenz gegen schwächere Passwörter erhöhen willst, dann nutze **Argon2id** oder setze **PIM** bewusst höher (Abwägung: Mount/Boot wird langsamer).
- Wenn du lokale Spuren minimieren willst, dann aktiviere **Never Save History** und deaktiviere **Password Caching** (Abwägung: weniger Komfort, mehr Tipparbeit).
- Wenn du häufig Laptops nutzt, dann aktiviere **Auto-Unmount bei Power-Saving/Hibernation** (Abwägung: Unterbrechung laufender Prozesse/Dateizugriffe).
- Wenn du Keyfiles nutzt, dann vermeide CLI-Parameter wie `/password` oder `/tokenpin` (Abwägung: Automatisierung wird schwieriger).
- Wenn dein Risiko-Modell „physischer Zugriff nach Nutzung“ einschließt, dann plane mit **RAM-/Evil-Maid-/Host-OS-Risiken** (Abwägung: mehr Disziplin/Operational Security nötig).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | VeraCrypt |
| Kategorie | Verschlüsselung |
| Website | https://veracrypt.jp/ |
| Quellcode | https://github.com/veracrypt/VeraCrypt |
| Lizenz | VeraCrypt License (siehe VeraCrypt License / License.txt) |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Spenden: PayPal, Liberapay, Banktransfer (AM Crypto via Wise), Kryptowährungen (BTC/ETH) |
| Jurisdiktion | Nicht angegeben |
| Logs | minimal (lokale History-/Konfigdateien; abschaltbar) |
| Retention | konfigurierbar (History-Liste „letzte 20“; Cache/History deaktivierbar) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: Nicht angegeben
- AGB/Terms: https://veracrypt.io/en/VeraCrypt%20License.html
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Quarkslab Security Assessment (VeraCrypt 1.18, 2016; Bericht via offizieller FAQ verlinkt)

**Daten-Notizen (kurz):**
Lokale Verschlüsselung ohne Konto/Cloud: „Datenflüsse“ betreffen vor allem **lokale Systemspuren** (History.xml, Konfigurationsdateien, Passwort-Cache im RAM) sowie **Host-OS-Risiken** (Hibernation/Swap, „Recent files“, Malware/Keylogger).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Primär lokal: Konfigurations-/Statusdateien (z.B. *History.xml*, Favoriten, Keyfile-Konfiguration). Historie kann deaktiviert werden.
- **Wofür:** Bedienkomfort (z.B. zuletzt gemountete Pfade/Devices), Favoriten/Defaults, Systemverschlüsselungs-Status.
- **Weitergabe/Subprozessoren:** Für die Software selbst nicht angegeben (kein Server-/Konto-Produkt). Für Spenden nennt der Anbieter externe Zahlungswege (PayPal, Liberapay, Banktransfer, Kryptoadressen).
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** PayPal, Liberapay, Banktransfer (AM Crypto via Wise), Bitcoin/Ethereum (nur bei Spende).
- **Kontakt/DSAR/DPA:** Nicht angegeben (kein Dienst mit Account-Daten beschrieben).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar (in der Doku wird keine Telemetrie/Analytics-Funktion als Feature beschrieben).
- **Abschaltbar?** Unklar.
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** minimal (lokale Konfigurations-/History-Dateien; optional/abschaltbar)
- **Aufbewahrung:** History speichert standardmäßig „letzte 20“ Mount-Versuche (wenn nicht deaktiviert).
- **Lösch-/Opt-out-Optionen:** „Never Save History“ (deaktiviert History) + „Wipe Cache“ (löscht Passwort-Cache im Treiber-RAM).

**Abwägung am Punkt:** Weniger lokale Spuren/Cache kann Diagnose/Komfort reduzieren; mehr Komfort erzeugt eher Metadaten am Host-System.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Lokale Datenträger-/Container-Verschlüsselung; Modus für Datenträger ist **XTS**.
- **KDF/Parameter/Schlüsselableitung:** PBKDF2-HMAC mit dokumentierten Default-Iterationen und PIM; zusätzlich **Argon2id** als Alternative für Header-Key-Derivation.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht anwendbar (kein Online-Konto). Optional: Keyfiles können auf Tokens/Smartcards via PKCS#11 liegen (nicht für Pre-Boot Auth).
- **Recovery/Account-Wiederherstellung:** Nicht anwendbar (kein Konto). Relevanter sind Backups (Header/Recovery Disk bei Systemverschlüsselung) und Passwort-/Keyfile-Management.
- **Vuln-Handling / Security-Kontakt:** Kontaktadressen (inkl. PGP-Key-Bezug) sind dokumentiert; formaler Disclosure-Prozess als SECURITY.md im GitHub-Repo ist nicht vorhanden.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **History-Spuren minimieren:** `Settings → Never Save History` aktivieren.  
   **Prüfen:** Volume-Dropdown zeigt keine/kaum Historie; *History.xml* wird nicht mehr gepflegt.
2) **Passwort-/Keyfile-Cache reduzieren:** `Settings → Preferences → Cache passwords in driver memory` deaktivieren und nach Nutzung **Wipe Cache** nutzen.  
   **Prüfen:** Button „Wipe Cache“ ist nach dem Wipen deaktiviert; Mount erfordert erneute Eingabe.
3) **Auto-Unmount vor Hibernation/Energiesparen:** `Settings → Preferences → Unmount all when: Entering power saving mode` aktivieren.  
   **Prüfen:** Beim Hibernation-Test werden Volumes ungemountet.

**Stolpersteine:**
- **RAM/Hibernation/Swap:** Auch mit Auto-Unmount kann das Host-OS Inhalte aus RAM unverschlüsselt in Hibernation/Swap schreiben (Abwägung: Systemkomfort vs. Restdaten-Risiko).
- **CLI-Automation:** Übergabe von Passwörtern/PINs via Kommandozeile kann in Shell-History landen (Abwägung: Automatisierung vs. Geheimnis-Leak).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Portable Mode** nutzen, wenn du Installationsartefakte reduzieren willst (Abwägung: Admin-Rechte/Driver-Verhalten je nach Plattform).
- **Password Caching konsequent aus** + nach jedem Mount/Unmount **Wipe Cache**.
- **PIM bewusst setzen** (höher = langsamer, aber erschwert Guessing) und dokumentiere deinen PIM sicher offline.  
**Abwägung:** mehr Tipparbeit, höhere Fehleranfälligkeit, längere Mount/Boot-Zeiten.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Host-OS strikt behandeln:** getrennte Nutzerprofile/VMs, saubere Update-Disziplin, minimale zusätzliche Software (Abwägung: Aufwand/Komplexität).
- **Keyfiles + Token/Smartcard** als zusätzlicher Faktor (wo passend) und **keine** Geheimnisse in CLI-Parametern.  
- **Power-/Sleep-Policy hart:** Hibernation deaktivieren oder strikt mit Auto-Unmount kombinieren; physische Zugriffsszenarien einplanen.  
**Abwägung:** deutlicher Komfortverlust, mehr Prozessdisziplin.

</details>

## Features
- Container-Dateien (virtuelle Volumes), Partitionen/Drives, Systemverschlüsselung (Pre-Boot Authentication je nach OS)
- Hidden Volumes / Hidden OS (Plausible Deniability, je nach Einrichtung)
- XTS-Modus für Datenträgerverschlüsselung
- PBKDF2-HMAC mit PIM, zusätzlich Argon2id für Header-Key-Derivation
- Keyfiles (auch über PKCS#11 Tokens/Smartcards als Keyfile-Speicher)
- Passwort-Cache & History-Steuerung (Wipe Cache / Never Save History)
- Portable Mode
- Kommandozeilen-Interface

## Alternativen
- LUKS/dm-crypt (Linux): OS-/Kernel-Integration (Abwägung: weniger cross-platform, Einrichtung OS-spezifisch).
- BitLocker (Windows): OS-integriert (Abwägung: Closed Source/Recovery-/TPM-Ökosystem).
- FileVault (macOS): OS-integriert (Abwägung: Recovery-/Account-Flows je nach Konfiguration).
- [Cryptomator](/anbieter/cryptomator/) – Datei-/Cloud-orientiert (Abwägung: anderer Fokus als Full-Disk/Systemverschlüsselung).

## Nicht gelöst / offene Punkte
- Für die Projekt-Websites ist keine dedizierte Privacy Policy auffindbar (Stand: 2026-01-19).

## Quellen

- LUKS/dm-crypt (Linux, OS-integriert; Trade-off: "weniger cross-platform, Setup je Distribution)
- BitLocker (Windows, OS-integriert; Trade-off: "Closed Source/TPM-/Recovery-Ökosystem)
- FileVault (macOS, OS-integriert; Trade-off: "Recovery-/Account-Integration je nach Setup)
- Cryptomator (Datei-/Cloud-fokussiert; Trade-off: "anderer Use-Case als Full-Disk)
- https://blog.quarkslab.com/resources/2016-10-17-audit-veracrypt/16-08-215-REP-VeraCrypt-sec-assessment.pdf
- [VeraCrypt Website (JP)](https://veracrypt.jp/)
- [Documentation (Index)](https://veracrypt.io/en/Documentation.html)
- [Frequently Asked Questions](https://veracrypt.io/en/FAQ.html)
- [VeraCrypt Source Code (Repos)](https://veracrypt.io/en/Code.html)
- [GitHub Quellcode: veracrypt/VeraCrypt](https://github.com/veracrypt/VeraCrypt)
- [VeraCrypt License](https://veracrypt.io/en/VeraCrypt%20License.html)
- [Legal Information](https://veracrypt.io/en/Legal%20Information.html)
- [Modes of Operation (XTS)](https://veracrypt.io/en/Modes%20of%20Operation.html)
- [Header Key Derivation (PBKDF2, Iterationen, PIM)](https://veracrypt.io/en/Header%20Key%20Derivation.html)
- [Argon2id](https://veracrypt.io/en/Argon2id.html)
- [Main Program Window (Wipe Cache, Never Save History)](https://veracrypt.io/en/Main%20Program%20Window.html)
- [VeraCrypt System Files & Application Data](https://veracrypt.io/en/VeraCrypt%20System%20Files.html)
- [Hibernation File (Auto-Unmount vor Energiesparen)](https://veracrypt.io/en/Hibernation%20File.html)
- [Command Line Usage (Warnungen zu Passwort/PIN in CLI)](https://veracrypt.io/en/Command%20Line%20Usage.html)
- [Security Tokens & Smart Cards (PKCS#11)](https://veracrypt.io/en/Security%20Tokens%20%26%20Smart%20Cards.html)
- [Contact us](https://veracrypt.io/en/Contact.html)
- [Donation to VeraCrypt](https://veracrypt.io/en/Donation.html)
- [Donation (Bank Transfer)](https://veracrypt.io/en/Donation_Bank.html)
- [Quarkslab Blogpost: Security Assessment of VeraCrypt (2016)](https://blog.quarkslab.com/security-assessment-of-veracrypt-fixes-and-evolutions-from-truecrypt.html)
- [Quarkslab VeraCrypt 1.18 Security Assessment – Technical Report (PDF)](https://blog.quarkslab.com/resources/2016-10-17-audit-veracrypt/16-08-215-REP-VeraCrypt-sec-assessment.pdf)
