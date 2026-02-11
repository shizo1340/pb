---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / LocalCDN"
url: "/anbieter/localcdn/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-17"
robots: "index,follow"
description: "Kurzprofil von LocalCDN (Kategorie: Adblock & Tracking)."
provider: ""
name: "LocalCDN"
category: "Adblock & Tracking"
website: "https://www.localcdn.org/"
repo: "https://codeberg.org/nobody/LocalCDN"
license: "Nicht angegeben"
policies: ""
privacy: "https://www.localcdn.org/privacy"
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
jurisdiction: "Nicht angegeben (Website nennt Serverstandort: Deutschland)"
region: "unknown"
logs: "none"
retention: "unknown"
retention_notes: "5d (Website-Serverlogs, laut Privacy Policy); Add-on: Nicht angegeben"
data_notes: "Add-on arbeitet lokal: ersetzt CDN-Requests durch lokale Kopien. Einstellungen werden laut Tutorial im Browser-Local-Storage gespeichert; Synchronisation über Firefox Sync oder eigenen Sync-Server möglich. Optional: HTML-Filter kann integrity/crossorigin-Attribute entfernen (Trade-off: Funktion vs. Sicherheits-Checks)."
features: ""
alternatives: ""
payment_processors: "Buy Me a Coffee, Open Collective (Spenden, optional)"
sources: ""
---
## Kurzprofil

LocalCDN ist ein Anbieter aus der Kategorie **Adblock & Tracking**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Third-Party-CDN-Anfragen (z.B. für bekannte JS/CSS-Bibliotheken) reduzieren willst, ohne dafür manuell Listen zu pflegen.
- **Weniger geeignet wenn:** du Browser-Erweiterungen mit tiefen Eingriffen in Requests grundsätzlich vermeiden willst oder nur mit sehr kleinen, klar begrenzten Berechtigungen arbeiten möchtest.
- **Wichtigster Abwägung:** weniger externe CDN-Requests vs. mögliche Seiteneffekte (Breakage) und die Entscheidung, ob du Sicherheitsmechanismen wie Subresource Integrity per Filter umgehst.

## Sofortmaßnahmen
- **HTML-Filter nur bei Bedarf aktivieren:** erhöht Ersetzungsquote, kann aber SRI/CORS-Schutz abschwächen.
- **„Block requests for missing resources“ vorsichtig nutzen:** kann Tracking-Anfragen verhindern, aber Seiten kaputt machen.
- **Probleme zuerst per Site-Disable lösen:** statt global Einstellungen zu drehen, erst LocalCDN für die betroffene Website deaktivieren.

## Entscheidungshilfe
- Wenn du externe CDN-Anfragen reduzieren willst, dann nutze LocalCDN im Default-Modus (Abwägung: nicht jede Seite lässt sich ersetzen, z.B. wegen CSP/SRI/Service Worker).
- Wenn eine Seite wegen Ersetzungen „kaputt“ wirkt, dann deaktiviere LocalCDN für diese Website (Abwägung: dort wieder externe CDN-Requests).
- Wenn SRI/CORS die Ersetzung verhindert, dann aktiviere den HTML-Filter (Abwägung: integrity/crossorigin werden entfernt, Sicherheits-Checks werden umgangen).
- Wenn du Tracking-Anfragen auch für unbekannte Ressourcen vermeiden willst, dann aktiviere „Block requests for missing resources“ (Abwägung: höhere Breakage-Wahrscheinlichkeit).
- Wenn du Einstellungen auf mehreren Geräten identisch brauchst, dann nutze Firefox Sync (Abwägung: Einstellungen liegen dann im Sync-Ökosystem deines Browsers).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | LocalCDN |
| Kategorie | Adblock & Tracking |
| Website | https://www.localcdn.org/ |
| Quellcode | https://codeberg.org/nobody/LocalCDN |
| Lizenz | Nicht angegeben |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Buy Me a Coffee, Open Collective (Spenden, optional) |
| Jurisdiktion | Nicht angegeben (Website nennt Serverstandort: Deutschland) |
| Logs | none |
| Retention | 5d (Website-Serverlogs, laut Privacy Policy); Add-on: Nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.localcdn.org/privacy
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Add-on arbeitet lokal: ersetzt CDN-Requests durch lokale Kopien. Einstellungen werden laut Tutorial im Browser-Local-Storage gespeichert; Synchronisation über Firefox Sync oder eigenen Sync-Server möglich. Optional: HTML-Filter kann integrity/crossorigin-Attribute entfernen (Abwägung: Funktion vs. Sicherheits-Checks).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Website-Serverlogs (IP-Adresse, Zeitstempel, Request-URL, Statuscode, Referer, User-Agent) laut Privacy Policy; Add-on-Datenverarbeitung/Telemetrie wird auf der Website nicht als eigener Datenfluss beschrieben.
- **Wofür:** Website-Logs laut Anbieter für DDoS-/Fehlerfälle; Standard: ungesehen löschen.
- **Weitergabe/Subprozessoren:** Nicht angegeben.
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Spenden über Buy Me a Coffee und Open Collective (optional).
- **Kontakt/DSAR/DPA:** Kontakt per E-Mail (PGP-Key auf Kontaktseite); DSAR/DPA nicht angegeben (typisch bei Add-ons ohne Konto nicht relevant).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Für die Website: keine Cookies/Analyse/Tracking laut Privacy Policy; für das Add-on: nicht angegeben.
- **Abschaltbar?** Add-on-Telemetrie nicht angegeben; Website-Logs sind serverseitig.
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** none
- **Aufbewahrung:** Website-Serverlogs max. 5 Tage laut Privacy Policy; Add-on: nicht angegeben.
- **Lösch-/Opt-out-Optionen:** Website: keine Client-Speicherung laut Privacy Policy; Add-on: Einstellungen lassen sich über Browser → Add-ons/Erweiterungen → LocalCDN → „Daten löschen“ entfernen (Browser-Funktion).

**Abwägung am Punkt:** Weniger externe Requests kann Diagnose/Support vereinfachen; zusätzliche Block-/Filterfunktionen können Breakage erhöhen und machen Fehlersuche aufwendiger.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht anwendbar (kein Konto/Vault); Funktion ist Request-Rewrite auf lokale Dateien.
- **KDF/Parameter/Schlüsselableitung:** Nicht anwendbar.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht anwendbar (kein Konto).
- **Recovery/Account-Wiederherstellung:** Nicht anwendbar; Einstellungen sind lokal im Browser gespeichert und können via Sync repliziert werden.
- **Vuln-Handling / Security-Kontakt:** Kontakt via E-Mail (mit PGP-Key) ist angegeben; dedizierter Security/Disclosure-Prozess ist nicht auf der Website beschrieben.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Standard-Redirects nutzen und nur bei Problemen anpassen.**  
   **Wo:** Browser → Add-ons/Erweiterungen → LocalCDN → **Einstellungen/Options**.  
   **Prüfen:** Badge/Indikator zeigt lokale Ersetzungen auf Testseiten.
2) **Site-spezifisch deaktivieren, wenn Seiten brechen.**  
   **Prüfen:** Nach Disable lädt die Seite normal; Abwägung ist wieder externe CDN-Anfrage.
3) **HTML-Filter aus lassen, bis er wirklich nötig ist** (Firefox-Feature).  
   **Prüfen:** Schalter bleibt aus; nur aktivieren, wenn SRI/CORS die Ersetzung verhindert.

**Stolpersteine:**
- HTML-Filter entfernt integrity/crossorigin-Attribute (Abwägung: Kompatibilität vs. Sicherheits-Checks durch SRI/CORS).
- CSP/Service Worker können Ersetzungen verhindern; laut Testseite ist dann Deaktivieren für die Website eine Option (Abwägung: Funktion vs. weniger Eingriffe).

<details>
<summary>Profil B (Datensparsam)</summary>

- Aktiviere „Block requests for missing resources“ nur, wenn du Breakage tolerieren kannst und bewusst testen willst.
- Nutze Sync nur, wenn du die Einstellungen wirklich geräteübergreifend brauchst (Abwägung: Bequemlichkeit vs. zusätzliche Metadaten im Browser-Sync-Ökosystem).
- Halte den HTML-Filter deaktiviert und nutze ihn nur punktuell.

**Abwägung:** mehr manuelle Ausnahmen/Debugging, weniger „automatisch funktioniert überall“.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze LocalCDN in einem separaten Browser-Profil, getrennt von deinem normalen Surf-Profil.
- HTML-Filter deaktiviert lassen; wenn eine Seite ohne Filter nicht funktioniert, eher auf Ersetzung verzichten (Site-Disable).
- Verzichte auf aggressives Blocken unbekannter Ressourcen, wenn du Stabilität brauchst (oder teste nur in isolierter Umgebung).

**Abwägung:** weniger Komfort, mehr Aufwand durch Profiltrennung und manuelle Entscheidungen pro Website.

</details>

## Features
- Lokale CDN-Emulation: bekannte Bibliotheken/Assets werden aus dem Add-on geliefert
- Option „HTML filter“ (Firefox): entfernt integrity/crossorigin-Attribute für mehr Trefferquote
- Option „Block requests for missing resources“ (kann Seiten beeinflussen)
- Test-Seiten zur Funktionsprüfung
- Konfiguration über Browser-Speicher; optional Sync über Firefox Sync

## Alternativen
- Decentraleyes (ähnliches Ziel: lokale CDN-Emulation; Abwägung: Umfang/Regelset unterscheidet sich je nach Projektstand)
- uBlock Origin (Blocken statt Ersetzen; Abwägung: weniger Komfort bei „fällt automatisch zurück“, aber anderes Kontrollmodell)

## Nicht gelöst / offene Punkte
- Add-on-spezifische Aussagen zu möglichen Remote-Endpunkten/Update-Mechanismen sind auf der Website nicht klar dokumentiert.

## Quellen

- Lokale CDN-Emulation: "bekannte Bibliotheken/Assets werden aus dem Add-on geliefert
- Option „HTML filter“ (Firefox): "entfernt integrity/crossorigin-Attribute für mehr Trefferquote
- Decentraleyes (ähnliches Ziel: "lokale CDN-Emulation; Trade-off: Umfang/Regelset unterscheidet sich je nach Projektstand)
- uBlock Origin (Blocken statt Ersetzen; Trade-off: "weniger Komfort bei „fällt automatisch zurück“, aber anderes Kontrollmodell)
- https://www.localcdn.org/thanks
- [LocalCDN (Website)](https://www.localcdn.org/)
- [LocalCDN Tutorial](https://www.localcdn.org/tutorial)
- [LocalCDN Privacy Policy](https://www.localcdn.org/privacy)
- [LocalCDN Testing Utility](https://www.localcdn.org/test)
- [LocalCDN Testing Utility – Domain-Check](https://www.localcdn.org/test/check)
- [LocalCDN Contact](https://www.localcdn.org/contact)
- [LocalCDN Thanks](https://www.localcdn.org/thanks)
