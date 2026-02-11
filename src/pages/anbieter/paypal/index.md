---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / PayPal"
url: "/anbieter/paypal/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von PayPal (Kategorie: Zahlungen)."
provider: ""
name: "PayPal"
category: "Zahlungen"
website: "https://www.paypal.com/de/home"
repo: "https://github.com/paypal"
license: "Teilweise (Open-Source-SDKs; je Repo unterschiedlich, z.B. Apache-2.0, MIT)"
policies: ""
privacy: "https://www.paypal.com/de/legalhub/paypal/privacy-full"
terms: "https://www.paypal.com/de/legalhub/paypal/useragreement-full"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "partial"
self_host_possible: "no"
account_required: "yes"
phone_required: "yes"
kyc_required: "yes"
jurisdiction: "Luxemburg (PayPal (Europe) S.à r.l. et Cie, S.C.A. für EWR)"
region: "eu"
logs: "unknown"
retention: "verylong"
retention_notes: "Vertragsdaten: während der Vertragsbeziehung + 10 Jahre (weitere Aufbewahrung je Rechtspflicht/Compliance möglich)"
retention_max_days: "3650"
data_notes: "PayPal verarbeitet breite Identitäts-, Zahlungs- und Transaktionsdaten (inkl. Geräte-/Trackingdaten) und nennt lange Aufbewahrungsfristen (u.a. 10 Jahre nach Vertragsende)."
features: ""
alternatives: ""
payment_processors: "PayPal (eigener Zahlungsdienst; ggf. mit weiteren Dienstleistern/Partnern laut Privacy/Third-Party-List)"
sources: ""
---
## Kurzprofil

PayPal ist ein Anbieter aus der Kategorie **Zahlungen**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen zentralen Zahlungsdienst für Online-/App-Zahlungen nutzen willst und Funktionen wie Käuferschutz/Dispute-Handling für dich relevant sind.
- **Weniger geeignet wenn:** du Zahlungs- und Kaufmetadaten möglichst nicht bei einem großen Plattformanbieter bündeln willst (oder möglichst ohne Identitätsprüfung arbeiten musst).
- **Wichtigster Abwägung:** Komfort & Ökosystem (Checkout, Konfliktlösung, Support) vs. **umfangreiche Identitäts-/Transaktionsdaten + Tracking/Cookies + lange Aufbewahrung**.

## Sofortmaßnahmen
- **Passkey aktivieren**, falls verfügbar: reduziert Passwort-Risiko und ist phishing-resistenter.
- **2FA (Authenticator-App) einrichten:** erschwert Kontoübernahmen deutlich (auch bei Passwort-Leak).
- **„Daten & Datenschutz“ prüfen (Export/Anfragen):** gibt dir Sichtbarkeit über gespeicherte Daten und Rechte-Workflows.

## Entscheidungshilfe
- Wenn du **ohne PayPal-Konto** zahlen willst, dann nutze „Zahlung ohne PayPal-Konto“ (Abwägung: Datenverarbeitung findet trotzdem statt, laut Datenschutzerklärung auch für Nutzer ohne Konto).
- Wenn du **Kontoschutz priorisierst**, dann nutze Passkey und zusätzlich 2FA per Authenticator-App (Abwägung: Login-Flow kann mehr Schritte enthalten, z.B. OTP/Trusted-Device).
- Wenn du **Tracking minimieren** willst, dann blockiere/limitiere Drittanbieter-Cookies im Browser und nutze getrennte Browser-Profile (Abwägung: einzelne Flows/Funktionen können eingeschränkt sein).
- Wenn du **weniger Daten in PayPal-Profilen** haben willst, dann importiere keine Kontakte und verknüpfe keine optionalen Dritt-Konten (Abwägung: Komfortfunktionen wie schnelleres Finden von Kontakten/Open-Banking können entfallen).
- Wenn du **Datenlöschung** anstoßen willst, dann schließe das Konto und nutze die Lösch-Anfrageprozesse (Abwägung: gesetzliche Aufbewahrungspflichten verhindern sofortige Komplettlöschung).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | PayPal |
| Kategorie | Zahlungen |
| Website | https://www.paypal.com/de/home |
| Quellcode | https://github.com/paypal |
| Lizenz | Teilweise (Open-Source-SDKs; je Repo unterschiedlich, z.B. Apache-2.0, MIT) |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | yes |
| KYC erforderlich | yes |
| Zahlungsabwicklung | PayPal (eigener Zahlungsdienst; ggf. mit weiteren Dienstleistern/Partnern laut Privacy/Third-Party-List) |
| Jurisdiktion | Luxemburg (PayPal (Europe) S.à r.l. et Cie, S.C.A. für EWR) |
| Logs | unknown |
| Retention | Vertragsdaten: während der Vertragsbeziehung + 10 Jahre (weitere Aufbewahrung je Rechtspflicht/Compliance möglich) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.paypal.com/de/legalhub/paypal/privacy-full
- AGB/Terms: https://www.paypal.com/de/legalhub/paypal/useragreement-full
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben (keine öffentlich verlinkten Auditberichte; nur Nennung von Standards/Attestations auf Security-Seite)

**Daten-Notizen (kurz):**
PayPal nennt u.a. folgende Punkte in der Datenschutzerklärung:
- Verarbeitung von **Anmelde-/Kontaktdaten** (Name, Adresse, E-Mail, Telefon, ggf. Steuer-/Berufsdaten), **Identitätsdaten** (amtlicher Ausweis, Alter; je Dienst auch biometrische Daten zur Verifikation), **Zahlungs- & Transaktionsdaten**.
- Zusätzlich **Geräte-/Nutzungsdaten** und **Trackingdaten** (Cookies/Pixel etc.) inkl. abgeleiteter Profile/Schlussfolgerungen.
- **Aufbewahrung**: Vertragsdaten während der Beziehung und **danach 10 Jahre** (weitere Aufbewahrung möglich, z.B. AML/Compliance/Rechtsansprüche).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Anmelde-/Kontaktdaten (Name, Anschrift, E-Mail, Telefon), Identifizierungsdaten (z.B. amtlicher Ausweis/Alter; je nach Dienst), Zahlungsquellen-/Kartendaten/IBAN, Transaktions- und Kaufdetails, Geräte-/IP-/Browserdaten, Standort (je nach Freigabe), Cookies/Trackingdaten, abgeleitete Daten (z.B. Risikomodelle/Personalisierung).
- **Wofür:** Bereitstellung von Zahlungsdiensten, Betrugsprävention/Risikoanalysen, Compliance (u.a. KYC/AML), Support, Fehlerbehebung/Analysen, Marketing/Personalisierung (je nach Rechtsgrundlage/Einwilligung).
- **Weitergabe/Subprozessoren:** PayPal nennt Weitergaben u.a. an Dienstanbieter (IT/Hosting/Support), Betrugs- und Identitätsprüfstellen, Inkasso, Finanzinstitute (z.B. Open Banking), Partner/Händler/Transaktionsbeteiligte, Auskunfteien sowie Behörden je nach Pflicht/Anlass; zusätzlich existiert eine „Third parties“-Liste.
- **Drittlandtransfer:** Internationale Verarbeitung möglich; PayPal nennt externe Dienstanbieter u.a. zur Verarbeitung/Speicherung in den USA und verweist auf **Bindende Unternehmensregeln (BCR)** sowie **Standardvertragsklauseln**.
- **Zahlungsabwicklung/Payment Processor:** PayPal als Zahlungsdienst; für „Payment without a PayPal account“/markenlose Zahlungsdienste (z.B. Braintree) nennt PayPal ebenfalls Datenverarbeitung.
- **Kontakt/DSAR/DPA:** Datenschutzrechte über **„Daten & Datenschutz“** in den Kontoeinstellungen (App) oder per Kontakt; Datenschutzbeauftragter per Online-Kontakt/Postalisch (Luxemburg) genannt.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Ja: PayPal beschreibt Cookies/Tracking-Technologien inkl. Analyse- und Werbezwecken.
- **Abschaltbar?** Teilweise: Cookies können je nach Gerät/Browser blockiert/gelöscht werden; essenzielle Cookies können für Funktionen erforderlich sein.
- **Wo (Menüpfad):**
  - Browser: Cookie-Einstellungen / „Drittanbieter-Cookies“ einschränken
  - PayPal: Opt-outs/Abmeldelinks für Direktmarketing (laut Datenschutzerklärung) und ggf. Consent-Banner je Region

**Logs & Retention:**
- **Logging-Level:** unknown
- **Aufbewahrung:** Vertragsdaten während der Vertragsbeziehung und danach für weitere **zehn Jahre**; darüber hinaus nach geltendem Recht/AML sowie für Rechtsansprüche/Ermittlungen/Compliance.
- **Lösch-/Opt-out-Optionen:** PayPal nennt Datenlösch-Anfragen; nach Kontoschließung können Daten nach Ablauf der Aufbewahrungsfrist automatisch gelöscht werden (sofern keine weiteren Rechtsgründe bestehen).

**Abwägung am Punkt:** Weniger Tracking/Cookies kann einzelne Web-Flows einschränken; Tracking/Analytics erhöhen Metadatenrisiko (z.B. Nutzungsprofile über Websites/Devices).

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** PayPal beschreibt TLS/HTTPS-Transport und Datenverschlüsselung zum Schutz von Konto-/Transaktionsdaten.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA („Zweistufige Verifizierung“) per Authenticator-App; Passkeys (gerätegebunden, Screen-Lock Voraussetzung; biometrische Daten bleiben auf dem Gerät).
- **Recovery/Account-Wiederherstellung:** Passkey kann in den Sicherheitseinstellungen auf PayPal.com aus dem Konto entfernt werden; alternative Login-Methoden (z.B. Passwort/OTP) können weiterhin genutzt werden.
- **Vuln-Handling / Security-Kontakt:** PayPal nennt Bug-Bounty/Responsible-Research (HackerOne) und Security Center.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **2FA aktivieren (Authenticator-App)**  
   **Menüpfad (Web):** Einloggen → ⚙️ **Einstellungen** → **Sicherheit** → „Zweistufige Verifizierung“ → **Einrichten**  
   **Prüfen:** Status zeigt „aktiv“ (Hinweis: laut PayPal nur im Webbrowser konfigurierbar).
2) **Passkey nutzen, falls verfügbar**  
   **Prüfen:** Beim Login erscheint „Passkey erstellen“ oder Passkey ist in den Sicherheitseinstellungen sichtbar/verwaltbar.  
   **Stolperstein:** Passkeys erfordern ein Gerät mit aktivierter Bildschirmsperre und kompatiblem Browser/OS.
3) **Cookie-/Tracking-Exposure reduzieren (Browser-Ebene)**  
   **Prüfen:** Drittanbieter-Cookies eingeschränkt, „Site data“ nach Session löschen (wenn praktikabel).

**Stolpersteine:**
- PayPal kann **Identitäts- und Verifikationsdaten** (KYC) verarbeiten; je nach Nutzung können zusätzliche Nachweise angefordert werden (Abwägung: Compliance/Sicherheit vs. Datenumfang).
- **Open-Banking/3rd-Party-Zugriffe**: Wenn du Drittanbietern Zugriff erlaubst, entstehen zusätzliche Datenflüsse/Abhängigkeiten (Abwägung: Komfort vs. Angriffsfläche/Metadaten).

<details>
<summary>Profil B (Datensparsam)</summary>

- Keine Kontakte importieren (PayPal beschreibt „importierte Kontakte“ als optionale Datenkategorie).
- Keine optionalen Verknüpfungen von Dritt-Konten/„Open Banking“ aktivieren, wenn nicht nötig.
- Getrennte E-Mail-Adresse für Zahlungsdienste nutzen (Abwägung: zusätzlicher Account-/Inbox-Aufwand).
**Abwägung:** weniger Komfort (z.B. schnelleres Finden/Sync), ggf. mehr manuelle Verwaltung.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Separates Browser-Profil oder separate VM nur für Zahlungsdienste (Isolation von Cookies/Tracking).
- Netzwerk/Browser-Härtung: strikte Cookie-Policies, kein „Remember me“, regelmäßiges Löschen von Site-Daten.
- Reduziere Login-Angriffsfläche: Passkey + 2FA, Geräte-Sperre, minimale Geräteanzahl als „trusted“.
**Abwägung:** deutlicher Komfortverlust (häufigere Logins/2FA, mehr Reibung in Checkouts).

</details>

## Features
- Online & im Laden bezahlen, Geld senden/anfordern/empfangen (E-Geld)
- Zahlung ohne PayPal-Konto möglich (je nach Checkout/Integration)
- Zweistufige Verifizierung (2FA) per Authenticator-App (im Browser konfigurierbar)
- Passkeys (phishing-resistent), abhängig von Gerät/Browser/Verfügbarkeit
- Datenexport: „Daten & Datenschutz“ → Daten herunterladen

## Alternativen
- SEPA-Überweisung / SEPA Instant (Abwägung: weniger Plattformfunktionen, abhängig von Bank)
- Kredit-/Debitkarte direkt beim Händler (Abwägung: Händler erhält Kartendaten/Abwicklung direkt)
- Apple Pay / Google Pay (Abwägung: Geräte-Ökosystem + zusätzliche Anbieter-Metadaten)
- Barzahlung (Abwägung: offline möglich, nicht für Online-Käufe geeignet)

## Nicht gelöst / offene Punkte
- Technische Details zu serverseitigen Logs (z.B. Access-/IP-Logs) und deren Aufbewahrung sind nicht klar zusammengefasst.

## Quellen

- Datenexport: "„Daten & Datenschutz“ → Daten herunterladen
- SEPA-Überweisung / SEPA Instant (Trade-off: "weniger Plattform-Features, abhängig von Bank)
- Kredit-/Debitkarte direkt beim Händler (Trade-off: "Händler erhält Kartendaten/Abwicklung direkt)
- Apple Pay / Google Pay (Trade-off: "Geräte-Ökosystem + zusätzliche Anbieter-Metadaten)
- Barzahlung (Trade-off: "offline möglich, nicht für Online-Käufe geeignet)
- https://www.paypal.com/de/digital-wallet/paypal-consumer-fees
- [PayPal-Datenschutzerklärung](https://www.paypal.com/de/legalhub/paypal/privacy-full)
- [PayPal-Nutzungsbedingungen](https://www.paypal.com/de/legalhub/paypal/useragreement-full)
- [Statement on Cookies and Tracking Technologies](https://www.paypal.com/de/legalhub/paypal/cookie-full?locale.x=en_DE)
- [PayPal Secure-Technologie (Security Center)](https://www.paypal.com/de/security/learn-about-paypal-secure-technology)
- [2FA: Zweistufige Verifizierung aktivieren/deaktivieren (Help167)](https://www.paypal.com/de/cshelp/article/was-ist-die-zweistufige-verifizierung-und-wie-kann-ich-sie-aktivieren-oder-deaktivieren-help167)
- [Passkeys bei PayPal (Help997)](https://www.paypal.com/de/cshelp/article/wie-logge-ich-mich-mit-einem-passkey-bei-paypal-ein-help997)
- [Aufbewahrung & Löschung (Help345)](https://www.paypal.com/de/cshelp/article/wie-lange-speichert-paypal-meine-daten-und-kann-ich-deren-l%C3%B6schung-beantragen-help345)
- [Gebühren (PayPal DE)](https://www.paypal.com/de/digital-wallet/paypal-consumer-fees)
