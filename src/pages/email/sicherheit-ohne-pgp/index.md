---
layout: "@/layouts/DocLayout.astro"
title: "E-Mail ohne PGP sicher machen – Schritt-für-Schritt"
url: "/email/sicherheit-ohne-pgp/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "E-Mail ohne PGP sicherer nutzen: 15-Minuten-Schnellstart, Kontoschutz, weniger Tracking, sichere Anhänge und Checks. Mit Grenzen und typischen Fehlern."
---
Viele wollen E-Mails „sicher“ nutzen, aber PGP wirkt zu aufwendig.  
Dann bleibt oft nur: hoffen, dass schon nichts passiert.

Das ist riskant. E-Mail ohne Ende-zu-Ende-Verschlüsselung ist ein häufiges Einfallstor.  
Konto-Übernahmen, Tracking in Newslettern und gefährliche Anhänge passieren im Alltag.

Ziel: Du schützt dein Konto, reduzierst Tracking und gehst mit Links/Anhängen sauber um.  
Sinnvoll, wenn du E-Mail im Alltag deutlich sicherer nutzen willst, ohne Schlüsselverwaltung.  
Grenze: Ohne Ende-zu-Ende-Verschlüsselung können Inhalte auf Mailservern grundsätzlich mitgelesen werden (z. B. durch Anbieter/Administration oder bei Serverzugriff).

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

Weg A: Du härtest dein Konto und stoppst die häufigsten Tracking- und Phishing-Fallen.  
Das ist alltagstauglich und reicht für viele Risiken.

<details><summary>Weg B (Fortgeschritten)</summary>

Du trennst Zwecke, prüfst Regeln/Weiterleitungen regelmäßig und reduzierst „Dauerzugriffe“.  
Das bringt mehr Kontrolle, kostet aber etwas Pflege im Alltag.

</details>

<details><summary>Weg C (Profi)</summary>

Du prüfst Kopfzeilen (Header) und bewertest Transportverschlüsselung selbst.  
Das ist nützlich zur Einordnung, ersetzt aber keine Ende-zu-Ende-Verschlüsselung.

</details>

Stoppsignal: Wenn du Inhalte vor deinem E-Mail-Anbieter, einer IT-Administration oder bei Beschlagnahmung schützen musst, reicht „ohne PGP“ nicht.  
Dann brauchst du Ende-zu-Ende-Verschlüsselung oder einen anderen Kanal.

Aufwand + Komfortkosten: 15–40 Minuten. Danach ist Anmelden etwas häufiger, und Bilder/Links brauchen bewusste Klicks.

## Schnellstart (15 Minuten)
1) **Konto-Zugriffe absichern**  
1. Ändere dein Passwort zu einer langen Passphrase (mindestens 4–5 Wörter).
2. Aktiviere Zwei-Faktor-Anmeldung, wenn möglich ohne SMS.
3. Lege Wiederherstellungscodes offline ab und melde unbekannte Sitzungen ab.
Du musst dich danach gelegentlich neu anmelden. Dafür wird eine Konto-Übernahme deutlich schwieriger.

2) **Externe Inhalte blockieren (gegen Tracking-Pixel)**  
4. Schalte das automatische Laden externer Bilder/Inhalte aus.
5. Lade Bilder nur bei Absendern nach, denen du vertraust.
Bezeichnung kann abweichen – nutze die Suche nach: **externe Inhalte**, **Bilder**, **Remote-Inhalte**, **Datenschutz**.  
Newsletter wirken anfangs „nackter“. Dafür fließen beim Lesen weniger Daten an Dritte.

3) **Links prüfen, bevor du klickst**  
6. Fahre mit der Maus über Links oder halte sie gedrückt, um das echte Ziel zu sehen.
7. Achte auf die echte Domain, nicht auf den sichtbaren Linktext.
8. Bei Unsicherheit: Öffne die Seite über Lesezeichen oder tippe die Adresse selbst ein.
Das kostet ein paar Sekunden pro Mail. Dafür klickst du seltener in Phishing und reduzierst ungewolltes Nachverfolgen.

4) **Aliasse für Anmeldungen und Newsletter nutzen**  
9. Nutze pro Zweck eine eigene Adresse (z. B. „Anmeldungen“, „Newsletter“, „Privat“).
10. Filtere Newsletter getrennt, statt alles in dein Hauptpostfach zu mischen.
Bezeichnung kann abweichen – nutze die Suche nach: **Alias**, **zusätzliche Adresse**, **Plus-Adresse**.  
Manche Dienste akzeptieren Plus-Adressen nicht. Dafür treffen Datenlecks nicht sofort deine Hauptadresse, und Missbrauch fällt früher auf.

5) **Alte Zugänge abschalten (Apps, IMAP/POP, App-Passwörter)**  
11. Prüfe, ob du IMAP/POP wirklich brauchst.
12. Entferne alte Mail-Apps aus der Kontozugriffsliste und lösche alte App-Passwörter.
13. Prüfe Weiterleitungen und Regeln auf Unbekanntes.
Bezeichnung kann abweichen – nutze die Suche nach: **App-Passwort**, **verbundene Apps**, **IMAP**, **POP**, **Weiterleitung**.  
Sehr alte Mailprogramme können danach nicht mehr funktionieren. Dafür verschwinden typische „Seitentüren“ für Dauerzugriff.

6) **Anhänge behandeln, als wären Postfächer auslesbar**  
14. Öffne unerwartete Anhänge nicht, und aktiviere keine Makros.
15. Verschlüssele sensible Dateien vor dem Versand und sende das Passwort getrennt.
16. Entferne unnötige Metadaten (z. B. bei Office/PDF/Fotos).
Empfänger müssen einmal zusätzlich entsperren oder entpacken. Dafür bleiben Inhalte geschützt, selbst wenn ein Postfach kompromittiert ist.

## Wege

### Weg A

1) **Definiere „sensibel“ für dich.**  
Ausweiskopien, Gesundheitsdaten, Zugangsdaten und vertrauliche Absprachen gehören fast immer dazu.  
Das reduziert Grübeln im Alltag, kann aber bedeuten, dass du öfter auf einen anderen Kanal ausweichst.

2) **Härte den Kontozugang.**  
Nutze eine Passphrase, beende Passwort-Wiederverwendung und aktiviere Zwei-Faktor-Anmeldung ohne SMS, wenn möglich.  
Du brauchst die Wiederherstellung sauber organisiert, dafür wird Konto-Übernahme deutlich unwahrscheinlicher.

3) **Räume Zugriffe und Regeln auf.**  
Prüfe Geräte/Sitzungen, verbundene Apps, Weiterleitungen und Regeln, und entferne alles Unbekannte.  
Bezeichnung kann abweichen – nutze die Suche nach: **Sitzungen**, **Geräte**, **Sicherheit**, **Zugriff**, **Regeln**, **Weiterleitung**.  
Das kostet einmal Konzentration, dafür findest du typische „Dauerzugänge“ früh.

4) **Stoppe Tracking beim Öffnen.**  
Blockiere externe Inhalte und lade Bilder nur gezielt nach.  
Das wirkt optisch strenger, dafür sendest du beim Lesen weniger Signale nach außen.

5) **Trenne Zwecke mit Aliassen.**  
Eine Adresse für Anmeldungen, eine für Newsletter, eine für Kommunikation.  
Das ist etwas mehr Ordnung, dafür erkennst du verdächtige Mails schneller.

6) **Klicke Links kontrolliert.**  
Sieh dir das Ziel an, achte auf die Domain und öffne bei Zweifel lieber über Lesezeichen.  
Das kostet Sekunden, verhindert aber viele Phishing-Fehler.

7) **Behandle Anhänge vorsichtig.**  
Öffne keine überraschenden Dokumente, verschlüssele sensible Dateien vorher und sende Passwörter getrennt.  
Das ist „ein Schritt mehr“, schützt aber Inhalte bei Postfach- oder Geräteproblemen.

<details><summary>Weg B (Fortgeschritten)</summary>

- Lege eine klare Trennung an: ein Postfach (oder Alias) für Anmeldungen, eins für Kommunikation, eins für Newsletter. Das macht Sortieren leichter, erhöht aber den Pflegeaufwand.  
- Richte Filter ein, die Newsletter und Anmeldecodes strikt trennen. Du erkennst Phishing eher, musst aber Regeln gelegentlich nachziehen.  
- Aktiviere Anmeldebenachrichtigungen, wenn verfügbar. Du bekommst mehr Warnungen, aber erkennst ungewöhnliche Zugriffe früher.  
- Prüfe monatlich Weiterleitungen, Regeln und verbundene Apps. Das kostet wenige Minuten, verhindert aber versteckte Dauerzugriffe.  
- Sperre Geräte konsequent, damit dein Mailprogramm nicht „immer offen“ ist. Das ist minimal unkomfortabel, reduziert aber Risiko bei Gerätezugriff.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.  
- Öffne bei einer empfangenen Mail die Nachrichtenquelle („Original anzeigen“) und lies die Empfangszeilen. Das ist etwas mühsam, hilft aber beim Einordnen verdächtiger Mails.  
- Achte auf Transportverschlüsselung: TLS (Transport Layer Security) ist die übliche Verschlüsselung zwischen Mailservern. Das sagt etwas über Transport aus, aber nichts über Ende-zu-Ende-Verschlüsselung.  
- Prüfe Absenderprüfungen (SPF/DKIM/DMARC) in „Authentication-Results“. Das sind Hinweise, aber keine Garantie gegen gut gemachten Betrug.  
- Verlasse dich nicht auf eine einzelne Zeile. Header sind je nach System unvollständig oder anders benannt, deshalb ist die Interpretation fehleranfällig.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob externe Bilder standardmäßig blockiert sind und du sie bewusst nachladen musst.  
- Prüfe in den Kontoeinstellungen, ob nur noch deine aktuellen Geräte/Apps Zugriff haben.  
- Wenn Anmeldewarnungen aktiv sind, erkennst du ungewöhnliche Zugriffe früher und kannst sofort reagieren.

<details><summary>Mehr Checks</summary>

- Öffne die Liste mit Regeln/Weiterleitungen und stelle sicher, dass dort nichts Unbekanntes aktiv ist.  
- Prüfe testweise einen Newsletter: Wird ohne Nachladen kein externer Inhalt geladen, ist Tracking zumindest reduziert.  
- Wenn du Aliasse nutzt: Kommt Spam nur auf einem Alias an, kannst du ihn gezielt austauschen oder strenger filtern.

</details>

## Probleme & Lösungen

- **Problem:** „Seit 2FA ist das Anmelden nervig.“  
  **Lösung:** Nutze vertrauenswürdige Geräte, sichere Wiederherstellungscodes offline und vermeide häufiges Abmelden.

- **Problem:** „Ohne Bilder sind Newsletter kaum lesbar.“  
  **Lösung:** Lade Bilder nur bei bekannten Absendern gezielt nach und lasse den Rest blockiert.

- **Problem:** „Mein altes Mailprogramm funktioniert nicht mehr.“  
  **Lösung:** Nutze ein aktuelles Mailprogramm oder aktiviere IMAP/POP nur, wenn es wirklich nötig ist.

- **Problem:** „Ich sehe nur Umleitungen bei Links und werde unsicher.“  
  **Lösung:** Zeige das Ziel an, öffne bei Zweifel über Lesezeichen oder tippe die Domain selbst ein.

- **Problem:** „Ich habe auf einen verdächtigen Link geklickt.“  
  **Lösung:** Ändere das Passwort, beende Sitzungen, prüfe Weiterleitungen/Regeln und aktiviere 2FA, falls noch nicht aktiv.

- **Problem:** „Ich muss vertrauliche Unterlagen per Mail schicken.“  
  **Lösung:** Verschlüssele die Datei vorab und sende das Passwort getrennt, nicht im selben Postfach.

- **Problem:** „Plötzlich werden Mails automatisch weitergeleitet.“  
  **Lösung:** Entferne die Weiterleitung sofort, ändere das Passwort, prüfe verbundene Apps und kontrolliere alle Regeln.

## Nicht gelöst

- Ohne Ende-zu-Ende-Verschlüsselung sind Mailinhalte nicht vor Mailanbietern oder IT-Administrationen geschützt.  
- Betreffzeilen und viele Metadaten (Absender, Empfänger, Zeitpunkte) bleiben typischerweise sichtbar.  
- Wenn Empfänger unsicher arbeiten (Weiterleitung, ungeschützte Geräte), verlierst du Kontrolle trotz guter eigener Einstellungen.  
- Ein kompromittiertes Gerät (Schadsoftware, Stalkerware) kann E-Mails mitlesen, egal wie gut dein Konto eingestellt ist.  
- Bei Zwang, physischem Zugriff oder administrativ erzwungenen Maßnahmen helfen diese Schritte nur begrenzt.

## FAQ

**Sind E-Mail-Aliases sinnvoll?**

Ja, sie reduzieren Spam/Tracking und machen Leaks weniger schlimm – besonders bei Shops/Newslettern.

**Ist PGP nötig?**

Für die meisten nicht. Wichtiger sind 2FA, sichere Providerwahl, Tracking-Schutz und saubere Reset-Wege.

**Warum laden Tracker-Pixel trotz Einstellung?**

Manche Clients/Previews laden extern. Deaktiviere Bilder, nutze Link-Tracking-Schutz und teste deine App.

## Quellen

- [BSI: Phishing erkennen und vermeiden](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheit/Informationen-und-Empfehlungen/Phishing/phishing_node.html)
- [OWASP: Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [RFC 5322: Internet Message Format](https://www.rfc-editor.org/rfc/rfc5322)
- [RFC 3207: SMTP STARTTLS](https://www.rfc-editor.org/rfc/rfc3207)
- [RFC 8461: SMTP MTA Strict Transport Security (MTA-STS)](https://www.rfc-editor.org/rfc/rfc8461)
- [RFC 4880: OpenPGP Message Format](https://www.rfc-editor.org/rfc/rfc4880)

## Weiter

- [Schnellstart: E-Mail](/email/schnellstart/)
- [Bilder in E-Mails deaktivieren](/email/bilder-deaktivieren/)
- [Tracker-Pixel in E-Mails](/email/tracker-pixel/)
- [Tracking-Links in E-Mails](/email/tracking-links/)
- [Zwei-Faktor-Schnellstart](/2fa/schnellstart/)
- [Dateien verschlüsseln](/dateien/verschluesseln/)
