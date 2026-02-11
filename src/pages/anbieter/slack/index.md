---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Slack"
url: "/anbieter/slack/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-06"
robots: "index,follow"
description: "Kurzprofil von Slack (Kategorie: Messenger)."
provider: ""
name: "Slack"
category: "Messenger"
website: "https://slack.com"
repo: "https://github.com/slackhq"
license: "Proprietär (Slack-Client/Service; Open-Source-Repos für Tools/SDKs separat)"
policies: ""
privacy: "https://slack.com/trust/privacy/privacy-policy"
terms: "https://slack.com/terms-of-service/user"
transparency: "https://www.salesforce.com/company/legal/transparency/"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "partial"
self_host_possible: "no"
account_required: "yes"
phone_required: "unknown"
kyc_required: "no"
jurisdiction: "USA / Irland (Slack Technologies, LLC bzw. Slack Technologies Limited – je nach Region, laut Privacy Policy)"
region: "us"
logs: "configurable"
retention: "configurable"
retention_notes: "konfigurierbar (Free: 90 Tage oder 1 Jahr; Paid: standardmäßig dauerhaft, Auto-Löschung möglich; zusätzliche Lösch-/Backup-Fristen siehe Quellen)"
retention_max_days: "365"
data_notes: "Slack verarbeitet Inhalte (Nachrichten/Dateien) als „Customer Data“ innerhalb von Workspaces sowie Metadaten/Logdaten (z.B. IP/Device). Subprozessoren-Liste und DPA sind öffentlich verlinkt."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Slack ist ein Anbieter aus der Kategorie **Messenger**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Team-Kommunikation mit Admin-Kontrollen (Retention, Rollen, Audit-/Zugriffsübersicht je nach Plan) brauchst.
- **Weniger geeignet wenn:** du Ende-zu-Ende-Verschlüsselung als klare Produkteigenschaft erwartest oder möglichst wenig Metadaten/zentralen Betrieb willst.
- **Wichtigster Abwägung:** zentrale Verwaltung & Compliance-Funktionen vs. mehr Metadaten/Administrationssichtbarkeit und Abhängigkeit von einem zentralen Cloud-Dienst.

## Sofortmaßnahmen
- **2FA teamweit erzwingen**, wenn du Admin-Rechte hast (Wirkung: reduziert Kontenübernahmen durch schwache Passwörter).
- **Retention bewusst verkürzen** (Wirkung: reduziert Datenmenge, die langfristig im Workspace liegt).
- **Apps/Integrationen restriktiv halten** (Wirkung: reduziert Drittanbieter-Datenabflüsse über Connectoren).

## Entscheidungshilfe
- Wenn du Daten möglichst kurz halten willst, dann setze Workspace- oder Channel-Retention (Abwägung: weniger Historie/Suche, ggf. schwierigeres Incident-Review).
- Wenn du externe Datenflüsse minimieren willst, dann beschränke Marketplace-Apps und externe Verbindungen (Abwägung: weniger Automatisierung/Integrationen).
- Wenn du Compliance-/Nachvollziehbarkeit brauchst, dann nutze (planabhängig) Audit Logs und Access Logs (Abwägung: mehr Protokolldaten innerhalb der Organisation).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Slack |
| Kategorie | Messenger |
| Website | https://slack.com |
| Quellcode | https://github.com/slackhq |
| Lizenz | Proprietär (Slack-Client/Service; Open-Source-Repos für Tools/SDKs separat) |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | unknown |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben |
| Jurisdiktion | USA / Irland (Slack Technologies, LLC bzw. Slack Technologies Limited – je nach Region, laut Privacy Policy) |
| Logs | configurable |
| Retention | konfigurierbar (Free: 90 Tage oder 1 Jahr; Paid: standardmäßig dauerhaft, Auto-Löschung möglich; zusätzliche Lösch-/Backup-Fristen siehe Quellen) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://slack.com/trust/privacy/privacy-policy
- AGB/Terms: https://slack.com/terms-of-service/user
- Transparency Report: https://www.salesforce.com/company/legal/transparency/
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- SOC 2 (Type II) / SOC 3 (laut Slack Security-Seite)
- ISO/IEC 27001, 27017, 27018, 27701 (Zertifikate laut Slack Security-Seite)

**Daten-Notizen (kurz):**
Slack verarbeitet Inhalte (Nachrichten/Dateien) als „Customer Data“ innerhalb von Workspaces sowie Metadaten/Logdaten (z.B. IP/Device). Subprozessoren-Liste und DPA sind öffentlich verlinkt.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Inhalte in Workspaces („Customer Data“ wie Nachrichten/Dateien) sowie „Other Information“ (z.B. Account-/Profil-Infos, Nutzungs- und Geräteinformationen, Logdaten).  
- **Wofür:** Betrieb des Dienstes, Bereitstellung/Verbesserung der Services, Support und Sicherheit (je nach Abschnitt in Privacy Policy/Security Practices).
- **Weitergabe/Subprozessoren:** Slack verweist auf eine Subprozessoren-Liste und nutzt Dienstleister (Hosting, Support, Betrieb).  
- **Drittlandtransfer:** Internationaler Datentransfer wird in der Privacy Policy beschrieben (inkl. Transfermechanismen, z.B. Standardvertragsklauseln).
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (Zahlungsdienstleister wird in den genutzten Quellen nicht namentlich benannt).
- **Kontakt/DSAR/DPA:** Data Request/DSAR ist über Slack Trust/Legal dokumentiert; Data Processing Addenda (DPA) sind öffentlich.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Teilweise: Logdaten sowie Nutzungs-/Geräteinformationen fallen beim Betrieb an (laut Privacy Policy/Security Practices).
- **Abschaltbar?** Unklar (für clientseitige Diagnosedaten/Telemetry-Schalter in Apps; Web-Cookies sind separat steuerbar).
- **Wo (Menüpfad):** Web: Footer → Cookie-Einstellungen (für Website-Cookies); In-App: Nicht angegeben.

**Logs & Retention:**
- **Logging-Level:** configurable (u.a. Access Logs und – je nach Plan – Audit Logs; Retention für Nachrichten/Dateien konfigurierbar)
- **Aufbewahrung:** konfigurierbar (Retention Policies; Löschläufe laufen regelmäßig; zusätzliche Angaben zu Hard-Delete/Backups in Security Practices)
- **Lösch-/Opt-out-Optionen:** Retention Policies, Workspace-Löschung (Primary Owner) und Export-Funktionen sind dokumentiert (planabhängig).

**Abwägung am Punkt:** Kürzere Retention reduziert langfristige Datenmenge, kann aber Suche, Kontext und Incident-Aufklärung erschweren.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Slack nennt Verschlüsselung **at rest** und **in transit**; eine E2E-Zusage ist in den genutzten Quellen nicht beschrieben.
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (für Endnutzer-Content nicht als clientseitiges KDF-Modell dokumentiert).
- **MFA/2FA/Passkeys/Hardware-Keys:** Teamweite 2FA-Anforderung ist dokumentiert; weitere Methoden sind plan-/setupabhängig.
- **Recovery/Account-Wiederherstellung:** Nicht angegeben (Details hängen am Account-/Workspace-Einrichtung).
- **Vuln-Handling / Security-Kontakt:** Vulnerability Reporting über HackerOne ist dokumentiert; Kontaktadresse für Security-Fragen ist genannt.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (2FA/MFA), falls du Workspace-Admin/Owner bist: teamweit erzwingen.  
   **Prüfen:** Admin-/Workspace-Security zeigt Requirement aktiv.
2) **Retention festlegen** (Workspace- oder orgweit).  
   **Prüfen:** Admin → Workspace settings → Data retention → Wert gespeichert; nach 24h prüfen, ob alte Inhalte entfernt werden.
3) **Integrationen reduzieren** (nur benötigte Apps zulassen).  
   **Prüfen:** Admin → Apps/Integrations → Installationsrechte & erlaubte Apps dokumentiert.

**Stolpersteine:**
- Workspace-Admins/Owner haben je nach Plan und Konfiguration erweiterte Einsicht/Exportmöglichkeiten (Abwägung: Admin-Compliance vs. Vertraulichkeit innerhalb der Organisation).

<details>
<summary>Profil B (Datensparsam)</summary>

- Restriktive Retention (kürzer als „Lifetime“) + keine Member-Overrides erlauben, wenn du zentral steuern willst.
- Apps/Connectoren und externe Verbindungen (z.B. Slack Connect) nur gezielt aktivieren.
- Export-Fähigkeiten und Rollen (Owner/Admin) minimieren.
**Abwägung:** weniger Komfort/Automatisierung, weniger Verlauf/Knowledge Base.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutzung strikt trennen: separates Gerät/Profil für Slack (reduziert Cross-Tracking/Leakage über Browser-Profile).
- Admin- und Nutzerrollen strikt aufteilen; Zugang nur über SSO/IdP + Geräteschutz (MDM), sofern im Umfeld vorhanden.
- Sehr kurze Retention + restriktive App-Policy; keine externen Workspaces/Connectoren.
**Abwägung:** starke Einschränkungen bei Kollaboration, Suche und Integrationen.

</details>

## Features
- Channels, Direktnachrichten, Datei- und Link-Sharing
- Team-/Org-Admin-Kontrollen, Rollen & Berechtigungen
- Verschlüsselung „at rest“ und „in transit“ (laut Anbieter)
- Konfigurierbare Retention (global + pro Channel/DM, je nach Plan)
- Audit Logs (Enterprise Grid) + Export-Funktionen (planabhängig)
- Enterprise Key Management (EKM), Data Residency (plan-/setupabhängig)

## Alternativen
- Microsoft Teams (Abwägung: starkes Microsoft-Ökosystem, ähnliche Admin-/Compliance-Logik)
- Mattermost (Abwägung: Self-Hosting möglich, mehr Betriebsaufwand)
- Rocket.Chat (Abwägung: Self-Hosting möglich, Admin/Retention abhängig vom Einrichtung)
- Matrix/Element (Abwägung: Föderation möglich, andere Metadaten-/Admin-Modelle)

## Nicht gelöst / offene Punkte
- Clientseitige Telemetrie/Diagnosedaten: unklar, ob und wie sich das vollständig deaktivieren lässt.
- Zahlungsdienstleister für Direktkauf/Checkout: nicht namentlich benannt.

## Quellen

- Microsoft Teams (Trade-off: "starkes Microsoft-Ökosystem, ähnliche Admin-/Compliance-Logik)
- Mattermost (Trade-off: "Self-Hosting möglich, mehr Betriebsaufwand)
- Rocket.Chat (Trade-off: "Self-Hosting möglich, Admin/Retention abhängig vom Setup)
- Matrix/Element (Trade-off: "Föderation möglich, andere Metadaten-/Admin-Modelle)
- https://slack.com/security
- [Slack Privacy Policy](https://slack.com/trust/privacy/privacy-policy)
- [User Terms of Service](https://slack.com/terms-of-service/user)
- [Security practices](https://slack.com/intl/en-in/security-practices)
- [Report a vulnerability](https://slack.com/intl/en-in/report-vulnerability)
- [Slack subprocessors](https://slack.com/slack-subprocessors)
- [Data Processing Addenda (DPA)](https://slack.com/terms-of-service/data-processing)
- [Customize message and file retention](https://get.slack.help/hc/en-us/articles/203457187-custom-message-and-file-retention)
- [Slack Pricing (DE)](https://slack.com/intl/de-de/pricing)
- [Slack Security (Übersicht & Zertifikate)](https://slack.com/security)
