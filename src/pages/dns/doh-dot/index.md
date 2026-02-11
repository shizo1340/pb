---
layout: "@/layouts/DocLayout.astro"
title: "DNS über HTTPS und TLS aktivieren: sicherer DoH/DoT-Guide"
url: "/dns/doh-dot/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Schritt-für-Schritt: DNS über HTTPS (DoH) oder DNS über TLS (DoT) aktivieren, testen und typische WLAN-Probleme vermeiden – inkl. Grenzen und Checks."
---
Wenn du im Netz surfst, sieht dein DNS-Anbieter oft als Erstes, welche Namen du aufrufst (z. B. `beispiel.de`). Das ist nervig, weil daraus Profile entstehen können. Es ist auch riskant, weil es in fremden Netzen leichter mitzulesen ist.

DNS über HTTPS (DoH) und DNS über TLS (DoT) verschlüsseln DNS-Abfragen auf dem Weg zu deinem DNS-Auflöser (auch „Resolver“ genannt). Der DNS-Auflöser übersetzt Domainnamen in IP-Adressen.

Ziel: Du nutzt verschlüsseltes DNS dort, wo es wirklich greift, und erkennst Nebenwirkungen sofort.

Sinnvoll, wenn du oft in fremden Netzen bist oder DNS weniger offenlegen willst.  
Grenze: DoH/DoT versteckt nicht, welche Server-IP du am Ende kontaktierst.

## Kurzfazit
- Wenn du nur 10 Minuten hast: aktiviere DoH/DoT und teste auf DNS‑Leaks.
- Wichtig: Der Resolver sieht Domains – wähle ihn bewusst und prüfe Probleme im Alltag.

## Ziel

- Weg A: Im Alltag schnell aktivieren (meist im Browser) und sauber testen.
- Weg B: Konsistent einrichten und Konflikte mit Heimnetz, VPN oder Firmennetz vermeiden.
- Weg C: Verhindern, dass unverschlüsseltes DNS „durchrutscht“.

Stoppsignal: Wenn du ein Arbeits-/Schulnetz nutzt, interne Namen brauchst oder ein VPN/Filterdienst Vorgaben macht, schalte nicht blind um. Teste zuerst, dann stell fest ein.  
Aufwand + Komfortkosten: 10–30 Minuten. Möglich sind Probleme mit WLAN-Login-Seiten („Captive Portal“), kaputte interne Namen und veränderte Filterwirkung.

## Schnellstart (10 Minuten) – 5 Schritte
1) Entscheide: Browser oder System?
1. Nutzt du vor allem einen Browser zum Surfen, starte dort.
2. Sind dir Apps außerhalb des Browsers wichtig, prüfe zusätzlich das System.
So vermeidest du „halb aktiv“ und weißt, wo die Änderung wirklich wirkt. Als Nebenwirkung kann Browser-DoH Heimnetz-Filter oder Kinderschutz teilweise umgehen.

2) Aktiviere verschlüsseltes DNS im Browser
3. Öffne Datenschutz-/Sicherheits-Einstellungen.
4. Aktiviere „DNS über HTTPS“, „Sicheres DNS“ oder „Verschlüsseltes DNS“ (je nach Browser).
5. Wenn es „automatisch/standard“ gibt, nimm das zuerst.
Bezeichnung kann abweichen – nutze die Suche nach: DNS, DoH, DoT, sicheres DNS, verschlüsseltes DNS.  
Du reduzierst Mitlesen und Manipulation von DNS-Abfragen im Netzwerk. In manchen Netzen kann Surfen erst nach einem kurzen Test oder Umschalten wieder stabil sein.

3) Aktiviere verschlüsseltes DNS im Betriebssystem (falls vorhanden)
6. Öffne die Netzwerk-/Internet-Einstellungen deines Systems.
7. Suche nach „Privates DNS“ oder „Verschlüsseltes DNS“.
8. Starte mit „wenn möglich“, falls es diese Option gibt.
So profitieren auch Apps, die das System-DNS nutzen. Als Nebenwirkung können interne Namen im Firmennetz oder Geräte-Namen im Heimnetz ausfallen.

4) Teste sofort: Alltag + WLAN-Login
9. Öffne zwei bis drei Webseiten, die du kennst.
10. Wenn du in einem Gast-WLAN bist: prüfe, ob die Login-Seite erscheint.
11. Wenn etwas klemmt: deaktiviere verschlüsseltes DNS kurz und vergleiche.
Du merkst früh, ob dein Netz „zickt“, bevor du dich aussperrst. In Hotels/Flughäfen ist das häufig ein Netz-Problem, kein Fehler von dir.

5) Prüfe, welcher DNS-Auflöser genutzt wird
12. Starte einen Test, der deinen aktuellen DNS-Auflöser anzeigt: [DNS-Leak-Test](/tests/dns-leak-test/).
13. Vergleiche das Ergebnis mit „vorher“, falls du es notiert hast.
Du erkennst, ob sich dein DNS-Auflöser geändert hat. Der Test zeigt meist den DNS-Auflöser, nicht garantiert den genutzten Verschlüsselungsmodus.

## Wege

### Weg A

- Aktiviere DoH zuerst im Hauptbrowser und bleib bei „automatisch/standard“.
- Teste zu Hause und einmal unterwegs (wenn möglich), damit du Unterschiede merkst.
- Nutzt du ein VPN, teste mit und ohne VPN, damit DNS nicht doppelt oder falsch läuft.
- Nutzt du Heimnetz-Filter/Kinderschutz, prüfe ein Beispiel, das vorher sicher geblockt wurde.
Das bringt dir schnelle Wirkung mit wenig Aufwand. Als Nebenwirkung kann es sein, dass einzelne Netze oder Filter sich anders verhalten als zuvor.

<details><summary>Weg B (Fortgeschritten)</summary>

- Entscheide dich bewusst für eine Ebene:
  - Browser, wenn es vor allem ums Surfen geht.
  - System, wenn auch Apps mitziehen sollen.
- Vermeide Mischbetrieb: Browser-DoH kann das System-DNS übergehen und macht Fehler schwerer zu finden.
- Lege dir eine einfache Routine für Sondernetze an (z. B. „im Arbeits-WLAN aus“).
- Bleib zuerst bei „wenn möglich“ und verschärfe erst, wenn alles stabil ist.
Du bekommst eine konsistente, nachvollziehbare Konfiguration. Als Nebenwirkung musst du in Sondernetzen (Firma/Schule/Gast-WLAN) gelegentlich umschalten.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

- Stelle (wenn verfügbar) von „wenn möglich“ auf „nur verschlüsselt“ um.
- Deaktiviere einen Rückfall auf unverschlüsseltes DNS, falls dein System das anbietet.
- Teste gezielt: Heimnetz, fremdes WLAN, Mobilfunk und mit VPN.
- Plane einen schnellen Rückweg ein, falls du dich in einem Netz aussperrst.
Du reduzierst „Durchrutschen“ auf unverschlüsseltes DNS. Als Nebenwirkung können Netze unbenutzbar werden, die DNS-Vorgaben erzwingen (z. B. Unternehmen, Hotels, Flughäfen).

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob sich dein DNS-Auflöser im Test sichtbar ändert: [DNS-Leak-Test](/tests/dns-leak-test/).
- Achte darauf, ob Gast-WLANs häufiger haken (Login-Seite fehlt, „kein Internet“) und nach kurzem Ausschalten wieder gehen.
- Achte darauf, ob interne Namen im Heim-/Firmennetz plötzlich nicht mehr auflösen (z. B. Drucker, NAS, interne Dienste).

<details><summary>Mehr Prüfungen</summary>

- Vergleiche „zu Hause“ vs. „unterwegs“: Wenn es nur unterwegs kaputtgeht, ist oft die WLAN-Login-Seite der Auslöser.
- Teste Browser A vs. Browser B: Wenn nur ein Browser betroffen ist, liegt es meist an dessen DoH-Einstellung.
- Wenn du ein VPN nutzt: Prüfe, ob DNS im VPN landet oder daneben läuft (DNS-Leaks).

</details>

## Probleme & Lösungen

- **Problem:** Im Hotel/Flughafen-WLAN öffnet sich keine Login-Seite.  
  **Lösung:** Verschlüsseltes DNS kurz deaktivieren, einloggen, danach wieder aktivieren.

- **Problem:** Im Firmennetz funktionieren interne Namen oder Dienste nicht mehr.  
  **Lösung:** Verschlüsseltes DNS in diesem Netz deaktivieren oder nur im privaten Browser-Profil nutzen.

- **Problem:** Seiten laden spürbar langsamer.  
  **Lösung:** Nutze statt „nur verschlüsselt“ zuerst „wenn möglich“ und teste erneut.

- **Problem:** Heimnetz-Filter/Kinderschutz wirkt plötzlich anders.  
  **Lösung:** Deaktiviere Browser-DoH im Heimnetz oder nutze den Heimnetz-/Router-Ansatz statt Browser-DoH.

- **Problem:** Manche Apps ignorieren die Änderung.  
  **Lösung:** Prüfe, ob die App eigene DNS-/Proxy-Einstellungen hat. Sonst lässt sich das nicht zuverlässig erzwingen.

- **Problem:** Nach einem Update ist die Wirkung weg oder „anders“.  
  **Lösung:** Prüfe Browser und System getrennt. Updates können DNS-Optionen zurücksetzen oder Standards ändern.

## Nicht gelöst

- DoH/DoT verschlüsselt nur die Namensabfrage zum DNS-Auflöser, nicht die Ziel-IP deiner Verbindung.
- Der DNS-Auflöser sieht deine Abfragen weiterhin und kann sie protokollieren (je nach Anbieter und Regeln).
- Gegen Tracking im Browser (Cookies, Fingerprinting) hilft DoH/DoT allein nicht: dafür brauchst du andere Maßnahmen.
- Wenn dein Gerät kompromittiert ist (Schadsoftware, Admin-Zugriff, Stalkerware) oder du unter Zwang handelst, kann DNS/Verkehr trotzdem überwacht oder umgeleitet werden.
- In Netzen mit Richtlinien (Firma/Schule) kann DoH/DoT gegen Vorgaben verstoßen oder schlicht nicht funktionieren.

## FAQ

**Ist DoH/DoT automatisch „privater“?**

Es verschlüsselt DNS-Anfragen, aber der Resolver sieht weiterhin Domains. Wichtig ist daher: vertrauenswürdiger Resolver + keine Leaks.

**Warum gibt es DNS-Probleme nach der Umstellung?**

Typisch sind Captive Portals, Firmen-VPNs oder Router-Filter. Dann hilft ein Fallback oder die Umstellung pro Netzwerk.

**Muss ich DNS zusätzlich zum VPN ändern?**

Nicht zwingend. Entscheidend ist, dass DNS nicht am VPN vorbei leakt. Ein Leak-Test und die richtigen Einstellungen sind wichtiger als „immer extra“.

## Quellen

- [RFC 8484: DNS Queries over HTTPS (DoH)](https://www.rfc-editor.org/rfc/rfc8484.html)
- [RFC 7858: DNS over Transport Layer Security (DoT)](https://www.rfc-editor.org/rfc/rfc7858.html)
- [Mozilla Support: DNS über HTTPS in Firefox](https://support.mozilla.org/de/kb/firefox-dns-%C3%BCber-https)
- [Google Chrome Hilfe: Sicherheit in Chrome verwalten (Sicheres DNS)](https://support.google.com/chrome/answer/10468685?co=GENIE.Platform%3DDesktop&hl=de)
- [Google Android Hilfe: Privates DNS aktivieren oder ändern](https://support.google.com/android/answer/9654714?hl=de)
- [Microsoft Learn: DoH-Client-Unterstützung unter Windows](https://learn.microsoft.com/de-de/windows-server/networking/dns/doh-client-support)

## Weiter

- [DNS: Schnellstart](/dns/schnellstart/)
- [DNS-Probleme lösen](/dns/probleme/)
- [DNS am Router einstellen](/dns/router/)
- [DNS-Leaks verstehen und prüfen](/netzwerk/leaks/dns/)
- [VPN: Schnellstart](/vpn/schnellstart/)
