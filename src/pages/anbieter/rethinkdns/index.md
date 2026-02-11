---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / RethinkDNS"
url: "/anbieter/rethinkdns/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von RethinkDNS (Kategorie: DNS)."
provider: ""
name: "RethinkDNS"
category: "DNS"
website: "https://rethinkdns.com/"
repo: "https://github.com/serverless-dns/serverless-dns (Resolver), https://github.com/celzero/rethink-app (Android-App)"
license: "MPL-2.0 (Resolver), Apache-2.0 (Android-App)"
policies: ""
privacy: "https://rethinkdns.com/privacy"
terms: "https://rethinkdns.com/terms"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "partial"
self_host_possible: "yes"
account_required: "unknown"
phone_required: "unknown"
kyc_required: "unknown"
jurisdiction: "Indien (Celzero Pvt Ltd)"
region: "other"
logs: "configurable"
retention: "long"
retention_notes: "0 (Free/Standard); 3 Monate (opt-in bei Paid-Logs, Default laut FAQ)"
retention_max_days: "90"
data_notes: "App laut Privacy Policy ohne Tracker/Analytics; DNS-Resolver laut FAQ ohne Logs im Free-Tier, Paid-Logs nur bei Opt-in. Infrastruktur laut FAQ u.a. Cloudflare Workers & Fly.io; Control Plane/Logs auf AWS (USA); Payments via Stripe."
features: ""
alternatives: ""
payment_processors: "Stripe (für Paid-Services laut FAQ)"
sources: ""
---
## Kurzprofil

RethinkDNS ist ein Anbieter aus der Kategorie **DNS**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du DNS-Anfragen verschlüsselt (DoH/DoT) ausleiten und DNS-basiertes Blocking mit Blocklists nutzen willst, ohne zwingend ein Konto anzulegen.
- **Weniger geeignet wenn:** du keinerlei externe DNS-Infrastruktur nutzen möchtest (z.B. wegen Jurisdiktion/Provider-Abhängigkeit) oder du garantiert ausschließen willst, dass DNS-Logs irgendwo gespeichert werden (auch nicht optional).
- **Wichtigster Abwägung:** **Konfigurierbarkeit/Komfort vs. Vertrauen in Resolver-Infrastruktur & optionale Logging-Funktionen** (Paid + Opt-in) – DNS bleibt zudem Metadaten-Exposure auf Resolver-Ebene.

## Sofortmaßnahmen
- **Nutze DoT/DoH statt unverschlüsseltem DNS:** reduziert Mitlesen/Manipulation auf dem lokalen Netz.
- **Aktiviere nur die Blocklists, die du brauchst:** reduziert False Positives und Debug-Aufwand.
- **Bleib im Free-Tier ohne Log-Opt-in, wenn du keine DNS-Analytics brauchst:** senkt das Risiko zusätzlicher Metadatenhaltung.

## Entscheidungshilfe
- Wenn du DNS-Blocking ohne App willst, dann setze systemweit **Private DNS (DoT)** oder **DoH** auf einen RethinkDNS-Endpunkt (Abwägung: einzelne Apps können DNS umgehen, Debug ist schwieriger).
- Wenn du pro-App-Kontrolle/Monitoring willst, dann nutze die **Android-App** im DNS/Firewall-Modus (Abwägung: VPN-API wird verwendet, mehr lokale Komplexität).
- Wenn du DNS-Analytics/Logs brauchst, dann ist ein **Paid-Account + Log-Opt-in** relevant (Abwägung: DNS-Metadaten werden gespeichert; Retention/Cloud-Speicher beachten).
- Wenn du maximale Kontrolle willst, dann ist **Self-Hosting** (serverless-dns) relevant (Abwägung: Betrieb/Updates/Abhängigkeit von Plattform-Accounts wie Cloudflare/Fly.io).
- Wenn du nur „weniger Tracking“ willst, dann starte mit wenigen Blocklists und prüfe Breakage in kritischen Apps (Abwägung: weniger Blocking = weniger Effekt, mehr Blocking = mehr Fehlalarme).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | RethinkDNS |
| Kategorie | DNS |
| Website | https://rethinkdns.com/ |
| Quellcode | https://github.com/serverless-dns/serverless-dns (Resolver), https://github.com/celzero/rethink-app (Android-App) |
| Lizenz | MPL-2.0 (Resolver), Apache-2.0 (Android-App) |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | unknown |
| Telefon erforderlich | unknown |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Stripe (für Paid-Services laut FAQ) |
| Jurisdiktion | Indien (Celzero Pvt Ltd) |
| Logs | configurable |
| Retention | 0 (Free/Standard); 3 Monate (opt-in bei Paid-Logs, Default laut FAQ) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://rethinkdns.com/privacy
- AGB/Terms: https://rethinkdns.com/terms
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben (laut FAQ bislang keine Third-Party-Audits)

**Daten-Notizen (kurz):**
App laut Privacy Policy ohne Tracker/Analytics; DNS-Resolver laut FAQ ohne Logs im Free-Tier, Paid-Logs nur bei Opt-in. Infrastruktur laut FAQ u.a. Cloudflare Workers & Fly.io; Control Plane/Logs auf AWS (USA); Payments via Stripe.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** laut Privacy Policy werden aus der Android-App keine Daten gesammelt/verkauft/geteilt; für DNS-Resolver werden keine personenbezogenen Daten gesammelt; laut FAQ können bei Paid-Accounts Account-/Payment-Metadaten anfallen, und DNS-Logs nur bei Opt-in.
- **Wofür:** Betrieb des Dienstes; optional Analytics/Reports für Nutzer (nur wenn Logs aktiviert/paid); Billing/Metering für Paid-Services.
- **Weitergabe/Subprozessoren:** laut FAQ u.a. Cloudflare Workers und Fly.io (Resolver), AWS (Control Plane/Logs), Stripe (Payments); Details als formale Subprozessorenliste/DPA nicht angegeben.
- **Drittlandtransfer:** laut FAQ liegen Logs (falls aktiviert) in AWS-Rechenzentren in den USA; Terms erwähnen Transfer „to other jurisdictions“.
- **Zahlungsabwicklung/Payment Processor:** Stripe (laut FAQ).
- **Kontakt/DSAR/DPA:** Kontakt per Anbieter-Mail („write to us“/Support-Mail in Terms); DPA nicht angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy: App ohne Tracker/Analytics; Website ohne Cookies/Tracking.
- **Abschaltbar?** N/A (laut Policy keine App-Telemetrie/Analytics im Default).
- **Wo (Menüpfad):** Nicht zutreffend.

**Logs & Retention:**
- **Logging-Level:** configurable (laut FAQ: keine Logs im Free-Tier/Standard; Logs nur bei Paid + Opt-in).
- **Aufbewahrung:** 3 Monate (Default bei aktivierten Logs laut FAQ; künftig kürzer/länger konfigurierbar angekündigt).
- **Lösch-/Opt-out-Optionen:** Logs sind optional; Löschung laut FAQ aktuell per Nachricht an den Anbieter („drop us a note“), Self-Service „eventually“.

**Abwägung am Punkt:** Weniger Logging bedeutet weniger auswertbare Diagnosen/Reports; Logging (auch opt-in) erhöht Metadatenrisiko und erzeugt Speicher-/Zugriffsfragen.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** DNS-Transport über DoH/DoT (und in App u.a. DNSCrypt/ODoH laut Terms); Logs (wenn aktiv) werden laut FAQ verschlüsselt gespeichert (S3 + KMS) und verschlüsselt übertragen.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben (für Paid-Accounts/Plattformkonto keine konkrete MFA-Doku gefunden).
- **Recovery/Account-Wiederherstellung:** Nicht angegeben.
- **Vuln-Handling / Security-Kontakt:** Kein offizieller Responsible-Disclosure-Prozess als eigene Security-Seite genannt; Kontakt erfolgt allgemein über Support/„write to us“.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Systemweit DoT/DoH aktivieren**  
   **Android (Private DNS):** Einstellungen → Netzwerk & Internet → Private DNS → Hostname (DoT) eintragen (z.B. `max.rethinkdns.com`).  
   **Prüfen:** DNS-Leaktest zeigt DoT/DoH-Nutzung; Browsen funktioniert.

2) **Blocklists gezielt wählen (DNS-Blocking)**  
   **Web-Konfiguration:** `rethinkdns.com/configure` → Blocklists wählen → personalisierten Endpunkt übernehmen.  
   **Prüfen:** Test-Domain aus Blocklist wird geblockt; kritische Apps bleiben funktional.

3) **Keine Logs aktivieren, wenn du keine Reports brauchst**  
   **Prüfen:** Free/Standard ohne Konto/Logs nutzen; bei Paid-Account Log-Option explizit deaktiviert lassen.

**Stolpersteine:**
- DNS-Blocking kann „Breakage“ verursachen (Abwägung: mehr Blocking vs. mehr Fehlalarme/Support-Aufwand).
- Einige Apps umgehen System-DNS (DoH im App-Stack), dann greift DNS-Blocking ggf. nicht.

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze die DNS-Resolver-Funktion ohne Registrierung, solange du keine Paid-Features brauchst (Abwägung: keine zentralen Analytics/Reports).
- Halte Blocklists klein und nachvollziehbar (Abwägung: weniger Abdeckung gegen Tracker/Malware).
- Android-App nur im DNS-Modus nutzen, wenn du lokale Kontrolle willst; sonst systemweit DoT/DoH (Abwägung: App-Modus = mehr lokale Komplexität).

**Abwägung:** weniger zentrale Metadatenhaltung, dafür weniger Komfortfunktionen (Reports/Logs) und mehr manueller Testaufwand bei Breakage.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Self-Hosting `serverless-dns` und betreibe den Resolver unter eigenen Accounts/Restriktionen (Abwägung: Betriebsaufwand + Plattformabhängigkeiten bleiben).
- Vermeide Paid-Logs vollständig (Abwägung: keine DNS-forensischen Auswertungen).
- Trenne Geräteprofile (z.B. eigener Nutzer/Work-Profile für „riskante“ Apps) und halte DNS-Policy je Profil unterschiedlich (Abwägung: Einrichtung/Fehleranfälligkeit).

**Abwägung:** maximale Kontrolle über Policies/Endpoints, aber deutlich mehr Betrieb, Wartung und Fehlersuche.

</details>

## Features
- Public DNS-over-HTTPS (DoH) & DNS-over-TLS (DoT) Endpunkte.
- Konfigurierbare Blocklists (DNS-basiertes Blocking).
- Optional: DNS-Logs/Analytics nur für Paid-Accounts und nur bei Opt-in.
- Self-Hosting möglich (serverless-dns: Cloudflare Workers / Deno / Fastly / Fly.io).
- Android-App: lokaler DNS-Client + Firewall/Netzwerkmonitor (Open Source).

## Alternativen
- NextDNS (Abwägung: andere Konto-/Policy-Struktur; abhängig vom jeweiligen Logging-/Retention-Modell).
- Control D (Abwägung: andere Filter-/Policy-Features und Verwaltung).
- Eigenbetrieb (z.B. Pi-hole / Unbound) (Abwägung: eigener Betrieb, Updates, Verfügbarkeit, Remote-Zugriff).

## Nicht gelöst / offene Punkte
- Ob es eine eigenständige DPA-/Subprozessorenliste außerhalb der FAQ gibt, ist nicht angegeben.
- Ein dedizierter Responsible-Disclosure-/Security-Kanal ist nicht als eigener Prozess dokumentiert.

## Quellen

- Optional: "DNS-Logs/Analytics nur für Paid-Accounts und nur bei Opt-in
- Self-Hosting möglich (serverless-dns: "Cloudflare Workers / Deno / Fastly / Fly.io)
- Android-App: "lokaler DNS-Client + Firewall/Netzwerkmonitor (Open Source)
- NextDNS (DNS-Konfiguration als Service; Trade-off: "anderer Account-/Logging-Ansatz)
- Control D (DNS-Konfiguration; Trade-off: "andere Filter-/Policy-Features)
- Eigenbetrieb (z.B. Pi-hole / Unbound) (Trade-off: "eigener Betrieb, Updates, Verfügbarkeit)
- https://github.com/celzero/rethink-app
- [Privacy Policy](https://rethinkdns.com/privacy)
- [Terms and Conditions](https://rethinkdns.com/terms)
- [FAQs](https://rethinkdns.com/faq)
- [Configure Blocklists](https://rethinkdns.com/configure)
- [Downloads](https://rethinkdns.com/download)
- [GitHub: serverless-dns/serverless-dns](https://github.com/serverless-dns/serverless-dns)
- [GitHub: celzero/rethink-app](https://github.com/celzero/rethink-app)
