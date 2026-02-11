---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / DuckDuckGo E-Mail Protection"
url: "/anbieter/duckduckgo-email-protection/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-11"
robots: "index,follow"
description: "Kurzprofil von DuckDuckGo E-Mail Protection (Kategorie: E-Mail-Aliasing)."
provider: ""
name: "DuckDuckGo E-Mail Protection"
category: "E-Mail-Aliasing"
website: "https://duckduckgo.com/email/"
repo: "https://github.com/duckduckgo"
license: "Nicht angegeben"
policies: ""
privacy: "https://duckduckgo.com/privacy"
terms: "https://duckduckgo.com/terms"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "partial"
self_host_possible: "no"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA (Duck Duck Go, Inc.; Terms nennen New York law)"
region: "us"
logs: "none"
retention: "unknown"
retention_notes: "Nicht angegeben (laut Anbieter: keine Speicherung von E-Mail-Inhalten/Headers)"
data_notes: "DuckDuckGo beschreibt E-Mail Protection als Forwarding-Dienst, der E-Mail-Tracker entfernt und E-Mails an eine bestehende Inbox weiterleitet. Laut Anbieter werden E-Mails nicht gespeichert (auch keine Header)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

DuckDuckGo E-Mail Protection ist ein Anbieter aus der Kategorie **E-Mail-Aliasing**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du E-Mail-Aliasing ohne neues Postfach willst und Tracker-Entfernung beim Weiterleiten sinnvoll findest.
- **Weniger geeignet wenn:** du Ende-zu-Ende-Verschlüsselung oder maximale Kontrolle über Verarbeitung/Serverbetrieb erwartest.
- **Wichtigster Abwägung:** Forwarding + Tracker-Entfernung bedeutet, dass der Dienst eingehende E-Mails zur Verarbeitung sehen muss (Abwägung: Komfort/Kompatibilität vs. Vertrauen in die Verarbeitung).

## Sofortmaßnahmen
- Nutze **für jeden Dienst eine eigene private Duck Address**: reduziert das Verknüpfen deiner Hauptadresse über mehrere Accounts.
- **Deaktiviere** eine private Duck Address bei Spam/Leak: stoppt Zustellung an diese Alias-Adresse, ohne dein Hauptpostfach zu wechseln.
- Sichere dein **Forwarding-Postfach mit starker Anmeldung (z.B. 2FA)**: das Postfach ist der Schlüssel zum Zugriff via One-Time Passphrase.

## Entscheidungshilfe
- Wenn du deine echte Adresse gegenüber Webseiten verbergen willst, dann nutze private Duck Addresses (Abwägung: Abhängigkeit vom Forwarding-Dienst).
- Wenn du viele Logins/Newsletter trennscharf halten willst, dann vergib pro Anbieter eine eigene private Duck Address (Abwägung: mehr Verwaltungsaufwand).
- Wenn du bei einem Alias Missbrauch siehst, dann deaktiviere genau diese private Duck Address (Abwägung: alle Mails an diesen Alias gehen nicht mehr durch).
- Wenn du auf Antworten per Alias angewiesen bist, dann teste Replies: sie gehen vom Duck Address aus, aber Inhalte können trotzdem Identifikatoren enthalten, wenn du sie selbst in den Text schreibst (Abwägung: weniger Leaks durch Header vs. Leaks durch Inhalt möglich).
- Wenn du möglichst wenig neue Login-Oberfläche willst, dann nutze die Einbindung in DuckDuckGo Browser/Extension (Abwägung: Feature ist an App/Extension gebunden).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | DuckDuckGo E-Mail Protection |
| Kategorie | E-Mail-Aliasing |
| Website | https://duckduckgo.com/email/ |
| Quellcode | https://github.com/duckduckgo |
| Lizenz | Nicht angegeben |
| Preismodell | free |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend (kostenlos) |
| Jurisdiktion | USA (Duck Duck Go, Inc.; Terms nennen New York law) |
| Logs | none |
| Retention | Nicht angegeben (laut Anbieter: keine Speicherung von E-Mail-Inhalten/Headers) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://duckduckgo.com/privacy
- AGB/Terms: https://duckduckgo.com/terms
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
DuckDuckGo beschreibt E-Mail Protection als **kostenlosen Forwarding-Dienst**, der **versteckte E-Mail-Tracker entfernt** und E-Mails an deine bestehende Inbox weiterleitet. Laut Anbieter werden **E-Mail-Nachrichten nicht gespeichert, auch keine Header**.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Forwarding-Adresse (dein bestehendes Postfach) und deine Duck Addresses (personal + private) für das Weiterleiten; eingehende E-Mails werden zur Tracker-Entfernung verarbeitet.
- **Wofür:** Entfernen versteckter E-Mail-Tracker + Weiterleitung an dein vorhandenes Postfach; Erstellung privater Duck Addresses „on the fly“.
- **Weitergabe/Subprozessoren:** Nicht angegeben / Unklar (keine öffentlich gefundene Liste speziell für E-Mail Protection).
- **Drittlandtransfer:** Nicht angegeben / Unklar.
- **Zahlungsabwicklung/Payment Processor:** Nicht zutreffend (kostenlos).
- **Kontakt/DSAR/DPA:** Privacy-Anfragen über privacy@duckduckgo.com (Privacy Rights).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Unklar (keine spezifische, öffentlich gefundene Aussage nur für E-Mail Protection).
- **Abschaltbar?** Unklar.
- **Wo (Menüpfad):** E-Mail Protection läuft in DuckDuckGo Browser/Extension; prüfe dort Einstellungen rund um Diagnose/Reporting.

**Logs & Retention:**
- **Logging-Level:** none
- **Aufbewahrung:** Nicht angegeben (laut Anbieter: keine Speicherung von E-Mail-Inhalten/Headers)
- **Lösch-/Opt-out-Optionen:** Konto kann dauerhaft gelöscht werden (Account-Tab in E-Mail Protection Settings).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben; E-Mail Protection ist ein Forwarding-Dienst (kein E2E-Einrichtung beschrieben).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben; Anmeldung erfolgt ohne Passwort über One-Time Passphrase per E-Mail.
- **Recovery/Account-Wiederherstellung:** Zugriff hängt an deiner Forwarding-Adresse; One-Time Passphrase wird an das Postfach gesendet.
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben / Unklar.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **E-Mail Protection aktivieren** (Desktop/Mobile) und Login testen.  
   **Pfad:** `https://duckduckgo.com/email/login` im unterstützten DuckDuckGo Browser/Extension öffnen → One-Time Passphrase aus deinem Forwarding-Postfach eingeben.  
   **Prüfen:** Autofill/Generator für Duck Addresses erscheint in E-Mail-Feldern.
2) **Alias-Strategie festlegen:** pro Anbieter/Account eine private Duck Address.  
   **Prüfen:** neue Registrierung nutzt eine frische private Duck Address (nicht die gleiche wie bei anderen Diensten).
3) **Spam/Leak schnell stoppen:** private Duck Address deaktivieren.  
   **Pfad (Android/macOS/iOS):** Browser-Menü → **Passwords** → private Duck Address → Deaktivieren/Reaktivieren.  
   **Pfad (Windows/Extension):** E-Mail an den Alias im Postfach öffnen → Banner → **Deactivate**.  
   **Prüfen:** neue Mails an diesen Alias kommen nicht mehr an.

**Stolpersteine:**
- Replies gehen vom Duck Address aus, aber Inhalte können Identifikatoren enthalten, wenn du sie selbst in den Text schreibst (Abwägung: Alias in Headern vs. Leaks im Body).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze primär **private Duck Addresses** statt die personal Duck Address, um langfristige Wiedererkennung zu reduzieren.
- Halte die **Forwarding-Adresse** möglichst stabil und gut abgesichert (weil One-Time Passphrase dorthin geht).
- Reagiere früh auf Leak/Spam: Alias deaktivieren statt Filter zu stapeln.  
**Abwägung:** mehr Pflege/Organisation der Alias-Zuordnung.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne Nutzung in **separaten Browser-Profilen** (oder separatem Gerät) für besonders sensible Konten, damit Autofill/Session-Cookies nicht vermischt werden.
- Verwende eine **dedizierte Forwarding-Adresse** nur für E-Mail Protection (wenn dein Einrichtung das hergibt).  
**Abwägung:** höherer Aufwand und mehr operative Komplexität (mehr Postfächer/Trennung).

</details>

## Features
- Kostenloser E-Mail-Forwarding-Dienst mit Entfernen versteckter E-Mail-Tracker.
- Unbegrenzte Erstellung privater Duck Addresses „on the fly“.
- Private Duck Addresses können deaktiviert und wieder reaktiviert werden; sie laufen nicht automatisch ab (solange der Account aktiv ist).
- Anmeldung ohne Passwort via One-Time Passphrase an die Forwarding-Adresse.
- Antworten werden vom Duck Address versendet; keine Garantie, dass deine Forwarding-Adresse nicht doch über den E-Mail-Inhalt/Signaturen auftaucht.

## Alternativen
- [SimpleLogin](/anbieter/simplelogin/) – Aliasing mit separatem Dashboard/Regeln (Abwägung: eigener Account/Anbieter-Abhängigkeit).
- [Firefox Relay](/anbieter/firefox-relay/) – Aliasing im Mozilla-Ökosystem (Abwägung: andere Policies/Integrationen).
- [iCloud Hide My E-Mail](/anbieter/icloud-hide-my-email/) – Aliasing in Apple-Diensten (Abwägung: Apple-ID und Gerätebindung).
- [Fastmail Masked E-Mail](/anbieter/fastmail-masked-email/) – Aliasing im Mailanbieter (Abwägung: Mailanbieterwechsel/Account-Modell).

## Nicht gelöst / offene Punkte
- Keine öffentlich gefundene Subprozessoren-/DPA-Liste speziell für E-Mail Protection (Stand: 2026-01-11).
- Keine spezifisch auffindbare Dokumentation zu Telemetrie/Analytics nur für E-Mail Protection (Stand: 2026-01-11).
- Kein klar benannter Security/Disclosure-Prozess speziell für E-Mail Protection (Stand: 2026-01-11).

## Quellen

- SimpleLogin (E-Mail-Aliasing mit eigenem Dashboard; Trade-off: "separater Account/Anbieter)
- Firefox Relay (Aliasing; Trade-off: "andere Integrationen/Policies)
- iCloud „Hide My E-Mail“ (Aliasing in Apple-Ökosystem; Trade-off: "Apple-ID/Ökosystembindung)
- Fastmail Masked E-Mail (Aliasing im Mail-Provider; Trade-off: "Mailanbieter-Wechsel/Account)
- https://duckduckgo.com/terms
- [What is DuckDuckGo E-Mail Protection?](https://duckduckgo.com/duckduckgo-help-pages/email-protection/what-is-duckduckgo-email-protection/)
- [Does DuckDuckGo save my email messages?](https://duckduckgo.com/duckduckgo-help-pages/email-protection/privacy/does-duckduckgo-save-my-email-messages)
- [Will my replies hide my forwarding address?](https://duckduckgo.com/duckduckgo-help-pages/email-protection/privacy/will-my-replies-hide-my-forwarding-address)
- [How do I enable DuckDuckGo E-Mail Protection on my desktop browser?](https://duckduckgo.com/duckduckgo-help-pages/email-protection/how-do-i-enable-duckduckgo-email-protection-desktop)
- [How do I enable DuckDuckGo E-Mail Protection on my mobile phone?](https://duckduckgo.com/duckduckgo-help-pages/email-protection/how-do-i-enable-duckduckgo-mobile)
- [Where do I find my DuckDuckGo E-Mail Protection account password?](https://duckduckgo.com/duckduckgo-help-pages/email-protection/troubleshooting/where-do-i-find-my-password)
- [How do I delete my DuckDuckGo E-Mail Protection account?](https://duckduckgo.com/duckduckgo-help-pages/email-protection/troubleshooting/how-do-i-delete-my-duckduckgo-email-protection-account)
- [Where can I see and manage my private Duck Addresses?](https://duckduckgo.com/duckduckgo-help-pages/email-protection/duck-addresses/where-can-i-manage-my-private-duck-addresses)
- [How do I deactivate private Duck Addresses?](https://duckduckgo.com/duckduckgo-help-pages/email-protection/duck-addresses/how-do-i-deactivate-private-duck-addresses)
- [Do private Duck Addresses expire?](https://duckduckgo.com/duckduckgo-help-pages/email-protection/duck-addresses/do-private-duck-addresses-expire)
- [Privacy Rights and Related Information](https://duckduckgo.com/duckduckgo-help-pages/r-legal/privacy-rights)
- [DuckDuckGo Privacy Policy](https://duckduckgo.com/privacy)
- [DuckDuckGo Terms of Service](https://duckduckgo.com/terms)
