---
layout: "@/layouts/DocLayout.astro"
title: "ZIP erstellen: Dateien ohne Metadaten komprimieren und prüfen"
url: "/dateien/daten-komprimieren-ohne-metadaten/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "ZIP erstellen und prüfen: So baust du ein sauberes Archiv für Weitergabe oder Archivierung – mit Arbeitskopie, Bereinigung, Test, konkreten Prüfungen und Grenzen."
---

Du willst Dateien komprimieren und weitergeben – und im Archiv tauchen plötzlich Dateinamen, Ordnerpfade, Zeitstempel oder Begleitdateien auf. Das ist nervig und kann mehr über dich verraten als der Inhalt.

Ziel ist ein Archiv, das nur das enthält, was du wirklich teilen willst. „Ohne Metadaten“ geht in der Praxis selten zu 100 %, aber du kannst die typischen Lecks stark reduzieren.

Sinnvoll, wenn du Dateien an Dritte gibst und dabei Namen, Ordnerstruktur, Zeitangaben oder Begleitdateien vermeiden willst.  
Grenze: Ein Archiv enthält mindestens Dateinamen und oft Zeitstempel – das lässt sich nicht überall zuverlässig abschalten.
  
Stand: 2026-01-27.

## Kurzfazit
- Baue immer eine Arbeitskopie und teste das Archiv durch Entpacken.
- Wenn Dateinamen sensibel sind, brauchst du ein Verfahren mit geschützter Dateiliste.

## Ziel

Weg A: Du erstellst eine Arbeitskopie, bereinigst Inhalte, baust ein Archiv und prüfst es vor dem Teilen.  
Weg B: Du wählst die Archiv-Erstellung so, dass möglichst wenig Dateiattribute mitwandern.  
Weg C: Du vereinheitlichst Struktur und Zeiten – und schützt bei Bedarf auch die Archiv-Dateiliste.

Stoppsignal: Wenn schon Dateinamen, Ordnerstruktur oder Zeitpunkte sensibel sind und du das Ergebnis nicht sicher prüfen kannst, teile lieber anders.  
Aufwand + Komfortkosten: 10–25 Minuten. Rechne mit neutralen Dateinamen und weniger hilfreicher Sortierung nach Datum.

## Schnellstart (15 Minuten)

1) **Arbeitskopie statt Originale packen**
- Lege einen neuen Ordner „Weitergabe“ an.
- Kopiere nur die Dateien hinein, die wirklich raus sollen.
- Benenne Dateien neutral und halte Ordnerpfade flach.

Das kostet kurz Speicherplatz. Du verringerst das Risiko, versehentlich Nachbarordner oder Originale mitzuschicken.

2) **Metadaten in Dateien entfernen**
- Fotos bereinigen: [EXIF aus Fotos entfernen](/dateien/exif-entfernen/)
- Bürodateien bereinigen: [Office-Metadaten entfernen](/dateien/office-metadaten/)
- PDFs bereinigen: [PDF-Metadaten entfernen](/dateien/pdf-metadaten/)

Dabei gehen manchmal nützliche Infos wie Kommentare oder Verlauf verloren. Du verhinderst, dass diese Daten trotz Archiv beim Empfänger landen.

3) **Begleitdateien aussortieren**
- Blende versteckte Dateien im „Weitergabe“-Ordner ein.
- Entferne typische Begleitdateien wie `Thumbs.db`, `.DS_Store` oder Dateien mit `._`.

Bezeichnung kann abweichen – nutze die Suche nach: **versteckte Dateien**, **ZIP**, **Archiv**, **komprimieren**.

Das ist etwas Fleißarbeit und kann wieder auftreten. Du vermeidest „Müll“ im Archiv, der Rückschlüsse zulässt oder beim Empfänger Fragen auslöst.

4) **Archiv erstellen (so schlicht wie möglich)**
- Markiere im „Weitergabe“-Ordner nur die gewünschten Dateien und Ordner.
- Erstelle ein ZIP-Archiv über die Systemfunktion.
- Lege das Archiv außerhalb deiner typischen persönlichen Ordner ab.

Dateinamen und oft Zeitstempel bleiben im Archiv sichtbar. Ein einzelnes Archiv ist für Upload und Weitergabe meist robuster als viele Einzeldateien.

5) **Archiv testen, bevor du es teilst**
- Entpacke das Archiv in einen neuen, leeren Test-Ordner.
- Prüfe, ob nur die erwarteten Dateien da sind und die Namen passen.
- Suche im Test-Ordner nach `._`, `__MACOSX`, `Thumbs.db`, `.DS_Store`.
- Prüfe bei 1–2 Dateien die Eigenschaften (Autor, Standort, „Erstellt mit …“).

Das kostet ein paar Minuten. Du siehst das Ergebnis so, wie es der Empfänger sieht.

6) **Wenn Dateinamen sensibel sind: Dateiliste schützen**
- Verlasse dich nicht darauf, dass „Passwort-ZIP“ die Dateinamen versteckt.
- Nutze ein Verfahren, das auch die Dateiliste im Archiv schützt (man sagt oft „Header-Verschlüsselung“).
- Teste immer, ob ohne Passwort Dateinamen oder Ordnerliste sichtbar bleiben.

Das kann die Kompatibilität beim Empfänger senken. Du verhinderst, dass schon Dateinamen und Ordnerstruktur Informationen preisgeben.

## Wege

### Weg A
1. Entscheide zuerst, was wirklich raus muss – und was nicht.
2. Erstelle den Ordner „Weitergabe“ und kopiere nur das Nötige hinein.
3. Benenne Dateien neutral und halte Ordnerstrukturen flach.
4. Entferne Metadaten in den Dateien (Fotos, Bürodateien, PDFs).
5. Blende versteckte Dateien ein und entferne Begleitdateien.
6. Erstelle das Archiv aus genau diesem Ordner, nicht aus deinem Benutzerordner.
7. Entpacke zum Test in einen leeren Ordner und prüfe Inhalt und Zusatzdateien.
8. Wenn du beim Test etwas siehst, das du nicht teilen willst, gehe zurück zur Arbeitskopie und baue das Archiv neu.
9. Teile erst danach das Archiv.

<details><summary>Weg B (Fortgeschritten)</summary>

- Packe nie direkt aus „Dokumente/Schreibtisch“. Packe nur aus der neutralen Arbeitskopie.
- Vermeide unnötige Ordner-Tiefe. Jeder Pfad ist ein Hinweis auf Projekte oder Strukturen.
- Manche Tools übernehmen zusätzliche Dateiattribute (Rechte, Besitzer, erweiterte Attribute). Wähle möglichst „schlichte“ Archiv-Optionen.
- Prüfe nicht nur das Entpacken, sondern auch die Dateiliste im Archiv (Namen, Pfade, Zusatzdateien).

Das kann etwas technischer wirken. Du reduzierst die Menge an Dateiattributen, die beim Empfänger ankommen.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.
- Vereinheitliche Dateinamen und Ordnerstruktur konsequent: kurz, neutral, flach.
- Arbeite mit Export- oder Kopie-Dateien, statt mit Originalen mit langer Historie.
- Wenn Zeitangaben sensibel sind, plane damit, dass Zeiten je nach Tool und System anders übernommen oder angezeigt werden.
- Nutze bei Bedarf ein Verfahren, das auch die Archiv-Dateiliste schützt, und verifiziere das per Test ohne Passwort.
- Notiere kurz, was du geprüft hast, damit du es reproduzieren kannst.

Das kostet Zeit und Disziplin. Du bekommst ein Ergebnis, das sich wiederholen und besser kontrollieren lässt.

</details>

## So merkst du, dass es wirkt
- Achte darauf, ob im Test-Ordner nach dem Entpacken nur die erwarteten Dateien liegen, ohne `._`-Dateien oder Systemdateien.
- Achte darauf, ob Dateinamen und Ordnernamen keine Rückschlüsse auf Person, Firma oder Projekt zulassen.
- Achte darauf, ob du in Stichproben bei Dateieigenschaften keinen Autor, keinen Standort und keine auffälligen „Erstellt mit …“-Angaben findest.

<details><summary>Mehr Prüfungen</summary>

- Suche im Test-Ordner nach typischen Begriffen wie deinem Namen, Firmenname oder Projektnamen.
- Prüfe bei PDFs gezielt Titel, Autor und Ersteller.
- Rechne damit, dass Zeitstempel je nach Zeitzone oder Programm anders dargestellt werden.

</details>

## Probleme & Lösungen
- **Problem:** Im Archiv steht ein Ordnerpfad mit deinem Namen.  
  **Lösung:** Erstelle eine neutrale Arbeitskopie in einem neuen Ordner und packe nur daraus.

- **Problem:** Nach dem Entpacken sind zusätzliche Dateien da, die du nie ausgewählt hast.  
  **Lösung:** Entferne Begleitdateien in der Arbeitskopie und erstelle das Archiv neu.

- **Problem:** Fotos verraten Standort oder Gerätedetails.  
  **Lösung:** Bereinige Foto-Metadaten vor dem Packen und prüfe an einer Stichprobe.

- **Problem:** Bürodateien verraten Autor, Firma oder Vorlagen.  
  **Lösung:** Bereinige Dokumenteigenschaften oder speichere als neue, bereinigte Kopie und packe nur diese Version.

- **Problem:** PDFs verraten „Erstellt mit …“ oder enthalten alte Metadaten.  
  **Lösung:** Bereinige PDF-Metadaten und nutze nur die bereinigte Datei im Archiv.

- **Problem:** Das Archiv ist „passwortgeschützt“, aber Dateinamen sind sichtbar.  
  **Lösung:** Teste ohne Passwort, ob Dateinamen und Ordnerliste sichtbar bleiben, und nutze sonst ein Verfahren mit geschützter Dateiliste.

- **Problem:** Zeitstempel verraten, wann du Dateien erstellt oder bearbeitet hast.  
  **Lösung:** Nutze neutrale Export- oder Kopie-Dateien und bewerte Zeiten nur nach dem Test-Entpacken.

- **Problem:** Das Archiv ist viel größer als erwartet.  
  **Lösung:** Viele Dateitypen sind bereits komprimiert (Fotos, Videos, PDFs). Dann spart ZIP oft kaum Platz.

## Nicht gelöst
- Inhalte können dich trotzdem verraten, zum Beispiel Namen im Text oder Bildinhalt.
- Dateinamen und Ordnerstruktur sind oft sichtbar, selbst wenn der Inhalt geschützt ist.
- Zeitstempel lassen sich nicht auf allen Systemen zuverlässig neutralisieren und werden teils unterschiedlich angezeigt.
- Wenn dein Gerät kompromittiert ist, helfen saubere Archive nur begrenzt, zum Beispiel bei Schadsoftware, Admin-Zugriff oder Stalkerware.
- Bei Zwang oder physischem Zugriff auf dein Gerät ist „sicher packen“ kein zuverlässiger Schutz.

## Quellen
- [PKWARE: APPNOTE.TXT (.ZIP File Format Specification)](https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT)
- [GNU tar-Handbuch: Handling File Attributes](https://www.gnu.org/software/tar/manual/html_section/Attributes.html)
- [Apple (Archiv): Apple Double Format creates file name with prefix '._'](https://web.archive.org/web/20120602061209/http://support.apple.com/kb/TA20578)
- [RFC 1740: MIME Encapsulation of Macintosh files](https://www.rfc-editor.org/rfc/rfc1740.txt)
- [zipinfo(1) Manpage](https://man.archlinux.org/man/extra/unzip/zipinfo.1.en)
- [Library of Congress: AppleDouble Resource Fork](https://www.loc.gov/preservation/digital/formats/fdd/fdd000625.shtml)

## Weiter
- [Dateien](/dateien/)
- [Dateien sicher teilen](/dateien/sicher-teilen/)
- [Dateien verschlüsseln](/dateien/verschluesseln/)
- [EXIF aus Fotos entfernen](/dateien/exif-entfernen/)
- [Office-Metadaten entfernen](/dateien/office-metadaten/)
- [PDF-Metadaten entfernen](/dateien/pdf-metadaten/)
