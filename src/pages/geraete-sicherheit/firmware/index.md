---
layout: "@/layouts/DocLayout.astro"
title: "Firmware-Updates sicher installieren: PC, Handy, Router"
url: "/geraete-sicherheit/firmware/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Firmware-Updates sicher durchführen: Vorbereitung, Update-Wege für PC, Smartphone und Router, typische Fehler vermeiden und prüfen, ob alles geklappt hat."
---
Firmware-Updates tauchen oft als lästige Meldung auf – oder gar nicht. Gleichzeitig sind genau diese Updates oft entscheidend, weil Fehler in der Geräte-Basis ausgenutzt werden können.

Ziel ist, Updates so einzuspielen, dass du Sicherheitslücken schließt, ohne dein Gerät durch einen unnötig riskanten Ablauf lahmzulegen.

Sinnvoll, wenn du Geräte lange nutzt, einen Router zu Hause betreibst oder Updates gern aufschiebst.  
Grenze: Ein Firmware-Update kann selten schiefgehen (Abbruch, Stromausfall) – Vorbereitung ist wichtiger als Tempo.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

- Weg A: Updates über die normalen Update-Funktionen prüfen und installieren.  
- Weg B: Versionsstände dokumentieren, Support-Zeiträume prüfen und „unsichtbare“ Firmware (Router/UEFI) mit abdecken.  
- Weg C: Profi-Prüfungen rund um Startkette (UEFI/BIOS, Secure Boot) und robuste Update-Abläufe.

Stoppsignal: Wenn du kein aktuelles Backup hast oder dir ein Wiederherstellungsschlüssel für Gerätesperre/Vollverschlüsselung fehlt, stoppe hier und kläre das zuerst über [Backups: Schnellstart](/backups/schnellstart/) und [Gerätezugang](/passwoerter/geraetezugang/).  
Aufwand + Komfortkosten: meist 15–30 Minuten pro Gerät, Neustarts inklusive; gelegentlich werden Einstellungen zurückgesetzt.

## Schnellstart (15 Minuten)
1) **Vor dem Update absichern**
1. Hänge Laptop/PC ans Stromnetz.
2. Sorge für stabile Verbindung (WLAN statt Hotspot, wenn möglich).
3. Prüfe, ob ein aktuelles Backup existiert (bei wichtigen Daten: zusätzlich extern).
4. Stelle sicher, dass du Wiederherstellungsdaten zur Gerätesperre/Vollverschlüsselung griffbereit hast.
Das kostet ein paar Minuten und kann nerven, wenn du „nur kurz“ updaten willst. Du vermeidest damit Datenverlust und Update-Abbrüche durch leeren Akku oder Verbindungsprobleme.

2) **Den aktuellen Stand notieren**
5. PC: Hersteller/Modell und angezeigte Firmware-/UEFI-Version notieren.
6. Smartphone/Tablet: Betriebssystem-Version und Datum des Sicherheitsupdates notieren.
7. Router: Firmware-Version notieren und ob automatische Updates aktiv sind (falls angeboten).
Das ist etwas Schreibarbeit und wirkt pedantisch. Du kannst danach aber klar prüfen, ob das Update wirklich durchgelaufen ist.

3) **Nur eingebaute Update-Wege nutzen**
8. Nutze die Update-Funktion des Betriebssystems oder die Geräteverwaltung.
9. Installiere zuerst Sicherheits- und Systemupdates, dann optionale Komponenten.
10. Starte nach dem Update einmal neu, auch wenn es nicht gefordert wird.
Bezeichnung kann abweichen – nutze die Suche nach: **Softwareupdate**, **Systemupdate**, **Firmware**, **BIOS**, **UEFI**.  
Das ist manchmal langsamer als „Update-Tools“ aus dem Netz und kann einen Neustart erzwingen. Dafür bekommst du in der Regel signierte, geprüfte Updates und reduzierst das Risiko von Manipulation.

4) **Router und vernetzte Geräte mitnehmen**
11. Prüfe im Routermenü, ob Updates verfügbar sind oder Auto-Updates aktivierbar sind.
12. Deaktiviere Fernzugriff/Verwaltung aus dem Internet, wenn du ihn nicht brauchst.
13. Setze ein starkes Admin-Passwort, falls das nie bewusst passiert ist.
Das kann kurz die Verbindung unterbrechen und du musst dich im Routermenü zurechtfinden. Du schließt damit eine häufige Dauerlücke im Heimnetz, weil Router dauerhaft erreichbar sind.

5) **Direkt danach kurz testen**
14. Prüfe, ob Versionsnummer/Sicherheitsupdate-Datum plausibel aktueller ist.
15. Teste kurz WLAN, Bluetooth sowie Kamera/Mikrofon (nur: funktioniert es wie vorher?).
16. Achte bei aktiver Verschlüsselung darauf, ob plötzlich ein Wiederherstellungsschlüssel verlangt wird.
Direkt nach Updates kann ein Gerät kurz langsamer wirken (Hintergrundarbeiten). Du merkst früh, ob etwas schiefgelaufen ist, bevor du unterwegs darauf angewiesen bist.

## Wege

### Weg A

1) Lege fest, welche Geräte „wirklich wichtig“ sind (Arbeitsgerät, Haupt-Smartphone, Router).
2) Sichere wichtige Daten und kläre Wiederherstellungsdaten (siehe Schnellstart Punkt 1).
3) Prüfe auf jedem Gerät manuell nach Updates und lies kurz, ob „Sicherheitsupdate“ oder „Systemupdate“ erwähnt wird.
4) Installiere Updates nacheinander (nicht alles gleichzeitig auf allen Geräten).
5) Unterbrich den Vorgang nicht und lass das Gerät am Strom, wenn möglich.
6) Starte nach Abschluss einmal neu.
7) Prüfe den Stand: Versionsnummer/Sicherheitsupdate-Datum sollte aktueller sein oder „Aktuell“ melden.
8) Prüfe beim Router, ob die Firmware-Version aktualisiert wurde oder Auto-Updates aktiv sind.
Das ist der pragmatische Weg mit wenig Spezialwissen, aber er kostet pro Gerät Zeit und Neustarts. Du schließt damit die meisten bekannten Lücken, ohne unnötige Experimente.

<details><summary>Weg B (Fortgeschritten)</summary>

- Lies vor größeren Updates kurz Release-Hinweise für dein Modell, falls verfügbar. Das dauert oft 2 Minuten und kann bekannte Stolpersteine vermeiden.
- Prüfe, ob dein Gerät noch im Support ist (Sicherheitsupdates bekommen ein Ende). Das ist unangenehm, hilft dir aber bei der Entscheidung „ersetzen oder isolieren“.
- PC: Achte darauf, ob Firmware-Updates über die normale Systemaktualisierung kommen. Das ist bequemer, aber du übersiehst es leicht, wenn du nur „Treiber“ erwartest.
- Smartphone: Prüfe zusätzlich das Datum des Sicherheitsupdates und Systemkomponenten-Updates, wenn angezeigt. Das ist etwas Suche, gibt dir aber ein besseres Bild als nur die Hauptversion.
- Router: Prüfe, ob Fernverwaltung aktiv ist, ob UPnP wirklich gebraucht wird, und ob die Firewall aktiv ist. Das kann Komfort kosten, reduziert aber unnötige Angriffsfläche.
- Wenn Geräte keine Updates mehr bekommen: Setze sie ins Gastnetz ([Gäste-WLAN](/netzwerk/gaeste-wlan/)) oder plane Ersatz. Das trennt Risiken, ersetzt aber keine Updates.
</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.

- PC: Prüfe im UEFI/BIOS, ob **Secure Boot** aktiv ist (Startschutz: nur vertrauenswürdige Startkomponenten werden geladen). Das kann Einstellungen berühren, verbessert aber die Absicherung der Startkette.
- Vermeide Firmware-Updates über inoffizielle Werkzeuge oder Sammelpakete von Drittseiten, auch wenn es bequem wirkt. Du sparst ein paar Klicks, riskierst aber im Worst Case ein beschädigtes System.
- Plane Updates mit Rückfall: aktuelles Backup plus ein zweites Gerät für Anleitung/Support, falls das System nicht startet. Das ist Vorbereitung, verhindert aber hektische Fehlentscheidungen.
- Wenn nach Updates Windows-Laufwerksverschlüsselung (BitLocker) einen Wiederherstellungsschlüssel verlangt: erst Schlüssel beschaffen, dann weiterarbeiten. Das stoppt dich kurz, schützt aber vor Datenverlust durch falsche Schritte.
- Router: Wenn Updates nur manuell gehen, setze einen festen Rhythmus und dokumentiere den Stand. Das ist Disziplinarbeit, reduziert aber „vergessene“ Dauerlücken.
Achtung: Eingriffe in Start- und Sicherheitsfunktionen können Systeme unbootbar machen oder Verschlüsselung auslösen.
</details>

## So merkst du, dass es wirkt

- Achte darauf, ob das Sicherheitsupdate-Datum oder die Firmware-Version sichtbar aktueller ist als vorher.  
- Achte darauf, ob die Update-Funktion nach einem Neustart „Aktuell“ meldet.  
- Achte beim Router darauf, ob er „keine Updates verfügbar“ anzeigt oder eine neue Version nennt.

<details><summary>Mehr Prüfungen & Hinweise</summary>

- PC: Prüfe nach Updates, ob Schutzfunktionen wie Startschutz und Gerätesperre/Vollverschlüsselung noch aktiv sind.
- Smartphone: Wenn nach Updates ungewöhnlich viele Berechtigungsabfragen auftauchen, prüfe, ob neue Systemkomponenten installiert wurden.
- Router: Prüfe nach Firmware-Updates, ob Fernverwaltung, Portfreigaben oder WLAN-Name/Passwort unverändert sind.
Wenn ein Gerät nach Updates instabil wird, notiere Zeitpunkt und Versionsstand. Das hilft bei Support und bei der Entscheidung, ein Update zurückzustellen.
</details>

## Probleme & Lösungen

- **Problem:** Das Update bricht ab oder bleibt scheinbar hängen.  
  **Lösung:** Lass dem Vorgang mehr Zeit als gewohnt und halte Stromversorgung stabil. Wenn wirklich nichts mehr passiert: nach Hersteller-Anleitung neu starten (häufig: Verbindung instabil, Akku zu leer).

- **Problem:** Nach einem PC-Update wird ein Wiederherstellungsschlüssel verlangt.  
  **Lösung:** Stoppe und besorge den Schlüssel aus deiner Ablage/Kontoverwaltung. Danach einmal sauber starten und den Schlüssel erneut sichern (häufig: Änderungen an Startumgebung/TPM).

- **Problem:** „Keine Updates verfügbar“, obwohl das Gerät alt ist.  
  **Lösung:** Prüfe im Hersteller-Support, ob das Modell noch Updates bekommt. Wenn nicht: isolieren oder ersetzen, beim Router besonders konsequent.

- **Problem:** WLAN, Bluetooth oder Kamera spinnen nach dem Update.  
  **Lösung:** Einmal neu starten und prüfen, ob weitere Updates angeboten werden. Bleibt es: Zusatzsoftware/Tools entfernen und nur Systemaktualisierung nutzen.

- **Problem:** Router-Firmware lässt sich nicht aktualisieren (keine Option, Fehlermeldung).  
  **Lösung:** Prüfe, ob Updates über den Internetanbieter laufen oder ob es ein separates Update-Menü gibt. Wenn es keine Updates mehr gibt: Router tauschen oder strikt absichern (Fernzugriff aus, starkes Admin-Passwort).

- **Problem:** Du findest die Firmware-Version nicht.  
  **Lösung:** Suche nach „Info“, „Geräteinformationen“, „Über“ oder „System“. Wenn nur eine Build-Nummer angezeigt wird: notiere sie als Vergleichswert.

## Nicht gelöst

- Ein Firmware-Update schützt nicht vor Schäden, die schon vor dem Update passiert sind (z. B. kompromittiertes Gerät).
- Wenn jemand Admin-Rechte auf deinem Gerät hat, kann er Schutzfunktionen oft vorher aushebeln.
- Bei physischem Zugriff (gestohlenes Gerät, „kurz in der Hand gehabt“) sind Firmware-Angriffe möglich, die normale Virenscans nicht abdecken.
- Ein Update ersetzt kein gutes Berechtigungskonzept und keine Gerätesperre.
- Lieferketten-Risiken (manipulierte Komponenten) kannst du als Nutzer kaum prüfen; hier helfen vor allem zeitnahe Updates und seriöse Bezugsquellen.

## FAQ

**Was ist der größte Hebel?**

Updates + Gerätesperre + Vollverschlüsselung. Danach kommen App-Rechte und sichere Backups.

**Hilft Biometrie immer?**

Sie ist bequem, aber nicht immer „stärker“ als ein guter Code. Nutze einen starken Sperrcode als Basis.

**Wie erkenne ich Manipulation?**

Auffällige Akku-/Datenlast, neue Admin-Profile, unbekannte Apps/MDM – dann gezielt prüfen.

## Quellen

- [BSI: Softwareupdates – ein Grundpfeiler der IT-Sicherheit](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Updates-Browser-Open-Source-Software/Wichtige-Softwareupdates/wichtige-softwareupdates_node.html)
- [BSI: Router, WLAN & VPN sicher einrichten](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Router-WLAN-VPN/router-wlan-vpn_node.html)
- [Google: Android-Version prüfen und aktualisieren (Android-Hilfe)](https://support.google.com/android/answer/7680439?hl=de)
- [Apple: Neues Update auf iPhone oder iPad laden](https://support.apple.com/de-de/118575)
- [Microsoft: Windows UEFI-Firmwareupdateplattform (Microsoft Learn, DE)](https://learn.microsoft.com/de-de/windows-hardware/drivers/bringup/windows-uefi-firmware-update-platform)
- [NIST: SP 800-193 Platform Firmware Resiliency Guidelines](https://csrc.nist.gov/pubs/sp/800/193/final)

## Weiter

- [Updates: Warum wichtig](/updates/warum-wichtig/)
- [Gerätesicherheit: Sicherer Start](/geraete-sicherheit/sicherer-start/)
- [Gerätesicherheit: Physischer Zugriff](/geraete-sicherheit/physischer-zugriff/)
- [Netzwerk: Router-Sicherheit](/netzwerk/router-sicherheit/)
- [Updates: Router & IoT](/updates/router-iot/)
- [Backups: Schnellstart](/backups/schnellstart/)
