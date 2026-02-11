---
layout: "@/layouts/DocLayout.astro"
title: "WebRTC-Leak verhindern: IP-Freigabe im Browser prüfen"
url: "/browser/webrtc/"
chapter: "Themen"
type: "guide"
format: "guide"
level:
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "WebRTC-Leak verhindern: Du prüfst IP-Freigaben, stellst WebRTC im Browser restriktiver ein und testest mit VPN, ob nur die erwartete IP wirklich sichtbar ist."
---
Wenn ein Leak-Test plötzlich deine echte IP oder interne Adressen zeigt, wirkt ein VPN schnell nutzlos.  
Oft steckt WebRTC dahinter: Der Browser sammelt mögliche Verbindungswege und zeigt dabei mehr Adressen als nötig.

Hier reduzierst du diese Preisgabe, ohne Videokonferenzen unnötig zu brechen.  
Am Ende prüfst du sauber nach, damit du weißt, was eine Webseite wirklich sehen kann.

Sinnvoll, wenn du VPN/Proxy nutzt oder interne Netzwerkdetails nicht preisgeben willst.  
Grenze: Eine Seite, die du besuchst, sieht immer eine öffentliche IP, sonst ist keine Verbindung möglich.
  
Stand: 2026-01-27.

## Kurzfazit
- Teste erst, ändere dann: Viele „WebRTC-Leaks“ sind in Wahrheit VPN- oder IPv6-Themen.  
- Schränke WebRTC lieber ein statt es zu deaktivieren, wenn du Browser-Calls brauchst.

## Ziel

- Weg A: Leaks einordnen, alltagstauglich einstellen, Ergebnis verifizieren.  
- Weg B: WebRTC gezielt härten, ohne die Funktion komplett abzuschalten.  
- Weg C: Netzwerkebene (Firewall/VPN) – das ist wirksam, kostet aber Komfort.

**Stoppsignal:** Wenn du Web-Videokonferenzen oder Web-Telefonie nutzt, teste nach jeder Änderung mit einem echten Anruf.  
Wenn Ton, Bild oder Bildschirmteilen kaputtgeht, geh eine Stufe zurück.

Aufwand: 10–25 Minuten.  
Komfortkosten: von „keine Änderung“ bis „Browser-Calls gehen nicht mehr“.

## Schnellstart (10 Minuten)

1) **WebRTC als Ausgangspunkt messen**
- Öffne den [WebRTC-Test](/tests/webrtc-test/) im normalen Profil.  
- Wiederhole den Test mit aktivem VPN (falls genutzt).  
- Notiere, ob mehrere Treffer oder lokale Adressen auftauchen (z. B. `192.168…` / `10…`).  
So trennst du Gefühl von Fakten. Der Test kann mehr zeigen als eine Seite im Alltag ausnutzt.

2) **Browser und System aktualisieren**
- Installiere Updates für Browser und Betriebssystem ([Updates-Schnellstart](/updates/schnellstart/)).  
- Starte den Browser neu und teste erneut mit dem [WebRTC-Test](/tests/webrtc-test/).  
Neue Versionen schließen oft Lücken und ändern Schutzlogik. Nach Updates können Einstellungen zurückgesetzt sein.

3) **Andere Leaks ausschließen, bevor du WebRTC „beschuldigst“**
- Prüfe zusätzlich den [IP-Leak-Test](/tests/ip-leak-test/).  
- Wenn du VPN nutzt: lies [VPN-Leaks](/vpn/leaks/) und arbeite die typischen Ursachen ab.  
- Taucht IPv6 auf: prüfe [IPv6-Leaks](/netzwerk/leaks/ipv6/).  
Damit vermeidest du Fehlersuche am falschen Hebel. Ein halb arbeitendes VPN erzeugt oft „mehrere IPs“ im Ergebnis.

4) **WebRTC im Browser restriktiver stellen (falls vorhanden)**
- Öffne die Datenschutzeinstellungen deines Browsers.  
- Wähle eine Option, die lokale IPs/Netzwerkschnittstellen stärker begrenzt.  
- Teste danach direkt erneut mit dem [WebRTC-Test](/tests/webrtc-test/).  
Bezeichnung kann abweichen – nutze die Suche nach: WebRTC.  
Das reduziert häufig lokale Adressen im Test. Zu strenge Einstellungen können Videokonferenzen stören.

5) **Risikotrennung per Browser-Profil**
- Nutze ein separates Profil für VPN/„sensibel“ ([Profil-Trennung im Browser](/browser/profile-trennung/)).  
- Lass dein Alltagsprofil möglichst unverändert.  
So bleibt dein Alltag stabil, während du im sensiblen Profil härter einstellst. Du musst dich an Profile wechseln gewöhnen.

6) **Nach jeder Änderung einmal real testen**
- Starte eine echte Videokonferenz oder einen Testanruf.  
- Prüfe Ton, Bild, Bildschirmteilen und Verbindungsaufbau.  
So merkst du Nebenwirkungen sofort. Ohne Realtest fällt es oft erst im falschen Moment auf.

## Wege

### Weg A
1. Mache ein „Vorher“ mit dem [WebRTC-Test](/tests/webrtc-test/) (mit und ohne VPN).  
2. Aktualisiere Browser/System und wiederhole den Test.  
3. Kläre zuerst VPN-/IPv6-Themen über [VPN-Leaks](/vpn/leaks/) und [IPv6-Leaks](/netzwerk/leaks/ipv6/).  
4. Stelle WebRTC im Browser nur so restriktiv wie nötig und teste direkt danach erneut.  
5. Nutze [Profil-Trennung im Browser](/browser/profile-trennung/), wenn du unterschiedliche Risikoniveaus hast.  
6. Wiederhole Tests nach neuen Erweiterungen oder größeren Browser-Updates.

<details><summary>Weg B (Fortgeschritten)</summary>

WebRTC nutzt ICE (Aushandlung möglicher Verbindungswege), um eine Verbindung aufzubauen.  
Dabei können „Kandidaten“ Adressdaten enthalten, die ein Test dann sichtbar macht.

- Wenn dein Browser eine Option zum Verbergen lokaler Adressen anbietet, ist das meist der beste Kompromiss. Das reduziert Details, ohne WebRTC komplett zu brechen.  
- Firefox (Desktop), wenn du WebRTC wirklich nicht brauchst: Öffne `about:config`, suche `media.peerconnection.enabled` und setze auf `false`. Dann funktionieren Web-Calls typischerweise nicht mehr.  
- Für Feintuning in Firefox existieren je nach Version zusätzliche Schalter rund um ICE/Host-Kandidaten. Ändere nur, was du nach einem Realtest wieder zurückdrehen kannst.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

- Begrenze ausgehende UDP-Verbindungen des Browsers per Firewall. Das kann direkte WebRTC-Pfade verhindern, bricht aber oft Calls und manche Support-Tools.  
- Nutze VPN ohne Split-Tunneling, wenn du ein möglichst klares „eine IP“-Ergebnis willst. Das kann interne Dienste langsamer machen oder unpraktisch sein.  
- Trenne strikt nach Profilen und teste jedes Profil separat mit [WebRTC-Test](/tests/webrtc-test/) und einem echten Anruf.

</details>

## So merkst du, dass es wirkt
- Achte darauf, ob der [WebRTC-Test](/tests/webrtc-test/) nur die erwartete öffentliche IP zeigt (bei VPN: die VPN-IP).  
- Achte darauf, ob keine lokalen Adressen mehr auftauchen oder nur noch stark reduziert.  
- Achte darauf, ob Videokonferenzen stabil bleiben (Ton, Bild, Bildschirmteilen).

<details><summary>Mehr Checks</summary>

- Prüfe zusätzlich den [DNS-Leak-Test](/tests/dns-leak-test/), damit du DNS-Probleme nicht mit WebRTC verwechselst.  
- Wiederhole die Tests in einem zweiten Profil, um Erweiterungen als Ursache auszuschließen.

</details>

## Probleme & Lösungen
- **Problem:** Der Test zeigt mehrere IPs, obwohl VPN aktiv ist.  
  **Lösung:** Prüfe [VPN-Leaks](/vpn/leaks/) und teste mit dem [IP-Leak-Test](/tests/ip-leak-test/) gegenzu.

- **Problem:** IPv6 taucht im Ergebnis auf und verwirrt alles.  
  **Lösung:** Arbeite [IPv6-Leaks](/netzwerk/leaks/ipv6/) ab und teste danach erneut.

- **Problem:** Nach einer „harten“ Einstellung gehen Videokonferenzen nicht mehr.  
  **Lösung:** Nimm eine Stufe zurück oder nutze die harte Variante nur im separaten Profil über [Profil-Trennung im Browser](/browser/profile-trennung/).

- **Problem:** Im Firmennetz werden Ergebnisse „komisch“ oder Tools brechen.  
  **Lösung:** Teste einmal außerhalb des Firmennetzes und vermeide Firewall-Härtung in Weg C in diesem Umfeld.

- **Problem:** Der Browser bietet keine sichtbare WebRTC-Option.  
  **Lösung:** Bleib bei Weg A (Tests, Updates, VPN/IPv6 sauber trennen) und nutze Profil-Trennung als Kompromiss.

- **Problem:** Nach einem Browser-Update ist alles wieder anders.  
  **Lösung:** Wiederhole den [WebRTC-Test](/tests/webrtc-test/) und prüfe, ob Einstellungen zurückgesetzt wurden.

## Nicht gelöst
- Eine Seite, die du direkt besuchst, sieht immer eine öffentliche IP. Das ist technisch notwendig.  
- Ein sauberer WebRTC-Test garantiert nicht, dass es keine anderen Netzwerk-Leaks gibt (DNS, IPv6, Proxy-Regeln).  
- Wenn dein Gerät kompromittiert ist (Malware, Admin-Zugriff, Stalkerware), sind Browser-Schalter kaum wirksam. Sieh [Stalkerware-Verdacht](/szenarien/stalkerware-verdacht/) und [Verdacht: Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/).  
- Bei Zwang oder Kontrolle im Umfeld hilft WebRTC-Härtung allein nicht zuverlässig.

## Quellen
- [WebRTC: Real-Time Communication in Browsers – W3C](https://www.w3.org/TR/webrtc/)
- [RFC 8828: WebRTC IP Address Handling Requirements – IETF](https://datatracker.ietf.org/doc/rfc8828/)
- [RFC 8445: Interactive Connectivity Establishment (ICE) – RFC Editor](https://www.rfc-editor.org/rfc/rfc8445.html)
- [RTCIceCandidate – MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate)

## Weiter
- [Browser](/browser/)
- [WebRTC-Test](/tests/webrtc-test/)
- [IP-Leak-Test](/tests/ip-leak-test/)
- [VPN-Leaks](/vpn/leaks/)
- [IPv6-Leaks](/netzwerk/leaks/ipv6/)
- [Profil-Trennung im Browser](/browser/profile-trennung/)
