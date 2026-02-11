---
layout: "@/layouts/DocLayout.astro"
title: "E-Mail-Header prüfen: Absender und SPF/DKIM/DMARC verstehen"
url: "/email/header/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "E-Mail-Header anzeigen und auswerten: Absender prüfen, SPF/DKIM/DMARC einordnen und verdächtige Mails dokumentieren – mit Checks, Grenzen und Lösungen."
---
Du bekommst eine E-Mail, die „offiziell“ wirkt – aber irgendwas passt nicht.

Der sichtbare Absendername kann leicht täuschen. In den Kopfzeilen (englisch: Header) steht mehr: Zustellweg, technische Absenderangaben und Prüfergebnisse.

Sinnvoll, wenn du verdächtige E-Mails prüfen oder sauber dokumentieren willst.  
Grenze: Kopfzeilen helfen bei Täuschung – nicht gegen ein kompromittiertes Konto.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

Weg A: Kopfzeilen öffnen und die wichtigsten Felder grob einordnen.  
Weg B: Prüfergebnisse (SPF/DKIM/DMARC) finden und richtig gewichten.  
Weg C: Rohdaten sichern und tiefer prüfen, ohne etwas zu „reparieren“.

Stoppsignal: Wenn die Mail zu Zahlung, Login, Passwort oder Codes drängt, handle nicht aus der Mail heraus.  
Nutze stattdessen einen selbst eingegebenen Kontaktweg (Lesezeichen, Rechnung, Karte, Kundenportal).

Aufwand: etwa 10 Minuten. Komfortkosten: mehr Technik-Details, am Smartphone oft umständlich.

## Schnellstart (10 Minuten)
1) Kopfzeilen sichtbar machen und kopieren  
1. Öffne die Mail am Computer (Weboberfläche oder E-Mail-Programm).
2. Suche im Menü nach einer Funktion wie „Original“, „Quelltext“ oder „Kopfzeilen anzeigen“.
3. Kopiere die Kopfzeilen in eine Textdatei, damit du sie in Ruhe lesen kannst.
Bezeichnung kann abweichen – nutze die Suche nach: Header, Kopfzeilen, Quelltext, Original, Internetkopfzeilen.  
Manche Programme zeigen nur „kurze“ Kopfzeilen – dann brauchst du den Quelltext.  
So hast du die technischen Daten vollständig und unverändert zur Hand.  
Das kostet ein paar Minuten extra, weil du meist den Desktop nutzen musst.

2) „From“, „Reply-To“ und „Return-Path“ vergleichen  
4. Suche in den Kopfzeilen nach `From:` (sichtbarer Absender).
5. Prüfe, ob es ein `Reply-To:` gibt (Antwortadresse).
6. Prüfe `Return-Path:` (Rückläuferadresse; oft näher am tatsächlichen Versandweg).
Absenderangaben können manipuliert sein – einzelne Felder sind kein Beweis.  
Du erkennst typische Tricks, bei denen Antworten an eine andere Adresse gehen.  
Es kann verwirrend wirken, weil Weiterleitungen und Verteiler echte Abweichungen erzeugen.

3) Zustellweg grob plausibilisieren („Received“-Zeilen)  
7. Suche nach mehreren `Received:`-Zeilen.
8. Lies sie von unten nach oben (unten: früher, oben: später).
9. Achte auf auffällige Sprünge (unerwartete Systeme/Netze, „passt nicht zum Absender“).
Weiterleitungen und Verteiler verändern den Weg – Auffälligkeiten sind ein Signal, kein Urteil.  
Du siehst, ob die Mail über ungewöhnliche Stationen kam.  
Das ist nicht immer eindeutig, weil Cloud- und Firmeninfrastruktur komplex aussehen kann.

4) Prüfergebnisse finden („Authentication-Results“)  
10. Suche nach `Authentication-Results:`.
11. Notiere, ob dort Werte wie `spf=…`, `dkim=…`, `dmarc=…` stehen.
12. Wenn „fail“, „softfail“ oder „none“ dominiert, behandle die Mail als besonders riskant.
Nicht jede Mail zeigt diese Zeile, je nach Anbieter und Ansicht.  
Du bekommst ein kompaktes Ergebnis, wie der Empfänger-Server den Versand bewertet.  
Das kann falsche Sicherheit geben, weil „pass“ nur die Technik prüft, nicht die Absicht.

5) Sicher dokumentieren (ohne Daten öffentlich zu verteilen)  
13. Lege die Kopfzeilen als Textdatei ab (Datum + Betreff im Dateinamen).
14. Wenn du sie weitergibst: nur an Anbieter-Support, IT, Bank oder Ermittlungsstellen.
15. Teile Kopfzeilen nicht öffentlich (Foren/soziale Netzwerke), sie können persönliche Daten enthalten.
Kopfzeilen enthalten oft interne Kennungen und manchmal IP-Adressen.  
So kannst du den Vorfall nachvollziehbar melden, ohne Beweise zu zerstören.  
Das erfordert Sorgfalt, damit du nicht aus Versehen zu viele Details weiterleitest.

## Wege

### Weg A

- Öffne die verdächtige E-Mail am Computer, nicht nur am Smartphone.  
- Blende die vollständigen Kopfzeilen oder den Nachrichten-Quelltext ein.  
- Kopiere alles in eine Textdatei, damit Zeilenumbrüche erhalten bleiben.  
- Suche nacheinander nach: `From:`, `Reply-To:`, `Return-Path:`.  
- Wenn `Reply-To:` auf eine andere Domäne zeigt als `From:`, sei besonders vorsichtig.  
- Suche nach `Authentication-Results:` und lies die Kurzwerte (`spf=`, `dkim=`, `dmarc=`).  
- Schau in die `Received:`-Zeilen, ob der Weg grob plausibel wirkt (von unten nach oben).  
- Wenn etwas unklar bleibt, behandle die Mail wie [Phishing](/betrug/phishing/) (nicht klicken, nicht antworten).  
- Wenn es um ein Konto geht: Öffne das Konto nur über einen selbst eingegebenen Weg (Lesezeichen/App), nicht über Mail-Links.

<details><summary>Weg B (Fortgeschritten)</summary>

- Achte darauf, ob `From:` und die Domäne in `dmarc=` zusammenpassen (wenn vorhanden).  
- Suche nach `DKIM-Signature:` und prüfe, ob dort eine Domäne (`d=`) steht, die zu `From:` passt.  
- Prüfe, ob die Mail weitergeleitet wurde: oft erkennt man das an zusätzlichen `Received:`-Stationen und veränderten Absenderpfaden.  
- Wenn `Authentication-Results` fehlt: verlasse dich stärker auf dein Verhalten (keine Links, kein Login aus der Mail).  
- Dokumentiere Auffälligkeiten in einem Satz („Reply-To weicht ab“, „dmarc fail“, „ungewöhnliche Received-Station“), statt Zeilen zu deuten, die du nicht sicher verstehst.

Ein „pass“ ist ein gutes Signal, aber kein Beweis für eine legitime Absicht.
</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.

- Speichere die Nachricht als Datei (z. B. als EML), damit du Originaldaten hast.  
- Prüfe `Message-ID:` grob: wirkt die Domäne plausibel zum Absenderkontext?  
- Vergleiche bei `DKIM-Signature:` die Domäne (`d=`) mit `From:` (passt es, oder ist es nur „irgendeine“ Domäne?).  
- Prüfe `Authentication-Results` auf widersprüchliche Ergebnisse (z. B. DKIM pass, DMARC fail).  
- Lies `Received:` strikt von unten nach oben und notiere nur harte Auffälligkeiten (völlig fremde Infrastruktur, unlogische Sprünge).

Das kann Komfort kosten, weil echte Mails über Verteiler und Cloud-Dienste komplex wirken können.
</details>

## So merkst du, dass es wirkt

- Achte darauf, ob du die vollständigen Kopfzeilen zuverlässig findest und als Text sichern kannst.  
- Achte darauf, ob du `From`, `Reply-To` und `Return-Path` schnell vergleichen kannst.  
- Achte darauf, ob du `Authentication-Results` (oder ähnliche Prüfergebnisse) in wenigen Sekunden findest.

<details><summary>Mehr Prüfungen & Hinweise</summary>

- Wenn du beim Kopieren „zerhackte“ Zeilen siehst: nutze eine Textdatei und kopiere komplett neu.  
- Wenn die Mail weitergeleitet wurde: Prüfergebnisse können sich ändern oder unplausibel wirken.  
- Wenn du nur einen Screenshot hast: Das reicht selten für Support oder IT – Kopfzeilen als Text sind besser.
</details>

## Probleme & Lösungen

- **Problem:** Am Smartphone finde ich keine Kopfzeilen.  
  **Lösung:** Nutze die Weboberfläche am Computer oder ein Programm, das „Quelltext“ anzeigen kann.

- **Problem:** Ich sehe nur wenige Felder, nicht die kompletten Kopfzeilen.  
  **Lösung:** Suche nach „Quelltext“ oder „Original“, nicht nach „Kopfzeilen“.

- **Problem:** `Authentication-Results` fehlt komplett.  
  **Lösung:** Handle strikt defensiv: keine Links, kein Login aus der Mail. Prüfe nur über offizielle Wege.

- **Problem:** `Reply-To` zeigt woanders hin als `From`.  
  **Lösung:** Antworte nicht. Nimm Kontakt nur über eine selbst eingegebene, offizielle Adresse auf.

- **Problem:** Weitergeleitete Firmenmails sehen „komisch“ aus.  
  **Lösung:** Prüfe zuerst den Kontext (war die Mail erwartet?) und frage intern nach, statt an Einzelzeilen zu hängen.

- **Problem:** Ich will die Mail melden, aber ohne Daten zu leaken.  
  **Lösung:** Gib Kopfzeilen nur an Support, IT, Bank oder Behörden weiter. Poste sie nicht öffentlich.

## Nicht gelöst

- Kopfzeilen beweisen keine „gute Absicht“. Sie helfen nur, offensichtliche Täuschung zu erkennen.  
- Wenn ein echtes Konto übernommen wurde (z. B. beim Absender), können Prüfergebnisse trotzdem „gut“ aussehen.  
- Weiterleitungen, Verteiler und Newsletter können Kopfzeilen komplex machen, ohne dass es Betrug ist.  
- Gegen ein kompromittiertes Gerät, Admin-Zugriff oder Stalkerware helfen Kopfzeilen nicht. Dann sind auch echte Mails und Konten nicht mehr verlässlich.  
- Bei Zwang oder Kontrolle (z. B. im Haushalt oder am Arbeitsplatz) sind technische Checks oft zweitrangig. Dann brauchst du vor allem sichere Geräte und sichere Kontaktwege.

## FAQ

**Sind E-Mail-Aliases sinnvoll?**

Ja, sie reduzieren Spam/Tracking und machen Leaks weniger schlimm – besonders bei Shops/Newslettern.

**Ist PGP nötig?**

Für die meisten nicht. Wichtiger sind 2FA, sichere Providerwahl, Tracking-Schutz und saubere Reset-Wege.

**Warum laden Tracker-Pixel trotz Einstellung?**

Manche Clients/Previews laden extern. Deaktiviere Bilder, nutze Link-Tracking-Schutz und teste deine App.

## Quellen

- [So lesen Sie den E-Mail-Header](https://www.verbraucherzentrale.de/wissen/digitale-welt/phishingradar/so-lesen-sie-den-emailheader-6077)  
- [RFC 5322: Internet Message Format](https://datatracker.ietf.org/doc/html/rfc5322)  
- [RFC 8601: Authentication-Results Header Field](https://datatracker.ietf.org/doc/html/rfc8601)  
- [RFC 7208: Sender Policy Framework (SPF)](https://datatracker.ietf.org/doc/html/rfc7208)  
- [RFC 6376: DomainKeys Identified Mail (DKIM)](https://datatracker.ietf.org/doc/html/rfc6376)  
- [RFC 7489: DMARC](https://datatracker.ietf.org/doc/html/rfc7489)

## Weiter

- [E-Mail: Schnellstart](/email/schnellstart/)  
- [Spam & Phishing](/email/spam-phishing/)  
- [Phishing](/betrug/phishing/)  
- [Konto-Übernahme](/betrug/konto-uebernahme/)  
- [Tracker-Pixel in E-Mails](/email/tracker-pixel/)  
- [Tracking-Links in E-Mails](/email/tracking-links/)
