---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Outlook.com"
url: "/anbieter/outlook-com/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von Outlook.com (Kategorie: E-Mail)."
provider: ""
name: "Outlook.com"
category: "E-Mail"
website: "https://outlook.live.com/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://www.microsoft.com/de-de/privacy/privacystatement"
terms: "https://www.microsoft.com/de-de/servicesagreement"
transparency: "https://www.microsoft.com/de-de/digitalsafety/transparency-reports"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "no"
self_host_possible: "no"
account_required: "yes"
phone_required: "unknown"
kyc_required: "no"
jurisdiction: "Variiert je nach Wohnsitz/Region (Microsoft-Servicevertrag)"
region: "other"
logs: "unknown"
retention: "mid"
retention_notes: "Gelöschte E-Mails: ca. 7 Tage; nach Leeren von „Gelöschte Elemente“ bis ca. 30 Tage (laut Datenschutzerklärung)"
retention_max_days: "30"
data_notes: "Outlook.com setzt ein Microsoft-Konto voraus; Inhalte werden u.a. für Spam-/Malware-Erkennung verarbeitet. In der kostenlosen Nutzung können Anzeigen eingeblendet werden; personalisierte Werbung ist steuerbar."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Outlook.com ist ein Anbieter aus der Kategorie **E-Mail**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Webmail mit Microsoft-Konto nutzt und Standard-Protokolle (IMAP/SMTP) bei Bedarf aktivieren willst.
- **Weniger geeignet wenn:** du E-Mail nur mit strikt minimierten Datenflüssen/Metadaten nutzen möchtest (z.B. ohne Anzeigen/Tracking-Ökosystem).
- **Wichtigster Abwägung:** Komfort & Ecosystem (Microsoft-Konto, Recovery, Clients) vs. Metadaten/Plattform-Integration (z.B. Werbung, Diagnose-/Nutzungsdaten).

## Sofortmaßnahmen
- **Zweistufige Überprüfung aktivieren** (Microsoft-Konto) → senkt Risiko durch Passwort-Leaks.
- **Externe Bilder über Outlook-Proxy laden lassen** → reduziert Tracking durch externe Bild-URLs.
- **POP/IMAP deaktiviert lassen, wenn nicht nötig** → weniger Angriffsfläche durch zusätzliche Clients/Devices.

## Entscheidungshilfe
- Wenn du nur im Browser arbeitest, dann lasse POP/IMAP aus (Abwägung: weniger Kompatibilität mit Dritt-Clients).
- Wenn du einen Dritt-Client (Thunderbird, Mail-App, Smart-Device) brauchst, dann aktiviere IMAP/POP gezielt in Outlook.com (Abwägung: mehr Geräte = mehr mögliche Einfallstore).
- Wenn du Tracking durch Newsletter reduzieren willst, dann nutze den Imageproxy für externe Bilder (Abwägung: einzelne Bilder laden evtl. nicht „direkt vom Absender“).
- Wenn dich personalisierte Werbung stört, dann deaktiviere „Advertising Preferences“ in Outlook.com (Abwägung: Anzeigen können weiterhin erscheinen).
- Wenn du Kontoschutz ohne SMS willst, dann setze auf Authenticator/Passkeys statt Telefonnummer (Abwägung: Recovery wird stärker an Geräte/Backup gebunden).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Outlook.com |
| Kategorie | E-Mail |
| Website | https://outlook.live.com/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Variiert je nach Wohnsitz/Region (Microsoft-Servicevertrag) |
| Logs | unknown |
| Retention | Gelöschte E-Mails: ca. 7 Tage; nach Leeren von „Gelöschte Elemente“ bis ca. 30 Tage (laut Datenschutzerklärung) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.microsoft.com/de-de/privacy/privacystatement
- AGB/Terms: https://www.microsoft.com/de-de/servicesagreement
- Transparency Report: https://www.microsoft.com/de-de/digitalsafety/transparency-reports
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Outlook.com ist ein Consumer-Maildienst, der an ein Microsoft-Konto gekoppelt ist. Microsoft beschreibt u.a. Verarbeitung für Bereitstellung sowie Erkennung von Spam/Malware; gelöschte Inhalte werden zeitverzögert entfernt. In der kostenlosen Nutzung erscheinen Anzeigen; personalisierte Werbung ist steuerbar.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Microsoft-Konto-/Kontaktdaten sowie E-Mail-Inhalte zur Bereitstellung des Dienstes; automatische Verarbeitung zur Erkennung von Spam/Schadsoftware (Details in Microsoft-Datenschutzbestimmungen).
- **Wofür:** Betrieb des Dienstes (Zustellung, Synchronisierung), Schutz vor Missbrauch (Spam/Phishing/Malware) sowie ggf. Anzeigen-Ausspielung in der kostenlosen Nutzung.
- **Weitergabe/Subprozessoren:** Für Werbung: Werbe-Anbieter erhalten laut Microsoft keine direkt identifizierenden Outlook-Daten (z.B. kein E-Mail-Inhalt; keine E-Mail-Adresse/Name); es können IDs (Cookie/Device-ID o.ä.) genutzt werden.
- **Drittlandtransfer:** Unklar (in den verwendeten Primärquellen nicht produktbezogen konkretisiert).
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (bei kostenpflichtigen Features gelten Microsoft-Zahlungsbestimmungen).
- **Kontakt/DSAR/DPA:** Self-Service über Microsoft Privacy Dashboard; Kontodatenverwaltung über Microsoft-Konto-Dashboard.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar (produktbezogene Telemetrie-Schalter für Outlook.com selbst sind in den genutzten Quellen nicht eindeutig dokumentiert).
- **Abschaltbar?** Teilweise: Werbe-Personalisierung kann über „Advertising Preferences“/Privacy Dashboard reduziert werden.
- **Wo (Menüpfad):** Outlook.com → **Settings** → **General** → **Advertising Preferences** (Werbung); Microsoft Privacy Dashboard: https://account.microsoft.com/privacy

**Logs & Retention:**
- **Logging-Level:** unknown
- **Aufbewahrung:** Gelöschte E-Mails werden nach ca. 7 Tagen aus dem Ordner entfernt und nach dem Leeren von „Gelöschte Elemente“ i.d.R. bis ca. 30 Tage im System vorgehalten (laut Datenschutzerklärung).
- **Lösch-/Opt-out-Optionen:** Löschung über Mail-Ordner/„Gelöschte Elemente“; Werbe-Personalisierung über Advertising Preferences/Privacy Dashboard.

**Abwägung am Punkt:** Weniger Telemetrie/Werbe-Personalisierung kann weniger „personalisierte“ Funktionen/Anzeigen bedeuten; mehr Telemetrie/IDs erhöhen das Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Für POP/IMAP/SMTP nennt Microsoft SSL/TLS bzw. STARTTLS und Modern Auth/OAuth2 (Transport); keine E2E-Aussagen für E-Mail-Inhalte in den genutzten Quellen.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Zweistufige Überprüfung verfügbar; Passkeys („Hauptschlüssel“) und FIDO2-Sicherheitsschlüssel werden unterstützt (Microsoft-Konto).
- **Recovery/Account-Wiederherstellung:** Recovery hängt an Sicherheitsinfos (z.B. Backup-Mail, Telefon, Authenticator). Microsoft weist darauf hin, dass falsche/fehlende Sicherheitsinfos zu langem Lockout führen können.
- **Vuln-Handling / Security-Kontakt:** Meldung von Sicherheitslücken über Microsoft Security Response Center (MSRC) vorgesehen.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (zweistufige Überprüfung oder Passkey) im Microsoft-Konto.  
   **Wo:** account.microsoft.com/security → „Zweistufige Überprüfung“ / „Neue Anmelde- oder Überprüfungsart hinzufügen“  
   **Prüfen:** Login auf neuem Gerät fordert zweiten Faktor bzw. Passkey.
2) **Externe Bilder über Outlook-Proxy laden lassen** (Imageproxy).  
   **Wo:** Outlook.com → Einstellungen → **Datenschutz und Daten** → **Externe Bilder** → „Immer den Outlook-Dienst verwenden, um Bilder zu laden“  
   **Prüfen:** Einstellung gespeichert; Newsletter laden Bilder ohne Direktkontakt zum Absender-Server.
3) **POP/IMAP nur bei Bedarf aktivieren** (und sonst aus lassen).  
   **Wo:** Outlook.com → Einstellungen → **Mail** → **Weiterleitung und IMAP** → POP/IMAP-Schalter  
   **Prüfen:** POP/IMAP ist „Aus“, sofern du keinen Dritt-Client nutzt.

**Stolpersteine:**
- Zusätzliche Recovery-Kontakte (z.B. Telefonnummer) erhöhen Wiederherstellbarkeit, aber auch Identitätsbindung (Abwägung: Recovery vs. Metadaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Werbe-Personalisierung reduzieren:** Outlook.com → Settings → General → Advertising Preferences (Opt-out/Opt-in je nach Region).
- **Externe Inhalte vorsichtig:** Imageproxy aktiv lassen; Absender nur bei Bedarf in „Sichere Absender“ aufnehmen.
- **Dritt-Clients minimieren:** POP/IMAP nur für genau ein Gerät/Client aktivieren, keine unnötigen Smart-Devices.
- **Sicherheitsinfos schlank halten:** Wenn möglich Authenticator/Passkey statt SMS nutzen.
**Abwägung:** weniger Komfort bei Gerätewechsel/Recovery, mehr eigener Pflegeaufwand.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Isolierte Nutzung:** getrenntes Browser-Profil oder separate VM nur für Outlook.com-Anmeldung.
- **Passkey + Security Key:** FIDO2-Sicherheitsschlüssel als Anmeldeoption ergänzen (für besonders starke Bindung).
- **Regelmäßige Kontrolle:** „Letzte Aktivität“ (account.live.com/activity) eng überwachen; bei Auffälligkeiten sofort Passwort/Sicherheitsinfos aktualisieren.
**Abwägung:** deutlich mehr Aufwand (Geräte-/Schlüssel-Management), höhere Wahrscheinlichkeit von Self-Lockout ohne gutes Backup.

</details>

## Features
- Webmail-Dienst für private Microsoft-Konten (@outlook.com/@hotmail.com/@live.com)
- Optionaler Zugriff per POP/IMAP/SMTP (standardmäßig deaktiviert; Modern Auth/OAuth2)
- Externe Bilder werden über einen Outlook-Imageproxy geladen (einstellbar)
- Werbung in der kostenlosen Nutzung; Werbe-Einstellungen in Outlook.com verfügbar
- Kontoschutz über Microsoft-Konto: zweistufige Überprüfung, Passkeys, „Letzte Aktivität“

## Alternativen
- Proton Mail (Fokus: E2E im Anbieter-Client; Abwägung: Interop/IMAP nicht wie bei klassischen Providern)
- Tuta (Tutanota) (Fokus: E2E + eigene Clients; Abwägung: Standard-Ökosystem eingeschränkt)
- Fastmail (Fokus: IMAP/Power-Features; Abwägung: klassischer Providerzugriff auf Inhalte)
- mailbox.org / Posteo (Fokus: EU-Anbieter; Abwägung: Funktionsumfang/Integrationen je nach Tarif)

## Nicht gelöst / offene Punkte
- Outlook.com-spezifische Telemetrie/Diagnosedaten (welche Events/Kategorien, Opt-out, dokumentierte Endpunkte) sind nicht klar zusammengefasst.
- Öffentliche, vollständige Liste der Werbe-/Mess-Partner für Outlook.com (sofern regional eingeblendet) ist nicht als Liste verlinkt.

## Quellen

- Kontoschutz über Microsoft-Konto: "zweistufige Überprüfung, Passkeys, FIDO2-Sicherheitsschlüssel, „Letzte Aktivität“
- Proton Mail (Fokus: "E2E-Verschlüsselung im Anbieter-Client; Trade-off: Web-/App-Zwang, Metadaten bleiben relevant)
- Tuta (Tutanota) (Fokus: "E2E + eigene Clients; Trade-off: Interop/IMAP-Ökosystem eingeschränkt)
- Fastmail (Fokus: "Standardprotokolle/IMAP, Power-Features; Trade-off: klassischer Provider-Zugriff auf Inhalte)
- mailbox.org / Posteo (Fokus: "EU-Anbieter & klassische Mail-Stacks; Trade-off: Funktionen/Integrationen je nach Tarif)
- https://www.microsoft.com/de-de/digitalsafety/transparency-reports
- [Microsoft-Datenschutzbestimmungen](https://www.microsoft.com/de-de/privacy/privacystatement)
- [Microsoft-Servicevertrag](https://www.microsoft.com/de-de/servicesagreement)
- [POP-, IMAP- und SMTP-Einstellungen für Outlook.com](https://support.microsoft.com/de-de/office/pop-imap-und-smtp-einstellungen-f%C3%BCr-outlook-com-d088b986-291d-42b8-9564-9c414e2aa040)
- [Schutz externer Bilder in Outlook.com](https://support.microsoft.com/de-de/office/schutz-externer-bilder-in-outlook-com-43c0c17e-8fd1-41c6-93fe-ffe54638e82b)
- [About ads in Outlook](https://support.microsoft.com/en-us/office/about-ads-in-outlook-426f5993-75d8-4898-8f27-9ee0008692a0)
- [Aktivieren der zweistufigen Überprüfung für Ihr Microsoft-Konto](https://support.microsoft.com/de-de/account-billing/aktivieren-der-zweistufigen-%C3%BCberpr%C3%BCfung-f%C3%BCr-ihr-microsoft-konto-c7910146-672f-01e9-50a0-93b4585e7eb4)
- [Anmelden mit einem Hauptschlüssel](https://support.microsoft.com/de-de/account-billing/anmelden-mit-einem-hauptschl%C3%BCssel-09a49a86-ca47-406c-8acc-ed0e3c852c6d)
- [Was ist die Seite „Letzte Aktivität“?](https://support.microsoft.com/de-de/account-billing/was-ist-die-seite-letzte-aktivit%C3%A4t-23cf5556-4dbe-70da-82c8-bb3a8d8f8016)
- [Microsoft Transparency Reports (Digital Safety)](https://www.microsoft.com/de-de/digitalsafety/transparency-reports)
