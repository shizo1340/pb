---
layout: "@/layouts/DocLayout.astro"
title: "IP-Leak vermeiden: Lecks finden und sicher verhindern"
url: "/netzwerk/leaks/ip/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "So erkennst du einen IP-Leak und reduzierst ihn: Schritte für Heimnetz, öffentliches WLAN und VPN, plus Tests, typische Fehler und klare Grenzen."
---
Du erwartest, dass deine Anschluss-IP nicht sichtbar ist – und dann zeigt ein Test doch wieder deine echte Adresse.
Das passiert oft nach Netzwechsel, im öffentlichen WLAN oder wenn ein VPN nur „halb“ schützt.

Ziel ist nicht Perfektion, sondern Kontrolle.
Du willst verstehen, wann deine IP sichtbar wird, und die häufigsten Lecks zuverlässig vermeiden.

Sinnvoll, wenn du mit VPN reist, öffentliche WLANs nutzt oder deine Anschluss-IP nicht bei jedem Dienst auftauchen soll.  
Grenze: Eine öffentliche IP bleibt immer sichtbar – nur die „welche“ kannst du beeinflussen.

## TL;DR

- **Ist deine IP „wie erwartet“?**
- **IPv6 mitprüfen (häufigster Stolperstein)**
- **Öffentliches WLAN ohne Überraschungen nutzen**
- **Heimnetz so einstellen, dass Gäste nicht alles sehen**
- **Updates dort machen, wo Lecks oft entstehen**

## Ziel

- Weg A: Lecks finden, typische Ursachen abräumen, Heimnetz und öffentliches WLAN sauber nutzen.  
- Weg B: VPN wirklich abdichten (IPv6/Browser/Netzwechsel prüfen).  
- Weg C: Systemweit nur noch über den Tunnel ins Internet.

Stoppsignal: Wenn du vermutest, dass Gerät oder Router kompromittiert sind, geh zuerst zu [Verdacht: Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/) – IP-Leaks sind dann nicht das Kernproblem.  
Aufwand + Komfortkosten: 10–30 Minuten, je nach Gerät; vereinzelt können Streaming, Banking oder Captive-Portale zicken.

## Schnellstart (10 Minuten)
1) **Ist deine IP „wie erwartet“?**
1. Öffne den [IP-Leak-Test](/tests/ip-leak-test/) im Browser.
2. Notiere dir grob: Wird eine IPv4-Adresse angezeigt? Gibt es auch eine IPv6-Adresse?
3. Wenn du ein VPN nutzt: VPN einschalten, Seite neu laden, erneut vergleichen.
4. Wiederhole den Test einmal nach WLAN-Aus/Ein oder Flugmodus an/aus.
Hinweis: Tests zeigen oft zusätzlich lokale Adressen (z. B. 192.168.x.x) – das ist normal im Heimnetz.  
Das kostet: Du musst kurz vergleichen und nach Netzwechsel erneut laden.  
Nutzen: Du erkennst schnell, ob es ein echtes Leak ist oder nur normale Anzeigen.

2) **IPv6 mitprüfen (häufigster Stolperstein)**
5. Achte im Test darauf, ob eine IPv6-Adresse angezeigt wird.
6. Wenn ja: Prüfe, ob dein VPN auch IPv6-Verkehr schützt (je nach Dienst/Programm).
7. Wenn dein VPN keine IPv6-Unterstützung hat: plane Weg B ein.
Bezeichnung kann abweichen – nutze die Suche nach: IPv6.  
IPv6 abzuschalten kann Nebenwirkungen haben, weil manche Netze und Dienste empfindlich reagieren.  
Nutzen: Du vermeidest, dass IPv6 „am Tunnel vorbei“ rausgeht.

3) **Öffentliches WLAN ohne Überraschungen nutzen**
8. Verbinde dich nur, wenn der Netzwerkname (SSID) eindeutig ist (z. B. Aushang im Café).
9. Schalte „Automatisch verbinden“ für offene Netze aus.
10. Vermeide sensible Logins, wenn du dem Netz nicht vertraust (z. B. Banking).
11. Wenn du ein VPN nutzt: erst Captive-Portal erledigen, dann VPN aktivieren.
Hinweis: Falsche Hotspots können ähnlich heißen wie echte („Free_WiFi“).  
Das kostet: Du musst manchmal erst durch eine Bestätigungsseite, bevor das VPN sauber läuft.  
Nutzen: Du senkst Risiko durch Mitschnitt, Umleitung oder Fake-Hotspots.

4) **Heimnetz so einstellen, dass Gäste nicht alles sehen**
12. Prüfe, ob dein Router ein Gäste-WLAN anbietet, und nutze es für Besucher und unsichere Geräte.
13. Achte darauf, dass das Gäste-WLAN vom Heimnetz getrennt ist (je nach Router als Option).
14. Stelle als WLAN-Verschlüsselung mindestens WPA2 ein, besser WPA3, wenn verfügbar.
Hinweis: Manche sehr alte Geräte können mit WPA3 Probleme haben.  
Das kostet: Gäste erreichen im Zweifel Drucker oder Freigaben nicht, wenn die Trennung aktiv ist.  
Nutzen: Ein infiziertes Gäste-Gerät kommt schwerer an deine Geräte und Freigaben.

5) **Updates dort machen, wo Lecks oft entstehen**
15. Aktualisiere Router-Firmware und Betriebssystem zeitnah.
16. Starte Router und Gerät nach großen Updates einmal neu.
Hinweis: Router-Updates können Einstellungen zurücksetzen – danach kurz prüfen, ob Gäste-WLAN/WPA2/WPA3 noch passt.  
Das kostet: Während des Neustarts ist das Netz kurz weg.  
Nutzen: Du schließt bekannte Fehler in Netzwerkstack, WLAN und Treibern.

## Wege

### Weg A (alltagstauglich)

- Nutze den [IP-Leak-Test](/tests/ip-leak-test/) als Referenz: einmal ohne, einmal mit VPN (falls genutzt).
- Wiederhole den Test nach einem Netzwechsel (Heimnetz → Mobilfunk → öffentliches WLAN).
- Wenn im Test eine IPv6-Adresse auftaucht: notiere, ob sie sich mit VPN ändert.
- Nutze in fremden Netzen möglichst Mobilfunk/Hotspot statt offenes WLAN, wenn es um sensible Logins geht.
- In öffentlichem WLAN: erst Captive-Portal öffnen, Bedingungen akzeptieren, dann VPN aktivieren.
- Prüfe im Heimnetz: WPA2/WPA3 aktiv, Router-Firmware aktuell, kein „offenes“ WLAN.
- Richte ein getrenntes Gäste-WLAN ein und nutze es für Besucher und Geräte, denen du nicht voll vertraust.
- Wenn du wiederholt „komische“ Netznamen siehst oder Zertifikatswarnungen bekommst: Netz vergessen und neu verbinden.
- Wenn weiterhin Leaks auftreten: arbeite Weg B ab und prüfe zusätzlich [DNS-Leaks](/netzwerk/leaks/dns/) und [IPv6-Leaks](/netzwerk/leaks/ipv6/).

<details><summary>Weg B (Fortgeschritten)</summary>

- Aktiviere in deinem VPN-Programm eine Verbindungsnotbremse (engl. „Kill Switch“: blockiert Datenverkehr, wenn das VPN abreißt).
  - Das verhindert, dass dein Gerät bei Abbrüchen „normal“ ins Internet funkt.
  - Das kann Downloads oder Anrufe kurz unterbrechen, bis der Tunnel wieder steht.
  - Bezeichnung kann abweichen – nutze die Suche nach: Kill, Notbremse, Verbindungsblockierung.

- Prüfe, ob Split-Tunneling aktiv ist.
  - Split-Tunneling teilt den Verkehr: einzelne Apps oder Seiten laufen ohne VPN.
  - Wenn du IP-Leaks vermeiden willst: Split-Tunneling testweise aus.
  - Nebenwirkung: Lokale Geräte-Dienste (z. B. im Heimnetz) sind teils schlechter erreichbar.

- Wenn dein IP-Test mit VPN eine echte IPv6-Adresse zeigt: stelle im VPN IPv6-Schutz ein oder deaktiviere IPv6 am Gerät/Router nur als Übergangslösung.
  - Das schließt eine häufige Lücke, wenn dein VPN nur IPv4 schützt.
  - Nebenwirkung: IPv6-Abschaltung kann einzelne Netze oder Apps ausbremsen.
  - Bezeichnung kann abweichen – nutze die Suche nach: IPv6.

- Wenn Leaks nur im Browser auffallen: prüfe zusätzlich [WebRTC-Leaks](/netzwerk/leaks/webrtc/).
  - WebRTC ist eine Browser-Technik für Direktverbindungen; je nach Konfiguration können dabei IP-Informationen sichtbar werden.
  - Wenn du WebRTC stark einschränkst, können Browser-Videoanrufe oder P2P-Funktionen schlechter laufen.

- Wenn Verbindungen im VPN „wechselhaft“ sind: beobachte QUIC/HTTP/3.
  - QUIC ist ein modernes Transportprotokoll über UDP; manche Filter oder VPN-Einrichtungen behandeln UDP anders.
  - Wenn du QUIC testweise deaktivierst, kann das Laden einzelner Seiten etwas langsamer werden.
  - Bezeichnung kann abweichen – nutze die Suche nach: QUIC oder HTTP/3.

- Für öffentliche WLANs: halte dich an die Praxis aus [Public WLAN](/netzwerk/public-wlan/) und nutze VPN dort konsequenter als im Heimnetz, wenn du der Umgebung nicht vertraust.
  - Das reduziert Mitschnitt- und Umleitungsrisiken in fremden Netzen.
  - Nebenwirkung: Captive-Portale und einzelne Dienste zicken manchmal, bis du dich einmal sauber angemeldet hast.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.
- Erzwinge systemweit, dass Internetverkehr nur über die VPN-Schnittstelle erlaubt ist (Firewall-Regeln statt App-Schalter).
  - Das ist robuster als eine App-Option.
  - Nebenwirkung: Fehlkonfiguration kann „kein Internet“ bedeuten, bis du Regeln zurücksetzt.

- Trenne Geräte: ein eigenes Gerät oder Profil nur für Reisen oder riskante Netze, mit minimalen Konten.
  - Das verringert Nebeneffekte durch Apps, Konten und Caches.
  - Nebenwirkung: Mehr Pflege, weil du Updates und Logins doppelt hast.

- Nutze einen Reise-Router, der dein Geräte-WLAN vom fremden WLAN trennt.
  - Das schafft eine zusätzliche Schicht zwischen dir und dem Hotspot.
  - Nebenwirkung: Mehr Hardware, mehr Einrichtung, mehr Fehlerquellen.

- Vermeide parallele Netzpfade (gleichzeitig WLAN und Mobilfunk), wenn dein System das unterstützt.
  - Das reduziert Überraschungen bei Pfadwechseln.
  - Nebenwirkung: Komfortverlust, weil Umschalten weniger „nahtlos“ ist.

- Dokumentiere deine „sichere“ Konfiguration (welche Optionen an/aus sind), damit du nach Updates schnell prüfen kannst.
  - Das spart Zeit nach System- oder VPN-Updates.
  - Nebenwirkung: Du musst die Notizen aktuell halten.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob der [IP-Leak-Test](/tests/ip-leak-test/) mit VPN stets dieselbe öffentliche IP zeigt (und nicht zurück auf die Anschluss-IP springt).
- Wenn du nach Standby oder Netzwechsel plötzlich wieder deine Anschluss-IP siehst: VPN kurz trennen, wieder verbinden, dann erneut testen.
- Wenn im Test eine IPv6-Adresse auftaucht, prüfe, ob sie sich mit VPN verändert; falls nicht, arbeite [IPv6-Leaks](/netzwerk/leaks/ipv6/) durch.

<details><summary>Mehr Prüfungen & Hinweise</summary>

- Teste einmal in einem öffentlichen WLAN und einmal im Mobilfunk – Lecks zeigen sich oft nur in einem der beiden.
- Captive-Portal erkennen: Du bekommst „kein Internet“ oder wirst auf eine Login-/Bestätigungsseite umgeleitet.
  - Dann funktioniert VPN oft erst nach der Portal-Bestätigung.
- Wenn du Browser-Probleme vermutest: prüfe zusätzlich [WebRTC-Leaks](/netzwerk/leaks/webrtc/).
- Wenn du trotz VPN auf „falschen Ort“ oder „falschen Anbieter“ stößt: Das kann auch Geodaten-Fehler sein, kein Leak.
  - Maßgeblich ist, ob deine Anschluss-IP sichtbar ist.
- QUIC/HTTP/3 ist nicht automatisch „schlecht“.
  - Relevant wird es, wenn nur bestimmte Verbindungen „am VPN vorbei“ wirken oder dein Setup UDP anders behandelt.

</details>

## Probleme & Lösungen

- **Problem:** Mit VPN zeigt der Test trotzdem deine Anschluss-IP.  
  **Lösung:** Split-Tunneling ausschalten und Verbindungsnotbremse aktivieren; danach erneut testen.

- **Problem:** IPv4 sieht gut aus, aber IPv6 zeigt eine echte Adresse.  
  **Lösung:** Prüfe IPv6-Schutz im VPN; sonst IPv6 nur übergangsweise am Gerät/Router deaktivieren und später sauber lösen.

- **Problem:** Im öffentlichen WLAN kommt keine Verbindung zustande, sobald VPN aktiv ist.  
  **Lösung:** Erst Captive-Portal öffnen und bestätigen, dann VPN einschalten.

- **Problem:** Du landest im falschen WLAN, obwohl du „das richtige“ gewählt hast.  
  **Lösung:** Netz „vergessen“, neu verbinden, Name exakt prüfen; bei Unsicherheit Mobilfunk/Hotspot nutzen.

- **Problem:** Streaming oder Banking blockiert oder verlangt Zusatzprüfung.  
  **Lösung:** Für diese Dienste VPN testweise pausieren oder anderen Standort wählen; danach wieder aktivieren.

- **Problem:** Nach Standby oder Netzwechsel „kippt“ der Schutz.  
  **Lösung:** VPN-Verbindung neu aufbauen und sofort erneut testen; bei wiederholtem Auftreten Weg B (Notbremse) nutzen.

- **Problem:** Einige Seiten sind langsam oder brechen ab, seit du am Netz schraubst.  
  **Lösung:** Änderungen einzeln zurücknehmen und nach jedem Schritt testen; QUIC/HTTP/3 nur als gezielten Versuch anfassen.

## Nicht gelöst

- Eine öffentliche IP ist für Internetverbindungen nötig: Dienste sehen immer eine IP – entweder deine Anschluss-IP oder die deines VPN/Tor-Ausgangs.
- IP-Leak-Vermeidung verhindert kein Tracking über Cookies, Fingerprinting oder Konten.
- Wenn Router oder Gerät kompromittiert sind (Schadprogramm, Stalkerware, Admin-Zugriff oder Zwang), hilft IP-Leak-Vermeidung nur begrenzt.
- Ein VPN ersetzt keine saubere Gerätesicherheit und keine Updates.
- In manchen Netzen sind Captive-Portale oder Filter so gebaut, dass Komforteinbußen bleiben (z. B. häufiges Neuverbinden).

## FAQ

**Was ist der häufigste Fehler?**

Unsichere Router-Defaults und fehlende Updates. Danach: Leaks (DNS/IPv6/WebRTC) und Gastnetz fehlt.

**Hilft Firewall immer?**

Sie ist wichtig, aber ersetzt keine Updates und keinen sicheren Router. Nutze sie als Schicht, nicht als Wunder.

**Public WLAN – was tun?**

Vermeide sensible Logins, nutze HTTPS, ggf. VPN, und deaktiviere automatische Verbindungen.

## Quellen

- [BSI: Sicherheitstipps für privates und öffentliches WLAN](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Router-WLAN-VPN/Sicherheitstipps-fuer-privates-und-oeffentliches-WLAN/sicherheitstipps-fuer-privates-und-oeffentliches-wlan_node.html)
- [BSI: Schritt für Schritt zum Gäste-WLAN](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Router-WLAN-VPN/Schritt-fuer-Schritt-zum-Gaeste-WLAN/Schritt-fuer-Schritt-zum-Gaeste-WLAN.html)
- [IETF RFC 8200: IPv6-Spezifikation](https://datatracker.ietf.org/doc/html/rfc8200)
- [IETF RFC 9000: QUIC-Transportprotokoll](https://datatracker.ietf.org/doc/html/rfc9000)
- [IETF RFC 8910: Captive-Portal-Erkennung](https://datatracker.ietf.org/doc/html/rfc8910)
- [MDN: RTCIceCandidate „address“ (WebRTC)](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/address)

## Weiter

- [IP-Leak-Test](/tests/ip-leak-test/)
- [Public WLAN](/netzwerk/public-wlan/)
- [VPN-Leaks](/vpn/leaks/)
- [IPv6-Leaks](/netzwerk/leaks/ipv6/)
- [DNS-Leaks](/netzwerk/leaks/dns/)
- [Router-Sicherheit](/netzwerk/router-sicherheit/)
