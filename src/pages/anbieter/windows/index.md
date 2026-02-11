---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Windows"
url: "/anbieter/windows/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-11"
robots: "index,follow"
description: "Kurzprofil von Windows (Kategorie: Betriebssysteme)."
provider: ""
name: "Windows"
category: "Betriebssysteme"
website: "https://www.microsoft.com/windows"
repo: "Nicht angegeben"
license: "Proprietär (Microsoft Software License Terms)"
policies: ""
privacy: "https://privacy.microsoft.com/en-us/privacystatement"
terms: "https://www.microsoft.com/de-de/Useterms/Retail/Windows/11/UseTerms_Retail_Windows_11_German.htm"
transparency: "https://www.microsoft.com/en-us/corporate-responsibility/reports/transparency-report"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "no"
self_host_possible: "no"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA"
region: "us"
logs: "configurable"
retention: "unknown"
retention_notes: "Nicht angegeben (Lösch-/Reset-Optionen für Diagnosedaten vorhanden)"
data_notes: "Windows nutzt verpflichtende und optionale Diagnosedaten sowie „Connected Experiences“; der genaue Datenfluss hängt stark von Edition, Setup-Optionen und aktivierten Cloud-Funktionen ab."
features: ""
alternatives: ""
payment_processors: "Nicht angegeben (variiert nach Kaufkanal, z.B. OEM/Handel/Microsoft Store)"
sources: ""
---
## Kurzprofil

Windows ist ein Anbieter aus der Kategorie **Betriebssysteme**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du hohe App-/Treiber-Kompatibilität brauchst und Windows-Features (Update-Ökosystem, Windows Hello, BitLocker/Device Encryption je nach Edition) nutzen willst.
- **Weniger geeignet wenn:** du ein Betriebssystem mit minimalen Standard-Datenflüssen/Cloud-Abhängigkeiten suchst (Windows hat verpflichtende Diagnosedaten und diverse „Connected Experiences“).
- **Wichtigster Abwägung:** Kompatibilität & Komfortfunktionen vs. **Diagnosedaten/Online-Dienste** (Metadaten, Geräte- und Nutzungsinformationen).

## Sofortmaßnahmen
- **Optional Diagnostic Data deaktivieren** → reduziert zusätzliche Geräte-/Nutzungsdiagnostik (Abwägung: weniger Detaildaten für Problemdiagnose).
- **„Tailored experiences“ + Werbe-/Empfehlungs-Schalter aus** → weniger personalisierte Tipps/Angebote (Abwägung: weniger „smarte“ Vorschläge).
- **Microsoft-Konto-Features minimieren** (falls möglich: lokales Konto / Sync sparsam) → weniger Account-Verknüpfung (Abwägung: weniger Komfort bei Sync/Recovery).

## Entscheidungshilfe
- Wenn du **Windows 11 Home** neu installierst, dann plane ein **Microsoft-Konto + Internet** fürs Einrichtung ein (Abwägung: stärkere Kontobindung).  
- Wenn du **Diagnosedaten minimieren** willst, dann lasse nur **Required diagnostic data** aktiv und deaktiviere **Optional diagnostic data** (Abwägung: weniger Detail-Telemetrie für Support/Analyse).  
- Wenn du **Vollverschlüsselung** möchtest, dann aktiviere **Device Encryption/BitLocker** (Abwägung: Recovery-Key-Handling, editions- und hardwareabhängig).  
- Wenn du **Online-Features** wie personalisierte Inhalte vermeiden willst, dann deaktiviere **Tailored experiences / Advertising ID / Empfehlungen** (Abwägung: weniger Personalisierung).  
- Wenn du **High-Risk-Workflows** hast, dann nutze getrennte Konten/VMs und blocke nur mit dokumentierten Endpunkten (Abwägung: höherer Aufwand, mögliche Funktionsbrüche).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Windows |
| Kategorie | Betriebssysteme |
| Website | https://www.microsoft.com/windows |
| Quellcode | Nicht angegeben |
| Lizenz | Proprietär (Microsoft Software License Terms) |
| Preismodell | paid |
| Free Tier | no |
| Open Source | no |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben (variiert nach Kaufkanal, z.B. OEM/Handel/Microsoft Store) |
| Jurisdiktion | USA |
| Logs | configurable |
| Retention | Nicht angegeben (Lösch-/Reset-Optionen für Diagnosedaten vorhanden) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://privacy.microsoft.com/en-us/privacystatement
- AGB/Terms: https://www.microsoft.com/de-de/Useterms/Retail/Windows/11/UseTerms_Retail_Windows_11_German.htm
- Transparency Report: https://www.microsoft.com/en-us/corporate-responsibility/reports/transparency-report
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Windows nutzt verpflichtende und optionale Diagnosedaten sowie „Connected Experiences“; der genaue Datenfluss hängt stark von Edition, Einrichtung-Optionen und aktivierten Cloud-Funktionen ab.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** u.a. **Required diagnostic data** (Geräteinformationen/Settings/Update-Fähigkeit, Basiszustand) und optional **Optional diagnostic data** (mehr Detaildiagnostik). Weitere Datenflüsse entstehen durch aktivierte „Connected Experiences“ und einzelne Privacy-Schalter (z.B. Advertising ID / Tailored experiences).
- **Wofür:** laut Microsoft u.a. Sicherheit, Updates, Troubleshooting und Produktverbesserungen; „Tailored experiences“ können personalisierte Tipps/Empfehlungen auf Basis der Diagnosedaten liefern.
- **Weitergabe/Subprozessoren:** in der Microsoft Privacy Statement allgemein beschrieben (Dienstleister/Partner je nach Service); eine **Windows-spezifische, öffentliche Subprocessor-Liste** ist nicht zentral ausgewiesen.
- **Drittlandtransfer:** laut Privacy Statement kann Verarbeitung/Storage länderübergreifend erfolgen (je nach Service/Region).
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (Windows-Lizenzkauf hängt vom Kanal ab).
- **Kontakt/DSAR/DPA:** Privacy Dashboard & Privacy-Anlaufstellen von Microsoft (Self-Service je nach Konto/Service).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Ja: **Required diagnostic data** (Minimum). Optionales Level ist abhängig von Einstellung/Edition.
- **Abschaltbar?** Optionales Diagnosedaten-Level: ja (Schalter). Required: als Minimum beschrieben.
- **Wo (Menüpfad):** **Einstellungen → Datenschutz & Sicherheit → Diagnose & Feedback**

**Logs & Retention:**
- **Logging-Level:** configurable
- **Aufbewahrung:** Nicht angegeben (Microsoft nennt Zwecke/Arten; konkrete Zeiträume sind nicht als eine einfache „X Tage“-Angabe zusammengefasst).
- **Lösch-/Opt-out-Optionen:** u.a. „Diagnosedaten löschen“ (lokal/geräteseitig) und Privacy Dashboard (konto-/serviceabhängig).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** **Device Encryption** bzw. **BitLocker** (editions-/hardwareabhängig) für Datenträger/Device; kein „E2E“ im Messenger-Sinn.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (OS-weit nicht als „ein KDF“ beschreibbar).
- **MFA/2FA/Passkeys/Hardware-Keys:** **Windows Hello** (PIN/Biometrie) und **Security Keys** (FIDO2) als Anmeldeoptionen je nach Einrichtung/Provider.
- **Recovery/Account-Wiederherstellung:** bei Laufwerksverschlüsselung ist Recovery-Key-Management relevant (z.B. bei BitLocker).
- **Vuln-Handling / Security-Kontakt:** Microsoft Security Response Center (MSRC) als Meldeweg für Sicherheitslücken.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Windows Hello einrichten** (PIN + optional Biometrie).  
   **Prüfen:** **Einstellungen → Konten → Anmeldeoptionen** zeigt aktive Methode.
2) **Geräte-/Laufwerksverschlüsselung aktivieren** (wenn verfügbar: Device Encryption/BitLocker).  
   **Prüfen:** Status „Ein“ + Recovery-Key sicher dokumentiert.
3) **Optional diagnostic data deaktivieren** und „Tailored experiences“ ausschalten.  
   **Prüfen:** **Einstellungen → Datenschutz & Sicherheit → Diagnose & Feedback** zeigt Schalter „Aus“.

**Stolpersteine:**
- **Microsoft-Konto/Cloud-Sync** erhöht Identitätsbindung (Abwägung: Komfort/Recovery vs. Metadaten).
- Manche Härtungen (z.B. Endpoint-Blocking/Policies) können Windows-Features beeinträchtigen (Abwägung: Funktion vs. Datenminimierung).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **lokales Konto**, sofern deine Edition/Einrichtung das zulässt; halte Microsoft-Konto-Funktionen minimal.
- Deaktiviere zusätzlich: **Advertising ID**, app-basierte Empfehlungen/Angebote, unnötige Connected Experiences (nur wenn du die Folgen akzeptierst).
- Installiere **Diagnostic Data Viewer** nur bei Bedarf (Transparenz) und entferne ihn danach wieder, wenn du keine lokale Diagnose brauchst.  
**Abwägung:** weniger Komfort (Sync, Store-Integration), mehr Eigenaufwand.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne Arbeitskontexte strikt (separate Windows-Profile/VMs, kein „Alles in einem“).
- Reduziere Online-Services aggressiv (Connected Experiences/Cloud-Features nur gezielt), Updates trotzdem planbar halten.
- Optional: Netzwerk-Restriktionen nur anhand dokumentierter Endpunkte/Policies testen (sonst bricht Update/Defender schnell).  
**Abwägung:** deutlich mehr Komplexität, mehr Risiko für Funktionsabbrüche.

</details>

## Features
- **Diagnosedaten-Steuerung (Required/Optional)** inkl. Dokumentation und Transparenz-Tools (Diagnostic Data Viewer).
- **Privacy-Schalter** für Advertising ID / Tailored experiences / Empfehlungen (Windows-Einstellungen).
- **Windows Hello & Security-Key-Anmeldung** (je nach Geräte-/Account-Einrichtung).
- **Geräte-/Laufwerksverschlüsselung** via Device Encryption/BitLocker (editions-/hardwareabhängig).

## Alternativen
- **macOS:** anderer Abwägung: Apple-Ökosystem & Hardwarebindung vs. integrierte Services/Plattformkontrolle.
- **Linux-Distributionen:** anderer Abwägung: mehr Kontrolle/Transparenz im System vs. App-/Treiber-/Gaming-Kompatibilität.
- **Qubes OS:** anderer Abwägung: starke Isolation (Security-Modell) vs. hoher Hardwarebedarf und Einrichtung-/Alltagsaufwand.

## Nicht gelöst / offene Punkte
- Öffentliche, **Windows-Consumer-spezifische** Subprocessor-/DPA-Übersicht ist nicht zentral auffindbar.

## Quellen

- macOS (anderer Trade-off: "Apple-Ökosystem/Hardwarebindung vs. integrierte Services)
- Linux-Distributionen (anderer Trade-off: "mehr Kontrolle/Customizing vs. App-/Treiber-Kompatibilität)
- Qubes OS (anderer Trade-off: "Isolation/Komplexität vs. Alltagstauglichkeit)
- Windows: "Diagnostics, feedback, and privacy
- [Microsoft Privacy Statement](https://privacy.microsoft.com/en-us/privacystatement)
- [Windows 11 Specifications (Microsoft)](https://www.microsoft.com/windows/windows-11-specifications)
- [Windows 11 requirements (Microsoft Support)](https://support.microsoft.com/windows/windows-11-system-requirements)
- [Diagnostics, feedback, and privacy in Windows (Microsoft Support)](https://support.microsoft.com/windows/diagnostics-feedback-and-privacy-in-windows)
- [Windows Privacy Compliance Guide (Microsoft Learn)](https://learn.microsoft.com/windows/privacy/windows-privacy-compliance-guide)
- [General privacy settings in Windows (Microsoft Support)](https://support.microsoft.com/windows/general-privacy-settings-in-windows)
- [Recommendations & offers settings (Microsoft Support)](https://support.microsoft.com/windows/recommendations-and-offers-settings-in-windows)
- [Optional diagnostic data for Windows (Microsoft Support)](https://support.microsoft.com/windows/optional-diagnostic-data-for-windows)
- [Microsoft Transparency Report](https://www.microsoft.com/en-us/corporate-responsibility/reports/transparency-report)
- [Microsoft Software License Terms – Windows 11 (DE)](https://www.microsoft.com/de-de/Useterms/Retail/Windows/11/UseTerms_Retail_Windows_11_German.htm)
- [MSRC Reporting Portal](https://msrc.microsoft.com/report/)
