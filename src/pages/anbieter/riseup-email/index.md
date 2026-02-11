---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Riseup (Community)"
url: "/anbieter/riseup-email/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-21"
robots: "index,follow"
description: "Kurzprofil von Riseup (Community) (Kategorie: E-Mail)."
provider: ""
name: "Riseup (Community)"
category: "E-Mail"
website: "https://riseup.net/"
repo: "Nicht angegeben"
license: "Nicht angegeben"
policies: ""
privacy: "https://riseup.net/en/privacy-policy"
terms: "https://riseup.net/en/tos"
transparency: "Nicht angegeben"
warrant_canary: "https://riseup.net/en/canary"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "partial"
self_host_possible: "no"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA"
region: "us"
logs: "none"
retention: "specified"
retention_notes: "Transit-Logs (From/To) täglich gelöscht; Spam: 7d; Trash: 21d; sonst bis Löschung durch Nutzer:in"
data_notes: "Laut Anbieter: keine IP-Logs, persönlich verschlüsselter Speicher für neue Accounts (seit 03/2017), Recovery nur über Recovery Code."
features: ""
alternatives: ""
payment_processors: "Liberapay, PayPal (Spenden), Kryptowährungen"
sources: ""
---
## Kurzprofil

Riseup (Community) ist ein Anbieter aus der Kategorie **E-Mail**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du ein Community-basiertes E-Mail-Konto ohne Telefonnummer/Personaldaten und mit dokumentierter Datensparsamkeit (z.B. keine IP-Logs) suchst.
- **Weniger geeignet wenn:** du „Recovery durch Support“ erwartest oder ein Konto ohne Invite-/Antragsprozess brauchst.
- **Wichtigster Abwägung:** Eigenverantwortung (Recovery Code, Backups, Offline-Archivierung) vs. Komfort/Support-Flexibilität.

## Sofortmaßnahmen
- **Recovery Code erzeugen und offline sichern:** verhindert dauerhaften Kontoverlust bei vergessenen Zugangsdaten.  
- **Service-spezifisches Passwort für deinen Mail-Client nutzen:** reduziert Schaden, falls ein App-Passwort kompromittiert wird.  
- **POP-Download + lokale Archivierung einrichten:** reduziert langfristig gespeicherte Maildaten auf dem Anbieter-System.

## Entscheidungshilfe
- Wenn du **möglichst wenig Identitätsbindung** willst, dann nutze Riseup mit Invite-Code und ohne zusätzliche Profildaten (Abwägung: Kontoerstellung/Account-Prozesse weniger „instant“).  
- Wenn du **minimale Server-Datenhaltung** willst, dann nutze POP zum Herunterladen und lösche Nachrichten serverseitig (Abwägung: weniger komfortabler Zugriff auf mehreren Geräten).  
- Wenn du **Anonymitäts-Transport** brauchst, dann konfiguriere IMAP/SMTP über Onion Services (Abwägung: mehr Einrichtung, ggf. Einschränkungen/Fehlersuche).  
- Wenn du **Ende-zu-Ende-Verschlüsselung** erwartest, dann nutze OpenPGP/Mailvelope zusätzlich (Abwägung: Schlüssel-Management + Betreff/Metadaten bleiben im E-Mail-System strukturell sichtbar).  
- Wenn du **Recovery durch Anbieter-Support** brauchst, dann plane nicht mit „Passwort zurücksetzen“ ohne Recovery Code (Abwägung: mehr Kontrolle bei dir, aber höheres Lockout-Risiko).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Riseup (Community) |
| Kategorie | E-Mail |
| Website | https://riseup.net/ |
| Quellcode | Nicht angegeben |
| Lizenz | Nicht angegeben |
| Preismodell | free (spendenfinanziert) |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Liberapay, PayPal (Spenden), Kryptowährungen |
| Jurisdiktion | USA |
| Logs | none |
| Retention | Transit-Logs (From/To) täglich gelöscht; Spam: 7d; Trash: 21d; sonst bis Löschung durch Nutzer:in |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://riseup.net/en/privacy-policy
- AGB/Terms: https://riseup.net/en/tos
- Transparency Report: Nicht angegeben
- Warrant Canary: https://riseup.net/en/canary

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
- Laut Privacy Policy: **keine IP-Adressen** werden gespeichert; Browser-Fingerprint und Message-Metadaten werden **nicht retained**.  
- Laut Privacy Policy: **Transit-Logs** (From/To je Mail) werden zur Abuse-Erkennung geführt und **täglich gelöscht**.  
- Laut Anbieter: **Trash** wird nach **21 Tagen**, **Spam** nach **7 Tagen** automatisch gelöscht.  
- Laut Privacy Policy: Seit **03/2017** ist Speicher für neue Accounts **persönlich verschlüsselt**, Riseup kann gespeicherte Inhalte nicht lesen.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Registrierungsdatum (auf Quartal gerundet), ggf. Account-Antragsdaten (werden nach 4 Monaten entfernt), Invite-Status (nach 1 Monat entfernt), optional Reset-E-Mail als Hash-Digest, Help-Tickets (assoziiert, alt wird periodisch gelöscht), Session-Identifier (temporär), Transit-Logs (From/To) für relayed Mail (tägliche Löschung), Quartal+Jahr des letzten Logins.  
- **Wofür:** Betrieb der Dienste, Abuse-/Spam-Abwehr, Dormant-Account-Handling, Support-Tickets, Authentifizierung.  
- **Weitergabe/Subprozessoren:** Laut Privacy Policy: „We do not share user information“; keine öffentliche Subprozessorenliste auf den genannten Seiten.  
- **Drittlandtransfer:** Nicht angegeben.  
- **Zahlungsabwicklung/Payment Processor:** Spenden u.a. via Liberapay/PayPal sowie Kryptowährungen (für Spenden, nicht als Pflicht für Nutzung).  
- **Kontakt/DSAR/DPA:** Kontakt primär über Support-Tickets; allgemeine Kontaktadresse vorhanden.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy: keine Third-Party-Cookies oder Tracking; Session-Identifier nur für Login-Status.  
- **Abschaltbar?** Nicht zutreffend (keine Analytics-Schalter dokumentiert; Session-Cookie ist funktional).  
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** none (laut Anbieter keine IP-Logs; Transit-Logs (From/To) werden täglich gelöscht).  
- **Aufbewahrung:** Transit-Logs täglich; Spam 7d; Trash 21d; sonst bis Löschung durch Nutzer:in.  
- **Lösch-/Opt-out-Optionen:** Account-Verwaltung nennt „purge your data“ und Account-Löschung; Auto-Löschung von Spam/Trash.

**Abwägung am Punkt:** Weniger Logs reduziert Identifizierbarkeit; gleichzeitig können Abuse- und Debugging-Prozesse stärker eingeschränkt sein.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Vollverschlüsselte Datenträger (Full Disk Encryption) + persönlich verschlüsselter E-Mail-Speicher (serverseitig an Passwort gebunden); Ende-zu-Ende ist nicht standardmäßig integriert und erfordert zusätzliche OpenPGP-Lösungen.  
- **KDF/Parameter/Schlüsselableitung:** Passwörter werden laut Anbieter mit **argon2** gespeichert (memory-hard).  
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben.  
- **Recovery/Account-Wiederherstellung:** Recovery ausschließlich über **Recovery Code**; ohne Code keine Wiederherstellung durch Riseup.  
- **Vuln-Handling / Security-Kontakt:** Kontakt und Support über Help-Tickets; allgemeine Kontaktadresse vorhanden.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Recovery Code erzeugen und sicher ablegen** (offline).  
   **Wo:** `account.riseup.net` → Account Settings → Recovery Code (Bezeichnung kann variieren).  
   **Prüfen:** Code wurde angezeigt/erneuert und extern gesichert.
2) **Service-spezifisches Passwort für Mail-Client setzen** (statt Hauptpasswort überall zu nutzen).  
   **Wo:** `account.riseup.net` → Service-specific passwords.  
   **Prüfen:** Mail-Client funktioniert weiterhin; Service-Passwort getrennt notiert/verwaltet.
3) **Mail-Client nur mit TLS/SSL konfigurieren** (IMAP/POP/SMTP).  
   **Wo (Thunderbird-Beispiel):** `Edit → Account Settings → Server Settings → Connection Security: SSL/TLS` und SMTP `Port 465` (laut Doku).  
   **Prüfen:** Verbindung steht; Ports/„SSL/TLS“ korrekt; keine Klartext-Anmeldung.

**Stolpersteine:**
- Ohne Recovery Code ist Account-Recovery praktisch ausgeschlossen (Abwägung: weniger Support-Zugriff auf Identitätsdaten vs. höheres Lockout-Risiko).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Identifizierende Account-Infos minimieren** (z.B. alternative E-Mail entfernen), sobald Konto aktiv ist.  
  **Wo:** Government-FAQ nennt `user.riseup.net`/Account-Info-Bereich.  
  **Abwägung:** kein Passwort-Reset möglich, wenn du später Zugang verlierst.
- **POP statt IMAP** nutzen und Mails lokal archivieren.  
  **Abwägung:** weniger komfortabler Zugriff auf mehreren Geräten.
- **Regelmäßig purgen/lokales Backup pflegen**, da der Anbieter explizit darauf hinweist, dass Langzeit-Archivierung deine Verantwortung ist.  
  **Abwägung:** mehr Eigenaufwand.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Tor Onion Services für IMAP/POP/SMTP** konfigurieren (kein Verlassen des Tor-Netzwerks).  
  **Wo:** Onion-Service-Settings (`Server: …onion`, Ports 143/110/25; SSL „No“ als Default im Onion-Modus).  
  **Abwägung:** mehr Einrichtung; je nach Client/Umgebung anfälliger für Fehlkonfiguration.
- **OpenPGP Ende-zu-Ende** zusätzlich nutzen (Client-Keys, Verifikation, sichere Backups der Schlüssel).  
  **Abwägung:** Schlüsselverwaltung + Betreff/Routing bleiben im E-Mail-Protokoll strukturell sichtbar.
- **Isolierte Nutzung** (separates Browser-/OS-Profil für Webmail; Remote-Inhalte in Mails blockieren).  
  **Abwägung:** Komfortverlust, höhere Komplexität.

</details>

## Features
- E-Mail via Webmail (`mail.riseup.net`) und Mail-Clients (IMAP/POP/SMTP).
- Automatische Löschung: Trash nach 21 Tagen, Spam nach 7 Tagen.
- Persönlich verschlüsselter Mail-Speicher (serverseitig; Zugriff an Passwort gebunden).
- Full Disk Encryption + verschlüsselte Kommunikation zwischen Riseup-Servern (laut Anbieter).
- Tor Onion Services für Dienste (inkl. Mail-Protokolle).
- Service-spezifische Passwörter und „Purge data“-Funktion in der Account-Verwaltung.

## Alternativen
- Proton Mail (Fokus: integrierte E2E; Abwägung: Konto-/Client-Bindung, Metadaten bleiben ein Thema).
- Tuta Mail (Fokus: E2E-Ansatz; Abwägung: Abweichungen von klassischen E-Mail-Workflows).
- Mailbox.org (Fokus: Groupware/Business; Abwägung: Bezahlmodell und andere Daten-/Support-Prozesse).
- Posteo (Fokus: bezahlter Basisdienst; Abwägung: anderes Zahlungs-/Support-Einrichtung).
- Disroot (Fokus: Community-Hosting; Abwägung: Projektprozesse/Verfügbarkeit können variieren).

## Nicht gelöst / offene Punkte
- Keine standardmäßig integrierte Ende-zu-Ende-Verschlüsselung: Für E2E ist zusätzliche OpenPGP-Lösung nötig (Abwägung: mehr Einrichtung/Kompatibilitätsarbeit).
- MFA/2FA ist nicht beschrieben (Abwägung: Kontoabsicherung hängt stark an Passwort + Recovery Code).
- Keine öffentliche Subprozessoren-/DPA-Liste auffindbar (Abwägung: weniger Transparenz über externe Dienstleister, falls vorhanden).

## Quellen

- Proton Mail (E-Mail, Fokus: "integrierte Ende-zu-Ende-Verschlüsselung; Trade-off: Account-/Client-Ökosystem, Metadaten bleiben relevant)
- Tuta Mail (E-Mail, Fokus: "Ende-zu-Ende-Verschlüsselung; Trade-off: Funktions-/Kompatibilitätsgrenzen klassischer E-Mail-Protokolle)
- Mailbox.org (E-Mail, Fokus: "Business-/Groupware-Features; Trade-off: Bezahlmodell, andere Metadaten-/Support-Prozesse)
- Posteo (E-Mail, Fokus: "bezahlter Basisdienst; Trade-off: andere Konto-/Zahlungs- und Support-Modelle)
- Disroot (Community, Fokus: "Community-Hosting; Trade-off: Kapazität/Prozesse je nach Projekt)
- https://riseup.net/en/about-us/contact
- [Riseup E-Mail](https://riseup.net/en/email)
- [Privacy Policy](https://riseup.net/en/privacy-policy)
- [Terms of Service](https://riseup.net/en/tos)
- [Canary](https://riseup.net/en/canary)
- [Riseup and Government FAQ](https://riseup.net/en/about-us/policy/government-faq)
- [Secure Connections](https://riseup.net/en/security/network-security/secure-connections)
- [Onion Service configuration](https://riseup.net/email/settings/tor)
- [Spendet (DE)](https://riseup.net/de/spenden)
- [VPN Donate (PayPal/Liberapay)](https://riseup.net/en/vpn/donate)
- [Contact](https://riseup.net/en/about-us/contact)
