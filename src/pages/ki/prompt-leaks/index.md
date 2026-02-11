---
layout: "@/layouts/DocLayout.astro"
title: "Prompt-Leaks vermeiden: Regeln gegen Datenfallen im Alltag"
url: "/ki/prompt-leaks/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-02-09"
robots: "index,follow"
description: "Prompt-Leaks vermeiden: Checkliste gegen Datenfallen bei KI-Tools. Du lernst Platzhalter, Screenshot-Regeln und Sofortschritte, damit keine Geheimnisse im Prompt landen."
---
Ein Prompt wird schnell wie ein Notizzettel benutzt. Genau dann rutschen Zugangsdaten, Kundendaten oder Bild-Details mit rein. Das ist unnötig riskant.

Nach dieser Seite hast du eine kurze Routine. Sie fängt die häufigsten Datenfallen ab, bevor du etwas absendest.

Sinnvoll, wenn du KI-Tools privat oder im Job nutzt und oft copy/paste machst.  
Grenze: Was du bereits hochgeladen hast, ist meist nicht zuverlässig „rückgängig“.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

Weg A: Du nutzt eine 10-Sekunden-Prüfung direkt im Prompt und vermeidest die Klassiker.  
Weg B: Du baust dir Vorlagen und ein kleines „Vor-dem-Senden“-System.  
Weg C: Du maskierst Daten lokal und arbeitest mit getrennten, sicheren Arbeitsumgebungen.

Stoppsignal: Wenn du zögerst, ob etwas vertraulich ist, sende es nicht. Anonymisiere erst oder bleib lokal.

Aufwand und Komfortkosten:
- Weg A: 2–5 Minuten pro Prompt, kaum Komfortverlust.
- Weg B: 15 Minuten Setup, dafür weniger Fehler im Alltag. Mehr Disziplin.
- Weg C: 30–90 Minuten Setup, dafür stark reduziert. Mehr Technik, mehr Reibung.

## Schnellstart (2 Minuten)

1) **Geheimnisse entfernen**  
Öffne deinen Prompt und suche nach Passwort-Wörtern, Tokens, Keys, Recovery-Codes oder „BEGIN … KEY“. Ersetze alles durch `<GEHEIMNIS>`. Das senkt das Risiko von Kontoübernahmen, kostet aber ein paar Sekunden extra.

2) **Identifikatoren ersetzen**  
Ersetze Namen, E-Mails, Telefonnummern, Adressen, Kundennummern und IBANs durch Platzhalter wie `Kunde_A` oder `<IBAN>`. Das reduziert Personenbezug, kann Antworten aber etwas ungenauer machen.

3) **Screenshots hart zuschneiden**  
Schneide den Screenshot so, dass nur der relevante Bereich bleibt. Prüfe vor dem Upload: keine Tabs, keine Benachrichtigungen, keine Taskleiste. Du verrätst weniger Kontext, musst aber manchmal etwas mehr erklären.

4) **Dateien „sauber“ exportieren**  
Wenn du Inhalte teilst: kopiere nur den nötigen Text in ein neues Dokument oder exportiere eine bereinigte Version. Das verhindert versteckte Metadaten, kann aber Formatierung kosten.

5) **Kontexte trennen**  
Nutze getrennte Profile oder Konten für Arbeit und Privat. Schließe den falschen Kontext konsequent. Das verhindert Vermischung, bedeutet aber mehr Anmeldungen.

## Wege

### Weg A

Mach vor jedem Absenden einen kurzen Scan. Das ist der Hebel mit dem besten Verhältnis aus Nutzen und Aufwand.

- Lies den Prompt einmal von oben nach unten. Achte auf: Namen, Nummern, Dateinamen, interne Links, Vertragswörter. Das fängt die meisten Leaks ab, kann aber nerven, wenn du unter Zeitdruck bist.
- Verwende Platzhalter konsequent und führe eine Zuordnungsliste nur lokal. So bleibt der Prompt „clean“, aber du musst die Liste sauber pflegen.
- Teile lieber Text als Screenshots. Text ist leichter zu kontrollieren, dafür musst du manchmal Kontext manuell ergänzen.

<details><summary>Weg B (Fortgeschritten)</summary>

Baue dir eine kleine Routine, die auch an schlechten Tagen funktioniert.

- Lege dir eine Prompt-Vorlage an, die immer oben steht: Zweck, gewünschtes Format, Platzhalter-Regeln. Das erhöht die Qualität, aber es fühlt sich anfangs „bürokratisch“ an.
- Nutze eine Zwischenablage-Hygiene: füge Text erst in einen einfachen Texteditor ein, prüfe, dann erst ins KI-Tool. Das entfernt Copy/Paste-Reste, kostet aber einen Extra-Schritt.
- Schalte in KI-Tools, wenn möglich, Verlaufs-/Speicher-/Training-Optionen ab. Das reduziert spätere Nebenverwendung, kann aber Komfortfunktionen wie Verlaufssuche einschränken.  
Bezeichnung kann abweichen – nutze die Suche nach: Verlauf, Training, Datenkontrolle.
- Wenn etwas schon raus ist: widerrufe betroffene Schlüssel, ändere Passwörter und melde aktive Sitzungen ab. Das begrenzt Schaden, kann aber kurzfristig Dienste unterbrechen. Hilfreich sind [Sitzungen & Geräte prüfen](/konto/sitzungen-geraete/) und [Passwort-Manager](/passwoerter/passwort-manager/).

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

Reduziere das Risiko vor dem KI-Tool, indem du Daten lokal maskierst.

- Arbeite mit einem lokalen „Redaktionsschritt“: Ersetze Identifikatoren per Suchmuster (z. B. E-Mail-Formate, IBAN-Muster) durch Platzhalter. Das ist sehr wirksam, kann aber echte Fehler einbauen, wenn Muster zu breit sind.
- Nutze getrennte Arbeitsumgebungen für sensible Projekte (eigener Nutzer, eigenes Browserprofil, eigener Ablage-Ordner). Das senkt Vermischung, erhöht aber die Komplexität.
- Ziehe On-Device in Betracht. On-Device heißt: Verarbeitung auf deinem Gerät statt in der Cloud. Das kann Datenabfluss senken, kostet aber oft Leistung und Komfort. Mehr dazu in [On-Device vs. Cloud](/ki/on-device-vs-cloud/).
- Für Teams: Definiere klare Regeln, welche Datenkategorien nie in KI-Tools gehören, und setze Freigaben verbindlich. Das verhindert Einzel-Fehler, kann aber Workflows verlangsamen.

</details>

## So merkst du, dass es wirkt

Achte darauf, ob du in deinen letzten 10 Prompts keine echten Namen, Nummern oder Zugangsdaten mehr findest.  
Achte darauf, ob du Screenshots nur noch als Ausschnitt hochlädst und beim Öffnen nichts „zusätzlich“ sichtbar ist.  
Achte darauf, ob du Arbeit und Privat nicht mehr im selben Verlauf vermischst.

<details><summary>Weitere Checks</summary>

Achte darauf, ob du sensible Inhalte nur noch als Platzhalter teilst und die Zuordnungsliste lokal bleibt.  
Achte darauf, ob du nach einem Fehler wirklich Schlüssel/Passwörter drehst, statt nur „zu hoffen“.

</details>

## Probleme & Lösungen

**Problem:** Nach dem Anonymisieren werden Antworten schlechter.  
**Lösung:** Nutze eine Platzhalter-Legende und beschreibe Rollen, nicht Namen.

**Problem:** Du musst „kurz“ einen echten Token testen.  
**Lösung:** Nutze Dummy-Werte oder teste lokal, nie im KI-Tool.

**Problem:** Im Screenshot sind trotzdem Tabs oder Benachrichtigungen.  
**Lösung:** Vollbild nutzen, Benachrichtigungen pausieren, Bild vor Upload öffnen und prüfen.

**Problem:** Copy/Paste bringt versteckte Inhalte mit (Fußzeilen, Kommentare).  
**Lösung:** Erst in einen reinen Texteditor einfügen, dann bereinigt weiterverwenden.

**Problem:** Du hast ein Dokument hochgeladen, das Metadaten enthält.  
**Lösung:** Inhalte neu exportieren und Metadaten entfernen, z. B. mit [PDF-Metadaten entfernen](/dateien/pdf-metadaten/).

**Problem:** Du hast etwas Sensibles bereits geteilt und bekommst Panik.  
**Lösung:** Erst Zugänge drehen, dann Sichtbarkeit prüfen, dann Betroffene informieren. Starte mit [Sitzungen & Geräte prüfen](/konto/sitzungen-geraete/).

## Nicht gelöst

- Wenn dein Gerät kompromittiert ist (Stalkerware, Malware, Admin-Zugriff), kann alles mitgelesen werden.
- Wenn ein Anbieter Inhalte in Logs/Backups hält, ist „Löschen“ oft nur begrenzt kontrollierbar.
- Rechtliche Pflichten und Vertragsgrenzen löst du nicht durch Prompt-Hygiene, sondern durch Prozesse.
- Zwangssituationen oder Überwachung im Umfeld hebeln Regeln aus.
- Ein menschlicher Fehler bleibt möglich, auch mit Checkliste.

## FAQ

**Was ist das Hauptproblem bei KI-Tools?**

Datenabfluss: Eingaben können gespeichert/ausgewertet werden. Nutze Minimierung und klare Regeln.

**Kann ich KI sicher nutzen?**

Mit sensiblen Daten vorsichtig. Nutze lokale/vertrauenswürdige Optionen und teile nur, was nötig ist.

**Was ist mit Unternehmens-KI?**

Oft gibt es Verträge/Policies, aber du brauchst klare Prozesse und Limits.

## Quellen

- [OWASP – LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [OWASP Cheat Sheet Series – Secrets Management](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)
- [NIST – AI Risk Management Framework (AI RMF)](https://www.nist.gov/itl/ai-risk-management-framework)
- [EU DSGVO (EUR-Lex)](https://eur-lex.europa.eu/eli/reg/2016/679/oj)

## Weiter

- [Was wird gespeichert?](/ki/was-wird-gespeichert/)
- [KI im Job / Firmendaten](/ki/firmendaten/)
- [On-Device vs. Cloud](/ki/on-device-vs-cloud/)
- [PDF-Metadaten entfernen](/dateien/pdf-metadaten/)
- [Sitzungen & Geräte prüfen](/konto/sitzungen-geraete/)
- [Passwort-Manager](/passwoerter/passwort-manager/)
