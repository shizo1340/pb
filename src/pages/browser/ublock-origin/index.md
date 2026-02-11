---
layout: "@/layouts/DocLayout.astro"
title: "uBlock Origin nutzen: Filterlisten, Ausnahmen, Probleme"
url: "/browser/ublock-origin/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "uBlock Origin einrichten: sicher installieren, Filterlisten sinnvoll wählen, Ausnahmen sauber setzen und typische Seitenprobleme schnell beheben – inklusive Grenzen."
---

Viele installieren uBlock Origin – und plötzlich fehlt etwas.  
Ein Video lädt nicht, ein Login hängt, eine Seite wirkt „kaputt“. Das nervt.

Du richtest uBlock Origin so ein, dass es im Alltag stabil läuft.  
Werbung und Tracking werden spürbar reduziert, ohne ständiges Nachregeln.

Sinnvoll, wenn du im Browser weniger Werbung und Tracking willst.  
Grenze: uBlock Origin wirkt nur im Browser, nicht in Apps außerhalb.
  
Stand: 2026-01-27.

**Kurzfazit**
- Halte Filterlisten schlank und arbeite mit Ausnahmen pro Seite statt „alles erlauben“.
- Nutze das Protokoll nur, wenn eine Seite wirklich kaputt wirkt.

## Ziel

Weg A: Standard lassen und nur bei Bedarf Ausnahmen pro Seite setzen.  
Weg B: Im Protokoll sehen, was blockiert wurde, und minimal freigeben.  
Weg C: Im erweiterten Modus pro Seite sehr strikt blockieren und fein erlauben.

Stoppsignal: Wenn du nicht mehr sicher einloggen oder bezahlen kannst, setze uBlock Origin für diese Seite kurz aus und teste sofort.  
Aufwand + Komfortkosten: 10 Minuten Start, danach seltene Nacharbeit. Je strikter du blockierst, desto öfter brauchst du Ausnahmen.

## Schnellstart (10 Minuten)

1) Installieren und Grundcheck machen  
- Installiere uBlock Origin nur über den Erweiterungs-Katalog deines Browsers.  
- Öffne danach eine typische Nachrichtenseite: Am Symbol sollte ein Zähler hochgehen.  
Bezeichnung kann abweichen – nutze die Suche nach: **Erweiterungen**.  
Du reduzierst sofort Werbe- und Tracker-Anfragen beim Surfen.  
In privaten Fenstern sind Erweiterungen teils extra zu erlauben, sonst fehlt dort der Schutz.

2) Filterlisten schlank halten  
- Öffne das Dashboard von uBlock Origin und gehe zu den Filterlisten.  
- Lass die Standardlisten aktiv. Ergänze höchstens eine Deutsch/Deutschland-Liste, wenn angeboten.  
- Aktualisiere die Listen und lade die betroffene Seite neu.  
Bezeichnung kann abweichen – nutze die Suche nach: **Filterlisten**.  
Du bekommst gute Trefferquote auf deutschsprachigen Seiten, ohne viel Pflege.  
Zu viele Listen erhöhen die Chance auf kaputte Seiten oder zickige Logins.

3) Wenn eine Seite spinnt: erst pro Seite testen  
- Deaktiviere uBlock Origin nur für die betroffene Seite und lade neu.  
- Wenn es dann funktioniert, setze eine Ausnahme nur für diese Seite.  
- Wenn es nicht hilft, aktiviere uBlock Origin wieder: die Ursache liegt wahrscheinlich woanders.  
Du findest den Auslöser schnell, ohne globale Einstellungen zu verschlechtern.  
Eine Ausnahme senkt den Schutz genau auf dieser Seite.

4) Protokoll nutzen, statt zu raten  
- Öffne das Protokoll (englisch „Logger“, also ein Mitprotokoll) und lade die kaputte Seite neu.  
- Suche nach der letzten blockierten Domain, die zur fehlenden Funktion passt (Video, Karte, Kommentare).  
- Erlaube testweise nur diese eine Quelle und prüfe erneut.  
Bezeichnung kann abweichen – nutze die Suche nach: **Protokoll**.  
Du erlaubst gezielt das Minimum, statt pauschal alles freizugeben.  
Das kostet kurz Zeit und kann mehrere Testläufe brauchen.

5) Ausblenden nur für die Optik, nicht als „Schutz“  
- Nutze „Element ausblenden“ nur, wenn ein Overlay die Bedienung verhindert.  
- Prüfe danach Buttons, Formulare und Bezahlseiten besonders sorgfältig.  
- Wenn etwas nicht mehr klickbar ist, entferne die Ausblendung wieder.  
Du machst Seiten wieder benutzbar, ohne komplette Domains zu erlauben.  
Ausblenden entfernt keine Cookies und kann nach Layout-Änderungen falsch sitzen.

6) Eigene Regeln nur bei konkretem Bedarf  
- Lass „eigene Filter“ leer, solange du kein reproduzierbares Problem lösen musst.  
- Wenn du etwas ergänzt: genau eine Zeile, dann sofort testen.  
- Wenn danach etwas bricht: letzte Änderung wieder löschen.  
Bezeichnung kann abweichen – nutze die Suche nach: **Eigene Filter**.  
Du behältst Kontrolle und kannst Fehler zuverlässig rückgängig machen.  
Fremde Regel-Sammlungen stören oft Logins, Zahlungen oder Support-Funktionen.

## Wege

### Weg A

1. Installiere uBlock Origin nur aus dem Erweiterungs-Katalog deines Browsers.  
2. Prüfe auf einer Seite, ob der Zähler am Symbol hochgeht.  
3. Lass die Standard-Filterlisten aktiv.  
4. Ergänze höchstens eine Deutsch/Deutschland-Liste, wenn nötig.  
5. Wenn eine Seite nicht funktioniert: pro Seite kurz deaktivieren und neu laden.  
6. Wenn es dann geht: Ausnahme nur für diese Seite setzen.  
7. Nutze „Element ausblenden“ nur sparsam für störende Overlays.  
8. Lass eigene Filter leer, bis du ein konkretes Problem hast.  

<details><summary>Weg B (Fortgeschritten)</summary>

- Nutze das Protokoll, um die blockierte Quelle zu sehen, statt Einstellungen blind zu ändern.  
- Erlaube immer nur das Minimum (eine Domain statt „alles erlauben“).  
- Teste Regeln zuerst temporär und speichere sie erst, wenn die Seite stabil bleibt.  
- Halte eigene Regeln kurz und beschreibe den Zweck, damit du sie später verstehst.  

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.  
- Aktiviere den erweiterten Modus nur, wenn du bereit bist, pro Seite nachzuarbeiten.  
- Blockiere Drittanbieter-Skripte und Frames strikter und erlaube nur wirklich nötige Quellen.  
- Arbeite mit temporären Regeln, bis du einen stabilen Zustand gefunden hast.  
- Halte die Regelmenge klein, sonst wird Fehlersuche und Umzug unnötig schwer.  

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob der Zähler am uBlock-Origin-Symbol auf typischen Seiten regelmäßig steigt.  
- Achte darauf, ob Seiten schneller benutzbar sind, weil weniger nachlädt.  
- Achte darauf, ob du weniger „wegklicken“ musst (Overlays, Autoplay, Werbeflächen).

<details><summary>Mehr Prüfungen</summary>

- Achte darauf, ob kaputte Funktionen fast immer von Drittanbietern kommen (Karten, Kommentare, Videoplayer).  
- Achte darauf, ob du mit einer einzigen Ausnahme die Seite stabil bekommst, statt neue Listen zu aktivieren.  

</details>

## Probleme & Lösungen

- **Problem:** Seite bleibt weiß oder lädt endlos. / **Lösung:** uBlock Origin pro Seite kurz deaktivieren, neu laden, dann als Ausnahme speichern, wenn es daran lag.  
- **Problem:** Video, Karte oder Kommentare fehlen. / **Lösung:** Protokoll öffnen, die passende Quelle finden und nur diese erlauben.  
- **Problem:** Login-Schleife oder Checkout bricht ab. / **Lösung:** Für die Seite aussetzen, einloggen/bezahlen, dann wieder aktivieren und mit Ausnahme testen.  
- **Problem:** Nach zusätzlichen Listen gehen viele Seiten kaputt. / **Lösung:** Zusätzliche Listen deaktivieren und zu Standard plus maximal einer Regional-Liste zurückkehren.  
- **Problem:** Cookie-Banner ist weg, Tracking wirkt aber ähnlich. / **Lösung:** Verlass dich nicht auf Ausblenden, sondern nutze Browser-Einstellungen zu Cookies und Website-Daten.  
- **Problem:** Browser wirkt träge oder braucht viel Speicher. / **Lösung:** Filterlisten reduzieren, Browser neu starten und Änderungen nur schrittweise wieder aktivieren.  
- **Problem:** Zu viele Ausnahmen sammeln sich an. / **Lösung:** Ausnahmen aufräumen und prüfen, ob eine zu strikte Liste der eigentliche Auslöser ist.  

## Nicht gelöst

- Erstanbieter-Tracking (innerhalb derselben Website) wird nicht zuverlässig verhindert.  
- Fingerprinting wird höchstens teilweise erschwert, eine Garantie gibt es nicht.  
- Tracking in Apps außerhalb des Browsers bleibt unverändert.  
- Dein Internetanbieter oder das Netzwerk sieht weiterhin, welche Domains du aufrufst, auch wenn Inhalte blockiert werden.  
- Wenn dein Gerät kompromittiert ist (Schadsoftware, Stalkerware, Admin-Zugriff), kann ein Browser-Blocker das nicht beheben.  
- Wenn du in einem Konto eingeloggt bist, können Aktivitäten oft trotzdem zusammengeführt werden.

## Quellen

- [uBlock Origin – Dokumentation (Wiki)](https://github.com/gorhill/uBlock/wiki)  
- [uBlock Origin – Dashboard: Filterlisten](https://github.com/gorhill/uBlock/wiki/Dashboard:-Filter-lists)  
- [uBlock Origin – Dashboard: Eigene Filter](https://github.com/gorhill/uBlock/wiki/Dashboard:-My-filters)  
- [uBlock Origin – Protokoll (Logger)](https://github.com/gorhill/uBlock/wiki/The-logger)  
- [Mozilla Add-ons: uBlock Origin](https://addons.mozilla.org/firefox/addon/ublock-origin/)  
- [Chrome Web Store: uBlock Origin](https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm)  

## Weiter

- [Browser](/browser/)  
- [Browser: Erweiterungen sicher nutzen](/browser/erweiterungen-sicherheit/)  
- [Browser: Erweiterungen – Risiken verstehen](/browser/erweiterungen-risiken/)  
- [Tracking: Schnellstart](/tracking/schnellstart/)  
- [Browser: Fingerprinting verstehen](/browser/fingerprinting/)  
- [Browser: Profile trennen](/browser/profile-trennung/)  
