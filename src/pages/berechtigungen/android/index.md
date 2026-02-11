---
layout: "@/layouts/DocLayout.astro"
title: "Android: App-Berechtigungen sicher prüfen und begrenzen"
url: "/berechtigungen/android/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "App-Berechtigungen unter Android prüfen und begrenzen: 10-Minuten-Schnellstart, Wege A–C, Sonderzugriffe, Wirksamkeits-Checks sowie typische Probleme und Grenzen."
---
Apps wollen Zugriff auf Kamera, Mikrofon, Standort oder Kontakte – und manchmal ist das mehr, als dir lieb ist. Das nervt im Alltag und kann Daten preisgeben, die du nicht teilen willst.

Ziel ist, dass Apps nur das bekommen, was sie wirklich brauchen – und dass du später schnell merkst, wenn etwas aus dem Ruder läuft.

Sinnvoll, wenn du Apps nach der Installation selten prüfst oder häufig „Zulassen“ tippst.  
Grenze: Bei kompromittiertem Gerät oder Stalkerware hilft das nur begrenzt.
  
Stand: 2026-01-27.

## Kurzfazit
- Mit 10 Minuten Fokus auf Standort, Kamera und Mikrofon bekommst du den größten Hebel.
- Prüfe danach das Privatsphäredashboard: Dort fallen „Überraschungen“ am schnellsten auf.

## Ziel

Weg A: Die wichtigsten Berechtigungen alltagstauglich begrenzen.  
Weg B: Zusätzlich Sonderzugriffe prüfen, die „stille“ Kontrolle erlauben.  
Weg C: Profi-Setup mit Trennung von Apps und tieferen Systemprüfungen.

Stoppsignal: Wenn du Verdacht auf Überwachung hast oder fremde Personen Zugriff hatten, starte mit einem Szenario wie [Stalkerware-Verdacht](/szenarien/stalkerware-verdacht/) oder [Verdacht: Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/).

Aufwand + Komfortkosten: 10–30 Minuten, danach gelegentlich Rückfragen von Apps („nur während Nutzung?“).

## Schnellstart (10 Minuten)

1. Standort, Kamera, Mikrofon in einem Rutsch prüfen  
   - Öffne **Einstellungen** und gehe zu **Datenschutz** oder **Sicherheit**.  
   - Öffne den **Berechtigungsmanager**.  
   - Prüfe **Standort**, **Kamera**, **Mikrofon** und stelle selten genutzte Apps auf „Nicht zulassen“ oder „Nur während der Nutzung“.  
   Bezeichnung kann abweichen – nutze die Suche nach: Berechtigungsmanager.  
   Das reduziert die häufigsten Sensor-Zugriffe sofort. Einzelne App-Funktionen können danach nicht mehr gehen, bis du gezielt wieder erlaubst.

2. Privatsphäredashboard nutzen, um unerwartige Zugriffe zu finden  
   - Öffne das **Privatsphäredashboard** und schau dir Kamera/Mikrofon/Standort an.  
   - Tippe einen Eintrag an und prüfe, welche App zuletzt zugegriffen hat.  
   - Entziehe bei unerwarteten Apps die Berechtigung direkt dort oder über die App-Infos.  
   Bezeichnung kann abweichen – nutze die Suche nach: Privatsphäredashboard.  
   So siehst du Zugriffe als Fakten statt Bauchgefühl. Das Dashboard zeigt nicht jeden Datenfluss, zum Beispiel nicht den Internetverkehr.

3. „Nicht verwendete Apps“ automatisch entschärfen  
   - Öffne **Apps** und wähle eine App, die du selten nutzt.  
   - Aktiviere „Berechtigungen entfernen und Speicher freigeben“ oder eine ähnliche Option für inaktive Apps.  
   - Wiederhole das für Reise-, Ticket- oder Liefer-Apps, die du nur gelegentlich brauchst.  
   Bezeichnung kann abweichen – nutze die Suche nach: Nicht verwendete App-Einstellungen.  
   Das macht vergessene Apps mit der Zeit harmloser. Beim nächsten Öffnen musst du dich eventuell neu anmelden oder Berechtigungen erneut erlauben.

4. „Genauen Standort“ nur dort erlauben, wo er wirklich nötig ist  
   - Öffne die Standort-Berechtigung einer App.  
   - Deaktiviere „Genauer Standort“ oder wähle „Ungefährer Standort“, wenn möglich.  
   - Teste kurz, ob die App ihren Zweck noch erfüllt (Wetter, lokale Infos).  
   Bezeichnung kann abweichen – nutze die Suche nach: Genauer Standort.  
   Viele Apps bekommen dann nur eine grobe Region statt exakter Position. Navigation, Notruf-Funktionen oder „Gerät finden“ können ohne genauen Standort schlechter funktionieren.

5. Notfallhebel: Kamera/Mikrofon systemweit ausschalten (bei Misstrauen)  
   - Öffne **Datenschutz** und suche die Schalter für **Kamera** und **Mikrofon**.  
   - Schalte sie nur so lange aus, wie du es brauchst (Meeting, sensibler Ort).  
   Bezeichnung kann abweichen – nutze die Suche nach: Kamera deaktivieren, Mikrofon deaktivieren.  
   Das stoppt Aufnahmen in sensiblen Situationen sehr zuverlässig. Videoanrufe, Sprachmemos und Kamera-Apps funktionieren dann nicht.

## Wege

### Weg A

1. Öffne den Berechtigungsmanager und arbeite diese Rechte durch: Standort, Kamera, Mikrofon, Kontakte, Kalender, Telefon, Dateien/Fotos.  
2. Wähle, wo möglich, „Nur während der Nutzung“ statt „Immer“.  
3. Für selten genutzte Apps: lieber „Nicht zulassen“ oder „Jedes Mal fragen“, falls angeboten.  
4. Öffne danach das Privatsphäredashboard und prüfe, ob die letzten Zugriffe plausibel sind.  
5. Wenn etwas kaputtgeht: Erlaube die Berechtigung nur für diese eine App und teste erneut.

Damit sinken Hintergrundzugriffe im Alltag deutlich. Du bekommst dafür manchmal mehr Rückfragen, wenn Apps eine Funktion wirklich brauchen.

<details><summary>Weg B (Fortgeschritten)</summary>

- Prüfe pro App zusätzlich Benachrichtigungen und entziehe sie Apps, die nur binden sollen. Das bringt Ruhe. Wichtige Hinweise können dir aber auch entgehen.  
  Bezeichnung kann abweichen – nutze die Suche nach: Benachrichtigungen.

- Suche nach „Spezieller App-Zugriff“ oder „Sonderzugriff“. Dort stecken Ausnahmen, die mehr können als normale Berechtigungen. Das senkt Missbrauchspotenzial. Komfortfunktionen können danach wegfallen.  
  Bezeichnung kann abweichen – nutze die Suche nach: Spezieller App-Zugriff.

- Achte besonders auf Zugriffe wie Nutzungsdaten, Bedienungshilfen/Barrierefreiheit und „Anzeige über anderen Apps“. Das sind oft stille Hebel. Manche Automatisierung oder Overlays funktionieren danach nicht mehr.

- Entferne Sonderzugriffe bei Apps, die du nicht bewusst so eingerichtet hast. Das räumt Altlasten auf. Manchmal musst du einzelne Funktionen neu einrichten.

</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.

- Nutze getrennte Profile (Mehrbenutzer oder Arbeitsprofil), um riskante Apps vom Alltag zu trennen. Das reduziert Querverknüpfungen. Es kostet Komfort, weil Apps teils doppelt eingerichtet werden.

- Prüfe regelmäßig Sonderzugriffe und notiere dir bewusste Ausnahmen. Das schafft Überblick. Ohne Pflege wird die Liste schnell wertlos.

- Deaktiviere Entwickleroptionen wieder, wenn du sie nur kurz gebraucht hast. Das senkt Fehlkonfigurationen. Debug-Funktionen stehen dann nicht mehr bereit.

- Wenn du ADB nutzt: Das ist die „Android Debug Bridge“, ein Werkzeug für PC-Verbindungen. Nutze sie nur an einem vertrauenswürdigen Rechner und schalte USB-Debugging danach aus. Das bleibt kontrollierbar. Falsche Nutzung kann Sicherheitsgrenzen aufweichen.

- Bei anhaltendem Verdacht: sichere Daten, setze das Gerät sauber neu und ändere wichtige Passwörter auf einem anderen Gerät. Das schafft einen sauberen Ausgangspunkt. Es kostet Zeit und du musst Konten neu einrichten.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob Apps seltener im Hintergrund auf Standort, Kamera oder Mikrofon zugreifen (Privatsphäredashboard).  
- Wenn dir mehr gezielte Rückfragen auffallen, hast du Rechte erfolgreich eingegrenzt – entscheide dann pro App.  
- Wenn eine App trotz Entzug „zu viel“ kann, prüfe Sonderzugriffe (Weg B) oder ersetze die App.

<details><summary>Mehr Prüfungen</summary>

- Schau nach ein paar Tagen erneut ins Privatsphäredashboard: Manche Apps fallen erst im Alltag auf.  
- Prüfe nach einem Android-Update stichprobenartig, weil Menüs sich verschieben können.  
- Wenn du viel unterwegs bist: Kombiniere das mit [Öffentliches WLAN](/netzwerk/public-wlan/) und [DNS](/dns/).

</details>

## Probleme & Lösungen

- **Problem:** Eine App funktioniert ohne „Immer erlauben“ nicht. / **Lösung:** Starte mit „Nur während der Nutzung“ und erlaube „Immer“ nur für diese App, wenn es wirklich nötig ist.  
- **Problem:** Standort ist zu ungenau (Navigation, „Gerät finden“). / **Lösung:** Aktiviere „Genauer Standort“ nur für diese App und nur bei Bedarf.  
- **Problem:** Eine App fragt nach Wochen wieder nach Berechtigungen. / **Lösung:** Prüfe, ob inaktive Apps automatisch zurückgesetzt werden, und erlaube danach gezielt erneut.  
- **Problem:** Im Privatsphäredashboard taucht eine App mit Zugriff auf, obwohl du sie kaum nutzt. / **Lösung:** Entziehe die Berechtigung und prüfe zusätzlich Sonderzugriffe (Weg B).  
- **Problem:** Du findest den Menüpunkt nicht. / **Lösung:** Nutze die Suche in den Einstellungen nach „Berechtigungsmanager“ oder „Datenschutz“.  
- **Problem:** Eine App verlangt Kontakte/Kalender „für Komfort“. / **Lösung:** Verweigere zuerst und teste, ob Kernfunktionen trotzdem gehen.

## Nicht gelöst

- Berechtigungen verhindern nicht, dass Apps Daten senden, die du selbst eingibst (Konto, Inhalte).  
- Hersteller- und Systemdienste können eigene Datenflüsse haben, die nicht wie App-Berechtigungen wirken.  
- Tracking kann auch ohne „sensible“ Rechte passieren, zum Beispiel über Kennungen oder Netz-Fingerabdrücke.  
- Manche Apps nerven mit häufigen Rückfragen, um doch noch Rechte zu bekommen.  
- Threat Model: Wenn Angreifer Admin-Zugriff haben (Stalkerware, Root, kompromittiertes Gerät), sind Berechtigungen kein zuverlässiger Schutz.

## Quellen

- [App-Berechtigungen auf einem Android-Smartphone ändern](https://support.google.com/android/answer/9431959)  
- [Berechtigungen über das Privatsphäredashboard verwalten](https://support.google.com/android/answer/13530434)  
- [Berechtigungen auf Android – Übersicht](https://developer.android.com/guide/topics/permissions/overview)  
- [Zugriff auf Daten erklären und begründen](https://developer.android.com/training/permissions/explaining-access)  
- [Runtime permissions (AOSP-Dokumentation)](https://source.android.com/docs/core/permissions/runtime_perms)

## Weiter

- [Berechtigungen](/berechtigungen/)  
- [Berechtigungen: Grundlagen](/berechtigungen/grundlagen/)  
- [Mikrofon & Kamera](/berechtigungen/mikrofon-kamera/)  
- [Standort: App-Berechtigungen](/standort/app-berechtigungen/)  
- [Android-Updates](/updates/android/)  
- [Stalkerware-Verdacht](/szenarien/stalkerware-verdacht/)
