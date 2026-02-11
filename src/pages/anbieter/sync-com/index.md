---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Sync.com"
url: "/anbieter/sync-com/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-12"
robots: "index,follow"
description: "Kurzprofil von Sync.com (Kategorie: Cloud & Sync)."
provider: ""
name: "Sync.com"
category: "Cloud & Sync"
website: "https://www.sync.com/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://www.sync.com/privacy/"
terms: "https://www.sync.com/terms/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "no"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "no"
kyc_required: "unknown"
jurisdiction: "Kanada (Ontario) / USA (Delaware) je nach Wohnsitz"
region: "us"
logs: "minimal"
retention: "specified"
retention_notes: "Solange Konto aktiv; Löschung bei Kündigung (keine feste Zeitangabe)"
data_notes: "Ende-zu-Ende-Verschlüsselung; Passwort wird nicht gespeichert; optionale Recovery-Funktionen können temporären Schlüsselzugriff ermöglichen."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Sync.com ist ein Anbieter aus der Kategorie **Cloud & Sync**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Cloud-Speicher mit Ende-zu-Ende-Verschlüsselung suchst und Sharing (Links/Ordner) in den Alltag integrieren willst.
- **Weniger geeignet wenn:** du Self-Hosting, vollständig offene Clients oder möglichst wenige Subprozessoren/Drittanbieter in der Verarbeitung brauchst.
- **Wichtigster Abwägung:** **Recovery/Komfort vs. Schlüssel- und Metadaten-Risiko** (z.B. E-Mail-basierte Passwort-Recovery kann temporären Schlüsselzugriff ermöglichen; „Enhanced privacy“ bei Links reduziert Kompatibilität).

## Sofortmaßnahmen
- **2FA aktivieren (Authenticator-App/TOTP)** → reduziert Kontoübernahmen bei geleakten Passwörtern.
- **Auto-Logout im Web-Panel setzen (z.B. 1h)** → senkt Risiko auf geteilten/öffentlichen Geräten.
- **Für sensible Freigaben: Link-Passwort + Ablaufdatum + „Enhanced privacy“** → reduziert ungewollte Weitergabe und Link-Metadaten.

## Entscheidungshilfe
- Wenn du **Empfänger ohne Account-Zwang** erreichen willst, dann nutze **Shared Links** (Abwägung: Link-Events/Metadaten wie Zugriffszeitpunkt & IP können im Events-Log auftauchen).
- Wenn du **Ende-zu-Ende-Verschlüsselung auch bei Links** willst, dann aktiviere bei Links **„Enhanced privacy“** (Abwägung: keine Previews, reduzierte Browser-Funktionalität; Safari mobile/ältere Browser & >500 MB nicht vollständig unterstützt).
- Wenn du **Lockout-Risiko** (Passwort vergessen) minimieren willst, dann nutze **Backup-Codes + optional E-Mail-basierte Passwort-Recovery** (Abwägung: laut Anbieter erhalten automatisierte Systeme dabei temporären Zugriff auf Verschlüsselungskeys).
- Wenn du **Drittanbieter minimieren** willst, dann prüfe die **Subprozessorenliste** in den GDPR-Unterlagen und plane ggf. eine **Self-Hosting-Alternative** (Abwägung: eigener Betrieb/Updates/Backups).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Sync.com |
| Kategorie | Cloud & Sync |
| Website | https://www.sync.com/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | u.a. PayPal, BitPay, Zuora (laut GDPR Privacy Policy) |
| Jurisdiktion | Kanada (Ontario) / USA (Delaware) je nach Wohnsitz |
| Logs | minimal |
| Retention | Solange Konto aktiv; Löschung bei Kündigung (keine feste Zeitangabe) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.sync.com/privacy/
- AGB/Terms: https://www.sync.com/terms/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- SOC 3 Report (Download via Sync.com): https://www.sync.com/soc-report/

**Daten-Notizen (kurz):**
Ende-zu-Ende-Verschlüsselung und „Zero-Knowledge“ als Grundprinzip laut GDPR/DPA; Konto-Schutz über 2FA; optionale Passwort-Recovery kann Komfort erhöhen, aber laut Doku temporären Schlüsselzugriff ermöglichen.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Account-/Profil- und Abrechnungsdaten; verschlüsselte Inhaltsdaten; Log-/Nutzungsdaten wie IP-Adresse und Zugriffszeitpunkte werden genannt (u.a. für Website/Events).  
- **Wofür:** Betrieb des Dienstes (Account, Sync/Sharing), Sicherheit, Support, Abrechnung, Compliance.
- **Weitergabe/Subprozessoren:** GDPR Privacy Policy listet Subprozessoren je Zweck (z.B. Hosting/CDN, Support, Analytics, Billing, E-Mail/Notifications).  
- **Drittlandtransfer:** Möglich, da Subprozessoren teilweise außerhalb Kanadas/EU sitzen (Details in GDPR Privacy Policy/DPA).
- **Zahlungsabwicklung/Payment Processor:** u.a. PayPal, BitPay, Zuora (laut GDPR Privacy Policy).
- **Kontakt/DSAR/DPA:** GDPR Privacy Policy/DPA nennen Kontaktmöglichkeiten (z.B. privacy@sync.com, DPA-Kontaktadresse).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar (Analytics-Subprozessoren sind in GDPR-Unterlagen genannt, Aktivierung/Umfang pro App ist nicht eindeutig dokumentiert).
- **Abschaltbar?** Unklar (kein klarer Schalter in den genutzten Primärquellen gefunden).
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** Verschlüsselte Daten laut GDPR Privacy Policy solange das Konto aktiv ist; bei Kündigung/Löschung wird gelöscht (keine feste Zeitangabe).
- **Lösch-/Opt-out-Optionen:** Konto-Kündigung/Löschung laut GDPR Privacy Policy; Marketing-/Benachrichtigungspräferenzen sind im Web-Panel konfigurierbar (Settings → Notifications).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** In GDPR/DPA wird Ende-zu-Ende-Verschlüsselung/Zero-Knowledge beschrieben; Passwörter werden laut Help Center nicht gespeichert oder übertragen.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA per E-Mail oder Authenticator-App (TOTP) + Backup-Codes (Help Center).
- **Recovery/Account-Wiederherstellung:** Passwort-Reset über Desktop-App oder optional E-Mail-basiert; Passwort-Hinweis möglich. Hinweis: E-Mail-basierte Recovery kann laut Doku temporären Zugriff auf Verschlüsselungskeys durch automatisierte Systeme ermöglichen.
- **Vuln-Handling / Security-Kontakt:** Kein öffentlich dokumentiertes Responsible-Disclosure-Verfahren in den genutzten Primärquellen gefunden.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **2FA aktivieren (Authenticator-App/TOTP)**  
   **Wo:** Web-Panel → Settings → Security → ⚙︎ bei „Two-factor authentication“ → „Enable 2FA via Authenticator app“  
   **Prüfen:** Backup-Codes herunterladen & sicher ablegen.
2) **Auto-Logout im Web-Panel setzen**  
   **Wo:** Web-Panel → Settings → Security → „Auto logout“ → z.B. „1 hour“  
   **Prüfen:** Sitzung endet nach Inaktivität.
3) **Freigaben härten (Links/Sharing)**  
   **Wo:** Datei → „Manage link“ → Link-Passwort / Ablaufdatum / Download-Limit; bei sensiblen Links „Enhanced privacy“ aktivieren  
   **Prüfen:** Link fordert Passwort; Ablaufdatum greift; Enhanced-privacy-Link ohne Preview.

**Stolpersteine:**
- **E-Mail-basierte Passwort-Recovery:** kann Komfort erhöhen, aber laut Doku erhalten automatisierte Systeme temporären Zugriff auf Verschlüsselungskeys, wenn die Funktion aktiv ist oder genutzt wird.
- **Enhanced privacy bei Links:** reduziert Kompatibilität (u.a. Safari mobile/ältere Browser; >500 MB nicht vollständig unterstützt).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Recovery bewusst wählen:** E-Mail-basierte Passwort-Recovery nur aktiv lassen, wenn du sie wirklich brauchst (Abwägung: Lockout-Risiko vs. temporärer Schlüsselzugriff laut Doku).
- **Links mit „Enhanced privacy“ bevorzugen**, wenn Inhalt sensibel ist (Abwägung: weniger Komfort/Kompatibilität).
- **Events prüfen statt „blind teilen“:** Web-Panel → Settings → Events (Link-Events enthalten Datum/Uhrzeit und IP bei Views/Downloads).

**Abwägung:** weniger Metadaten-/Expositionsfläche, dafür mehr manuelle Kontrolle und potenzielle UX-Einschränkungen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Strikte Kontotrennung:** separates Gerät/OS-Profil nur für Sync-Nutzung (Abwägung: Aufwand).
- **Sitzungen/Devices regelmäßig bereinigen:** Web-Panel → Devices/Events (unbekannte Geräte entfernen, Sessions beenden).
- **Freigaben minimieren:** statt Links nur notwendige Ordner/Dateien teilen, Links zeitlich begrenzen; „Enhanced privacy“ + Passwort + Expiry kombinieren (Abwägung: Koordination/Kompatibilität).

**Abwägung:** deutlicher Komfortverlust und höhere Prozessdisziplin, dafür geringere Angriffsfläche bei Account-/Link-Nutzung.

</details>

## Features
- Ende-zu-Ende-Verschlüsselung (Zero-Knowledge, laut GDPR/DPA)
- Cloud-Speicher mit Sync-Ordner (Desktop) und Apps
- Vault (Cloud-only Archiv ohne automatische Geräte-Synchronisation)
- Shared Links mit granularen Rechten (Passwort, Ablaufdatum, Download-Limit, Upload-Links)
- „Enhanced privacy“ für Links (zusätzliche E2E-Schicht, mit Funktions-/Kompatibilitätskosten)
- 2FA (E-Mail oder Authenticator-App/TOTP) + Backup-Codes
- Events-Log im Web-Panel (u.a. Link-Aktivität mit IP/Zeit)

## Alternativen
- Nextcloud (Self-Hosting, Abwägung: eigener Betrieb/Updates/Backups statt SaaS)
- Seafile (Self-Hosting, Abwägung: Admin-Aufwand/Serverpflege statt Managed Cloud)
- Syncthing (P2P-Sync, Abwägung: keine zentrale Cloud, dafür Geräte-Online-Anforderung/Einrichtung)
- Proton Drive (Cloud & Sync, Abwägung: anderes Konto-/Ökosystem-Einrichtung und Funktionsumfang)

## Nicht gelöst / offene Punkte
- Unklar, ob und wie In-App Analytics/Diagnosedaten deaktivierbar sind.
- Kein öffentlich dokumentierter Responsible-Disclosure-Prozess gefunden.
- Keine festen Zeitangaben für Log-/Backup-Retention gefunden (nur allgemeine Aussagen in Privacy/GDPR-Unterlagen).

## Quellen

- https://help.sync.com/hc/en-us/articles/38275626752531-How-to-manage-shared-link-permissions
- [Sync.com – Privacy Policy](https://www.sync.com/privacy/)
- [Sync.com – GDPR Privacy Policy (inkl. Subprozessorenliste)](https://www.sync.com/gdpr/privacy-policy/)
- [Sync.com – GDPR DPA](https://www.sync.com/gdpr/dpa/)
- [Sync.com – Terms of Service](https://www.sync.com/terms/)
- [Sync.com – SOC Report (SOC 3 Download)](https://www.sync.com/soc-report/)
- [Sync.com – Pricing (Individual)](https://www.sync.com/pricing/individual/)
- [Sync.com – Free Cloud Storage](https://www.sync.com/free-cloud-storage/)
- [Help Center – 2FA aktivieren/deaktivieren](https://help.sync.com/hc/en-us/articles/38894404837011-How-to-enable-and-disable-two-factor-authentication-2FA)
- [Help Center – Account security (Auto-Logout u.a.)](https://help.sync.com/hc/en-us/articles/38275611260947-Account-security)
- [Help Center – Password management (Recovery/Hint + Hinweis zu Key-Zugriff)](https://help.sync.com/hc/en-us/articles/38275611365907-Password-management)
- [Help Center – Shared link permissions (Enhanced privacy + Events/IP)](https://help.sync.com/hc/en-us/articles/38275626752531-How-to-manage-shared-link-permissions)
