---
layout: "@/layouts/DocLayout.astro"
title: "WLAN-Sicherheit: Zuhause und unterwegs richtig absichern"
url: "/netzwerk/wlan-sicherheit/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "WLAN-Sicherheit Schritt für Schritt: Router-Updates, WPA2/WPA3, Gäste-WLAN und Hotspots. Mit Checks, Fehlern & Lösungen für Zuhause und unterwegs."
---
Zu Hause ist das WLAN plötzlich langsam, oder ein neues Gerät taucht auf, das du nicht kennst. Unterwegs ist ein Hotspot praktisch, aber du weißt nicht, wer im selben Netz mitlauscht.

Nach dieser Anleitung ist dein WLAN so eingestellt, dass Unbefugte schwerer ins Heimnetz kommen und du in öffentlichen WLANs weniger Angriffsfläche bietest.

Sinnvoll, wenn du WLAN zu Hause nutzt oder unterwegs regelmäßig Hotspots verwendest.  
Grenze: Wenn Router oder Gerät bereits kompromittiert sind, lösen WLAN-Einstellungen das nicht.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

Weg A: Mit wenigen Standard-Einstellungen sofort sicherer werden.  
Weg B: Heimnetz sauber trennen und typische Angriffsflächen reduzieren.  
Weg C: Netzsegmentierung und Kontrolle, wenn du es wirklich gezielt brauchst.

Stoppsignal: Wenn du das Router-Admin-Passwort nicht kennst oder der Router „vom Anbieter gesperrt“ ist, arbeite zuerst mit Handbuch/Provider-Login statt zu raten.  
Aufwand + Komfortkosten: 10–30 Minuten, oft ein neues WLAN-Passwort und 1–2 Geräte neu verbinden.

## Schnellstart (15 Minuten)
1) Router aktualisieren und Admin-Zugang absichern  
1. In der Router-Oberfläche die Firmware (Geräte-Software) ansehen und auf Updates prüfen.
2. Wenn möglich: automatische Updates aktivieren oder einen monatlichen Termin setzen.
3. Admin-Passwort des Routers ändern (nicht das WLAN-Passwort).
4. Prüfen, ob Fernzugriff von außen deaktiviert ist, wenn du ihn nicht brauchst.
Bezeichnung kann abweichen – nutze die Suche nach: Update, Firmware, System, Fernzugriff.  
Nach einem Update kann der Router neu starten; kurz ist das Internet weg.  
Du schließt bekannte Sicherheitslücken und schützt die Router-Verwaltung besser vor Übernahme.

2) WLAN-Verschlüsselung prüfen (WPA2/WPA3) und Passwort erneuern  
5. In den WLAN-Sicherheitsoptionen nachsehen, welcher Modus aktiv ist.
6. Wenn verfügbar: WPA3 verwenden; sonst WPA2. (WPA2/WPA3 sind Verfahren, mit denen dein WLAN verschlüsselt wird.)
7. Ein neues WLAN-Passwort setzen (lang, zufällig, nicht wiederverwendet).
8. Unsichere Altmodi vermeiden, falls sie noch auswählbar sind (z. B. WEP).
Sehr alte Geräte können mit WPA3 nicht klarkommen und müssen ggf. im WPA2-Netz bleiben.  
Verschlüsselung plus starkes Passwort reduziert das Risiko, dass jemand Zugang errät oder mitliest.

3) Gäste-WLAN nutzen, statt das Hauptpasswort zu teilen  
9. Gäste-WLAN aktivieren und ein eigenes Passwort setzen.
10. Option „Gäste dürfen auf Heimnetz-Geräte zugreifen“ ausschalten, wenn vorhanden.
11. Für Besuch nur das Gäste-WLAN teilen, nicht das Hauptnetz.
12. Viele smarte Geräte eher ins Gäste-WLAN als ins Hauptnetz nehmen.
Drucker oder Netzwerkspeicher (NAS) sind aus dem Gäste-WLAN oft nicht sichtbar und müssen ggf. im Hauptnetz bleiben.  
Du trennst Besuch und „Alltagsgeräte“ vom wichtigsten Teil deines Heimnetzes.

4) Öffentliches WLAN: Auto-Verbindung und Freigaben aus  
13. Am Gerät automatische Verbindung zu offenen Netzen ausschalten.
14. Datei-/Medienfreigaben im WLAN deaktivieren, wenn du unterwegs bist.
15. In fremden Netzen nur Dienste nutzen, die im Browser als HTTPS laufen (keine Warnung).
Bezeichnung kann abweichen – nutze die Suche nach: automatisch verbinden, Freigabe, Teilen.  
Manche Komfortfunktionen im selben Netz (z. B. schnelles Teilen) sind dann nicht verfügbar.  
Du verhinderst unbeabsichtigte Verbindungen und machst lokale Angriffe im Hotspot schwieriger.

5) Captive Portal (Hotel, Bahn, Flughafen) richtig einordnen  
16. „Captive Portal“ ist eine Anmeldeseite, die vor dem Internetzugang erscheint (AGB, Zimmernummer, Ticket).
17. Erst verbinden, dann die Anmeldeseite vollständig abschließen, bevor du dich irgendwo einloggst.
18. Wenn die Seite nicht erscheint: WLAN kurz trennen/neu verbinden und eine normale Webseite öffnen.
Zertifikatswarnungen sind hier oft ein Zeichen für „noch nicht angemeldet“ und sollten nicht weggeklickt werden.  
Du vermeidest typische Hotspot-Fallen und interpretierst Warnungen nicht falsch.

## Wege

### Weg A

1. Router-Admin-Passwort ändern und sicher speichern.  
2. Router-Firmware aktualisieren und Updates regelmäßig prüfen.  
3. WLAN-Sicherheitsmodus auf WPA3 stellen, sonst WPA2.  
4. WLAN-Passwort neu setzen und nicht weitergeben.  
5. Gäste-WLAN aktivieren und Zugriff aufs Heimnetz für Gäste deaktivieren, falls vorhanden.  
6. Unbekannte Geräte in der Router-Übersicht prüfen und bei Bedarf das WLAN-Passwort erneut ändern.  
7. Unterwegs offene Hotspots nur nutzen, wenn du sie wirklich brauchst.  
8. In öffentlichen WLANs automatische Verbindung und Freigaben deaktivieren.  
9. Bei Namens-Zwillingen misstrauisch sein: Fake-Hotspots mit gleichem Namen kommen vor.

Das kostet dich meist ein neues WLAN-Passwort und einmaliges Neuverbinden.  
Du reduzierst damit die häufigsten Einstiegswege ins Heimnetz und in Hotspots.

<details><summary>Weg B (Fortgeschritten)</summary>

- WPS deaktivieren, falls der Router es anbietet. (WPS ist eine Kopplungsfunktion per Knopf/PIN; weniger Komfort, aber oft weniger Angriffsfläche.)  
- Wichtiges WLAN „privat“ halten und Nebensächliches (Besuch, viele smarte Geräte) konsequent ins Gäste-WLAN schieben. Das braucht etwas Disziplin, trennt aber besser.  
- Router so einstellen, dass Verwaltung nur aus dem Heimnetz möglich ist. Fernwartung wird unbequemer, Angriffe von außen werden seltener.  
- IPv6 prüfen: Wenn du IPv6 nutzt, achte darauf, dass die Router-Firewall auch dafür aktiv ist. (IPv6 ist eine neuere Adressfamilie; Regeln können getrennt gelten.)  
- QUIC im Hinterkopf behalten: QUIC ist ein Transportprotokoll über UDP und kann sich bei manchen Schutzmaßnahmen anders verhalten als klassisches HTTPS. Bei Problemen hilft oft ein Test mit deaktiviertem QUIC oder eine andere Verbindung zur Einordnung.  

</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.

- Heimnetz in getrennte Netzbereiche aufteilen (z. B. eigenes Netz für smarte Geräte, eigenes für Rechner/Handy).  
- Gastnetz so konfigurieren, dass es wirklich nur ins Internet kommt (kein Zugriff auf lokale Geräte).  
- Zugangspunkt so platzieren/konfigurieren, dass das Signal nicht unnötig weit nach außen reicht.  
- Netzwerkverkehr gezielt prüfen, wenn du konkrete Auffälligkeiten siehst (z. B. unbekannte Geräte, neue Verbindungen nach Neustart).  

Netztrennung kann Funktionen brechen (Drucken, Streaming, Smart-Home-Steuerung) und kostet Einrichtungszeit.  
Dafür begrenzt du Schäden besser, falls ein Gerät im „unwichtigen“ Netz Mist baut.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob im Router als WLAN-Sicherheit WPA2 oder WPA3 angezeigt wird (nicht „offen“).  
- Wenn Besuch da ist: Prüfe, ob Gäste im Gäste-WLAN online sind, aber keine privaten Geräte sehen.  
- Wenn du unterwegs bist: Achte darauf, ob dein Gerät nicht automatisch in offene Netze springt.

<details><summary>Mehr Prüfungen & Hinweise</summary>

- Schau am Gerät in den WLAN-Details nach, ob die Verbindung als „gesichert“ angezeigt wird und ob du wirklich im richtigen Netz bist.  
- Wenn du Schutzmaßnahmen wie VPN nutzt und etwas „trotzdem rausgeht“: QUIC kann je nach Einstellung anders laufen. Dann hilft ein Check mit [IP-Leak-Test](/tests/ip-leak-test/) und [DNS-Leak-Test](/tests/dns-leak-test/).  
- Bei IPv6-Problemen im Zusammenspiel mit Schutzmaßnahmen: [IPv6](/netzwerk/ipv6/) und [Leaks über IPv6](/netzwerk/leaks/ipv6/).  
- Wenn du oft in Hotspots bist: [Öffentliches WLAN](/netzwerk/public-wlan/).  

</details>

## Probleme & Lösungen

- **Problem:** Nach Umstellung auf WPA3 verbindet sich ein altes Gerät nicht mehr.  
  **Lösung:** Vorübergehend WPA2 nutzen oder das Gerät aktualisieren/ersetzen; viele Altgeräte unterstützen WPA3 nicht.

- **Problem:** Gäste-WLAN ist aktiv, aber Drucker oder NAS sind nicht erreichbar.  
  **Lösung:** Das ist oft gewollt; zum Drucken Gerät ins Hauptnetz nehmen oder gezielt Router-Freigaben prüfen.

- **Problem:** Captive-Portal-Seite öffnet sich nicht (Hotel/Bahn).  
  **Lösung:** WLAN trennen/neu verbinden und dann eine normale Webseite öffnen; notfalls Browser wechseln.

- **Problem:** Du siehst zwei Hotspots mit gleichem Namen und bist unsicher.  
  **Lösung:** Nicht raten; Personal fragen oder den Hotspot meiden, weil Fake-Hotspots möglich sind.

- **Problem:** Mit VPN geht Internet im WLAN nicht oder nur teilweise.  
  **Lösung:** Erst Captive Portal abschließen, dann VPN aktivieren; wenn es weiter hakt: [VPN-Probleme](/vpn/probleme/) und [Captive Portal](/vpn/captive-portal/).

- **Problem:** Manche Webseiten/Apps sind langsam oder brechen ab, obwohl WLAN „voll“ ist.  
  **Lösung:** QUIC kann beteiligt sein; teste mit anderer Verbindung oder ohne VPN und ordne es mit [QUIC](/netzwerk/quic/) ein.

## Nicht gelöst

- WLAN-Sicherheit verhindert kein Phishing und keine Betrugsmaschen in E-Mails oder Nachrichten.  
- Ein sicheres WLAN schützt nicht vor Tracking im Browser oder in Apps.  
- Wenn dein Gerät kompromittiert ist (z. B. Schadsoftware oder Stalkerware), hilft WLAN-Härtung nur begrenzt: [Überwachung erkennen](/geraete-sicherheit/ueberwachung-erkennen/) und [Stalkerware-Verdacht](/szenarien/stalkerware-verdacht/).  
- Wenn jemand physischen Zugriff auf Router oder Geräte hat, sind Passwörter und Einstellungen allein keine harte Grenze.  
- Wenn der Provider-Account oder der Fernzugang des Routers übernommen wird (Admin-Zugriff), helfen lokale WLAN-Optionen nur eingeschränkt.  
- Unter Zwang (z. B. erzwungene Passwortweitergabe) kann WLAN-Sicherheit nicht verhindern, dass jemand Zugriff bekommt.

## FAQ

**Was ist der häufigste Fehler?**

Unsichere Router-Defaults und fehlende Updates. Danach: Leaks (DNS/IPv6/WebRTC) und Gastnetz fehlt.

**Hilft Firewall immer?**

Sie ist wichtig, aber ersetzt keine Updates und keinen sicheren Router. Nutze sie als Schicht, nicht als Wunder.

**Public WLAN – was tun?**

Vermeide sensible Logins, nutze HTTPS, ggf. VPN, und deaktiviere automatische Verbindungen.

## Quellen

- [BSI: Sicherheitstipps für privates und öffentliches WLAN](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Router-WLAN-VPN/Sicherheitstipps-fuer-privates-und-oeffentliches-WLAN/sicherheitstipps-fuer-privates-und-oeffentliches-wlan_node.html)
- [BSI: WLAN & LAN – was man wissen sollte](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Router-WLAN-VPN/WLAN-LAN-was-man-wissen-sollte/wlan-lan-was-man-wissen-sollte_node.html)
- [BSI: Schritt für Schritt zum Gäste-WLAN](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Router-WLAN-VPN/Schritt-fuer-Schritt-zum-Gaeste-WLAN/Schritt-fuer-Schritt-zum-Gaeste-WLAN_node.html)
- [Apple Support: Captive-WLAN-Netzwerke auf dem iPhone oder iPad nutzen](https://support.apple.com/de-de/102554)
- [Android-Dokumentation: Captive portal API support (Android 11)](https://developer.android.com/about/versions/11/features/captive-portal)
- [IETF: RFC 9000 (QUIC)](https://www.rfc-editor.org/info/rfc9000)

## Weiter

- [Router-Sicherheit](/netzwerk/router-sicherheit/)
- [Gäste-WLAN](/netzwerk/gaeste-wlan/)
- [Öffentliches WLAN](/netzwerk/public-wlan/)
- [VPN: Wann sinnvoll?](/vpn/wann-sinnvoll/)
- [IPv6](/netzwerk/ipv6/)
- [QUIC](/netzwerk/quic/)
