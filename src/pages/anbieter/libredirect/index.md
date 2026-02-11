---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / LibRedirect"
url: "/anbieter/libredirect/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-17"
robots: "index,follow"
description: "Kurzprofil von LibRedirect (Kategorie: Browser Addon)."
provider: ""
name: "LibRedirect"
category: "Browser Addon"
website: "https://libredirect.github.io/"
repo: "https://github.com/libredirect/browser_extension"
license: "GPL-3.0-only"
policies: ""
privacy: "https://raw.githubusercontent.com/libredirect/browser_extension/master/Privacy-Policy.md"
terms: "Nicht angegeben"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "partial"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Nicht angegeben"
region: "unknown"
logs: "none"
retention: "unknown"
data_notes: "Laut Privacy Policy werden keine Daten gesammelt; Redirects laufen lokal. Ausnahmen: Reverse-Geocoding über OSM Nominatim für Maps-Redirects sowie Abruf von Icon/Instanzlisten (standardmäßig GitHub, optional Codeberg/aus)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

LibRedirect ist ein Anbieter aus der Kategorie **Browser Addon**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Links zu großen Plattformen automatisch auf alternative Frontends umleiten willst, ohne dafür Accounts auf den Originaldiensten zu nutzen.
- **Weniger geeignet wenn:** du Browser-Add-ons mit weitreichenden Berechtigungen (z.B. „all websites“) grundsätzlich vermeiden willst.
- **Wichtigster Abwägung:** Komfort durch automatische Redirects vs. Vertrauen in Add-on-Berechtigungen und die (öffentlichen) Ziel-Instanzen.

## Sofortmaßnahmen
- Deaktiviere Redirects für Dienste, die du nie nutzt (reduziert Angriffsfläche und ungewollte Redirects).
- Stelle bevorzugte Instanzen (oder eigene) ein statt „zufällig“ zu nutzen (Abwägung: Aufwand/Verfügbarkeit vs. Vertrauen).
- Meide als „Cloudflare“ markierte Instanzen, wenn du TLS-Termination durch Dritte vermeiden willst (Abwägung: Performance/Verfügbarkeit).

## Entscheidungshilfe
- Wenn du nur wenige Dienste umleiten willst, dann aktiviere nur diese Redirects (Abwägung: weniger Automatisierung, aber weniger Eingriffsfläche).
- Wenn du öffentliche Instanzen nutzt, dann rechne damit, dass deine IP/Metadaten beim jeweiligen Instanzbetreiber landen (Abwägung: Bequemlichkeit vs. Vertrauensmodell).
- Wenn du maximale Kontrolle willst, dann nutze eigene/vertrauenswürdige Instanzen und setze sie als „bevorzugt“ (Abwägung: Einrichtung-/Wartungsaufwand).
- Wenn du Umleitungen für Embeds brauchst, dann aktiviere Embed-Redirects gezielt (Abwägung: Funktion vs. mögliches Fingerprinting-Risiko, da Embeds standardmäßig bewusst zurückhaltend behandelt werden).
- Wenn du Maps-Redirects nutzt, dann beachte die zusätzliche Anfrage für Reverse-Geocoding (Abwägung: Komfort vs. zusätzlicher Drittrequest).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | LibRedirect |
| Kategorie | Browser Addon |
| Website | https://libredirect.github.io/ |
| Quellcode | https://github.com/libredirect/browser_extension |
| Lizenz | GPL-3.0-only |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Patreon, Open Collective (Spenden) |
| Jurisdiktion | Nicht angegeben |
| Logs | none |
| Retention | Nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://raw.githubusercontent.com/libredirect/browser_extension/master/Privacy-Policy.md
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Laut Privacy Policy werden keine Daten gesammelt; Redirects laufen lokal. Ausnahmen: Reverse-Geocoding über OSM Nominatim für Maps-Redirects sowie Abruf von Icon/Instanzlisten (standardmäßig GitHub, optional Codeberg/aus).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Privacy Policy: „Nothing“ (keine Datensammlung durch LibRedirect selbst).
- **Wofür:** Redirects funktionieren lokal; zusätzliche Requests können je nach Feature auftreten (z.B. Reverse-Geocoding für Maps).
- **Weitergabe/Subprozessoren:** Nicht als „Subprozessoren“ gelistet; genannt werden externe Endpunkte für bestimmte Funktionen (OSM Nominatim; Abruf von Icon/Instanzlisten).
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Spenden über Patreon und Open Collective (keine Pflichtzahlung).
- **Kontakt/DSAR/DPA:** Kontaktmöglichkeiten (Matrix, Fediverse, E-Mail) sind auf der Kontaktseite angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nicht angegeben als Telemetrie; laut Privacy Policy keine Datensammlung.
- **Abschaltbar?** Instanzlistenabruf kann laut Privacy Policy alternativ von Codeberg kommen oder „not at all“ (Option muss in den Einstellungen geprüft werden).
- **Wo (Menüpfad):** Browser → Add-on/Extension → LibRedirect → Optionen/Einstellungen (Bezeichnungen je nach Browser).

**Logs & Retention:**
- **Logging-Level:** none
- **Aufbewahrung:** Nicht angegeben (LibRedirect speichert Einstellungen lokal im Browser; serverseitige Logs werden nicht genannt).
- **Lösch-/Opt-out-Optionen:** Add-on-Daten lassen sich üblicherweise über Browser → Add-ons → Speicher/Daten löschen; Instanzlisten-Abruf laut Policy optional deaktivierbar.

**Abwägung am Punkt:** Weniger externe Requests (z.B. ohne Instanzlistenabruf) kann Komfort/Auto-Auswahl einschränken; mehr Komfort kann zusätzliche Metadatenflüsse erzeugen.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht anwendbar (kein Konto, keine Vault-Datenbank); Redirect-Logik läuft lokal.
- **KDF/Parameter/Schlüsselableitung:** Nicht anwendbar.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht anwendbar (kein Konto).
- **Recovery/Account-Wiederherstellung:** Nicht anwendbar (Einstellungen sind Browser-lokal; Backup über Browser-Profil/Sync je nach Browser).
- **Vuln-Handling / Security-Kontakt:** Kontaktmöglichkeiten sind angegeben (E-Mail, Matrix) sowie „Issue auf GitHub/Codeberg öffnen“.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Redirects auf benötigte Dienste begrenzen** (nicht alles aktiv lassen, wenn unnötig).  
   **Prüfen:** In den Add-on-Optionen sind nur gewünschte Services aktiv.
2) **Bevorzugte Instanzen setzen** (oder eigene Instanz eintragen, falls du eine betreibst).  
   **Prüfen:** Links öffnen sich auf der bevorzugten Domain statt zufällig.
3) **Exceptions/Allowlist nutzen** für Seiten, die nicht umgeleitet werden sollen.  
   **Prüfen:** Ausnahmen greifen reproduzierbar (Testlink auf Originaldomain bleibt Original).

**Stolpersteine:**
- Öffentliche Instanzen sind ein eigenes Vertrauensmodell (Abwägung: bequem vs. unbekannter Betreiber/Policies).
- „Cloudflare“-markierte Instanzen können laut Doku HTTPS „aufbrechen“ (Abwägung: Performance/CDN vs. zusätzliche Einsichtsmöglichkeit).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze bevorzugt eigene/vertrauenswürdige Instanzen und vermeide zufällige Instanzwahl.
- Prüfe, ob der Instanzlistenabruf deaktivierbar ist („…or not at all“ laut Privacy Policy) und schalte ihn ggf. aus.
- Halte Embeds deaktiviert, wenn du sie nicht brauchst (weniger In-Page-Änderungen, weniger Sonderfälle).

**Abwägung:** mehr manuelle Pflege/Einrichtung; dafür weniger Abhängigkeit von öffentlichen Listen/Instanzen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze ein separates Browser-Profil nur für umgeleitete Frontends (Trennung von Cookies/Storage).
- Verwende ausschließlich eigene Instanzen; blocke öffentliche Instanzen konzeptionell (Abwägung: hoher Aufwand).
- Verzichte auf Features mit zusätzlichen Drittrequests (z.B. Maps-Reverse-Geocoding), wenn du die Metadatenflüsse minimieren willst.

**Abwägung:** deutlicher Komfortverlust; höhere Komplexität und Wartungsbedarf.

</details>

## Features
- Automatische Redirects von Plattformen zu alternativen Frontends (konfigurierbar).
- Erklärung der Berechtigungen (webRequest, storage, clipboard, all_urls) im FAQ.
- Instanz-Management inkl. bevorzugter Instanzen (schneller Wechsel per Popup/Reload).
- Exceptions/Allowlist, um Redirects für bestimmte Seiten auszuschließen.
- Keyboard-Shortcuts (z.B. Instanz wechseln, Original-Link kopieren, Original/Frontend togglen).
- Hinweis/Markierung „Cloudflare“ bei Instanzen inkl. erklärtem Risiko.

## Alternativen
- Manuelles Nutzen der alternativen Frontends ohne Add-on (Abwägung: keine automatischen Redirects, dafür weniger Add-on-Berechtigungen).
- Privacy Redirect (Ursprungsprojekt; LibRedirect entstand als Fork) (Abwägung: Funktionsumfang/Wartungsstand abhängig vom Projektstatus).

## Nicht gelöst / offene Punkte
- Offizieller Vulnerability-Disclosure-Prozess (dedizierter Security-Meldeweg) ist nicht verifiziert.
- Vertrauensmodell öffentlicher Instanzen bleibt nutzerabhängig (Betreiber/Policies variieren).

## Quellen

- Manuelles Nutzen der alternativen Frontends ohne Add-on (Trade-off: "keine automatischen Redirects)
- Privacy Redirect (Ursprungsprojekt, von LibRedirect historisch geforkt; Trade-off: "Stand/Wartung abhängig vom Projektstatus)
- https://libredirect.github.io/donate.html
- [LibRedirect (Website)](https://libredirect.github.io/)
- [LibRedirect Privacy Policy (raw)](https://raw.githubusercontent.com/libredirect/browser_extension/master/Privacy-Policy.md)
- [LibRedirect FAQ](https://libredirect.github.io/faq.html)
- [LibRedirect Docs](https://libredirect.github.io/docs.html)
- [LibRedirect Contact](https://libredirect.github.io/contact.html)
- [LibRedirect Donate](https://libredirect.github.io/donate.html)
