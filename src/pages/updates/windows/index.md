---
layout: "@/layouts/DocLayout.astro"
title: "Windows-Updates richtig einstellen und Fehler beheben"
url: "/updates/windows/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Windows-Updates sicher halten: Updates prüfen, automatische Updates einstellen, typische Fehler lösen und Neustarts planbar machen – mit Checks und Grenzen."
---
Windows nervt manchmal mit Neustarts zur falschen Zeit. Oder Updates hängen fest, während du eigentlich arbeiten willst. Gleichzeitig bleiben ohne Aktualisierungen bekannte Sicherheitslücken länger offen.

Ziel ist nicht „perfekt“. Sondern: Windows zuverlässig aktuell halten, ohne dass es dich ständig aus dem Alltag reißt.

Sinnvoll, wenn du einen Windows-PC privat oder im kleinen Büro nutzt.  
Grenze: Auf Arbeitsgeräten können Richtlinien deines Arbeitgebers Einstellungen einschränken.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

Weg A: Automatische Aktualisierungen laufen lassen, Neustarts planbar machen.  
Weg B: Mehr Kontrolle über Pausen, optionale Updates und Treiber.  
Weg C: Diagnose und Protokolle nutzen, wenn Updates wiederholt scheitern.

Stoppsignal: Wenn der PC ungewöhnlich reagiert (neue Konten, Warnungen, unbekannte Programme), kläre erst den Verdacht auf Kompromittierung, z. B. mit [Szenario: Verdacht, Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/).  
Aufwand + Komfortkosten: 10–20 Minuten, danach seltene Neustarts zur passenden Zeit.

## Schnellstart (10 Minuten)
1) Auf Updates prüfen und alles Wichtige installieren
1. Öffne die Einstellungen.
2. Suche nach: **Windows Update**.
3. Starte die Suche nach Aktualisierungen.
4. Installiere Sicherheits- und Qualitätsupdates.
5. Starte neu, wenn ein Neustart gefordert wird.
Bezeichnung kann abweichen – nutze die Suche nach: Windows Update.  
Ein Neustart kann offene Programme schließen.  
Du schließt bekannte Sicherheitslücken und reduzierst Fehler durch veraltete Komponenten.

2) Neustarts so planen, dass sie dich weniger stören
6. Öffne die Einstellungen.
7. Suche nach: **Neustart** oder **Aktive Stunden**.
8. Lege ein Zeitfenster fest, in dem du den PC typischerweise nutzt.
9. Aktiviere, falls vorhanden, eine Neustart-Benachrichtigung.
Bezeichnung kann abweichen – nutze die Suche nach: Aktive Stunden.  
Zu enge Zeitfenster führen eher zu Neustarts „dazwischen“.  
Updates laufen weiter automatisch, aber der Neustart wird für dich planbarer.

3) Update-Verlauf prüfen, damit du siehst, was wirklich passiert ist
10. Öffne die Einstellungen.
11. Suche nach: **Updateverlauf**.
12. Prüfe, ob die letzten Installationen erfolgreich waren.
13. Notiere dir bei Fehlern den angezeigten Fehlercode oder Hinweistext.
Bezeichnung kann abweichen – nutze die Suche nach: Updateverlauf.  
Ein einzelner Fehlversuch ist nicht automatisch ein Problem.  
Du arbeitest mit Fakten (erfolgreich/fehlgeschlagen) statt mit Bauchgefühl.

4) Optionale Updates und Treiber nur gezielt anfassen
14. Öffne die Einstellungen.
15. Suche nach: **Optionale Updates** oder **Treiberupdates**.
16. Installiere optionale Treiber nur, wenn du ein konkretes Problem lösen willst (z. B. WLAN instabil).
17. Nach Treiberänderungen: einmal neu starten und kurz testen.
Bezeichnung kann abweichen – nutze die Suche nach: Optionale Updates.  
Treiber können selten neue Probleme auslösen (z. B. Audio oder WLAN).  
Du vermeidest unnötige Änderungen und hältst das System stabil.

5) Windows-Version und Supportstatus grob einordnen
18. Öffne die Einstellungen.
19. Suche nach: **Info** oder **Info zu diesem PC**.
20. Notiere Edition und Versionsnummer.
21. Prüfe, ob deine Version noch Sicherheitsupdates bekommt.
Bezeichnung kann abweichen – nutze die Suche nach: Info zu diesem PC.  
Sehr alte Geräte bekommen teils keine neuen Funktionsupdates mehr.  
Du erkennst früh, ob ein Versions- oder Gerätewechsel absehbar ist.

6) Nicht nur Windows: Router und wichtige Geräte mitdenken
22. Prüfe beim Router, ob automatische Aktualisierungen aktiv sind.
23. Öffne die Router-Oberfläche und suche nach: **Firmware** oder **Aktualisierung**.
24. Aktualisiere zentrale Geräte (Router, Repeater, NAS, Smart-Home-Zentrale), wenn Updates verfügbar sind.
Bezeichnung kann abweichen – nutze die Suche nach: Firmware.  
Firmware ist die Gerätesoftware; ein Update kann den Router neu starten und kurz das WLAN trennen.  
Du schließt Lücken im Heimnetz, die Windows-Updates allein nicht abdecken.

## Wege

### Weg A (alltagstauglich)

1) Plane einen festen Wochentermin (z. B. freitags), an dem du kurz nach Updates schaust.  
2) Öffne die Einstellungen und suche nach: **Windows Update**.  
3) Installiere Sicherheits- und Qualitätsupdates und starte neu, wenn Windows es verlangt.  
4) Stelle „Aktive Stunden“ so ein, dass Neustarts nicht mitten in Arbeit oder Schule fallen.  
5) Prüfe den Update-Verlauf, ob Installationen wirklich erfolgreich waren.  
6) Installiere optionale Treiber nur bei einem konkreten Problem.  
7) Halte Router und zentrale Geräte im Heimnetz ebenfalls aktuell.

<details><summary>Weg B (Fortgeschritten)</summary>

- Lege fest, ob du Funktionsupdates (große Versionssprünge) sofort oder verzögert willst, und notiere Datum + Grund. So behältst du Kontrolle, riskierst aber nicht, Updates „zu vergessen“.
- Nutze „Updates pausieren“ nur als Ausnahme und beende die Pause aktiv. Sonst bleiben Sicherheitslücken länger offen.
- Prüfe nach größeren Updates gezielt deine kritischen Punkte: Drucker, VPN, Audio, Kamera, WLAN. Das kostet ein paar Minuten, spart aber Ärger im Alltag.
- Wenn ein Treiberproblem nach einem Update beginnt: Suche nach „Treiber“ oder „Geräte-Manager“ und nutze, falls angeboten, die Rückkehr zum vorherigen Treiber.
</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.

- Prüfe die Ereignisanzeige und suche nach „Windows Update“, um wiederkehrende Fehler zu erkennen. Das ist genauer, aber braucht etwas Orientierung.
- Führe die integrierte Update-Problembehandlung aus und dokumentiere Ergebnis + Datum. Das kann helfen, löst aber nicht jedes Grundproblem.
- Setze Windows-Update-Komponenten nur gezielt zurück, wenn du die Schritte nachvollziehen kannst. Dabei können auch Update-Einstellungen zurückspringen.
- Bei wiederholten Abbrüchen: Teste ein Update einmal über ein anderes Netz, um Verbindungsprobleme auszuschließen.
- Auf verwalteten Geräten (Schule/Arbeit) können Vorgaben oder Geräteverwaltung (MDM) Updates steuern. Dann ist die zuständige Stelle der richtige Weg.
</details>

## So merkst du, dass es wirkt

- Achte darauf, ob Windows Update regelmäßig „Aktuell“ meldet und nichts dauerhaft aussteht.  
- Achte darauf, ob Neustarts dich nicht mehr überraschen, nachdem du „Aktive Stunden“ gesetzt hast.  
- Achte darauf, ob der Update-Verlauf überwiegend „Erfolgreich“ zeigt und keine wiederkehrenden Fehlercodes auftauchen.

<details><summary>Mehr Prüfungen & Hinweise</summary>

- Prüfe nach größeren Aktualisierungen kurz die wichtigsten Funktionen: Internet, Audio, Drucker, Kamera, VPN.
- Wenn ein Update lange „bei 0 %“ hängt: Gib dem Vorgang Zeit und starte nicht mehrfach neu.
- Wenn wenig Speicherplatz frei ist: räume erst auf (Downloads, temporäre Dateien), bevor du Updates erzwingst.
</details>

## Probleme & Lösungen

- **Problem:** Updates hängen sehr lange oder wirken „eingefroren“.  
  **Lösung:** Gib dem Vorgang Zeit, vermeide mehrere Neustarts hintereinander und prüfe danach den Update-Verlauf auf Erfolg oder Fehlercode.

- **Problem:** Nach einem Update funktionieren WLAN, Ton oder Drucker nicht mehr.  
  **Lösung:** Prüfe, ob ein Treiberwechsel stattgefunden hat, und nutze – falls angeboten – die Rückkehr zum vorherigen Treiber.

- **Problem:** Windows bietet keine neuen Funktionsupdates an.  
  **Lösung:** Prüfe Version und Supportstatus; bei älteren Geräten kann die Hardware der begrenzende Faktor sein.

- **Problem:** Du pausierst Updates und vergisst, sie wieder einzuschalten.  
  **Lösung:** Beende die Pause aktiv und plane direkt einen Neustart ein, damit alles sauber abgeschlossen wird.

- **Problem:** Ein Fehlercode taucht im Update-Verlauf immer wieder auf.  
  **Lösung:** Notiere den Code exakt und arbeite die Microsoft-Hilfe Schritt für Schritt in der empfohlenen Reihenfolge ab.

- **Problem:** Hersteller-Programme zeigen andere Updates als Windows.  
  **Lösung:** Nutze Hersteller-Tools vor allem für BIOS/UEFI (Start-Firmware) oder Gerät-Firmware; Windows-Komponenten kommen primär über Windows Update.

- **Problem:** Auf dem Arbeitsgerät fehlen Schalter oder Menüs.  
  **Lösung:** Gehe von Richtlinien aus und kläre, wie Updates in eurer Verwaltung geplant und freigegeben werden.

## Nicht gelöst

- Windows-Updates schützen nicht, wenn das Gerät bereits kompromittiert ist oder jemand mit Admin-Zugriff mitliest.  
- Gegen Stalkerware, physischen Zugriff oder Zwang helfen Updates allein nicht.  
- Ein nicht mehr unterstütztes Windows kann keine verlässliche Sicherheitsbasis mehr sein – auch mit Workarounds nicht.  
- Firmware-Updates (Router, BIOS/UEFI, Geräte-Firmware) passieren nicht automatisch nur durch Windows.  
- Wenn riskante Zusatzsoftware oder alte Erweiterungen installiert sind, bleibt ein Teil der Angriffsfläche bestehen.

## FAQ

**Warum sind Updates so wichtig?**

Sie schließen Sicherheitslücken. Ohne Updates helfen viele andere Maßnahmen nur begrenzt.

**Soll ich Auto-Updates anlassen?**

Meist ja. Bei kritischen Systemen: kontrolliert, aber regelmäßig.

**Was ist mit Router/IoT?**

Die werden oft vergessen. Update-Strategie + Austauschplanung ist hier besonders wichtig.

## Quellen

- [Microsoft Support – Windows-Hilfe](https://support.microsoft.com/de-de/windows)
- [Microsoft Learn – Windows Update (Dokumentation)](https://learn.microsoft.com/de-de/windows/deployment/update/)
- [Microsoft Learn – Produktlebenszyklus](https://learn.microsoft.com/de-de/lifecycle/)
- [BSI – Updates (Verbraucherinformation)](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Updates/updates_node.html)

## Weiter

- [Warum Updates wichtig sind](/updates/warum-wichtig/)
- [Automatische Updates richtig einordnen](/updates/automatische-updates/)
- [Router & IoT aktuell halten](/updates/router-iot/)
- [Gerätesicherheit: sicherer Start](/geraete-sicherheit/sicherer-start/)
- [Szenario: Verdacht, Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/)
