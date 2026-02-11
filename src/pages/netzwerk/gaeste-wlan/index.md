---
layout: "@/layouts/DocLayout.astro"
title: "Gäste-WLAN einrichten: Heimnetz trennen und absichern"
url: "/netzwerk/gaeste-wlan/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Gäste-WLAN richtig einrichten: vom Heimnetz getrennt, mit WPA2/WPA3, Updates und Kurztest. Du bekommst klare Schritte, typische Fehler und Grenzen."
---
Gäste fragen nach dem WLAN-Passwort – und plötzlich hängen fremde Geräte im selben Netz wie dein Laptop, Drucker oder NAS.  
Das ist nervig. Es kann aber auch bedeuten, dass Geräte sichtbar oder erreichbar werden, die nicht für Gäste gedacht sind.

Ziel ist ein Gäste-WLAN, das Internet erlaubt, aber dein Heimnetz sauber trennt.  
So bleibt dein Alltag unkompliziert, ohne dass du zum Netzwerkprofi werden musst.

Sinnvoll, wenn du Besuch hast, Handwerker ins WLAN sollen oder unsichere Geräte getrennt laufen sollen.  
Grenze: Ein Gäste-WLAN ersetzt keine Router-Grundsicherung und schützt nicht vor einem bereits kompromittierten Router.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

- Weg A: Gäste-WLAN aktivieren, vom Heimnetz trennen, sicher verschlüsseln.  
- Weg B: Trennung absichern (Zeitplan, Geräte-Isolation, IPv6 mitdenken, Fallstricke entschärfen).  
- Weg C: Gastnetz technisch sauber segmentieren (eigenes Netz/VLAN, gezielte Regeln).  

Stoppsignal: Wenn du unbekannte Geräte im Heimnetz siehst oder das Router-Admin-Passwort nicht sicher ist, stoppe hier und sichere zuerst den Router: [Router-Sicherheit](/netzwerk/router-sicherheit/).  
Aufwand + Komfortkosten: 10–30 Minuten. Je strenger die Trennung, desto eher funktionieren Drucken und Streaming (Audio/Video übertragen) ins Heimnetz nicht.

## Schnellstart (10 Minuten)
1) **Gäste-WLAN einschalten und Heimnetzzugriff sperren**  
1. Öffne die Router-Verwaltung (je nach Gerät per App oder im Browser).
2. Aktiviere das Gäste-WLAN (oft auch „Gastzugang“ oder „Gastnetz“).
3. Stelle ein, dass Gäste nicht auf Geräte im Heimnetz zugreifen dürfen.
4. Gib dem Gäste-WLAN einen eigenen Namen, damit du es klar erkennst.
Bezeichnung kann abweichen – nutze die Suche nach: Gäste, Gastzugang, Gastnetz.  
Dadurch bleiben NAS, Drucker und andere Heimnetz-Geräte für Gäste unsichtbar. Dafür klappt Drucken oder Streaming ins Heimnetz aus dem Gäste-WLAN oft nicht.

2) **WPA2/WPA3 setzen und ein eigenes Passwort wählen**  
WPA2/WPA3 ist die WLAN-Verschlüsselung zwischen Gerät und Router, damit Funkverkehr nicht einfach mitgelesen wird.  
5. Wähle als Sicherheitsverfahren mindestens WPA2 („WPA2-Personal“).
6. Wenn verfügbar, nutze WPA3 oder einen Übergangsmodus (WPA2/WPA3), wenn alte Geräte mit ins Gastnetz müssen.
7. Setze ein eigenes, langes Passwort fürs Gäste-WLAN (anders als fürs Heimnetz).
Das senkt das Risiko durch Mithören und Passwort-Raten. Sehr alte Geräte können bei WPA3 oder Übergangsmodus zickig sein.

3) **Router-Firmware aktualisieren und Update-Automatik prüfen**  
8. Suche in der Router-Verwaltung nach „Update“ oder „Firmware“.
9. Installiere verfügbare Updates.
10. Wenn möglich, aktiviere automatische Updates (oder plane einen festen Termin zum Prüfen).
Bezeichnung kann abweichen – nutze die Suche nach: Update, Firmware, Aktualisierung.  
Updates schließen Sicherheitslücken im Router, die sonst auch das Gastnetz betreffen. Während der Installation ist das Internet oft kurz weg.

4) **Gastgeräte untereinander isolieren (falls verfügbar)**  
11. Prüfe, ob es eine Option gibt wie „Gäste dürfen untereinander kommunizieren“.
12. Schalte das aus, wenn du es nicht brauchst.
13. Falls es nur „Heimnetzzugriff erlauben“ gibt: Stelle sicher, dass das aus ist.
So sieht ein Gastgerät andere Gastgeräte deutlich weniger, wenn eins davon kompromittiert ist. Gemeinsame Spiele- oder Freigabe-Funktionen zwischen Gastgeräten können dann nicht mehr funktionieren.

5) **Kurztest: Internet ja, Heimnetz nein**  
14. Verbinde ein Gerät mit dem Gäste-WLAN.
15. Prüfe, ob Webseiten laden und Apps online gehen.
16. Versuche anschließend, ein typisches Heimnetz-Ziel zu erreichen (z. B. NAS- oder Drucker-Oberfläche).
Wenn Internet geht, aber Heimnetz-Ziele nicht erreichbar sind, greift die Trennung wie geplant. Manche Router erlauben trotzdem Zugriff auf sich selbst (Router-Oberfläche) – das ist je nach Modell unterschiedlich.

## Wege

### Weg A (alltagstauglich)

- Aktiviere das Gäste-WLAN und gib ihm einen klaren Namen.  
- Setze WPA2 oder WPA3 (Übergangsmodus nur, wenn nötig).  
- Nutze ein eigenes, langes Passwort fürs Gäste-WLAN.  
- Deaktiviere Heimnetz-Zugriff für Gäste (Trennung muss aktiv sein).  
- Wenn verfügbar: Isoliere Gastgeräte untereinander.  
- Halte die Router-Firmware aktuell.  
- Teste mit einem Gastgerät: Internet geht, Heimnetz-Ziele gehen nicht.

<details><summary>Weg B (Fortgeschritten)</summary>

- Lege fest, wann das Gäste-WLAN aktiv ist (nur bei Bedarf oder per Zeitplan), falls dein Router das kann.  
- Nutze konsequent getrennte Zugangsdaten für Heimnetz und Gäste-WLAN, auch wenn es unbequemer ist.  
- Prüfe, ob die Trennung auch für IPv6 gilt (manche Netze nutzen IPv4 und IPv6 parallel).  
- Wenn dein Router separate IPv6-Optionen fürs Gäste-WLAN hat: setze dort ebenfalls „kein Heimnetzzugriff“.  
- Wenn Geräte im Gäste-WLAN trotzdem lokale Dienste finden (z. B. per Service-Erkennung): aktiviere zusätzlich die Gastgeräte-Isolation, falls verfügbar.  
- Wenn du Smart-Home-Geräte ins Gäste-WLAN packst: rechne damit, dass Steuerung aus dem Heimnetz je nach System nicht mehr klappt. Das ist die Kehrseite der Trennung.

</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.
- Trenne Gäste als eigenes Netz (z. B. eigenes Subnetz oder VLAN) statt nur per „Gastnetz“-Schalter.  
- Setze klare Regeln: Gäste dürfen nur ins Internet, nicht ins Heimnetz (für IPv4 und IPv6).  
- Erlaube nur das Nötigste zwischen Netzen, wenn du Ausnahmen brauchst (z. B. nur Drucken auf genau einen Drucker).  
- Dokumentiere deine Regeln kurz, damit du nach Updates/Neustarts prüfen kannst, ob alles noch gilt.  
Strenge Regeln erhöhen die Sicherheit, brechen aber oft Drucken, Streaming und manche Smart-Home-Kopplungen.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob Gastgeräte nicht mehr auf Heimnetz-Geräte zugreifen können (z. B. NAS, Drucker, Smart-Home-Zentrale).  
- Schau im Router nach, ob Gastgeräte getrennt gelistet sind (oft eigener Bereich für Gäste).  
- Teste nach Router-Updates kurz erneut, ob „Internet ja, Heimnetz nein“ weiterhin stimmt.

<details><summary>Mehr Prüfungen</summary>

- IPv6-Check: Wenn dein Heimnetz IPv6 nutzt, muss die Trennung auch dafür gelten. Sonst wirkt die Sperre bei IPv4, aber nicht bei IPv6.  
- Isolation-Check: Wenn zwei Gastgeräte sich gegenseitig finden (z. B. per Datei-Freigabe), ist „Gastgeräte untereinander isolieren“ noch nicht aktiv oder nicht vorhanden.  
- Reichweiten-Check: Wenn Gäste ständig Verbindungsabbrüche haben, liegt es oft an Funkkanal/Standort – nicht an der Trennung.

</details>

## Probleme & Lösungen

- **Problem:** Gäste können sich nicht verbinden.  
  **Lösung:** Stelle testweise auf WPA2 um oder aktiviere den Übergangsmodus (WPA2/WPA3), und prüfe das Passwort erneut.

- **Problem:** Gastgeräte sehen trotzdem Heimnetz-Geräte.  
  **Lösung:** Prüfe, ob „Zugriff auf Heimnetz erlauben“ wirklich aus ist, und ob es getrennte IPv6-Einstellungen fürs Gäste-WLAN gibt.

- **Problem:** Drucken oder Streaming ins Heimnetz geht nicht mehr.  
  **Lösung:** Das ist oft Absicht der Trennung. Wenn du es brauchst, erlaube gezielt nur das Nötige (Weg B/C), statt das ganze Heimnetz freizugeben.

- **Problem:** Smart-Home-Geräte im Gäste-WLAN lassen sich nicht mehr steuern.  
  **Lösung:** Prüfe, ob dein System Steuerung über Cloud erlaubt. Wenn lokale Steuerung nötig ist, brauchst du gezielte Ausnahmen (Weg C) oder ein separates IoT-Netz.

- **Problem:** Dein Router bietet kaum Optionen fürs Gäste-WLAN.  
  **Lösung:** Nutze mindestens „kein Heimnetzzugriff“ und ein eigenes Passwort. Für echte Segmentierung brauchst du Router/Access-Point mit VLAN oder getrennten Netzen.

- **Problem:** Das Gäste-WLAN ist langsam, obwohl das Heimnetz schnell ist.  
  **Lösung:** Manche Router drosseln das Gastnetz bewusst. Prüfe eine Option wie „Bandbreite begrenzen“ und passe sie an, wenn du sie nicht brauchst.

## Nicht gelöst

- Ein Gäste-WLAN schützt dich nicht, wenn der Router selbst unsicher ist (Admin-Passwort bekannt, veraltete Firmware, Fernzugriff offen).  
- Ein Gäste-WLAN macht dich nicht anonym: Internetanbieter und besuchte Dienste sehen weiterhin deine Verbindung.  
- Gegen Tracking durch Webseiten und Apps (Cookies, Fingerprinting, Werbe-IDs) hilft Netztrennung nur begrenzt.  
- Wenn ein Gastgerät kompromittiert ist (Malware, Stalkerware, Admin-Zugriff auf dem Gerät), kann es trotzdem Daten abgreifen, die du ihm gibst.  
- Gegen Angriffe mit physischem Zugriff (Router manipuliert, zusätzlicher Access-Point im Haus) brauchst du zusätzliche Maßnahmen.

## FAQ

**Was ist der häufigste Fehler?**

Unsichere Router-Defaults und fehlende Updates. Danach: Leaks (DNS/IPv6/WebRTC) und Gastnetz fehlt.

**Hilft Firewall immer?**

Sie ist wichtig, aber ersetzt keine Updates und keinen sicheren Router. Nutze sie als Schicht, nicht als Wunder.

**Public WLAN – was tun?**

Vermeide sensible Logins, nutze HTTPS, ggf. VPN, und deaktiviere automatische Verbindungen.

## Quellen

- [BSI: Schritt für Schritt zum Gäste-WLAN](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Router-WLAN-VPN/Schritt-fuer-Schritt-zum-Gaeste-WLAN/Schritt-fuer-Schritt-zum-Gaeste-WLAN_node.html)  
- [BSI: Sicherheitstipps für privates und öffentliches WLAN](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Router-WLAN-VPN/Sicherheitstipps-fuer-privates-und-oeffentliches-WLAN/sicherheitstipps-fuer-privates-und-oeffentliches-wlan_node.html)  
- [Wi-Fi Alliance: Einführung von Wi-Fi CERTIFIED WPA3 (Pressemitteilung)](https://www.globenewswire.com/news-release/2018/06/26/1529297/0/en/Wi-Fi-Alliance-introduces-Wi-Fi-CERTIFIED-WPA3-security.html)  

## Weiter

- [Router-Sicherheit](/netzwerk/router-sicherheit/)  
- [WLAN-Sicherheit](/netzwerk/wlan-sicherheit/)  
- [Updates für Router & IoT](/updates/router-iot/)  
- [IPv6 im Heimnetz](/netzwerk/ipv6/)  
- [Smart Home sicher einrichten](/hardware/smart-home/)  
- [Öffentliches WLAN](/netzwerk/public-wlan/)
