---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Wise"
url: "/anbieter/wise/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-12"
robots: "index,follow"
description: "Kurzprofil von Wise (Kategorie: Zahlungen)."
provider: ""
name: "Wise"
category: "Zahlungen"
website: "https://wise.com/"
repo: "https://github.com/transferwise"
license: "Nicht angegeben"
policies: ""
privacy: "https://wise.com/de/legal/privacy-notice-personal"
terms: "https://wise.com/en/legal/terms-and-conditions"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "partial"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "yes"
kyc_required: "yes"
jurisdiction: "Wise PLC (UK); EU/EEA: Wise Europe SA (Belgien)"
region: "uk"
logs: "unknown"
retention: "verylong"
retention_notes: "In der Regel 5–10 Jahre nach Kontoschließung (regulatorisch)"
retention_max_days: "3650"
data_notes: "Regulierter Zahlungsdienst: Identitäts- und Transaktionsdaten fallen für AML/Fraud-Checks an; Website/App nutzt Cookies/Pixel-Tags und kann Nutzungs- & Geräteinformationen verarbeiten."
features: ""
alternatives: ""
payment_processors: "Nicht angegeben"
sources: ""
---
## Kurzprofil

Wise ist ein Anbieter aus der Kategorie **Zahlungen**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du internationale Zahlungen/Wechselkurse über einen regulierten Anbieter mit App/Web-Zugang abwickeln willst und KYC/Compliance akzeptierst.
- **Weniger geeignet wenn:** du Zahlungen ohne Konto/Identitätsprüfung nutzen möchtest oder möglichst kurze Datenaufbewahrung benötigst.
- **Wichtigster Abwägung:** Regulatorik (KYC, AML/Fraud-Prüfungen, Aufbewahrung) vs. Datensparsamkeit.

## Sofortmaßnahmen
- **Passkeys als 2-Stufen-Verifizierung aktivieren**, um Phishing-/SIM-Swap-Risiko zu senken.
- **Biometrische Anmeldung aktivieren**, damit die App nicht nur über „Geräteentsperrung“ offen bleibt.
- **„Überall abmelden“ nutzen**, wenn du ein Gerät verloren hast oder eine Sitzung verdächtig wirkt.

## Entscheidungshilfe
- Wenn du ein **reguliertes Zahlungskonto** nutzt, dann plane **Identitätsprüfung (KYC) und längere Datenaufbewahrung** ein (Abwägung: Compliance vs. weniger Daten).
- Wenn du **weniger Metadaten über Kartenzahlungen** möchtest, dann nutze (wo möglich) **Banküberweisung statt Karte** (Abwägung: Geschwindigkeit/Komfort vs. zusätzliche Zahlungsmetadaten).
- Wenn du **Web-Tracking reduzieren** willst, dann setze Cookies im Banner restriktiv bzw. blocke Tracking-Skripte (Abwägung: mögliche Einschränkungen bei Login/UX).
- Wenn du **Zahlungen an Kontakte** schnell starten willst, dann aktiviere Kontakt-/Auffindbarkeitsfunktionen (Abwägung: mehr soziale Metadaten vs. Komfort).
- Wenn du **Account-Übernahme-Risiko** minimieren willst, dann nutze **Passkey/2-Stufen-Verifizierung + biometrische App-Sperre** (Abwägung: Recovery/Device-Wechsel etwas aufwendiger).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Wise |
| Kategorie | Zahlungen |
| Website | https://wise.com/ |
| Quellcode | https://github.com/transferwise |
| Lizenz | Nicht angegeben |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | yes |
| KYC erforderlich | yes |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | Wise PLC (UK); EU/EEA: Wise Europe SA (Belgien) |
| Logs | unknown |
| Retention | In der Regel 5–10 Jahre nach Kontoschließung (regulatorisch) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://wise.com/de/legal/privacy-notice-personal
- AGB/Terms: https://wise.com/en/legal/terms-and-conditions
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- SOC 2 (laut Privacy Notice)
- PCI-DSS (laut Privacy Notice)

**Daten-Notizen (kurz):**
Regulierter Zahlungsdienst: Identitäts- und Transaktionsdaten fallen für AML/Fraud-Checks an; Website/App nutzt Cookies/Pixel-Tags und kann Nutzungs- & Geräteinformationen verarbeiten.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** u.a. Stammdaten (Name, Adresse, E-Mail, Telefonnummer), Identitäts-/Verifizierungsdaten (je nach KYC), Transaktions- und Kontodaten, Geräte-/Nutzungsdaten (z.B. IP-Adresse, Gerätekennungen), Cookies/ähnliche Technologien sowie (optional) Kontakte/Standort je nach App-Berechtigung.
- **Wofür:** Bereitstellung der Dienste, Identitätsprüfung/KYC, Betrugsprävention und Sicherheit, gesetzliche Pflichten, Produktverbesserung/Analyse, Kommunikation/Support sowie (je nach Einstellungen) Marketing/Personalisierung.
- **Weitergabe/Subprozessoren:** Weitergabe an Dienstleister/Partner (z.B. Hosting/IT, Verifizierungsanbieter, Fraud-Dienstleister), Empfänger/Finanzinstitute sowie Behörden, wenn erforderlich; konkrete Dritte werden nicht als zentrale Gesamt-Liste veröffentlicht, es gibt aber eine Cookie-Partner-Liste.
- **Drittlandtransfer:** Internationale Übermittlungen möglich; Wise nennt u.a. Angemessenheitsbeschlüsse, EU-Standardvertragsklauseln (SCC) und weitere rechtmäßige Transfermechanismen.
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (Zahlungen/Transfers erfolgen über Wise-Infrastruktur und beteiligte Finanzpartner; konkrete Acquirer/PSPs werden nicht als zentrale Liste benannt).
- **Kontakt/DSAR/DPA:** Datenschutz-Anfragen über privacy@wise.com; laut Privacy Notice können Betroffene eine auf sie zugeschnittene Empfängerliste anfordern.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Ja (Website/App nutzen Cookies und ähnliche Technologien; E-Mail-Pixel/Web-Beacons können Kampagnenmessung ermöglichen).
- **Abschaltbar?** Teilweise (Cookie-Einwilligung/Präferenzen; essenzielle Cookies bleiben aktiv).
- **Wo (Menüpfad):** Website → Cookie-Banner/Cookie-Einstellungen; Details: Cookie-Richtlinie.

**Logs & Retention:**
- **Logging-Level:** unknown (serverseitige Log-Details nicht als eigener „Logging“-Standard veröffentlicht).
- **Aufbewahrung:** In der Regel 5–10 Jahre nach Kontoschließung (regulatorisch; laut Privacy Notice).
- **Lösch-/Opt-out-Optionen:** Löschung erfolgt laut Wise automatisiert, sobald Daten nicht mehr erforderlich sind; Löschwünsche können eingeschränkt sein, wenn gesetzliche Aufbewahrungspflichten gelten.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Wise beschreibt verschlüsselte Kommunikation zwischen Client und Wise-Systemen sowie verschlüsselte Speicherung, wenn Daten nicht aktiv genutzt werden (keine E2E-Aussage).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2-Stufen-Verifizierung inkl. Passkeys (laut Help Center) verfügbar.
- **Recovery/Account-Wiederherstellung:** Passwort-Reset über Account-Flow (E-Mail/Verifizierung); bei Verlust von Zugriffsmöglichkeiten ist Support-Prozess vorgesehen.
- **Vuln-Handling / Security-Kontakt:** Responsible Disclosure + Bug-Bounty-Programm wird genannt; veröffentlichter Responsible-Disclosure-Flow vorhanden.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **2-Stufen-Verifizierung aktivieren (idealerweise Passkey)**  
   **Wo:** App/Web → *Settings* → *Security and privacy* → *Two-step login* / *Passkeys* (laut Help Center).  
   **Prüfen:** Konto zeigt Passkey/2-Stufen-Verifizierung als aktiv; Test-Login auf neuem Gerät fordert 2. Faktor.
2) **Biometrische Authentifizierung aktivieren**  
   **Wo:** App → *Settings* → *Security and privacy* → *Biometrics* (laut Help Center).  
   **Prüfen:** App verlangt Face/Touch/biometrische Bestätigung beim Öffnen oder bei sensiblen Aktionen.
3) **Sitzungen kontrollieren & „Überall abmelden“ kennen**  
   **Wo:** App/Web → *Settings* → *Security and privacy* → *Log out everywhere* (laut Help Center).  
   **Prüfen:** Nach „Überall abmelden“ sind bestehende Sessions beendet; erneutes Login nötig.

**Stolpersteine:**
- KYC/Compliance und Aufbewahrungspflichten sind bei regulierten Zahlungsdiensten nicht optional (Abwägung: rechtliche Anforderungen vs. Datensparsamkeit).

<details>
<summary>Profil B (Datensparsam)</summary>

- Cookie-Einstellungen möglichst restriktiv setzen; Website-Nutzung ggf. in separatem Browser-Profil (Abwägung: Komfort/Personalisierung vs. weniger Tracking).
- App-Berechtigungen restriktiv vergeben (z.B. Kontakte/Standort nur, wenn du die Funktion wirklich nutzt) (Abwägung: Schnell-Auswahl von Empfängern vs. weniger soziale Metadaten).
- „Auffindbarkeit“ über WiseTag/E-Mail/Telefon in den Einstellungen prüfen und bei Bedarf reduzieren (Abwägung: leichter gefunden werden vs. weniger Auffindbarkeits-Metadaten).

**Abwägung:** mehr Eigenkontrolle und ggf. weniger Komfort bei Empfänger-Auswahl/Onboarding.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Finanz-App auf getrenntem Gerät/Profil nutzen; keine unnötigen Apps/Browser-Erweiterungen parallel (Abwägung: hoher Aufwand vs. geringere Angriffsfläche).
- Passkey bevorzugen und, wenn unterstützt, mit Hardware-Sicherheitsmechanismen des Geräts kombinieren (Abwägung: Gerätewechsel/Recovery kann komplexer werden).
- Netzwerk-/DNS-Blocking nur gezielt und testweise, weil Auth/Transfers sonst brechen können (Abwägung: weniger Drittanfragen vs. Funktionsrisiko).

**Abwägung:** deutlicher Komfortverlust, höhere Komplexität.

</details>

## Features
- Multi-Währungs-Konto (Empfangen/Halten/Wechseln)
- Internationale Überweisungen
- Karte (Debit) und Kartenzahlungen (je nach Land)
- Auffindbarkeit über WiseTag/E-Mail/Telefon (optional steuerbar)
- 2-Stufen-Verifizierung inkl. Passkeys (laut Help Center)

## Alternativen
- Revolut (Zahlungen/Finanzen-App; Abwägung: andere Konto-/KYC-Datenflüsse)
- PayPal (Online-Zahlungen; Abwägung: Konto- und Händler-/Transaktionsmetadaten)
- Klassische Banküberweisung (Abwägung: Bankbindung vs. weniger zusätzliche App-Features)

## Nicht gelöst / offene Punkte
- Eine zentrale, öffentliche Gesamt-Liste aller Subprozessoren/Dienstleister (über die Cookie-Partner hinaus) ist nicht als eigene Seite auffindbar.

## Quellen

- Revolut (Zahlungen/Finanzen-App; Trade-off: "andere Konto-/KYC-Datenflüsse)
- PayPal (Online-Zahlungen; Trade-off: "Konto- und Händler-/Transaktionsmetadaten)
- Klassische Banküberweisung (Trade-off: "Bankbindung vs. weniger zusätzliche App-Features)
- [Personal Customer Privacy Notice (DE)](https://wise.com/de/legal/privacy-notice-personal)
- [Terms & Conditions](https://wise.com/en/legal/terms-and-conditions)
- [Cookie-Richtlinie (DE)](https://wise.com/de/legal/cookie-policy)
- [Security / Safety & security](https://wise.com/gb/security)
- [Responsible Disclosure](https://wise.com/responsible-disclosure)
- [Help Center: "Log out everywhere](https://wise.com/help/articles/2946453/how-do-i-log-out-everywhere)
- [Personal Customer Privacy Notice (DE)](https://wise.com/de/legal/privacy-notice-personal)
- [Terms & Conditions](https://wise.com/en/legal/terms-and-conditions)
- [Cookie-Richtlinie (DE)](https://wise.com/de/legal/cookie-policy)
- [Security / Safety & security](https://wise.com/gb/security)
- [Responsible Disclosure](https://wise.com/responsible-disclosure)
- [Help Center: How do I use a passkey?](https://wise.com/help/articles/8ne0PhuBSXNFRbDUfWUcUs/how-do-i-use-a-passkey)
- [Help Center: How do I set up biometric authentication?](https://wise.com/help/articles/2935453/how-do-i-set-up-biometric-authentication)
- [Help Center: Why do I keep being logged out?](https://wise.com/help/articles/2932392/why-do-i-keep-being-logged-out)
- [Help Center: Log out everywhere](https://wise.com/help/articles/2946453/how-do-i-log-out-everywhere)
