---
layout: "@/layouts/DocLayout.astro"
title: "Dateien verschlüsseln: sicher speichern und weitergeben"
url: "/verschluesselung/dateien/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Dateien verschlüsseln: Dokumente und Fotos sicher speichern und teilen – Passwortsatz, Schlüsseltrennung, Metadaten‑Check."
---
Du willst Dateien speichern oder teilen, ohne dass andere mitlesen können.  
Trotzdem entstehen schnell unverschlüsselte Kopien. Zum Beispiel durch Exporte, Anhänge, Vorschauen oder alte Versionen.

Ziel ist ein Ablauf, der im Alltag klappt.  
Du verschlüsselst gezielt, verwahrst den Schlüssel sauber und reduzierst typische Lecks.

Sinnvoll, wenn du Dokumente, Fotos oder Scans per Cloud, E-Mail oder Messenger weitergibst.  
Grenze: Wenn dein Gerät kompromittiert ist, hilft Dateiverschlüsselung nur eingeschränkt.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

Weg A: Einzelne Datei oder Ordner als verschlüsseltes Archiv/Container ablegen. Ein Schlüssel, klare Routine.  
Weg B: Getrennte Bereiche und getrennte Schlüssel pro Kontext. Weniger Lecks durch Exporte und Vorschauen.  
Weg C: Verschlüsseln mit Schlüsselpaar (OpenPGP). Optional mit Signaturen für Integrität und Absenderprüfung.

Stoppsignal: Du vermutest Schadsoftware, Stalkerware oder fremden Admin-Zugriff.  
Dann sichere zuerst das Gerät, bevor du weiterarbeitest. Siehe [Verdacht: Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/).

Aufwand: 15–30 Minuten.  
Komfortkosten: Du musst einen Passwortsatz eingeben. Vorschau und Online-Bearbeitung werden oft schlechter.

## Schnellstart (15 Minuten)
1) Kläre, welche Art Schutz du gerade brauchst  
1. Geräteverschlüsselung schützt Daten bei Verlust oder Diebstahl des Geräts.
2. Dateiverschlüsselung schützt eine Datei auch nach dem Kopieren oder Weitergeben.
3. Transportverschlüsselung (TLS) schützt die Verbindung, nicht die Datei beim Empfänger.
Bezeichnung kann abweichen – nutze die Suche nach: Verschlüsselung, Gerät verschlüsseln.  
Damit triffst du die richtige Maßnahme für dein Risiko. Dafür musst du kurz prüfen, was wirklich geschützt werden soll.

2) Wähle eine einfache Dateiverschlüsselung, die du wirklich nutzt  
4. Für einzelne Dateien: verschlüsseltes Archiv oder „Datei verschlüsseln“ deiner Anwendung.
5. Für Ordner: ein verschlüsselter Container/Tresor (ein Schlüssel, viele Dateien).
6. Starte mit einer Kopie, nicht mit dem einzigen Original.
So bleibt der Inhalt auch außerhalb deines Geräts geschützt. Dafür sind Vorschauen im Browser oft nicht möglich.

3) Lege einen starken Schlüssel fest und speichere ihn wiederauffindbar  
Nutze einen Passwortsatz (englisch „Passphrase“): mehrere Wörter, lang und merkbar.  
Speichere ihn in einem [Passwort-Manager](/passwoerter/passwort-manager/).  
Das senkt das Risiko, dass du den Schlüssel verlierst. Dafür musst du den Passwort-Manager selbst gut absichern.

4) Teile Datei und Schlüssel getrennt  
Sende die verschlüsselte Datei über den gewünschten Kanal (Cloud-Link, E-Mail, Messenger).  
Sende den Schlüssel über einen anderen Kanal (zum Beispiel Anruf statt Chat).  
So reicht ein einzelner Datenabfluss nicht zum Entschlüsseln. Dafür ist das Teilen etwas umständlicher.

5) Räume unverschlüsselte Reste auf und denke an Metadaten  
Suche nach Exporten, Anhängen und Zwischenspeichern (Downloads, „Gesendet“, temporäre Ordner).  
Entferne Metadaten, wenn sie Ort, Namen oder Bearbeitung verraten. Siehe [Metadaten entfernen](/dateien/office-metadaten/) und [PDF-Metadaten entfernen](/dateien/pdf-metadaten/).  
Du reduzierst damit die häufigsten Lecks neben dem eigentlichen Inhalt. Dafür brauchst du eine kurze Aufräum-Routine nach dem Teilen.

## Wege

### Weg A

1) Entscheide: einzelne Datei oder ganzer Ordner.  
Ein Ordner im Container ist meist alltagstauglicher als viele Einzeldateien.

2) Lege eine Arbeitskopie an, zum Beispiel in einem Ordner „Sicher“.  
So teilst du später nicht aus Versehen das Original.

3) Verschlüssele die Kopie als Archiv oder lege sie in einen verschlüsselten Container/Tresor.  
Das schützt den Inhalt auch nach dem Upload oder Versand.

4) Vergib einen langen Passwortsatz und speichere ihn im Passwort-Manager.  
So bleibt der Schlüssel verfügbar, auch nach Gerätewechsel.

5) Teste sofort: Entschlüsseln und Öffnen muss funktionieren.  
Erst dann löscht du unverschlüsselte Zwischenstände.

6) Teile nur die verschlüsselte Version.  
Wenn möglich, entziehe Freigaben wieder. Siehe [Freigaben sicher](/verschluesselung/freigaben-sicher/).

7) Sende den Schlüssel getrennt und nur an die richtige Person.  
Ein „Passwort im selben Chat“ macht den Schutz oft wertlos.

8) Suche nach unverschlüsselten Resten.  
Typisch sind Download-Ordner, Mail-Anhänge, Messenger-Medien und temporäre Dateien.

9) Prüfe Metadaten und entferne sie bei Bedarf vor dem Teilen.  
Bei Fotos sind oft EXIF-Daten enthalten. Siehe [EXIF-Daten entfernen](/dateien/exif-entfernen/).

10) Sichere verschlüsselte Datei und Schlüssel so, dass du sie wiederfindest.  
Denk dabei auch an Backups. Siehe [Backup verschlüsseln](/backups/backup-verschluesseln/).

<details><summary>Weg B (Fortgeschritten)</summary>

- Trenne nach Kontext: ein Schlüssel pro Projekt, Kunde oder Lebensbereich.  
Das begrenzt Schäden, falls ein Schlüssel doch weitergegeben wird. Dafür verwaltest du mehr als einen Schlüssel.

- Lege eine feste Reihenfolge fest: erst verschlüsseln, dann hochladen/anhängen.  
So entsteht seltener ein unverschlüsselter Upload. Dafür musst du Gewohnheiten ändern.

- Vermeide unverschlüsselte Exporte durch „Teilen“-Funktionen.  
Manche Apps erstellen dabei eine neue, ungeschützte Datei. Dafür musst du den Ablauf einmal testen.

- Achte auf Dateinamen und Ordnernamen.  
Auch ohne Inhalt können sie viel verraten. Dafür musst du neutralere Namen verwenden.

- Nutze Versionierung bewusst.  
Alte Versionen können unverschlüsselte Zustände enthalten. Dafür brauchst du gelegentlich eine Aufräumrunde.

- Halte einen zweiten Zugriff bereit.  
Kannst du die Datei auf einem anderen Gerät mit dem gespeicherten Schlüssel öffnen? Dafür musst du den Test einmal durchführen.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.  
- Nutze asymmetrische Verschlüsselung (OpenPGP): Schlüsselpaar aus öffentlichem und privatem Schlüssel.  
Damit kannst du Dateien für mehrere Empfänger verschlüsseln, ohne ein gemeinsames Passwort zu teilen. Dafür ist die Einrichtung deutlich aufwendiger.

- Verwahre den privaten Schlüssel getrennt vom Alltagssystem.  
Schütze ihn zusätzlich mit einem starken Passwortsatz. Das senkt das Risiko bei Geräteverlust. Dafür brauchst du ein klares Backup- und Wiederherstellungs-Konzept.

- Plane Widerruf und Ersatz.  
Wenn ein Schlüssel kompromittiert ist, musst du ihn ersetzen können. Dafür musst du die Schritte vorher festlegen.

- Signiere wichtige Dateien zusätzlich.  
Empfänger können prüfen, ob die Datei wirklich von dir stammt und unverändert ist. Dafür müssen Empfänger wissen, wie sie Signaturen prüfen.

- Übe die Wiederherstellung.  
Schlüssel importieren, Datei entschlüsseln, Signatur prüfen. Das verhindert Panik im Ernstfall. Dafür kostet es einmal Zeit.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob du beim Teilen nur noch verschlüsselte Dateien weitergibst.  
- Öffne eine geteilte Datei testweise ohne Schlüssel. Der Inhalt darf nicht lesbar sein.  
- Probiere eine Wiederherstellung: Auf einem zweiten Gerät mit gespeichertem Schlüssel öffnen.

<details><summary>Mehr Prüfungen</summary>

- Suche nach Schattenkopien: liegt die Datei noch als Anhang, Export oder im Download-Ordner?  
- Prüfe Dateieigenschaften: stehen dort Autor, Firma, Ort oder Geräteinfos?  
- Denke an Vorschauen: manche Dienste erzeugen Vorschaubilder oder Textauszüge.  
- Prüfe Backups: wurden dort unverschlüsselte Varianten mitgesichert (ältere Versionen, Papierkorb, Sync)?

</details>

## Probleme & Lösungen

- **Problem:** Du hast den Schlüssel nicht mehr.  
  **Lösung:** Suche im Passwort-Manager und in Notfallunterlagen. Ohne Schlüssel ist die Datei meist nicht wiederherstellbar.

- **Problem:** Der Empfänger kann die Datei nicht öffnen.  
  **Lösung:** Nutze ein verbreitetes Format und teste vor dem Versand auf einem zweiten Gerät. Sende bei Bedarf eine kurze Anleitung.

- **Problem:** Du hast versehentlich auch die unverschlüsselte Version verschickt.  
  **Lösung:** Teile nur aus einem festen „Sicher“-Ordner. Prüfe „Gesendet“ und Messenger-Medien auf alte Anhänge.

- **Problem:** In der Cloud ist eine Vorschau oder Indizierung sichtbar.  
  **Lösung:** Lade nur die verschlüsselte Datei hoch. Schalte Vorschau/Indizierung ab oder nutze einen anderen Übertragungsweg.

- **Problem:** Metadaten verraten Ort, Namen oder Bearbeitung.  
  **Lösung:** Entferne Metadaten vor dem Teilen. Nutze bei sensiblen Inhalten neutrale Dateinamen.

- **Problem:** Nach dem Entschlüsseln bleiben temporäre Dateien zurück.  
  **Lösung:** Entschlüssele nur bei Bedarf. Lösche Arbeitskopien und prüfe temporäre Ordner sowie automatische Sicherungen.

## Nicht gelöst

- Bei kompromittiertem Gerät (Admin-Zugriff, Trojaner, Stalkerware) können Inhalte vor der Verschlüsselung abgegriffen werden.  
- Sobald der Empfänger entschlüsselt hat, kann er die Datei weiterkopieren oder weiterleiten.  
- Alte Kopien können in Backups, Synchronisation, Papierkorb, E-Mail-Postfächern oder Messenger-Medien bleiben.  
- Verschlüsselung schützt den Inhalt, aber nicht automatisch Kontext wie Dateiname, Nachrichtentext oder Freigabe-Titel.  
- Zwang und physische Angriffe (erzwungene Entsperrung, Herausgabe von Schlüsseln) werden nicht verhindert.

## FAQ

**Reicht Geräte-Vollverschlüsselung?**

Für viele Risiken ja. Für Teilen/Backups brauchst du oft zusätzlich Datei-/Container-Verschlüsselung.

**Was sind die größten Fehler?**

Schlüssel verlieren, keine Backups, falsche Recovery. Plane Schlüssel-Management zuerst.

**Ist E2EE immer E2EE?**

Kommt auf Schlüsselverwaltung und Backups an. Prüfe, was wirklich Ende-zu-Ende ist.

## Quellen

- [BSI: Kryptografie](https://www.bsi.bund.de/DE/Themen/Kryptografie/kryptografie_node.html)
- [NIST FIPS 197: Advanced Encryption Standard (AES)](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197.pdf)
- [RFC 8446: The Transport Layer Security (TLS) Protocol Version 1.3](https://www.rfc-editor.org/rfc/rfc8446)
- [RFC 4880: OpenPGP Message Format](https://www.rfc-editor.org/rfc/rfc4880)
- [OWASP Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)

## Weiter

- [Dateien sicher teilen](/dateien/sicher-teilen/)
- [PDF-Metadaten entfernen](/dateien/pdf-metadaten/)
- [EXIF-Daten entfernen](/dateien/exif-entfernen/)
- [Backup verschlüsseln](/backups/backup-verschluesseln/)
- [Passwort-Manager](/passwoerter/passwort-manager/)
