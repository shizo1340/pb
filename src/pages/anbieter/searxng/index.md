---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / SearXNG"
url: "/anbieter/searxng/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-21"
robots: "index,follow"
description: "Kurzprofil von SearXNG (Kategorie: Suche)."
provider: ""
name: "SearXNG"
category: "Suche"
website: "https://searxng.org/"
repo: "https://github.com/searxng/searxng"
license: "AGPL-3.0-only"
policies: ""
privacy: "Nicht angegeben (instanzabhängig; Betreiber können eine Privacy-Policy verlinken)"
terms: "Nicht angegeben (instanzabhängig)"
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
jurisdiction: "Nicht angegeben (Open-Source-Projekt; öffentliche Instanzen werden von Dritten betrieben)"
region: "unknown"
logs: "configurable"
retention: "configurable"
retention_notes: "konfigurierbar"
data_notes: "SearXNG ist eine Metasuchmaschine: Suchanfragen werden an externe Suchdienste weitergeleitet. Laut Doku werden private Daten aus Requests entfernt (keine Cookies zu externen Suchdiensten, zufälliges Browserprofil pro Request, externe Dienste sehen die IP der Instanz). Ob/was geloggt wird, hängt vom Betreiber/der Konfiguration der gewählten Instanz ab."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

SearXNG ist ein Anbieter aus der Kategorie **Suche**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Suchanfragen über eine Instanz „puffern“ willst (externe Suchdienste sehen die Instanz-IP statt deiner IP) und du Self-Hosting oder eine vertrauenswürdige Instanz nutzen kannst.
- **Weniger geeignet wenn:** du nur öffentliche Instanzen nutzen kannst, aber keine Aussage über deren Logging/Betreiber-Vertrauen bekommst.
- **Wichtigster Abwägung:** **Komfort vs. Vertrauen/Kontrolle** (Public Instance = weniger Aufwand, aber Betreiber-Vertrauen; private Instanz = mehr Aufwand, dafür Kontrolle über Logging/Settings).

## Sofortmaßnahmen
- **Nutze eine private Instanz (Self-Hosting oder vertrauenswürdiger Kreis):** reduziert das Risiko, dass ein unbekannter Betreiber Queries/IPs protokolliert.
- **Setze `server.method: POST`:** Suchbegriffe landen weniger „bequem“ im Browser-Verlauf (Abwägung: UX-Einschränkungen wie Back-Button/Drag&Drop).
- **Wenn du selbst hostest: `general.enable_metrics: false` + Webserver/uWSGI-Logs deaktivieren:** reduziert Metadaten in der eigenen Infrastruktur (Abwägung: weniger Diagnose/Monitoring).

## Entscheidungshilfe
- Wenn du **öffentliche Instanzen** nutzt, dann behandle den Betreiber als **Vertrauensanker** (Abwägung: du weißt nicht sicher, ob Requests geloggt/aggregiert werden).
- Wenn du **Kontrolle über Logs/Policies** willst, dann betreibe eine **eigene Instanz** oder nutze eine **Instanz von Personen, denen du vertraust** (Abwägung: Wartung/Updates).
- Wenn du Suchbegriffe **weniger sichtbar im Browser-Verlauf** halten willst, dann nutze `server.method: POST` (Abwägung: Bedienbarkeit kann leiden).
- Wenn du **Metriken vermeiden** willst, dann deaktiviere `enable_metrics` in `settings.yml` (Abwägung: weniger Einblick in Fehler/Abuse).
- Wenn du bei ausgehenden Requests **zusätzliche Netzwerktrennung** willst, dann konfiguriere Outgoing via **Proxy/Tor** (Abwägung: Latenz/Blocklisten/CAPTCHAs möglich).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | SearXNG |
| Kategorie | Suche |
| Website | https://searxng.org/ |
| Quellcode | https://github.com/searxng/searxng |
| Lizenz | AGPL-3.0-only |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben (keine zentrale Zahlungsabwicklung; Open-Source-Software) |
| Jurisdiktion | Nicht angegeben (Open-Source-Projekt; öffentliche Instanzen werden von Dritten betrieben) |
| Logs | configurable |
| Retention | konfigurierbar |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: Nicht angegeben (instanzabhängig; Betreiber können eine Privacy-Policy verlinken)
- AGB/Terms: Nicht angegeben (instanzabhängig)
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
SearXNG leitet Suchanfragen an externe Suchdienste weiter und entfernt laut Doku dabei private Daten (keine Cookies zu externen Suchdiensten, zufälliges Browserprofil pro Request, externe Dienste sehen die Instanz-IP). Ob/was geloggt wird, hängt vom Betreiber/der Konfiguration der gewählten Instanz ab.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Suchanfragen werden an externe Suchdienste weitergegeben; externe Dienste sehen die **IP der Instanz** (nicht die User-IP). Zusätzlich kann ein Instanzbetreiber (bei Public Instances) Requests nach eigenem Einrichtung **loggen**.
- **Wofür:** Metasuche (Aggregation von Suchergebnissen) + Schutzmechanismen wie Entfernen privater Daten aus Requests (Cookies/Browserprofil/Referrer).
- **Weitergabe/Subprozessoren:** Keine zentrale Liste genannt; technisch werden Requests an **externe Suchdienste** geschickt (je nach Engine-Konfiguration der Instanz).
- **Drittlandtransfer:** Nicht angegeben (abhängig von den aktivierten Such-Engines und deren Standorten).
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend (Open-Source-Software; keine zentrale Zahlungsabwicklung).
- **Kontakt/DSAR/DPA:** Nicht angegeben (instanzabhängig; Betreiber können Kontakt/Privacy-Links konfigurieren).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Ja: `enable_metrics` ist laut Doku **standardmäßig aktiv** und zeichnet „anonymous metrics“ auf (sichtbar unter `/stats`, `/stats/errors`, `/preferences`).
- **Abschaltbar?** Ja (instanzseitig via `settings.yml`).
- **Wo (Menüpfad):** `settings.yml` → `general.enable_metrics`

**Logs & Retention:**
- **Logging-Level:** configurable
- **Aufbewahrung:** konfigurierbar (abhängig von uWSGI/Webserver/Host-Einrichtung)
- **Lösch-/Opt-out-Optionen:** Nutzerseitig bei Public Instances nicht garantiert; Betreiber-/Self-Hosting-Entscheidung.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Abuse-Handling erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht zutreffend (Web-Suche; Transportverschlüsselung/TLS hängt vom Deployment/Reverse Proxy ab).
- **KDF/Parameter/Schlüsselableitung:** Nicht zutreffend.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (kein Benutzerkonto erforderlich).
- **Recovery/Account-Wiederherstellung:** Nicht zutreffend.
- **Vuln-Handling / Security-Kontakt:** Security-Kontakt ist über `security@searxng.org` dokumentiert (GitHub Security Policy).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Instanz bewusst wählen (Vertrauen/Policy)**  
   **Prüfen:** Instanz bietet Privacy/Contact-Link oder klare Betreiberinfos.
2) **HTTP-Methode auf `POST` setzen (Self-Hosting)**
   **Prüfen:** `settings.yml` → `server.method: POST` aktiv.
3) **Metriken deaktivieren (Self-Hosting, wenn du es brauchst)**
   **Prüfen:** `settings.yml` → `general.enable_metrics: false` und `/stats` ist nicht mehr verfügbar bzw. liefert keine Daten.

**Stolpersteine:**
- Bei **Public Instances** bleibt offen, ob und wie Requests geloggt werden (Abwägung: geringer Aufwand vs. Betreiber-Vertrauen).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Self-Hosting** oder private Instanz im Vertrauenskreis (z.B. Zugriff nur per VPN).
- `general.enable_metrics: false` (weniger Metadaten auf dem Server).
- Webserver/uWSGI-Logging für Privacy reduzieren/abschalten (abhängig vom Einrichtung).
**Abwägung:** weniger Komfort bei Betrieb/Fehlersuche, mehr Verantwortung für Updates.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Lokal** betreiben (Bind auf `127.0.0.1`) + Zugriff ausschließlich über eigenen Tunnel/VPN.
- Outgoing Requests über **Proxy/Tor** konfigurieren (instanzseitig), um Netzwerk-Metadaten weiter zu entkoppeln.
- Strikte Minimal-Konfiguration: keine Public-Instance-Features, keine Metriken, Logs so weit wie möglich reduzieren.
**Abwägung:** höhere Latenz, mehr CAPTCHAs/Blocklisten-Risiko, deutlich mehr Betriebskomplexität.

</details>

## Features
- Metasuche über viele Suchdienste (Engine-basiert konfigurierbar)
- Entfernt laut Doku private Daten aus Requests (z.B. keine Cookies zu externen Suchdiensten, zufälliges Browserprofil)
- Keine Ads/Tracking-Inhalte laut Doku
- Versteckt Referrer & Suchquery vor besuchten Ergebnis-Seiten
- Optional: Search API-Ausgabeformate (z.B. JSON), abhängig von Instanz-Konfiguration
- Self-Hosting möglich (inkl. Container-Deployments)

## Alternativen
- [Qwant](/anbieter/qwant/) – Abwägung: zentraler Anbieter statt selbst betriebener Metasuch-Proxy
- [DuckDuckGo](/anbieter/duckduckgo/) – Abwägung: zentraler Anbieter, andere Telemetrie-/Policy-Fragen
- [Startpage](/anbieter/startpage/) – Abwägung: zentraler Anbieter, andere Datenflüsse
- Whoogle — Abwägung: Google-fokussierte Proxy-Suche, andere Wartungs-/Blocking-Risiken

## Nicht gelöst / offene Punkte
- Public-Instances sind betreiberabhängig: Logging/Retention/Policy können stark variieren.

## Quellen

- Metasuchmaschine: "bündelt Ergebnisse vieler Suchdienste in einer Oberfläche
- Privatsphäre-Mechanismen laut Doku: "Entfernen privater Daten aus Requests; keine Ads/Tracker-Inhalte; Referrer & Suchquery werden vor Ergebnis-Seiten verborgen
- Konfigurierbar: "Self-Hosting, Outgoing via Proxy/Tor möglich (instanzseitig)
- Qwant (Suche) — Trade-off: "zentraler Anbieter statt selbst betriebener Instanz
- DuckDuckGo (Suche) — Trade-off: "zentraler Anbieter statt Metasuch-Proxy
- Startpage (Suche) — Trade-off: "zentraler Anbieter, andere Datenflüsse
- Whoogle (Suche) — Trade-off: "stärker Google-fokussiert, andere Betriebs-/Wartungsanforderungen
- https://github.com/searxng/searxng/security
- [SearXNG – Projektseite](https://searxng.org/)
- [Why use a private instance? (Privacy-Mechanismen & Public-Instance-Abwägungen)](https://docs.searxng.org/own-instance.html)
- [`server:` Einstellungen (u.a. `secret_key`, `method: POST`)](https://docs.searxng.org/admin/settings/settings_server.html)
- [`general:` Einstellungen (u.a. `enable_metrics`, `privacypolicy_url`)](https://docs.searxng.org/admin/settings/settings_general.html)
- [uWSGI Installation (Hinweis: „disable logging for privacy“)](https://docs.searxng.org/admin/installation-uwsgi.html)
- [Search API (Formate & Endpoints)](https://docs.searxng.org/dev/search_api.html)
- [GitHub Quellcode](https://github.com/searxng/searxng)
- [Security Policy / Security-Kontakt](https://github.com/searxng/searxng/security)
