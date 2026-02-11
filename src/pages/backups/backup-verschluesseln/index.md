---
layout: "@/layouts/DocLayout.astro"
title: "Backups verschlüsseln: Festplatte, NAS und Cloud absichern"
url: "/backups/backup-verschluesseln/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Backups verschlüsseln: So sicherst du Festplatte, NAS und Cloud, ohne dich auszusperren – mit Schritten, Checks, Lösungen und Grenzen für den Notfall."
---
Dein Backup liegt auf einer externen Festplatte, einem NAS oder in der Cloud.  
Bei Verlust, Diebstahl oder falscher Freigabe sind die Daten sonst sofort lesbar.

Ziel ist ein Backup, das im Notfall wirklich wiederherstellbar ist.  
Und das ohne Schlüssel für andere wertlos bleibt.

Sinnvoll, wenn du Backups außerhalb deines Geräts speicherst oder synchronisierst.  
Grenze: Wenn du den Schlüssel verlierst, kann das Backup unbrauchbar werden.
  
Stand: 2026-01-27.

**Kurzfazit**
- Verschlüssele konsequent an einer Stelle und dokumentiere den Rettungsweg.
- Teste einen Restore, bevor du dich auf das Backup verlässt.

## Ziel

Weg A: Backup-Ziel verschlüsseln und den Schlüssel sauber sichern.  
Weg B: Zugriff, Konten und Schlüssel strenger trennen.  
Weg C: Profi-Variante mit maximaler Kontrolle, aber mehr Bruchrisiko.

Stoppsignal: Wenn du keinen sicheren Ort für Passphrase oder Wiederherstellung hast, verschiebe die Verschlüsselung.  
Aufwand + Komfortkosten: Einrichtung meist 15–45 Minuten. Entsperren und Tests kosten regelmäßig ein paar Minuten.

## Schnellstart (20 Minuten) – 6 Maßnahmen

1) **Entscheide, wo du verschlüsselst**  
- Datenträger verschlüsseln (einfach im Alltag).  
- Backup-Datei vor dem Speichern verschlüsseln (gut für Cloud).  
- Notiere einen Satz: „Was ist verschlüsselt und womit öffne ich es?“  
Das kann den ersten Lauf verlangsamen. Dafür ist ein verlorenes Backup ohne Schlüssel nicht lesbar.

2) **Passphrase festlegen, die du sicher eintippen kannst**  
- Nutze mehrere Wörter, nicht ein kurzes Passwort.  
- Vermeide Namen, Orte und Wiederholungen.  
- Lege fest, wer im Notfall helfen darf.  
Das Tippen nervt manchmal. Dafür sinkt das Risiko, dass jemand es errät oder du es vergisst.

3) **Rettungsweg einrichten und getrennt aufbewahren**  
- Wenn angeboten: erstelle einen „Recovery Key“ (Wiederherstellungsschlüssel).  
- Bewahre die Passphrase im Passwort-Manager auf.  
- Lege zusätzlich eine Offline-Kopie an, getrennt vom Backup (z. B. versiegelt).  
Bezeichnung kann abweichen – nutze die Suche nach: „Wiederherstellungsschlüssel“.  
Wer den Rettungsweg hat, kann öffnen. Dafür sperrst du dich bei Geräteausfall nicht aus.

4) **Verschlüsselung aktivieren, bevor du dich darauf verlässt**  
- Aktiviere die Verschlüsselung am Ziel und starte erst dann das Backup.  
- Bei alten Klartext-Backups: neues, verschlüsseltes Ziel anlegen und komplett neu sichern.  
- Trenne während des ersten Laufs nichts.  
Das dauert je nach Datenmenge lange. Dafür vermeidest du halbe Sicherungen, die später nicht zu öffnen sind.

5) **Alltagszugriff reduzieren (physisch und per Freigabe)**  
- Externe Platte nur zum Sichern anschließen, danach trennen.  
- NAS: Gastzugänge aus, Zugriff auf wenige Konten begrenzen.  
- Cloud: Freigaben und Links prüfen und konsequent aufräumen.  
Zu strenge Rechte können Backups stoppen. Dafür sinkt das Risiko durch Malware, Fehlklicks und falsche Freigaben.

6) **Restore-Test machen und den Ablauf festhalten**  
- Stelle 1–3 Dateien in einen Testordner wieder her.  
- Teste das Öffnen auch auf einem zweiten Gerät oder Profil.  
- Notiere den Ablauf in 2–3 Sätzen, verständlich unter Stress.  
Ein Test fühlt sich unnötig an. Dafür ist es der einzige Beweis, dass es im Ernstfall klappt.

## Wege

### Weg A

- **Datenträger-Verschlüsselung nutzen** (Platte oder NAS-Volume).  
  Das ist bequem, weil „alles“ geschützt ist. Dafür ist ein entsperrtes Laufwerk im Betrieb wieder angreifbar.

- **Cloud: vor dem Upload verschlüsseln** (Datei- oder Container-Verschlüsselung).  
  Das schützt auch bei Fehlfreigaben. Dafür sind Vorschau und Teilen oft umständlicher.

- **Schlüssel-Ordnung erzwingen**: Passphrase + Wiederherstellung getrennt, zwei Orte.  
  Das braucht Disziplin. Dafür vermeidest du „Backup und Schlüssel in derselben Tasche“.

- **Altlasten entfernen**: alte Klartext-Backups löschen, nachdem das neue getestet ist.  
  Das kostet Zeit und Nerven. Dafür bleiben keine vergessenen Kopien übrig.

<details><summary>Weg B (Fortgeschritten)</summary>

- **Konten trennen**: ein Konto nur fürs Backup-Ziel, eins für den Alltag.  
  Das macht Verwaltung komplexer. Dafür reduziert es Schaden bei Konto-Missbrauch.

- **Entsperren begrenzen**: nur auf einem dedizierten Gerät oder Profil entschlüsseln.  
  Das verlangsamt Hilfe im Notfall. Dafür sinkt das Risiko durch Alltags-Malware.

- **Zusätzliche Offline-Option**: zweite Kopie des Rettungswegs offline lagern.  
  Das ist Pflegeaufwand. Dafür hilft es bei Verlust des Passwort-Managers oder Geräts.

- **Versionen planen**: mindestens zwei Generationen behalten.  
  Das kostet Speicher. Dafür kannst du Fehler und Verschlüsselungstrojaner eher überleben.

</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.

- **Schlüssel strikt vom Backup trennen**: nie auf dem Backup-Speicher ablegen.  
  Das erhöht die Komplexität. Dafür hilft es bei Diebstahl des Speichers.

- **Schlüsselwechsel planen**: nach Gerätewechsel oder nach Teilen neu setzen.  
  Das erschwert Wiederherstellung. Dafür reduziert es Langzeitrisiken.

- **Mehrere Standorte**: mindestens eine Kopie physisch getrennt lagern.  
  Das kostet Geld und Zeit. Dafür überlebt dein Backup eher Brand, Diebstahl und Ausfall.

- **Schreibschutz für eine Kopie prüfen** (wenn deine Umgebung das unterstützt).  
  Das kann Prozesse brechen. Dafür wird Ransomware weniger gefährlich.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob du ohne Entsperren nicht an Backup-Daten kommst.  
- Achte darauf, ob ein Restore erst nach Entsperren möglich ist.  
- Achte darauf, ob nach dem Aufräumen keine Freigaben mehr aktiv sind.

<details><summary>Mehr Prüfungen</summary>

- Prüfe in Laufwerksinfos oder Backup-App, ob „verschlüsselt“ angezeigt wird.  
Bezeichnung kann abweichen – nutze die Suche nach: „Verschlüsselung“.  
- Simuliere den Notfall: Kannst du mit der Offline-Kopie wirklich öffnen?

</details>

## Probleme & Lösungen

- **Problem:** Passphrase vergessen.  
  **Lösung:** Nutze den Wiederherstellungsschlüssel. Ohne Rettungsweg ist das Backup oft verloren.

- **Problem:** Erster Lauf dauert ewig.  
  **Lösung:** Gerät am Strom lassen und über Nacht laufen lassen. Große Datenmengen sind normal.

- **Problem:** Backups laufen nicht mehr automatisch, weil das Laufwerk gesperrt ist.  
  **Lösung:** Fester Entsperr-Zeitpunkt und danach prüfen, ob neue Sicherungen entstanden sind.

- **Problem:** Backup-Programm kann nicht verschlüsseln.  
  **Lösung:** Verschlüssele den Datenträger oder verschlüssele die Backup-Dateien vor dem Speichern.

- **Problem:** Cloud-Anbieter wirbt mit „Verschlüsselung“, aber du willst eigene Kontrolle.  
  **Lösung:** Vor dem Upload verschlüsseln und Restore-Test machen, inklusive Schlüsselweg.

- **Problem:** NAS-Freigaben sind unübersichtlich geworden.  
  **Lösung:** Gast aus, nur nötige Konten, und Freigaben regelmäßig durchgehen.

- **Problem:** Du musst Backups mit Familie oder Team teilen.  
  **Lösung:** Teile nicht die Haupt-Passphrase. Nutze getrennte Backups oder getrennte Schlüssel pro Zweck.

## Nicht gelöst

- Wenn dein Gerät kompromittiert ist (Admin-Zugriff, Schadprogramm, Stalkerware), können Daten vor dem Backup abgegriffen oder Backups sabotiert werden.  
- Ein entsperrtes, angeschlossenes Backup-Laufwerk ist so angreifbar wie dein System.  
- Verschlüsselung verhindert nicht, dass du das Falsche sicherst (falscher Ordner, falsches Profil, leere Pfade).  
- Ohne Versionen und mehrere Kopien können Fehler und Verschlüsselungstrojaner Backups trotzdem ruinieren.  
- Bei Zwang oder Zugriff unter Druck kann erzwungenes Entsperren technisch oft nicht verhindert werden.

## Quellen

- [BSI: Datenverschlüsselung](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Daten-sichern-verschluesseln-und-loeschen/Datenverschluesselung/datenverschluesselung_node.html)
- [Schützen des Time Machine-Backup-Volumes auf dem Mac](https://support.apple.com/de-de/guide/mac-help/mh21241/mac)
- [BitLocker-Laufwerkverschlüsselung](https://support.microsoft.com/de-de/windows/bitlocker-laufwerkverschl%C3%BCsselung-76b92ac9-1040-48d6-9f5f-d14b3c5fa178)
- [NIST SP 800-209: Security Guidelines for Storage Infrastructure (PDF)](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-209.pdf)

## Weiter

- [Backups](/backups/)
- [Backups Schnellstart](/backups/schnellstart/)
- [Backup testen](/backups/backup-testen/)
- [Backup-Bedrohungen](/backups/bedrohungen/)
- [Backups verschlüsseln](/verschluesselung/backup-verschluesseln/)
- [Passwort-Manager](/passwoerter/passwort-manager/)
