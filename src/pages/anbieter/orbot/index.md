---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Orbot (Tor for Android)"
url: "/anbieter/orbot/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-19"
robots: "index,follow"
description: "Kurzprofil von Orbot (Tor for Android) (Kategorie: Tor & Anonymität)."
provider: ""
name: "Orbot (Tor for Android)"
category: "Tor & Anonymität"
website: "https://orbot.app/en/"
repo: "https://github.com/guardianproject/orbot-android"
license: "BSD-3-Clause"
policies: ""
privacy: "https://orbot.app/en/privacy-policy/"
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
logs: "none"
retention: "unknown"
data_notes: "Laut Privacy Policy sammelt Orbot nicht direkt Nutzungsaktivitätsdaten und nutzt keine Third-Party-Analytics (außer dem, was Google Play selbst erfasst)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Orbot (Tor for Android) ist ein Anbieter aus der Kategorie **Tor & Anonymität**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du auf Android den Traffic **ausgewählter Apps** über das Tor-Netzwerk leiten willst (z.B. gegen Netzwerk-Überwachung oder Blockaden).
- **Weniger geeignet wenn:** du **hohe Geschwindigkeit/Kompatibilität** brauchst oder Apps/Dienste Tor-Verkehr häufig blockieren (Captchas, Login-Sperren, Timeouts).
- **Wichtigster Abwägung:** **Anonymisierungs-/Zensurumgehungs-Funktionen vs. Performance & Nutzbarkeit** (Tor ist langsamer; Tor-Nutzung kann für Dienste erkennbar sein).

## Sofortmaßnahmen
- **Verbindung verifizieren:** Starte Orbot und prüfe bei Browser-Traffic über VPN zusätzlich mit `check.torproject.org`, ob Tor wirklich aktiv ist.
- **Nur nötige Apps routen:** Leite nur die Apps über Tor, die es brauchen (weniger Breakage/Fehlersuche).
- **Bridges nutzen bei Blockaden:** Wenn Tor in deinem Netzwerk nicht funktioniert, wechsle auf Tor-Bridges/Pluggable Transports.

## Entscheidungshilfe
- Wenn du Tor **nicht für das ganze Gerät** brauchst, dann route nur einzelne Apps über Orbot (Abwägung: du musst pro App bewusst auswählen).
- Wenn du Tor vor allem für Web brauchst, dann ist ein Tor-Browser oft der einfachere Pfad (Abwägung: andere Apps bleiben außerhalb von Tor).
- Wenn dein Netzwerk Tor blockiert, dann aktiviere Tor-Bridges (Abwägung: Aufbau kann länger dauern, Verbindungen können instabiler sein).
- Wenn du dich in Apps mit deiner normalen Identität anmeldest, dann kann die App trotzdem erkennen, dass du Tor nutzt (Abwägung: Funktionalität/Accounts vs. operative Anonymität).
- Wenn du möglichst wenig Plattform-Telemetrie willst, dann ist der Installationsweg (Google Play vs. alternative Quellen) relevant (Abwägung: Komfort/Auto-Updates vs. Plattform-Metadaten).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Orbot (Tor for Android) |
| Kategorie | Tor & Anonymität |
| Website | https://orbot.app/en/ |
| Quellcode | https://github.com/guardianproject/orbot-android *(Mirror/weitere Quellen: siehe „Code“ auf orbot.app)* |
| Lizenz | BSD-3-Clause |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben *(Spenden möglich; Zahlungsanbieter nicht dokumentiert)* |
| Jurisdiktion | Nicht angegeben |
| Logs | none |
| Retention | Nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://orbot.app/en/privacy-policy/
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
- Orbot nennt keine direkte Erhebung von Nutzungsaktivitätsdaten.
- Keine Third-Party-Analytics laut Privacy Policy (Hinweis auf Google-Play-Tracking je nach Distribution).
- Guardian Project beschreibt eine „no logs / no analytics“-Ausrichtung für Projekte und Websites.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Privacy Policy sammelt Orbot **nicht direkt** Daten zur Anwenderaktivität; ausgenommen sind Daten, die **Google Play** selbst „einbaut und erhebt“ (abhängig vom Installationsweg).
- **Wofür:** Guardian Project beschreibt, dass Informationen typischerweise nur entstehen, wenn Nutzer:innen sie **freiwillig** geben (z.B. Kontakt per E-Mail); dann zur Bearbeitung der Anfrage.
- **Weitergabe/Subprozessoren:** Nicht angegeben (keine öffentliche Subprozessorenliste auf orbot.app genannt).
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (Orbot ist kostenlos; Spenden-Details nicht dokumentiert).
- **Kontakt/DSAR/DPA:** Guardian Project nennt Opt-out/Einblick/Änderung/Löschung über Kontaktkanäle (für Daten, falls vorhanden).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy: **keine Third-Party-Analytics** in Orbot; Hinweis, dass Google Play (bei Installation darüber) Tracking/Erhebung mitbringen kann.
- **Abschaltbar?** Nicht angegeben (in Orbot selbst kein dokumentierter „Analytics“-Schalter genannt).
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** none *(laut Guardian Project: keine Logs/Analytics; außerdem keine zentrale Protokollierung von Traffic-Verlauf/IP durch Netzbetreiber & App-Server als Zielbeschreibung)*
- **Aufbewahrung:** Nicht angegeben.
- **Lösch-/Opt-out-Optionen:** Nicht angegeben (außer Opt-out von Kontaktaufnahme laut Guardian Project Policy).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Orbot nutzt Tor, um Internet-Traffic zu verschlüsseln und über mehrere Relays zu leiten (genaue Kryptoparameter werden auf Orbot-Seiten nicht spezifiziert).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (kein Account-/Key-Einrichtung dokumentiert).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht zutreffend (kein Konto erforderlich).
- **Recovery/Account-Wiederherstellung:** Nicht zutreffend (kein Konto erforderlich).
- **Vuln-Handling / Security-Kontakt:** Im GitHub-Repo existiert eine SECURITY.md (Hinweis auf PGP-verschlüsselte E-Mail und Matrix; Kontaktinfos über Team-Seite).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Orbot starten & verbinden**  
   Öffne Orbot → drücke den großen Button → warte bis „100% connected“ angezeigt wird.  
   **Prüfen:** Button wird grün + Status zeigt vollständige Verbindung.
2) **Browser-Traffic über Orbot prüfen** (wenn du Orbot als VPN fürs Surfen nutzt)  
   Öffne im Browser `https://check.torproject.org/`.  
   **Prüfen:** Seite bestätigt Tor-Verbindung.
3) **Bridges nutzen, wenn Tor blockiert ist**  
   Falls Verbindungen scheitern: Bridges aktivieren (Orbot bietet Bridge-Zugriff; Bridges helfen bei Zensur/Blockaden).  
   **Prüfen:** Verbindung kommt zustande, obwohl „direktes Tor“ nicht funktioniert.

**Stolpersteine:**
- Orbot ist kein „Sicherheitsgarant“: Der Anbieter weist explizit darauf hin, dass Orbot allein Sicherheit/Privatsphäre nicht garantiert.
- Wenn du dich in Apps anmeldest, die du sonst ohne Tor nutzt, kann die App deine Identität kennen und zusätzlich erkennen, dass du Tor verwendest (Abwägung: Account-Komfort vs. operative Anonymität).
- Apps können weiterhin Standort-/Medien-/Geräteinfos abfragen (Permissions bleiben ein eigener Risikohebel).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Installationsweg bewusst wählen:** Wenn du Plattform-Telemetrie reduzieren willst, beachte den Hinweis des Anbieters zu Google-Play-Tracking (Abwägung: Updates/Komfort vs. Plattform-Metadaten).
- **App-Auswahl minimal halten:** Route nur Apps über Tor, die wirklich davon profitieren (Abwägung: weniger „Alles über Tor“, dafür stabiler).
- **App-Rechte restriktiv halten:** Standort/Medien/Telefoninfo nur erlauben, wenn nötig (Abwägung: Features einzelner Apps können brechen).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Identitäten strikt trennen:** Tor-Nutzung kann an sich schon „auffällig“ sein; plane Trennung nach Rollen/Accounts (Abwägung: deutlich mehr Aufwand).
- **Bridges/Pluggable Transports einplanen:** Orbot nennt Unterstützung für Obfs4 & Snowflake (Abwägung: zusätzliche Komplexität, teils wechselnde Stabilität).
- **Nur notwendige Apps + möglichst wenig Logins:** reduziert Korrelation zwischen Identität und Tor-Nutzung (Abwägung: eingeschränkte Nutzbarkeit).

</details>

## Features
- VPN-/Proxy-App für Android, die Datenverkehr über das Tor-Netzwerk leitet
- App-Selektor: gezielt auswählen, welche Apps über Tor geroutet werden
- Tor-Bridges (z.B. gegen Zensur/Blockaden)
- Unterstützung für Pluggable Transports wie Obfs4 & Snowflake
- Zugriff auf Onion-Services; optional kann das Smartphone selbst einen Onion-Service hosten
- Open Source (Code einsehbar/auditierbar)

## Alternativen
- Tor Browser for Android (Abwägung: einfacher Einstieg für Web, dafür kein Routing beliebiger Apps)
- App-spezifische Proxy-Funktionen (Abwägung: weniger systemweit, dafür oft kompatibler mit „nur dieser App“)
- Klassisches VPN (Abwägung: meist schneller/robuster, aber anderer Anonymitätsansatz als Tor)

## Nicht gelöst / offene Punkte
- Keine öffentliche Angabe zur **Jurisdiktion/Betreiberstruktur** auf orbot.app (Stand: 2026-01-19).
- Keine explizite, Orbot-spezifische Aussage zu **Crash-Reports/Diagnosedaten** außer „keine Third-Party-Analytics“ (Stand: 2026-01-19).

## Quellen

- App-Selektor: "gezielt auswählen, welche Apps über Tor geroutet werden
- Klassisches VPN (anderer Schwerpunkt: "Geschwindigkeit/Standortwechsel statt Tor-Anonymisierung)
- https://guardianproject.info/2016/05/04/data-usage-and-protection-policies/
- [Orbot (Website)](https://orbot.app/en/)
- [About / Disclaimer](https://orbot.app/en/about/)
- [Privacy Policy](https://orbot.app/en/privacy-policy/)
- [Legal / Lizenzhinweis](https://orbot.app/en/legal/)
- [Code / Repos & Pluggable Transports](https://orbot.app/en/code/)
- [FAQs (Verbindungsprüfung, Bridges)](https://orbot.app/en/faqs/)
- [GitHub Repo: guardianproject/orbot-android](https://github.com/guardianproject/orbot-android)
- [GitHub Security / SECURITY.md](https://github.com/guardianproject/orbot-android/security)
- [Guardian Project: Data Usage and Protection Policies](https://guardianproject.info/2016/05/04/data-usage-and-protection-policies/)
