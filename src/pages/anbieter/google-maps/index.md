---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Google Maps"
url: "/anbieter/google-maps/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-14"
robots: "index,follow"
description: "Kurzprofil von Google Maps (Kategorie: Karten & Navigation)."
provider: ""
name: "Google Maps"
category: "Karten & Navigation"
website: "https://www.google.com/maps"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://policies.google.com/privacy?hl=de"
terms: "https://policies.google.com/terms?hl=de"
transparency: "https://transparencyreport.google.com/"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "no"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Irland (EWR: Google Ireland Limited, laut Google Terms)"
region: "eu"
logs: "configurable"
retention: "configurable"
retention_notes: "konfigurierbar (Auto-Delete 3/18/36 Monate für Aktivitätsdaten; teils zusätzliche Kürzung, z.B. IP/Device-Location nach 30 Tagen in „Aktivität löschen“ erwähnt)"
retention_max_days: "1080"
data_notes: "Google Maps ist eng mit dem Google-Konto verknüpft: je nach Konto-Einstellungen können Suchanfragen, Routen/Navigation, Standortverlauf (Timeline) und weitere Nutzungsdaten gespeichert, automatisch gelöscht oder pausiert werden. Einige Funktionen (z.B. Timeline, Teilen des Standorts) erfordern Login."
features: ""
alternatives: ""
payment_processors: "Nicht angegeben (Endnutzer-Version ist kostenfrei)"
sources: ""
---
## Kurzprofil

Google Maps ist ein Anbieter aus der Kategorie **Karten & Navigation**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Navigation/Orte nutzen willst und bereit bist, Google-Konto- und Standort-Einstellungen aktiv zu prüfen und zu begrenzen.
- **Weniger geeignet wenn:** du möglichst wenig Standort- und Nutzungsmetadaten bei einem zentralen Konto bündeln willst (auch wenn du Features wie Timeline/Standort teilen brauchst).
- **Wichtigster Abwägung:** Komfort (Personalisierung, Timeline, Sync) vs. **Standort-/Bewegungsmetadaten** und Konto-Verknüpfung.

## Sofortmaßnahmen
- **Maps Inkognitomodus aktivieren** → verhindert, dass Suchanfragen/Navigation in dieser Sitzung im Google-Konto gespeichert werden.
- **Standortverlauf (Timeline) pausieren oder Auto-Delete setzen** → reduziert langfristige Bewegungsdaten im Konto.
- **Web- & App-Aktivitäten auf Auto-Delete (z.B. 3 Monate) stellen** → verkürzt Aufbewahrung von Aktivitätsdaten.

## Entscheidungshilfe
- Wenn du **Timeline/Orte-Verlauf nicht brauchst**, dann pausiere den Standortverlauf (Abwägung: weniger Komfort bei „Wo war ich?“/automatischen Vorschlägen).
- Wenn du **Maps aktiv nutzt, aber weniger Konto-Spuren willst**, dann nutze den **Inkognitomodus** für einzelne Suchen/Wege (Abwägung: weniger Personalisierung/History in der Sitzung).
- Wenn du **Standort teilen** nutzt, dann prüfe die Empfänger:innen und Dauer regelmäßig (Abwägung: Komfort/Abstimmung vs. fortlaufende Standortfreigabe).
- Wenn du **Such-/Routen-Historie** im Konto haben willst, dann nutze **Auto-Delete** statt „für immer“ (Abwägung: weniger Rückblick/Bequemlichkeit).
- Wenn du **ohne Login** arbeitest, dann nutze Maps ohne Konto (Abwägung: weniger Sync/gespeicherte Orte/Timeline-Funktionen).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Google Maps |
| Kategorie | Karten & Navigation |
| Website | https://www.google.com/maps |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | free |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben (Endnutzer-Version ist kostenfrei) |
| Jurisdiktion | Irland (EWR: Google Ireland Limited, laut Google Terms) |
| Logs | configurable |
| Retention | konfigurierbar (Auto-Delete 3/18/36 Monate; teils zusätzliche Kürzung genannt) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://policies.google.com/privacy?hl=de
- AGB/Terms: https://policies.google.com/terms?hl=de
- Transparency Report: https://transparencyreport.google.com/
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Google Maps speichert je nach Konto-Einstellungen Aktivitätsdaten (z.B. Suchen, Routen) und optional Standortverlauf (Timeline). Inkognitomodus kann das Speichern im Konto für eine Sitzung verhindern; Standort teilen ist separat steuerbar.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Google Privacy Policy können u.a. Aktivitätsdaten (Nutzung von Apps/Services), Geräte-/Browserdaten und Standortinformationen anfallen; für Maps konkret z.B. **Maps-Aktivität** (Suchen/Interaktionen) und optional **Timeline/Standortverlauf** (je nach Einstellung).
- **Wofür:** Bereitstellung der Dienste, Personalisierung/Verbesserung, Sicherheit/Schutz vor Missbrauch (laut Privacy Policy und Konto-Einstellungen/Activity Controls).
- **Weitergabe/Subprozessoren:** Privacy Policy beschreibt Weitergabe mit Zustimmung, an Dienstleister/Partner für Verarbeitung sowie rechtliche Anforderungen; eine öffentliche, Maps-spezifische Subprozessoren-Liste ist nicht eindeutig ausgewiesen.
- **Drittlandtransfer:** Privacy Policy beschreibt globale Verarbeitung/Serverstandorte als Teil der Dienstbereitstellung (Details abhängig von Google).
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (Endnutzer-Version ist kostenfrei).
- **Kontakt/DSAR/DPA:** Privacy Policy verweist auf Google-Konto-Tools (z.B. Aktivitätsverwaltung/Löschen) und Kontakt-/Rechteinformationen.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Abhängig von Google-Konto-Einstellungen (insb. „Web- & App-Aktivitäten“ / „Maps-Aktivität“); Timeline/Standortverlauf ist separat steuerbar.
- **Abschaltbar?** Teilweise: Aktivitäts-Speicherung kann pausiert und über Auto-Delete begrenzt werden; Inkognitomodus reduziert Konto-Speicherung in der Sitzung.
- **Wo (Menüpfad):**  
  - **Maps App:** Profilbild → **Inkognitomodus aktivieren**  
  - **Maps App:** Profilbild → **Meine Zeitachse (Timeline)** → Einstellungen/Datenschutz (je nach Plattform)  
  - **Google-Konto:** **Daten & Datenschutz** → **Verlaufseinstellungen** → Web- & App-Aktivitäten / Standortverlauf

**Logs & Retention:**
- **Logging-Level:** configurable
- **Aufbewahrung:** konfigurierbar (Auto-Delete 3/18/36 Monate für Aktivitätsdaten, plus manuelles Löschen einzelner Einträge/Zeiträume). In Google-Konto-Hilfen wird zudem beschrieben, dass bestimmte Informationen (z.B. IP-Adresse und Geräte-Standort) nach 30 Tagen aus Aktivitäts-Einträgen entfernt werden können.
- **Lösch-/Opt-out-Optionen:** Aktivität löschen (einzeln/Zeiträume), Auto-Delete setzen, Timeline pausieren, Inkognitomodus nutzen.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Für Timeline wird in Google-Hilfen beschrieben, dass ein **Backup der Timeline verschlüsselt** auf Googles Servern gespeichert werden kann (falls Backup aktiviert ist). Allgemeine E2E-Verschlüsselung für Maps-Inhalte wird in den genutzten Quellen nicht als Standard beschrieben.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Google beschreibt **2-Faktor-Authentifizierung** und **Passkeys** für Google-Konten in den Kontohilfen.
- **Recovery/Account-Wiederherstellung:** Konto- und Gerätezugriff sind zentral (Abwägung: Konto-Recovery vs. zusätzliche Daten/Verknüpfung).
- **Vuln-Handling / Security-Kontakt:** Google stellt mit „Bug Hunters / VRP“ einen offiziellen Meldeweg bereit.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (2-Faktor/Passkey), falls du Maps mit Google-Konto nutzt.  
   **Prüfen:** Google-Konto → Sicherheit → 2-Faktor/Passkeys als „aktiv“ sichtbar.
2) **Auto-Delete für Aktivität setzen** (z.B. 3 Monate), falls Verlauf aktiv bleiben soll.  
   **Prüfen:** Google-Konto → Daten & Datenschutz → Verlaufseinstellungen → Auto-Delete aktiv.
3) **Inkognitomodus für einzelne Suchen/Wege nutzen**, wenn du keine Sitzungsspuren im Konto willst.  
   **Prüfen:** Maps-App zeigt deutlich „Inkognitomodus“ an.

**Stolpersteine:**
- „Inkognito“ reduziert Konto-Speicherung, ersetzt aber nicht die Notwendigkeit, dass für Navigation/Orte Daten verarbeitet werden (Abwägung: Funktionalität vs. Metadaten).
- Standort teilen kann unbemerkt weiterlaufen, wenn Dauer/Empfänger:innen nicht regelmäßig geprüft werden.

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze Google Maps **ohne Login**, wenn Sync/Timeline nicht benötigt wird (Abwägung: weniger Komfort, keine kontoübergreifenden Verläufe/Listen).
- Pausiere **Standortverlauf (Timeline)** und nutze Inkognitomodus gezielt (Abwägung: weniger Personalisierung/History).
- Lösche **Maps-Aktivität** regelmäßig bzw. setze Auto-Delete kurz (Abwägung: weniger Rückblick bei Suchen/Routen).

**Abwägung:** mehr manuelle Pflege (Löschen/Prüfen), weniger Komfort.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne Nutzung strikt: dediziertes Geräte-/Profil-Konzept (z.B. getrennte Browserprofile) und minimaler Login nur wenn nötig.  
- Vermeide Timeline und Standort teilen; nutze Inkognitomodus für Ad-hoc-Suchen.  
- Prüfe Konto-Verlaufseinstellungen nach App-Updates erneut (Abwägung: maximaler Aufwand, mögliche Funktionsverluste).

**Abwägung:** deutlicher Komfortverlust, höhere Komplexität.

</details>

## Features
- Karten & Navigation (Routenplanung, Verkehr, Orte)
- Google Maps Timeline (Standortverlauf/Orte – per Konto steuerbar)
- Inkognitomodus in der Maps-App (Sitzung ohne Speichern im Konto)
- Standort teilen (mit steuerbarer Dauer/Personen)
- Maps-Aktivitäten löschen (einzeln/Zeiträume) + Auto-Delete über Google-Konto

## Alternativen
- OpenStreetMap-basierte Apps (z.B. Organic Maps, OsmAnd) — Abwägung: oft mehr Offline/On-Device, dafür je nach App weniger „Live“-Funktionen/Integrationen
- Apple Karten — Abwägung: stärker an Apple-Ökosystem gebunden
- [HERE WeGo](/anbieter/here-wego/) – Abwägung: anderer Daten-/Account-Fokus, je nach Nutzung weniger Google-Integration

## Nicht gelöst / offene Punkte
- Unklar, ob Google eine **öffentliche Subprozessoren-/Drittempfänger-Liste** speziell für Google Maps (Consumer) bereitstellt.
- Unklar, ob die **Google-Maps-App eigene Diagnosedaten/Crash-Telemetrie** getrennt von Konto-Aktivitäten erhebt und wie granular das steuerbar ist.

## Quellen

- OpenStreetMap-basierte Apps (z.B. Organic Maps, OsmAnd) — Trade-off: "oft mehr Offline/On-Device, dafür je nach App weniger „Live“-Funktionen/Integrationen
- Apple Karten — Trade-off: "stärker an Apple-Ökosystem gebunden
- HERE WeGo — Trade-off: "anderer Daten-/Account-Fokus, je nach Nutzung weniger Google-Integration
- https://bughunters.google.com/report/vrp
- [Google Maps (Produktseite)](https://www.google.com/maps)
- [Google Privacy Policy](https://policies.google.com/privacy?hl=de)
- [Google Terms of Service](https://policies.google.com/terms?hl=de)
- [Google Maps Additional Terms of Service](https://www.google.com/help/terms_maps.html)
- [Inkognitomodus in Google Maps verwenden](https://support.google.com/maps/answer/6258979)
- [So schützt Google deine Timeline-Daten](https://support.google.com/maps/answer/14169977)
- [Google Maps Timeline verwalten (Android)](https://support.google.com/maps/answer/7257797)
- [Standort teilen in Google Maps verwalten](https://support.google.com/maps/answer/15437054)
- [Maps-Aktivität verwalten](https://support.google.com/maps/answer/7257797)
- [Aktivität in Ihrem Google-Konto löschen](https://support.google.com/accounts/answer/9872064?hl=de)
- [Auto-Delete für Google-Konto-Aktivitäten](https://support.google.com/accounts/answer/6096136)
- [2-Faktor-Authentifizierung aktivieren (Google-Konto)](https://support.google.com/accounts/answer/185839?co=GENIE.Platform%3DDesktop&hl=de)
- [Mit Passkey statt Passwort anmelden](https://support.google.com/accounts/answer/13548313?hl=en)
- [Google Bug Hunters – Vulnerability Report](https://bughunters.google.com/report/vrp)
