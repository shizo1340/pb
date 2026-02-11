---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / /e/OS"
url: "/anbieter/e-os/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-12"
robots: "index,follow"
description: "Kurzprofil von /e/OS (Kategorie: Betriebssysteme)."
provider: ""
name: "/e/OS"
category: "Betriebssysteme"
website: "https://e.foundation/get-e-os/"
repo: "https://gitlab.e.foundation/e"
license: "GPL-3.0-or-later (zentrales Releases-Repo; einzelne Komponenten können andere OSS-Lizenzen nutzen)"
policies: ""
privacy: "https://e.foundation/de/legal-notice-privacy/"
terms: "https://murena.com/terms-conditions/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "partial"
self_host_possible: "yes"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Frankreich (e Foundation / Murena Retail SAS laut Legal Notice)"
region: "eu"
logs: "minimal"
retention: "unknown"
retention_notes: "Unklar (teilweise nur „minimum legal duration“ genannt)"
data_notes: "Keine App-Metadaten laut Anbieter; optionale Online-Dienste (Murena Workspace/Cloud). Drittanbieter-Kontakte u.a. Qwant/Spot (Suche), beaconDB (Lokalisierung), Google-Domains via microG (optional), Google Play API via App Lounge."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

/e/OS ist ein Anbieter aus der Kategorie **Betriebssysteme**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du ein Android-kompatibles System ohne Google-Standarddienste nutzen willst und optionale Cloud-/Account-Funktionen bewusst zuschalten möchtest.
- **Weniger geeignet wenn:** du auf Google-Ökosystem/Google-Integrationen (oder App-Kompatibilität via Google-Mechanismen) angewiesen bist und keinerlei Kontakte zu Google-Domains akzeptieren willst.
- **Wichtigster Abwägung:** App-Komfort/Kompatibilität (z.B. microG, App Lounge über Google Play API) vs. minimale Drittanbieter-Datenflüsse.

## Sofortmaßnahmen
- **Bildschirmsperre setzen** (PIN/Passwort): reduziert Risiko bei Geräteverlust (lokaler Zugriff).  
- **Standort-Modus prüfen** (z.B. „Gerät nur“ / Standort aus): reduziert Standort-Datenflüsse zu beaconDB.  
- **Advanced Privacy aktiv nutzen** (Blocklisten/Tracker pro App): reduziert Tracker-/Domain-Kontakte im App-Traffic.

## Entscheidungshilfe
- Wenn du **ohne Cloud-Identität** starten willst, dann nutze /e/OS **ohne Murena Workspace** (Abwägung: weniger Sync/Komfort für Mail/Kontakte/Kalender).  
- Wenn du **Sync-Funktionen** (Mail/Drive/Kalender) direkt im System willst, dann nutze **Murena Workspace oder Self-Hosted Cloud** (Abwägung: Remote-Server statt rein lokal).  
- Wenn du **Google-Domain-Kontakte minimieren** willst, dann vermeide/limitiere **microG** und sei vorsichtig mit **App Lounge (Google Play API)** (Abwägung: weniger App-Auswahl/Push-Kompatibilität).  
- Wenn du **Standortdaten sparsam** halten willst, dann setze Standort auf **„device only“/aus** und gib Standort nur selektiv frei (Abwägung: Navigation/Location-Features eingeschränkt).  
- Wenn du **Drittanbieter-Endpunkte transparent prüfen** willst, dann nutze die Dokumentation „Connections made by /e/OS“ als Ausgangspunkt (Abwägung: Seite ist als „Work in progress“ markiert).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | /e/OS |
| Kategorie | Betriebssysteme |
| Website | https://e.foundation/get-e-os/ |
| Quellcode | https://gitlab.e.foundation/e |
| Lizenz | GPL-3.0-or-later (zentrales Releases-Repo) |
| Preismodell | mixed (OS kostenlos; optional bezahlte Hardware/Cloud-Services) |
| Free Tier | yes (Murena Workspace: 1 GB kostenlos laut Anbieter) |
| Open Source | partial (laut Anbieter: überwiegend Open Source, aber mind. 1 proprietäre Default-App erwähnt) |
| Konto erforderlich | no (für OS); optional für Murena Workspace |
| Telefon erforderlich | no (für OS); bei Shop-Lieferung wird eine Telefonnummer gefordert |
| KYC erforderlich | no |
| Zahlungsabwicklung | Kredit-/Debitkarte, PayPal (Murena); Spenden u.a. PayPal/Patreon (e Foundation) |
| Jurisdiktion | Frankreich (e Foundation / Murena Retail SAS) |
| Logs | minimal (z.B. IP für OTA-Statistik genannt; weitere Details unklar) |
| Retention | Unklar (teilweise nur „minimum legal duration“ genannt) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://e.foundation/de/legal-notice-privacy/
- AGB/Terms: https://murena.com/terms-conditions/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Keine App-Metadaten laut Anbieter; optionale Online-Dienste (Murena Workspace/Cloud). Drittanbieter-Kontakte u.a. Qwant/Spot (Suche), beaconDB (Lokalisierung), Google-Domains via microG (optional), Google Play API via App Lounge.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - **Keine App-Metadaten** (keine Infos darüber, welche Apps du installierst/nutzt) laut Anbieter.  
  - **Suche:** Standard-Suchmaschine „Murena Find powered by Qwant“; in nicht unterstützten Regionen Weiterleitung zu „Spot“ (Metasuche) – dort: **IP-Adressen werden für die minimale rechtliche Dauer geloggt**.  
  - **Account Manager (wenn genutzt):** E-Mail-Adresse, Kontakte, Kalender-Events, Auth-Tokens; laut Anbieter **lokal auf dem Gerät** gespeichert (außer Auth/Sync zum jeweiligen Provider).  
  - **Lokalisierung:** Nutzung von **beaconDB**; dort können ungefähre Standortdaten + Umgebungsdaten (WLAN/Bluetooth/Cell) anfallen; IP kann kurzfristig verarbeitet werden.  
  - **OTA-Updates:** IP-Adresse wird für interne Statistik genannt (z.B. Land/Device-Varianten).  
  - **App Lounge:** kommerzielle Apps werden über **Google Play API** bezogen (Datenfluss zu Google-Infra möglich).  
  - **microG (optional):** Dokumentation nennt **Google-Domains**, wenn microG aktiviert ist.
- **Wofür:** Funktionsbereitstellung (Suche, Sync, Standort, Updates, App-Installation) + interne Statistik (OTA).  
- **Weitergabe/Subprozessoren:** Anbieter nennt u.a. Qwant/Spot, beaconDB; Murena Workspace basiert auf Nextcloud/OnlyOffice/Postfix (laut Anbieter). Eine vollständige öffentliche Subprozessorenliste ist nicht angegeben.  
- **Drittlandtransfer:** Nicht angegeben.  
- **Zahlungsabwicklung/Payment Processor:** Murena nennt Kredit-/Debitkarte und PayPal als Zahlungsmethoden; e Foundation nennt PayPal/Patreon für Spendenabwicklung.  
- **Kontakt/DSAR/DPA:** Kontakt über Anbieter-Kontaktformular genannt; spezifische DPA/Subprozessoren-Seite nicht angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar (keine zentrale Aussage zu Crash-Reports/Diagnosedaten in der Doku gefunden; nur konkrete Verbindungs-/Service-Flows dokumentiert).
- **Abschaltbar?** Unklar.
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** minimal (konkret genannt: IP für OTA-Statistik; Spot: IP-Logs „minimum legal duration“).
- **Aufbewahrung:** Unklar (keine konkrete Dauer genannt).
- **Lösch-/Opt-out-Optionen:**  
  - Standortdatenfluss reduzierbar über **Einstellungen → Standort** (aus / „device only“), laut Anbieter.  
  - Account-Manager-Daten lokal löschbar durch Entfernen des Accounts / App-Daten löschen (laut Anbieter).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:**  
  - Für Murena Workspace-/„eigenen /e/ Server“ nennt der Anbieter „Daten sind verschlüsselt“ (Details/Verfahren nicht spezifiziert).  
  - Für /e/OS (lokal am Gerät): konkrete Aussagen zur Gerätespeicher-Verschlüsselung sind in den Primärquellen hier nicht genannt.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben (es wird empfohlen, 2FA zu aktivieren – ohne klare Produktbeschreibung der Methode).
- **Recovery/Account-Wiederherstellung:** Unklar (OS ohne Konto; Workspace-Recovery-Details nicht zentral dokumentiert).
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben (kein öffentlicher SECURITY.md/Disclosure-Prozess gefunden).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (Screen Lock/PIN/Passwort) – auch ohne Cloud-Konto.  
   **Prüfen:** *Einstellungen → Sicherheit* zeigt aktive Bildschirmsperre.
2) **Auto-Lock/Timeout** sinnvoll setzen.  
   **Prüfen:** Timeout-Wert sichtbar, sperrt im Test zuverlässig.
3) **Analytics/Telemetry deaktivieren**, falls Schalter existiert.  
   **Prüfen:** *Einstellungen → (Privacy/Sicherheit/Entwickleroptionen)* zeigt dokumentierten Opt-out. *(falls vorhanden)*

**Stolpersteine:**
- **App Lounge (Google Play API):** App-Installation kann Kontakte zu Google-Infrastruktur bedeuten (Abwägung: App-Verfügbarkeit vs. Drittanbieter-Kontakte).
- **microG (optional):** kann Google-Domains kontaktieren (Abwägung: Push/Kompatibilität vs. Minimierung externer Requests).
- **Standort:** beaconDB erhält Standort-/Umgebungsdaten, wenn Standortfreigabe aktiv genutzt wird (Abwägung: Navigation/Komfort vs. Standort-Metadaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze /e/OS ohne Murena Workspace, solange du keinen Sync brauchst (Abwägung: weniger integrierter Komfort).
- Standort restriktiv: *Einstellungen → Standort* auf „aus“ oder „device only“ und App-Berechtigungen streng halten.
- App-Quellen bewusst wählen: Open-Source-Apps bevorzugt aus katalogbasierten Quellen; App Lounge sparsam nutzen (Abwägung: weniger App-Auswahl).

**Abwägung:** mehr manuelle Pflege (Backups, App-Auswahl, ggf. alternative Sync-Lösungen).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze getrennte Nutzerprofile/Arbeitsprofile (wenn dein Gerät/ROM das unterstützt), um Identitäten zu trennen.
- Deaktiviere/limitiere microG und reduziere System-Features, die externe Kontakte auslösen können (Abwägung: Push/Kompatibilität).
- Optional: Netzwerk-Firewall/Blocklisten nur mit dokumentierten Endpunkten (Abwägung: hoher Test-/Wartungsaufwand).

**Abwägung:** deutlicher Komfortverlust, höhere Komplexität und mögliches App-Breakage.

</details>

## Features
- De-googled Android-OS mit optionaler microG-Unterstützung (statt Google Play Services)
- „Advanced Privacy“: Domain-/Tracker-Blocklisten (Filterlisten von gitlab.e.foundation) und App-spezifische Kontrollen
- App Lounge: Installation von Apps ohne Konto (bezieht kommerzielle Apps über Google Play API)
- Optionale Murena Workspace-Integration (Nextcloud-basiert) oder Self-Hosting für Cloud-Sync

## Alternativen
- LineageOS (Abwägung: viel Eigenkonfiguration/Service-Auswahl, weniger integrierte Services)
- GrapheneOS (Abwägung: stärkerer Security-Fokus, eingeschränkte Gerätebasis)
- CalyxOS (Abwägung: andere Defaults/Service-Ansatz, Geräte-/Kompatibilitätsgrenzen je nach Modell)

## Nicht gelöst / offene Punkte
- Unklar: vollständige öffentliche Subprozessorenliste/DPA für Murena Workspace.
- Unklar: dokumentierte Telemetrie-/Crashreport-Schalter in /e/OS.
- Unklar: offizieller Security/Disclosure-Prozess (SECURITY.md/security.txt) als Primärquelle auffindbar.

## Quellen

- „Advanced Privacy“: "Domain-/Tracker-Blocklisten (Filterlisten von gitlab.e.foundation) und App-spezifische Kontrollen
- App Lounge: "Installation von Apps ohne Konto (bezieht kommerzielle Apps über Google Play API)
- LineageOS (Android-ROM ohne Google-Apps als Basis-Ansatz; Trade-off: "Eigenkonfiguration/Kompatibilität)
- GrapheneOS (Security-/Hardening-Fokus; Trade-off: "Geräte-/Kompatibilitätsgrenzen)
- CalyxOS (Privacy-orientiertes Android-ROM; Trade-off: "Fokus/Feature-Set unterscheidet sich)
- https://murena.com/terms-conditions/
- [Get /e/OS (Download/Installer)](https://e.foundation/get-e-os/)
- [Legal Notice & Privacy (e Foundation)](https://e.foundation/de/legal-notice-privacy/)
- [What’s /e/OS? (Docs)](https://doc.e.foundation/what-s-e)
- [Connections made by /e/OS (Docs)](https://doc.e.foundation/support-topics/e-os-connection-details)
- [App Lounge (Docs)](https://doc.e.foundation/support-topics/app_lounge)
- [Devices / Install-Hinweise (Docs)](https://doc.e.foundation/devices)
- [/e/OS Releases Repo (Lizenzangabe)](https://gitlab.e.foundation/e/os/releases)
- [Murena Terms and conditions (Zahlung/Accounts/Shop)](https://murena.com/terms-conditions/)
