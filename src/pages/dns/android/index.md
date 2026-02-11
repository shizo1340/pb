---
layout: "@/layouts/DocLayout.astro"
title: "Privates DNS auf Android einrichten und Probleme lösen"
url: "/dns/android/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "So stellst du Privates DNS (DNS über TLS) auf Android ein, prüfst die Wirkung und behebst typische Verbindungsprobleme – alltagstauglich erklärt."
---
Du merkst es oft erst, wenn es schiefgeht: In fremden WLANs landen DNS-Abfragen im Klartext, oder ein Netz „biegt“ Aufrufe um. Das ist nervig. Und im falschen Netz kann es riskant werden.

Mit „Privates DNS“ kann Android DNS über TLS nutzen. Das ist eine verschlüsselte Verbindung für DNS-Anfragen (oft abgekürzt als „DoT“). Danach bleibt es im Alltag meist ruhig.

Sinnvoll, wenn du häufig öffentliche WLANs nutzt oder DNS-Manipulation vermeiden willst.  
Grenze: Das schützt nur DNS, nicht deine ganze Internetverbindung.

## Kurzfazit
- Wenn du nur 10 Minuten hast: aktiviere DoH/DoT und teste auf DNS‑Leaks.
- Wichtig: Der Resolver sieht Domains – wähle ihn bewusst und prüfe Probleme im Alltag.

## Ziel

Weg A: Privates DNS aktivieren und im Alltag stabil nutzen.  
Weg B: „Automatisch“ vs. „Hostname“ verstehen und Konflikte sauber lösen.  
Weg C: DNS mit „Immer eingeschaltetem VPN“ kombinieren, wenn du es erzwingen willst.

Stoppsignal: Wenn nach dem Aktivieren Seiten gar nicht mehr laden oder ein Firmennetz nicht mehr funktioniert, stell vorübergehend auf „Automatisch“ oder „Aus“.  
Aufwand: 5–15 Minuten. Komfortkosten: In manchen WLANs musst du kurz umschalten.

## Schnellstart (10 Minuten)
1) **Privates DNS finden und den Ausgangszustand notieren**  
1. Öffne die Android-Einstellungen.
2. Suche nach „Privates DNS“ und öffne den Eintrag.
3. Notiere die aktuelle Auswahl (z. B. „Aus“, „Automatisch“, „Hostname …“).
Bezeichnung kann abweichen – nutze die Suche nach: Privates DNS.  
Das hilft dir beim Zurückstellen, wenn ein WLAN zickt. Nebenwirkung: Wenn du die Notiz in der Cloud speicherst, landet sie dort.

2) **Hostname deines DNS-Anbieters besorgen**  
4. Öffne die Hilfeseite oder Kontoseite deines DNS-Anbieters.
5. Suche nach „DNS über TLS“ oder „Privates DNS“ und kopiere den Hostnamen (z. B. `dns.beispiel.de`).
6. Prüfe: Es ist ein Name, keine Zahlen-IP.
Android erwartet hier typischerweise einen Hostnamen. Nebenwirkung: Ein falscher Hostname führt schnell zu „kein Internet“.

3) **Privates DNS auf „Hostname“ stellen**  
7. Öffne „Privates DNS“.
8. Wähle die Option mit „Hostname …“ (oder ähnlich).
9. Füge den Hostnamen ein und speichere.
Bezeichnung kann abweichen – nutze die Suche nach: Hostname.  
Damit sind DNS-Abfragen im Netzwerk schwerer mitzulesen und zu verändern. Nebenwirkung: In manchen Netzen ist DNS über TLS blockiert, dann lädt nichts.

4) **Kurz prüfen, ob der richtige DNS-Server genutzt wird**  
10. Öffne einen Browser.
11. Starte den [DNS-Leak-Test](/tests/dns-leak-test/).
12. Achte darauf, ob der angezeigte DNS-Server zu deinem Anbieter passt.
So erkennst du schnell, ob die Einstellung greift. Nebenwirkung: Der Test kann nicht jedes Detail der Verschlüsselung beweisen und erzeugt zusätzliche DNS-Anfragen.

5) **Notfall-Umschalten für WLAN-Anmeldeseiten merken**  
13. Wenn ein WLAN eine Anmeldeseite braucht: Öffne „Privates DNS“.
14. Stelle kurz auf „Automatisch“ oder „Aus“, melde dich im WLAN an.
15. Stelle danach wieder auf „Hostname …“ zurück.
Das ist typisch bei WLAN-Anmeldeseiten („Captive Portal“). Nebenwirkung: Während des Umschaltens sind DNS-Abfragen wieder unverschlüsselt.

## Wege

### Weg A

- Öffne „Privates DNS“.  
Bezeichnung kann abweichen – nutze die Suche nach: Privates DNS.
- Lass „Automatisch“ aktiv, wenn du Ausfälle minimieren willst. Das nutzt verschlüsseltes DNS, wenn das Netz es unterstützt. Nebenwirkung: Du bestimmst nicht, welcher DNS-Server genutzt wird.
- Nutze „Hostname …“, wenn du einen festen DNS-Anbieter möchtest. Das reduziert Mitlesen und Manipulation im Netz. Nebenwirkung: Manche Netze blockieren DNS über TLS.
- Teste kurz mit dem [DNS-Leak-Test](/tests/dns-leak-test/), ob der erwartete DNS-Server erscheint. Nebenwirkung: Der Test ist ein Indiz, kein Beweis für jede Technik im Hintergrund.
- Wenn ein öffentliches WLAN eine Anmeldeseite braucht: kurz auf „Automatisch“/„Aus“, danach zurück. Nebenwirkung: Du musst einmal extra in die Einstellungen.
- Wenn du ein Firmennetz nutzt: prüfe, ob interne Namen (Intranet, Drucker) noch auflösen. Nebenwirkung: „Hostname …“ kann interne DNS-Regeln aushebeln.

<details><summary>Weg B (Fortgeschritten)</summary>

- Nutze „Automatisch“, wenn du oft Netze wechselst. Das reduziert die Chance, dass du unterwegs „offline“ bist. Nebenwirkung: Du gibst Kontrolle über den konkreten DNS-Server ab.
- Nutze „Hostname …“, wenn du bewusst einen Anbieter willst. Das macht dein DNS-Verhalten konsistenter. Nebenwirkung: Du verschiebst Vertrauen auf diesen Anbieter.
- Prüfe bei Problemen getrennt: einmal über WLAN, einmal über mobile Daten. Das grenzt die Ursache ein. Nebenwirkung: Es kostet ein paar Minuten und wirkt erst nach einem Vergleich.
- Wenn du zusätzlich ein VPN nutzt: teste einmal mit Privatem DNS aktiv und einmal mit Privatem DNS aus. Das zeigt, ob sich beide in die Quere kommen. Nebenwirkung: Kurzzeitiges Umschalten kann laufende Verbindungen unterbrechen.
- Wenn du im Heimnetz eigene Namen nutzt (z. B. `drucker.lan`): „Hostname …“ kann das stören. „Automatisch“ ist dann oft die ruhigere Wahl. Nebenwirkung: Du nutzt wieder eher das DNS des Netzes.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.  
- Wenn du erzwingen willst, dass wirklich alles nur über ein VPN geht: aktiviere „Immer eingeschaltetes VPN“ und „Verbindungen ohne VPN blockieren“.  
Bezeichnung kann abweichen – nutze die Suche nach: Immer eingeschaltetes VPN.
- Das reduziert Leaks, wenn Apps „am VPN vorbei“ funken wollen. Nebenwirkung: Ohne funktionierendes VPN wirkt das Gerät komplett offline.
- Prüfe danach typische Ausnahmen: WLAN-Anmeldung, Updates, Messenger im Bereitschaftsbetrieb. Nebenwirkung: Du musst einmal bewusst testen.
- Nutze den [DNS-Leak-Test](/tests/dns-leak-test/) einmal mit aktivem VPN und einmal ohne (zum Vergleich). Nebenwirkung: Ein Vergleich kann verwirren, wenn dein VPN seinen eigenen DNS-Server erzwingt.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob im [DNS-Leak-Test](/tests/dns-leak-test/) der erwartete DNS-Server erscheint.  
- Achte darauf, ob öffentliche WLANs ohne dauerndes Umschalten funktionieren. Wenn nicht, blockiert das Netz oft DNS über TLS.  
- Wenn du früher „komische Umleitungen“ in fremden Netzen hattest: prüfe, ob das Verhalten weg ist (bei gleicher WLAN-Umgebung).

<details><summary>Mehr Prüfungen & Hinweise</summary>

- Wenn nur ein bestimmtes WLAN Probleme macht: stelle Privates DNS dort testweise auf „Automatisch“ und beobachte, ob es stabil wird.  
- Wenn nur mobile Daten Probleme machen: teste einmal im Flugmodus (WLAN an), um Mobilfunk als Ursache auszuschließen.  
- Auch mit Privatem DNS kann dein DNS-Anbieter sehen, welche Domains du auflöst. Du verschiebst Vertrauen, du entfernst es nicht.

</details>

## Probleme & Lösungen

- **Problem:** Nach dem Aktivieren lädt gar nichts mehr. / **Lösung:** Hostname auf Tippfehler prüfen, dann testweise auf „Automatisch“ stellen. Oft blockiert das Netz DNS über TLS.  
- **Problem:** Ein öffentliches WLAN zeigt keine Anmeldeseite. / **Lösung:** Privates DNS kurz auf „Aus“ oder „Automatisch“, anmelden, danach wieder zurück.  
- **Problem:** Im Firmennetz gehen interne Adressen nicht mehr (Intranet, Drucker, Dienste). / **Lösung:** Privates DNS auf „Automatisch“ oder „Aus“ stellen und mit der IT klären, ob DNS über TLS erlaubt ist.  
- **Problem:** Manche Apps funktionieren, andere nicht. / **Lösung:** Testweise zwischen „Hostname …“ und „Automatisch“ wechseln und den Unterschied notieren. Häufig sind Filterlisten beim DNS-Anbieter oder Netzregeln der Auslöser.  
- **Problem:** Mit VPN wirkt alles instabil oder „hängt“. / **Lösung:** Privates DNS testweise deaktivieren und prüfen, ob das VPN den DNS sauber übernimmt. Danach entscheiden, was wichtiger ist: fester DNS-Anbieter oder VPN-DNS.  
- **Problem:** Nach einem Gerätewechsel ist die Einstellung weg oder unklar. / **Lösung:** Hostname aus deiner Notiz übernehmen und mit dem [DNS-Leak-Test](/tests/dns-leak-test/) gegenprüfen.

## Nicht gelöst

- Privates DNS schützt nur DNS-Fragen und -Antworten, nicht den restlichen Datenverkehr.  
- Es versteckt deine IP-Adresse nicht und verhindert kein Tracking über Konten, Cookies oder Fingerprinting.  
- Dein DNS-Anbieter kann weiterhin Domain-Abfragen sehen und je nach Regeln protokollieren.  
- Wenn ein Angreifer dein Gerät kontrolliert (Schadsoftware, Stalkerware, Admin-Zugriff), kann er DNS umgehen oder Daten direkt abgreifen.  
- In Netzen mit Blockaden kann „Hostname …“ zu Ausfällen führen. Das ist kein Beweis, dass „das Internet kaputt“ ist.

## FAQ

**Ist DoH/DoT automatisch „privater“?**

Es verschlüsselt DNS-Anfragen, aber der Resolver sieht weiterhin Domains. Wichtig ist daher: vertrauenswürdiger Resolver + keine Leaks.

**Warum gibt es DNS-Probleme nach der Umstellung?**

Typisch sind Captive Portals, Firmen-VPNs oder Router-Filter. Dann hilft ein Fallback oder die Umstellung pro Netzwerk.

**Muss ich DNS zusätzlich zum VPN ändern?**

Nicht zwingend. Entscheidend ist, dass DNS nicht am VPN vorbei leakt. Ein Leak-Test und die richtigen Einstellungen sind wichtiger als „immer extra“.

## Quellen

- [Erweiterte Netzwerkeinstellungen auf Android verwalten (Privates DNS)](https://support.google.com/android/answer/9654714?hl=de)
- [VPN | Connectivity (Always-on VPN, Block connections without VPN)](https://developer.android.com/develop/connectivity/vpn)
- [DNS over TLS (RFC 7858)](https://datatracker.ietf.org/doc/html/rfc7858)
- [What's new for enterprise in Android 10 (Private DNS support)](https://developer.android.com/work/versions/android-10)

## Weiter

- [DNS: Schnellstart](/dns/schnellstart/)
- [DNS over HTTPS und DNS over TLS](/dns/doh-dot/)
- [DNS-Probleme lösen](/dns/probleme/)
- [DNS-Leaks verstehen](/netzwerk/leaks/dns/)
- [VPN-Leaks vermeiden](/vpn/leaks/)
