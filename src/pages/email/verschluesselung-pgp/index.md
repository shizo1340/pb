---
layout: "@/layouts/DocLayout.astro"
title: "PGP-Verschlüsselung für E-Mails richtig einrichten"
url: "/email/verschluesselung-pgp/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "PGP-Verschlüsselung für E-Mails einrichten: Schlüssel erstellen, sicher austauschen und prüfen, signieren und verschlüsseln – mit Checks, Problemen und Grenzen."
---
E-Mails sind schnell verschickt.  
Und genauso schnell mitgelesen, wenn jemand Zugriff auf Postfach, Anbieter oder Übertragungsweg bekommt.

Hier richtest du OpenPGP (oft „PGP“ genannt) so ein, dass es im Alltag nicht an Kleinigkeiten scheitert.  
Am Ende kannst du Signaturen prüfen und mit einzelnen Kontakten zuverlässig verschlüsseln.

Sinnvoll, wenn du regelmäßig Vertrauliches per E-Mail austauschst.  
Grenze: Betreff und Kopfzeilen bleiben in der Regel sichtbar.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

Weg A: Signieren und gezielt mit einzelnen Kontakten verschlüsseln, ohne Spezialwissen.  
Weg B: Schlüsselpflege so aufsetzen, dass Gerätewechsel und Pannen planbar bleiben.  
Weg C: Schlüssel strikt trennen und das Risiko durch getrennte Arbeitsumgebung senken.

Stopp, wenn du keinen sicheren zweiten Kanal für den Fingerabdruck-Vergleich hast (z. B. Telefonat).  
Stopp auch, wenn dein Gerät möglicherweise kompromittiert ist. Kläre das zuerst über [Gerät kompromittiert?](/szenarien/verdacht-geraet-kompromittiert/).

Aufwand: 20–60 Minuten Start, danach etwas Pflege.  
Komfortkosten: mehr Tests, mehr Rückfragen, beide Seiten müssen mitziehen.

## Schnellstart (20 Minuten)
1) **OpenPGP im Mail-Programm aktivieren**
1. Prüfe, ob dein Mail-Programm OpenPGP eingebaut hat oder als Zusatz unterstützt.
2. Aktiviere OpenPGP für das betroffene Postfach.
3. Stelle ein, ob E-Mails standardmäßig signiert werden sollen.
Bezeichnung kann abweichen – nutze die Suche nach: OpenPGP, PGP, Schlüssel, Signatur.  
Damit kannst du später pro Kontakt sicher signieren und verschlüsseln.  
Je nach Weboberfläche ist OpenPGP eingeschränkt, und Tests mit Anhängen können scheitern.

2) **Schlüsselpaar erstellen (privat/öffentlich)**
4. Erzeuge ein neues Schlüsselpaar für diese E-Mail-Adresse.
5. Setze eine Passphrase (Passwortsatz: ein langer, merkbarer Satz statt Kurzpasswort).
6. Wähle ein Ablaufdatum, damit alte Schlüssel nicht ewig aktiv bleiben.
7. Exportiere deinen öffentlichen Schlüssel zum Teilen.
Du bekommst damit die Grundlage für Signatur und Verschlüsselung, ohne den privaten Schlüssel weiterzugeben.  
Du musst die Passphrase zuverlässig eintippen können, sonst sperrst du dich im Alltag selbst aus.

3) **Fingerabdruck sichern**
8. Lass dir den Fingerabdruck (lange Zeichenkette) deines öffentlichen Schlüssels anzeigen.
9. Speichere ihn so, dass du ihn später sicher wiederfindest (z. B. ausgedruckt oder in einer sicheren Notiz).
10. Nutze ihn später zum Abgleich, wenn jemand „deinen Schlüssel“ erhält.
Du kannst damit erkennen, ob ein Schlüssel wirklich zu dir gehört.  
Der Abgleich kostet Zeit und wirkt im Alltag unbequem, ist aber der zentrale Sicherheitscheck.

4) **Mit einer Person Schlüssel austauschen und prüfen**
11. Importiere den öffentlichen Schlüssel der anderen Person.
12. Vergleiche beide Fingerabdrücke über einen zweiten Kanal (Telefonat, persönliches Treffen).
13. Markiere den Schlüssel erst danach als vertrauenswürdig (Begriff kann je nach Programm variieren).
So stellst du sicher, dass du an den richtigen Menschen verschlüsselst, nicht nur an die richtige Adresse.  
Ohne zweiten Kanal bleibt ein Restrisiko, dass du einen untergeschobenen Schlüssel akzeptierst.

5) **Erst Signatur testen, dann Verschlüsselung aktivieren**
14. Sende eine signierte Testmail (noch ohne Verschlüsselung).
15. Lass dir bestätigen, dass die Signatur als gültig angezeigt wird.
16. Aktiviere danach Verschlüsselung für diesen Kontakt und sende eine zweite Testmail.
Du findest Einrichtungsfehler früh, bevor echte Inhalte betroffen sind.  
In den ersten Tagen wirkt das langsamer, und dein Kontakt muss Rückmeldungen geben.

## Wege

### Weg A

Du willst alltagstauglich starten und nur dort verschlüsseln, wo es wirklich zählt.

1. Wähle wenige Kontakte aus, bei denen Vertraulichkeit wichtig ist.  
2. Erstelle pro E-Mail-Adresse ein eigenes Schlüsselpaar.  
3. Nutze Signaturen als Standard, bis sie beim Gegenüber zuverlässig geprüft werden.  
4. Aktiviere Verschlüsselung nur für Kontakte, deren Schlüssel du per Fingerabdruck geprüft hast.  
5. Formuliere Betreffzeilen neutral, ohne sensible Details.  
6. Wiederhole den Fingerabdruck-Abgleich nach Gerätewechseln oder Neuinstallation.

<details><summary>Weg B (Fortgeschritten)</summary>

- Sichere deinen privaten Schlüssel verschlüsselt und getrennt vom Gerät, damit ein Geräteverlust nicht alles beendet.
- Erzeuge ein Widerrufs-Zertifikat (damit du einen Schlüssel im Notfall ungültig machen kannst) und lagere es offline.
- Plane eine Erneuerung vor Ablaufdatum, damit du nicht im ungünstigsten Moment ausfällst.
- Trenne Identitäten: privat und beruflich getrennte Adressen und getrennte Schlüssel.
- Nutze PGP/MIME, wenn möglich, weil Anhänge und Formatierung damit meist stabiler sind als bei „Inline“.
- Bei Gruppen-Mails prüfe streng, ob wirklich alle Empfänger passende Schlüssel haben.
- Autocrypt kann den Schlüsselaustausch bequemer machen, ersetzt aber keinen Fingerabdruck-Vergleich.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

- Halte einen Hauptschlüssel ohne Internetverbindung und nutze im Alltag nur Unterschlüssel für Signieren und Verschlüsseln.
- Verwende für den privaten Schlüssel eine getrennte Umgebung oder Hardware, wenn das zu deinem Umfeld passt.
- Erzwinge strikte Prüfung: keine Schlüssel „blind“ übernehmen, Fingerabdrücke immer über zweiten Kanal.
- Lege einen Notfallplan fest: Widerruf veröffentlichen, Kontakte informieren, neuen Schlüssel sauber verteilen.
- Rechne damit, dass striktere Einstellungen Kompatibilität brechen können, vor allem bei älteren Programmen und Mobilgeräten.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob dein Gegenüber eine gültige Signatur sieht und dich als Absender verifizieren kann.  
- Achte darauf, ob verschlüsselte Mails sichtbar als verschlüsselt markiert sind und ohne Umwege lesbar ankommen.  
- Achte bei Antworten darauf, ob die Verschlüsselung aktiv bleibt und nicht unbemerkt ausfällt.

<details><summary>Mehr Checks</summary>

- Prüfe Anhänge: kommen sie vollständig und lesbar an, ohne „kaputte“ Formatierung?
- Prüfe mehrere Geräte: haben alle Geräte den Schlüssel, und funktioniert die Passphrase überall?
- Prüfe Kontaktwechsel: wenn ein Schlüssel plötzlich „neu“ ist, stoppe und vergleiche Fingerabdrücke erneut.

</details>

## Probleme & Lösungen

- **Problem:** Der Schlüssel eines Kontakts ist plötzlich „neu“ oder wirkt anders.  
  **Lösung:** Stoppe, vergleiche Fingerabdruck erneut über zweiten Kanal, erst dann weiter verschlüsseln.

- **Problem:** Der Empfänger kann die Mail nicht entschlüsseln.  
  **Lösung:** Prüfe, ob du an den richtigen öffentlichen Schlüssel verschlüsselt hast und ob der Empfänger den passenden privaten Schlüssel besitzt.

- **Problem:** Signatur ist ungültig oder nicht prüfbar.  
  **Lösung:** Prüfe, ob Weiterleitungen, Filter oder Fußzeilen die Mail verändert haben, und ob der richtige öffentliche Schlüssel importiert ist.

- **Problem:** Umlaute, Formatierung oder Anhänge kommen beschädigt an.  
  **Lösung:** Stelle, wenn möglich, auf PGP/MIME um und wiederhole den Test mit Anhang.

- **Problem:** Am Handy klappt es nicht, am Rechner schon.  
  **Lösung:** Nutze am Handy nur Apps mit echter OpenPGP-Unterstützung, oder plane mobil nur Lesen und Antworten ohne Verschlüsselung ein.

- **Problem:** Verschlüsselung war an, ist aber bei Antworten aus.  
  **Lösung:** Prüfe die Kontakt-Regeln und sende erneut eine signierte Testmail, bevor du wieder verschlüsselst.

- **Problem:** Passphrase vergessen oder privater Schlüssel verloren.  
  **Lösung:** Schlüssel widerrufen, neuen Schlüssel erzeugen, Kontakte aktiv informieren und Fingerabdruck sauber neu verteilen.

## Nicht gelöst

- OpenPGP schützt den Inhalt, aber nicht Metadaten wie Betreff, Absender/Empfänger und Versandzeit.
- Wenn dein Gerät kompromittiert ist (Schadsoftware, Stalkerware, Admin-Zugriff), kann vor der Verschlüsselung mitgelesen werden.
- Unter Zwang oder bei erzwungenem Gerätezugriff hilft OpenPGP nur begrenzt, weil du zur Entsperrung gedrängt werden kannst.
- Phishing bleibt möglich: Eine verschlüsselte Mail kann trotzdem betrügerisch sein.
- Für Gruppen, häufige Gerätewechsel oder sehr hohe Verfügbarkeit ist E-Mail oft unpraktisch. Dann passt eher ein anderes Szenario, z. B. [Aktivismus & Journalismus](/szenarien/aktivismus-journalismus/).

## FAQ

**Sind E-Mail-Aliases sinnvoll?**

Ja, sie reduzieren Spam/Tracking und machen Leaks weniger schlimm – besonders bei Shops/Newslettern.

**Ist PGP nötig?**

Für die meisten nicht. Wichtiger sind 2FA, sichere Providerwahl, Tracking-Schutz und saubere Reset-Wege.

**Warum laden Tracker-Pixel trotz Einstellung?**

Manche Clients/Previews laden extern. Deaktiviere Bilder, nutze Link-Tracking-Schutz und teste deine App.

## Quellen

- [BSI: E-Mail-Verschlüsselung in der Praxis](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Onlinekommunikation/Verschluesselt-kommunizieren/E-Mail-Verschluesselung/E-Mail-Verschluesselung-in-der-Praxis/e-mail-verschluesselung-in-der-praxis.html)
- [BSI: Nutzung von OpenPGP in Webanwendungen (PDF)](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/Studien/OpenPGP/openpgpwebanwendungen.pdf?__blob=publicationFile&v=1)
- [RFC 4880: OpenPGP Message Format](https://www.rfc-editor.org/rfc/rfc4880.html)
- [RFC 3156: MIME Security with OpenPGP](https://www.rfc-editor.org/rfc/rfc3156.html)
- [Autocrypt: Dokumentation](https://docs.autocrypt.org/)

## Weiter

- [E-Mail-Sicherheit ohne PGP](/email/sicherheit-ohne-pgp/)
- [Tracker-Pixel in E-Mails](/email/tracker-pixel/)
- [E-Mail-Header verstehen](/email/header/)
- [Passwort-Manager](/passwoerter/passwort-manager/)
- [Schlüssel-Management](/verschluesselung/schluessel-management/)
