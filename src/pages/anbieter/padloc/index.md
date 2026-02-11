---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Padloc"
url: "/anbieter/padloc/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von Padloc (Kategorie: Passwort-Manager)."
provider: ""
name: "Padloc"
category: "Passwort-Manager"
website: "https://padloc.app/"
repo: "https://github.com/padloc/padloc"
license: "AGPL-3.0-only"
policies: ""
privacy: "https://padloc.app/privacy/"
terms: "https://padloc.app/tos/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "yes"
phone_required: "no"
kyc_required: "unknown"
jurisdiction: "Deutschland (MaKleSoft UG; Recht/Gerichtsstand: München, DE)"
region: "eu"
logs: "minimal"
retention: "verylong"
retention_notes: "Server-Logs: so kurz wie nötig (nicht beziffert); Backups: 3 Monate; Zahlungs-/Steuerdaten: bis zu 10 Jahre"
retention_max_days: "3650"
data_notes: "Padloc speichert verschlüsselte Tresor-Daten serverseitig zur Synchronisation/Backup, kann sie laut Anbieter aber nicht entschlüsseln. Zusätzlich fallen Account-Metadaten (E-Mail, optionaler Anzeigename), Geräteinfos, anonymisierte Nutzungsdaten sowie Server-Logs (u.a. IP) an. Zahlungen laufen über Stripe."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Padloc ist ein Anbieter aus der Kategorie **Passwort-Manager**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen **Open-Source** Passwort-Manager mit **E2E-/Client-seitiger Verschlüsselung** und **Sync über mehrere Geräte** nutzen willst (inkl. Web-App/Browser-Extension) und ggf. **Shared Vaults** brauchst.
- **Weniger geeignet wenn:** du **ohne Konto/ohne Serverkontakt** arbeiten willst oder eine **öffentlich dokumentierte Subprozessorenliste** (Hosting/Infra) zwingend brauchst.
- **Wichtigster Abwägung:** **Cloud-Sync & Team-Funktionen** vs. **Account-/Geräte-Metadaten** (E-Mail, Geräteinfos, IP-Logs) – Self-Hosting reduziert Vertrauen in den Betreiber, erhöht aber Betriebsaufwand.

## Sofortmaßnahmen
- **Auto-Lock aktiv lassen und kurz einstellen** (Settings → Security → Auto Lock), damit offene Tresore schneller wieder gesperrt werden.
- **MFA einrichten und Sessions prüfen** (Settings → Security), um Kontoübernahmen und „vergessene Geräte“ zu reduzieren.
- **Account-Löschung/Export einmal durchspielen** (Settings → Account), damit Recovery/Exit im Ernstfall klar ist.

## Entscheidungshilfe
- Wenn du **bequemen Geräte-Sync** willst, dann nutze Padloc mit Online-Konto (Abwägung: Account-/Geräte-Metadaten + Serverkontakt).
- Wenn du **weniger Vertrauen in einen fremdbetriebenen Server** willst, dann ist **Self-Hosting** relevant (Abwägung: Betrieb/Updates/Monitoring selbst erledigen).
- Wenn du Padloc **im Browser** nutzt, dann setze **Auto-Lock kurz** und nutze getrennte Browser-Profile (Abwägung: häufiger entsperren, mehr Reibung).
- Wenn du **Sharing/Organisationen** nutzt, dann plane Rollen/Shared Vaults bewusst (Abwägung: mehr Komplexität/Fehlkonfiguration möglich).
- Wenn du **Cookies/Analytics minimieren** willst, dann konfiguriere Browser-Cookies restriktiv (Abwägung: Login/Komfort kann leiden).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Padloc |
| Kategorie | Passwort-Manager |
| Website | https://padloc.app/ |
| Quellcode | https://github.com/padloc/padloc |
| Lizenz | AGPL-3.0-only (zusätzliche kommerzielle Lizenz laut Repo-Hinweis möglich) |
| Preismodell | freemium (Free + kostenpflichtige Pläne) |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | Unklar |
| Zahlungsabwicklung | Stripe (laut Privacy Policy) |
| Jurisdiktion | Deutschland (MaKleSoft UG; Recht/Gerichtsstand: München, DE) |
| Logs | minimal (Server-Request-Logs inkl. IP möglich) |
| Retention | Server-Logs: so kurz wie nötig; Backups: 3 Monate; Zahlungs-/Steuerdaten: bis zu 10 Jahre |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://padloc.app/privacy/
- AGB/Terms: https://padloc.app/tos/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- 2016 (Cure53) Penetration Test – Report: https://padloc.app/assets/audit_reports/padlock-pentest-1604.pdf
- 2019 (NCC Group / OTF) Cryptography Review – Report: https://padloc.app/assets/audit_reports/NCC_Group_OpenTechnologyFund_PadlocCryptoReview_Report_2019-08-23_v1.1.pdf
- 2022 (Radically Open Security / OTF) Penetration Test – Report: https://public.opentech.fund/documents/report_padloc-2022.pdf

**Daten-Notizen (kurz):**
Padloc unterscheidet laut Privacy Policy zwischen **verschlüsselten Tresor-Inhalten** (client-seitig verschlüsselt) und **Metadaten** (Account/Geräte/Logs). Für bezahlte Abos wird **Stripe** als Zahlungsanbieter genannt.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - **Secure Data:** Inhalte im Tresor (Passwörter/Notizen/Dateien) werden lokal verschlüsselt und verschlüsselt synchronisiert/gesichert.  
  - **Account Meta Data:** E-Mail (erforderlich), optionaler Anzeigename.  
  - **Geräteinfos:** Device UUID, OS/Version, Hersteller/Modell (falls verfügbar), Gerätename (falls verfügbar), App-Version, „Last Access“.  
  - **Usage Data:** anonymisierte Nutzungsdaten (z.B. Installationen/Updates/Device Activity).  
  - **Server Logs:** Request-Logs, können IP-Adressen enthalten.  
  - **Billing:** Zahlung über Stripe; zusätzliche Rechnungsdaten möglich (Name/Adresse/VAT bei Business).
- **Wofür:** Authentifizierung/Sync, Betrugsprävention, Geräteverwaltung, Priorisierung von Updates/Sicherheitsfixes, Abwehr von Missbrauch/Angriffen, Abrechnung.
- **Weitergabe/Subprozessoren:** Hosting/Infra über „third party data processors“ (nicht einzeln aufgelistet); Stripe für Payments.
- **Drittlandtransfer:** Nicht klar dokumentiert (es werden Drittanbieter-Prozessoren erwähnt, aber keine konkrete Liste/Regionen).
- **Zahlungsabwicklung/Payment Processor:** Stripe.
- **Kontakt/DSAR/DPA:** Kontakt per support@padloc.app (Privacy Policy) bzw. contact@padloc.app (Terms).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Ja: anonymisierte „Usage Data“ + Server-Request-Logs werden genannt.
- **Abschaltbar?** Nicht angegeben (Usage Data); Cookies können laut Anbieter im Browser deaktiviert werden.
- **Wo (Menüpfad):**  
  - App: kein dokumentierter „Telemetry off“-Schalter.  
  - Web: Browser-Einstellungen → Cookies (laut Privacy Policy weiterhin nutzbar).

**Logs & Retention:**
- **Logging-Level:** minimal (internes Request-Logging; IP-Adressen möglich)
- **Aufbewahrung:** Server-Logs „nur so lange wie nötig“ (ohne feste Dauer); Backups werden nach 3 Monaten gelöscht; Steuer-/Zahlungsunterlagen bis zu 10 Jahre.
- **Lösch-/Opt-out-Optionen:** Account kann in der App gelöscht werden (Settings → Account → Delete Account); Backups bleiben laut Privacy Policy bis zur automatischen Löschung bestehen.

**Abwägung am Punkt:** Weniger Telemetrie erschwert Diagnose/Abwehr von Missbrauch; mehr Telemetrie erhöht Metadatenrisiko (z.B. IP/Device-Aktivität).

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Tresor-Daten werden lokal verschlüsselt; laut Security Whitepaper u.a. **AES (GCM)**, Schlüssel aus Master-Passwort per **PBKDF2** (inkl. Salt/Iterationsparametern), Shared Vaults via **RSA-verschlüsseltem Tresorschlüssel**.
- **KDF/Parameter/Schlüsselableitung:** PBKDF2 (Iteration Count + Salt werden im Container gespeichert; keine „einheitliche“ Zahl in der Doku festgenagelt).
- **MFA/2FA/Passkeys/Hardware-Keys:** MFA wird auf der Website/Plänen genannt; im Handbuch: Settings → Security → „manage sessions and MFA methods“.
- **Recovery/Account-Wiederherstellung:** Laut Privacy Policy wird das Master-Passwort nicht gespeichert; bei Verlust kann der Anbieter den Klartext nicht wiederherstellen (Recovery = eigene Verantwortung).
- **Vuln-Handling / Security-Kontakt:** Security Whitepaper ist öffentlich; allgemeine Kontaktadressen sind genannt (support@padloc.app / contact@padloc.app). Ein dedizierter Disclosure-Prozess ist nicht klar dokumentiert.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **MFA aktivieren** (Settings → Security → MFA methods), falls verfügbar.  
   **Prüfen:** Login erfordert zusätzlich zur Master-Passphrase einen zweiten Faktor.
2) **Auto-Lock aktiv lassen und kurz setzen** (Settings → Security → Auto Lock).  
   **Prüfen:** App sperrt nach Inaktivität; entsperren verlangt Master-Passwort.
3) **Sessions/Devices regelmäßig prüfen** (Settings → Security → Sessions) und Unbekanntes beenden.  
   **Prüfen:** aktive Sessions passen zu deinen Geräten/Standorten.

**Stolpersteine:**
- Wenn du das Master-Passwort verlierst, kann der Anbieter laut Privacy Policy deine Klartext-Daten nicht wiederherstellen (Abwägung: Zero-Knowledge vs. Recovery).
- Browser-/WebView-basierte Apps können Prozessspeicher nicht vollständig kontrollieren (siehe Hinweis im Handbuch zu Locking/Unlocking).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze eine **separate E-Mail-Adresse** nur für Padloc (Abwägung: zusätzlicher Account-Aufwand).
- Prüfe **Self-Hosting** als Option (Docs → Guide „How to self-hostbar Padloc“) (Abwägung: Wartung/Absicherung des Servers liegt bei dir).
- Browser: Cookies restriktiv konfigurieren; laut Privacy Policy bleibt Nutzung möglich (Abwägung: Login/Komfort kann leiden).

**Abwägung:** weniger Metadaten/Abhängigkeiten, dafür mehr Eigenbetrieb und mehr Handarbeit.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze getrennte Nutzerkonten/VMs für Passwort-Manager-Nutzung (Abwägung: höherer Bedienaufwand).
- Setze kurze Auto-Lock-Zeiten und sperre Geräte physisch konsequent (Abwägung: häufigeres Entsperren).
- Vermeide „dauerhaft entsperrt“ in riskanten Umgebungen; beachte den Browser-/WebView-Memory-Hinweis aus der Doku (Abwägung: weniger Komfort, mehr Sicherheit gegen Schulterblick/Device-Zugriff).

**Abwägung:** maximale Isolation, dafür deutlich mehr Komplexität im Alltag.

</details>

## Features
- Ende-zu-Ende-verschlüsselte Tresore (client-seitig, laut Privacy Policy/Security Whitepaper)
- Multi-Factor Authentication (MFA) + Sessions verwalten
- Shared Vaults & Organisationen (Sharing/Teams/Familie)
- Web-App + Browser-Extension + Desktop/Mobile Apps
- Encrypted File Storage (planabhängig)
- Built-in Authenticator / One-Time Passwords (OTP)
- Security Report (z.B. Checks für schwache/wiederverwendete Passwörter)
- Rich-Text-Notizen (Markdown)

## Alternativen
- Bitwarden (ähnliche Kategorie; Abwägung: optionaler Self-Hosting bedeutet eigenen Betrieb)
- KeePassXC (offline/dateibasiert; Abwägung: Sync/Sharing selbst organisieren)
- 1Password (SaaS/Account; Abwägung: Closed Source + Anbieterbindung)
- Proton Pass (SaaS/Account; Abwägung: Ökosystem-Bindung + Online-Konto)

## Nicht gelöst / offene Punkte
- Subprozessoren (Hosting/Infra) werden genannt, aber nicht öffentlich als Liste dokumentiert.
- Telemetrie/„Usage Data“-Opt-out ist nicht klar dokumentiert.
- Dedizierter Disclosure-Prozess für Sicherheitsmeldungen (Policy/PGP/Kontakt) ist nicht eindeutig auffindbar.

## Quellen

- 2016 (Cure53) Penetration Test – Report: "https://padloc.app/assets/audit_reports/padlock-pentest-1604.pdf
- 2019 (NCC Group / OTF) Cryptography Review – Report: "https://padloc.app/assets/audit_reports/NCC_Group_OpenTechnologyFund_PadlocCryptoReview_Report_2019-08-23_v1.1.pdf
- 2022 (Radically Open Security / OTF) Penetration Test – Report: "https://public.opentech.fund/documents/report_padloc-2022.pdf
- Bitwarden (Passwort-Manager; Self-Hosting möglich, Trade-off: "eigener Betrieb/Updates)
- KeePassXC (offline/dateibasiert, Trade-off: "Sync/Sharing selbst organisieren)
- 1Password (Account-basiert/Cloud, Trade-off: "Closed Source, Metadaten beim Anbieter)
- Proton Pass (Account-basiert, Trade-off: "Ökosystem-Bindung/Online-Konto)
- https://padloc.app/pentest-1604-notes/
- [Padloc Website (inkl. Features & Pläne)](https://padloc.app/)
- [Padloc Privacy Policy](https://padloc.app/privacy/)
- [Padloc Terms of Service](https://padloc.app/tos/)
- [Security Whitepaper (Docs)](https://docs.padloc.app/docs/security/)
- [User Manual: Settings](https://docs.padloc.app/manual/settings/)
- [User Manual: Locking and Unlocking](https://docs.padloc.app/manual/locking-and-unlocking/)
- [Guide: How to self-hostbar Padloc](https://docs.padloc.app/guides/self-host/)
- [Blog: Security Audit By Radically Open Security](https://padloc.appsecurity-audit-ros/)
- [Blog: Security Audit By NCC Group](https://padloc.appsecurity-audit-ncc/)
- [Audit Report (NCC Group / OTF) PDF](https://padloc.app/assets/audit_reports/NCC_Group_OpenTechnologyFund_PadlocCryptoReview_Report_2019-08-23_v1.1.pdf)
- [Audit Notes: Security Audit by Cure53](https://padloc.app/pentest-1604-notes/)
- [Audit Report (Cure53) PDF](https://padloc.app/assets/audit_reports/padlock-pentest-1604.pdf)
- [Audit Report (Radically Open Security / OTF) PDF](https://public.opentech.fund/documents/report_padloc-2022.pdf)
- [Quellcode: padloc/padloc](https://github.com/padloc/padloc)
