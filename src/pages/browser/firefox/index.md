---
layout: "@/layouts/DocLayout.astro"
title: "Firefox privat einstellen: Schritt-für-Schritt-Anleitung"
url: "/browser/firefox/"
chapter: "Themen"
type: "guide"
format: "guide"
level:
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Firefox privat einstellen mit sicheren Standards: Tracking und Cookies reduzieren, Browser-Fingerabdruck erschweren, Wirkung prüfen und Brüche schnell beheben."
---

Du surfst „normal“ – und wirst trotzdem wiedererkannt.  
Tracking (Nachverfolgung über viele Webseiten), Cookies und der Browser-Fingerabdruck machen Profilbildung leicht.

Ziel: Firefox so einstellen, dass weniger Daten abfließen, ohne dass dir ständig Logins oder Bezahlvorgänge kaputtgehen.  
Danach hast du klare Standards, merkst schneller Brüche und setzt Ausnahmen nur dort, wo sie nötig sind.

Sinnvoll, wenn du im Alltag weniger Tracking willst, ohne Spezialwissen.  
Grenze: Das macht dich nicht anonym und ersetzt keine Geräte-Sicherheit.
  
Stand: 2026-01-27.

**Kurzfazit**
- In 10 Minuten erreichst du viel: Tracking-Schutz, HTTPS, Aufräumen, schlanker Blocker.
- Halte Firefox simpel: wenige Erweiterungen, klare Profile, Ausnahmen nur pro Seite.

## Ziel

Weg A: Weniger Tracking mit sicheren Standard-Schritten, alltagstauglich.  
Weg B: Zusätzlich weniger Querverknüpfung durch Profil-Trennung und bewusste Netzwerkeinstellungen.  
Weg C: Profi-Feinschliff über versteckte Optionen, mit höherem Bruchrisiko.

Stoppsignal: Wenn Banking, Behörden-Login oder wichtige Arbeitsseiten nicht sauber laufen, bleib bei Weg A. Setze Ausnahmen nur für diese Seite.  
Aufwand: 10–20 Minuten. Komfortkosten: Du meldest dich öfter neu an oder musst einzelne Seiten ausnehmen.

## Schnellstart (10 Minuten)

1) **Tracking-Schutz strenger stellen**
- Menü → **Einstellungen** → **Datenschutz & Sicherheit**
- Bei **Schutz vor Aktivitätenverfolgung** auf „streng“ stellen (oder „benutzerdefiniert“ ähnlich streng)
- Tabs neu laden  
Bezeichnung kann abweichen – nutze die Suche nach: „Aktivitätenverfolgung“.  
Du blockierst viele bekannte Tracker direkt im Standardbetrieb.  
Einzelne Logins oder Bezahlvorgänge können haken, bis du für diese Seite eine Ausnahme setzt.

2) **Datenerhebung in Firefox reduzieren**
- **Einstellungen** → **Datenschutz & Sicherheit**
- Abschnitt **Datenerhebung** / **Technische Daten** öffnen
- Studien/Experimente und Diagnosedaten deaktivieren (je nach Version)  
Bezeichnung kann abweichen – nutze die Suche nach: „Datenerhebung“.  
Es verlassen weniger Nutzungs- und Diagnosedaten dein Gerät.  
Wenn etwas schiefläuft, wird Fehleranalyse manchmal schwieriger, weil weniger Daten geteilt werden.

3) **Nur verschlüsselte Verbindungen erzwingen (HTTPS)**
- **Einstellungen** → **Datenschutz & Sicherheit**
- **Nur-HTTPS-Modus** aktivieren (am besten für alle Fenster)  
Bezeichnung kann abweichen – nutze die Suche nach: „HTTPS“.  
Du senkst das Risiko von Mitlesen und Manipulation auf unverschlüsselten Seiten.  
Sehr alte Seiten können blockiert werden, dann brauchst du für diese Seite eine Ausnahme.

4) **Cookies und Website-Daten beim Beenden aufräumen**
- **Einstellungen** → **Datenschutz & Sicherheit**
- Bereich **Chronik** öffnen und „benutzerdefiniert“ wählen (falls nötig)
- „Cookies und Website-Daten beim Beenden löschen“ aktivieren  
Bezeichnung kann abweichen – nutze die Suche nach: „Cookies“.  
Wiedererkennung über langlebige Webdaten wird deutlich unzuverlässiger.  
Du wirst häufiger ausgeloggt, „angemeldet bleiben“ klappt seltener (Ausnahmen helfen).

5) **Adressleisten- und Suchvorschläge entschärfen**
- **Einstellungen** → **Suche** oder Abschnitt zur **Adressleiste**
- Suchvorschläge nur aktiv lassen, wenn du sie wirklich willst  
Bezeichnung kann abweichen – nutze die Suche nach: „Vorschläge“.  
Weniger Abfragen gehen schon beim Tippen an externe Suchdienste.  
Tippen fühlt sich weniger bequem an, weil weniger Autovervollständigung erscheint.

6) **Schlanken Inhaltsblocker nutzen: uBlock Origin**
- Menü → **Add-ons und Themes** → nach „uBlock Origin“ suchen
- Installieren und bei den Standardlisten bleiben
- Wenn eine Seite hakt: erst neu laden, dann für diese Seite pausieren  
Bezeichnung kann abweichen – nutze die Suche nach: „uBlock Origin“.  
Du blockierst viele Werbe- und Tracking-Ressourcen, oft auch schnelleres Laden.  
Manche Seiten funktionieren erst nach einer Ausnahme oder wenn du den Blocker dort pausierst.

## Wege

### Weg A

1. **Firefox aktualisieren.** Das schließt Sicherheitslücken, kann aber Menüs oder Verhalten ändern.  
2. **Tracking-Schutz auf „streng“ stellen.** Das reduziert Nachverfolgung, kann einzelne Logins stören.  
3. **Datenerhebung/Studien deaktivieren.** Das spart Diagnosedaten, kann Support bei Fehlern erschweren.  
4. **Nur-HTTPS-Modus aktivieren.** Das schützt vor Mitlesen, kann sehr alte Seiten blockieren.  
5. **Cookies/Website-Daten regelmäßig entfernen.** Das bremst Wiedererkennung, kostet Komfort durch häufigeres Einloggen.  
6. **Berechtigungen pro Seite prüfen (Standort, Kamera, Mikrofon, Benachrichtigungen).** Das begrenzt Zugriff, kann Funktionen erst nach Freigabe erlauben.  
7. **Erweiterungen ausmisten.** Das reduziert Zugriffspunkte, kann Komfortfunktionen entfernen.  
8. **Wichtige Seiten testen (Mail, Banking, Arbeit).** Das findet Brüche früh, kostet ein paar Minuten und eventuell Ausnahmen.

<details><summary>Weg B (Fortgeschritten)</summary>

- **Profile trennen (z. B. „Arbeit“ und „Privat“).** Das erschwert Querverknüpfung, braucht Disziplin beim richtigen Profil. Details: [Profile-Trennung](/browser/profile-trennung/).  
- **Ausnahmen sparsam halten.** Das hält den Schutz hoch, kann bedeuten, dass du gezielt nachjustierst.  
- **DNS über HTTPS bewusst nutzen.** Das kann DNS-Abfragen im lokalen Netz weniger sichtbar machen, verlagert aber Vertrauen auf den Resolver. Details: [DoH/DoT](/dns/doh-dot/).  
- **Vorverbindungen/Vorabrufe reduzieren (falls vorhanden).** Das senkt ungewollte Verbindungen, kann Seiten minimal langsamer wirken lassen.

</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.

- **`about:config` nur gezielt ändern und alles notieren.** Das ermöglicht Feinschliff, erhöht aber das Risiko, dich zu „verkonfigurieren“.  
- **Schutz gegen Browser-Fingerabdruck erhöhen (falls verfügbar).** Das erschwert Wiedererkennung, kann Layouts, Captchas oder Web-Apps brechen.  
- **WebRTC gezielt einschränken, wenn du Leaks vermeiden willst.** Das kann IP-Leaks reduzieren, bricht aber oft Videochat im Browser. Details: [WebRTC-Leaks](/netzwerk/leaks/webrtc/).  
- **Spekulatives Laden konsequent reduzieren (falls vorhanden).** Das senkt Hintergrundverbindungen, kann Ladezeiten gefühlt erhöhen.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob Firefox auf vielen Seiten „Tracker blockiert“ anzeigt (Schutz-Symbol in der Adressleiste).  
- Wenn du nach einem Neustart öfter neu einloggen musst, werden Webdaten wirklich entfernt.  
- Prüfe Indizien mit Tests: [Fingerprinting-Test](/tests/fingerprinting-test/) und [Browser-Check](/tests/browser-check/).

<details><summary>Mehr Prüfungen & Hinweise</summary>

- Öffne `about:protections` und prüfe, was zuletzt blockiert wurde.  
- Wenn eine Seite kaputtgeht: erst neu laden, dann nur für diese Seite lockern (nicht global).  
- Teste nach Änderungen deine wichtigsten Abläufe: Mail, Banking, Videokonferenz, Passwortverwaltung.

</details>

## Probleme & Lösungen

- **Problem:** Du bleibst ständig ausgeloggt.  
  **Lösung:** Cookie-Löschen beim Beenden lockern oder nur für wenige, vertrauenswürdige Seiten Ausnahmen setzen.

- **Problem:** Login oder Bezahlen klappt nicht mehr.  
  **Lösung:** Für diese Seite den Tracking-Schutz testweise lockern oder Drittanbieter-Cookies nur dort erlauben.

- **Problem:** Eine Seite lädt nicht im Nur-HTTPS-Modus.  
  **Lösung:** Prüfen, ob die Seite HTTPS anbietet, und nur dann eine Ausnahme setzen, wenn es wirklich nötig ist.

- **Problem:** Videochat im Browser funktioniert nicht.  
  **Lösung:** WebRTC-Einschränkungen zurücknehmen oder für den Dienst eine Ausnahme nutzen.

- **Problem:** Im Firmennetz gehen interne Seiten nicht mehr.  
  **Lösung:** DNS über HTTPS deaktivieren oder so konfigurieren, dass es zum Firmennetz passt.

- **Problem:** Viele „Datenschutz“-Erweiterungen machen alles schlimmer.  
  **Lösung:** Reduzieren: Jede Erweiterung sieht Inhalte und erhöht oft den Browser-Fingerabdruck.

## Nicht gelöst

- Du bist damit nicht anonym: Internetzugang und besuchte Seiten sehen weiterhin deine Verbindung.  
- Logins bleiben eindeutig: Ein Dienst kann dich trotz weniger Cookies zuordnen.  
- Fingerabdruck-Techniken funktionieren teilweise auch ohne Cookies.  
- Ein kompromittiertes Gerät, Admin-Zugriff oder Stalkerware hebelt Browser-Einstellungen aus.  
- Bereits gespeicherte Profile bei Anbietern verschwinden nicht automatisch durch neue Einstellungen.

## Quellen

- [Mozilla Support (DE) – Datenschutz und Sicherheit in Firefox](https://support.mozilla.org/de/products/firefox/privacy-and-security)  
- [Mozilla Support (DE) – Verbesserter Schutz vor Aktivitätenverfolgung](https://support.mozilla.org/de/kb/verbesserter-schutz-vor-aktivitatenverfolgung)  
- [Mozilla Support (DE) – Nur-HTTPS-Modus](https://support.mozilla.org/de/kb/nur-https-modus-firefox)  
- [Mozilla Support (DE) – Cookies und Website-Daten löschen](https://support.mozilla.org/de/kb/cookies-und-website-daten-firefox-loschen)  
- [MDN (DE) – HTTP-Cookies](https://developer.mozilla.org/de/docs/Web/HTTP/Cookies)  
- [uBlock Origin auf Mozilla Add-ons](https://addons.mozilla.org/de/firefox/addon/ublock-origin/)

## Weiter

- [Browser](/browser/)  
- [Browser-Schnellstart](/browser/schnellstart/)  
- [Browser-Fingerabdruck verstehen und reduzieren](/browser/fingerprinting/)  
- [uBlock Origin richtig nutzen](/browser/ublock-origin/)  
- [Profile trennen: Alltag & Arbeit](/browser/profile-trennung/)  
- [Browser-Check](/tests/browser-check/)
