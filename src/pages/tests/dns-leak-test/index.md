---
layout: "@/layouts/DocLayout.astro"
title: "DNS-Leak-Test richtig durchführen und Ergebnisse verstehen"
url: "/tests/dns-leak-test/"
chapter: "Tests"
type: "test"
format: "test"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "So führst du einen DNS-Leak-Test korrekt durch, vergleichst ohne/mit VPN, verstehst die Ergebnisse und erkennst Fehlalarme durch DoH, Proxy oder Cache."
---
## Kurz erklärt

Du nutzt ein VPN, aber Webseiten „sehen“ trotzdem deinen Internetanbieter.  
Oder du willst prüfen, ob deine Namensauflösung am Schutz vorbei läuft. Das ist nervig. Es kann Rückschlüsse auf aufgerufene Domains erlauben.

Ziel: Du weißt danach, welche DNS-Server deine DNS-Anfragen beantworten.  
Und du erkennst typische Fehlalarme, ohne dich zu verrennen.

Sinnvoll, wenn du VPN, öffentliches WLAN oder neue DNS-Einstellungen nutzt.  
Grenze: Der Test zeigt DNS-Resolver, aber nicht alles, was dein Gerät sonst tut.

> **Wenn du Resolver/VPN-Optionen vergleichen willst:** **[DNS](/anbieter/kategorie/dns/)** und (falls nötig) **[VPN](/anbieter/kategorie/vpn/)**.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Was misst es – und was nicht

Ein DNS-Leak-Test zeigt, welche DNS-Resolver (DNS-Server) deine DNS-Anfragen beantworten.  
DNS ist das „Telefonbuch“ fürs Internet: Domain rein, IP-Adresse raus.

Er misst typischerweise:

- welche Resolver antworten (z. B. vom VPN, vom Router, vom Internetanbieter)
- ob neben dem erwarteten Resolver weitere Resolver auftauchen (Hinweis auf Mischbetrieb)
- ob Browser oder System DNS über HTTPS (DoH) nutzen und damit DNS „umleiten“

Er misst nicht zuverlässig:

- ob **jede** App auf dem Gerät denselben DNS-Weg nutzt (Tests laufen oft im Browser)
- ob Inhalte mitgelesen werden (das ist eine andere Ebene als DNS)
- ob deine IP-Adresse leckt (dafür ist ein IP-Leak-Test sinnvoll)
- ob dein Gerät kompromittiert ist oder Überwachungs-Apps mitlaufen

Hinweis: Ortsanzeigen sind oft ungenau. Resolver können Anycast nutzen (gleiche IP an vielen Orten).  
Das wirkt „falsch“, ist aber häufig normal.

## So testest du richtig

### Weg A: Schnellcheck (2 Minuten)

1) Teste in einem privaten Fenster  
So reduzierst du Störeinflüsse durch Login-Zustände und Erweiterungen. Du bist dafür kurz ausgeloggt.

2) Führe einen DNS-Leak-Test einmal aus und notiere die Resolver  
So hast du einen Ausgangswert, den du vergleichen kannst. Du musst dir kurz Namen/Organisationen merken oder notieren.

3) Aktiviere dein VPN und warte kurz, bis es stabil ist  
So vermeidest du Messungen während des Verbindungsaufbaus. Das kostet 1–2 Minuten Zeit.

4) Führe den gleichen Test erneut aus und vergleiche  
So siehst du, ob sich die Resolver klar ändern. Ergebnisse können leicht schwanken, obwohl alles okay ist.

<details><summary>Weg B (Fortgeschritten)</summary>

1) Vergleiche „ohne VPN“ und „mit VPN“ immer in der gleichen Reihenfolge  
So erkennst du echte Unterschiede statt Zufall. Das dauert etwas länger, weil du zwei Durchläufe machst.

2) Nutze zwei verschiedene DNS-Leak-Tests und vergleiche die Ergebnisse  
So senkst du das Risiko, einem Messfehler zu vertrauen. Du bekommst mehr Daten, die du einordnen musst.

3) Achte auf Zwischenspeicher (Cache)  
DNS-Antworten können kurz „festhängen“. So vermeidest du falsche Schlüsse nach einem Wechsel. Du musst dafür ggf. ein paar Minuten warten.

4) Prüfe, ob DNS über HTTPS (DoH) aktiv ist  
Dann siehst du oft den DoH-Dienst statt Router/ISP/VPN. Das ist nicht automatisch ein Leak, aber ein anderer Modus. DoH kann Komfort bringen, macht Vergleiche aber nur sinnvoll, wenn du es bewusst ein- oder ausschaltest.

Bezeichnung kann abweichen – nutze die Suche nach: Secure DNS, DNS über HTTPS, DoH
</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

1) Prüfe, welche DNS-Server dein System verwendet  
So siehst du die System-Sicht statt nur Browser-Sicht. Das ist je nach Gerät und Systemmenü unterschiedlich und kostet Zeit.

2) Teste getrennt pro Netzwerkweg (WLAN, Mobilfunk, Ethernet)  
So findest du Leaks, die nur in einem Netz auftreten. Du brauchst Zugriff auf mehrere Netze.

3) Prüfe Split-Tunneling und „DNS durch den Tunnel“ in der VPN-App  
So vermeidest du Mischbetrieb, bei dem DNS am VPN vorbei läuft. Strengere Einstellungen können einzelne Apps oder lokale Dienste stören.

4) Wenn möglich: Teste nach einem Geräte-Neustart  
So minimierst du Altlasten durch Zwischenspeicher und alte Verbindungen. Das unterbricht deine Arbeit kurz.
</details>

## Ergebnisse verstehen

Wichtig ist nicht, ob „viele“ Einträge erscheinen. Wichtig ist, ob sie zu deinem Testziel passen.

Typische Muster:

- Ohne VPN erscheint dein Router oder dein Internetanbieter. Das ist meist normal.
- Mit VPN erscheinen Resolver, die zum VPN gehören. Das ist das erwartete Ergebnis.
- Mit VPN erscheint zusätzlich dein Internetanbieter. Das ist ein Warnsignal, kann aber auch am Zwischenspeicher, erzwungenem DNS im Netzwerk oder Split-Tunneling liegen.
- Mit VPN erscheinen Resolver aus „fremden“ Organisationen. Oft steckt DoH oder ein Filterdienst dahinter, nicht zwingend ein Leak.

### So merkst du, dass es wirkt

Achte darauf, ob sich die Resolver beim Wechsel „ohne VPN“ → „mit VPN“ klar ändern.  
Achte darauf, ob mit VPN nur noch ein konsistenter Anbieter erscheint.  
Achte darauf, ob die Ergebnisse bei zwei verschiedenen Tests grob übereinstimmen.

<details><summary>Mehr Checks</summary>

- Wiederhole den Test nach einem Browser-Neustart. Bleibt das Muster gleich, ist es belastbarer.
- Teste in einem anderen Netzwerk (z. B. Mobilfunk statt Hotel-WLAN). Erzwungenes DNS fällt dann oft auf.
- Wenn du DoH nutzt: Teste einmal mit DoH an und einmal aus. Vergleiche nur gleiche Modi.
</details>

## Probleme & Lösungen

- **Problem:** Mit VPN taucht der DNS deines Internetanbieters weiterhin auf.  
  **Lösung:** Prüfe VPN-DNS-Einstellungen, deaktiviere Split-Tunneling testweise und starte VPN sowie Gerät neu.

- **Problem:** Ergebnisse wechseln bei jedem Testlauf stark.  
  **Lösung:** Teste im privaten Fenster, warte 2–3 Minuten und vergleiche zwei unterschiedliche DNS-Leak-Tests.

- **Problem:** Nach VPN an/aus bleibt das Ergebnis identisch.  
  **Lösung:** Warte kurz, schließe den Browser komplett und teste erneut. Im Zweifel einmal neu starten.

- **Problem:** Im Firmen-, Schul- oder Hotelnetz erscheinen immer Resolver des Netzbetreibers.  
  **Lösung:** Teste in einem anderen Netz (z. B. Mobilfunk) oder akzeptiere, dass DNS im Netz erzwungen wird.

- **Problem:** Du siehst einen DoH-Dienst und hältst das für ein Leak.  
  **Lösung:** Prüfe, ob DoH im Browser oder System aktiv ist. Teste dann konsistent mit gleicher Einstellung.

- **Problem:** Ein Proxy (Vermittlungsserver) verändert die Ergebnisse.  
  **Lösung:** Deaktiviere den Proxy für den Testlauf oder dokumentiere ihn als Randbedingung beim Vergleich.

## Grenzen

Nicht gelöst bleibt dabei:

- Ein DNS-Leak-Test zeigt Resolver, aber nicht, was andere Netzbeobachter sonst erkennen können.
- Er sagt wenig über Apps außerhalb des Browsers, wenn du nur im Browser testest.
- Er ersetzt keine IP-Leak- oder WebRTC-Tests.
- In verwalteten Netzen kann DNS absichtlich umgebogen werden. Das ist nicht immer „dein Fehler“.
- Bei kompromittierten Geräten (Admin-Zugriff, Stalkerware, Zwang) helfen Tests nur begrenzt. Ergebnisse können manipuliert oder umgangen werden.

## Weiter

- [DNS: Schnellstart](/dns/schnellstart/)
- [DNS: Probleme](/dns/probleme/)
- [Netzwerk-Leaks: DNS](/netzwerk/leaks/dns/)
- [VPN-Leaks verstehen](/vpn/leaks/)
- [IP Leak Test](/tests/ip-leak-test/)

## FAQ

**Sind Tests 100% zuverlässig?**

Nein. Ergebnisse hängen von Browser/Netzwerk/Updates ab. Nutze sie als Hinweis und prüfe mit Fix-Anleitungen.

**Was bedeutet ein „Leak“?**

Dass Daten am Schutz vorbei rausgehen können. Folge den Fix-Schritten und teste erneut.

**Warum schwanken Werte?**

Fingerprinting ist dynamisch. Auch Werbung/Blocker/Updates ändern Signale.

## Quellen

- [RFC 1034: Domain Names – Concepts and Facilities](https://www.rfc-editor.org/rfc/rfc1034)
- [RFC 1035: Domain Names – Implementation and Specification](https://www.rfc-editor.org/rfc/rfc1035)
- [RFC 7858: DNS over TLS (DoT)](https://www.rfc-editor.org/rfc/rfc7858)
- [RFC 8484: DNS over HTTPS (DoH)](https://www.rfc-editor.org/rfc/rfc8484)
- [Mozilla Support: DNS über HTTPS in Firefox](https://support.mozilla.org/de/kb/dns-uber-https-doh)
- [Google Chrome Hilfe: Sicheres DNS](https://support.google.com/chrome/answer/10468685?hl=de)
