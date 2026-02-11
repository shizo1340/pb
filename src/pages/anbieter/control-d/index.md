---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Control D"
url: "/anbieter/control-d/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-09"
robots: "index,follow"
description: "Kurzprofil von Control D (Kategorie: DNS)."
provider: ""
name: "Control D"
category: "DNS"
website: "https://controld.com/"
repo: "https://github.com/Control-D-Inc/ctrld"
license: "MIT (ctrld client/daemon)"
policies: ""
privacy: "https://controld.com/privacy"
terms: "https://controld.com/terms"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "partial"
self_host_possible: "unknown"
account_required: "no"
phone_required: "Nicht angegeben"
kyc_required: "Nicht angegeben"
jurisdiction: "Canada (Ontario, CONTROLD, Inc.)"
region: "ca"
logs: "configurable"
retention: "configurable"
retention_notes: "Konfigurierbar (Analytics: Rohdaten 1 Monat, Statistiken 1 Jahr)"
retention_max_days: "365"
data_notes: "Free DNS laut Anbieter ohne Speicherung von IPs/Timestamps/DNS-Queries; bei Premium-Resolvern mit Custom-Profilen wird u.a. Source-IP + letzter Aktivitätszeitpunkt dem Konto zugeordnet; optionales Analytics kann Query-Logs speichern; Website nutzt Piwik (self-hosted) + PostHog."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Control D ist ein Anbieter aus der Kategorie **DNS**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du DNS-Filter/Policies zentral steuern willst (z.B. per Profil/Regeln) und dafür akzeptierst, dass der DNS-Anbieter technisch Einblick in aufgelöste Domains haben kann (je nach Logging/Analytics).
- **Weniger geeignet wenn:** du keinerlei externem DNS-Anbieter deine DNS-Nutzung anvertrauen willst (Abwägung: eigener Resolver/VPN nötig).
- **Wichtigster Abwägung:** **DNS-Filter/Analytics vs. Metadaten/Logs** (mehr Kontrolle/Transparenz im Dashboard kann zusätzliche Protokollierung bedeuten).

## Sofortmaßnahmen
- Nutze **verschlüsselte DNS-Protokolle (DoH/DoT/DoQ)**, um DNS im lokalen Netz/bei WLANs weniger sichtbar zu machen (Abwägung: Debugging/Netzwerk-Interoperabilität kann schwieriger sein).
- Wenn du **keine Analytics brauchst**, lass Query-Logging/Analytics aus bzw. nutze „Do Not Log“-Optionen (Abwägung: weniger Einblick bei Fehlersuche).
- Für Accounts: aktiviere **2FA/MFA für Admins**, wenn verfügbar (Abwägung: zusätzlicher Login-Schritt).  

## Entscheidungshilfe
- Wenn du **ohne Konto starten** willst, dann nutze **Free DNS** (Abwägung: weniger individuelle Policies als bei Custom-Profilen).
- Wenn du **Custom-Profile/Regeln pro Gerät/Standort** brauchst, dann nutze einen **Premium/Org-Account** (Abwägung: Konto + Source-IP-Zuordnung laut Anbieter nötig).
- Wenn du **Auswertungen/Trend-Insights** brauchst, dann aktiviere **Analytics/Query-Logs** (Abwägung: mehr gespeicherte Metadaten; Retention prüfen).
- Wenn du **bestimmte Domains nicht im Analytics sehen** willst, dann nutze „**Do Not Log**“-Regeln (Abwägung: weniger Sichtbarkeit in Auswertungen).
- Wenn du **DNS für High-Risk-Szenarien härten** willst, dann reduziere Kontobindung/Logging so weit wie möglich (Abwägung: weniger Komfort/Steuerung).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Control D |
| Kategorie | DNS |
| Website | https://controld.com/ |
| Quellcode | https://github.com/Control-D-Inc/ctrld |
| Lizenz | MIT (ctrld client/daemon) |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | Teilweise (Free DNS: nein; Premium/Org: ja) |
| Telefon erforderlich | Nicht angegeben |
| KYC erforderlich | Nicht angegeben |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Canada (Ontario, CONTROLD, Inc.) |
| Logs | configurable |
| Retention | Konfigurierbar (Analytics: Rohdaten 1 Monat, Statistiken 1 Jahr) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://controld.com/privacy
- AGB/Terms: https://controld.com/terms
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- SOC 2 Type II (laut Anbieter, Juni 2025)

**Daten-Notizen (kurz):**
- **Free DNS**: laut Anbieter keine Speicherung von IPs/Timestamps/DNS-Queries.
- **Premium (Custom-Profile)**: laut Anbieter Speicherung von **Source IP** + **Timestamp letzter Aktivität** (Dashboard/Apps).
- **Website**: Piwik (self-hosted) + PostHog (3rd-party) laut Anbieter.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**
  - Beim Website-Besuch: User-Agent, Sprache, Auflösung, Referrer, IP-Subset (erste 3 Oktette) an Piwik; zusätzlich Interaktionsdaten via PostHog (laut Privacy Policy).
  - Beim Signup: E-Mail + Registrierungsdatum; bei Premium zusätzlich Payment-Transaktions-ID (laut Privacy Policy).
  - Bei Nutzung (Premium-Resolver mit Custom-Profilen): Timestamp letzter Aktivität + Source-IP-Adresse (laut Privacy Policy).
  - Free DNS: laut Anbieter **keine** Speicherung von IPs/Timestamps/DNS-Queries.
- **Wofür:** Website-Analyse (Piwik/PostHog), Accountbetrieb (E-Mail/Registrierung), Regelzuordnung/Servicebetrieb (Source-IP als „Anchor“ bei Custom-Profilen) laut Anbieter.
- **Weitergabe/Subprozessoren:** PostHog wird explizit genannt; weitere Subprozessoren/Liste nicht öffentlich genannt (Stand: Quellen unten).
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben.
- **Kontakt/DSAR/DPA:** DSAR/DPA-Prozess nicht als öffentliche Kontakt-/DPA-Seite dokumentiert (Stand: Quellen unten).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Plan-/Feature-abhängig; Analytics ist laut Doku eine optionale Funktion.
- **Abschaltbar?** Ja, laut Doku können Analytics-Daten gelöscht werden; Logging kann zusätzlich per „Do Not Log“-Regeln reduziert werden.
- **Wo (Menüpfad):**
  - Org-Accounts: **My Organization** → u.a. „Delete all Analytics data“ (laut Doku).
  - Profile/Regeln: „Magic Folder“ **Do Not Log** (laut Doku; Bezeichnungen im Dashboard prüfen).

**Logs & Retention:**
- **Logging-Level:** configurable
- **Aufbewahrung:** laut Doku **Rohdaten 1 Monat**, **Statistiken 1 Jahr** (Analytics); Löschung möglich (bis zu 48h Verzögerung laut Doku).
- **Lösch-/Opt-out-Optionen:** „Delete all Analytics data“ (Org) + „Do Not Log“-Regeln (Domains vom Logging ausnehmen) laut Doku.

**Abwägung am Punkt:** Weniger Logging/Analytics kann Fehlersuche und Nachvollziehbarkeit reduzieren; mehr Logging erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** DNS unterstützt moderne verschlüsselte Transportprotokolle (u.a. DoH/DoT/DoQ/DoH3, je nach Einrichtung/Guide laut Anbieter).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Für Organization-Funktionen ist **mandatory 2FA/MFA für Admins** dokumentiert (laut Doku).
- **Recovery/Account-Wiederherstellung:** Nicht angegeben.
- **Vuln-Handling / Security-Kontakt:** Kein öffentlicher Disclosure-Prozess in den genutzten Quellen gefunden; Repo ohne SECURITY.md (Stand: Quellen unten).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (2FA/MFA), falls angeboten.  
   **Prüfen:** In Organization-Funktionen „mandatory 2FA/MFA“ aktivierbar (z.B. Bereich „My Organization“, laut Doku).
2) **Auto-Lock/Timeout** sinnvoll setzen.  
   **DNS-spezifisch umgesetzt als:** App-/Endpoint-Härtung wie „Prevent Deactivation“ (PIN), falls du Apps nutzt.  
   **Prüfen:** Deaktivieren der App/CLI erfordert PIN; nach Änderung Gerät neu starten (laut Doku).
3) **Analytics/Telemetry deaktivieren**, falls Schalter existiert.  
   **Prüfen:** „Delete all Analytics data“ verfügbar + ggf. keine Query-Logs aktiv; „Do Not Log“-Regeln greifen (laut Doku).

**Stolpersteine:**
- **Custom-Profile benötigen laut Anbieter Source-IP-Zuordnung** (Abwägung: Steuerung per Regeln vs. Metadatenbindung).
- Bei aktivem Analytics können **Query-Logs** entstehen (Abwägung: Diagnose/Übersicht vs. Datenmenge).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **Free DNS** ohne Konto, wenn dir Standard-Filterprofile reichen (Abwägung: weniger Individualisierung).
- Erzwinge **verschlüsselte DNS-Protokolle** (DoH/DoT/DoQ), wo möglich (Abwägung: manche Netze/Hotspots können Probleme machen).
- Reduziere Logging: setze für sensible Domains „**Do Not Log**“-Regeln (Abwägung: weniger Sichtbarkeit in Auswertungen).
- Optional: nutze „**Control D Bypass**“ für Sonderfälle (z.B. Captive Portals), damit bestimmte Domains nicht über Control D laufen (Abwägung: weniger zentrale Kontrolle).

**Abwägung:** mehr Eigenarbeit bei Debugging und weniger zentrale Transparenz.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne Nutzungskontexte (z.B. eigenes Gerät/Profil für DNS-Policies) und reduziere Dashboard-Nutzung auf das Nötigste (Abwägung: Bedienaufwand).
- Vermeide Query-Logging/Analytics, nutze „Do Not Log“ konsequent und prüfe Retention (Abwägung: kaum forensische Auswertungen möglich).
- Wenn Apps eingesetzt werden: „Prevent Deactivation“ + MDM/RMM, um Entfernen/Manipulation zu erschweren (Abwägung: Admin-Aufwand, Nutzerfriktion).

**Abwägung:** deutlicher Komfortverlust, höhere Komplexität.

</details>

## Features
- Free DNS (ohne Konto) laut Anbieter
- Verschlüsselte DNS-Protokolle (DoH/DoT/DoQ/DoH3 je nach Einrichtung)
- Custom-Profile/Regeln (planabhängig)
- Optionales Analytics inkl. konfigurierbarer Retention + Löschoptionen
- „Do Not Log“/„Control D Bypass“ Regeln (Magic Folders)
- Open-Source Client/Daemon `ctrld`

## Alternativen
- NextDNS (DNS-Policies; Abwägung: Konto/Identitätsbindung vs. viele Steuerungsoptionen)
- Quad9 (DNS-Schutzfokus; Abwägung: weniger Individualisierung vs. einfacher Betrieb)
- AdGuard DNS (DNS-Filter; Abwägung: zentrale Filterung vs. Vertrauen in Anbieterregeln)

## Nicht gelöst / offene Punkte
- Keine öffentliche Subprozessorenliste/DPA-Download gefunden (Stand: 2026-01-09).
- Warrant Canary/Transparency Report: nicht angegeben.

## Quellen

- NextDNS (DNS mit Konto/Policies; Trade-off: "Konto/Identitätsbindung vs. zentrale Steuerung)
- Quad9 (DNS-Schutzfokus; Trade-off: "weniger Custom-Policies vs. einfache Nutzung)
- AdGuard DNS (DNS-Filter; Trade-off: "Anbieterfilter/Blocklisten vs. weniger Tracking auf Netzwerkebene)
- Analytics: "Data Storage & Retention – Control D Docs
- GitHub Repo: "Control-D-Inc/ctrld
- [Privacy Policy – Control D](https://controld.com/privacy)
- [Terms of Service – Control D](https://controld.com/terms)
- [Security & Trust – Control D](https://controld.com/security)
- [Free DNS – Control D Docs](https://docs.controld.com/docs/free-dns)
- [Analytics: Data Storage & Retention – Control D Docs](https://docs.controld.com/docs/analytics-data-storage-retention)
- [Organizations – Control D Docs](https://docs.controld.com/docs/organizations)
- [Prevent Deactivation (PIN) – Control D Docs](https://docs.controld.com/docs/prevent-deactivation)
- [Magic Folders (Do Not Log / Control D Bypass) – Control D Docs](https://docs.controld.com/docs/magic-folders)
- [GitHub Repo: Control-D-Inc/ctrld](https://github.com/Control-D-Inc/ctrld)
