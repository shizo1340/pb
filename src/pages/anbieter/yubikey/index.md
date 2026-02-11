---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / YubiKey"
url: "/anbieter/yubikey/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-21"
robots: "index,follow"
description: "Kurzprofil von YubiKey (Kategorie: Security-Key)."
provider: ""
name: "YubiKey"
category: "Security-Key"
website: "https://www.yubico.com/products/"
repo: "https://github.com/Yubico"
license: "BSD-2-Clause (yubikey-manager), Apache-2.0 (Yubico Authenticator)"
policies: ""
privacy: "https://www.yubico.com/support/terms-conditions/privacy-notice/"
terms: "https://www.yubico.com/support/terms-conditions/terms-conditions/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "partial"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Schweden (Yubico AB) / USA (Yubico, Inc.) je nach Region/Vertrag"
region: "us"
logs: "minimal"
retention: "specified"
retention_notes: "zweckgebunden; teils gesetzl. Aufbewahrung"
data_notes: "Bei Kauf/Support fallen Website-/Shop-Daten an; für reine Nutzung als Security-Key ist kein Herstellerkonto erforderlich."
features: ""
alternatives: ""
payment_processors: "Nicht angegeben"
sources: ""
---
## Kurzprofil

YubiKey ist ein Anbieter aus der Kategorie **Security-Key**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du phishing-resistente Anmeldung (FIDO2/WebAuthn) ohne Herstellerkonto nutzen willst und einen physischen Zweitfaktor akzeptierst.
- **Weniger geeignet wenn:** du vollständige Open-Source-Firmware erwartest oder du beim Kauf/Support keinerlei Webshop-/Support-Metadaten anfallen lassen willst.
- **Wichtigster Abwägung:** Hardware-Verlust/Defekt vs. Recovery: du brauchst Backup-Keys + saubere Registrierungs-Strategie bei jedem Dienst.

## Sofortmaßnahmen
- **Registriere sofort einen zweiten Key als Backup** bei deinen wichtigsten Konten (reduziert Lockout-Risiko bei Verlust/Defekt).
- **Setze eine FIDO2-PIN** (Schutz bei Verlust/Diebstahl, abhängig vom Dienst/Use-Case).
- **Deaktiviere ungenutzte Funktionen/Interfaces** (z.B. OTP/PIV), um die Angriffsfläche zu reduzieren.

## Entscheidungshilfe
- Wenn du einen **phishing-resistenten Login** willst, dann nutze YubiKey als **FIDO2/WebAuthn-Security-Key** (Abwägung: Recovery hängt vom jeweiligen Dienst ab).
- Wenn du **TOTP/HOTP ohne Smartphone** brauchst, dann nutze **Yubico Authenticator** mit OATH-Credentials auf dem Key (Abwägung: Backup erfordert erneutes Provisioning/QR-Handling).
- Wenn du **möglichst wenig “Zusatzfunktionen”** willst, dann deaktiviere im Key-Config Tool alle nicht genutzten Protokolle (Abwägung: spätere Umstellung erfordert erneute Konfiguration).
- Wenn du **Konfigurationsänderungen absichern** willst, dann setze einen **Configuration Lock Code** (Abwägung: zusätzlicher Secret, ohne den Änderungen erschwert sind).
- Wenn du **Kauf-/Support-Datenflüsse minimieren** willst, dann trenne Online-Kauf/Support organisatorisch von deinem Haupt-Identitätsprofil (Abwägung: mehr Aufwand, weniger Komfort).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | YubiKey |
| Kategorie | Security-Key |
| Website | https://www.yubico.com/products/ |
| Quellcode | https://github.com/Yubico |
| Lizenz | BSD-2-Clause (yubikey-manager), Apache-2.0 (Yubico Authenticator) |
| Preismodell | paid |
| Free Tier | no |
| Open Source | partial |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Schweden (Yubico AB) / USA (Yubico, Inc.) je nach Region/Vertrag |
| Logs | minimal |
| Retention | zweckgebunden; teils gesetzl. Aufbewahrung |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.yubico.com/support/terms-conditions/privacy-notice/
- AGB/Terms: https://www.yubico.com/support/terms-conditions/terms-conditions/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- FIPS 140-2 validated Modelle (YubiKey FIPS Series; laut Yubico)

**Daten-Notizen (kurz):**
Beim Kauf/Support fallen Website-/Shop-Daten an; für reine Nutzung als Security-Key ist kein Herstellerkonto erforderlich.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Privacy Notice u.a. Website-/Nutzungsdaten (z.B. IP-Adresse/Browser-/Gerätedaten, Cookie-/Tracking-Daten), sowie bei Online-Kauf typische Bestell-/Kontakt-/Lieferdaten und Zahlungsinformationen.
- **Wofür:** Betrieb der Website/Services, Kommunikation/Support, Bestellabwicklung, Compliance/gesetzliche Pflichten, teils Analyse/Statistik (z.B. Google Analytics).
- **Weitergabe/Subprozessoren:** Yubico nennt externe Partner/Subprozessoren und veröffentlicht eine Subprozessoren-Liste.
- **Drittlandtransfer:** Laut Privacy Notice können Partner innerhalb und außerhalb EU/EWR sitzen; bei Bedarf werden u.a. Standardvertragsklauseln erwähnt.
- **Zahlungsabwicklung/Payment Processor:** Zahlungsinformationen werden erwähnt; ein konkreter Zahlungsdienstleister wird nicht konsistent als “Payment Processor” öffentlich benannt.
- **Kontakt/DSAR/DPA:** Rechteausübung über Kontaktwege laut Privacy Notice (Postadresse Yubico AB in Stockholm; weitere Details im Dokument).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Für yubico.com: laut Privacy Notice werden Cookies/ähnliche Technologien genutzt und es wird u.a. Google Analytics genannt.
- **Abschaltbar?** Unklar (Consent/Opt-out wird abhängig von Rechtsraum erwähnt; konkrete UI-Optionen sind in der Cookie Notice beschrieben).
- **Wo (Menüpfad):** yubico.com → Footer „Cookies“ / „Privacy“ / „Cookie Notice“.

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** zweckgebunden; teils gesetzl. Aufbewahrung
- **Lösch-/Opt-out-Optionen:** Rechteausübung laut Privacy Notice; Cookie-/Tracking-Details in der Cookie Notice.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Unklar (Hardware-Key mit mehreren Protokollen; keine E2E-Messaging-Architektur).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** YubiKeys unterstützen mehrere Authentifizierungsprotokolle (z.B. FIDO2/WebAuthn, FIDO U2F, OTP, PIV, OpenPGP – je nach Modell/Serie).
- **Recovery/Account-Wiederherstellung:** Backup-Key ist zentral (bei Verlust/Defekt musst du bei jedem Dienst auf dessen Recovery-Prozess zurückgreifen). Für OATH/Authenticator gilt: Spare Keys benötigen die gleichen Credentials; QR-/Secrets müssen dafür einmalig verfügbar sein.
- **Vuln-Handling / Security-Kontakt:** Yubico nennt security@yubico.com, PGP-Key und einen Coordinated Vulnerability Disclosure Prozess; Security Advisories sind öffentlich einsehbar/abonnierbar.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Backup-Key registrieren** (mind. 2 Keys bei kritischen Konten).  
   **Prüfen:** Dienst zeigt beide Keys als registriert/aktiv.
2) **FIDO2-PIN setzen** (über Yubico Authenticator oder ykman/YubiKey-Manager-Tooling).  
   **Prüfen:** Tool zeigt „PIN gesetzt“ bzw. PIN-Prompt beim Use-Case.
3) **Ungenutzte Funktionen deaktivieren** (z.B. OTP/PIV/OpenPGP, wenn nicht benötigt).  
   **Prüfen:** Konfiguration zeigt die Funktion als deaktiviert; Use-Case schlägt dann erwartbar fehl.

**Stolpersteine:**
- **Konfig-Resets** können Credentials löschen (Abwägung: sauberes Re-Provisioning vs. Risiko von Lockout).
- **QR-/Secret-Handling (Authenticator/OATH):** Spare Keys brauchen dieselben Credentials; Screenshots/Backups sind sensibel (Abwägung: Recovery-Fähigkeit vs. Secret-Leak).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze YubiKey primär als **FIDO2/WebAuthn** statt OTP-Workarounds, wenn der Dienst das unterstützt.  
- Vermeide unnötige Online-Kopplung: kein Newsletter, kein optionales Konto/Portal, wenn du es nicht brauchst.
- Für OATH/TOTP: Spare Keys einmalig provisionieren, danach **QR-/Secret-Kopie löschen**.

**Abwägung:** weniger Metadaten/Secrets außerhalb des Keys, aber höhere Disziplin bei Backup/Onboarding.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Configuration Lock Code** setzen, um Konfigurationsänderungen zu erschweren.  
- **Funktions-Minimierung** (nur benötigte Protokolle aktiv) + getrennte Keys für getrennte Identitäten/Arbeitskontexte.
- OS-/App-Umgebung härten (z.B. getrennte Browserprofile/VM) für kritische Admin-Accounts.

**Abwägung:** deutlich mehr Komplexität, höhere Lockout-Gefahr bei Fehlkonfiguration.

</details>

## Features
- FIDO2/WebAuthn & FIDO U2F (phishing-resistente Anmeldung)
- OATH (TOTP/HOTP) via Yubico Authenticator (Secrets auf dem Key)
- Smart Card (PIV-kompatibel, modellabhängig)
- OpenPGP (modellabhängig)
- OTP (Yubico OTP / statische Passwörter / Challenge-Response, modellabhängig)
- Konfiguration via Yubico Authenticator / ykman CLI

## Alternativen
- Andere FIDO2-Security-Keys (z.B. Nitrokey, SoloKeys, Google Titan) – Abwägung: anderes Tooling, Formfaktoren, Verfügbarkeit

## Nicht gelöst / offene Punkte
- Zahlungsdienstleister im Checkout/Invoice nicht eindeutig verifiziert (Webstore/Order-Form/FAQ; Stand: 2026-01-21).
- App-/Tool-spezifische Telemetrie/Crashreporting nicht klar ersichtlich (GitHub-Repos + Doku der Tools; Stand: 2026-01-21).

## Quellen

- Andere FIDO2-Security-Keys (z.B. Nitrokey, SoloKeys, Google Titan) – Trade-off: "anderes Tooling, Formfaktoren, Verfügbarkeit
- https://www.yubico.com/products/yubikey-fips/
- [Yubico Produkte (Übersicht)](https://www.yubico.com/products/)
- [Privacy Notice](https://www.yubico.com/support/terms-conditions/privacy-notice/)
- [Yubico Sub-processors](https://www.yubico.com/support/terms-conditions/yubico-subprocessors/)
- [Terms and conditions](https://www.yubico.com/support/terms-conditions/terms-conditions/)
- [Legal Imprint](https://www.yubico.com/support/terms-conditions/legal-imprint/)
- [YubiKey Software Downloads](https://www.yubico.com/support/download/)
- [YubiKey 5 Series Technical Manual – Introduction](https://docs.yubico.com/hardware/yubikey/yk5/techman/intro.html)
- [ykman CLI User Manual – Base Commands](https://docs.yubico.com/software/yubikey/tools/ykman/Base_Commands.html)
- [Yubico Authenticator User Guide (PDF)](https://docs.yubico.com/software/yubikey/tools/authenticator/auth-guide/webdocs.pdf)
- [Issue rating system (Security Contact)](https://www.yubico.com/support/issue-rating-system/)
- [Coordinated Vulnerability Disclosure](https://www.yubico.com/coordinated-vulnerability-disclosure/)
- [Yubico Security Advisories](https://www.yubico.com/support/security-advisories/)
- [GitHub: yubikey-manager](https://github.com/Yubico/yubikey-manager)
- [GitHub: yubioath-flutter (Yubico Authenticator)](https://github.com/Yubico/yubioath-flutter)
- [YubiKey FIPS Series – FIPS 140-2 validated security keys](https://www.yubico.com/products/yubikey-fips/)
