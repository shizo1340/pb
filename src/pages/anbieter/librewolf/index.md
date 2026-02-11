---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / LibreWolf"
url: "/anbieter/librewolf/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-17"
robots: "index,follow"
description: "Kurzprofil von LibreWolf (Kategorie: Browser)."
provider: ""
name: "LibreWolf"
category: "Browser"
website: "https://librewolf.net/"
repo: "https://gitlab.com/librewolf-community"
license: "MPL-2.0"
policies: ""
privacy: "https://librewolf.net/privacy-policy/"
terms: "https://librewolf.net/license-disclaimers/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Nicht angegeben (Community-Projekt)"
region: "unknown"
logs: "none"
retention: "unknown"
data_notes: "LibreWolf ist ein Community-Fork von Firefox mit Fokus auf Privacy/Security. Laut Anbieter sind Telemetrie/Datensammlung deaktiviert; der Browser setzt stark auf Tracking-/Fingerprinting-Schutz (u.a. RFP, dFPI/Total Cookie Protection, uBlock Origin). Einschränkungen sind möglich (z.B. WebGL/DRM/Safe-Browsing-Trade-offs)."
features: ""
alternatives: ""
payment_processors: "Nicht angegeben (laut FAQ werden keine Spenden akzeptiert)"
sources: ""
---
## Kurzprofil

LibreWolf ist ein Anbieter aus der Kategorie **Browser**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen Firefox-basierten Browser mit **harten Privacy-Defaults** (Anti-Tracking/Anti-Fingerprinting) und ohne Konto nutzen willst.
- **Weniger geeignet wenn:** du maximale Website-Kompatibilität ohne Nacharbeit erwartest oder Features brauchst, die bewusst entschärft/abgeschaltet sind (Abwägungen wie WebGL/DRM/Safe-Browsing).
- **Wichtigster Abwägung:** mehr Schutz gegen Tracking/Fingerprinting vs. **mehr „Site-Breakage“/Manuell-Whitelisting** und teilweise weniger Komfort.

## Sofortmaßnahmen
- **Updates konsequent aktuell halten** (OS/Package-Manager/WinUpdater): reduziert Risiko durch bekannte Browser-Schwachstellen.
- **Add-ons minimal halten** (uBO ist bereits da): weniger zusätzliche Angriffsfläche und weniger individuelles Fingerprinting.
- **`librewolf.overrides.cfg` nutzen** für feste, portable Einstellungen: macht Härtung reproduzierbar (Abwägung: mehr Initialaufwand).

## Entscheidungshilfe
- Wenn du **kein Konto** und keine Browser-Sync-Identität willst, dann nutze LibreWolf „as-is“ (Abwägung: Sync/Recovery/Komfortfunktionen liegen bei dir).
- Wenn dir **Kompatibilität wichtiger** ist als maximale Anti-Fingerprinting-Defaults, dann lockere einzelne Defaults gezielt (Abwägung: mehr Trackbarkeit).
- Wenn du **Third-Party-Skripte hart kontrollieren** willst, dann nutze uBlock Origin „Medium Mode“ (Abwägung: mehr manuelle Freigaben pro Website).
- Wenn du **DNS-Leaks/Provider-Logging** reduzieren willst, dann entscheide bewusst über DoH (Abwägung: zentrale DoH-Provider-Logs vs. Klartext-DNS im Netz).
- Wenn du **Einstellungen sauber versionieren** willst, dann setze Overrides statt Klick-Konfiguration (Abwägung: du musst .cfg-Datei pflegen).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | LibreWolf |
| Kategorie | Browser |
| Website | https://librewolf.net/ |
| Quellcode | https://gitlab.com/librewolf-community |
| Lizenz | MPL-2.0 |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben (laut FAQ werden keine Spenden akzeptiert) |
| Jurisdiktion | Nicht angegeben (Community-Projekt) |
| Logs | none |
| Retention | Nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://librewolf.net/privacy-policy/
- AGB/Terms: https://librewolf.net/license-disclaimers/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
LibreWolf beschreibt sich als Firefox-Fork mit deaktivierter Telemetrie und ohne eigene Datenerhebungs-Infrastruktur. Gleichzeitig wird eingeräumt, dass nicht in jedem Fall garantiert werden kann, dass der Browser *gar keine* Daten zu Mozilla oder Dritten sendet.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Privacy Policy erhebt LibreWolf **keine Nutzerdaten** im Browser oder auf der Website; es wird aber erwähnt, dass nicht immer garantiert werden kann, dass keinerlei Daten zu Mozilla/Dritten gesendet werden.
- **Wofür:** Privacy/Security-Defaults und „no data collection“ als Projektziel; Details zu deaktivierten Firefox-Komponenten sind in der Feature-Liste beschrieben.
- **Weitergabe/Subprozessoren:** Nicht angegeben (kein Konto-/Cloud-Dienst dokumentiert).
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (laut FAQ keine Spendenannahme).
- **Kontakt/DSAR/DPA:** Nicht angegeben (kein Anbieter-Konto/kein DPA-Modell dokumentiert).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Features: Telemetrie ist deaktiviert (u.a. Crash-Report, Normandy, Studies, personalisierte Empfehlungen).
- **Abschaltbar?** Nicht nötig (laut Anbieter bereits deaktiviert); einzelne Defaults können per Settings/Overrides angepasst werden.
- **Wo (Menüpfad):** Für Änderungen: Einstellungen + `about:config` oder `librewolf.overrides.cfg` (Docs „Settings and Overrides“).

**Logs & Retention:**
- **Logging-Level:** none
- **Aufbewahrung:** Nicht angegeben
- **Lösch-/Opt-out-Optionen:** Cookies/Website-Daten werden laut Features standardmäßig beim Schließen gelöscht (abschaltbar).

**Abwägung am Punkt:** Weniger Telemetrie vereinfacht Privacy, kann aber Debugging/Support erschweren (z.B. weniger Diagnoseinfos bei Crashes).

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben (Browser-Software; keine E2E-Cloud-Funktion dokumentiert).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angeboten (kein Konto erforderlich).
- **Recovery/Account-Wiederherstellung:** Nicht zutreffend (kein Konto).
- **Vuln-Handling / Security-Kontakt:** Security-Issues per E-Mail an `security-issues@librewolf.net`, mit PGP-Key und Fingerprint-Prüfung; kein Bug-Bounty laut Security-Seite.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Updates sauber einrichten** (je nach Plattform).  
   **Windows:** Installer kann „LibreWolf WinUpdater“ mitbringen → dort „Schedule a task for automatic update checks…“ aktivieren.  
   **Prüfen:** Updates werden regelmäßig erkannt/angeboten.
2) **DoH bewusst setzen** (nicht „einfach so“ aktivieren).  
   **Wo:** Einstellungen → Datenschutz & Sicherheit → „Enable DoH using“ → *Off* / *Increased protection*.  
   **Prüfen:** DoH-Status ist sichtbar und entspricht deiner Entscheidung.
3) **Cookie-Löschung beim Schließen beibehalten** (Default) und nur gezielt ausnehmen.  
   **Prüfen:** Nach Neustart sind Cookies/Website-Daten nicht mehr vorhanden (Test mit einer Dummy-Seite).

**Stolpersteine:**
- Strenge Defaults (RFP/WebGL/Tracking-Schutz) können Seiten kaputt machen (Abwägung: Schutz vs. Kompatibilität).
- Zusätzliche Add-ons erhöhen Angriffsfläche und können dein Fingerprinting verschlechtern (Abwägung: Funktion vs. Eindeutigkeit).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze `librewolf.overrides.cfg`, um Änderungen reproduzierbar zu machen (Docs nennen Pfade für Linux/macOS/Windows).
- Halte uBlock Origin aktiv und nutze bei Bedarf „Medium Mode“ (Abwägung: mehr manuelle Freigaben pro Website).
- Vermeide große Add-on-Sets und passe nur das Nötigste an (Abwägung: weniger Komfort, weniger Individualität).

**Abwägung:** mehr Pflegeaufwand und mehr „Site-Breakage“, aber weniger Tracking-/Fingerprinting-Flächen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze getrennte Browser-Profile/OS-User oder VM für klar getrennte Identitäten (Abwägung: hoher Aufwand).
- Erlaube keine Add-ons in privaten Fenstern, außer zwingend nötig (Abwägung: weniger Komfort).
- Vermeide Workarounds, die Anti-Fingerprinting aushebeln (Abwägung: manche Seiten funktionieren schlechter).

**Abwägung:** maximale Trennung/Härtung kostet Alltagstauglichkeit und erhöht Komplexität.

</details>

## Features
- Telemetry/Experimente/Studien deaktiviert (laut Features/Privacy Policy)
- uBlock Origin vorinstalliert + angepasste Filterlisten
- Tracking Protection: Strict + URL-Tracking-Parameter entfernen
- dFPI / Total Cookie Protection aktiviert
- RFP (Resist Fingerprinting) standardmäßig aktiv
- Cookies/Website-Daten beim Schließen löschen (Default, abschaltbar)
- WebGL standardmäßig deaktiviert (Fingerprinting-Abwägung)
- Override-Datei `librewolf.overrides.cfg` für reproduzierbare Härtung
- Security-Report per E-Mail (PGP-Key) dokumentiert

## Alternativen
- Firefox (Browser; Abwägung: Standard-Funktionen/Komfort vs. mehr Default-Features/Datenerfassung je nach Einstellungen)
- Tor Browser (Browser; Abwägung: Anonymitäts-/Uniformitätsfokus vs. Performance/Kompatibilität)
- Mullvad Browser (Browser; Abwägung: Anti-Fingerprinting-Defaults vs. mögliche Site-Breakage)

## Nicht gelöst / offene Punkte
- Kein Transparency Report und kein Warrant Canary dokumentiert.

## Quellen

- Tracking Protection: "Strict + URL-Tracking-Parameter entfernen
- Firefox (Browser; Trade-off: "Standard-Funktionen/Komfort vs. mehr Default-Features/Datenerfassung je nach Einstellungen)
- Tor Browser (Browser; Trade-off: "Anonymitäts-/Uniformitätsfokus vs. Performance/Kompatibilität)
- Mullvad Browser (Browser; Trade-off: "Anti-Fingerprinting-Defaults vs. mögliche Site-Breakage)
- https://gitlab.com/librewolf-community/browser/source
- [LibreWolf (Startseite)](https://librewolf.net/)
- [Privacy Policy](https://librewolf.net/privacy-policy/)
- [License and Disclaimers](https://librewolf.net/license-disclaimers/)
- [Docs: Features](https://librewolf.net/docs/features/)
- [Docs: FAQ](https://librewolf.net/docs/faq/)
- [Docs: Settings and `librewolf.overrides.cfg`](https://librewolf.net/docs/settings/)
- [Docs: Recommended Addons](https://librewolf.net/docs/addons/)
- [Docs: Report a Security Issue](https://librewolf.net/docs/security/)
- [Installation (Übersicht)](https://librewolf.net/installation/)
- [Installation: Windows (WinUpdater)](https://librewolf.net/installation/windows/)
- [GitLab: Browser Source (Lizenz: MPL-2.0)](https://gitlab.com/librewolf-community/browser/source)
