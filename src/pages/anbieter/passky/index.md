---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Passky"
url: "/anbieter/passky/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von Passky (Kategorie: Passwort-Manager)."
provider: ""
name: "Passky"
category: "Passwort-Manager"
website: "https://passky.org/"
repo: "https://github.com/Rabbit-Company/Passky-Server"
license: "GPL-3.0-only"
policies: ""
privacy: "https://passky.org/PrivacyPolicy.pdf"
terms: "https://passky.org/ToS.pdf"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "yes"
phone_required: "unknown"
kyc_required: "no"
jurisdiction: "USA (Rabbit Company LLC, Cheyenne, Wyoming)"
region: "us"
logs: "minimal"
retention: "unknown"
retention_notes: "Unklar (keine konkrete Dauer angegeben)"
data_notes: "Passky nennt technische Zugriffsdaten (Webserver-Logdaten) sowie Daten zur Registrierung/Nutzung; Zahlungsdaten werden laut Anbieter direkt beim Payment Service Provider eingegeben."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Passky ist ein Anbieter aus der Kategorie **Passwort-Manager**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen Open-Source-Passwort-Manager mit Cloud-Sync und optionalem Self-Hosting nutzen willst und 2FA als zusätzlichen Kontoschutz einsetzen möchtest.
- **Weniger geeignet wenn:** du eine öffentlich dokumentierte Subprozessoren-Liste, klare Log-/Retention-Angaben oder formale unabhängige Audits als harte Vorgabe brauchst.
- **Wichtigster Abwägung:** **Sync/Komfort vs. Metadaten/Betreiber-Kontext** (öffentliche Instanzen erzeugen Server-Logdaten; Self-Hosting reduziert Fremdbetrieb, erhöht aber Wartungsaufwand).

## Sofortmaßnahmen
- **2FA nutzen (falls möglich):** reduziert das Risiko bei Passwort-Diebstahl (Abwägung: Recovery wird wichtiger).
- **Wenn du syncst: Server bewusst wählen oder selbst hosten:** bestimmt, wo Metadaten/Logs anfallen (Abwägung: mehr Betrieb/Updates bei Self-Hosting).
- **Website-Cookies prüfen:** laut Cookie Policy derzeit keine Analyse-/Werbe-Cookies – trotzdem Browser-Cookie-Settings im High-Risk-Kontext restriktiv setzen.

## Entscheidungshilfe
- Wenn du **ohne eigenen Betrieb** starten willst, dann nutze eine öffentliche Instanz (Abwägung: technische Zugriffsdaten/Logs beim Betreiber).
- Wenn du **Datenhaltung/Logs selbst kontrollieren** willst, dann ist Self-Hosting des Passky-Servers relevant (Abwägung: Updates, Backup, Monitoring).
- Wenn du **2FA erzwingen** möchtest, dann plane Hardware-/OTP-Einrichtung ein (Abwägung: zusätzliche Abhängigkeit vom zweiten Faktor).
- Wenn du **Zahlung vermeiden** willst, dann prüfe die Free-Grenzen (Abwägung: Begrenzung der Passwort-Anzahl laut Anbieter).
- Wenn du **Web-Tracking minimieren** willst, dann stütze dich nicht auf Browser-Add-ons allein, sondern prüfe Cookie-/Storage-Verhalten im Browser (Abwägung: manche Komfortfunktionen können eingeschränkt sein).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Passky |
| Kategorie | Passwort-Manager |
| Website | [passky.org](https://passky.org/) |
| Quellcode | [Rabbit-Company/Passky-Server](https://github.com/Rabbit-Company/Passky-Server) |
| Lizenz | GPL-3.0-only |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben (Payment Service Provider nicht benannt) |
| Jurisdiktion | USA (Rabbit Company LLC, Cheyenne, Wyoming) |
| Logs | minimal |
| Retention | Unklar (keine konkrete Dauer angegeben) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: [Privacy Policy (PDF)](https://passky.org/PrivacyPolicy.pdf)
- AGB/Terms: [Terms of Service (PDF)](https://passky.org/ToS.pdf)
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Passky nennt u.a. Webserver-Logdaten (IP-Adresse, Browser/OS, Referrer, Zeitpunkt) sowie Registrierungsdaten (E-Mail) und Vertrags-/Nutzungsdaten; Zahlungsdaten werden laut Anbieter direkt beim Zahlungsdienstleister eingegeben.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Website-Zugriffsdaten (Logfile), Kontakt-/Supportdaten, Registrierungsdaten (insb. E-Mail), Nutzungs-/Vertragsdaten; zusätzlich Cookies auf der Website.
- **Wofür:** Bereitstellung der Website/Services, Vertragsabwicklung, Support/Anfragen, rechtliche Pflichten.
- **Weitergabe/Subprozessoren:** Passky nennt allgemein „Organisationen, die helfen die Services bereitzustellen“ sowie z.B. professionelle Berater; keine öffentliche Subprozessoren-Liste in den verlinkten Dokumenten gefunden.
- **Drittlandtransfer:** Nicht konkret aufgelistet; DPA verweist auf geeignete Transfermechanismen (u.a. Standardvertragsklauseln) je nach Kontext.
- **Zahlungsabwicklung/Payment Processor:** Passky gibt an, keine Zahlungs-Transaktionsdaten zu speichern; Zahlungsdetails werden direkt beim jeweiligen Payment Service Provider eingegeben.
- **Kontakt/DSAR/DPA:** Kontakt über info@passky.org; DPA ist öffentlich verlinkt.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Cookie Policy derzeit **keine** Analyse-/Performance- oder Werbe-Cookies auf passky.org.
- **Abschaltbar?** Cookies lassen sich über Browser-Einstellungen blockieren; weitere Telemetrie (Clients/Apps) ist nicht dokumentiert.
- **Wo (Menüpfad):** Browser → Datenschutz/Tracking-Schutz → Cookies/Website-Daten.

**Logs & Retention:**
- **Logging-Level:** minimal (technische Zugriffsdaten laut Privacy Policy)
- **Aufbewahrung:** Unklar (Privacy Policy: „so lange wie nötig“, keine feste Dauer)
- **Lösch-/Opt-out-Optionen:** Konto kann laut Privacy Policy im Account per Delete-Funktion oder via Kontakt gelöscht werden; Logfile-Retention nicht konkret beschrieben.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Passky beschreibt, dass sensible Daten mit **XChaCha20** verschlüsselt werden und anschließend verschlüsselt auf Servern liegen.
- **KDF/Parameter/Schlüsselableitung:** Passky nennt **Argon2id** für Master-Passwort-Hashing; konkrete Parameter (Memory/Iterations) werden öffentlich nicht genannt.
- **MFA/2FA/Passkeys/Hardware-Keys:** Laut Pricing und Server-Configurator unterstützt Passky Software-2FA (OTP) und Hardware-2FA (YubiKey / Yubico OTP).
- **Recovery/Account-Wiederherstellung:** Self-Hosting: SMTP ist optional und wird laut Configurator u.a. für „Forgot Username“ genutzt; weitergehende Recovery-Flows sind öffentlich nicht detailliert.
- **Vuln-Handling / Security-Kontakt:** Öffentlicher Security/Disclosure-Prozess (SECURITY.md) nicht gefunden; Kontakt allgemein über info@passky.org.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Starkes Master-Passwort setzen** (lang, einzigartig, nicht wiederverwendet).  
   **Prüfen:** Passwort ist nicht in anderen Konten genutzt; Passwort-Manager-Generator/Passphrase genutzt.
2) **2FA aktivieren** (Software-OTP oder Hardware-Token), falls du es für deinen Account nutzt.  
   **Prüfen:** In deinem Passky-Account ist 2FA als aktiv markiert (und du hast einen Backup-Plan für den zweiten Faktor).
3) **Webzugriff bewusst nutzen:** Web-Vault nur auf vertrauenswürdigen Geräten/Browsern verwenden.  
   **Prüfen:** Browser-Profil ist sauber (keine unnötigen Extensions), Logout funktioniert, keine gespeicherten Master-Passwörter.

**Stolpersteine:**
- 2FA erhöht die Sicherheit, macht aber Recovery wichtiger (Abwägung: Angriffsschutz vs. Lockout-Risiko).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze eine **dedizierte E-Mail-Adresse/Alias** für Passky (Abwägung: Aufwand bei Mail-Management).
- Bevorzuge **Self-Hosting**, um Betreiber-Metadaten zu reduzieren (Abwägung: Betrieb/Updates/Backups).
- Self-Hosting: Deaktiviere optionale Statistik-Endpunkte und aktiviere Rate-Limiting (Abwägung: weniger Monitoring-Komfort, ggf. weniger Diagnose).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Verwende getrennte Geräteprofile/Browserprofile nur für den Passwort-Manager (Abwägung: deutlich weniger Komfort).
- Self-Hosting: Captcha/Turnstile und Rate-Limiting aktivieren; nur TLS-gesicherter Zugriff; Admin-Zugang strikt schützen (Abwägung: mehr Einrichtung-Komplexität).
- Netzwerk-Blocking nur gezielt und nach verifizierten Endpunkten (Abwägung: Risiko von Sync-/Login-Problemen).

</details>

## Features
- Cloud-Sync über Passky-Server (öffentlich oder self-hosted)
- Free-Plan: bis zu 100 Passwörter; Premium: unbegrenzt (laut Pricing)
- 2FA-Unterstützung: Software-OTP und Hardware-Token (laut Pricing/Configurator)
- Self-Hosting Option (laut Pricing/Servers/GitHub-Repo)
- Server-Configurator zur Konfiguration von Admin/DB/Rate-Limits/API-Endpunkten

## Alternativen
- Bitwarden (ähnliche Kategorie; Abwägung: anderes Konto-/Ökosystem-Modell möglich)
- KeePassXC (lokal/offline-nah; Abwägung: Sync/Sharing selbst organisieren)
- 1Password (kommerziell; Abwägung: Abo/Account-Bindung vs. Komfort)
- Proton Pass (Ökosystem-basiert; Abwägung: Konto-Bindung vs. Integration)

## Nicht gelöst / offene Punkte
- Öffentliche Subprozessoren-Liste ist in den verlinkten Dokumenten nicht vorhanden.
- Konkrete Parameter (z.B. Argon2id-Konfiguration) sind nicht öffentlich dokumentiert.
- Öffentlicher Security/Disclosure-Prozess (SECURITY.md) nicht gefunden.

## Quellen

- Bitwarden (ähnliche Kategorie; Trade-off: "anderes Konto-/Ökosystem-Modell möglich)
- KeePassXC (lokal/offline-nah; Trade-off: "Sync/Sharing selbst organisieren)
- 1Password (kommerziell; Trade-off: "Abo/Account-Bindung vs. Komfort)
- Proton Pass (Ökosystem-basiert; Trade-off: "Konto-Bindung vs. Integration)
- [Passky – Website](https://passky.org/)
- [Passky – Download](https://passky.org/download)
- [Passky – Pricing](https://passky.org/pricing)
- [Passky – Servers](https://passky.org/servers)
- [Passky – Server Configurator](https://passky.org/configurator)
- [Passky – Privacy Policy (PDF)](https://passky.org/PrivacyPolicy.pdf)
- [Passky – Cookie Policy (PDF)](https://passky.org/CookiePolicy.pdf)
- [Passky – Data Processing Addendum / DPA (PDF)](https://passky.org/DataProcessingAddendum.pdf)
- [Passky – Contact](https://passky.org/contact)
- [Rabbit-Company/Passky-Server (GitHub)](https://github.com/Rabbit-Company/Passky-Server)
- [Passky – Website](https://passky.org/)
- [Passky – Download](https://passky.org/download)
- [Passky – Pricing](https://passky.org/pricing)
- [Passky – Servers](https://passky.org/servers)
- [Passky – Server Configurator](https://passky.org/configurator)
- [Passky – Privacy Policy (PDF)](https://passky.org/PrivacyPolicy.pdf)
- [Passky – Cookie Policy (PDF)](https://passky.org/CookiePolicy.pdf)
- [Passky – Data Processing Addendum / DPA (PDF)](https://passky.org/DataProcessingAddendum.pdf)
- [Passky – Contact](https://passky.org/contact)
- [Rabbit-Company/Passky-Server (GitHub)](https://github.com/Rabbit-Company/Passky-Server)
