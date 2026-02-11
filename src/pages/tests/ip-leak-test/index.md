---
layout: "@/layouts/DocLayout.astro"
title: "IP-Leak-Test: IP-Adresse und Netzwerk-Leaks prüfen"
url: "/tests/ip-leak-test/"
chapter: "Tests"
type: "test"
format: "test"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "IP-Leak-Test: Prüfe in Minuten, welche IP-Adressen, IPv4/IPv6 und WebRTC-Daten Webseiten sehen – mit Checks, typischen Fehlern und Lösungen, inkl. Deutung."
---
Du nutzt ein VPN, aber eine Webseite zeigt trotzdem deine „echte“ IP.  
Oder du siehst mehrere IPs und weißt nicht, ob das ein Leak ist.

Mit einem IP-Leak-Test prüfst du, welche IP-Adressen und Netzdetails Webseiten sehen.  
So erkennst du, ob „VPN an“ wirklich anders aussieht als „VPN aus“.

Sinnvoll, wenn du VPN/Proxy nutzt, im öffentlichen WLAN bist oder IP/Standort-Anzeigen seltsam wirken.  
Grenze: Der Test sagt nichts darüber, ob dein Gerät kompromittiert ist.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Was misst es / was nicht

Ein IP-Leak-Test zeigt typischerweise deine sichtbare **öffentliche IP-Adresse**.  
Je nach Setup kann er **IPv4**, **IPv6** oder beides anzeigen.

Manche Testseiten zeigen zusätzlich **WebRTC** (Browser-Technik für Echtzeit-Kommunikation).  
Dabei können weitere IPs auftauchen, die du einordnen musst.

Der Test zeigt nicht, **wer du bist** (Name/Konto).  
Er zeigt auch nicht die **Inhalte** deiner Verbindungen (bei HTTPS sind Inhalte verschlüsselt).

Er ersetzt keine Tests gegen **Tracking** (Fingerabdruck, Kontologins, Kennungen).  
Und er zeigt keinen Angriff – nur, was von außen sichtbar ist.

## So testest du richtig

### Weg A (Standard)

1) **Lege fest, was du prüfen willst: „VPN aus“ oder „VPN an“.**  
Das macht Ergebnisse vergleichbar. Es kann aber falsche Sicherheit geben, wenn du später doch wechselst.

2) **Öffne ein privates Fenster und starte dort den Test.**  
Das reduziert Einfluss von Cookies und Verlauf. Es entfernt aber nicht jeden Zwischenspeicher.  
Bezeichnung kann abweichen – nutze die Suche nach: privat, inkognito, inprivate.

3) **Teste zuerst ohne VPN/Proxy und notiere das Ergebnis als Referenz.**  
So weißt du, wie „normal“ bei dir aussieht. Es kostet aber kurz Komfort, weil du Schutz ausschaltest.

4) **Aktiviere danach VPN/Proxy und lade die Testseite einmal neu.**  
So siehst du den Unterschied direkt. Es kann aber irreführend sein, wenn das VPN gerade umschaltet.

5) **Achte bewusst auf mehrere IPs (IPv4/IPv6, WebRTC).**  
Du erkennst damit echte Leaks schneller. Es kann aber zu Fehlalarm führen, wenn du jede Zusatz-IP als „Leak“ deutest.

6) **Wiederhole den Test nur nach einer Änderung genau einmal.**  
Das zeigt echte Effekte statt Zufall. Zu häufiges Neuladen erhöht aber Messartefakte.

<details><summary>Weg B (Fortgeschritten)</summary>

1) **Teste zusätzlich in einem zweiten Browser oder in einem neuen Profil.**  
Das trennt Browser-Effekte besser. Es dauert aber länger und ist weniger bequem.

2) **Trenne Netzwege: nur WLAN oder nur Mobilfunk, nicht beides.**  
So vermeidest du Misch-Ergebnisse. Das schränkt aber kurzfristig Erreichbarkeit ein.

3) **Beende den Browser komplett, starte neu und teste erneut.**  
Das räumt alte Verbindungen eher aus. Es unterbricht aber deinen Arbeitsfluss.

4) **Wenn du ein VPN nutzt: prüfe, ob geteilter Datenverkehr aktiv ist.**  
Split-Tunneling (geteilter Datenverkehr) kann echte IPs sichtbar lassen. Es ist aber manchmal gewollt und kein „Fehler“.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

1) **Prüfe, ob dein System IPv6 aktiv nutzt, und ob das VPN IPv6 mitnimmt.**  
So findest du „IPv6-only“-Lecks, die sonst übersehen werden. Es kann aber Nebenwirkungen haben, wenn du IPv6 testweise deaktivierst.

2) **Teste WebRTC gezielt und vergleiche mit einem WebRTC-Test.**  
So siehst du, ob zusätzliche IPs aus dem Browser kommen. Das kann aber komplex wirken, weil Ergebnisse je nach Browser stark variieren.

3) **Dokumentiere: Referenz-IP, VPN-IP, Datum, Netzwerk (WLAN/Mobilfunk).**  
Das macht spätere Fehleranalyse möglich. Es kostet aber Disziplin und ein paar Minuten extra.

</details>

## Ergebnisse verstehen

**Du siehst genau eine öffentliche IP (IPv4 oder IPv6).**  
Das ist oft der Normalfall.

**Du siehst IPv4 und IPv6.**  
Das ist bei vielen Anschlüssen normal. Wichtig wird es, wenn dein Schutz nur eine Variante abdeckt.

**Mit VPN/Proxy ändert sich die öffentliche IP nicht.**  
Dann greift der Schutz wahrscheinlich nicht für diese Verbindung.

**Mit VPN siehst du eine andere IP, aber zusätzlich die Referenz-IP.**  
Das kann ein Leak sein. Häufig steckt geteilter Datenverkehr oder eine nicht abgedeckte IP-Version dahinter.

**Der angezeigte Ort passt nicht zu dir.**  
IP-Ortung ist ungenau. Entscheidend ist die IP, nicht die Karte.

## So merkst du, dass es wirkt

Achte darauf, ob die IP bei „VPN an“ **stabil anders** ist als ohne VPN.  
Achte darauf, ob bei „VPN an“ **keine** IP auftaucht, die deiner Referenz entspricht.  
Achte darauf, ob IPv4 **und** IPv6 im Schutzfall beide „fremd“ wirken oder nur eine davon.

<details><summary>Mehr Checks</summary>

Achte darauf, ob Ergebnisse in einem zweiten Browser gleich aussehen.  
Achte darauf, ob der Wechsel WLAN ↔ Mobilfunk das Muster verändert.  
Achte darauf, ob WebRTC zusätzliche IPs zeigt, die du sonst nicht siehst.

</details>

## Probleme & Lösungen

- **Problem:** Mit VPN ist die IP identisch zur Referenz.  
  **Lösung:** Prüfe, ob das VPN wirklich verbunden ist, und starte den Browser neu.

- **Problem:** Zwei öffentliche IPs werden angezeigt, eine ist die Referenz.  
  **Lösung:** Deaktiviere geteilten Datenverkehr und teste mit nur einem Netzweg.

- **Problem:** IPv4 wirkt geschützt, aber IPv6 zeigt weiter die Referenz.  
  **Lösung:** Nutze eine Lösung, die IPv6 mit absichert, oder deaktiviere IPv6 testweise.

- **Problem:** Ergebnisse ändern sich nicht, obwohl du Einstellungen änderst.  
  **Lösung:** Browser komplett beenden, neues privates Fenster öffnen, dann erneut testen.

- **Problem:** Im Firmen-/Uni-Netz wirkt die IP „fremd“.  
  **Lösung:** Das ist oft normal. Teste zum Vergleich im Heimnetz oder über Mobilfunk.

- **Problem:** Seiten zeigen trotz VPN deinen Standort.  
  **Lösung:** Trenne IP-Ortung von Standortdiensten und prüfe Standort-Berechtigungen.

- **Problem:** Ein Proxy „verfälscht“ alles.  
  **Lösung:** Das ist die Aufgabe eines Proxys. Für die Referenz musst du ihn kurz deaktivieren.

## Grenzen

Ein IP-Leak-Test zeigt, **was** sichtbar ist, aber selten **warum**.  
Er ist kein Schutz, sondern nur eine Kontrolle.

Er sagt nichts über Tracking per Fingerabdruck oder Konto-Login.  
Und er ist kein Nachweis für Angriffe oder Abhören.

## Nicht gelöst

- Wenn dein Gerät kompromittiert ist (Schadsoftware, Stalkerware), kann ein Angreifer Daten unabhängig von der IP abgreifen.  
- Mit Admin-Zugriff auf dein Gerät oder auf deinen Router sind Testergebnisse leicht manipulierbar.  
- Unter Zwang (z. B. Kontrolle durch Partner, Arbeitgeber, Behörden) hilft ein Test allein nicht gegen Überwachung.  
- Gegen sehr mächtige Angreifer im Netz (z. B. Anschluss- oder Netzbetreiber) bleibt die Verbindungsebene grundsätzlich sichtbar.

## Weiter

- [VPN-Leaks verstehen und prüfen](/vpn/leaks/)
- [IP-Leaks im Netzwerk erkennen](/netzwerk/leaks/ip/)
- [DNS Leak Test](/tests/dns-leak-test/)
- [WebRTC Test](/tests/webrtc-test/)
- [VPN Schnellstart](/vpn/schnellstart/)
- [Netzwerk Schnellstart](/netzwerk/schnellstart/)

## FAQ

**Sind Tests 100% zuverlässig?**

Nein. Ergebnisse hängen von Browser/Netzwerk/Updates ab. Nutze sie als Hinweis und prüfe mit Fix-Anleitungen.

**Was bedeutet ein „Leak“?**

Dass Daten am Schutz vorbei rausgehen können. Folge den Fix-Schritten und teste erneut.

**Warum schwanken Werte?**

Fingerprinting ist dynamisch. Auch Werbung/Blocker/Updates ändern Signale.

## Quellen

- [RFC 1918: Address Allocation for Private Internets](https://www.rfc-editor.org/rfc/rfc1918)
- [RFC 4193: Unique Local IPv6 Unicast Addresses](https://www.rfc-editor.org/rfc/rfc4193)
- [RFC 6890: Special-Purpose Address Registries](https://www.rfc-editor.org/rfc/rfc6890)
- [MDN: HTTP Caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)
- [Mozilla-Hilfe: Privates Surfen in Firefox](https://support.mozilla.org/de/kb/privates-surfen-firefox)
