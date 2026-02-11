---
layout: "@/layouts/DocLayout.astro"
title: "Router- und IoT-Updates sicher einrichten – Anleitung"
url: "/updates/router-iot/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Router-Updates und IoT-Updates sicher einstellen: Automatik aktivieren, Support-Ende erkennen, Gastnetz nutzen und Ausfälle vermeiden. Mit klaren Schritten."
---
Router und smarte Geräte bekommen Updates oft „nebenbei“ – oder gar nicht.  
Das merkst du meist erst, wenn etwas schiefgeht: Aussetzer, Warnmeldungen oder Geräte, die „komisch“ reagieren.  
Riskant ist das, weil bekannte Schwachstellen offen bleiben.

Ziel ist ein Zustand, in dem Updates regelmäßig passieren, ohne dass du ständig daran denken musst.  
Und du erkennst früh, wenn ein Gerät aus dem Support läuft und dauerhaft alt bleibt.

Sinnvoll, wenn … du einen WLAN-Router und mehrere smarte Geräte im Heimnetz nutzt (IoT: vernetzte Alltagsgeräte wie Steckdosen, Kameras, Lautsprecher).  
Grenze: Wenn der Herstellersupport endet, gibt es keine echte Update-Lösung – dann hilft nur ersetzen oder konsequent isolieren.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

Weg A: Router-Updates aktivieren, Support prüfen, Geräte-Updates im Alltag mitlaufen lassen.  
Weg B: Feste Update-Routine plus Trennung für alte oder selten aktualisierte Geräte.  
Weg C: Update-Quelle und Integrität prüfen, dokumentieren und Rückfallweg vorbereiten.

Stoppsignal: Aktualisiere nicht „zwischen Tür und Angel“, wenn du gerade stabiles Internet brauchst.  
Plane 10–15 Minuten Puffer ein, falls ein Neustart nötig ist.

Aufwand + Komfortkosten: 15–30 Minuten einmalig, danach wenige Minuten pro Monat.  
Komfortkosten sind kurze Ausfälle durch Neustarts und ggf. weniger Komfort durch Netztrennung.

## Schnellstart (15 Minuten)
1) Router-Modell und aktuelle Version notieren  
1. Öffne die Verwaltungsoberfläche deines Routers (meist nur im Heimnetz erreichbar).
2. Suche die Geräteinfos (Modellbezeichnung und Firmware-Version).
3. Notiere Modell und Versionsnummer so, dass du sie wiederfindest.
Bezeichnung kann abweichen – nutze die Suche nach: Firmware, Version, Systeminformationen.  
Du solltest hier nichts „auf Verdacht“ umstellen, sonst änderst du versehentlich WLAN- oder Internet-Einstellungen.  
Du kannst später schnell prüfen, ob wirklich aktualisiert wurde.

2) Prüfen, ob Router-Updates automatisch laufen  
4. Suche in der Router-Verwaltung nach der Update-Funktion.
5. Aktiviere automatische Updates, wenn verfügbar.
6. Wenn es ein Zeitfenster gibt, lege es auf eine ruhige Zeit (z. B. nachts).
Bezeichnung kann abweichen – nutze die Suche nach: Update, Aktualisierung, Firmware.  
Automatische Updates können einen Neustart auslösen und das Internet kurz unterbrechen.  
Dafür werden Sicherheitslücken eher geschlossen, auch wenn du es vergisst.

3) Support-Ende grob einschätzen  
7. Suche nach dem Router-Modell plus „Support“, „Lebenszyklus“ oder „End of Support“.
8. Prüfe, wann das letzte Firmware-Update veröffentlicht wurde (Datum).
9. Wenn das letzte Update lange zurückliegt, plane Ersatz oder Isolation (siehe Schritt 5).
Hinweis: Manche Hersteller nennen kein Enddatum; das letzte Update-Datum ist dann dein Anhaltspunkt.  
Du bekommst nicht immer eine klare Antwort, weil Hersteller Informationen unterschiedlich offenlegen.  
Dafür vermeidest du „Dauer-Altgeräte“ als Einfallstor im Heimnetz.

4) Automatische Updates bei smarten Geräten aktivieren  
10. Öffne die jeweilige Geräte-App und suche nach Geräte-/Firmware-Updates.
11. Aktiviere automatische Updates, falls vorhanden.
12. Stelle sicher, dass Updates über WLAN erlaubt sind (nicht nur manuell).
Bezeichnung kann abweichen – nutze die Suche nach: Geräte-Update, Firmware, Automatische Aktualisierung.  
Manche Geräte starten nach Updates neu und sind kurz nicht erreichbar.  
Dafür werden häufige Schwachstellen geschlossen, ohne dass du jedes Gerät einzeln „jagen“ musst.

5) Alte oder selten aktualisierte Geräte trennen  
13. Aktiviere ein Gäste-WLAN oder ein separates WLAN für smarte Geräte.
14. Verbinde riskante Geräte (alt oder unklarer Support) nur mit diesem WLAN.
15. Wenn möglich: Sperre Zugriff vom Gäste-WLAN auf dein Heimnetz.
Bezeichnung kann abweichen – nutze die Suche nach: Gäste-WLAN, Gastnetz, Isolation, Heimnetz-Zugriff.  
Geräte-zu-Geräte-Funktionen (z. B. Casting, lokale Steuerung) können dadurch schlechter funktionieren.  
Dafür bleibt der Schaden besser begrenzt, wenn ein Gerät angreifbar bleibt.

## Wege

### Weg A

1. Lege ein Update-Zeitfenster fest, in dem ein Neustart okay ist.  
2. Prüfe im Router die aktuelle Firmware-Version und notiere sie.  
3. Aktiviere automatische Router-Updates, wenn es die Option gibt.  
Bezeichnung kann abweichen – nutze die Suche nach: Update, Firmware, Automatisch.  
4. Starte ein manuelles Update nur, wenn du Zeit hast und eine neuere Version klar erkennbar ist.  
5. Prüfe nach dem Update: Internet geht, WLAN geht, die Version hat sich plausibel geändert.  
6. Aktiviere bei smarten Geräten automatische Updates in der jeweiligen App.  
7. Räume Altgeräte auf: Ohne Support ins getrennte WLAN oder ersetzen.  
8. Wiederhole die Kurzprüfung einmal im Monat: Router-Version und „Update verfügbar?“ bei den wichtigsten Geräten.  
9. Bei neuen oder gebraucht übernommenen Geräten: erst Update-Stand und Support prüfen, dann erst ins Heimnetz.

<details><summary>Weg B (Fortgeschritten)</summary>

- Lege eine feste Routine fest (z. B. jeden ersten Sonntag im Monat): Router-Version prüfen, 3–5 wichtigste Geräte prüfen.  
- Lege eine Geräte-Liste an: Gerät, Standort, App/Verwaltung, letzte bekannte Version, Support-Hinweis (falls vorhanden).  
- Sichere Router-Einstellungen, falls dein Router eine Sicherungsfunktion anbietet (vor größeren Updates).  
- Trenne smarte Geräte konsequent: Standardgeräte ins Hauptnetz, „alt/unklar“ ins Gäste-WLAN.  
- Schalte Fernfunktionen ab (z. B. Fernverwaltung), wenn du sie nicht aktiv nutzt.  
- Bei Problemen nach Updates: erst Router und Gerät neu starten, dann erst tiefer umbauen.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.  
- Beziehe Firmware nur aus der offiziellen Herstellerquelle und achte auf eine sichere Verbindung (https).  
- Prüfe Prüfsummen oder Signaturen, wenn der Hersteller sie anbietet (Integritätsnachweis: Datei ist unverändert).  
- Führe Router-Updates bevorzugt per Netzwerkkabel aus, damit das WLAN nicht dazwischenfunkt.  
- Dokumentiere pro Update: Datum, alte/neue Version, Quelle und ob ein Neustart nötig war.  
- Halte einen Rückfallweg bereit (gesicherte Router-Einstellungen), falls nach dem Update etwas bricht.  
Ein fehlgeschlagenes Firmware-Update kann Geräte zeitweise unbenutzbar machen, also plane Zeitpuffer ein.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob der Router nach Updates eine neue Firmware-Version anzeigt und die Verbindung stabil bleibt.  
- Achte darauf, ob Geräte-Apps nicht dauerhaft „Update verfügbar“ melden.  
- Achte darauf, ob Neustarts in dein Zeitfenster fallen oder klar erklärbar sind.

<details><summary>Mehr Checks</summary>

- Prüfe, ob der Router Datum und Uhrzeit korrekt anzeigt. Falsche Zeit kann Updates und Zertifikate stören.  
- Prüfe bei Altgeräten: Gibt es überhaupt noch aktuelle Hinweise oder Sicherheitsmeldungen vom Hersteller?  
- Prüfe nach Netztrennung: Funktionieren die Funktionen, die du wirklich brauchst, noch zuverlässig?

</details>

## Probleme & Lösungen

- **Problem:** Ich finde im Router keine Update-Option.  
  **Lösung:** Bei manchen Provider-Routern werden Updates zentral eingespielt. Prüfe Kundenportal oder Handbuch, ob Updates automatisch laufen.

- **Problem:** Das letzte Router-Update ist sehr alt.  
  **Lösung:** Gehe von auslaufendem Support aus. Plane Ersatz oder trenne den Router streng von wichtigen Geräten (besser: ersetzen).

- **Problem:** Nach einem Update funktionieren smarte Geräte nicht mehr.  
  **Lösung:** Starte Router und Gerät neu. Prüfe dann, ob das Gerät im richtigen WLAN ist und das Passwort stimmt.

- **Problem:** Automatische Updates passieren tagsüber und stören.  
  **Lösung:** Stelle ein Zeitfenster ein. Wenn das nicht geht, deaktiviere die Automatik und nutze eine monatliche Update-Routine.

- **Problem:** Ein Gerät hat gar keine Update-Funktion.  
  **Lösung:** Behandle es wie ein dauerhaft riskantes Gerät: ins getrennte WLAN, nur wenn nötig online, mittelfristig ersetzen.

- **Problem:** Nach Updates wirkt das WLAN langsamer.  
  **Lösung:** Warte 10 Minuten und starte den Router einmal neu. Bleibt es, prüfe Standort und Funkkanal statt sofort zurückzurollen.

## Nicht gelöst

- Updates schützen nicht, wenn Router oder Gerät bereits kompromittiert ist (z. B. manipulierte Firmware oder Schadsoftware im Gerät).  
- Wenn ein Angreifer schon Admin-Zugriff auf Router-Konto oder Herstellerkonto hat, kann er Einstellungen und Updates aushebeln.  
- Updates verhindern keinen Datenabfluss zu Hersteller-Clouds. Das ist ein eigenes Thema mit eigenen Schaltern.  
- Bei physischem Zugriff kann jemand Router oder Geräte zurücksetzen, austauschen oder neu konfigurieren.  
- Unter Zwang (z. B. Zugangsdaten herausgegeben) helfen Updates nicht gegen die unmittelbare Kontrolle.

## FAQ

**Warum sind Updates so wichtig?**

Sie schließen Sicherheitslücken. Ohne Updates helfen viele andere Maßnahmen nur begrenzt.

**Soll ich Auto-Updates anlassen?**

Meist ja. Bei kritischen Systemen: kontrolliert, aber regelmäßig.

**Was ist mit Router/IoT?**

Die werden oft vergessen. Update-Strategie + Austauschplanung ist hier besonders wichtig.

## Quellen

- [BSI für Bürger – Router sicher einrichten](https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/InternetUndSmartphone/WLANRouter/WLANRouter_node.html)
- [BSI für Bürger – Smart Home sicher nutzen](https://www.bsi-fuer-buerger.de/BSIFB/DE/Empfehlungen/SmartHome/smarthome_node.html)
- [ENISA – IoT and Smart Infrastructures](https://www.enisa.europa.eu/topics/iot-and-smart-infrastructures)
- [Wi-Fi Alliance – Wi-Fi Security](https://www.wi-fi.org/discover-wi-fi/security)
- [OWASP – Internet of Things Project](https://owasp.org/www-project-internet-of-things/)

## Weiter

- [Warum Updates wichtig sind](/updates/warum-wichtig/)
- [Automatische Updates](/updates/automatische-updates/)
- [Router-Sicherheit im Heimnetz](/netzwerk/router-sicherheit/)
- [Gäste-WLAN richtig nutzen](/netzwerk/gaeste-wlan/)
- [IoT und smarte Geräte](/hardware/iot/)
- [WLAN-Sicherheit](/netzwerk/wlan-sicherheit/)
