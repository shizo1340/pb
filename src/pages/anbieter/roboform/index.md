---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / RoboForm"
url: "/anbieter/roboform/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-21"
robots: "index,follow"
description: "Kurzprofil von RoboForm (Kategorie: Passwort-Manager)."
provider: ""
name: "RoboForm"
category: "Passwort-Manager"
website: "https://www.roboform.com/"
repo: "Nicht angegeben"
license: "Proprietary (EULA)"
policies: ""
privacy: "https://www.roboform.com/privacy-policy"
terms: "https://www.roboform.com/license"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "no"
self_host_possible: "no"
account_required: "unknown"
phone_required: "unknown"
kyc_required: "no"
jurisdiction: "USA (Virginia; Datencenter USA laut Anbieter)"
region: "us"
logs: "minimal"
logs_notes: "minimal (Lizenz-/Aktivierungsdaten, Support-Kommunikation)"
retention: "unknown"
data_notes: "Passwortdaten werden lokal AES-256-verschlüsselt; Synchronisierung speichert zusätzlich verschlüsselte Daten auf dem Server. Lizenz-/Aktivierungsdaten und Support-Kommunikation können serverseitig anfallen; konkrete Aufbewahrungsdauer ist nicht genannt."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

RoboForm ist ein Anbieter aus der Kategorie **Passwort-Manager**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen Passwort-Manager mit optionalem Cloud-Sync und mehreren 2FA-Methoden nutzen willst und mit Serverbetrieb in den USA für Konto-/Lizenzdaten leben kannst.
- **Weniger geeignet wenn:** du zwingend Open-Source oder Self-Hosting brauchst oder US-Jurisdiktion und Datenübertragungen für Lizenz/Monitoring vermeiden willst.
- **Wichtigster Abwägung:** **Sync/Recovery vs. Offline-Minimierung** – ohne Synchronisierung bleibt alles lokal, aber es gibt laut Anbieter „keine Recovery“ bei Datenverlust; mit Sync fallen zusätzliche Serverkontakte und Konto-Metadaten an.

## Sofortmaßnahmen
- **2FA fürs RoboForm-Konto aktivieren** (z.B. TOTP oder Passkey), um Kontoübernahmen bei Sync/Web-Zugriff zu erschweren.
- **Auto-Logout in der App setzen**, damit eine offene Session am Gerät schneller wieder gesperrt ist.
- **Sync bewusst steuern** (Automatic Sync aus, manuell syncen oder „local only mode“ nutzen), um Serverkontakte zu reduzieren.

## Entscheidungshilfe
- Wenn du **Web-Zugriff/Sync** nutzen willst, dann aktiviere **2FA** im Konto (Abwägung: mehr Account-Einrichtung, ggf. zusätzliche Metadaten durch 2FA-Methoden).
- Wenn du **Serverkontakte minimieren** willst, dann nutze **local only mode** bzw. deaktivierte Synchronisierung (Abwägung: kein Server-Backup, „no recovery“ bei Verlust laut Anbieter).
- Wenn du häufig am Gerät entsperrt arbeitest, dann setze **Auto-Logout nach Inaktivität** (Abwägung: häufiger Master-Passwort/Unlock nötig).
- Wenn du Passkeys/2FA trennen willst, dann speichere **2FA-Passkeys nicht im selben Passwort-Manager** (Abwägung: weniger Komfort, aber bessere Faktor-Trennung).
- Wenn du Backups brauchst, dann nutze **Export/Backup-Funktionen** und lagere Exporte sicher (Abwägung: Export kann unverschlüsselt sein → Risiko steigt, wenn schlecht abgelegt).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | RoboForm |
| Kategorie | Passwort-Manager |
| Website | https://www.roboform.com/ |
| Quellcode | Nicht angegeben |
| Lizenz | Proprietary (EULA) |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | optional (für Sync/Web-Zugriff) |
| Telefon erforderlich | unknown |
| KYC erforderlich | no |
| Zahlungsabwicklung | Stripe (Kreditkartenprozessor); außerdem Apple/Google/PayPal je nach Kaufweg |
| Jurisdiktion | USA (Virginia; Datencenter USA laut Anbieter) |
| Logs | minimal (Lizenz-/Aktivierungsdaten, Support-Kommunikation) |
| Retention | Nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.roboform.com/privacy-policy
- AGB/Terms: https://www.roboform.com/license
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- [Secfault Security – RoboForm Security Review (Summary Overview, 2025-02-13)](https://www.roboform.com/pdf/SecfaultSecurity_Summary_Pentesting_2025_v1.0.pdf)
- [Secfault Security – RoboForm Security Review (Summary Overview, 2023-05-17)](https://roboform.com/pdf/SecfaultSecurity_Summary_Pentesting_2023_v1_0.pdf)

**Daten-Notizen (kurz):**
- Ohne Synchronisierung werden Passwortdaten laut Anbieter **nur lokal** gespeichert („no transmission, no recovery“).  
- Mit Synchronisierung liegt zusätzlich eine **AES-256-verschlüsselte Kopie** auf dem RoboForm-Server; Verfügbarkeit eines Backups ist laut Anbieter nicht garantiert.
- Konto-/Lizenzbetrieb beinhaltet **Online Activation/Monitoring** sowie ggf. **Auto-Update-Checks** (Opt-in).
- Support-Kommunikation wird laut Privacy Policy **aufgezeichnet und aufbewahrt**, aber ohne Dauerangabe.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Name, E-Mail, (ggf.) Telefonnummer für Account/Support; zusätzlich Zahlungsdaten (Adresse/Kreditkarte) für Käufe; außerdem IDs/Device-Fingerprints für Lizenzaktivierung und Checks (GUID, Computer ID, Disk ID) sowie technische Versionsdaten beim Auto-Update (Opt-in).  
- **Wofür:** Account-Management, Support, Zahlungsabwicklung (Kauf/Refund/Chargeback), Lizenzaktivierung/-prüfung, optional Auto-Update.  
- **Weitergabe/Subprozessoren:** Stripe (E-Mail, Name, Telefon, Adresse) als Kreditkartenprozessor; MailChimp und IBM Watson (E-Mail, Name) für E-Mail-Versand.  
- **Drittlandtransfer:** Anbieter nennt Serverbetrieb in den USA und DPF-Mechanismen (EU/UK/Swiss Data Privacy Framework).  
- **Zahlungsabwicklung/Payment Processor:** Stripe; zusätzlich Kaufwege über Apple/Google/PayPal werden erwähnt.  
- **Kontakt/DSAR/DPA:** Privacy Policy nennt einen Privacy Officer und Kontaktadresse für Beschwerden (DPF-Prozess).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Teilweise: Lizenzaktivierung/-monitoring ist als Online-Prozess beschrieben (Kontakt zu *.roboform.com). Auto-Update-Übertragung wird beschrieben, aber als **Opt-in** genannt.
- **Abschaltbar?** Lizenz-/Monitoring-Prozess: nicht als abschaltbar beschrieben; Auto-Update: opt-in (bewusst aktivieren); Website-Analytics nur über Browser-/Cookie-Mechanismen.
- **Wo (Menüpfad):**
  - Desktop-App: **RoboForm Options → Account & Data → Automatic Sync** (für Sync-Verhalten).  
  - Desktop-App: **RoboForm Options → Security → Automatic Logout** (für Sitzungs-Timeout).

**Logs & Retention:**
- **Logging-Level:** minimal (Lizenz-/Aktivierungsdaten, Support-Kommunikation)
- **Aufbewahrung:** Nicht angegeben (keine konkrete Dauer genannt)
- **Lösch-/Opt-out-Optionen:** Unklar (Support-Aufzeichnungen „recorded and retained“ ohne Opt-out-Angabe)

**Abwägung am Punkt:** Weniger Serverkontakte reduziert Metadaten, kann aber Sync/Recovery und Support-Diagnosen einschränken.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** RoboForm verschlüsselt Daten lokal als „One File“ mit **AES-256**; laut Whitepaper erfolgt Verschlüsselung für Sync/Sharing **client-seitig**, der Server kennt keine Entschlüsselungs-Keys.  
- **KDF/Parameter/Schlüsselableitung:** **PBKDF2 + SHA-256** mit **32-Byte Salt** und **100.000 Iterationen (Default)** zur Ableitung des AES-Schlüssels aus dem Master Password (Whitepaper).  
- **MFA/2FA/Passkeys/Hardware-Keys:** Pläne nennen 2FA-Methoden inkl. **E-Mail, SMS, Authenticator-App (TOTP), Passkey, Trusted Device, Hardware Security Key**; Help Center dokumentiert Einrichtung über „Log In & Security → Two-factor authentication“.  
- **Recovery/Account-Wiederherstellung:** Ohne Sync: „no recovery“ bei Datenverlust; mit Sync: Wiederherstellung über Server möglich, aber „nicht garantiert“. „Master Password restore“ wird als Feature genannt; Details hängen von Plattform/Einrichtung ab.  
- **Vuln-Handling / Security-Kontakt:** Öffentliche Meldestelle/Disclosure-Prozess ist auf den genutzten Seiten nicht explizit benannt; der Anbieter verlinkt Penetrationstest-Summaries.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (2FA), falls du Sync/Web-Zugriff nutzt.  
   **Wo (Beispiel, Browser-Extension):** Extension → Menü (3 Punkte) → **Settings** → **Log In & Security** → **Two-factor authentication** → „Add 2FA Method“.  
   **Prüfen:** 2FA-Methode ist in der Liste aktiv, Fallback-Methode dokumentiert.
2) **Auto-Lock/Timeout** sinnvoll setzen.  
   **Wo (Desktop):** **RoboForm Options → Security → Automatic Logout** → „Auto-Logout after this many minutes“.  
   **Prüfen:** Timeout-Wert sichtbar, Logout greift im Test (Inaktivität/Lock Screen).
3) **Sync bewusst steuern** (wenn Metadaten minimiert werden sollen).  
   **Wo (Desktop):** **RoboForm Options → Account & Data → Automatic Sync** deaktivieren, dann manuell syncen.  
   **Prüfen:** Sync findet nicht automatisch statt; manueller Sync funktioniert.

**Stolpersteine:**
- Ohne Sync bleibt alles lokal, aber Datenverlust ist laut Anbieter **irreversibel** („no recovery“).
- Wenn du 2FA-Passkeys im Passwort-Manager speicherst, liegen beide Faktoren ggf. am selben Ort (Abwägung: Komfort vs. Faktor-Trennung).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **local only mode**, wenn du Server-Sync nicht brauchst (Abwägung: kein Cloud-Backup/kein Web-Zugriff).
- Stelle **Automatic Sync** ab und sync nur bei Bedarf manuell (Abwägung: mehr Handarbeit, weniger „immer aktuell“).
- Backup/Export-Strategie: **RoboForm Options → Account & Data → Export** (Achtung: Export kann unverschlüsselt sein).  
  **Abwägung:** mehr Eigenverantwortung bei sicherer Ablage.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne Nutzung nach Kontext: separater OS-Account/VM für besonders sensible Tresore (Abwägung: deutlich mehr Aufwand).
- Nutze strikte Sperrlogik: kurzes Auto-Logout + kein „dauerhaft entsperrt“ (Abwägung: mehr Re-Authentifizierung).
- Reduziere Angriffsfläche: nur benötigte Browser/Extensions aktivieren, keine unnötigen Integrationen (Abwägung: weniger Komfort).

</details>

## Features
- AES-256-verschlüsselte lokale Datendatei („One File“)
- Client-seitige Verschlüsselung auch bei Sync/Sharing (laut Whitepaper)
- Konto-2FA (E-Mail/SMS/TOTP/Passkeys/Trusted Device/Hardware-Key)
- „Local only mode“ (keine Server-Synchronisierung)
- Integrierter TOTP-Authenticator
- Passwordless Unlock (anbieterbenanntes Feature)
- Notfallzugriff (Emergency Access)
- Export/Import, Backup & Restore

## Alternativen
- [Bitwarden](/anbieter/bitwarden/) – Abwägung: Open-Source/anderes Hosting- und Account-Modell
- KeePass / KeePassXC (Passwort-Manager) – Abwägung: lokal/offline möglich, Sync/Sharing je nach Einrichtung eigenverantwortlich
- [1Password](/anbieter/1password/) – Abwägung: anderes Recovery-/Account-Einrichtung
- [Proton Pass](/anbieter/proton-pass/) – Abwägung: anderes Ökosystem und Jurisdiktion

## Nicht gelöst / offene Punkte
- Konkrete Aufbewahrungsdauer („retention“) für aufgezeichnete Support-Kommunikation ist nicht genannt.

## Quellen

- Secfault Security – RoboForm Security Review (Summary Overview, 2025-02-13): "https://www.roboform.com/pdf/SecfaultSecurity_Summary_Pentesting_2025_v1.0.pdf
- Secfault Security – RoboForm Security Review (Summary Overview, 2023-05-17): "https://roboform.com/pdf/SecfaultSecurity_Summary_Pentesting_2023_v1_0.pdf
- Bitwarden (Passwort-Manager, Open-Source-Fokus; Trade-off: "anderes Hosting-/Account-Modell)
- KeePass / KeePassXC (lokal/offline möglich; Trade-off: "Sync/Sharing je nach Setup eigenverantwortlich)
- 1Password (kommerziell; Trade-off: "anderes Konto-/Recovery-Modell)
- Proton Pass (Account-basiert; Trade-off: "anderes Ökosystem/Jurisdiktion)
- RoboForm Privacy Policy: "https://www.roboform.com/privacy-policy
- RoboForm License Agreement / Terms of Use: "https://www.roboform.com/license
- RoboForm Personal Plans & Pricing: "https://www.roboform.com/pricing-personal
- RoboForm Security Whitepaper v1.9 (Feb 2023, PDF): "https://www.roboform.com/pdf/RoboForm_Security_White_Paper.pdf
- RoboForm User Manual (Windows): "https://www.roboform.com/manual
- RoboForm Help Center – Security Audits / Testing: "https://help.roboform.com/hc/en-us/articles/360059665631-Security-Audits-Testing
- RoboForm Help Center – Enable 2FA (Trusted Device / Hardware Key): "https://help.roboform.com/hc/en-us/articles/37005232757261-How-to-Enable-2FA-Using-a-Trusted-Device-or-Hardware-Key
- [RoboForm Privacy Policy](https://www.roboform.com/privacy-policy)
- [RoboForm License Agreement / Terms of Use](https://www.roboform.com/license)
- [RoboForm Personal Plans & Pricing](https://www.roboform.com/pricing-personal)
- [RoboForm Security Whitepaper v1.9 (Feb 2023, PDF)](https://www.roboform.com/pdf/RoboForm_Security_White_Paper.pdf)
- [RoboForm User Manual (Windows)](https://www.roboform.com/manual)
- [RoboForm Help Center – Security Audits / Testing](https://help.roboform.com/hc/en-us/articles/360059665631-Security-Audits-Testing)
- [RoboForm Help Center – Enable 2FA (Trusted Device / Hardware Key)](https://help.roboform.com/hc/en-us/articles/37005232757261-How-to-Enable-2FA-Using-a-Trusted-Device-or-Hardware-Key)
- [Secfault Security – RoboForm Security Review (Summary Overview, 2025-02-13)](https://www.roboform.com/pdf/SecfaultSecurity_Summary_Pentesting_2025_v1.0.pdf)
- [Secfault Security – RoboForm Security Review (Summary Overview, 2023-05-17)](https://roboform.com/pdf/SecfaultSecurity_Summary_Pentesting_2023_v1_0.pdf)
