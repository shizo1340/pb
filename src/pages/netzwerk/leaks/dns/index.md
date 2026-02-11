---
layout: "@/layouts/DocLayout.astro"
title: "DNS-Leak vermeiden: DNS-Abfragen im VPN sicher halten"
url: "/netzwerk/leaks/dns/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "DNS-Leak vermeiden: Schritte zum Testen, Not-Aus-Schalter im VPN nutzen, IPv6-Fallen vermeiden und Ergebnisse sicher einordnen – auch im öffentlichen WLAN."
---
Du nutzt ein VPN oder hast DNS umgestellt – und trotzdem zeigt der Test „fremde“ DNS-Server.
Das ist frustrierend, weil es sich nach „alles richtig“ anfühlt, aber doch etwas durchrutscht.

Ein DNS-Leak heißt: DNS-Abfragen (Domain → IP) laufen nicht so, wie du es erwartest.
Dann können z. B. Netzbetreiber oder WLAN-Anbieter sehen, welche Domains du auflöst – auch wenn der Rest „geschützt“ wirkt.

Ziel: Du erkennst echte Leaks, stellst die häufigsten Ursachen ab und weißt, was realistisch ist.

Sinnvoll, wenn du VPN nutzt, öffentliches WLAN verwendest oder bewusst einen anderen DNS-Server eingestellt hast.  
Grenze: Das versteckt nicht deine IP-Adresse gegenüber Webseiten und verhindert kein Webtracking im Browser.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

Weg A: Leaks erkennen und die häufigsten Ursachen ohne Technik-Frust abstellen.  
Weg B: DNS systemweit sauber erzwingen (inklusive Router/IPv6) und Tests stabil interpretieren.  
Weg C: Mit Netzwerk-Checks nachvollziehen, wohin DNS wirklich geht – auch bei Sonderfällen.

Stoppsignal: Wenn nach Weg A weiter wechselnde DNS-Server auftauchen oder dein VPN DNS nicht steuern kann, geh zu Weg B (oder akzeptiere die Grenze).  
Aufwand + Komfortkosten: 10–30 Minuten; einzelne Netzwerke/Apps können langsamer werden oder kurzzeitig nicht funktionieren.

## Schnellstart (10 Minuten)
1) DNS-Leak reproduzierbar testen (Vorher/Nachher)
1. Teste einmal ohne VPN im gleichen Netzwerk.
2. Aktiviere VPN bzw. deine DNS-Änderung und teste erneut.
3. Wiederhole den Test im privaten Browserfenster.
4. Wenn möglich: teste einmal über Mobilfunk statt WLAN.
Das gibt dir einen sauberen Vergleich, statt nur ein Bauchgefühl.  
Nebenwirkung: Tests zeigen oft mehrere Server/Standorte durch Lastverteilung – das ist nicht automatisch ein Leak.

2) VPN so einstellen, dass DNS nicht „ausweicht“
5. Öffne die VPN-App und aktiviere den Not-Aus-Schalter, der Internet ohne VPN blockiert.
6. Suche nach einer Option, die DNS nur über das VPN nutzt (oft „DNS-Leak-Schutz“).
7. Trenne die VPN-Verbindung kurz: idealerweise geht dann kein Verkehr „am VPN vorbei“.
Bezeichnung kann abweichen – nutze die Suche nach: „Kill Switch“ oder „Internet blockieren“.  
Das verhindert, dass DNS bei kurzen VPN-Aussetzern heimlich ins WLAN/Provider-DNS zurückfällt.  
Nebenwirkung: Du kannst kurz „kein Internet“ sehen, wenn das VPN wackelt oder neu verbindet.

3) IPv6 als Leak-Ursache prüfen
8. Starte den DNS-Leak-Test erneut und achte auf Hinweise zu IPv6.
9. Prüfe in der VPN-App, ob IPv6 unterstützt oder blockiert wird.
10. Wenn Leaks nur bei IPv6 auftreten: deaktiviere IPv6 testweise am Gerät oder im Router und teste nochmal.
Bezeichnung kann abweichen – nutze die Suche nach: „IPv6“.  
So findest du die typische „IPv4 ok, IPv6 leakt“-Falle.  
Nebenwirkung: IPv6 abzuschalten ist ein Workaround und kann in manchen Netzen Nachteile haben.

4) „Verschlüsseltes DNS“ richtig einordnen und gezielt nutzen
11. Wenn verfügbar: aktiviere verschlüsseltes DNS systemweit (DoH/DoT).
12. Teste danach erneut auf DNS-Leaks.
13. Wenn du es nur im Browser aktivierst: Apps nutzen oft weiter das System-DNS.
Bezeichnung kann abweichen – nutze die Suche nach: „Privates DNS“, „DNS über HTTPS“ oder „verschlüsseltes DNS“.  
Das senkt Mitlesen und Manipulation im Netzwerk, besonders in fremden WLANs.  
Nebenwirkung: Dein DNS-Anbieter kann Anfragen weiterhin sehen, und manche Filter/Portale können zicken.

5) Öffentliches WLAN: erst anmelden, dann schützen
14. Wenn ein WLAN-Anmeldeportal erscheint: erst anmelden, dann VPN/verschlüsseltes DNS aktivieren.
15. Deaktiviere „automatisch verbinden“ für offene Netzwerke.
16. Wenn möglich: nutze lieber Mobilfunk oder einen persönlichen Hotspot.
Das verhindert den Klassiker „VPN an → Login geht nicht → DNS weicht aus“.  
Nebenwirkung: Du musst das VPN nach jeder neuen WLAN-Anmeldung kurz neu starten.

## Wege

### Weg A

- Teste gezielt mit [DNS-Leak-Test](/tests/dns-leak-test/) und notiere: ohne VPN vs. mit VPN.  
  Damit siehst du schnell, ob dein Setup grundsätzlich passt. Es kann sein, dass einzelne Tests unterschiedlich „viel“ anzeigen.

- Aktiviere in der VPN-App den Not-Aus-Schalter (Kill Switch) und – falls vorhanden – DNS-Leak-Schutz.  
  Das reduziert Ausweichwege bei Verbindungsabbrüchen. Es kann die Verbindung empfindlicher wirken lassen.

- Vergleiche WLAN und Mobilfunk mit gleichen Einstellungen.  
  So erkennst du netzabhängige Ursachen (Hotel/Café vs. Zuhause). Nebenwirkung: Ergebnisse schwanken, wenn das Netz instabil ist.

- Prüfe IPv6 explizit und behandle es als eigene Baustelle.  
  Das löst viele „mysteriöse“ Fälle. Ein temporäres IPv6-Aus kann später wieder rückgängig gemacht werden.

- Im Heimnetz: Halte Router-Firmware aktuell und nutze WPA2 oder WPA3.  
  Das senkt Manipulation im WLAN. Nebenwirkung: Sehr alte Geräte können mit modernem WLAN Probleme bekommen.

<details><summary>Weg B (Fortgeschritten)</summary>

- Stelle verschlüsseltes DNS systemweit ein, nicht nur im Browser (DoH/DoT).  
  Das bringt Konsistenz über Apps hinweg. Es kann in manchen Netzen zu Blockaden oder Captive-Portal-Problemen führen.

- Prüfe am Router: Gastnetz getrennt, Firmware aktuell, keine unerwarteten DNS-Weiterleitungen.  
  Das verhindert „Router macht sein eigenes DNS“. Nebenwirkung: Änderungen am Router können kurz das Netz unterbrechen.

- Behandle IPv6 bewusst: Entweder VPN kann IPv6 tunneln, oder du blockierst/limitierst es gezielt.  
  Das verhindert den häufigsten Leak-Pfad. Nebenwirkung: Manche Dienste bevorzugen IPv6 und reagieren sensibel.

- Lies kurz nach, wie DoH/DoT transportiert wird, damit Tests sinnvoll bleiben: [DNS: DoH und DoT verstehen](/dns/doh-dot/).  
  Das spart Fehlinterpretationen. Nebenwirkung: Du musst einmal die Begriffe sortieren.
</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.

- Prüfe DNS- und IP-Leaks gemeinsam: [IP-Leaks vermeiden](/netzwerk/leaks/ip/) und [IPv6-Leaks vermeiden](/netzwerk/leaks/ipv6/).  
  Das zeigt, ob nur DNS oder generell der Tunnel „reißt“. Nebenwirkung: Du hast mehr Messwerte, die du einordnen musst.

- Mache einen Netzwerk-Mitschnitt und filtere nach DNS (Port 53) sowie DoT (Port 853).  
  Damit siehst du echte Ausreißer statt Test-Rauschen. Nebenwirkung: Mitschnitte sind technisch und können sensibel sein.

- Wenn du DoH vermutest: suche nach HTTPS-Verbindungen zu DoH-Endpunkten und gleiche sie mit deinen Einstellungen ab.  
  Das klärt, ob Apps/Browser „ihr eigenes DNS“ machen. Nebenwirkung: Ohne Erfahrung ist das leicht misszuverstehen.

- Teste bei komischen Abbrüchen mit deaktiviertem QUIC/HTTP/3: [QUIC im Netzwerk einordnen](/netzwerk/quic/).  
  Das kann Stabilitätsprobleme vom Leak-Thema trennen. Nebenwirkung: Manche Seiten werden minimal langsamer.
</details>

## So merkst du, dass es wirkt

- Achte darauf, ob der DNS-Leak-Test mit aktivem VPN stabil dieselbe Resolver-Gruppe zeigt.
- Achte darauf, ob bei kurzen VPN-Aussetzern nicht plötzlich Provider-DNS auftaucht.
- In öffentlichem WLAN: Wenn du erst nach der Anmeldung das VPN aktivierst, sollten Tests reproduzierbarer werden.

<details><summary>Mehr Checks</summary>

- „Standort“ im Test ist oft der Standort des DNS-Servers, nicht deiner Person.
- Wenn nur der Browser DoH nutzt, können Apps trotzdem System-DNS verwenden – das ist kein Widerspruch.
- Wenn du IPv6 deaktivierst, prüfe später, ob dein VPN inzwischen IPv6 sauber unterstützt, und schalte es wieder an.
</details>

## Probleme & Lösungen

- **Problem:** Im Test erscheinen trotz VPN DNS-Server deines Internetanbieters.  
  **Lösung:** Aktiviere Not-Aus-Schalter und DNS-Leak-Schutz im VPN, dann erneut testen.

- **Problem:** IPv4 wirkt sauber, aber IPv6 zeigt andere DNS-Ergebnisse.  
  **Lösung:** Prüfe IPv6-Unterstützung im VPN; sonst IPv6 testweise deaktivieren oder Weg B nutzen.

- **Problem:** Im Hotel/Café funktioniert Internet nur ohne VPN.  
  **Lösung:** Erst im WLAN-Anmeldeportal anmelden, dann VPN aktivieren und danach neu testen.

- **Problem:** Du siehst ständig wechselnde DNS-Server und Standorte.  
  **Lösung:** Test mehrfach wiederholen, privates Fenster nutzen und WLAN/Mobilfunk vergleichen.

- **Problem:** DoH im Browser ist aktiv, aber Apps zeigen weiter „fremdes“ DNS.  
  **Lösung:** Verschlüsseltes DNS systemweit konfigurieren oder ein VPN nutzen, das DNS durch den Tunnel erzwingt.

- **Problem:** Nach Änderungen am Router wirkt alles „langsamer“ oder instabil.  
  **Lösung:** Firmware aktualisieren, WLAN absichern, Änderungen zurücknehmen und Schritt für Schritt erneut aktivieren.

## Nicht gelöst

- DNS-Leak-Vermeidung verhindert nicht, dass Webseiten deine IP-Adresse sehen.
- Sie verhindert kein Tracking im Browser durch Cookies, Fingerprinting oder Anmeldekonten: [Tracking verstehen](/tracking/).
- Wenn dein Gerät kompromittiert ist (z. B. Stalkerware oder Admin-Zugriff), helfen DNS-Einstellungen nur begrenzt: [Überwachung am Gerät erkennen](/geraete-sicherheit/ueberwachung-erkennen/).
- Ein VPN-Anbieter kann DNS-Anfragen weiterhin sehen, wenn er selbst als DNS-Server fungiert oder protokolliert.
- In manchen Netzen (Schule/Unternehmen) können Richtlinien DNS erzwingen oder umleiten – das ist nicht immer wegkonfigurierbar.

## FAQ

**Was ist der häufigste Fehler?**

Unsichere Router-Defaults und fehlende Updates. Danach: Leaks (DNS/IPv6/WebRTC) und Gastnetz fehlt.

**Hilft Firewall immer?**

Sie ist wichtig, aber ersetzt keine Updates und keinen sicheren Router. Nutze sie als Schicht, nicht als Wunder.

**Public WLAN – was tun?**

Vermeide sensible Logins, nutze HTTPS, ggf. VPN, und deaktiviere automatische Verbindungen.

## Quellen

- [DNS über HTTPS in Firefox – Mozilla Support](https://support.mozilla.org/de/kb/firefox-dns-%C3%BCber-https)
- [Privates DNS auf Android – Google-Hilfe](https://support.google.com/android/answer/9654714?hl=de)
- [Netzwerksicherheit in Windows – Microsoft Learn](https://learn.microsoft.com/de-de/windows/security/book/operating-system-security-network-security)
- [RFC 8484: DNS Queries over HTTPS (DoH)](https://www.rfc-editor.org/rfc/rfc8484.html)
- [RFC 7858: Specification for DNS over TLS (DoT)](https://datatracker.ietf.org/doc/html/rfc7858)

## Weiter

- [DNS: DoH und DoT verstehen](/dns/doh-dot/)
- [DNS-Leak-Test](/tests/dns-leak-test/)
- [VPN-Leaks vermeiden](/vpn/leaks/)
- [Öffentliches WLAN sicher nutzen](/netzwerk/public-wlan/)
- [IPv6 im Heimnetz verstehen](/netzwerk/ipv6/)
- [QUIC im Netzwerk einordnen](/netzwerk/quic/)
