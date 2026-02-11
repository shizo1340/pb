---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Whonix"
url: "/anbieter/whonix/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-02"
robots: "index,follow"
description: "Kurzprofil von Whonix (Kategorie: Betriebssysteme)."
provider: ""
name: "Whonix"
category: "Betriebssysteme"
website: "https://www.whonix.org/"
repo: "https://github.com/Whonix"
license: "Nicht angegeben (Freedom Software; verschiedene Komponenten-Lizenzen)"
policies: ""
privacy: "https://www.whonix.org/wiki/Privacy_Policy"
terms: "https://www.whonix.org/wiki/Terms_of_Service"
transparency: "https://www.whonix.org/wiki/Transparency"
warrant_canary: "https://www.whonix.org/wiki/Trust#Whonix_Warrant_Canary"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "ENCRYPTED SUPPORT LLC (Marshall Islands, laut Imprint)"
region: "eu"
logs: "minimal"
retention: "unknown"
retention_notes: "Unklar (nicht angegeben)"
data_notes: "Website-Logfiles/Usage Data laut Privacy Policy; für Nutzung des OS kein Konto nötig; Warrant Canary verfügbar."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Whonix ist ein Anbieter aus der Kategorie **Betriebssysteme**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du systemweit über Tor arbeiten willst und eine Trennung von „Netzwerk/Tor“ (Gateway) und „Apps“ (Workstation) per VM-Architektur akzeptierst (mehr Einrichtung & Ressourcenbedarf).
- **Weniger geeignet wenn:** du ein möglichst simples Live-System ohne VM-Einrichtung suchst oder dein Host-System/Hypervisor nicht ausreichend kontrolliert/gehärtet ist.
- **Wichtigster Abwägung:** **Isolation & Tor-Enforcement vs. Komplexität** (VM-Einrichtung, Hypervisor-Risiken, mehr Pflegeaufwand).

## Sofortmaßnahmen
- **Downloads verifizieren (Signatur prüfen):** reduziert Supply-Chain-Risiko bei Images.
- **Host↔VM-Sharing minimieren:** senkt Risiko von Host-Datei-/Clipboard-Leaks in die Workstation.
- **Updates konsequent in Gateway *und* Workstation einspielen:** reduziert Angriffsfläche durch bekannte Lücken.

## Entscheidungshilfe
- Wenn du **Tor für viele Anwendungen** ohne Einzelkonfiguration möchtest, dann nutze das Whonix-Design mit **Gateway + Workstation** (Abwägung: VM-Einrichtung und mehr Ressourcenbedarf).
- Wenn du **App-Isolation** gegenüber Netzwerk-/Tor-Komponenten brauchst, dann halte **Gateway und Workstation strikt getrennt** (Abwägung: mehr Betriebsaufwand, mehr VM-„Teile“).
- Wenn du **Zensurumgehung** brauchst, dann prüfe in der Whonix-Doku die **Bridge/Obfuscation-Optionen** (Abwägung: zusätzliche Komplexität und potenziell geringere Performance).
- Wenn du ein **Kosten-/Konto-minimiertes Einrichtung** willst, dann nutze Whonix ohne Registrierung/Konto (Abwägung: Support/Kommunikation läuft dann typischerweise über Doku/Foren statt individuellem Support).
- Wenn du **Nachweis-/Integritätsanforderungen** hast, dann nutze die in „Trust“ beschriebenen **Verifikationspfade** (Abwägung: mehr Zeitaufwand beim Einrichtung).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Whonix |
| Kategorie | Betriebssysteme |
| Website | https://www.whonix.org/ |
| Quellcode | https://github.com/Whonix |
| Lizenz | Nicht angegeben (Freedom Software; verschiedene Komponenten-Lizenzen) |
| Preismodell | mixed (Software frei nutzbar; Finanzierung u.a. über Spenden/Support) |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nutzung des OS: nicht relevant; Spenden/Support: laut Anbieter u.a. PayPal + Kryptowährungen (Details: Donate-Seite) |
| Jurisdiktion | ENCRYPTED SUPPORT LLC (Marshall Islands, laut Imprint) |
| Logs | minimal (Webserver-Logfiles/Usage Data laut Privacy Policy) |
| Retention | Unklar (nicht angegeben; automatische Löschung von Usage Data erwähnt, aber ohne fixe Frist) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://www.whonix.org/wiki/Privacy_Policy
- AGB/Terms: https://www.whonix.org/wiki/Terms_of_Service
- Transparency Report: https://www.whonix.org/wiki/Transparency
- Warrant Canary: https://www.whonix.org/wiki/Trust#Whonix_Warrant_Canary

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
- Website verarbeitet laut Privacy Policy **Usage Data / Logfiles** (u.a. IP-Adresse, ISP-Name, Referrer) und kann IP-Logging „in special circumstances“ aktivieren.
- Für die Nutzung des Betriebssystems ist **kein Konto** erforderlich (Web-Accounts/Foren sind separat).
- **Warrant Canary**: canary.txt + Signaturen sind laut „Trust“-Seite verfügbar.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Privacy Policy können bei Website-Nutzung **Personal Data** (z.B. E-Mail, Name, Telefonnummer, Adresse) sowie **Usage Data** (u.a. IP-Adresse, ISP-Name, Referrer) anfallen.
- **Wofür:** Betrieb/Absicherung der Web-Services, Statistik/Auswertung (aggregiert) und Schutz vor Missbrauch/Angriffen (Privacy Policy).
- **Weitergabe/Subprozessoren:** Privacy Policy beschreibt den Einsatz von „third-party service providers/contractors“ und nennt DPAs als Maßnahme, **ohne öffentliche Liste** konkreter Subprozessoren.
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Nutzung des OS: nicht relevant; Spenden/Payments: laut Donate-Seite u.a. PayPal und Kryptowährungen.
- **Kontakt/DSAR/DPA:** Privacy Policy enthält Betroffenenrechte/Anfragen (DSAR) und beschreibt Rechte nach DSGVO (für EU).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Für die **Website**: Webserver-Logs/Analytics-artige Auswertung wird in der Privacy Policy beschrieben (Usage Data/Logfiles). Für das **Betriebssystem**: keine allgemeine Telemetrie-Übersicht als „Schalter“ angegeben.
- **Abschaltbar?** Website-Logs: nicht als Opt-out beschrieben (funktional bedingt). OS-Telemetrie: Nicht angegeben.
- **Wo (Menüpfad):** Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** Unklar (Privacy Policy nennt automatische Löschung von Usage Data und getrennte Speicherung anonymisierter Logdaten, aber keine feste Frist)
- **Lösch-/Opt-out-Optionen:** DSAR/Betroffenenrechte in Privacy Policy beschrieben; für reine Usage Data ohne Identitätsbezug ist eine direkte Zuordnung laut Policy nicht vorgesehen.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Nicht angegeben (Betriebssystem-Projekt, kein klassischer Cloud-Dienst).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Nicht angegeben / nicht zutreffend (kein Pflichtkonto für OS-Nutzung).
- **Recovery/Account-Wiederherstellung:** Betrifft primär dein Host-/VM-Einrichtung; Whonix beschreibt Verifikation/Trust (Signaturen, Canary) und Update-Mechanismen in der Doku.
- **Vuln-Handling / Security-Kontakt:** Sicherheitslücken sollen laut Whonix-Doku **privat** gemeldet werden; Kontakt via E-Mail mit **OpenPGP** wird bereitgestellt (Contact/Reporting Bugs).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Download-Integrität prüfen** (Signatur/Trust-Doku).  
   **Prüfen:** Signaturprüfung ist erfolgreich; Image-Quelle ist die offizielle Download-Seite.
2) **Gateway/Workstation strikt getrennt betreiben** (keine „Abkürzungen“ am Netzwerk).  
   **Prüfen:** Workstation hat keinen direkten Clearnet-Zugang, sondern nur über das Gateway.
3) **Regelmäßig Updates einspielen** (Gateway *und* Workstation).  
   **Prüfen:** Updates laufen ohne Fehler durch; Neustart/Service-Status ist sauber.

**Stolpersteine:**
- VM-Komfortfunktionen (Shared Clipboard, Shared Folders, „Drag & Drop“) erhöhen das Risiko von Host↔VM-Leaks (Abwägung: Komfort vs. Isolation).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze Whonix ohne Registrierung (keine Forum-/Wiki-Accounts, wenn nicht nötig).
- Vermeide zusätzliche „Identitätsanker“ in Apps innerhalb der Workstation (z.B. dauerhafte Logins, personenbezogene Profile).
- Reduziere Exfiltrationspfade zwischen Host und Workstation (keine Shared Folders/Clipboard; Austausch nur über bewusst gewählte Wege).
**Abwägung:** weniger Komfort beim Datenaustausch und ggf. weniger „schneller Support“ über Accounts.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze eine Hypervisor-Umgebung mit starker Trennung (z.B. Qubes-Whonix) und arbeite mit Disposable-Workstations, wo passend.
- Trenne Rollen: unterschiedliche Workstations für unterschiedliche Identitäten/Workflows (Stream-Isolation ist nicht dasselbe wie „menschliche“ Rollen-Trennung).
- Nutze zusätzliche Verifikation (z.B. Warrant Canary prüfen + Signaturen konsequent verifizieren).
**Abwägung:** deutlich mehr Aufwand, höhere Komplexität und mehr Fehlerpotenzial durch Bedienfehler.

</details>

## Features
- Gateway/Workstation-Trennung (VM-Architektur) zur Trennung von Tor/Netzwerk und Anwendungen.
- Systemweiter Tor-Verkehr („Torification“) inkl. Fail-Closed-Prinzip (Traffic über Tor oder blockiert).
- Preinstalled/Preconfigured Apps laut Feature-Liste (u.a. Tor Browser, Thunderbird, OnionShare).
- Freedom Software / Open Source (Quellcode öffentlich, siehe Repo/Docs).
- Trust/Verifikation: Warrant Canary (canary.txt + Signaturen) und Doku zur Image-Verifikation.

## Alternativen
- **Tails:** Live-System mit Fokus auf „nichts bleibt zurück“ (Abwägung: weniger Persistenz/Alltagstauglichkeit vs. Amnesie).
- **Qubes OS:** starke Isolation über Domains/VMs (Abwägung: hoher Ressourcenbedarf und höhere Komplexität).
- **Kicksecure:** Härtung-Ansatz ohne Tor-Zwang (Abwägung: anderer Schwerpunkt; Tor-Nutzung eher „optional“ statt systemweit erzwungen).
- **Debian + Tor Browser (manuell):** weniger VM-Einrichtung, mehr Eigenkonfiguration (Abwägung: weniger systemweite Leak-Absicherung, mehr Handarbeit).

## Nicht gelöst / offene Punkte
- Öffentliche Subprozessoren-Liste ist in der Privacy Policy nicht als konkrete Liste auffindbar.
- Retention-Zeiträume für Webserver-Logs/Usage-Data sind nicht als feste Frist angegeben.
- „Lizenz als einzelne SPDX-ID für das Gesamtprojekt“ ist nicht eindeutig auf einer zentralen Lizenzseite benannt (komponentenweise unterschiedlich).

## Quellen

- https://github.com/Whonix
- [Whonix Privacy Policy](https://www.whonix.org/wiki/Privacy_Policy)
- [Whonix Terms of Service](https://www.whonix.org/wiki/Terms_of_Service)
- [Whonix Imprint](https://www.whonix.org/wiki/Imprint)
- [Whonix Features](https://www.whonix.org/wiki/Features)
- [Placing Trust in Whonix (inkl. Warrant Canary)](https://www.whonix.org/wiki/Trust)
- [Whonix Contact (Security Reporting, OpenPGP)](https://www.whonix.org/wiki/Contact)
- [Bug Reports / Security Vulnerabilities Reporting](https://www.whonix.org/wiki/Reporting_Bugs)
- [Donate / Payments](https://www.whonix.org/wiki/Donate)
- [Whonix Project Transparency](https://www.whonix.org/wiki/Transparency)
- [Whonix Copyright / Trademark / Contribution Conditions](https://www.whonix.org/wiki/Copyright)
- [Whonix GitHub Organization](https://github.com/Whonix)
