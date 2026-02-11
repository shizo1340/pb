---
layout: "@/layouts/DocLayout.astro"
title: "VPN Split-Tunneling: Ausnahmen sicher & Lecks testen"
url: "/vpn/split-tunneling/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Split-Tunneling richtig nutzen: sichere Ausnahmen festlegen, Leaks testen (DNS/IP/IPv6/WebRTC) und typische Fehler vermeiden."
---
Split-Tunneling (ein Teil deines VPN-Verkehrs läuft am VPN vorbei) nervt, wenn du „VPN an“ willst, aber Banking, Streaming, Drucker im Heimnetz oder Firmen-Apps plötzlich streiken.

Gleichzeitig ist es riskant. Ein Teil deines Verkehrs umgeht bewusst das VPN. Ohne klare Regeln bleiben DNS-, IP-, IPv6- oder WebRTC-Lecks oft unbemerkt.

Am Ende dieser Anleitung hast du wenige, saubere Ausnahmen. Du kannst prüfen, ob sie wirklich nur das tun, was du beabsichtigst.

Sinnvoll, wenn du gezielt Ausnahmen brauchst (z. B. Heimnetz, einzelne Apps).
Grenze: Split-Tunneling kann dir ein falsches Sicherheitsgefühl geben.

## Kurzfazit
- Wenn du nur 10 Minuten hast: VPN korrekt einrichten, Leaks testen und Split‑Tunneling vermeiden.
- Wichtig: VPN ist kein Anti‑Tracking‑Allheilmittel – nutze es für die passenden Risiken.

## Ziel

Weg A: Ausnahmen klein halten und danach testen.  
Weg B: Ausnahmen nach Apps oder Zielen sauber trennen und „kritische“ Apps im VPN lassen.  
Weg C: Routen und Regeln bewusst setzen und Lecks systematisch ausschließen.

Stoppsignal: Wenn du nicht klar benennen kannst, was außerhalb laufen darf, nutze kein Split-Tunneling.  
Aufwand + Komfortkosten: 10–30 Minuten. Du musst Regeln pflegen und gelegentlich nachtesten.

## Schnellstart (10 Minuten)
1) Entscheide, was außerhalb des VPN laufen darf  
1. Schreibe 2–5 konkrete Fälle auf (z. B. „Drucker“, „Streaming-App“, „Firmenportal“).
2. Streiche alles, was nur bequemer ist.
3. Lege fest, was immer im VPN bleibt (z. B. Banking, Passwortverwaltung, E-Mail).
Du reduzierst Risiko und sparst später Fehlersuche. Es kann aber sein, dass du eine fehlende Ausnahme nachträglich ergänzen musst.

2) Prüfe, welche Art Split-Tunneling du überhaupt hast  
4. Schau in der VPN-App oder den System-Einstellungen nach Ausnahmen.
5. Unterscheide: „Apps umgehen das VPN“ vs. „nur diese Apps nutzen das VPN“.
6. Wenn du nur eine grobe Option siehst, bleib konservativ und ändere möglichst wenig.
Bezeichnung kann abweichen – nutze die Suche nach: „Split-Tunneling“, „Ausnahmen“, „VPN umgehen“, „Nur diese Apps“.  
Du weißt danach, ob du eher öffnest oder eher sperrst. Der Nachteil: Mischformen machen Tests schnell unzuverlässig.

3) Kläre, was bei DNS passiert  
7. Prüfe in der VPN-App, ob DNS über das VPN läuft oder ob es Ausnahmen gibt.
8. Wenn Apps am VPN vorbei laufen, kann ihr DNS ebenfalls vorbei laufen.
9. Plane den DNS-Test direkt mit ein (siehe „So merkst du, dass es wirkt“).
Du vermeidest, dass nur „scheinbar“ alles über das VPN geht. Gleichzeitig kann eine strengere DNS-Führung einzelne Netze oder Captive-Portale stören.

4) Denk an IPv6 und WebRTC, bevor du dich auf Tests verlässt  
10. Wenn dein Netz IPv6 nutzt, teste IP-Leaks ausdrücklich mit IPv6.
11. Wenn du Browser-Kommunikation nutzt (z. B. Video), teste WebRTC separat.
12. Plane dafür 2–3 Minuten extra ein.
Du deckst typische Nebenwege auf, die sonst übersehen werden. Der Nachteil: Nicht jedes Gerät und nicht jeder Test zeigt alles automatisch an.

5) Teste mit zwei echten Alltagssituationen  
13. Einmal „kritisch“: Banking oder Konto-Anmeldung im Browser oder in der App.
14. Einmal „Ausnahme“: genau der Dienst, der ohne VPN laufen soll (z. B. Streaming).
15. Notiere kurz, was du geändert hast, damit du es zurückdrehen kannst.
Du merkst früh, ob Split-Tunneling wirklich hilft. Es kann aber sein, dass Dienste nur gelegentlich blockieren und du später erneut testen musst.

## Wege

### Weg A

1) Nutze Split-Tunneling nur für einen klaren Zweck, etwa Heimnetz oder einen Dienst. Das hält die Regeln verständlich. Es kostet dich aber Komfort, wenn du „alles gleichzeitig“ willst.

2) Bevorzuge „nur ausgewählte Apps im VPN“ statt „Apps ohne VPN“, wenn beides möglich ist. Das ist meist kontrollierbarer. Der Nachteil: Du musst die Liste der VPN-Apps aktiv pflegen.

3) Halte Ausnahmen klein: erst eine Ausnahme, dann testen, erst danach die nächste. So findest du Fehler schneller. Es dauert aber länger als „alles auf einmal“.

4) Lege fest: Banking, Passwortverwaltung, E-Mail und Konto-Wiederherstellung bleiben immer im VPN. Das reduziert Schaden bei Fehlern. Es kann aber bedeuten, dass einzelne Logins öfter als „ungewöhnlich“ auffallen.

5) Prüfe nach jeder Änderung DNS und IP, idealerweise auch mit IPv6. Das macht Lecks sichtbar. Du musst dafür konsequent nachtesten, sonst bringt die Regel wenig.

6) Wenn Streaming oder Banking mit VPN hakt, nimm nur genau diesen Dienst als Ausnahme. Das begrenzt Datenabfluss. Zu breite Ausnahmen machen dich schwerer prüfbar.

7) Beobachte 1–2 Tage Akku und Hintergrundverkehr. Du erkennst, ob Ausnahmen mehr „Dauerverkehr“ erzeugen. Das kostet etwas Aufmerksamkeit im Alltag.

8) In fremden Netzen (Hotel, Bahn, Café) eher kein Split-Tunneling. Das reduziert Überraschungen durch Netzbesonderheiten. Du verlierst aber kurzfristig Komfort, wenn ein Dienst dort zickt.

<details><summary>Weg B (Fortgeschritten)</summary>

1) Trenne „Ausnahmen für Funktion“ von „Ausnahmen für Komfort“ und lösche Komfort-Ausnahmen konsequent. Das hält die Angriffsfläche klein. Es kann aber bedeuten, dass du gewohnte Workarounds aufgibst.

2) Nutze genau eine Logik: entweder eine kleine Liste „außerhalb“ oder eine kleine Liste „nur im VPN“. Das macht Tests verlässlich. Mischformen sind bequemer, aber schwerer zu prüfen.

3) Behandle DNS als Teil der Entscheidung. Wenn Apps außerhalb laufen, rechne mit DNS außerhalb und teste genau das. Das verhindert falsche Sicherheit. Der Nachteil: Manche Netze reagieren empfindlich auf geänderte DNS-Wege.

4) Teste Split-Tunneling in mindestens zwei Netzen (Heimnetz + Mobilfunk). Du siehst, ob Regeln stabil sind. Es kostet aber etwas Zeit und Datenvolumen.

5) Prüfe bei Browsern zusätzlich WebRTC, besonders bei Videotelefonie oder Web-Anrufen. Du vermeidest eine häufige Leak-Klasse. Der Nachteil: Einschränkungen können einzelne Browser-Funktionen beeinflussen.
</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.

1) Nutze getrennte Profile: „alles im VPN“ als Standard und „Ausnahmen“ nur in einem zweiten Profil. Das macht Rückbau und Fehlersuche leichter. Es erhöht aber die Komplexität im Alltag.

2) Setze Ausnahmen möglichst zielbasiert (nur bestimmte Ziele oder Netze), nicht breit app-basiert. Das begrenzt Datenabfluss besser. Es erfordert aber mehr Verständnis für Ziele, Netze und Routen.

3) Behandle IPv6 bewusst: Wenn du nur IPv4 testest, kann IPv6 am VPN vorbei laufen. Das macht die Prüfung vollständiger. Der Nachteil: Manche VPNs oder Netze haben bei IPv6 mehr Sonderfälle.

4) Prüfe WebRTC-Leaks separat und entscheide bewusst, ob dein Browser Einschränkungen braucht. Das verhindert Überraschungen bei Echtzeitkommunikation. Einschränkungen können aber Komfort bei Calls und Web-Apps kosten.

5) Dokumentiere Regeln kurz (Ziel, Ausnahme, Testdatum). Du kannst Änderungen später nachvollziehen. Ohne Pflege wird es schnell unübersichtlich.

Zu aggressive Regeln können Updates, Push-Nachrichten oder Captive-Portale stören. Das ist oft erst unterwegs sichtbar.
</details>

## So merkst du, dass es wirkt

- Achte darauf, ob deine öffentliche IP im Standardfall zur VPN-Verbindung passt, auch mit IPv6.  
- Achte darauf, ob DNS-Server und Standort-Hinweise zu deinem gewählten Weg passen (voll im VPN vs. Ausnahmen).  
- Achte darauf, ob Ausnahmen stabil sind oder „mal ja, mal nein“ wirken, besonders nach Netzwechseln.

<details><summary>Mehr Prüfungen</summary>

- Teste IP-Leaks im Standardfall und einmal gezielt mit der App, die außerhalb laufen soll: [IP-Leak-Test](/tests/ip-leak-test/).  
- Teste DNS getrennt vom IP-Test, weil DNS-Lecks oft nicht auffallen: [DNS-Leak-Test](/tests/dns-leak-test/).  
- Wenn du Web-Calls nutzt, teste WebRTC extra: [WebRTC-Test](/tests/webrtc-test/).  
- Wenn du Ergebnisse nicht einordnen kannst, prüfe Ursachen und Gegenmaßnahmen: [VPN-Leaks verstehen und prüfen](/vpn/leaks/).  
</details>

## Probleme & Lösungen

- **Problem:** Streaming oder Mediatheken funktionieren mit VPN nicht zuverlässig. / **Lösung:** Lege eine einzige, klar begrenzte Ausnahme nur für diesen Dienst an und teste danach DNS und IP erneut.

- **Problem:** Banking-App oder Login-Seiten melden „ungewöhnliche Anmeldung“. / **Lösung:** Lass Banking entweder immer im VPN oder immer außerhalb, aber nicht wechselnd, und teste danach im selben Netz erneut.

- **Problem:** DNS-Leak trotz VPN oder nur bei der Ausnahme-App. / **Lösung:** Prüfe, ob DNS über das VPN erzwungen wird und ob Ausnahmen auch DNS betreffen, dann teste mit [DNS-Leak-Test](/tests/dns-leak-test/).

- **Problem:** IPv6-Leak: IPv4 wirkt „im VPN“, IPv6 nicht. / **Lösung:** Teste explizit IPv6 und entscheide, ob IPv6 sauber über VPN laufen soll oder im Netz bewusst vermieden wird.

- **Problem:** WebRTC zeigt eine andere IP als erwartet. / **Lösung:** Teste mit [WebRTC-Test](/tests/webrtc-test/) und passe Browser-Einstellungen so an, dass WebRTC nicht am VPN vorbei kommuniziert.

- **Problem:** Akkuverbrauch steigt trotz Split-Tunneling. / **Lösung:** Reduziere Ausnahmen, prüfe Hintergrundzugriffe der Ausnahme-Apps und beobachte 24–48 Stunden.

- **Problem:** Du fühlst dich komplett geschützt, weil „VPN an“ ist. / **Lösung:** Behandle Split-Tunneling als bewusste Ausnahmeverwaltung und teste nach jeder Änderung.

## Nicht gelöst

- Split-Tunneling verhindert nicht, dass Apps dich innerhalb ihres Kontos wiedererkennen.  
- Es schützt nicht vor Tracking durch den Dienst selbst, wenn du eingeloggt bist.  
- Ein kompromittiertes Gerät (Malware, Admin-Zugriff, Stalkerware, Zwang) kann Daten vor dem VPN abgreifen.  
- Es macht dich nicht anonym: Dein VPN-Anbieter und viele Dienste sehen weiterhin Verbindungen und Metadaten.  
- Es verhindert keine Fehlannahmen: Aus „nur Streaming“ wird sonst schnell „halbes Gerät ohne VPN“.

## FAQ

**Brauche ich wirklich ein VPN?**

Nicht immer. VPNs helfen v. a. gegen unsichere WLANs und zur Trennung von Netzwerken, sind aber kein Tracking-Allheilmittel.

**Warum leakt IP/DNS trotz VPN?**

Oft liegt es an Split-Tunneling, IPv6/WebRTC oder falschen DNS-Einstellungen. Prüfe Leaks und setze die passenden Fixes.

**Was ist mit „No-Logs“?**

Behauptungen sind nicht beweisbar. Achte auf transparente Technik, Audits, klare Rechtslage und nachvollziehbare Reports.

## Quellen

- [NIST SP 800-46 Rev. 2: Guide to Enterprise Telework, Remote Access, and BYOD Security](https://csrc.nist.gov/publications/detail/sp/800-46/rev-2/final)  
- [RFC 8484: DNS Queries over HTTPS (DoH)](https://www.rfc-editor.org/rfc/rfc8484)  
- [RFC 7858: DNS over TLS (DoT)](https://www.rfc-editor.org/rfc/rfc7858)  
- [RFC 4291: IP Version 6 Addressing Architecture](https://www.rfc-editor.org/rfc/rfc4291)  
- [MDN: WebRTC API](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)

## Weiter

- [VPN-Leaks verstehen und prüfen](/vpn/leaks/)  
- [IP-Leak-Test](/tests/ip-leak-test/)  
- [DNS-Leak-Test](/tests/dns-leak-test/)  
- [WebRTC-Test](/tests/webrtc-test/)  
- [DoH und DoT verstehen](/dns/doh-dot/)  
- [Wann ein VPN sinnvoll ist](/vpn/wann-sinnvoll/)
