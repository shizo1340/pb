---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / OnlyKey"
url: "/anbieter/onlykey/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-19"
robots: "index,follow"
description: "Kurzprofil von OnlyKey (Kategorie: Security-Key)."
provider: ""
name: "OnlyKey"
category: "Security-Key"
website: "https://onlykey.io"
repo: "https://github.com/trustcrypto/OnlyKey-Firmware"
license: "Unklar (kein zentraler SPDX-Hinweis; je Komponente/Repo separat)"
policies: ""
privacy: "https://onlykey.io/policies/privacy-policy"
terms: "https://onlykey.io/policies/terms-of-service"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "partial"
self_host_possible: "unknown"
account_required: "no"
phone_required: "unknown"
kyc_required: "unknown"
jurisdiction: "USA (Chapel Hill, North Carolina; laut Policies)"
region: "us"
logs: "minimal"
retention: "unknown"
retention_notes: "Unklar (Cookie-Dauern 30min–2 Wochen, teils „indefinite“; weitere Fristen nicht genannt)"
retention_max_days: "14"
data_notes: "Nutzung des Keys ist offline möglich; beim Webshop fallen typische Shop-Daten an (Name/Adresse/E-Mail bei Kauf, IP beim Besuch; Cookies/Stats via Shopify)."
features: ""
alternatives: ""
payment_processors: "Shopify (Shop Pay) + PayPal + Karten/Wallets (Apple Pay/Google Pay) über Checkout"
sources: ""
---
## Kurzprofil

OnlyKey ist ein Anbieter aus der Kategorie **Security-Key**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen Hardware-Key willst, der sensible Daten *lokal* hält (keine OnlyKey-Server für diese Daten laut Doku) und mehrere Auth-Methoden (z.B. FIDO2/U2F, OTP/TOTP) abdecken kann.
- **Weniger geeignet wenn:** du sehr klare, detaillierte Anbieterangaben zu Subprozessoren/DPA oder App-Telemetrie erwartest (öffentlich nicht sauber konsolidiert auffindbar).
- **Wichtigster Abwägung:** Offline/„du hältst die Daten“ vs. Komfortfunktionen (Backup/Recovery, Passwort-Autotype) mit zusätzlicher eigener Operational-Security (Passphrase sicher verwahren, Host-Risiken beachten).

## Sofortmaßnahmen
- **Auto-Lock aktivieren:** OnlyKey App → **Preferences** → **Automatic Lock** (reduziert Zeitfenster, falls du vergisst zu locken).
- **Backup-Passphrase stark wählen:** Für Backups eine lange Passphrase (z.B. 25+ Zeichen) nutzen (reduziert Risiko, falls ein Backup kopiert wird).
- **Updates sauber einspielen:** OnlyKey App → **Firmware** → Upgrade Guide folgen und Downloads per SHA256/GPG-Signatur prüfen (reduziert Supply-Chain-Risiko).

## Entscheidungshilfe
- Wenn du auf fremden/unsicheren Hosts arbeitest, dann nutze bevorzugt **FIDO2/U2F** statt Passwort-Autotype (Abwägung: nicht jeder Dienst unterstützt FIDO überall gleich).
- Wenn du die Passwort-Manager-Funktion nutzt, dann setze **Auto-Lock** und locke konsequent per Button/Timeout (Abwägung: etwas mehr Reibung im Alltag).
- Wenn du Backups brauchst, dann nutze **verschlüsselte Backups** und trenne Backup-Datei und Passphrase strikt (Abwägung: Recovery hängt an deiner Passphrase-Disziplin).
- Wenn du „Coercion/Checkpoints“-Szenarien abdecken willst, dann richte ein **zweites Profil als Plausible Deniability** ein (Abwägung: laut Guide sind dabei Funktionen eingeschränkt, u.a. „keine Encryption“ im PD-Modus).
- Wenn du Firmware aktualisierst, dann mache Updates nur über dokumentierte Wege (App → Firmware) und vermeide „inoffizielle“ Builds (Abwägung: weniger Flexibilität für Experimente).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | OnlyKey |
| Kategorie | Security-Key |
| Website | https://onlykey.io |
| Quellcode | https://github.com/trustcrypto/OnlyKey-Firmware |
| Lizenz | Unklar (kein zentraler SPDX-Hinweis; je Komponente/Repo separat) |
| Preismodell | paid |
| Free Tier | no |
| Open Source | partial |
| Konto erforderlich | no |
| Telefon erforderlich | unknown |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Shopify (Shop Pay) + PayPal + Karten/Wallets (Apple Pay/Google Pay) über Checkout |
| Jurisdiktion | USA (Chapel Hill, North Carolina; laut Policies) |
| Logs | minimal |
| Retention | Unklar (Cookie-Dauern 30min–2 Wochen, teils „indefinite“; weitere Fristen nicht genannt) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://onlykey.io/policies/privacy-policy
- AGB/Terms: https://onlykey.io/policies/terms-of-service
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Nutzung des Keys ist offline möglich; beim Webshop fallen typische Shop-Daten an (Name/Adresse/E-Mail bei Kauf, IP beim Besuch; Cookies/Stats via Shopify).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Beim Kauf: Name, Adresse, E-Mail (laut Privacy Policy). Beim Besuch: IP-Adresse (Browser/OS-Info). Optional Newsletter-E-Mail (Marketing).
- **Wofür:** Kaufabwicklung/Delivery/Returns; ggf. Marketing, wenn zugestimmt.
- **Weitergabe/Subprozessoren:** Der Shop läuft auf **Shopify** (Hosting/E-Commerce-Plattform); weitere Subprozessoren werden nicht als Liste benannt.
- **Drittlandtransfer:** Beispielhinweis: Payment Gateway kann in den USA sitzen (Hinweis in Privacy Policy).
- **Zahlungsabwicklung/Payment Processor:** Shopify als Plattform; Checkout nennt mehrere Zahlungsmethoden (u.a. PayPal, Shop Pay, Karten/Wallets).
- **Kontakt/DSAR/DPA:** Kontakt über Privacy-E-Mail (Privacy Compliance Officer) + Postadresse in der Privacy Policy.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Auf der Website werden Cookies genutzt; die Policy nennt u.a. Shopify-interne Stats-Cookies (z.B. _shopify_visit).
- **Abschaltbar?** Cookie-Banner vorhanden (Accept/Decline); Details hängen vom Browser/Consent ab.
- **Wo (Menüpfad):** Website → Cookie-Banner / Browser-Cookie-Einstellungen.

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** Unklar; Cookie-Dauern sind in der Privacy Policy teilweise konkret (30 Minuten, 2 Wochen, „indefinite“) genannt.
- **Lösch-/Opt-out-Optionen:** Für Marketing/Consent: per Kontakt in der Privacy Policy; Cookies über Consent/Browser steuerbar.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Sensible Daten liegen laut Doku auf dem Gerät; Data-at-rest wird mit AES-256-GCM beschrieben.
- **KDF/Parameter/Schlüsselableitung:** Doku beschreibt Schlüsselableitung aus PIN + Nonces + Geräte-ID-Inputs (Details in Security-Doku).
- **MFA/2FA/Passkeys/Hardware-Keys:** Unterstützt u.a. FIDO2/U2F sowie OTP/TOTP-Varianten (je nach Konfiguration).
- **Recovery/Account-Wiederherstellung:** Verschlüsselte Backups (Passphrase oder PGP-Key) + Restore beschrieben.
- **Vuln-Handling / Security-Kontakt:** Bug-Bounty-Programm/Disclosure-Weg ist in der Security-Doku verlinkt.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Initial-Einrichtung in der OnlyKey App durchführen** (PIN setzen, Slots konfigurieren).  
   **Prüfen:** Gerät akzeptiert PIN, Status „unlocked/locked“ ist nachvollziehbar.
2) **Auto-Lock konfigurieren:** OnlyKey App → **Preferences** → **Automatic Lock**.  
   **Prüfen:** Timeout ist gesetzt und sperrt im Test nach Inaktivität.
3) **Firmware aktuell halten:** OnlyKey App → **Firmware** → Upgrade Guide folgen.  
   **Prüfen:** Update läuft durch, Gerät startet normal; Downloads gegen SHA256/GPG prüfen (wo angeboten).

**Stolpersteine:**
- **Passwort-Autotype ist Host-sichtbar:** Wenn OnlyKey Passwörter „tippt“, sieht der Host die Zeichen (Abwägung: Komfort vs. Risiko auf kompromittierten Systemen).
- **Wipe nach Fehlversuchen:** Nach Fehl-PIN-Versuchen kann das Gerät Daten löschen (Abwägung: Schutz vs. Recovery-Aufwand).
- **TOTP-Zeit/Sync:** TOTP hängt an korrekter Zeit (besonders auf Mobile/On-the-go relevant).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Newsletter/Marketing vermeiden:** Keine Store-Updates per Mail abonnieren, wenn nicht nötig (Abwägung: du verpasst Ankündigungen ohne alternative Infoquelle).
- **Cookies reduzieren:** Website-Cookies über Banner ablehnen und im Browser restriktiv konfigurieren (Abwägung: weniger Komfort/Funktionalität im Shop).
- **Backups streng trennen:** Backup-Datei offline speichern und Passphrase getrennt verwahren (Abwägung: mehr eigener Prozess).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Isolation:** Nutze getrennte Profile/VM; für Qubes-Einrichtungen die OnlyKey-spezifischen Hinweise beachten (Abwägung: deutlich mehr Einrichtung-Aufwand).
- **FIDO statt Autotype:** Wo möglich FIDO2/U2F bevorzugen, um Passwort-Eingaben zu minimieren (Abwägung: nicht alle Workflows passen).
- **Update-Hygiene:** Updates nur in kontrollierter Umgebung (offline/sauberer Host), Checksummen/Signaturen prüfen (Abwägung: weniger spontan).

</details>

## Features
- Offline-Speicher: sensible Daten laut Doku auf dem Gerät, ohne OnlyKey-Server für diese Daten
- PIN-Eingabe am Gerät + Daten-Wipe nach Fehlversuchen
- Signierte Firmware + Integritätschecks
- FIDO2/U2F + OTP/TOTP (je nach Einrichtung)
- Verschlüsselte Backups (Passphrase oder PGP-Key) + Restore
- Auto-Lock/Timeout konfigurierbar (Preferences)
- Plausible-Deniability-Profil (2. Profil) + optional Self-Destruct-PIN
- SSH/GPG-Agent / OpenPGP-Key-Handling über OnlyKey-Ökosystem

## Alternativen
- [YubiKey](/anbieter/yubikey/) – anderer Schwerpunkt je Modell/Ökosystem (Abwägung: Abdeckung/Funktionen vs. Komplexität/Portabilität)
- [Nitrokey](/anbieter/nitrokey/) – anderer Schwerpunkt je Modell/Ökosystem (Abwägung: Funktionsumfang vs. Einrichtung-Aufwand)
- SoloKeys (Security-Key) — anderer Schwerpunkt je Modell/Ökosystem (Abwägung: Ökosystem/Features vs. Integration im Alltag)

## Nicht gelöst / offene Punkte
- Öffentliche Subprozessoren-/DPA-Liste ist nicht klar auffindbar (Shopify als Plattform wird genannt, aber keine konsolidierte Subprozessorenliste).
- Für die OnlyKey Desktop App wurde keine klare, dokumentierte Aussage zu Telemetrie/Diagnosedaten in den Docs gefunden (nur Webshop-Cookies sind beschrieben).

## Quellen

- Offline-Speicher: "sensible Daten liegen auf dem Gerät (keine OnlyKey-Server für diese Daten laut Doku)
- https://github.com/trustcrypto/OnlyKey-App/releases
- [OnlyKey – Privacy policy](https://onlykey.io/policies/privacy-policy)
- [OnlyKey – Terms of service](https://onlykey.io/policies/terms-of-service)
- [OnlyKey Docs – About Security](https://docs.onlykey.io/security.html)
- [OnlyKey Docs – Features](https://docs.onlykey.io/features.html)
- [OnlyKey Docs – OnlyKey App](https://docs.onlykey.io/app.html)
- [OnlyKey Docs – Upgrade Guide](https://docs.onlykey.io/upgradeguide.html)
- [OnlyKey Docs – Plausible Deniability Einrichtung Guide](https://docs.onlykey.io/pdguide.html)
- [OnlyKey Docs – Firmware](https://docs.onlykey.io/firmware.html)
- [GitHub – OnlyKey Firmware (trustcrypto)](https://github.com/trustcrypto/OnlyKey-Firmware)
- [GitHub – OnlyKey App Releases (trustcrypto)](https://github.com/trustcrypto/OnlyKey-App/releases)
- [OnlyKey – Bug Bounty Program](https://onlykey.io/pages/onlykey-bug-bounty-program)
- [OnlyKey – FAQ](https://onlykey.io/pages/faq)
- [OnlyKey Produktseite (Shop)](https://onlykey.io/products/onlykey-color-secure-password-manager-and-2-factor-token-u2f-yubikey-otp-google-auth-make-password-hacking-obsolete)
