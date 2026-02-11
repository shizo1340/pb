---
layout: "@/layouts/DocLayout.astro"
title: "Restore-Übung: Backups sicher zurückspielen und prüfen"
url: "/backups/restore-uebung/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Restore-Übung: Backup in Testordner zurückspielen, Versionen prüfen, Sync-Fallen vermeiden und Ablauf notieren – damit du im Ernstfall schnell wiederherstellst."
---

Du hast ein Backup. Im Ernstfall zählt aber nur, ob du Daten wirklich zurückholen kannst. Ungestestete Wiederherstellungen scheitern oft an Kleinigkeiten.

Nach dieser Restore-Übung weißt du, wo dein Backup liegt, wie du es zurückspielst und welche Fallen du vermeidest. Du hast danach einen Ablauf, den du wiederholen kannst.

Sinnvoll, wenn du Backups hast, aber noch nie bewusst zurückgespielt hast.  
Grenze: Die Übung ersetzt keine gute Backup-Strategie und hilft nicht bei kompromittiertem Konto.
  
Stand: 2026-01-27.

## Kurzfazit

- Übe immer in einen Testordner und kopiere statt zu überschreiben.
- Pausiere Sync, sonst kann der Dienst den Restore sofort wieder „aufräumen“.

## Ziel

- Weg A: Eine kleine Test-Wiederherstellung (Datei/Ordner) durchführen und dokumentieren.
- Weg B: Eine realistische Wiederherstellung in einer getrennten Umgebung üben.
- Weg C: Restore so absichern, dass Manipulation und Bedienfehler seltener werden.

Stoppsignal: Wenn Datenverlust, Diebstahl oder Schadsoftware im Raum steht, übe nicht am Original. Sichere zuerst den Zustand und arbeite kopierend.

Aufwand + Komfortkosten: 20–90 Minuten, je nach Datenmenge. Kurz weniger Komfort, weil du Sync pausierst oder extra Speicher nutzt.

## Schnellstart (25 Minuten)

1) Testziel festlegen (klein anfangen)  
Wähle 1 Ordner oder 3–10 Dateien, die nicht kritisch sind. Notiere den Normal-Ort und den gewünschten Stand (zum Beispiel „letzte Woche“).  
So bleibt der Test kontrollierbar. Dafür übst du zuerst nur einen Ausschnitt.

2) Zielordner anlegen (nichts überschreiben)  
Erstelle einen leeren Ordner wie „Restore-Test“. Nutze einen Ort, an dem du nichts Wichtiges versehentlich ersetzt.  
So sinkt das Risiko von Überschreiben. Dafür brauchst du kurz zusätzlichen Speicher.

3) Synchronisation verhindern (sonst „räumt“ sie auf)  
Stelle sicher, dass der Zielordner nicht automatisch synchronisiert wird. Wenn nötig: Sync kurz pausieren, bevor du wiederherstellst.  
Bezeichnung kann abweichen – nutze die Suche nach: Wiederherstellen, Versionen, Papierkorb, Sicherung.  
So verhinderst du, dass der Dienst den Restore sofort rückgängig macht. Dafür sind Änderungen kurz nicht überall aktuell.

4) Wiederherstellen (kopieren, nicht ersetzen)  
Starte die Wiederherstellung in den Zielordner „Restore-Test“. Wähle bewusst den Zeitpunkt oder die Version, die du testen willst.  
So siehst du, ob du wirklich an ältere Stände kommst. Dafür dauert es je nach Datenmenge spürbar länger.

5) Inhalt prüfen (nicht nur „Datei ist da“)  
Öffne 2–3 Dateien aus dem Restore-Test. Prüfe bei Ordnern stichprobenartig Unterordner, Dateianzahl und ob Inhalte plausibel sind.  
So erkennst du kaputte Dateien und falsche Versionen. Dafür brauchst du ein paar Minuten Konzentration.

6) Dokumentieren und sauber beenden  
Notiere Backup-Quelle, Konto, nötige Passwörter/Schlüssel und Dauer (Start/Ende). Lass den Restore-Test 1–2 Tage liegen, dann lösche nur den Testordner.  
So sparst du im Ernstfall Sucherei und Stress. Dafür musst du deine Notiz an einem sicheren Ort pflegen.

## Wege

### Weg A

1) Kleine Datenprobe wählen und „Restore-Test“ anlegen.  
Das minimiert das Risiko, Originaldaten zu beschädigen. Dafür testest du zuerst nicht den Komplett-Restore.

2) Sync für den Zielordner ausschalten oder vorübergehend pausieren.  
Das verhindert, dass Dateien nach dem Restore wieder verschwinden. Dafür sind Sync-Änderungen kurz verzögert.

3) Restore in den Zielordner durchführen (kopierend, nicht ersetzend).  
Das zeigt dir, ob dein Backup praktisch nutzbar ist. Dafür brauchst du je nach Datenmenge Zeit und Speicher.

4) Mehrere Dateien öffnen und Version/Stand grob abgleichen.  
Das deckt defekte Sicherungen und falsche Auswahl auf. Dafür musst du aktiv prüfen, statt nur zu klicken.

5) Ablauf notieren und den Test in 1–2 Wochen mit anderer Probe wiederholen.  
So wird Restore Routine. Dafür investierst du gelegentlich 20–30 Minuten.

<details><summary>Weg B (Fortgeschritten)</summary>

Übe in einer getrennten Umgebung (zweites Laufwerk, Zweitgerät oder separates Nutzerkonto). So sinkt das Risiko von Überschreiben und Sync-Konflikten. Dafür brauchst du extra Speicher oder Hardware.

Simuliere den Ernstfall im Testbereich: Datei löschen, dann zurückholen. So trainierst du den Handgriff unter Stress. Dafür musst du sauber trennen, was Test und was Original ist.

Teste eine realistische Menge (zum Beispiel 5–20 GB). So siehst du echte Dauer und Engpässe. Dafür läuft der Test länger.

Kläre Abhängigkeiten: Notizen, Passwort-Manager, Messenger-Backups, Geräteeinstellungen. So vermeidest du Überraschungen, wenn „nur Dateien“ nicht reichen. Dafür kostet es Vorarbeit.

Lege einen Rhythmus fest (zum Beispiel alle 2–3 Monate). So bleiben Wissen und Zugänge frisch. Dafür brauchst du etwas Disziplin.
</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.

Nutze Prüfsummen (ein kurzer Prüfwert, der Änderungen sichtbar macht) und vergleiche stichprobenartig nach dem Restore. So erkennst du Manipulation und stille Fehler besser. Dafür brauchst du zusätzliche Werkzeuge.

Trenne Zugänge: Backup-Zugangsdaten nicht im Alltag nutzen und getrennt aufbewahren. So sinkt das Risiko, dass ein kompromittiertes Konto auch das Backup trifft. Dafür wird die Verwaltung aufwendiger.

Restore nur in eine isolierte Umgebung, die nicht automatisch mitsynchronisiert. So reduzierst du Bedienfehler. Dafür ist der Ablauf weniger bequem.

Halte mindestens eine Sicherung vor, die nachträglich schwer veränderbar ist (schreibgeschützt oder zeitverzögert). So wird Löschen und Manipulation schwieriger. Dafür brauchst du ein Medium oder einen Dienst mit passenden Funktionen.

Übe den Offline-Fall: Wiederherstellung ohne Internet von einem lokalen Medium. So bist du auch bei Ausfällen handlungsfähig. Dafür musst du lokale Datenträger aktuell halten.
</details>

## So merkst du, dass es wirkt

- Achte darauf, ob du innerhalb von 10 Minuten eine ältere Version findest und in den Testordner zurückholen kannst.
- Achte darauf, ob Dateien sich öffnen lassen und der Inhalt plausibel ist.
- Achte darauf, ob du klar sagen kannst: „Backup liegt dort, Restore mache ich so.“

<details><summary>Mehr Prüfungen & Hinweise</summary>

Achte auf Sonderzeichen und lange Pfade: Kommt alles ohne Umbenennungen zurück?

Achte bei Verschlüsselung darauf, ob Schlüssel/Passwort wirklich verfügbar sind, nicht nur „irgendwo“.

Achte bei mehreren Geräten darauf, ob Restore auch auf einem anderen Gerät klappt.

Achte darauf, wie viele Versionen tatsächlich verfügbar sind und wie lange sie bleiben.
</details>

## Probleme & Lösungen

- **Problem:** Datei ist da, lässt sich aber nicht öffnen.  
  **Lösung:** Eine andere Version zurückholen und erneut prüfen; wenn möglich eine zweite Backup-Quelle testen.

- **Problem:** Nach dem Restore verschwinden Dateien wieder oder werden überschrieben.  
  **Lösung:** Sync pausieren und in einen nicht synchronisierten Zielordner wiederherstellen.

- **Problem:** Es gibt keine alten Versionen, nur den aktuellen Stand.  
  **Lösung:** Prüfen, ob Versionierung/Verlauf aktiv ist und wie lange aufbewahrt wird.

- **Problem:** Restore verlangt Passwort/Schlüssel, aber du hast ihn nicht parat.  
  **Lösung:** Zugangsdaten und Schlüssel in der Backup-Doku ergänzen und getrennt aufbewahren.

- **Problem:** Restore dauert viel länger als erwartet.  
  **Lösung:** Mit realistischer Datenmenge testen; zusätzlich ein lokales Medium als schnelle Option prüfen.

- **Problem:** Nach der Wiederherstellung fehlen Einstellungen, Konten oder Apps.  
  **Lösung:** Klären, ob die Sicherung nur Dateien enthält oder auch Gerätezustand/Einstellungen; Übung daran anpassen.

- **Problem:** Du hast Angst, beim Üben Originaldaten zu beschädigen.  
  **Lösung:** Immer in einen separaten Zielordner wiederherstellen und erst prüfen, dann entscheiden.

## Nicht gelöst

- Eine Restore-Übung ersetzt keine Backup-Strategie mit mehreren Kopien und getrennten Orten.
- Wenn Backups nie erstellt wurden oder Lücken haben, kann ein Restore nichts herzaubern.
- Wenn Zugangsdaten oder Schlüssel fehlen, ist Wiederherstellung oft blockiert.
- Threat Model: Bei kompromittiertem Gerät, Admin-Zugriff oder Stalkerware können Backups manipuliert oder gelöscht sein.
- Threat Model: Bei Zwang (zum Beispiel Entsperren müssen) helfen Restore-Abläufe nur begrenzt.

## Quellen

- [BSI: IT-Grundschutz](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/IT-Grundschutz/it-grundschutz_node.html)
- [NIST SP 800-34 Rev. 1: Contingency Planning Guide (PDF)](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-34r1.pdf)
- [NIST SP 800-184: Guide for Cybersecurity Event Recovery (PDF)](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-184.pdf)
- [NCSC (UK): Backing up your data](https://www.ncsc.gov.uk/collection/backing-up-your-data)

## Weiter

- [Backups Überblick](/backups/)
- [Backups Schnellstart](/backups/schnellstart/)
- [Backups testen](/backups/backup-testen/)
- [Versionierung verstehen](/backups/versionierung/)
- [Backup verschlüsseln](/backups/backup-verschluesseln/)
