---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Google Meet"
url: "/anbieter/google-meet/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-14"
robots: "index,follow"
description: "Kurzprofil von Google Meet (Kategorie: Video & Meetings)."
provider: ""
name: "Google Meet"
category: "Video & Meetings"
website: "https://meet.google.com/"
repo: "Nicht angegeben"
license: "Proprietary"
policies: ""
privacy: "https://policies.google.com/privacy?hl=de"
terms: "https://policies.google.com/terms?hl=de"
transparency: "https://transparencyreport.google.com/?hl=de"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "no"
self_host_possible: "no"
account_required: "yes"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA (Google LLC; Google Terms of Service)"
region: "us"
logs: "configurable"
retention: "long"
retention_notes: "Workspace: Meet Log Events 6 Monate; Meet Quality Tool 30 Tage; Aufzeichnungen/Artefakte nach Drive/Vault-Regeln"
retention_max_days: "180"
data_notes: "Meet nutzt mehrere Verschlüsselungsmodi (Cloud-, Client-side-, optional E2EE). Für Workspace-Meetings: Audio/Video/Chat werden laut Google nicht gespeichert, außer wenn eine Aufzeichnung gestartet wird; Aufzeichnungen/Transkripte liegen dann in Google Drive."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Google Meet ist ein Anbieter aus der Kategorie **Video & Meetings**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Video-Meetings im Google-/Workspace-Kontext brauchst (Browser, Einladungslinks, Admin-Kontrollen, optional Gastzugang).
- **Weniger geeignet wenn:** du eine Lösung ohne zentrale Kontobindung/Cloud-Infrastruktur oder mit Self-Hosting-Anforderung brauchst.
- **Wichtigster Abwägung:** Komfort & Ökosystem-Integration vs. zentrale Account-/Metadatenbindung (Google-Konto, Admin-Logs/Workspace).

## Sofortmaßnahmen
- **Google-Konto absichern (2-Stufen-Bestätigung/Passkeys):** reduziert Account-Übernahmen als häufigsten Angriffsvektor.
- **Host Controls konsequent nutzen:** begrenzt ungeplante Teilnehmer/Interaktionen (Abwägung: mehr Moderationsaufwand).
- **Aufzeichnungen/Transkripte nur bei Bedarf:** reduziert persistente Meeting-Artefakte (Abwägung: weniger Nachvollziehbarkeit).

## Entscheidungshilfe
- Wenn du Meetings **ohne Installation** starten willst, dann nutze Meet im Browser (Abwägung: Account-/Cookie-Kontext ist Teil der Metadatenlage).
- Wenn Personen **ohne Google-Konto** teilnehmen sollen, dann prüfe Gastzugang/„Zulassen“-Flow (Abwägung: organisatorisch mehr Kontrolle nötig).
- Wenn du **persistente Artefakte vermeiden** willst, dann vermeide Aufzeichnung/Transkripte (Abwägung: weniger Review/Compliance-Nachweise).
- Wenn du **Admin-Audit/Investigations** brauchst, dann ist Google Workspace relevant (Abwägung: zusätzliche Log-Quellen, Retention-Vorgaben).
- Wenn du **organisationsverwaltete Schlüssel** willst, dann nutze Client-side Encryption Meetings (Abwägung: Admin-Einrichtung + ggf. Feature-Einschränkungen).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Google Meet |
| Kategorie | Video & Meetings |
| Website | https://meet.google.com/ |
| Quellcode | Nicht angegeben |
| Lizenz | Proprietary |
| Preismodell | mixed |
| Free Tier | yes |
| Open Source | no |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben (Abrechnung über Google Workspace Billing / Google Payments je Land) |
| Jurisdiktion | USA (Google LLC; Google Terms of Service) |
| Logs | configurable |
| Retention | Workspace: Meet Log Events 6 Monate; Meet Quality Tool 30 Tage; Aufzeichnungen/Artefakte nach Drive/Vault-Regeln |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://policies.google.com/privacy?hl=de
- AGB/Terms: https://policies.google.com/terms?hl=de
- Transparency Report: https://transparencyreport.google.com/?hl=de
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Google Workspace DPA: Verweist auf SOC 2/SOC 3 Reports durch Third-Party Auditor (jährliche Audits) – Details im DPA.
- Google Cloud/Workspace Compliance: ISO/IEC 27001 und SOC 2 (Zertifikate/Reports über Compliance Reports Manager anforderbar).

**Daten-Notizen (kurz):**
Meet nennt mehrere Verschlüsselungsmodi (Cloud-, Client-side-, optional E2EE). Für Google Workspace/Meetings gilt laut Admin-Doku: Audio/Video/Chat werden nicht gespeichert, außer wenn eine Aufzeichnung gestartet wird; Aufzeichnungen/Artefakte liegen dann in Google Drive (Retention ggf. über Vault).

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Laut Google Privacy Policy u.a. Konto-/Identitätsdaten, Nutzungs- & Geräteinformationen sowie Log-Daten; für Meet zusätzlich Meeting-bezogene Metadaten (z.B. Teilnahme/Events) je nach Edition/Logging.
- **Wofür:** Bereitstellung des Dienstes, Sicherheit/Abuse-Prevention, Betrieb/Diagnose (je nach Feature/Edition).
- **Weitergabe/Subprozessoren:** Für Google Workspace gibt es eine veröffentlichte Liste von Subprozessoren sowie DPA-Bedingungen.
- **Drittlandtransfer:** Möglich (Subprozessoren-Liste enthält weltweite Verarbeitungsorte; Details im DPA/Subprozessoren-Listing).
- **Zahlungsabwicklung/Payment Processor:** Nicht angegeben (Abrechnung über Google Workspace).
- **Kontakt/DSAR/DPA:** Google Privacy Policy (Kontroll-/Löschfunktionen) + Google Workspace DPA (für Workspace-Kunden).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** In Google Workspace können Audit-/Meet Log Events anfallen; zusätzlich gibt es das „Meet Quality Tool“ (MQT) zur Diagnose.
- **Abschaltbar?** Nicht als Endnutzer-Schalter beschrieben; im Workspace-Kontext primär über Admin-Rechte/Zugriff & Export steuerbar.
- **Wo (Menüpfad):** Admin-Konsole → „Audit & Investigation“ / Meet Log Events; Admin-Konsole → Meet Quality Tool (MQT).

**Logs & Retention:**
- **Logging-Level:** configurable (Workspace Admin-Logs/Investigation je nach Edition & Admin-Rechten)
- **Aufbewahrung:** Meet Log Events: 6 Monate; Meet Quality Tool: 30 Tage (Workspace-Dokumentation).
- **Lösch-/Opt-out-Optionen:** Für Meeting-Inhalte gilt: ohne Aufzeichnung keine Speicherung von Audio/Video/Chat (Workspace IT Admin-Doku); Aufzeichnungen/Artefakte werden in Google Drive gespeichert und können über Vault-Retention-Regeln verwaltet werden (Workspace).

**Abwägung am Punkt:** Mehr Audit-/Qualitätsdaten helfen Diagnose & Incident Response; sie erhöhen aber die Menge an Metadaten, die in Admin-Kontexten sichtbar sind.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Meet nennt Cloud Encryption (in Transit & at Rest) sowie optional End-to-end Encryption und Client-side Encryption (je nach Modus/Meeting).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Google-Konto unterstützt 2-Stufen-Bestätigung und weitere Schutzmaßnahmen (Security Check-up/Advanced Protection in Google Account).
- **Recovery/Account-Wiederherstellung:** Über Google-Konto-Wiederherstellungsmechanismen (z.B. Recovery-E-Mail/Telefon) – Details abhängig vom Konto.
- **Vuln-Handling / Security-Kontakt:** Google Bug Hunters / Reporting-Portal für Sicherheitslücken.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren** (2FA/MFA) im Google-Konto.  
   **Prüfen:** Google-Konto → „Sicherheit“ → „2-Stufen-Bestätigung“ zeigt „aktiv“ + Methode (Passkey/Security Key/App).
2) **Host Controls aktiv nutzen** (Beitritt & Interaktionen steuern).  
   **Wo:** Im Meeting (Desktop) → „Host Controls“ → „Host management“ aktivieren; ggf. Audio/Video für Teilnehmende sperren.  
   **Prüfen:** Gast-Teilnehmer landen im Wartebereich/benötigen Zulassung; Sperren greifen im Test.
3) **Artefakte minimieren** (Recording/Transkript nur bei Bedarf).  
   **Wo:** Im Meeting → „Aktivitäten“ → „Aufzeichnung“ / „Transkripte“ (falls verfügbar).  
   **Prüfen:** Wenn aktiviert: Datei landet in Google Drive; wenn nicht genutzt: keine Recording-Datei vorhanden.

**Stolpersteine:**
- Bei gestarteter Aufzeichnung werden Meeting-Artefakte (z.B. Recording/Transkript) in Drive gespeichert (Abwägung: Nachvollziehbarkeit vs. Persistenz).
- Gastzugang kann Moderation erfordern („Zulassen“), sonst blockiert der Beitritt (Abwägung: Kontrolle vs. Friktion).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze Gastzugang dort, wo er organisatorisch passt (Abwägung: Host muss ggf. manuell zulassen).
- Verzichte auf Aufzeichnung/Transkripte und teile Inhalte lieber transient (Abwägung: weniger Dokumentation).
- Wenn verfügbar: nutze Ende-zu-Ende-verschlüsselte Modi/Calls in der Meet-App für 1:1/Group-Calling (Abwägung: ggf. weniger Features/Interoperabilität).

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Nutze Client-side Encryption Meetings (CSE), wenn in deiner Edition verfügbar (Abwägung: Admin-Einrichtung + mögliche Feature-Einschränkungen).
- Verwende getrennte Browser-Profile/Container für Meeting-Teilnahmen (Abwägung: höherer Aufwand).
- Strikte Host-Regeln: nur eingeladene Teilnehmende, Chat/Sharing restriktiv (Abwägung: weniger spontane Zusammenarbeit).

</details>

## Features
- Browser-basierte Video-Meetings (meet.google.com) und Meet-App
- Verschlüsselungsmodi: Cloud Encryption (Transit/At-Rest), optional E2EE, optional Client-side Encryption
- Host Controls (Beitritt steuern, Audio/Video sperren)
- Gastzugang (Join ohne Google-Konto möglich, je nach Meeting/Host)
- Aufzeichnung & Transkripte (je nach Plan/Edition), Speicherung in Google Drive
- Workspace Admin-Features: Meet Log Events, Audit/Investigation, Meet Quality Tool (MQT)

## Alternativen
- Jitsi Meet (Self-Hosting möglich; Abwägung: eigener Betrieb/Updates)
- BigBlueButton (Self-Hosting möglich; Abwägung: Serverbetrieb/Skalierung)
- Zoom (Cloud-Dienst; Abwägung: Konto-/Client-Abhängigkeit, Metadaten bei Anbieter)
- Microsoft Teams (Suite-Integration; Abwägung: Tenant-/Account-Bindung)
- Signal (Calls/Groups; Abwägung: weniger Meeting-Features, stärker Messenger-Workflow)

## Nicht gelöst / offene Punkte
- Unterschiede bei Logging/Retention zwischen kostenlosem Google-Konto, Workspace Individual und Workspace-Organisationen sind in der Meet-Nutzer-Doku nicht in einer Stelle konsolidiert.
- Zahlungsabwicklung: Es wird kein konkreter Payment Processor für Workspace-Abos genannt.

## Quellen

- Google Workspace DPA: "Verweist auf SOC 2/SOC 3 Reports durch Third-Party Auditor (jährliche Audits) – Details im DPA.
- Google Cloud/Workspace Compliance: "ISO/IEC 27001 und SOC 2 (Zertifikate/Reports über Compliance Reports Manager anforderbar).
- Workspace Admin: "Audit/Meet Log Events & Meet Quality Tool
- Jitsi Meet (Self-Hosting möglich; Trade-off: "eigener Betrieb/Updates)
- BigBlueButton (Self-Hosting möglich; Trade-off: "Serverbetrieb/Skalierung)
- Zoom (Cloud-Dienst; Trade-off: "Konto-/Client-Abhängigkeit, Metadaten bei Anbieter)
- Microsoft Teams (Suite-Integration; Trade-off: "Konto-/Tenant-Bindung)
- Signal (Calls/Groups; Trade-off: "weniger Meeting-Features, stärker Messenger-Workflow)
- [Google Meet](https://meet.google.com/)
- [Google Meet – Produktseite (Workspace)](https://workspace.google.com/products/meet/)
- [Google Privacy Policy](https://policies.google.com/privacy?hl=de)
- [Google Terms of Service](https://policies.google.com/terms?hl=de)
- [Google Workspace DPA (09242021)](https://workspace.google.com/terms/09242021/dpa_terms/)
- [Google Workspace Terms – Subprocessors](https://workspace.google.com/terms/subprocessors/)
- [Google Meet: "Security & privacy for IT admins](https://support.google.com/a/answer/7582940?hl=en)
- [Data retention and lag times (Google Workspace Admin)](https://support.google.com/a/answer/7061566?hl=en)
- [Manage Host Controls (Google Meet Help)](https://support.google.com/meet/answer/16229038?hl=en)
- [Lock audio & video (Google Meet Help)](https://support.google.com/meet/answer/11274707?hl=en)
- [Join a video meeting (Google Meet Help)](https://support.google.com/meet/answer/9303069?hl=en)
- [Learn about call & meeting encryption in Google Meet](https://support.google.com/meet/answer/12387251?hl=en-GB)
- [Learn about Meet client-side encryption (CSE)](https://support.google.com/meet/answer/11605714?hl=en)
- [Record a video meeting (Google Meet Help)](https://support.google.com/meet/answer/9308681?hl=en)
- [Use meeting transcripts (Google Meet Help)](https://support.google.com/meet/answer/12849897?hl=en)
- [Google Bug Hunters – Report a security vulnerability](https://bughunters.google.com/report)
- [ISO/IEC 27001 – Google Cloud/Workspace Compliance](https://cloud.google.com/security/compliance/iso-27001)
- [SOC 2 – Google Cloud/Workspace Compliance](https://cloud.google.com/security/compliance/soc-2)
- [Optionen für flexible Preismodelle vergleichen (Google Workspace)](https://workspace.google.com/pricing?hl=de)
- [Google Meet Transparency/Acceptable Use (Service-specific terms list)](https://policies.google.com/terms/service-specific?hl=en_US)
- [Google Transparency Report](https://transparencyreport.google.com/?hl=de)
- [Google Meet](https://meet.google.com/)
- [Google Meet – Produktseite (Workspace)](https://workspace.google.com/products/meet/)
- [Google Privacy Policy](https://policies.google.com/privacy?hl=de)
- [Google Terms of Service](https://policies.google.com/terms?hl=de)
- [Google Workspace DPA (09242021)](https://workspace.google.com/terms/09242021/dpa_terms/)
- [Google Workspace Terms – Subprocessors](https://workspace.google.com/terms/subprocessors/)
- [Google Meet: Security & privacy for IT admins](https://support.google.com/a/answer/7582940?hl=en)
- [Data retention and lag times (Google Workspace Admin)](https://support.google.com/a/answer/7061566?hl=en)
- [Manage Host Controls (Google Meet Help)](https://support.google.com/meet/answer/16229038?hl=en)
- [Lock audio & video (Google Meet Help)](https://support.google.com/meet/answer/11274707?hl=en)
- [Join a video meeting (Google Meet Help)](https://support.google.com/meet/answer/9303069?hl=en)
- [Learn about call & meeting encryption in Google Meet](https://support.google.com/meet/answer/12387251?hl=en-GB)
- [Learn about Meet client-side encryption (CSE)](https://support.google.com/meet/answer/11605714?hl=en)
- [Record a video meeting (Google Meet Help)](https://support.google.com/meet/answer/9308681?hl=en)
- [Use meeting transcripts (Google Meet Help)](https://support.google.com/meet/answer/12849897?hl=en)
- [Google Bug Hunters – Report a security vulnerability](https://bughunters.google.com/report)
- [ISO/IEC 27001 – Google Cloud/Workspace Compliance](https://cloud.google.com/security/compliance/iso-27001)
- [SOC 2 – Google Cloud/Workspace Compliance](https://cloud.google.com/security/compliance/soc-2)
- [Optionen für flexible Preismodelle vergleichen (Google Workspace)](https://workspace.google.com/pricing?hl=de)
- [Google Meet Transparency/Acceptable Use (Service-specific terms list)](https://policies.google.com/terms/service-specific?hl=en_US)
- [Google Transparency Report](https://transparencyreport.google.com/?hl=de)
