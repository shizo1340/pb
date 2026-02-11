---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / AdGuard"
url: "/anbieter/adguard/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-06"
robots: "index,follow"
description: "Kurzprofil von AdGuard (Kategorie: Adblock & Tracking)."
provider: ""
name: "AdGuard"
category: "Adblock & Tracking"
website: "https://adguard.com/"
repo: "https://github.com/AdguardTeam"
license: "Gemischt (je Produkt; z.B. AdGuard Browser Extension & AdGuard Home: GPL-3.0; kommerzielle Apps: EULA/proprietär)"
policies: ""
privacy: "https://adguard.com/en/privacy.html"
terms: "https://adguard.com/en/eula.html"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: "[]"
pricing: "mixed"
free_tier: "yes"
open_source: "partial"
self_host_possible: "unknown"
account_required: "unknown"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Zypern (Limassol)"
region: "eu"
logs: "configurable"
logs_notes: "konfigurierbar (produktabhängig; u.a. DNS-Query-Logs, Debug-Logs)"
retention: "configurable"
retention_notes: "teilweise konfigurierbar (produktabhängig; u.a. DNS-Logs; Crash-Reports Android: 30 Tage, falls aktiviert)"
retention_max_days: "30"
data_notes: "AdGuard ist eine Produktfamilie (u.a. Browser-Erweiterung, Desktop-/Mobile-Apps, AdGuard DNS, AdGuard Home). Datenflüsse/Logging hängen stark vom Produkt und aktivierten Modulen ab. Relevanter Trade-off: Für HTTPS-Filtering erzeugen einige AdGuard-Apps ein lokales Root-Zertifikat zur TLS-Entschlüsselung auf dem Gerät (lokales MITM für Filterzwecke)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

AdGuard ist ein Anbieter aus der Kategorie **Adblock & Tracking**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Werbung/Tracking entweder **im Browser** (Extension) oder **systemweit** (Apps) reduzieren willst und bereit bist, je nach Produkt passende Logging-/Privacy-Schalter zu prüfen.
- **Weniger geeignet wenn:** du **keinen lokalen TLS-Interceptor** auf dem Gerät akzeptierst (relevant, wenn du HTTPS-Filtering in den Apps aktivierst) oder wenn du **DNS-Query-Logs in einer Cloud** grundsätzlich vermeiden willst.
- **Wichtigster Abwägung:** **Systemweite Filterung + optionales HTTPS-Filtering** vs. **zusätzliche Eingriffe ins Netzwerk/Root-Zertifikat** und potenziell mehr Diagnose-/Metadaten bei Support/Logs.

## Sofortmaßnahmen
- **Private AdGuard DNS:** Query-Logging im Dashboard deaktivieren oder Retention reduzieren → weniger gespeicherte DNS-Metadaten.
- **AdGuard Apps (Windows/Android):** HTTPS-Filtering nur aktivieren, wenn du es wirklich brauchst → vermeidet ein zusätzliches lokales Root-Zertifikat für TLS-Inspection.
- **AdGuard Account:** 2FA aktivieren (falls du ein Konto nutzt) → reduziert Risiko von Account-Übernahmen.

## Entscheidungshilfe
- Wenn du **nur im Browser** filtern willst, dann nutze die **AdGuard Browser Extension** ohne Konto (Abwägung: kein systemweiter Schutz außerhalb des Browsers).
- Wenn du **systemweit** filtern willst (Apps), dann plane ein, **HTTPS-Filtering bewusst zu entscheiden** (Abwägung: für HTTPS-Filterung wird lokal ein Root-Zertifikat genutzt).
- Wenn du **DNS-basiertes Blocking für viele Geräte** willst, dann ist **AdGuard Home (self-hosted)** relevant (Abwägung: du betreibst selbst Infrastruktur; DNS-Metadaten liegen lokal bei dir).
- Wenn du **DNS-Statistiken/Query-Logs im Web-Dashboard** brauchst, dann ist **Private AdGuard DNS** passend (Abwägung: Query-Logs/Device-Namen liegen serverseitig; Logging/Retention prüfen).
- Wenn du **Phishing/Malware-Schutz** aktivierst, dann nutzt AdGuard laut Doku **Hash-/Hash-Präfix-Checks** (Abwägung: es werden Hash-Präfixe an Server gesendet; Schutz kann je Produktumfang variieren).
- Wenn du **Support-Diagnose** nutzt, dann sende Logs/Dumps nur gezielt und zeitlich begrenzt (Abwägung: Logs können technisch detailliert sein und mehr Kontext enthalten als „nur Einstellungen“).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | AdGuard |
| Kategorie | Adblock & Tracking |
| Website | https://adguard.com/ |
| Quellcode | https://github.com/AdguardTeam |
| Lizenz | Gemischt (je Produkt; z.B. AdGuard Browser Extension & AdGuard Home: GPL-3.0; kommerzielle Apps: EULA/proprietär) |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | teilweise (z.B. für AdGuard Account/DNS-Dashboard/Lizenzen; nicht für AdGuard Home) |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Paddle, PayPro Global (je nach Produkt/Checkout; laut Privacy Policy) |
| Jurisdiktion | Zypern (Limassol) |
| Logs | konfigurierbar (produktabhängig; u.a. DNS-Query-Logs, Debug-Logs) |
| Retention | teilweise konfigurierbar (produktabhängig; u.a. DNS-Logs; Crash-Reports Android: 30 Tage, falls aktiviert) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://adguard.com/en/privacy.html
- AGB/Terms: https://adguard.com/en/eula.html
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
AdGuard ist eine Produktfamilie (u.a. Browser-Erweiterung, Desktop-/Mobile-Apps, AdGuard DNS, AdGuard Home). Datenflüsse/Logging hängen stark vom Produkt und aktivierten Modulen ab. Relevanter Abwägung: Für HTTPS-Filtering erzeugen einige AdGuard-Apps ein lokales Root-Zertifikat zur TLS-Entschlüsselung auf dem Gerät (lokales MITM für Filterzwecke).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Produktabhängig; u.a. **E-Mail + Passwort/Passworthash** für Account, **Lizenz-/Zahlungsdaten** über Payment Provider, sowie **optionale Diagnosedaten** (Crash-Reports/Telemetrie nur mit Einwilligung). Bei **Private AdGuard DNS** können **DNS-Query-Logs** (inkl. Zeitstempel, Geräte-Namen, Request-Status/Inhalt) im Dashboard gespeichert werden, je nach Logging-Einstellung.
- **Wofür:** Bereitstellung der Funktionen (z.B. Konto/Lizenzen), Update-/Statusprüfungen, optional Support/Diagnose, optional Sicherheitsfunktionen (Browsing Security).
- **Weitergabe/Subprozessoren:** Laut Privacy Policy u.a. **Paddle** und **PayPro Global** für Zahlungen (produktabhängig). Zusätzlich kann bei Android „Browsing Security“ eine **Safe-Browsing-API** genutzt werden (Hash-Präfixe statt Klartext-URLs, laut Anbieter).
- **Drittlandtransfer:** AdGuard nennt Speicherung in einem **eigenen Rechenzentrum in Frankfurt** und beschreibt Transfermechanismen (z.B. Standardvertragsklauseln), falls Zugriff/Transfers nötig werden.
- **Zahlungsabwicklung/Payment Processor:** Paddle und PayPro Global (AdGuard); für Private AdGuard DNS wird Paddle genannt.
- **Kontakt/DSAR/DPA:** privacy@adguard.com für Datenschutzanfragen; DPA ist verlinkt.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Produktabhängig. Beispiel Android: „Technical and interaction data“ ist **beim ersten Start abwählbar** und laut Privacy Notice **standardmäßig deaktiviert**; Crash-Reports werden ebenfalls nur nach Einwilligung gesendet.
- **Abschaltbar?** Ja, soweit per Einwilligung/Opt-out beschrieben (z.B. Android: Zustimmung kann widerrufen werden; Private DNS: Logging kann deaktiviert werden).
- **Wo (Menüpfad):**
  - **Android:** Einwilligung beim **ersten Start** (Crash-Reports/Telemetrie) + optional „Send app logs and system info“ beim Support-Kontakt (Bezeichnungen können je Version abweichen).
  - **Windows (HTTPS-Filter-Zertifikat):** *Settings → Network → HTTPS filtering* (relevant für TLS-Inspection).

**Logs & Retention:**
- **Logging-Level:** Konfigurierbar (z.B. Debug-/Trace-Logs für Support; Level je Produkt).
- **Aufbewahrung:** Produktabhängig; Beispiele: **Android Crash-Reports: 30 Tage** (wenn aktiviert). **Private AdGuard DNS:** Query-Logs werden für eine **begrenzte, konfigurierbare Zeit** gespeichert; Logging kann deaktiviert werden.
- **Lösch-/Opt-out-Optionen:** Bei AdGuard Account: Daten können per Account-Löschung oder Anfrage an privacy@adguard.com gelöscht werden (laut Privacy Policy); DNS-Logs/Retention in den Account-Einstellungen konfigurierbar.

**Abwägung am Punkt:** Weniger Telemetrie/Logs kann Diagnose/Support erschweren; mehr Telemetrie/Logs erhöht Metadatenrisiko (z.B. DNS-Query-Verlauf, Gerätebezeichnungen).

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben (produktabhängig; in den hier genutzten Primärquellen keine E2E-Behauptung als Standard).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** **2FA ist für den AdGuard Account vorhanden** (Authenticator-basiert, laut Anbieter-Doku/Blog).
- **Recovery/Account-Wiederherstellung:** 2FA nutzt Backup-Code (laut Anbieter-Anleitung); bei Lizenzverwaltung kann ein License Key relevant sein (Account-Funktionen sind produkt-/lizenzabhängig).
- **Vuln-Handling / Security-Kontakt:** security@adguard.com ist als Kontakt genannt; Responsible-Disclosure-Policy ist verlinkt.

**Prüf-Schritte:**
1) AdGuard Account → Settings → 2FA aktivieren (falls du ein Konto nutzt)  
   **Indikator:** 2FA-Status „enabled“ + Backup-Code gesichert.
2) Doku/KB zu HTTPS-Filtering lesen (falls Apps)  
   **Indikator:** du weißt, ob ein lokales Root-Zertifikat installiert wird und wie man es deaktiviert.
3) Kontakt/Responsible Disclosure prüfen  
   **Indikator:** klarer Meldeweg (E-Mail) + Regeln für Offenlegung.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **AdGuard Account absichern**, falls du ihn nutzt (z.B. für Lizenzen/Private DNS).  
   **Prüfen:** 2FA ist im Account sichtbar als aktiv.
2) **Logging niedrig halten** und Debug/Trace nur für Fehleranalyse aktivieren.  
   **Prüfen:** Logging-Level nach der Diagnose wieder zurücksetzen.
3) **HTTPS-Filtering bewusst entscheiden** (nur aktivieren, wenn du systemweit auch HTTPS filtern willst).  
   **Prüfen:** In den App-Einstellungen ist HTTPS-Filtering eindeutig an/aus; bei Aktivierung ist das lokale Zertifikat installiert.

**Stolpersteine:**
- **HTTPS-Filtering** nutzt ein lokales Root-Zertifikat und kann in Browsern/Apps zu Zertifikatswarnungen oder Update-Problemen führen (z.B. bestimmte Firefox-Einrichtungen).
- **Private DNS-Logs** sind hilfreich für Auswertung, aber sensibel (DNS-Verlauf, Geräte-Namen) → Logging/Retention aktiv steuern.
- **Browsing Security** arbeitet je nach Produkt mit Hash-/Hash-Präfix-Checks; im Browser-Extension-Modus ist der Schutz laut Doku eingeschränkter als in Apps.

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **ohne Konto**, wo möglich (z.B. Browser Extension; AdGuard Home statt Cloud-Dashboard).
- In **Private AdGuard DNS**: Query-Logging deaktivieren oder Retention minimal setzen; Geräte-Namen neutral halten.
- **Crash-Reports/Telemetrie** nicht aktivieren und Support-Logs nur gezielt senden.
**Abwägung:** weniger Komfort bei Debugging/Support und weniger Statistik-/Dashboard-Funktionen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne Nutzung nach Kontext (z.B. **separate Browser-Profile/VM** für riskante Sessions; Adblocker-Regeln getrennt halten).
- **Kein HTTPS-Filtering**, wenn du keine TLS-Inspection auf dem Gerät tolerierst (stattdessen DNS-/Browser-only-Blocking nutzen).
- **Self-Hosting** (AdGuard Home) und DNS-Logging lokal minimieren; Admin-UI absichern (starke Passwörter, Zugriff nur intern/VPN).
**Abwägung:** deutlich mehr Eigenbetrieb/Komplexität und potenziell weniger „Alles-in-einem“-Komfort.

</details>

## Features
- Browser-Erweiterung (Open Source) mit Filterlisten, Allowlist, User Rules
- Tracking protection / Stealth Mode (je nach Produkt verfügbar)
- Phishing-/Malware-Schutz („Browsing security“) via Hash-Präfix-Checks
- Systemweiter Blocker als Apps (Windows/Mac/Android/iOS je nach Plattform)
- HTTPS-Filtering (optional; erfordert lokales Root-Zertifikat, je nach Produkt/OS)
- AdGuard DNS (öffentlich/privat; Query-Logs optional/konfigurierbar)
- AdGuard Home (self-hosted DNS-Blocker)

## Alternativen
- [uBlock Origin](/anbieter/ublock-origin/) – Browser-Erweiterung; Abwägung: primär Browser-Kontext statt systemweit.
- Brave Shields — Browser-integriert; Abwägung: an Browser gebunden, weniger „produktübergreifend“.
- [Pi-hole](/anbieter/pi-hole/) – self-hosted DNS-Blocking; Abwägung: DNS-Level statt App/HTTPS-Filterung.
- [NextDNS](/anbieter/nextdns/) – DNS-Dienst mit Profilen/Logs; Abwägung: Cloud-DNS mit einstellbaren Metadaten/Retention.

## Nicht gelöst / offene Punkte
- **Keine Audits** in den hier genutzten Anbieter-Quellen gefunden.
- **Transparency Report** und **Warrant Canary** sind nicht angegeben.
- AdGuard ist eine Produktfamilie: Wenn du **Windows/Mac/iOS** nutzt, prüfe zusätzlich die jeweilige **produkt-spezifische Privacy Notice** (dort können Telemetrie-/Log-Details abweichen).

## Quellen

- title: "GitHub – AdGuardBrowserExtension (Repo/Lizenz)
- [AdGuard – Privacy policy](https://adguard.com/en/privacy.html)
- [AdGuard – EULA (License agreement)](https://adguard.com/en/eula.html)
- [AdGuard – Terms and conditions of the AdGuard account and AdGuard websites](https://adguard.com/en/terms-and-conditions.html)
- [AdGuard – Contact Us (Adresse/Jurisdiktion)](https://adguard.com/en/contacts.html)
- [AdGuard Browser Extension – Privacy notice](https://adguard.com/en/privacy/browser-extension.html)
- [AdGuard for Android – Privacy notice](https://adguard.com/en/privacy/android.html)
- [AdGuard DNS – Privacy notice](https://adguard-dns.io/en/privacy.html)
- [AdGuard Home – Privacy notice](https://adguard.com/en/privacy/home.html)
- [AdGuard – Data processing agreement (DPA)](https://adguard.com/en/dpa.html)
- [AdGuard Knowledge Base – Tracking protection (formerly Stealth Mode)](https://adguard.com/kb/general/stealth-mode/)
- [AdGuard Knowledge Base – Phishing and malware protection (Hash-Präfixe)](https://adguard.com/kb/general/browsing-security/)
- [AdGuard Knowledge Base – Browsing security (Android, Menüpfad)](https://adguard.com/kb/adguard-for-android/features/protection/browsing-security/)
- [AdGuard Knowledge Base – Certificate-related issues (Windows, Root-Zertifikat)](https://adguard.com/kb/adguard-for-windows/solving-problems/connection-not-trusted/)
- [AdGuard Knowledge Base – How to collect AdGuard logs (Windows, Logging Level)](https://adguard.com/kb/adguard-for-windows/solving-problems/adguard-logs/)
- [GitHub – AdGuardHome (Repo/Lizenz)](https://github.com/AdguardTeam/AdGuardHome)
- [GitHub – AdGuardBrowserExtension (Repo/Lizenz)](https://github.com/AdguardTeam/AdguardBrowserExtension)

