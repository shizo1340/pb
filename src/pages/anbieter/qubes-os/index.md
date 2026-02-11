---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / Qubes OS"
url: "/anbieter/qubes-os/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-20"
robots: "index,follow"
description: "Kurzprofil von Qubes OS (Kategorie: Betriebssysteme)."
provider: ""
name: "Qubes OS"
category: "Betriebssysteme"
website: "https://www.qubes-os.org/"
repo: "https://github.com/QubesOS"
license: "GPL-2.0-only (Kompilation); je Repo ggf. abweichend via LICENSE"
policies: ""
privacy: "https://doc.qubes-os.org/en/latest/introduction/privacy.html"
terms: "https://www.qubes-os.org/terms/"
transparency: "Nicht angegeben"
warrant_canary: "https://www.qubes-os.org/security/canary/"
audits: ""
pricing: "free"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "no"
phone_required: "no"
kyc_required: "no"
jurisdiction: "Polen (Website-Privacy nennt Verarbeitung in Polen); Infrastrukturstandorte (Updates/Mirrors) nicht einheitlich angegeben"
region: "uk"
logs: "minimal"
retention: "long"
retention_notes: "bis zu 3 Monate (Update-Server-Zugriffslogs)"
retention_max_days: "90"
data_notes: "Qubes OS ist lokal installierbar und arbeitet primär offline/auf dem eigenen Gerät. Netzwerk-Daten fallen v.a. bei Updates/Websitezugriff an (u.a. IP in Serverzugriffslogs); Onion-Zugriff auf den Webdienst wird laut Anbieter nicht geloggt."
features: ""
alternatives: ""
payment_processors: "Nicht zutreffend (kein Checkout); Spenden optional via Open Collective (Kreditkarte/PayPal) oder EU-Überweisung (CCT) bzw. Krypto"
sources: ""
---
## Kurzprofil

Qubes OS ist ein Anbieter aus der Kategorie **Betriebssysteme**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du Arbeitskontexte (z.B. Browser/Office/Admin) strikt trennen willst und dafür ein VM-/Qube-basiertes Bedienmodell akzeptierst.
- **Weniger geeignet wenn:** du ein „einfaches Standard-Desktop-OS“ mit maximaler Hardware-Kompatibilität und minimaler Komplexität erwartest.
- **Wichtigster Abwägung:** starke Isolation & Sicherheitsmodell vs. höherer Einrichtung-/Betriebsaufwand (Hardware/Workflows/Komplexität).

## Sofortmaßnahmen
- **Disk-Verschlüsselung prüfen (LUKS/dm-crypt ist Standard):** schützt lokale Daten bei Verlust/Diebstahl des Geräts.
- **USB-Geräte isolieren (sys-usb/USB-Qube):** reduziert Risiko, dass USB-Angriffe dom0 erreichen.
- **DispVM für Einmal-Links/Anhänge nutzen:** senkt Persistenz bei riskanten Inhalten.

## Entscheidungshilfe
- Wenn du kompromittierbare Apps (Browser, PDF, Chat) von sensiblen Daten trennen willst, dann arbeite mit getrennten qubes (Abwägung: mehr Pflege/„Fenster- und VM-Management“).
- Wenn du Metadaten gegenüber Qubes-Infrastruktur reduzieren willst, dann route Updates/Netzwerk über Whonix/Tor (Abwägung: langsamer, zusätzliche Komponenten).
- Wenn du Hardware-Sicherheitskeys (FIDO2/CTAP) nutzen willst, dann verwende den CTAP-Proxy statt „USB direkt überall“ (Abwägung: etwas Einrichtung, zusätzlicher Proxy-Pfad).
- Wenn du viele USB-Geräte anschließt (Sticks, Adapter, Eingabegeräte), dann plane die USB-Isolation bewusst ein (Abwägung: mögliche Stolpersteine bei Boot/Entsperren).
- Wenn du Support/Foren/Issue-Tracker nutzen willst, dann beachte: das ist ein öffentliches Ökosystem (Abwägung: potentielle Metadaten durch sichtbare Tickets/Logs).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | Qubes OS |
| Kategorie | Betriebssysteme |
| Website | https://www.qubes-os.org/ |
| Quellcode | https://github.com/QubesOS |
| Lizenz | GPL-2.0-only (Kompilation); je Repo ggf. abweichend via LICENSE |
| Preismodell | free |
| Free Tier | yes |
| Open Source | yes |
| Konto erforderlich | no |
| Telefon erforderlich | no |
| KYC erforderlich | no |
| Zahlungsabwicklung | Nicht zutreffend (kein Checkout); Spenden optional via Open Collective (Kreditkarte/PayPal) oder EU-Überweisung (CCT) bzw. Krypto |
| Jurisdiktion | Polen (Website-Privacy nennt Verarbeitung in Polen); Infrastrukturstandorte (Updates/Mirrors) nicht einheitlich angegeben |
| Logs | minimal |
| Retention | bis zu 3 Monate (Update-Server-Zugriffslogs) |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: https://doc.qubes-os.org/en/latest/introduction/privacy.html
- AGB/Terms: https://www.qubes-os.org/terms/
- Transparency Report: Nicht angegeben
- Warrant Canary: https://www.qubes-os.org/security/canary/

**Audits (laut Anbieter):**
- Nicht angegeben

**Daten-Notizen (kurz):**
Qubes OS ist lokal installierbar und arbeitet primär auf dem eigenen Gerät. Netzwerk-Daten fallen v.a. bei Updates/Websitezugriff an (u.a. IP in Serverzugriffslogs). Der Anbieter nennt explizit, dass Onion-Zugriff auf den Webdienst nicht geloggt wird.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:**  
  - Website: „Usage Data“ kann u.a. IP-Adresse, Browsertyp/-version, besuchte Seiten und Diagnosedaten umfassen.  
  - Update-Server: Serverzugriffs- und Fehlerlogs können IP-Adressen enthalten und werden zur Statistik/Incident-Response genutzt.
- **Wofür:** Betrieb/Verbesserung des Webangebots; Nutzerbasis-Statistiken; Incident-Response (Update-Server-Logs).
- **Weitergabe/Subprozessoren:** Website ist über GitHub Pages gehostet; Doku wird über Read the Docs bereitgestellt; Spenden können über Open Collective laufen (Details je Dienst nicht als zentrale Subprozessorenliste gebündelt).
- **Drittlandtransfer:** Website Privacy Policy nennt Transfer/Verarbeitung in Polen; weitere Transfers je Infrastruktur nicht zentral ausgewiesen.
- **Zahlungsabwicklung/Payment Processor:** Spenden optional via Open Collective (Kreditkarte/PayPal) oder EU-Überweisung über CCT; Krypto-Spenden via veröffentlichte Wallet-Adressen.
- **Kontakt/DSAR/DPA:** Nicht angegeben (kein dedizierter DSAR/DPA-Kontakt in den hier genutzten Primärquellen).

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Laut Anbieter keine klassische „OS-Telemetrie“; Netzwerkspuren entstehen v.a. durch Updates/Websitezugriff.
- **Abschaltbar?** Updates sind funktional relevant; als Privacy-Variante nennt der Anbieter Routing über Whonix/Tor (Abwägung: langsamer/komplexer).
- **Wo (Menüpfad):** Installation/Einrichtung: Option Whonix/Tor-Einrichtung für Updates (falls gewählt, existieren entsprechende sys-whonix Komponenten).

**Logs & Retention:**
- **Logging-Level:** minimal
- **Aufbewahrung:** bis zu 3 Monate (Update-Server-Zugriffslogs)
- **Lösch-/Opt-out-Optionen:** Unklar (für Serverlogs); Onion-Zugriff auf Webdienst wird laut Anbieter nicht geloggt.

**Abwägung am Punkt:** Weniger Metadaten (z.B. Updates über Tor) kann Updates langsamer machen und Troubleshooting erschweren; direktere Updates sind einfacher, erzeugen aber typische Serverzugriffslogs.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Full-Disk-Encryption ist standardmäßig LUKS/dm-crypt (außer `/boot`).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben (LUKS-Details abhängig von Install/Defaults).
- **MFA/2FA/Passkeys/Hardware-Keys:** Qubes dokumentiert Multi-Factor-Login für Login/Lockscreen sowie CTAP-Proxy für FIDO2/CTAP-Keys.
- **Recovery/Account-Wiederherstellung:** Backup/Restore/Migration sind in Qube Manager integriert (zusätzlich CLI-Tools).
- **Vuln-Handling / Security-Kontakt:** Responsible Disclosure via Security-Team-Mail (PGP-verschlüsselt möglich); bei bestätigten Issues veröffentlicht der Anbieter Qubes Security Bulletins (QSBs).

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Disk-Verschlüsselung (LUKS) aktiv lassen und starke Passphrase wählen.**  
   **Prüfen:** Beim Install wird eine Passphrase gesetzt; nach dem Boot ist das System verschlüsselt (Standard).
2) **Arbeitskontexte trennen (mindestens: Web / Arbeit / Admin / „Vault“).**  
   **Prüfen:** In Qube Manager sind getrennte qubes sichtbar; Dateien werden nur bewusst zwischen qubes verschoben.
3) **USB-Risiko reduzieren (USB-Qube/sys-usb) – nur wenn deine Eingabegeräte das erlauben.**  
   **Prüfen:** USB-Geräte erscheinen in „Qubes Devices“ und werden explizit einer VM zugeordnet (nicht „global“).

**Stolpersteine:**
- **USB-Tastatur + Disk-Verschlüsselung:** Ein USB-Qube kann USB-Controller schon vor dem Entsperren „verstecken“ – das kann dich am Bootscreen aussperren, wenn deine einzige Tastatur an USB hängt (Abwägung: dom0-Schutz vs. Boot-Bedienbarkeit).

<details>
<summary>Profil B (Datensparsam)</summary>

- Route Update-/Netzwerkpfade über Whonix/Tor, wenn du Metadaten gegenüber Update-Infrastruktur reduzieren willst.  
- Nutze „Vault“-Qubes offline (ohne Netz) für Schlüssel/Secrets; arbeite in Frontend-Qubes nur mit delegierten Aktionen (z.B. Split-GPG).  
- Verwende CTAP-Proxy für Hardware-Keys statt „USB überall“.  
**Abwägung:** mehr Einrichtung & Debug-Aufwand, ggf. langsamere Updates/Netzwerkzugriffe.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Maximiere Isolation: eigene qubes für jedes Risiko-Profil (Browser, Messenger, Office, Admin, Wallet/Keys).  
- Striktes Device-Handling (USB/PCI nur über dedizierte Handler-qubes), minimaler dom0-Footprint.  
- Zusätzliche Boot-/Physical-Security-Maßnahmen (z.B. AEM-Ansatz) prüfen, wenn Threat Model „Evil Maid“ relevant ist.  
**Abwägung:** hoher Aufwand, Hardware-/Workflow-Einschränkungen, mehr Komplexität beim täglichen Betrieb.

</details>

## Features
- Domänen-/VM-Isolation (qubes) auf Xen-Basis
- Disposable VMs (DispVM) für temporäre Sessions
- Template-VM-Konzept (Software zentral im Template pflegen)
- USB-Isolation via USB-Qube (sys-usb)
- Optionale Whonix/Tor-Integration für Netzwerk/Updates
- Split-GPG & CTAP-Proxy (Hardware-Keys isolierter anbinden)

## Alternativen
- Tails (Live-System, Fokus auf flüchtige Nutzung; **Abwägung:** weniger „Alltags-OS“-Workflow, Persistenz optional/anders gelöst)
- [Whonix](/anbieter/whonix/)
- Fedora Silverblue / immutable Desktops (**Abwägung:** Immutability/Rollback statt starkem VM-Workflow)
- Klassische Linux-Einrichtungen mit SELinux/AppArmor (**Abwägung:** mehr Eigenkonfiguration, Isolation weniger „by design“ visualisiert)

## Nicht gelöst / offene Punkte
- Serverstandorte/Logging-Details für **Mirrors** sind nicht zentralisiert (Mirror-Provider können eigene Logs führen).
- Qubes enthält viele sicherheitskritische Third-Party-Komponenten; vollständige unabhängige Audits/Attestationen sind nicht als Liste angegeben.

## Quellen

- Tails (Live-System, Fokus auf flüchtige Nutzung; Trade-off: "weniger „Alltags-OS“-Workflow)
- Whonix (Anonymitäts-Stack, oft als VM; Trade-off: "Isolation hängt stärker vom Host/Hypervisor ab)
- Fedora Silverblue / immutable Desktops (Rollback/Immutability; Trade-off: "weniger harte App-Isolation als Qubes-Konzept)
- Kicksecure/Debian mit AppArmor/SELinux (klassischer Linux-Stack; Trade-off: "mehr Eigenkonfiguration für starke Trennung)
- https://doc.qubes-os.org/en/latest/project-security/security-critical-third-party.html
- [Privacy policy — Qubes OS Documentation](https://doc.qubes-os.org/en/latest/introduction/privacy.html)
- [Website Privacy Policy | Qubes OS](https://www.qubes-os.org/website-privacy-policy/)
- [Terms of Use | Qubes OS](https://www.qubes-os.org/terms/)
- [Donate to Qubes | Qubes OS](https://www.qubes-os.org/donate/)
- [Software license — Qubes OS Documentation](https://doc.qubes-os.org/en/latest/developer/code/license.html)
- [Introduction to Qubes OS — Qubes OS Documentation](https://doc.qubes-os.org/en/latest/introduction/intro.html)
- [Qubes OS project security center — Qubes OS Documentation](https://doc.qubes-os.org/en/latest/project-security/security.html)
- [Installation guide — Qubes OS Documentation](https://doc.qubes-os.org/en/latest/user/downloading-installing-upgrading/installation-guide.html)
- [USB qubes — Qubes OS Documentation](https://doc.qubes-os.org/en/latest/user/advanced-topics/usb-qubes.html)
- [USB troubleshooting — Qubes OS Documentation](https://doc.qubes-os.org/en/latest/user/troubleshooting/usb-troubleshooting.html)
- [Multi-factor Login — Qubes OS Documentation](https://doc.qubes-os.org/en/latest/user/security-in-qubes/mfa.html)
- [CTAP proxy — Qubes OS Documentation](https://doc.qubes-os.org/en/latest/user/security-in-qubes/ctap.html)
- [Anti evil maid (AEM) — Qubes OS Documentation](https://doc.qubes-os.org/en/latest/user/security-in-qubes/aem.html)
- [How to back up, restore, and migrate — Qubes OS Documentation](https://doc.qubes-os.org/en/latest/user/how-to-guides/how-to-back-up-restore-and-migrate.html)
- [The Qubes Canary Scheme | Qubes OS](https://www.qubes-os.org/security/canary/)
- [Security-critical Third-party Components — Qubes OS Documentation](https://doc.qubes-os.org/en/latest/project-security/security-critical-third-party.html)
