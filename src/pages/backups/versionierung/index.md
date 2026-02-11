---
layout: "@/layouts/DocLayout.astro"
title: "Versionierung bei Backups: So rettest du ältere Dateistände"
url: "/backups/versionierung/"
chapter: "Themen"
type: "guide"
format: "guide"
level:
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Versionierung bei Backups: Aufbewahrung festlegen, ältere Dateistände wiederherstellen und gegen Ransomware schützen – mit Checks, Fehlerlösungen und Grenzen."
---

Du merkst es meist zu spät: Eine Datei ist überschrieben, ein Ordner „aufgeräumt“ oder durch Erpressungssoftware (Ransomware) verschlüsselt. Dann ist die aktuelle Kopie unbrauchbar.

Versionierung sorgt dafür, dass deine Datensicherung mehrere ältere Stände behält. Du kannst gezielt zurückspringen, statt nur „die letzte Kopie“ zu haben.

Sinnvoll, wenn du Dateien oft änderst oder zwischen Geräten abgleichst.  
Grenze: Wenn jemand alle Versionen löschen darf, ist Versionierung angreifbar.
  
Stand: 2026-01-27.

## Kurzfazit

- Aktiviere Versionierung und wähle eine Aufbewahrung, die Wochen abdeckt.
- Der Unterschied zählt: Backup mit Versionen + Test ist nicht nur Synchronisierung.

## Ziel

Weg A: Versionierung einschalten und Aufbewahrung so setzen, dass du zurückspringen kannst.  
Weg B: Versionen gegen Löschen und Erpressung absichern (getrennte Kopie, getrennte Rechte).  
Weg C: Unveränderbare Stände nutzen, damit Versionen nicht einfach überschrieben werden.

Stoppsignal: Wenn Versionen plötzlich fehlen, Sicherungen gelöscht wurden oder neue Anmeldungen auftauchen, sichere zuerst Konto und Gerät. Schau dafür in [Sitzungen & Geräte](/konto/sitzungen-geraete/) und nutze den Plan für [Verdacht: Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/). Sichere nicht „einfach weiter“.

Aufwand + Komfortkosten: 10–30 Minuten. Du brauchst mehr Speicher, und Wiederherstellungen dauern teils länger.

## Schnellstart (10 Minuten)

1) **Prüfe, ob Versionierung wirklich aktiv ist**  
Öffne die Einstellungen deiner Sicherung oder deines Speicherdienstes.  
Suche nach „Versionen“, „Verlauf“ oder „Wiederherstellen“.  
Teste an einer Datei, ob du einen älteren Stand auswählen kannst.  
Bezeichnung kann abweichen – nutze die Suche nach: Versionen, Verlauf, Dateiversionen.  
So erkennst du echte alte Stände statt nur Papierkorb. Wenn Versionierung aus war, entstehen alte Stände meist nicht nachträglich.

2) **Setze eine sinnvolle Aufbewahrung**  
Wähle für Alltagsordner eine Dauer, die typische „zu spät gemerkt“-Fehler abdeckt.  
Oft sind mehrere Wochen realistischer als ein paar Tage.  
Das erhöht die Chance, dass du vor den Fehler zurückkommst. Es braucht mehr Speicher und kann Kosten erhöhen.

3) **Halte mindestens eine Kopie getrennt vom Alltag**  
Nutze zusätzlich ein Sicherungsziel, das nicht dauerhaft verbunden ist.  
Zum Beispiel ein externes Laufwerk nur fürs Sichern. Danach trennen und weglegen.  
Das senkt das Risiko, dass Erpressungssoftware erreichbare Sicherungen mitverschlüsselt. Es verlangt Routine, weil du wirklich trennen musst.

4) **Übe eine Wiederherstellung einer älteren Version**  
Ändere eine unkritische Datei sichtbar.  
Stelle einen älteren Stand in einen neuen Ordner wieder her, nicht über die aktuelle Datei.  
So lernst du den Ablauf, bevor es ernst wird. Es kostet ein paar Minuten, spart aber Stress und Fehlklicks im Notfall.

5) **Schütze deine Versionen vor Löschen**  
Prüfe, wer Sicherungen löschen darf (Gerät, Familienkonto, Teamkonto).  
Aktiviere, wenn möglich, [2FA: Schnellstart](/2fa/schnellstart/) und sichere [Recovery-Codes](/2fa/recovery-codes/).  
Das erschwert Kontoübernahmen und das gezielte Entfernen von Versionen. Mehr Schutz kann zusätzliche Abfragen beim Anmelden bedeuten.

6) **Achte auf Platz und Fehlermeldungen**  
Prüfe, ob dein Backup-Speicher knapp wird oder Warnungen angezeigt werden.  
Bei Platzmangel verschwinden Versionen oft zuerst oder werden kürzer aufbewahrt.  
Das verhindert stille Lücken. Es kann bedeuten, dass du Speicher aufräumen oder dazukaufen musst.

## Wege

### Weg A

1. Aktiviere Versionierung, falls sie aus ist. So entstehen ältere Stände automatisch.  
2. Stelle eine realistische Aufbewahrung ein, eher Wochen als Tage. Das braucht mehr Speicher.  
3. Wähle bewusst, welche Ordner versioniert werden. Das spart Platz, kann aber Lücken erzeugen.  
4. Aktiviere regelmäßige Sicherungen. So entstehen kontinuierlich Versionen, das erhöht Hintergrundaktivität.  
5. Nutze zusätzlich eine getrennte Kopie (zum Beispiel wöchentlich). Das schützt besser, kostet aber Disziplin.  
6. Stelle testweise einen alten Stand in einen neuen Ordner wieder her. So vermeidest du Überschreiben.  
7. Notiere dir kurz, wo du „Versionen“ findest und wie du wiederherstellst. Das spart Zeit, kostet einmalig Aufmerksamkeit.

<details><summary>Weg B (Fortgeschritten)</summary>

- Trenne „Alltag“ und „Wichtiges“ in unterschiedliche Aufbewahrungen. Das spart Platz, erfordert aber Ordnung.  
- Nutze zwei Ziele: eins bequem laufend, eins getrennt. Das kostet mehr Hardware und Aufwand.  
- Reduziere Löschrechte, wo es geht. Das schützt Versionen, kann Zusammenarbeit erschweren.  
- Aktiviere Benachrichtigungen für Sicherungsfehler, falls verfügbar. Das bringt mehr Meldungen, verhindert aber blinde Lücken.  
- Mache monatlich eine Stichprobe zur Wiederherstellung. Das kostet wenige Minuten, erhöht aber Sicherheit deutlich.  
- Lege bei hohem Risiko eine Kopie außerhalb von Wohnung oder Büro ab. Das schützt vor Brand und Diebstahl, erhöht aber Organisationsaufwand.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

- Nutze Momentaufnahmen (Snapshots), wenn dein System das anbietet. Du bekommst feste Stände, brauchst aber extra Speicher.  
- Setze unveränderbare Aufbewahrung, falls verfügbar (WORM: „einmal schreiben, danach nur lesen“). Das schützt vor Überschreiben, macht Bereinigung schwieriger.  
- Trenne Zugänge strikt: eigenes Konto oder eigener Schlüssel fürs Sicherungsziel. Das erhöht Sicherheit, macht die Einrichtung komplexer.  
- Arbeite mit rotierenden Datenträgern (zwei Wechselmedien im Wechsel). Das senkt das Totalausfallrisiko, kostet aber Disziplin.  
- Stelle in einer sauberen Umgebung wieder her (separater Ordner oder zweites Gerät). Das reduziert Überschreiben, dauert aber länger.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob du bei einer Datei mehrere ältere Stände siehst, nicht nur „Papierkorb“.  
- Wenn du absichtlich etwas änderst, kannst du einen älteren Stand in einen neuen Ordner wiederherstellen.  
- Mindestens eine Kopie bleibt unberührt, auch wenn dein Gerät gerade „alles ändert“.

<details><summary>Mehr Prüfungen</summary>

- Prüfe die Zeitspanne: Wie alt ist die älteste verfügbare Version wirklich?  
- Prüfe, ob gelöschte Dateien ebenfalls zurückholbar sind oder nur geänderte.  
- Achte darauf, ob dein System Löschungen sofort überall übernimmt (Synchronisierung) oder Versionen behält (Backup).

</details>

## Probleme & Lösungen

- **Problem:** Es entstehen keine Versionen. / **Lösung:** Aktiviere Versionierung und prüfe, ob der Ordner Teil der Sicherung ist.  
- **Problem:** Versionen verschwinden schnell. / **Lösung:** Erhöhe die Aufbewahrung oder gib wichtigen Ordnern längere Regeln.  
- **Problem:** Der Speicher läuft voll. / **Lösung:** Nimm große, häufig geänderte Dateien gezielt aus oder verkürze deren Aufbewahrung.  
- **Problem:** Du findest den „richtigen Stand“ nicht. / **Lösung:** Stelle die Version in einen neuen Ordner wieder her und vergleiche Datum und Inhalt.  
- **Problem:** Erpressungssoftware hat erreichbare Sicherungen mitverschlüsselt. / **Lösung:** Nutze eine ältere Version und baue zusätzlich eine getrennte Kopie auf.  
- **Problem:** Du kommst nicht mehr an dein Sicherungskonto. / **Lösung:** Nutze [Recovery-Codes](/2fa/recovery-codes/) und halte zusätzlich eine lokale, getrennte Kopie vor.  
- **Problem:** Nach der Wiederherstellung ist der Schaden sofort wieder da. / **Lösung:** Gehe von einem kompromittierten Gerät aus und folge [Verdacht: Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/).

## Nicht gelöst

- Versionierung hilft nicht, wenn vor dem Schaden nie eine Sicherung gelaufen ist.  
- Mit Admin-Zugriff auf Gerät oder Sicherungsziel können Versionen gelöscht oder sabotiert werden.  
- Bei kompromittiertem Gerät kann Schadsoftware nach der Wiederherstellung wieder aktiv werden.  
- Ohne getrennte Kopie bleibt das Risiko bei Erpressung hoch, auch mit Versionierung.  
- Manche Datenarten brauchen eigene Wege (zum Beispiel Datenbanken oder Container-Dateien).  
- Bei Zwang, Stalkerware oder gemeinsam genutzten Konten ist sauberer Zugriffsschutz schwer durchsetzbar.

## FAQ

**Ist Synchronisierung ein Backup?**  
Meist nicht. Synchronisierung verteilt auch Löschungen und Verschlüsselung. Backup heißt Versionierung plus Wiederherstellungstest.

**Was ist der Unterschied zwischen Papierkorb und Versionierung?**  
Papierkorb hilft bei „gelöscht“. Versionierung hilft auch bei „überschrieben“ oder „kaputt gespeichert“.

**Wie lange sollte ich Versionen aufbewahren?**  
So lange, wie Fehler typischerweise unbemerkt bleiben. Für viele sind das Wochen, für Wichtiges zusätzlich monatliche Stände.

**Wie oft sollte ich Backups testen?**  
Mindestens gelegentlich und nach größeren Änderungen. Ein Test ist der einzige Beweis, dass Wiederherstellung klappt.

**Brauche ich Verschlüsselung für Backups?**  
Wenn das Backup das Haus oder das Gerät verlässt, ja. Sonst riskierst du bei Verlust oder Diebstahl Datenabfluss.

## Quellen

- [BSI: Datensicherung – wie geht das?](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Daten-sichern-verschluesseln-und-loeschen/Datensicherung-und-Datenverlust/Datensicherung-wie-geht-das/datensicherung-wie-geht-das_node.html)
- [BSI: Top-10 Ransomware-Maßnahmen](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Cyber-Sicherheitslage/Analysen-und-Prognosen/Ransomware-Angriffe/Top-10-Ransomware-Massnahmen/top-10-ransomware-massnahmen.html)
- [BSI IT-Grundschutz: CON.3 Datensicherungskonzept (Edition 2023)](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Grundschutz/IT-GS-Kompendium_Einzel_PDFs_2023/03_CON_Konzepte_und_Vorgehensweisen/CON_3_Datensicherungskonzept_Edition_2023.html)
- [NIST: Protecting Data from Ransomware and Other Data Loss Events](https://csrc.nist.gov/pubs/other/2020/04/24/protecting-data-from-ransomware-and-other-data-los/final)
- [CISA: StopRansomware Guide](https://www.cisa.gov/stopransomware/ransomware-guide)

## Weiter

- [Backups](/backups/)
- [Backups: Schnellstart](/backups/schnellstart/)
- [3-2-1-Regel](/backups/3-2-1/)
- [Backups testen](/backups/backup-testen/)
- [Backups verschlüsseln](/backups/backup-verschluesseln/)
- [Bedrohungen für Backups](/backups/bedrohungen/)
