---
layout: "@/layouts/DocLayout.astro"
title: "DNS auf iOS einstellen – WLAN manuell oder verschlüsselt"
url: "/dns/ios/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "DNS auf iOS ändern: pro WLAN manuell oder als verschlüsselte DNS per Profil. Mit Schritt-für-Schritt, Prüfpunkten, Problemen, Grenzen und Rückweg."
---
Seiten laden zäh. Oder manche Domains „spinnen“ nur in einem WLAN.  
Oft liegt es am DNS, also am Namensdienst deines Netzwerks.

Du stellst DNS auf iOS so ein, dass es stabil bleibt.  
Und du kannst DNS-Abfragen bei Bedarf verschlüsseln.

Sinnvoll, wenn du oft in fremden WLANs bist oder DNS-Filter nutzt.  
Grenze: Ohne Zusatzmaßnahmen gilt DNS auf iOS meist nur pro WLAN.

## Kurzfazit
- Wenn du nur 10 Minuten hast: aktiviere DoH/DoT und teste auf DNS‑Leaks.
- Wichtig: Der Resolver sieht Domains – wähle ihn bewusst und prüfe Probleme im Alltag.

## Ziel

- Weg A: DNS pro WLAN manuell setzen. Das ist schnell und alltagstauglich.  
- Weg B: DNS verschlüsseln per Konfigurationsprofil. Das schützt besser im Netzwerk, braucht aber Vertrauen.  
- Weg C: Eigener DNS-Dienst und Profile gezielt steuern. Das ist für Profi-Ansprüche.

Stoppsignal: Wenn WLAN-Anmeldung, Firmenzugang oder Banking/Streaming hakt.  
Dann stell auf „Automatisch“ zurück oder entferne das Profil.

Aufwand + Komfortkosten: 5–15 Minuten.  
Möglich sind Ausfälle in einzelnen Netzen und mehr Abhängigkeit vom DNS-Anbieter.

## Schnellstart (10 Minuten)
1) **Ausgangszustand sichern**
1. Öffne **Einstellungen** → **WLAN**.
2. Tippe beim verbundenen Netz auf das **ⓘ**.
3. Öffne **DNS konfigurieren** und mach einen Screenshot.
So kommst du sauber zurück, wenn später etwas hakt.  
Nachteil: Du musst den Schritt pro betroffenem WLAN wiederholen.

2) **DNS pro WLAN manuell setzen**
4. **Einstellungen** → **WLAN** → **ⓘ** am verbundenen Netz.
5. **DNS konfigurieren** → **Manuell**.
6. Entferne Server, die du nicht nutzen willst.
7. Füge die DNS-Server deines gewünschten Dienstes hinzu.
8. Tippe auf **Sichern**.
Bezeichnung kann abweichen – nutze die Suche nach: **WLAN**.  
Das wirkt nur in genau diesem WLAN, nicht automatisch überall.  
Wenn die Server falsch sind, wirkt das WLAN „kaputt“, obwohl es verbunden ist.

3) **Kurz testen, ob es stabil ist**
9. Lade 2–3 bekannte Webseiten neu.
10. Starte eine App, die im WLAN oft Probleme macht (Mail, Messenger).
Wenn schon hier Fehler auftauchen, ist es meist DNS oder das Netz selbst.  
Nachteil: Captive-Portale (Hotel/Flughafen) können nach DNS-Änderungen zicken.

4) **Verschlüsselte DNS nur per Profil installieren**
11. Installiere nur Profile, deren Herausgeber du nachvollziehen kannst.
12. Öffne die Profilbeschreibung vor der Installation.
13. Prüfe, ob das Profil wirklich nur Netzwerk/DNS regelt.
Das kann DNS-Abfragen im WLAN besser vor Mitlesen schützen.  
Nachteil: Ein Profil kann mehr als DNS setzen und damit mehr verändern als erwartet.

5) **Rückweg kennen**
14. Im WLAN: **DNS konfigurieren** → **Automatisch**.
15. Bei Profilen: **Einstellungen** → **Allgemein** → **VPN und Geräteverwaltung** → Profil entfernen.
So bist du schnell wieder im erwartbaren Standardzustand.  
Nachteil: Beim Entfernen können weitere, daran geknüpfte Einstellungen verschwinden.

## Wege

### Weg A

1. Wähle einen DNS-Dienst und notiere die Serveradressen.  
2. Öffne **Einstellungen** → **WLAN** und tippe auf **ⓘ** beim verbundenen Netz.  
3. Öffne **DNS konfigurieren** und stelle auf **Manuell**.  
4. Entferne DNS-Server, die du nicht nutzen willst.  
5. Füge die gewünschten Server hinzu und speichere.  
6. Lade eine Seite neu und teste 2–3 Apps im WLAN.  
7. Wiederhole das für WLANs, die du regelmäßig nutzt (Zuhause, Arbeit, Familie).  

Das gibt dir Kontrolle pro WLAN und ist schnell rückgängig zu machen.  
Nachteil: Du musst es für jedes WLAN einzeln pflegen.

<details><summary>Weg B (Fortgeschritten)</summary>

Verschlüsselte DNS heißt: DNS-Abfragen laufen über eine verschlüsselte Verbindung.  
Üblich sind DoH (DNS über HTTPS) oder DoT (DNS über TLS).

1. Wähle einen DNS-Dienst, der DoH oder DoT anbietet.  
2. Nutze nur offizielle, nachvollziehbare Profilquellen (Supportseite, Dokumentation).  
3. Lies vor der Installation, welche Payloads das Profil setzt.  
4. Prüfe danach unter **Einstellungen** → **Allgemein** → **VPN und Geräteverwaltung**, was aktiv ist.  
5. Teste WLAN-Anmeldung, Streaming und Firmenzugang gezielt.  
6. Bei Problemen: Profil entfernen und erneut testen.

Das erschwert Mitlesen und Manipulation der DNS-Abfragen im Netzwerk.  
Nachteil: Du verlagerst Vertrauen vom WLAN auf den DNS-Anbieter und den Profilherausgeber.
</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.

1. Betreibe einen eigenen DNS-Dienst (z. B. im Heimnetz) oder miete einen verwalteten DNS.  
2. Entscheide, ob du nur Auflösung willst oder auch Filter und Protokolle.  
3. Nutze DoH/DoT zwischen iOS und deinem DNS, wenn du dem Netz nicht traust.  
4. Setze Profile gezielt, zum Beispiel nur für bestimmte Apps oder Zwecke.  
5. Plane den Notfall: Standard-DNS als Fallback, falls dein DNS ausfällt.  
6. Dokumentiere, welche Geräte welche Profile haben.

Das gibt maximale Kontrolle, auch über Filter und Regeln.  
Nachteil: Dein DNS wird zum Single-Point-of-Failure. Fällt er aus, wirkt es wie „Internet kaputt“.
</details>

## So merkst du, dass es wirkt

- Achte darauf, ob Webseiten im WLAN stabil laden, ohne „WLAN aus/an“.  
- Prüfe in fremden WLANs, ob die Anmeldeseite (Captive-Portal) weiter funktioniert.  
- Nutze einen [DNS-Leak-Test](/tests/dns-leak-test/) und vergleiche vor/nach der Änderung.

<details><summary>Mehr Checks</summary>

- Starte das iPhone/iPad neu und teste erneut. Manche Fehler zeigen sich erst dann.  
- Prüfe bei Profilen unter **VPN und Geräteverwaltung**, ob etwas installiert ist, das du nicht erwartest.  
- Teste „Zuhause vs. Arbeit“ getrennt. Weg A gilt immer nur für das jeweilige WLAN.
</details>

## Probleme & Lösungen

- **Problem:** WLAN verbunden, aber „kein Internet“. / **Lösung:** In diesem WLAN **DNS konfigurieren** auf **Automatisch** stellen und neu verbinden.  
- **Problem:** Hotel/Flughafen-WLAN zeigt keine Anmeldeseite. / **Lösung:** Erst anmelden, dann DNS ändern. Notfalls kurz auf **Automatisch** zurück.  
- **Problem:** Manche Apps gehen, andere nicht. / **Lösung:** Profil-Wirkbereich prüfen oder testweise Profil entfernen und erneut vergleichen.  
- **Problem:** DNS springt zurück oder lässt sich nicht ändern. / **Lösung:** Unter **VPN und Geräteverwaltung** nach Profil/MDM schauen und Unbekanntes entfernen.  
- **Problem:** Über Mobilfunk ist alles „wie vorher“. / **Lösung:** Erwartbar. Weg A wirkt primär im WLAN. Für Mobilfunk brauchst du Profil oder VPN-Lösung.  
- **Problem:** Nach iOS-Update ist das Verhalten anders. / **Lösung:** WLAN erneut öffnen (ⓘ → **DNS konfigurieren**) und Einstellung prüfen.

## Nicht gelöst

- DNS verhindert kein Tracking auf der Zielseite (Cookies, Fingerabdruck, Login).  
- DNS versteckt deine IP-Adresse nicht. Dafür brauchst du andere Maßnahmen.  
- Apps können DNS umgehen (eigene Auflösung, fest eingebaute Dienste). Dann greift deine Einstellung nicht zuverlässig.  
- Wenn dein Gerät kompromittiert ist (Schadsoftware, Stalkerware, Admin/MDM-Zugriff), kann DNS übersteuert oder umgangen werden.  
- Unter Zwang (z. B. Kontrolle durch Dritte) hilft DNS nicht gegen direkte Einsicht ins Gerät oder erzwungene Änderungen.  
- Verschlüsselte DNS schützt nur den Transport der Anfrage. Der DNS-Dienst sieht weiterhin, was er auflöst.

## FAQ

**Ist DoH/DoT automatisch „privater“?**

Es verschlüsselt DNS-Anfragen, aber der Resolver sieht weiterhin Domains. Wichtig ist daher: vertrauenswürdiger Resolver + keine Leaks.

**Warum gibt es DNS-Probleme nach der Umstellung?**

Typisch sind Captive Portals, Firmen-VPNs oder Router-Filter. Dann hilft ein Fallback oder die Umstellung pro Netzwerk.

**Muss ich DNS zusätzlich zum VPN ändern?**

Nicht zwingend. Entscheidend ist, dass DNS nicht am VPN vorbei leakt. Ein Leak-Test und die richtigen Einstellungen sind wichtiger als „immer extra“.

## Quellen

- [Konfigurationsprofile auf dem iPhone installieren oder entfernen (Apple Support)](https://support.apple.com/de-de/guide/iphone/iph6c493b19/ios)  
- [Konfigurationsprofile überprüfen und löschen (Apple Persönliche Sicherheit)](https://support.apple.com/de-de/guide/personal-safety/ips327569a75/web)  
- [Einstellungen der Geräteverwaltungs-Payload „DNS-Einstellungen“ (Apple Deployment)](https://support.apple.com/de-de/guide/deployment/dep86469ba99/web)  
- [Inhalte für Apple-Geräte filtern (Apple Deployment)](https://support.apple.com/de-de/guide/deployment/dep1129ff8d2/web)  
- [RFC 8484: DNS Queries over HTTPS (DoH)](https://www.rfc-editor.org/rfc/rfc8484.html)  
- [RFC 7858: Specification for DNS over TLS (DoT)](https://www.rfc-editor.org/rfc/rfc7858.html)

## Weiter

- [DNS: Schnellstart](/dns/schnellstart/)  
- [DoH und DoT verstehen](/dns/doh-dot/)  
- [DNS-Probleme lösen](/dns/probleme/)  
- [DNS-Leaks erkennen](/netzwerk/leaks/dns/)  
- [DNS-Leak-Test](/tests/dns-leak-test/)
