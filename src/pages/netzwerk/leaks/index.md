---
layout: "@/layouts/DocLayout.astro"
title: "Netzwerk-Leaks prüfen und beheben: IP, DNS, IPv6, WebRTC"
url: "/netzwerk/leaks/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Du lernst Netzwerk-Leaks zu erkennen und zu prüfen: IP, DNS, IPv6 und WebRTC. Mit schnellen Tests, Router-Grundlagen und Lösungen, damit du Fehler vermeidest."
---
Manchmal „passt“ dein Standort nicht, obwohl du im Heimnetz bist oder ein Schutzdienst läuft.  
Oder ein Test zeigt DNS-Server, die du nie gewählt hast. Das ist verwirrend – und kann echte Spuren verraten.

Ziel ist Klarheit: Was sieht die Gegenstelle wirklich (IP, DNS, IPv6, WebRTC)?  
Und was kannst du ohne Stress verbessern, damit Ergebnisse stabil und nachvollziehbar werden?

Sinnvoll, wenn du Standortwechsel, „falsche“ Länderanzeigen oder wechselnde DNS-Ergebnisse siehst.  
Grenze: Tests zeigen nur, was ein Testserver von außen beobachten kann.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

Weg A: In 10–15 Minuten prüfen, was nach außen sichtbar ist, und die häufigsten Leaks abstellen.  
Weg B: DNS/IPv6/QUIC sauber einordnen und Nebenwirkungen vermeiden.  
Weg C: Mit tieferen Prüfungen (Netzwerkverkehr) Ursachen belastbar bestätigen.

Stoppsignal: Wenn du den Verdacht hast, dass Gerät oder Router kompromittiert sind, nutze zuerst das Szenario [Verdacht: Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/).  
Stoppsignal: Wenn du Stalkerware vermutest, gehe zu [Stalkerware-Verdacht](/szenarien/stalkerware-verdacht/).

Aufwand: 10–45 Minuten.  
Komfortkosten: je nach Maßnahme weniger Automatik, mehr Nachfragen im WLAN oder einzelne Dienste funktionieren anders.

## Schnellstart (15 Minuten)
1) **Ausgangslage messen: IP, DNS und WebRTC**
1. Öffne den [IP-Leak-Test](/tests/ip-leak-test/) im Browser und notiere Land/Anbieter.
2. Öffne den [DNS-Leak-Test](/tests/dns-leak-test/) und notiere die angezeigten DNS-Server.
3. Öffne den [WebRTC-Test](/tests/webrtc-test/) und achte auf zusätzlich sichtbare IPs.
4. Wiederhole das Ganze einmal im Heimnetz und (falls relevant) einmal im öffentlichen WLAN.
Das bringt dir schnell Klarheit, ob IP/DNS/WebRTC überhaupt auffällig sind.  
Nebenwirkung: Ergebnisse können je nach Testserver abweichen – wichtig ist die Richtung, nicht jedes Detail.

2) **Heimnetz: Router aktualisieren und Fernzugriff abschalten**
5. Prüfe in der Router-Verwaltung, ob ein Update verfügbar ist.
6. Prüfe, ob „Fernzugriff“/„Remote-Verwaltung“ aktiv ist, und deaktiviere es, wenn du es nicht brauchst.
7. Starte den Router nach Updates neu (falls nicht automatisch).
Bezeichnung kann abweichen – nutze die Suche nach: Update, Firmware, Fernzugriff.  
Das senkt das Risiko durch bekannte Router-Schwachstellen und unnötige Angriffsflächen.  
Nebenwirkung: Updates können einen Neustart auslösen und einzelne Einstellungen ändern.

3) **Heimnetz: WLAN absichern und Geräte trennen**
8. Prüfe, ob WPA2 (AES) oder WPA3 aktiv ist (nicht „offen“).
9. Deaktiviere WPS, wenn du es nicht aktiv nutzt.
10. Richte ein Gäste-WLAN für Besuch und „smarte“ Geräte ein.
Bezeichnung kann abweichen – nutze die Suche nach: WPA2, WPA3, WPS, Gäste.  
Das verhindert, dass ein einzelnes Gerät leicht auf andere Geräte im Netz „überspringt“.  
Nebenwirkung: Ältere Geräte können WPA3 nicht, und mit Gäste-WLAN funktionieren manche Freigaben nicht automatisch.

4) **Öffentliches WLAN: Anmeldeseite zuerst, Schutz danach**
11. Wenn eine Anmeldeseite erscheint (Captive Portal, also WLAN-Login), melde dich zuerst an.
12. Starte danach den Browser neu und rufe eine bekannte HTTPS-Seite auf.
13. Wenn du einen Schutzdienst nutzt, aktiviere ihn erst nach dem WLAN-Login wieder.
Das verhindert „scheinbare Leaks“, die nur durch die Login-Mechanik entstehen.  
Nebenwirkung: Für ein paar Sekunden bist du nur im WLAN-Login, bevor dein Schutzdienst wieder aktiv ist.

5) **Bei Widersprüchen: QUIC/HTTP/3 testweise deaktivieren**
14. Wenn Tests widersprüchlich sind oder Filterregeln „umgangen“ wirken, wiederhole die Tests mit deaktiviertem QUIC/HTTP/3.
15. Prüfe danach erneut IP/DNS/WebRTC.
Bezeichnung kann abweichen – nutze die Suche nach: QUIC, HTTP/3.  
Das hilft, Netzwerk-Eigenheiten (UDP-Verkehr) von echten Leaks zu trennen.  
Nebenwirkung: Manche Seiten laden anders oder langsamer, bis du QUIC/HTTP/3 wieder aktivierst.

## Wege

### Weg A (sichtbar, alltagstauglich)

1. Entscheide, was du prüfen willst: Heimnetz, öffentliches WLAN oder eine zusätzliche Schutzverbindung.  
2. Schließe Parallel-Effekte aus: Deaktiviere vorübergehend Proxy/VPN, wenn du „nackt“ messen willst.  
3. Miss die Außenansicht mit [IP-Leak-Test](/tests/ip-leak-test/) und notiere den Anbieter.  
4. Miss DNS mit [DNS-Leak-Test](/tests/dns-leak-test/) und prüfe, ob die DNS-Server zu deinem Netz passen.  
5. Prüfe WebRTC mit [WebRTC-Test](/tests/webrtc-test/) – besonders relevant im Browser.  
6. Wenn IPv6 im Ergebnis auftaucht: Prüfe, ob das zu deiner Einrichtung passt.  
7. Im Heimnetz: Router-Updates prüfen, Fernzugriff aus, WPA2/WPA3 prüfen, WPS aus, Gäste-WLAN aktivieren.  
8. Im öffentlichen WLAN: Auto-Verbinden deaktivieren, WLAN-Login zuerst, danach erneut testen.  
9. Wenn Ergebnisse „springen“: Teste zu einer anderen Tageszeit und einmal mit einem zweiten Gerät im selben Netz.

<details><summary>Weg B (Fortgeschritten)</summary>

- Prüfe IPv6 gezielt und entscheide bewusst: IPv6 sauber unterstützen oder konsequent deaktivieren.
  - Je nach Router/Anbieter kann IPv6 trotz „aus“ teilweise weiter aktiv sein.
- Nutze konsequent einen DNS-Weg statt Mischbetrieb.
  - Beispiel: System-DNS oder verschlüsseltes DNS (DNS over HTTPS, DoH = DNS-Anfragen über HTTPS; oder DNS over TLS, DoT = DNS-Anfragen über TLS).
- Bei öffentlichen WLANs: Nutze bevorzugt einen eigenen Hotspot (Mobilfunk), wenn du dich einloggen oder bezahlen musst.
- Achte auf Split-Tunneling (nur ein Teil des Verkehrs läuft durch den Schutzdienst).
  - Prüfe, ob dein Browser oder einzelne Apps ausgenommen sind.
- Wenn du Filter im Heimnetz nutzt: Prüfe, ob QUIC/HTTP/3 deine Erwartungen verändert, und dokumentiere das Ergebnis.
- Trenne Geräteklassen: Gäste-WLAN für Besuch und „smarte“ Geräte, Hauptnetz für Laptop/Telefon.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.
- Prüfe die tatsächlich genutzten DNS-Server im Netzwerkverkehr (Paketmitschnitt) statt nur per Testseite.
- Verifiziere, ob IPv6-Verkehr das Gerät verlässt, auch wenn du „nur IPv4“ erwartest.
- Prüfe, ob UDP/443 (typisch für QUIC) parallel zu TCP/443 genutzt wird.
- Kontrolliere, ob Standard-Gateway und DNS im Heimnetz wirklich dein Router sind (nicht ein „Zwischengerät“).
- Dokumentiere Tests mit Zeit, Netz (SSID), Gerät und aktivierten Schutzfunktionen.
Achtung: Paketmitschnitte können sensible Daten enthalten. Speichere sie nur, wenn nötig, und lösche sie danach.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob IP- und DNS-Ergebnisse stabil bleiben, wenn du im selben Netz bleibst.  
- Wenn ein DNS-Test plötzlich andere Server zeigt, prüfe erneut nach Router-Neustart oder mit einem zweiten Gerät.  
- Wenn WebRTC zusätzliche IPs zeigt, prüfe nach Browser-Neustart erneut.

<details><summary>Mehr Prüfungen & Hinweise</summary>

- Prüfe DNS, IP und WebRTC jeweils zweimal: einmal im privaten Fenster, einmal normal.
- Teste im Heimnetz zusätzlich im Gäste-WLAN. Die Ergebnisse sollten in sich konsistent sein.
- Wenn du IPv6-Probleme vermutest: Lies die Einordnung unter [IPv6-Leaks erkennen](/netzwerk/leaks/ipv6/) und prüfe, ob dein Anbieter IPv6 „nativ“ liefert.
- Wenn du im öffentlichen WLAN einen Login brauchst: erst WLAN-Login, dann Tests. Sonst wirken Ergebnisse oft „kaputt“.
- Wenn du häufig wechselnde Länder/Anbieter siehst: Prüfe, ob dein Mobilfunk Carrier-Grade NAT nutzt oder ob am Router eine Umleitung aktiv ist (je nach Modell).

</details>

## Probleme & Lösungen

- **Problem:** Der DNS-Test zeigt andere Anbieter als erwartet.  
  **Lösung:** Prüfe, ob du parallel mehrere DNS-Wege nutzt (System-DNS plus verschlüsseltes DNS). Entscheide dich für einen Weg und teste erneut.

- **Problem:** Im öffentlichen WLAN klappt der Internetzugang nur „ohne Schutz“.  
  **Lösung:** Melde dich zuerst im WLAN-Login an und aktiviere Schutzdienste erst danach wieder.

- **Problem:** IPv6 taucht auf, obwohl du „nur IPv4“ erwartest.  
  **Lösung:** Prüfe Router und Gerät auf IPv6, und entscheide: IPv6 sauber nutzen oder konsequent deaktivieren (je nach Router/Version).

- **Problem:** Filter oder Kinderschutz wirkt „umgangen“, besonders bei Tests.  
  **Lösung:** Teste mit deaktiviertem QUIC/HTTP/3 oder blocke UDP/443 im Heimnetz testweise. Miss danach erneut.

- **Problem:** Du verbindest dich aus Versehen mit dem falschen Hotspot.  
  **Lösung:** Deaktiviere Auto-Verbinden, lösche gespeicherte Netze und prüfe den Netzwerknamen vor dem Verbinden.

- **Problem:** Heimnetz fühlt sich „unsicher“ an (viele Geräte, Gäste, IoT).  
  **Lösung:** Nutze Gäste-WLAN, deaktiviere WPS, setze WPA2/WPA3 und halte den Router aktuell.

- **Problem:** Ergebnisse unterscheiden sich stark zwischen Geräten im selben Netz.  
  **Lösung:** Prüfe pro Gerät Browser-Funktionen (z. B. verschlüsseltes DNS) und wiederhole Tests im privaten Fenster.

## Nicht gelöst

- Leak-Tests erkennen nicht, ob Apps im Hintergrund Daten senden, solange es nicht als Leak sichtbar wird.  
- Wenn dein Gerät kompromittiert ist (Schadsoftware, Stalkerware), sind Netzwerk-Tests nur begrenzt hilfreich – der Angreifer sitzt „auf dem Gerät“.  
- Wenn dein Router kompromittiert ist oder jemand Admin-Zugriff hat, kann Verkehr umgeleitet werden, auch wenn Tests unauffällig wirken.  
- Schutzdienste ändern nicht, was du in Konten preisgibst (Login, Profil, Inhalte).  
- Öffentliches WLAN bleibt ein Vertrauensproblem: Betreiber und Umgebung können Verhalten beeinflussen, auch ohne „klassisches Leak“.

## FAQ

**Was ist der häufigste Fehler?**

Unsichere Router-Defaults und fehlende Updates. Danach: Leaks (DNS/IPv6/WebRTC) und Gastnetz fehlt.

**Hilft Firewall immer?**

Sie ist wichtig, aber ersetzt keine Updates und keinen sicheren Router. Nutze sie als Schicht, nicht als Wunder.

**Public WLAN – was tun?**

Vermeide sensible Logins, nutze HTTPS, ggf. VPN, und deaktiviere automatische Verbindungen.

## Quellen

- [BSI – WLAN sicher einrichten (BSI für Bürger)](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Online-kommunizieren/WLAN/wlan_node.html)
- [Wi-Fi Alliance – WPA3](https://www.wi-fi.org/discover-wi-fi/security)
- [RFC 8200 – Internet Protocol, Version 6 (IPv6) Specification](https://www.rfc-editor.org/rfc/rfc8200)
- [RFC 9000 – QUIC: A UDP-Based Multiplexed and Secure Transport](https://www.rfc-editor.org/rfc/rfc9000)
- [RFC 8484 – DNS Queries over HTTPS (DoH)](https://www.rfc-editor.org/rfc/rfc8484)
- [MDN – WebRTC API](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)

## Weiter

- [DNS-Leaks prüfen und einordnen](/netzwerk/leaks/dns/)
- [IP-Leaks verstehen](/netzwerk/leaks/ip/)
- [IPv6-Leaks erkennen](/netzwerk/leaks/ipv6/)
- [WebRTC-Leaks im Browser](/netzwerk/leaks/webrtc/)
- [Öffentliches WLAN sicher nutzen](/netzwerk/public-wlan/)
- [Router-Sicherheit im Heimnetz](/netzwerk/router-sicherheit/)
