---
layout: ../../../layouts/DocLayout.astro
title: Anbieter / 33Mail
url: "/anbieter/33mail/"
chapter: Anbieter
type: single
format: provider
level: ''
money: maybe
status: done
updated: '2026-01-06'
robots: index,follow
description: 'Kurzprofil von 33Mail (Kategorie: E-Mail-Aliasing).'
provider: ''
name: 33Mail
category: E-Mail-Aliasing
website: https://33mail.com/
repo: Nicht angegeben
license: LicenseRef-Proprietary
policies: ''
privacy: Nicht angegeben (Datenschutzhinweise in Terms of Service)
terms: https://www.33mail.com/tos
transparency: Nicht angegeben
warrant_canary: Nicht angegeben
audits: Nicht angegeben
pricing: mixed
free_tier: 'yes'
open_source: 'no'
self_host_possible: unknown
account_required: 'yes'
phone_required: 'no'
kyc_required: 'no'
jurisdiction: Unklar
region: unknown
logs: unknown
retention: unknown
data_notes: 33Mail leitet E-Mails an deine echte Zieladresse weiter; dafür verarbeitet
  der Dienst zwangsläufig Header/Metadaten und (mindestens transient) Inhalte. Laut
  Terms zählen zu "deinen Daten" u.a. E-Mail-Adresse, IP-Adresse, Aliase und E-Mail-Aktivität;
  außerdem dürfen weitergeleitete E-Mails zur Leistungserbringung modifiziert werden
  und der Dienst kann Werbung in weitergeleitete E-Mails einfügen (laut Pricing ist
  "No Ads" Bestandteil bezahlter Tarife).
features: ''
alternatives: ''
sources: ''
---
## Kurzprofil

33Mail ist ein Anbieter aus der Kategorie **E-Mail-Aliasing**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du deine echte E-Mail-Adresse **nicht überall angeben** willst und Aliase per **Weiterleitung** + optionalem **Reply-Routing** nutzen möchtest.
- **Weniger geeignet wenn:** du einen Dienst suchst, bei dem der Anbieter **keine** Mail-Inhalte/Metadaten verarbeiten kann (Weiterleitung bedeutet zwangsläufig Verarbeitung).
- **Wichtigster Abwägung:** **Komfort (Forwarding + Alias-Management)** vs. **Zentraler Datenpunkt beim Weiterleitungsdienst (Metadaten, ggf. transient auch Inhalte)**.

## Sofortmaßnahmen
- **2FA aktivieren (TOTP):** reduziert Risiko von Kontoübernahme, falls dein Passwort kompromittiert wird.
- **Alias bei Spam sofort blockieren:** blockierte Aliase werden laut FAQ gar nicht mehr angenommen (weniger Weiterleitung, weniger Bandbreitenverbrauch).
- **„No Ads“ nur wenn nötig:** wenn du keine Werbeeinblendungen in weitergeleiteten Mails willst, ist ein Tarif mit „No Ads“ relevant (Abwägung: Kosten).

## Entscheidungshilfe
- Wenn du nur „E-Mail verbergen“ willst, dann nutze Aliase für Registrierungen und lasse alles an deine Zieladresse weiterleiten (Abwägung: 33Mail verarbeitet dabei Metadaten und leitet Inhalte weiter).
- Wenn du antworten willst, ohne deine echte Adresse preiszugeben, dann aktiviere **Anonymous Reply** und antworte direkt auf die weitergeleitete Mail (Abwägung: der Antwort-Text kann trotzdem Leaks enthalten, z.B. Signaturen/Unsubscribe-Tags).
- Wenn du möglichst wenig veränderte Weiterleitungen willst, dann berücksichtige die ToS-Aussage, dass 33Mail weitergeleitete E-Mails modifizieren und Werbung hinzufügen kann (Abwägung: in kostenlosen Tarifen ggf. Werbeeinblendung).
- Wenn du große Anhänge erwartest, dann beachte die **Bandbreitenlimits** und dass Attachments bis **10 MB** gegen das Limit zählen (Abwägung: bei Überschreitung können Mails verzögert/ggf. später gedroppt werden).
- Wenn du eine eigene Domain nutzen willst, dann setze Custom Domain per MX auf **domains.33mail.com** (Abwägung: Domain-Konfiguration ist zusätzlicher Aufwand und je nach Plan begrenzt).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | 33Mail |
| Kategorie | E-Mail-Aliasing |
| Website | https://33mail.com/ |
| Quellcode | Nicht angegeben |
| Lizenz | LicenseRef-Proprietary |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben (Zahlungsdienstleister wird auf Pricing/Legal nicht benannt) |
| Jurisdiktion | Unklar (keine Legal Entity/Adresse in ToS/About genannt) |
| Logs | Nicht angegeben |
| Retention | Nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: Nicht angegeben (Datenschutzhinweise in Terms of Service)
- AGB/Terms: https://www.33mail.com/tos
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
33Mail leitet E-Mails an deine echte Zieladresse weiter; dafür verarbeitet der Dienst zwangsläufig Header/Metadaten und (mindestens transient) Inhalte. Laut Terms zählen zu „deinen Daten“ u.a. E-Mail-Adresse, IP-Adresse, Aliase und E-Mail-Aktivität; außerdem dürfen weitergeleitete E-Mails zur Leistungserbringung modifiziert werden und der Dienst kann Werbung in weitergeleitete E-Mails einfügen (laut Pricing ist „No Ads“ Bestandteil bezahlter Tarife).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** laut Terms zählen zu „deinen Daten“ **E-Mail-Adresse, IP-Adresse, Aliase und E-Mail-Aktivität**.
- **Wofür:** laut Terms „nur um den Service bereitzustellen“; zusätzlich ist das Weiterleiten/Reply-Routing technisch nur mit Verarbeitung von Mail-Metadaten möglich.
- **Weitergabe/Subprozessoren:** laut Terms „keine Weitergabe an Dritte“, außer zur **Erfüllung von Anfragen durch Law Enforcement**; weitere Subprozessoren werden nicht genannt.
- **Drittlandtransfer:** Nicht angegeben / Unklar.
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben / Unklar.
- **Kontakt/DSAR/DPA:** Kontakt per Support-Mail; DSAR/DPA/Subprozessorenliste nicht angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Nicht angegeben / Unklar (Terms nennen IP-Adresse und E-Mail-Aktivität als „deine Daten“, aber keine Analytics/Tracking-Details).
- **Abschaltbar?** Nicht angegeben / Unklar.
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** Nicht angegeben
- **Aufbewahrung:** Nicht angegeben
- **Lösch-/Opt-out-Optionen:** Nicht angegeben / Unklar (Account- und Alias-Management existiert, aber Löschfristen werden nicht beschrieben).

**Abwägung am Punkt:** Weniger Logging/Telemetrie reduziert Metadaten, kann aber Abuse-Handling, Zustellbarkeit und Support erschweren.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben / Unklar (Weiterleitung basiert auf E-Mail-Transport; konkrete Sicherheitsangaben werden nicht dokumentiert).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben / Unklar.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA ist laut Anbieter als **TOTP (Google-Authenticator-kompatibel)** verfügbar und wird nach dem Passwort beim Login abgefragt.
- **Recovery/Account-Wiederherstellung:** „Lost Password“ existiert; Details zum Ablauf/Schutz nicht dokumentiert.
- **Vuln-Handling / Security-Kontakt:** Nicht angegeben / Unklar (kein offizielles SECURITY.md/Repo verlinkt).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren (2FA/TOTP).**  
   **Wo:** Dashboard → Settings (laut Blog: „dashboard settings page“)  
   **Prüfen:** Login fragt nach Passwort **und** anschließend nach Authenticator-Token.
2) **Alias-Weiterleitung bewusst nutzen (Spam-Notbremse).**  
   **Wo:** Dashboard → Alias-Liste/Management (laut Pricing existiert „Alias management interface“)  
   **Prüfen:** Alias lässt sich blockieren; neue Mails kommen danach nicht mehr an.
3) **Anonymous Reply nur aktivieren, wenn du es brauchst.**  
   **Prüfen:** Antworten gehen an eine Adresse wie `[token]@reply.33mail.com` und enthalten nicht automatisch deine echte Adresse in den Headern.

**Stolpersteine:**
- **E-Mail-Inhalt/Metadaten:** Weiterleitung bedeutet Verarbeitung; Terms nennen u.a. IP-Adresse und E-Mail-Aktivität als Daten.
- **Leaking beim Antworten:** FAQ warnt, dass der Mail-Body (Signaturen/Unsubscribe-Tags/Referenzen auf deine echte Adresse) Informationen verraten kann.
- **Werbeeinblendung:** Terms erlauben Werbung in weitergeleiteten Mails; Pricing nennt „No Ads“ als Bestandteil bezahlter Pläne.

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze Aliase nur dort, wo du sie wirklich brauchst (weniger Alias-Sprawl = weniger Metadatenpunkte).
- Halte **Anonymous Reply** standardmäßig aus und aktiviere es nur situativ.
- Wenn du eine eigene Domain nutzt: MX auf **domains.33mail.com** setzen (Custom Domain reduziert sichtbare Provider-Domain im Alias, ändert aber nicht den Forwarding-Datenfluss).

**Abwägung:** weniger Komfort/Flexibilität (mehr manuelles Alias-Management), dafür weniger unbeabsichtigte Datenweitergabe über Reply-Workflows.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze eine **separierte Zieladresse** (eigener Mailbox-Account) nur für Weiterleitungen, nicht deine Hauptadresse.
- Antworte nicht über Reply-Routing, wenn du nicht sicher bist, dass dein Mail-Client keine Identitätsdaten in Body/Signatur einfügt.
- Bandbreiten-/Reply-Limits strikt einplanen (z.B. Attachments vermeiden, falls du nahe am Limit bist).

**Abwägung:** deutlich mehr Aufwand in der Mail-Organisation; weniger „einfach antworten“-Komfort.

</details>

## Features
- Unbegrenzte Aliase (Erstellung automatisch beim ersten E-Mail-Eingang; Rate-Limits je Plan)
- Weiterleitung an bestehende Zieladresse
- Alias blockieren (z.B. via Block-Funktion; blockierte Aliase verursachen laut FAQ keine Bandbreitennutzung)
- Anonyme Antworten (Reply-Routing; Hinweise zum Vermeiden von Leaks im Mailtext)
- Custom Domains (Premium/Pro/Enterprise; MX auf domains.33mail.com)
- Zusätzliche Usernames (je Plan)
- Attachments bis 10 MB (zählt gegen Bandbreitenlimit)

## Alternativen
- **SimpleLogin:** ähnliche Kategorie; Abwägung hängt an Jurisdiktion, Policy, Featureset und Integrationen.
- **Addy.io (ehem. AnonAddy):** ähnliche Kategorie; Abwägung kann bei Bedienkonzept, Limits und Betriebsmodell liegen.
- **Firefox Relay:** ähnliche Kategorie; Abwägung kann bei Integration ins Browser-/Account-Ökosystem liegen.

## Nicht gelöst / offene Punkte
- **Jurisdiktion/Legal Entity:** in About/ToS nicht eindeutig genannt.
- **Subprozessoren & technische Weitergabe:** keine öffentliche Liste; Terms nennen nur Ausnahme „law enforcement“.
- **Retention/Löschfristen:** nicht dokumentiert (IP-Adresse/E-Mail-Aktivität werden als Daten genannt, aber ohne Fristen).
- **Sicherheits-/Disclosure-Prozess:** kein offizielles Security-Dokument/Repo verlinkt.

## Quellen

- title: "33Mail Blog – 2 Factor Authentication"
- [33Mail – Startseite](https://33mail.com/)
- [33Mail – Terms of Service](https://www.33mail.com/tos)
- [33Mail – FAQ](https://www.33mail.com/faq)
- [33Mail – Pricing](https://33mail.com/pricing)
- [33Mail – About](https://33mail.com/about)
- [33Mail – Contact Us](https://33mail.com/contactus)
- [33Mail Blog – 2 Factor Authentication](https://blog.33mail.com/2019/02/08/2-factor-authentication/)

