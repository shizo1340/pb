---
layout: "@/layouts/DocLayout.astro"
title: "VPN am Router einrichten: Leaks prüfen und beheben"
url: "/vpn/router/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Schritt-für-Schritt: VPN am Router einrichten, DNS/IP/IPv6-Leaks testen und typische Probleme lösen. Mit Checks, Stoppsignal und Fehlerhilfe im Alltag."
---
Ein VPN am Router klingt nach „einmal einstellen, alles ist geschützt“.  
In der Praxis nerven dann Aussetzer, langsames Internet oder Apps, die streiken.

Ziel ist ein Router-VPN, das stabil läuft.  
Und du kannst prüfen, ob DNS/IP/IPv6 am VPN vorbei gehen. Ein „Leak“ heißt hier: Teile der Verbindung laufen außerhalb des VPN.

Sinnvoll, wenn du mehrere Geräte gleichzeitig über ein VPN führen willst (auch Geräte ohne VPN-App).

Grenze: Ein Router-VPN verhindert kein Tracking in Konten, Apps oder im Browser.

## Kurzfazit
- Wenn du nur 10 Minuten hast: VPN korrekt einrichten, Leaks testen und Split‑Tunneling vermeiden.
- Wichtig: VPN ist kein Anti‑Tracking‑Allheilmittel – nutze es für die passenden Risiken.

## Ziel

Weg A: Router-VPN stabil einrichten und Lecks sicher erkennen.  
Weg B: Router-VPN nur für ein getrenntes Netz oder ausgewählte Geräte nutzen.  
Weg C: Netz so absichern, dass ohne VPN möglichst nichts ins Internet kann.

Stoppsignal: Wenn dein Router mit VPN instabil wird oder stark einbricht, ist VPN pro Gerät oft die bessere Lösung.

Aufwand: meist 20–60 Minuten. Komfortkosten: Streaming, Banking oder Captive Portals können blockieren.

## Schnellstart (30 Minuten)
1) Festlegen, wer durch das VPN soll
1. Entscheide: ganzes Heimnetz oder nur ein separates WLAN (z. B. Gastnetz), falls verfügbar.
2. Notiere 2–3 Geräte, bei denen es wichtig ist (Arbeitslaptop, Streaming-TV, Banking-Smartphone).
3. Plane eine „VPN aus“-Option (zweites WLAN oder Ausnahme pro Gerät), falls etwas nicht funktioniert.
Das kann bedeuten, dass du später zwei Netze pflegst und einmal mehr umschaltest.  
Du vermeidest Chaos, wenn einzelne Dienste mit VPN nicht klarkommen.

2) Router absichern, bevor du am VPN drehst
4. Installiere Router-Updates (Firmware) und starte den Router danach neu.
5. Deaktiviere Fernzugriff/Remote-Verwaltung, wenn du sie nicht brauchst.
6. Sichere die Router-Zugangsdaten in deinem Passwort-Manager.
Ein Update kann kurz die Verbindung trennen und Geräte verlieren das WLAN.  
Du senkst das Risiko, dass bekannte Schwachstellen ausgenutzt werden.

3) VPN-Daten vollständig einsammeln und sichern
7. Lade im Konto deines VPN-Anbieters die passenden Konfigurationsdaten für deinen Router herunter.
8. Wenn es Schlüssel/Zertifikate gibt: speichere sie zusammen mit einer kurzen Notiz (wofür, wann erstellt).
9. Lege eine Kopie in deinem Backup ab.
Verlorene Schlüssel oder Konfigs kosten Zeit, weil du sie neu erzeugen musst.  
Du kannst die Einrichtung später wiederholen, ohne zu raten.

4) VPN-Client im Router einrichten
10. Öffne die Router-Verwaltung im Browser.
11. Lege eine neue VPN-Verbindung an (VPN-Client) und importiere die Konfiguration oder trage die Daten ein.
12. Stelle die Verbindung her und warte 2–5 Minuten, ob sie stabil bleibt.
Bezeichnung kann abweichen – nutze die Suche nach: VPN, Client, Tunnel.
Je nach Router-Hardware kann die Geschwindigkeit deutlich sinken, weil Verschlüsselung Rechenleistung braucht.  
Geräte im Heimnetz nutzen das VPN ohne eigene App.

5) DNS und IPv6 sauber führen
13. Stelle sicher, dass DNS über das VPN läuft (DNS = Namensdienst, der Domainnamen in IP-Adressen auflöst).
14. Prüfe IPv6 (IPv6 = neue IP-Version neben IPv4): Wenn IPv6 am VPN vorbei geht, führe IPv6 durch den Tunnel oder deaktiviere IPv6 am Router.
Bezeichnung kann abweichen – nutze die Suche nach: DNS, Namensserver, Resolver, IPv6.
Falsche DNS- oder IPv6-Einstellungen können „Seite nicht erreichbar“ auslösen oder einzelne Apps brechen.  
Du reduzierst typische Umgehungswege, bei denen nur ein Teil des Verkehrs geschützt ist.

6) Leak-Tests und Alltagstest durchführen
15. Prüfe die öffentliche IP mit aktivem Router-VPN.
16. Prüfe DNS-Leaks und im Browser WebRTC (WebRTC = Browser-Technik für Echtzeitverbindungen).
17. Starte 1–2 typische Dienste (Streaming, Banking, Videokonferenz) und beobachte, was auffällig ist.
Bezeichnung kann abweichen – nutze die Suche nach: WebRTC, Leak Test, öffentliche IP.
Ein „bestanden“ heißt nur: Diese Tests sehen keine Lecks, nicht dass du anonym bist.  
Du siehst schnell, ob das Setup im Alltag trägt und wo du nachjustieren musst.

## Wege

### Weg A

1. Lege einen Standard fest: „VPN an“ ist Normalbetrieb, „VPN aus“ ist Ausweichweg.
2. Aktualisiere den Router und dokumentiere Datum und Version.
3. Richte das Router-VPN ein und prüfe, ob die Verbindung stabil bleibt (mindestens 5 Minuten).
4. Prüfe die öffentliche IP auf einem Gerät im WLAN.
5. Prüfe DNS-Leaks auf demselben Gerät.
6. Prüfe IPv6 getrennt von IPv4. Wenn IPv6 leakt, ändere erst IPv6 und teste danach erneut.
Bezeichnung kann abweichen – nutze die Suche nach: IPv6, Internetprotokoll, Dual Stack.
7. Wenn Streaming oder Banking streikt: wechsle testweise ins „VPN aus“-Netz, um die Ursache einzugrenzen.
8. Nutze Split-Tunneling nur, wenn es nötig ist. Split-Tunneling (geteilte Tunnelführung) heißt: Nicht jeder Verkehr geht durch das VPN.
9. Wiederhole die Tests nach Änderungen und nach Router-Updates.

<details><summary>Weg B (Fortgeschritten)</summary>

- Nutze ein getrenntes Netz für „VPN an“ (zweites WLAN oder Gastnetz), wenn dein Router Netze sauber trennt.
- Lege fest, welche Geräte in dieses Netz gehören (Arbeitsgeräte eher ja, Smart-TV oft eher nein).
- Wenn Regeln pro Gerät möglich sind: setze Ausnahmen sparsam und dokumentiere sie (Gerät, Grund, Datum).
- Prüfe nach jeder Ausnahme doppelt: öffentliche IP und DNS-Test auf genau diesem Gerät.
- Wenn dein Router einen Not-Aus für „Internet nur mit VPN“ bietet, teste ihn bewusst. Ein zu strenger Not-Aus macht das Netz „tot“, sobald das VPN kurz ausfällt.
Bezeichnung kann abweichen – nutze die Suche nach: Kill Switch, Not-Aus, Internet nur über VPN.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.
- Trenne Netze konsequent und erlaube im „VPN an“-Netz nur das, was du wirklich brauchst.
- Setze Firewall-Regeln so, dass Geräte ohne aktiven Tunnel nicht ins Internet kommen (Fail-Closed).
- Erzwinge DNS über den Tunnel und blockiere alternative DNS-Wege, soweit dein Router das kann.
- Entscheide zu IPv6 bewusst: entweder sauber durch den Tunnel oder konsequent deaktivieren.
- Protokolliere jede Änderung (Datum, Regel, Ergebnis der Leak-Tests), sonst wird Fehlersuche schnell unübersichtlich.
Das kann lokale Dienste brechen (Drucker, Smart-Home, Streaming) und kostet Zeit beim Debuggen.  
Du bekommst ein Setup, das bei VPN-Ausfällen nicht still „am Tunnel vorbei“ weiterfunkt.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob die öffentliche IP im [IP-Leak-Test](/tests/ip-leak-test/) nicht mehr zu deinem Anschluss passt, sobald das Router-VPN aktiv ist.
- Achte darauf, ob der [DNS-Leak-Test](/tests/dns-leak-test/) keine DNS-Server deines normalen Internetanbieters zeigt.
- Wenn du im Browser arbeitest: Achte darauf, ob der [WebRTC-Test](/tests/webrtc-test/) keine öffentliche Adresse außerhalb des VPN zeigt.

<details><summary>Mehr Checks</summary>

- Wiederhole die Tests auf genau dem Gerät, das „komisch“ wirkt. Eigene DNS-Einstellungen oder eine VPN-App können Ergebnisse verfälschen.
- Prüfe IPv4 und IPv6 getrennt. „IPv4 okay“ sagt nichts über IPv6.
- Wenn du Ausnahmen nutzt: Teste nach jeder Änderung erneut, sonst übersiehst du Umgehungen.

</details>

## Probleme & Lösungen

- **Problem:** Streaming zeigt Fehlermeldungen oder Inhalte fehlen.  
  **Lösung:** Teste kurz ohne VPN. Nutze für Streaming ein „VPN aus“-Netz oder eine Ausnahme.

- **Problem:** Banking-App verweigert Login oder Bestätigung.  
  **Lösung:** Nutze für Banking temporär „VPN aus“ und prüfe, ob es wirklich am VPN liegt.

- **Problem:** Internet ist mit Router-VPN deutlich langsamer.  
  **Lösung:** Teste mit VPN aus. Wenn der Router der Engpass ist, nutze VPN pro Gerät oder reduziere die Last.

- **Problem:** Ein Gerät umgeht das VPN trotz „VPN an“.  
  **Lösung:** Prüfe auf dem Gerät privates DNS, feste DNS-Server oder eine eigene VPN-App, dann teste IP und DNS erneut.

- **Problem:** DNS-Test zeigt den normalen Internetanbieter.  
  **Lösung:** Stelle DNS im Router so ein, dass DNS über den Tunnel läuft, und teste danach erneut.

- **Problem:** IPv6-Test zeigt eine Adresse außerhalb des VPN.  
  **Lösung:** Führe IPv6 durch den Tunnel oder deaktiviere IPv6 am Router, dann wiederholen.

- **Problem:** Router wird instabil oder startet neu.  
  **Lösung:** Deaktiviere testweise VPN, prüfe Updates und reduziere Parallelverbindungen. Wenn es bleibt: VPN pro Gerät.

- **Problem:** Geräte finden Drucker oder Smart-Home nicht mehr.  
  **Lösung:** Prüfe deine Netztrennung. Viele lokale Dienste funktionieren nur innerhalb desselben Netzes.

## Nicht gelöst

- Ein Router-VPN verhindert nicht, dass Webseiten dich über Konten, Cookies oder Fingerprinting wiedererkennen. Siehe [Tracking-Grundlagen](/tracking/).
- Ein Router-VPN macht dich nicht anonym gegenüber dem VPN-Anbieter. Er sieht mindestens Verbindungsmetadaten.
- Wenn ein Gerät kompromittiert ist (Schadsoftware, Admin-Zugriff), kann es Daten abgreifen, bevor das VPN sie schützt.
- Wenn der Router kompromittiert ist, hilft Router-VPN kaum. Siehe [Router-Sicherheit](/netzwerk/router-sicherheit/).
- Stalkerware, MDM-Profile oder Zwang (z. B. Zugriff auf dein Gerät) hebeln VPN-Schutz oft praktisch aus.
- Browser-Themen wie WebRTC sind kein Router-Problem. Siehe [WebRTC im Browser](/browser/webrtc/).

## FAQ

**Brauche ich wirklich ein VPN?**

Nicht immer. VPNs helfen v. a. gegen unsichere WLANs und zur Trennung von Netzwerken, sind aber kein Tracking-Allheilmittel.

**Warum leakt IP/DNS trotz VPN?**

Oft liegt es an Split-Tunneling, IPv6/WebRTC oder falschen DNS-Einstellungen. Prüfe Leaks und setze die passenden Fixes.

**Was ist mit „No-Logs“?**

Behauptungen sind nicht beweisbar. Achte auf transparente Technik, Audits, klare Rechtslage und nachvollziehbare Reports.

## Quellen

- [BSI: Router, WLAN & VPN sicher einrichten](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Router-WLAN-VPN/router-wlan-vpn_node.html)
- [BSI: Virtual Private Networks (VPN)](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Router-WLAN-VPN/Virtual-Private-Networks-VPN/virtual-private-networks-vpn_node.html)
- [OpenWrt Wiki: WireGuard client](https://openwrt.org/docs/guide-user/services/vpn/wireguard/client)
- [RFC 8200: Internet Protocol, Version 6 (IPv6)](https://www.rfc-editor.org/rfc/rfc8200)
- [MDN: WebRTC API](https://developer.mozilla.org/de/docs/Web/API/WebRTC_API)

## Weiter

- [VPN-Leaks verstehen und prüfen](/vpn/leaks/)
- [Split-Tunneling im Alltag](/vpn/split-tunneling/)
- [DNS-Leaks im Netzwerk](/netzwerk/leaks/dns/)
- [IP-Leaks im Netzwerk](/netzwerk/leaks/ip/)
- [IP-Leak-Test](/tests/ip-leak-test/)
- [DNS-Leak-Test](/tests/dns-leak-test/)
