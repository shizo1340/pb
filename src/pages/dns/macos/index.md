---
layout: "@/layouts/DocLayout.astro"
title: "DNS auf macOS ändern und prüfen: Schritt-für-Schritt"
url: "/dns/macos/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "DNS auf macOS ändern: eigene DNS-Server eintragen, Wirkung prüfen und typische Fehler beheben – mit Optionen für verschlüsseltes DNS und klaren Grenzen."
---
Auf macOS lädt eine Seite manchmal „irgendwie“ langsam. Oder das WLAN-Login (Captive Portal) hängt. Oder du willst nicht, dass jede Namensauflösung bei einem Standard-DNS landet.

Ziel: Du setzt DNS auf macOS sauber pro Verbindung, prüfst die Wirkung und kannst bei Problemen schnell zurück.

Sinnvoll, wenn du DNS bewusst setzen oder Netzwerkprobleme eingrenzen willst.  
Grenze: DNS ersetzt keine Anonymisierung und versteckt deine IP-Adresse nicht.

## Kurzfazit
- Wenn du nur 10 Minuten hast: aktiviere DoH/DoT und teste auf DNS‑Leaks.
- Wichtig: Der Resolver sieht Domains – wähle ihn bewusst und prüfe Probleme im Alltag.

## Ziel

- Weg A: DNS-Server pro Verbindung eintragen, testen, zurückbauen.  
- Weg B: Verschlüsseltes DNS per Konfigurationsprofil nutzen, wenn sinnvoll.  
- Weg C: Verschlüsseltes DNS gezielt prüfen und typische Doppelzustände vermeiden.

Stoppsignal: In Firmen-/Schulnetzen, mit Geräteverwaltung (Profile/MDM) oder mit VPN-Vorgaben ändere DNS nicht „auf gut Glück“. Das kann Zugriffe blockieren.  
Aufwand + Komfortkosten: 5–15 Minuten. Captive-Portale und interne Namen können danach haken.

## Schnellstart (10 Minuten)
1) Ausgangszustand sichern (damit du zurück kannst)  
1. Öffne **Systemeinstellungen** → **Netzwerk** und wähle die aktive Verbindung (WLAN oder Ethernet).
2. Öffne **Details/Infos** und notiere die aktuellen DNS-Einträge (oder Screenshot).
Bezeichnung kann abweichen – nutze die Suche nach: DNS.  
Das hilft dir beim Rückbau. Es kostet kurz Zeit und du musst sauber dokumentieren.

2) Eigene DNS-Server eintragen (pro Verbindung)  
3. Im DNS-Bereich trägst du die gewünschten Server als einzelne Einträge ein.
4. Speichere/Übernehme die Änderung.
Das gibt dir Kontrolle darüber, welcher Resolver deine Anfragen bekommt. Es kann aber interne Domains (Intranet, NAS) brechen.

3) Verbindung kurz neu verbinden (damit es greift)  
5. WLAN kurz aus/an oder Verbindung trennen und neu verbinden.
6. Öffne danach eine Seite, die du selten besuchst.
So greift die Änderung meist sofort. Nebenwirkung: Ein Captive-Portal kann erneut eine Anmeldung verlangen.

4) Wirksamkeit prüfen (ohne Ratearbeit)  
7. Nutze einen DNS-Test im Browser und prüfe, ob der erwartete DNS-Resolver angezeigt wird.
8. Wenn du ein VPN nutzt: prüfe zusätzlich, ob DNS über das VPN laufen soll.
Du siehst schnell, ob die Änderung wirklich aktiv ist. Nebenwirkung: Browser oder VPN können eigenes DNS nutzen und Ergebnisse verwirren.

5) Für weitere Verbindungen wiederholen (WLAN und Ethernet getrennt)  
9. Setze DNS in jeder Verbindung, die du nutzt.
10. Teste kurz in beiden Fällen (zuhause, Büro, Hotspot).
Das verhindert „geht nur manchmal“-Fehler. Nebenwirkung: Mehr Pflegeaufwand, wenn du häufig Netze wechselst.

## Wege

### Weg A

1) Öffne **Systemeinstellungen** → **Netzwerk** und wähle die aktive Verbindung.  
Du arbeitest so am richtigen Ort. Nebenwirkung: Wenn du die falsche Verbindung änderst, wirkt es scheinbar „nicht“.

2) Notiere die aktuellen DNS-Einträge inklusive Reihenfolge.  
Du kannst jederzeit zurück. Nebenwirkung: Ein fehlender Screenshot macht den Rückbau später unnötig schwer.

3) Trage die gewünschten DNS-Server ein und speichere.  
Du bestimmst den Resolver. Nebenwirkung: Interne Namen und manche Router-Funktionen können ausfallen.

4) Verbinde die Verbindung neu und teste zwei bis drei Domains.  
Du erkennst sofort, ob Auflösung und Internet stabil sind. Nebenwirkung: Captive-Portale können blockieren oder erneut erscheinen.

5) Wenn du interne Dienste nutzt (Drucker, NAS, Firmen-Intranet), teste diese direkt.  
Du merkst früh, ob Split-DNS nötig ist. Nebenwirkung: Ohne internen DNS wirken interne Namen „kaputt“, obwohl Internet geht.

6) Rückbau, wenn etwas hakt: DNS wieder auf automatisch oder auf die notierten Einträge setzen.  
Du kommst schnell zurück in einen stabilen Zustand. Nebenwirkung: Du verlierst kurzfristig den gewünschten Resolver.

<details><summary>Weg B (Fortgeschritten)</summary>

Verschlüsseltes DNS heißt: Deine DNS-Anfragen werden auf dem Weg zum Resolver verschlüsselt. Häufig sind DNS over HTTPS (DoH, DNS über HTTPS) oder DNS over TLS (DoT, DNS über TLS).

1) Prüfe zuerst, ob dein Mac verwaltet wird (Arbeitsgerät, Schulprofil, MDM).  
Das verhindert Konflikte mit Vorgaben. Nebenwirkung: In verwalteten Umgebungen kannst du DNS oft nicht frei setzen.

2) Nutze, wenn möglich, ein offizielles DNS-Konfigurationsprofil für DoH/DoT oder eine klare Admin-Vorgabe.  
Das schützt DNS im lokalen Netz vor Mitlesen. Nebenwirkung: Profile können mehr als DNS ändern, wenn sie schlecht gebaut sind.

3) Teste danach wie in Weg A: Webseiten, Captive-Portal, VPN, interne Namen.  
Du siehst, ob es im Alltag stabil ist. Nebenwirkung: Manche Hotspots blockieren verschlüsseltes DNS und wirken „offline“.

4) Halte den Rückweg bereit: Profil entfernen oder DNS wieder automatisch.  
Du kannst schnell wieder arbeiten. Nebenwirkung: Beim Rückbau sind kurzfristige Umschaltungen normal.
</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

1) Prüfe die aktiven Resolver systemseitig, nicht nur im Browser.  
- Öffne Terminal und nutze `scutil --dns`.  
Das zeigt dir, welche Resolver macOS wirklich nutzt. Nebenwirkung: Die Ausgabe ist lang und kann irritieren.

2) DNS-Cache leeren, wenn Änderungen „kleben“ oder Tests widersprüchlich sind.  
- Terminal: `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`  
Das reduziert Scheinfehler durch Caches. Nebenwirkung: Du brauchst Admin-Rechte und es kann kurz ruckeln.

3) Vermeide Doppelzustände: System-DNS + VPN-DNS + Browser-DoH gleichzeitig.  
Du bekommst nachvollziehbare Ergebnisse. Nebenwirkung: Du musst bewusst entscheiden, wer DNS steuert.

4) Teste in mehreren Netzen (Heim-WLAN, Hotspot, öffentliches WLAN).  
Du erkennst Captive-Portal- und Blocker-Probleme früh. Nebenwirkung: Strikte Vorgaben können in manchen Netzen komplett scheitern.
</details>

## So merkst du, dass es wirkt

- Achte darauf, ob ein DNS-Test den erwarteten Resolver zeigt, auch nach einem Neustart.  
- Achte darauf, ob der Wechsel zwischen WLAN und Ethernet das Ergebnis verändert.  
- Achte bei aktivem VPN darauf, ob DNS wie geplant über das VPN läuft.

<details><summary>Zusätzliche Checks</summary>

- Wenn nur manche Domains ausfallen: teste kurz mit „DNS automatisch“, um Netzprobleme auszuschließen.  
- Wenn interne Namen ausfallen: teste direkt eine bekannte IP-Adresse, um DNS vs. Routing zu trennen.  
- Wenn nur ein Browser abweicht: prüfe, ob der Browser eigenes „verschlüsseltes DNS“ aktiviert hat.
</details>

## Probleme & Lösungen

- **Problem:** Captive-Portal (Hotel, Bahn, Gäste-WLAN) erscheint nicht oder hängt.  
  **Lösung:** DNS kurz auf automatisch setzen, Verbindung neu verbinden, Portal-Login durchführen.

- **Problem:** Firmen-Intranet oder interne Gerätenamen funktionieren nicht mehr.  
  **Lösung:** Verwende den vorgesehenen internen DNS oder das VPN (Split-DNS) statt „hart“ extern zu setzen.

- **Problem:** Änderungen wirken nicht, obwohl du gespeichert hast.  
  **Lösung:** Prüfe, ob du wirklich die aktive Verbindung geändert hast, und verbinde sie neu.

- **Problem:** Im VPN sind Seiten langsam oder gehen nicht.  
  **Lösung:** Prüfe, ob das VPN DNS vorgibt und ob dein manuelles DNS das überschreibt; stelle die gewünschte Reihenfolge her.

- **Problem:** Nur ein Browser zeigt andere DNS-Ergebnisse.  
  **Lösung:** Deaktiviere testweise browser-eigenes DNS/DoH oder nutze einen zweiten Browser zum Gegencheck.

- **Problem:** Internet geht, aber einzelne Dienste „finden“ nichts.  
  **Lösung:** Prüfe, ob die DNS-Server erreichbar sind, und trage einen zweiten Server als Fallback ein.

## Nicht gelöst

- DNS-Änderungen verstecken nicht deine IP-Adresse vor Webseiten oder deinem Internetanbieter.  
- Der DNS-Betreiber kann typischerweise sehen, welche Domains du auflöst, auch wenn der Transport verschlüsselt ist.  
- Apps können DNS teilweise selbst machen oder feste IPs nutzen; System-DNS greift dann nur begrenzt.  
- In verwalteten Umgebungen (Arbeit/Schule) können Profile deine Einstellungen übersteuern oder verbieten.  
- Angreifermodelle: Wenn dein Gerät kompromittiert ist (Schadsoftware, Admin-Zugriff, Stalkerware oder Zwang), kann DNS umgangen oder manipuliert werden.

## FAQ

**Ist DoH/DoT automatisch „privater“?**

Es verschlüsselt DNS-Anfragen, aber der Resolver sieht weiterhin Domains. Wichtig ist daher: vertrauenswürdiger Resolver + keine Leaks.

**Warum gibt es DNS-Probleme nach der Umstellung?**

Typisch sind Captive Portals, Firmen-VPNs oder Router-Filter. Dann hilft ein Fallback oder die Umstellung pro Netzwerk.

**Muss ich DNS zusätzlich zum VPN ändern?**

Nicht zwingend. Entscheidend ist, dass DNS nicht am VPN vorbei leakt. Ein Leak-Test und die richtigen Einstellungen sind wichtiger als „immer extra“.

## Quellen

- [Apple Support: DNS-Einstellungen auf dem Mac ändern](https://support.apple.com/de-de/guide/mac-help/change-dns-settings-on-mac-mh14127/mac)  
- [Apple Developer: Device Management – DNSSettings (Konfigurationsprofil)](https://developer.apple.com/documentation/devicemanagement/dnssettings)  
- [RFC 8484: DNS over HTTPS (DoH)](https://www.rfc-editor.org/rfc/rfc8484)  
- [RFC 7858: DNS over TLS (DoT)](https://www.rfc-editor.org/rfc/rfc7858)

## Weiter

- [DNS: Schnellstart](/dns/schnellstart/)  
- [DoH und DoT verstehen](/dns/doh-dot/)  
- [DNS-Probleme lösen](/dns/probleme/)  
- [DNS-Leak-Test](/tests/dns-leak-test/)  
- [DNS-Abfluss im Netzwerk erkennen](/netzwerk/leaks/dns/)
