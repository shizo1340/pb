---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / ClearURLs"
url: "/anbieter/clearurls/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-09"
robots: "index,follow"
description: "Kurzprofil von ClearURLs (Kategorie: Adblock & Tracking)."
provider: ""
name: "ClearURLs"
category: "Adblock & Tracking"
website: "https://clearurls.xyz/"
repo: "https://github.com/ClearURLs/Addon"
license: "LGPL-3.0-only"
policies: ""
privacy: "https://addons.mozilla.org/de/firefox/addon/clearurls/privacy/"
terms: "Nicht angegeben"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Nicht angegeben"
region: "unknown"
logs: "configurable"
retention: "unknown"
retention_notes: "lokal bis gelöscht (nicht angegeben)"
data_notes: "Laut Datenschutzerklärung keine Nutzungsdaten/Analytics; Verbindung zu Remote-Servern nur für Regel-Updates (Rules- und Hash-Datei); Update-Adresse kann in den Einstellungen ersetzt werden."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

ClearURLs ist ein Anbieter aus der Kategorie **Adblock & Tracking**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Tracking-Parameter in Links automatisch entfernen willst (z.B. `utm_*`) und das direkt im Browser passieren soll.
- **Weniger geeignet wenn:** du jede Netzwerkverbindung von Add-ons vermeiden willst (ClearURLs lädt Regel-Updates remote nach) oder du sehr restriktiv mit Add-on-Rechten bist.
- **Wichtigster Abwägung:** **aktuelle, externe Regel-Updates vs. zusätzliche Netzwerk-Anfragen/Abhängigkeit von Update-Infrastruktur**.

## Sofortmaßnahmen
- **Logging deaktiviert lassen** (oder nach Debugging wieder aus): reduziert lokal gespeicherte Verlauf-/Debug-Daten.
- **Regel-Update-URL prüfen** (rules1/rules2) und nur ändern, wenn du die Quelle kontrollierst: vermeidet ungewollte Update-Pfade.
- **Referral-Marketing deaktiviert lassen** (Default): verhindert, dass bestimmte Affiliate-/Referral-Parameter absichtlich stehen bleiben.

## Entscheidungshilfe
- Wenn du Links häufig teilst (Chats, Tickets, E-Mails), dann nutze ClearURLs zum automatischen Bereinigen (Abwägung: Add-on braucht weitreichende Browser-Permissions).
- Wenn du möglichst wenig externe Kommunikation willst, dann prüfe die Regel-Update-Quelle und erwäge eine eigene Update-Adresse (Abwägung: du musst die Regelquelle selbst betreiben/vertrauen).
- Wenn dir Debugging wichtig ist, dann aktiviere Logging nur kurzfristig und exportiere Logs gezielt (Abwägung: lokale Logdaten können sensible URLs enthalten).
- Wenn eine Website nach dem Bereinigen Probleme macht, dann orientiere dich an „Excluded Fields“ bzw. reduziere Eingriffe (Abwägung: mehr Tracking-Parameter bleiben ggf. erhalten).
- Wenn du History-API-Manipulationen von Websites verhindern willst, dann lasse die entsprechende Schutzfunktion aktiv; wenn dich das stört, schalte sie ab (Abwägung: URLs können nachträglich wieder „verschmutzt“ werden).  

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | ClearURLs |
| Kategorie | Adblock & Tracking |
| Website | https://clearurls.xyz/ |
| Quellcode | https://github.com/ClearURLs/Addon |
| Lizenz | LGPL-3.0-only |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Nicht angegeben |
| Logs | configurable |
| Retention | lokal bis gelöscht (nicht angegeben) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://addons.mozilla.org/de/firefox/addon/clearurls/privacy/
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Laut Datenschutzerklärung sammelt ClearURLs keine Nutzungsdaten und hat keine Analytics-Hooks. Eine Remote-Verbindung wird laut Anbieter nur für Updates der Regel- und Hash-Datei genutzt; die Update-Adresse kann in den Einstellungen ersetzt werden.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Datenschutzerklärung **keine Nutzungsdaten** („We do not collect any of your usage data“).  
- **Wofür:** Die einzige genannte Remote-Kommunikation ist **das Aktualisieren der Rule-Datei und der zugehörigen Hash-Datei**.  
- **Weitergabe/Subprozessoren:** Hosting/Distribution der Rule-Dateien erfolgt laut Anbieter über GitLab-/GitHub-Infrastruktur (gitlab.io/github.io); rules1/rules2 sind laut Anbieter CNAMEs.  
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (Spenden/Support-Optionen sind möglich, aber kein Zahlungsdienst im Privacy-Text genannt).
- **Kontakt/DSAR/DPA:** Nicht angegeben (kein Konto/keine personenbezogene Registrierung beschrieben).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Datenschutzerklärung: **keine Analytics/Telemetry** („no analytic hooks“).  
- **Abschaltbar?** Nicht zutreffend (keine Telemetrie beschrieben).
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** configurable (Logging-Funktion ist dokumentiert; Storage wird u.a. für „logs“ genutzt).  
- **Aufbewahrung:** lokal bis gelöscht (konkrete Dauer nicht angegeben).
- **Lösch-/Opt-out-Optionen:** Logs/Settings können exportiert werden; Details zur Löschung im UI nicht beschrieben.

**Abwägung am Punkt:** Weniger lokale Logs reduziert sensible Debug-Daten; mehr Logs erleichtert Fehlersuche und Support.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben (Browser-Addon ohne Account- oder Cloud-Mechanik in den Quellen beschrieben).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (kein Konto erforderlich).
- **Recovery/Account-Wiederherstellung:** Nicht zutreffend (kein Konto).
- **Vuln-Handling / Security-Kontakt:** Im GitHub-Quellcode ist **keine SECURITY.md/Security Policy** hinterlegt (Security Overview).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (2FA/MFA), falls angeboten.  
   **Prüfen:** Nicht zutreffend (kein Konto erforderlich).
2) **Auto-Lock/Timeout** sinnvoll setzen.  
   **Prüfen:** Nicht zutreffend (Browser-Addon; nutze stattdessen Browser-/OS-Lockscreen).
3) **Analytics/Telemetry deaktivieren**, falls Schalter existiert.  
   **Prüfen:** Laut Datenschutzerklärung keine Analytics/Telemetry vorhanden; optionales Logging prüfen.

**Stolpersteine:**
- Regelbasierte Bereinigung kann einzelne Services stören (Abwägung: weniger Tracking-Parameter vs. potenzielle Kompatibilitätsprobleme).
- Optionales Logging kann lokal sensible URLs enthalten (Abwägung: Debugging vs. lokale Datenmenge).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Logging strikt aus** lassen und nur kurzzeitig aktivieren, wenn du ein konkretes Problem debuggen musst.  
- **Regel-Update-Quelle bewusst wählen:** Standard belassen oder auf eigene Update-Adresse umstellen, wenn du die Rule-Datei selbst hostest.  
- **History-API-Schutz bewusst konfigurieren:** wenn dich URL-Umschreibungen nach Seitenladezeit stören, prüfe die Option zum De-/Aktivieren (Abwägung: weniger nachträgliche Manipulation vs. evtl. mehr Nebenwirkungen).

**Abwägung:** mehr Eigenverantwortung bei Kompatibilität/Fehleranalyse, weniger lokale Debug-Daten.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Separates Browser-Profil** nur für risikoreiche Nutzung (z.B. isolierte Extensions/keine weiteren Add-ons).  
- **Netzwerk-Härtung nur mit dokumentierten Endpunkten:** wenn du Regel-Updates begrenzen willst, blocke/erlaube gezielt die Rule-Update-Domains (Abwägung: ohne Updates sinkt Abdeckung).  
- **Permissions prüfen:** wenn `<all_urls>`/`webRequestBlocking` für dein Threat-Model nicht passt, ist ein reduzierter Ansatz ggf. sinnvoll (Abwägung: weniger Eingriff = weniger Wirkung).

**Abwägung:** hoher Aufwand und mögliche Funktionsverluste (z.B. weniger aktuelle Regeln).

</details>

## Features
- Entfernt Tracking-Parameter aus URLs (regelbasiert).
- Kann bestimmte Redirect-Varianten umgehen (regelbasiert).
- Integriertes Cleaning Tool zum Nachbereinigen/Prüfen.
- Optionales Logging; Export von Logs/Settings möglich.
- Kontextmenü-Funktion zum Kopieren bereinigter Links.

## Alternativen
- Neat URL (parameter-spezifisch; weniger Eingriff, ggf. weniger Abdeckung).
- Skip Redirect (Fokus auf Redirect-Umschreibungen statt Parameterlisten).
- Pure URL (parameter-spezifisch wie utm_*; begrenzter Umfang).
- Don't Track Me Google (site-spezifisch; nur Google).

## Nicht gelöst / offene Punkte
- Jurisdiktion/Verantwortliche Stelle ist nicht klar ausgewiesen.
- Es gibt keine veröffentlichte SECURITY.md/Security Policy im Repo (Stand: 2026-01-05).


## Quellen

- [Firefox Add-ons: "Datenschutzerklärung für ClearURLs](https://addons.mozilla.org/de/firefox/addon/clearurls/privacy/)
- [ClearURLs Docs: "Similar Addons](https://docs.clearurls.xyz/1.27.3/further_readings/similar_addons/)
- [GitHub: "Security Overview (kein SECURITY.md)](https://github.com/ClearURLs/Addon/security)
- [Firefox Add-ons: ClearURLs (Beschreibung, Lizenz, Links)](https://addons.mozilla.org/de/firefox/addon/clearurls/)
- [Firefox Add-ons: Datenschutzerklärung für ClearURLs](https://addons.mozilla.org/de/firefox/addon/clearurls/privacy/)
- [ClearURLs Docs: Permissions](https://docs.clearurls.xyz/1.26.1/permissions/)
- [ClearURLs Docs: FAQ](https://docs.clearurls.xyz/1.27.3/faq/)
- [ClearURLs Docs: Rule Catalogs](https://docs.clearurls.xyz/1.27.3/specs/rules/)
- [ClearURLs Docs: Similar Addons](https://docs.clearurls.xyz/1.27.3/further_readings/similar_addons/)
- [GitHub: Security Overview (kein SECURITY.md)](https://github.com/ClearURLs/Addon/security)
