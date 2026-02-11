---
layout: "@/layouts/DocLayout.astro"
title: "Telemetrie reduzieren: Diagnosedaten kontrollieren"
url: "/tracking/telemetrie/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Erklärt Telemetrie (Nutzungs- und Diagnosedaten) und zeigt alltagstaugliche Schritte, um Datensammlung zu reduzieren – mit Checks, Grenzen und Quellen."
---
Telemetrie nervt, weil Geräte und Apps im Hintergrund Nutzungs- und Diagnosedaten senden.  
Das fühlt sich schnell nach „mitlaufen lassen“ an und kann Profile über dich stabiler machen.

Riskant wird es, wenn Daten aus verschiedenen Quellen zusammenfinden.  
Dazu gehören Gerätekennungen, Browser-Speicher, Fingerprinting und Link-Parameter wie UTM.

Ziel ist nicht „unsichtbar werden“.  
Ziel ist: weniger unnötige Datensammlung, ohne dass Alltag und Updates ständig brechen.

Sinnvoll, wenn du weniger personalisierte Werbung und weniger Profilbildung willst.  
Grenze: Manche Telemetrie ist für Betrieb und Sicherheit vorgesehen und lässt sich nur begrenzen.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

Weg A: In Konto, Browser und Apps die wichtigsten Datensammler reduzieren.  
Weg B: Nutzung stärker trennen und Hintergrundzugriffe enger begrenzen.  
Weg C: Auf Netzwerkebene mitfiltern und stichprobenartig prüfen.

Stoppsignal: Bei Verdacht auf kompromittiertes Gerät oder Stalkerware starte nicht hier.  
Gehe zu [Verdacht: Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/) oder [Stalkerware-Verdacht](/szenarien/stalkerware-verdacht/).

Stoppsignal: Wenn dein Arbeitsgerät über Verwaltung/Profil (MDM) gesteuert wird, können Schalter wirkungslos sein.  
Dann ist die IT zuständig, nicht deine Einstellungen.

Aufwand + Komfortkosten: 10–30 Minuten, danach gelegentliches Nachprüfen.  
Möglich sind mehr Abmeldungen und weniger personalisierte Vorschläge.

## Schnellstart (10 Minuten)
1) **In Konten Personalisierung und Diagnose teilen begrenzen**  
1. Öffne in deinen wichtigsten Konten die Datenschutz- oder Kontoeinstellungen.
2. Schalte Personalisierung (Werbung, Empfehlungen) aus, wenn du sie nicht willst.
3. Reduziere „Nutzungs- und Diagnosedaten“ oder „Aktivitätsdaten“, wenn möglich.
4. Prüfe aktive Sitzungen und melde Unbekanntes ab: [Sitzungen & Geräte](/konto/sitzungen-geraete/).
Du bekommst oft unpassendere Vorschläge und Autovervollständigung wird weniger „treffsicher“.  
Dafür werden weniger Daten über Geräte hinweg zusammengeführt.

2) **Im Browser Tracking über Speicher begrenzen**  
5. Blockiere Drittanbieter-Cookies, wenn diese Option vorhanden ist.
6. Lösche Website-Daten für Seiten, die dich „verfolgen“, oder stelle „beim Beenden löschen“ ein.
7. Deaktiviere unnötige Website-Berechtigungen wie Standort.
Bezeichnung kann abweichen – nutze die Suche nach: „Cookies“, „Websitedaten“, „Tracking“.  
Du wirst häufiger ausgeloggt und manche Komfortfunktionen gehen verloren.  
Dafür sinkt die Wiedererkennung über Browser-Speicher. Mehr dazu: [Cookies & Speicher](/browser/cookies-speicher/).

3) **Auf dem Gerät Diagnose- und Nutzungsdaten reduzieren**  
8. Suche in den Geräteeinstellungen nach „Nutzung“, „Diagnose“ oder „Analyse“.
9. Deaktiviere das Teilen von Geräte-Analysen/Nutzungsdaten, wenn du es nicht brauchst.
10. Setze die Werbe-Kennung zurück oder deaktiviere Personalisierung, falls möglich.
Bezeichnung kann abweichen – nutze die Suche nach: „Diagnose“, „Analyse“, „Werbe-ID“.  
Ohne geteilte Fehlerberichte können Abstürze indirekt langsamer behoben werden.  
Dafür gibt es weniger systemweite Telemetrie und eine weniger stabile Geräte-Zuordnung.

4) **App-Berechtigungen und Hintergrundzugriff enger setzen**  
11. Entziehe Berechtigungen, die eine App nicht zwingend braucht (z. B. Standort, Kontakte).
12. Stelle Standort möglichst auf „nur während der Nutzung“.
13. Schränke Hintergrundzugriff ein, wenn die App ihn nicht benötigt.
Bezeichnung kann abweichen – nutze die Suche nach: „Berechtigungen“, „Hintergrund“, „Datenverbrauch“.  
Benachrichtigungen oder Synchronisation können später kommen oder seltener passieren.  
Dafür hat Telemetrie weniger Kontext und weniger Zeitfenster zum Senden. Grundlagen: [Berechtigungen](/berechtigungen/grundlagen/).

5) **Link-Tracking (UTM) im Alltag entschärfen**  
14. Wenn ein Link mit `?utm_...` endet, entferne die Parameter vor dem Teilen, wenn es nicht nötig ist.
15. Öffne Links nach Möglichkeit im Browser statt im In-App-Browser (eingebetteter Browser).
16. Kopiere bei Umleitungen nur den Ziel-Link, nicht die ganze Umleitungskette.
Manche Kampagnen-Links landen ohne Parameter auf einer allgemeinen Seite.  
Dafür wird seltener zugeordnet, „wo du herkommst“. Mehr dazu: [UTM-Parameter](/tracking/utm-parameter/) und [Linktracking](/tracking/linktracking/).

## Wege

### Weg A (alltagstauglich)

1) **Die wichtigsten Konten priorisieren**  
Lege 2–3 Konten fest, die dich am häufigsten „überall“ begleiten (z. B. E-Mail, App-Store, Browser-Konto).  
Das kostet kurz Zeit, spart aber später Sucharbeit.  
Dafür reduzierst du Daten-Zusammenführung an den zentralen Stellen.

2) **Personalisierung und Diagnosedaten dort reduzieren**  
Schalte Personalisierung und Diagnose-/Nutzungsdaten in diesen Konten herunter.  
Das macht Empfehlungen oft weniger passend.  
Dafür wird weniger Verhalten kontoübergreifend gesammelt.

3) **Browser-Speicher strenger handhaben**  
Blockiere Drittanbieter-Cookies und bereinige Website-Daten regelmäßig.  
Das führt häufiger zu Login-Pflicht.  
Dafür sinkt das Wiedererkennen über lange Zeiträume.

4) **Website-Berechtigungen sparsam halten**  
Gib Standort, Kamera und Mikrofon nur bei Bedarf frei.  
Das kann spontane Funktionen auf Websites ausbremsen.  
Dafür bekommen Tracker weniger Zusatzsignale. Siehe: [Mikrofon & Kamera](/berechtigungen/mikrofon-kamera/).

5) **Schalter nach Updates nachprüfen**  
Prüfe Telemetrie-Optionen nach großen Updates erneut, weil Standards sich ändern können.  
Das ist lästig, dauert aber meist nur Minuten.  
Dafür verhinderst du, dass Einstellungen unbemerkt wieder aktiv sind.

6) **Links bewusst im Browser öffnen**  
Öffne Links aus sozialen Apps möglichst im Browser und nicht im eingebetteten Browser.  
Das ist ein zusätzlicher Handgriff.  
Dafür mischst du weniger App-Signale mit Web-Tracking.

<details><summary>Weg B (Fortgeschritten)</summary>

1) **Nutzung trennen**  
Nutze getrennte Browser-Profile: eines „eingeloggt“, eines „ohne Konto“.  
Das kostet Komfort, weil du häufiger wechseln musst.  
Dafür werden Kontexte seltener zusammengeführt. Siehe: [Profil-Trennung](/browser/profile-trennung/).

2) **Fingerprinting begrenzen**  
Aktiviere im Browser Schutz gegen Fingerprinting (Wiedererkennen über Gerätemerkmale).  
Manche Websites reagieren mit Captchas oder schlechter Kompatibilität.  
Dafür wird Wiedererkennung ohne Cookies erschwert. Siehe: [Fingerprinting](/browser/fingerprinting/).

3) **Beim Beenden aufräumen**  
Stelle ein, dass Website-Daten beim Beenden gelöscht werden, wenn dir häufiges Ausloggen nicht zu viel ist.  
Das macht den Alltag „unbequemer“.  
Dafür bleiben weniger dauerhafte Kennungen im Browser.

4) **App-interne Telemetrie finden**  
Suche in Apps nach eigenen Optionen wie „Diagnose“, „Absturzberichte“ oder „Nutzungsdaten“ und reduziere sie.  
Du kannst dadurch weniger hilfreiche Support-Daten liefern.  
Dafür wird App-Telemetrie unabhängig vom System begrenzt.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

1) **Auf Netzwerkebene filtern**  
Nutze DNS-Filter oder Blocklisten im Router oder einer Firewall, um bekannte Telemetrie-Ziele zu blockieren.  
Das kann Updates, Anmeldung oder Medien-Apps stören.  
Dafür reduzierst du Datenabfluss auch dann, wenn Apps eigene Schalter haben.

2) **Geräte trennen**  
Packe „Nebenbei-Geräte“ (z. B. Fernseher, Lautsprecher) ins Gastnetz.  
Das erschwert Casting oder lokale Steuerung.  
Dafür begrenzt du, welche Geräte sich gegenseitig „sehen“. Siehe: [Gäste-WLAN](/netzwerk/gaeste-wlan/).

3) **Stichproben prüfen**  
Kontrolliere gelegentlich DNS-Anfragen oder Verbindungen, um grobe Ausreißer zu erkennen.  
Das ist kein Beweis und kostet Lernaufwand.  
Dafür bekommst du Hinweise, ob etwas auffällig viel funkt.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob Personalisierung und Diagnosedaten in Konten wirklich „aus“ bleiben, auch nach Updates.  
- Achte darauf, ob du beim ausgeloggten Surfen seltener „überall die gleichen“ Werbe- oder Produkthinweise siehst.  
- Achte darauf, ob Apps weniger Daten im Hintergrund verbrauchen, wenn du Hintergrundzugriffe begrenzt hast.

<details><summary>Mehr Checks</summary>

- Öffne die Datenschutz-Suche in System und Apps und prüfe, ob die Schalter noch wie gewünscht stehen.  
- Wenn Tracking sich „hartnäckig“ anfühlt: prüfe Browser-Speicher und Trennung konsequenter. Siehe: [Browser: Schnellstart](/browser/schnellstart/).  
- Für Fingerprinting gibt es Tests, aber ohne klares „bestanden/nicht bestanden“. Siehe: [Fingerprinting-Test](/tests/fingerprinting-test/).

</details>

## Probleme & Lösungen

- **Problem:** Diagnose/Analyse ist nach einem Update wieder aktiv.  
  **Lösung:** Nach großen Updates die Datenschutz-Schalter einmal durchgehen und neu setzen.

- **Problem:** Seiten funktionieren schlechter, seit Cookies strenger blockiert werden.  
  **Lösung:** Für diese Seite eine Ausnahme machen oder ein eigenes Profil für Ausnahmen nutzen. Siehe: [Cookies & Speicher](/browser/cookies-speicher/).

- **Problem:** Cookie-Banner machen „Ablehnen“ schwer auffindbar.  
  **Lösung:** Nach „Einstellungen“, „Auswahl“ oder „nur notwendige“ suchen und konsequent bleiben. Siehe: [Cookie-Banner](/browser/cookie-banner/).

- **Problem:** Du bist überall eingeloggt und bekommst trotzdem „anonyme“ Werbung.  
  **Lösung:** Für echte Trennung ausgeloggt bleiben oder Profile trennen. Siehe: [Profil-Trennung](/browser/profile-trennung/).

- **Problem:** Links öffnen sich im eingebetteten Browser und verhalten sich anders.  
  **Lösung:** „Im Browser öffnen“ nutzen oder den Link kopieren und im Browser einfügen.

- **Problem:** Eine App sammelt Nutzungsdaten trotz deaktivierter System-Telemetrie.  
  **Lösung:** In der App selbst nach „Diagnose“, „Absturzberichte“ oder „Nutzungsdaten“ suchen und dort reduzieren.

- **Problem:** UTM-Parameter sind weg, aber Tracking passiert trotzdem.  
  **Lösung:** UTM ist nur ein Teil. Prüfe zusätzlich Browser-Speicher und Fingerprinting-Schutz. Siehe: [Linktracking](/tracking/linktracking/) und [Fingerprinting](/browser/fingerprinting/).

## Nicht gelöst

- Manche Telemetrie dient Stabilität und Sicherheit; oft lässt sich nur der Umfang reduzieren.  
- Eingeloggt-Nutzung bleibt ein starker Verknüpfungsfaktor, auch bei wenig Telemetrie.  
- Fingerprinting lässt sich meist nur begrenzen, nicht abschalten.  
- Wenn dein Gerät kompromittiert ist (Schadsoftware, Admin-Zugriff, Stalkerware), helfen Telemetrie-Schalter kaum. Siehe: [Verdacht: Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/).  
- Gegen Zwang (z. B. wenn jemand dich zu Einstellungen oder Entsperren drängt) helfen diese Maßnahmen nicht zuverlässig.

## FAQ

**Sind Cookies das ganze Tracking?**

Nein. Fingerprinting, Linktracking, Telemetrie und Werbenetzwerke spielen oft eine größere Rolle.

**Hilft „Do Not Track“?**

Selten. Wichtiger sind echte technische Schutzmaßnahmen.

**Wie reduziere ich Tracking am stärksten?**

Browser-Härtung, Blocker, Profiltrennung, App-Rechte, und weniger Datenweitergabe.

## Quellen

- [Nutzungs- und Diagnosedaten an Google senden (Google-Konto-Hilfe)](https://support.google.com/accounts/answer/6078260?hl=de)
- [Analyse-, Diagnose- und Nutzungsdaten mit Apple teilen (Apple Support)](https://support.apple.com/de-de/108971)
- [Datenschutz für Nutzer in WebView-Berichten (Android Entwicklerdokumentation)](https://developer.android.com/develop/ui/views/layout/webapps/webview-privacy?hl=de)
- [Fingerprinting (MDN Glossar)](https://developer.mozilla.org/en-US/docs/Glossary/Fingerprinting)
- [Mitigating Browser Fingerprinting in Web Specifications (W3C Guidance)](https://w3c.github.io/fingerprinting-guidance/)
- [Preventing the Use of Cookies and Fingerprints (BSI)](https://www.bsi.bund.de/EN/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Updates-Browser-Open-Source-Software/Der-Browser/JavaScript-Cookies-Fingerprints/javascript-cookies-fingerprints.html)

## Weiter

- [Tracking: Überblick](/tracking/)
- [Tracking: Schnellstart](/tracking/schnellstart/)
- [Linktracking verstehen](/tracking/linktracking/)
- [UTM-Parameter entfernen](/tracking/utm-parameter/)
- [Cookies & Speicher im Browser](/browser/cookies-speicher/)
- [Berechtigungen: Grundlagen](/berechtigungen/grundlagen/)
