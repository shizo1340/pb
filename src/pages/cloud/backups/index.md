---
layout: "@/layouts/DocLayout.astro"
title: "Cloud-Backups einrichten: Versionen, Test und Kontoschutz"
url: "/cloud/backups/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Cloud-Backups einrichten: So aktivierst du Versionen, testest die Wiederherstellung und schützt dein Konto. Mit Checkliste gegen Sync-Fallen, Löschung und Ransomware."
---

Du merkst es oft erst, wenn es zu spät ist: Datei weg, Ordner leer, Handy kaputt.  
Und die Cloud hat „brav synchronisiert“ – inklusive Löschung.

Hier richtest du Cloud-Backups so ein, dass du wirklich zurückholen kannst, was zählt.  
Mit Versionen, einem Wiederherstellungstest und einem Konto, das nicht beim ersten Angriff kippt.

Sinnvoll, wenn du wichtige Daten in der Cloud hast (Fotos, Dokumente, Notizen).  
Grenze: Wenn ein Angreifer Zugriff auf Gerät *und* Cloud-Konto hat, kann er Backups löschen oder verfälschen.
  
Stand: 2026-01-27.

## Kurzfazit
- Versionen + Wiederherstellungstest sind der schnellste Hebel gegen „aus Versehen gelöscht“ und Ransomware.
- Kontoschutz entscheidet, ob Backups im Ernstfall bleiben oder mit dem Konto fallen.

## Ziel

- Weg A: Versionen aktivieren und Wiederherstellung einmal üben.
- Weg B: Backup zusätzlich absichern (separates Konto, verschlüsselte Kopie, zweite Kopie).
- Weg C: Manipulationsschutz und Integritätschecks für höhere Bedrohungslagen.

Stoppsignal: Wenn dir ungewöhnliche Anmeldewarnungen auffallen oder du den Zugriff verlierst, sichere zuerst das Konto.  
Siehe [Zugang verloren](/konto/zugang-verloren/) und [Wiederherstellung](/konto/wiederherstellung/).

Aufwand + Komfortkosten: 25–60 Minuten einmalig.  
Danach reichen meist 5 Minuten pro Monat für einen kurzen Test.

## Schnellstart (25 Minuten)

1) **Kläre: Backup ist nicht nur Synchronisierung**
1. Liste 3 Datenbereiche, die zählen (z. B. Fotos, Dokumente, Notizen).
2. Prüfe, ob dein Dienst „Versionen“ oder „Dateiverlauf“ bietet.
3. Lege einen Ordner „Backup-Quelle“ an und sammle dort 5–10 kritische Dateien.
Bezeichnung kann abweichen – nutze die Suche nach: „Versionen“, „Dateiverlauf“, „Wiederherstellen“.  
Du sicherst gezielt das, was sonst still verloren geht. Es kostet ein paar Minuten Planung.

2) **Aktiviere Versionierung und setze eine Aufbewahrung**
1. Öffne eine Testdatei und suche den Versionsverlauf.
2. Stelle, wenn möglich, eine Aufbewahrung von mehreren Wochen ein.
3. Ändere die Datei und prüfe, ob alte Stände sichtbar bleiben.
Bezeichnung kann abweichen – nutze die Suche nach: „Version“, „Verlauf“, „Aufbewahrung“.  
Du kannst Fehler und versehentliche Löschungen zurückdrehen. Längere Aufbewahrung kann mehr Speicher belegen.

3) **Sichere den „Papierkorb“-Pfad und den Restore-Weg**
1. Lösche eine Testdatei bewusst.
2. Stelle sie aus Papierkorb oder Verlauf wieder her.
3. Notiere dir: Wo ist „Papierkorb“, wo ist „Wiederherstellen“, wie lange bleibt es dort?
Bezeichnung kann abweichen – nutze die Suche nach: „Papierkorb“, „Gelöschte Dateien“, „Wiederherstellen“.  
Du weißt im Stress, wo du klicken musst. Der erste Durchlauf ist ungewohnt und kostet kurz Zeit.

4) **Härte das Cloud-Konto (Passwortsatz, 2FA, Sitzungen)**
1. Nutze eine lange Passphrase (Passwortsatz) statt kurzer Passwörter.
2. Aktiviere Zwei-Faktor-Anmeldung und speichere Recovery-Codes getrennt.
3. Prüfe aktive Sitzungen und melde Unbekanntes ab.
Bezeichnung kann abweichen – nutze die Suche nach: „Zwei-Faktor“, „Sicherheitscodes“, „Sitzungen“.  
Kontoübernahme wird deutlich schwerer, und damit auch das Löschen deiner Backups. Anmeldungen werden etwas weniger bequem.

5) **Lege für sensible Daten eine verschlüsselte Kopie ab**
1. Wähle 1–2 Ordner mit sensiblen Dateien (z. B. Ausweise, Verträge).
2. Erstelle ein verschlüsseltes Archiv oder verschlüssele den Ordner vor dem Upload.
3. Lade nur die verschlüsselte Kopie hoch, nicht die Rohdaten.
So bleiben Inhalte auch bei Datenabfluss unlesbar. Wenn du Schlüssel oder Passwort verlierst, ist diese Kopie verloren.  
Siehe auch [Backups verschlüsseln](/backups/backup-verschluesseln/).

6) **Baue eine zweite Kopie außerhalb der Cloud**
1. Lege die wichtigsten Daten zusätzlich lokal ab (externe SSD/HDD oder zweites Gerät).
2. Trenne sie vom Alltag (nicht dauerhaft angesteckt, wenn möglich).
3. Aktualisiere sie regelmäßig (z. B. monatlich).
Eine zweite Kopie schützt dich, wenn Cloud oder Konto ausfallen. Sie kostet extra Speicher und etwas Routine.  
Wenn du systematisch werden willst: [3-2-1-Regel](/backups/3-2-1/).

## Wege

### Weg A
- Lege fest, was in die Cloud darf und was nur lokal bleibt. Das verhindert „alles syncen“, kostet aber kurze Auswahl.
- Aktiviere Versionen und eine sinnvolle Aufbewahrung. Das gibt dir Rücksprungpunkte, kann Speicher belegen.
- Übe einmal: Datei ändern, alte Version holen, Papierkorb prüfen. Das macht dich sicher, kostet ein paar Minuten.
- Richte einen festen „Backup-Quelle“-Ordner ein. Das macht Daten auffindbar, braucht Disziplin.
- Prüfe monatlich stichprobenartig eine Wiederherstellung. Das hält dich handlungsfähig, kostet wenig Zeit.

<details><summary>Weg B (Fortgeschritten)</summary>

- Nutze ein separates Konto nur für Backups. Das senkt die Angriffsfläche, bedeutet aber ein zusätzliches Login.
- Halte sensible Daten nur verschlüsselt in der Cloud. Das schützt Inhalte, verlangt aber sichere Schlüsselablage.
- Kombiniere Cloud + lokale Kopie nach [3-2-1](/backups/3-2-1/). Das macht dich robuster, braucht aber einen zweiten Speicherort.
- Prüfe Kontowiederherstellung (Codes, zweite Faktoren, vertrauenswürdige Geräte). Das verhindert Aussperren, braucht einmalige Pflege.
- Übe einmal pro Quartal die Wiederherstellung ganzer Ordner. Das deckt Struktur-Probleme auf, dauert länger als ein Datei-Test.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

- Nutze unveränderbare Aufbewahrung (WORM-Speicher: nach dem Schreiben nur noch lesbar) für wichtige Stände. Das bremst Manipulation, kann teurer sein.
- Trenne Schreib- und Löschrechte: Alltag darf hochladen, aber nicht löschen. Das senkt den Schaden bei Kontoübernahme, macht Verwaltung komplexer.
- Lege Aufbewahrungsregeln fest (kurz: viele Stände, lang: wenige, dafür langlebig). Das spart Platz, braucht Planung.
- Prüfe Integrität stichprobenartig mit Prüfsummen (Hash-Werten). Das erkennt stille Manipulation, setzt Tools und Sorgfalt voraus.
- Dokumentiere den Wiederherstellungsweg so, dass er auch unter Stress klappt. Das spart Zeit, kostet einmalig Dokumentationsarbeit.

</details>

## So merkst du, dass es wirkt
- Achte darauf, ob du bei einer Testdatei mehrere Versionen siehst und gezielt zurückholen kannst.
- Achte darauf, ob du in 2–3 Minuten „Versionen“, „Papierkorb“ und „Wiederherstellen“ findest.
- Achte darauf, ob Anmeldewarnungen ankommen und du Sitzungen prüfen kannst.

<details><summary>Mehr Checks</summary>

- Stelle eine Datei in einen anderen Ordner wieder her, damit du nichts überschreibst.
- Prüfe, ob „Downloads“ oder lokale Ordner wirklich im Backup landen (oft ist das nicht so).
- Teste nach einem Gerätewechsel, ob du an die verschlüsselte Kopie kommst (Schlüssel vorhanden, Archiv öffnet).

</details>

## Probleme & Lösungen
- **Problem:** „Ich habe etwas gelöscht und es ist überall weg.“  
  **Lösung:** Versionierung aktivieren und Aufbewahrung verlängern. Synchronisierung allein ist kein Backup.

- **Problem:** „Ich finde keine ältere Version.“  
  **Lösung:** In Datei-Details nach Verlauf/Versionen suchen und zusätzlich den Papierkorb prüfen.

- **Problem:** „Backups laufen am Handy nie durch.“  
  **Lösung:** WLAN erlauben, Energiesparen für die Backup-App lockern und freien Cloud-Speicher schaffen.

- **Problem:** „Ich bekomme Anmeldewarnungen oder sehe fremde Sitzungen.“  
  **Lösung:** Sitzungen abmelden, Passphrase ändern und Zwei-Faktor prüfen. Bei Zugriffverlust: [Zugang verloren](/konto/zugang-verloren/).

- **Problem:** „Schadsoftware hat auch die Cloud erwischt.“  
  **Lösung:** Gerät zuerst bereinigen, dann aus einer älteren Version wiederherstellen und Kontoschutz nachziehen.

- **Problem:** „Die verschlüsselte Kopie ist da, aber ich komme nicht ran.“  
  **Lösung:** Schlüssel/Passwort-Backup prüfen und neu anlegen. Ohne Schlüssel ist die Kopie unbrauchbar.

## Nicht gelöst
- Cloud-Backups verhindern nicht, dass der Anbieter Metadaten sieht (je nach Dienst).
- Ohne eigene Verschlüsselung schützen Cloud-Backups nicht automatisch vor Datenabfluss beim Anbieter.
- Cloud-Backups ersetzen keine zweite, unabhängige Kopie.
- Wenn dein Gerät kompromittiert ist (Admin-Zugriff, Stalkerware), kann auch der Backup-Zugriff betroffen sein. Siehe [Verdacht: Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/).
- Wenn ein Angreifer dein Cloud-Konto übernimmt, kann er Backups löschen oder manipulieren, solange Rechte und Aufbewahrung das erlauben.
- Bei Zwang (erzwungene Entsperrung) helfen Kontoschutz und Backups nur begrenzt.

## Quellen
- [BSI: Datensicherung – wie geht das?](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Daten-sichern-verschluesseln-und-loeschen/Datensicherung-und-Datenverlust/Datensicherung-wie-geht-das/datensicherung-wie-geht-das_node.html)
- [BSI: Back-up – Doppelt gesichert hält besser](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Daten-sichern-verschluesseln-und-loeschen/Datensicherung-und-Datenverlust/Back-up-Doppelt-gesichert-haelt-besser/back-up-doppelt-gesichert-haelt-besser.html)
- [BSI: Zwei-Faktor-Authentisierung](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Zwei-Faktor-Authentisierung/zwei-faktor-authentisierung_node.html)
- [NIST SP 800-34 Rev. 1: Contingency Planning Guide](https://csrc.nist.gov/publications/detail/sp/800-34/rev-1/final)
- [CISA: Ransomware Guide (Backups & Recovery)](https://www.cisa.gov/stopransomware/ransomware-guide)

## Weiter
- [Cloud](/cloud/)
- [Backup-Schnellstart](/backups/schnellstart/)
- [3-2-1-Regel](/backups/3-2-1/)
- [Backups verschlüsseln](/backups/backup-verschluesseln/)
- [Konto-Schnellstart](/konto/schnellstart/)
- [E2EE: Realität & Grenzen](/cloud/e2ee-realitaet/)
