---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Vivaldi"
url: "/anbieter/vivaldi/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-19"
robots: "index,follow"
description: "Kurzprofil von Vivaldi (Kategorie: Browser)."
provider: ""
name: "Vivaldi"
category: "Browser"
website: "https://vivaldi.com/"
repo: "https://vivaldi.com/source/"
license: "Proprietary (EULA); enthält Open-Source-Komponenten"
policies: ""
privacy: "https://vivaldi.com/privacy/browser/"
terms: "https://vivaldi.com/privacy/vivaldi-end-user-license-agreement/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "partial"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Norwegen (Vivaldi Technologies AS); Serverstandorte u.a. Island (Sync/Metriken)"
region: "eu"
logs: "minimal"
retention: "long"
retention_notes: "Crash-Stacktrace: 60d; Sync-Daten: bis zu 1 Jahr seit letzter Nutzung"
retention_max_days: "365"
data_notes: "Vivaldi sendet laut Browser-Privacy-Policy alle 24h ein Installations-Ping (Unique ID + Geräte-/Versionsdaten) an Server in Island. Crash-Reports sind optional; Safe Browsing (Google) und Search Suggestions können (teils) optional Daten an Drittanbieter senden."
features: ""
alternatives: ""
payment_processors: "Nicht angegeben"
sources: ""
---
## Kurzprofil

Vivaldi ist ein Anbieter aus der Kategorie **Browser**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen Chromium-basierten Browser mit vielen lokalen Privacy-/Blocker-Optionen willst, ohne zwingendes Konto.
- **Weniger geeignet wenn:** du strikt keine regelmäßigen Hintergrund-Requests/Installations-Telemetrie akzeptierst (laut Privacy Policy gibt es ein 24h-Installations-Ping).
- **Wichtigster Abwägung:** Komfort-Features (Sync, Safe Browsing, Gmail/Google-Integrationen) vs. zusätzliche Metadaten/Requests an Vivaldi-Server oder Drittanbieter.

## Sofortmaßnahmen
- **Crash-Reporting deaktiviert lassen:** reduziert das Risiko, dass Speicherinhalte im Crash-Fall übertragen werden (Abwägung: weniger Diagnosehilfe).
- **Tracker/Ads global aktivieren:** senkt Drittanbieter-Requests beim Surfen (Abwägung: einzelne Seiten können brechen → Ausnahmen nötig).
- **Search Suggestions aus lassen:** verhindert, dass Tastatureingaben vor dem Absenden an die Suchmaschine gesendet werden.

## Entscheidungshilfe
- Wenn du **kein Konto** nutzen willst, dann verwende Vivaldi **ohne Sync** (Abwägung: keine geräteübergreifende Synchronisation).
- Wenn du **Sync** brauchst, dann aktiviere ihn bewusst und plane die **Server-Retention** ein (Abwägung: verschlüsselte Einträge, aber Sync-Metadaten + bis zu 1 Jahr Aufbewahrung seit letzter Nutzung).
- Wenn du **Phishing-/Malware-Schutz** willst, dann nutze Safe Browsing (Abwägung: Nutzung eines Google-Dienstes; Details/Schalter in den Privacy-Settings prüfen).
- Wenn du **minimale Abflüsse beim Tippen** willst, dann lasse **Search Suggestions deaktiviert** (Abwägung: weniger Komfort beim Suchen).
- Wenn du **Kontexte trennen** willst (Arbeit/Privat/Tests), dann nutze **separate Profile** (Abwägung: mehr Pflege/Updates/Extensions pro Profil).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Vivaldi |
| Kategorie | Browser |
| Website | https://vivaldi.com/ |
| Quellcode | https://vivaldi.com/source/ |
| Lizenz | Proprietary (EULA); enthält Open-Source-Komponenten |
| Preismodell | free |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Norwegen (Vivaldi Technologies AS); Serverstandorte u.a. Island (Sync/Metriken) |
| Logs | minimal |
| Retention | Crash-Stacktrace: 60d; Sync-Daten: bis zu 1 Jahr seit letzter Nutzung |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://vivaldi.com/privacy/browser/
- AGB/Terms: https://vivaldi.com/privacy/vivaldi-end-user-license-agreement/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Vivaldi weist in der Browser-Privacy-Policy u.a. auf ein 24h-Installations-Ping (Unique ID + Geräte-/Versionsdaten) an Server in Island hin. Crash-Reports sind opt-in; bei Aktivierung werden Logs serverseitig zu einem Stacktrace verarbeitet und der Stacktrace + aktive URL für 60 Tage behalten. Sync ist freiwillig und speichert verschlüsselte Einträge plus Metadaten; Aufbewahrung bis zu 1 Jahr nach letzter Nutzung (oder bis Löschanfrage).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - Browser-Metriken: Unique User ID pro Installationsprofil + Version, CPU-Architektur, Screen-Resolution, Zeit seit letzter Meldung (alle 24h).  
  - Optional: Crash-Reports (Stacktrace + aktive URL; Voll-Log wird nach Verarbeitung entfernt).  
  - Sync (opt-in): verschlüsselte Einträge (z.B. Bookmarks/Settings/Passwörter/History) + Metadaten (z.B. Entry-Typ, Timestamps, Client-ID, Lösch-Status).
- **Wofür:**  
  - Nutzerzählung/Verteilung (Metriken); Diagnose von Crashes (Stacktraces); Sync-Funktion zwischen Geräten.
- **Weitergabe/Subprozessoren:**  
  - Sync-Server werden laut Anbieter in Hringdu Data Centers (Island) gehostet; weitere Subprozessorenlisten sind auf den genannten Seiten nicht als öffentliche Liste beschrieben.
- **Drittlandtransfer:** Nicht angegeben (bei optionalen Drittanbieter-Funktionen wie Google Safe Browsing/Search/Google-Integrationen können Requests an Dritte entstehen).
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben.
- **Kontakt/DSAR/DPA:** Kontaktmöglichkeiten werden auf Vivaldi-Seiten bereitgestellt (z.B. Kontaktformular); DPA/DSAR-Prozess als eigener Link nicht eindeutig ausgewiesen.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Ja: Installations-Ping alle 24h (Unique ID + Geräte-/Versionsdaten) laut Browser-Privacy-Policy.
- **Abschaltbar?** Nicht angegeben (für das 24h-Ping). Crash-Reporting ist opt-in.
- **Wo (Menüpfad):**
  - Crash Reporting: **Settings → Privacy and Security → Privacy → Crash Reporting**
  - Search Suggestions: **Settings → Search** (und teils zusätzlich in **Settings → Privacy and Security**)
  - Safe Browsing: **Settings → Privacy and Security** (Google Phishing and Malware Protection)

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** Crash-Stacktrace + aktive URL: **60 Tage**; Sync-Daten: **bis zu 1 Jahr** seit letzter Nutzung (oder bis Löschanfrage).
- **Lösch-/Opt-out-Optionen:** Crash-Reporting deaktivierbar; Sync kann beendet/gelöscht werden (Details in Sync-Privacy-Policy / Account-Funktionen prüfen).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Sync-Daten werden als **verschlüsselte Einträge** an Vivaldi-Server in Island gesendet; Entschlüsselung erfolgt im Browser mit dem Nutzer-Schlüssel (laut Sync Privacy Policy).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Für Vivaldi-Accounts gibt es **2FA per Authenticator-App (TOTP) oder Security Key**, plus Recovery Codes.
- **Recovery/Account-Wiederherstellung:** Account-Aktivierung via Code an Recovery-Mail; bei 2FA gilt: wenn keine Methode/Recovery Codes verfügbar sind, ist Account-Zugriff dauerhaft verloren (laut 2FA-Doku).
- **Vuln-Handling / Security-Kontakt:** Security-Seite beschreibt Responsible Disclosure; Meldung über Bugreport („Exploitable security vulnerability“).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Tracker-/Ad-Blocking aktivieren**  
   **Pfad:** Settings → Privacy and Security → Tracker and Ad Blocking → „Block Trackers“ (oder „Block Trackers and Ads“)  
   **Prüfen:** Shield/Content-Blocker zeigt geblockte Requests pro Seite.
2) **Crash-Reporting deaktiviert lassen** (oder bewusst aktivieren)  
   **Pfad:** Settings → Privacy and Security → Privacy → Crash Reporting  
   **Prüfen:** Schalter „aus“ bzw. bewusst „an“.
3) **Search Suggestions aus lassen**  
   **Pfad:** Settings → Search (und ggf. Settings → Privacy and Security)  
   **Prüfen:** Suggest-Optionen sind aus; keine „Suggest URL“ bei unerwünschten Suchmaschinen.

**Stolpersteine:**
- Safe Browsing/Google-Dienste können Schutz erhöhen, aber auch Requests an Drittanbieter auslösen (Abwägung: Sicherheit vs. Metadaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze Vivaldi **ohne Konto/Sync**, wenn du keine serverseitige Sync-Metadaten willst.
- Reduziere Drittanbieter-Features: Safe Browsing, Google-DNS-Fallback, Autofill/Google-Extensions nur aktiv lassen, wenn du sie brauchst (Pfad: Settings → Privacy and Security).
- Setze History-Retention kürzer oder „Session Only“ (Pfad: Settings → Privacy and Security → Browsing History).  
**Abwägung:** weniger Komfort (Autofill/Suggestions), ggf. weniger Schutz vor bekannten Phishing-Seiten.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne Kontexte strikt mit **separaten Profilen** (Privat/Arbeit/High-Risk) und halte Extensions minimal.
- Deaktiviere alle optionalen Cloud-/Konto-Funktionen (Sync, integrierte Dienste), die du nicht zwingend brauchst.
- Optional: WebRTC-IP-Handling und Website-Permissions restriktiv setzen (Pfad: Settings → Privacy and Security).  
**Abwägung:** höherer Pflegeaufwand; mehr Website-Breakage möglich.

</details>

## Features
- Integrierter Tracker-/Ad-Blocker (global + pro Seite, Listen verwaltbar)
- Sync (opt-in) mit verschlüsselten Einträgen + Metadaten
- Konto-2FA (TOTP oder Security Key) + Recovery Codes
- Privacy-Settings: Safe Browsing, Search Suggestions, Autofill, History-Retention, WebRTC
- Mehrere Profile für Kontexttrennung

## Alternativen
- Mozilla Firefox (Abwägung: Add-on-/Tuning-Aufwand vs. sehr flexible Engine- und Privacy-Anpassung)
- Chromium/Google Chrome (Abwägung: sehr breite Web-Kompatibilität vs. je nach Build mehr/andere Google-Integrationen)
- Brave (Abwägung: starke Standard-Blocklisten vs. eigenes Feature-/Ökosystem kann zusätzliche Optionen/Komplexität bringen)
- Tor Browser (Abwägung: Anonymitätsfokus vs. deutlich weniger Komfort/Performance möglich)

## Nicht gelöst / offene Punkte
- Keine klar benannte öffentliche **Subprozessoren-/DPA-Liste** für Browser-Metriken/Hosting gefunden (Stand: 2026-01-19).
- Aufbewahrung/Details für das **24h-Installations-Ping** (außer Crash-Stacktrace/Sync) sind nicht konkret beziffert.

## Quellen

- Mozilla Firefox (anderer Schwerpunkt: "Gecko-Engine + starkes Add-on-Ökosystem; Trade-off: Add-ons erhöhen Komplexität)
- Chromium/Google Chrome (anderer Schwerpunkt: "sehr breite Web-Kompatibilität; Trade-off: je nach Build mehr/andere Google-Integrationen)
- Brave (anderer Schwerpunkt: "aggressivere Standard-Blocklisten; Trade-off: eigenes Feature-/Ökosystem kann zusätzliche Oberfläche/Optionen bringen)
- Tor Browser (anderer Schwerpunkt: "Anonymitäts-/Anti-Fingerprinting-Design; Trade-off: deutlich weniger Komfort/Kompatibilität möglich)
- https://help.vivaldi.com/services/account/two-factor-authentication/
- [Vivaldi Browser Privacy Policy](https://vivaldi.com/privacy/browser/)
- [Sync Privacy Policy](https://vivaldi.com/privacy/sync/)
- [Vivaldi End User License Agreement](https://vivaldi.com/privacy/vivaldi-end-user-license-agreement/)
- [Security](https://vivaldi.com/security/)
- [Browser Third-Parties](https://vivaldi.com/privacy/browser-3rd-parties/)
- [Source Code](https://vivaldi.com/source/)
- [Privacy and Security Settings (Help)](https://help.vivaldi.com/desktop/privacy/privacy-settings/)
- [Block Trackers and Ads on desktop (Help)](https://help.vivaldi.com/desktop/privacy/tracking-and-ad-blocking/)
- [Report crashes on Windows (Help)](https://help.vivaldi.com/desktop/troubleshoot/reporting-crashes-on-windows/)
- [Register a new Vivaldi account (Help)](https://help.vivaldi.com/services/account/create-a-new-account/)
- [Two-Factor Authentication for Vivaldi accounts (Help)](https://help.vivaldi.com/services/account/two-factor-authentication/)
