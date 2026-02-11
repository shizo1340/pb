---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Google Authenticator"
url: "/anbieter/google-authenticator/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-14"
robots: "index,follow"
description: "Kurzprofil von Google Authenticator (Kategorie: 2FA)."
provider: ""
name: "Google Authenticator"
category: "2FA"
website: "https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"
repo: "https://github.com/google/google-authenticator"
license: "Apache-2.0 (Repo, archiviert; App-Store-Builds können abweichen)"
policies: ""
privacy: "https://policies.google.com/privacy?hl=de"
terms: "https://policies.google.com/terms?hl=de"
transparency: "https://transparencyreport.google.com/?hl=de"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "partial"
self_host_possible: "no"
account_required: "unknown"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA (Google LLC) / Irland (Google Ireland Limited im EWR – siehe Terms)"
region: "us"
logs: "unknown"
retention: "unknown"
retention_notes: "Unklar (app-spezifisch nicht angegeben)"
data_notes: "Einmalcodes (TOTP/HOTP) können offline erzeugt werden; optionaler Sync über Google-Konto. Für QR-Setup wird Kamera-Berechtigung benötigt."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Google Authenticator ist ein Anbieter aus der Kategorie **2FA**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Einmalcodes (TOTP/HOTP) auch **offline** nutzen willst und optional eine **Konto-Synchronisierung** zur Wiederherstellung akzeptierst.
- **Weniger geeignet wenn:** du eine 2FA-App mit **vollständig nachvollziehbaren/prüfbaren Builds** (Open-Source-Apps „bis zum Store-Build“) brauchst oder detaillierte, produkt-spezifische Angaben zu Diagnosedaten erwartest.
- **Wichtigster Abwägung:** **Recovery/Sync über Google-Konto** kann Lockout-Risiko senken, erhöht aber **Konto-Bindung & Metadaten** (statt rein lokaler Nutzung).

## Sofortmaßnahmen
- **Privacy Screen aktivieren:** schützt deine Codes hinter Gerätesperre/biometrischer Abfrage.
- **Sync-Entscheidung bewusst treffen:** „mit Konto“ für einfachere Wiederherstellung vs. „ohne Konto“ für weniger Bindung.
- **Transfer/Export einmal testen:** im Ernstfall (neues Handy) reduziert das Stress und Ausfallzeit.

## Entscheidungshilfe
- Wenn du **Codes auf mehreren Geräten** verfügbar haben willst, dann **im Authenticator mit Google-Konto anmelden** und Sync nutzen (Abwägung: zusätzliche Konto-Bindung/Metadaten).
- Wenn du **möglichst wenig Konto-Bindung** willst, dann **„Use without an account“** wählen und den Gerätewechsel über **QR-Transfer** planen (Abwägung: höheres Lockout-Risiko bei Verlust ohne Transfer/Backups).
- Wenn du dein Gerät teilst oder das Risiko von **Neugier-/Zugriffssituationen** hast, dann **Privacy Screen aktivieren** (Abwägung: zusätzlicher Entsperr-Schritt).
- Wenn du bei Geräteverlust schnell reagieren willst, dann nutze **Remote-Wipe/Device-Entfernung** und prüfe, ob Codes in deinem Google-Konto synchronisiert sind (Abwägung: Verwaltungsaufwand).
- Wenn du **High-Risk** arbeitest, dann nutze die App nur auf einem **dedizierten Gerät/Profil** und reduziere verknüpfte Konten (Abwägung: mehr Aufwand bei Wartung/Wechsel).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Google Authenticator |
| Kategorie | 2FA |
| Website | https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2 |
| Quellcode | https://github.com/google/google-authenticator |
| Lizenz | Apache-2.0 (Repo, archiviert; App-Store-Builds können abweichen) |
| Preismodell | free |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | no (optional für Sync) |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | USA (Google LLC) / Irland (Google Ireland Limited im EWR – siehe Terms) |
| Logs | unknown |
| Retention | Unklar (app-spezifisch nicht angegeben) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://policies.google.com/privacy?hl=de
- AGB/Terms: https://policies.google.com/terms?hl=de
- Transparency Report: https://transparencyreport.google.com/?hl=de
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Einmalcodes (TOTP/HOTP) können offline erzeugt werden; optionaler Sync über Google-Konto. Für QR-Einrichtung wird Kamera-Berechtigung benötigt.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Google Privacy Policy fallen (je nach Nutzung) Konto-/Nutzungsdaten an; die Play-Store „Data safety“-Angabe nennt zusätzlich, dass die App „bestimmte Datentypen“ erheben kann und keine Daten an Dritte teilt (laut Entwicklerangabe).
- **Wofür:** Sync-Funktion speichert/zeigt Codes über das Google-Konto auf mehreren Geräten; ohne Konto werden Codes lokal auf dem Gerät gespeichert.
- **Weitergabe/Subprozessoren:** In der Google Privacy Policy allgemein über „Dienstleister/Service Provider“ beschrieben; keine app-spezifische Subprozessorenliste genannt.
- **Drittlandtransfer:** In der Google Privacy Policy allgemein geregelt; app-spezifisch nicht ausgeführt.
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (App ist kostenfrei).
- **Kontakt/DSAR/DPA:** In Google Privacy Policy/Google-Konto („Data & privacy“) beschrieben; zusätzlich nennt der Play Store die Option „You can request that data be deleted“.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar (keine detaillierte, produkt-spezifische Telemetrie-Doku in der Hilfe).
- **Abschaltbar?** Nicht angegeben.
- **Wo (Menüpfad):** Nicht angegeben (kein dokumentierter Schalter).

**Logs & Retention:**
- **Logging-Level:** unknown
- **Aufbewahrung:** Unklar (app-spezifisch nicht angegeben)
- **Lösch-/Opt-out-Optionen:** Codes können aus dem Google-Konto gelöscht werden, wenn du den Google-Authenticator-Service entfernst; Play Store nennt außerdem „You can request that data be deleted“.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Google nennt, dass Authenticator-Codes „in transit“ und „at rest“ verschlüsselt werden, wenn sie über Google-Konto synchronisiert werden; Details zu E2EE werden nicht genannt.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (für TOTP/HOTP typischerweise nicht relevant wie bei Passwort-Managern).
- **MFA/2FA/Passkeys/Hardware-Keys:** App generiert TOTP/HOTP-Codes für Dienste, die „Authenticator app 2-Step Verification“ unterstützen.
- **Recovery/Account-Wiederherstellung:** Optionaler Google-Konto-Sync; ohne Konto ist manuelles Transferieren per QR möglich.
- **Vuln-Handling / Security-Kontakt:** Google verweist für Sicherheitslücken auf das Bug-Report/VRP-Verfahren („Bug Hunters“).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Sync-Modus festlegen (mit oder ohne Konto)**  
   **Prüfen:** In der App oben rechts Profil-Icon sichtbar (mit Konto) oder Option „Use without an account“ aktiv (ohne Konto).
2) **Privacy Screen aktivieren**  
   **Menüpfad:** Menu → Settings → Privacy Screen  
   **Prüfen:** App verlangt beim Öffnen PIN/Pattern/Biometrie.
3) **Gerätewechsel-Prozess einmal durchspielen (QR-Transfer)**  
   **Menüpfad:** Menu → Transfer accounts → Export accounts / Import accounts  
   **Prüfen:** Import am neuen Gerät zeigt dieselben Einträge.

**Stolpersteine:**
- „Ohne Konto“ reduziert Bindung, erhöht aber Lockout-Risiko bei Verlust/Defekt (Abwägung: weniger Metadaten vs. weniger Recovery-Komfort).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **„Use without an account“**, wenn du keinen Google-Konto-Sync willst.
- Reduziere Spuren durch **minimale App-Berechtigungen** (Kamera nur fürs QR-Einrichtung nötig).
- Halte **Backup-Codes der jeweiligen Dienste** separat bereit (Abwägung: mehr Eigenorganisation).

**Abwägung:** mehr Eigenverantwortung beim Gerätewechsel und bei Verlust.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze einen **dedizierten Gerätekontext** (separates Nutzerprofil/Arbeitsprofil oder separates Gerät) nur für 2FA.
- Vermeide Sync über ein primäres Identitätskonto, falls das Bedrohungsmodell das verlangt.
- Plane den Transfer als **bewussten, seltenen Vorgang** (QR-Export nur im kontrollierten Umfeld).

**Abwägung:** deutlicher Komfortverlust, höhere Komplexität.

</details>

## Features
- Offline-Code-Generierung (auch ohne Netz/Mobilfunk)
- Optionaler Sync der Codes über Google-Konto (geräteübergreifend)
- QR-Code Einrichtung für neue Einträge
- Unterstützung mehrerer Konten/Einträge
- TOTP (zeitbasiert) und HOTP (zählerbasiert)
- QR-basierter Transfer zwischen Geräten (Export/Import)
- Privacy Screen (Gerätesperre/biometrisch) als App-Zugriffsschutz

## Alternativen
- Aegis Authenticator (Abwägung: anderer Ansatz bei Bedienung/Backup/Plattform-Fokus)
- Ente Auth (Abwägung: anderer Sync-/Backup-Ansatz)
- FreeOTPPlus (Abwägung: anderer Ansatz bei Bedienung/Plattform-Fokus)
- Microsoft Authenticator (Abwägung: mögliche stärkere Ökosystem-Bindung)

## Nicht gelöst / offene Punkte
- Detaillierte Telemetrie-/Diagnosedaten der App sind nicht als klare, app-spezifische Doku zusammengefasst.

## Quellen

- https://transparencyreport.google.com/?hl=de
- [Google Account Help: Get verification codes with Google Authenticator](https://support.google.com/accounts/answer/1066447?co=GENIE.Platform%3DAndroid&hl=en)
- [Google Play: Google Authenticator (App-Seite)](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
- [Google Privacy Policy](https://policies.google.com/privacy?hl=de)
- [Google Terms of Service](https://policies.google.com/terms?hl=de)
- [GitHub: google/google-authenticator (Repo, archiviert)](https://github.com/google/google-authenticator)
- [About Google’s App Security (Security Issues melden)](https://about.google/company-info/appsecurity/)
- [Google Transparency Report](https://transparencyreport.google.com/?hl=de)
