---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / addy.io"
url: "/anbieter/addy-io/"
chapter: "Anbieter"
type: "single"
format: "provider"
level: ""
money: "maybe"
status: "done"
updated: "2026-01-06"
robots: "index,follow"
description: "Kurzprofil von addy.io (Kategorie: E-Mail-Aliasing)."
provider: ""
name: "addy.io"
category: "E-Mail-Aliasing"
website: "https://addy.io/"
repo: "https://github.com/anonaddy/anonaddy"
license: "AGPL-3.0-only"
policies: ""
privacy: "https://addy.io/privacy/"
terms: "https://addy.io/terms/"
transparency: "Nicht angegeben"
warrant_canary: "Nicht angegeben"
audits: ""
pricing: "mixed"
free_tier: "yes"
open_source: "yes"
self_host_possible: "yes"
account_required: "yes"
phone_required: "Nicht angegeben"
kyc_required: "no"
jurisdiction: "Vereinigtes Königreich (Governing Law: England & Wales laut Terms); Server/Hosting: Niederlande (UpCloud/Greenhost) + Polen (UpCloud) laut Security"
region: "uk"
logs: "some"
logs_notes: "Postfix (default logs) + Nginx access/error logs (IP-Adressen); Rotation täglich; Retention 3 Tage (SaaS)"
retention: "unknown"
retention_notes: "Server-Logs: 3 Tage; E-Mails: nur bei Zustellfehlern und nur wenn Option aktiv (Store Failed Deliveries), Retention nicht angegeben"
retention_max_days: "3"
data_notes: "addy.io ist ein E-Mail-Forwarder (SaaS) mit Self-Hosting-Option (Open Source). Für die Weiterleitung verarbeitet der Dienst zwangsläufig E-Mail-Header/Metadaten und (technisch) Inhalte. Laut Privacy Policy werden E-Mails nur bei Zustellfehlern gespeichert – und nur, wenn die Option „Store Failed Deliveries“ im Konto aktiviert ist. Außerdem nennt addy.io Server-Logs (Nginx/ Postfix) mit täglicher Rotation und 3 Tagen Aufbewahrung sowie Verschlüsselung sensibler Kontodaten in der Datenbank."
features: ""
alternatives: ""
payment_processors: "Stripe, NOWPayments (Subscriptions; laut Privacy Policy)"
sources: ""
---
## Kurzprofil

addy.io ist ein Anbieter aus der Kategorie **E-Mail-Aliasing**. Fokus dieser Seite: **Privacy, Datenflüsse, Kontopflichten, Telemetrie/Logs, Sicherheit & Härtung** (nur anhand von Anbieter-Primärquellen).

## Kurzfazit
- **Geeignet wenn:** du viele Aliasse für Logins/Newsletter willst und akzeptierst, dass ein Forwarder technisch zwangsläufig E-Mail-Metadaten (und bei der Weiterleitung auch Inhalte) verarbeitet.
- **Weniger geeignet wenn:** du E-Mails so nutzen willst, dass ein Drittanbieter die Weiterleitung *gar nicht* sieht (z.B. weil schon Metadaten zu sensibel sind).
- **Wichtigster Abwägung:** weniger „echte“ Adresse nach außen vs. Vertrauen in den Forwarder (oder Mehraufwand beim Self-Hosting).

## Sofortmaßnahmen
- **2FA aktivieren:** reduziert das Risiko, dass jemand deine Aliasse umstellt oder „Send-from“ missbraucht.
- **Shared-Domain/UUID-Aliasse nutzen:** verringert, dass Dritte deine Aliasse über deinen Username-Subdomain-Block verknüpfen.
- **„Store Failed Deliveries“ aus lassen (wenn nicht nötig):** reduziert, wann Inhalte überhaupt beim Anbieter gespeichert werden.

## Entscheidungshilfe
- Wenn du Aliasse „on-the-fly“ unter `*@username.anonaddy.*` nutzt, dann sind deine Aliasse leicht als „zusammengehörig“ erkennbar (Abwägung: Komfort vs. Linkability).
- Wenn du verhindern willst, dass dein Username als Klammer für viele Aliasse dient, dann nutze Shared-Domains oder zufällige/UUID-Aliasse (Abwägung: manchmal weniger merkbar/„sprechende“ Aliasse).
- Wenn du „Reply/Send-from“ über Aliasse brauchst, dann plane ein, dass dabei zusätzliche Routing-Metadaten entstehen (Abwägung: Antwort-Komfort vs. mehr technische Metadaten).
- Wenn du Inhalte/Headers bei der Weiterleitung zusätzlich absichern willst, dann ist OpenPGP pro Recipient relevant (Abwägung: Schutz im Zielpostfach vs. Schlüsselverwaltung; Forwarding bleibt technisch ein Verarbeitungsschritt).
- Wenn du Kontrolle über Logs, Serverstandort und Betriebsumgebung priorisierst, dann ist Self-Hosting relevant (Abwägung: mehr Admin-Aufwand & Zustellbarkeit/Deliverability in deiner Verantwortung).

<details>
<summary>Profile (als Ziele, nicht als „besser“)</summary>

- **Profil A (Standard & alltagstauglich):** sicherer Default, geringer Aufwand.
- **Profil B (Datensparsam):** weniger Metadaten, etwas mehr Aufwand/Komfortverlust möglich.
- **Profil C (High-Risk):** maximale Härtung/Isolation, deutlich mehr Aufwand & mögliche Einschränkungen.

</details>

## Datenblatt
| Merkmal | Wert |
|---|---|
| Anbieter | addy.io |
| Kategorie | E-Mail-Aliasing |
| Website | https://addy.io/ |
| Quellcode | https://github.com/anonaddy/anonaddy |
| Lizenz | AGPL-3.0-only |
| Preismodell | Gemischt (Free + Paid-Abos) |
| Free Tier | Ja |
| Open Source | Ja |
| Konto erforderlich | Ja (SaaS); beim Self-Hosting abhängig vom eigenen Einrichtung |
| Telefon erforderlich | Nicht angegeben |
| KYC erforderlich | Nein |
| Zahlungsabwicklung | Stripe, NOWPayments (laut Privacy Policy) |
| Jurisdiktion | England & Wales (Governing Law laut Terms); Server/Hosting laut Security: Niederlande (UpCloud/Greenhost) + Polen (UpCloud) |
| Logs | Postfix (Default-Logs) + Nginx Access/Error-Logs (IP-Adressen), Rotation täglich; Retention 3 Tage |
| Retention | Server-Logs: 3 Tage; E-Mails: nur bei Zustellfehlern und nur wenn Option aktiv („Store Failed Deliveries“), Retention nicht angegeben |

**Rechtliches (Anbieterlinks):**
- Privacy Policy: [addy.io/privacy](https://addy.io/privacy/)
- AGB/Terms: [addy.io/terms](https://addy.io/terms/)
- Transparency Report: Nicht angegeben
- Warrant Canary: Nicht angegeben

**Audits (laut Anbieter):**
- [Independent security audit (Securitum, September 2023)](https://addy.io/addyio-independent-security-audit/)
- [Audit Report (PDF)](https://addy.io/files/Securitum-addy.io-audit-report.pdf)

**Daten-Notizen (kurz):**
addy.io leitet E-Mails von Alias-Adressen an hinterlegte Empfänger:innen (Recipients) weiter. Laut Privacy Policy werden E-Mails nur bei Zustellfehlern gespeichert – und nur, wenn „Store Failed Deliveries“ aktiv ist. Server-Logs (Nginx/Postfix) werden täglich rotiert und 3 Tage aufbewahrt.

## Datenschutz & Datenflüsse
**Was der Anbieter nennt (Fakten, kurz):**
- **Welche Daten anfallen:** Registrierungs-/Abo-Formulardaten (z.B. E-Mail-Weiterleitungsziele/Recipients), Session-Cookies, Server-Logs (IP-Adressen in Nginx-Logs; Postfix Default-Logs); E-Mail-Inhalte werden nur bei Failed Delivery gespeichert, wenn die Option aktiv ist.
- **Wofür:** Zustellung/Weiterleitung, Missbrauchsprävention, Betrieb/Fehleranalyse, Abo-Abwicklung.
- **Weitergabe/Subprozessoren:** Genannt werden Stripe und NOWPayments (Zahlungen), Amazon SES (Newsletter), Cloudflare Turnstile (Captcha/Abuse-Schutz). Außerdem nutzt addy.io eine selbst gehostete Umami-Instanz für Website-Analytics.
- **Drittlandtransfer:** Nicht angegeben (keine explizite Transfer-/SCC-Darstellung in den genannten Dokumenten).
- **Zahlungsabwicklung/Payment Processor:** Stripe und NOWPayments (laut Privacy Policy); Kartendaten „berühren“ laut Anbieter nicht den eigenen Server.
- **Kontakt/DSAR/DPA:** Rechte auf Auskunft/Berichtigung/Löschung werden genannt; Kontakt über den in der Privacy Policy genannten Ansprechpartner (DPO) möglich. Eine öffentliche DPA/Subprozessoren-Liste ist nicht angegeben.

## Telemetrie, Logs & Aufbewahrung
**Telemetrie/Analytics:**
- **Standard aktiv?** Ja: selbst gehostetes Umami für Website-Analytics (laut Privacy Policy: anonym, ohne Cookies, ohne persistent identifiers).
- **Abschaltbar?** Nicht angegeben (laut Anbieter wird „absolut anonym“ gemessen).
- **Wo (Menüpfad):** Nicht angegeben (Website-Analytics, nicht konto-basiert beschrieben).  
  **Hinweis:** Die offiziellen Mobile-Apps dokumentieren „No stats, Device IDs oder crash reporting“ – mit Ausnahme von Builds aus dem Google Play Store.

**Logs & Retention:**
- **Logging-Level:** Postfix Default-Logs + Nginx Access/Error-Logs (IP-Adressen) laut Privacy Policy.
- **Aufbewahrung:** Rotation täglich, Retention 3 Tage (SaaS) laut Privacy Policy.
- **Lösch-/Opt-out-Optionen:** Failed Deliveries können über die API gelöscht werden (Delete Failed Delivery); darüber hinaus keine Opt-out-Optionen für Server-Logs angegeben.

**Abwägung am Punkt:** Weniger (oder kürzere) Logs senken Metadatenrisiken, können aber Abuse-Schutz und Fehlersuche erschweren.

## Sicherheit & Kontoschutz
**Kernpunkte (nur belegt):**
- **Verschlüsselung/Client-side/E2E:** Transportabsicherung wird genannt (TLS, DANE, MTA-STS, TLS-RPT; dazu SPF/DKIM/DMARC für Domain-Authentizität). Optional wird OpenPGP für weitergeleitete Mails über Recipient-Keys beschrieben (Website).
- **KDF/Parameter/Schlüsselableitung:** Nicht angegeben.
- **MFA/2FA/Passkeys/Hardware-Keys:** 2FA ist verfügbar; in der Security-Doku werden Authenticator-Apps und auch Hardware-Authentifizierungsgeräte genannt.
- **Recovery/Account-Wiederherstellung:** Nicht angegeben (außer üblichen Login/Reset-Flows; keine detaillierte Recovery-Policy in den Quellen).
- **Vuln-Handling / Security-Kontakt:** Security-Seite + GitHub „Security / Reporting a Vulnerability“ sind vorhanden; unabhängiges Audit (Securitum, Sep 2023) wird genannt.

## Einrichtung & Härtung

### Profil A (Standard & alltagstauglich)
Ziel: sicherer Default ohne Spezialsetup.

1) **Kontoschutz aktivieren:** 2FA einschalten (Authenticator-App oder Hardware-Key, falls genutzt).  
   **Prüfen:** Login funktioniert nur mit zusätzlichem Faktor.
2) **Alias-Strategie festlegen:** Username-Subdomain (komfortabel) vs. Shared-Domain/UUID (weniger Verknüpfbarkeit).  
   **Prüfen:** Neue Aliasse erscheinen wie erwartet im Dashboard.
3) **Speicherung minimieren:** „Store Failed Deliveries“ nur aktivieren, wenn du Fehlzustellungen aktiv debuggen musst.  
   **Prüfen:** Option ist aus (oder bewusst an) und du weißt, wo „Failed Deliveries“ ggf. sichtbar sind.

**Stolpersteine:**
- Forwarding bedeutet: ein zusätzlicher Dienst verarbeitet E-Mail-Metadaten (und technisch Inhalte) (Abwägung: Abschirmung der echten Adresse vs. zusätzlicher Verarbeitungspunkt).
- Username-Subdomain-Aliasse lassen sich leicht als „zusammengehörig“ erkennen (Abwägung: Merkfähigkeit vs. Linkability).

<details>
<summary>Profil B (Datensparsam)</summary>

- Nutze bevorzugt Shared-Domains/UUID-Aliasse für Dienste, bei denen Verknüpfbarkeit besonders stört.  
- Trenne Empfänger:innen (Recipients) nach Kontext (z.B. „Banking“, „Shopping“, „Foren“) für bessere Kompartimentierung.  
- Mobile Apps: aktiviere biometrische Sperre; lasse Error-Logging nur bei Fehlersuche an (Abwägung: Diagnosekomfort vs. lokale Debug-Daten).

**Abwägung:** mehr organisatorischer Aufwand (Recipients/Struktur), aber weniger „alles hängt am gleichen Username“.

</details>

<details>
<summary>Profil C (High-Risk)</summary>

- Self-Hosting statt SaaS, wenn du Serverstandort/Logging und Betriebsumgebung selbst kontrollieren willst.  
- Strikte Trennung von Identitäten: separate Domains/Server pro Rolle (wenn du das operativ tragen kannst).  
- Härtung wie in der Self-Hosting-Doku vorausgesetzt (SSH, Firewall, Updates) + zusätzlich: minimale Log-Retention und strikte Mail-Rate-Limits.

**Abwägung:** hoher Admin-Aufwand, Deliverability/Abuse-Handling und Sicherheitsbetrieb liegen bei dir.

</details>

## Features
- Aliasse on-the-fly über Username-Subdomain
- Shared-Domain-Aliasse (vorgeneriert, planlimitiert)
- Reply/Send-from über Aliasse
- Mehrere Empfänger:innen (Recipients)
- Eigene Domains (Paid)
- Optional: OpenPGP pro Recipient (laut Website)
- 2FA für das Konto (laut Security/Privacy Policy)
- API (API-Key; Verwaltung laut Website/API-Doku)
- Browser-Extension + Mobile Apps (laut Website/Repo-Ökosystem)
- Self-Hosting (eigener Betrieb)

## Alternativen
- [SimpleLogin](/anbieter/simplelogin/)
- Firefox Relay (ähnliche Kategorie; Abwägung: Fokus auf Browser-/Anbieter-Integration statt Self-Hosting)
- DuckDuckGo E-Mail Protection (ähnliche Kategorie; Abwägung: meist stärker „Lightweight“/einfach, weniger admin-lastig)
- Fastmail Masked E-Mail (ähnliche Kategorie; Abwägung: stärker in Mail-Provider-Workflow eingebettet)

## Nicht gelöst / offene Punkte
- Öffentliche Subprozessoren-/DPA-Seite wurde in den Anbieterquellen nicht gefunden (es gibt eine Liste genannter Drittanbieter in der Privacy Policy, aber keine vollständige Subprozessoren-Übersicht).
- Retention/automatische Löschung von gespeicherten „Failed Deliveries“ (wenn „Store Failed Deliveries“ aktiv ist) ist nicht beschrieben.

## Quellen

- name: "Audit Report (PDF)
- Mehrere Empfänger: "innen (Recipients)
- Optional: "OpenPGP pro Recipient (laut Website)
- title: "GitHub – anonaddy/addy-android
- [addy.io – Privacy Policy](https://addy.io/privacy/)
- [addy.io – Terms Of Service](https://addy.io/terms/)
- [addy.io – Security](https://addy.io/security/)
- [addy.io – FAQ](https://addy.io/faq/)
- [addy.io – Self-Hosting](https://addy.io/self-hosting/)
- [GitHub – anonaddy/anonaddy](https://github.com/anonaddy/anonaddy)
- [addy.io – Independent security audit (Blog)](https://addy.io/addyio-independent-security-audit/)
- [Securitum – addy.io Audit Report (PDF)](https://addy.io/files/Securitum-addy.io-audit-report.pdf)
- [addy.io – API Documentation](https://app.addy.io/docs/)
- [GitHub – anonaddy/addy-ios](https://github.com/anonaddy/addy-ios)
- [GitHub – anonaddy/addy-android](https://github.com/anonaddy/addy-android)

