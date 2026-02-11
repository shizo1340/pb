---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Ente Auth"
url: "/anbieter/ente-auth/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-12"
robots: "index,follow"
description: "Kurzprofil von Ente Auth (Kategorie: 2FA)."
provider: ""
name: "Ente Auth"
category: "2FA"
website: "https://ente.io/auth/"
repo: "https://github.com/ente-io/ente"
license: "AGPL-3.0-only"
policies: ""
privacy: "https://ente.io/privacy/"
terms: "https://ente.io/terms/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA (Delaware; Gerichtsstand Santa Clara County, CA – laut Terms)"
region: "us"
logs: "minimal"
retention: "specified"
retention_notes: "60d (Account-Daten nach Kündigung; Details laut Privacy Policy)"
data_notes: "Ente Auth: kein Konto nötig. Optionales Konto (E-Mail) für E2EE-Backups/Sync; Crash-Reporting laut Anbieter nur Opt-in."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Ente Auth ist ein Anbieter aus der Kategorie **2FA**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du eine 2FA-App willst, die **ohne Konto offline** nutzbar ist und bei Bedarf **E2EE-Backups/Sync** zwischen Geräten anbietet.
- **Weniger geeignet wenn:** du grundsätzlich **keinen** Serverkontakt (auch nicht für Sync/Backups) möchtest oder sehr strikte Metadaten-Minimierung brauchst.
- **Wichtigster Abwägung:** **Recovery & Komfort (Sync/Backups)** vs. **zusätzliche Metadaten** (Konto per E-Mail, Serververbindungen/Logs).

## Sofortmaßnahmen
- **FaceID/Lockscreen aktivieren** (Settings → Security → Lockscreen): reduziert Risiko bei Zugriff auf ein entsperrtes Gerät.
- **Lokales Backup einschalten** (Settings → Data → Local backup): verbessert Recovery bei Geräteverlust auch ohne Cloud-Sync.
- **Backup-/Recovery-Pfade testen** (Export/Import einmal durchspielen): verhindert böse Überraschungen im Ernstfall.

## Entscheidungshilfe
- Wenn du **ohne Konto** bleiben willst, dann nutze Ente Auth **offline ohne Cloud-Backup** (Abwägung: Wiederherstellung hängt von lokalen Backups/Export ab).
- Wenn du **mehrere Geräte** synchron halten willst, dann nutze **E2EE-Backups/Sync** über ein Ente-Konto (Abwägung: E-Mail-Konto-Bindung und Server-Metadaten wie IP/Logs möglich).
- Wenn du **Geräteverlust** realistischerweise einkalkulierst, dann aktiviere **Local backup** + setze ein starkes Backup-Passwort (Abwägung: zusätzliches Passwort-Management).
- Wenn du **Crash-/Diagnosedaten** vermeiden willst, dann lasse Crash-Reporting deaktiviert (Abwägung: weniger hilfreiche Fehlerdiagnosen für Support/Entwicklung).
- Wenn du **maximale Kontrolle** willst, dann ist **Self-Hosting** der Ente-Plattform relevant (Abwägung: eigener Betrieb/Updates/Absicherung).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Ente Auth |
| Kategorie | 2FA |
| Website | https://ente.io/auth/ |
| Quellcode | https://github.com/ente-io/ente |
| Lizenz | AGPL-3.0-only |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | nein (optional für Cloud-Backup/Sync) |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht angegeben (Ente Auth selbst kostenlos; Zahlungsanbieter werden für kostenpflichtige Ente-Dienste in Anbieter-Docs erwähnt) |
| Jurisdiktion | USA (Delaware; Gerichtsstand Santa Clara County, CA – laut Terms) |
| Logs | minimal (laut Privacy Policy u.a. Server-Logs/Device-Identifier wie IP/User-Agent möglich) |
| Retention | 60d (Account-Daten nach Kündigung; Details laut Privacy Policy) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://ente.io/privacy/
- AGB/Terms: https://ente.io/terms/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Krypto-/Produkt-Audits (laut Anbieter: Cure53)
- Krypto-/Produkt-Audits (laut Anbieter: Symbolic Software)
- Krypto-/Produkt-Audits (laut Anbieter: Fallible)

**Daten-Notizen (kurz):**
Ente Auth ist ohne Konto nutzbar. Für Cloud-Backups/Sync kann ein Ente-Konto verwendet werden (E-Mail). Laut Anbieter ist Crash-Reporting nur per Opt-in aktiv.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - **Ohne Konto:** laut Anbieter „keine Daten“ (Default).  
  - **Mit Konto (für Backup/Sync):** E-Mail-Adresse, serverseitig generierte User-ID, sowie 2FA-Secrets als **Ende-zu-Ende-verschlüsselter** Inhalt.  
  - **Optional:** anonymisierte Diagnosedaten nur bei Opt-in in Crash-Reporting.
- **Wofür:** Konto-Erstellung/Kommunikation (E-Mail), Bereitstellung von E2EE-Backup/Sync, Stabilität/Fehlerbehebung bei Opt-in-Diagnostik.
- **Weitergabe/Subprozessoren:** Privacy Policy beschreibt Verarbeitung über Dienstleister/Partner-Kategorien; eine öffentliche, explizite Subprozessoren-Liste ist nicht eindeutig auf der Oberfläche verlinkt.
- **Drittlandtransfer:** Terms/Privacy erwähnen mögliche Übertragung/Verarbeitung in den USA und/oder anderen Ländern (z.B. für Verarbeitung/Storage).
- **Zahlungsabwicklung/Payment Processor:** Für Ente Auth nicht relevant (kostenlos); bei Ente-Diensten mit Abo werden Zahlungsanbieter in Anbieter-Docs/Privacy erwähnt.
- **Kontakt/DSAR/DPA:** Support-Kontakt ist in den Terms genannt (support@ente.io); DSAR/DPA-Prozess ist nicht prominent in den Auth-spezifischen Seiten zusammengefasst.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Anbieter sammelt Ente Auth **keine Daten by default**; Diagnosedaten nur bei **Opt-in** für Crash-Reporting.
- **Abschaltbar?** Crash-Reporting ist als Opt-in beschrieben; ein separater „Opt-out“-Schalter ist damit implizit, sollte aber in der App geprüft werden.
- **Wo (Menüpfad):** In den Auth-FAQ ist ein Menüpfad für Lock (Settings → Security → Lockscreen) dokumentiert; der genaue Pfad für Crash-Reporting ist in den Auth-Seiten nicht eindeutig benannt.

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** 60d (Account-Daten nach Kündigung; Details laut Privacy Policy)
- **Lösch-/Opt-out-Optionen:** Account-Löschung ist in Ente-FAQ/Privacy beschrieben; für Auth ohne Konto entfällt serverseitige Löschung.

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Ente Auth beschreibt Cloud-Backups/Sync als **Ende-zu-Ende-verschlüsselt**; 2FA-Secrets sind laut Anbieter nur für dich zugreifbar.
- **KDF/Parameter/Schlüsselableitung:** Für Ente Auth-Export/Backups wird ein Schlüssel aus einem userseitigen Passwort und KDF-Parametern abgeleitet; für die Plattform nennt Ente Argon2id (hohe Parameter) und XChaCha20/XSalsa20 + Poly1305 (libsodium).
- **MFA/2FA/Passkeys/Hardware-Keys:** Ente beschreibt für Accounts 2FA-Optionen (z.B. TOTP/WebAuthn/Passkeys) in den Security/Privacy-FAQ; relevant, falls du ein Ente-Konto für Auth-Backups verwendest.
- **Recovery/Account-Wiederherstellung:** Bei Konto-Registrierung wird laut Terms ein **Recovery Key** bereitgestellt; dieser ist für Account-Recovery relevant und sollte offline gesichert werden.
- **Vuln-Handling / Security-Kontakt:** Ein dedizierter Disclosure-Prozess ist im Repo als SECURITY.md angelegt, Support-Kontakt ist in den Terms dokumentiert.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **App-Lock aktivieren** (Settings → Security → Lockscreen, z.B. FaceID/Device Lock).  
   **Prüfen:** App verlangt Entsperren nach Schließen/Timeout.
2) **Backups für Geräteverlust vorbereiten:**  
   - **Local backup aktivieren** (Settings → Data → Local backup) und ein starkes Backup-Passwort setzen.  
   - Zusätzlich einmal **Export** testen (damit Import/Restore im Ernstfall sitzt).  
   **Prüfen:** Backup-Datei existiert im gewählten Ordner + Wiederherstellungs-Test auf Zweitgerät/Profil.
3) **Optional: Cloud-Sync bewusst aktivieren** (nur wenn du Multi-Device brauchst).  
   **Prüfen:** Sync funktioniert, ohne dass du deinen Recovery-Pfad aus den Augen verlierst (Recovery Key offline gesichert).

**Stolpersteine:**
- Die Auth-Lockscreen-Funktion ist laut Anbieter eine **Zugriffsbarriere**, aber **keine zusätzliche Kryptoschicht** gegen kompromittierte Systeme.
- Wenn du ein Ente-Konto nutzt: **Recovery Key offline** sichern (Abwägung: mehr Key-Management, aber weniger Lockout-Risiko).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze Ente Auth **ohne Konto** (keine E-Mail-Bindung), und sichere dich über **Local backup + regelmäßigen Export** ab.
- Aktiviere Crash-Reporting nicht (laut Anbieter Opt-in), um Diagnosedaten zu vermeiden.
- Nutze die Web-Variante (auth.ente.io) nur, wenn nötig, und bevorzugt in einem getrennten Browser-Profil.  
**Abwägung:** weniger Komfort durch fehlenden Cloud-Sync, mehr Eigenverantwortung beim Backup.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Halte Tokens **offline** (kein Konto/kein Sync), nutze nur lokale Backups, und lagere Backup-Dateien zusätzlich offline (z.B. externes Medium).
- Trenne Ente Auth von anderen Accounts/Browser-Identitäten (dediziertes Geräteprofil/Benutzerkonto/VM), wenn du Metadaten-Korrelation minimieren willst.
- Vermeide es, den Backup-Passwort-Schutz schwach zu wählen: nutze einen starken, einzigartigen Key und bewahre ihn getrennt auf.  
**Abwägung:** deutlicher Komfortverlust, mehr Betriebsaufwand und höheres Risiko von Bedienfehlern, wenn Prozesse nicht geübt sind.

</details>

## Features
- E2EE-Backups (optional) für 2FA-Secrets
- Cross-Platform: Mobile, Desktop, Web (auth.ente.io)
- Offline nutzbar ohne Konto
- FaceID/Lockscreen-Sperre (App-Barriere, nicht kryptografisch)
- Lokale, kontinuierliche Backups mit Passwort (verschlüsselt)
- Import/Migration & Export (inkl. CLI-Backup möglich)

## Alternativen
- [Authy](/anbieter/authy/)
- Steam Mobile Authenticator (ähnliche Kategorie; stark konto-/plattformgebunden)
- Klassische Offline-Authenticator-Apps ohne Cloud-Backup (Abwägung: weniger Konto-/Server-Metadaten, aber mehr Verlust-Risiko bei Geräteausfall)

## Nicht gelöst / offene Punkte
- Öffentliche Subprozessoren-/DPA-Übersicht ist auf der Oberfläche nicht eindeutig auffindbar.
- Unklarer Menüpfad in Ente Auth für Crash-Reporting/Diagnosedaten (Opt-in ist dokumentiert, konkrete Schalterführung nicht).

## Quellen

- Krypto-/Produkt-Audits (laut Anbieter: "Fallible)
- Cross-Platform: "Mobile, Desktop, Web (auth.ente.io)
- Klassische Offline-Authenticator-Apps ohne Cloud-Backup (Trade-off: "weniger Konto-/Server-Metadaten, aber mehr Verlust-Risiko bei Geräteausfall)
- https://github.com/ente-io/ente
- [Ente Auth (Website)](https://ente.io/auth/)
- [Ente Help: Ente Auth (Übersicht)](https://ente.io/help/auth/)
- [Ente Help: Ente Auth Features](https://ente.io/help/auth/features/)
- [Ente Help: Ente Auth FAQ](https://ente.io/help/auth/faq/)
- [Ente Help: Apple’s app privacy disclosure (Ente Auth)](https://ente.io/help/auth/faq/privacy-disclosure/)
- [Ente Help: Exporting your data from Ente Auth](https://ente.io/help/auth/migration/export)
- [Ente Help: Security and Privacy FAQ](https://ente.io/help/photos/faq/security-and-privacy)
- [Ente Privacy Policy](https://ente.io/privacy/)
- [Ente Terms and Conditions](https://ente.io/terms/)
- [GitHub: ente-io/ente](https://github.com/ente-io/ente)
