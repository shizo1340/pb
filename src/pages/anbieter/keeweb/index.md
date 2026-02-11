---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / KeeWeb"
url: "/anbieter/keeweb/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-17"
robots: "index,follow"
description: "Kurzprofil von KeeWeb (Kategorie: Passwort-Manager)."
provider: ""
name: "KeeWeb"
category: "Passwort-Manager"
website: "https://keeweb.info/"
repo: "https://github.com/keeweb/keeweb"
license: "MIT"
policies: ""
privacy: "https://keeweb.info/privacy-policy"
terms: "https://keeweb.info/terms-of-use"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: "[]"
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Niederlande (Governing Law laut Terms)"
region: "eu"
logs: "minimal"
retention: "unknown"
data_notes: "Lokale KDBX-Datei; Netzwerk nur bei aktivierter Cloud-/WebDAV-Synchronisation oder optionalen Online-Funktionen (z.B. Favicon-Download über services.keeweb.info)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

KeeWeb ist ein Anbieter aus der Kategorie **Passwort-Manager**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen **KeePass/KDBX-kompatiblen** Passwort-Manager ohne KeeWeb-Account nutzen willst (lokale Datei, optional Cloud/WebDAV).
- **Weniger geeignet wenn:** du einen Passwort-Manager suchst, der **ohne Drittanbieter-Cloud** und **ohne Web-Komponenten** auskommt (auch bei optionalen Features wie Favicon-Download).
- **Wichtigster Abwägung:** **Komfort (Sync/Icons/Online-Web-App)** vs. **zusätzliche Metadatenflüsse** zu Cloud-/WebDAV-Anbietern und optionalen KeeWeb-Services.

## Sofortmaßnahmen
- Nutze KeeWeb **offline mit lokaler KDBX-Datei**, wenn du Netzwerk-Metadaten reduzieren willst.
- Aktiviere **2FA beim Cloud-Storage** (Dropbox/Drive/OneDrive/WebDAV-Account), wenn du Sync verwendest (Abwägung: mehr Login-Aufwand).
- Vermeide **Favicon-Download**, wenn du keine zusätzlichen Requests zu KeeWeb-Services/externen Domains möchtest (Abwägung: weniger visuelle Icons).

## Entscheidungshilfe
- Wenn du **keinen KeeWeb-Account** anlegen willst, dann nutze KeeWeb mit **lokaler KDBX-Datei** (Abwägung: kein automatischer Geräte-Sync).
- Wenn du **geräteübergreifend** arbeiten willst, dann nutze **Cloud-/WebDAV-Sync** (Abwägung: Metadaten beim jeweiligen Storage-Anbieter).
- Wenn du **im Browser** arbeitest, dann nutze die **Offline-Web-App** oder eine **self-hosted** Installation (Abwägung: eigene Pflege/Updates bei Self-Hosting).
- Wenn du **2FA** willst, dann setze sie beim **Cloud-Storage** ein und nutze optional **YubiKey-Schutz für die Datei** (Abwägung: Recovery wird anspruchsvoller).
- Wenn du **Plugins** brauchst, dann bleib bei **verifizierten/signierten** Plugins (Abwägung: weniger Auswahl; 3rd-party nur mit expliziter Freigabe).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | KeeWeb |
| Kategorie | Passwort-Manager |
| Website | https://keeweb.info/ |
| Quellcode | https://github.com/keeweb/keeweb |
| Lizenz | MIT |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend (kostenlos); Spenden/Sponsoring: Nicht angegeben |
| Jurisdiktion | Niederlande (Governing Law laut Terms) |
| Logs | minimal |
| Retention | Nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://keeweb.info/privacy-policy
- AGB/Terms: https://keeweb.info/terms-of-use
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- [Hackmanit – Open Penetration Test: KeeWeb (PDF-Report, 2020-05-06)](https://www.hackmanit.de/wp-content/uploads/2020/05/2020_05_06_Report_Open_Penetration_Test_KeeWeb.pdf) *(via KeeWeb Wiki/FAQ verlinkt)*

**Daten-Notizen (kurz):**
Lokale, verschlüsselte **KDBX-Datei**; Daten werden laut Anbieter **nicht** an KeeWeb übertragen, außer du nutzt bewusst Netzwerk-Funktionen (Cloud/WebDAV) oder optionale Online-Services (z.B. **Favicon Grabber**).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Privacy Policy werden **keine Inhalte der Passwortdatenbank** auf KeeWeb-Server übertragen; Daten bleiben lokal, außer du speicherst/synchronisierst über einen Cloud-Anbieter deiner Wahl (verschlüsselt in der KDBX-Datei). Außerdem können **IP-Adresse, Land und Verbindungsparameter** als Standard-Connection-Infos beim Laden der Website erfasst werden.
- **Wofür:** DDoS-Schutz und Besucherzählung (Website).
- **Weitergabe/Subprozessoren:** Privacy Policy nennt **CloudFlare (CDN/Cookies möglich)** sowie **Google AdSense/Google Analytics Cookies** für die Website; eine vollständige öffentliche Subprozessoren-Liste ist nicht angegeben.
- **Drittlandtransfer:** Nicht angegeben (Hinweis: Code/Hosting laut FAQ u.a. GitHub (USA), Domain-Registrierung USA; Website-Delivery über CloudFlare).
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend (keine Pflichtzahlung); Details zu Spendenverarbeitung nicht angegeben.
- **Kontakt/DSAR/DPA:** Kontakt per E-Mail: (Privacy Policy).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut KeeWeb Wiki/FAQ: Die App ist „completely offline“ und enthält **keine** Statistik-/Analytics-/Ads-Skripte (außer wenn du bewusst Netzwerkfunktionen nutzt).
- **Abschaltbar?** Nicht zutreffend für App-Telemetrie (laut Anbieter nicht vorhanden). Website kann Cookies/Tracking im Website-Kontext enthalten (Privacy Policy).
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** minimal (Website: Standard-Connection-Infos; App: lokal/offline, sofern keine Sync-/Service-Nutzung)
- **Aufbewahrung:** Nicht angegeben
- **Lösch-/Opt-out-Optionen:** Nicht angegeben (Website: Google-/Ad-Opt-out wird in Privacy Policy beschrieben)

**Abwägung am Punkt:** Weniger Netzwerkfunktionen bedeutet weniger Metadaten, aber auch weniger Komfort (z.B. Sync/Icons).

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Inhalte liegen als **verschlüsselte KDBX-Datei** vor; ohne Passwort/Keyfile ist kein Unlock möglich (FAQ).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA wird beim **Cloud-Storage** umgesetzt; zusätzlich kann die Datei mit **YubiKey** geschützt werden (FAQ).
- **Recovery/Account-Wiederherstellung:** Wenn Passwort/Keyfile verloren ist, gibt es laut Anbieter **keinen Weg**, die Datei zu öffnen (FAQ).
- **Vuln-Handling / Security-Kontakt:** „Please contact the author.“ (FAQ). Konkreter Disclosure-Prozess nicht weiter beschrieben.
- **Updates (Desktop):** Updates erfolgen via **HTTPS** und werden vor dem Entpacken auf **gültige Signatur** geprüft (FAQ).
- **Plugins:** Signaturprüfung; unverifizierte Plugins werden nicht installiert, 3rd-party nur nach expliziter Freigabe (FAQ).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz für Sync aktivieren** (2FA beim Cloud-Storage), falls du Dropbox/Drive/OneDrive/WebDAV nutzt.  
   **Prüfen:** Cloud-Account zeigt 2FA als „aktiv“.
2) **Auto-Lock/Timeout** auf Geräteebene sinnvoll setzen (Bildschirmsperre/Passwort, besonders bei Desktop/Laptop).  
   **Prüfen:** Gerät sperrt nach Inaktivität; Zugriff erfordert Entsperren.
3) **Online-Extras minimieren** (z.B. Favicon-Download nur bei Bedarf).  
   **Prüfen:** Favicon-Downloads sind aus/werden nicht genutzt.

**Stolpersteine:**
- Sync erhöht Metadaten beim Storage-Anbieter (Abwägung: Komfort vs. Metadaten).
- Passwort/Keyfile-Verlust ist nicht „reparierbar“ (Abwägung: starke Verschlüsselung vs. Recovery).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze KeeWeb **nur lokal** (KDBX-Datei auf verschlüsseltem Datenträger), ohne Cloud/WebDAV-Sync.
- Verwende **self-hosted Web-App** (statischer Host) statt `app.keeweb.info`, wenn du Requests zu Dritt-CDNs reduzieren willst.
- Nutze **Keyfile/YubiKey** zusätzlich zum Master-Passwort (Abwägung: mehr Aufwand bei Backup/Recovery).
**Abwägung:** weniger Komfort (Sync/Verteilung), höhere Eigenverantwortung bei Backups.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Isoliere Nutzung: getrenntes Nutzerkonto/VM/Browser-Profil für KeeWeb-Dateien (Abwägung: mehr Einrichtung/Komplexität).
- Kein Cloud-Sync; keine Online-Services (Favicons/Plugins nur wenn zwingend).  
- Portable-Nutzung ist möglich (Wiki Configuration), aber achte auf physischen Verlust/Backup-Disziplin.
**Abwägung:** deutlicher Komfortverlust, höherer Betriebsaufwand.

</details>

## Features
- Desktop-Apps (Windows/macOS/Linux) und Offline-Web-App (Browser).
- Öffnet/erstellt KeePass **KDBX**; mehrere Dateien parallel.
- Sync über Dropbox/Google Drive/OneDrive oder WebDAV; lokale Dateien möglich.
- Passwortgenerator, Verlauf/History, Tags, geschützte Felder.
- Optional: Favicons herunterladen (über KeeWeb Favicon Service).
- Plugins mit Signaturprüfung (3rd-party nur nach Freigabe).

## Alternativen
- KeePassXC (Desktop, KeePass-kompatibel; Abwägung: kein Web-Frontend, dafür klassisch lokal)
- KeePass (Windows/.NET, KeePass-kompatibel; Abwägung: andere UX/Ökosystem)
- KeePassDX (Android, KeePass-kompatibel; Abwägung: mobile-first statt Desktop/Web)
- Strongbox (iOS, KeePass-kompatibel; Abwägung: iOS-native App statt Web-/Electron-Ansatz)

## Nicht gelöst / offene Punkte
- Aufbewahrungsdauer/Retention für Website-/Service-Logs wird nicht konkret angegeben.

## Quellen

- Optional: "Favicons herunterladen (über KeeWeb Favicon Service).
- KeePassXC (Desktop, KeePass-kompatibel; Trade-off: "kein Web-Frontend, dafür klassisch lokal)
- KeePass (Windows/.NET, KeePass-kompatibel; Trade-off: "andere UX/Ökosystem)
- KeePassDX (Android, KeePass-kompatibel; Trade-off: "mobile-first statt Desktop/Web)
- Strongbox (iOS, KeePass-kompatibel; Trade-off: "iOS-native App statt Web-/Electron-Ansatz)
- [KeeWeb Website](https://keeweb.info/)
- [KeeWeb Privacy Policy](https://keeweb.info/privacy-policy)
- [KeeWeb Terms and Conditions of Use](https://keeweb.info/terms-of-use)
- [KeeWeb GitHub Repo (README/Self-Hosting)](https://github.com/keeweb/keeweb)
- [KeeWeb Wiki: "Configuration](https://github.com/keeweb/keeweb/wiki/Configuration)
- [KeeWeb Favicon Service](https://services.keeweb.info/favicon)
- [KeeWeb Favicon Worker Repo](https://github.com/keeweb/keeweb-favicon-worker)
- [Hackmanit Blog Post: "KeeWeb Penetration Test](https://www.hackmanit.de/en/blog-en/keeweb-penetration-test/)
- [Hackmanit Audit Report (PDF)](https://www.hackmanit.de/wp-content/uploads/2020/05/2020_05_06_Report_Open_Penetration_Test_KeeWeb.pdf)
- [KeeWeb Website](https://keeweb.info/)
- [KeeWeb Privacy Policy](https://keeweb.info/privacy-policy)
- [KeeWeb Terms and Conditions of Use](https://keeweb.info/terms-of-use)
- [KeeWeb GitHub Repo (README/Self-Hosting)](https://github.com/keeweb/keeweb)
- [KeeWeb Wiki: FAQ](https://github.com/keeweb/keeweb/wiki/FAQ)
- [KeeWeb Wiki: Configuration](https://github.com/keeweb/keeweb/wiki/Configuration)
- [KeeWeb Favicon Service](https://services.keeweb.info/favicon)
- [KeeWeb Favicon Worker Repo](https://github.com/keeweb/keeweb-favicon-worker)
- [Hackmanit Blog Post: KeeWeb Penetration Test](https://www.hackmanit.de/en/blog-en/keeweb-penetration-test/)
- [Hackmanit Audit Report (PDF)](https://www.hackmanit.de/wp-content/uploads/2020/05/2020_05_06_Report_Open_Penetration_Test_KeeWeb.pdf)
