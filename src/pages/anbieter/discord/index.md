---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Discord"
url: "/anbieter/discord/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-10"
robots: "index,follow"
description: "Kurzprofil von Discord (Kategorie: Messenger)."
provider: ""
name: "Discord"
category: "Messenger"
website: "https://discord.com"
repo: "https://github.com/discord/libdave"
license: "Proprietary (Service/App); OSS-Komponente libdave: MIT"
policies: ""
privacy: "https://discord.com/privacy"
terms: "https://discord.com/terms"
transparency: "https://discord.com/transparency"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "partial"
self_host_possible: "no"
account_required: "yes"
phone_required: "unknown"
kyc_required: "unknown"
jurisdiction: "USA (Discord Inc.); EWR/UK: Discord Netherlands B.V. (laut Privacy Policy)"
region: "uk"
logs: "unknown"
retention: "mid"
retention_notes: "zweckgebunden; Account-Löschung typ. 15–30 Tage bis Abschluss"
retention_max_days: "30"
data_notes: "Inhalte (Nachrichten/Uploads) werden serverseitig verarbeitet/gespeichert; Audio/Video ist als E2EE verfügbar (ab 01.03.2026 für Calls/Streams verpflichtend laut Help Center); optionale Nutzungsdaten für Personalisierung/Verbesserung sind per Settings steuerbar."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Discord ist ein Anbieter aus der Kategorie **Messenger**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Communities/Server, Voice/Video und Gruppenfunktionen in einem Dienst brauchst und bereit bist, dass Inhalte serverseitig verarbeitet werden.
- **Weniger geeignet wenn:** du für **Textnachrichten** Ende-zu-Ende-Verschlüsselung als harte Anforderung hast (Discord nennt E2EE explizit für Audio/Video; Messages folgen Moderations-/Safety-Ansatz).
- **Wichtigster Abwägung:** Reichweite/Community-Funktionen vs. serverseitige Verarbeitung von Inhalten und Metadaten (plus optionale Nutzungsdaten für Personalisierung/Verbesserung).

## Sofortmaßnahmen
- **MFA aktivieren (Passkey/Security Key oder Authenticator-App):** reduziert Kontoübernahmen deutlich.
- **„Use data to personalize“ und „Use Data to Improve“ prüfen/deaktivieren:** begrenzt optionale Nutzungsdatennutzung für Personalisierung/Produktverbesserung.
- **Bei Calls/Streams E2EE-Status verifizieren (Lock + Privacy Code):** erhöht die Sicherheit gegen MitM/Impersonation bei Audio/Video.

## Entscheidungshilfe
- Wenn du **Audio/Video vertraulich** brauchst, dann nutze Discord-Calls nur mit **E2EE A/V** und verifiziere den **Privacy Code** (Abwägung: ab **01.03.2026** sind dafür **aktuelle Clients** nötig; **Stage Channels** sind laut Discord nicht E2EE).
- Wenn du **weniger personalisierte Oberfläche/Signale** willst, dann deaktiviere in **User Settings → Data & Privacy** die Schalter für **Verbesserung** und **Personalisierung** (Abwägung: weniger Komfortfunktionen/Automatiken, z.B. Empfehlungen).
- Wenn du **ohne Telefonnummer** bleiben willst, dann vermeide Phone-Verifizierung, solange nicht erforderlich (Abwägung: Discord kann Phone-Verifizierung in bestimmten Situationen verlangen; manche Server/Flows können dadurch blocken).
- Wenn du **Konto-Sicherheit** priorisierst, dann nutze **Passkeys/Security Keys** + Backup-Codes sicher ablegen (Abwägung: ohne Backup-Codes kann Recovery eingeschränkt sein).
- Wenn du **Text-E2EE** als Muss hast, dann ist Discord dafür weniger passend (Abwägung: Wechsel bedeutet oft weniger Community-/Server-Ökosystem).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Discord |
| Kategorie | Messenger |
| Website | https://discord.com |
| Quellcode | https://github.com/discord/libdave |
| Lizenz | Proprietary (Service/App); OSS-Komponente libdave: MIT |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Stripe, PayPal (laut Privacy Policy) |
| Jurisdiktion | USA (Discord Inc.); EWR/UK: Discord Netherlands B.V. (laut Privacy Policy) |
| Logs | unknown |
| Retention | zweckgebunden; Account-Löschung typ. 15–30 Tage bis Abschluss |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://discord.com/privacy
- AGB/Terms: https://discord.com/terms
- Transparency Report: https://discord.com/transparency
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Trail of Bits: Design- & Implementation-Review für DAVE (E2EE Audio/Video), verlinkt im Discord-Blog

**Daten-Notizen (kurz):**
Inhalte (Nachrichten/Uploads) werden serverseitig verarbeitet/gespeichert; Audio/Video ist als E2EE verfügbar (ab 01.03.2026 für Calls/Streams verpflichtend laut Help Center); optionale Nutzungsdaten für Personalisierung/Verbesserung sind per Settings steuerbar.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Konto-/Profil- und Nutzungsdaten (u.a. Nutzungs-/Geräteinformationen), Inhalte wie Nachrichten/Uploads; bei Paid Services Zahlungs- und Rechnungsdaten (Privacy Policy).
- **Wofür:** Bereitstellung der Dienste, Safety/Moderation, Personalisierung und Produktverbesserung (je nach Einstellungen; Help Center).
- **Weitergabe/Subprozessoren:** Weitergabe an Dienstleister/Partner je Zweck; Beispiele: Payment Processor **Stripe/PayPal**; Cloud-Provider wie **Google** (Privacy Policy).
- **Drittlandtransfer:** In der Privacy Policy beschrieben; Details sind kontext-/rechtsraumabhängig (Controller u.a. Discord Inc. vs. Discord Netherlands B.V.).
- **Zahlungsabwicklung/Payment Processor:** **Stripe, PayPal** (Privacy Policy); ergänzende Bedingungen: Paid Services Terms.
- **Kontakt/DSAR/DPA:** Datenschutz-Kontakt wird in Privacy/Help Center beschrieben (z.B. privacy@discord.com in Data-Privacy-Artikeln).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nicht angegeben.
- **Abschaltbar?** Ja, laut Help Center über Schalter in **Data & Privacy** (für „Improve Discord“ und „Personalize Discord“).
- **Wo (Menüpfad):** Desktop: **User Settings → Data & Privacy** · Mobile: **Settings → Data & Privacy**.

**Logs & Retention:**
- **Logging-Level:** unknown
- **Aufbewahrung:** zweckgebunden; Account-Löschung typ. 15–30 Tage bis Abschluss (Data Retention Policy).
- **Lösch-/Opt-out-Optionen:** Data-&-Privacy-Schalter (Improve/Personalize), Data-Export/Anfragen über Help Center, Account-Deaktivierung/Löschung je Flow.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support und personalisierte Funktionen reduzieren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Discord nennt Transportverschlüsselung (z.B. TLS) und Verschlüsselung „in transit“/„at rest“; **E2EE für Audio/Video** ist dokumentiert (Help Center) und wird ab **01.03.2026** für Calls/Streams vorausgesetzt.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** MFA verfügbar (Passkeys/Security Keys, Authenticator-App, SMS) inkl. Backup-Codes (Help Center).
- **Recovery/Account-Wiederherstellung:** Backup-Codes sind relevant; laut Help Center kann Support MFA nicht einfach entfernen, wenn Codes fehlen.
- **Vuln-Handling / Security-Kontakt:** Bug-Bounty/Disclosure über **discord.com/security**; Kontakte u.a. **security@discord.com** und **bugbounty@discordapp.com** (security.txt).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **MFA aktivieren** (Passkey/Security Key oder Authenticator-App; SMS nur als Fallback).  
   **Prüfen:** Login fordert 2. Faktor; Backup-Codes gespeichert.
2) **Data-&-Privacy-Schalter prüfen** (Improve/Personalize).  
   **Pfad:** Desktop **User Settings → Data & Privacy**, Mobile **Settings → Data & Privacy**.  
   **Prüfen:** Toggles sind aus/an wie gewünscht.
3) **E2EE A/V bei Calls verifizieren** (Lock-Icon + Privacy Code vergleichen).  
   **Prüfen:** In Call-Details erscheint der **grüne Lock**; Code kann out-of-band verglichen werden.

**Stolpersteine:**
- **Persistent Verification Keys** sind **gerätegebunden** und können nach Logout/Neu-Login verloren gehen (Abwägung: weniger Aufwand beim Verifizieren vs. Gerätewechsel/Reset).

<details>
<summary>Profil B (Datensparsam)</summary>

- Deaktiviere **Personalisierung** und **Verbesserungsdaten** in **Data & Privacy** vollständig.  
- Vermeide **Phone-Verifizierung**, solange nicht nötig (kann situativ verlangt werden).  
- Nutze **Your Discord Data Package** (Help Center), um einen Überblick über gespeicherte Daten zu bekommen.  
**Abwägung:** weniger Komfort (Empfehlungen/Automatiken) und ggf. Einschränkungen bei bestimmten Safety-/Anti-Abuse-Flows.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze für Discord ein **separates OS-/Browser-Profil** (oder eine VM) und trenne Identitäten/Accounts konsequent.  
- Verwende für A/V nur **E2EE Calls** und verifiziere Teilnehmer per Code; meide **Stage Channels** für vertrauliche Inhalte (nicht E2EE).  
- Reduziere Angriffsfläche: keine Drittanbieter-Integrationen/Verbindungen, nur notwendige Berechtigungen.  
**Abwägung:** deutlich mehr Aufwand, mehr Friktion in Communities und potenziell weniger Funktionen.

</details>

## Features
- Direktnachrichten, Gruppen, Server/Channels, Voice/Video/Go Live
- Ende-zu-Ende-verschlüsselte Audio/Video-Kommunikation inkl. Verifikationscodes (E2EE A/V)
- Datenschutz-Schalter für Personalisierung/Verbesserung (Data & Privacy)
- MFA mit Passkeys/Security Keys, Authenticator-App, SMS + Backup-Codes
- Bug-Bounty/Security-Disclosure über discord.com/security

## Alternativen
- Signal (E2EE by default; Abwägung: Telefonnummer als Kontoanker)
- Matrix/Element (föderiert & teils self-hostbar; Abwägung: Einrichtung/Moderation/Metadaten je Homeserver)
- Threema (ohne Telefonnummer möglich; Abwägung: weniger Netzwerk-Effekt je Umfeld)
- Wire (Team-/Business-Fokus möglich; Abwägung: Account-/Betriebsmodell abhängig vom Angebot)

## Nicht gelöst / offene Punkte
- Unklar, ob Discord eine **vollständige öffentliche Subprozessoren-Liste** bereitstellt (über Beispiele wie Stripe/PayPal hinaus).

## Quellen

- Trail of Bits: "Design- & Implementation-Review für DAVE (E2EE Audio/Video), verlinkt im Discord-Blog
- Signal (E2EE by default; Trade-off: "Telefonnummer als Kontoanker)
- Matrix/Element (föderiert & teils self-hostbar; Trade-off: "Setup/Moderation/Metadaten je Homeserver)
- Threema (ohne Telefonnummer möglich; Trade-off: "weniger Netzwerk-Effekt je Umfeld)
- Wire (Team-/Business-Fokus möglich; Trade-off: "Account-/Betriebsmodell abhängig vom Angebot)
- https://github.com/discord/libdave
- [Discord Privacy Policy](https://discord.com/privacy)
- [Discord Terms of Service](https://discord.com/terms)
- [Discord Transparency Hub](https://discord.com/transparency)
- [Paid Services Terms](https://discord.com/terms/paid-services-terms)
- [Meet DAVE: Discord’s New End-to-End Encryption for Audio & Video (Blog)](https://discord.com/meet-dave-e2ee-for-audio-video)
- [End-to-End Encryption for Audio and Video (Help Center)](https://support.discord.com/hc/en-us/articles/25968222946071-End-to-End-Encryption-for-Audio-and-Video)
- [Data Used to Improve Discord (Help Center)](https://support.discord.com/hc/en-us/articles/21864805694999-Data-Used-to-Improve-Discord)
- [Data Used to Personalize Discord (Help Center)](https://support.discord.com/hc/en-us/articles/21865322754327-Data-Used-to-Personalize-Discord)
- [Data Privacy Controls (Help Center)](https://support.discord.com/hc/en-us/articles/360004109911-Data-Privacy-Controls)
- [How long Discord keeps your information (Help Center)](https://support.discord.com/hc/en-us/articles/5431812448791-How-long-Discord-keeps-your-information)
- [Setting up Multi-Factor Authentication (Help Center)](https://support.discord.com/hc/en-us/articles/219576828-Setting-up-Multi-Factor-Authentication)
- [How to Verify Your Discord Account (Help Center)](https://support.discord.com/hc/en-us/articles/6181726888215-How-to-Verify-Your-Discord-Account)
- [Security Bug Bounty (Discord)](https://discord.com/security)
- [security.txt (Discord)](https://discord.com/.well-known/security.txt)
- [discord/libdave (GitHub)](https://github.com/discord/libdave)
