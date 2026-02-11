---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / FreeOTP"
url: "/anbieter/freeotp/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-13"
robots: "index,follow"
description: "Kurzprofil von FreeOTP (Kategorie: 2FA)."
provider: ""
name: "FreeOTP"
category: "2FA"
website: "https://freeotp.github.io/"
repo: "https://github.com/freeotp/freeotp-android"
license: "Apache-2.0"
policies: ""
privacy: "https://freeotp.github.io/privacy.html"
terms: "Nicht angegeben"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "no"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Nicht angegeben (FreeOTP ist laut Website von Red Hat gesponsert und offiziell veröffentlicht)"
region: "unknown"
logs: "none"
retention: "unknown"
retention_notes: "Nicht angegeben (laut Privacy Policy keine Datenerhebung)"
data_notes: "FreeOTP ist eine lokale OTP-App (HOTP/TOTP). Laut Privacy Policy sammelt sie keine Daten; Internet wird nur zum Laden von Token-Icons genutzt, Bluetooth nur zur Übertragung von Token-Codes."
features: ""
alternatives: ""
payment_processors: "Nicht zutreffend (keine Zahlungsabwicklung genannt)"
sources: ""
---
## Kurzprofil

FreeOTP ist ein Anbieter aus der Kategorie **2FA**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Einmalcodes (HOTP/TOTP) lokal auf dem Gerät nutzen willst und keine proprietäre Server-Komponente möchtest.
- **Weniger geeignet wenn:** du zwingend eine bequeme Multi-Device-Synchronisation oder ein klares, dokumentiertes Backup-/Recovery-Konzept innerhalb der App brauchst.
- **Wichtigster Abwägung:** lokale Kontrolle ohne Konto vs. Risiko bei Geräteverlust (Recovery hängt stark von den jeweiligen Diensten/Recovery-Codes ab).

## Sofortmaßnahmen
- **Gerätesperre aktivieren (PIN/Passwort/Biometrie):** schützt deine lokal gespeicherten OTP-Secrets, wenn das Gerät verloren geht.
- **Bluetooth deaktivieren, wenn du es nicht brauchst:** reduziert Funkangriffsfläche, da Bluetooth laut Anbieter nur für Token-Code-Transfer genutzt wird.
- **Token-Icons nicht laden/Netzwerkzugriff einschränken (falls dein OS das erlaubt):** reduziert zusätzliche Netzwerk-Anfragen (Abwägung: keine/fehlende Icons).

## Entscheidungshilfe
- Wenn du nur Standards (HOTP/TOTP) brauchst, dann passt FreeOTP als lokale OTP-App (Abwägung: kein Cloud-Recovery durch Anbieter).
- Wenn du möglichst wenig Datenflüsse willst, dann nutze FreeOTP ohne Bluetooth und ohne Icon-Fetching (Abwägung: weniger Komfort/Optik).
- Wenn du Gerätewechsel häufig machst, dann plane Recovery über die Dienste selbst (Recovery-Codes/Alternative 2FA) statt ausschließlich auf die App zu setzen (Abwägung: mehr organisatorischer Aufwand).
- Wenn du QR-Codes selbst erzeugst, dann nutze nur vertrauenswürdige Quellen und beachte, dass der FreeOTP-QR-Generator beim optionalen Icon-URL-Feld externe Ressourcen lädt (Abwägung: potenzielles Tracking durch fremde Server).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | FreeOTP |
| Kategorie | 2FA |
| Website | https://freeotp.github.io/ |
| Quellcode | https://github.com/freeotp/freeotp-android |
| Lizenz | Apache-2.0 |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend (keine Zahlungsabwicklung genannt) |
| Jurisdiktion | Nicht angegeben (FreeOTP ist laut Website von Red Hat gesponsert und offiziell veröffentlicht) |
| Logs | none |
| Retention | Nicht angegeben (laut Privacy Policy keine Datenerhebung) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://freeotp.github.io/privacy.html
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
FreeOTP ist eine lokale OTP-App (HOTP/TOTP). Laut Privacy Policy sammelt sie keine Daten; Internet wird nur zum Laden von Token-Icons genutzt, Bluetooth nur zur Übertragung von Token-Codes.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Privacy Policy „keine Daten“ vom mobilen Gerät.
- **Wofür:** Kamera nur zum Scannen von OTP-QR-Codes; Internet nur zum Laden von Token-Icons; Bluetooth nur zur Übertragung von Token-Codes; Standort nur, wenn für Bluetooth unter Android erforderlich.
- **Weitergabe/Subprozessoren:** Nicht angegeben (keine Subprozessoren-/DPA-Liste auf der Website genannt).
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend (keine Zahlungsfunktion genannt).
- **Kontakt/DSAR/DPA:** Privacy Policy verweist bei Verstößen auf „Issue“ im offiziellen GitHub-Repo.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy wird keine Datenerhebung genannt.
- **Abschaltbar?** Nicht angegeben (bei Icon-Fetching/Bluetooth hilft ggf. OS-seitiges Deaktivieren).
- **Wo (Menüpfad):** Android/iOS → Systemeinstellungen → FreeOTP → Berechtigungen (Kamera/Bluetooth) und ggf. Netzwerkzugriff (falls das System/ROM das anbietet).

**Logs & Retention:**
- **Logging-Level:** none
- **Aufbewahrung:** Nicht angegeben (laut Privacy Policy keine Datenerhebung)
- **Lösch-/Opt-out-Optionen:** Nicht angegeben (bei lokaler App: Tokens löschen = Einträge in der App entfernen).

**Abwägung am Punkt:** Weniger Netzwerk/Bluetooth reduziert Metadaten und Angriffsfläche, kann aber Komfort (Icons/Transfer) einschränken.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben (lokale App, aber keine dokumentierten Details zur lokalen Verschlüsselung).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (FreeOTP ist selbst der 2FA-Generator und hat kein eigenes Konto).
- **Recovery/Account-Wiederherstellung:** Nicht angegeben (typisch: erneutes Einrichten über die jeweiligen Dienste/Recovery-Codes).
- **Vuln-Handling / Security-Kontakt:** In den offiziellen Repos ist laut GitHub „No security policy detected“ (kein SECURITY.md).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Gerätesperre aktivieren** (PIN/Passwort/Biometrie), da OTP-Secrets lokal sind.  
   **Prüfen:** Display-Sperre greift zuverlässig nach kurzer Inaktivität.
2) **Bluetooth nur bei Bedarf aktivieren** (Systemschalter).  
   **Prüfen:** Bluetooth ist im Alltag aus; nur zum geplanten Transfer kurz an.
3) **Icon-Fetching vermeiden, wenn du Metadaten minimieren willst** (ggf. OS-seitig Netzwerkzugriff einschränken).  
   **Prüfen:** Tokens funktionieren weiterhin; Icons fehlen ggf. oder werden nicht nachgeladen.

**Stolpersteine:**
- **Geräteverlust ohne Recovery-Plan:** Wenn du keine Recovery-Codes/Alternativ-2FA bei den Diensten hast, kann die Wiederherstellung aufwändig werden (Abwägung: lokale Kontrolle vs. Recovery-Aufwand).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze FreeOTP rein offline: keine externen Icon-URLs verwenden und Bluetooth deaktiviert lassen.
- Halte die Anzahl der Tokens übersichtlich und trenne ggf. private/berufliche Tokens auf getrennte Geräteprofile.
- Erstelle pro Dienst einen Recovery-Plan (Recovery-Codes/Backup-Optionen) außerhalb der App.
**Abwägung:** weniger Komfort (Icons/Transfer) und mehr organisatorischer Aufwand.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze ein separates Gerät oder ein separates Nutzerprofil nur für 2FA-Tokens.
- Halte Funkmodule standardmäßig aus (Bluetooth/WLAN/Mobilfunk) und aktiviere sie nur gezielt.
- Vermeide QR-Code-Generatoren mit externen Icon-URLs; nutze nur vertrauenswürdige Provisioning-Quellen.
**Abwägung:** deutlicher Komfortverlust, höhere Komplexität im Alltag.

</details>

## Features
- Unterstützt OTP-Standards: HOTP (RFC 4226) und TOTP (RFC 6238)
- Tokens hinzufügen per QR-Code-Scan oder Provisioning-Link (Token-URI)
- Keine proprietäre Server-Komponente nötig (funktioniert mit standards-konformen Diensten)
- Token-Icons können über Internet geladen werden (optional je nach Nutzung)
- Bluetooth-Transfer von Token-Codes möglich (Android)

## Alternativen
- [Aegis Authenticator](/anbieter/aegis/) – ähnliche Kategorie; Abwägung je nach Funktionsumfang/Export- und Sperr-Optionen
- [2FAS](/anbieter/2fas/) – ähnliche Kategorie; Abwägung je nach Sync-/Desktop-Integration
- OTP Auth (iOS): ähnliche Kategorie; Abwägung je nach Plattform- und Backup-Konzept
- Hardware-Security-Keys (FIDO2/WebAuthn): anderer Ansatz ohne TOTP-App (Abwägung: Hardware/Kompatibilität)

## Nicht gelöst / offene Punkte
- Auf der Website sind keine Terms/AGB, DPA oder Subprozessoren-Liste dokumentiert (Stand: 2026-01-13).
- In den offiziellen Repos ist keine Security Policy (SECURITY.md) hinterlegt.

## Quellen

- Unterstützt OTP-Standards: "HOTP (RFC 4226) und TOTP (RFC 6238)
- Aegis Authenticator (Android): "ähnliche Kategorie; Trade-off je nach Funktionsumfang/Export- und Sperr-Optionen
- 2FAS (Android/iOS): "ähnliche Kategorie; Trade-off je nach Sync-/Desktop-Integration
- OTP Auth (iOS): "ähnliche Kategorie; Trade-off je nach Plattform- und Backup-Konzept
- Hardware-Security-Keys (FIDO2/WebAuthn): "anderer Ansatz ohne TOTP-App (Trade-off: Hardware/Kompatibilität)
- https://github.com/freeotp/freeotp-ios/security
- [FreeOTP (Website)](https://freeotp.github.io/)
- [FreeOTP – Privacy Policy](https://freeotp.github.io/privacy.html)
- [FreeOTP – QR Code Generator](https://freeotp.github.io/qrcode.html)
- [GitHub: freeotp/freeotp-android](https://github.com/freeotp/freeotp-android)
- [GitHub: freeotp/freeotp-ios](https://github.com/freeotp/freeotp-ios)
- [GitHub: Security Overview (freeotp-android)](https://github.com/freeotp/freeotp-android/security)
- [GitHub: Security Overview (freeotp-ios)](https://github.com/freeotp/freeotp-ios/security)
