---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Firefox Relay"
url: "/anbieter/firefox-relay/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-13"
robots: "index,follow"
description: "Kurzprofil von Firefox Relay (Kategorie: E-Mail-Aliasing)."
provider: ""
name: "Firefox Relay"
category: "E-Mail-Aliasing"
website: "https://relay.firefox.com/"
repo: "https://github.com/mozilla/fx-private-relay"
license: "MPL-2.0"
policies: ""
privacy: "https://www.mozilla.org/en-US/privacy/subscription-services/"
terms: "https://www.mozilla.org/en-US/about/legal/terms/subscription-services/"
transparency: "https://www.mozilla.org/en-US/about/governance/policies/transparency/"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "yes"
self_host_possible: "no"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA (Rechtswahl: Kalifornien, laut Terms)"
region: "us"
logs: "minimal"
retention: "specified"
retention_notes: "Server-Logs (IP): 90d; unzustellbare E-Mails: max. 3d; Twilio SMS-Records: 7d"
data_notes: "Mozilla verarbeitet Relay-E-Mails zur Zustellung/Weiterleitung, speichert den Inhalt laut Anbieter nicht länger als nötig; Metadaten wie Masken/Labels und genutzte Websites können gespeichert werden (abschaltbar, mit Funktionsverlust)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Firefox Relay ist ein Anbieter aus der Kategorie **E-Mail-Aliasing**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du E-Mail-Adressen für Registrierungen/Newsletter trennen willst, ohne deine Primäradresse weiterzugeben.
- **Weniger geeignet wenn:** du Ende-zu-Ende-Verschlüsselung für Inhalte erwartest (Relay ist ein Weiterleitungsdienst, kein E2E-Messenger).
- **Wichtigster Abwägung:** weniger Identitätsbindung nach außen vs. zusätzliche Metadaten beim Vermittler (Masken/Zuordnung, Nutzungs-/Log-Daten).

## Sofortmaßnahmen
- **2FA für den Mozilla-Account aktivieren**, damit ein Account-Diebstahl nicht direkt alle Masken kompromittiert.
- **Speichern von „Websites, wo du Masken nutzt“ deaktivieren**, wenn du diese Metadaten nicht möchtest (Abwägung: Features/Komfort sinken).
- **Pro Dienst eine eigene Maske verwenden**, damit Datenlecks nicht mehrere Konten über eine Adresse verknüpfen.

## Entscheidungshilfe
- Wenn du deine Primäradresse selten herausgeben willst, dann nutze pro Registrierung **eine eigene Relay-Maske** (Abwägung: Maskenverwaltung/Ordnung wird wichtiger).
- Wenn du vermeiden willst, dass Masken-Nutzung mit konkreten Websites verknüpft gespeichert wird, dann **deaktiviere Website-Tracking/Labels in Relay** (Abwägung: Auto-Ausfüllen/Sync/Sortierung können eingeschränkt sein).
- Wenn du Antworten über eine Maske brauchst, dann prüfe **Premium-Reply-Funktion** (Abwägung: zusätzliche Funktionalität, ggf. Abo/Payment-Metadaten).
- Wenn du Telemetrie/Interaktionsdaten minimieren willst, dann nutze den **Opt-out laut Anbieter via Do-Not-Track (DNT)** (Abwägung: weniger Diagnosedaten für Stabilität/Support).
- Wenn du Phone-Masking nutzt, dann beachte die **Twilio-Partnerschaft** und Limits (Abwägung: Telefon-Metadaten/Partnerverarbeitung vs. weniger reale Nummernfreigaben).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Firefox Relay |
| Kategorie | E-Mail-Aliasing |
| Website | https://relay.firefox.com/ |
| Quellcode | https://github.com/mozilla/fx-private-relay |
| Lizenz | MPL-2.0 |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | yes (Mozilla Account) |
| Telefon erforderlich | no *(für E-Mail-Masking; Phone-Masking erfordert Telefonnummer)* |
| KYC erforderlich | no |
| Zahlungsabwicklung | Stripe (inkl. Apple Pay/PayPal/Venmo/Google Pay je nach Checkout) |
| Jurisdiktion | USA (Rechtswahl: Kalifornien, laut Terms) |
| Logs | minimal (u.a. Server-Logs/IP) |
| Retention | Server-Logs (IP): 90d; unzustellbare E-Mails: max. 3d; Twilio SMS-Records: 7d |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: [Mozilla Subscription Services – Privacy Notice](https://www.mozilla.org/en-US/privacy/subscription-services/)
- AGB/Terms: [Mozilla Subscription Services – Terms of Service](https://www.mozilla.org/en-US/about/legal/terms/subscription-services/)
- Transparency Report: [Mozilla Transparency](https://www.mozilla.org/en-US/about/governance/policies/transparency/)
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Firefox Relay verarbeitet E-Mails zur Zustellung/Weiterleitung und speichert den Inhalt laut Anbieter nicht länger als nötig; bei Zustellproblemen können Mails kurzzeitig serverseitig gehalten werden (max. 3 Tage). Masken/Labels sowie die Websites, auf denen Masken verwendet wurden, können gespeichert werden (abschaltbar, aber mit Funktionsverlust). IP-Adressen fallen laut Anbieter als Teil von Server-Logs an (90 Tage).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Accountdaten (u.a. Primär-E-Mail), Masken inkl. benutzerdefinierter Masken/Subdomain-Option, Labels sowie (optional) Websites, auf denen Masken genutzt wurden; Interaktionsdaten (Login/Logout, Präferenzen); technische Daten (Add-on-Version, OS/Hardware) und IP-Adressen in Server-Logs; bei Phone-Masking: Telefonnummern/Masken und Kontakt-Nummern (Log).  
- **Wofür:** Bereitstellung der Weiterleitung, Maskenverwaltung und Auffindbarkeit (Labels/Websites), Performance/Stabilität, Missbrauchs-/Fraud-Prevention, Call/Text-Log-Anzeige und Blocklisten.  
- **Weitergabe/Subprozessoren:** AWS für Empfang/Weiterleitung von E-Mails; Twilio für Phone-Masking (inkl. SMS-Inhalte, die Twilio nach 7 Tagen löschen soll).  
- **Drittlandtransfer:** Anbieter nennt Verarbeitung/Server auch außerhalb des Wohnsitzlands, inkl. USA.  
- **Zahlungsabwicklung/Payment Processor:** Mozilla nennt Stripe sowie über Stripe nutzbare Zahlarten (z.B. Apple Pay, PayPal, Venmo, Google Pay).  
- **Kontakt/DSAR/DPA:** DSAR über OneTrust-Portal; Kontaktadresse compliance@mozilla.com.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar (Privacy Notice beschreibt Interaktionsdaten; Opt-out wird über DNT genannt).
- **Abschaltbar?** Ja, laut Anbieter via **Do Not Track (DNT)** im Browser.
- **Wo (Menüpfad):** Browser-Einstellung „Do Not Track“ aktivieren; Website-/Masken-Metadaten zusätzlich in Relay unter den Einstellungen ein-/abschaltbar.

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** IP-Adresse als Teil von Server-Logs: 90 Tage; unzustellbare E-Mails max. 3 Tage; Twilio SMS-Records 7 Tage.
- **Lösch-/Opt-out-Optionen:** Website-/Masken-Metadaten sind in Relay laut Anbieter deaktivierbar (Abwägung: weniger Komfort/Sync/Sortierung).

**Abwägung am Punkt:** Weniger Telemetrie/Metadaten kann Komfort (Auto-Ausfüllen/Organisation/Sync) und Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben (Relay ist Weiterleitung/Masking, kein E2E-Content-Speicher).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Mozilla Account unterstützt Zwei-Schritt-Authentifizierung; Wiederherstellungs-Keys sind vorgesehen.
- **Recovery/Account-Wiederherstellung:** Recovery Keys / Wiederherstellungsverfahren über Mozilla Account.
- **Vuln-Handling / Security-Kontakt:** Mozilla beschreibt Bug-Bounty/Security-Meldewege auf der eigenen Security-Seite.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (2FA für Mozilla Account).  
   **Prüfen:** Mozilla-Account zeigt 2FA als „aktiv“ + Recovery Keys gesichert.
2) **Auto-Lock/Timeout** sinnvoll setzen.  
   **Prüfen:** Geräte-/Browser-/Passwort-Manager-Sperre greift (Relay hängt am Account-Login).
3) **Website-/Masken-Metadaten minimieren**, falls du das nicht brauchst.  
   **Prüfen:** Relay-Einstellungen zeigen Website-Zuordnung/Labels als „aus“ (Hinweis: kann Sync/Autofill-Funktionen beeinträchtigen).

**Stolpersteine:**
- Das Speichern von „Websites, wo du Masken nutzt“ kann Komfort erhöhen, erzeugt aber zusätzliche Metadaten beim Anbieter.
- Reply-Funktionen und Phone-Masking erhöhen Funktionsumfang, können aber zusätzliche Logs/Partnerverarbeitung bedeuten.

<details>
<summary>Profil B (Datensparsam)</summary>

- DNT aktivieren (Opt-out für Relay-Interaktionsdaten laut Privacy Notice).
- Website-/Masken-Zuordnung in Relay deaktivieren (Abwägung: weniger Sortierung/Sync/Autofill).
- Masken strikt trennen (1 Dienst = 1 Maske) und regelmäßig ungenutzte Masken löschen.
**Abwägung:** mehr Verwaltungsaufwand, weniger Komfort.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutzung über separates Browser-Profil/Container nur für Relay-Logins und Maskenverwaltung.
- Kein Phone-Masking, falls du Partnerverarbeitung minimieren willst (Abwägung: reale Nummer muss ggf. anders geschützt werden).
- Strikte Trennung kritischer Accounts: Primäradresse nur dort, wo wirklich nötig; Relay nur für „exponierte“ Sign-ups.
**Abwägung:** mehr Komplexität, weniger Flexibilität.

</details>

## Features
- E-Mail-Masken mit Weiterleitung auf die Primäradresse (Free: bis zu 5 zufällige Masken).
- Premium: unbegrenzt Masken + (laut Anbieter) Reply-Funktion ohne Preisgabe der Primäradresse.
- Optional: Blockieren von Promotional-Mails (Header-Prüfung).
- Entfernen gängiger E-Mail-Tracker bei Weiterleitung.
- Optional: Phone-Masking (USA/Kanada; via Twilio, mit Limits laut Terms).

## Alternativen
- SimpleLogin (E-Mail-Aliasing; Abwägung: anderer Anbieter-/Account-Kontext, andere Jurisdiktion/Integrationen).
- Fastmail Masked E-Mail (E-Mail-Aliasing; Abwägung: an Fastmail-Account/Hosting gebunden).
- Apple „Hide My E-Mail“ (E-Mail-Aliasing; Abwägung: Apple-ID/iCloud+-Bindung und Plattformfokus).
- DuckDuckGo E-Mail Protection (E-Mail-Aliasing; Abwägung: Funktionsumfang und Integrationen anders gelagert).

## Nicht gelöst / offene Punkte
- Unklar, wie lange Mozilla die **Call/Text-Log-Metadaten** (Kontakt-Nummernlisten) serverseitig aufbewahrt, insbesondere nach Account-Löschung.

## Quellen

- E-Mail-Masken (Free: "bis zu 5 zufällige Masken)
- Premium: "Blocken von Werbe-/Promotional-Mails (Header-Prüfung)
- Optional: "Phone-Masking (USA/Kanada; via Twilio, laut Terms)
- SimpleLogin (E-Mail-Aliasing; Trade-off: "eigener Account/Ökosystem, andere Server-/Jurisdiktionslage)
- Fastmail Masked E-Mail (E-Mail-Aliasing; Trade-off: "an Fastmail-Account/Hosting gebunden)
- Apple „Hide My E-Mail“ (E-Mail-Aliasing; Trade-off: "Apple-ID/iCloud+ und Plattformbindung)
- DuckDuckGo E-Mail Protection (E-Mail-Aliasing; Trade-off: "Funktionsumfang/Integrationen anders gelagert)
- https://www.mozilla.org/en-US/security/bug-bounty/
- [Firefox Relay (Website)](https://relay.firefox.com/)
- [Firefox Relay FAQ](https://relay.firefox.com/faq/)
- [Mozilla Subscription Services – Privacy Notice](https://www.mozilla.org/en-US/privacy/subscription-services/)
- [Mozilla Subscription Services – Terms of Service](https://www.mozilla.org/en-US/about/legal/terms/subscription-services/)
- [fx-private-relay Quellcode (GitHub)](https://github.com/mozilla/fx-private-relay)
- [Mozilla Account: Two-step authentication](https://support.mozilla.org/en-US/kb/secure-firefox-account-two-step-authentication)
- [Mozilla Account: Recovery keys](https://support.mozilla.org/en-US/kb/what-are-my-recovery-keys)
- [Mozilla Transparency](https://www.mozilla.org/en-US/about/governance/policies/transparency/)
- [Mozilla Security Bug Bounty](https://www.mozilla.org/en-US/security/bug-bounty/)
