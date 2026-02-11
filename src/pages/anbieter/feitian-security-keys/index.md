---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Feitian Security Keys"
url: "/anbieter/feitian-security-keys/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-13"
robots: "index,follow"
description: "Kurzprofil von Feitian Security Keys (Kategorie: Security-Key)."
provider: ""
name: "Feitian Security Keys"
category: "Security-Key"
website: "https://www.ftsafe.com/Products/FIDO"
repo: "https://github.com/FeitianTech"
license: "Nicht angegeben"
policies: ""
privacy: "https://www.ftsafe.com/Support/privacyNotice"
terms: "https://www.ftsafe.com/Support/termsConditions"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "partial"
self_host_possible: "no"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "China (Beijing, laut Privacy Notice/Terms)"
region: "other"
logs: "minimal"
retention: "verylong"
retention_notes: "Website-Logs bis zu 1 Jahr; sonstige personenbezogene Daten bis zu 3 Jahre (laut Privacy Notice)"
retention_max_days: "1095"
data_notes: "Nutzung der Security Keys benötigt typischerweise kein Anbieter-Konto. Laut Privacy Notice fallen bei Website-/Store-Nutzung u.a. Kontakt-, Bestell- und Log-Daten an. Biometrische BioPass-Modelle beschreiben die Speicherung/Absicherung von Fingerabdruckdaten im eingebetteten Security-Chip."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Feitian Security Keys ist ein Anbieter aus der Kategorie **Security-Key**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du FIDO2/WebAuthn oder FIDO U2F als physischen 2FA-/Passkey-Faktor nutzen willst (USB/NFC je nach Modell) und dafür keinen Anbieter-Account im Alltag brauchst.
- **Weniger geeignet wenn:** du eine vollständig dokumentierte Subprozessoren-Liste/DPA brauchst oder vendor-spezifische Management-Tools strikt vermeiden willst (z.B. bei biometrischen Modellen).
- **Wichtigster Abwägung:** Hardware-2FA reduziert Remote-Account-Takeover-Risiken, verlangt aber **physische Backup-Strategie** (Zweitschlüssel, Verlust-Szenarien) und ggf. zusätzliche Hersteller-Tools für Sonderfunktionen.

## Sofortmaßnahmen
- **Setze einen FIDO2-PIN** und erzwinge „User Verification“, wo möglich (reduziert Risiko bei kurzzeitigem Zugriff auf den Schlüssel).
- **Registriere mindestens zwei Schlüssel** (Haupt- & Backup-Schlüssel) bei kritischen Accounts (Abwägung: mehr Einrichtung-Aufwand, dafür weniger Lockout-Risiko).
- **Teste PIN-/Reset-Workflows auf deinem Zielsystem** (Windows/macOS/Linux), bevor du dich darauf verlässt (Abwägung: einmaliger Aufwand, spart Ausfälle im Ernstfall).

## Entscheidungshilfe
- Wenn du **Passkeys/Hardware-2FA** ohne Anbieter-Konto willst, dann nutze Security Keys im Browser/OS-Flow (Abwägung: Recovery hängt von Backup-Schlüssel/Account-Recovery des jeweiligen Dienstes ab).
- Wenn du **NFC am Smartphone** brauchst, dann wähle ein Modell mit NFC (Abwägung: mehr Angriffsfläche durch zusätzliche Schnittstelle, dafür weniger Adapter/USB-Zwang).
- Wenn du **biometrische Verifikation** statt PIN möchtest, dann nutze BioPass-Modelle (Abwägung: zusätzliche Sensorik/Tools, dafür lokale Benutzerbindung am Gerät).
- Wenn du **Management ohne Hersteller-Tools** willst, dann nutze OS-/Browser-Managementpfade (Abwägung: nicht jede Sonderfunktion ist dort verfügbar).
- Wenn du **Windows 11 24H2** einsetzt und PIN-Management streikt, dann nutze die dokumentierte Workaround-Anleitung (Abwägung: eventuell eingeschränkte Admin-/PIN-Aktionen bis Microsoft/Tooling-Fix).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Feitian Security Keys |
| Kategorie | Security-Key |
| Website | https://www.ftsafe.com/Products/FIDO |
| Quellcode | https://github.com/FeitianTech |
| Lizenz | Nicht angegeben |
| Preismodell | paid |
| Free Tier | no |
| Open Source | partial |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | China (Beijing, laut Privacy Notice/Terms) |
| Logs | minimal |
| Retention | Website-Logs bis zu 1 Jahr; sonstige personenbezogene Daten bis zu 3 Jahre (laut Privacy Notice) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.ftsafe.com/Support/privacyNotice
- AGB/Terms: https://www.ftsafe.com/Support/termsConditions
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
- Laut Privacy Notice werden bei Website-/Store-Nutzung u.a. Kontakt-/Bestell-/Zahlungsdaten sowie Website-Logdaten (inkl. IP-Adresse) verarbeitet; Logdaten zur Website-Sicherheit werden „nicht länger als ein Jahr“ gespeichert, andere Zwecke „nicht länger als drei Jahre“.  
- Für BioPass (biometrische FIDO-Serie) wird beschrieben, dass der eingebettete Security-Chip Fingerabdruckdaten verschlüsselt speichert und schützt (Ziel: keine Ableitung des Fingerabdruckbilds aus gespeicherten Daten).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - In Formularen/Registrierungen/Newslettern: Name, E-Mail, Telefonnummer, Präferenzen/Abos.  
  - Website-Logdaten: IP-Adresse, besuchte Seiten, Browsertyp/-settings, Zeitstempel, Nutzung.  
  - Gerätedaten (abhängig vom Device/Settings): Gerätetyp, OS, Einstellungen, eindeutige Geräte-IDs.  
  - Bei Online-Kauf: Name, Lieferadresse, Telefonnummer, E-Mail, Zahlungsinfos, Bestellhistorie, gekauftes Produkt.
- **Wofür:** Profiling/Personalisierung von Inhalten/Angeboten, Kommunikation (Newsletter/Events), Kaufabwicklung/Service, Marketing, IT-Systeme, Website-Sicherheit/Abuse-Prevention, anonyme Nutzungsstatistiken.
- **Weitergabe/Subprozessoren:** Externe Partner für IT/Marketing/Analyse/Administration können Zugriff erhalten; Partner können innerhalb oder außerhalb EU/EWR sitzen; es wird ein Vertrag mit Dienstleistern erwähnt, aber keine öffentliche Liste genannt.
- **Drittlandtransfer:** Möglich (Partner innerhalb/außerhalb EU/EWR; Anbieter-Adresse in Beijing/China laut Privacy Notice).
- **Zahlungsabwicklung/Payment Processor:** Nicht konkret benannt (Privacy Notice nennt „payment information“, ohne Zahlungsdienstleister zu spezifizieren).
- **Kontakt/DSAR/DPA:** Kontakt per E-Mail (World.Sales@ftsafe.com) und Postadresse laut Privacy Notice.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Für Hardware-Schlüssel nicht zutreffend (keine Telemetrie im Schlüssel dokumentiert); Website nutzt Cookies und Logdaten.
- **Abschaltbar?** Cookies i.d.R. über Browser/Consent; genaue Einstellpfade abhängig von Cookie-Banner (nicht detailliert dokumentiert).
- **Wo (Menüpfad):** Website-Footer → „Cookies“ / Browser → Cookie-Einstellungen.

**Logs & Retention:**
- **Logging-Level:** minimal (Website-Logdaten u.a. IP-Adresse, Zugriffszeit, Nutzung laut Privacy Notice).
- **Aufbewahrung:** Website-Logdaten „nicht länger als ein Jahr“; andere Zwecke „nicht länger als drei Jahre“ (laut Privacy Notice).
- **Lösch-/Opt-out-Optionen:** Newsletter-Opt-out per Link in E-Mails; weitere Lösch-/Auskunftsrechte via Kontakt laut Privacy Notice.

**Abwägung am Punkt:** Weniger Website-/Marketing-Tracking reduziert Metadaten, kann aber Komfortfunktionen (Personalisierung, Support-Nachvollziehbarkeit) einschränken.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Security Keys nutzen FIDO-Authentisierung (FIDO2/WebAuthn und/oder FIDO U2F je nach Modell); BioPass beschreibt einen eingebetteten Security-Chip, der Fingerabdruckdaten „encrypt, store and protect“ soll.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (für FIDO-Schlüssel typischerweise nicht als einstellbarer KDF-Parameter beschrieben).
- **MFA/2FA/Passkeys/Hardware-Keys:** FIDO2/WebAuthn und FIDO U2F (modellabhängig), teils zusätzliche Modi wie HOTP/TOTP, PIV, WBF (modellabhängig).
- **Recovery/Account-Wiederherstellung:** Kein Anbieter-Recovery wie bei Cloud-Accounts; Recovery erfolgt über Backup-Schlüssel oder Account-Recovery des jeweiligen Dienstes.
- **Vuln-Handling / Security-Kontakt:** Es existiert eine veröffentlichte Stellungnahme zu einer Side-Channel-Thematik; ein klarer Responsible-Disclosure-Prozess als eigene Seite ist nicht ersichtlich.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Schlüssel als 2FA/Passkey registrieren** (bei kritischen Diensten zusätzlich Backup-Schlüssel registrieren).  
   **Prüfen:** Dienst zeigt den Security Key als registrierte Methode (und Backup-Schlüssel separat).
2) **FIDO2-PIN setzen** (und bei biometrischen Modellen Fingerabdruck sauber enrolen).  
   **Prüfen (Windows):** *Einstellungen → Konten → Anmeldeoptionen → Sicherheitsschlüssel → Verwalten* zeigt PIN-Status/Optionen.  
   **Prüfen (Chrome):** Security-Key-Verwaltung öffnen und PIN setzen/ändern, falls angeboten.
3) **PIN-/Reset-Workflow testen** (vor dem Ernstfall).  
   **Prüfen:** PIN-Änderung/Reset funktioniert auf dem Zielsystem (Windows/macOS/Linux); bei Windows 11 24H2 ggf. dokumentierten Workaround anwenden.

**Stolpersteine:**
- Verlust ohne Backup-Schlüssel führt oft zu Account-Recovery über den jeweiligen Dienst (Abwägung: physische Sicherheit vs. Lockout-Risiko).
- Windows 11 24H2: dokumentierte PIN-Management-Probleme können Admin-Aktionen blockieren (Abwägung: OS-Update-Kompatibilität vs. zentraler PIN-Verwaltungsflow).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze **OS-/Browser-Management** statt zusätzlicher Hersteller-Tools, soweit möglich (reduziert zusätzliche Software-Oberfläche).
- Vermeide Newsletter/Marketing-Opt-ins bei Website-Interaktion; nutze Opt-out-Link, falls schon aktiviert.
- Kaufe/verwende einen **Zweitschlüssel als Offline-Backup** und lagere ihn getrennt.
**Abwägung:** weniger Komfort (z.B. bei Spezialfunktionen), dafür weniger zusätzliche Datenflüsse/Software-Komplexität.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne **Registrierungs-Device** (Admin) und **Alltags-Device** (Nutzung), sofern praktikabel.
- Nutze biometrische Verifikation oder PIN + strikte physische Aufbewahrung (z.B. Key nicht dauerhaft am Laptop lassen).
- Für Linux: udev-Regeln/USB-Permissions nur so weit öffnen wie nötig und nach Änderung verifizieren (Hardware-Token sind sonst schwer nutzbar).  
**Abwägung:** deutlich mehr Betriebsaufwand; Risiko von Self-Lockout steigt ohne saubere Backup- und Testprozesse.

</details>

## Features
- FIDO2/WebAuthn & FIDO U2F (je nach Modell)
- USB-A / USB-C; teils NFC (je nach Modell)
- Biometrische Modelle (Fingerprint) verfügbar
- PIN-Management über Windows/Chrome sowie Hersteller-Tools (modellabhängig)
- Zusatzfunktionen bei bestimmten Modellen: HOTP/TOTP, PIV, WBF (modellabhängig)

## Alternativen
- YubiKey (Abwägung: anderes Anbieter-Ökosystem/Management, andere Policies/Verfügbarkeit)
- Nitrokey (Abwägung: anderer Fokus, anderes Produkt-/Update-/Tooling-Set)
- SoloKeys (Abwägung: anderer Schwerpunkt, teils Open-Source-Fokus/DIY-Nähe)
- Google Titan Security Key (Abwägung: Vertrieb/Ökosystem-Fokus)

## Nicht gelöst / offene Punkte
- Keine öffentliche Subprozessoren-Liste/DPA-Seite gefunden (nur generische Partnerbeschreibung).
- Aussagen zu Telemetrie/Analytics der Management-Tools sind nicht eindeutig dokumentiert.
- Responsible-Disclosure-Prozess als eigene Policy/SECURITY.md nicht klar auffindbar.

## Quellen

- YubiKey (Trade-off: "anderes Hersteller-Ökosystem/Modelle/Policies)
- Nitrokey (Trade-off: "anderes Angebot/Verfügbarkeit/Management-Tools)
- SoloKeys (Trade-off: "anderer Fokus, teils Open-Source-Schwerpunkt)
- Google Titan Security Key (Trade-off: "anderes Ökosystem/Vertrieb)
- https://github.com/FeitianTech
- [FIDO Security Keys (Produktübersicht)](https://www.ftsafe.com/Products/FIDO)
- [Privacy Notice](https://www.ftsafe.com/Support/privacyNotice)
- [Terms Of Use](https://www.ftsafe.com/Support/termsConditions)
- [BioPass FIDO® Series (Biometric)](https://www.ftsafe.com/Products/FIDO/Bio)
- [Security Key Einrichtung Guide](https://fido.ftsafe.com/setupsecuritykey/)
- [FEITIAN SK Manager Tool – User Manual](https://fido.ftsafe.com/feitian-sk-manager-tool-user-manual/)
- [Workaround: FIDO PIN Management Issue on Windows 11 24H2](https://www.ftsafe.com/about/press_release/How_to_work_around_FIDO_PIN_management_issue_on_Windows_11_24H2)
- [Company Statement on Side-Channel Vulnerability](https://www.ftsafe.com/about/press_release/Company_Statement_on_Side-Channel_Vulnerability)
- [FeitianTech (GitHub)](https://github.com/FeitianTech)
