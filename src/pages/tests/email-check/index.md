---
layout: "@/layouts/DocLayout.astro"
title: "E-Mail Check: Domain-Schutz testen und Ergebnisse deuten"
url: "/tests/email-check/"
chapter: "Tests"
type: "test"
format: "test"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "E-Mail‑Check: SPF, DKIM, DMARC und TLS deiner Domain prüfen – Ergebnisse deuten, Fehlalarme vermeiden."
---
## Kurz erklärt

Du merkst es oft zuerst im Alltag. E-Mails landen im Spam, kommen gar nicht an oder jemand fälscht Absender, die „wie du“ aussehen. Das ist nervig und kann Betrug erleichtern.

Mit dem E-Mail Check prüfst du, ob deine Domain grundlegende Schutzmechanismen sauber gesetzt hat. Danach kannst du Ergebnisse besser einordnen und gezielt nachbessern, ohne die Zustellung zu zerstören.

Sinnvoll, wenn du eine eigene Domain nutzt oder auffällige Zustellprobleme hast.  
Grenze: Bei `name@anbieter.de` kannst du viele Punkte nicht selbst ändern, nur bewerten.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Was misst es / was nicht

Der E-Mail Check kann typischerweise Hinweise geben auf:

- DNS-Einträge, die für E-Mail wichtig sind (DNS ist der Namensdienst im Internet).
- Absender-Schutzmechanismen wie SPF, DKIM und DMARC. Das sind Standards, die Absenderfälschung erschweren.
- Transport-Verschlüsselung zwischen Mail-Servern (ob TLS beim Versand genutzt werden kann).
- Ergänzende Richtlinien wie MTA-STS (und seltener DANE), wenn sie genutzt werden.

Der Test misst nicht:

- Ob dein Postfach „gehackt“ ist oder ob dein Passwort sicher ist.
- Ob E-Mails Ende-zu-Ende verschlüsselt sind.
- Ob Tracker in E-Mails aktiv sind (Bilder/Pixel) oder ob Links dich verfolgen.
- Ob dein Anbieter Inhalte auswertet oder wie lange er Protokolle speichert.
- Ob dein Gerät kompromittiert ist (Schadsoftware, Stalkerware, Administrator-Zugriff).

## So testest du richtig

### Weg A (ohne Vorwissen, 5 Minuten)

- Entscheide, **welche Adresse** du prüfen willst: `name@anbieter.de` oder `name@deinedomain.de`. So testest du die richtige Domain hinter dem @. Bei Anbieter-Domains ist das Ergebnis oft nur „Info“, nicht „Aufgabe“.
- Teste die **Domain hinter dem @**, nicht nur den Anzeigenamen. Das gibt dir verwertbare Aussagen zu SPF/DKIM/DMARC. Es kann aber verwirren, wenn du mehrere Domains nutzt.
- Deaktiviere kurz **VPN oder Proxy**. So verhinderst du Messfehler durch „fremde“ Netze. Du musst danach daran denken, es wieder zu aktivieren.
- Wiederhole den Test einmal aus einem **anderen Netz** (z. B. Mobilfunk statt WLAN). So erkennst du eher DNS-Unterschiede. Das kostet ein paar Minuten und ggf. Datenvolumen.
- Wenn du gerade DNS-Änderungen gemacht hast, teste **später erneut**. DNS braucht Zeit zur Verteilung. In der Zwischenzeit wirken Ergebnisse „falsch“, obwohl alles korrekt ist.

Bezeichnung kann abweichen – nutze die Suche nach: SPF, DKIM, DMARC, DNS.

<details><summary>Weg B (Fortgeschritten)</summary>

- Teste bewusst zweimal: einmal im Heimnetz, einmal über Mobilfunk. So fallen unterschiedliche DNS-Antworten eher auf. Es kann dich auf eine Fehlersuche führen, die am Ende „nur“ Zwischenspeicher ist.
- Wenn Ergebnisse „alt“ wirken, dokumentiere Uhrzeit und teste später erneut. So trennst du Konfiguration von DNS-Cache. Du brauchst etwas Geduld, bevor du etwas änderst.
- Prüfe, ob du eine **Subdomain** nutzt (z. B. `mail.deinedomain.de`). So stellst du sicher, dass Regeln wirklich zur genutzten Domain passen. Das ist leicht zu übersehen, wenn dein Anbieter intern umleitet.
- Wenn MTA-STS gemeldet wird, prüfe, ob die Richtliniendatei grundsätzlich erreichbar ist. So erkennst du typische Umleitungs- oder Login-Probleme. Ein falscher Fix kann später Zustellung brechen, wenn du zu früh „erzwingst“.
- Wenn du einen Firmenanschluss nutzt, teste zusätzlich extern. So umgehst du interne DNS-Sichten. Das ist ein zusätzlicher Schritt, der aber oft Klarheit bringt.

</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.

- Prüfe DNS-Einträge direkt mit `dig` oder `nslookup` gegen unterschiedliche Resolver. So siehst du, was wirklich öffentlich ankommt. Du musst dabei aufpassen, nicht aus Versehen interne und externe Sichten zu vermischen.
- Prüfe bei DKIM, ob der passende Selector veröffentlicht ist und ob mehrere Systeme unterschiedliche Selector nutzen. So findest du „halbe“ Aktivierungen. Eine falsche Korrektur kann Signaturen ungültig machen.
- Prüfe bei DMARC, ob die Richtlinie zur Domain passt und ob Berichte sinnvoll konfiguriert sind. So bekommst du Einblick in Missbrauch. Berichte können Metadaten enthalten, die du nicht unnötig weitergeben willst.
- Prüfe Transport-Verschlüsselung per direkter Server-Abfrage (STARTTLS) und vergleiche IPv4/IPv6. So findest du Unterschiede, die Tests manchmal verschlucken. Das braucht Sorgfalt, sonst ziehst du falsche Schlüsse.

Achtung: Kleine Abweichungen können Zustellung brechen. Ändere produktive DNS-Einträge nur, wenn du Rückfallmöglichkeiten hast.
</details>

## Ergebnisse verstehen

Typische Aussagen lassen sich so einordnen:

- „Kein SPF gefunden“: Absenderfälschung ist leichter. Setze einen SPF-Eintrag, der nur echte Versandquellen erlaubt. Ein zu strenger Eintrag kann legitime Mails (z. B. Weiterleitungen) ausbremsen.
- „SPF ist zu offen“: Oft sind zu viele Dienste erlaubt. Räume alte Versanddienste aus dem SPF auf, sonst bleibt Spoofing leichter. Kürzen ohne Überblick kann Newsletter oder Support-Mails kaputt machen.
- „Kein DKIM“: Empfänger können Signaturen nicht prüfen. Aktiviere DKIM beim Versanddienst und setze den DNS-Eintrag passend. Bei mehreren Versandwegen wird es schnell unübersichtlich.
- „DMARC fehlt“: Empfänger haben keine klare Regel bei SPF/DKIM-Fehlern. Starte mit einer moderaten DMARC-Richtlinie und steigere später. Zu harte Regeln können Weiterleitungen und Mailinglisten treffen.
- „Transport-Verschlüsselung fehlt/unklar“: Das kann an Server-Einstellungen liegen, aber auch am Messpunkt. Prüfe, ob der Mail-Server TLS anbietet. Manche Gegenstellen verschlüsseln trotzdem nicht zuverlässig.
- „MTA-STS fehlt“: Das ist nicht automatisch „unsicher“. Es bedeutet weniger Schutz gegen TLS-Downgrade im Transport. Aktivierung braucht Pflege, sonst drohen Zustellprobleme bei falscher Policy.

Ein „grünes“ Ergebnis heißt nicht automatisch „privat“. Es zeigt meist nur: Basis-Mechanismen sind vorhanden.

### So merkst du, dass es wirkt

Achte darauf, ob …

- der Test nach einer DNS-Änderung **stabil gleich** ausfällt (nach einigen Stunden erneut prüfen).
- gefälschte Absender mit deiner Domain **seltener ankommen** oder eher als verdächtig markiert werden.
- deine eigenen Mails **seltener im Spam** landen, vor allem bei großen Empfängern.

<details><summary>Mehr Checks, wenn du tiefer prüfen willst</summary>

- Sende dir eine Mail an ein zweites Postfach und prüfe in den Headern, ob SPF/DKIM „pass“ sind.
- Wenn du DMARC-Berichte nutzt: prüfe, ob die Berichte nur an Adressen gehen, die du kontrollierst.
- Teste eine echte Änderung immer mit Rückfallplan: vorherigen DNS-Stand notieren, TTL beachten.

</details>

## Probleme & Lösungen

- **Problem:** Ergebnisse wechseln zwischen zwei Läufen. / **Lösung:** Teste aus zwei Netzen und zu zwei Zeitpunkten. DNS-Zwischenspeicher und unterschiedliche Resolver liefern manchmal verschiedene Antworten.
- **Problem:** Du testest `anbieter.de`, bekommst aber Probleme bei `deinedomain.de`. / **Lösung:** Teste die Domain hinter dem @, die du wirklich nutzt. Bei eigener Domain zählen deine DNS-Einträge, nicht die des Anbieters.
- **Problem:** Nach einer Änderung bleibt der Test „rot“. / **Lösung:** Warte die DNS-Verteilung ab und prüfe, ob du den richtigen Eintrag geändert hast (Hauptdomain vs. Subdomain).
- **Problem:** Mit VPN/Proxy wirkt alles „anders“ oder schlechter. / **Lösung:** Führe den Test ohne VPN/Proxy durch. Für Messungen ist ein direkter Weg stabiler.
- **Problem:** Der Test meldet fehlende Richtlinien, dein Anbieter behauptet „aktiv“. / **Lösung:** Prüfe, ob der Anbieter eine andere Domain/Subdomain nutzt oder ob Regeln nur für bestimmte Versandwege gelten.
- **Problem:** Transport-Verschlüsselung wird als fehlend gemeldet, Zustellung klappt aber. / **Lösung:** Viele Server nutzen „Best Effort“. Prüfe, ob TLS angeboten wird, aber erwarte nicht, dass jede Gegenstelle es erzwingt.
- **Problem:** Du nutzt mehrere Versanddienste (Newsletter, Support, normales Postfach). / **Lösung:** Stelle sicher, dass SPF/DKIM/DMARC diese Aufteilung abbilden. Oft fehlt ein Eintrag für einen Teil des Versands.

## Grenzen

- Der Test sagt nicht, ob dein Konto bereits übernommen wurde. Dafür brauchst du Kontoschutz (starkes Passwort, Zwei-Faktor-Anmeldung, Anmelde-Benachrichtigungen).
- Er erkennt keine Tracker in E-Mails und kein Link-Tracking in Newslettern.
- Er sagt nichts darüber aus, ob dein Anbieter Inhalte auswertet oder wie lange er Protokolle speichert.
- Bei einem kompromittierten Gerät (Schadsoftware, Stalkerware, Admin-Zugriff) helfen Domain-Checks nur begrenzt.
- Gegen Zwang, erzwungene Entsperrung oder Zugriff durch Personen mit Admin-Rechten in deiner Umgebung schützt der Test nicht.

## Weiter

- [E-Mail Schnellstart](/email/schnellstart/)
- [E-Mail Header lesen](/email/header/)
- [Bilder in E-Mails deaktivieren](/email/bilder-deaktivieren/)
- [Tracker-Pixel in E-Mails](/email/tracker-pixel/)
- [DNS Schnellstart](/dns/schnellstart/)
- [Konto Schnellstart](/konto/schnellstart/)

## FAQ

**Sind Tests 100% zuverlässig?**

Nein. Ergebnisse hängen von Browser/Netzwerk/Updates ab. Nutze sie als Hinweis und prüfe mit Fix-Anleitungen.

**Was bedeutet ein „Leak“?**

Dass Daten am Schutz vorbei rausgehen können. Folge den Fix-Schritten und teste erneut.

**Warum schwanken Werte?**

Fingerprinting ist dynamisch. Auch Werbung/Blocker/Updates ändern Signale.

## Quellen

- [BSI: Technischer Hintergrund E-Mail-Sicherheit](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Onlinekommunikation/E-Mail-Sicherheit/technischer-Hintergrund-E-Mail-Sicherheit/technischer-Hintergrund-E-Mail-Sicherheit_node.html)
- [RFC 7208: Sender Policy Framework (SPF)](https://www.rfc-editor.org/rfc/rfc7208)
- [RFC 6376: DomainKeys Identified Mail (DKIM)](https://www.rfc-editor.org/rfc/rfc6376)
- [RFC 7489: DMARC](https://www.rfc-editor.org/rfc/rfc7489)
- [RFC 8461: SMTP MTA Strict Transport Security (MTA-STS)](https://www.rfc-editor.org/rfc/rfc8461)
- [RFC 7672: DANE for SMTP](https://www.rfc-editor.org/rfc/rfc7672)
