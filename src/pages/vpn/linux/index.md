---
layout: "@/layouts/DocLayout.astro"
title: "VPN unter Linux einrichten und DNS/IP-Leaks prüfen"
url: "/vpn/linux/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Schritt-für-Schritt-Anleitung für VPN unter Linux: einrichten, DNS/IP/IPv6-Leaks prüfen, Split-Tunneling verstehen und typische Fehler sicher beheben."
---
Ein VPN unter Linux ist oft schnell installiert.  
Trotzdem „fühlt“ es sich unsicher an: Seiten werden langsam, Streaming oder Banking zickt, oder Tests zeigen DNS-/IPv6-Leaks.

Ziel dieser Anleitung ist ein VPN unter Linux, das stabil läuft.  
Und bei dem du prüfen kannst, ob wirklich der gewünschte Verkehr durch den Tunnel geht.

Sinnvoll, wenn du in fremden Netzen (Hotel, Bahn, Café) weniger mitlesen lassen willst oder dein IP-Standort für Dienste nicht ständig sichtbar sein soll.  
Grenze: Ein VPN macht dich nicht automatisch anonym und schützt nicht vor Tracking im Browser.

## TL;DR

- **Verbindung sauber neu einrichten (statt alte Reste zu behalten)**
- **IP-Wechsel prüfen (Basis-Check)**
- **DNS-Leaks prüfen (häufigster Stolperstein)**
- **IPv6 bewusst behandeln (sonst „Leak“ trotz VPN)**
- **WebRTC im Browser prüfen (wenn du Web-Video/Calls nutzt)**

## Ziel

Weg A: System-VPN einrichten und mit IP/DNS/WebRTC-Checks absichern.  
Weg B: Leaks gezielter verhindern (DNS/IPv6) und Split-Tunneling bewusst einsetzen.  
Weg C: Profi-Absicherung mit Firewall-Regeln und harten Prüfungen.

Stoppsignal: Wenn du „Anonymität gegen den VPN-Anbieter“ brauchst oder dein Gerät möglicherweise kompromittiert ist, löst ein VPN das Kernproblem nicht.  
Aufwand: 10–30 Minuten; Komfortkosten: gelegentlich langsamer, Captive-Portale sowie Streaming/Banking können haken.

## Schnellstart (15 Minuten)
1) **Verbindung sauber neu einrichten (statt alte Reste zu behalten)**  
1. Trenne bestehende VPN-Verbindungen und lösche alte Profile, die du nicht mehr nutzt.
2. Lege eine neue VPN-Verbindung mit Zugangsdaten oder Konfigurationsdatei deines Anbieters an.
3. Verbinde dich und prüfe, ob die Verbindung aktiv bleibt, wenn du WLAN kurz aus- und wieder einschaltest.
Bezeichnung kann abweichen – nutze die Suche nach: VPN, Netzwerk, Verbindungen.  
Dabei gehen oft alte Ausnahmen verloren (z. B. lokale Netze) und müssen später neu gesetzt werden.  
Du reduzierst Altlasten und bekommst einen klaren Ausgangspunkt für alle Tests.

2) **IP-Wechsel prüfen (Basis-Check)**  
4. Öffne den [IP-Leak-Test](/tests/ip-leak-test/) ohne VPN und notiere grob Anbieter/Standort.
5. Verbinde das VPN und lade den Test erneut.
6. Achte darauf, ob sich öffentliche IP und grober Standort sichtbar ändern.
Manche Tests zeigen mehrere IPs (IPv4/IPv6) und das wirkt schnell wie ein Leak, obwohl es keiner ist.  
Du siehst sofort, ob dein Internet-Ausgang grundsätzlich über das VPN läuft.

3) **DNS-Leaks prüfen (häufigster Stolperstein)**  
7. Starte den [DNS-Leak-Test](/tests/dns-leak-test/) mit aktiver VPN-Verbindung.
8. Achte darauf, ob als DNS-Server weiterhin dein Internetanbieter auftaucht.
9. Wenn ja: notiere den Befund und geh in Weg B (DNS sauber binden).
Wenn du absichtlich einen eigenen DNS-Anbieter nutzt, sieht das Ergebnis „fremd“ aus und kann dich verwirren.  
Du erkennst, ob DNS dein Surfverhalten außerhalb des VPN verrät.

4) **IPv6 bewusst behandeln (sonst „Leak“ trotz VPN)**  
10. Schau im [IP-Leak-Test](/tests/ip-leak-test/), ob IPv6 angezeigt wird.
11. Wenn IPv6 angezeigt wird: prüfe, ob es zum VPN gehört oder noch zu deinem Internetanbieter.
12. Wenn du unsicher bist: bleib erst bei IPv4-only und kläre IPv6 in Weg B.
IPv6 abzuschalten kann einzelne Netze oder Dienste stören.  
Du vermeidest den Klassiker „VPN an, aber IPv6 läuft außen vorbei“.

5) **WebRTC im Browser prüfen (wenn du Web-Video/Calls nutzt)**  
13. Öffne den [WebRTC-Test](/tests/webrtc-test/) mit aktivem VPN.
14. Achte darauf, ob lokale oder externe IPs auftauchen, die nicht zum VPN passen.
15. Wenn dir das auffällt: nutze die Hinweise unter [WebRTC](/browser/webrtc/).
WebRTC ist eine Browser-Technik für Echtzeitkommunikation und kann je nach Browser Netzwerkdetails preisgeben.  
Du findest Leaks, die nicht vom VPN kommen, sondern vom Browser.

## Wege

### Weg A

1) Kläre kurz, wofür du das VPN nutzt: unterwegs, im Heimnetz, oder nur für einzelne Dienste.  
Das macht spätere Entscheidungen zu DNS/IPv6 und Split-Tunneling deutlich einfacher.

2) Aktualisiere dein System und starte neu, bevor du am VPN „herumdokterst“.  
Das kostet ein paar Minuten, spart aber viele Fehler durch alte Netz-Zustände.

3) Richte das VPN als Systemverbindung ein, nicht nur „pro Programm“.  
Bezeichnung kann abweichen – nutze die Suche nach: VPN, Netzwerk, Verbindungen.  
Das ist meist stabiler, kann aber in sehr restriktiven Netzen trotzdem blockiert werden.

4) Wähle ein gängiges Protokoll, das dein Anbieter unterstützt:  
- **WireGuard** (VPN-Protokoll, oft schlank und schnell) oder  
- **OpenVPN** (VPN-Protokoll, sehr verbreitet und oft robust).  
Ein Wechsel kann Probleme lösen, aber auch neue erzeugen, wenn ein Netz bestimmte Protokolle sperrt.

5) Verbinde das VPN und prüfe direkt: [IP-Leak-Test](/tests/ip-leak-test/) und [DNS-Leak-Test](/tests/dns-leak-test/).  
So erkennst du frühe Leaks, statt später „nach Gefühl“ zu arbeiten.

6) Prüfe IPv6 im IP-Test und entscheide bewusst: jetzt sauber mit absichern (Weg B) oder vorerst bei IPv4 bleiben.  
Das kann die Kompatibilität verbessern, kann aber auch „weniger modern“ sein.

7) Nutze Split-Tunneling nur, wenn du einen klaren Grund hast.  
Split-Tunneling heißt: Nur ein Teil des Verkehrs läuft durchs VPN, der Rest direkt.  
Das kann lokale Geräte zugänglich halten, macht Leaks aber wahrscheinlicher, wenn Regeln unklar sind.

8) Wenn Streaming/Banking nicht funktioniert: teste einmal ohne VPN, statt lange zu suchen.  
Das ist pragmatisch, löst aber nicht das Grundproblem „Dienste blockieren VPN-Ausgänge“.

9) Wiederhole die Checks nach Updates, nach Standortwechsel oder wenn sich dein WLAN ändert.  
So merkst du, ob das Setup dauerhaft stabil bleibt.

<details><summary>Weg B (Fortgeschritten)</summary>

1) **DNS an die VPN-Verbindung binden**  
Nach dem Verbinden erneut [DNS-Leak-Test](/tests/dns-leak-test/) machen.  
Das reduziert DNS-Leaks, kann aber bei manchen Setups eigene DNS-Regeln überschreiben.  


2) **Eigenen DNS dokumentieren**  
Wenn du bewusst einen eigenen DNS-Anbieter nutzt: notiere, welcher und warum.  
Das macht Ergebnisse später erklärbar, kann aber dazu führen, dass DNS außerhalb des VPN bleibt.

3) **IPv6 gezielt absichern**  
Nutze IPv6 nur, wenn dein VPN es zuverlässig mit abdeckt, oder deaktiviere IPv6 dort, wo es Probleme macht.  
Das kann Kompatibilität kosten, verhindert aber häufig „Leak“-Meldungen durch IPv6 außerhalb des Tunnels.  
Mehr Hintergrund: [IPv6](/netzwerk/ipv6/).

4) **Split-Tunneling nur mit klarer Regel**  
Entweder „alles durchs VPN“ oder „nur Dienst X durchs VPN“.  
Das kann lokale Geräte erreichbar halten, erhöht aber die Gefahr, dass Tests und Realität auseinanderlaufen.  
Danach immer IP/DNS erneut prüfen.

5) **Captive-Portale einplanen**  
In Hotels/Flughäfen musst du dich oft erst ohne VPN anmelden, dann VPN verbinden.  
Das ist umständlich, verhindert aber, dass du ein funktionierendes VPN fälschlich für „kaputt“ hältst.

6) **Abbrüche systematisch eingrenzen**  
Teste einen anderen Standort oder ein anderes Protokoll, ohne weitere Einstellungen zu ändern.  
Das kann die Stabilität verbessern, kostet aber Zeit, bis du den Auslöser gefunden hast.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

1) **„Kill Switch“ per Firewall erzwingen**  
Erlaube ausgehend nur über das VPN-Interface, alles andere blocken.  
Das verhindert Verkehr außerhalb des VPN, kann dich aber komplett offline sperren, bis du die Regel zurücksetzt.

2) **Routing vor/nach dem Verbinden prüfen**  
Vergleiche Standardroute und aktive Interfaces vor und nach dem VPN.  
Das zeigt dir harte Fakten, ist aber je nach Distribution und Setup unterschiedlich.

3) **DNS nicht nur „einstellen“, sondern erzwingen**  
Stelle sicher, dass DNS-Anfragen nur über den Tunnel rausgehen, auch nach Abbrüchen.  
Das senkt Leak-Risiken, kann aber lokale Namensauflösung im Heimnetz stören.

4) **Leak-Tests bei Abbruch simulieren**  
VPN kurz trennen und beobachten, ob das System sofort auf direkte IP/DNS zurückfällt.  
Das deckt Lücken auf, kann aber bei falscher Interpretation unnötig Panik erzeugen.

5) **Split-Tunneling mit dokumentierten Routenregeln**  
Nutze saubere, nachvollziehbare Regeln statt „Try & Error“.  
Das ist wartbarer, erfordert aber mehr Wissen über Routing und Netze.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob deine öffentliche IP im [IP-Leak-Test](/tests/ip-leak-test/) mit VPN stabil „im VPN“ bleibt, auch nach WLAN-Wechsel.  
- Achte darauf, ob der [DNS-Leak-Test](/tests/dns-leak-test/) nicht auf DNS-Server deines Internetanbieters zurückfällt.  
- Wenn du Web-Video/Calls nutzt: prüfe gelegentlich den [WebRTC-Test](/tests/webrtc-test/) nach Browser-Updates.

<details><summary>Mehr Checks</summary>

- Wenn ein Test mehrere IPs zeigt: Prüfe, ob etwas eindeutig außerhalb des VPN liegt.  
- Bei Split-Tunneling: Teste mit einem Dienst, der durchs VPN soll, und einem, der direkt raus soll.  
- Nach einem VPN-Standortwechsel: IP- und DNS-Test einmal neu laden, nicht nur „gefühlt“ prüfen.

</details>

## Probleme & Lösungen

- **Problem:** VPN verbindet nicht oder bricht sofort ab.  
  **Lösung:** Prüfe Uhrzeit/Datum, probiere ein anderes Protokoll (WireGuard/OpenVPN) und einen anderen Standort.

- **Problem:** Internet ist mit VPN deutlich langsamer.  
  **Lösung:** Standort wechseln, Protokoll wechseln und prüfen, ob parallel große Uploads laufen.

- **Problem:** Streaming oder Banking funktioniert nicht.  
  **Lösung:** Teste ohne VPN; wenn es dann geht, nutze VPN dafür nur bei Bedarf oder wechsle den VPN-Standort.

- **Problem:** DNS-Leak trotz VPN.  
  **Lösung:** DNS erneut prüfen und DNS an die VPN-Verbindung binden (Weg B).

- **Problem:** IPv6-Leak (IPv6 zeigt auf den Internetanbieter).  
  **Lösung:** IPv6 gezielt absichern oder vorübergehend deaktivieren (Weg B) und danach erneut testen.

- **Problem:** Drucker/NAS im Heimnetz sind mit VPN nicht erreichbar.  
  **Lösung:** Split-Tunneling so setzen, dass lokale Netze direkt bleiben, oder VPN für diese Zeit trennen.

- **Problem:** Akkuverbrauch steigt deutlich oder WLAN wirkt instabil.  
  **Lösung:** VPN gezielter nutzen (z. B. nur unterwegs) und Abbrüche durch Standort/Protokoll testen.

- **Problem:** Gefühl von „jetzt bin ich komplett sicher“.  
  **Lösung:** Ein VPN schützt vor allem den Transportweg. Tracking im Browser und Konto-Logins bleiben sichtbar.

## Nicht gelöst

- Ein VPN unter Linux verhindert nicht, dass dich Dienste über Logins wiedererkennen.  
- Ein VPN verhindert kein Tracking durch Cookies, Fingerprinting oder Werbenetzwerke im Browser.  
- Ein VPN schützt nicht vor Admin-Zugriff auf deinem Gerät (kompromittiertes System, Stalkerware, Rootkit).  
- Ein VPN ersetzt keine Updates, keine Geräteverschlüsselung und keine sicheren Passwörter.  
- Der VPN-Anbieter kann Metadaten sehen (z. B. Verbindungszeiten) und ist ein zusätzlicher Vertrauensanker.

## FAQ

**Brauche ich wirklich ein VPN?**

Nicht immer. VPNs helfen v. a. gegen unsichere WLANs und zur Trennung von Netzwerken, sind aber kein Tracking-Allheilmittel.

**Warum leakt IP/DNS trotz VPN?**

Oft liegt es an Split-Tunneling, IPv6/WebRTC oder falschen DNS-Einstellungen. Prüfe Leaks und setze die passenden Fixes.

**Was ist mit „No-Logs“?**

Behauptungen sind nicht beweisbar. Achte auf transparente Technik, Audits, klare Rechtslage und nachvollziehbare Reports.

## Quellen

- [WireGuard – Offizielle Dokumentation](https://www.wireguard.com/)
- [OpenVPN – Community-Ressourcen](https://openvpn.net/community-resources/how-to/)
- [NetworkManager – Dokumentation](https://networkmanager.de/v/docs/)
- [systemd-resolved – Manpage](https://www.freedesktop.org/software/systemd/man/systemd-resolved.service.html)
- [MDN Web Docs – WebRTC API](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)

## Weiter

- [VPN Schnellstart](/vpn/schnellstart/)
- [VPN Leaks](/vpn/leaks/)
- [Split-Tunneling](/vpn/split-tunneling/)
- [DNS: DoH vs DoT](/dns/doh-dot/)
- [DNS-Leak-Test](/tests/dns-leak-test/)
- [IP-Leak-Test](/tests/ip-leak-test/)
