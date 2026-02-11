---
layout: "@/layouts/DocLayout.astro"
title: "DNS im Router einstellen: DNS-Resolver setzen und prüfen"
url: "/dns/router/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "DNS im Router einstellen: eigene DNS-Server setzen, IPv4/IPv6 prüfen und typische Fehler beheben. Mit Schnellstart, Wegen A–C, Checks und Rückfallplan."
---
Viele Router nutzen automatisch die DNS-Server deines Internetanbieters. Das ist bequem, aber du merkst es an Tracking, Filtern oder daran, dass Geräte unterschiedliche Ergebnisse bekommen.

Nach dieser Anleitung nutzt dein Heimnetz einen festen DNS-Resolver (DNS-Dienst, der Domainnamen auflöst). Du prüfst danach, ob IPv4 und IPv6 wirklich darüber laufen.

Sinnvoll, wenn du DNS im Heimnetz zentral steuern willst, ohne jedes Gerät einzeln anzufassen.  
Grenze: DNS im Router verhindert kein Web-Tracking und verschlüsselt keine Inhalte.

## Kurzfazit
- Wenn du nur 10 Minuten hast: aktiviere DoH/DoT und teste auf DNS‑Leaks.
- Wichtig: Der Resolver sieht Domains – wähle ihn bewusst und prüfe Probleme im Alltag.

## Ziel

Weg A: DNS-Server im Router setzen und per DHCP an Geräte verteilen.  
Weg B: Wenn möglich, DNS im Router verschlüsseln (DoT/DoH) oder über einen lokalen Resolver bündeln.  
Weg C: DNS erzwingen (Firewall) und zusätzlich validieren (DNSSEC) – mit mehr Risiko für Brüche.

Stoppsignal: Wenn dein Anbieter für Telefon/TV ausdrücklich „eigene DNS erforderlich“ nennt, ändere zuerst nur testweise und notiere die Originalwerte.  
Aufwand + Komfortkosten: 10–25 Minuten, eventuell kurze Unterbrechung beim Neustart; selten funktionieren einzelne Dienste erst nach Rückwechsel.

## Schnellstart (15 Minuten)
1) **Ausgangslage festhalten (damit du zurück kannst)**  
1. Im Router anmelden (Weboberfläche oder App).
2. Aktuelle DNS-Server notieren (IPv4 und – falls vorhanden – IPv6).
3. Screenshot der Internet-/WAN-Seite machen.
So kannst du später sauber zurückstellen. Es kostet dich kurz Zeit, spart aber lange Fehlersuche.

2) **DNS-Resolver auswählen (nicht nach Bauchgefühl)**  
4. Entscheide: normaler DNS (Port 53) oder verschlüsselter DNS (DoT/DoH).
5. Prüfe beim Anbieter: Protokolle (DoT/DoH), Datenschutztext und Log-Hinweise.
6. Notiere die Werte: IP-Adressen (IPv4/IPv6) oder DoT/DoH-Endpunkt.
Das reduziert Mitlesen und Manipulation auf dem Weg zum Resolver. Der Resolver sieht trotzdem, welche Domains du auflöst.

3) **DNS für die Internetverbindung setzen (WAN/Internet)**  
7. In den Internet-/WAN-Einstellungen „DNS automatisch“ deaktivieren (falls vorhanden).
8. Primären und sekundären DNS-Server eintragen (IPv4).
9. Falls verfügbar: auch IPv6-DNS setzen.
Bezeichnung kann abweichen – nutze die Suche nach: DNS, Namensserver, WAN, Internet.  
So nutzt der Router für eigene Anfragen deinen gewählten Resolver. Ein Tippfehler kann die Namensauflösung komplett lahmlegen.

4) **DNS-Verteilung im Heimnetz prüfen (DHCP/LAN)**  
10. In LAN-/DHCP-Einstellungen nach „DNS-Server für Clients“ suchen.
11. Als DNS entweder den Router selbst oder direkt den Resolver verteilen (je nach Router).
12. Lease-Zeit (Adress-Leihzeit) nicht extrem lang setzen.
Bezeichnung kann abweichen – nutze die Suche nach: DHCP, LAN, Netzwerkeinstellungen.  
So bekommen Geräte konsistent dieselben DNS-Infos. Manche Geräte ignorieren DHCP-DNS, wenn dort manuell etwas gesetzt ist.

5) **Geräte „mitnehmen“ (damit es wirklich greift)**  
13. WLAN kurz aus/an oder Flugmodus kurz an/aus.
14. Bei Problemen: Gerät neu starten.
15. In den Netzwerkdetails prüfen, welcher DNS angezeigt wird.
So siehst du schnell, ob die Umstellung angekommen ist. Browser oder Apps können eigenen verschlüsselten DNS nutzen und am Router vorbei auflösen.

6) **Kurztest auf zwei Geräten**  
16. Öffne eine DNS-Testseite und prüfe, ob der erwartete Resolver erscheint.
17. Teste mit Smartphone und Laptop, um Ausreißer zu erkennen.
So findest du IPv4/IPv6-Abweichungen sofort. Tests und Router können kurz zwischenspeichern, also bei Bedarf nach ein paar Minuten erneut prüfen.

## Wege

### Weg A

1. Original-DNS im Router notieren (IPv4/IPv6) und Screenshot machen. So kannst du jederzeit zurück.  
2. Router: DNS-Server für die Internetverbindung manuell setzen (primär/sekundär). Ein Fehler kann das Netz „offline“ wirken lassen.  
3. Router: DHCP/LAN so einstellen, dass Geräte DNS vom Router/Resolver erhalten. Das sorgt für Einheitlichkeit, kann aber von manuellen Geräte-Einstellungen überstimmt werden.  
4. Falls dein Router getrennte Netze hat (Gastnetz/IoT): dort DNS ebenfalls prüfen. Sonst sind Tests schnell widersprüchlich.  
5. Router einmal neu verbinden oder neu starten. Das unterbricht kurz die Verbindung, räumt aber viele Altzustände weg.  
6. Auf zwei Geräten WLAN aus/an und in den Netzwerkdetails nachsehen, ob DNS übernommen wurde. Das zeigt dir Ausreißer, kostet aber ein paar Minuten.  
7. Mit einem DNS-Test prüfen, ob der erwartete Resolver genutzt wird. Ein positives Ergebnis heißt noch nicht, dass alle Geräte folgen.  
8. Wenn du IPv6 nutzt: explizit prüfen, ob auch über IPv6 der erwartete Resolver erscheint. Sonst „rutscht“ ein Teil am Router vorbei.  
9. Wenn etwas bricht: zuerst auf die notierten Originalwerte zurückstellen, dann schrittweise erneut versuchen. Das ist der schnellste Rettungsanker.

<details><summary>Weg B (Fortgeschritten)</summary>

- Wenn der Router es anbietet: DoT oder DoH aktivieren und den passenden Endpunkt eintragen. Das schützt die DNS-Anfragen auf dem Weg, kann aber in manchen Netzen (Captive-Portal) erst nach Login funktionieren.  
- Wenn der Router das nicht kann: einen lokalen DNS-Resolver im Heimnetz nutzen und dort verschlüsselt zum Upstream weiterleiten. Das bringt Kontrolle, erfordert aber ein zusätzliches Gerät oder eine Router-Funktion.  
- Bei Geräten, die „eigene DNS“ nutzen (manuell/Apps/Browser): auf dem Gerät prüfen und dort ggf. deaktivieren oder anpassen. Das macht Ergebnisse konsistent, kann aber Komfortfunktionen (z. B. Schutzfilter) verändern.  
- Für getrennte Netze (Gast/IoT): DNS je Netz getrennt setzen. Das verhindert Mischbetrieb, erhöht aber den Pflegeaufwand.
</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.  
- Lokalen Resolver so betreiben, dass er DNSSEC validiert (Antworten werden kryptografisch geprüft). Das reduziert Manipulation, kann aber bei falsch konfigurierten Domains zu Ausfällen führen.  
- Upstream nur verschlüsselt nutzen (DoT/DoH), wenn verfügbar. Das schützt den Transport, macht Fehlersuche aber manchmal schwieriger.  
- Im Router per Firewall ausgehend DNS (Port 53/853) von Clients sperren, außer zum lokalen Resolver. Das verhindert „Ausbrechen“, kann aber Updates, Smart-TV-Apps oder Gastzugänge stören.  
- Für IPv6 zusätzlich prüfen, dass Router Advertisements keine anderen DNS-Server verteilen. Das schließt eine häufige Lücke, ist aber je nach Router-Menü schwer zu finden.
</details>

## So merkst du, dass es wirkt

- Achte darauf, ob in den Netzwerkdetails deiner Geräte als DNS der Router oder dein gewünschter Resolver angezeigt wird.  
- Achte darauf, ob ein DNS-Test auf zwei Geräten denselben Resolver zeigt (oder zumindest dieselbe Resolver-Familie).  
- Achte darauf, ob sich das Testergebnis ändert, wenn du im Router kurz auf Original-DNS zurückstellst und wieder aktivierst.

<details><summary>Mehr Prüfungen & Hinweise</summary>

- Wenn nur einzelne Geräte „anders“ sind: prüfe dort manuell gesetzte DNS-Einträge oder aktivierten „DNS über HTTPS“ im Browser.  
- Wenn nur IPv6 „anders“ ist: im Router nach separaten IPv6-DNS-Feldern oder DNS-Verteilung über Router Advertisements suchen.  
- Wenn Ergebnisse schwanken: ein paar Minuten warten (Zwischenspeicher) und erneut prüfen; Router und Geräte speichern DNS-Antworten oft kurzzeitig.
</details>

## Probleme & Lösungen

- **Problem:** Nach der Umstellung lädt nichts mehr. / **Lösung:** DNS-Einträge im Router auf Tippfehler prüfen, dann auf die notierten Originalwerte zurück und erneut versuchen.  
- **Problem:** Ein Gerät nutzt weiter den alten DNS-Server. / **Lösung:** WLAN trennen/neu verbinden, danach in den Netzwerkdetails prüfen; bei Bedarf Gerät neu starten.  
- **Problem:** Test zeigt den richtigen Resolver, aber einzelne Seiten wirken fehlerhaft. / **Lösung:** Kurz warten (Zwischenspeicher), dann erneut testen; testweise mit Original-DNS vergleichen, ob der Resolver filtert.  
- **Problem:** Über IPv4 stimmt es, über IPv6 nicht. / **Lösung:** Im Router separate IPv6-DNS-Einstellungen suchen und setzen; danach Geräte neu verbinden.  
- **Problem:** Gastnetz oder Smart-Home-Netz verhält sich anders als das Hauptnetz. / **Lösung:** DNS je Netz separat prüfen; viele Router haben pro Netz eigene DHCP/DNS-Regeln.  
- **Problem:** Telefon oder TV des Anbieters spinnt nach DNS-Änderung. / **Lösung:** Original-DNS wiederherstellen und beim Anbieter prüfen, ob eigene DNS vorausgesetzt werden; dann vorsichtig mit Weg B arbeiten (lokaler Resolver, der weiterleitet).

## Nicht gelöst

- Der DNS-Resolver sieht weiterhin, welche Domains du auflöst (auch bei DoT/DoH).  
- Webseiten und Dienste sehen weiterhin deine IP-Adresse und können selbst tracken.  
- DNS im Router verschlüsselt nicht automatisch deinen gesamten Internetverkehr.  
- Manche Programme oder Geräte nutzen eigene DNS-Mechanismen und umgehen Router-Vorgaben.  
- Wenn ein Gerät kompromittiert ist (Admin-Zugriff, Stalkerware, Zwang durch Zugriff auf das Gerät), hilft DNS im Router nur begrenzt.

## FAQ

**Ist DoH/DoT automatisch „privater“?**

Es verschlüsselt DNS-Anfragen, aber der Resolver sieht weiterhin Domains. Wichtig ist daher: vertrauenswürdiger Resolver + keine Leaks.

**Warum gibt es DNS-Probleme nach der Umstellung?**

Typisch sind Captive Portals, Firmen-VPNs oder Router-Filter. Dann hilft ein Fallback oder die Umstellung pro Netzwerk.

**Muss ich DNS zusätzlich zum VPN ändern?**

Nicht zwingend. Entscheidend ist, dass DNS nicht am VPN vorbei leakt. Ein Leak-Test und die richtigen Einstellungen sind wichtiger als „immer extra“.

## Quellen

- [RFC 7858: DNS over TLS](https://datatracker.ietf.org/doc/html/rfc7858)  
- [RFC 8484: DNS Queries over HTTPS (DoH)](https://www.rfc-editor.org/rfc/rfc8484.html)  
- [RFC 2132: DHCP Options (Domain Name Server Option)](https://datatracker.ietf.org/doc/html/rfc2132)  
- [RFC 8106: IPv6 Router Advertisement Options for DNS](https://datatracker.ietf.org/doc/html/rfc8106)  
- [RFC 7626: DNS Privacy Considerations](https://www.rfc-editor.org/rfc/rfc7626.html)  
- [Mozilla Support: DNS über HTTPS in Firefox](https://support.mozilla.org/de/kb/firefox-dns-%C3%BCber-https)

## Weiter

- [DNS Schnellstart](/dns/schnellstart/)  
- [DoH vs. DoT](/dns/doh-dot/)  
- [DNS Probleme](/dns/probleme/)  
- [DNS-Leaks](/netzwerk/leaks/dns/)  
- [Router-Sicherheit](/netzwerk/router-sicherheit/)  
- [VPN: Wann sinnvoll?](/vpn/wann-sinnvoll/)
