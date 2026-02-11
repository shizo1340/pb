---
layout: "@/layouts/DocLayout.astro"
title: "Public WLAN sicher nutzen: Hotspots, VPN und Captive-Portale"
url: "/netzwerk/public-wlan/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Public WLAN sicher nutzen: In 10 Minuten Hotspot-Fallen erkennen, HTTPS und VPN richtig einsetzen sowie DNS- und IPv6-Lecks vermeiden – mit Checks."
---
In Public WLAN merkst du oft erst spät, dass etwas schief läuft. Seiten laden „komisch“, Anmeldeseiten fehlen oder du landest im falschen Netz. Dazu kommt das Risiko, dass andere im selben Netz dich umleiten oder ausspähen wollen.

Ziel dieser Seite: Du nutzt Public WLAN so, dass du dich nicht dauernd sorgen musst. Mit wenigen, prüfbaren Schritten reduzierst du die wichtigsten Risiken – ohne Spezialwissen.

Sinnvoll, wenn du unterwegs (Café, Hotel, Zug, Flughafen) regelmäßig Public WLAN nutzt.  
Grenze: Wenn dein Gerät bereits kompromittiert ist, hilft Public-WLAN-Absicherung nur begrenzt.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

Weg A: Sicher verbinden, sensible Aktionen vermeiden, danach sauber trennen.  
Weg B: Zusätzlich DNS/IPv6/Browser-Verhalten prüfen und Lecks testen.  
Weg C: Profi-Absicherung mit strengeren Regeln (mehr Komfortverlust möglich).

Stoppsignal: Wenn du eine Zertifikatswarnung siehst oder der Netzname nicht eindeutig ist, brich ab und nutze Mobilfunk.  
Aufwand + Komfortkosten: 10–20 Minuten Einrichtung, danach wenig Aufwand. Komfort: automatische Verbindungen und lokale Freigaben sind eingeschränkt.

## Schnellstart (10 Minuten)
1) **Netz auswählen, das du eindeutig zuordnen kannst**
1. Frage vor Ort nach dem exakten Netz-Namen (SSID) und ob ein Passwort nötig ist.
2. Tippe den Namen bewusst an, statt „irgendein offenes Netz“ zu nehmen.
3. Schalte „automatisch verbinden“ für dieses Netz nach der Nutzung aus.
Bezeichnung kann abweichen – nutze die Suche nach: automatisch verbinden, automatisch beitreten.  
Du verbindest dich künftig öfter manuell. Dafür landest du seltener in falschen Hotspots mit ähnlichem Namen.

2) **Sensible Dinge nicht „nebenbei“ im Public WLAN erledigen**
4. Nutze für Banking, Behördenseiten und Passwort-Änderungen lieber Mobilfunk oder deinen persönlichen Hotspot.
5. Wenn du ein virtuelles privates Netzwerk (VPN) nutzt, aktiviere es vor dem Anmelden in Konten.
6. Prüfe in der VPN-App, ob es wirklich verbunden ist (Statusanzeige).
Das kann Akku kosten und in manchen Netzen haken. Dafür ist dein Verkehr im WLAN deutlich schwerer mitzulesen oder zu manipulieren.

3) **Im Browser auf HTTPS achten und Warnungen ernst nehmen**
7. Achte auf „https“ in der Adresszeile (HTTPS ist die verschlüsselte Web-Verbindung).
8. Akzeptiere keine Zertifikatswarnungen, auch nicht „nur kurz“.
9. Wenn eine Seite nur unverschlüsselt erreichbar ist: dort nicht anmelden.
Manche alten Seiten funktionieren dann nicht oder nur eingeschränkt. Dafür reduzierst du Abhören und Umleitungen beim Surfen deutlich.

4) **Gerät im Public WLAN als „öffentlich“ behandeln**
10. Deaktiviere lokale Freigaben (Dateien/Drucker) und Gerätesuche im Netzwerk.
11. Aktiviere eine strenge Firewall-Einstellung, wenn dein System das anbietet.
Bezeichnung kann abweichen – nutze die Suche nach: öffentliches Netzwerk, Freigabe, Erkennung, Teilen.  
Teilen im lokalen Netz (z. B. Drucker) kann dann nicht funktionieren. Dafür finden andere im gleichen WLAN dein Gerät seltener.

5) **Nach der Nutzung das Netz wieder loswerden**
12. Trenne die Verbindung, sobald du fertig bist.
13. „Vergiss“ das WLAN, wenn du es nicht regelmäßig brauchst.
14. Schalte WLAN aus, wenn du unterwegs gerade keines nutzt.
Beim nächsten Mal musst du dich neu anmelden. Dafür verhinderst du stille Wiederverbindungen in der Nähe desselben Netzes.

6) **Wenn eine Anmeldeseite erscheint: so wenig wie möglich preisgeben**
15. Eine Anmeldeseite (Captive-Portal) ist die vorgeschaltete WLAN-Seite mit Bedingungen oder Login.
16. Gib dort nur die nötigen Daten ein und nutze keine wiederverwendeten Passwörter.
17. Falls dein VPN die Anmeldung blockiert: kurz aus, anmelden, danach wieder an.
Während das VPN aus ist, hängt dein Verkehr wieder stärker am WLAN. Dafür kommst du ins Netz, ohne unnötig viele Daten abzugeben.

## Wege

### Weg A

- Aktualisiere Betriebssystem und Browser vor der Reise, nicht im Public WLAN. Das schließt Sicherheitslücken, kostet aber kurz Zeit und Datenvolumen.
- Wähle unterwegs nur Netze, die du eindeutig zuordnen kannst (Name/Ort/Personal). Das senkt Hotspot-Fallen, kann aber bedeuten, dass du ein Netz auslässt.
- Nutze für Konten und Zahlungen Mobilfunk oder ein bereits eingerichtetes VPN. Das reduziert Mitlesen, kann aber Akku kosten oder einzelne Dienste stören.
- Öffne im Browser nur Seiten mit HTTPS; Warnungen sind ein Abbruchsignal. Das verhindert Umleitungen, kann aber alte Webseiten unbrauchbar machen.
- Deaktiviere lokale Freigaben und Gerätesichtbarkeit im Public WLAN. Das reduziert Angriffsfläche, kann aber lokales Teilen blockieren.
- Nach dem Surfen: Verbindung trennen und das Netz vergessen. Das verhindert Wiederverbindungen, kostet aber den nächsten Login.
- Wenn du dich doch in Konten anmeldest: prüfe später Anmeldebenachrichtigungen im Konto. Das hilft beim Erkennen von Missbrauch, ist aber keine Garantie.

<details><summary>Weg B (Fortgeschritten)</summary>

- Aktiviere verschlüsseltes DNS, wenn dein Gerät das unterstützt (DNS ist die „Namensauflösung“ im Netz). Das erschwert Manipulation, kann aber in manchen Hotspots zu Problemen führen.  
Bezeichnung kann abweichen – nutze die Suche nach: privates DNS, DNS über TLS, DNS über HTTPS.  
- Prüfe im Public WLAN mit und ohne VPN, ob sich deine sichtbare IP wie erwartet ändert: [IP-Leak-Test](/tests/ip-leak-test/). Das macht Lecks sichtbar, kostet aber ein paar Minuten Testzeit.
- Prüfe zusätzlich, ob DNS-Anfragen im WLAN „anders“ aussehen als über Mobilfunk: [DNS-Leak-Test](/tests/dns-leak-test/). Das hilft gegen DNS-Umleitungen, kann aber durch VPN/Filter schwer interpretierbar sein.
- Achte auf IPv6, wenn du ein VPN nutzt. IPv6 ist die neuere IP-Version; nicht jedes VPN behandelt sie gleich. Das schließt Lücken, kann aber einzelne Netze empfindlicher machen.
- Wenn Captive-Portale oder Streams ständig „springen“, kann QUIC/HTTP/3 mitspielen. Teste dann vorsichtig ohne QUIC/HTTP/3, wenn dein Browser das anbietet. Das stabilisiert manchmal Portale, kann aber Leistung in guten Netzen senken.  
Bezeichnung kann abweichen – nutze die Suche nach: QUIC, HTTP/3.
</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.

- Nutze ein VPN mit Not-Aus (Kill Switch). Das soll Verkehr außerhalb des VPN blockieren, wenn die Verbindung abreißt, kann aber Apps „offline“ wirken lassen.  
Bezeichnung kann abweichen – nutze die Suche nach: Kill Switch, Not-Aus, Immer-aktiv-VPN.  
- Setze Firewall-Regeln so, dass eingehende Verbindungen im Public WLAN blockiert sind. Das reduziert Angriffe im lokalen Netz, kann aber Gerätefunktionen im selben WLAN brechen.
- Wenn dein VPN IPv6 nicht abdeckt: deaktiviere IPv6 am Gerät oder nutze Mobilfunk für sensible Dinge. Das schließt IPv6-Lecks, kann aber in manchen Netzen Nebenwirkungen haben.
- Arbeite unterwegs mit einem getrennten Browser-Profil. Das trennt Cookies und Logins, kostet aber Komfort (du musst dich öfter neu anmelden).
Achtung: Das kann Funktionen brechen (Streaming, Push, lokale Geräte-Funktionen) und braucht Nacharbeit.
</details>

## So merkst du, dass es wirkt

- Achte darauf, ob du dich nach dem Verbinden „komisch umgeleitet“ fühlst. Prüfe dann den Netzname und verbinde neu.
- Wenn du ein VPN nutzt: mache einmal den [IP-Leak-Test](/tests/ip-leak-test/) im Public WLAN. Die sichtbare IP sollte zur VPN-Verbindung passen.
- Prüfe später, ob es unerwartete Konto-Anmeldungen gibt. Wenn nicht, ist das ein gutes Zeichen (aber keine Garantie).

<details><summary>Mehr Prüfungen & Hinweise</summary>

- Prüfe DNS im Public WLAN: [DNS-Leak-Test](/tests/dns-leak-test/).  
- Prüfe Browser-Lecks über WebRTC, wenn du viel im Browser telefonierst: [WebRTC-Test](/tests/webrtc-test/).  
- Wenn du mit VPN Probleme hast: erst Captive-Portal-Anmeldung abschließen, dann VPN aktivieren.  
</details>

## Probleme & Lösungen

- **Problem:** Du siehst keine Anmeldeseite (Captive-Portal), obwohl „verbunden“ steht.  
  **Lösung:** Browser öffnen und kurz warten; falls nötig VPN aus → anmelden → VPN wieder an.

- **Problem:** Es gibt mehrere Netze mit fast gleichem Namen.  
  **Lösung:** Nur das Netz nutzen, das dir das Personal nennt; im Zweifel Mobilfunk.

- **Problem:** Mit VPN lädt „nichts“ oder manche Apps funktionieren nicht.  
  **Lösung:** Erst Portal-Anmeldung ohne VPN, danach VPN wieder aktivieren; wenn es bleibt: Mobilfunk für diese Nutzung.

- **Problem:** Geräte im gleichen WLAN sehen deinen Rechner (Freigaben/„Sichtbarkeit“).  
  **Lösung:** Netzwerk als öffentlich behandeln und Freigaben/Erkennung deaktivieren.

- **Problem:** Du hast trotz VPN merkwürdige Standortwechsel oder einzelne Seiten brechen.  
  **Lösung:** VPN-Standort kann abweichen; bei wiederkehrenden Portal-Problemen testweise QUIC/HTTP/3 deaktivieren.

- **Problem:** Du willst „zu Hause sicher WLAN teilen“, aber Gäste sollen nichts sehen.  
  **Lösung:** Gäste-WLAN nutzen, Router aktuell halten, WPA2/WPA3 aktivieren.

## Nicht gelöst

- Ein Betreiber des Public WLAN kann weiterhin Metadaten sehen (z. B. dass du online bist), auch wenn Inhalte verschlüsselt sind.
- Ein VPN verlagert Vertrauen: Der VPN-Anbieter kann technisch mehr sehen als das WLAN.
- Gegen ein kompromittiertes Gerät (Schadprogramm, Stalkerware, Admin-Zugriff) hilft Public-WLAN-Absicherung nur begrenzt.
- Gegen Social Engineering („Gib hier schnell dein Passwort ein“) hilft keine Netztechnik, nur Aufmerksamkeit.
- WPA2/WPA3 schützt vor allem dort, wo du den Router kontrollierst (Heimnetz). Im Public WLAN bestimmst du die Router-Einstellungen nicht.
- Bei Zwang (z. B. Gerät wird überwacht oder Netz muss genutzt werden) sind Komfort-Regeln oft zweitrangig und du brauchst ein eigenes Bedrohungsmodell.

## FAQ

**Was ist der häufigste Fehler?**

Unsichere Router-Defaults und fehlende Updates. Danach: Leaks (DNS/IPv6/WebRTC) und Gastnetz fehlt.

**Hilft Firewall immer?**

Sie ist wichtig, aber ersetzt keine Updates und keinen sicheren Router. Nutze sie als Schicht, nicht als Wunder.

**Public WLAN – was tun?**

Vermeide sensible Logins, nutze HTTPS, ggf. VPN, und deaktiviere automatische Verbindungen.

## Quellen

- [BSI: Sicherheitstipps für privates und öffentliches WLAN](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Router-WLAN-VPN/Sicherheitstipps-fuer-privates-und-oeffentliches-WLAN/sicherheitstipps-fuer-privates-und-oeffentliches-wlan_node.html)
- [BSI: Schritt für Schritt zum Gäste-WLAN](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Router-WLAN-VPN/Schritt-fuer-Schritt-zum-Gaeste-WLAN/Schritt-fuer-Schritt-zum-Gaeste-WLAN_node.html)
- [Apple Support: Captive-WLAN-Netzwerke auf dem iPhone oder iPad nutzen](https://support.apple.com/de-de/102554)
- [Mozilla Support: Nur-HTTPS-Modus in Firefox](https://support.mozilla.org/de/kb/nur-https-modus-in-firefox)
- [IETF: RFC 8446 (TLS 1.3)](https://datatracker.ietf.org/doc/html/rfc8446)

## Weiter

- [Netzwerk Schnellstart](/netzwerk/schnellstart/)
- [VPN Schnellstart](/vpn/schnellstart/)
- [DNS über HTTPS/DNS über TLS](/dns/doh-dot/)
- [IPv6](/netzwerk/ipv6/)
- [QUIC](/netzwerk/quic/)
- [IP-Leak-Test](/tests/ip-leak-test/)
