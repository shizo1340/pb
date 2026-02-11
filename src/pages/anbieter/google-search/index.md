---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Google Search"
url: "/anbieter/google-search/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-14"
robots: "index,follow"
description: "Kurzprofil von Google Search (Kategorie: Suche)."
provider: ""
name: "Google Search"
category: "Suche"
website: "https://www.google.com/"
repo: "Nicht angegeben"
license: "Proprietär"
policies: ""
privacy: "https://policies.google.com/privacy?hl=de"
terms: "https://policies.google.com/terms?hl=de"
transparency: "https://transparencyreport.google.com/?hl=de"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "no"
self_host_possible: "no"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Irland (Vertragspartner im EWR/CH: Google Ireland Limited) + USA (Data Controller für in Search indexierte/angezeigte Informationen: Google LLC)"
region: "us"
logs: "unknown"
retention: "configurable"
retention_notes: "konfigurierbar (Aktivitätsdaten im Konto: manuell/Auto-Delete 3/18/36 Monate; weitere Aufbewahrung je Datentyp unterschiedlich)"
retention_max_days: "1080"
data_notes: "Suchanfragen und Nutzungsdaten können (je nach Einstellungen) im Google-Konto gespeichert und für Personalisierung/Verbesserung genutzt werden; auch ohne Konto werden Identifikatoren/Cookies eingesetzt."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Google Search ist ein Anbieter aus der Kategorie **Suche**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit ohne Ranking
- **Geeignet wenn:** du Google Search ohne Login nutzen willst und bereit bist, Cookies/Identifikatoren (je nach Consent) zu akzeptieren.
- **Weniger geeignet wenn:** du Suchnutzung mit möglichst wenig Metadaten und ohne zentrale Anbieter-Verknüpfung möchtest.
- **Wichtigster Abwägung:** Komfort/Personalisierung (Konto + Aktivitätsverlauf) vs. mehr Metadaten & mögliche Verknüpfung über Google-Dienste hinweg.

## Sofortmaßnahmen
- **Web- & App-Aktivität prüfen und Auto-Löschung setzen** (z.B. 3 Monate), um gespeicherte Konto-Aktivität zu begrenzen.
- **„Search customization“ deaktivieren**, wenn du ohne Google-Konto suchst, um Empfehlungen aus „recent search“ zu reduzieren.
- **Passkey oder 2-Schritt-Bestätigung aktivieren**, wenn du ein Google-Konto nutzt (reduziert Kontenübernahme-Risiko).

## Entscheidungshilfe
- Wenn du **ohne Konto** suchst, dann nutze Google Search **abgemeldet** und deaktiviere **Search customization** (Abwägung: weniger Komfort/„Weiterdenken“ aus letzter Suche).
- Wenn du **mit Konto** suchst und der Verlauf dich stört, dann **pausiere Web- & App-Aktivität** oder nutze **Auto-Delete 3/18/36 Monate** (Abwägung: weniger Personalisierung über Google-Dienste).
- Wenn du Suchergebnisse **standortbezogen** brauchst, dann beachte, dass Standortsignale u.a. über **IP/„general area“** einfließen können (Abwägung: Relevanz vs. zusätzliche Metadaten).
- Wenn du Google Search auf **geteilten Geräten** nutzt, dann verwende getrennte Browser-Profile oder private Fenster (Abwägung: mehr Einrichtung/Disziplin).
- Wenn du **zielgerichtete Angriffe** befürchtest, dann trenne Identität und Suche strikt (separates Profil/VM, kein Login) (Abwägung: deutlicher Komfortverlust).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Google Search |
| Kategorie | Suche |
| Website | https://www.google.com/ |
| Quellcode | Nicht angegeben |
| Lizenz | Proprietär |
| Preismodell | free |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend (kostenlos) |
| Jurisdiktion | Irland (EWR/CH-Vertragspartner) + USA (Search-Index/Data Controller) |
| Logs | unknown |
| Retention | konfigurierbar (Konto-Aktivität per Auto-Delete 3/18/36 Monate; sonst je Datentyp unterschiedlich) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: [Google Datenschutzerklärung](https://policies.google.com/privacy?hl=de)
- AGB/Terms: [Google-Nutzungsbedingungen](https://policies.google.com/terms?hl=de)
- Transparency Report: [Google Transparency Report](https://transparencyreport.google.com/?hl=de)
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Google beschreibt, dass Daten u.a. über **Aktivität (z.B. Suchen)**, **Geräte-/Browserdaten**, **IP-Adresse** sowie **Cookies/Identifikatoren** anfallen können. Aktivitätsdaten können im Google-Konto gespeichert, gelöscht oder automatisch gelöscht werden (je nach Einstellung).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** u.a. Suchanfragen/Aktivität (bei aktivierter Web- & App-Aktivität), technische Daten wie **IP-Adresse**, **Browser-/Geräte-Infos**, sowie **Cookies/ähnliche Identifikatoren** (auch ohne Login).
- **Wofür:** Bereitstellung der Suche, Verbesserung/Weiterentwicklung, Personalisierung (wenn aktiviert) sowie Sicherheits-/Missbrauchsprävention.
- **Weitergabe/Subprozessoren:** Google nennt externe Verarbeitung durch „trusted businesses/persons“ nach Weisung und mit Schutzmaßnahmen; eine produkt-spezifische Subprozessorenliste für Google Search wird in den genutzten Quellen nicht als eigene Seite aufgeführt.
- **Drittlandtransfer:** Google nennt weltweite Server/Verarbeitung außerhalb des Wohnsitzlandes und Verweise auf rechtliche Transfer-Frameworks.
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend (kostenlos).
- **Kontakt/DSAR/DPA:** Rechte- und Lösch-/Export-Optionen werden über Google-Konto-/My-Activity-Kontrollen beschrieben; Kontakt über Datenschutzkanäle in der Datenschutzerklärung.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar (abhängig von Konto-/Cookie-Einstellungen und Einwilligungen).
- **Abschaltbar?** Ja, über Aktivitätskontrollen (Web- & App-Aktivität) und bei abgemeldeter Nutzung über „Search customization“.
- **Wo (Menüpfad):**
  - **Web- & App-Aktivität:** Google-Konto → **Daten & Datenschutz** → **Verlaufseinstellungen** → **Web- & App-Aktivität**
  - **Search customization (ohne Login):** google.com (unten) → **Einstellungen** → **Sucheinstellungen** → **Search customization**

**Logs & Retention:**
- **Logging-Level:** unknown
- **Aufbewahrung:** Aktivitätsdaten im Konto bleiben grundsätzlich, bis du sie löschst oder Auto-Delete nutzt; Google nennt zusätzlich, dass andere Daten je nach Datentyp nach Frist gelöscht/anonymisiert werden können.
- **Lösch-/Opt-out-Optionen:** My Activity (manuell löschen), Web- & App-Aktivität pausieren, Auto-Delete (3/18/36 Monate), Search customization deaktivieren; Standort-„general area“/IP-bezogene Signale in Web- & App-Aktivität können automatisch nach 30 Tagen entfernt werden (laut Google-Hinweisen).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Google nennt Verschlüsselung **während der Übertragung**; Client-side/E2E für Google Search wird nicht als Feature beschrieben.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (für Websuche nicht relevant beschrieben).
- **MFA/2FA/Passkeys/Hardware-Keys:** Google-Konten unterstützen u.a. **Passkeys**, **2-Schritt-Bestätigung** und **Security Keys** (Hardware-Schlüssel).
- **Recovery/Account-Wiederherstellung:** Es gibt einen automatisierten Account-Recovery-Prozess (Fragen zur Bestätigung, Passwort-Reset).
- **Vuln-Handling / Security-Kontakt:** Sicherheitsmeldungen über **Google Bug Hunters / Vulnerability Reward Program**; AppSecurity-Seite verweist auf den Meldeweg.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Wenn du ein Google-Konto nutzt: Web- & App-Aktivität prüfen** (ein/aus) und ggf. **Auto-Delete** setzen.  
   **Prüfen:** My Activity zeigt aktuelle Aktivität + Auto-Delete ist sichtbar.
2) **Kontoschutz aktivieren** (Passkey oder 2-Schritt-Bestätigung), falls du eingeloggt suchst.  
   **Prüfen:** Google-Konto → Sicherheit zeigt „aktiv“ + Methode.
3) **Abgemeldet: Search customization deaktivieren**, wenn du keine „recent search“-Anpassung willst.  
   **Prüfen:** google.com → Einstellungen → Sucheinstellungen → Search customization = „aus“.

**Stolpersteine:**
- Auf **geteilten Geräten** kann Aktivität dem „Default Account“ bzw. dem aktiven Browserprofil zugeordnet werden (Abwägung: Multi-Account-Komfort vs. Vermischung).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Ohne Login** suchen und **Search customization aus** lassen; zusätzlich Browser so konfigurieren, dass Cookies/Storage stärker begrenzt werden.
- **Getrenntes Browser-Profil** nur für Suche (keine Google-Logins, keine Cross-Service-Sessions).
- **My Activity regelmäßig prüfen** (Filter „Search“) und alte Einträge löschen bzw. Auto-Delete kürzer wählen.
**Abwägung:** weniger Personalisierung; häufiger CAPTCHAs/Consent-Dialoge möglich.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Suche strikt **isolieren** (separate VM/Container oder dediziertes Browserprofil ohne Login, keine Syncs).
- **Netzwerk-/Identitäts-Trennung** (z.B. anderes Netz/anderer Browser-Stack), wenn Bedrohungsmodell das verlangt.
- Optional: Nur minimale Standortfreigaben/Permissions im Browser/OS.
**Abwägung:** deutlicher Komfortverlust, mehr Reibung (CAPTCHAs, weniger „smarte“ Vorschläge).

</details>

## Features
- My Activity: Suchverlauf ansehen, filtern und löschen
- Web- & App-Aktivität: Speichern pausieren + Auto-Löschung (3/18/36 Monate)
- Search customization (ohne Login): Empfehlungen aus jüngster Suche steuerbar
- Kontoschutz (Google-Konto): Passkeys/2-Schritt-Bestätigung/Security Keys

## Alternativen
- DuckDuckGo (weniger Personalisierung; Abwägung: andere Ergebnis-/Feature-Logik)
- Startpage (Google-Ergebnisse via Proxy; Abwägung: weniger Google-Konto-Integration)
- Brave Search (eigener Index; Abwägung: andere Abdeckung/Relevanzsignale)
- Qwant (EU-Fokus; Abwägung: andere Abdeckung je Thema)
- SearXNG (Metasuche/self-hostbar möglich; Abwägung: eigener Betrieb + Instanz-Vertrauen)

## Nicht gelöst / offene Punkte
- Konkrete Zahlen zur **Aufbewahrung von serverseitigen Logs** (außer Aktivitätsdaten im Konto) sind nicht als feste Frist je Log-Typ zusammengefasst.

## Quellen

- My Activity: "Suchverlauf ansehen/löschen
- Web- & App-Aktivität: "Speichern pausieren + Auto-Löschung
- Kontoschutz: "Passkeys/2-Schritt-Bestätigung/Security Keys (Google-Konto)
- DuckDuckGo (weniger Personalisierung; Trade-off: "andere Ergebnis-/Feature-Logik)
- Startpage (Google-Ergebnisse via Proxy; Trade-off: "weniger Google-Konto-Integration)
- Brave Search (eigener Index; Trade-off: "andere Abdeckung/Relevanzsignale)
- Qwant (EU-Fokus; Trade-off: "andere Abdeckung je Thema)
- SearXNG (Metasuche/self-hostbar möglich; Trade-off: "eigener Betrieb + Instanz-Vertrauen)
- https://transparencyreport.google.com/?hl=de
- [Google Datenschutzerklärung](https://policies.google.com/privacy?hl=de)
- [Google Datenschutzerklärung (EU/EN, PDF)](https://www.gstatic.com/policies/privacy/pdf/20251211/mfsjkv52/google_privacy_policy_en_eu.pdf)
- [Google-Nutzungsbedingungen](https://policies.google.com/terms?hl=de)
- [Your data in Search](https://myaccount.google.com/intro/yourdata/search)
- [Find & erase your Google Search history](https://support.google.com/websearch/answer/6096136?co=GENIE.Platform%3DDesktop&hl=en)
- [Find & control your Web & App Activity](https://support.google.com/websearch/answer/54068?co=GENIE.Platform%3DAndroid&hl=en)
- [Delete your activity](https://support.google.com/accounts/answer/465?co=GENIE.Platform%3DAndroid&hl=en)
- [How Google uses location information](https://policies.google.com/technologies/location-data?hl=en-GB)
- [Create a Passkey to Log Into Your Google Account](https://www.google.com/account/about/passkeys/)
- [Use a security key for 2-Step Verification](https://support.google.com/accounts/answer/6103523?co=GENIE.Platform%3DAndroid&hl=en)
- [How to recover your Google Account or Gmail](https://support.google.com/accounts/answer/7682439?hl=en)
- [Report a security vulnerability in a Google-owned product](https://bughunters.google.com/report)
- [About Google's App Security](https://about.google/company-info/appsecurity/)
- [Google Transparency Report](https://transparencyreport.google.com/?hl=de)
