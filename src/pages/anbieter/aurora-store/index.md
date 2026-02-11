---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Aurora Store"
url: "/anbieter/aurora-store/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "no"
status: "done"
updated: "2026-01-05"
robots: "index,follow"
description: "Kurzprofil von Aurora Store (Kategorie: Android App Client)."
provider: ""
name: "Aurora Store"
category: "Android App Client"
website: "https://auroraoss.com/"
repo: "https://gitlab.com/AuroraOSS/AuroraStore"
license: "GPL-3.0-or-later"
policies: ""
privacy: "https://auroraoss.gitbook.io/wiki/our-apps/aurora-store/privacy-policy"
terms: "https://auroraoss.gitbook.io/wiki/our-apps/aurora-store/terms-of-service"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: "[]"
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Nicht angegeben"
region: "unknown"
logs: "minimal"
retention: "unknown"
data_notes: "Aurora Store ist ein Open-Source-Client als Frontend für Google Play. Für die Funktion werden laut Anbieter verschiedene Geräte- und Nutzungsdaten an Google übertragen; zusätzlich nutzt Aurora Store für „Anonymous Login“ einen Token-Dispenser-Server des Projekts (dort werden laut Privacy Policy IP-Adressen für Rate-Limiting verarbeitet)."
features: ""
alternatives: ""
payment_processors: "Spenden (optional): PayPal, Liberapay, Bitcoin, Bitcoin Cash, Ethereum, BHIM-UPI"
sources: ""
---
## Kurzprofil

Aurora Store ist ein Anbieter aus der Kategorie **Android App Client**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Apps aus dem Google-Play-Katalog abrufen willst, ohne zwingend den offiziellen Play-Store-Client zu nutzen, und dabei optional „Anonymous Login“ verwenden möchtest.
- **Weniger geeignet wenn:** du vermeiden willst, dass Geräte- und Nutzungsmetadaten an Google übertragen werden (Aurora nennt hierfür Pflichtdaten für die Funktion).
- **Wichtigster Abwägung:** Zugriff auf den Play-Katalog vs. unvermeidbare Metadaten an Google (und Abhängigkeit von Token-Dispenser/Rate-Limits im Anonymous-Modus).

## Sofortmaßnahmen
- **Anonymous Login statt Google Login nutzen:** reduziert die direkte Bindung an dein eigenes Google-Konto (Abwägung: Funktion hängt vom Token-Dispenser ab).
- **Blacklist/Filter aktiv nutzen:** kann verhindern, dass bestimmte Apps für Update-Checks an Google gemeldet werden (Abwägung: weniger Komfort bei Updates).
- **Signaturabgleich bei Sideloading:** SHA1/SHA256 der App-Signatur mit den Anbieterangaben vergleichen (Abwägung: zusätzlicher manueller Schritt).

## Entscheidungshilfe
- Wenn du **Paid Apps/Wunschlisten** über Google Play brauchst, dann nutze **Google Login** (Abwägung: zusätzliche Kontodaten/Verknüpfung mit Google).
- Wenn du **ohne eigenes Google-Konto** arbeiten willst, dann nutze **Anonymous Login** (Abwägung: abhängig vom Token-Dispenser-Server und dessen Rate-Limits).
- Wenn du **Update-Checks für bestimmte Apps** nicht an Google melden willst, dann nutze die **Blacklist-Funktion** (Abwägung: keine automatischen Updates für diese Apps).
- Wenn du **App-Listen-Übertragung reduzieren** willst, dann nutze **Filter/Blacklist** (Abwägung: weniger „automatisch“, mehr manuelle Kontrolle).
- Wenn du Aurora Store **nicht aus dem offiziellen Android-Ökosystem** installierst, dann prüfe **Signaturen/Bezugsquelle** (Abwägung: etwas mehr Aufwand bei Installation/Updates).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Aurora Store |
| Kategorie | Android App Client |
| Website | https://auroraoss.com/ |
| Quellcode | https://gitlab.com/AuroraOSS/AuroraStore |
| Lizenz | GPL-3.0-or-later |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Spenden (optional): PayPal, Liberapay, Bitcoin, Bitcoin Cash, Ethereum, BHIM-UPI |
| Jurisdiktion | Nicht angegeben |
| Logs | minimal |
| Retention | Nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://auroraoss.gitbook.io/wiki/our-apps/aurora-store/privacy-policy
- AGB/Terms: https://auroraoss.gitbook.io/wiki/our-apps/aurora-store/terms-of-service
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Aurora Store ist ein Open-Source-Frontend-Client für Google Play. Laut Privacy Policy werden für die Funktion verpflichtende Metadaten an Google übertragen (u.a. IP-Adresse, Geräte-/Build-Infos, installierte Apps für Update-Checks). Für Anonymous Login gibt es einen Token-Dispenser-Server; laut Anbieter werden dorthin IP-Adressen zur Stabilität/Rate-Limits übermittelt.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Pflichtdaten an Google umfassen u.a. **IP-Adresse**, sowie **Geräte-/Build-Informationen** und **App-bezogene Daten** (installierte Apps/Suchanfragen/Package-Namen bei neuen Installationen). Optional bei Google Login zusätzlich **Account-Details** zur Sign-in-Verifikation.
- **Wofür:** Funktionalität (Abruf/Updates/Suche wie Play Store) und Auswahl passender App-Varianten je Gerät; Update-Checks basieren auf gemeldeten Apps.
- **Weitergabe/Subprozessoren:** Nicht als Subprozessorenliste angegeben; der Anbieter nennt eine eigene Server-Komponente (Token Dispenser) und Google als Ziel der Datenverarbeitung.
- **Drittlandtransfer:** Unklar (Google als Empfänger wird genannt; keine separate Transfer-/DPA-Angabe gefunden).
- **Zahlungsabwicklung/Payment Processor:** Keine Bezahlfunktion dokumentiert; Disclaimer nennt **Spendenlinks** (PayPal, Liberapay sowie Krypto/UPI).
- **Kontakt/DSAR/DPA:** Kontakt per E-Mail (aurora.dev@gmail.com / auroraoss.dev@gmail.com) und Support-Gruppe; DPA/DSAR-Prozess nicht beschrieben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nicht angegeben (zusätzliche Analytics/Crash-Telemetrie wird nicht beschrieben).
- **Abschaltbar?** Unklar.
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** minimal (laut Privacy Policy wird an den Aurora-Server standardmäßig **nur die IP-Adresse** gesendet, u.a. für Rate-Limiting).
- **Aufbewahrung:** Nicht angegeben (Rate-Limiting-Logik wird beschrieben; konkrete Speicher-/Löschfristen fehlen).
- **Lösch-/Opt-out-Optionen:** Nicht angegeben.

**Abwägung am Punkt:** Weniger (oder keine) Diagnosedaten kann Fehlersuche/Support erschweren; mehr Diagnosedaten erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben (Aurora ist ein Client für Google Play; Datenschutz hängt wesentlich an den beschriebenen Datenflüssen zu Google).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht anwendbar auf App-Ebene; bei Google Login gelten die Google-Konto-Mechanismen.
- **Recovery/Account-Wiederherstellung:** Anonymous Login basiert auf Token-Dispenser; bei Google Login hängt es vom Google-Konto ab.
- **Vuln-Handling / Security-Kontakt:** ToS fordert bei „security breaches“ Kontaktaufnahme; konkrete Disclosure-Policy (z.B. SECURITY.md) nicht genannt.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Bezugsquelle verifizieren** (nur offizielle Downloads/Signaturen).  
   **Prüfen:** SHA1/SHA256 der Signatur mit der AuroraOSS-Wiki-Seite abgleichen.
2) **Anonymous Login nutzen**, falls du kein eigenes Google-Konto verknüpfen willst.  
   **Prüfen:** In „Accounts“ ist ein pseudo-account aktiv (ohne eigenen Google-Login).
3) **Blacklist/Filter einsetzen** für Apps, die nicht für Update-Checks an Google gemeldet werden sollen.  
   **Prüfen:** Blacklist-Manager aktiv, betroffene Apps werden nicht in Update-Checks einbezogen.

**Stolpersteine:**
- **Google Login** kann das Risiko erhöhen, dass Kontodaten/Listen stärker mit deinem Google-Konto verknüpft werden (Abwägung: Paid Apps/Komfort vs. Metadaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **Anonymous Login** und vermeide Google Login, wenn Paid-Apps nicht nötig sind.  
- Verwende **Blacklist** für Apps, deren Update-Checks du nicht automatisch anstoßen willst.  
- Nutze **Device Spoofing** nur gezielt (z.B. App-Kompatibilität), da es die Diagnose von Problemen erschweren kann.  
**Abwägung:** mehr manuelle Kontrolle, potenziell mehr „Session“-Probleme/Rate-Limits.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Installiere Aurora Store nur aus **verifizierten Quellen** und prüfe Signaturen vor jedem Update.  
- Betreibe App-Installation in einem **separaten Android-Profil** (Work Profile/Second User), wenn dein Bedrohungsmodell Trennung verlangt.  
- Minimiere die App-Liste für Update-Checks über konsequente Blacklist-Nutzung.  
**Abwägung:** deutlich höherer Aufwand, mehr Reibung bei Updates/Recovery.

</details>

## Features
- Anonymous Login: Login über bereitgestellte Pseudo-Accounts.
- Google Login: Optionaler Login mit eigenem Google-Konto.
- Device Spoofing: Spoof-Manager mit crowdsourced Device-Konfigurationen.
- Filter apps: Apps nach Quelle/Status filterbar (Schalter).
- Blacklist Apps: Apps aus Update-Checks ausnehmen (nicht an Google für Update-Checks senden).
- Dokumentierte APK-Signaturen (SHA1/SHA256) zum Abgleich bei Installation.

## Alternativen
- Google Play Store (offizieller Client; Abwägung: Konto-/Play-Services-Bindung).
- F-Droid (freie Repos; Abwägung: kein Zugriff auf den Play-Katalog).
- Neo Store / Droid-ify (F-Droid-Clients; Abwägung: abhängig vom F-Droid-Ökosystem).
- Obtainium (Direkt-Updates aus Repos; Abwägung: Quellenpflege pro App).

## Nicht gelöst / offene Punkte
- Keine öffentliche Subprozessoren-/DPA-Liste in den genutzten Quellen gefunden (insb. für Token-Dispenser-Infrastruktur).
- Retention/Löschfristen für IP-basierte Rate-Limit-Logs sind nicht angegeben.
- Zusätzliche Telemetrie/Crash-Reporting (über die beschriebenen Pflichtdaten hinaus) ist nicht dokumentiert.
- Formaler Vulnerability-Disclosure-Prozess (z.B. SECURITY.md) ist nicht ersichtlich.

## Quellen

- Optional: "Login mit eigenem Google-Konto (z.B. für Paid Apps)
- Google Play Store (offizieller Client; Trade-off: "Konto-/Play-Services-Bindung)
- F-Droid (freie Repos; Trade-off: "kein Zugriff auf Play-Katalog)
- Neo Store / Droid-ify (F-Droid-Clients; Trade-off: "abhängig vom F-Droid-Ökosystem)
- Obtainium (Direkt-Updates aus Repos; Trade-off: "Quellenpflege pro App)
- title: "Aurora Store – Repository (GitLab)
- [AuroraOSS Wiki – Aurora Store (Übersicht/Features)](https://auroraoss.gitbook.io/wiki/our-apps/aurora-store)
- [AuroraOSS Wiki – Privacy Policy](https://auroraoss.gitbook.io/wiki/our-apps/aurora-store/privacy-policy)
- [AuroraOSS Wiki – Terms of Service](https://auroraoss.gitbook.io/wiki/our-apps/aurora-store/terms-of-service)
- [AuroraOSS Wiki – Disclaimer](https://auroraoss.gitbook.io/wiki/our-apps/aurora-store/disclaimer)
- [Aurora Store – Quellcode (GitLab)](https://gitlab.com/AuroraOSS/AuroraStore)

