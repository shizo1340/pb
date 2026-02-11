---
layout: "@/layouts/DocLayout.astro"
title: "App-Berechtigungen: Standort und Fotos sicher begrenzen"
url: "/standort/app-berechtigungen/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Lerne, App-Berechtigungen für Standort und Fotos zu prüfen und zu begrenzen: klare Schritte, schnelle Checks und typische Fehler, die du vermeidest."
---
Du merkst es, wenn Apps „zufällig“ wissen, wo du bist.  
Oder wenn Fotos beim Teilen einen Ort verraten, den du gar nicht nennen wolltest.  
Das nervt. Und es kann riskant sein, wenn andere daraus Routinen ableiten.

Ziel dieser Seite: Du begrenzt Standortzugriffe so, dass Apps nur bekommen, was sie wirklich brauchen.  
Navigation, Tickets oder Lieferdienste sollen trotzdem funktionieren.  
Du trennst System-Standort (für das Gerät) und App-Berechtigungen (pro App).

Sinnvoll, wenn du Standortzugriffe reduzieren willst, ohne dich durch Technik zu kämpfen.  
Grenze: Apps können Standort indirekt schätzen, zum Beispiel über IP-Adresse oder nahe Netze.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

Weg A: Standort pro App auf „nur bei Nutzung“ bringen und Foto-Standort beim Teilen vermeiden.  
Weg B: Präzisen Standort nur dort erlauben, wo er nötig ist, und Hintergrundzugriff ausdünnen.  
Weg C: Standort als Signal grundsätzlich minimieren (Profile trennen, Funk-Signale begrenzen).

Stoppsignal: Bei Stalkerware-Verdacht (Späh-Apps) ändere nicht nur Berechtigungen. Nutze einen Schutzplan.  
Aufwand + Komfortkosten: 10–30 Minuten. Manche Apps fragen öfter nach oder wirken „unbequemer“.

## Schnellstart (10 Minuten)
1) Gerätweiten Standort prüfen (System)
1. Öffne die Systemeinstellungen und suche den Bereich für Standort/Ortungsdienste.
2. Prüfe, ob Standort gerade aktiv sein muss (zum Beispiel Navigation) oder nur gelegentlich.
3. Suche nach Optionen, die die Standortgenauigkeit „verbessern“ (oft über WLAN/Bluetooth).
4. Wenn du das nicht brauchst: deaktiviere diese Verbesserungen.
5. Bezeichnung kann abweichen – nutze die Suche nach: Standort, Ortungsdienste, Genauigkeit, WLAN-Suche, Bluetooth-Suche.
Ohne diese Signale kann Ortung in Gebäuden schlechter werden.  
Du sendest weniger Standort-Signale im Hintergrund, auch wenn keine App offen ist.

2) Standort-Berechtigungen pro App herunterdrehen
6. Öffne die Übersicht der App-Berechtigungen für Standort.
7. Gehe die Apps durch, die „immer“ oder „im Hintergrund“ nutzen dürfen.
8. Stelle die meisten Apps auf „nur bei Nutzung“ oder „fragen“.
9. Erlaube „immer“ nur, wenn du den Zweck wirklich willst (zum Beispiel Notfall, verlässliche Automationen).
10. Bezeichnung kann abweichen – nutze die Suche nach: Berechtigungen, App-Berechtigungen, Standortberechtigung.
Manche Apps fragen dann öfter nach oder verlieren automatische Funktionen.  
Apps bekommen Standort nicht mehr still im Hintergrund.

3) Hintergrundzugriff gezielt abschalten
11. Suche in den Standort-Berechtigungen nach Apps mit „im Hintergrund“.
12. Erlaube Hintergrundzugriff nur für wenige, gut begründete Ausnahmen.
13. Prüfe zusätzlich App-Optionen wie „Hintergrundaktualisierung“ oder Akku-Einschränkungen.
14. Bezeichnung kann abweichen – nutze die Suche nach: Hintergrund, Hintergrundaktualisierung, Akku, Standort im Hintergrund.
Nachverfolgung (Tracking) und „Ankunft/Abfahrt“-Funktionen können unzuverlässig werden.  
Du reduzierst dauerhafte Standortspuren und oft auch den Akkuverbrauch.

4) Foto-Standort beim Aufnehmen und Teilen vermeiden
15. Prüfe, ob Fotos beim Aufnehmen automatisch den Ort speichern.
16. Wenn du Orte selten brauchst: deaktiviere das Speichern des Foto-Standorts.
17. Beim Teilen: achte auf Optionen wie „Standort“ oder „Metadaten“ und schalte das aus.
18. Bezeichnung kann abweichen – nutze die Suche nach: Kamera, Standort in Fotos, Metadaten, Teilen.
Sortieren nach Orten und Erinnerungen nach Reiseorten kann schlechter funktionieren.  
Fotos verraten beim Teilen nicht automatisch Aufenthaltsorte.

5) Geteilte Alben und Fotoabgleich kurz kontrollieren
19. Prüfe bei geteilten Alben, ob du „Original“ (mit Metadaten) oder „bereinigt“ teilst.
20. Prüfe in deiner Foto-App, ob Standortdaten sichtbar sind und ob du sie entfernen kannst.
21. Entscheide bewusst: Für wen sind die Fotos, und welche Ortsinfos wären dort problematisch?
22. Bezeichnung kann abweichen – nutze die Suche nach: Geteilte Alben, Freigabe, Original, Metadaten, Standort entfernen.
Einmal geteilte Details lassen sich nicht immer zurückholen.  
Du senkst das Risiko, dass andere über Fotos Orte und Routinen erkennen.

## Wege

### Weg A (alltagstauglich)

1) Entscheide für heute: Brauchst du Standort dauerhaft oder nur situativ?  
2) Prüfe den System-Standort: Ist er aktiv, und welche Genauigkeits-Verbesserungen sind an?  
3) Reduziere Standort-Berechtigungen: die meisten Apps auf „nur bei Nutzung“ oder „fragen“.  
4) Entferne Hintergrundzugriff dort, wo er nicht zwingend ist.  
5) Prüfe „präziser Standort“ (falls vorhanden): nur dort anlassen, wo es nötig ist.  
6) Deaktiviere Foto-Standort beim Aufnehmen, wenn du ihn selten brauchst.  
7) Teile Fotos bewusst und lasse Standort/Metadaten nach Möglichkeit weg.  
8) Prüfe geteilte Alben: Was ist schon draußen, was kann noch geändert werden?  
9) Wiederhole das kurz nach App-Installationen oder System-Updates.

<details><summary>Weg B (Fortgeschritten)</summary>

- Nutze „ungefährer Standort“, wenn dein System das anbietet, statt präziser Ortung (außer für Navigation).
- Erlaube Standort nur für Apps, bei denen du den Zweck klar benennen kannst (zum Beispiel Karte, Wetter, Lieferdienst während Nutzung).
- Prüfe regelmäßig Listen wie „zuletzt genutzt“ oder „kürzlich verwendet“, um überraschende Zugriffe zu finden.
- Setze für einzelne Apps strengere Hintergrundregeln über Akku- und Hintergrundoptionen.
- Entferne bei sensiblen Fotos den Standort aus einzelnen Bildern, bevor du sie teilst.
- Denke an indirekte Signale: WLAN- oder Bluetooth-Suche kann Standort plausibel machen, auch ohne „GPS-Gefühl“.
</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.

- Trenne heikle Apps in ein separates Profil oder Nutzerkonto, damit Daten weniger zusammenlaufen.
- Halte Funk-Signale unterwegs klein: WLAN/Bluetooth nur an, wenn du sie nutzt.
- Vermeide „Dauer-Ausnahmen“: Hintergrund-Standort nur für klar begründete Fälle, monatlich kurz prüfen.
- Teile Fotos erst nach Metadaten-Prüfung, wenn Ortsschutz wichtig ist (besonders zu Hause oder bei Kindern).

Achtung: Das kann Komfort deutlich senken. Orts-Zonen-Automationen (Geofencing) oder „Gerät finden“ können schlechter funktionieren.
</details>

## So merkst du, dass es wirkt

- Achte darauf, ob Apps erst beim Öffnen nach Standort fragen – statt ihn einfach zu „wissen“.  
- Achte darauf, ob bei Fotos unter „Infos“/Details ein Ort steht, den du nicht erwartest.  
- Entziehe einer „zu wissenden“ App Standort, öffne sie neu und beobachte, was wirklich nicht mehr geht.

<details><summary>Mehr Prüfungen</summary>

- Prüfe nach System-Updates kurz die Standort-Berechtigungen. Manche Optionen werden neu abgefragt.
- Prüfe bei einem Test-Share (Chat/Album), ob der Ort sichtbar ist, bevor du Fotos breit teilst.
- Wenn WLAN/Bluetooth „aus“ ist, Standort aber sehr genau bleibt: prüfe WLAN-/Bluetooth-Suche in den Standort-Einstellungen.
</details>

## Probleme & Lösungen

- **Problem:** Eine App funktioniert ohne Standort nicht mehr wie gewohnt.  
  **Lösung:** Erlaube Standort nur „während der Nutzung“ und prüfe, ob „präzise“ wirklich nötig ist.

- **Problem:** Eine App verlangt „immer“ Standort für Erinnerungen oder Automationen.  
  **Lösung:** Erlaube „immer“ nur für diese eine App und bleib bei allen anderen streng.

- **Problem:** Standort scheint aktiv, obwohl du ihn „aus“ meinst.  
  **Lösung:** Prüfe WLAN-/Bluetooth-Suche zur Standortverbesserung und schalte sie bei Bedarf aus.

- **Problem:** Fotos verraten Orte beim Teilen.  
  **Lösung:** Schalte Standort/Metadaten im Teilen-Dialog aus oder entferne sie vor dem Teilen.

- **Problem:** In geteilten Alben tauchen Ortsinfos auf, die du nicht teilen wolltest.  
  **Lösung:** Stelle künftige Freigaben auf „bereinigt“ um und prüfe alte Freigaben kritisch.

- **Problem:** Hintergrundzugriffe ziehen Akku und wirken wie „Dauer-Ortung“.  
  **Lösung:** Entziehe Hintergrundzugriff und setze zusätzlich Hintergrundbeschränkungen pro App.

## Nicht gelöst

- Standort kann indirekt geschätzt werden, etwa über IP-Adresse, Mobilfunkzellen oder nahe WLANs/Bluetooth-Beacons.  
- Bereits geteilte Fotos lassen sich bei anderen oft nicht nachträglich „bereinigen“.  
- System- und Kontodienste können eigene Standortverläufe führen, unabhängig von App-Berechtigungen.  
- Gegen Späh-Apps, Admin-Zugriff oder ein kompromittiertes Gerät helfen Berechtigungen nur begrenzt.  
- Bei Zwang oder Kontrolle (zum Beispiel jemand verlangt dein entsperrtes Handy) braucht es zusätzliche Schutzmaßnahmen.

## FAQ

**Ist Standort immer schlimm?**

Nein, aber sensibel. Gib ihn nur, wenn nötig, und nutze „nur beim Verwenden“ statt „immer“.

**Bluetooth/WLAN-Scanning deaktivieren?**

Wenn du es nicht brauchst: ja. Es reduziert Hintergrund-Ortung und Funk-Spuren.

**Wie entferne ich Foto-Standorte?**

Metadaten löschen oder beim Export entfernen. Prüfe danach, ob wirklich nichts mehr drin ist.

## Quellen

- [GPS und Ortungsdienste auf dem iPhone, iPad oder iPod touch](https://support.apple.com/de-de/102647)
- [Informationen zu Datenschutz und Ortungsdiensten in iOS und iPadOS](https://support.apple.com/de-de/102515)
- [Standortmetadaten in der App „Fotos“ verwalten](https://support.apple.com/de-de/guide/personal-safety/ips0d7a5df82/web)
- [Berechtigungen zur Standortermittlung für Apps verwalten](https://support.google.com/accounts/answer/6179507?hl=de)
- [Standorteinstellungen von Android-Geräten verwalten](https://support.google.com/android/answer/3467281?hl=de)
- [Standorte bei Fotos (Google Fotos)](https://support.google.com/photos/answer/6153599?hl=de)

## Weiter

- [Standortdienste](/standort/standortdienste/)
- [Foto-Standort](/standort/foto-standort/)
- [WLAN & Bluetooth](/standort/wlan-bluetooth/)
- [Standort-Metadaten](/standort/metadaten/)
- [EXIF entfernen](/dateien/exif-entfernen/)
- [Berechtigungen-Grundlagen](/berechtigungen/grundlagen/)
