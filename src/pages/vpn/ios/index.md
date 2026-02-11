---
layout: "@/layouts/DocLayout.astro"
title: "VPN auf iOS richtig nutzen: Leaks prüfen und lösen"
url: "/vpn/ios/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "VPN auf iOS im Alltag sicher nutzen: Status prüfen, IP- und DNS-Leaks erkennen, IPv6/WebRTC testen und Sperren oder Abbrüche mit klaren Schritten beheben."
---
Ein VPN auf iOS ist schnell „an“. Trotzdem nervt es oft im Alltag. Seiten laden langsam. Video-Dienste sperren. Eine Bank-App meckert. Oder die Verbindung fällt weg, ohne dass du es merkst.

Riskant wird es, wenn du dich dann zu sicher fühlst. Ein VPN kann deine öffentliche IP ändern. Es verhindert aber nicht automatisch Lecks bei DNS (Namensauflösung), IPv6 oder im Browser über WebRTC (Echtzeit-Kommunikation).

Sinnvoll, wenn du oft in fremden WLANs bist oder dein Verkehr nicht direkt deinem Anschluss zugeordnet sein soll.  
Grenze: Ein VPN ersetzt keine Gerätesicherheit und macht dich nicht automatisch anonym.

## Kurzfazit
- Wenn du nur 10 Minuten hast: VPN korrekt einrichten, Leaks testen und Split‑Tunneling vermeiden.
- Wichtig: VPN ist kein Anti‑Tracking‑Allheilmittel – nutze es für die passenden Risiken.

## Ziel

- Weg A: VPN bewusst nutzen und mit einfachen Tests auf Lecks prüfen.
- Weg B: Automatik und Ausnahmen (getrennte Datenwege) kontrolliert einsetzen.
- Weg C: Systematisch prüfen und typische Fehlerquellen sauber eingrenzen.

Stoppsignal: Wenn dein iPhone von Firma oder Schule verwaltet wird oder ein Pflicht-VPN nutzt, ändere nichts ohne die zuständige IT.  
Stoppsignal: Wenn du wegen des VPN keinen Zugang zu Bank- oder Notfall-Diensten bekommst, pausiere und gehe Schritt für Schritt zurück.

Aufwand + Komfortkosten: 10–30 Minuten. Möglich sind mehr Akkuverbrauch, geringere Geschwindigkeit und Sperren bei Video- oder Bank-Diensten.

## Schnellstart (10 Minuten)
1) **VPN-Status sichtbar machen**
1. Öffne die iOS-Einstellungen und suche nach „VPN“.
2. Prüfe, ob ein Profil vorhanden ist und ob die Verbindung gerade aktiv ist.
3. Wenn du mehrere VPNs hast: stelle sicher, dass das richtige ausgewählt ist.
Bezeichnung kann abweichen – nutze die Suche nach: VPN, VPN & Geräteverwaltung.  
So vermeidest du „VPN-Symbol da, Tunnel weg“. Bei verwalteten Geräten kann die Option gesperrt sein.

2) **Getrennte Datenwege testweise ausschalten**
4. Öffne die VPN-App oder die Profil-Ansicht des VPN.
5. Suche nach Split-Tunneling (getrennte Datenwege) oder Ausnahmen.
6. Deaktiviere Ausnahmen kurz, damit alles über das VPN geht.
Bezeichnung kann abweichen – nutze die Suche nach: Split-Tunneling, Ausnahmen, ausgeschlossene Apps.  
Das senkt das Risiko von Lecks. Lokale Dienste im Heimnetz können dabei schlechter funktionieren.

3) **IP prüfen (Realitätscheck)**
7. Verbinde das VPN.
8. Öffne den Test: [IP-Leak-Test](/tests/ip-leak-test/).
9. Achte darauf, ob sich die angezeigte öffentliche IP mit VPN ändert.
Du siehst sofort, ob der Tunnel grundsätzlich greift. Eine geänderte IP beweist aber nicht, dass es keine anderen Lecks gibt.

4) **DNS prüfen (häufige Leckquelle)**
10. Lass das VPN verbunden.
11. Öffne den Test: [DNS-Leak-Test](/tests/dns-leak-test/).
12. Achte darauf, ob als DNS-Anbieter dein Heimnetz oder Mobilfunk auftaucht.
Damit erkennst du, ob Namensauflösung am VPN vorbei läuft. Manche Tests zeigen mehrere DNS-Server, wichtig sind unerwartete Treffer.

5) **IPv6 und WebRTC grob prüfen**
13. Nutze erneut den [IP-Leak-Test](/tests/ip-leak-test/) und achte auf IPv6-Ergebnisse.
14. Prüfe Browser-Leaks mit: [WebRTC-Test](/tests/webrtc-test/).
15. Wenn etwas auffällig ist, lies unten bei „Probleme & Lösungen“ weiter.
So deckst du typische Lecks auf. WebRTC-Ergebnisse hängen vom Browser und vom Nutzungsfall ab.

## Wege

### Weg A

1. Nutze das VPN gezielt, zum Beispiel in fremden WLANs oder auf Reisen.
2. Verbinde das VPN, bevor du sensible Apps öffnest (Bank, E-Mail, Konten).
3. Prüfe den Status in iOS kurz, bevor du dich darauf verlässt.
4. Wenn du Lecks vermeiden willst, nutze vorerst keine Ausnahmen bei getrennten Datenwegen.
5. Mache den Check: [IP-Leak-Test](/tests/ip-leak-test/).
6. Mache den Check: [DNS-Leak-Test](/tests/dns-leak-test/).
7. Wenn du IPv6 siehst, lies dazu: [IPv6-Leaks](/netzwerk/leaks/ipv6/).
8. Wenn du Browser-Videotelefonie nutzt, lies dazu: [WebRTC-Leaks](/netzwerk/leaks/webrtc/).
9. Wenn ein Dienst mit VPN streikt, schalte das VPN kurz aus und danach wieder ein.
10. Merke dir deinen Normalzustand ohne VPN (IP und typische DNS-Anbieter), damit du Abweichungen erkennst.

<details><summary>Weg B (Fortgeschritten)</summary>

- Prüfe, ob deine VPN-Lösung automatisches Verbinden „bei Bedarf“ unterstützt.
- Nutze Automatik nur, wenn sie bei dir stabil läuft, sonst steigen Akkuverbrauch und Abbrüche.
- Wenn du Ausnahmen brauchst, setze sie sparsam und teste danach IP und DNS erneut.  
Bezeichnung kann abweichen – nutze die Suche nach: automatisch verbinden, bei Bedarf, On-Demand, Ausnahmen.
- Nach iOS-Updates: einmal IP, DNS, IPv6 und WebRTC prüfen, bevor du dich wieder darauf verlässt.
- Wenn du oft öffentliche WLANs nutzt, lies zusätzlich: [Public WLAN](/netzwerk/public-wlan/) und [Captive Portal](/vpn/captive-portal/).

</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.

- Prüfe systematisch nach Kategorien: [VPN-Leaks](/vpn/leaks/) und [Netzwerk-Leaks](/netzwerk/leaks/).
- Entscheide bewusst, wie du mit IPv6 umgehst: sauber über VPN oder konsequent vermeiden, je nach Anbieter.
- Prüfe WebRTC im Kontext: tritt es nur in einem Browser auf oder in mehreren?
- Wenn du Ausnahmen nutzt, dokumentiere sie und kontrolliere nach Änderungen immer DNS und IP.
- Bei Abbrüchen: beobachte, ob Wechsel zwischen WLAN und Mobilfunk die Verbindung stört, und reduziere aggressive Automatik.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob im [IP-Leak-Test](/tests/ip-leak-test/) mit VPN eine passende, stabile IP erscheint.
- Achte darauf, ob im [DNS-Leak-Test](/tests/dns-leak-test/) keine DNS-Anbieter aus deinem Heimnetz oder Mobilfunk auftauchen.
- Achte darauf, ob du nach einem Netzwechsel (WLAN ↔ Mobilfunk) noch wirklich verbunden bist.

<details><summary>Mehr Checks</summary>

- Wiederhole IP und DNS nach einem iOS-Update oder nach Änderungen in der VPN-App.
- Prüfe WebRTC in dem Browser, den du wirklich nutzt, nicht nur im Standardbrowser.
- Wenn du Ausnahmen nutzt, teste direkt danach erneut, bevor du dich im Alltag darauf verlässt.

</details>

## Probleme & Lösungen

- **Problem:** Video-Dienste sperren oder liefern schlechte Qualität.  
  **Lösung:** VPN kurz deaktivieren oder einen anderen Standort im selben Anbieter wählen.

- **Problem:** Bank- oder Bezahl-App verweigert die Anmeldung.  
  **Lösung:** VPN für den Vorgang deaktivieren und danach wieder aktivieren.

- **Problem:** Akkuverbrauch steigt deutlich.  
  **Lösung:** Prüfe, ob das VPN dauerhaft aktiv ist oder häufig neu verbindet, und reduziere Automatik.

- **Problem:** Internet wirkt „eingefroren“, obwohl VPN aktiv aussieht.  
  **Lösung:** VPN trennen und neu verbinden, danach Netzwechsel (WLAN/Mobilfunk) vermeiden.

- **Problem:** DNS-Test zeigt weiterhin DNS aus deinem Heimnetz oder Mobilfunk.  
  **Lösung:** Deaktiviere Ausnahmen bei getrennten Datenwegen und teste DNS erneut.

- **Problem:** IPv6-Ergebnis wirkt wie ein Leck.  
  **Lösung:** Prüfe unter [IPv6-Leaks](/netzwerk/leaks/ipv6/), ob dein VPN IPv6 sauber tunnelt.

- **Problem:** WebRTC-Test zeigt zusätzliche IP-Infos.  
  **Lösung:** Prüfe unter [WebRTC-Leaks](/netzwerk/leaks/webrtc/), was dein Browser preisgibt und wie du es begrenzt.

- **Problem:** Im Hotel-WLAN erscheint eine Anmeldeseite, danach geht nichts mehr.  
  **Lösung:** Erst im WLAN anmelden (Captive Portal), dann VPN verbinden, siehe [Captive Portal](/vpn/captive-portal/).

## Nicht gelöst

- Ein VPN schützt nicht, wenn dein Gerät kompromittiert ist (Schadsoftware, Stalkerware, Admin-Zugriff).
- Ein VPN macht dich nicht anonym: Der VPN-Anbieter kann deinen Verkehr sehen.
- Ein VPN verhindert kein Tracking in Apps oder im Browser, dafür brauchst du eigene Maßnahmen.
- Ein VPN kann Ausfälle oder Sperren auslösen, besonders bei Streaming und Banking.
- Ein VPN verhindert keine Konto-Übernahme, wenn Passwort und 2FA schwach sind.

## FAQ

**Brauche ich wirklich ein VPN?**

Nicht immer. VPNs helfen v. a. gegen unsichere WLANs und zur Trennung von Netzwerken, sind aber kein Tracking-Allheilmittel.

**Warum leakt IP/DNS trotz VPN?**

Oft liegt es an Split-Tunneling, IPv6/WebRTC oder falschen DNS-Einstellungen. Prüfe Leaks und setze die passenden Fixes.

**Was ist mit „No-Logs“?**

Behauptungen sind nicht beweisbar. Achte auf transparente Technik, Audits, klare Rechtslage und nachvollziehbare Reports.

## Quellen

- [VPN-Überblick für die Implementierung von Apple-Geräten (Apple Support)](https://support.apple.com/de-de/guide/deployment/depae3d361d0/web)
- [Übersicht über die Einstellungen für die VPN-Payload (Apple Support)](https://support.apple.com/de-de/guide/deployment/dep2d2adb35d/web)
- [VPN On Demand Rules (Apple Developer Documentation)](https://developer.apple.com/documentation/networkextension/vpn-on-demand-rules)
- [Routing your VPN network traffic (Apple Developer Documentation)](https://developer.apple.com/documentation/networkextension/routing-your-vpn-network-traffic?changes=_1)
- [Using Multicast DNS to protect privacy when exposing ICE candidates (IETF)](https://rtcweb-wg.github.io/mdns-ice-candidates/draft-ietf-mmusic-mdns-ice-candidates.html)
- [RTCIceCandidateStats (MDN Web Docs)](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats)

## Weiter

- [VPN Schnellstart](/vpn/schnellstart/)
- [VPN-Leaks](/vpn/leaks/)
- [Split-Tunneling](/vpn/split-tunneling/)
- [Netzwerk-Leaks](/netzwerk/leaks/)
- [DNS](/dns/)
- [Public WLAN](/netzwerk/public-wlan/)
