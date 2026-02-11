---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Forward E-Mail"
url: "/anbieter/forward-email/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-13"
robots: "index,follow"
description: "Kurzprofil von Forward E-Mail (Kategorie: E-Mail-Aliasing)."
provider: ""
name: "Forward E-Mail"
category: "E-Mail-Aliasing"
website: "https://forwardemail.net"
repo: "https://github.com/forwardemail/forwardemail.net"
license: "BUSL-1.1 AND MPL-2.0 (laut GitHub; Self-Hosting-Seite nennt MIT → prüfen)"
policies: ""
privacy: "https://forwardemail.net/en/privacy"
terms: "https://forwardemail.net/en/terms"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "partial"
self_host_possible: "yes"
account_required: "yes"
phone_required: "unknown"
kyc_required: "unknown"
jurisdiction: "USA (Governing law: Delaware)"
region: "us"
logs: "minimal"
retention: "mid"
retention_notes: "Fehlerlogs: 7 Tage; Outbound SMTP: ~30 Tage; Redis Rate-Limit: 24h (laut Privacy Policy)"
retention_max_days: "30"
data_notes: "Forwarding laut Anbieter in-memory (keine Speicherung), Ausnahme: Fehlerlogs und Outbound-SMTP-Logs. Optional: verschlüsselte IMAP-Mailboxen (Passwort-basiert, Zero-Knowledge-Trade-off bei Recovery)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Forward E-Mail ist ein Anbieter aus der Kategorie **E-Mail-Aliasing**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Custom-Domain-Forwarding/Aliasing suchst und laut Anbieter möglichst wenig Log-Daten anfallen sollen (Forwarding in-memory, Ausnahmen: Fehler/Outbound-SMTP).
- **Weniger geeignet wenn:** du eine klar dokumentierte MFA/2FA-Konfiguration und Recovery-Story brauchst (Aktivierung/Details sind in den hier genutzten Quellen nicht eindeutig belegt).
- **Wichtigster Abwägung:** Zero-Knowledge/Passwort-basierte Mailbox-Verschlüsselung kann Recovery erschweren (Passwort vergessen ⇒ Zugriff/Restore hängt von Offline-Backups ab).

## Sofortmaßnahmen
- **SPF + DKIM + DMARC setzen**: reduziert Spoofing-Risiko und verbessert Zustellbarkeit.
- **Forwarding-Regeln minimal halten** (z.B. nur benötigte Aliases statt breiter Catch-all): reduziert Fehlzustellungen und Alias-Leaks.
- **Passwort-/Backup-Disziplin für IMAP-Speicher**: wenn du Storage nutzt, plane Offline-Backups ein (Abwägung: mehr Aufwand, dafür weniger Recovery-Risiko).

## Entscheidungshilfe
- Wenn du **nur Weiterleitung** brauchst (und kein „Senden/IMAP“), dann reicht der Free-Forwarding-Modus (Abwägung: keine Mailbox-Funktionen).
- Wenn du **Senden als @deinedomain** willst, dann brauchst du einen Plan mit **Outbound SMTP** (Abwägung: zusätzliche Account-/Billing-Daten).
- Wenn du **Mailbox-Speicherung** nutzt, dann sind **Passwort-Management & Offline-Backups** zentral (Abwägung: Komfort vs. Recovery-Risiko).
- Wenn du **Webhooks/Regex** nutzt, dann teste Regeln mit Dummy-Aliases (Abwägung: mehr Einrichtung, weniger Fehlrouting).
- Wenn du **maximale Kontrolle** willst, dann ist **Self-Hosting** relevant (Abwägung: eigener Betrieb/Updates/Monitoring).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Forward E-Mail |
| Kategorie | E-Mail-Aliasing |
| Website | https://forwardemail.net |
| Quellcode | https://github.com/forwardemail/forwardemail.net |
| Lizenz | BUSL-1.1 AND MPL-2.0 (laut GitHub; Self-Hosting-Seite nennt MIT → prüfen) |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Stripe, PayPal (laut DPA) |
| Jurisdiktion | USA (Governing law: Delaware) |
| Logs | minimal |
| Retention | Fehlerlogs: 7 Tage; Outbound SMTP: ~30 Tage; Redis Rate-Limit: 24h (laut Privacy Policy) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://forwardemail.net/en/privacy
- AGB/Terms: https://forwardemail.net/en/terms
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Forwarding laut Anbieter in-memory (keine Speicherung), Ausnahme: Fehlerlogs und Outbound-SMTP-Logs. Optional: verschlüsselte IMAP-Mailboxen (Passwort-basiert, Zero-Knowledge-Abwägung bei Recovery).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Account-/Domain-/Alias-Verwaltung; laut Privacy Policy zusätzlich Fehlerlogs (7 Tage) und Outbound-SMTP-Logs (~30 Tage); Rate-Limit-Daten in Redis (24h).
- **Wofür:** Betrieb des Dienstes (Forwarding/SMTP/IMAP), Missbrauchsschutz (Rate-Limits), Fehleranalyse (Error Logs), Zustell-/Abuse-Handling bei Outbound SMTP.
- **Weitergabe/Subprozessoren:** Zahlungsabwicklung laut DPA über Stripe/PayPal; weitere Subprozessoren in den genutzten Quellen nicht vollständig als Liste belegt.
- **Drittlandtransfer:** Unklar (Server-/Provider-Details sind in der FAQ als Thema vorhanden; ggf. dort verifizieren).
- **Zahlungsabwicklung/Payment Processor:** Stripe, PayPal (laut DPA).
- **Kontakt/DSAR/DPA:** DPA-Seite vorhanden; weitere DSAR/DPA-Details in Privacy/DPA prüfen.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy: keine Drittanbieter-Analytics (nicht als „Tracking“ beschrieben).
- **Abschaltbar?** Nicht zutreffend / Nicht angegeben (wenn keine Drittanbieter-Analytics genutzt werden).
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** Fehlerlogs: 7 Tage; Outbound SMTP: ~30 Tage; Redis Rate-Limit: 24h (laut Privacy Policy)
- **Lösch-/Opt-out-Optionen:** Nicht angegeben (prüfe Privacy Policy + Account/Data-Management in FAQ).

**Abwägung am Punkt:** Weniger Logs erschwert Ursachenanalyse/Support; mehr Logs erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Laut Produktseite: TLS in-transit; AES-256 at-rest für Mailbox-Speicher (IMAP-Storage). Forwarding laut Anbieter in-memory.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Unklar (FAQ führt „Passkeys/WebAuthn“ als Thema; konkrete Aktivierung/Optionen nicht in den hier ausgewerteten Abschnitten belegt).
- **Recovery/Account-Wiederherstellung:** Laut Produktseite: bei vergessenem Passwort kann die Mailbox verloren gehen; Recovery hängt von Offline-Backups ab.
- **Vuln-Handling / Security-Kontakt:** Repo/Security-Bereich vorhanden; offizieller Meldeweg über GitHub Security ist naheliegend.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (Passkeys/MFA), falls angeboten.  
   **Prüfen:** Account → Security zeigt aktivierte Faktoren.
2) **Forwarding sauber begrenzen** (kein unnötiges Catch-all; nur benötigte Empfänger).  
   **Prüfen:** Testmail an Alias → kommt nur bei erwarteten Postfächern an.
3) **SPF/DKIM/DMARC einrichten** (über die Guides in der FAQ).  
   **Prüfen:** DNS-Checks bestehen; Testmail besteht Auth-Checks.

**Stolpersteine:**
- Wenn du IMAP-Storage nutzt: Passwortverlust kann Recovery erschweren (Abwägung: Zero-Knowledge-Design vs. Wiederherstellung).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze möglichst **Forwarding-only**, wenn du keine Mailbox-Speicherung brauchst.
- Vermeide „Alles an einen Catch-all“-Einrichtungen, wenn Aliases gezielt verwaltbar sind.
- Trenne Domains nach Kontext (z.B. „Accounts“ vs. „Newsletter“) für geringere Korrelation.
**Abwägung:** mehr DNS-/Alias-Pflege statt maximaler Bequemlichkeit.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze **Self-Hosting**, wenn du Infrastruktur-/Jurisdiktionskontrolle brauchst (siehe Self-Hosting-Docs/Repo).
- Isoliere Admin-Zugriff (separater Browser/Profil, Hardware-Token für Konto-Login, falls unterstützt).
- Für Outbound/SMTP: strengere Alias-Policies und Abuse-Schutz-Regeln testen.
**Abwägung:** eigener Betrieb (Updates, Monitoring, Backups) statt Managed-Service-Komfort.

</details>

## Features
- Custom-Domain E-Mail-Forwarding (inkl. Catch-all, mehrere Empfänger pro Alias)
- Regex-Regeln & Webhooks (laut Produktseite)
- Outbound SMTP (paid) und IMAP/POP3 (laut FAQ/Produktseite)
- Verschlüsselte Mailbox-Speicherung (AES-256 at-rest + TLS in-transit, laut Produktseite)
- OpenPGP/MIME-Unterstützung (laut FAQ)
- SPF/DKIM/DMARC-Guides (laut FAQ)
- Self-Hosting per Docker/Einrichtung-Script (laut FAQ/Repo)
- DPA verfügbar (laut FAQ/DPA)

## Alternativen
- SimpleLogin (Alias-Management-Schwerpunkt; Abwägung: anderer Funktionsumfang/Account-Bindung)
- AnonAddy (Alias- und Forwarding-Fokus; Abwägung: anderer Hosting-/IMAP-Ansatz)
- Firefox Relay (Browser-/Login-Aliases; Abwägung: weniger Custom-Domain-Fokus je nach Plan)
- Cloudflare E-Mail Routing (DNS-Forwarding; Abwägung: Anbieterbindung an Cloudflare)

## Nicht gelöst / offene Punkte
- MFA/2FA/Passkeys: konkrete Aktivierung/Unterstützung nicht eindeutig belegt.
- Lizenzlage: GitHub zeigt BUSL-1.1 AND MPL-2.0; Self-Hosting-Seite nennt MIT.

## Quellen

- SimpleLogin (Alias-Management-Schwerpunkt; Trade-off: "anderer Funktionsumfang/Account-Bindung)
- AnonAddy (Alias- und Forwarding-Fokus; Trade-off: "anderer Hosting-/IMAP-Ansatz)
- Firefox Relay (Browser-/Login-Aliases; Trade-off: "weniger Custom-Domain-Fokus je nach Plan)
- Cloudflare E-Mail Routing (DNS-Forwarding; Trade-off: "Anbieterbindung an Cloudflare)
- [Forward Email – FAQ](https://forwardemail.net/en/faq)
- [Forward Email – Privacy Policy](https://forwardemail.net/en/privacy)
- [Forward Email – Terms](https://forwardemail.net/en/terms)
- [Forward Email – Data Processing Agreement (DPA)](https://forwardemail.net/en/dpa)
- [Forward Email – Private Business Email (Produktseite)](https://forwardemail.net/en/private-business-email)
- [Forward Email – GitHub Repo](https://github.com/forwardemail/forwardemail.net)
- [Forward E-Mail – FAQ](https://forwardemail.net/en/faq)
- [Forward E-Mail – Privacy Policy](https://forwardemail.net/en/privacy)
- [Forward E-Mail – Terms](https://forwardemail.net/en/terms)
- [Forward E-Mail – Data Processing Agreement (DPA)](https://forwardemail.net/en/dpa)
- [Forward E-Mail – Private Business E-Mail (Produktseite)](https://forwardemail.net/en/private-business-email)
- [Forward E-Mail – GitHub Repo](https://github.com/forwardemail/forwardemail.net)
