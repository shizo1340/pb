---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Disroot (Community)"
url: "/anbieter/disroot/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-10"
robots: "index,follow"
description: "Kurzprofil von Disroot (Community) (Kategorie: E-Mail)."
provider: ""
name: "Disroot (Community)"
category: "E-Mail"
website: "https://disroot.org/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://disroot.org/privacy_policy"
terms: "https://disroot.org/tos"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "partial"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Niederlande"
region: "eu"
logs: "minimal"
retention: "short"
retention_notes: "Server-Logs: 24h (E-Mail); Backups: 4 Tage"
retention_max_days: "4"
data_notes: "E-Mails liegen serverseitig unverschlüsselt vor, sofern du nicht selbst PGP nutzt; E-Mail-Server-Logs enthalten Metadaten (z.B. Absender/Empfänger) und werden nach 24h gelöscht; Disroot gibt an, keine Werbung/kein Tracking/kein Profiling zu betreiben."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Disroot (Community) ist ein Anbieter aus der Kategorie **E-Mail**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du eine Community-getragene E-Mail mit Standard-Protokollen (IMAP/SMTP) und ohne Werbe-/Tracking-Geschäftsmodell nutzen willst.
- **Weniger geeignet wenn:** du serverseitige Ende-zu-Ende-Verschlüsselung „out of the box“ erwartest oder E-Mail-Metadaten (Absender/Empfänger) vollständig minimieren willst.
- **Wichtigster Abwägung:** Standard-E-Mail ist interoperabel, aber Metadaten fallen systembedingt an (Abwägung: Kompatibilität/Ökosystem vs. Metadatenrisiko).

## Sofortmaßnahmen
- **Nutze IMAP/SMTP mit TLS (Ports 993/587)**, damit Transportverschlüsselung zuverlässig aktiv ist.
- **Nutze PGP (z.B. GnuPG oder Mailvelope im Webmail)**, wenn du Inhalte zusätzlich schützen willst (E-Mail-Inhalte sind sonst serverseitig unverschlüsselt).
- **Halte Recovery-Daten minimal** (nur das Nötigste), um zusätzliche Identitätsbindung zu vermeiden (Abwägung: Recovery vs. weniger Metadaten).

## Entscheidungshilfe
- Wenn du ein **E-Mail-Konto ohne Telefonnummer** willst, dann ist Disroot passend (Abwägung: Account-Freischaltung erfordert eine gültige E-Mail-Adresse).
- Wenn du **maximale Kompatibilität** mit Clients (Thunderbird, K-9, FairEmail etc.) brauchst, dann nutze IMAP/SMTP (Abwägung: Metadaten entstehen wie bei jeder Standard-E-Mail).
- Wenn du **Inhalte vertraulich** halten willst, dann verschlüssele Ende-zu-Ende mit PGP (Abwägung: Schlüsselverwaltung und Bedienaufwand).
- Wenn du **IP-Metadaten reduzieren** willst, dann nutze Webmail über den Tor-Onion-Link (Abwägung: langsamer/teils mehr Reibung).
- Wenn du **Support/Debugging** erwartest, dann akzeptiere die kurzen Server-Logs (Abwägung: 24h-Logs helfen Diagnose, enthalten aber Metadaten).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Disroot (Community) |
| Kategorie | E-Mail |
| Website | https://disroot.org/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Liberapay, Patreon, PayPal, Stripe (Online-Spenden); SEPA-Banküberweisung; Kryptowährung (Spenden) |
| Jurisdiktion | Niederlande |
| Logs | minimal |
| Retention | Server-Logs: 24h (E-Mail); Backups: 4 Tage |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://disroot.org/privacy_policy
- AGB/Terms: https://disroot.org/tos
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
E-Mails liegen serverseitig unverschlüsselt vor, sofern du nicht selbst PGP nutzt; E-Mail-Server-Logs enthalten Metadaten (z.B. Absender/Empfänger) und werden nach 24h gelöscht; Disroot gibt an, keine Werbung/kein Tracking/kein Profiling zu betreiben.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Für die Kontoerstellung wird eine gültige E-Mail-Adresse (für Freischaltung) sowie Username/Passwort genannt; außerdem fallen betriebsnotwendige Daten wie IP-Adresse und User-Agent an.
- **Wofür:** Betrieb der Dienste, Diagnose/Fehlerbehebung und Schutz vor Missbrauch (z.B. Brute-Force).
- **Weitergabe/Subprozessoren:** Online-Spenden laufen über Drittanbieter (u.a. PayPal/Patreon/Liberapay; zusätzlich werden auf der Spenden-Seite weitere Methoden genannt). Für E-Mail gilt außerdem: Zustellung/Kommunikation erfolgt über andere Mailserver im Internet (föderiertes Protokoll).
- **Drittlandtransfer:** Nicht angegeben (Datenhaltung laut Anbieter in den Niederlanden).
- **Zahlungsabwicklung/Payment Processor:** Online-Spenden über externe Zahlungsanbieter; Banküberweisung (SEPA) möglich.
- **Kontakt/DSAR/DPA:** Kontakt über support@disroot.org (GPG-Key/Fingerprint auf der Kontaktseite); DPA/DSAR-Prozess nicht konkret beschrieben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Disroot beschreibt sein Modell als „kein Tracking / keine Ads / kein Profiling“ (Website-Aussage).
- **Abschaltbar?** Nicht angegeben (keine spezifischen Analytics-Schalter dokumentiert).
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** Server-Logs (E-Mail): 24h; Backups: 4 Tage
- **Lösch-/Opt-out-Optionen:** Kontolöschung via User Self-Service; laut FAQ werden Accounts und Daten täglich „gewiped“ (Backups können Inhalte bis zu 4 Tage enthalten).

**Abwägung am Punkt:** Weniger Logs kann Diagnose/Abuse-Handling erschweren; selbst kurze Logs enthalten E-Mail-Metadaten (z.B. Absender/Empfänger).

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Transportverschlüsselung (SSL/TLS) für Mailzugriff; E-Mail-Inhalte werden serverseitig unverschlüsselt gespeichert, außer du verschlüsselst selbst (z.B. PGP).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Für E-Mail nicht angegeben; in der FAQ wird 2FA explizit für die Cloud erwähnt (nicht als globaler Account-Default).
- **Recovery/Account-Wiederherstellung:** Passwort-Reset nur, wenn du Sicherheitsfragen und/oder eine Recovery-E-Mail hinterlegt hast; ansonsten ist Reset nicht möglich.
- **Vuln-Handling / Security-Kontakt:** Allgemeiner Support-Kontakt (support@disroot.org) inkl. GPG-Key; offizieller Disclosure-Prozess nicht beschrieben.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Starkes Passwort setzen** und im Passwort-Manager speichern.  
   **Prüfen:** Passwort ist lang/zufällig, kein Reuse.
2) **IMAP/SMTP korrekt mit TLS einrichten** (IMAP 993 SSL, SMTP 587 STARTTLS).  
   **Prüfen:** Mail-Client zeigt „TLS aktiv“ / keine Zertifikatswarnung.
3) **Recovery bewusst konfigurieren** (Sicherheitsfragen und/oder Recovery-Mail).  
   **Prüfen:** Passwort-Reset ist testbar, ohne dass du unnötige Zusatzdaten hinterlegst.

**Stolpersteine:**
- Standard-E-Mail bleibt **metadatenreich** (Header/Absender/Empfänger/Transportwege) – PGP schützt Inhalte, nicht Metadaten.
- Webmail kann JavaScript erfordern; wenn du JS vermeiden willst, nutze einen IMAP-Client statt Browser-Webmail.

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze PGP standardmäßig für Inhalte (Client-Plugin oder Mailvelope im Webmail).
- Nutze Tor-Onion-Link für Webmail, wenn du IP-Metadaten reduzieren willst.
- Setze Recovery so sparsam wie möglich (Abwägung: weniger Recovery-Komfort).

**Abwägung:** mehr Bedienaufwand (Schlüsselverwaltung, Tor-Workflow, Recovery-Risiko).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Getrennter Mail-Client/Profil (z.B. separates Browser-Profil nur für Webmail oder isolierter Mail-Client).
- Tor (Onion) für Webmail; zusätzlich konsequent PGP für Inhalte.
- Minimale Exposition: keine unnötigen Weiterleitungen/Autoresponder (Metadatenfläche reduzieren).

**Abwägung:** deutlicher Komfortverlust; mehr Fehlersuche bei Zustellung/Schlüsselproblemen.

</details>

## Features
- IMAP/POP3/SMTP-Zugang + Webmail (Roundcube)
- TLS/SSL für Client↔Server und (wenn möglich) Server↔Server
- Tor-Onion-Link für Webmail/Service-Seite
- Plus-Addressing (user+tag@disroot.org)
- Optional: PGP via Mailvelope im Browser-Webmail

## Alternativen
- [mailbox.org](/anbieter/mailbox-org/) – E-Mail mit anderem Schwerpunkt (kommerzieller Betrieb/Business-Features vs. Community-Modell)
- [Posteo](/anbieter/posteo/) – E-Mail mit anderem Schwerpunkt (zahlpflichtiges Modell vs. Spenden/Perks)
- [Proton Mail](/anbieter/proton-mail/) – E-Mail mit anderem Schwerpunkt (stärker app-/web-zentriert statt klassischem IMAP/SMTP-Workflow)
- [Tuta](/anbieter/tuta/) – E-Mail mit anderem Schwerpunkt (Anbieter-eigene Clients/Protokolle statt Standard-IMAP/SMTP)

## Nicht gelöst / offene Punkte
- Keine öffentlich dokumentierte Subprozessoren-/DPA-Seite gefunden.

## Quellen

- Optional: "PGP via Mailvelope im Browser-Webmail
- https://webmail.disroot.org/
- [Disroot Startseite](https://disroot.org/)
- [Disroot E-Mail Service](https://disroot.org/services/email)
- [Disroot Privacy Policy](https://disroot.org/privacy_policy)
- [Disroot Terms of Service](https://disroot.org/tos)
- [Disroot FAQ](https://disroot.org/faq)
- [Disroot Perks (Extra Storage / Custom Domain)](https://disroot.org/perks)
- [Disroot Donate](https://disroot.org/donate)
- [Disroot Contact](https://disroot.org/contact)
- [Disroot Webmail Login](https://webmail.disroot.org/)
