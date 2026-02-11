---
layout: "@/layouts/DocLayout.astro"
title: "DNS-Probleme beheben: Schnell testen, sauber eingrenzen"
url: "/dns/probleme/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "DNS-Probleme beheben: Prüfe Erreichbarkeit, Cache, IPv6 und Router-DNS. Du bekommst klare Schritte, A/B-Tests und Lösungen für typische Fehlerbilder."
---
Manchmal ist das Internet „da“, aber Webseiten laden nicht oder nur halb. Apps wirken „offline“. Du siehst nur „Server nicht gefunden“ oder endlose Ladezeiten.

Das ist nervig, weil du nicht weißt, ob dein Anschluss spinnt oder nur die Namensauflösung. DNS ist das „Telefonbuch“ des Internets: Es übersetzt Namen wie `beispiel.de` in IP-Adressen.

Am Ende weißt du, ob DNS die Ursache ist. Und du hast einen sauberen Plan, wie du das Problem eingrenzt, ohne alles gleichzeitig zu verstellen.

Sinnvoll, wenn du verschlüsseltes DNS nutzt oder am Netzwerk etwas geändert hast.  
Grenze: Wenn dein Gerät kompromittiert ist, lösen DNS-Änderungen das Grundproblem nicht.

## Kurzfazit
- Wenn du nur 10 Minuten hast: aktiviere DoH/DoT und teste auf DNS‑Leaks.
- Wichtig: Der Resolver sieht Domains – wähle ihn bewusst und prüfe Probleme im Alltag.

## Ziel

Weg A: Schnell prüfen, ob DNS der Auslöser ist. Ohne Spezialwissen.  
Weg B: Systematisch testen (Cache, IPv6, Router-Regeln, Filter) und sauber notieren.  
Weg C: Tiefenprüfung (Profile, Mitschnitt, Split-DNS) für hartnäckige Fälle.

Stoppsignal: Wenn du verdächtige Geräteverwaltung, unbekannte Profile oder „Admin“-Apps findest, behandle es als Sicherheitsfall. Siehe [Verdacht: Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/).  
Aufwand: 10–25 Minuten. Komfortkosten: Kurzzeitige Unterbrechungen, VPN oder Firmenzugang kann vorübergehend nicht funktionieren.

## Schnellstart (10 Minuten)
1) **Kurz testen: anderes Netz**
1. Wechsle von WLAN auf Mobilfunk (oder umgekehrt).
2. Öffne 2–3 Webseiten, die sonst zuverlässig sind.
3. Teste zusätzlich eine betroffene App.
4. Wenn möglich: probiere ein zweites Gerät im selben Netz.
So trennst du schnell „Router/WLAN“ von „Gerät“. Mobilfunk-Sparmodi oder Firmenrichtlinien können Ergebnisse verfälschen.

2) **DNS-Leak-Test als Orientierung**
5. Öffne den [DNS-Leak-Test](/tests/dns-leak-test/) im betroffenen Netz.
6. Notiere, ob ein erwarteter DNS-Dienst angezeigt wird oder etwas Unerwartetes.
7. Wiederhole den Test im anderen Netz (WLAN vs. Mobilfunk).
Damit erkennst du Umleitungen durch VPN, Router-Filter oder Unternehmensnetze. Der Test beweist keine „Sicherheit“ und kann je nach Browser/VPN anders aussehen.

3) **Verschlüsseltes DNS kurz aus- und wieder einschalten**
8. Deaktiviere verschlüsseltes DNS kurz (falls aktiv) und teste erneut.
9. Aktiviere es wieder und teste noch einmal.
10. Wenn du DNS manuell eingetragen hast: testweise auf „automatisch beziehen“ zurückstellen.
Bezeichnung kann abweichen – nutze die Suche nach: DNS, Privates DNS, Verschlüsseltes DNS, DNS über HTTPS.  
So siehst du, ob das Problem mit DNS über HTTPS (DoH) oder DNS über TLS (DoT) zusammenhängt. Ohne verschlüsseltes DNS kann dein Netzbetreiber DNS-Anfragen leichter mitlesen oder filtern.

4) **VPN und Filter testweise ausschließen**
11. Trenne testweise die VPN-Verbindung (falls aktiv).
12. Deaktiviere vorübergehend Filterfunktionen, die DNS umleiten (Webschutz, Kindersicherung).
13. Teste danach dieselben Webseiten wie zuvor.
Viele „DNS-Probleme“ sind Nebenwirkungen von Filtern oder VPNs. Dabei können Firmendienste oder interne Seiten kurz nicht funktionieren.

5) **Router neu starten (richtig)**
14. Trenne den Router 30–60 Sekunden vom Strom.
15. Warte, bis er vollständig wieder online ist.
16. Teste anschließend DNS und Webseiten erneut.
Das räumt hängende Weiterleitungen und Caches auf. Telefonie oder TV kann dabei kurz unterbrechen.

## Wege

### Weg A

1. Prüfe, ob nur eine App/Webseite betroffen ist oder „alles“.
2. Wechsle testweise das Netz (WLAN ↔ Mobilfunk), um Router vs. Gerät zu trennen.
3. Mache einen [DNS-Leak-Test](/tests/dns-leak-test/) und notiere das Ergebnis.
4. Schalte verschlüsseltes DNS testweise aus, dann wieder an, und vergleiche.
5. Wenn du DNS manuell gesetzt hast: stelle testweise auf „automatisch“ zurück.
6. Deaktiviere testweise VPN und DNS-umleitende Filter (Webschutz, Kindersicherung).
7. Starte den Router neu (30–60 Sekunden stromlos).
8. Wenn es nur im WLAN passiert: teste Gäste-WLAN vs. normales WLAN. Siehe [Gäste-WLAN](/netzwerk/gaeste-wlan/).
9. Wenn es danach besser ist: ändere nur eine Sache dauerhaft und beobachte 24 Stunden.
10. Wenn es danach immer noch wackelt: geh zu Weg B.

<details><summary>Weg B (Fortgeschritten)</summary>

- Leere den DNS-Zwischenspeicher (DNS-Cache) deines Systems und teste erneut. Ein alter Cache kann Fehler „festhalten“, bis er abläuft.
- Prüfe IPv6 als Störfaktor: Wenn Seiten nur manchmal laden, teste kurz mit deaktiviertem IPv6 (nur zum Eingrenzen). Siehe [IPv6](/netzwerk/ipv6/). Dabei können Dienste, die IPv6 brauchen, schlechter funktionieren.
- Prüfe WLAN-Anmeldeseiten (Captive Portal): Öffne zuerst die Anmeldeseite des WLANs und bestätige sie, bevor du DNS bewertest. Siehe [Public WLAN](/netzwerk/public-wlan/). Ohne Anmeldung wirken DNS und HTTPS oft „kaputt“.
- Prüfe, ob der Router DNS „überschreibt“: Manche Router erzwingen eigene DNS-Server trotz Geräte-Einstellung. Hinweise findest du unter [DNS im Router](/dns/router/). Das kann Schutzfunktionen aushebeln oder Filter „unsichtbar“ machen.
- Wenn du einen lokalen DNS-Filter im Heimnetz nutzt: umgehe ihn testweise, indem du DNS wieder automatisch beziehst oder das Gerät in ein anderes Netz nimmst. Dadurch fehlen dir kurz Blocklisten und Jugendschutz.

</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.

- Prüfe, ob ein Geräteprofil oder Gerätemanagement DNS erzwingt (MDM, Arbeitskonto). Das erklärt „Einstellung greift nicht“, kann aber Firmenzugänge zerstören, wenn du es entfernst.
- Prüfe Firewall- und Filterregeln im Netz: DoT nutzt typischerweise Port 853, DoH läuft über HTTPS. Blockaden können dazu führen, dass es „halb geht“ und dann hängt.
- Teste Split-DNS (getrennte Namensauflösung innen/außen): In Firmen-VPNs werden interne Namen anders aufgelöst als im Heimnetz. Außerhalb brechen dann einzelne Dienste.
- Mache einen lokalen Paketmitschnitt im Heimnetz und prüfe, ob DNS-Anfragen rausgehen und Antworten zurückkommen. Das ist präzise, kostet aber Zeit und ist fehleranfällig.
- Prüfe, ob Router oder Sicherheitssoftware DNS-Antworten verändert (zum Beispiel Umleitung auf Blockseiten). Das kann wie „Server nicht gefunden“ wirken, obwohl die Verbindung steht.

Achtung: Weg C kann VPN, Firmenzugang oder Streaming kurzfristig lahmlegen.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob „Server nicht gefunden“ verschwindet und Seiten wieder sofort starten.
- Vergleiche den [DNS-Leak-Test](/tests/dns-leak-test/) vor/nach der Änderung: Das Ergebnis sollte stabil bleiben.
- Wenn Aussetzer nur in einem Netz auftreten, liegt es meist an Router oder WLAN-Konfiguration und seltener am Gerät.

<details><summary>Mehr Prüfungen & Hinweise</summary>

- Wenn nur ein Gerät betroffen ist: prüfe, ob dort VPN, Filter oder ein Arbeitsprofil aktiv ist.
- Wenn alle Geräte im WLAN betroffen sind: Fokus auf Router, DNS im Router und Internetanbieter.
- Wenn es nur abends passiert: möglich sind überlastetes WLAN, Anschlussstörungen oder zeitgesteuerte Filterregeln.

</details>

## Probleme & Lösungen

- **Problem:** Webseiten laden, aber manche Apps melden „offline“.  
  **Lösung:** VPN oder Filter testweise aus, dann wieder an. Prüfe außerdem [QUIC](/netzwerk/quic/) bei Browser-Problemen.

- **Problem:** Im Hotel oder Café geht „nichts“, zu Hause wieder alles.  
  **Lösung:** Erst die WLAN-Anmeldeseite abschließen. Danach DNS erneut testen. Siehe [Public WLAN](/netzwerk/public-wlan/).

- **Problem:** Mit verschlüsseltem DNS brechen einzelne Seiten oder Geräte im Heimnetz ab.  
  **Lösung:** Testweise auf „automatisch“ zurück, dann schrittweise wieder aktivieren.

- **Problem:** DNS-Einstellung am Gerät greift nicht, der Leak-Test zeigt trotzdem etwas anderes.  
  **Lösung:** Prüfe [DNS im Router](/dns/router/) und ob ein VPN oder Profil DNS erzwingt.

- **Problem:** Es funktioniert nur ohne IPv6 oder nur manchmal.  
  **Lösung:** IPv6 testweise zum Eingrenzen deaktivieren und Router-Firmware prüfen. Siehe [IPv6](/netzwerk/ipv6/) und [Router-Sicherheit](/netzwerk/router-sicherheit/).

- **Problem:** Nach einem Wechsel des DNS-Anbieters ist es erst gut, dann wieder schlecht.  
  **Lösung:** DNS-Cache leeren und Router neu starten. Beobachte 24 Stunden ohne weitere Änderungen.

## Nicht gelöst

- DNS-Einstellungen verhindern nicht, dass Webseiten selbst dich tracken. Dafür ist [Tracking](/tracking/) der richtige Start.
- DNS kann nicht verbergen, welche Dienste du nutzt, wenn andere Metadaten sichtbar bleiben (zum Beispiel IP-Verbindungen). Siehe [Metadaten](/kommunikation/metadaten/).
- Wenn dein Gerät kompromittiert ist (Stalkerware, Administrator-Zugriff, manipulierte Apps oder Profile), sind DNS-Änderungen nur Kosmetik. Siehe [Stalkerware-Verdacht](/szenarien/stalkerware-verdacht/) und [Verdacht: Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/).
- In Unternehmensumgebungen können Richtlinien DNS erzwingen. Private Änderungen werden dann überschrieben.
- Bei Zwang, physischem Zugriff oder Admin-Rechten auf Router oder Gerät schützt DNS nicht. Dann brauchst du Maßnahmen für dein [Bedrohungsmodell](/start/bedrohungsmodell/).

## FAQ

**Ist DoH/DoT automatisch „privater“?**

Es verschlüsselt DNS-Anfragen, aber der Resolver sieht weiterhin Domains. Wichtig ist daher: vertrauenswürdiger Resolver + keine Leaks.

**Warum gibt es DNS-Probleme nach der Umstellung?**

Typisch sind Captive Portals, Firmen-VPNs oder Router-Filter. Dann hilft ein Fallback oder die Umstellung pro Netzwerk.

**Muss ich DNS zusätzlich zum VPN ändern?**

Nicht zwingend. Entscheidend ist, dass DNS nicht am VPN vorbei leakt. Ein Leak-Test und die richtigen Einstellungen sind wichtiger als „immer extra“.

## Quellen

- [RFC 1035: Domain Names – Implementation and Specification](https://www.rfc-editor.org/rfc/rfc1035.html)
- [RFC 7858: DNS over TLS](https://www.rfc-editor.org/rfc/rfc7858.html)
- [RFC 8484: DNS Queries over HTTPS (DoH)](https://www.rfc-editor.org/rfc/rfc8484.html)
- [RFC 7626: DNS Privacy Considerations](https://www.rfc-editor.org/rfc/rfc7626.html)
- [Android-Hilfe: Privates DNS verwenden](https://support.google.com/android/answer/9089903)
- [Mozilla-Hilfe: DNS über HTTPS in Firefox](https://support.mozilla.org/de/kb/dns-ueber-https)

## Weiter

- [DNS: Schnellstart](/dns/schnellstart/)
- [DoH vs. DoT](/dns/doh-dot/)
- [DNS-Leak-Test](/tests/dns-leak-test/)
- [VPN: Probleme](/vpn/probleme/)
- [Public WLAN](/netzwerk/public-wlan/)
- [DNS im Router](/dns/router/)
