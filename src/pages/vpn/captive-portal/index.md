---
layout: "@/layouts/DocLayout.astro"
title: "VPN & Captive Portal: WLAN-Login sicher lösen"
url: "/vpn/captive-portal/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "VPN & Captive Portal: WLAN-Login lösen, ohne dich zu verrennen – Schritte, Stolpersteine, Leak-Checks und Grenzen je Gerät."
---
Ein Captive Portal ist die Anmeldeseite in einem WLAN (Hotel, Bahn, Café).  
Ohne diese Anmeldung wirkt es so, als wäre „das Internet kaputt“ – oft besonders mit aktivem VPN.

Ziel dieser Seite: Du kommst durch die WLAN-Anmeldung, ohne dich zu verrennen.  
Danach nutzt du dein VPN wieder und prüfst kurz, ob wirklich alles durch den Tunnel geht.

Sinnvoll, wenn du unterwegs WLAN nutzt und regelmäßig eine Login-Seite siehst.  
Wichtigste Grenze: Während der Portal-Anmeldung bist du meist kurz ohne VPN in diesem WLAN.

## Kurzfazit
- Wenn du nur 10 Minuten hast: VPN korrekt einrichten, Leaks testen und Split‑Tunneling vermeiden.
- Wichtig: VPN ist kein Anti‑Tracking‑Allheilmittel – nutze es für die passenden Risiken.

## Ziel

Weg A: VPN kurz pausieren, Portal anmelden, VPN wieder aktivieren.  
Weg B: Häufige Stolpersteine (MAC-Zufall, privates DNS, Split-Tunneling) gezielt entschärfen.  
Weg C: Lecks (DNS/IP/IPv6/WebRTC) sauber prüfen und Ursachen eingrenzen.

Stoppsignal: Wenn das WLAN nach erfolgreichem Login VPN-Verbindungen blockiert, ist das kein Bedienfehler.  
Dann nutze dieses WLAN nicht für sensible Zugänge (Banking, Arbeit) – nimm mobile Daten oder ein anderes Netz.

Aufwand + Komfortkosten: 5–15 Minuten, oft kurz ohne VPN im WLAN (nur für die Anmeldung).

## Schnellstart (7 Minuten)
1) **Erkennen, ob es wirklich ein Captive Portal ist**
1. Verbinde dich mit dem WLAN.
2. Öffne einen Browser und rufe eine normale Webseite auf.
3. Wenn eine Login-/Bestätigungsseite erscheint, ist es sehr wahrscheinlich ein Captive Portal.
4. Wenn nur „keine Verbindung“ kommt: fahre mit Schritt 2 fort.
Hinweis: Manche Portale erscheinen nur nach ein paar Sekunden oder nach erneutem Verbinden.  
Nutzen: Du vermeidest unnötiges Suchen an der falschen Stelle (VPN vs. WLAN-Portal).

2) **VPN für die Anmeldung kurz pausieren**
5. Pausiere die VPN-Verbindung in deiner VPN-App.
6. Lass das WLAN verbunden.
7. Öffne danach erneut den Browser.
8. Melde dich am Portal an oder akzeptiere die Bedingungen.
Hinweis: In dieser Phase sieht der WLAN-Betreiber deine echte IP-Adresse und kann DNS-Anfragen im WLAN sehen.  
Nutzen: Das Portal kann dich überhaupt erst „freischalten“, damit danach auch VPN-Verkehr durchkommt.

3) **Wenn die Anmeldeseite nicht aufgeht: Portal erzwingen**
9. Trenne die WLAN-Verbindung kurz und verbinde dich neu.
10. Öffne danach den Browser und rufe eine einfache Seite auf.
11. Alternativ: Schalte kurz den Flugmodus ein/aus (dadurch wird WLAN neu aufgebaut).
Bezeichnung kann abweichen – nutze die Suche nach: WLAN, Flugmodus, Anmeldeseite.  
Hinweis: Manche Netze blockieren HTTPS vor der Anmeldung, deshalb wirkt „alles tot“.  
Nutzen: Du bekommst die Portal-Seite sichtbar, statt im Hintergrund festzuhängen.

4) **Nach dem Login: VPN wieder aktivieren und Verbindung „frisch“ machen**
12. Aktiviere das VPN wieder.
13. Warte, bis „verbunden“ angezeigt wird.
14. Öffne die betroffene App oder Webseite neu (Browser-Tab neu laden).
15. Falls es noch hängt: WLAN kurz trennen/neu verbinden, dann VPN erneut verbinden.
Hinweis: Einige Portale „merken“ sich Geräte nur für eine begrenzte Zeit.  
Nutzen: Du landest wieder im Normalzustand (VPN schützt den Verkehr ab dann zuverlässig).

5) **Kurz prüfen, ob es Lecks gibt (DNS/IP/IPv6/WebRTC)**
16. Prüfe deine sichtbare IP mit [IP-Leak-Test](/tests/ip-leak-test/).
17. Prüfe DNS mit [DNS-Leak-Test](/tests/dns-leak-test/).
18. Wenn du Browser-Videotelefonie nutzt: prüfe zusätzlich [WebRTC-Test](/tests/webrtc-test/).
Hinweis: Ergebnisse können je nach Gerät/Version und VPN-Einstellung variieren.  
Nutzen: Du merkst schnell, ob wirklich alles durch das VPN läuft oder ob etwas am Tunnel vorbei geht.

## Wege

### Weg A (alltagstauglich)

1. Verbinde dich mit dem WLAN und warte kurz, ob automatisch eine Anmeldeseite auftaucht.  
2. Wenn nichts erscheint: öffne einen Browser und rufe eine beliebige Webseite auf.  
3. Pausiere das VPN, wenn die Seite nicht lädt oder du im Kreis weitergeleitet wirst.  
4. Melde dich am Captive Portal an (Passwort, Ticketnummer, E-Mail oder „Akzeptieren“).  
5. Öffne danach eine normale Webseite, um zu sehen, ob „frei“ geschaltet wurde.  
6. Aktiviere das VPN wieder und warte auf „verbunden“.  
7. Starte Apps, die vorher Probleme hatten, neu (Banking, Streaming, Mail).  
8. Prüfe kurz die Lecks über [IP-Leak-Test](/tests/ip-leak-test/) und [DNS-Leak-Test](/tests/dns-leak-test/).  
9. Wenn du unterwegs oft neu ins Portal musst: rechne mit Zeitlimits des Anbieters (z. B. nach ein paar Stunden).  
10. Wenn VPN grundsätzlich nicht funktioniert: nutze dieses WLAN nur für Unkritisches oder wechsle das Netz.

<details><summary>Weg B (Fortgeschritten)</summary>

- **Wenn du ständig neu ins Portal musst: prüfe die „zufällige Hardwareadresse“ pro WLAN.**  
  Manche Portale koppeln den Zugang an die Geräteadresse (MAC). Wenn sie sich ständig ändert, wirkt es wie „vergessen“.  
  Bezeichnung kann abweichen – nutze die Suche nach: private Adresse, zufällige MAC, Hardwareadresse.  
  Hinweis: Das verbessert die Portal-Stabilität, reduziert aber deine Privatsphäre in genau diesem WLAN.  
  Nutzen: Weniger erneute Logins.

- **Wenn das Portal gar nicht erscheint: prüfe, ob du verschlüsseltes DNS erzwingst.**  
  „Privates DNS“ (DoT) oder DNS über HTTPS kann Captive Portals stören, weil Umleitungen nicht sauber greifen.  
  Bezeichnung kann abweichen – nutze die Suche nach: privates DNS, DNS over HTTPS, DoT.  
  Hinweis: Für die Anmeldung kann ein kurzes Deaktivieren im WLAN nötig sein.  
  Nutzen: Portal-Seite wird zuverlässig geladen.

- **Wenn du Split-Tunneling nutzt: prüfe die Ausnahmen.**  
  Split-Tunneling (geteilte Tunnelung) heißt: Manche Apps/Adressen gehen am VPN vorbei.  
  Hinweis: Für Captive Portals kann das helfen, es kann aber auch Lecks erzeugen, wenn es „zu breit“ eingestellt ist.  
  Nutzen: Du vermeidest, dass Banking/Browser unbeabsichtigt ohne VPN laufen.

- **Wenn Apps nach dem Login „offline“ bleiben: Sitzung erneuern.**  
  Trenne WLAN kurz und verbinde neu, dann VPN verbinden.  
  Hinweis: Einige Apps halten alte Verbindungen fest und merken den Wechsel (Portal → Internet) nicht sofort.  
  Nutzen: Weniger Rätselraten, schneller wieder funktionierende Apps.
</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.
- Prüfe nach dem Wiederverbinden gezielt: [IP-Leak-Test](/tests/ip-leak-test/) und [DNS-Leak-Test](/tests/dns-leak-test/). Achte darauf, ob sich etwas ohne VPN zeigt.
- Wenn IPv6 wichtig ist: prüfe zusätzlich, ob dein VPN IPv6 wirklich mitnimmt (Hinweise dazu findest du unter [Netzwerk-Leaks: IPv6](/netzwerk/leaks/ipv6/)).  
  Achtung: Ein Teil der Verbindungen kann sonst am VPN vorbei laufen.
- Wenn du im Browser telefonierst: nutze [WebRTC-Test](/tests/webrtc-test/) und prüfe, ob lokale oder echte IPs sichtbar werden.  
  Achtung: Manche Browser-Einstellungen/Erweiterungen verändern das Verhalten.
- Wenn du Split-Tunneling nutzt: schalte es testweise aus und prüfe, ob das Captive Portal dann stabiler ist.  
  Achtung: Das kann den Komfort senken (z. B. lokale Geräte im WLAN).
- Wenn das WLAN VPN konsequent blockt: dokumentiere das Netz als „ohne VPN ungeeignet“ und wechsle die Verbindung.  
  Achtung: Wiederholtes Probieren kann Akku ziehen und bringt oft nichts.
</details>

## So merkst du, dass es wirkt

- Achte darauf, ob nach der Portal-Anmeldung normale Webseiten zuverlässig laden, auch nach 1–2 Minuten.  
- Achte darauf, ob dein VPN „verbunden“ bleibt, während du Apps neu öffnest.  
- Wenn dir bei [IP-Leak-Test](/tests/ip-leak-test/) deine normale Verbindung angezeigt wird, war das VPN nicht aktiv oder wird umgangen.

<details><summary>Mehr Prüfungen & Hinweise</summary>

- Wenn du unsicher bist, ob DNS geschützt ist: nutze zusätzlich den [DNS-Leak-Test](/tests/dns-leak-test/).  
- Wenn du IPv6 nutzt (oder dein Gerät es automatisch verwendet): prüfe [Netzwerk-Leaks: IPv6](/netzwerk/leaks/ipv6/).  
- Wenn du im Browser Audio/Video nutzt: prüfe [WebRTC-Test](/tests/webrtc-test/). WebRTC ist eine Technik für Echtzeit-Kommunikation im Browser.
- Ein Captive Portal kann ein falsches Sicherheitsgefühl erzeugen: „eingeloggt“ heißt nur „Internet frei“, nicht „WLAN ist sicher“.
</details>

## Probleme & Lösungen

- **Problem:** Die Anmeldeseite erscheint nicht, obwohl das WLAN verbunden ist.  
  **Lösung:** VPN pausieren, WLAN kurz trennen/neu verbinden, dann im Browser neu laden.  
  (häufiger Grund: HTTPS wird vor dem Login blockiert)

- **Problem:** Nach dem Login funktioniert ohne VPN alles, mit VPN nichts.  
  **Lösung:** Das WLAN blockiert vermutlich VPN-Protokolle. Nutze dieses WLAN nicht für sensible Dinge oder wechsle die Verbindung.

- **Problem:** Du musst dich ständig neu anmelden.  
  **Lösung:** Prüfe, ob dein Gerät pro Verbindung eine neue Hardwareadresse nutzt und das Portal daran hängt. Stelle es nur für dieses WLAN stabil ein.  
  (häufiger Grund: Portal koppelt Freischaltung an die Geräteadresse)

- **Problem:** Banking oder Streaming sperrt nach dem Wechsel (Portal → VPN) oder fordert ständig neue Bestätigungen.  
  **Lösung:** App komplett schließen und neu öffnen, notfalls Verbindung neu aufbauen (WLAN neu + VPN neu).  
  (häufiger Grund: Sicherheitsprüfungen reagieren auf IP-Wechsel)

- **Problem:** Akkuverbrauch steigt stark, sobald du im Portal-WLAN bist.  
  **Lösung:** Vermeide Dauer-Verbindungsversuche: VPN erst nach erfolgreichem Portal-Login aktivieren, bei Blockade das Netz wechseln.  
  (häufiger Grund: Wiederholte Neuverbindungen/Timeouts)

- **Problem:** Du glaubst, das VPN schützt „schon irgendwie“, während du dich am Portal anmeldest.  
  **Lösung:** Für den Login ist das VPN oft aus oder wirkungslos. Melde dich an, aktiviere danach VPN und prüfe Lecks kurz.

## Nicht gelöst

- Ein Captive Portal kann deine Nutzung im WLAN sichtbar machen, solange du für den Login ohne VPN bist (z. B. IP/DNS in diesem Moment).  
- Das Portal kann Geräte in diesem WLAN wiedererkennen (z. B. über Geräteadresse), wenn du es nicht aktiv verhinderst.  
- Ein VPN verhindert nicht, dass Apps dich über Konten/Anmeldungen wiedererkennen (z. B. „eingeloggt bleiben“).  
- Wenn das WLAN VPN aktiv blockiert, kannst du das lokal oft nicht „wegkonfigurieren“.  
- Angreifermodell: Wenn dein Gerät kompromittiert ist (Schadsoftware, Admin-Zugriff, Stalkerware), hilft auch ein VPN nicht zuverlässig.

## FAQ

**Brauche ich wirklich ein VPN?**

Nicht immer. VPNs helfen v. a. gegen unsichere WLANs und zur Trennung von Netzwerken, sind aber kein Tracking-Allheilmittel.

**Warum leakt IP/DNS trotz VPN?**

Oft liegt es an Split-Tunneling, IPv6/WebRTC oder falschen DNS-Einstellungen. Prüfe Leaks und setze die passenden Fixes.

**Was ist mit „No-Logs“?**

Behauptungen sind nicht beweisbar. Achte auf transparente Technik, Audits, klare Rechtslage und nachvollziehbare Reports.

## Quellen

- [Apple Support: Captive-WLAN-Netzwerke auf dem iPhone oder iPad nutzen](https://support.apple.com/de-de/102554)
- [Microsoft Learn: NCSI-Übersicht (Netzwerkverbindungs-Statusanzeige)](https://learn.microsoft.com/de-de/windows-server/networking/ncsi/ncsi-overview)
- [IETF RFC 8952: Captive Portal Architecture](https://datatracker.ietf.org/doc/html/rfc8952)
- [IETF RFC 8910: Captive-Portal Identification in DHCP and Router Advertisements](https://datatracker.ietf.org/doc/html/rfc8910)

## Weiter

- [VPN: Schnellstart](/vpn/schnellstart/)
- [VPN-Lecks](/vpn/leaks/)
- [Öffentliches WLAN](/netzwerk/public-wlan/)
- [DNS over HTTPS/DoT](/dns/doh-dot/)
- [IP-Leak-Test](/tests/ip-leak-test/)
