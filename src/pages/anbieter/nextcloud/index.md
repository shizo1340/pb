---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Nextcloud"
url: "/anbieter/nextcloud/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-19"
robots: "index,follow"
description: "Kurzprofil von Nextcloud (Kategorie: Cloud & Sync)."
provider: ""
name: "Nextcloud"
category: "Cloud & Sync"
website: "https://nextcloud.com/"
repo: "https://github.com/nextcloud/server"
license: "AGPL-3.0-or-later"
policies: ""
privacy: "https://nextcloud.com/privacy/"
terms: "Nicht angegeben"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "no"
phone_required: "no (Self-Hosting)"
kyc_required: "no"
jurisdiction: "Deutschland (Nextcloud GmbH)"
region: "eu"
logs: "configurable"
retention: "configurable"
retention_notes: "konfigurierbar"
data_notes: "Nextcloud ist primär Self-Hosting-Software: Datenflüsse hängen stark von deinem Hosting/Setup ab. Nextcloud GmbH beschreibt optionale Diagnosedaten/Services (Usage Survey, Updater, Push-Proxy) sowie Website-Tracking per Consent."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Nextcloud ist ein Anbieter aus der Kategorie **Cloud & Sync**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du eine Cloud-/Sync-Lösung **selbst betreiben** (oder bewusst bei einem Provider hosten) willst und regelmäßige Wartung/Updates einplanst.
- **Weniger geeignet wenn:** du **keinen Betriebsaufwand** für Server, Backups, Updates und Monitoring übernehmen kannst/willst.
- **Wichtigster Abwägung:** mehr Kontrolle über Daten & Metadaten durch Self-Hosting **vs.** mehr Eigenverantwortung für Sicherheit, Verfügbarkeit und Recovery.

## Sofortmaßnahmen
- **2FA aktivieren und (falls nötig) erzwingen:** reduziert das Risiko von Kontoübernahmen deutlich.
- **Log-Level außerhalb von Debug niedrig halten:** verhindert unnötig detaillierte Protokolle im Dauerbetrieb.
- **Härtung-Check machen (Doku + Security Scan):** deckt typische Fehlkonfigurationen (HTTPS/Header/Einrichtung) früh auf.

## Entscheidungshilfe
- Wenn du **maximale Kontrolle** über Speicherort, Zugriffsregeln und Logs willst, dann betreibe Nextcloud **self-hosted** (Abwägung: Updates/Backups/Monitoring liegen bei dir).
- Wenn du **keinen eigenen Server** betreiben willst, dann nutze Nextcloud bei einem **externen Hosting-Provider** (Abwägung: Daten liegen bei Dritten → deren Privacy/Terms werden entscheidend).
- Wenn du vermeiden willst, dass der **Serverbetreiber Dateiinhalte sehen kann**, dann nutze **E2EE-Ordner** (Abwägung: Funktionsumfang kann eingeschränkt sein, z.B. bei serverseitigen Features).
- Wenn du **Push-Benachrichtigungen auf Mobile** brauchst, dann ist der **Push-Proxy-Dienst** relevant (Abwägung: zusätzliches Metadaten-/Dienstabhängigkeits-Risiko, auch wenn Inhalte laut Anbieter verschlüsselt/signiert sind).
- Wenn deine Instanz **öffentlich im Internet** hängt, dann begrenze Admin-Aktionen per `allowed_admin_ranges` und nutze Schutz gegen Brute-Force (Abwägung: mehr Komplexität, Risiko von Selbst-Aussperrung bei Fehlkonfig).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Nextcloud |
| Kategorie | Cloud & Sync |
| Website | https://nextcloud.com/ |
| Quellcode | https://github.com/nextcloud/server |
| Lizenz | AGPL-3.0-or-later |
| Preismodell | mixed (Self-Hosting-Software + kommerzielle Enterprise-Angebote/Support) |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no (Self-Hosting) |
| Telefon erforderlich | no (Self-Hosting) |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Deutschland (Nextcloud GmbH) |
| Logs | configurable |
| Retention | konfigurierbar |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://nextcloud.com/privacy/
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Nextcloud beschreibt sich als Self-Hosting-Software: Die Privacy-Eigenschaften hängen wesentlich davon ab, **wo** und **wie** du die Instanz betreibst. Nextcloud GmbH nennt optionale Diagnosedaten/Services (Usage Survey, Updater, Push-Proxy) sowie Website-Tracking per Consent.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Bei Self-Hosting: abhängig von deiner Instanz (Server/DB/Apps/Logs). Für nextcloud.com: u.a. Server-Logdaten wie Timestamp, IP-Adresse, User-Agent, URL (laut Privacy Policy).
- **Wofür:** Website-Betrieb (Logfiles), optional Statistik/Diagnose (Usage Survey, Updater), Push-Benachrichtigungen für Mobile (Push-Proxy).
- **Weitergabe/Subprozessoren:** Für nextcloud.com werden Dritttools genannt (z.B. Matomo sowie externe Medien wie YouTube/Vimeo über Consent). Für Self-Hosting: hängt vom Hosting und installierten Apps ab.
- **Drittlandtransfer:** Nicht konkret für Nextcloud-Instanzen angegeben (Self-Hosting abhängig vom Hosting). Für nextcloud.com: Drittlandtransfer wird als Möglichkeit im Rahmen von Geschäftsbeziehungen beschrieben, Details je Abschnitt.
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben.
- **Kontakt/DSAR/DPA:** DSAR/Betroffenenrechte und Kontaktangaben sind in der Privacy Policy beschrieben (für nextcloud.com).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Abhängig von aktivierten Apps/Funktionen (z.B. optional „Usage Survey“, Updater, Push-Notifications).
- **Abschaltbar?** Ja, indem optionale Komponenten nicht installiert/aktiviert werden bzw. keine Zustimmung zur Umfrage gegeben wird (Usage Survey ist optional; Härtung-Doku nennt `surveyserver.nextcloud.com` als optional).
- **Wo (Menüpfad):** Admin-/App-Verwaltung sowie `config/config.php` (z.B. Härtung-Optionen).

**Logs & Retention:**
- **Logging-Level:** configurable (z.B. `loglevel` in `config.php`; Default laut Doku WARN/2).
- **Aufbewahrung:** konfigurierbar (u.a. Log-Dateipfad/Rotation über System-Einrichtung; Nextcloud-Log liegt standardmäßig im Data-Directory, z.B. `data/nextcloud.log`).
- **Lösch-/Opt-out-Optionen:** Log-Level reduzieren, Debug deaktivieren, Logdateien prüfen/rotieren (Betriebs-/OS-Thema).

**Abwägung am Punkt:** Weniger Logs/Telemetrie kann Diagnose/Support erschweren; mehr Logs/Telemetrie erhöht Metadatenrisiko (z.B. IP/Zeitstempel/Aktivitäten).

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** E2EE ist möglich (verschlüsselt/entschlüsselt auf dem Gerät; Server sieht laut Doku keine unverschlüsselten Dateien).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (Härtung-Doku nennt u.a. bcrypt und ein 72-Zeichen-Limit für Passwortprüfung).
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA ist verfügbar; Admin muss Provider aktivieren, Nutzer aktiviert 2FA oder Admin erzwingt es.
- **Recovery/Account-Wiederherstellung:** 2FA kann Lockout verursachen; Admin kann via „Two-Factor Admin Support“-App einen One-Time-Code erzeugen (laut Doku).
- **Vuln-Handling / Security-Kontakt:** Responsible Disclosure über HackerOne; Security-Seite beschreibt Prozess, PGP-Key-Fingerprint und unterstützte Versionen.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **2FA aktivieren** und wenn möglich für relevante Nutzergruppen erzwingen.  
   **Prüfen:** Mindestens ein 2FA-Provider ist aktiv + Login fordert zweiten Faktor.
2) **Logging im Normalbetrieb niedrig halten** (kein Debug dauerhaft).  
   **Prüfen:** `loglevel` ist nicht DEBUG; Logdatei enthält keine übermäßigen Detaildaten.
3) **Härtung-Basics umsetzen** (HTTPS, sichere Defaults, Admin-Warnungen beachten) und Security Scan nutzen.  
   **Prüfen:** Admin-UI zeigt keine kritischen Security-Warnungen; Scan meldet keine groben Konfigurationsfehler.

**Stolpersteine:**
- Verschlüsselungs-Features (serverseitig oder E2EE) können Funktionen einschränken oder Recovery komplexer machen (Abwägung: Datenschutz vs. Komfort/Feature-Integration).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Optionale Diagnose/Survey minimieren:** Usage Survey nur aktivieren, wenn du die übertragenen Daten geprüft und autorisiert hast.  
- **Ausgehende Verbindungen prüfen:** Härtung-Doku listet externe Ziele (z.B. `push-notifications.nextcloud.com`, `surveyserver.nextcloud.com`, GitHub für Apps) – deaktiviere optionales, wenn du es nicht brauchst.  
- **Previews im Zweifel deaktivieren:** Für höhere Sicherheitsansprüche kann `enable_previews=false` sinnvoll sein (Abwägung: keine/weniger Vorschauen).

**Abwägung:** mehr Handarbeit/Kompatibilitätsprüfung; weniger Komfortfunktionen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Admin-Aktionen einschränken:** `allowed_admin_ranges` nutzen, um Admin-Operationen auf vertrauenswürdige IP-Ranges zu begrenzen (Abwägung: Admin nur aus „sicheren Netzen“ möglich).
- **Instanz isolieren:** dedizierte Domain (Same-Origin-Vorteile) und Netzsegmentierung/DMZ nach Härtung-Doku (Abwägung: Netzwerkkomplexität).
- **Brute-Force auf OS-Ebene blocken:** Fail2ban nach Nextcloud-Doku (setzt passende Log-Konfiguration voraus; Abwägung: Sperr-Risiken bei Fehlparametern).

**Abwägung:** deutlich mehr Betriebsaufwand; höhere Ausfall-/Lockout-Gefahr bei Fehlern.

</details>

## Features
- Dateisynchronisation & Teilen (Web/Clients/WebDAV)
- App-Ökosystem (Nextcloud App Store; Vorsicht bei Drittanbieter-Apps laut Privacy Policy)
- Server-side Encryption (optional, serverweit)
- Ende-zu-Ende-Verschlüsselung (E2EE-Ordner, optional)
- 2FA/MFA (pluggable, durch Admin aktivierbar/erzwingbar)
- Härtung- und Security-Checks (Admin-Handbuch + Security Scan)

## Alternativen
- **ownCloud:** ähnliche Self-Hosting-Kategorie (Abwägung: anderes Ökosystem/Weiterentwicklung).
- **Seafile:** Sync-zentrierte Plattform (Abwägung: andere Architektur/Feature-Schwerpunkte).
- **Syncthing:** Peer-to-Peer-Sync ohne zentralen Server (Abwägung: keine klassische Web-Cloud/Groupware).
- **Proton Drive:** gehosteter Dienst mit E2EE-Fokus (Abwägung: Konto-/Anbieterbindung statt Self-Hosting-Kontrolle).

## Nicht gelöst / offene Punkte
- Zahlungsabwicklung/Payment Processor für Enterprise-Angebote ist auf den genutzten Anbieter-Seiten nicht eindeutig dokumentiert (Stand: 2026-01-19).

## Quellen

- ownCloud (ähnliche Self-Hosting-Kategorie; Trade-off: "anderes Ökosystem/Governance)
- Seafile (Sync-Fokus; Trade-off: "andere Server-/Client-Architektur)
- Syncthing (P2P-Sync; Trade-off: "keine klassische Web-Groupware/Server-Features)
- https://github.com/nextcloud/server/security
- [Nextcloud (Website)](https://nextcloud.com/)
- [Privacy Policy (nextcloud.com)](https://nextcloud.com/privacy/)
- [Impressum / Legal Notice](https://nextcloud.com/impressum/)
- [Security & Responsible Disclosure](https://nextcloud.com/security/)
- [Härtung and security guidance (Admin Manual)](https://docs.nextcloud.com/server/31/admin_manual/installation/harden_server.html)
- [Logging configuration (Admin Manual)](https://docs.nextcloud.com/server/stable/admin_manual/configuration_server/logging_configuration.html)
- [General troubleshooting (Logfile-Pfad/UI-Hinweise)](https://docs.nextcloud.com/server/stable/admin_manual/issues/general_troubleshooting.html)
- [Two-factor authentication (Admin Manual)](https://docs.nextcloud.com/server/stable/admin_manual/configuration_user/two_factor-auth.html)
- [Server-side encryption configuration (Admin Manual)](https://docs.nextcloud.com/server/stable/admin_manual/configuration_files/encryption_configuration.html)
- [Using end-to-end encryption (User Manual)](https://docs.nextcloud.com/server/latest/user_manual/en/files/using_e2ee.html)
- [Nextcloud Security Scan](https://scan.nextcloud.com/)
- [Quellcode: nextcloud/server](https://github.com/nextcloud/server)
- [GitHub Security (Reporting a Vulnerability)](https://github.com/nextcloud/server/security)
