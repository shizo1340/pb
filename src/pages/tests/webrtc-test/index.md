---
layout: "@/layouts/DocLayout.astro"
title: "WebRTC-Test: IP-Leaks im Browser erkennen und deuten"
url: "/tests/webrtc-test/"
chapter: "Tests"
type: "test"
format: "test"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "WebRTC Test: Schritt-für-Schritt prüfen, ob Webseiten über WebRTC IP-Adressen sehen, Ergebnisse richtig einordnen und Fehlalarme durch VPN/IPv6 vermeiden."
---
Manchmal zeigt ein WebRTC-Test plötzlich eine IP-Adresse, die du eigentlich verbergen wolltest. Das ist besonders irritierend, wenn du gerade ein VPN nutzt oder nur „kurz“ über einen Proxy surfst.

Hier lernst du, den WebRTC-Test sauber durchzuführen und die Ausgaben richtig zu deuten. Danach weißt du, was wirklich sichtbar ist – und was nur nach Leak aussieht.

Sinnvoll, wenn du prüfen willst, ob eine normale Webseite über WebRTC Netzwerk-Adressen erkennen kann.  
Grenze: Ein WebRTC-Test zeigt nur, was **die Testseite in deinem Browser** über WebRTC auslesen kann.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Was misst es / was nicht

Ein WebRTC-Test misst typischerweise, was eine Webseite über die WebRTC-Schnittstelle abfragen kann, wenn sie eine Verbindung „anbahnt“.

Das misst der Test oft:
- Eine **öffentliche IP-Adresse**, die bei Verbindungsversuchen sichtbar wird (häufig über STUN). Das hilft dir, VPN/Proxy mit der Browser-Sicht zu vergleichen, kann aber je nach Testseite unterschiedlich aussehen.
- **Lokale IP-Adressen** aus deinem Netzwerk (z. B. 192.168.x.x) oder ersetzte Namen. Das kann interne Netzdetails verraten, ist aber nicht automatisch ein „Internet-Leak“.
- **IPv6-Adressen**, falls dein Gerät oder Netz IPv6 nutzt. Das ist nützlich für IPv6-Checks, kann aber bei VPNs ohne IPv6-Support verwirren.
- Ob statt lokaler IPs **mDNS-Namen** auftauchen (mDNS = „Multicast DNS“). Das reduziert die Preisgabe lokaler IPs, ist aber keine Anonymität.

Das misst der Test nicht:
- Ob deine **DNS-Anfragen** lecken. Dafür brauchst du einen DNS-Leak-Test.
- Ob du über **Fingerprinting** wiedererkannt wirst.
- Ob dein VPN-Anbieter oder dein Internetanbieter **Protokolle** führt.
- Ob Apps außerhalb des Browsers Verbindungen aufbauen.

## So testest du richtig

Du bekommst das beste Ergebnis, wenn du immer denselben Ablauf nutzt und nur eine Sache auf einmal änderst.

### Weg A (Basis)

1) Lege fest, was du prüfen willst: ohne VPN/Proxy, mit VPN, mit Proxy. Das macht Ergebnisse vergleichbar, kostet aber zwei bis drei kurze Testläufe.

2) Öffne ein privates Fenster und schließe andere Tabs mit Audio/Video (Meetings, Web-Telefonie). Das reduziert „Störeinflüsse“, kann aber bedeuten, dass du dich neu anmelden musst.  
Bezeichnung kann abweichen – nutze die Suche nach: privat, inkognito.

3) Stelle den Zustand her, den du testen willst (VPN verbinden, Proxy aktivieren) und warte kurz. Das verhindert Momentaufnahmen während des Verbindungswechsels, kostet aber etwas Geduld.

4) Starte den WebRTC-Test und notiere drei Dinge: öffentliche IP, lokale IP oder mDNS/.local, IPv6 ja/nein. Das gibt dir eine klare Checkliste, wirkt aber „zu viel“ für einen Schnellblick.

<details><summary>Weg B (Fortgeschritten)</summary>

1) Wiederhole den Test nach einem Browser-Neustart. Das deckt „Zufallstreffer“ auf, dauert aber ein paar Minuten.

2) Wechsle einmal das Netzwerk (z. B. WLAN → Hotspot) und teste erneut. Das zeigt, ob ein Problem nur in einem Netz auftritt, kann aber unterwegs unpraktisch sein.

3) Prüfe bei VPN-Nutzung zusätzlich einmal, ob IPv6 mit getunnelt wird. Das verhindert IPv6-Überraschungen, kann aber je nach VPN-Einstellung etwas Sucharbeit sein.

Hinweis: Ein Proxy deckt oft nur HTTP(S) ab. WebRTC nutzt häufig UDP und läuft dann am Proxy vorbei.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

1) Teste im gleichen Browser einmal ohne Erweiterungen (neues Profil oder frische Sitzung). Das isoliert Erweiterungs-Effekte, kann aber deine gewohnte Umgebung verändern.

2) Teste zusätzlich in einem zweiten Browser, den du ohnehin installiert hast. Das zeigt Browser-Unterschiede, kostet aber einen zweiten Setup-Schritt.

3) Mache einen A/B-Vergleich: gleicher Standort, gleiches Netz, VPN an/aus, sonst nichts ändern. Das ist die sauberste Methode, ist aber nur sinnvoll, wenn du wirklich vergleichen willst.

</details>

## Ergebnisse verstehen

Ein WebRTC-Test zeigt oft mehrere Werte. Das ist normal, weil dein Gerät mehrere Netzwege haben kann (WLAN, VPN-Schnittstelle, IPv6).

- **Öffentliche IP ist die des VPN**
  - Das ist meist das gewünschte Ergebnis.
  - Es sagt aber nichts über DNS-Leaks oder Fingerprinting.

- **Öffentliche IP ist die deines Internetanbieters, obwohl VPN an ist**
  - Das kann ein echtes Leak sein.
  - Es passiert aber auch, wenn du in Wahrheit nur einen Proxy nutzt.

- **Lokale IPs (192.168.x.x / 10.x.x.x / 172.16–31.x.x)**
  - Das sind interne Adressen aus deinem Heim- oder Firmennetz.
  - Für viele ist das harmlos, für manche Bedrohungsmodelle nicht.

- **mDNS / .local statt lokaler IP**
  - Das deutet darauf hin, dass der Browser lokale IPs gegenüber Webseiten verschleiert.
  - Das ist besser als klare lokale IPs, löst aber nicht alle Tracking-Fragen.

- **IPv6 taucht auf**
  - Wenn du IPv6 nutzt, kann der Test zusätzlich eine IPv6-Adresse zeigen.
  - Wenn dein VPN IPv6 nicht tunnelt, wirkt das wie ein Leak.

<details><summary>Kurz erklärt: ICE, STUN und warum der Test IPs sieht</summary>

- ICE (Interactive Connectivity Establishment) sammelt mögliche Verbindungswege („Kandidaten“).
- STUN-Server helfen, eine von außen sichtbare Adresse zu ermitteln.
- Ein Test zeigt deshalb oft mehr als eine Adresse.

</details>

## So merkst du, dass es wirkt

Achte darauf, ob …
- … bei „VPN an“ die **öffentliche IP** stabil zum VPN passt, auch nach Browser-Neustart.
- … statt lokaler IPs überwiegend **mDNS/.local** erscheint (oder gar keine lokalen Adressen).
- … bei IPv6 entweder **keine IPv6** erscheint oder sie erkennbar zum VPN-Setup passt.

<details><summary>Zusätzliche Checks (wenn du sicher gehen willst)</summary>

- Wiederhole den Test nach einem Netzwechsel (WLAN ↔ Mobilfunk) und vergleiche die Notizen.
- Deaktiviere testweise eine aktive Verbindung (z. B. WLAN aus) und prüfe, ob „doppelte“ Ergebnisse verschwinden.
- Wenn nur IPv6 auffällig ist: prüfe, ob dein VPN IPv6 unterstützt oder IPv6 im System deaktiviert ist.

</details>

## Probleme & Lösungen

- **Problem:** Der Test zeigt mit VPN trotzdem die IP deines Internetanbieters.  
  **Lösung:** Prüfe zuerst mit einem IP-Leak-Test, ob der Browser generell über das VPN rausgeht. Wenn ja, kontrolliere VPN-Einstellungen wie Split-Tunneling und IPv6-Tunnel.

- **Problem:** Du siehst lokale IPs und glaubst, das sei immer kritisch.  
  **Lösung:** Ordne ein, ob lokale IPs in deinem Bedrohungsmodell relevant sind. Aktualisiere den Browser und prüfe, ob mDNS/.local statt Klartext-IP genutzt wird.

- **Problem:** Mit Proxy bleibt deine echte IP sichtbar.  
  **Lösung:** Das ist häufig, weil WebRTC oft nicht über klassische Proxys läuft. Wenn du IP-Verbergen willst, nutze eine Lösung, die den gesamten Verkehr tunnelt.

- **Problem:** Der Test zeigt gar keine Werte oder bricht ab.  
  **Lösung:** In Firmen-Netzen oder mit strengen Firewalls können STUN-Anfragen blockiert sein. Teste in einem anderen Netz und einmal ohne VPN.

- **Problem:** Nach einem Netzwechsel wirken Ergebnisse „alt“.  
  **Lösung:** Starte den Browser neu und teste im privaten Fenster. Alte Netzwerkzustände können kurz nachwirken.

- **Problem:** Es erscheinen mehrere öffentliche IPs.  
  **Lösung:** Das kann an mehreren aktiven Schnittstellen liegen (WLAN + Mobilfunk, mehrere Tunnel). Deaktiviere testweise eine Verbindung und wiederhole den Lauf.

## Grenzen

- Ein WebRTC-Test zeigt nur, was **eine Webseite in deinem Browser** per WebRTC sehen kann.
- Er ersetzt keinen DNS-Leak-Test und keinen IP-Leak-Test für normale Webaufrufe.
- Er sagt nichts darüber, ob du durch Fingerprinting wiedererkannt wirst.
- Browser und Versionen verhalten sich unterschiedlich, auch auf dem gleichen Gerät.

## Nicht gelöst

- Wenn dein Gerät kompromittiert ist (Schadsoftware, Stalkerware, Admin-Zugriff), hilft ein Browser-Test nicht gegen Überwachung auf Geräteebene.
- Gegen Zwangssituationen (z. B. erzwungene Entsperrung) schützt ein Test nicht.
- Ein WebRTC-Test verhindert keine Korrelation über Konten, Logins oder Tracker außerhalb von WebRTC.
- Gegen Angreifer im gleichen lokalen Netz (z. B. unsicheres WLAN) ist ein WebRTC-Test kein Schutzmechanismus.
- Ob ein Anbieter Logs führt oder Daten weitergibt, klärt kein Browser-Test.

## Weiter

- [WebRTC-Leaks verstehen](/netzwerk/leaks/webrtc/)
- [VPN-Leaks: Überblick](/vpn/leaks/)
- [IP-Leak Test](/tests/ip-leak-test/)
- [DNS-Leak Test](/tests/dns-leak-test/)
- [Browser: WebRTC](/browser/webrtc/)

## FAQ

**Sind Tests 100% zuverlässig?**

Nein. Ergebnisse hängen von Browser/Netzwerk/Updates ab. Nutze sie als Hinweis und prüfe mit Fix-Anleitungen.

**Was bedeutet ein „Leak“?**

Dass Daten am Schutz vorbei rausgehen können. Folge den Fix-Schritten und teste erneut.

**Warum schwanken Werte?**

Fingerprinting ist dynamisch. Auch Werbung/Blocker/Updates ändern Signale.

## Quellen

- [RFC 8445: Interactive Connectivity Establishment (ICE)](https://datatracker.ietf.org/doc/html/rfc8445)
- [RFC 8838: Trickle ICE](https://datatracker.ietf.org/doc/html/rfc8838)
- [IETF-Entwurf: Using mDNS to protect privacy when exposing ICE candidates](https://datatracker.ietf.org/doc/draft-ietf-mmusic-mdns-ice-candidates/)
- [MDN: RTCPeerConnection](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection)
- [MDN: RTCIceCandidate](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate)
- [W3C: WebRTC 1.0](https://www.w3.org/TR/webrtc/)
