---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / KeePassXC"
url: "/anbieter/keepassxc/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-17"
robots: "index,follow"
description: "Kurzprofil von KeePassXC (Kategorie: Passwort-Manager)."
provider: ""
name: "KeePassXC"
category: "Passwort-Manager"
website: "https://keepassxc.org/"
repo: "https://github.com/keepassxreboot/keepassxc"
license: "GPL-2.0-or-later"
policies: ""
privacy: "https://keepassxc.org/privacy/"
terms: "Nicht angegeben"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Deutschland (Legal Info / Impressum: Weimar)"
region: "eu"
logs: "none"
retention: "configurable"
retention_notes: "konfigurierbar (lokale Datei; keine Server-Aufbewahrung)"
data_notes: "KeePassXC läuft lokal und speichert Passwörter in einer verschlüsselten .kdbx-Datei. Laut Anbieter werden gespeicherte Daten nicht an KeePassXC übertragen; Netzwerkkontakt erfolgt nur auf ausdrückliche Nutzeraktion (z.B. Favicon-Download). Die Website nutzt Matomo-Statistiken (Opt-out möglich)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

KeePassXC ist ein Anbieter aus der Kategorie **Passwort-Manager**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen Passwort-Manager ohne Konto/Cloud-Zwang willst und deine Daten als **lokale, verschlüsselte Datei** verwaltest.
- **Weniger geeignet wenn:** du „Out-of-the-box“ Multi-Device-Sync, Recovery-Workflows oder Team-Sharing als integrierten Dienst erwartest (das läuft dann über externe Sync-Lösungen).
- **Wichtigster Abwägung:** **Lokale Kontrolle & wenig Serverdaten** vs. **mehr Eigenverantwortung** bei Backup/Sync/Recovery (Datei-Verlust/Fehlkonfiguration wirkt direkt).

## Sofortmaßnahmen
- **KDF/Decryption-Time erhöhen:** erhöht den Aufwand für Offline-Brute-Force auf die Datenbank (Abwägung: Datenbank öffnet langsamer).  
- **Favicon-Download nicht nutzen:** reduziert unnötige Netzwerkkontakte (Abwägung: Einträge wirken „nackter“ ohne Website-Icons).  
- **Signaturen/Hashes prüfen (optional):** senkt Supply-Chain-Risiko bei Downloads außerhalb der offiziellen Website (Abwägung: zusätzlicher Schritt).  

## Entscheidungshilfe
- Wenn du **ohne Konto und ohne Server-Abhängigkeit** arbeiten willst, dann nutze KeePassXC als lokale `.kdbx`-Datenbank (Abwägung: Sync/Sharing musst du selbst organisieren).  
- Wenn du **Cloud-Sync** brauchst, dann speichere die Datenbank in einem Sync-Ordner (Abwägung: der Sync-Anbieter sieht Metadaten wie Dateiname/Änderungszeitpunkte).  
- Wenn du **Netzwerk-Minimierung** willst, dann verzichte auf Favicon-Downloads oder kompiliere ohne Networking-Code (Abwägung: weniger Komfort/Features).  
- Wenn du **Browser-Autofill** willst, dann nutze die Browser-Integration (Abwägung: zusätzliche Angriffsfläche durch Extension + optionaler Update-Check).  
- Wenn du **High-Risk/Shared Screen** hast, dann lasse Screen-Capture blockiert und arbeite mit getrennten Umgebungen (Abwägung: weniger Flexibilität beim Teilen/Support).  

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | KeePassXC |
| Kategorie | Passwort-Manager |
| Website | https://keepassxc.org/ |
| Quellcode | https://github.com/keepassxreboot/keepassxc |
| Lizenz | GPL-2.0-or-later |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend (Software kostenlos; Spenden optional) |
| Jurisdiktion | Deutschland (Legal Info / Impressum: Weimar) |
| Logs | none |
| Retention | konfigurierbar (lokale Datei; keine Server-Aufbewahrung) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://keepassxc.org/privacy/
- AGB/Terms: Nicht angegeben
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- [KeePassXC Security Audits and Certifications](https://keepassxc.org/audits/) (inkl. ANSSI CSPN 2025/16, Review 2023)

**Daten-Notizen (kurz):**
KeePassXC läuft lokal und speichert Passwörter in einer verschlüsselten `.kdbx`-Datei. Laut Anbieter werden gespeicherte Daten nicht an KeePassXC übertragen; Netzwerkkontakt erfolgt nur auf ausdrückliche Nutzeraktion (z.B. Favicon-Download). Die Website nutzt Matomo-Statistiken (Opt-out möglich).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - **App/Extension:** laut Anbieter werden keine gespeicherten persönlichen Daten an KeePassXC oder Dritte gesendet; KeePassXC kontaktiert Server nur auf explizite Nutzeraktion (z.B. Favicon-Download).  
  - **Website:** anonymisierte IP, User-Agent/Plugins, Referrer, Screen-Size, grobe Geolokation aus anonymisierter IP.  
- **Wofür:** Website-Daten für Statistik (Matomo); App-Netzwerk nur für explizite Funktionen wie Favicons.  
- **Weitergabe/Subprozessoren:** Website-Hosting bei Uberspace; Statistik via self-hosted Matomo; optionaler Update-Check der Browser-Komponente kontaktiert GitHub.  
- **Drittlandtransfer:** Nicht angegeben (bei GitHub-Kontakt möglich, abhängig von deren Infrastruktur).  
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend für Nutzung; Spendenoptionen existieren (PayPal/Patreon/GitHub Sponsors etc.).  
- **Kontakt/DSAR/DPA:** Kontakt/Legal-Adresse ist angegeben; DPA/DSAR-Prozess nicht als Produkt-Dienst dokumentiert.  

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?**  
  - **App:** laut Anbieter kein Versand gespeicherter Daten; Netzwerkkontakt nur auf Nutzeraktion (z.B. Favicon).  
  - **Website:** Matomo-Statistiken aktiv (Opt-out via Link oder Do-Not-Track möglich).  
- **Abschaltbar?** Website: Opt-out-Link + Do-Not-Track; App: Favicon-Feature ist opt-in (nur bei Nutzung).  
- **Wo (Menüpfad):**  
  - Website Opt-out: Link in der Privacy Policy.  
  - Screen-Capture: **View → Allow Screen Capture** (temporär) bzw. Start-Flag `--allow-screencapture`.  

**Logs & Retention:**
- **Logging-Level:** none (keine Server-Logs für App-Daten; Website-Visitor-Logs als Statistik)
- **Aufbewahrung:** Website: Visitor-Logs 90 Tage, Detailreports 12 Monate; App: lokal/konfigurierbar (Datei/Backups).  
- **Lösch-/Opt-out-Optionen:** Website Opt-out per Link oder Do-Not-Track; App: keine zentrale Speicherung beim Anbieter.  

**Abwägung am Punkt:** Weniger Telemetrie/Netzwerk erleichtert Metadaten-Minimierung; opt-in Features (Favicons/Extension) erhöhen Komfort, erzeugen aber zusätzliche Verbindungen.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Datenbankdatei ist lokal verschlüsselt; laut FAQ mit AES256 oder Twofish und zusätzlicher „key transformations“-Härtung.  
- **KDF/Parameter/Schlüsselableitung:** key transformations sind konfigurierbar; in neueren Versionen werden Argon2-Parameter (z.B. Parallelism) begrenzt und Lock-after-inactivity ist standardmäßig aktiv (900s).  
- **MFA/2FA/Passkeys/Hardware-Keys:** kein Konto-Login; zusätzliche Schutzoptionen über Key-File oder Challenge-Response (YubiKey/OnlyKey). Passkeys/TOTP werden als Features genannt (lokal pro Eintrag).  
- **Recovery/Account-Wiederherstellung:** kein Account-Recovery; Verlust von Master-Passwort/Key-File kann permanenten Datenverlust bedeuten.  
- **Vuln-Handling / Security-Kontakt:** SECURITY.md via GitHub Security: „Report a vulnerability“, Matrix DM oder E-Mail an team@keepassxc.org.  

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Datenbank-Härtung (KDF/Decryption Time) einstellen**  
   **Pfad:** beim Erstellen über den „Decryption Time“-Slider; später über Datenbank-Sicherheits-/Encryption-Settings.  
   **Prüfen:** Öffnen dauert merklich länger, bleibt aber im Alltag nutzbar.
2) **Auto-Lock/Inaktivitäts-Lock aktiv lassen und testen**  
   **Prüfen:** Datenbank sperrt nach Inaktivität (laut Release Notes standardmäßig 900s aktiv) und verlangt erneutes Entsperren.
3) **Screen-Capture-Schutz beibehalten**  
   **Pfad:** Standard ist blockiert (Windows/macOS); temporär nur bei Bedarf: **View → Allow Screen Capture**.  
   **Prüfen:** Screenshot/Recording des Fensters ist im Normalbetrieb verhindert.

**Stolpersteine:**
- Master-Passwort/Key-File-Verlust ist kein „Account-Problem“, sondern meist **dauerhafter Datenverlust** (Abwägung: kein Recovery-Dienst vs. volle Kontrolle).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Favicon-Downloads vermeiden:** keine Icon-Downloads pro Eintrag (reduziert externe Requests/Metadaten).  
- **Browser-Integration bewusst einsetzen:** nur wenn du Autofill brauchst; optionalen Update-Check der Browser-Komponente deaktivieren (Abwägung: weniger Komfort, ggf. manuelle Updates).  
- **Key-File getrennt lagern:** Datenbank und Key-File nicht im selben Sync-Ordner speichern (Abwägung: mehr Aufwand beim Gerätewechsel).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Sandbox/Isolation nutzen:** je nach Plattform auf sandboxed Distributions achten (z.B. Snap/Flatpak) oder getrennte Benutzer/VM (Abwägung: mehr Komplexität, teils Einschränkungen).  
- **Networking minimieren:** wenn möglich ohne Networking-Code bauen (`-DWITH_XC_NETWORKING=OFF`) und keine Browser-Integration verwenden (Abwägung: weniger Features).  
- **Quick Unlock deaktivieren:** biometrisches Entsperren nur nutzen, wenn du das Risiko (Geräte-/OS-Policy) akzeptierst (Abwägung: weniger Komfort).

</details>

## Features
- Lokale, verschlüsselte Passwort-Datenbank (KDBX 3.1 / KDBX 4)
- Verschlüsselung mit AES256 oder Twofish (laut Doku/FAQ)
- Konfigurierbare Key-Transformations (Brute-Force-Härtung) und optional Key-File
- Hardware-Key Unterstützung via Challenge-Response (z.B. YubiKey/OnlyKey)
- TOTP pro Eintrag (mit klarer Trennungsempfehlung als Abwägung)
- Browser-Integration (KeePassXC-Browser), optionaler Update-Check
- Screenshot-/Recording-Schutz (Windows/macOS) mit temporärem Override
- Release-Integritätsprüfung (SIG/DIGEST) und Signatur-Guide

## Alternativen
- [KeePass](/anbieter/keepass/) – ähnliches Dateiformat, andere Plattform-/Integrations-Abwägungen
- [Bitwarden](/anbieter/bitwarden/) – Sync/Account-basiert (Abwägung: Komfort/Sharing vs. Server-Metadaten)
- [1Password](/anbieter/1password/) – Account-/Abo-basiert (Abwägung: Recovery/Teams vs. Server-Abhängigkeit)
- [Proton Pass](/anbieter/proton-pass/) – Account-/Cloud-basiert (Abwägung: Ökosystem vs. Konto/Metadaten)
- pass (Unix CLI): sehr minimal (Abwägung: Einrichtung/UX vs. Angriffsfläche)

## Nicht gelöst / offene Punkte
- **Memory-Angriffe bleiben ein realistischer lokaler Angriffsvektor:** KeePassXC verschlüsselt Daten laut Anbieter derzeit nicht im RAM; Schutz hängt stark von OS/Isolation/Physischer Sicherheit ab.  
- **Sync-Metadaten liegen außerhalb von KeePassXC:** bei Nutzung eines externen Sync-Dienstes entstehen dort Dateimetadaten (z.B. Zeitpunkte/Dateigröße), auch wenn der Inhalt verschlüsselt bleibt.

## Quellen

- ANSSI Security Visa (ANSSI-CSPN-2025/16): "https://keepassxc.org/audits/
- Application Security Review (Zaur Molotnikov, 2023-01-19): "https://keepassxc.org/audits/
- KeePass (Desktop): "ähnliches Dateiformat, andere Plattform-/Integrations-Trade-offs
- Bitwarden: "Sync/Account-basiert (Trade-off: Komfort/Sharing vs. Server-Metadaten)
- 1Password: "Account-/Abo-basiert (Trade-off: Recovery/Teams vs. Server-Abhängigkeit)
- Proton Pass: "Account-/Cloud-basiert (Trade-off: Ökosystem vs. Konto/Metadaten)
- pass (Unix CLI): "sehr minimal (Trade-off: Setup/UX vs. Angriffsfläche)
- https://keepassxc.org/team/
- [Privacy Policy – KeePassXC](https://keepassxc.org/privacy/)
- [Documentation and FAQ – KeePassXC](https://keepassxc.org/docs/)
- [Getting Started Guide – KeePassXC](https://keepassxc.org/docs/KeePassXC_GettingStarted)
- [KeePassXC Security Audits and Certifications](https://keepassxc.org/audits/)
- [KeePassXC 2.7.11 released (Release Notes)](https://keepassxc.org/2025-11-23-2.7.11-released/)
- [KeePassXC Memory Security (Blog)](https://keepassxc.org/2019-02-21-memory-security/)
- [Verifying Signatures – KeePassXC](https://keepassxc.org/verifying-signatures/)
- [COPYING / Lizenzhinweis (Repo, raw)](https://raw.githubusercontent.com/keepassxreboot/keepassxc/develop/COPYING)
- [GitHub Security / SECURITY.md – KeePassXC](https://github.com/keepassxreboot/keepassxc/security)
- [The Team / Legal Info / Impressum – KeePassXC](https://keepassxc.org/team/)
