---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / 1Password"
url: "/anbieter/1password/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-06"
robots: "index,follow"
description: "Kurzprofil von 1Password (Kategorie: Passwort-Manager)."
provider: ""
name: "1Password"
category: "Passwort-Manager"
website: "https://1password.com/"
repo: "https://github.com/1Password"
license: "LicenseRef-Proprietary"
policies: ""
privacy: "https://1password.com/legal/privacy"
terms: "https://1password.com/legal/terms-of-service"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "paid"
free_tier: "no"
open_source: "partial"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "Nicht angegeben"
kyc_required: "Nicht angegeben"
jurisdiction: "Kanada (Toronto, Ontario)"
region: "ca"
logs: "some"
logs_notes: "Service-/Diagnose-Daten inkl. Server logs, IP & Auth-Details (laut Privacy Policy)"
retention: "mid"
retention_notes: "Allgemein: so lange wie nötig; Telemetry-Rohdaten: 21 Tage (laut Telemetry-Doku)"
retention_max_days: "21"
data_notes: "Tresor-/„Secure Data“ (inkl. Item-Namen/Metadaten) ist Ende-zu-Ende verschlüsselt; 1Password kann diese Daten nicht im Klartext lesen. Zusätzlich fallen „Service Data“ (Kontoverwaltung/Abrechnung/Administration) und „Diagnostic Data“ (u.a. Geräte-/App-/OS-Infos, Server-Logs, IP, Auth-Details, Crash-/Performance-Daten) an. Produkt-Usage/Telemetry ist optional (bei Teams/Business steuerbar; kann automatisch aktiv sein und ist dann admin-deaktivierbar)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

1Password ist ein Anbieter aus der Kategorie **Passwort-Manager**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen Abo-basierten Passwort-Manager mit Cloud-Sync, Team-/Family-Funktionen und dokumentierter E2EE-Sicherheitsarchitektur nutzen willst (mit Account).
- **Weniger geeignet wenn:** du keinen Account-/Service-Betrieb möchtest oder ausschließlich lokal/offline ohne Service-/Diagnosedaten arbeiten willst.
- **Wichtigster Abwägung:** **Komfort & Recovery/Administration** vs. **Service-/Diagnosedaten (Metadaten) und Kontopflicht**.

## Sofortmaßnahmen
- **2FA für dein 1Password-Konto aktivieren** → senkt das Risiko bei kompromittiertem Account-Passwort.
- **Auto-Lock & „Require account password“ strenger einstellen** → reduziert Exposure, wenn dein Gerät kurz unbeaufsichtigt ist.
- **Usage Data/Telemetry bewusst steuern** (pro Konto bzw. als Team-Owner) → reduziert Produkt- und Nutzungsmetadaten.

## Entscheidungshilfe
- Wenn du 1Password als **Cloud-Passwort-Manager** nutzt, dann plane **Account + Service Data** ein (Abwägung: weniger lokal/offline, mehr Metadaten durch Betrieb/Support).
- Wenn du **Metadaten minimieren** willst, dann deaktiviere „Share information about your usage“/Telemetry (Abwägung: weniger Diagnosedaten für Support/Produktverbesserungen).
- Wenn du **Reisen/Grenzkontrollen** als Risiko-Szenario hast, dann nutze **Travel Mode** (Abwägung: du musst „Safe for travel“-Tresore pflegen).
- Wenn du **Datenportabilität** brauchst, dann exportiere in **1PUX/CSV** (Abwägung: Export ist unverschlüsselt und muss wie Klartext-Geheimnisse behandelt werden).
- Wenn du in einem **Business/Teams-Einrichtung** bist, dann prüfe Team-Policies (Telemetry/Unlock/Auto-Lock) (Abwägung: Admin-Defaults können von persönlichen Präferenzen abweichen).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | 1Password |
| Kategorie | Passwort-Manager |
| Website | https://1password.com/ |
| Quellcode | https://github.com/1Password |
| Lizenz | LicenseRef-Proprietary |
| Preismodell | paid |
| Free Tier | no (14 Tage Testphase) |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | Nicht angegeben |
| KYC erforderlich | Nicht angegeben |
| Zahlungsabwicklung | Stripe (laut Sub-Processor-Liste); in Privacy Policy als „PCI compliant third-party payment processor“ beschrieben |
| Jurisdiktion | Kanada (Toronto, Ontario) |
| Logs | Service-/Diagnose-Daten inkl. Server logs, IP & Auth-Details (laut Privacy Policy) |
| Retention | Allgemein: so lange wie nötig; Telemetry-Rohdaten: 21 Tage (laut Telemetry-Doku) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://1password.com/legal/privacy
- AGB/Terms: https://1password.com/legal/terms-of-service
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- [Security Assessments (Übersicht)](https://support.1password.com/security-assessments/)
- [Independent Security Evaluation (ISE) – Report (PDF)](https://bucket.agilebits.com/security/1password-kudelski-report.pdf)
- [Onica – Report (PDF)](https://bucket.agilebits.com/security/1password-onica-report.pdf)
- [SOC 2 (Hinweis, Report auf Anfrage)](https://1password.com/soc/)

**Daten-Notizen (kurz):**
Tresor-/„Secure Data“ ist laut Privacy Policy verschlüsselt und 1Password kann Secure Data nicht im Klartext lesen. Zusätzlich verarbeitet 1Password Service Data (z.B. Konto-/Billing-/Support-Kontext) und Diagnostic Data (z.B. Geräte-/App-/OS-Infos inkl. Server Logs, IP, Auth-Details). Optional kann Product Usage/Telemetry hinzukommen (steuerbar; bei Teams/Business kann die Aktivierung adminseitig erfolgen).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - **Secure Data** (Inhalte in Tresoren) – verschlüsselt, Schlüssel liegen bei Nutzer:innen/Admins, nicht bei 1Password.  
  - **Service Data** – z.B. Account-Informationen (Name/E-Mail, teils auch Vault-Namen), Billing/Payment-Kontext, Support-Kommunikation.  
  - **Diagnostic Data** – u.a. Geräte-/App-/OS-Infos, Cookies, Server Logs, IP-Adresse, Auth-Details, Crash-/Performance-Daten, Konfigurationen (z.B. Anzahl Vaults/Item-Typen, Zugriffsereignisse).  
  - **Product Usage Information** – laut Privacy Policy „mit deiner Erlaubnis“ (privacy-preserving).
- **Wofür:** Betrieb/Administration des Dienstes, Support, Schutz/Verbesserung der Services, Sicherheit/Fehlerbehebung; zusätzlich Website-Cookies/Tracking für funktionale/analytische/Advertising-Zwecke (laut Cookie-/Privacy-Angaben).
- **Weitergabe/Subprozessoren:** Sub-Processor-Liste im Legal Center veröffentlicht (inkl. Rolle/Ort). Für Business-Kontexte existiert ein DPA.
- **Drittlandtransfer:** Secure Data wird laut Privacy Policy in der vom Kunden gewählten Region gehostet (EU/US/Kanada); Service/Diagnostic Data kann aus anderen Ländern abgerufen/verarbeitet/transferiert werden, mit beschriebenen Schutzmaßnahmen (z.B. Standardvertragsklauseln/Mechanismen).
- **Zahlungsabwicklung/Payment Processor:** Privacy Policy nennt einen PCI-konformen Drittanbieter; Sub-Processor-Liste nennt Stripe für Billing/Payment Processing.
- **Kontakt/DSAR/DPA:** Privacy Policy beschreibt Rechte (Auskunft/Korrektur/Löschung/Export) und verweist auf Kontaktweg; DPA ist als PDF verfügbar.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Individuell/Familie: Telemetry ist laut Doku nicht aktiv, solange du kein In-App-Consent/Prompt gesehen und zugestimmt hast; bei Business/Teams kann Telemetry adminseitig gesteuert werden und „automatisch“ aktiv sein.
- **Abschaltbar?** Ja: individuell pro Konto (Apps/Web) bzw. für Teams/Business durch Owner (für alle Nutzer:innen).
- **Wo (Menüpfad):**
  - Apps: **Account/Collection → Manage Accounts → (Account) → Usage data → Share information about your usage (aus)**  
  - Web: **1Password.com → Name (oben rechts) → Manage Account → Usage Data**

**Logs & Retention:**
- **Logging-Level:** Service-/Diagnose-Daten inkl. Server logs, IP & Auth-Details (laut Privacy Policy)
- **Aufbewahrung:** Allgemein: so lange wie nötig; Telemetry-Rohdaten: 21 Tage (laut Telemetry-Doku)
- **Lösch-/Opt-out-Optionen:** Telemetry lässt sich deaktivieren; laut Telemetry-Doku werden zuvor erhobene Rohdaten 21 Tage nach Erhebung gelöscht, wenn du opt-out gehst.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Secure Data ist laut Privacy Policy verschlüsselt; 1Password hat keine Schlüssel und kann Secure Data nicht in lesbarer Form entschlüsseln.
- **KDF/Parameter/Schlüsselableitung:** 1Password nutzt ein Zwei-Geheimnisse-Modell (Account Password + Secret Key) und beschreibt 2SKD/Schlüsselableitung in Whitepaper/Docs (Details je nach Tiefe dort nachlesen).
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA kann für das 1Password-Konto aktiviert werden (Authenticator-App oder Security Key/U2F).
- **Recovery/Account-Wiederherstellung:** Secret Key ist Teil des Modells und wird nicht von 1Password vorgehalten; Zugang und Recovery hängen von deinen eigenen Recovery-Artefakten (z.B. Emergency Kit/Recovery Codes, je nach Account/Einrichtung) ab.
- **Vuln-Handling / Security-Kontakt:** security.txt nennt Security-Kontaktadresse und Bug-Bounty-/Disclosure-Kanal.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren (2FA)**  
   **Pfad:** 1Password.com → Name → **Manage Account** → **More Actions → Manage Two-Factor Authentication**  
   **Prüfen:** Nach Aktivierung wird bei neuem Gerät zusätzlich ein 2FA-Faktor verlangt.
2) **Auto-Lock/Timeout sinnvoll setzen**  
   **Pfad (Apps):** Account/Collection → **Settings → Security → Unlock & Auto-Lock**  
   **Prüfen:** App lockt reproduzierbar nach Zeit/bei Geräte-Lock (Test: App verlassen, warten, erneut öffnen).
3) **Usage Data/Telemetry bewusst setzen**  
   **Pfad (Apps):** Account/Collection → **Manage Accounts → Usage data → Share information about your usage (aus/an)**  
   **Prüfen:** Schalterzustand bleibt nach Neustart/Unlock erhalten und gilt pro Account.

**Stolpersteine:**
- **Exports sind unverschlüsselt (1PUX/CSV):** Export-Dateien können in Backups/Cloud-Ordnern landen (Abwägung: Portabilität vs. Klartext-Risiko).
- **Team-Accounts können Admin-Defaults erzwingen** (z.B. Telemetry/Unlock-Policies) (Abwägung: zentrale Steuerung vs. persönliche Kontrolle).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Telemetry konsequent deaktivieren**, sofern nicht erforderlich (Apps/Web wie oben).  
- **Support-Kommunikation minimal halten** (nur notwendige Diagnosedaten senden; keine Vault-Inhalte teilen).  
- **Data Location im Blick behalten:** Secure Data wird laut Privacy Policy regional gehostet (EU/US/Kanada), während Service/Diagnostic Data global verarbeitet werden kann.  
**Abwägung:** weniger Metadaten, aber ggf. weniger Kontext für Support/Produktanalysen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Striktes Lock-Verhalten:** Auto-Lock kurz + „Require account password“ häufiger (wo verfügbar), Biometrics nur wenn dein Gerätemodell/Threat Model passt.  
- **Travel Mode** für Reise-/Grenzrisiko-Szenarien nutzen (nur „Safe for travel“-Tresore auf Geräten behalten).  
- **Export/Backup vermeiden oder stark isolieren:** unverschlüsselte Exporte nur offline/temporär, danach sicher löschen.  
**Abwägung:** deutlich mehr Aufwand und Risiko für Self-Inflicted-Lockouts ohne sauberes Recovery-Einrichtung.

</details>

## Features
- Ende-zu-Ende-Verschlüsselung (E2EE)
- Secret Key + Account Password (Zwei-Geheimnisse)
- 2FA (Authenticator oder Security Key/U2F)
- Watchtower-Warnungen
- Reise-/Travel Mode
- Passkeys-Verwaltung
- Export (1PUX/CSV; unverschlüsselt)

## Alternativen
- [Bitwarden](/anbieter/bitwarden/) – anderer Schwerpunkt bei Betriebsmodellen (auch Self-Hosting möglich) und Open-Source-Anteil (Abwägung: eigener Betrieb/Administration vs. gehosteter Komfort).
- [KeePassXC](/anbieter/keepassxc/) – lokal/dateibasiert ohne Account-Zwang (Abwägung: Sync/Backup komplett in eigener Verantwortung).
- [Proton Pass](/anbieter/proton-pass/) – Account-basierter Dienst mit anderem Ökosystem-Fokus (Abwägung: anderes Feature-Set und Datenflüsse je nach Proton-Account/Apps).

## Quellen

- name: "SOC 2 (Hinweis, Report auf Anfrage)
- [1Password (Website)](https://1password.com/)
- [Privacy Policy](https://1password.com/legal/privacy)
- [Terms of Service](https://1password.com/legal/terms-of-service)
- [Sub-Processors List (Legal Center, PDF)](https://1password.com/legal-center/sub-processors-list)
- [Data Processing Addendum (DPA, PDF)](https://1password.com/files/legal-center/AgileBits-DPA-v4.6-02032025.pdf)
- [Security audits of 1Password](https://support.1password.com/security-assessments/)
- [About the 1Password security model](https://support.1password.com/1password-security/)
- [1Password Security Design (White Paper, PDF)](https://1password.com/files/1password-white-paper.pdf)
- [How to share your usage data with 1Password (Telemetry)](https://support.1password.com/telemetry/)
- [Manage team telemetry (Teams/Business)](https://support.1password.com/telemetry-teams/)
- [Manage unlock and auto-lock settings](https://support.1password.com/unlock-auto-lock/)
- [Turn on two-factor authentication for your 1Password account](https://support.1password.com/two-factor-authentication/)
- [Use Travel Mode](https://support.1password.com/travel-mode/)
- [About the 1Password Unencrypted Export format (1PUX)](https://support.1password.com/1pux-format/)
- [security.txt (Security-Kontakt/Bug-Bounty)](https://1password.com/.well-known/security.txt)
- [1Password (Website)](https://1password.com/)
- [Privacy Policy](https://1password.com/legal/privacy)
- [Terms of Service](https://1password.com/legal/terms-of-service)
- [Sub-Processors List (Legal Center, PDF)](https://1password.com/legal-center/sub-processors-list)
- [Data Processing Addendum (DPA, PDF)](https://1password.com/files/legal-center/AgileBits-DPA-v4.6-02032025.pdf)
- [Security audits of 1Password](https://support.1password.com/security-assessments/)
- [About the 1Password security model](https://support.1password.com/1password-security/)
- [1Password Security Design (White Paper, PDF)](https://1password.com/files/1password-white-paper.pdf)
- [How to share your usage data with 1Password (Telemetry)](https://support.1password.com/telemetry/)
- [Manage team telemetry (Teams/Business)](https://support.1password.com/telemetry-teams/)
- [Manage unlock and auto-lock settings](https://support.1password.com/unlock-auto-lock/)
- [Turn on two-factor authentication for your 1Password account](https://support.1password.com/two-factor-authentication/)
- [Use Travel Mode](https://support.1password.com/travel-mode/)
- [About the 1Password Unencrypted Export format (1PUX)](https://support.1password.com/1pux-format/)
- [security.txt (Security-Kontakt/Bug-Bounty)](https://1password.com/.well-known/security.txt)

