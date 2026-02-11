---
layout: "@/layouts/DocLayout.astro"
title: "Sicherer Start aktivieren: Secure Boot & Verified Boot"
url: "/geraete-sicherheit/sicherer-start/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Prüfe „Sicherer Start“ auf PC und Smartphone, aktiviere Secure Boot/Verified Boot Schritt für Schritt und vermeide typische Startprobleme nach Änderungen."
---
Wenn ein Gerät „unsicher“ startet, kann schon vor dem Anmeldebildschirm etwas ausgetauscht werden. Zum Beispiel Startkomponenten, Treiber oder ein komplettes Startsystem. Das merkst du oft erst spät – oder nur als Warnung beim Einschalten.

Ziel hier: Du prüfst, ob dein Gerät nur vertrauenswürdige Startsoftware lädt. Danach stellst du es so ein, dass Angriffe beim Einschalten schwerer werden.

Sinnvoll, wenn du Laptop oder Smartphone unterwegs nutzt oder es auch mal unbeaufsichtigt liegt.  
Grenze: Wenn jemand dein entsperrtes Gerät nutzt oder du Schadsoftware mit Admin-Rechten ausführst, ist das kein Rettungsanker.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

Weg A: Status prüfen und die gängigen Schutzschalter aktivieren, ohne Spezialwissen.  
Weg B: Startpfad weiter absichern (Firmwarezugang, externer Start, Verschlüsselung sauber einbinden).  
Weg C: Profi-Kontrollen (Schlüsselverwaltung/Integritätsnachweise) – nur, wenn du das wirklich brauchst.

Stoppsignal: Nutzt du ein Firmen-/Schulgerät, Dual-Boot oder ein alternatives Smartphone-System, ändere Firmware-/Bootloader-Einstellungen nicht „nebenbei“. Das kann Geräteverwaltung, Updates oder den Start brechen.  
Aufwand + Komfortkosten: meist 10–30 Minuten. Möglich sind Probleme mit Rettungsmedien, Dual-Boot oder älteren Treibern.

## Schnellstart (15 Minuten)
1) **Status prüfen (PC, Mac oder Smartphone)**  
1. PC (UEFI): Prüfe, ob Secure Boot aktiv ist. Unter Windows findest du das oft in „Systeminformationen“ beim Eintrag „Sicherer Startzustand“.
2. Mac: Prüfe die Start-Sicherheitsrichtlinie (je nach Modell über das Start-Sicherheitsdienstprogramm).
3. Android: Achte auf Hinweise wie „Bootloader entsperrt“ oder „Gerätezustand“ beim Start oder in Entwickleroptionen.
Das bringt dir Klarheit, ob du überhaupt etwas ändern musst. Es kostet dich ein paar Minuten Suche, weil Menüs je nach System anders sortiert sind.

2) **In die Firmware-/Start-Einstellungen kommen (ohne Herumprobieren)**  
4. Nutze, wenn möglich, den Neustart aus dem laufenden System in die erweiterten Startoptionen. Das ist verlässlicher als wildes Tastendrücken.
5. Wenn du über eine Taste beim Einschalten reingehst: Notiere dir die Taste, bevor du etwas umstellst.
Bezeichnung kann abweichen – nutze die Suche nach: „UEFI“, „Firmware“, „Start“, „Boot“, „Secure Boot“.  
Das spart Fehlklicks und verhindert, dass du aus Versehen mehrere Schalter verstellst. Nebenwirkung: Du brauchst einmalig einen Neustart mehr.

3) **Sicheren Start aktivieren (nur den Standardschalter)**  
6. PC: Aktiviere Secure Boot, wenn er aus ist. Ändere nicht zusätzlich „Schlüssel zurücksetzen“ oder ähnliche Sonderfunktionen.
7. Smartphone: Wenn der Bootloader bewusst entsperrt ist, entscheide dich aktiv dafür oder dagegen. „Entsperrt“ bedeutet meist weniger Startschutz.
Das blockiert viele Manipulationen am Startpfad, bevor das System hochfährt. Nebenwirkung: Dual-Boot, alte Treiber oder unsignierte Rettungsmedien können danach nicht mehr starten.

4) **Externen Start einschränken (wenn du ihn nicht brauchst)**  
8. PC: Prüfe, ob Start von USB/extern erlaubt ist, und schränke ihn ein, wenn du keine Rettungssticks nutzt.
9. Wenn du Rettungssticks nutzt: Notiere dir den Weg, wie du externen Start temporär wieder erlaubst.
Das macht „kurz von USB starten“ als Angriffsweg unattraktiver. Nebenwirkung: Im Notfall kann Rettung/Neuinstallation umständlicher werden.

5) **Einmal testen und wieder prüfen**  
10. Starte neu und beobachte: Gibt es Warnungen, ungewohnte Menüs oder Abfragen?
11. Prüfe danach im Systemstatus erneut, ob „aktiv“ wirklich übernommen wurde.
So bestätigst du die Wirkung statt nur zu hoffen. Nebenwirkung: Nach Firmware-Änderungen kann Geräteverschlüsselung einmalig nach einem Wiederherstellungsschlüssel fragen.

## Wege

### Weg A

1) Kläre zuerst den Gerätetyp: PC (UEFI), Mac (Start-Sicherheitsrichtlinie) oder Smartphone (Startprüfung/Bootloader). Das verhindert falsche Anleitungen, kostet aber eine Minute Einordnung.  
2) Prüfe den Status im laufenden System und notiere ihn kurz (Foto/Notiz reicht). Das hilft bei Fehlersuche, kann aber auf verwalteten Geräten eingeschränkt sein.  
3) Wenn du etwas ändern willst: Lege Wiederherstellungsdaten bereit (z. B. Geräteverschlüsselung, Rettungsweg). Das reduziert Ausfallrisiko, kostet aber etwas Vorbereitung.  
4) Aktiviere den Standardschutz (Secure Boot/Startprüfung) und ändere nur eine Sache pro Neustart. Das macht Angriffe beim Einschalten schwerer, kann aber Dual-Boot und alte Tools blockieren.  
5) Begrenze externen Start, wenn du ihn nicht brauchst. Das schützt vor „Start von USB“, erschwert aber Notfall-Starts.  
6) Prüfe nach dem Neustart erneut den Status und achte auf Warnungen. Das zeigt dir, ob es wirklich wirkt, kostet aber einen extra Kontrollgang.  
7) Halte System und Firmware aktuell. Das schließt bekannte Lücken, kann aber nach Updates Einstellungen zurücksetzen.

<details><summary>Weg B (Fortgeschritten)</summary>

- Schütze den Firmwarezugang mit einem Firmware-/Start-Kennwort, falls verfügbar. Das verhindert schnelle Änderungen vor Ort, kann dich aber aussperren, wenn du es verlierst.  
- Prüfe, ob der Startmodus modern ist (UEFI statt „Legacy/CSM“). Das verbessert die Schutzwirkung, kann aber ältere Installationen oder Boot-Setups brechen.  
- Plane die Kombination mit Geräteverschlüsselung: Nach Änderungen sind Wiederherstellungsabfragen möglich. Das ist ein gutes Zeichen für Bindung an den Startzustand, nervt aber, wenn der Schlüssel nicht griffbereit ist.  
- Smartphone: Wenn du keine alternativen Systeme nutzt, ist ein gesperrter Bootloader meist der Normalzustand. Das erhöht Startschutz, kann aber beim erneuten Sperren je nach Hersteller Daten löschen.  
- Nach großen Updates (Firmware/BIOS/Android) den Status erneut prüfen. Das fängt Rücksetzungen ab, kostet aber Routinezeit.

</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.

- Verwalte UEFI-Schlüsselrollen nur mit sauberem Wiederherstellungsplan. Das kann den Startpfad sehr strikt machen, kann aber auch Systeme und Rettungsmedien unbrauchbar machen.  
- Nutze TPM-Messwerte/Attestierung nur mit klarem Ziel (z. B. Geräteflotte, Compliance). Das macht Integrität messbar, erfordert aber Infrastruktur und Pflege.  
- Achte auf aktuelle Sperrlisten (z. B. nach Firmware-Updates). Das verhindert bekannte Boot-Schwachstellen, kann aber bei strengen Policies zu Startabbrüchen führen.  
- Teste Änderungen zuerst auf einem Zweitgerät oder in einer kontrollierten Umgebung. Das reduziert Ausfallrisiko, kostet aber zusätzliche Zeit und Hardware.  
- Verwende eigene Schlüssel oder sehr strenge Richtlinien nur, wenn du die Folgen für Updates, Treiber und Dual-Boot sicher beherrschst. Das erhöht Kontrolle, erhöht aber auch Wartungsaufwand.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob dein System nach dem Neustart „Sicherer Start: Ein/Aktiv“ meldet (nicht nur „unterstützt“).  
- Achte darauf, ob beim Einschalten keine Warnung zu „entsperrt“ erscheint (Smartphone-Hinweis auf weniger Startschutz).  
- Achte darauf, ob du nach Änderungen sauber bis zum normalen Login kommst, ohne Umwege über Rettungsmenüs.

<details><summary>Mehr Checks</summary>

- PC: Prüfe bewusst, ob dein Rettungsstick noch startet und ob du externen Start bei Bedarf temporär erlauben kannst.  
- Smartphone: Prüfe, ob Entwickleroptionen/Startbildschirm wirklich den erwarteten Gerätezustand zeigen.  
- Wenn eine Warnung „plötzlich“ weg ist: prüfe, ob ein Update Einstellungen zurückgesetzt hat oder ob ein Service-Eingriff stattfand.

</details>

## Probleme & Lösungen

- **Problem:** „Sicherer Start“ wird als „nicht unterstützt“ angezeigt.  
  **Lösung:** Prüfe, ob dein Gerät im alten Startmodus („Legacy/CSM“) läuft oder die Funktion hardwareseitig fehlt. Bei sehr alter Hardware ist das normal.

- **Problem:** Secure Boot ist vorhanden, aber ausgegraut oder lässt sich nicht aktivieren.  
  **Lösung:** Prüfe, ob ein Firmware-Admin-Kennwort, Geräteverwaltung (MDM) oder Firmenrichtlinien aktiv sind. Bei verwalteten Geräten muss das die IT steuern.

- **Problem:** Nach Aktivierung startet ein zweites Betriebssystem oder ein Rettungsmedium nicht mehr.  
  **Lösung:** Das Medium ist oft nicht passend signiert. Nutze ein aktuelles, unterstütztes Rettungsmedium oder erlaube externen Start temporär wieder.

- **Problem:** Nach Firmware-Änderungen fragt die Geräteverschlüsselung nach einem Wiederherstellungsschlüssel.  
  **Lösung:** Nutze den hinterlegten Schlüssel und schließe den Vorgang ab. Prüfe danach den Status erneut und ändere nicht mehrere Dinge gleichzeitig.

- **Problem:** Smartphone zeigt beim Start dauerhaft „Bootloader entsperrt“.  
  **Lösung:** Entscheide dich bewusst: entsperrt ist eine Ausnahme. Ein erneutes Sperren ist je nach Hersteller möglich, kann aber Daten löschen – vorher sichern.

- **Problem:** Nach einem Update ist „Sicherer Start“ wieder aus oder anders eingestellt.  
  **Lösung:** Prüfe nach Firmware-/BIOS-/System-Updates einmal den Status und setze die Einstellung bei Bedarf erneut.

## Nicht gelöst

- Das schützt nicht vor Schadsoftware, die nach dem Start mit Admin-Rechten läuft.  
- Das hilft kaum, wenn jemand dein Gerät entsperrt in die Hand bekommt (offener Bildschirm).  
- Das verhindert keine Konto-Übernahmen durch Phishing oder schwache Passwörter.  
- Gegen Angreifer mit Admin-Zugriff, Stalkerware oder Zwang (z. B. erzwungene Entsperrung) brauchst du zusätzliche Maßnahmen und ein passendes Bedrohungsmodell.  
- Bei bereits kompromittierter Firmware reicht „Schalter an“ nicht. Dann ist ein sauberer Neuaufbau mit geprüften Quellen nötig.

## FAQ

**Was ist der größte Hebel?**

Updates + Gerätesperre + Vollverschlüsselung. Danach kommen App-Rechte und sichere Backups.

**Hilft Biometrie immer?**

Sie ist bequem, aber nicht immer „stärker“ als ein guter Code. Nutze einen starken Sperrcode als Basis.

**Wie erkenne ich Manipulation?**

Auffällige Akku-/Datenlast, neue Admin-Profile, unbekannte Apps/MDM – dann gezielt prüfen.

## Quellen

- [Windows 11 und sicherer Start](https://support.microsoft.com/de-de/windows/windows-11-und-sicherer-start-a8ff1202-c0d9-42f5-940f-843abef64fad)  
- [Apple: Startsicherheitsdienstprogramm (T2)](https://support.apple.com/de-de/102522)  
- [Android: Verified Boot – Gerätezustand](https://source.android.com/docs/security/features/verifiedboot/device-state)  
- [Android: Bootloader sperren/entsperren](https://source.android.com/docs/core/architecture/bootloader/locking_unlocking)  
- [UEFI Specification (UEFI Forum)](https://uefi.org/sites/default/files/resources/UEFI_Spec_Final_2.11.pdf)  
- [NIST SP 800-147: BIOS Protection Guidelines](https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-147.pdf)

## Weiter

- [Schnellstart Gerätesicherheit](/geraete-sicherheit/schnellstart/)  
- [Firmware-Updates: worauf achten](/geraete-sicherheit/firmware/)  
- [Sperrbildschirm richtig einstellen](/geraete-sicherheit/sperrbildschirm/)  
- [Gerät vollständig verschlüsseln](/verschluesselung/geraete-vollverschluesselung/)  
- [Warum Updates wichtig sind](/updates/warum-wichtig/)  
- [Bedrohungsmodell verstehen](/start/bedrohungsmodell/)
