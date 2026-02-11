---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Joplin"
url: "/anbieter/joplin/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-17"
robots: "index,follow"
description: "Kurzprofil von Joplin (Kategorie: Notizen & Docs)."
provider: ""
name: "Joplin"
category: "Notizen & Docs"
website: "https://joplinapp.org/"
repo: "https://github.com/laurent22/joplin"
license: "AGPL-3.0-or-later (Default im Haupt-Repo; Unterverzeichnisse können eigene LICENSE/Lizenzen haben)"
policies: ""
privacy: "https://joplinapp.org/privacy/ (Apps) · https://joplincloud.com/privacy (Cloud)"
terms: "https://joplincloud.com/terms"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "no"
open_source: "partial"
self_host_possible: "yes"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Frankreich (Joplin Cloud Terms)"
region: "eu"
logs: "unknown"
retention: "specified"
retention_notes: "Joplin Cloud: Deaktivierte Accounts werden nach 99 Tagen gelöscht; Userdaten ggf. zusätzlich archiviert (laut Help/Privacy)"
data_notes: "Offline-first: lokal nutzbar ohne Konto. Sync optional über Joplin Cloud oder externe Sync-Ziele; E2EE ist optional und muss manuell aktiviert werden."
features: ""
alternatives: ""
payment_processors: "Stripe (Joplin Cloud)"
sources: ""
---
## Kurzprofil

Joplin ist ein Anbieter aus der Kategorie **Notizen & Docs**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Notizen **offline** führen willst und **Sync optional** (Cloud oder eigenes/externes Ziel) halten möchtest.
- **Weniger geeignet wenn:** du eine komplett „hands-off“ Cloud mit maximaler Transparenz zu **Subprozessoren/Server-Logs** brauchst (Details sind nicht durchgehend öffentlich dokumentiert).
- **Wichtigster Abwägung:** **E2EE-Schutz fürs Sync-Ziel** vs. **Mehr Aufwand/Fehleranfälligkeit** (manuelles Einrichtung, Performance-Overhead, Master-Passwort nicht wiederherstellbar).

## Sofortmaßnahmen
- **E2EE aktivieren** (zuerst am Desktop/CLI) → Sync-Ziel kann Inhalte nicht lesen, wenn korrekt eingerichtet.
- **MFA in Joplin Cloud einschalten** → reduziert Risiko von Kontoübernahmen.
- **Nicht benötigte Netzwerk-Funktionen deaktivieren** (z.B. Safe Browsing/Geo-Location/Update-Check) → weniger externe Requests, Abwägung: weniger Komfort.

## Entscheidungshilfe
- Wenn du **ohne Konto** arbeiten willst, dann nutze Joplin rein lokal (Abwägung: kein automatischer Geräteabgleich).
- Wenn du synchronisieren willst, aber der Sync-Anbieter deine Inhalte **nicht lesen** soll, dann aktiviere **E2EE** (Abwägung: etwas langsamer + Master-Passwort darf nicht verloren gehen).
- Wenn du **eigene Infrastruktur** willst, dann ist **Self-Hosting** (Joplin Server Business) relevant (Abwägung: Betrieb/Updates/Backups liegen bei dir).
- Wenn du Joplin Cloud nutzt, dann aktiviere **MFA + sichere Recovery Codes** (Abwägung: Recovery Codes müssen separat geschützt werden).
- Wenn du möglichst wenig externe Verbindungen willst, dann deaktiviere Features, die laut Privacy Policy externe Dienste ansprechen (Abwägung: z.B. weniger Spam-/Phishing-Schutz oder Komfort).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Joplin |
| Kategorie | Notizen & Docs |
| Website | https://joplinapp.org/ |
| Quellcode | https://github.com/laurent22/joplin |
| Lizenz | AGPL-3.0-or-later (Default im Haupt-Repo; Unterverzeichnisse können eigene LICENSE/Lizenzen haben) |
| Preismodell | mixed (App/Clients: kostenlos; Joplin Cloud: kostenpflichtiges Abo) |
| Free Tier | no (Cloud: 14 Tage Testphase laut Help) |
| Open Source | partial (Clients/E2EE-Technik sind offen dokumentiert; Server-Komponenten können abweichen) |
| Konto erforderlich | no (nur für Joplin Cloud/Sync-Accounts) |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Stripe (Joplin Cloud) |
| Jurisdiktion | Frankreich (Joplin Cloud Terms) |
| Logs | unknown |
| Retention | Joplin Cloud: Deaktivierte Accounts werden nach 99 Tagen gelöscht; Userdaten ggf. zusätzlich archiviert (laut Help/Privacy) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: [Joplin Apps](https://joplinapp.org/privacy/) · [Joplin Cloud](https://joplincloud.com/privacy)
- AGB/Terms: [Joplin Cloud Terms & Conditions](https://joplincloud.com/terms)
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- [Joplin informal encryption and security audit results (April 2020)](https://joplinapp.org/news/20200406-224254/) *(als „informal“ beschrieben)*

**Daten-Notizen (kurz):**
Offline-first: lokal nutzbar ohne Konto. Sync optional über Joplin Cloud oder externe Sync-Ziele; E2EE ist optional und muss manuell aktiviert werden.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - **Apps:** Feature-abhängige Netzwerkaufrufe (z.B. Update-Prüfung, Safe Browsing, Geo-Location); Crash-Reports laut Privacy Policy standardmäßig deaktiviert.  
  - **Joplin Cloud:** E-Mail (Login), optional Name; Notiz-/Sync-Daten auf dem Server; Stripe User-ID und Subscription-ID (Finanzdaten werden von Stripe verarbeitet).
- **Wofür:** Bereitstellung von Sync/Account, Abrechnung (Cloud), sowie „reporting purposes“ (Cloud).
- **Weitergabe/Subprozessoren:** Stripe wird als Zahlungsabwickler genannt; eine umfassende Subprozessorenliste ist nicht ersichtlich.
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Stripe (Joplin Cloud).
- **Kontakt/DSAR/DPA:** Kontakt per Support/Impressum über die Cloud-Seiten; DPA nicht explizit auffindbar.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Teilweise funktionsbedingt (z.B. Update-Check); Crash-Reports laut Privacy Policy standardmäßig deaktiviert.
- **Abschaltbar?** Viele Punkte sind laut Privacy Policy in den Einstellungen deaktivierbar; ein Verbindungscheck („connection check“) ist laut Policy nicht deaktivierbar.
- **Wo (Menüpfad):** Desktop: **Tools → Options** (Windows/Linux) bzw. **Joplin → Preferences** (macOS) · Mobile: **≡ → Configuration**.

**Logs & Retention:**
- **Logging-Level:** unknown
- **Aufbewahrung:** Joplin Cloud: deaktivierte Accounts werden nach **99 Tagen** gelöscht; Userdaten werden laut Help zusätzlich zeitversetzt entfernt/archiviert.
- **Lösch-/Opt-out-Optionen:** Cloud: Löschung vor Ablauf über **Notizen löschen → synchronisieren**; „für Sicherheitsgründe“ keine Löschung „auf Anfrage“ laut Help.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** E2EE wird unterstützt und muss manuell auf einem Gerät aktiviert werden; Inhalte werden dann verschlüsselt an das Sync-Ziel übertragen.
- **KDF/Parameter/Schlüsselableitung:** Native Encryption Spec nennt u.a. **PBKDF2-HMAC-SHA512** (KeyV1: 220.000 Iterationen) und **AES-256-GCM**.
- **MFA/2FA/Passkeys/Hardware-Keys:** Joplin Cloud unterstützt **MFA/2FA** inkl. **Recovery Codes**.
- **Recovery/Account-Wiederherstellung:** E2EE-Master-Passwort ist „nicht wiederherstellbar“; ein Reset kann dazu führen, dass bereits verschlüsselte Inhalte nicht mehr entschlüsselbar sind.
- **Vuln-Handling / Security-Kontakt:** Es gibt eine offizielle Security Policy (Responsible Disclosure) im Repo.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **E2EE für Sync aktivieren (falls du synchronisierst).**  
   **Pfad:** **Konfiguration → Encryption → „Enable encryption“** (zuerst am Desktop/CLI, dann alle Geräte nacheinander synchronisieren).  
   **Prüfen:** Nach erstem Komplett-Sync liegen auf dem Sync-Ziel nur noch verschlüsselte Items.
2) **Joplin Cloud: MFA aktivieren**, falls du Cloud nutzt.  
   **Pfad:** Joplin Cloud **Profile → Multi-factor authentication → Enable**.  
   **Prüfen:** Login fragt zweiten Faktor; Recovery Codes sind gespeichert.
3) **Externe Netzwerk-Funktionen reduzieren**, wenn du sie nicht brauchst (Privacy Policy listet Beispiele).  
   **Pfad:** Desktop **Tools → Options** / Mobile **≡ → Configuration** (nach „Update“, „Safe browsing“, „Location“ suchen).  
   **Prüfen:** Feature ist aus, Funktionalität ggf. eingeschränkt.

**Stolpersteine:**
- E2EE hat Overhead und ist „manuell“: mehrere Geräte parallel zu aktivieren kann zu mehreren Keys führen (Abwägung: Komfort vs. sauberes Key-Management).
- Master-Passwort ist nicht recoverbar (Abwägung: maximale Vertraulichkeit vs. Recovery-Risiko).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze Joplin **ohne Joplin Cloud** (lokal oder eigenes Sync-Ziel), wenn du Identitätsbindung reduzieren willst.  
- Deaktiviere Features, die externe Dienste ansprechen (laut Privacy Policy), wenn nicht nötig.
- Backup/Export-Strategie: regelmäßiger Export + zusätzliches Offline-Backup einplanen.  
**Abwägung:** mehr Eigenverantwortung bei Wiederherstellung und Betrieb.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Isolation:** getrennte OS-Profile/VM für Notizen (v.a. wenn du Anhänge/Clips aus untrusted Quellen ablegst).  
- **Self-Hosting** (Joplin Server Business) statt Managed Cloud, wenn Infrastrukturkontrolle zentral ist.  
- Nur benötigte Sync-/Netzwerkpfade zulassen (entsprechend der in Policies beschriebenen Feature-Aufrufe).  
**Abwägung:** deutlicher Komfortverlust, höhere Komplexität.

</details>

## Features
- Notizen (Markdown) + Anhänge (Desktop/Mobile/CLI)
- Synchronisation (z.B. Joplin Cloud oder externe Sync-Ziele)
- End-to-End Encryption (E2EE) für Sync
- Multi-factor authentication (MFA) für Joplin Cloud
- Plugins/Erweiterungen

## Alternativen
- Standard Notes (Abwägung: Konto-Cloud zentriert, Fokus auf E2EE)
- Obsidian (Abwägung: lokal/dateibasiert; Sync separat)
- Nextcloud Notes + WebDAV (Abwägung: self-hostbar im Nextcloud-Stack)

## Nicht gelöst / offene Punkte
- Öffentliche Subprozessoren-/DPA-Informationen für Joplin Cloud sind nicht klar auffindbar.
- Dokumentierte Details zu Cloud-Server-Logs (Art/Retention) sind unklar.

## Quellen

- Joplin informal encryption and security audit results (April 2020): "https://joplinapp.org/news/20200406-224254/
- Standard Notes (Trade-off: "Konto-Cloud zentriert, Fokus auf E2EE)
- Obsidian (Trade-off: "lokal/dateibasiert; Sync separat)
- Nextcloud Notes + WebDAV (Trade-off: "self-hostbar im Nextcloud-Stack)
- https://joplinapp.org/news/20200406-224254/
- [Joplin (Website)](https://joplinapp.org/)
- [Joplin Privacy Policy (Apps)](https://joplinapp.org/privacy/)
- [Joplin Cloud Help (Billing/Retention)](https://joplincloud.com/help)
- [Joplin Cloud Privacy Policy](https://joplincloud.com/privacy)
- [Joplin Cloud Terms & Conditions](https://joplincloud.com/terms)
- [End-To-End Encryption (E2EE) – Doku](https://joplinapp.org/help/apps/sync/e2ee/)
- [Encryption Spec (E2EE) – Tech](https://joplinapp.org/help/dev/spec/e2ee/)
- [Native Encryption Method Specification](https://joplinapp.org/help/dev/spec/e2ee/native_encryption/)
- [Multi-factor authentication (Joplin Cloud)](https://joplinapp.org/help/apps/mfa/)
- [Configuration screen (Menüpfade)](https://joplinapp.org/help/apps/config_screen/)
- [Joplin Server Business (Self-Hosting)](https://joplinapp.org/help/apps/joplin_server_business/)
- [Repo: laurent22/joplin](https://github.com/laurent22/joplin)
- [LICENSE (Default-Lizenz im Repo)](https://raw.githubusercontent.com/laurent22/joplin/dev/LICENSE)
- [Security Policy (Responsible Disclosure)](https://github.com/laurent22/joplin/security/policy)
- [Joplin informal encryption and security audit results (April 2020)](https://joplinapp.org/news/20200406-224254/)
