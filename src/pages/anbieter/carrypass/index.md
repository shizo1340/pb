---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / CarryPass"
url: "/anbieter/carrypass/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-07"
robots: "index,follow"
description: "Kurzprofil von CarryPass (Kategorie: Passwort-Manager)."
provider: ""
name: "CarryPass"
category: "Passwort-Manager"
website: "https://carrypass.net/"
repo: "https://github.com/racz-zoltan/racz-zoltan.github.io"
license: "MIT (zusätzlich: LICENSE-commercial.md im Repo)"
policies: ""
privacy: "https://carrypass.net/carrypass-privacy-policy.html"
terms: "Nicht angegeben (nur Disclaimer vorhanden)"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Nicht angegeben"
region: "unknown"
logs: "minimal"
logs_notes: "minimal (Hosting-Logs bei GitHub Pages möglich)"
retention: "unknown"
retention_notes: "Keine serverseitige Speicherung der App-Daten; E-Mail-Anfragen: bis zu 90 Tage (Privacy-Anfragen); Hosting-Log-Retention: Unklar"
retention_max_days: "90"
data_notes: "App läuft client-side im Browser/PWA; optional verschlüsselte lokale Speicherung von Einstellungen; Team-/Vault-Funktionen mit verschlüsselten JSON-Vaults & optionaler TOTP"
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

CarryPass ist ein Anbieter aus der Kategorie **Passwort-Manager**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Passwörter **offline** und ohne Konto/Cloud-Sync erzeugen/verwalten willst (deterministisch, client-side).
- **Weniger geeignet wenn:** du komfortables **Autofill + Sync + Recovery** über mehrere Geräte erwartest (CarryPass ist bewusst „no backend“).
- **Wichtigster Abwägung:** **Kein Recovery** (Master-Passphrase vergessen = Zugriff weg) vs. **weniger Server-/Sync-Abhängigkeiten**.

## Sofortmaßnahmen
- **Nutze eine starke Master-Passphrase** (z.B. ≥16 Zeichen oder Diceware ≥8 Wörter): erhöht die Widerstandsfähigkeit gegen Offline-Angriffe.
- **Installiere CarryPass als PWA und nutze es offline**, sobald es einmal geladen ist: reduziert Netzwerk-Abhängigkeit im Alltag.
- **Aktiviere Screen-Lock + kurze Session-Locks** (Menü → „Set Screen Lock PIN“): reduziert Risiko bei kurz unbeaufsichtigten Geräten.

## Entscheidungshilfe
- Wenn du **keine Accounts/Sync-Server** möchtest, dann nutze CarryPass als offline-first PWA (Abwägung: weniger Komfortfunktionen wie Sync/Recovery).
- Wenn du **mehrere Geräte** nutzt, dann plane **Export/Import** (Vault/Service Settings) oder nutze CarryPass bewusst nur für ausgewählte Konten (Abwägung: zusätzlicher Prozess statt automatischem Sync).
- Wenn du CarryPass auf **geteilten/unsicheren Geräten** einsetzen willst, dann ist das riskant (Abwägung: lokale Umgebung kompromittiert → App-Schutz hilft nur begrenzt).
- Wenn du **Team-Zugang** brauchst, dann nutze die Vault-/Team-Funktionen mit **optionalem TOTP** (Abwägung: zusätzlicher Einrichtung-Aufwand für Admin/Onboarding).
- Wenn du **keine lokalen Spuren** willst, dann vermeide „Save locally“ und lösche lokale Daten/Vault nach Nutzung (Abwägung: weniger Komfort, mehr manuelle Schritte).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | CarryPass |
| Kategorie | Passwort-Manager |
| Website | https://carrypass.net/ |
| Quellcode | https://github.com/racz-zoltan/racz-zoltan.github.io |
| Lizenz | MIT (zusätzlich: LICENSE-commercial.md im Repo) |
| Preismodell | mixed (Open-Source nutzbar; White-Label/Custom Build auf Anfrage) |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Nicht angegeben |
| Logs | minimal (Hosting-Logs bei GitHub Pages möglich) |
| Retention | Keine serverseitige Speicherung der App-Daten; E-Mail-Anfragen: bis zu 90 Tage (Privacy-Anfragen); Hosting-Log-Retention: Unklar |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://carrypass.net/carrypass-privacy-policy.html
- AGB/Terms: Nicht angegeben (nur Disclaimer vorhanden)
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
App läuft client-side im Browser/PWA; optional verschlüsselte lokale Speicherung von Einstellungen; Team-/Vault-Funktionen mit verschlüsselten JSON-Vaults & optionaler TOTP.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Privacy Policy keine Erhebung/Übertragung von App-Inhalten; Verarbeitung erfolgt client-side im Browser.
- **Wofür:** App-Funktion (Passwort-Generierung, Vault-Handling) lokal; E-Mail-Kontakt nur zur Beantwortung von Anfragen.
- **Weitergabe/Subprozessoren:** Hosting über GitHub Pages (kann technische Basisdaten wie IP/Browser loggen); E-Mail-Kommunikation über Proton Mail.
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben.
- **Kontakt/DSAR/DPA:** Kontakt per E-Mail (info.carrypass@proton.me); Proton-DPA wird in der Privacy Policy erwähnt.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Privacy Policy: keine Usage-Daten/keine Statistiktools; keine Cookies.
- **Abschaltbar?** Nicht nötig (laut Anbieter keine Analytics im Service).
- **Wo (Menüpfad):** Nicht zutreffend (kein Telemetry-Schalter dokumentiert).

**Logs & Retention:**
- **Logging-Level:** minimal (Hosting-Logs bei GitHub Pages möglich)
- **Aufbewahrung:** App-Daten lokal; E-Mail-Anfragen (Privacy): bis zu 90 Tage; Hosting-Log-Retention: Unklar
- **Lösch-/Opt-out-Optionen:** Lokal: „Clear Vault“/lokale Daten löschen; Service-seitig: keine App-Daten gespeichert.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** App ist vollständig client-side (PWA). Passwort-Generierung deterministisch; Vaults werden verschlüsselt verteilt (JSON).
- **KDF/Parameter/Schlüsselableitung:** Argon2id + PBKDF2 (laut User Manual/Whitepaper); Passwort-Output via AES-CTR; Vaults via AES-GCM.
- **MFA/2FA/Passkeys/Hardware-Keys:** Kein Konto → keine klassische Konto-2FA; für Team-/Vault-Zugriff wird optional TOTP genutzt.
- **Recovery/Account-Wiederherstellung:** Keine Recovery für die Master-Passphrase (vergessen = keine Wiederherstellung).
- **Vuln-Handling / Security-Kontakt:** Security Policy nennt Responsible Disclosure per E-Mail (info.carrypass@proton.me) und Ziel-Reaktionszeit (5 Business Days).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Starke Master-Passphrase + Icon-Sequence setzen** (beim Start).  
   **Prüfen:** du kannst „GET PASSWORD“ reproduzierbar nutzen – und hast die Master-Passphrase sicher gespeichert (kein Recovery).
2) **PWA installieren & offline nutzen** (Browser → „Installieren“ / „Add to Home Screen“).  
   **Prüfen:** App startet auch ohne Internetverbindung nach erstem Laden.
3) **Screen-Lock aktivieren + Session-Lock prüfen** (In-App „Menu“ → „Set Screen Lock PIN“, „Lock Screen“).  
   **Prüfen:** Sperrbildschirm erscheint; „Session locks in …“ ist sichtbar und greift.

**Stolpersteine:**
- Laut Disclaimer ist CarryPass ein Demo/Proof-of-Concept; Nutzung erfordert eigenes Threat-Modeling (Abwägung: experimentelle Weiterentwicklung vs. planbare „Production“-Stabilität).
- Auf kompromittierten/geteilten Geräten kann lokale Sicherheit kippen (Abwägung: Offline/Client-side schützt nicht vor Malware/Keyloggern).

<details>
<summary>Profil B (Datensparsam)</summary>

- Vermeide lokale Komfortfunktionen: „Save locally“ nur nutzen, wenn du dem Gerät vertraust (Abwägung: mehr Tipparbeit statt gespeicherter Settings).
- Nutze getrennte Browser-Profile/OS-User nur für CarryPass (Abwägung: mehr Einrichtung/Wechsel).
- Nutze „Clear Clipboard“/„Clear Vault“ nach sensiblen Aktionen (Abwägung: weniger Komfort, weniger Restdaten).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Betreibe CarryPass auf einem dedizierten Offline-Gerät (nach einmaligem Laden/Installation) und halte den Browser/OS-Stack minimal (Abwägung: deutlicher Komfortverlust).
- Nutze Team-/Vault-Funktionen nur mit TOTP und kurzen Ablaufzeiten/Expiry, falls dein Workflow das erlaubt (Abwägung: Admin-Aufwand, häufiger Austausch).
- Deaktiviere/limitiere Exporte („Export Log“, „Export Vault“) oder lagere sie strikt offline aus (Abwägung: weniger Nachvollziehbarkeit/Portabilität).

</details>

## Features
- Deterministische Passwort-Generierung (gleiche Inputs → gleiche Outputs; ohne Passwortspeicherung)
- Offline-first PWA (installierbar, nach erstem Laden offline)
- Optional verschlüsselte lokale Speicherung von Einstellungen (nicht Passwörtern)
- Verschlüsselte Vaults (AES-GCM) als statische Dateien (z.B. JSON) für Team-/Member-Strukturen
- QR-Onboarding und optionaler TOTP-gesicherter Zugriff für Team-Vaults
- In-App Funktionen: „Clear Clipboard“, „Clear Vault“, Export/Import von Vaults und Service-Einstellungen

## Alternativen
- Klassische Passwort-Manager mit lokaler Datenbank-Datei (Abwägung: Datei-Sync/Backup und Geräte-Disziplin selbst organisieren)
- Cloud-/Account-basierte Passwort-Manager (Abwägung: Komfort durch Sync/Autofill vs. serverseitige Metadaten/Angriffsfläche)
- Team-/Secrets-Management mit eigener Serverkomponente (Abwägung: zentrale Steuerung vs. Infrastruktur-/Admin-Aufwand)

## Nicht gelöst / offene Punkte
- Keine formale AGB/Terms-Seite gefunden (nur Disclaimer/Haftungshinweise).
- Keine unabhängigen Audits/Attestations vom Anbieter verlinkt.
- Kommerzielle Nutzung/White-Label: zusätzliches Dokument „LICENSE-commercial.md“ existiert, Details müssen im konkreten Einsatz geprüft werden.
- Lizenztext in LICENSE-commercial.md prüfen, wenn CarryPass in einem kommerziellen Kontext eingesetzt/umgebrandet werden soll (Repo → LICENSE-commercial.md, Stand: 2026-01-05).

## Quellen

- Klassische Passwort-Manager mit lokaler Datenbank-Datei (Trade-off: "Sync/Backups selbst organisieren)
- Cloud-/Account-basierte Passwort-Manager (Trade-off: "Komfort/Sync vs. serverseitige Metadaten/Angriffsfläche)
- Team-Secrets-Management mit eigener Serverkomponente (Trade-off: "Admin/Infra-Aufwand vs. zentrale Verwaltung)
- https://github.com/racz-zoltan/racz-zoltan.github.io/security
- [CarryPass Website](https://carrypass.net/)
- [CarryPass Privacy Policy](https://carrypass.net/carrypass-privacy-policy.html)
- [CarryPass User Manual](https://carrypass.net/carrypass-user-manual.html)
- [CarryPass Security Whitepaper](https://carrypass.net/carrypass-whitepaper.html)
- [CarryPass Disclaimer](https://carrypass.net/carrypass-disclaimer.html)
- [CarryPass Quellcode (GitHub)](https://github.com/racz-zoltan/racz-zoltan.github.io)
- [CarryPass Security Policy (GitHub)](https://github.com/racz-zoltan/racz-zoltan.github.io/security)
