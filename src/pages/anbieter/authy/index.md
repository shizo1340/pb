---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Authy"
url: "/anbieter/authy/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-05"
robots: "index,follow"
description: "Kurzprofil von Authy (Kategorie: 2FA)."
provider: ""
name: "Authy"
category: "2FA"
website: "https://authy.com/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://www.twilio.com/en-us/legal/privacy/archive/authy"
terms: "https://www.twilio.com/en-us/legal/authy-app-terms"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "no"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "yes"
kyc_required: "no"
jurisdiction: "USA (Twilio Inc.)"
region: "us"
logs: "some"
logs_notes: "Login-/Account-Historie (IP, App/Programm, Zeitpunkt) + Geräteinfos (laut Privacy Notice)"
retention: "long"
retention_notes: "Account-Daten bis Löschung; Activity Logs bis zu 1 Jahr (laut Privacy Notice)"
retention_max_days: "365"
data_notes: "Authy ist an ein Konto mit Telefonnummer gebunden und unterstützt optional Cloud-Backup/Sync und Multi-Device. Das erhöht Recovery/Komfort, bindet dich aber an den Anbieter und erzeugt Metadaten (z.B. Login-Historie, Geräteinfos)."
features: ""
alternatives: ""
payment_processors: "Nicht angegeben (kostenlose App)"
sources: ""
---
## Kurzprofil

Authy ist ein Anbieter aus der Kategorie **2FA**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du 2FA-Codes auf **mehreren Geräten** nutzen willst und **Recovery** über Anbieter-Sync/Backup akzeptierst (telefonnummerbasiertes Konto).
- **Weniger geeignet wenn:** du **keine Telefonnummer** binden willst oder 2FA **komplett offline** ohne Anbieter-Abhängigkeit betreiben möchtest.
- **Wichtigster Abwägung:** **Komfort (Sync/Recovery) vs. Metadaten & Anbieterbindung** (Telefonnummer als Account-ID + gespeicherte Login-/Gerätehistorie).

## Sofortmaßnahmen
- **Backups nur aktivieren, wenn du sie wirklich brauchst:** reduziert Cloud-Abhängigkeit (Abwägung: Recovery bei Geräteverlust wird schwieriger).
- **Backup-Passwort stark wählen und sicher dokumentieren:** laut Feature-Seite kann Twilio das Passwort nicht wiederherstellen (Abwägung: Passwortverlust = kein Restore).
- **Neue Geräte-Zugriffe aktiv im Blick behalten:** Authy nutzt Logs zur Erkennung verdächtiger Aktivitäten (Abwägung: mehr gespeicherte Aktivitätsmetadaten).

## Entscheidungshilfe
- Wenn du **Multi-Device-Sync** brauchst, dann nutze Authy mit Backup/Sync (Abwägung: Anbieterbindung + Metadaten zu Geräten/Logins).
- Wenn du **minimale Datenbindung** willst, dann vermeide Cloud-Backup/Synchronisation soweit möglich (Abwägung: weniger Komfort bei Gerätewechsel).
- Wenn du **Risikofaktor Telefonnummer/SIM** hoch einschätzt, dann plane zusätzliche Kontosicherungen rund um die Telefonnummer (Abwägung: mehr organisatorischer Aufwand).
- Wenn du **Telefonnummer ändern** musst und keinen In-App-Zugriff hast, dann kann eine Identitätsprüfung relevant werden (Abwägung: ggf. Ausweisdaten zur Verifikation).
- Wenn du **neues Gerät hinzufügst**, dann rechne mit zusätzlichen Anti-Fraud-Maßnahmen (Abwägung: mehr Geräte-/Verhaltensdaten für Betrugsprävention).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Authy |
| Kategorie | 2FA |
| Website | https://authy.com/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | free |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | yes |
| Telefon erforderlich | yes |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben (kostenlose App) |
| Jurisdiktion | USA (Twilio Inc.) |
| Logs | Login-/Account-Historie (IP, App/Programm, Zeitpunkt) + Geräteinfos (laut Privacy Notice) |
| Retention | Account-Daten bis Löschung; Activity Logs bis zu 1 Jahr (laut Privacy Notice) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.twilio.com/en-us/legal/privacy/archive/authy
- AGB/Terms: https://www.twilio.com/en-us/legal/authy-app-terms
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Authy ist an ein Konto mit Telefonnummer gebunden und unterstützt optional Cloud-Backup/Sync und Multi-Device. Das erhöht Recovery/Komfort, bindet dich aber an den Anbieter und erzeugt Metadaten (z.B. Login-Historie, Geräteinfos).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Telefonnummer (Account-Identifier), optional E-Mail; Geräteinfos inkl. Geräte-ID; Login-Historie (u.a. IP-Adresse, welches Programm/ welche App, Zeitpunkt); ggf. Geolocation auf Basis IP (wenn Location Services aktiv sind). Zusätzlich: Wenn Twilio die Identität nicht sicher bestätigen kann (z.B. bei Nummernwechsel ohne In-App-Zugriff), können Ausweisdokumente/Identitätsdaten angefragt werden.  
- **Wofür:** Kontoerstellung/Verifikation, Betrugs-/Missbrauchserkennung, verdächtige Aktivität erkennen, Support/Account-Recovery, Kommunikation (z.B. Security-Hinweise).  
- **Weitergabe/Subprozessoren:** Drittanbieter-Service-Provider (z.B. Storage/Consultants) „as necessary“; gesetzliche Anforderungen. In den App-Terms werden für zusätzliche Betrugsprävention Drittanbieter **SardineAI** und **FingerprintJS** genannt (nur für ausgewählte Geräte/Flows).  
- **Drittlandtransfer:** Transfer in die **USA** wird genannt.  
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (kostenlose App).  
- **Kontakt/DSAR/DPA:** Kontakt für Fragen zu Datenpraktiken: **privacy@twilio.com**.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Login-/Account-Historie und Geräteinfos werden automatisch erhoben (Privacy Notice).
- **Abschaltbar?** Nicht angegeben.
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** Login History & Account History (u.a. IP, App/Programm, Zeitpunkt) + Geräteinfos.
- **Aufbewahrung:** Personenbezogene Daten „generally stored“ bis Konto-Schließung/Löschung; **Activity Logs bis zu 1 Jahr** für Security (oder länger bei laufender Untersuchung).
- **Lösch-/Opt-out-Optionen:** Konto-/Datenschließung durch Anfrage; Marketing-Mails per Unsubscribe/Opt-out (Privacy Notice).

**Abwägung am Punkt:** Weniger Logs/Telemetrie reduziert Metadaten, kann aber Fraud-Erkennung und Support erschweren; mehr Logs verbessert Security-Monitoring, erhöht aber gespeicherte Aktivitätsmetadaten.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Die Feature-Seite beschreibt Cloud-Backup mit Verschlüsselung und dass Daten nur auf Geräten mit einem Passwort „das nur du kennst“ entschlüsselt werden; Twilio „never receive the password“ und kann es nicht wiederherstellen.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben (Authy ist selbst der 2FA-Generator; kein zusätzliches MFA-Feature des Authy-Kontos in den Quellen beschrieben).
- **Recovery/Account-Wiederherstellung:** Konto ist an Telefonnummer gebunden; E-Mail wird als zusätzliche Validierung für Recovery/Compromise genannt. Bei ungeklärten Fällen kann Identitätsinformation (z.B. Ausweis) erforderlich sein.
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben (kein expliziter Disclosure-Prozess).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Backup/Synchronisation bewusst entscheiden** (nur aktivieren, wenn du Multi-Device/Recovery brauchst).  
   **Prüfen:** In den Einstellungen ist Backup/Sync sichtbar und der Status entspricht deiner Entscheidung.
2) **Backup-Passwort setzen & sicher ablegen** (Password Manager + Offline-Notiz).  
   **Prüfen:** Du kannst einen Restore auf einem Zweitgerät durchführen (Test), ohne das Passwort zu verlieren.
3) **Account-Daten minimal halten** (nur notwendige Kontaktinfos).  
   **Prüfen:** E-Mail ist nur gesetzt, wenn du sie für Alerts/Recovery wirklich nutzt.

**Stolpersteine:**
- Telefonnummer ist Account-Identifier: Nummernverlust/Nummernwechsel kann Recovery erschweren (Abwägung: einfache Registrierung vs. Abhängigkeit von Telefonnummer).
- In bestimmten Fällen kann Identitätsbestätigung nötig sein (Abwägung: Account-Schutz vs. zusätzliche Identitätsdaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- Lass Cloud-Backup/Multi-Device deaktiviert, wenn du nur ein Gerät nutzen willst.
- Setze E-Mail nur, wenn du Recovery/Alerts brauchst (weniger Kontodaten, aber auch weniger Fallback).
- Reduziere die Nutzung von Authy auf die nötigsten Konten und dokumentiere Recovery-Codes der Dienste separat.  
**Abwägung:** weniger Metadaten, aber höheres Lockout-Risiko bei Geräteverlust.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Isoliere Authy auf einem separaten Geräteprofil (oder separatem Gerät), wenn Trennung zu Alltags-Apps wichtig ist.
- Vermeide Multi-Device, wenn du Angriffsfläche durch zusätzliche Geräte reduzieren willst.
- Plane Nummernwechsel/Provider-Wechsel vorab (Fallbacks, Recovery-Codes, Zeitfenster).  
**Abwägung:** deutlich mehr Aufwand in Betrieb und Recovery, weniger Komfort.

</details>

## Features
- TOTP-2FA Tokens
- Multi-Device Sync (optional)
- Cloud Backup (optional, laut Feature-Seite verschlüsselt mit Backup-Passwort)
- Device-Management

## Alternativen
- Aegis (Android): lokaler Ansatz ohne Telefonnummer-Bindung (Abwägung: Backup/Recovery komplett in deiner Verantwortung).
- [2FAS](/anbieter/2fas/) – anderer Schwerpunkt (häufig Multi-Device-/Companion-Workflows) (Abwägung: je nach Einrichtung mehr Metadaten durch Sync).
- KeePassXC/Bitwarden TOTP: TOTP im Passwort-Manager (Abwägung: 2FA nicht getrennt vom Passwortspeicher).

## Nicht gelöst / offene Punkte
- Keine öffentliche, Authy-spezifische Subprozessorenliste/DPA gefunden.
- Keine Angaben zu KDF/Parametern für Backup-Verschlüsselung.
- Kein dedizierter Vulnerability-Disclosure-Prozess genannt.

## Quellen

- title: "Twilio Authy App Terms
- [Authy – Website](https://authy.com/)
- [Authy App Privacy Notice (Twilio, Archiv)](https://www.twilio.com/en-us/legal/privacy/archive/authy)
- [Twilio Authy App Terms](https://www.twilio.com/en-us/legal/authy-app-terms)
- [Authy Features](https://authy.com/features/)

