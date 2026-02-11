---
layout: "@/layouts/DocLayout.astro"
title: "DNS unter Linux sicher einstellen: Resolver prüfen"
url: "/dns/linux/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "DNS unter Linux sicher einstellen: DNS-Server prüfen, Resolver sauber konfigurieren, typische Probleme lösen, DNS-Lecks erkennen und Grenzen verstehen."
---
Du stellst unter Linux einen DNS-Server ein – und trotzdem tauchen „irgendwelche“ Server vom Router, vom VPN oder vom WLAN auf. Das nervt, und es ist auch ein Privatsphäre-Problem: DNS-Anfragen verraten oft, welche Dienste du nutzt.

Ziel ist nicht „perfekte Anonymität“, sondern Kontrolle. Du willst nachvollziehbar einstellen, welcher DNS genutzt wird. Du willst typische Fallen vermeiden, die deine Einstellung wieder aushebeln.

Sinnvoll, wenn du im Heimnetz oder in öffentlichen WLANs die DNS-Auflösung bewusst steuern willst.  
Grenze: DNS-Verschlüsselung schützt nicht vor dem DNS-Anbieter selbst – nur vor Mitlesen im Netz.

## Kurzfazit
- Wenn du nur 10 Minuten hast: aktiviere DoH/DoT und teste auf DNS‑Leaks.
- Wichtig: Der Resolver sieht Domains – wähle ihn bewusst und prüfe Probleme im Alltag.

## Ziel

Weg A: DNS-Server in der aktiven Verbindung fest eintragen und prüfen.  
Weg B: systemd-resolved gezielt konfigurieren (inkl. DNS über TLS, also verschlüsselte DNS-Abfragen, wenn passend).  
Weg C: pro Verbindung trennen und lokale Namensdienste in untrusted Netzen begrenzen.

Stoppsignal: Wenn du im Firmen-/Uni-Netz interne Namen brauchst oder ein VPN Split-DNS nutzt (verschiedene DNS je nach Ziel), überschreibe DNS nicht global – sonst gehen interne Dienste oft kaputt.  
Aufwand + Komfortkosten: 10–30 Minuten; möglich sind Probleme mit WLAN-Anmeldeseiten (Captive Portal), weniger „automatisch“, gelegentlich mehr Verzögerung.

## Schnellstart (15 Minuten)
1) **Feststellen, welcher DNS gerade wirklich genutzt wird**
1. Öffne ein Terminal.
2. Tippe: `resolvectl status`
3. Achte bei der aktiven Verbindung auf „DNS Server“/„DNS Servers“ (dort siehst du, wohin Anfragen gehen).
4. Optional: `ls -l /etc/resolv.conf` (zeigt oft, ob eine Datei verlinkt/verwaltet ist).

Hinweis: Je nach Distribution wird DNS von unterschiedlichen Diensten verwaltet – das ist normal.  
Nutzen: Du arbeitest nicht „ins Blaue“, sondern siehst den Ist-Zustand.  
Die Ausgabe kann lang sein; wichtig ist vor allem die aktive Verbindung.

2) **DNS-Server in der Netzwerkverbindung fest eintragen (Weg A-tauglich)**
5. Öffne die Netzwerkeinstellungen deiner Oberfläche.
6. Bearbeite die aktive WLAN-/LAN-Verbindung.
7. Trage DNS-Server manuell ein (IPv4 und – falls genutzt – auch IPv6).
8. Speichere, trenne die Verbindung kurz und verbinde neu.

Bezeichnung kann abweichen – nutze die Suche nach: DNS.  
Hinweis: In Netzen mit internen Namen (Firma/Uni/VPN) kann das Namensauflösen brechen.  
Nutzen: Du gibst vor, welche Resolver dein System standardmäßig nutzt.

3) **Wenn der Router-DNS trotzdem auftaucht: automatisch gelieferte DNS-Server ignorieren**
9. Öffne erneut die Einstellungen der aktiven Verbindung.
10. Suche eine Option wie „automatische DNS-Server ignorieren“ oder „DNS nur manuell“.
11. Aktiviere das Ignorieren der per DHCP gelieferten DNS-Server.
12. Verbinde neu.

Bezeichnung kann abweichen – nutze die Suche nach: DHCP, DNS.  
Achtung: Manche Netze liefern notwendige interne DNS-Informationen per DHCP.  
Nutzen: Deine manuelle DNS-Wahl wird nicht durch „zusätzliche“ Server verwässert.

4) **Prüfen, ob die Umstellung wirklich greift**
13. Tippe erneut: `resolvectl status`
14. Prüfe, ob unter der aktiven Verbindung die gewünschten DNS-Server stehen.
15. Ergänzend: nutze einen Test wie [DNS-Leak-Test](/tests/dns-leak-test/).

Hinweis: Manche Browser können eigene DNS-Wege nutzen (z. B. DNS über HTTPS) und damit Testergebnisse verfälschen.  
Nutzen: Du bekommst eine zweite, unabhängige Bestätigung.

5) **Optional: Browser-DNS und System-DNS entwirren**
16. Wenn du im Test unerwartete Server siehst, prüfe im Browser, ob „DNS über HTTPS“ aktiv ist.
17. Entscheide bewusst: System-DNS (Linux) steuert alles – oder der Browser steuert nur sich selbst.

Hinweis: Eine Mischung ist nicht „falsch“, aber schwerer zu prüfen.  
Nutzen: Du weißt, warum ein Test etwas anderes zeigt als die Systemeinstellung.

## Wege

### Weg A (sichtbar, alltagstauglich)

1. Öffne die Netzwerkeinstellungen und wähle die aktive Verbindung (WLAN oder Kabel).  
2. Stelle „DNS manuell“ ein und trage DNS-Server ein (auch für IPv6, falls du IPv6 nutzt).  
3. Wenn vorhanden: aktiviere das Ignorieren automatisch gelieferter DNS-Server.  
4. Trenne die Verbindung kurz und verbinde neu.  
5. Prüfe mit `resolvectl status`, welche DNS-Server pro Verbindung aktiv sind.  
6. Prüfe zusätzlich mit [DNS-Leak-Test](/tests/dns-leak-test/), ob außen etwas Unerwartetes auftaucht.  
7. Wenn Ergebnisse schwanken: teste einmal ohne VPN und einmal mit VPN.  
8. Wenn du ein VPN nutzt: prüfe dort zusätzlich [VPN-Leaks](/vpn/leaks/), weil DNS und VPN sich gegenseitig beeinflussen können.  
9. Wenn du häufig öffentliche WLANs nutzt: merke dir [DNS-Probleme](/dns/probleme/) als Troubleshooting-Seite.

<details><summary>Weg B (Fortgeschritten)</summary>

Wenn deine Distribution systemd-resolved nutzt, kannst du DNS zentraler und nachvollziehbarer konfigurieren.

- Prüfe, ob systemd-resolved aktiv ist (z. B. über `resolvectl status`; oft siehst du 127.0.0.53 als lokalen Stub-Resolver, also einen Zwischen-Resolver auf dem Gerät).  
- Lies in `resolved.conf`, welche Optionen es gibt (DNS-Server, Routing-Domains, DNS über TLS).  
- Wenn du DNS systemweit bevorzugen willst, ist `Domains=~.` ein gängiges Mittel, um die global gesetzten DNS-Server für alle Domains zu bevorzugen (statt „pro Verbindung“ abzuweichen).  
- Wenn du DNS über TLS nutzen willst: setze es zuerst auf „opportunistisch“, damit Verbindungen nicht komplett ausfallen, falls ein Server kein TLS anbietet.  
- Starte danach die Namensauflösung neu (je nach System: Dienst neu starten oder neu verbinden).  
- Prüfe erneut mit `resolvectl status` und [DNS-Leak-Test](/tests/dns-leak-test/).

Hinweis: DNS über TLS in systemd-resolved hat praktische Einschränkungen bei der Server-Authentifizierung. Das schützt eher gegen Mitlesen im Netz als gegen aktive Manipulation.  
</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.

- Trenne DNS bewusst pro Verbindung (z. B. „Heimnetz“ vs. „öffentlich“) und notiere dir, welche Verbindung welche DNS-Server nutzt.  
- Setze „automatische DNS-Server ignorieren“ nur dort, wo du es wirklich willst (öffentliches WLAN), nicht pauschal.  
- Begrenze lokale Namensdienste (LLMNR/mDNS) auf untrusted Netzen, wenn du sie dort nicht brauchst – das reduziert oft unnötige Anfragen im lokalen Netz.  
- Prüfe nach jeder Änderung: einmal `resolvectl status`, einmal [DNS-Leak-Test](/tests/dns-leak-test/).  
- Rechne mit Komfortbrüchen: Drucker- und Gerätefinden im lokalen Netz kann schlechter werden.

Achtung: Zu aggressive Einstellungen können WLAN-Anmeldeseiten und interne Firmendienste kaputt machen.  
</details>

## So merkst du, dass es wirkt

- Achte darauf, ob `resolvectl status` bei der aktiven Verbindung nur noch die DNS-Server zeigt, die du erwartet hast.  
- Achte darauf, ob der [DNS-Leak-Test](/tests/dns-leak-test/) konsistente Ergebnisse liefert (ohne/mit VPN getrennt testen).  
- Wenn dir plötzlich interne Namen nicht mehr auflösen: probiere testweise wieder „automatische DNS“ in genau dieser Verbindung.

<details><summary>Mehr Prüfungen & Hinweise</summary>

- Wenn `/etc/resolv.conf` nach jedem Neustart anders aussieht, wird sie sehr wahrscheinlich von einem Dienst verwaltet. Das ist kein Fehler – aber dann ist „Datei direkt bearbeiten“ selten dauerhaft.  
- Wenn Tests unterschiedliche Resolver zeigen, prüfe zusätzlich, ob dein Browser eigenes „DNS über HTTPS“ nutzt: [DoH/DoT: DNS verschlüsseln](/dns/doh-dot/).  
- Wenn du DNS primär für Tracking-Reduktion anfasst: DNS ist nur ein Teil. Ergänzend ist oft [DNS-Schnellstart](/dns/schnellstart/) sinnvoll.  
</details>

## Probleme & Lösungen

- **Problem:** Nach dem Neustart ist wieder der Router-DNS aktiv. / **Lösung:** Stelle in der Verbindung ein, dass automatisch gelieferte DNS-Server ignoriert werden, und speichere die Verbindung dauerhaft.
- **Problem:** `resolvectl` zeigt andere DNS-Server als ein Web-Test. / **Lösung:** Prüfe, ob der Browser eigenes DNS nutzt (DNS über HTTPS) und entscheide dich für eine klare Strategie.
- **Problem:** Im Firmen-/Uni-Netz funktionieren interne Dienste nicht mehr. / **Lösung:** Entferne manuell gesetzte DNS-Server in genau dieser Verbindung oder nutze die DNS-Vorgaben des VPN/Netzes.
- **Problem:** WLAN-Anmeldeseiten laden nicht oder Login hängt. / **Lösung:** Stelle testweise DNS wieder auf automatisch, bis das Portal erledigt ist; aktiviere danach deine Einstellungen erneut.
- **Problem:** Nur IPv4 wirkt umgestellt, IPv6 „leakt“ weiter. / **Lösung:** Setze DNS auch für IPv6 oder deaktiviere IPv6 nur, wenn du genau weißt, was du tust.
- **Problem:** Manuelles Bearbeiten von `/etc/resolv.conf` hält nicht. / **Lösung:** Konfiguriere den zuständigen Netzwerk-/Resolver-Dienst statt der Datei direkt.
- **Problem:** DNS über TLS führt zu Ausfällen („Name kann nicht aufgelöst werden“). / **Lösung:** Nutze „opportunistisch“ statt „erzwingen“, oder wähle DNS-Server, die DNS über TLS zuverlässig anbieten.

## Nicht gelöst

- DNS-Einstellungen verhindern nicht, dass der DNS-Anbieter deine Anfragen sieht und auswerten könnte.  
- DNS-Verschlüsselung schützt nicht automatisch vor Tracking im Web (Cookies, Fingerabdruck, Anmeldekennungen).  
- Interne Namensauflösung im Firmennetz kann DNS-Vorgaben erfordern, die du nicht ersetzen kannst.  
- Wenn dein Gerät kompromittiert ist (Schadsoftware, Stalkerware, Administrator-Zugriff), kann jede DNS-Einstellung umgangen oder mitgelesen werden.  
- Wenn ein Angreifer deinen Datenverkehr aktiv manipuliert, hilft „Verschlüsselung ohne saubere Authentifizierung“ nur begrenzt.  
- Browser können eigene DNS-Wege nutzen und damit System-DNS absichtlich umgehen.

## FAQ

**Ist DoH/DoT automatisch „privater“?**

Es verschlüsselt DNS-Anfragen, aber der Resolver sieht weiterhin Domains. Wichtig ist daher: vertrauenswürdiger Resolver + keine Leaks.

**Warum gibt es DNS-Probleme nach der Umstellung?**

Typisch sind Captive Portals, Firmen-VPNs oder Router-Filter. Dann hilft ein Fallback oder die Umstellung pro Netzwerk.

**Muss ich DNS zusätzlich zum VPN ändern?**

Nicht zwingend. Entscheidend ist, dass DNS nicht am VPN vorbei leakt. Ein Leak-Test und die richtigen Einstellungen sind wichtiger als „immer extra“.

## Quellen

- [systemd-resolved: Konfiguration resolved.conf (DNSOverTLS, DNS, Domains)](https://www.freedesktop.org/software/systemd/man/resolved.conf.html)  
- [systemd-resolved.service: Beschreibung und Stub-Resolver](https://www.freedesktop.org/software/systemd/man/systemd-resolved.service.html)  
- [resolvectl(1): Abfragen und Status prüfen](https://man7.org/linux/man-pages/man1/resolvectl.1.html)  
- [NetworkManager: nm-settings(5) (u. a. ipv4.ignore-auto-dns)](https://man.archlinux.org/man/nm-settings.5)  
- [RFC 7858: DNS über TLS](https://www.rfc-editor.org/rfc/rfc7858.html)  
- [RFC 8484: DNS über HTTPS](https://www.rfc-editor.org/rfc/rfc8484.html)

## Weiter

- [DNS-Schnellstart](/dns/schnellstart/)  
- [DoH/DoT: DNS verschlüsseln](/dns/doh-dot/)  
- [DNS-Probleme lösen](/dns/probleme/)  
- [DNS-Leaks verstehen](/netzwerk/leaks/dns/)  
- [VPN-Leaks](/vpn/leaks/)  
