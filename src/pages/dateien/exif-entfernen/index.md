---
layout: "@/layouts/DocLayout.astro"
title: "Exif entfernen: Fotos ohne Standortdaten sicher teilen"
url: "/dateien/exif-entfernen/"
chapter: "Themen"
type: "guide"
format: "guide"
level:
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Exif entfernen und Fotos ohne Standortdaten sicher teilen: Schnellstart für iPhone, Android, Windows und macOS mit Prüfschritten, Problemen und Grenzen."
---
Fotos wirken harmlos – bis jemand daraus Ort, Tagesablauf oder Geräteinfos ableitet.  
Oft steckt das in Exif-Metadaten: Zusatzdaten in der Bilddatei.

Ziel ist, nur das Bild zu teilen.  
Ohne Standort (GPS) und ohne unnötige Aufnahme-Details.

Sinnvoll, wenn du Fotos in Chats, Kleinanzeigen, Gruppen oder öffentlich teilst.  
Grenze: Entfernte Exif-Daten machen ein Foto nicht „anonym“.
  
Stand: 2026-01-27.

## Kurzfazit
- Am sichersten: erst Kopie erstellen, dann Metadaten entfernen, dann unabhängig prüfen.
- Verlass dich nicht auf Annahmen: teste die Empfänger-Datei.

## Ziel
- Weg A: In der Foto-App eine bereinigte Kopie erstellen und nur diese teilen.
- Weg B: Am Computer Metadaten aus der Datei entfernen und unabhängig gegenprüfen.
- Weg C: Metadaten gezielt nach Gruppen entfernen (z. B. nur GPS) – ohne Original anzutasten.

Stoppsignal: Wenn du dich vor gezielter Verfolgung schützen musst, reicht Exif-Entfernen allein nicht.  
Dann teile keine erkennbaren Orte, Personen, Routinen oder eindeutigen Muster im Bild.

Aufwand + Komfortkosten: 5–15 Minuten.  
Je nach Methode gehen Sortierung nach Aufnahmedatum oder Galerie-„Details“ teilweise verloren.

## Schnellstart (8 Minuten)
1) **Am Original prüfen, was drin steckt**  
   - Öffne das Foto und die Bildinfos („i“/„Details“).  
   - Achte auf: Karte/Ort, GPS-Koordinaten, genaue Uhrzeit, Geräte-/Modellname.  
   Du weißt danach, ob du überhaupt entfernen musst.  
   Es kostet kurz Zeit und ist manchmal gut versteckt.  
   Bezeichnung kann abweichen – nutze die Suche nach: Details, Informationen, Metadaten, Ort, Standort.

2) **Beim Teilen Standort ausschalten (wenn angeboten)**  
   - iPhone/iPad: Im Teilen-Menü „Optionen“ öffnen und „Standort“ deaktivieren.  
   Das ist schnell und reicht oft für Chats.  
   Es gilt nur für diesen Versand und ist leicht zu vergessen.

3) **Immer mit einer Kopie arbeiten**  
   - Erstelle eine Duplikat-/Export-Version.  
   - Benenne sie eindeutig, z. B. „foto-ohne-metadaten.jpg“.  
   Du schützt dein Original und hast einen klaren „Teilen“-Kandidaten.  
   Du hast danach mehr Dateien und musst etwas Ordnung halten.

4) **Metadaten in der Kopie entfernen**  
   - Entferne in der Foto-App den Ort, wenn die Option vorhanden ist (z. B. „Ort anpassen“ → „Kein Standort“).  
   - Wenn das nicht geht: nutze Weg B (Computer) oder Weg C (Werkzeug).  
   Du bekommst eine Datei, die weniger über dich verrät.  
   Dabei können Datum, Drehung oder andere Anzeigehilfen verloren gehen.

5) **Unabhängig gegenprüfen (nicht nur in derselben App)**  
   - Öffne die Kopie in einer zweiten Ansicht (anderes Gerät oder anderes Programm).  
   - Prüfe erneut: keine Karte, keine Koordinaten, keine Kameradetails.  
   Du vermeidest „nur ausgeblendet statt entfernt“.  
   Das dauert etwas länger und ist je nach System umständlich.

6) **Empfänger-Version testen**  
   - Schicke dir die Datei testweise (Zweitkonto oder E-Mail).  
   - Lade sie dort als Datei herunter und prüfe die Details nochmal.  
   Du prüfst die echte Version, die ankommt.  
   Manche Dienste ändern Format oder Qualität beim Senden.

## Wege

### Weg A
1. Prüfe am Original, ob Ort/GPS oder Geräteinfos sichtbar sind.  
2. Stelle beim Teilen den Standort aus, wenn deine Foto-App das anbietet.  
3. Erstelle eine Kopie nur fürs Teilen (Export oder Duplikat).  
4. Entferne in der Kopie den Ort, falls eine Option vorhanden ist.  
5. Prüfe die Kopie in einer zweiten Ansicht.  
6. Teile bewusst nur die Kopie (Name/Ordner hilft).  
7. Wenn du oft teilst: reduziere neue Standortdaten schon beim Fotografieren. Das spart später Arbeit, kann aber „Orte“-Funktionen der Galerie weniger nützlich machen.

<details><summary>Weg B (Fortgeschritten)</summary>

1. Kopiere die Bilddatei auf den Computer und arbeite nur mit der Kopie.  
2. Entferne Metadaten mit Bordmitteln, wenn vorhanden (z. B. Dateieigenschaften in Windows).  
3. Speichere als neue Datei und behalte das Original unverändert.  
4. Prüfe das Ergebnis in einem zweiten Programm oder auf einem zweiten Gerät.  

Das ist oft gründlicher als nur „Ort ausblenden“.  
Als Nebenwirkung können Aufnahmedatum, Drehinfos oder Vorschaubilder verschwinden.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

Hier ist ExifTool hilfreich (ein Kommandozeilen-Programm zum Lesen und Entfernen von Metadaten).  
Arbeite nur mit Kopien und schreibe eine neue Datei.

Beispiel: nur GPS entfernen und neue Datei erzeugen:
```bash
exiftool -gps:all= -o bereinigt.jpg original.jpg
```

Beispiel: alle Metadaten entfernen und neue Datei erzeugen:
```bash
exiftool -all= -o bereinigt.jpg original.jpg
```

Du kannst sehr genau steuern, was weg soll.  
Fehler sind aber leicht zu übersehen, wenn du nicht konsequent gegenprüfst.

</details>

## So merkst du, dass es wirkt
- Achte darauf, ob in den Bildinfos keine Karte, kein Ort und keine GPS-Koordinaten mehr auftauchen.  
- Achte darauf, ob du wirklich die Kopie teilst (Dateiname/Export-Ordner), nicht das Original.  
- Achte darauf, ob die Empfänger-Datei dieselben „leeren“ Details zeigt wie deine geprüfte Kopie.

<details><summary>Mehr Prüfungen</summary>

- Prüfe auf einem zweiten Gerät: manche Apps zeigen Metadaten anders an.  
- Wenn ein Dienst „ungefähren Ort“ anzeigt: das kann aus der Sammlung kommen, nicht aus der Datei. Entscheidend ist die heruntergeladene Empfänger-Datei.  
- Beim Weiterleiten in Messengern entsteht oft eine neue Datei. Prüfe diese neue Datei erneut.

</details>

## Probleme & Lösungen
- **Problem:** Du findest keine Option, um den Ort zu entfernen.  
  **Lösung:** Arbeite mit einer Export-Kopie und nutze Weg B oder Weg C. Danach immer unabhängig prüfen.

- **Problem:** Google Fotos zeigt einen Ort, aber du kannst ihn nicht löschen.  
  **Lösung:** Google Fotos kann automatisch gespeicherte Standorte oft nicht entfernen. Nutze eine lokale Bereinigung (Weg B/C) und teile die bereinigte Datei.

- **Problem:** Es wird noch ein Ort angezeigt, obwohl du „Standort aus“ gewählt hast.  
  **Lösung:** Prüfe, ob das nur eine Sammlungs-Info ist. Lade die versendete Datei herunter und prüfe die Datei selbst.

- **Problem:** Nach dem Entfernen ist das Foto verdreht oder falsch sortiert.  
  **Lösung:** Manche Apps nutzen Metadaten für Drehung und Datum. Korrigiere die Drehung sichtbar und exportiere erneut.

- **Problem:** Du hast aus Versehen das Original verändert.  
  **Lösung:** Lege eine feste Regel fest: erst kopieren, dann bereinigen. Bewahre das Original getrennt auf.

- **Problem:** Der Empfänger sieht trotzdem Details.  
  **Lösung:** Sehr oft wurde die falsche Version verschickt. Teile aus einem neutralen Ordner nur die geprüfte Kopie.

## Nicht gelöst
- Der Bildinhalt bleibt aussagekräftig (Hausnummern, Spiegelungen, Personen, markante Orte).  
- Plattformen erzeugen eigene Zusatzinfos (z. B. Upload-Zeitpunkt, Kommentare, Alben). Exif beeinflusst das nicht.  
- Threat Model: Wenn dein Gerät kompromittiert ist (Stalkerware, Admin-Zugriff), kann die Datei vor dem Teilen abgegriffen werden.  
- Empfänger können Dateien anreichern (Ort/Kommentar) und weiterverbreiten.  
- Je nach Format gibt es Metadaten außerhalb von Exif (z. B. XMP). Entferne deshalb nicht nur „GPS“, wenn du sicher gehen musst.

## Quellen
- [Standortmetadaten in der App „Fotos“ verwalten (Apple Support)](https://support.apple.com/de-de/guide/personal-safety/ips0d7a5df82/web)
- [Standorte bei Fotos (Google Fotos-Hilfe)](https://support.google.com/photos/answer/6153599)
- [JEITA/CIPA Exif-Spezifikation (CP-3451C, PDF)](https://home.jeita.or.jp/tsc/std-pdf/CP3451C.pdf)
- [Exchangeable Image File Format (Exif) Family (Library of Congress)](https://www.loc.gov/preservation/digital/formats/fdd/fdd000618.shtml)
- [ExifTool Dokumentation](https://exiftool.org/exiftool_pod.html)

## Weiter
- [Dateien: Schnellstart](/dateien/schnellstart/)
- [Dateien sicher teilen](/dateien/sicher-teilen/)
- [Foto-Standort schützen](/standort/foto-standort/)
- [Metadaten: Grundlagen](/wissen/metadaten-grundlagen/)
- [PDF-Metadaten entfernen](/dateien/pdf-metadaten/)
- [Office-Metadaten](/dateien/office-metadaten/)
