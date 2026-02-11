---
layout: "@/layouts/DocLayout.astro"
title: "Windows DNS sicher einstellen: DoH aktivieren und prüfen"
url: "/dns/windows/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Anleitung für Windows 11/10: DNS über HTTPS (DoH) aktivieren, Server setzen, Schritt für Schritt prüfen und typische Fehler beheben – mit klaren Grenzen."
---
Du merkst es oft nicht direkt: Webseiten öffnen sich normal, aber deine DNS-Abfragen können trotzdem mitgelesen werden. Das ist nervig, weil daraus gut ableitbar ist, welche Dienste du nutzt. Offene DNS-Abfragen sind außerdem leichter unterwegs zu manipulieren.

Ziel dieser Seite: Unter Windows stellst du DNS so ein, dass die Namensauflösung weniger „im Klartext“ über das Netz läuft. Danach prüfst du, ob es wirklich greift.

Sinnvoll, wenn du oft in fremden WLANs bist oder deinem Internetanbieter bei DNS nicht vertrauen willst.  
Grenze: Verschlüsseltes DNS schützt nur die DNS-Abfrage – nicht automatisch den restlichen Datenverkehr.

## Kurzfazit
- Wenn du nur 10 Minuten hast: aktiviere DoH/DoT und teste auf DNS‑Leaks.
- Wichtig: Der Resolver sieht Domains – wähle ihn bewusst und prüfe Probleme im Alltag.

## Ziel

Weg A: DNS-Server für deine aktive Verbindung setzen und – falls verfügbar – „DNS über HTTPS“ einschalten.  
Weg B: DNS konsistent halten (Windows vs. Programme), pro Netzwerk sauber trennen, saubere Fallbacks.  
Weg C: Verschlüsselten DNS erzwingen und unverschlüsseltes DNS aktiv ausbremsen (mit Risiko für Bruch).

Stoppsignal: Wenn du im Firmen-/Schulnetz bist, ein Geräteverwaltungsprofil aktiv ist oder ein VPN/Filter-Dienst vorgeschrieben ist, ändere DNS dort nicht „blind“. Du kannst sonst Richtlinien brechen oder den Zugang verlieren.  
Aufwand + Komfortkosten: 5–15 Minuten. Möglich sind Verbindungsprobleme (Captive Portal, interne Namen, Filter/Kinderschutz).

## Schnellstart (10 Minuten)
1) **Windows-Version grob einordnen**
1. Öffne **Einstellungen**.
2. Gehe zu **System** → **Info** (oder ähnlich).
3. Notiere: Windows 11 oder Windows 10.
4. Bei Windows 11: Suche in den Netzwerkdetails nach einer Option wie „DNS über HTTPS“.
5. Bezeichnung kann abweichen – nutze die Suche nach: DNS, DNS über HTTPS, DoH.
Das spart dir Zeit, weil du sofort weißt, ob Weg A komplett in Windows geht. Bei Windows 10 fehlt die sichtbare DoH-Option oft, dann musst du auf Weg B ausweichen.

2) **DNS-Server für deine aktuelle Verbindung setzen (WLAN oder Ethernet)**
6. Öffne **Einstellungen** → **Netzwerk & Internet**.
7. Wähle deine aktive Verbindung (WLAN/Ethernet).
8. Suche den Bereich **DNS-Serverzuweisung** / **DNS** und öffne **Bearbeiten**.
9. Stelle auf **Manuell** und aktiviere **IPv4** (und bei Bedarf **IPv6**).
10. Trage „Bevorzugter DNS“ und „Alternativer DNS“ deines gewählten DNS-Dienstes ein.
11. Bezeichnung kann abweichen – nutze die Suche nach: DNS-Serverzuweisung, DNS, Manuell.
Damit nutzt Windows deinen gewählten Resolver statt der automatischen Vorgabe. Tippfehler können aber sofort „Kein Internet“ auslösen, weil die Namensauflösung dann ins Leere läuft.

3) **Falls vorhanden: DNS-Verschlüsselung einschalten (DoH)**
12. Im selben „DNS bearbeiten“-Dialog: Suche **DNS über HTTPS** / **DNS-Verschlüsselung**.
13. Wähle „Ein“ bzw. eine Einstellung, die Verschlüsselung nutzt (Formulierungen variieren).
14. Speichere und trenne kurz die Verbindung (WLAN aus/an) oder starte neu.
15. Bezeichnung kann abweichen – nutze die Suche nach: DNS über HTTPS, Verschlüsselung, DoH.
Du reduzierst damit Mitlesen im WLAN, weil die DNS-Abfragen verschlüsselt übertragen werden. In Hotel- und Gastnetzen kann das aber haken, wenn das Netz DoH blockiert oder das Portal zuerst eine unverschlüsselte Anmeldung erwartet.

4) **Doppelte DNS-Logik vermeiden (Windows vs. einzelne Programme)**
16. Prüfe: Nutzt dein Browser oder ein Sicherheitsprogramm „sicheren DNS“ unabhängig vom System?
17. Entscheide dich möglichst für eine klare Linie: entweder systemweit (Windows) oder bewusst nur im Programm.
18. Wenn du es nicht findest: Suche in den Programmeinstellungen nach „DNS“ oder „sicherer DNS“.
Das macht dein Setup vorhersagbar und Tests werden aussagekräftig. Mischbetrieb hat die Nebenwirkung, dass verschiedene Apps unterschiedliche Resolver nutzen und du „falsche“ Ergebnisse siehst, obwohl nichts kaputt ist.

5) **Kurz prüfen**
19. Öffne den [DNS-Leak-Test](/tests/dns-leak-test/).
20. Achte darauf, ob die angezeigten DNS-Resolver zu deiner Einstellung passen.
21. Wenn du ein VPN nutzt: Erwarte oft den DNS des VPN.
So erkennst du schnell grobe Fehlkonfigurationen. Ein Webtest sieht aber nicht jede App, und bei VPN ist „anders“ nicht automatisch „schlecht“.

## Wege

### Weg A (sichtbar, alltagstauglich)

1. Öffne **Einstellungen** → **Netzwerk & Internet**.  
2. Wähle deine aktive Verbindung (WLAN oder Ethernet).  
3. Öffne **DNS-Serverzuweisung/DNS** → **Bearbeiten**.  
4. Stelle auf **Manuell** und aktiviere **IPv4**.  
5. Trage „Bevorzugter DNS“ und „Alternativer DNS“ deines DNS-Dienstes ein.  
6. Optional: Aktiviere **IPv6** und trage auch dort DNS-Adressen ein (wenn dein DNS-Dienst IPv6 anbietet).  
7. Falls sichtbar: Aktiviere **DNS über HTTPS** (DoH).  
8. Speichere und trenne die Verbindung kurz (WLAN aus/an) oder starte neu.  
9. Prüfe im [DNS-Leak-Test](/tests/dns-leak-test/), ob der Resolver passt.  
10. Wenn etwas nicht funktioniert: Stelle testweise zurück auf „Automatisch“ und nutze „Probleme & Lösungen“.  

Damit bekommst du schnell eine systemweite Einstellung, die die meisten Programme übernehmen. Die Nebenwirkung ist, dass manche Netze oder lokale Namen (z. B. im Heimnetz) schlechter funktionieren können, wenn vorher der Router als Resolver nötig war.

<details><summary>Weg B (Fortgeschritten)</summary>

- Lege fest, ob Windows oder einzelne Programme den Resolver bestimmen sollen. Das macht Verhalten konsistent, kann aber bedeuten, dass du an zwei Stellen nachjustieren musst (System und Browser).
- Trenne pro Netzwerkprofil sauber (Zuhause/Arbeit/Gast). Das hilft bei Gastnetzen, erhöht aber den Pflegeaufwand bei vielen WLANs.
- Wenn DoH in Windows nicht verfügbar ist (häufig bei Windows 10): Setze DNS manuell und nutze Verschlüsselung bewusst im Programm oder über ein VPN. Das verbessert Schutz im Browser, deckt aber nicht automatisch alle Apps ab.
- Achte auf IPv6: Entweder DNS auch für IPv6 setzen oder IPv6 testweise deaktivieren, wenn du Leaks vermutest. Das kann Kompatibilität verbessern, kostet aber teils Geschwindigkeit oder moderne Netzwerkfunktionen.
- Dokumentiere die Ausgangswerte (Screenshot der DNS-Seite). Das beschleunigt den Rückweg, kann aber sensible Infos im Screenshot enthalten (speichere ihn sicher).

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

- Erzwinge nach Möglichkeit „nur verschlüsselt“ statt „wenn möglich“. Das macht Leaks unwahrscheinlicher, kann aber Netze brechen, die DoH/DoT blockieren.
- Setze Richtlinien/Verwaltung so, dass DoH für die Namensauflösung genutzt wird (je nach Edition/Umgebung). Das ist robust, aber fehleranfällig, wenn du die Umgebung nicht vollständig kontrollierst.
- Reduziere Fallback, damit Windows bei Problemen nicht still auf unverschlüsseltes DNS zurückfällt. Das ist gut für die Prüfbarkeit, erhöht aber das Risiko von „Kein Internet“ in schwierigen Netzen.
- Prüfe mit Netzwerkdiagnose, ob noch DNS über Port 53 (unverschlüsselt) rausgeht. Das ist eindeutig, kostet aber Zeit und Know-how.
- Halte einen schnellen Rückweg bereit (zweites Netzwerk, Hotspot, lokales Administratorkonto). Das rettet dich bei Fehlkonfiguration, ist aber zusätzlicher Aufwand.

Achtung: Das kann Captive Portals, Firmennetze, Kinderschutz/Filter und interne Namen kaputtmachen.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob im [DNS-Leak-Test](/tests/dns-leak-test/) die Resolver erscheinen, die du eingestellt hast.
- Prüfe nach einem Netzwechsel (z. B. Gast-WLAN), ob Windows deine DNS-Server beibehalten hat oder wieder „automatisch“ nutzt.
- Wenn Seiten im Gastnetz plötzlich nicht mehr laden: Teste kurz mit „Automatisch“, ob das Netz verschlüsseltes DNS blockiert.

<details><summary>Mehr Prüfungen & Hinweise</summary>

- Windows kann dir die verwendeten DNS-Server anzeigen (Adapterdetails). Das bestätigt die Adresse, aber nicht zwingend, ob wirklich verschlüsselt übertragen wird.
- Wenn du ein VPN nutzt: Prüfe, ob das VPN DNS übernimmt. Das ist üblich und kann genau so gewollt sein.
- Für typische Lecks (z. B. durch IPv6) helfen kombinierte Checks: [DNS-Leak-Test](/tests/dns-leak-test/) und Hintergrundwissen zu [DNS-Leaks](/netzwerk/leaks/dns/).

</details>

## Probleme & Lösungen

- **Problem:** Nach der Umstellung „Kein Internet“ oder einzelne Seiten gehen nicht.  
  **Lösung:** DNS-Adressen prüfen (Zahlendreher sind häufig). Testweise auf „Automatisch“ zurückstellen, dann Schritt für Schritt erneut.

- **Problem:** Im Hotel-/Gastnetz öffnet sich das Anmeldefenster (Captive Portal) nicht.  
  **Lösung:** Kurzzeitig DNS wieder auf „Automatisch“ stellen, anmelden, danach erneut auf manuell/verschlüsselt wechseln.

- **Problem:** Option „DNS über HTTPS“ ist nicht zu finden.  
  **Lösung:** Bei Windows 11 Updates prüfen und in den Netzwerkdetails nach „DNS“ suchen. Bei Windows 10 ist die sichtbare Option oft nicht vorhanden – dann Weg B nutzen.

- **Problem:** Interne Geräte/Server im Heimnetz sind schwer erreichbar (z. B. `drucker.lan`).  
  **Lösung:** Wenn du lokale Namen brauchst, nutze im Heimnetz den Router-DNS oder löse lokale Namen anders (häufig war die Auflösung an den Router gebunden).

- **Problem:** Kinderschutz/Filter im Netz greift nicht mehr wie gewohnt.  
  **Lösung:** Prüfe, ob der Schutz am DNS hängt. Wenn ja, ist „eigener DNS“ eine bewusste Umgehung – entscheide dich für die gewünschte Priorität.

- **Problem:** VPN aktiv, aber der Leak-Test zeigt „falsche“ Resolver.  
  **Lösung:** Viele VPNs liefern eigenen DNS. Wichtig ist: konsistent, erwartbar und ohne ungewollte Fallbacks.

- **Problem:** Nur manche Programme nutzen den neuen DNS.  
  **Lösung:** Prüfe, ob einzelne Programme „sicheren DNS“ separat aktiv haben. Mischbetrieb reduzieren (Weg B).

## Nicht gelöst

- Verschlüsseltes DNS versteckt nicht deine IP-Adresse und nicht den restlichen Datenverkehr.
- Der DNS-Dienst selbst kann weiterhin sehen, welche Namen du auflöst (nur der Transportweg ist verschlüsselt).
- Tracking in Apps, Werbe-IDs oder Fingerprinting im Browser werden dadurch nicht automatisch gestoppt.
- Gegen ein kompromittiertes Gerät (Schadsoftware, Stalkerware, Geräteverwaltung mit Admin-Rechten) hilft DNS-Verschlüsselung allein nicht.
- Gegen Manipulation auf dem Gerät (z. B. eigene Zertifikate, Proxy, lokale Umleitungen) schützt das nicht zuverlässig.

## FAQ

**Ist DoH/DoT automatisch „privater“?**

Es verschlüsselt DNS-Anfragen, aber der Resolver sieht weiterhin Domains. Wichtig ist daher: vertrauenswürdiger Resolver + keine Leaks.

**Warum gibt es DNS-Probleme nach der Umstellung?**

Typisch sind Captive Portals, Firmen-VPNs oder Router-Filter. Dann hilft ein Fallback oder die Umstellung pro Netzwerk.

**Muss ich DNS zusätzlich zum VPN ändern?**

Nicht zwingend. Entscheidend ist, dass DNS nicht am VPN vorbei leakt. Ein Leak-Test und die richtigen Einstellungen sind wichtiger als „immer extra“.

## Quellen

- [Grundlegende Netzwerkeinstellungen und -aufgaben in Windows (Microsoft Support)](https://support.microsoft.com/de-de/windows/grundlegende-netzwerkeinstellungen-und-aufgaben-in-windows-f21a9bbc-c582-55cd-35e0-73431160a1b9)
- [Windows-Sicherheitsbuch: Netzwerksicherheit (Microsoft Learn)](https://learn.microsoft.com/de-de/windows/security/book/operating-system-security-network-security)
- [RFC 8484: DNS Queries over HTTPS (DoH)](https://www.rfc-editor.org/rfc/rfc8484)
- [RFC 7858: DNS over TLS (DoT)](https://www.rfc-editor.org/rfc/rfc7858)

## Weiter

- [DNS: Schnellstart](/dns/schnellstart/)
- [DoH vs. DoT: Unterschiede, Praxisfolgen](/dns/doh-dot/)
- [DNS-Probleme lösen](/dns/probleme/)
- [DNS-Leak-Test](/tests/dns-leak-test/)
- [DNS-Leaks verstehen](/netzwerk/leaks/dns/)
