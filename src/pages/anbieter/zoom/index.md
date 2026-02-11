---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Zoom"
url: "/anbieter/zoom/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-04"
robots: "index,follow"
description: "Kurzprofil von Zoom (Kategorie: Video & Meetings)."
provider: ""
name: "Zoom"
category: "Video & Meetings"
website: "https://www.zoom.com/"
repo: "https://github.com/zoom"
license: "Proprietär (Produkt); Repos mit gemischten Open-Source-Lizenzen"
policies: ""
privacy: "https://www.zoom.com/en/trust/privacy/privacy-statement/"
terms: "https://www.zoom.com/en/trust/terms/"
transparency: "https://www.zoom.com/en/trust/transparency/"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "no"
self_host_possible: "unknown"
account_required: "unknown"
phone_required: "unknown"
kyc_required: "no"
jurisdiction: "USA (Zoom Communications, Inc.)"
region: "us"
logs: "unknown"
retention: "unknown"
retention_notes: "Unklar (Dashboard-Daten: 15 Monate; sonst keine allgemeingültige Frist genannt)"
retention_max_days: "450"
data_notes: "Zoom beschreibt Diagnostic Data (Meeting-Metadaten/Telemetry/Event-Logs) sowie optional abschaltbare Diagnosedaten. E2EE ist optional und hat funktionale Einschränkungen."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Zoom ist ein Anbieter aus der Kategorie **Video & Meetings**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du kurzfristig an externen Meetings teilnehmen musst oder in einer Organisation arbeitest, die Zoom standardisiert betreibt (Admin-Kontrollen, Security-Defaults).
- **Weniger geeignet wenn:** du Metadaten/Diagnosedaten maximal minimieren willst oder eine self-hostbare/komplett offene Lösung brauchst.
- **Wichtigster Abwägung:** **E2EE vs. Funktionen** – End-to-End Encryption ist möglich, kann aber Features einschränken (z.B. bestimmte Einwahl-/Integrationsoptionen).

## Sofortmaßnahmen
- **Passcode + Waiting Room als Standard aktivieren** → reduziert Meeting-Störungen durch „offene Links“.
- **Zwei-Faktor (Two-step verification) oder Passkeys aktivieren** → senkt Risiko von Account-Übernahmen.
- **Optional Diagnostic Data deaktivieren** → reduziert zusätzliche Diagnosedaten jenseits der „Required diagnostic data“.

## Entscheidungshilfe
- Wenn du **nur Teilnehmer:in** bist, dann prüfe vor dem Join, ob du **ohne Konto** beitreten kannst (Abwägung: weniger Identitätsbindung, aber ggf. eingeschränkte Features/Policy des Hosts).
- Wenn du **Meetings hostest**, dann setze **Security-Defaults** (Passcodes/Waiting Room) im Web-Portal (Abwägung: mehr Reibung beim Join, weniger „Drop-in“-Komfort).
- Wenn du **Inhalte schützen** willst, dann nutze **E2EE für passende Meetings** (Abwägung: Funktionsumfang kann eingeschränkt sein).
- Wenn du **Diagnose-/Metadaten reduzieren** willst, dann deaktiviere **Optional Diagnostic Data** (Abwägung: weniger Support-/Troubleshooting-Signale).
- Wenn dein Risiko durch **Jurisdiktion/Behördenanfragen** geprägt ist, dann lies den **Transparency Report** (Abwägung: rechtliche Rahmenbedingungen bleiben standortabhängig).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Zoom |
| Kategorie | Video & Meetings |
| Website | https://www.zoom.com/ |
| Quellcode | https://github.com/zoom |
| Lizenz | Proprietär (Produkt); Repos mit gemischten Open-Source-Lizenzen |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | Unklar (Hosting typischerweise mit Konto; Teilnahme teils ohne Konto möglich) |
| Telefon erforderlich | Unklar (teils optional; einzelne Sicherheits-/Verifikationsflows können Telefon/SMS nutzen) |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben (Zoom nennt „billing and payment information“, aber keine allgemeine Processor-Liste im Checkout) |
| Jurisdiktion | USA (Zoom Communications, Inc.) |
| Logs | Unklar (Diagnostic Data/Meeting-Metadaten/Telemetry werden beschrieben) |
| Retention | Unklar (Dashboard-Daten: 15 Monate; sonst keine allgemeingültige Frist genannt) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.zoom.com/en/trust/privacy/privacy-statement/
- AGB/Terms: https://www.zoom.com/en/trust/terms/
- Transparency Report: https://www.zoom.com/en/trust/transparency/
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- SOC 2 Type 2 (Scope: Zoom UCaaS Plattform) – https://www.zoom.com/en/trust/legal-compliance/soc2/
- ISO 27001 – https://www.zoom.com/en/trust/legal-compliance/iso-27001/
- ISO 27701 – https://www.zoom.com/en/trust/legal-compliance/iso-27701/
- CSA STAR Level 2 Attestation – https://www.zoom.com/en/trust/legal-compliance/csa-star/

**Daten-Notizen (kurz):**
Zoom beschreibt für Meetings/Chat/Webinare u.a. **Customer Content Data** (z.B. Audio/Video/Chat/Cloud Recordings) und **Diagnostic Data** (Meeting-Metadaten/Telemetry/Event-Logs). Admins/Organisationen können Einstellungen steuern und Zugriff auf bestimmte Daten haben (laut Privacy Data Sheet).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Privacy Data Sheet u.a. **Customer Content Data** (Audio/Video, Chat, Dateien, Cloud Recordings/Transkripte wenn genutzt) sowie **Diagnostic Data** (Meeting-Metadaten, Telemetry Data, Event-Logs).  
- **Wofür:** Bereitstellung/Update der Services, Sicherheit/Schutz, Fehlerbehebung/Support; zusätzlich bestimmte Zwecke als Controller (z.B. Account-/Billing-Kommunikation, rechtliche Pflichten, Abuse-Prevention) werden beschrieben.  
- **Weitergabe/Subprozessoren:** Zoom veröffentlicht eine Liste **Third-Party Subprocessors & Affiliates**.  
- **Drittlandtransfer:** Zoom beschreibt internationale Transfers und verweist auf Mechanismen wie SCCs/DPA (Details im Privacy Statement/DPA/Privacy Data Sheet).  
- **Zahlungsabwicklung/Payment Processor:** Zoom nennt „billing and payment information“ für Account Holder Business Data; konkrete Zahlungsdienstleister werden im öffentlichen Material nicht als allgemeine Liste benannt.  
- **Kontakt/DSAR/DPA:** DPA ist öffentlich verlinkt; Kontakt u.a. über privacy@zoom.us (Privacy Data Sheet).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Ja, bei Nutzung fallen laut Privacy Data Sheet **Diagnostic Data** an (Meeting Metadata, Telemetry Data, Event-Logs).  
- **Abschaltbar?** Teilweise: Im Data & Privacy Center wird zwischen **Required diagnostic data** (nicht deaktivierbar) und **Optional diagnostic data** (deaktivierbar) unterschieden.  
- **Wo (Menüpfad):** Zoom Web Portal → **Data & Privacy Center** → **Optional diagnostic data**.

**Logs & Retention:**
- **Logging-Level:** Unklar (Zoom beschreibt Event-Logs/Telemetry als Teil von Diagnostic Data, aber nicht als „Log-Level“ zum Umschalten).
- **Aufbewahrung:** Zoom nennt für Dashboard-Daten eine Speicherung von **15 Monaten**; sonst sind Fristen abhängig vom Datentyp/Settings/Vertrag (Privacy Statement nennt allgemeine Retention-Kriterien).
- **Lösch-/Opt-out-Optionen:** Optional Diagnostic Data kann deaktiviert werden; weitere Löschoptionen sind abhängig von Account-/Admin-Settings und Datentypen.

**Abwägung am Punkt:** Weniger Diagnosedaten/Optional Data kann Troubleshooting und Support erschweren; mehr Diagnosedaten erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Zoom beschreibt E2EE für Meetings als Option; bei E2EE werden Schlüssel auf den Geräten der Teilnehmenden erzeugt und Zoom-Server sollen den Inhalt nicht entschlüsseln können.  
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (in den hier genutzten Quellen nicht detailliert beschrieben).
- **MFA/2FA/Passkeys/Hardware-Keys:** Zoom bietet **Two-step verification** (2FA) und **Passkeys** als Sign-in-Methode (Web-Portal-Einrichtung möglich).  
- **Recovery/Account-Wiederherstellung:** Nicht angegeben (Details zu Recovery-Flows variieren je nach Login-Methode/Org-Policies).
- **Vuln-Handling / Security-Kontakt:** Zoom betreibt eine **Vulnerability Disclosure Policy** (inkl. Bug-Bounty-Programm) und veröffentlicht **Security Bulletins**.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (Two-step verification oder Passkeys), falls du hostest oder Admin-Rechte hast.  
   **Wo:** Zoom Web Portal → **Advanced → Security** (Admins) / **Profile → Passkeys** (User)  
   **Prüfen:** Login zeigt aktiven zweiten Faktor bzw. Passkey-Eintrag.
2) **Meeting-Sicherheit als Default setzen** (Passcode + Waiting Room).  
   **Wo:** Zoom Web Portal → **Settings → Meeting → Security**  
   **Prüfen:** Neue Meetings enthalten Passcode/Waiting Room; Join-Link funktioniert nur mit korrektem Flow.
3) **Optional Diagnostic Data deaktivieren** (wenn du Metadaten reduzieren willst).  
   **Wo:** Zoom Web Portal → **Data & Privacy Center → Optional diagnostic data**  
   **Prüfen:** Schalter ist „aus“; Hinweis, dass „Required diagnostic data“ weiterhin aktiv bleibt.

**Stolpersteine:**
- In Organisationen kann ein Admin Richtlinien erzwingen (Abwägung: zentrale Sicherheit/Compliance vs. individuelle Kontrolle).
- E2EE kann Funktionsumfang einschränken (Abwägung: Inhaltsvertraulichkeit vs. Komfort/Features).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **E2EE gezielt** für Meetings mit sensiblen Inhalten (und akzeptiere Feature-Einschränkungen).
- Deaktiviere **Optional Diagnostic Data** und vermeide zusätzliche Personalisierungs-/Consent-Optionen, soweit vorhanden.
- Reduziere Integrationen (z.B. Kalender/Adressbuch), wenn du sie nicht brauchst.  
**Abwägung:** weniger Komfort (Einladungen/Sync), ggf. weniger Support-Diagnostik.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne Identitäten: eigener Zoom-Account nur für diesen Zweck, keine Vermischung mit privaten/Arbeits-Identitäten.
- Nutze getrennte Umgebungen (separates OS-Profil/VM) und nur die minimal nötigen Apps/Plugins.
- Vermeide Cloud Recording/Transkripte, wenn du die Datenlage klein halten willst (sofern Admin-Policy das zulässt).  
**Abwägung:** deutlich mehr Aufwand, mögliche Einschränkungen bei Teilnahme/Kompatibilität.

</details>

## Features
- Video-/Audio-Meetings & Webinare
- Meeting-Chat & Team Chat
- Bildschirmfreigabe/Präsentationen
- Cloud Recording (wenn vom Admin erlaubt)
- End-to-End Encryption (E2EE) optional (mit Einschränkungen)
- Admin- und Diagnosefunktionen (Meeting-Metadaten/Telemetry)

## Alternativen
- Microsoft Teams (Abwägung: starke Konto-/Tenant-Bindung und Admin-Kontrolle vs. einheitliche Policies/Integration)
- Google Meet (Abwägung: Google-Konto/Ökosystem-Anbindung vs. einfacher Zugriff in vielen Umgebungen)
- Cisco Webex (Abwägung: Enterprise-/Compliance-Features vs. mehr Komplexität)
- Jitsi Meet (Abwägung: Self-Hosting/Offenheit vs. eigener Betrieb/Updates/Skalierung)

## Nicht gelöst / offene Punkte
- Konkrete, produktübergreifende **Aufbewahrungsfristen** für Diagnostic Data/Telemetry außerhalb einzelner Features sind nicht als einheitliche Frist dokumentiert.

## Quellen

- SOC 2 Type 2 (Scope: "Zoom UCaaS Plattform) – https://www.zoom.com/en/trust/legal-compliance/soc2/
- ISO 27001 – https://www.zoom.com/en/trust/legal-compliance/iso-27001/
- ISO 27701 – https://www.zoom.com/en/trust/legal-compliance/iso-27701/
- CSA STAR Level 2 Attestation – https://www.zoom.com/en/trust/legal-compliance/csa-star/
- Microsoft Teams (starke Konto-/Tenant-Bindung; Trade-off: "Organisationseinblick/Compliance vs. Flexibilität)
- Google Meet (Google-Ökosystem; Trade-off: "Konto-/Tracking-Risiken vs. einfache Einbindung)
- Cisco Webex (Enterprise-Fokus; Trade-off: "Admin-/Compliance-Features vs. Komplexität)
- Jitsi Meet (Self-Hosting möglich; Trade-off: "eigener Betrieb/Updates vs. weniger SaaS-Metadaten)
- Zoom Privacy Statement – https://www.zoom.com/en/trust/privacy/privacy-statement/
- Zoom Terms of Service – https://www.zoom.com/en/trust/terms/
- Zoom Third-Party Subprocessors & Zoom Affiliates – https://www.zoom.com/en/trust/subprocessors/
- Global Data Processing Addendum (DPA) – https://media.zoom.com/download/assets/zoom-global-dpa.pdf/dd327ebea27e11efb613d6ba63ed4cee
- Privacy Data Sheet (Zoom Meetings, Chat & Webinar) – https://media.zoom.com/download/assets/privacy-data-sheet.pdf/e07faff2104d11ee90a3ba0e20713a0a
- Data & Privacy Center: "Optional diagnostic data – https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0063653
- Data Residency settings – https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0066080
- Dashboard: "How long is data stored? – https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0061763
- Enable end-to-end encryption for meetings – https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0065167
- Enabling Waiting Room – https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0067185
- Managing meeting passcodes and Waiting Room settings – https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0062759
- Two-step verification (2FA) – https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0067279
- Passkeys in Zoom – https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0083521
- Vulnerability Disclosure Policy – https://www.zoom.com/en/trust/vulnerability-disclosure/
- Security Bulletins – https://www.zoom.com/en/trust/security-bulletin/
- Transparency Report – https://www.zoom.com/en/trust/transparency/
- Compliance overview – https://www.zoom.com/en/trust/legal-compliance/
- [Zoom Privacy Statement](https://www.zoom.com/en/trust/privacy/privacy-statement/)
- [Zoom Terms of Service](https://www.zoom.com/en/trust/terms/)
- [Zoom Third-Party Subprocessors & Zoom Affiliates](https://www.zoom.com/en/trust/subprocessors/)
- [Global Data Processing Addendum (DPA)](https://media.zoom.com/download/assets/zoom-global-dpa.pdf/dd327ebea27e11efb613d6ba63ed4cee)
- [Privacy Data Sheet (Zoom Meetings, Chat & Webinar)](https://media.zoom.com/download/assets/privacy-data-sheet.pdf/e07faff2104d11ee90a3ba0e20713a0a)
- [Data & Privacy Center: Optional diagnostic data](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0063653)
- [Data Residency settings](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0066080)
- [Dashboard: How long is data stored?](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0061763)
- [Enable end-to-end encryption for meetings](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0065167)
- [Enabling Waiting Room](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0067185)
- [Managing meeting passcodes and Waiting Room settings](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0062759)
- [Two-step verification (2FA)](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0067279)
- [Passkeys in Zoom](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0083521)
- [Vulnerability Disclosure Policy](https://www.zoom.com/en/trust/vulnerability-disclosure/)
- [Security Bulletins](https://www.zoom.com/en/trust/security-bulletin/)
- [Transparency Report](https://www.zoom.com/en/trust/transparency/)
- [Compliance overview](https://www.zoom.com/en/trust/legal-compliance/)
