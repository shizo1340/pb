---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / CleanBrowsing"
url: "/anbieter/cleanbrowsing/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-08"
robots: "index,follow"
description: "Kurzprofil von CleanBrowsing (Kategorie: DNS)."
provider: ""
name: "CleanBrowsing"
category: "DNS"
website: "https://cleanbrowsing.org/"
repo: "https://github.com/cleanbrowsing"
license: "Nicht angegeben (Dienst); einzelne Tools im Repo mit eigener Lizenz"
policies: ""
privacy: "https://cleanbrowsing.org/privacy"
terms: "https://cleanbrowsing.org/terms"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "partial"
self_host_possible: "no"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA (CleanBrowsing, Inc.; Governing Law/Adresse in Texas laut Terms)"
region: "us"
logs: "none"
logs_notes: "configurable (Paid); keine PII-Logs für Free Resolver laut Privacy Policy"
retention: "configurable"
retention_notes: "konfigurierbar (Total-Privacy bis 7 Tage laut Pricing/Dashboard)"
retention_max_days: "7"
data_notes: "Free Resolver: laut Anbieter keine Speicherung personenbezogener Identifikatoren wie IP-Adresse; zusätzlich Verarbeitung anonymisierter, aggregierter DNS-Query-Daten für Betrieb/Verbesserung. Paid: Logging/Visibility optional, Steuerung im Dashboard inkl. Data Retention; Abrechnung via Stripe (Payment-Daten nicht im CleanBrowsing-System gespeichert laut Policy)."
features: ""
alternatives: ""
payment_processors: "Stripe (Paid-Pläne, laut Privacy Policy)"
sources: ""
---
## Kurzprofil

CleanBrowsing ist ein Anbieter aus der Kategorie **DNS**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du DNS-basiertes Content-/Security-Filtering auf Netzwerk- oder Geräteebene nutzen willst (auch ohne App) und dabei **verschlüsseltes DNS (DoH/DoT/DNSCrypt)** einsetzen möchtest.
- **Weniger geeignet wenn:** du DNS-Auflösung ausschließlich lokal/selbst betrieben brauchst (Self-Hosting ist hier nicht vorgesehen) oder grundsätzlich keinen externen DNS-Dienst nutzen willst.
- **Wichtigster Abwägung:** DNS-Filtering bedeutet, dass **DNS-Anfragen** beim Resolver anfallen; für Sichtbarkeit/Reports im Paid-Dienst sind **optionale Logs** möglich (Abwägung: Monitoring/Fehlersuche vs. Metadaten/Protokollierung).

## Sofortmaßnahmen
- **Encrypted DNS aktivieren (DoH/DoT):** reduziert Mitlesen/Manipulation von DNS im Netzpfad.
- **Paid-Dashboard → Settings → Data Retention prüfen:** minimiert gespeicherte Aktivitätsdaten (bis hin zu „Total Privacy“ laut Anbieter).
- **Auf Router-Ebene setzen:** erzwingt DNS-Policy für alle Geräte im Netz (Abwägung: kann bei DoH/VPN-Bypass trotzdem umgangen werden).

## Entscheidungshilfe
- Wenn du **ohne Konto** starten willst, dann nutze die **Free Resolver** (Abwägung: weniger Steuerung/Visibility als Paid).
- Wenn du **nur verschlüsselt auflösen** willst, dann konfiguriere **DoH/DoT/DNSCrypt** (Abwägung: je nach Netzwerk kann DoH/DoT geblockt oder gedrosselt werden).
- Wenn du **Monitoring/Reports** brauchst, dann nutze Paid-Logging/Visibility im Dashboard (Abwägung: mehr Metadaten, daher Retention/Visibility aktiv steuern).
- Wenn du **maximale Datensparsamkeit** willst, dann nutze Paid im **Total-Privacy-Modus** bzw. die Free Resolver ohne personenbezogene Logs laut Policy (Abwägung: weniger Debugging-/Nachvollziehbarkeit).
- Wenn du verhindern willst, dass Nutzer DNS lokal ändern, dann braucht es **System-/Netzwerk-Härtung außerhalb des DNS-Dienstes** (Abwägung: mehr Admin-Aufwand; Anbieter weist darauf hin, dass Härtung Admin-Aufgabe ist).
- Wenn du Support per Fernzugriff nutzt, dann prüfe **Remote-Support via TeamViewer** bewusst (Abwägung: schnellere Hilfe vs. zusätzlicher Drittsoftware-Zugriff).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | CleanBrowsing |
| Kategorie | DNS |
| Website | https://cleanbrowsing.org/ |
| Quellcode | https://github.com/cleanbrowsing |
| Lizenz | Nicht angegeben (Dienst); einzelne Tools im Repo mit eigener Lizenz |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | no (Free Resolver); yes (Paid-Dashboard) |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Stripe (Paid-Pläne, laut Privacy Policy) |
| Jurisdiktion | USA (CleanBrowsing, Inc.; Governing Law/Adresse in Texas laut Terms) |
| Logs | configurable (Paid); keine PII-Logs für Free Resolver laut Privacy Policy |
| Retention | konfigurierbar (Total-Privacy bis 7 Tage laut Pricing/Dashboard) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://cleanbrowsing.org/privacy
- AGB/Terms: https://cleanbrowsing.org/terms
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Free Resolver: laut Anbieter keine Speicherung personenbezogener Identifikatoren wie IP-Adresse; zusätzlich Verarbeitung anonymisierter, aggregierter DNS-Query-Daten für Betrieb/Verbesserung. Paid: Logging/Visibility optional, Steuerung im Dashboard inkl. Data Retention; Abrechnung via Stripe (Payment-Daten nicht im CleanBrowsing-System gespeichert laut Policy).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**
  - **Free Resolver:** laut Privacy Policy keine Logs/Speicherung personenbezogener Daten wie IP-Adresse; zusätzlich Verarbeitung **anonymisierter, aggregierter** DNS-Query-Daten.
  - **Paid Accounts:** bei Registrierung **E-Mail + selbst gewähltes Passwort**; Aktivitäts-/DNS-Logs **optional** (konfigurierbar).
  - **Website-Nutzung:** Website-Logfiles können u.a. IP-Adresse enthalten; laut Policy automatische Löschung und keine Weitergabe.
- **Wofür:** Betrieb/Verbesserung/Absicherung der Services; Support/Kommunikation; Abrechnung bei Paid.
- **Weitergabe/Subprozessoren:** Privacy Policy nennt „Service Providers“ (u.a. für Payment/Support/Marketing); **Stripe** als Payment Processor bei Kreditkartenzahlung.
- **Drittlandtransfer:** Anbieter beschreibt sich als **US-basiert** und nennt Speicherung primär in **USA und EEA** sowie mögliche Transfers für globale Operationen.
- **Zahlungsabwicklung/Payment Processor:** Stripe (laut Policy); Zahlungsdaten werden laut Policy nicht im CleanBrowsing-System gespeichert.
- **Kontakt/DSAR/DPA:** Datenschutzkontakt: **privacyquestions@cleanbrowsing.org** (Policy nennt Antwort binnen 30 Tagen, vorbehaltlich Identitätsprüfung).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?**
  - **Free Resolver:** laut Pricing/Privacy „zero tracking“ bzw. keine personenbezogenen DNS-Logs; zusätzlich anonymisierte, aggregierte Datenverarbeitung für Betrieb/Verbesserung.
  - **Paid:** Tracking/Visibility ist laut Anbieter **optional** und abhängig von der eigenen Konfiguration.
- **Abschaltbar?** Paid: laut Privacy Policy möglich (Total-Privacy/„nothing is ever logged“); Steuerung im Dashboard.
- **Wo (Menüpfad):** Privacy Policy nennt **Dashboard → Settings → Data Retention**.

**Logs & Retention:**
- **Logging-Level:** configurable (Paid); Free Resolver ohne personenbezogene Logs laut Policy.
- **Aufbewahrung:** laut Pricing „no-logs“ bis **7 Tage** Storage; Settings im Dashboard („Data Retention“).
- **Lösch-/Opt-out-Optionen:** Privacy Policy: Paid-User können Logging reduzieren/abschalten; Data Retention über Dashboard-Einstellungen.

**Abwägung am Punkt:** Weniger Visibility/Logs erschwert Fehlersuche und Monitoring; mehr Visibility erhöht Metadatenrisiko und sollte über Retention/Settings bewusst begrenzt werden.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** CleanBrowsing unterstützt **DoH, DoT und DNSCrypt** (Free und Paid laut Privacy/Pricing sowie „Encrypted DNS“-Docs).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben (keine dokumentierte 2FA-Option in den genutzten Primärquellen gefunden).
- **Recovery/Account-Wiederherstellung:** Nicht angegeben.
- **Vuln-Handling / Security-Kontakt:** Allgemeiner Kontakt: support@cleanbrowsing.org; Datenschutzkontakt: privacyquestions@cleanbrowsing.org (kein expliziter Disclosure-Prozess in den genutzten Quellen).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **DNS auf Encrypted DNS (DoH/DoT) umstellen**, wenn möglich (Router oder Gerät).  
   **Prüfen:** DNS-Verbindungen laufen nicht mehr unverschlüsselt über Port 53 (oder du nutzt bewusst klassische DNS-IP-Resolver).
2) **Filter/Profil festlegen** (Free Filter oder Paid-Profil) und Auswirkungen testen.  
   **Prüfen:** eine erwartbar geblockte Domain liefert eine **NXDOMAIN**-Antwort (laut Anbieter keine Tracking-Redirects bei Blockseiten im Free-Dienst).
3) **Paid (falls genutzt): Data Retention setzen** (Dashboard → Settings → Data Retention) und Logging/Visibility passend wählen.  
   **Prüfen:** Dashboard zeigt die gewählte Retention/Visibility; Logs entstehen nur im konfigurierten Umfang.

**Stolpersteine:**
- DNS-Filtering arbeitet auf **Domain-Ebene**: False Positives/Breakage sind möglich (Abwägung: Filterwirkung vs. Kompatibilität).
- Der Anbieter weist darauf hin, dass **Härtung gegen lokale DNS-Änderungen** Aufgabe der Admin-Seite ist (Abwägung: mehr Kontrolle vs. mehr Administrationsaufwand).
- Remote-Support kann laut Help-Center über **TeamViewer** erfolgen (Abwägung: schnellere Hilfe vs. zusätzlicher Fernzugriff durch Drittsoftware).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze die **Free Resolver**, wenn du ohne Konto arbeiten willst (Abwägung: weniger zentrale Steuerung/Reports).
- Wenn Paid nötig ist: setze **Total Privacy** bzw. kürzeste **Data Retention** im Dashboard (Abwägung: weniger Nachvollziehbarkeit bei Vorfällen).
- Verzichte auf **Remote-Support via TeamViewer**, wenn du Drittzugriffe vermeiden willst (Abwägung: mehr Eigenaufwand beim Troubleshooting).

**Abwägung:** weniger Visibility/Logs reduziert Monitoring-Möglichkeiten und kann Support erschweren.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Erzwinge DNS-Policy auf Netzebene: **ausgehende DNS-Ports** kontrollieren (z.B. nur CleanBrowsing-Endpunkte zulassen), soweit du das betreibst.  
  **Abwägung:** höhere Komplexität; Fehlkonfiguration kann Konnektivität brechen.
- Nutze **Encrypted DNS** gezielt und prüfe, ob das Zielnetz DoH/DoT blockiert (Abwägung: mögliche Ausfälle/Performance-Themen).
- Halte Paid im **Total-Privacy-Modus** und minimiere Retention, wenn Visibility nicht zwingend ist (Abwägung: eingeschränkte Forensik/Monitoring).

**Abwägung:** maximale Kontrolle reduziert Komfort und erhöht Wartungsaufwand.

</details>

## Features
- DNS-Filter (vordefiniert + Custom Allow/Block) für verschiedene Kategorien/Plattformen
- Encrypted DNS: DNS-over-HTTPS (DoH), DNS-over-TLS (DoT), DNSCrypt
- Paid-Dashboard: Profile, optionale Activity-Logs, Data-Retention-Einstellungen
- Konfiguration ohne App möglich; Apps für gängige Plattformen laut Pricing-Seite

## Alternativen
- NextDNS (DNS-Resolver mit Account/Dashboard; Abwägung: Konfiguration/Logging typischerweise account-basiert)
- AdGuard DNS (DNS-Filter/Blocklisten; Abwägung: je nach Modus stärkerer Eingriff/Kompatibilitätsrisiken)
- Control D (DNS-Resolver mit granularen Regeln; Abwägung: Features meist account-basiert)
- Quad9 (Security-Fokus statt Content-Filter; Abwägung: weniger Jugendschutz-/Kategorien-Filtering)

## Nicht gelöst / offene Punkte
- Kein öffentlich verlinkter Subprozessoren-/DPA-Katalog gefunden.

## Quellen

- Encrypted DNS: "DNS-over-HTTPS (DoH), DNS-over-TLS (DoT), DNSCrypt
- Paid-Dashboard: "Profile, optionale Activity-Logs, Data-Retention-Einstellungen
- NextDNS (DNS-Resolver mit Account/Dashboard; Trade-off: "Konfiguration/Logging typischerweise account-basiert)
- AdGuard DNS (DNS-Filter/Blocklisten; Trade-off: "je nach Modus stärkerer Eingriff/Kompatibilitätsrisiken)
- Control D (DNS-Resolver mit granularen Regeln; Trade-off: "Features meist account-basiert)
- Quad9 (Security-Fokus statt Content-Filter; Trade-off: "weniger Jugendschutz-/Kategorien-Filtering)
- CleanBrowsing Privacy Agreement — https://cleanbrowsing.org/privacy
- CleanBrowsing Terms & Conditions — https://cleanbrowsing.org/terms
- CleanBrowsing Pricing — https://cleanbrowsing.org/pricing
- Encrypted DNS (DoH/DoT/DNSCrypt) — https://cleanbrowsing.org/encrypted-dns
- Help: "Technical Support – Remote Session via TeamViewer — https://cleanbrowsing.org/help/docs/technical-support-remote-session-via-teamviewer/
- CleanBrowsing (GitHub) — https://github.com/cleanbrowsing
- [CleanBrowsing Privacy Agreement](https://cleanbrowsing.org/privacy)
- [CleanBrowsing Terms & Conditions](https://cleanbrowsing.org/terms)
- [CleanBrowsing Pricing](https://cleanbrowsing.org/pricing)
- [Encrypted DNS (DoH/DoT/DNSCrypt)](https://cleanbrowsing.org/encrypted-dns)
- [Help: What is DNS-over-TLS (DoT)?](https://cleanbrowsing.org/help/docs/what-is-dns-over-tls-dot/)
- [Help: Technical Support – Remote Session via TeamViewer](https://cleanbrowsing.org/help/docs/technical-support-remote-session-via-teamviewer/)
- [CleanBrowsing (GitHub)](https://github.com/cleanbrowsing)
