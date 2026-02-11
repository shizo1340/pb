---
layout: "@/layouts/DocLayout.astro"
title: "WebRTC-Leak vermeiden: IP-Adresse im Browser schützen"
url: "/netzwerk/leaks/webrtc/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "WebRTC-Leak vermeiden: IP-Leaks im Browser trotz VPN stoppen – Schnellstart, Tests und typische Fehler."
---
Wenn du ein VPN nutzt, erwartest du: Websites sehen nur die VPN-IP.
Bei einem WebRTC-Leak kann trotzdem deine echte IP oder eine interne Adresse auftauchen.

Das nervt, weil du es oft erst merkst, wenn du schon verbunden bist.
Und es ist riskant, weil IP-Adressen grob Standort und Anschluss zuordnen können.

Sinnvoll, wenn du VPN/Proxy nutzt, in öffentlichen WLANs surfst oder WebRTC-Tests nicht „grün“ werden.
Grenze: Wenn dein Gerät kompromittiert ist (z. B. Stalkerware/Admin-Zugriff), helfen diese Schritte nur begrenzt.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

Weg A: Schnell prüfen, Berechtigungen aufräumen, realistische Einstellungen wählen.  
Weg B: WebRTC im Browser gezielt einschränken, ohne alles zu zerbrechen.  
Weg C: Richtlinien oder Netzwerk-Ebene für kontrollierte Umgebungen (Admin-Modus).

Stoppsignal: Wenn Videotelefonie/Meetings nicht mehr gehen, geh eine Stufe zurück.  
Aufwand: 10–20 Minuten. Komfortkosten: Video/Audio kann eingeschränkt sein.

## Schnellstart (10 Minuten)
1) WebRTC-Leak einmal sauber testen
1. VPN/Proxy wie gewohnt aktivieren (falls du es nutzt).
2. Privates Fenster öffnen (damit Erweiterungen/Cookies weniger reinfunken).
3. Testseite öffnen: [WEBRTC-Test](/tests/webrtc-test/).
4. Ergebnis notieren (öffentliche IP, lokale/IPv6-Adressen).
5. Kurz ohne VPN testen und vergleichen.

Hinweis: Manche Tests zeigen interne Adressen (z. B. 192.168.x.x). Das ist nicht „von außen erreichbar“, kann aber fürs Profiling reichen.  
Nebenwirkung: Du musst kurz vergleichen und notieren. Das kostet ein paar Minuten.  
Nutzen: Du hast einen klaren Vorher-Nachher-Vergleich und siehst Veränderungen sofort.

2) Browser, Betriebssystem und Router aktualisieren
6. Browser-Updates installieren und neu starten.
7. Betriebssystem-Updates installieren (je nach Gerät/Version).
8. Router-Firmware prüfen und aktualisieren.
9. Danach den WebRTC-Test erneut ausführen.

Hinweis: Nach Updates kann es zu Abmeldungen kommen (Cookies/Sitzungen).  
Nebenwirkung: Ein Neustart kann laufende Arbeit kurz unterbrechen.  
Nutzen: Schutzmechanismen rund um WebRTC werden oft über Updates verbessert.

3) Kamera-/Mikrofon-Rechte für Webseiten ausmisten
10. In den Browser-Einstellungen „Website-Berechtigungen“ öffnen.
11. Kamera/Mikrofon: alte Einträge entfernen (vor allem Meeting-/Chat-Seiten, die du selten nutzt).
12. Für neue Seiten nur „fragen“ bzw. „nur beim Besuch“ zulassen.
13. Danach WebRTC-Test erneut ausführen.

Bezeichnung kann abweichen – nutze die Suche nach: Kamera, Mikrofon, Berechtigungen.  
Hinweis: Beim nächsten Anruf musst du ggf. wieder erlauben.  
Nebenwirkung: Du bekommst wieder Nachfragen, wenn du eine Seite zum ersten Mal nutzt.  
Nutzen: Weniger dauerhaft vertraute Seiten können WebRTC nicht „einfach so“ aktiv nutzen.

4) WebRTC-Einstellung im Browser finden (falls vorhanden)
14. Browser-Einstellungen öffnen.
15. Nach „WebRTC“ suchen.
16. Wenn es eine Option zur IP-Behandlung gibt: restriktiver einstellen.
17. Danach WebRTC-Test erneut ausführen.
18. Wenn Videoseiten nicht mehr funktionieren: Einstellung zurücknehmen.

Bezeichnung kann abweichen – nutze die Suche nach: WebRTC.  
Hinweis: Strenge WebRTC-Einstellungen können Video/Audio stören oder Verbindungen langsamer machen.  
Nebenwirkung: Manche Dienste brauchen Umwege (Relay) und werden schlechter oder brechen ab.  
Nutzen: Senkt die Chance, dass WebRTC eine direkte Verbindung „am VPN vorbei“ nutzt.

5) Basis im Netz: Zuhause sauber, öffentliches WLAN vorsichtig
19. Zuhause: WLAN-Verschlüsselung mindestens WPA2, wenn möglich WPA3 aktivieren.
20. Gäste-WLAN nutzen, damit Besuch/Smart-Geräte getrennt sind: [Gäste-WLAN](/netzwerk/gaeste-wlan/).
21. Router-Sicherheit prüfen: [Router-Sicherheit](/netzwerk/router-sicherheit/).
22. Öffentliches WLAN: erst Anmeldung/Captive Portal erledigen, dann VPN aktivieren und testen.
23. Bei unklaren Netzwerknamen lieber Mobil-Hotspot statt „irgendein Gratis-WLAN“.

Hinweis: Captive Portals funktionieren oft nicht durch ein VPN hindurch.  
Nebenwirkung: Ein Hotspot kann Datenvolumen kosten.  
Nutzen: Weniger Risiko durch falsche Hotspots und weniger Nebenursachen, die wie ein Leak wirken.

## Wege

### Weg A

1) Mach einen Referenztest: [WEBRTC-Test](/tests/webrtc-test/) (einmal mit, einmal ohne VPN/Proxy).  
Nutzen: Du siehst klar, was „Leak“ bedeutet. Nebenwirkung: Du musst Werte kurz dokumentieren.

2) Aktualisiere Browser und Betriebssystem. Prüfe Router-Updates.  
Nutzen: Du bekommst aktuelle Schutzfunktionen. Nebenwirkung: Neustarts und kurze Unterbrechungen sind möglich.

3) Räume Website-Berechtigungen für Kamera/Mikrofon auf und erteile sie nur bei Bedarf.  
Nutzen: Weniger dauerhafte Freigaben reduzieren Angriffsfläche. Nebenwirkung: Du musst öfter einmalig erlauben.

4) Trenne „Meetings“ vom Alltag über ein eigenes Profil: [Profil-Trennung](/browser/profile-trennung/).  
Nutzen: Videoseiten mischen sich weniger in dein normales Surfprofil. Nebenwirkung: Du wechselst häufiger das Profil.

5) Wenn der Test IPv6 zeigt: prüfe, ob dein VPN IPv6 mit absichert. Behandle das zuerst: [IPv6](/netzwerk/ipv6/).  
Nutzen: Du beseitigst eine häufige Leak-Ursache. Nebenwirkung: Je nach Setup kann IPv6 eingeschränkt werden.

6) Wiederhole den WebRTC-Test nach jeder Änderung und notiere, was sich verbessert oder verschlechtert.  
Nutzen: Du findest die kleinste wirksame Änderung. Nebenwirkung: Das kostet ein paar Extra-Minuten.

<details><summary>Weg B (Fortgeschritten)</summary>

1) Nutze konsequent getrennte Profile: eins für Meetings/Telefonie, eins fürs normale Surfen.  
Nutzen: Du reduzierst Seiteneffekte. Nebenwirkung: Mehr Profil-Wechsel im Alltag.

2) Wenn dein Browser eine WebRTC-Option zur IP-Behandlung anbietet, wähle die restriktivere Variante und teste danach.  
Nutzen: Leaks werden oft direkt reduziert. Nebenwirkung: Manche Video-Dienste brauchen dann Ausnahmen.

3) Wenn es keine sichtbare Option gibt, „entschärfe“ WebRTC über Rechte: Kamera/Mikrofon nicht dauerhaft erlauben.  
Nutzen: Weniger dauerhafte Nutzungsmöglichkeiten. Nebenwirkung: Wiederkehrende Nachfragen beim Start von Anrufen.

4) Prüfe IPv6 als häufige Nebenursache bei „VPN an, trotzdem IP sichtbar“ und teste gezielt: [IP-Leak-Test](/tests/ip-leak-test/).  
Nutzen: Du siehst, ob es ein allgemeines IP-Leak ist. Nebenwirkung: Tests können je nach Netz schwanken.

5) Wenn du Erweiterungen nutzt, die WebRTC beeinflussen: halte die Zahl klein und prüfe Berechtigungen kritisch: [Erweiterungen: Risiken](/browser/erweiterungen-risiken/).  
Nutzen: Weniger Angriffsfläche durch Add-ons. Nebenwirkung: Komfortfunktionen können fehlen.

<details><summary>Beispiel: Browser mit WebRTC-IP-Richtlinie</summary>

Manche Browser bieten eine Option, die sinngemäß festlegt, wie WebRTC Netzwerk-Schnittstellen nutzt.
Ziel ist oft: lokale/private Schnittstellen meiden oder nicht-proxisiertes UDP unterbinden.

Hinweis: Namen und Position können sich je nach Browser/Version ändern. Nutze die Suche und teste danach.
</details>

</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.

1) Setze Regeln zentral (Richtlinien/Verwaltung), wenn du Geräte verwaltest (z. B. in Organisationen).  
Nutzen: Einheitliche, prüfbare Einstellungen. Nebenwirkung: Falsche Defaults betreffen viele Nutzer gleichzeitig.

2) Erzwinge eine WebRTC-Policy, die lokale Adressen möglichst nicht preisgibt, und dokumentiere die Entscheidung.  
Nutzen: Weniger „Überraschungen“ bei Tests. Nebenwirkung: Videodienste brauchen ggf. Support-Aufwand.

3) Lege fest, wie mit IPv6 umgegangen wird (voll durch Tunnel oder konsequent deaktiviert) und teste beides.  
Nutzen: Klarer, reproduzierbarer Zustand. Nebenwirkung: IPv6-Abschaltung kann Nebenwirkungen im Netz haben.

4) Prüfe QUIC/HTTP-3 in deinem Umfeld, wenn Testergebnisse schwanken, und teste einmal ohne QUIC: [QUIC](/netzwerk/quic/).  
Nutzen: Du isolierst eine mögliche Ursache für wechselnde Pfade. Nebenwirkung: Ohne QUIC kann es langsamer sein.

Achtung: Zu harte Regeln können Videodienste vollständig brechen oder die Qualität deutlich verschlechtern.
</details>

## So merkst du, dass es wirkt

- Achte darauf, ob der WebRTC-Test im VPN-Modus nur noch die VPN-Ausgangs-IP zeigt, nicht deine Anschluss-IP.
- Achte darauf, ob statt deiner lokalen IP (z. B. 192.168.x.x) nur noch anonymisierte Werte auftauchen oder gar nichts Lokales.
- Achte darauf, ob Anrufe/Meetings weiterhin starten und stabil bleiben.

<details><summary>Mehr Prüfungen & Hinweise</summary>

- Wenn WebRTC „grün“ ist, aber andere Leaks bleiben: prüfe zusätzlich [DNS-Leak-Test](/tests/dns-leak-test/) und [IP-Leak-Test](/tests/ip-leak-test/).
- Wenn nur im öffentlichen WLAN Probleme auftreten: lies [Sicher im öffentlichen WLAN](/netzwerk/public-wlan/) und wiederhole Tests dort.
- Wenn Ergebnisse je nach Seite schwanken: teste im privaten Fenster und prüfe Erweiterungen: [Browser-Erweiterungen absichern](/browser/erweiterungen-sicherheit/).
- Wenn du vermutest, dass nicht nur WebRTC das Problem ist: starte bei [Netzwerk-Leaks](/netzwerk/leaks/).

</details>

## Probleme & Lösungen

- **Problem:** Der Test zeigt trotz VPN deine echte öffentliche IP.  
  **Lösung:** Prüfe, ob das VPN wirklich aktiv ist und ob es IPv6 mit absichert. Teste im privaten Fenster erneut.

- **Problem:** Der Test zeigt lokale Adressen (z. B. 192.168.x.x) und du willst das nicht.  
  **Lösung:** Entferne dauerhafte Kamera/Mikrofon-Berechtigungen und suche nach einer WebRTC-Option zur IP-Behandlung.

- **Problem:** Videomeetings gehen nach der Änderung nicht mehr.  
  **Lösung:** Stelle die WebRTC-Einstellung weniger strikt oder nutze ein separates Profil nur für Meetings.

- **Problem:** Im Hotel/Flughafen öffnet sich die Anmeldeseite (Captive Portal) nicht.  
  **Lösung:** VPN kurz deaktivieren, WLAN verbinden, Anmeldung abschließen, dann VPN wieder aktivieren und testen.

- **Problem:** Du siehst mehrere WLANs mit gleichem Namen („FreeWiFi“ usw.).  
  **Lösung:** Nicht verbinden oder den Namen beim Betreiber prüfen. Im Zweifel Mobil-Hotspot nutzen.

- **Problem:** Testergebnisse schwanken, obwohl du nichts geändert hast.  
  **Lösung:** Teste in einem frischen privaten Fenster. Prüfe Erweiterungen und teste QUIC/HTTP-3 einmal aus.

## Nicht gelöst

- WebRTC braucht für Verbindungen immer irgendeine erreichbare IP. Ziel ist meist „VPN-IP statt Anschluss-IP“, nicht „unsichtbar“.
- Ein WebRTC-Test ist kein kompletter Datenschutztest: Fingerprinting, Cookies und Werbeprofile bleiben eigene Baustellen.
- Ein kompromittiertes Gerät (Admin-Zugriff, Stalkerware, manipulierte Erweiterungen) kann Ergebnisse aushebeln und Daten anders abgreifen.
- Falsche Hotspots können dich trotz „korrekter“ WebRTC-Einstellung täuschen (z. B. über Phishing-Portale).
- Split-Tunneling kann dazu führen, dass WebRTC je nach App/Profil am Tunnel vorbei läuft.

## FAQ

**Was ist der häufigste Fehler?**

Unsichere Router-Defaults und fehlende Updates. Danach: Leaks (DNS/IPv6/WebRTC) und Gastnetz fehlt.

**Hilft Firewall immer?**

Sie ist wichtig, aber ersetzt keine Updates und keinen sicheren Router. Nutze sie als Schicht, nicht als Wunder.

**Public WLAN – was tun?**

Vermeide sensible Logins, nutze HTTPS, ggf. VPN, und deaktiviere automatische Verbindungen.

## Quellen

- [Einführung in WebRTC-Protokolle (STUN/TURN) – MDN](https://developer.mozilla.org/de/docs/Web/API/WebRTC_API/Protocols)
- [Private IP addresses in ICE candidates replaced by mDNS – discuss-webrtc](https://groups.google.com/g/discuss-webrtc/c/6stQXi72BEU)
- [privacy.network: webRTCIPHandlingPolicy – MDN](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/privacy/network)
- [Brave-Hilfe: Privatsphäre-Einstellungen und „WebRTC IP-Behandlungsrichtlinie“](https://support.brave.app/hc/de/articles/360017989132-Wie-kann-ich-meine-Privatsph%C3%A4re-Einstellungen-%C3%A4ndern)
- [BSI: Schritt für Schritt zum Gäste-WLAN](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Router-WLAN-VPN/Schritt-fuer-Schritt-zum-Gaeste-WLAN/Schritt-fuer-Schritt-zum-Gaeste-WLAN_node.html)
- [Google: Captive Portals in öffentlichen WLANs](https://support.google.com/chrome/a/answer/16216153?hl=de)

## Weiter

- [WEBRTC-Test](/tests/webrtc-test/)
- [Netzwerk-Leaks](/netzwerk/leaks/)
- [IPv6-Leaks verstehen und vermeiden](/netzwerk/leaks/ipv6/)
- [VPN-Leaks vermeiden](/vpn/leaks/)
- [Sicher im öffentlichen WLAN](/netzwerk/public-wlan/)
- [WebRTC-Leaks vermeiden](/browser/webrtc/)
