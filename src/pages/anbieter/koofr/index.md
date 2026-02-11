---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Koofr"
url: "/anbieter/koofr/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-17"
robots: "index,follow"
description: "Kurzprofil von Koofr (Kategorie: Cloud & Sync)."
provider: ""
name: "Koofr"
category: "Cloud & Sync"
website: "https://koofr.eu/"
repo: "https://github.com/koofr/vault"
license: "MIT (Koofr Vault); Service proprietär"
policies: ""
privacy: "https://koofr.eu/privacy/"
terms: "https://koofr.eu/tos/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "freemium"
free_tier: "yes"
open_source: "partial"
self_host_possible: "unknown"
account_required: "yes"
phone_required: "no"
kyc_required: "unknown"
jurisdiction: "Slowenien (Koofr d.o.o.)"
region: "eu"
logs: "minimal"
retention: "long"
retention_notes: "3 Monate (Activity-/System-Logs, laut Privacy Policy)"
retention_max_days: "90"
data_notes: "Koofr ist ein Cloud-&-Sync-Dienst mit optionalen Integrationen (z.B. Microsoft Office). Registrierung erfordert laut Privacy Policy u.a. Name + E-Mail. Zahlungen laufen über Braintree/PayPal; Koofr nennt Activity/System-Logs mit begrenzter Aufbewahrung (3 Monate)."
features: ""
alternatives: ""
sources: ""
---
## Kurzprofil

Koofr ist ein Anbieter aus der Kategorie **Cloud & Sync**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Cloud-Speicher mit EU-Anbieterbezug nutzen willst und Features wie WebDAV/rclone, Teilen per Link und optionale Browser-Office-Bearbeitung brauchst.
- **Weniger geeignet wenn:** du zwingend vollständige Client-side-Verschlüsselung für *alle* Daten ohne Ausnahme erwartest oder Self-Hosting/Offline-only möchtest.
- **Wichtigster Abwägung:** Komfortfunktionen (Freigaben, Office-Integration) vs. zusätzliche Datenflüsse/Abhängigkeiten von Drittanbietern (z.B. Microsoft bei Office for the web).

## Sofortmaßnahmen
- **2FA aktivieren (Authenticator-App) + Recovery Codes offline sichern:** reduziert Risiko bei Passwort-Leaks/Phishing.
- **WebDAV/rclone nur mit App-Passwort nutzen:** begrenzt Schaden, falls ein Client kompromittiert wird.
- **Sensible Dateien in Koofr Vault ablegen:** Inhalte bleiben client-side verschlüsselt, Safe Key wird laut Anbieter nicht an Koofr übertragen.

## Entscheidungshilfe
- Wenn du **Browser-Office** (Word/Excel/PowerPoint) direkt in Koofr nutzen willst, dann akzeptiere den Consent-Flow (Abwägung: Kopien der Office-Dateien werden zu Microsoft 365 hochgeladen; Koofr-Privacy gilt für diese Kopien nicht).
- Wenn du **minimale Drittanbieter-Datenflüsse** willst, dann nutze keine optionalen Integrationen (Abwägung: weniger Komfort/Funktionen wie Office im Browser).
- Wenn du **WebDAV/rclone** brauchst, dann nutze App-Passwörter statt des Hauptpassworts (Abwägung: zusätzlicher Einrichtung-Schritt).
- Wenn du **Inhaltszugriff durch Server-Komponenten reduzieren** willst, dann nutze Koofr Vault für ausgewählte Ordner (Abwägung: Safe Key ist nicht zurücksetzbar; Verlust kann Datenverlust bedeuten).
- Wenn du **kontofreie Nutzung** erwartest, dann passt Koofr weniger gut (Abwägung: Cloud-Speicher erfordert in der Regel ein Konto).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Koofr |
| Kategorie | Cloud & Sync |
| Website | https://koofr.eu/ |
| Quellcode | https://github.com/koofr/vault |
| Lizenz | MIT (Koofr Vault); Service proprietär |
| Preismodell | freemium |
| Free Tier | yes |
| Open Source | partial |
| Konto erforderlich | yes |
| Telefon erforderlich | no |
| KYC erforderlich | unknown |
| Zahlungsabwicklung | Braintree, PayPal (Kreditkarte/PayPal/Rechnung) |
| Jurisdiktion | Slowenien (Koofr d.o.o.) |
| Logs | minimal |
| Retention | 3 Monate (Activity-/System-Logs, laut Privacy Policy) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://koofr.eu/privacy/
- AGB/Terms: https://koofr.eu/tos/
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Koofr nennt u.a. Kontodaten (Name/E-Mail), Zahlungsdaten über Zahlungsdienstleister sowie Activity-/System-Logs mit begrenzter Aufbewahrung. Optional: Integrationen (z.B. Microsoft Office) mit separaten Policies/Consent.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Kontodaten (z.B. Name, E-Mail), je nach Nutzung zusätzlich Abrechnungs-/Zahlungsdaten sowie technische Daten (z.B. IP/Logs) laut Privacy Policy.
- **Wofür:** Betrieb des Dienstes (Account, Abrechnung, Support, Sicherheit/Fehleranalyse) laut Privacy Policy.
- **Weitergabe/Subprozessoren:** Privacy Policy nennt externe Dienstleister (z.B. für Accounting/Billing), aber keine öffentliche vollständige Liste.
- **Drittlandtransfer:** Nicht angegeben (Hinweis: bei optionalen Integrationen gelten deren Policies).
- **Zahlungsabwicklung/Payment Processor:** Laut Terms of Service: Zahlungen über Braintree und PayPal.
- **Kontakt/DSAR/DPA:** Privacy Policy nennt Support-Kontakt und DPO-Adresse; Account-Löschung per Anfrage/Account-Deletion laut Policy.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Terms of Service: keine Drittanbieter-Cookies/Analytics und kein Tracking der Aktivität; Privacy Policy nennt dennoch technische Datenverarbeitung (z.B. IP/Logs) für Betrieb/Website-Services.
- **Abschaltbar?** Nicht angegeben (Tracking/Analytics wird laut Anbieter nicht eingesetzt; technische Logs sind betrieblich).
- **Wo (Menüpfad):** Koofr Web-App (Account/Activity/Preferences je nach Funktion) – prüfe insbesondere Account-Sicherheits- und Aktivitätsansichten.

**Logs & Retention:**
- **Logging-Level:** minimal (technische Logs/Activity-Ereignisse laut Privacy Policy)
- **Aufbewahrung:** 3 Monate (laut Privacy Policy)
- **Lösch-/Opt-out-Optionen:** Account-Löschung ist vorgesehen; Details laut Privacy Policy (Löschung kann endgültig sein).

**Abwägung am Punkt:** Weniger Telemetrie kann Diagnose/Support erschweren; mehr Telemetrie erhöht Metadatenrisiko.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Koofr beschreibt Transportverschlüsselung (TLS/SSL) und serverseitige Verschlüsselung; Koofr Vault verschlüsselt lokal auf dem Gerät (Safe Key wird laut Help nicht an Koofr übertragen).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA ist dokumentiert (Authenticator-App/TOTP); Recovery Codes werden in Help-Artikeln erwähnt.
- **Recovery/Account-Wiederherstellung:** Koofr Vault Safe Key ist nicht zurücksetzbar; bei Verlust sind Vault-Dateien nicht wiederherstellbar.
- **Vuln-Handling / Security-Kontakt:** Allgemeiner Support-/DPO-Kontakt ist dokumentiert; ein expliziter Responsible-Disclosure/VDP-Prozess ist nicht angegeben.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **2FA aktivieren (Authenticator-App/TOTP)**.  
   **Wo:** Koofr Web-App → Profilbild (oben rechts) → Preferences → (Security/2FA je nach UI).  
   **Prüfen:** erneuter Login fordert zusätzlich TOTP-Code.
2) **Recovery Codes sicher offline ablegen** (nicht nur im gleichen Cloud-Speicher).  
   **Prüfen:** Recovery Codes sind exportiert/gespeichert, Zugriff auch ohne Koofr möglich.
3) **App-Passwort für WebDAV/rclone generieren (falls genutzt)** statt Hauptpasswort.  
   **Wo:** Profilbild → Preferences → Password → App passwords (Generate).  
   **Prüfen:** WebDAV/rclone funktioniert mit App-Passwort; Hauptpasswort bleibt getrennt.

**Stolpersteine:**
- **Koofr Vault Safe Key ist nicht resetbar:** Safe-Key-Verlust bedeutet Datenverlust im Vault (Abwägung: weniger Provider-Zugriff vs. keine Recovery).
- **Office for the web (optional):** Consent bedeutet Upload von Kopien zu Microsoft 365; Koofr-Privacy gilt dafür nicht (Abwägung: Browser-Bearbeitung vs. Drittanbieter-Datenfluss).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze nur die Kernfunktion (Storage/Sync) und verzichte auf optionale Integrationen (z.B. Office), wenn du Datenflüsse reduzieren willst.  
  **Abwägung:** weniger Komfort (keine direkte Browser-Bearbeitung).
- Teile Dateien bevorzugt gezielt (nur notwendige Freigaben), lösche alte öffentliche Links regelmäßig.  
  **Abwägung:** mehr manuelle Pflege.
- Nutze Koofr Vault nur für den Teil der Daten, der wirklich client-side verschlüsselt sein soll.  
  **Abwägung:** Safe-Key-Handling (Backup/Recovery) wird wichtiger.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Trenne Nutzungskontexte: eigener Browser/Profil nur für Koofr, kein „Alltagsprofil“ mit vielen Extensions.  
  **Abwägung:** mehr Reibung im Alltag.
- Koofr Vault: Safe Key nur in einem dedizierten Secret-Manager/Offline-Backup speichern; keine Wiederverwendung.  
  **Abwägung:** deutlich mehr Schlüssel-Disziplin.
- Vermeide Office-Integration und öffentliche Links, nutze stattdessen verschlüsselte Workflows (lokal + Upload).  
  **Abwägung:** Kollaboration/Komfort sinkt.

</details>

## Features
- Koofr Web-App + Desktop-/Mobile-Apps (Cloud-Speicher & Sync)
- WebDAV/rclone-Zugriff (mit App-Passwörtern)
- Teilen per Link (auch zeitbegrenzt) und privates Teilen mit Koofr-Nutzern (planabhängig)
- Dateiversionierung und Wiederherstellungsfunktionen (planabhängig)
- Koofr Vault: client-side verschlüsselter Ordner (Open Source, MIT)
- Optionale Integrationen: z.B. Microsoft Office for the web (Consent + separate Policies)

## Alternativen
- [Nextcloud](/anbieter/nextcloud/)
- [Syncthing](/anbieter/syncthing/)
- Seafile (ähnliche Kategorie, Self-Hosting; **Abwägung:** Serverbetrieb + Admin-Aufwand)

## Nicht gelöst / offene Punkte
- Öffentliche Subprozessorenliste/DPA: nicht als eigene Seite gefunden.
- Responsible Disclosure / Security-Kontakt speziell für Sicherheitsmeldungen: nicht klar dokumentiert.

## Quellen

- Optionale Integration: "Microsoft Office for the web (Consent + Kopien bei Microsoft)
- Koofr Vault: "client-side verschlüsselter Ordner (Open Source, MIT)
- Nextcloud (Self-Hosting möglich; Trade-off: "eigener Betrieb/Updates)
- Syncthing (P2P-Sync ohne Cloud-Konto; Trade-off: "weniger zentrale Sharing-/Web-UI)
- Seafile (Self-Hosting; Trade-off: "Admin-Aufwand, Serverbetrieb)
- https://koofr.euposts/improving-your-koofr-account-security-together
- [Koofr Privacy Policy](https://koofr.eu/privacy/)
- [Koofr Terms of Service](https://koofr.eu/tos/)
- [Koofr Plans and pricing](https://koofr.eu/pricing/)
- [Help: Is Koofr safe to use?](https://koofr.eu/help/privacy-and-safety-on-koofr/is-koofr-safe-to-use/)
- [Help: Where are my files being kept?](https://koofr.eu/help/where-are-my-files-being-kept/)
- [Integrations: Microsoft Office for the web](https://koofr.eu/integrations/microsoft-office/)
- [Help: Is my Safe Key transferred or stored on Koofr?](https://koofr.eu/help/koofr-vault/is-my-safe-key-transferred-or-stored-on-koofr/)
- [Help: Can I reset my Koofr Vault Safe Key?](https://koofr.eu/help/koofr-vault/can-i-reset-my-koofr-vault-safe-key-in-case-i-forget-it/)
- [GitHub: koofr/vault (MIT)](https://github.com/koofr/vault)
- [Blog: Improving your Koofr account security (App passwords)](https://koofr.euposts/improving-your-koofr-account-security-together)
