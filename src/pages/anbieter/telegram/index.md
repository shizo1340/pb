---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Telegram"
url: "/anbieter/telegram/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-12"
robots: "index,follow"
description: "Kurzprofil von Telegram (Kategorie: Messenger)."
provider: ""
name: "Telegram"
category: "Messenger"
website: "https://telegram.org/"
repo: "https://telegram.org/apps#source-code"
license: "GPL-2.0-or-later / GPL-3.0-only (Client-Apps; siehe Apps-Seite)"
policies: ""
privacy: "https://telegram.org/privacy/eu"
terms: "https://telegram.org/tos/eu"
transparency: "https://telegram.org/faq#q-do-you-process-data-requests"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "partial"
self_host_possible: "no"
account_required: "yes"
phone_required: "yes"
kyc_required: "no"
jurisdiction: "Entwicklerteam: Dubai (FAQ); Datencontroller: Telegram Messenger Inc. (außerhalb EWR laut Privacy Policy)"
region: "eu"
logs: "minimal"
retention: "long"
retention_notes: "Sicherheits-/Anti-Spam-Metadaten: bis zu 12 Monate (max.); Inaktive Konten: Self-Destruct standardmäßig nach 18 Monaten"
retention_max_days: "360"
data_notes: "Telegram ist ein Cloud-Messenger: Standard-Chats liegen in der Telegram-Cloud (Multi-Device Sync). End-to-End-Verschlüsselung gibt es bei „Secret Chats“ (1:1, gerätegebunden). Für Spam-/Missbrauchsschutz können Metadaten wie IP/Device bis zu 12 Monate gespeichert werden (max.)."
features: ""
alternatives: ""
payment_processors: "Apple App Store / Google Play (In-App); weitere Payment Provider nicht abschließend öffentlich gelistet"
sources: ""
---
## Kurzprofil

Telegram ist ein Anbieter aus der Kategorie **Messenger**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Cloud-Sync über mehrere Geräte nutzt (Handy/Desktop/Tablet) und damit leben kannst, dass Standard-Chats serverseitig in der Telegram-Cloud gespeichert werden.
- **Weniger geeignet wenn:** du Ende-zu-Ende-Verschlüsselung für alle Chats (inkl. Gruppen/Channels) erwartest oder keinen Telefonnummer-Login willst.
- **Wichtigster Abwägung:** Cloud-Komfort & Multi-Device-Sync vs. serverseitige Speicherung von Cloud-Chats + Metadaten (E2E nur via „Secret Chats“, mit Funktions-/Komforteinschränkungen).

## Sofortmaßnahmen
- **2-Step Verification aktivieren:** reduziert Risiko durch SIM-Swap/abgegriffene SMS-Login-Codes.
- **Kontakt-Sync aus + hochgeladene Kontakte löschen:** senkt Adressbuch-Daten bei Telegram (Abwägung: schlechtere Kontakt-Erkennung).
- **Für sensible 1:1-Inhalte Secret Chats nutzen:** E2E + optionaler Self-Destruct Timer (Abwägung: gerätegebunden, kein Cloud-Verlauf).

## Entscheidungshilfe
- Wenn du **Multi-Device-Sync** brauchst (z.B. Desktop + Handy), dann nutze **Cloud-Chats** (Abwägung: Chat-Inhalte liegen serverseitig in der Telegram-Cloud).
- Wenn du für einzelne 1:1-Gespräche **E2E** willst, dann starte **Secret Chats** (Abwägung: nicht für Gruppen/Channels, gerätegebunden).
- Wenn du **weniger Kontorisiko bei gestohlener SIM** willst, dann aktiviere **2-Step Verification** (Abwägung: Passwortverlust kann Recovery erschweren).
- Wenn du **Metadaten durch Adressbuch-Upload** reduzieren willst, dann deaktiviere **Kontakt-Synchronisierung** und lösche hochgeladene Kontakte (Abwägung: weniger Komfort bei der Kontaktfindung).
- Wenn du **Datenabfluss an Dritte** minimieren willst, dann meide **Bots/Mini Apps** in sensitiven Kontexten (Abwägung: weniger Automatisierung/Features).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Telegram |
| Kategorie | Messenger |
| Website | https://telegram.org/ |
| Quellcode | https://telegram.org/apps#source-code |
| Lizenz | GPL-2.0-or-later / GPL-3.0-only (Client-Apps; siehe Apps-Seite) |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | yes |
| KYC erforderlich | no |
| Zahlungsabwicklung | Apple App Store / Google Play (In-App); weitere Payment Provider nicht abschließend öffentlich gelistet |
| Jurisdiktion | Entwicklerteam: Dubai (FAQ); Datencontroller: Telegram Messenger Inc. (außerhalb EWR laut Privacy Policy) |
| Logs | minimal |
| Retention | Sicherheits-/Anti-Spam-Metadaten: bis zu 12 Monate (max.); Inaktive Konten: Self-Destruct standardmäßig nach 18 Monaten |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://telegram.org/privacy/eu
- AGB/Terms: https://telegram.org/tos/eu
- Transparency Report: https://telegram.org/faq#q-do-you-process-data-requests
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Telegram ist ein Cloud-Messenger: Standard-Chats liegen in der Telegram-Cloud (Multi-Device Sync). End-to-End-Verschlüsselung gibt es bei „Secret Chats“ (1:1, gerätegebunden). Für Spam-/Missbrauchsschutz können Metadaten wie IP/Device bis zu 12 Monate gespeichert werden (max.).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Telefonnummer (Login/Identifikation), ggf. Kontakte (bei Kontakt-Sync), Nutzername/Profilinfos; bei Cloud-Chats: Chatverlauf/Medien in der Telegram-Cloud; bei Anti-Spam/Security: u.a. IP-/Device-Infos (falls erforderlich).  
- **Wofür:** Betrieb als Cloud-Service (Sync, Zustellung), Missbrauchs-/Spam-Abwehr, optionale Funktionen wie Übersetzung/Voice-to-Text (wenn genutzt).
- **Weitergabe/Subprozessoren:** Inhalte und Metadaten können an **Drittentwickler** gehen, wenn du mit **Bots/Mini Apps** interagierst (Bots „sehen“ i.d.R. alles, was du ihnen sendest). Zahlungen in Bots laufen über **Payment Provider**. Für **Translation/Voice-to-Text** können **Google LLC** oder **Microsoft** eingesetzt werden (wenn diese Funktionen genutzt werden).
- **Drittlandtransfer:** Privacy Policy nennt Telegram Messenger Inc. außerhalb des EWR; für UK/EEA-Registrierungen werden Daten laut Policy in den Niederlanden gespeichert.
- **Zahlungsabwicklung/Payment Processor:** Premium & Bot-Zahlungen laufen über Drittanbieter (u.a. In-App via App Store/Google Play; Bots über Payment Provider/Apple Pay/Google Pay je nach Anbieter).
- **Kontakt/DSAR/DPA:** DSAR/Datenauskunft ist über die Telegram-Mechanismen in der FAQ beschrieben (z.B. @EURegulation für EU/GDPR-Kontext).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Telegram nennt u.a. **aggregierte Nutzungsdaten** für bestimmte Features (z.B. „Suggest Frequent Contacts“); außerdem fallen im Betrieb als Cloud-Service Metadaten an (z.B. für Zustellung/Abuse-Prevention).
- **Abschaltbar?** Teile sind per Einstellungen beeinflussbar (z.B. Vorschläge/Häufige Kontakte, Kontakt-Sync). Serverseitige Basis-Metadaten für Betrieb/Abuse-Prevention sind nicht vollständig vermeidbar.
- **Wo (Menüpfad):** *Settings → Privacy and Security* (z.B. **Active Sessions**, **2-Step Verification**, **Passcode Lock**, Kontakt-/Privacy-Optionen je nach Client).

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** laut Privacy Policy können bestimmte Sicherheits-/Anti-Spam-Metadaten **bis zu 12 Monate (max.)** gespeichert werden; inaktive Konten löschen sich standardmäßig nach **18 Monaten** (Self-Destruct, konfigurierbar in den Konto-Einstellungen).
- **Lösch-/Opt-out-Optionen:** Chats/Medien können in der App gelöscht werden; in 1:1-Chats ist „für beide Seiten löschen“ möglich. Für Supergroups nennt Telegram eine kurzfristige Speicherung gelöschter Inhalte (u.a. für Admin-/Moderationsfunktionen).

**Abwägung am Punkt:** Weniger Metadaten (z.B. kein Kontakt-Sync, weniger Bot-Nutzung) reduziert Datenabfluss, kann aber Komfort/Features spürbar einschränken.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Cloud-Chats sind serverseitig gespeichert (Cloud-Service); **Secret Chats** sind **Ende-zu-Ende-verschlüsselt** und gerätegebunden. **Sprach-/Videoanrufe** sind laut FAQ Ende-zu-Ende-verschlüsselt.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (öffentlich in technischen Docs/Protokollbeschreibung, aber nicht als kurze Policy-Angabe).
- **MFA/2FA/Passkeys/Hardware-Keys:** **2-Step Verification** (zusätzliches Passwort beim Login) wird von Telegram beschrieben; Recovery kann über E-Mail erfolgen (falls gesetzt).
- **Recovery/Account-Wiederherstellung:** Wenn du das 2-Step-Passwort vergisst und keine Recovery-E-Mail hast, kann der Zugang blockiert sein (Recovery-Abwägung ist dokumentiert).
- **Vuln-Handling / Security-Kontakt:** Telegram nennt security@telegram.org als Kontakt; Client-Apps sind Open Source und es gibt verifizierbare Builds für iOS/Android.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **2-Step Verification aktivieren**  
   **Menüpfad:** *Settings → Privacy and Security → Two-Step Verification*  
   **Prüfen:** Passwort gesetzt + Recovery-E-Mail (falls genutzt) dokumentiert.
2) **Aktive Sessions prüfen & alte Geräte abmelden**  
   **Menüpfad:** *Settings → Privacy and Security → Active Sessions* (oder *Settings → Devices*)  
   **Prüfen:** bekannte Geräte/IPs; unbekannte Sessions beendet.
3) **App mit Passcode Lock schützen + Auto-Lock setzen**  
   **Menüpfad:** *Settings → Privacy and Security → Passcode Lock*  
   **Prüfen:** Sperre aktiv, Auto-Lock greift im Test (App kurz verlassen → wieder öffnen).

**Stolpersteine:**
- Cloud-Chats bleiben auf Telegram-Servern verfügbar, solange sie nicht gelöscht werden (Abwägung: Sync/Komfort vs. Server-Speicherung).
- Bots/Mini Apps können Daten an Drittentwickler weitergeben (Abwägung: Automatisierung vs. Datenabfluss).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Kontakt-Sync deaktivieren** und **hochgeladene Kontakte löschen** (reduziert Adressbuch-Daten bei Telegram).  
- **Telefonnummer-Sichtbarkeit einschränken:** *Settings → Privacy and Security → Phone Number* (wenn du die Nummer nicht breit teilen willst).  
- **Keinen öffentlichen Username setzen**, wenn du nicht über globale Suche auffindbar sein möchtest (Abwägung: andere können dich schwerer finden/kontaktieren).

**Abwägung:** weniger Discoverability & Komfort (Kontaktfindung, globale Suche) gegen weniger Metadaten/Exposition.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Für sensitive 1:1-Kommunikation nur Secret Chats** + Self-Destruct Timer nutzen (E2E, gerätegebunden).  
- **Bots/Mini Apps vermeiden** (Daten gehen sonst an Drittentwickler; Payment-/Plattform-Dienste erhöhen Drittparteien-Kontakt).  
- **Geräte-/Account-Trennung**: separates Gerät/Profil für Telegram, wenn Kontexttrennung wichtig ist.

**Abwägung:** deutlicher Komfortverlust (kein Cloud-Verlauf in Secret Chats, eingeschränkte Funktionen), höhere Komplexität.

</details>

## Features
- Cloud-Chats mit Multi-Device Sync
- Secret Chats (Ende-zu-Ende, gerätegebunden) + Self-Destruct Timer
- Ende-zu-Ende-verschlüsselte Sprach- und Videoanrufe
- 2-Step Verification (zusätzlicher Passwortschutz beim Login)
- Passcode Lock (App-Sperre) + Auto-Lock
- Active Sessions / Geräteübersicht (IP- & Geräteinfos, Sessions beenden)
- Bots/Mini Apps (Datenfluss zu Drittentwicklern möglich)

## Alternativen
- Signal (Messenger; Abwägung: E2E standardmäßig, aber Telefonnummer bleibt zentral und Multi-Device-Funktionalität unterscheidet sich je nach Plattform)
- Matrix/Element (Messenger; Abwägung: Föderation/Self-Hosting möglich, dafür mehr Admin-/Betriebsaufwand)
- Threema (Messenger; Abwägung: weniger Telefonnummer-Bindung möglich, dafür anderes Netzwerk/Kompatibilität)

## Nicht gelöst / offene Punkte
- Konkrete, vollständige Liste der **Payment Provider** für alle Kaufwege (Premium/Stars/Web vs. In-App) ist nicht eindeutig als Gesamtübersicht dokumentiert.

## Quellen

- Signal (Messenger, Fokus: "E2E standardmäßig; Trade-off: Telefonnummer weiterhin zentral)
- Matrix/Element (Messenger, Fokus: "Föderation/Self-Hosting möglich; Trade-off: mehr Setup/Metadaten im Serverbetrieb)
- Threema (Messenger, Fokus: "weniger Telefonnummer-Bindung möglich; Trade-off: anderes Ökosystem/Interoperabilität)
- https://core.telegram.org/bots/payments
- [Telegram Privacy Policy (EU)](https://telegram.org/privacy/eu)
- [Telegram Terms of Service (EU)](https://telegram.org/tos/eu)
- [Telegram FAQ](https://telegram.org/faq)
- [Telegram Apps – Source Code](https://telegram.org/apps#source-code)
- [Active Sessions & Two-Step Verification (Blog)](https://telegram.org/sessions-and-2-step-verification)
- [Photo Editor and Passcode Lock (Blog, DE)](https://telegram.org/photo-editor-and-passcodes?setln=de)
- [Bot Payments (Docs)](https://core.telegram.org/bots/payments)
