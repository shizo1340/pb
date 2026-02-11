---
layout: "@/layouts/DocLayout.astro"
title: "VPN-Leaks vermeiden: DNS-, IP-, IPv6- und WebRTC-Checks"
url: "/vpn/leaks/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Anleitung: VPN-Leaks finden und stoppen – DNS-, IP-, IPv6- und WebRTC-Checks, Browser-Tests, Split-Tunneling prüfen, typische Fehler lösen, sicher testen."
---
Du hast ein VPN aktiv, aber Websites sehen trotzdem deine echte IP. Oder DNS-Anfragen gehen weiter an deinen Internetanbieter. Das ist nervig, weil du nicht weißt, was wirklich geschützt ist.

Ziel dieser Seite: Du findest Datenlecks (VPN-Traffic läuft am VPN vorbei) und stellst es so ein, dass IP- und DNS-Tests im Alltag stabil zum VPN passen.

Sinnvoll, wenn du VPN für öffentliches WLAN, Reisen oder Tracking-Reduktion nutzt.  
Grenze: Ein VPN ersetzt keine Gerätesicherheit und macht dich nicht anonym.

## Kurzfazit
- Wenn du nur 10 Minuten hast: VPN korrekt einrichten, Leaks testen und Split‑Tunneling vermeiden.
- Wichtig: VPN ist kein Anti‑Tracking‑Allheilmittel – nutze es für die passenden Risiken.

## Ziel

Weg A: Leaks messen und die häufigsten Ursachen abstellen.  
Weg B: VPN dauerhaft nutzen, mit Not-Aus-Schalter (Kill Switch: blockiert Internet ohne VPN) und sauberen DNS-Wegen.  
Weg C: Profi-Absicherung über Regeln am Gerät oder Router.

Stoppsignal: Wenn du gezielte Überwachung vermutest oder dein Gerät kompromittiert sein könnte, reicht das hier nicht. Nutze zuerst [Verdacht: Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/) oder [Überwachung erkennen](/geraete-sicherheit/ueberwachung-erkennen/).

Aufwand + Komfortkosten: 10–30 Minuten. Je nach Einstellungen können Streaming/Banking zicken, Captive Portals nerven und der Akku etwas schneller leer sein.

## Schnellstart (10 Minuten)
1) Leaks einmal sauber messen  
1. VPN verbinden und ein frisches Browserfenster öffnen.
2. IP prüfen: [IP-Leak-Test](/tests/ip-leak-test/).
3. DNS prüfen: [DNS-Leak-Test](/tests/dns-leak-test/).
4. WebRTC prüfen: [WebRTC-Test](/tests/webrtc-test/).
5. Notieren: IPv4/IPv6, welche DNS-Server erscheinen, ob WebRTC IPs zeigt.

Ergebnisse können je nach Browser-Profil und Erweiterungen abweichen. Du weißt danach, ob dein Problem IP, DNS, IPv6 oder WebRTC ist.

2) Split-Tunneling prüfen und testweise aus  
Split-Tunneling (getrennter Tunnel) bedeutet: Ein Teil des Verkehrs geht absichtlich am VPN vorbei.  
6. In der VPN-App nach Ausnahmen für Apps, Websites oder Netzwerke suchen.
7. Alle Ausnahmen vorübergehend deaktivieren.
8. IP- und DNS-Test erneut ausführen.

Bezeichnung kann abweichen – nutze die Suche nach: „Split“, „Ausnahmen“, „Tunneling“.  
Lokale Geräte wie Drucker oder NAS können ohne Ausnahmen schlechter erreichbar sein. Du verhinderst damit Teilschutz, der wie voller Schutz wirkt.

3) IPv6 als häufige Leak-Quelle abräumen  
9. Im IP-Test prüfen, ob eine IPv6-Adresse angezeigt wird.
10. Wenn die IPv6-Adresse nicht zum VPN passt: VPN-App auf IPv6-Unterstützung prüfen.
11. Falls unklar oder nicht vorhanden: IPv6 am Gerät vorübergehend deaktivieren und erneut testen.

Bezeichnung kann abweichen – nutze die Suche nach: „IPv6“, „Internetprotokoll“, „Netzwerk“.  
IPv6 abschalten kann in manchen Netzen zu seltsamem Verhalten führen. Du verhinderst damit, dass ein Teil der Verbindung über IPv6 am VPN vorbeigeht.

4) DNS-Leaks vermeiden, die der Browser auslöst  
12. Im DNS-Test prüfen, welche DNS-Server auftauchen.
13. Wenn dein Internetanbieter oder ein unerwarteter DNS-Dienst erscheint: Browser-Funktion „DNS über HTTPS“ testweise ausschalten.
14. Danach DNS-Test erneut ausführen (ggf. VPN einmal trennen/verbinden).

Bezeichnung kann abweichen – nutze die Suche nach: „DNS über HTTPS“, „Sicheres DNS“, „DoH“.  
Ein anderer DNS-Weg kann Filter (Jugendschutz, Werbeblocker) verändern. Du sorgst dafür, dass Namensauflösung nicht am VPN vorbei läuft.

5) WebRTC nur anfassen, wenn der Test wirklich leakt  
WebRTC ist eine Browser-Technik für Audio/Video und direkte Verbindungen. Dabei können Verbindungsdaten sichtbar werden.  
15. Im [WebRTC-Test](/tests/webrtc-test/) prüfen, ob IPs auftauchen, die nicht zum VPN passen.
16. Wenn ja: im Browser WebRTC einschränken oder IP-Weitergabe reduzieren.
17. Danach den WebRTC-Test erneut ausführen.

Bezeichnung kann abweichen – nutze die Suche nach: „WebRTC“, „IP verbergen“, „Privatsphäre“.  
Browser-Telefonie und Videokonferenzen können dadurch schlechter funktionieren. Du reduzierst Verbindungsdetails, die dein VPN konterkarieren.

## Wege

### Weg A

1. VPN verbinden und messen: [IP-Leak-Test](/tests/ip-leak-test/), [DNS-Leak-Test](/tests/dns-leak-test/), [WebRTC-Test](/tests/webrtc-test/).  
2. In der VPN-App alle Ausnahmen deaktivieren (Split-Tunneling aus).  
3. IPv6 prüfen: Wenn IPv6 nicht zum VPN passt, IPv6-Unterstützung im VPN suchen oder IPv6 am Gerät deaktivieren.  
4. DNS prüfen: Wenn dein Browser „DNS über HTTPS“ nutzt, testweise aus und erneut messen.  
5. Nach jeder Änderung IP- und DNS-Test wiederholen, bis beide stabil zum VPN passen.  
6. WebRTC nur weiter einschränken, wenn der Test eine nicht passende IP zeigt.  
7. Ausnahmen nur gezielt wieder aktivieren und nach jeder Ausnahme erneut testen.  
8. Notiere dir die funktionierende Kombination (Gerät, VPN-App, Browser), damit du sie später schnell wieder findest.

Das ist die schnellste Variante mit guter Alltagstauglichkeit. Du musst aber konsequent nach jedem Schritt neu testen, sonst übersiehst du die eigentliche Ursache.

<details><summary>Weg B (Fortgeschritten)</summary>

- Aktiviere in der VPN-App „Immer an“ und einen Not-Aus-Schalter, der Verbindungen ohne VPN blockiert.  
  Bezeichnung kann abweichen – nutze die Suche nach: „Immer an“, „Not-Aus“, „Verbindungen ohne VPN blockieren“.  
- Prüfe praktisch: VPN kurz trennen. Das Internet sollte dann wirklich stoppen.  
- Miss DNS mehrfach (auch nach Neustart), damit der DNS-Weg stabil bleibt.  
- Nutze Split-Tunneling nur für wenige, begründete Ausnahmen und teste jede einzeln.  
- Wenn du zwischen WLAN und Mobilfunk wechselst: teste in beiden Netzen, weil Leaks netzabhängig sein können.

Captive Portals, Hotspots und manche Banking-Apps können damit unbequemer werden. Du minimierst dafür kurze Momente ohne VPN, in denen Traffic unbemerkt direkt rausgeht.
</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.

- Setze am Gerät Regeln, die nur den VPN-Tunnel als Ausgang erlauben (Firewall/Filter je nach System).  
- Blockiere IPv6 außerhalb des VPN konsequent, wenn dein VPN IPv6 nicht sauber tunnelt.  
- Prüfe nach dem Verbinden, ob die Standardroute wirklich auf den VPN-Tunnel zeigt.  
- Wenn du Split-Tunneling brauchst: arbeite mit klaren Routen statt mit vielen App-Ausnahmen.  
- Dokumentiere die Regeln, sonst wird Fehlersuche später schwer.

Fehler in den Regeln können den Internetzugang komplett blockieren, bis du sie rückgängig machst. Dafür bekommst du die robusteste Absicherung gegen „kurz direkt raus“-Momente.
</details>

## So merkst du, dass es wirkt

- Achte darauf, ob IP- und DNS-Tests wiederholt dasselbe zeigen, auch nach einem Neustart.  
- Trenne das VPN kurz: Mit Not-Aus-Schalter darf kein Traffic „einfach so“ direkt rausgehen.  
- Prüfe im [WebRTC-Test](/tests/webrtc-test/), ob nur noch VPN-passende Werte erscheinen.

<details><summary>Mehr Prüfungen</summary>

- Teste in einem zweiten Browser-Profil, weil Erweiterungen Ergebnisse verfälschen können.  
- Prüfe IPv6 separat, wenn du Dual-Stack hast: [IPv6-Leaks](/netzwerk/leaks/ipv6/).  
- Wenn DNS-Leaks hartnäckig sind, teste auch in einem zweiten Browser (ohne Sync/Erweiterungen).  
</details>

## Probleme & Lösungen

- **Problem:** IP-Test zeigt deine normale Provider-IP trotz aktivem VPN.  
  **Lösung:** Prüfe, ob das VPN wirklich verbunden ist, deaktiviere Split-Tunneling und teste im frischen Browserfenster.

- **Problem:** DNS-Test zeigt DNS-Server deines Internetanbieters.  
  **Lösung:** Schalte „DNS über HTTPS“ im Browser testweise aus, verbinde das VPN neu und teste erneut.

- **Problem:** IPv6-Adresse ist sichtbar, aber passt nicht zum VPN.  
  **Lösung:** Prüfe, ob dein VPN IPv6 unterstützt, oder deaktiviere IPv6 am Gerät und teste erneut.

- **Problem:** WebRTC-Test zeigt eine nicht passende IP.  
  **Lösung:** Einschränkungen für WebRTC im Browser aktivieren und danach erneut testen.

- **Problem:** Streaming oder Banking blockiert mit VPN.  
  **Lösung:** Nutze eine gezielte Ausnahme nur für diese App/Seite und prüfe danach IP- und DNS-Test erneut.

- **Problem:** Kurz nach Netzwechsel (WLAN/Mobilfunk) „leakt“ es.  
  **Lösung:** Nutze „Immer an“ plus Not-Aus-Schalter und teste den Netzwechsel noch einmal bewusst.

- **Problem:** Akkuverbrauch steigt deutlich.  
  **Lösung:** Akzeptiere den Mehrverbrauch für Risikonetze (öffentliches WLAN) oder nutze VPN nicht dauerhaft, wenn das für dich passt.

## Nicht gelöst

- Websites erkennen dich weiter über Login, Cookies oder Fingerprinting wieder.  
- Ein VPN schützt nicht vor kompromittierten Geräten, Admin-Zugriff oder Stalkerware.  
- Du verschiebst Vertrauen: Der VPN-Anbieter kann Verbindungsdaten sehen, die sonst dein Internetanbieter sieht.  
- Kontosicherheit (Passwort, 2FA, Sitzungen) löst ein VPN nicht.  
- Wenn dich jemand unter Druck setzt (Zwang, Kontrolle im Haushalt), hilft Technik allein oft nicht zuverlässig.

## FAQ

**Brauche ich wirklich ein VPN?**

Nicht immer. VPNs helfen v. a. gegen unsichere WLANs und zur Trennung von Netzwerken, sind aber kein Tracking-Allheilmittel.

**Warum leakt IP/DNS trotz VPN?**

Oft liegt es an Split-Tunneling, IPv6/WebRTC oder falschen DNS-Einstellungen. Prüfe Leaks und setze die passenden Fixes.

**Was ist mit „No-Logs“?**

Behauptungen sind nicht beweisbar. Achte auf transparente Technik, Audits, klare Rechtslage und nachvollziehbare Reports.

## Quellen

- [RFC 7359: Layer 3 VPN Tunnel Traffic Leakages in Dual-Stack Hosts/Networks](https://www.rfc-editor.org/rfc/rfc7359.html)
- [RFC 8484: DNS Queries over HTTPS (DoH)](https://www.rfc-editor.org/rfc/rfc8484.html)
- [DNS über HTTPS in Firefox – Mozilla Support](https://support.mozilla.org/de/kb/firefox-dns-%C3%BCber-https)
- [VPN | Connectivity – Android Developers](https://developer.android.com/develop/connectivity/vpn?hl=de)
- [RTCIceCandidate – Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate)
- [IETF: Using Multicast DNS to protect privacy when exposing ICE candidates](https://www.ietf.org/archive/id/draft-ietf-mmusic-mdns-ice-candidates-02.html)

## Weiter

- [VPN: Schnellstart](/vpn/schnellstart/)
- [Split-Tunneling](/vpn/split-tunneling/)
- [VPN-Probleme](/vpn/probleme/)
- [IP-Leak-Test](/tests/ip-leak-test/)
- [DNS-Leak-Test](/tests/dns-leak-test/)
- [WebRTC-Test](/tests/webrtc-test/)
