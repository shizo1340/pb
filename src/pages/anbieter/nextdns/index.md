---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / NextDNS"
url: "/anbieter/nextdns/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-19"
robots: "index,follow"
description: "Kurzprofil von NextDNS (Kategorie: DNS)."
provider: ""
name: "NextDNS"
category: "DNS"
website: "https://nextdns.io"
repo: "https://github.com/nextdns/nextdns"
license: "MIT (CLI-Client; Dienst selbst nicht als Open-Source angegeben)"
policies: ""
privacy: "https://nextdns.io/privacy"
terms: "https://help.nextdns.io/terms"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "partial"
self_host_possible: "unknown"
account_required: "no"
phone_required: "unknown"
kyc_required: "unknown"
jurisdiction: "Nicht angegeben (Firma: NextDNS Inc.)"
region: "unknown"
logs: "configurable"
logs_notes: "konfigurierbar (inkl. deaktivierbar)"
retention: "configurable"
retention_notes: "konfigurierbar (z.B. 1h bis 2y)"
data_notes: "Ohne explizite Aktivierung werden laut Privacy Policy keine Daten geloggt; Logs/Analytics (inkl. Retention & Speicher-Region) sind konfigurierbar; benannte Prozessoren: Stripe, PayPal, BitPay, SendGrid."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

NextDNS ist ein Anbieter aus der Kategorie **DNS**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du DNS-Filtering (Tracker/Ads/Security/Parental Control) zentral für viele Geräte steuern willst und Logs/Retention bewusst konfigurieren kannst.
- **Weniger geeignet wenn:** du eine vollständig lokale (self-hosted) Lösung ohne Cloud-Dienst als Daten-Anlaufpunkt brauchst.
- **Wichtigster Abwägung:** **Transparenz/Diagnose über Logs** vs. **Metadaten-Minimierung** (je mehr Analytics/Logs, desto mehr DNS-Metadaten werden gespeichert).

## Sofortmaßnahmen
- **Logging/Retention bewusst setzen (oder deaktivieren):** reduziert gespeicherte DNS-Metadaten und damit das Exposure bei Konto-/Rechtszugriffen.
- **Log-Speicherregion wählen (US/EU/UK/CH):** hilft bei Data-Residency-Anforderungen (Abwägung: je nach Standort ggf. andere Latenz/Peering).
- **Free-Tier-Limit im Blick behalten:** nach Überschreiten der Free-Quota werden Features deaktiviert (Abwägung: Filter/Logs fallen weg).

## Entscheidungshilfe
- Wenn du **kein Konto binden** willst, dann nutze NextDNS ohne Signup (Abwägung: Einstellungen/Profiles im Konto sind dann nicht dauerhaft „gespeichert“/verwaltbar).
- Wenn du **Troubleshooting und Sichtbarkeit** brauchst, dann aktiviere Logs mit kurzer Retention (Abwägung: gespeicherte DNS-Metadaten).
- Wenn du **„No-Logs“** möchtest, dann deaktiviere Logging vollständig (Abwägung: weniger Nachvollziehbarkeit bei Fehlersuche).
- Wenn du **DNS-Filtering für ein ganzes Heimnetz** willst, dann setze es am Router/Gateway um (Abwägung: Captive Portals/„funktioniert plötzlich nicht“-Fehlersuche wird zentral).
- Wenn du **harte Compliance- oder High-Risk-Anforderungen** hast, dann ist eine lokale Resolver-Variante (self-hostbar) relevant (Abwägung: mehr Wartung, kein Cloud-Dashboard).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | NextDNS |
| Kategorie | DNS |
| Website | https://nextdns.io |
| Quellcode | https://github.com/nextdns/nextdns |
| Lizenz | MIT (CLI-Client; Dienst selbst nicht als Open-Source angegeben) |
| Preismodell | freemium |
| Free Tier | ja (300.000 Queries/Monat) |
| Open Source | teilweise (CLI-Client ist Open Source; Dienst nicht als Open-Source angegeben) |
| Konto erforderlich | nein (optional; ohne Konto „Try it now“) |
| Telefon erforderlich | Unklar |
| KYC erforderlich | Unklar |
| Zahlungsabwicklung | Stripe (Karte), PayPal (PayPal), BitPay (Krypto) |
| Jurisdiktion | Nicht angegeben (Firma: NextDNS Inc.) |
| Logs | konfigurierbar (inkl. deaktivierbar) |
| Retention | konfigurierbar (z.B. 1h bis 2y) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://nextdns.io/privacy
- AGB/Terms: https://help.nextdns.io/terms *(Terms of Use fürs Help-Center/Website; keine separate Service-AGB gefunden)*
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
- Laut Privacy Policy wird ohne expliziten Nutzerwunsch nichts geloggt; Logs/Analytics lassen sich bzgl. Inhalt, Dauer und Jurisdiktion feinsteuern („WYSIWWH“).  
- Benannte „Processor“-Dienste: Stripe, PayPal, BitPay, SendGrid.  
- NextDNS nennt Query Name Minimisation sowie eine in-house EDNS-Client-Subnet-Implementierung (ohne IP-Expose gegenüber autoritativen DNS-Servern laut Privacy Policy).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Bei DNS-Anfragen fallen technisch Anfrage/Antwortdaten an; laut Privacy Policy werden diese nach Antwortversand sofort verworfen, sofern kein Logging aktiviert ist.
- **Wofür:** Optional für Analytics/Logs (wenn vom Nutzer aktiviert/konfiguriert).
- **Weitergabe/Subprozessoren:** Genannt als „processors“: Stripe (Karte), PayPal, BitPay (Krypto), SendGrid (transaktionale E-Mails).
- **Drittlandtransfer:** Nicht angegeben (nur Speicherregion für Logs ist konfigurierbar).
- **Zahlungsabwicklung/Payment Processor:** Stripe, PayPal, BitPay (laut Privacy Policy).
- **Kontakt/DSAR/DPA:** Nicht angegeben (in der Privacy Policy kein separater DSAR/DPA-Kontakt genannt; Sales-E-Mail auf Pricing-Seite).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy wird ohne Nutzerwunsch nicht geloggt (Standardzustand pro Konfiguration kann trotzdem vom Dashboard-Default abhängen → selbst prüfen).
- **Abschaltbar?** Ja (Logging kann deaktiviert werden; „disable logging completely“ wird genannt).
- **Wo (Menüpfad):** my.nextdns.io → (Profil) → *Analytics/Logs/Logging* (Bezeichnungen im UI prüfen).

**Logs & Retention:**
- **Logging-Level:** konfigurierbar (inkl. deaktivierbar; optional auch Teile wie Domain oder Client-IP weglassbar laut Help-Center).
- **Aufbewahrung:** konfigurierbar (z.B. 1h bis 2y; Speicherregion US/EU/UK/CH wählbar).
- **Lösch-/Opt-out-Optionen:** Privacy Policy nennt Export/Delete („What You See Is What We Have“); Logging kann komplett deaktiviert werden.

**Abwägung am Punkt:** Weniger Logging reduziert Metadaten, macht aber Debugging und „Warum wurde X geblockt?“ deutlich schwerer.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** DNS-over-HTTPS (DoH) und DNS-over-TLS (DoT) werden genannt (Transportverschlüsselung).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (nicht relevant für DNS-Transport; eher Konto/Auth-Thema).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben (keine klare Doku-Seite in Primärquellen gefunden).
- **Recovery/Account-Wiederherstellung:** Nicht angegeben (Reset-/Recovery-Prozess nicht offiziell dokumentiert auffindbar; UI ist JS-gebunden).
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben (im offiziellen CLI-Repo ist kein SECURITY.md hinterlegt).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Encrypted DNS nutzen (DoH/DoT), passend zur Plattform.**  
   **Prüfen:** Test/Status in NextDNS-UI zeigt „aktiv“ / Anfragen laufen über NextDNS.
2) **Logging bewusst konfigurieren:** kurze Retention oder komplett deaktivieren.  
   **Prüfen:** Retention-Wert sichtbar; Log-Ansicht bleibt leer, wenn Logging aus ist.
3) **Free-Quota berücksichtigen (falls Free):** Überschreitung schaltet Features ab.  
   **Prüfen:** Monitoring/Benachrichtigung oder Zähler im Konto; Verhalten laut Pricing/KB.

**Stolpersteine:**
- Zu aggressive Blocklisten → mehr False Positives; ohne Logs wird Debugging schwerer (Abwägung: Datensparsamkeit vs. Diagnose).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Logging komplett deaktivieren** oder auf sehr kurze Retention setzen; nur temporär fürs Debugging einschalten.
- **„Device/Client-Infos“ minimieren**, wo Clients/Installer Optionen bieten (z.B. Windows Deployment: REPORT_DEVICE_NAME deaktivieren, falls nicht nötig).
- **Separate Profile für sensible Geräte** (z.B. „No-Logs“-Profil vs. „Debug“-Profil).  
**Abwägung:** weniger Übersicht, mehr manuelle Fehlersuche.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Cloud-Metadaten minimieren:** Logging aus, keine optionalen Client-Infos, kurze Testfenster nur bei Bedarf.
- **Netzwerk-Isolation:** NextDNS nur in einem dedizierten Netzsegment/Profil nutzen; besonders sensible Systeme ggf. mit lokalem Resolver betreiben.
- **Admin-Härtung für verwaltete Clients:** Bei Windows kann UI deaktiviert werden, damit Nutzer den Client nicht einfach abschalten können (msiexec-Properties).  
**Abwägung:** deutlich mehr Betriebsaufwand; schwierigeres Debugging ohne Logs.

</details>

## Features
- DNS-over-HTTPS (DoH) und DNS-over-TLS (DoT)
- Analytics & Logs (Retention konfigurierbar oder deaktivierbar; Speicherregion wählbar)
- Blocklisten + Denylist/Allowlist
- Parental Controls (Kategorien, SafeSearch, YouTube Restricted Mode, Zeitfenster)
- Rewrites (DNS-Antworten überschreiben), optionaler Block-Page
- DNSSEC-Validierung

## Alternativen
- AdGuard DNS (DNS, Fokus: Filter-Ökosystem & Apps; Abwägung: Anbieter-Cloud)
- Control D (DNS, Fokus: Policy/Control; Abwägung: Anbieter-Cloud)
- Quad9 (DNS, Fokus: Security-Resolver; Abwägung: weniger Custom-Filtering)
- Cloudflare DNS (1.1.1.1) (DNS, Fokus: Performance/DoH; Abwägung: anderer Daten-/Policy-Fokus)
- Mullvad DNS (DNS; Abwägung: weniger UI/Management)
- Pi-hole / AdGuard Home / Unbound (Self-Hosting DNS; Abwägung: Wartung/Updates im eigenen Betrieb)

## Nicht gelöst / offene Punkte
- Keine eindeutig auffindbare, separate **Service-AGB/EULA** für den DNS-Dienst (Terms of Use im Help-Center beziehen sich auf die Website).
- **Jurisdiktion/Impressum/Legal-Kontakt** für NextDNS Inc. ist nicht klar ausgewiesen.
- **Konto-Sicherheitsfeatures** (2FA/Passkeys/Hardware-Keys) sind nicht als offizieller KB-Artikel dokumentiert auffindbar.

## Quellen

- https://github.com/nextdns/nextdns
- [NextDNS (Website)](https://nextdns.io/)
- [Pricing](https://nextdns.io/pricing)
- [Privacy Policy](https://nextdns.io/privacy)
- [Help Center: Navigation logs retention (Staff-Aussage zu Retention/„Logs nicht erzeugt“)](https://help.nextdns.io/t/p8hpdsa/navigation-logs-retention)
- [Help Center: What happens after 300k queries?](https://help.nextdns.io/t/p8hmvaw/what-happens-after-300k-queries)
- [Help Center: Windows Client Mass Deployment Guide](https://help.nextdns.io/t/83hsj8t/windows-client-mass-deployment-guide)
- [Help Center: Terms of Use](https://help.nextdns.io/terms)
- [GitHub: nextdns/nextdns (CLI-Client)](https://github.com/nextdns/nextdns)
