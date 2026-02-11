---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / NordPass"
url: "/anbieter/nordpass/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-19"
robots: "index,follow"
description: "Kurzprofil von NordPass (Kategorie: Passwort-Manager)."
provider: ""
name: "NordPass"
category: "Passwort-Manager"
website: "https://nordpass.com/"
repo: "Nicht angegeben"
license: "Nicht angegeben (Closed Source)"
policies: ""
privacy: "https://my.nordaccount.com/legal/privacy-policy/nordpass/"
terms: "https://my.nordaccount.com/legal/terms-of-service/nordpass/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "no"
self_host_possible: "no"
account_required: "yes"
phone_required: "unknown"
kyc_required: "no"
jurisdiction: "Nord Security Inc. (New York, USA) – für NordPass Business laut Privacy Policy"
region: "us"
logs: "minimal"
retention: "unknown"
data_notes: "NordPass nutzt ein Konto (Nord Account) + separates Master-Passwort zum Entsperren des Tresors; laut Security-Architektur werden Logs primär lokal gespeichert und Crash-Reporting ist optional."
features: ""
alternatives: ""
payment_processors: "Nicht angegeben"
sources: ""
---
## Kurzprofil

NordPass ist ein Anbieter aus der Kategorie **Passwort-Manager**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen **Cloud-basierten** Passwort- & Passkey-Manager mit **Zero-Knowledge-Architektur**, Offline-Zugriff (auf bereits synchronisierte Daten) und **Konto-MFA** nutzen willst.
- **Weniger geeignet wenn:** du **Open Source** oder **Self-Hosting** brauchst (NordPass ist laut Anbieter Closed Source) oder wenn du **keinen Account** nutzen möchtest.
- **Wichtigster Abwägung:** Komfort (Sync, Recovery, Sharing) vs. **Account-/Service-Metadaten** (z.B. Login-/Device-Infos, Website-Analytics laut Business-Privacy-Policy).

## Sofortmaßnahmen
- **MFA am Nord Account aktivieren (am besten Security Key):** reduziert Konto-Übernahme-Risiko bei Passwort-Leaks.
- **Autolock kurz einstellen:** reduziert Risiko bei entsperrtem Gerät/Session.
- **Recovery Code sicher offline ablegen:** verhindert „alles weg“, wenn das Master-Passwort verloren geht.

## Entscheidungshilfe
- Wenn du **geräteübergreifend synchronisieren** willst, dann nutze NordPass mit Nord Account (Abwägung: Account-Metadaten fallen an).
- Wenn du **Kontoübernahme-Risiko** minimieren willst, dann aktiviere MFA im Nord Account (Abwägung: zusätzlicher Login-Schritt).
- Wenn du **schnelle Wiederherstellung** brauchst, dann nutze Recovery Code/Emergency Access (Abwägung: mehr Recovery-/Sharing-Komplexität).
- Wenn du **Autofill-Risiken** reduzieren willst (z.B. in High-Risk-Kontexten), dann deaktiviere Autofill global oder für einzelne Sites (Abwägung: weniger Komfort).
- Wenn du oft **ohne Internet** arbeitest, dann nutze Offline Mode (Abwägung: nur zuletzt synchronisierte Daten verfügbar).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | NordPass |
| Kategorie | Passwort-Manager |
| Website | https://nordpass.com/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben (Closed Source) |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Nord Security Inc. (New York, USA) – für NordPass Business laut Privacy Policy |
| Logs | minimal |
| Retention | Nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://my.nordaccount.com/legal/privacy-policy/nordpass/
- AGB/Terms: https://my.nordaccount.com/legal/terms-of-service/nordpass/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- ISO 27001 (laut NordPass Business-Pläne-Seite)
- SOC 2 Type 2 (laut NordPass Business-Pläne-Seite)
- Cure53 (laut NordPass Business-Pläne-Seite; Details nicht verlinkt)

**Daten-Notizen (kurz):**
- Account-Login läuft über **Nord Account** (E-Mail + Verifikation per Code möglich), der Tresor wird separat mit **Master Password** entsperrt.
- Für Business nennt die Privacy Policy u.a. **Account-/Device-Infos, IPs, Diagnosedaten und Connection-Timestamps** als verarbeitete Datenkategorien.
- Laut Security-Architektur werden **Logs lokal** gespeichert; **Crash Reporting** ist optional.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - **Business (Privacy Policy):** Name, Telefon (falls vorhanden), E-Mail, Login-/Subscription-Info, Basis-Device-Infos (z.B. Device-Name, IP, OS, Advertising ID), Diagnosedaten, Connection-Timestamps/IPs.  
  - **Website (Business Privacy Policy):** Access-Logs (IP/Browser/OS), Analytics-Daten (z.B. via Google Analytics; aggregiert), Cookie-/Marketing-Daten.
- **Wofür:** Servicebereitstellung, Support, Zahlung/Fraud-Prevention, Website-Betrieb/Sicherheit, Analytics/Optimierung (laut Business Privacy Policy).
- **Weitergabe/Subprozessoren:** Es werden „Service Providers“ genannt (IT/Server/Support/Analytics/Accounting etc.), aber ohne öffentliche Liste in der General Privacy Policy.
- **Drittlandtransfer:** Business Privacy Policy nennt, dass Daten in Ländern verarbeitet werden können, in denen Dienstleister/Partner sitzen; Transfers außerhalb des Wohnsitzlandes sind möglich.
- **Zahlungsabwicklung/Payment Processor:** Payment-Daten werden beschrieben (z.B. Billing Address, Karteninhaber-Name, Kreditkarteninfos), der konkrete Payment Processor wird in den genutzten Quellen nicht benannt.
- **Kontakt/DSAR/DPA:** DPA ist öffentlich verlinkt (Business); konkrete DSAR-Workflows für Personal in den genutzten Quellen nicht angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Security-Architektur werden **Anwendungs-Logs lokal** gespeichert; Website-Analytics sind in der Business Privacy Policy beschrieben.
- **Abschaltbar?** Crash Reporting ist laut Security-Architektur **optional** (Opt-in/Opt-out wird beschrieben, aber nicht als konkreter Menüpfad dokumentiert).
- **Wo (Menüpfad):** Nicht angegeben (für Crash Reporting); Website-Cookies/Analytics über Cookie-Einstellungen/Policy.

**Logs & Retention:**
- **Logging-Level:** minimal (lokal, laut Security-Architektur); Business Privacy Policy nennt zudem „application diagnostics“.
- **Aufbewahrung:** Nicht angegeben.
- **Lösch-/Opt-out-Optionen:** Website-Cookies/Analytics werden in der Business Privacy Policy beschrieben; App-spezifische Löschpfade nicht angegeben.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Laut Security-Architektur: Zero-Knowledge-Ansatz; Vault-Inhalte werden clientseitig verschlüsselt, bevor sie synchronisiert werden.
- **KDF/Parameter/Schlüsselableitung:** Laut Security-Architektur: **Argon2id** (mit Salt) für Schlüsselableitung aus dem Master Password.
- **MFA/2FA/Passkeys/Hardware-Keys:** MFA für den Nord Account kann über **Authenticator-App** oder **Security Key** aktiviert werden (Help Center). Passkeys werden als Feature im Produkt beschrieben (Help Center).
- **Recovery/Account-Wiederherstellung:**  
  - **Recovery Code** (24 Zeichen) kann zum Zurücksetzen des Master Password genutzt werden (Help Center).  
  - **Emergency Access** ist für Premium möglich (Help Center).
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben in den genutzten Quellen.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **MFA aktivieren (Nord Account)**  
   **Menüpfad:** NordPass → **Settings** (Zahnrad) → **Security** → „Multi-factor Authentication (MFA)“ aktivieren → dann im **Nord Account** „Manage MFA“ einrichten.  
   **Prüfen:** Login erfordert Authenticator-Code oder Security Key (je nach Einrichtung).
2) **Autolock sinnvoll setzen**  
   **Menüpfad (Mobile):** NordPass → **Profile** → **Settings** → **Autolock** → Zeitraum wählen.  
   **Prüfen:** App sperrt nach Inaktivität; erneutes Entsperren erfordert Master Password/Biometrie.
3) **Recovery Code erstellen & sicher speichern**  
   **Menüpfad:** NordPass → **Settings** → Security → „Reset/Generate Recovery Code“ (je nach UI).  
   **Prüfen:** Recovery Code ist offline verfügbar (z.B. ausgedruckt oder in einem getrennten Safe).

**Stolpersteine:**
- Recovery-/Sharing-Funktionen (Recovery Code, Emergency Access) erhöhen Komplexität (Abwägung: Recovery vs. zusätzlicher Angriffs-/Fehlerraum).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze eine **dedizierte E-Mail-Adresse** für den Nord Account (Abwägung: zusätzlicher Account-Aufwand).
- Bezahle, wenn möglich, über **App Store/Google Play** (Help Center nennt diese Option) (Abwägung: Abhängigkeit von Store-Account & dessen Abrechnungsdaten).
- Deaktiviere Autofill für heikle Websites/Workflows:  
  **Menüpfad:** Settings → **Autofill and Autosave control center** → **Autofill** → gewünschte Item-Typen/Websites deaktivieren.  
  **Abwägung:** weniger Komfort, weniger „Fehl-Autofill“-Risiko.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze ein **separates OS-Benutzerprofil** oder ein dediziertes Gerät nur für Passwortverwaltung (Abwägung: mehr Aufwand).
- MFA bevorzugt mit **Hardware Security Key** (Abwägung: Backup-Key/Verlustmanagement).
- Autofill strikt begrenzen (nur manuelles Kopieren/Einfügen, wo sinnvoll) (Abwägung: deutlich langsamer).

</details>

## Features
- Passwort- & Passkey-Verwaltung (Vault)
- Autosave/Autofill (abschaltbar/feingranular per Settings)
- MFA für den Nord Account (Authenticator-App oder Security Key)
- Autolock + Biometrie-Entsperren
- Offline Mode (Zugriff auf zuletzt synchronisierte Daten)
- (Planabhängig) Secure Item Sharing, Emergency Access, integrierter Authenticator (TOTP), Password Health, Data Breach Scanner, E-Mail Masking, Attachments/Documents

## Alternativen
- Bitwarden (Open Source; optional Self-Hosting – Abwägung: eigener Betrieb/Updates)
- 1Password (Cloud – Abwägung: proprietär, Account-Metadaten)
- KeePassXC + eigener Sync (offline-first – Abwägung: Backup-/Sync-Design selbst verantwortlich)
- Proton Pass (Account-basiert – Abwägung: Ökosystem-Bindung)

## Nicht gelöst / offene Punkte
- Öffentliche Subprozessorenliste für NordPass nicht auffindbar.
- Offizieller Vulnerability-Disclosure-Prozess (Security-Kontakt/Disclosure-Seite) nicht eindeutig.

## Quellen

- Optional: "integrierter Authenticator (TOTP), E-Mail-Masken, Data Breach Scanner (planabhängig)
- Bitwarden (Open Source; optional Self-Hosting – Trade-off: "eigenes Hosting/Update-Pflege)
- 1Password (Cloud; stärkeres Konto-/Team-Fokus – Trade-off: "proprietär)
- KeePassXC + eigener Sync (lokal/offline-first – Trade-off: "mehr Setup & Backup-Verantwortung)
- Proton Pass (Account-basiert – Trade-off: "Ökosystem-Bindung)
- [NordPass Plans (Free vs Premium)](https://nordpass.com/plans/)
- [NordPass Password Manager – FAQ (u.a. „Is NordPass open source?“)](https://nordpass.com/password-manager/)
- [NordPass Business Plans (Zertifizierungen/Attestations)](https://nordpass.com/plans/business/)
- [NordPass Security Architecture](https://nordpass.com/security/)
- [NordPass Help Center: "How to disable the Autofill feature](https://support.nordpass.com/hc/en-us/articles/41279171616145-How-to-disable-the-Autofill-feature)
- [NordPass Business Privacy Policy (General)](https://business.nordsec.com/legal/privacy-policy)
- [NordPass Business Terms of Service](https://business.nordsec.com/legal/terms-of-service)
- [NordPass Business Data Processing Agreement (DPA)](https://business.nordsec.com/legal/data-processing-agreement)
- [PDF: "NordPass Business Whitepaper](https://assets.nordpass.com/nordpass-business-whitepaper.pdf)
- [NordPass Plans (Free vs Premium)](https://nordpass.com/plans/)
- [NordPass Password Manager – FAQ (u.a. „Is NordPass open source?“)](https://nordpass.com/password-manager/)
- [NordPass Business Plans (Zertifizierungen/Attestations)](https://nordpass.com/plans/business/)
- [NordPass Security Architecture](https://nordpass.com/security/)
- [NordPass Help Center: Creating a New Account](https://support.nordpass.com/hc/en-us/articles/360006698698-Creating-a-New-Account)
- [NordPass Help Center: How to enable Multi-Factor Authentication (MFA)](https://support.nordpass.com/hc/en-us/articles/360002770497-How-to-enable-Multi-Factor-Authentication-MFA)
- [NordPass Help Center: How to set up the Autolock feature](https://support.nordpass.com/hc/en-us/articles/360006703477-How-to-set-up-the-Autolock-feature)
- [NordPass Help Center: What payment methods do you accept?](https://support.nordpass.com/hc/en-us/articles/360002449077-What-payment-methods-do-you-accept)
- [NordPass Help Center: Premium vs Free version of NordPass](https://support.nordpass.com/hc/en-us/articles/360006700458-Premium-vs-Free-version-of-NordPass)
- [NordPass Help Center: What is a Recovery Code?](https://support.nordpass.com/hc/en-us/articles/360002445318-What-is-a-Recovery-Code)
- [NordPass Help Center: How to give Emergency Access in NordPass](https://support.nordpass.com/hc/en-us/articles/5691777958929-How-to-give-Emergency-Access-in-NordPass)
- [NordPass Help Center: How to use Offline Mode](https://support.nordpass.com/hc/en-us/articles/360013952697-How-to-use-Offline-Mode)
- [NordPass Help Center: How to disable the Autofill feature](https://support.nordpass.com/hc/en-us/articles/41279171616145-How-to-disable-the-Autofill-feature)
- [NordPass Business Privacy Policy (General)](https://business.nordsec.com/legal/privacy-policy)
- [NordPass Business Terms of Service](https://business.nordsec.com/legal/terms-of-service)
- [NordPass Business Data Processing Agreement (DPA)](https://business.nordsec.com/legal/data-processing-agreement)
- [PDF: NordPass Security Härtung](https://assets.nordpass.com/security-Härtung.pdf)
- [PDF: NordPass Business Whitepaper](https://assets.nordpass.com/nordpass-business-whitepaper.pdf)
