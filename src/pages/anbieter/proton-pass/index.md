---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Proton Pass"
url: "/anbieter/proton-pass/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von Proton Pass (Kategorie: Passwort-Manager)."
provider: ""
name: "Proton Pass"
category: "Passwort-Manager"
website: "https://proton.me/pass"
repo: "https://github.com/protonpass"
license: "GPL-3.0"
policies: ""
privacy: "https://proton.me/pass/privacy-policy"
terms: "https://proton.me/legal/terms"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "partial"
self_host_possible: "no"
account_required: "yes"
phone_required: "unknown"
kyc_required: "no"
jurisdiction: "Switzerland (Proton AG)"
region: "ch"
logs: "unknown"
retention: "mid"
retention_notes: "Verschlüsselte Backups bis zu 30 Tage; Diagnose-/Usage-Daten bis zu 30 Tage (Opt-out möglich)"
retention_max_days: "30"
data_notes: "Tresor-Inhalte sind Ende-zu-Ende-verschlüsselt; Proton beschreibt, dass Metadaten für Proton Pass verschlüsselt sind. Hide-my-email-Alias-Adressen sind laut Policy nicht Ende-zu-Ende verschlüsselt und werden gespeichert, solange der Alias existiert; verschlüsselte Backups können bis zu 30 Tage vorgehalten werden."
features: ""
alternatives: ""
payment_processors: "Chargebee (Billing), Stripe (Kreditkarte), PayPal, Bitcoin (direkt)"
sources: ""
---
## Kurzprofil

Proton Pass ist ein Anbieter aus der Kategorie **Passwort-Manager**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du einen cloud-basierten Passwort-Manager mit **Ende-zu-Ende-Verschlüsselung** nutzen willst und ein Proton-Konto für Sync/Pläne ok ist.
- **Weniger geeignet wenn:** du **kein Konto** nutzen willst oder **Self-Hosting/komplett offline** als Muss hast.
- **Wichtigster Abwägung:** **Komfort durch Sync & Ecosystem** vs. **Account-Bindung + potenzielle Metadaten (z.B. Billing/Recovery/Telemetry)**.

## Sofortmaßnahmen
- **PIN + Auto-Lock aktivieren:** reduziert Risiko bei offenem Browser/entsperrtem Gerät (Diebstahl/Shoulder Surfing).
- **Clipboard-Timeout kurz halten:** minimiert Leaks durch Zwischenablage (v.a. Android).
- **Proton-Account: Diagnose/Usage-Daten prüfen & ggf. abschalten:** reduziert Diagnosedaten/Metadaten (Abwägung: weniger Debug/Support-Signal).

## Entscheidungshilfe
- Wenn du **Sync über mehrere Geräte** brauchst, dann nutze Proton Pass mit Proton-Account (Abwägung: Account-Bindung + Billing/Recovery-Metadaten möglich).
- Wenn du **Alias-Adressen** als Privacy-Layer nutzen willst, dann nutze Hide-my-email (Abwägung: Alias-Adressen sind laut Policy **nicht Ende-zu-Ende-verschlüsselt**).
- Wenn du Browser nutzt, dann aktiviere **PIN/Auto-Lock** (Abwägung: mehr Reibung beim Autofill).
- Wenn du auf Android arbeitest, dann prüfe **Clipboard-Einstellungen** (Abwägung: zu kurze Timeout-Werte können nerven).
- Wenn du möglichst wenig Diagnosedaten willst, dann prüfe im Proton-Account die **Privacy/Data-Collection**-Schalter (Abwägung: weniger Hilfsdaten für Fehleranalyse).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Proton Pass |
| Kategorie | Passwort-Manager |
| Website | https://proton.me/pass |
| Quellcode | https://github.com/protonpass |
| Lizenz | GPL-3.0 |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | no |
| Zahlungsabwicklung | Chargebee (Billing), Stripe (Kreditkarte), PayPal, Bitcoin (direkt) |
| Jurisdiktion | Switzerland (Proton AG) |
| Logs | unknown |
| Retention | Verschlüsselte Backups bis zu 30 Tage; Diagnose-/Usage-Daten bis zu 30 Tage (Opt-out möglich) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://proton.me/pass/privacy-policy
- AGB/Terms: https://proton.me/legal/terms
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Cure53 Security Audit Report (Proton Pass) – https://res.cloudinary.com/dbulfrlrz/image/upload/v1688561361/Proton%20Pass%20Cure53%20Audit%20Report.pdf

**Daten-Notizen (kurz):**
Tresor-Inhalte sind Ende-zu-Ende-verschlüsselt; Proton beschreibt, dass Metadaten für Proton Pass verschlüsselt sind. Hide-my-email-Alias-Adressen sind laut Policy nicht Ende-zu-Ende verschlüsselt und werden gespeichert, solange der Alias existiert; verschlüsselte Backups können bis zu 30 Tage vorgehalten werden.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Konto-/Billing-Daten (bei Bezahlplan), verschlüsselte Tresor-Daten; bei Aliases zusätzlich Alias-Adressen (nicht E2EE) + Weiterleitungs-Infrastruktur.
- **Wofür:** Betrieb des Dienstes (Sync), Abrechnung (bei Paid), Alias-Funktion (Hide-my-email), Support/Sicherheit.
- **Weitergabe/Subprozessoren:** Für Abrechnung nennt Proton u.a. Chargebee sowie Zahlungsarten wie Kreditkarte (Stripe), PayPal, Bitcoin; für Hide-my-email verweist Proton auf Infrastruktur über SimpleLogin/Cloud-Anbieter in Europa.
- **Drittlandtransfer:** Nicht explizit für Proton Pass angegeben; Proton beschreibt Serverstandorte für Proton Pass u.a. Schweiz/Deutschland/Norwegen sowie europäische Cloud-Server für SimpleLogin-Infrastruktur.
- **Zahlungsabwicklung/Payment Processor:** Chargebee; Kreditkarte (Stripe), PayPal, Bitcoin.
- **Kontakt/DSAR/DPA:** DPA ist öffentlich (Proton legal).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Proton beschreibt „Usage statistics / Telemetry“ für „die meisten Proton Apps“ als Standard (Proton Pass wird dort nicht explizit aufgezählt).
- **Abschaltbar?** Ja: im Proton-Account kann „Collect usage diagnostics“ deaktiviert werden.
- **Wo (Menüpfad):** Proton Account (Web) → **Settings → All settings → Security and privacy → Privacy and data collection** → **Collect usage diagnostics** ausschalten.

**Logs & Retention:**
- **Logging-Level:** unknown
- **Aufbewahrung:** Diagnose-/Usage-Daten laut Proton bis zu **30 Tage**, danach gelöscht; Proton Pass nennt zusätzlich **verschlüsselte Backups bis zu 30 Tage**.
- **Lösch-/Opt-out-Optionen:** Opt-out via Proton Account („Collect usage diagnostics“ aus).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Proton beschreibt Ende-zu-Ende-Verschlüsselung für Proton Pass; laut Proton (Windows-Download-Seite) werden u.a. AES-GCM sowie bcrypt und SRP genannt.
- **KDF/Parameter/Schlüsselableitung:** bcrypt (genannt); konkrete Parameter: Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Proton beschreibt 2FA für den Proton-Account (separates Einrichtung; Proton Pass nutzt das Konto).
- **Recovery/Account-Wiederherstellung:** Über Proton-Account-Mechanismen (z.B. Recovery-Optionen); Recovery kann zusätzliche Identitätsdaten bedeuten (Abwägung).
- **Vuln-Handling / Security-Kontakt:** Proton verweist auf unabhängige Audits und Open-Source-Repos; Bug-Bounty wird im Open-Source-Bereich erwähnt.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **PIN + Auto-Lock aktivieren (Web/Extension)**  
   **Web-App:** Zahnrad/Settings → **Security** → „Auto-lock Proton Pass“ aktivieren + PIN setzen.  
   **Prüfen:** PIN-Abfrage nach Timeout/Neustart.
2) **Android: Clipboard-Timeout prüfen**  
   **Menüpfad:** Proton Pass → **Profile → Settings → Clipboard**  
   **Prüfen:** Copy/Paste testen, Clipboard leert nach gewünschter Zeit.
3) **Proton Account: Usage-Diagnose prüfen & ggf. deaktivieren**  
   **Menüpfad:** Proton Account (Web) → **Settings → All settings → Security and privacy → Privacy and data collection** → „Collect usage diagnostics“ aus.  
   **Prüfen:** Schalter bleibt aus (betrifft Proton-Services global).

**Stolpersteine:**
- Browser-Extension kann für Autofill weitreichende Rechte anfordern (z.B. Zugriff „für alle Websites“); das ist funktional sinnvoll, aber du solltest es bewusst akzeptieren (Abwägung: Komfort vs. Angriffsfläche im Browser).
- Hide-my-email: Alias-Adressen sind laut Policy **nicht Ende-zu-Ende-verschlüsselt** (Abwägung: Alias-Komfort vs. Klartext-Metadaten bei Alias-Verwaltung).

<details>
<summary>Profil B (Datensparsam)</summary>

- **Recovery-Optionen sparsam setzen** (z.B. keine Telefonnummer, falls nicht nötig).  
  **Abwägung:** weniger Recovery-Wege, mehr Risiko bei Konto-/Passwortverlust.
- **Aliases gezielt einsetzen** (nur dort, wo Identitäts-Trennung wirklich hilft).  
  **Abwägung:** Alias-Verwaltung erzeugt zusätzliche (nicht E2EE) Alias-Metadaten.
- **Diagnose-Schalter im Proton-Account deaktiviert lassen**, wenn du keine Telemetrie willst.  
  **Abwägung:** weniger Hilfsdaten für Fehlerdiagnose.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- **Separates Browser-Profil nur für Passwort-Manager** (keine unnötigen Extensions, minimale Angriffsfläche).  
  **Abwägung:** mehr Kontextwechsel.
- **Autofill restriktiv nutzen** (manuell kopieren/einfügen, Clipboard kurz).  
  **Abwägung:** mehr Bedienaufwand.
- **Account-Isolation:** getrennte Mail-/Recovery-Adresse nur für Proton-Login verwenden (falls du Identitätsknoten minimieren willst).  
  **Abwägung:** zusätzlicher Account-Overhead.

</details>

## Features
- Ende-zu-Ende-verschlüsselte Speicherung (Logins, Notizen, Karten/Identitätsdaten – je nach App)
- Autofill (Browser-Erweiterung & Mobile)
- Hide-my-email Aliases (SimpleLogin/Proton-Infrastruktur)
- Geräteübergreifende Synchronisation über Proton Account
- PIN/Auto-Lock (Web-App & Browser-Extension) + Clipboard-Timeout (Android)

## Alternativen
- Bitwarden (E2EE, anderer Betriebs- & Feature-Fokus; Abwägung: anderes Metadaten-/Sync-Modell)
- 1Password (kommerzielles Ökosystem; Abwägung: Account-/Abo-Bindung)
- KeePassXC/KeePass (lokale Datenbank; Abwägung: eigener Sync/Backup nötig)

## Nicht gelöst / offene Punkte
- Öffentliche, **produkt-spezifische Subprozessoren-Liste** für Proton Pass + SimpleLogin-Infrastruktur ist nicht klar ersichtlich (Stand: 2026-01-20).
- Detaillierte Aussagen zu **Proton-Pass-spezifischen Logs** (über die generellen Proton-Hinweise hinaus) sind nicht eindeutig zusammengefasst.

## Quellen

- Cure53 Security Audit Report (Proton Pass) – https://res.cloudinary.com/dbulfrlrz/image/upload/v1688561361/Proton%20Pass%20Cure53%20Audit%20Report.pdf
- Bitwarden (E2EE, anderer Betriebs- & Feature-Fokus; Trade-off: "anderes Metadaten-/Sync-Modell)
- 1Password (kommerzielles Ökosystem; Trade-off: "Account-/Abo-Bindung)
- KeePassXC/KeePass (lokale Datenbank; Trade-off: "eigener Sync/Backup nötig)
- https://proton.me/legal/dpa
- [Proton Pass (Produktseite)](https://proton.me/pass)
- [Proton Pass – Privacy Policy](https://proton.me/pass/privacy-policy)
- [Proton – Privacy Policy](https://proton.me/privacy-policy)
- [Proton – Open Source & Audits](https://proton.me/community/open-source)
- [Cure53 Audit Report (Proton Pass) – PDF](https://res.cloudinary.com/dbulfrlrz/image/upload/v1688561361/Proton%20Pass%20Cure53%20Audit%20Report.pdf)
- [Proton Pass (Windows) – Security/Encryption-Hinweise](https://proton.me/pass/download/windows)
- [Proton Pass – Pricing](https://proton.me/pass/pricing)
- [Proton Pass Plans explained (Support)](https://proton.me/support/proton-pass-plans-explained)
- [Proton Pass: PIN & Auto-Lock (Support)](https://proton.me/support/proton-pass-pin)
- [Proton Pass on Android (Support)](https://proton.me/support/use-pass-android)
- [Help us improve Proton apps (Usage statistics/Telemetry, Support)](https://proton.me/support/share-usage-statistics)
- [Plans and payments (Support)](https://proton.me/support/account/plans)
- [Data Processing Agreement (DPA)](https://proton.me/legal/dpa)
