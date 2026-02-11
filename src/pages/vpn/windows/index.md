---
layout: "@/layouts/DocLayout.astro"
title: "VPN unter Windows sicher einrichten und Lecks prüfen"
url: "/vpn/windows/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Praxis-Anleitung für VPN unter Windows: Verbindung einrichten, Split-Tunneling verstehen, DNS/IP/IPv6/WebRTC-Lecks prüfen und typische Probleme lösen."
---
Du nutzt ein VPN unter Windows – und trotzdem wirkt es „undicht“ oder unzuverlässig.  
Webseiten sehen noch deine echte IP. Oder DNS-Anfragen laufen am Tunnel vorbei.

Ziel dieser Seite: Du richtest dein VPN unter Windows so ein, dass es im Alltag verlässlich arbeitet.  
Und du kannst prüfen, ob dein Verkehr wirklich durch den Tunnel geht.

Sinnvoll, wenn du im öffentlichen WLAN arbeitest, deine Anschluss-IP nicht überall zeigen willst oder ein Firmennetz erreichen musst.  
Grenze: Ein VPN macht dich nicht anonym und schützt nicht vor Schadsoftware auf dem Gerät.

## TL;DR

- **VPN verbinden und Status in Windows prüfen**
- **Öffentliche IP prüfen (Realitätscheck)**
- **DNS-Leck prüfen (häufigster „trotz VPN“-Effekt)**
- **IPv6 und WebRTC abklopfen (typische Leckpfade)**
- **Split-Tunneling prüfen (Ausnahmen bewusst setzen)**

## Ziel

Weg A: VPN unter Windows stabil nutzen und die wichtigsten Lecks grob ausschließen.  
Weg B: Lecks systematisch testen und bewusst mit Ausnahmen umgehen.  
Weg C: Routen, DNS und Abbruchschutz auf Systemebene prüfen.

Split-Tunneling heißt: Bestimmte Apps umgehen den VPN-Tunnel bewusst.  
Das ist praktisch, kann aber wie ein „Leck“ aussehen.

Stoppsignal: Wenn du Fremdzugriff auf dem Gerät vermutest, löst ein VPN das Grundproblem nicht – starte mit [Verdacht: Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/).  
Stoppsignal: Wenn dein Windows von Arbeit/Schule verwaltet wird, ändere VPN-Profile nicht auf eigene Faust.

Aufwand: 15–30 Minuten.  
Komfortkosten: teils weniger Tempo, einzelne Dienste (Video-Streaming/Onlinebanking) reagieren empfindlich.

## Schnellstart (15 Minuten)
1) **VPN verbinden und Status in Windows prüfen**
1. Öffne die Windows-Einstellungen und gehe zu den Netzwerk-Optionen.
2. Wähle dein VPN-Profil und verbinde dich.
3. Prüfe, ob der Status „Verbunden“ angezeigt wird.
Bezeichnung kann abweichen – nutze die Suche nach: VPN  
Du siehst, ob Windows die Verbindung wirklich als aktiv führt.  
Auf verwalteten Geräten kann das Profil gesperrt sein oder anders heißen.

2) **Öffentliche IP prüfen (Realitätscheck)**
4. Öffne den [IP-Leak-Test](/tests/ip-leak-test/) in einem normalen Browserfenster.
5. Lade die Seite einmal ohne VPN, dann mit VPN neu.
6. Die angezeigte IP sollte sich ändern und nicht mehr zu deinem Anschluss passen.
Du erkennst schnell, ob dein Webverkehr grundsätzlich durch den Tunnel geht.  
Standort-Hinweise können trotzdem bleiben, weil Cookies, Logins oder Tracking weiterwirken.

3) **DNS-Leck prüfen (häufigster „trotz VPN“-Effekt)**
7. Öffne den [DNS-Leak-Test](/tests/dns-leak-test/) mit aktivem VPN.
8. Achte darauf, ob als DNS-Server dein Heimrouter oder Internetanbieter erscheint.
9. Wenn ja: prüfe in der VPN-App, ob DNS über das VPN erzwungen werden kann.
Bezeichnung kann abweichen – nutze die Suche nach: DNS  
Du reduzierst Metadaten-Lecks über DNS, die oft übersehen werden.  
In Firmennetzen oder Gäste-WLANs kann DNS vorgegeben sein und Tests verfälschen.

4) **IPv6 und WebRTC abklopfen (typische Leckpfade)**
10. Prüfe im [IP-Leak-Test](/tests/ip-leak-test/), ob zusätzlich eine IPv6-Adresse angezeigt wird.
11. Führe den [WebRTC-Test](/tests/webrtc-test/) aus.
12. WebRTC ist eine Technik für Videotelefonie im Browser und kann IP-Adressen sichtbar machen.
Bezeichnung kann abweichen – nutze die Suche nach: WebRTC  
Du findest zwei Wege, über die „nebenher“ echte Adressen auftauchen können.  
Strengere WebRTC-Einstellungen können Videoanrufe im Browser beeinträchtigen.

5) **Split-Tunneling prüfen (Ausnahmen bewusst setzen)**
13. Öffne die Einstellungen deiner VPN-Anwendung.
14. Suche nach „Split-Tunneling“, „Ausnahmen“ oder „Apps ohne VPN“.
15. Stelle sicher, dass nur bewusst ausgewählte Programme am VPN vorbeigehen.
Bezeichnung kann abweichen – nutze die Suche nach: Split, Ausnahmen  
Du behältst die Kontrolle darüber, welche Apps wirklich durch den Tunnel gehen.  
Ausnahmen erklären viele „Leaks“, können aber auch unbemerkt Daten am VPN vorbei senden.

## Wege

### Weg A

1. Kläre deinen Zweck: öffentliches WLAN, Dienstzugang oder „Anschluss-IP nicht überall zeigen“.  
So passt du Einstellungen an den Alltag an. Wenn der Zweck unklar bleibt, stellst du oft am falschen Hebel.

2. Nutze „Immer an“ nur dort, wo es dir wirklich hilft.  
Das senkt Fehlersuche und Abbrüche im Alltag. Du musst dafür öfter bewusst verbinden.

3. Aktiviere einen Abbruchschutz (oft „Kill Switch“ genannt).  
Dann blockiert Windows bei Tunnel-Abbruch den Internetverkehr und verhindert echte IP-Leaks. Manche Apps wirken dann „offline“, bis das VPN wieder steht.

4. Lass Split-Tunneling aus, bis du einen konkreten Grund hast.  
Das macht Tests eindeutiger und reduziert Überraschungen. Einzelne Dienste können ohne Ausnahme zickig reagieren.

5. Mache einmal die Basis-Checks: [IP-Leak-Test](/tests/ip-leak-test/), [DNS-Leak-Test](/tests/dns-leak-test/), [WebRTC-Test](/tests/webrtc-test/).  
Du bekommst einen Ausgangszustand, den du später vergleichen kannst. Tests sind Momentaufnahmen und können je nach Netz variieren.

6. Wiederhole die Checks nach großen Windows-Updates oder WLAN-Wechsel.  
So bemerkst du Änderungen früh und kannst reagieren. Das kostet ein paar Minuten und wird leicht vergessen.

7. Wenn dein Browser „DNS über HTTPS (DoH)“ nutzt, entscheide bewusst, was Vorrang hat.  
Sonst kann DNS am VPN vorbei laufen oder anders aussehen als erwartet. Mehr Umstellen kann Nebenwirkungen bei Filtern und Jugendschutz haben (siehe [DoH/DoT](/dns/doh-dot/)).

8. In öffentlichem WLAN: erst Anmeldeportal, dann VPN.  
So vermeidest du „VPN geht nicht“-Fehler durch Captive Portals. Es ist ein Extra-Schritt (siehe [Captive Portals](/vpn/captive-portal/)).

<details><summary>Weg B (Fortgeschritten)</summary>

1. Teste getrennt: Browser, Messenger/Telefonie, Cloud-Sync, Update-Dienste.  
Du findest Programme, die anders routen als der Browser. Das dauert länger, weil du mehrere Apps prüfen musst.

2. Prüfe Windows-Adapterdetails während das VPN verbunden ist.  
Du siehst, welche Schnittstelle aktiv ist und welche DNS-Server Windows nutzt. Fehlinterpretationen sind möglich, wenn gleichzeitig mehrere Netze verbunden sind.
Bezeichnung kann abweichen – nutze die Suche nach: Adapteroptionen

3. Wenn möglich: nutze den integrierten Windows-VPN-Client nur als Vergleich.  
Du erkennst, ob das Problem am Anbieter-Client liegt. Manche Anbieter-Funktionen fehlen dabei (z. B. Spezial-Routing oder eigener Kill Switch).
Bezeichnung kann abweichen – nutze die Suche nach: VPN hinzufügen

4. Ordne IPv6 nüchtern ein: Dein Anschluss kann IPv6 liefern, dein VPN muss das sauber behandeln.  
Wenn IPv6 im Test „nebenher“ erscheint, ist eine Option im VPN-Programm meist sauberer als wildes Abschalten in Windows. Falsche IPv6-Änderungen können Teile deines Netzes kaputt machen.

5. Trenne Nutzungskontexte im Browser (mit/ohne VPN).  
So verwechselst du Standort-Hinweise durch Cookies und Logins weniger. Es kostet Komfort, weil du häufiger Profile wechselst (siehe [Profil-Trennung](/browser/profile-trennung/)).

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

1. Prüfe Standardrouten (IPv4 und ggf. IPv6).  
Mit `route print` oder PowerShell (`Get-NetRoute`) siehst du, ob die Default-Route über die VPN-Schnittstelle geht. Falsche Schlüsse sind möglich, wenn du mehrere Adapter (LAN/WLAN/VMs) aktiv hast.

2. Prüfe DNS auf Systemebene, nicht nur im Browser.  
Mit PowerShell (`Get-DnsClientServerAddress`) siehst du, welche DNS-Server Windows wirklich nutzt. Änderungen am DNS können interne Dienste im Firmennetz stören.

3. Prüfe den Abbruchschutz unter Stress.  
Trenne kurz WLAN (aus/an) und beobachte, ob Verkehr ungeschützt rausgeht. Ein harter Abbruchschutz kann dich dabei kurz komplett „offline“ machen.

4. Behandle IPv6 gezielt.  
Wenn dein Anbieter IPv6 nicht sauber tunnelt, ist eine Option wie „IPv6 über VPN“ oder „IPv6 blockieren“ in der VPN-App oft der richtige Hebel. Eine falsche Windows-Option kann Nebeneffekte im Heimnetz auslösen.

5. Prüfe Ausnahmen und per-App-Regeln.  
Suche nach Regeln wie „Nur diese Apps über VPN“ oder „Diese Apps ohne VPN“. Das erklärt „nur eine App leckt“, kann aber schwer zu debuggen sein, wenn Regeln sich überlappen.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob sich die IP im [IP-Leak-Test](/tests/ip-leak-test/) stabil „VPN-typisch“ verhält, auch nach Browser-Neustart.  
- Achte darauf, ob der [DNS-Leak-Test](/tests/dns-leak-test/) keine DNS-Server deines Heimnetzes zeigt.  
- Achte darauf, ob der [WebRTC-Test](/tests/webrtc-test/) keine „echten“ Adressen neben der VPN-Adresse anzeigt.

<details><summary>Mehr Prüfungen & Hinweise</summary>

- Teste zuhause und im öffentlichen WLAN. Verhalten kann sich unterscheiden.  
- Wenn du IPv6 im Test siehst, prüfe gezielt das Thema (siehe [IPv6-Leaks](/netzwerk/leaks/ipv6/)).  
- Wenn es nur in einem Browser auffällt, liegt es oft an WebRTC oder DNS im Browser (siehe [WebRTC](/browser/webrtc/)).  
- Wenn du Split-Tunneling nutzt: Prüfe, ob genau die Ausnahme-App im Test „leckt“.  
- Wenn das VPN „verbunden“ ist, aber nichts lädt: Oft blockiert ein Captive Portal oder eine Firewall-Regel.

</details>

## Probleme & Lösungen

- **Problem:** Die IP ändert sich im [IP-Leak-Test](/tests/ip-leak-test/) nicht.  
  **Lösung:** Prüfe, ob Windows wirklich „Verbunden“ zeigt und ob der Browser als Ausnahme im Split-Tunneling steht.

- **Problem:** Der [DNS-Leak-Test](/tests/dns-leak-test/) zeigt deinen Heimrouter oder Internetanbieter.  
  **Lösung:** Aktiviere DNS über den Tunnel in der VPN-App und prüfe, ob der Browser eigenes DNS über HTTPS nutzt.

- **Problem:** Webseiten „wissen“ trotzdem deinen Standort.  
  **Lösung:** Prüfe Cookies, Konto-Logins und Standort-Berechtigungen im Browser. IP ist nur ein Signal.

- **Problem:** Video-Streaming oder Onlinebanking blockiert oder fordert ständig Zusatz-Checks.  
  **Lösung:** Nutze für genau diesen Dienst eine bewusste Ausnahme oder verbinde dich dort ohne VPN.

- **Problem:** Öffentliches WLAN funktioniert nur ohne VPN.  
  **Lösung:** Erst am Portal anmelden, dann VPN aktivieren (siehe [Captive Portals](/vpn/captive-portal/)).

- **Problem:** Akkuverbrauch steigt, Laptop wird warm.  
  **Lösung:** VPN nicht dauerhaft laufen lassen und automatische Verbindung auf öffentliche Netze beschränken.

- **Problem:** WebRTC zeigt zusätzliche Adressen trotz VPN.  
  **Lösung:** Passe Browser-Einstellungen an und teste erneut (siehe [WebRTC](/browser/webrtc/)).

- **Problem:** Nur bestimmte Programme umgehen das VPN.  
  **Lösung:** Prüfe Split-Tunneling, per-App-Regeln und ob das Programm eigene Proxy- oder DNS-Einstellungen nutzt.

## Nicht gelöst

- Ein VPN verschiebt Vertrauen: Nicht mehr dein Internetanbieter sieht alles, sondern der VPN-Anbieter.  
- Tracking im Web bleibt: Cookies, Fingerabdrücke und Konto-Logins funktionieren auch mit VPN weiter (siehe [Tracking](/tracking/)).  
- Ein VPN schützt nicht vor Schadsoftware, Stalkerware oder Admin-Zugriff auf dem Gerät.  
- Bei kompromittiertem Gerät kann auch „alles durch VPN“ bedeuten, dass Daten trotzdem abfließen.  
- Ein VPN ist keine Anonymisierung: Für andere Ziele gelten andere Werkzeuge und Risiken (siehe [Tor](/netzwerk/tor/)).

## FAQ

**Brauche ich wirklich ein VPN?**

Nicht immer. VPNs helfen v. a. gegen unsichere WLANs und zur Trennung von Netzwerken, sind aber kein Tracking-Allheilmittel.

**Warum leakt IP/DNS trotz VPN?**

Oft liegt es an Split-Tunneling, IPv6/WebRTC oder falschen DNS-Einstellungen. Prüfe Leaks und setze die passenden Fixes.

**Was ist mit „No-Logs“?**

Behauptungen sind nicht beweisbar. Achte auf transparente Technik, Audits, klare Rechtslage und nachvollziehbare Reports.

## Quellen

- [Herstellen einer VPN-Verbindung unter Windows (Microsoft Support)](https://support.microsoft.com/de-de/windows/herstellen-einer-vpn-verbindung-unter-windows-3d29aeb1-f497-f6b7-7633-115722c1009c)
- [Virtual Private Networks (VPN) – Verbraucherinfos (BSI)](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Router-WLAN-VPN/Virtual-Private-Networks-VPN/virtual-private-networks-vpn_node.html)
- [VPN-Verbindungstypen unter Windows (Microsoft Learn)](https://learn.microsoft.com/de-de/windows/security/operating-system-security/network-security/vpn/vpn-connection-type)
- [Introduction to WebRTC protocols (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Protocols)
- [RFC 8489: Session Traversal Utilities for NAT (STUN) (IETF)](https://datatracker.ietf.org/doc/html/rfc8489)

## Weiter

- [VPN-Schnellstart](/vpn/schnellstart/)
- [VPN-Leaks](/vpn/leaks/)
- [Split-Tunneling](/vpn/split-tunneling/)
- [DNS auf Windows](/dns/windows/)
- [WebRTC im Browser](/browser/webrtc/)
- [IP-Leak-Test](/tests/ip-leak-test/)
