---
layout: "@/layouts/DocLayout.astro"
title: "Privacy Check: Browser-Risiken testen und Ergebnis deuten"
url: "/tests/privacy-check/"
chapter: "Tests"
type: "test"
format: "test"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Der Privacy Check zeigt, was dein Browser einer Webseite verrät. Du testest sauber, vermeidest Fehlalarme und deutest Hinweise zu VPN, DNS, Cache und Cookies."
---
Manchmal wirkt ein Privacy Check widersprüchlich: Im Alltag läuft alles, aber der Test meldet „auffällig“. Das nervt, weil du nicht weißt, ob du überreagierst oder etwas übersiehst.

Ziel ist, dass du Ergebnisse einordnen kannst. Du erkennst, was Einstellungen wirklich verändern und was nur ein Messartefakt ist.

Sinnvoll, wenn du Browser- und Netzwerk-Einstellungen realistisch prüfen willst, ohne Spezialwissen.

Grenze: Der Test sieht nicht „dein Gerät“, sondern nur das, was dein Browser dieser Seite zeigt.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Was misst der Test – und was nicht

Was er misst (aus Sicht dieser Webseite):

- Welche Netzwerk-Sicht nach außen ankommt, zum Beispiel mit VPN oder Proxy (Vermittlungsserver).
- Ob Inhalte aus dem Cache (Zwischenspeicher) kommen können.
- Welche Browser-Signale und Web-Funktionen grundsätzlich abfragbar sind, zum Beispiel für Verfolgung und Erkennung.

Was er nicht misst:

- Ob dein Gerät kompromittiert ist oder Schadsoftware läuft.
- Ob andere Apps auf deinem Gerät Daten senden.
- Ob ein Anbieter im Hintergrund Daten speichert oder teilt, die du hier nicht siehst.
- Ob du „anonym“ bist. Dafür brauchst du ein passendes Bedrohungsmodell und mehr als einen Browser-Test.

## So testest du richtig

Der wichtigste Trick ist Vergleichbarkeit: gleiche Seite, gleicher Browser, gleiche Bedingungen. Dann haben Unterschiede eine Bedeutung.

### Weg A (Basis)

1) Starte im Normalbetrieb  
Schließe andere Fenster mit vielen Tabs und lade den Test neu. Notiere Uhrzeit, Browser und ob VPN/Proxy an oder aus war.  
So bekommst du einen klaren Ausgangswert. Nebenwirkung: Ohne VPN/Proxy sieht man eher, was dein Anschluss preisgibt.

2) Wiederhole im privaten Fenster  
Öffne ein privates Fenster und starte den Test dort erneut. Vergleiche die Ergebnisse mit dem Normalbetrieb.  
So reduzierst du Einfluss von Cookies und Sitzungen. Nebenwirkung: Je nach Browser können Erweiterungen trotzdem aktiv sein.

3) Aktualisiere wirklich neu  
Wenn Ergebnisse „hängen“, lade die Seite hart neu und wiederhole den Test.  
So vermeidest du, dass der Zwischenspeicher alte Antworten vorgaukelt. Nebenwirkung: Ein kompletter Neuladevorgang kann länger dauern.

4) Prüfe VPN oder Proxy getrennt  
Aktiviere VPN/Proxy und führe den Test erneut aus. Bewerte dann nur diese Variante und mische sie nicht mit „ohne Tunnel“.  
So erkennst du, welche Hinweise nur durch den Tunnel entstehen. Nebenwirkung: Du misst dann den Tunnel-Endpunkt, nicht deinen Anschluss.

<details><summary>Weg B (Fortgeschritten)</summary>

1) Teste mit möglichst „sauberem“ Browser  
Deaktiviere Erweiterungen testweise oder nutze ein frisches Browser-Profil.  
So siehst du, ob Blocker den Test verfälschen. Nebenwirkung: Ohne Blocker können mehr Inhalte und Tracker laden.

Bezeichnung kann abweichen – nutze die Suche nach: „Profil“.

2) Lösche nur Daten dieser Seite  
Lösche Website-Daten für diese Seite (Cookies, Speicher) und teste erneut.  
So prüfst du, ob gespeicherte Zustände das Ergebnis erklären. Nebenwirkung: Du wirst oft aus Webseiten abgemeldet.

3) Wechsle einmal das Netzwerk  
Teste zusätzlich kurz über ein anderes Netz, zum Beispiel Mobilfunk statt WLAN.  
So erkennst du, ob Router, Hotspot oder Firmen-Netzwerk dazwischenfunken. Nebenwirkung: Mobilfunk kann andere IP-Regionen und Filter haben.

4) Lass DNS-Zwischenspeicher mitdenken  
Wenn DNS-Ergebnisse „alt“ wirken, wiederhole den Test nach 10–30 Minuten.  
So vermeidest du Fehlalarme durch Vorhalte im Netz. Nebenwirkung: Das kostet Zeit und ändert nicht sofort überall etwas.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

1) Trenne Ursachen mit Einzeltstests  
Wenn der Gesamttest unklar bleibt, nutze gezielt Einzeltests für IP, DNS und WebRTC und vergleiche die Resultate.  
So findest du schneller den konkreten Leck-Typ statt einer Gesamtnote. Nebenwirkung: Du musst mehrere Seiten testen und dokumentieren.

2) Prüfe, was blockiert  
Öffne die Entwicklerwerkzeuge deines Browsers und schau, ob Anfragen geblockt oder umgeleitet werden.  
So erkennst du, ob Erweiterungen, Proxy oder Filter den Test „unmessbar“ machen. Nebenwirkung: Das ist je nach Browser-Menü ungewohnt.

3) Berücksichtige verschlüsseltes DNS  
Wenn du DNS-over-HTTPS (DoH) oder DNS-over-TLS (DoT) nutzt, kann sich ändern, wer deine DNS-Anfragen sieht und was ein Test daraus ableitet.  
So ordnest du widersprüchliche DNS-Hinweise ein. Nebenwirkung: Manche Netze blockieren DoH/DoT oder zwingen eigene Resolver.

</details>

## Ergebnisse verstehen

Ein Privacy Check bewertet oft mehrere Bereiche. Ein einzelner „roter“ Punkt ist selten ein Beweis für ein echtes Risiko.

So liest du Ergebnisse sinnvoll:

- Prüfe zuerst, was du absichtlich aktiviert hast, zum Beispiel VPN, Proxy oder privates DNS. Dann sind „ungewöhnliche“ Werte oft erwartbar.
- Achte auf stabile Muster über mehrere Läufe. Wenn ein Punkt bei jedem Laden anders ist, sind oft Zwischenspeicher oder Blocker beteiligt.
- Nimm „nicht messbar“ ernst. Das kann Schutz durch Blockieren bedeuten, kann den Test aber auch unbrauchbar machen.

Typische Fehlalarme, ohne dass du etwas „falsch“ machst:

- Erweiterungen blockieren Test-Anfragen und lassen Bereiche leer.
- VPN/Proxy verändert die Sicht nach außen, obwohl dein Alltag sonst anders ist.
- DNS-Zwischenspeicher liefern alte Antworten, obwohl du umgestellt hast.

## So merkst du, dass es wirkt

Achte darauf, ob sich die angezeigte öffentliche IP beim Einschalten des VPN klar ändert und beim Ausschalten wieder zurückspringt.

Achte darauf, ob Ergebnisse nach einem frischen Seitenladen stabiler werden und nicht mehr bei jedem Reload springen.

Achte darauf, ob „nicht messbar“ verschwindet, wenn du testweise ohne Erweiterungen testest.

<details><summary>Zusätzliche Checks</summary>

- Vergleiche zwei Browser (zum Beispiel Firefox und Chromium) unter gleichen Bedingungen. Große Unterschiede deuten oft auf Erweiterungen oder Browser-Defaults hin.
- Teste einmal im Mobilfunk und einmal im Heimnetz. Wenn nur ein Netz auffällig ist, liegt es oft am Router, Hotspot oder Netzfilter.
- Wenn WebRTC auffällig ist, vergleiche zusätzlich mit einem WebRTC-spezifischen Leak-Test.

</details>

## Probleme & Lösungen

- **Problem:** Ergebnisse ändern sich bei jedem Neuladen.  
  **Lösung:** Im privaten Fenster testen und danach den Browser einmal neu starten.

- **Problem:** DNS wirkt „falsch“ oder „alt“, obwohl du umgestellt hast.  
  **Lösung:** 10–30 Minuten warten und erneut testen, alternativ kurz über ein anderes Netzwerk prüfen.

- **Problem:** Mit VPN/Proxy sieht alles „schlechter“ oder „komisch“ aus.  
  **Lösung:** Zwei Läufe getrennt bewerten: einmal ohne, einmal mit VPN/Proxy, und nicht mischen.

- **Problem:** Teile des Tests bleiben leer oder „nicht messbar“.  
  **Lösung:** Erweiterungen testweise deaktivieren oder mit einem frischen Profil testen.

- **Problem:** Du bekommst widersprüchliche Hinweise zu Cookies oder Sitzung.  
  **Lösung:** Website-Daten dieser Seite löschen und erneut testen, danach wieder normal nutzen.

- **Problem:** Im öffentlichen WLAN passt das Ergebnis gar nicht zu zuhause.  
  **Lösung:** Zuhause erneut testen und Ergebnisse nicht vergleichen, wenn Netze sehr unterschiedlich sind.

## Grenzen

- Der Test ist keine Sicherheitsprüfung deines Geräts und erkennt keine Schadsoftware.
- Er zeigt nur, was dein Browser dieser Seite offenlegt. Andere Seiten können sich anders verhalten.
- Ein gutes Ergebnis verhindert keine Verfolgung über Konten-Anmeldungen oder Gerätekennungen.

## Nicht gelöst

- Wenn dein Gerät kompromittiert ist oder jemand Admin-Zugriff hat, hilft ein Browser-Test kaum.
- Stalkerware oder Überwachungs-Apps können Daten abgreifen, ohne dass der Test das sichtbar macht.
- Angreifermodell: Physischer Zugriff, Zwang oder gemeinsame Geräte-Nutzung hebeln viele Maßnahmen aus.
- Tracking kann über Logins, Apps und Datenflüsse außerhalb des Browsers weiterlaufen.

## Weiter

- [Browser Check](/tests/browser-check/)
- [IP Leak Test](/tests/ip-leak-test/)
- [DNS Leak Test](/tests/dns-leak-test/)
- [Fingerprinting Test](/tests/fingerprinting-test/)
- [VPN Leaks](/vpn/leaks/)
- [Browser: WebRTC](/browser/webrtc/)

## FAQ

**Sind Tests 100% zuverlässig?**

Nein. Ergebnisse hängen von Browser/Netzwerk/Updates ab. Nutze sie als Hinweis und prüfe mit Fix-Anleitungen.

**Was bedeutet ein „Leak“?**

Dass Daten am Schutz vorbei rausgehen können. Folge den Fix-Schritten und teste erneut.

**Warum schwanken Werte?**

Fingerprinting ist dynamisch. Auch Werbung/Blocker/Updates ändern Signale.

## Quellen

- [HTTP-Caching (MDN)](https://developer.mozilla.org/de/docs/Web/HTTP/Guides/Caching)
- [HTTP-Cookies (MDN)](https://developer.mozilla.org/de/docs/Web/HTTP/Guides/Cookies)
- [Proxy-Server (MDN Glossar)](https://developer.mozilla.org/de/docs/Glossary/Proxy_server)
- [WebRTC API (MDN)](https://developer.mozilla.org/de/docs/Web/API/WebRTC_API)
- [RFC 1034: Domain names – concepts and facilities (DNS)](https://datatracker.ietf.org/doc/html/rfc1034)
- [RFC 8484: DNS Queries over HTTPS (DoH)](https://www.rfc-editor.org/rfc/rfc8484.html)
