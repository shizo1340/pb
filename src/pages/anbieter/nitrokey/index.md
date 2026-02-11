---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Nitrokey"
url: "/anbieter/nitrokey/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "yes"
status: "done"
updated: "2026-01-19"
robots: "index,follow"
description: "Kurzprofil von Nitrokey (Kategorie: Security-Key)."
provider: ""
name: "Nitrokey"
category: "Security-Key"
website: "https://www.nitrokey.com/"
repo: "https://github.com/Nitrokey"
license: "mixed"
policies: ""
privacy: "https://www.nitrokey.com/data-privacy-policy"
terms: "https://www.nitrokey.com/general-terms-and-conditions"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "yes"
self_host_possible: "no"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Deutschland (Nitrokey GmbH, Teltow)"
region: "eu"
logs: "minimal"
retention: "short"
retention_notes: "Server-Logs: bis zu 7 Tage (Website); Bestelldaten: nach Steuer-/Handelsrecht"
retention_max_days: "7"
data_notes: "Website: Server-Logs + Matomo (IP anonymisiert, Cookie ~1 Woche). Shop/Bestellung: Rechnungs-/Versanddaten; Zahlungsdaten je nach Methode (PayPal/Stripe möglich)."
features: ""
alternatives: ""
payment_processors: "PayPal, Stripe (laut Privacy Policy)"
sources: ""
---
## Kurzprofil

Nitrokey ist ein Anbieter aus der Kategorie **Security-Key** (Hardware-Token wie z.B. FIDO2/U2F für 2FA/Passkeys). Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen **hardwarebasierten Login-Faktor** (FIDO2/U2F/Passkeys) nutzen willst, der ohne Hersteller-Account funktioniert.
- **Weniger geeignet wenn:** du **keine personenbezogenen Bestelldaten** herausgeben möchtest (Versand/Abrechnung braucht i.d.R. Name/Adresse).
- **Wichtigster Abwägung:** **Offline-Token = wenig Anbieter-Datenfluss**, aber **Recovery/Backup liegt bei dir** (Zweitfaktor/Backup-Methode einplanen).

## Sofortmaßnahmen
- **FIDO2-PIN setzen** (bei Geräten/Einrichtungen mit PIN): reduziert Risiko bei Verlust/Diebstahl.
- **Zweitfaktor-Backup einrichten** (zweiter Key oder alternative Methode): verhindert Lockout bei Defekt/Update.
- **Website-Tracking minimieren**: Matomo-Opt-out nutzen und Newsletter nur, wenn du ihn wirklich brauchst.

## Entscheidungshilfe
- Wenn du **Passkeys/2FA gegen Phishing** einsetzen willst, dann registriere den Nitrokey als Sicherheitsschlüssel im Account – **Abwägung:** ohne Backup kann ein Geräteverlust zum Kontozugangsproblem werden.  
- Wenn du **möglichst wenig Zahlungsdaten** bei Drittanbietern willst, dann wähle im Shop **Vorkasse/Bitcoin** statt Zahlungsdienst – **Abwägung:** weniger Komfort (und je nach Land/Bank ggf. mehr Aufwand).  
- Wenn du **SSH-Logins** mit Hardware absichern willst, dann nutze FIDO2-SSH (resident keys) – **Abwägung:** Einrichtung ist technischer als „Passwort + Agent“.  
- Wenn du **Web-Tracking** minimieren willst, dann nutze Matomo-Opt-out und vermeide Newsletter-Anmeldung – **Abwägung:** weniger Komfort (z.B. keine Update-Mails).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Nitrokey |
| Kategorie | Security-Key |
| Website | https://www.nitrokey.com/ |
| Quellcode | https://github.com/Nitrokey |
| Lizenz | mixed (je nach Projekt/Repo) |
| Preismodell | paid |
| Free Tier | no |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | PayPal, Stripe (laut Privacy Policy) |
| Jurisdiktion | Deutschland (Nitrokey GmbH, Teltow) |
| Logs | minimal |
| Retention | Server-Logs: bis zu 7 Tage (Website); Bestelldaten: nach Steuer-/Handelsrecht |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.nitrokey.com/data-privacy-policy
- AGB/Terms: https://www.nitrokey.com/general-terms-and-conditions
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Pentest-Report Nitrokey Storage Firmware (05/2015) (PDF): https://www.nitrokey.com/sites/default/files/NitrokeyFirmwareSecurityAuditReport05-2015.pdf
- Nitrokey NetHSM Security Assessment v1.0 (Secfault Security, 2021) (PDF): https://www.nitrokey.com/files/doc/Nitrokey_NetHSM_Security_Assessment_v1.0.pdf

**Daten-Notizen (kurz):**
Website: Server-Logs + Matomo (IP anonymisiert, Cookie ~1 Woche). Shop/Bestellung: Rechnungs-/Versanddaten; Zahlungsdaten je nach Methode (PayPal/Stripe möglich).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Website-Serverdaten (u.a. IP-Adresse, Browser/OS, Referrer, aufgerufene Seiten, Datum/Uhrzeit); beim Shop/Bestellprozess Rechnungs- und Lieferadresse sowie Zahlungsdaten je nach Zahlungsart.
- **Wofür:** Betrieb/Sicherheit/Optimierung der Website, Vertragsabwicklung (Bestellung/Versand/Bezahlung), optional Newsletter-Kommunikation.
- **Weitergabe/Subprozessoren:** PayPal und Stripe werden als Zahlungsdienstleister genannt; darüber hinaus werden Kategorien wie Webhoster/Transportdienstleister erwähnt, aber ohne vollständige öffentliche Liste.
- **Drittlandtransfer:** Nicht vollständig klar benannt; für einzelne Dienste (z.B. Zahlungsdienste/soziale Komponenten) kann das relevant werden – genaue Details stehen in der Privacy Policy.
- **Zahlungsabwicklung/Payment Processor:** PayPal, Stripe (laut Privacy Policy); laut AGB sind u.a. Vorkasse, Rechnung bei Lieferung, PayPal, Barzahlung bei Abholung und Bitcoin möglich.
- **Kontakt/DSAR/DPA:** Kontaktseite ist vorhanden; eine separate DPA/Subprozessor-Liste ist nicht prominent als eigene Seite ausgewiesen.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Website-Analytics via Matomo wird in der Privacy Policy beschrieben (IP anonymisiert; Cookie-Laufzeit ~1 Woche).
- **Abschaltbar?** Matomo-Opt-out wird in der Privacy Policy beschrieben (Opt-out-Link/Mechanismus).
- **Wo (Menüpfad):** nitrokey.com → Footer → „Data Privacy Policy“ → Abschnitt „Matomo“ / Opt-out.

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** Server-Logs bis zu 7 Tage (laut Privacy Policy); Bestelldaten nach gesetzlichen Pflichten (Steuer-/Handelsrecht).
- **Lösch-/Opt-out-Optionen:** Matomo-Opt-out (Website); für Newsletter wird in der Privacy Policy auf Abmeldemöglichkeiten verwiesen.

**Abwägung am Punkt:** Weniger Telemetrie reduziert Metadaten; kann aber Diagnosen/Support (z.B. bei Webproblemen) erschweren.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Für Security-Keys steht primär die lokale Schlüsselspeicherung/Authentifizierung im Vordergrund (FIDO2/U2F je nach Modell/Repo beschrieben).
- **KDF/Parameter/Schlüsselableitung:** Nicht einheitlich als Anbieter-Überblick dokumentiert (modell-/featureabhängig).
- **MFA/2FA/Passkeys/Hardware-Keys:** Nitrokey-Doku beschreibt FIDO2/Passkey-Einrichtungen inkl. PIN-Setzung (z.B. Nitrokey 3).
- **Recovery/Account-Wiederherstellung:** Bei Firmware-Updates wird explizit geraten, eine zusätzliche Authentifizierungsmethode als Backup zu behalten.
- **Vuln-Handling / Security-Kontakt:** Sicherheitslücken können laut Kontaktseite an support@nitrokey.com gemeldet werden; Sicherheitsupdates werden in News/Blog veröffentlicht.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **FIDO2-PIN setzen** (bei Geräten/Features mit PIN).  
   **Prüfen:** bei der Registrierung wird eine PIN abgefragt und danach für Login benötigt.
2) **Key als 2FA/Passkey registrieren + Backup-Methode hinterlegen** (zweiter Key oder alternativer Faktor).  
   **Prüfen:** Account-Security-Seite zeigt den Sicherheitsschlüssel als „aktiv“.
3) **Firmware/Tools nur aus offiziellen Quellen** (Docs/Downloads) verwenden und Updates bewusst planen.  
   **Prüfen:** vor einem Update ist eine Backup-Anmeldemethode vorhanden (Anbieter-Hinweis in News).

**Stolpersteine:**
- Firmware-Updates können je nach Plattform/Einrichtung unerwartete Effekte haben → **Abwägung:** Sicherheitsfixes vs. kurzfristiges Lockout-Risiko, wenn kein Backup vorhanden ist.

<details>
<summary>Profil B (Datensparsam)</summary>

- **Shop/Checkout:** wenn möglich **ohne Kundenkonto** bestellen (nur notwendige Pflichtfelder).
- **Zahlungsart wählen:** eher **Vorkasse/Bitcoin** statt Zahlungsdienst (falls das zu deinem Bedrohungsmodell passt).  
- **Website-Tracking minimieren:** Matomo-Opt-out nutzen und Newsletter nicht abonnieren.

**Abwägung:** weniger Komfort (Zahlung/Kommunikation), ggf. weniger „schnelle“ Support-/Reklamationsabläufe.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Enrollment isolieren:** Sicherheitsschlüssel an einem **dedizierten, sauberen System** registrieren (getrennt von Alltags-Browsing/Extensions).  
- **Identitäten trennen:** getrennte Keys für getrennte Accounts/Personas (physische Trennung = weniger Korrelation).  
- **Physische Sicherheit:** Key nicht dauerhaft stecken lassen; Backup-Key getrennt lagern.

**Abwägung:** deutlich mehr organisatorischer Aufwand und Risiko, sich selbst „auszusperren“, wenn Prozesse nicht sauber dokumentiert sind.

</details>

## Features
- Open-Source Security Tokens (Doku beschreibt „open-source security tokens“).
- FIDO2/U2F für 2FA und passwortloses Login (je nach Modell).
- PIN-gestützte Nutzung (z.B. Nitrokey 3 Getting Started).
- SSH-Authentifizierung über FIDO2 (Doku beschreibt Schlüsselgenerierung/-speicherung am Gerät).
- Open-Source Software/Repos (z.B. Nitrokey App unter GPLv3; FIDO2-Firmware unter Apache-2.0/MIT in GitHub-Repos).

## Alternativen
- **YubiKey:** ähnliche Kategorie (Security-Key) – **Abwägung:** proprietäre Firmware/Hardware vs. offener Entwicklungsansatz.
- **SoloKeys:** ähnliche Kategorie – **Abwägung:** stärker community-/upstream-orientiert vs. Hersteller-Ökosystem.
- **Google Titan Security Key:** ähnliche Kategorie – **Abwägung:** stärker an ein Plattform-Ökosystem gekoppelt vs. herstellerneutrale Nutzung.

## Nicht gelöst / offene Punkte
- Öffentliche Subprozessoren-/DPA-Seite nicht klar dokumentiert (Legal/Privacy/DPA, Stand: 2026-01-19).
- Aussagen zu Telemetrie/Diagnosedaten der **Nitrokey App 2 / nitropy** in der Doku und im Repo unklar (Stand: 2026-01-19).

## Quellen

- Open-Source Tools: "Nitrokey App (GPLv3), nitropy (CLI)
- [Nitrokey: "Nitrokeys (Produktseite)](https://www.nitrokey.com/products/nitrokeys)
- [Nitrokey Docs: "SSH Authentication with FIDO2](https://docs.nitrokey.com/de/nitrokeys/features/fido2/ssh)
- [Nitrokey News: "Nitrokey FIDO2 Firmware 2.0 Update](https://www.nitrokey.com/news/2020/nitrokey-fido2-firmware-20-update)
- [Nitrokey Blog: "Nitrokey 3 Firmware v1.8.1 Security Update](https://www.nitrokey.com/2025/nitrokey-3-firmware-v181-security-update)
- [GitHub: "Nitrokey App](https://github.com/Nitrokey/nitrokey-app)
- [Audit PDF: "Nitrokey NetHSM Security Assessment v1.0](https://www.nitrokey.com/files/doc/Nitrokey_NetHSM_Security_Assessment_v1.0.pdf)
- [Nitrokey: Data Privacy Policy](https://www.nitrokey.com/data-privacy-policy)
- [Nitrokey: General Terms and Conditions](https://www.nitrokey.com/general-terms-and-conditions)
- [Nitrokey: Legal Information (Imprint)](https://www.nitrokey.com/legal-information)
- [Nitrokey: Contact](https://www.nitrokey.com/contact)
- [Nitrokey: Nitrokeys (Produktseite)](https://www.nitrokey.com/products/nitrokeys)
- [Nitrokey Docs: Nitrokey 3 – Getting Started](https://docs.nitrokey.com/nitrokeys/nitrokey3/getting-started)
- [Nitrokey Docs: SSH Authentication with FIDO2](https://docs.nitrokey.com/de/nitrokeys/features/fido2/ssh)
- [Nitrokey News: Nitrokey FIDO2 Firmware 2.0 Update](https://www.nitrokey.com/news/2020/nitrokey-fido2-firmware-20-update)
- [Nitrokey Blog: Nitrokey 3 Firmware v1.8.1 Security Update](https://www.nitrokey.com/2025/nitrokey-3-firmware-v181-security-update)
- [GitHub: Nitrokey Organisation](https://github.com/Nitrokey)
- [GitHub: Nitrokey FIDO2 Firmware](https://github.com/Nitrokey/nitrokey-fido2-firmware)
- [GitHub: Nitrokey App](https://github.com/Nitrokey/nitrokey-app)
- [Audit PDF: NitrokeyFirmwareSecurityAuditReport05-2015](https://www.nitrokey.com/sites/default/files/NitrokeyFirmwareSecurityAuditReport05-2015.pdf)
- [Audit PDF: Nitrokey NetHSM Security Assessment v1.0](https://www.nitrokey.com/files/doc/Nitrokey_NetHSM_Security_Assessment_v1.0.pdf)
