---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / CalyxOS"
url: "/anbieter/calyxos/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-07"
robots: "index,follow"
description: "Kurzprofil von CalyxOS (Kategorie: Betriebssysteme)."
provider: ""
name: "CalyxOS"
category: "Betriebssysteme"
website: "https://calyxos.org/"
repo: "https://gitlab.com/CalyxOS"
license: "mixed"
policies: ""
privacy: "https://calyxinstitute.org/legal/privacy-policy"
terms: "https://calyxinstitute.org/legal/terms-of-service"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "unknown"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "USA (Calyx Institute, Brooklyn NY)"
region: "us"
logs: "minimal"
retention: "unknown"
retention_notes: "Kurzfristige per-request Logs; danach aggregiert (genaue Dauer nicht angegeben)"
data_notes: "CalyxOS dokumentiert Netzwerkverbindungen (u.a. OTA-Update-Check). Für Updates können kurzfristige Request-Logs anfallen (IP, Land, Gerätemodell), später nur aggregierte Zähler. Optionales microG kann je nach Modus Verbindungen zu Google für Push/Registrierung aufbauen."
features: ""
alternatives: ""
payment_processors: "PayPal (inkl. Kreditkarte via PayPal); Kryptowährungen (Checkout-Option laut Calyx Institute)"
sources: ""
---
## Kurzprofil

CalyxOS ist ein Anbieter aus der Kategorie **Betriebssysteme**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du ein Android-basiertes System ohne dauerhaft laufende Google-Services nutzen willst und mit optionalen Komponenten (z.B. microG) je nach App-Bedarf arbeiten kannst.
- **Weniger geeignet wenn:** du zwingend auf durchgängige, zeitnahe OTA-Sicherheitsupdates angewiesen bist (laut CalyxOS-Doku sind Releases aktuell pausiert) oder wenn du keine Custom-ROM-Installation/Bootloader-Themen anfassen willst.
- **Wichtigster Abwägung:** App-Kompatibilität & Komfort (Push, Play-Katalog via Aurora/microG) vs. zusätzliche Metadaten/Verbindungen (z.B. Google-Dienste für Push/Connectivity-Check je nach Modus).

## Sofortmaßnahmen
- **Connectivity Check prüfen:** falls du ihn nicht brauchst, deaktivieren (Abwägung: weniger Komfort bei Captive-Portals/Netzerkennung).
- **microG-Modus bewusst wählen:** Push/Google-Verbindungen nur aktivieren, wenn Apps es wirklich brauchen (Abwägung: ohne Push teils mehr Akku/Verzögerungen).
- **Datura Firewall nutzen:** Hintergrund-Netzwerk für Apps begrenzen (Abwägung: manche Apps funktionieren dann nur eingeschränkt).

## Entscheidungshilfe
- Wenn du Push-Benachrichtigungen für viele Apps brauchst, dann nutze microG mit Push (Abwägung: es entstehen Verbindungen zu Google-Servern, Metadaten wie Zeitpunkte von Push können anfallen).
- Wenn du möglichst wenig Google-Verkehr willst, dann nutze microG ohne Push oder komplett deaktiviert (Abwägung: manche Apps laufen nicht oder prüfen häufiger selbst auf Updates/Nachrichten).
- Wenn du die Android-Sicherheitsannahmen (Verified Boot) erhalten willst, dann plane Bootloader-Re-Lock nach der Installation ein (Abwägung: Installation/Recovery wird „schärfer“ und Fehler können zum Wipe führen).
- Wenn du die Update-Frequenz kontrollieren willst, dann nutze die Update-Einstellungen unter **Settings → System → Updates** (Abwägung: manuelle Kontrolle erfordert Disziplin).
- Wenn du Fehlerberichte teilst, dann tue das nur vertraulich (Abwägung: Bugreports enthalten potenziell sensitive Logdaten).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | CalyxOS |
| Kategorie | Betriebssysteme |
| Website | https://calyxos.org/ |
| Quellcode | https://gitlab.com/CalyxOS |
| Lizenz | Gemischte Lizenzen (nicht als Gesamtpaket angegeben) |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | PayPal (inkl. Kreditkarte via PayPal); Kryptowährungen (Checkout-Option laut Calyx Institute) |
| Jurisdiktion | USA (Calyx Institute, Brooklyn NY) |
| Logs | minimal |
| Retention | Kurzfristige per-request Logs; danach aggregiert (genaue Dauer nicht angegeben) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://calyxinstitute.org/legal/privacy-policy
- AGB/Terms: https://calyxinstitute.org/legal/terms-of-service
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
CalyxOS dokumentiert Netzwerkverbindungen (u.a. OTA-Update-Check). Für Updates können kurzfristige Request-Logs anfallen (IP, Land, Gerätemodell), später nur aggregierte Zähler. Optionales microG kann je nach Modus Verbindungen zu Google für Push/Registrierung aufbauen.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - Bei OTA-Updates: kurzfristige Request-Logs können **IP-Adresse, Herkunftsland, Gerätemodell** enthalten; langfristig bleiben laut Doku aggregierte Zähler (Requests nach Land/Modell).  
  - Bei microG (je nach Modus): **IP-Adresse + Gerätemodell** bei Registrierung; optional **Google-Username**, wenn ein Google-Konto in microG konfiguriert wird.
- **Wofür:**  
  - OTA-Update-Check/Verteilung, sowie Statistik/Monitoring in aggregierter Form (laut Doku).  
  - microG: App-Kompatibilität + Push-Funktion (je nach Modus).
- **Weitergabe/Subprozessoren:** In der Calyx-Institute-Privacy-Policy nicht als öffentliche Subprozessoren-Liste ausgewiesen; Mitgliedsdaten werden laut Policy (Stand dort) verschlüsselt auf Vultr gespeichert.
- **Drittlandtransfer:** Nicht angegeben.
- **Zahlungsabwicklung/Payment Processor:** Für Beiträge/Spenden nennt Calyx Institute PayPal als Zahlungsabwicklung (Kreditkarte über PayPal-Option); Kryptowährungen als Checkout-Option.
- **Kontakt/DSAR/DPA:** Privacy-Policy nennt Kontakt über help@calyxinstitute.org sowie Postadresse; DPA/DSAR-Prozess als separates Dokument nicht angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Keine generische „Analytics“-Telemetrie in den Primärquellen als Feature-Schalter beschrieben; es sind aber dokumentierte Netzwerkverbindungen für Systemfunktionen vorhanden (z.B. Updates/Connectivity Check).
- **Abschaltbar?**  
  - Connectivity Check kann in Android deaktiviert werden (Settings → Network & internet → Connectivity check).  
  - microG ist optional bzw. in Modi betreibbar (bis hin zu deaktiviert).
- **Wo (Menüpfad):**
  - **Connectivity Check:** Settings → Network & internet → Connectivity check  
  - **Updates:** Settings → System → Updates

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** Kurzfristige per-request Logs; danach aggregiert (genaue Dauer nicht angegeben)
- **Lösch-/Opt-out-Optionen:** Für OTA-Request-Logs keine Opt-out-Option dokumentiert (Update-Check ist Kernfunktion); microG/Connectivity-Check kann optional deaktiviert werden.

**Abwägung am Punkt:** Weniger Verbindungen/Logs reduziert Metadaten, kann aber Komfort (Push, Netzerkennung) oder Wartbarkeit (Updates) einschränken.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** CalyxOS ist ein OS; E2E betrifft primär Apps. Für Backups nennt CalyxOS client-seitige Verschlüsselung (SeedVault).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** Für das OS selbst nicht als „Account Feature“ angegeben (stattdessen Gerätesperre/PIN etc.).
- **Recovery/Account-Wiederherstellung:** Kein CalyxOS-Account nötig; relevant ist Geräte-Backup/Restore (SeedVault) und Installations-/Bootloader-Prozess.
- **Vuln-Handling / Security-Kontakt:** Bugtracker ist GitLab; vertrauliche Issues sind möglich. Ein separater Responsible-Disclosure-Prozess (SECURITY.md) ist nicht als Standarddokument verlinkt.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Gerätesperre stark setzen** (PIN/Passwort, Fingerprint optional).  
   **Prüfen:** Gerät verlangt PIN/Passwort nach Neustart; Sperre greift zuverlässig.
2) **Updates aktiv prüfen** (und Reboot einplanen).  
   **Prüfen:** Settings → System → Updates zeigt Status/Changelog.
3) **microG bewusst konfigurieren** (oder deaktivieren, wenn nicht benötigt).  
   **Prüfen:** Apps mit Push/Maps-Verhalten testen (Benachrichtigungen, Akkuverbrauch).

**Stolpersteine:**
- **Bootloader-Themen:** Für das Android-Sicherheitsmodell ist Verified Boot inkl. Re-Lock relevant (Abwägung: Installation/Recovery wird fehleranfälliger, wenn man später wieder umbaut).
- **Bugreports sind sensibel:** Bugreport-Zips enthalten potenziell vertrauliche Informationen und sollten nicht öffentlich gepostet werden.

<details>
<summary>Profil B (Datensparsam)</summary>

- microG ohne Google-Konto nutzen (oder deaktivieren), Push nur wenn nötig.
- **Connectivity Check deaktivieren** (Settings → Network & internet → Connectivity check), wenn du es nicht brauchst.
- Datura Firewall: Hintergrunddaten für Apps, die nicht „nach Hause funken“ sollen, blocken.
**Abwägung:** Weniger Komfort (Push/Captive-Portals), mehr manuelles Testen.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Strikter App-Minimalismus: nur nötige Apps, restriktive Netzwerkregeln (Datura).
- Geräte- und Identitäts-Trennung (z.B. getrennte Profile/Work Profile, je nach Use-Case).
- Keine sensiblen Bugreports/Logs außerhalb vertraulicher Kanäle teilen.
**Abwägung:** Deutlich mehr Aufwand und höhere Chance, dass Apps/Flows nicht funktionieren.

</details>

## Features
- Verified Boot (inkl. Bootloader-Re-Lock nach Installation)
- OTA-Updates (Settings → System → Updates)
- Datura Firewall (App-Netzwerkzugriff pro App steuerbar)
- SeedVault: integrierte, client-seitig verschlüsselte Backups (USB/online je nach Einrichtung)
- Optionales microG (verschiedene Modi, inkl. ohne Google-Konto)
- F-Droid (Basic) + CalyxOS-eigenes Repo für App-Updates
- Aurora Store (Play-Store-Katalog über separaten Client, mit Privileg-Erweiterung)

## Alternativen
- GrapheneOS (ähnliche Kategorie; Abwägung: Geräte-/Ökosystem-Schwerpunkt anders)
- LineageOS (ähnliche Kategorie; Abwägung: breites Gerätefeld, je nach Device sehr unterschiedlich bei Update-Prozessen und Defaults)

## Nicht gelöst / offene Punkte
- Laut CalyxOS-Doku sind Releases aktuell pausiert (Auswirkung: Sicherheits-/Patch-Planbarkeit).
- Öffentliche Subprozessoren-/DPA-Liste nicht auffindbar (Stand: 2026-01-05).
- Kein klarer Responsible-Disclosure-Prozess (SECURITY.md / dedizierter Security-Kontakt) ersichtlich.

## Quellen

- OTA-Updates (Einstellungen: "Settings → System → Updates)
- SeedVault: "integrierte, client-seitig verschlüsselte Backups (USB/online je nach Setup)
- GrapheneOS (ähnliche Kategorie; Trade-off: "Geräte-/Ökosystem-Schwerpunkt anders)
- LineageOS (ähnliche Kategorie; Trade-off: "meist mehr Varianten/Customizing, je nach Device sehr unterschiedlich bei Update-Prozessen)
- https://calyxinstitute.org/help/donations-and-payments/payment-options
- [CalyxOS – Startseite](https://calyxos.org/)
- [CalyxOS – Features](https://calyxos.org/features/)
- [CalyxOS – Features list](https://calyxos.org/features/list/)
- [CalyxOS Docs – Device Support](https://calyxos.org/docs/guide/device-support/)
- [CalyxOS Docs – Updates](https://calyxos.org/docs/guide/updates/)
- [CalyxOS Docs – Network Activity](https://calyxos.org/docs/guide/security/network-activity/)
- [CalyxOS Docs – microG](https://calyxos.org/docs/guide/microg/)
- [CalyxOS Docs – Security FAQ](https://calyxos.org/docs/guide/security/security-faq/)
- [CalyxOS Docs – Bug Reporting](https://calyxos.org/docs/guide/bug-reporting/)
- [CalyxOS – GitLab Gruppe](https://gitlab.com/CalyxOS)
- [Calyx Institute – Privacy Policy](https://calyxinstitute.org/legal/privacy-policy)
- [Calyx Institute – Terms of Service](https://calyxinstitute.org/legal/terms-of-service)
- [Calyx Institute – Payment methods](https://calyxinstitute.org/help/donations-and-payments/payment-options)
