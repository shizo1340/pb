---
layout: "@/layouts/DocLayout.astro"
title: "IoT-Geräte sicher einrichten: WLAN trennen, Daten begrenzen"
url: "/hardware/iot/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Schritt-für-Schritt: IoT-Geräte sicher ins Heimnetz bringen. Du trennst ein IoT-WLAN, setzt Passwörter, hältst Updates aktiv und begrenzt Cloud-Datenflüsse."
---
Viele IoT-Geräte (Internet der Dinge) laufen „nebenbei“.
Lampen, Steckdosen, Kameras, Lautsprecher oder Saugroboter.

Das Problem: Sie funken oft dauerhaft nach außen.
Manche starten mit schwachen Standard-Einstellungen oder erzwingen Konten.

Ziel: Deine Geräte funktionieren weiter im Alltag.
Aber es fließen weniger Daten ab, und ein Gerät reißt nicht dein ganzes Netz mit.

Sinnvoll, wenn du Smart-Home oder vernetzte Haushaltsgeräte nutzt oder kaufen willst.
Grenze: Wenn ein Gerät ohne Hersteller-Online-Dienst nicht sinnvoll nutzbar ist, bleibt Kontrolle beim Anbieter.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

Weg A: IoT-Geräte getrennt ins WLAN bringen, Passwörter ändern, Updates im Blick behalten.  
Weg B: Datenflüsse stärker begrenzen und das IoT-Netz „enger“ machen.  
Weg C: Saubere Netztrennung und Kontrolle auf Netzwerkebene, nur wenn du es warten willst.

Stoppsignal: Wenn du kein Update bekommst oder kein Passwort setzen kannst, nimm das Gerät nicht ins Heimnetz.  
Aufwand + Komfortkosten: meist 20–45 Minuten, dafür kann „automatische Erkennung“ schlechter funktionieren.

## Schnellstart (20 Minuten)
1) **IoT-Geräte sichtbar machen**
1. Öffne im Router die Geräteliste und notiere unbekannte Einträge (Name, Hersteller, MAC-Adresse, falls angezeigt).
2. Ordne jedes IoT-Gerät grob ein: „mit Mikro“, „mit Kamera“, „Cloud-Zwang“, „nur lokal nutzbar“.
3. Entferne Geräte, die du nicht mehr nutzt, aus der App und trenne sie vom Strom.
Bezeichnung kann abweichen – nutze die Suche nach: „Geräte“, „Client-Liste“, „Heimnetz“.  
Du bekommst Übersicht über dein Netz, musst aber ein paar Minuten Inventur einplanen.

2) **Ein separates WLAN für IoT nutzen**
4. Lege ein eigenes WLAN nur für IoT an (oft als Gastzugang oder zusätzliches WLAN möglich).
5. Verbinde IoT-Geräte nur noch mit diesem WLAN, nicht mit dem „normalen“ Heim-WLAN.
6. Aktiviere, falls vorhanden, dass Geräte im IoT-WLAN nicht auf andere Geräte zugreifen dürfen.
Bezeichnung kann abweichen – nutze die Suche nach: „Gäste-WLAN“, „Gastzugang“, „zusätzliches WLAN“.  
Das begrenzt Schäden bei einem kompromittierten Gerät, kann aber Streaming und „Geräte finden“ erschweren.

3) **Standard-Zugangsdaten ersetzen**
7. Setze für jedes Gerät ein eigenes Geräte-Passwort (nicht das WLAN-Passwort wiederverwenden).
8. Ändere auch das Administrations-Passwort, falls das Gerät eine Weboberfläche hat.
9. Deaktiviere „Gast“-/„Demo“-Zugänge, falls vorhanden.
Das senkt das Risiko von Übernahmen, kostet aber etwas Pflege (Passwörter sicher ablegen).

4) **Updates aktiv halten**
10. Suche in der Geräte-App nach „Gerätesoftware“ oder „Update“ und installiere offene Updates.
11. Aktiviere automatische Updates, wenn es diese Option gibt.
12. Prüfe beim Kauf, ob der Hersteller eine Update-Zusage nennt (Zeitraum oder Enddatum).
Du schließt bekannte Lücken, musst aber mit kurzen Ausfällen rechnen, wenn ein Update neu startet.

5) **Mikrofon/Kamera bewusst begrenzen**
13. Schalte Mikro/Kamera-Funktionen ab, wenn du sie nicht brauchst (oder nutze physische Abdeckungen, falls vorhanden).
14. Stelle Geräte nicht in Räume, in denen Gespräche oder Besuch besonders sensibel sind.
15. Prüfe in der App, ob Aufzeichnungen in die Cloud hochgeladen werden oder lokal bleiben.
Du reduzierst Dauer-Tracking, verlierst aber oft Komfort wie Sprachaktivierung oder Fernzugriff unterwegs.

## Wege

### Weg A

1. Entscheide pro Gerät: Muss es wirklich online sein, oder reicht lokal?
2. Richte ein getrenntes WLAN für IoT ein und nutze es konsequent.
3. Halte den Router aktuell, weil jedes IoT-Gerät darüber ins Internet geht.
4. Entferne ungenutzte Geräte aus Apps/Konten und trenne sie vom Strom.
5. Ersetze Standard-Zugangsdaten: Geräte-Passwort und, falls vorhanden, Admin-Passwort.
6. Aktiviere Updates am Gerät oder in der App und installiere sie zeitnah.
7. Prüfe App-Berechtigungen am Smartphone: Standort, Kontakte, Mikrofon, Kamera nur geben, wenn nötig.
8. Deaktiviere Fernzugriff, wenn du ihn nicht nutzt.
9. Behandle Smart-Home als Dauer-Tracker: Alles, was zuhört, sieht oder Bewegungen misst, ist besonders sensibel.
10. Plane eine Routine: alle 2–3 Monate kurz prüfen, ob Updates ausstehen und ob neue Geräte auftauchen.

<details><summary>Weg B (Fortgeschritten)</summary>

- Stelle das IoT-WLAN so ein, dass es keinen Zugriff auf dein Heimnetz hat (nur Internet, wenn nötig).
Das schützt PCs und NAS, kann aber lokale Steuerung über mehrere Netze komplizierter machen.
- Aktiviere „Geräte-Isolation“ im IoT-WLAN, falls verfügbar.
Das bremst seitliche Ausbreitung, kann aber Geräte-zu-Gerät-Funktionen brechen.
- Prüfe, ob der Router Listen für ausgehende Verbindungen zeigt.
Du erkennst „nach Hause telefonieren“, bekommst aber oft nur grobe Hinweise.
- Nutze für IoT getrennte Konten oder Adressen, wenn Konten erzwungen werden.
Das trennt Identitäten, bedeutet aber mehr Verwaltung.
- Prüfe vor dem Behalten: Funktioniert das Gerät ohne Online-Dienst noch sinnvoll?
Das spart später Ärger, kann aber bedeuten, dass du auf Features verzichtest.
- Wenn ein Gerät Mikro/Kamera hat: reduziere Funktionen und schalte Cloud-Speicherung ab, falls möglich.
Das senkt Datenabfluss, kann aber Benachrichtigungen unterwegs einschränken.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.
- Trenne IoT per VLAN oder separatem Netzwerksegment und erlaube nur nötige Ziele nach außen.
Das ist sehr wirksam, aber du musst Regeln warten und nach Updates nachziehen.
- Protokolliere DNS-Anfragen des IoT-Netzes, um Ziele sichtbar zu machen.
Du gewinnst Transparenz, brauchst aber etwas Auswertung.
- Setze Firewall-Regeln pro Geräteklasse (z. B. Kamera nur zum Hersteller, nicht ins Heimnetz).
Das begrenzt Missbrauch, kann aber Funktionen unerwartet blockieren.
- Plane Ausnahmen bewusst: Manche Geräte brauchen lokale Discovery (Multicast).
Erlaube das nur gezielt, sonst hebelst du die Trennung wieder aus.
- Dokumentiere Regeln und Änderungen, sonst verlierst du bei Updates den Überblick.
Das kostet Zeit, spart aber später Fehlersuche.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob neue IoT-Geräte im Router konsequent im IoT-WLAN erscheinen, nicht im Heimnetz.
- Wenn ein IoT-Gerät dein Notebook oder Dateifreigaben nicht „sieht“, ist die Trennung meist aktiv.
- Wenn die Geräte-App ohne Dauerzugriff auf Standort oder Kontakte funktioniert, sind Berechtigungen reduziert.

<details><summary>Mehr Prüfungen</summary>

- Prüfe in der Geräte-App, ob es „letzte Aktivität“, „angemeldete Geräte“ oder „Sitzungen“ gibt.
- Wenn dein Router Datenverbrauch pro Gerät zeigt: Große Peaks ohne Nutzung sind ein Warnsignal.
- Beim Kauf: Suche nach einer klaren Update-Aussage und nach Passwortpflicht bei der Einrichtung.

</details>

## Probleme & Lösungen

- **Problem:** Das IoT-Gerät findet das WLAN nicht.  
  **Lösung:** Prüfe, ob es nur 2,4 GHz unterstützt, und stelle das IoT-WLAN entsprechend ein.

- **Problem:** Lautsprecher oder Streaming funktionieren im getrennten WLAN nicht zuverlässig.  
  **Lösung:** Für die Einrichtung kurz ins gleiche Netz wechseln, danach wieder trennen und nur nötige lokale Verbindungen erlauben.

- **Problem:** Die App verlangt Standort „immer“ oder Kontakte, sonst geht nichts.  
  **Lösung:** Nur während der Kopplung erlauben und danach entziehen, dann testen, ob Grundfunktionen bleiben.

- **Problem:** Updates schlagen fehl oder dauern sehr lange.  
  **Lösung:** Gerät näher an den Router, stabile Stromversorgung, Update erneut starten und bei Wiederholung als Warnzeichen werten.

- **Problem:** Das Gerät erzwingt Konto und Cloud-Nutzung.  
  **Lösung:** Prüfe einen „lokalen Modus“ und entscheide bewusst, ob dir der Datenabfluss den Nutzen wert ist.

- **Problem:** Du kannst das Geräte-Passwort nicht ändern oder es gibt feste Zugangsdaten.  
  **Lösung:** Nicht im Heimnetz betreiben, sondern zurückgeben oder nur stark eingeschränkt nutzen.

- **Problem:** Dein Router bietet kein getrenntes WLAN.  
  **Lösung:** Nutze den Gastzugang oder ergänze getrennte Netztechnik, sonst ist echte Trennung kaum machbar.

## Nicht gelöst

- Ein Gerät kann weiterhin Daten an den Hersteller senden, wenn es nur so funktioniert.
- Wenn der Hersteller Updates einstellt, kannst du das Risiko nur begrenzen, nicht beheben.
- Gegen Angriffe mit physischem Zugriff auf Router oder Geräte helfen diese Maßnahmen nur begrenzt.
- Wenn jemand Admin-Zugriff auf Router oder Cloud-Konto hat, kann er Regeln aushebeln oder Geräte übernehmen.
- Bei kompromittierten Smartphones (z. B. Stalkerware) kann die Geräte-App weiter steuern oder Daten abgreifen.
- Bei Zwang oder erpresster Freigabe (Passwort herausgeben) schützt Netztrennung nur eingeschränkt.

## FAQ

**Ist Smart Home grundsätzlich riskant?**

Viele Geräte sammeln Daten. Achte auf lokale Steuerung, Update-Politik, getrenntes Netz und minimal nötige Cloud.

**Brauche ich eine neue Webcam?**

Oft reicht Abdecken/physische Trennung. Entscheidend ist, wann Kamera/Mikrofon wirklich aktiv sein dürfen.

**Router als Sicherheitsanker?**

Ja. Updates, starke Admin-Zugänge, Gastnetz und saubere WLAN-Settings sind zentrale Basics.

## Quellen

- [BSI: Smarthome – den Wohnraum sicher vernetzen](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Internet-der-Dinge-Smart-leben/Smart-Home/smart-home_node.html)
- [BSI: Consumer IoT und ETSI EN 303 645 als Grundlage](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Consumer-IoT/Consumer-IoT.html)
- [ETSI EN 303 645 (PDF): Cyber Security for Consumer IoT](https://www.etsi.org/deliver/etsi_en/303600_303699/303645/03.01.03_60/en_303645v030103p.pdf)
- [NIST IR 8259A (PDF): IoT Device Cybersecurity Capability Core Baseline](https://nvlpubs.nist.gov/nistpubs/ir/2020/NIST.IR.8259a.pdf)
- [OWASP: Internet of Things Project](https://owasp.org/www-project-internet-of-things/)

## Weiter

- [Router](/hardware/router/)
- [Router-Sicherheit](/netzwerk/router-sicherheit/)
- [Updates für Router & IoT](/updates/router-iot/)
- [Smart-Home](/hardware/smart-home/)
- [Berechtigungen: Grundlagen](/berechtigungen/grundlagen/)
- [Gäste-WLAN](/netzwerk/gaeste-wlan/)
