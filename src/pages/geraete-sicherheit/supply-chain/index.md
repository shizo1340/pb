---
layout: "@/layouts/DocLayout.astro"
title: "Supply-Chain-Risiken senken bei Geräten und Software"
url: "/geraete-sicherheit/supply-chain/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Supply-Chain-Risiken reduzieren: Bezugsquellen prüfen, Updates absichern, Warnzeichen erkennen. Mit praxisnahem Schnellstart, drei Wegen und klaren Grenzen."
---
Du kaufst ein Gerät oder installierst Software – und merkst erst später: Irgendwo auf dem Weg kann etwas manipuliert worden sein. Das ist riskant, weil du es oft nicht sofort siehst.

Ziel ist, typische Lieferketten-Risiken so zu senken, dass Manipulationen eher auffallen oder weniger Wirkung haben. „Supply Chain“ meint hier die Lieferkette: Herstellung, Versand, Verkauf, Download und Update-Kanal.

Sinnvoll, wenn du neue Geräte einrichtest, Gebrauchtgeräte übernimmst oder Software aus dem Netz installierst.  
Grenze: Gegen absichtlich bösartige Hersteller oder bereits kompromittierte Geräte gibt es keinen Schalter, der alles löst.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

- Weg A: Du nutzt saubere Bezugsquellen, Updates und Warnzeichen konsequent.  
- Weg B: Du baust einfache Nachweise auf (Liste, Herkunft, Signaturen) für Wichtiges.  
- Weg C: Du prüfst Integrität gezielt (Prüfsummen/Signaturen, sicherer Start) – mit mehr Aufwand.

Stoppsignal ist: Wenn du Herkunft oder Update-Versorgung nicht klären kannst, nutze das Gerät/Programm nicht weiter (oder gib es zurück), bis du Klarheit hast.  
Aufwand und Komfortkosten liegen meist bei 15–45 Minuten am Anfang, danach ein paar Minuten pro Monat – dafür installierst du langsamer und klickst Warnungen seltener „weg“.

## Schnellstart (20 Minuten)
1) Bezugsquelle und Zustand prüfen (Gerät/Hardware)  
1. Kaufe möglichst über nachvollziehbare Bezugsquellen mit Rechnung und klarer Rückgabe.
2. Prüfe bei Lieferung: Verpackung unversehrt, Siegel/Schrauben/Anschlüsse wirken nicht „nachträglich“.
3. Bei Gebrauchtkauf: Übergabe mit Zeit zum Prüfen, nicht „aus dem Kofferraum“.
Das macht spontane Schnäppchen manchmal unattraktiver. Dafür sinkt das Risiko von Fälschungen und „vorbereiteten“ Geräten.

2) Updates sofort einspielen und Automatik aktivieren  
4. Starte nach der Einrichtung direkt die Systemaktualisierung.
5. Aktualisiere danach auch wichtige Apps/Programme.
6. Aktiviere automatische Updates, sofern verfügbar.
Bezeichnung kann abweichen – nutze die Suche nach: Updates, Aktualisierung, Systemupdate.  
Nach Updates kann sich Optik oder Verhalten ändern, selten laufen alte Programme schlechter. Dafür schließt du typische Schwachstellen, die Lieferketten-Angriffe gerne ausnutzen.

3) Software nur aus nachvollziehbaren Quellen installieren  
7. Nutze bevorzugt die offiziellen Paketquellen deines Systems (Store/Paketverwaltung).
8. Meide Download-Portale, die Installer umbauen (Zusatzprogramme, Werbe-Installer).
9. Wenn du eine Datei laden musst: direkt vom Hersteller oder Projekt.
Das ist manchmal umständlicher, weil Drittseiten „bequemer“ wirken oder alte Versionen anbieten. Dafür reduzierst du Manipulationen beim Verteilen deutlich.

4) Sicherheitswarnungen beim Installieren ernst nehmen  
10. Wenn dein System warnt: lies, was genau fehlt (z. B. unbekannter Herausgeber, Datei verändert).
11. Brich ab, wenn der Herausgeber nicht plausibel ist oder die Datei „anders“ wirkt als sonst.
12. Suche die offizielle Bezugsquelle erneut, statt die Warnung zu übergehen.
Das kostet manchmal ein paar Minuten mehr. Dafür fängst du viele Manipulationen ab, bevor sie überhaupt starten.

5) Vorinstallierte Zusatzsoftware ausmisten und Rechte prüfen  
13. Entferne Apps/Programme, die du nicht brauchst (vor allem „Cleaner“, „Tools“, „Updater“).
14. Prüfe Berechtigungen wichtiger Apps (z. B. Standort, Kontakte, Hintergrundzugriff).
15. Wenn du unsicher bist: erst deaktivieren oder entziehen, dann beobachten.
Manche Hersteller-Funktionen hängen an vorinstallierten Apps, du musst ggf. etwas wieder aktivieren. Dafür sinken Angriffsfläche und versteckte Datenflüsse.

## Wege

### Weg A

1) Lege fest, was für dich „kritisch“ ist: Banking-Gerät, Passwort-Manager, Haupt-E-Mail, Router, Arbeitsgerät.  
2) Für kritische Hardware: Rechnung/Bestellbestätigung aufheben und Gerätename/Seriennummer notieren.  
3) Richte neue Geräte ein und installiere Updates, bevor du viele Konten verknüpfst.  
4) Installiere Software bevorzugt aus offiziellen Paketquellen (Store/Paketverwaltung) statt von Drittseiten.  
5) Wenn du Installationsdateien nutzt: nur direkt vom Hersteller/Projekt laden und Warnungen nicht übergehen.  
6) Entferne unnötige Vorinstallationen und entziehe unnötige Berechtigungen.  
7) Prüfe regelmäßig, welche Geräte bei Konten angemeldet sind und beende unbekannte Sitzungen.  
8) Halte Firmware aktuell, wo es realistisch ist (z. B. Router). Siehe: [Firmware](/geraete-sicherheit/firmware/) und [Warum Updates wichtig sind](/updates/warum-wichtig/).

<details><summary>Weg B (Fortgeschritten)</summary>

- Lege eine kurze Liste deiner kritischen Geräte und Programme an (Name, Bezugsquelle, Datum, aktuelle Version). Das kostet etwas Disziplin, spart dir später Zeit bei Auffälligkeiten.  
- Prüfe bei wichtigen Installationsdateien, ob der Hersteller eine digitale Signatur anbietet. Eine digitale Signatur ist ein kryptografischer Nachweis, wer die Datei signiert hat. Das erfordert einmaliges Einlesen, macht Manipulationen oft sichtbar.  
- Wenn ein Projekt Prüfsummen veröffentlicht: vergleiche sie vor der Installation. Eine Prüfsumme ist der „Fingerabdruck“ einer Datei; kleine Änderungen ergeben einen anderen Wert. Das ist ein Extra-Schritt, verhindert aber Installationen aus manipulierten Downloads.  
- Abonniere Sicherheitsmeldungen für die wichtigsten Komponenten (Betriebssystem, Router-Hersteller, Passwort-Manager). Das erzeugt mehr E-Mails, aber du bekommst Warnungen früher mit.  
- Setze einen festen Rhythmus: einmal pro Monat Updates/Versionen prüfen und die Liste aktualisieren. Das kostet wenige Minuten, verhindert „vergessene“ Geräte ohne Updates.  

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

- Verifiziere Signaturen oder Prüfsummen mit Systemwerkzeugen, bevor du kritische Software installierst. Das ist fehleranfälliger am Anfang, gibt dir aber eine klare Integritätsprüfung.  
- Nutze nur signierte Paketquellen und deaktiviere zusätzliche, unbekannte Quellen konsequent. Das kann die Auswahl einschränken, reduziert aber den „Wildwuchs“ an Vertrauensankern.  
- Lass Sicherheitsfunktionen wie „sicherer Start“/„Verified Boot“ aktiviert, statt sie für Bastelarbeiten auszuschalten. Das kann Tuning erschweren, hilft aber gegen Manipulationen beim Systemstart. Siehe: [Sicherer Start](/geraete-sicherheit/sicherer-start/).  
- Trenne Testen und Produktiv: Unbekanntes zuerst in einem separaten Profil oder Benutzerkonto ausprobieren. Das ist weniger bequem, begrenzt aber Schäden, wenn etwas schiefgeht. Siehe: [Sperrbildschirm](/geraete-sicherheit/sperrbildschirm/) für den sauberen Grundschutz.  
- Dokumentiere Ausnahmen bewusst (welche Quelle, warum nötig, wann wieder entfernen). Das wirkt bürokratisch, verhindert aber dauerhafte „Schattenquellen“.  

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob Warnungen beim Installieren seltener werden, weil du konsequent aus sauberen Quellen installierst.  
- Achte darauf, ob kritische Geräte und Programme regelmäßig Updates bekommen und nicht „stehen bleiben“.  
- Wenn dir ein Update-Hinweis ungewöhnlich vorkommt: brich ab, lösche den Download und lade neu aus der offiziellen Quelle.

<details><summary>Mehr Prüfungen</summary>

- Prüfe stichprobenartig Versionsnummern nach Updates (passt das Datum, passt die Reihenfolge?).  
- Wenn ein Hersteller Prüfsummen oder Signaturen anbietet: vergleiche bei großen Updates wenigstens einmal, wie das bei dir aussieht.  
- Wenn du Geräte für Familie verwaltest: notiere pro Gerät kurz Herkunft und letztes Update, damit Ausreißer auffallen.  

</details>

## Probleme & Lösungen

- **Problem:** Ein Gerät bekommt keine Updates mehr.  
  **Lösung:** Prüfe den Support-Status; wenn Ende erreicht ist, ersetze es oder nutze es nur für Unkritisches.

- **Problem:** Eine Installationsdatei warnt „unbekannter Herausgeber“ oder wirkt anders als sonst.  
  **Lösung:** Abbrechen, Datei löschen, direkt von der offiziellen Quelle neu laden; im Zweifel eine Alternative wählen.

- **Problem:** Vorinstallierte Apps lassen sich nicht entfernen.  
  **Lösung:** Deaktivieren (falls möglich), Berechtigungen entziehen, Hintergrundzugriff begrenzen und beobachten, ob etwas fehlt.

- **Problem:** Updates kommen nur über Dritt-Tools oder separate „Updater“-Programme.  
  **Lösung:** Solche Updater deinstallieren und die eingebauten Update-Mechanismen des Systems nutzen.

- **Problem:** Nach einem Update funktioniert etwas Wichtiges nicht mehr.  
  **Lösung:** Versionsnummer notieren, nach bekannten Problemen suchen und – falls möglich – zurückrollen oder auf ein Fehlerbehebungs-Update warten.

- **Problem:** Du musst Software aus einer Zusatzquelle installieren (Arbeit, Spezial-Tools).  
  **Lösung:** Nutze ein separates Profil/Benutzerkonto, dokumentiere die Ausnahme und plane Updates fest ein.

## Nicht gelöst

- Lieferketten-Schutz verhindert nicht, dass ein Hersteller absichtlich bösartige Software ausliefert.  
- Wenn ein Gerät bereits kompromittiert ist (Admin-Zugriff, Stalkerware), helfen saubere Quellen nur begrenzt. Dann brauchst du ein eigenes Vorgehen: [Überwachung erkennen](/geraete-sicherheit/ueberwachung-erkennen/) und [Verdacht: Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/).  
- Gegen Manipulationen auf Hardware-Ebene (z. B. versteckte Zusatzchips) hast du als Privatperson kaum prüfbare Mittel.  
- Updates schützen nicht, wenn Warnungen regelmäßig übergangen werden oder du unsichere Installationswege nutzt.  
- Unter Zwang oder mit Zugriff durch andere Personen (z. B. in der Familie) kann „saubere Einrichtung“ nachträglich wieder ausgehebelt werden.

## FAQ

**Was ist der größte Hebel?**

Updates + Gerätesperre + Vollverschlüsselung. Danach kommen App-Rechte und sichere Backups.

**Hilft Biometrie immer?**

Sie ist bequem, aber nicht immer „stärker“ als ein guter Code. Nutze einen starken Sperrcode als Basis.

**Wie erkenne ich Manipulation?**

Auffällige Akku-/Datenlast, neue Admin-Profile, unbekannte Apps/MDM – dann gezielt prüfen.

## Quellen

- [BSI: Grundlagen des Cyber-Supply Chain Risk Management (C-SCRM)](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/Broschueren/Management_Blitzlicht/Management_Blitzlicht_C-SCRM.html)  
- [NIST SP 800-161 Rev. 1: Cybersecurity Supply Chain Risk Management Practices](https://csrc.nist.gov/pubs/sp/800/161/r1/final)  
- [ENISA: Good Practices for Supply Chain Cybersecurity](https://www.enisa.europa.eu/publications/good-practices-for-supply-chain-cybersecurity)  
- [OWASP: Software Supply Chain Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html)  
- [SLSA: About SLSA (v1.1)](https://slsa.de/v/spec/v1.1/about)  
- [BSI: SBOM-Anforderungen (TR-03183-2)](https://www.bsi.bund.de/DE/Service-Navi/Presse/Alle-Meldungen-News/Meldungen/TR-03183-2-SBOM-Anforderungen.html)

## Weiter

- [Schnellstart Geräte-Sicherheit](/geraete-sicherheit/schnellstart/)  
- [Sicherer Start](/geraete-sicherheit/sicherer-start/)  
- [Firmware](/geraete-sicherheit/firmware/)  
- [Automatische Updates](/updates/automatische-updates/)  
- [Download-Schutz im Browser](/browser/download-schutz/)  
- [Verdacht: Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/)
