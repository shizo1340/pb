---
layout: "@/layouts/DocLayout.astro"
title: "Datensicherung-Schnellstart: In 30 Minuten einrichten"
url: "/backups/schnellstart/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Datensicherung-Schnellstart: In 30 Minuten zweite Kopie anlegen, Versionen behalten und Wiederherstellung testen. Mit Prüfungen, Stoppsignal und Fehlern."
---

Du merkst es oft zu spät: Eine Datei ist weg, das Gerät streikt oder du wechselst das Handy. Und plötzlich fehlen dir Fotos, Dokumente oder Einstellungen.

Du richtest eine Datensicherung (Backup) ein, die du wirklich zurückspielen kannst. Am Ende hast du eine zweite Kopie, Versionen und einen getesteten Restore.

Sinnvoll, wenn du Daten hast, die du nicht neu erstellen willst.  
Grenze: Reine Synchronisierung ist keine Datensicherung.
  
Stand: 2026-01-27.

## Kurzfazit
- Minimum, das zählt: zweite Kopie + Versionen + einmal zurückspielen.
- Wenn du nur 10 Minuten hast: zweite Kopie erstellen und 1 Datei testweise wiederherstellen.

## Ziel

**Weg A:** Zweite Kopie auf getrenntem Speicher + kurzer Restore-Test.  
**Weg B:** [3-2-1-Regel](/backups/3-2-1/) + klare Aufbewahrung + Verschlüsselung, wenn nötig.  
**Weg C:** Mindestens eine Sicherung offline oder unveränderlich + regelmäßige Restore-Übung.

**Stoppsignal:** Wenn du Erpressungssoftware vermutest oder sich Dateien „von selbst“ ändern, trenne das Gerät vom Netz. Schließe keine Sicherungsmedien an. Sichere zuerst nur eine Kopie, ohne am Original „aufzuräumen“.

**Aufwand:** 30–60 Minuten Start, danach 5 Minuten pro Monat.  
**Komfortkosten:** Externes Laufwerk oder zusätzlicher Speicher. Manchmal musst du etwas anstecken.

## Schnellstart (30 Minuten)

1. **Wähle aus, was wirklich gesichert werden muss**
   - Notiere: „Was würde mich morgen richtig treffen?“
   - Typisch: Fotos/Videos, Dokumente, Projekte, Notizen, Scans.
   - Denke an Zugangsdaten: [Passwort-Manager](/passwoerter/passwort-manager/) und [Recovery-Codes](/2fa/recovery-codes/).
   Du startest lieber zu breit als zu knapp. Das kostet Speicher, spart später Ärger.  
   Du weißt danach, was im Notfall wieder da sein muss.

2. **Erstelle sofort eine zweite Kopie auf getrenntem Speicher**
   - Nimm ein externes Laufwerk oder einen zweiten Speicherort, der nicht dauerhaft verbunden ist.
   - Kopiere die wichtigsten Ordner in einen Ordner „Datensicherung“.
   - Wirf das Laufwerk sicher aus und lagere es getrennt vom Gerät.
   Externe Laufwerke können ausfallen. Plane Ersatz oder eine zusätzliche Kopie ein.  
   Die getrennte Kopie schützt bei Diebstahl, Defekt und vielen Bedienfehlern.

3. **Aktiviere eine automatische Datensicherung**
   - Öffne die Systemeinstellungen und suche nach der Sicherungsfunktion.
   - Stelle einen Rhythmus ein (täglich oder wöchentlich) und wähle die wichtigen Ordner.
   - Prüfe den Zielort so, dass du ihn später wiederfindest.
   Bezeichnung kann abweichen – nutze die Suche nach: Datensicherung, Sicherung, Verlauf, Versionen.  
   Automatik kann leise aussetzen, wenn das Ziel voll ist oder getrennt wurde. Das merkst du nur mit Checks.  
   Du musst nicht daran denken und bekommst regelmäßige Sicherungen.

4. **Sorge für Versionen, damit „gestern“ noch existiert**
   - Prüfe, ob ältere Stände behalten werden (Versionsverlauf).
   - Wenn nicht: lege Datumsordner an (zum Beispiel „2026-02-11“).
   - Bewahre mindestens ein paar Wochen Historie auf.
   Versionen brauchen Platz. Bei Dokumenten lohnt es sich besonders.  
   Du kannst nach Löschungen oder Schadsoftware auf einen früheren Stand zurückspringen. Mehr dazu: [Versionierung](/backups/versionierung/).

5. **Teste einmal die Wiederherstellung**
   - Wähle eine unwichtige Datei (Foto oder Testdokument).
   - Stelle sie in einen neuen Ordner wieder her, nicht „darüber“.
   - Öffne die Datei und prüfe, ob sie wirklich nutzbar ist.
   Der Test wirkt klein, ist aber der wichtigste Schritt. Ohne Test bleibt es Hoffnung.  
   Du weißt danach, dass du im Ernstfall wirklich zurückspielen kannst. Vertiefung: [Backups testen](/backups/backup-testen/).

## Wege

### Weg A

- Zweite Kopie auf getrenntem Speicher anlegen.
- Automatik aktivieren, mindestens für die wichtigsten Ordner.
- Versionen einschalten oder Datumsordner nutzen.
- Ort und Namen notieren: Wo liegt die Sicherung, wie kommst du dran?
- Einmal pro Monat 1 Datei testweise wiederherstellen.
Wenn du das Sicherungsmedium sonst dauerhaft dran lässt, trenne es nach der Sicherung wieder. Das bremst Schadsoftware, die verbundene Ziele mitverschlüsselt.  
Die Routine nervt kurz, spart im Notfall sehr viel Zeit.

<details><summary>Weg B (Fortgeschritten)</summary>

- Setze den [3-2-1-Ansatz](/backups/3-2-1/) um: mehrere Kopien, unterschiedliche Medien, ein anderer Ort.
- Halte eine Kopie räumlich getrennt (je nach Risiko).
- Verschlüssele Sicherungen, sobald andere mitlesen könnten. Anleitung: [Backups verschlüsseln](/backups/backup-verschluesseln/).
- Lege Aufbewahrung fest, die du durchhältst (zum Beispiel „4 Wochen“ + „6 Monate“).
Mehr Orte bedeuten mehr Pflege. Dafür sinkt das Risiko, dass ein einzelner Fehler alles zerstört.

</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.

- Halte mindestens eine Sicherung offline oder so, dass sie nicht einfach überschrieben wird.
- Trenne Sicherung und Alltag: eigenes Konto oder getrennte Berechtigungen.
- Mache eine kurze Restore-Übung nach Plan und notiere, was gefehlt hat.
Je strenger die Trennung, desto mehr Reibung. Wenn es zu nervig ist, wird es oft nicht gemacht.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob neue Dateien nach Stunden oder Tagen in der Datensicherung auftauchen.
- Achte darauf, ob du mehrere Stände findest, nicht nur den aktuellen.
- Achte darauf, ob du eine Datei sauber in einen neuen Ordner zurückholen kannst.

<details><summary>Mehr Checks</summary>

- Prüfe nach einem Neustart, ob die Automatik wieder läuft.
- Öffne stichprobenartig wiederhergestellte Dateien, nicht nur „Dateigröße passt“.
- Wenn du in ein Konto sicherst: sichere den Zugang zusätzlich ab, zum Beispiel mit [2FA-Schnellstart](/2fa/schnellstart/).

</details>

## Probleme & Lösungen

- **Problem:** Ich habe nur Synchronisierung, keine echte Datensicherung. / **Lösung:** Lege eine zweite Kopie an, die Löschungen nicht sofort mitmacht (Versionen oder getrenntes Medium).
- **Problem:** Die Sicherung läuft, aber ich finde sie nicht. / **Lösung:** Notiere Ort und Namen, und teste eine Wiederherstellung in einen neuen Ordner.
- **Problem:** Das Sicherungsziel ist voll. / **Lösung:** Historie ausdünnen oder Ziel vergrößern, aber mehrere Wochen Versionen behalten.
- **Problem:** Externe Festplatte wird nicht erkannt. / **Lösung:** Anderes Kabel/Port testen, dann an einem zweiten Gerät prüfen, erst danach über Formatierung nachdenken.
- **Problem:** Nach Gerätewechsel fehlt etwas (Fotos/Chats/Dokumente). / **Lösung:** Restore-Test machen, bevor du das alte Gerät zurücksetzt, dann gezielt nachziehen.
- **Problem:** Verdacht auf Erpressungssoftware, Dateien ändern sich. / **Lösung:** Gerät vom Netz trennen, keine Sicherungsmedien anschließen, erst Lage klären und dann wiederherstellen.

## Nicht gelöst

- Datensicherung verhindert nicht, dass Daten vorher schon abgeflossen sind.
- Bei kompromittiertem Gerät (Stalkerware, Admin-Zugriff) kann auch die Sicherung manipuliert werden.
- Unverschlüsselte Sicherungen schützen nicht vor Zugriff nach Diebstahl oder Verlust des Datenträgers.
- Wenn jemand Zugriff auf dein Konto hat, kann er kontobasierte Sicherungen löschen oder sabotieren.
- Unter Zwang (Erpressung, Kontrolle im Haushalt) kann selbst eine gute Sicherung schwer nutzbar sein.

## Quellen
- [BSI: CON.3 Datensicherungskonzept (Edition 2023)](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Kompendium_Einzel_PDFs_2023/03_CON_Konzepte_und_Vorgehensweisen/CON_3_Datensicherungskonzept_Edition_2023.html)
- [Verbraucherzentrale: Datensicherung nach der 3-2-1-Regel](https://www.verbraucherzentrale.de/wissen/digitale-welt/apps-und-software/so-richten-sie-mit-wenigen-klicks-eine-datensicherung-ein-69763)
- [NIST: Contingency Planning Guide (SP 800-34 Rev.1)](https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final)
- [ENISA: Cyber Hygiene (Backups sicher speichern und testen)](https://www.enisa.europa.eu/topics/cyber-hygiene)
- [Microsoft Support: Sichern und Wiederherstellen mit Dateiversionsverlauf](https://support.microsoft.com/de-de/windows/sichern-und-wiederherstellen-mit-dateiversionsverlauf-7bf065bf-f1ea-0a78-c1cf-7dcf51cc8bfc)

## Weiter
- [Backups](/backups/)
- [3-2-1-Regel](/backups/3-2-1/)
- [Backups testen](/backups/backup-testen/)
- [Backups verschlüsseln](/backups/backup-verschluesseln/)
- [Cloud vs. lokal](/backups/cloud-vs-lokal/)
- [Bedrohungen für Backups](/backups/bedrohungen/)
