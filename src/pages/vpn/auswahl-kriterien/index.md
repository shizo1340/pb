---
layout: "@/layouts/DocLayout.astro"
title: "VPN-Auswahl: Kriterien für Datenschutz & Alltag"
url: "/vpn/auswahl-kriterien/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "So prüfst du VPN-Anbieter: Kriterien für Datenschutz, Technik und Alltag. Mit klaren Checks zu Leaks, Split-Tunneling sowie Grenzen und Stolpersteinen."
---
Ein VPN klingt oft nach „einmal einschalten, alles sicher“. In der Praxis nerven dann Leaks, gesperrte Dienste (Streaming/Banking) oder ein trügerisches Sicherheitsgefühl.

Ziel dieser Seite ist eine ruhige, prüfbare Auswahl: Welche Kriterien du wirklich brauchst – und welche Versprechen du nicht einkaufen solltest.

Sinnvoll, wenn du deine Verbindung in fremden Netzen oder vor dem Internetanbieter abschirmen willst.  
Wichtigste Grenze: Ein VPN macht dich nicht automatisch anonym und ersetzt keine Gerätesicherheit.

## Kurzfazit
- Wenn du nur 10 Minuten hast: VPN korrekt einrichten, Leaks testen und Split‑Tunneling vermeiden.
- Wichtig: VPN ist kein Anti‑Tracking‑Allheilmittel – nutze es für die passenden Risiken.

## Ziel

Weg A: In 15 Minuten die wichtigsten Kriterien festlegen und grob filtern.  
Weg B: Mit wenigen Zusatzprüfungen die üblichen Marketing-Aussagen abklopfen.  
Weg C: Technische Detailchecks, wenn du genau wissen willst, was wirklich passiert.

Stoppsignal: Wenn du „Anonymität gegenüber Behörden“ oder Schutz vor Schadsoftware erwartest, ist ein normales VPN nicht das richtige Mittel.  
Aufwand + Komfortkosten: 15–60 Minuten Auswahl plus 10 Minuten Tests; möglich sind geringere Geschwindigkeit, mehr Akkuverbrauch und Sperren bei einzelnen Diensten.

## Schnellstart (15 Minuten)
1) Entscheide, wofür du das VPN einsetzen willst  
1. Notiere deinen Hauptgrund: öffentliches WLAN, Schutz vor dem Internetanbieter, Geosperren umgehen, Arbeit/Uni-Zugang.
2. Schreibe dazu, was nicht passieren darf: Banking soll immer gehen, Videokonferenzen dürfen nicht abbrechen, Spiele sollen stabil bleiben.
3. Lege fest, ob du Teil-Tunnelung (Split-Tunneling) brauchst: nur bestimmte Apps über das VPN, der Rest direkt.
Hinweis: Teil-Tunnelung senkt oft den Schutz, weil ein Teil des Verkehrs außerhalb läuft.  
Nutzen: Du kaufst nicht „zu viel“ – und stolperst später seltener über Alltagssperren.

2) Prüfe, wer den Dienst betreibt und wie er Geld verdient  
4. Suche im Impressum/Anbieterangaben nach Betreiber, Sitz und Kontakt.
5. Lies in der Datenschutzerklärung, welche Daten „zur Bereitstellung“ und „zur Fehleranalyse“ genannt werden.
6. Prüfe die Bezahlmodelle: Abo, Testzeitraum, Rückerstattung, Kündigungsweg.
Hinweis: Kostenlos wirkt bequem, bezahlt wird dann oft mit Daten oder Werbung.  
Nutzen: Du senkst das Risiko, bei einem intransparenten Betreiber zu landen.

3) Prüfe, was zur Protokollierung wirklich gesagt wird  
7. Suche in den Angaben nach „Protokoll“, „Verbindungsdaten“, „Diagnose“ oder „Missbrauchsschutz“.
8. Achte darauf, ob Unterschiede erklärt werden: Verbindungszeit, übertragenes Datenvolumen, genutzter Server, IP-Adresse.
9. Wenn es Prüfberichte gibt: Schau, ob sie öffentlich sind und was konkret geprüft wurde.
Hinweis: „Keine Protokolle“ ist ohne Details schwer überprüfbar; wichtiger sind klare, überprüfbare Aussagen.  
Nutzen: Du erkennst, ob die Versprechen überhaupt ausformuliert sind.

4) Prüfe technische Mindestpunkte, die Leaks wahrscheinlicher oder seltener machen  
10. Schau nach, ob moderne VPN-Protokolle unterstützt werden (z. B. WireGuard oder OpenVPN).
11. Achte auf eine Netzwerksperre (Kill Switch): Sie blockiert Datenverkehr, wenn das VPN abbricht.
12. Prüfe, ob IPv6 unterstützt oder sauber behandelt wird; sonst sind IPv6-Leaks möglich.
13. Prüfe, wie DNS gelöst wird: ideal ist DNS über den VPN-Tunnel, nicht über den Internetanbieter.
Hinweis: Bezeichnung kann abweichen – nutze die Suche nach: Netzwerksperre, Kill Switch, IPv6, DNS.  
Nutzen: Du reduzierst typische Leak-Ursachen (DNS/IP/IPv6) und Abbrüche im Hintergrund.

5) Mache vor einer langfristigen Bindung zwei kurze Praxistests  
14. Verbinde dich und öffne einen IP-Leak-Test, danach einen DNS-Leak-Test.
15. Teste zusätzlich im Browser einen WebRTC-Test, wenn du viel im Browser telefonierst oder Video nutzt.
16. Prüfe Banking/Streaming kurz im Alltag, nicht nur im Testfenster.
Hinweis: Sperren bei Streaming/Banking sind häufig und hängen vom Dienst und Standort ab.  
Nutzen: Du kaufst nicht „blind“ und erkennst frühe Dealbreaker.

## Wege

### Weg A (alltagstauglich)

1. Schreibe deinen Hauptzweck in einen Satz (z. B. „öffentliches WLAN im Café“ oder „DNS/IP vor dem Internetanbieter verbergen“).  
2. Streiche Zwecke, die ein VPN nicht leisten kann (z. B. „mich komplett anonym machen“).  
3. Lege fest, auf welchen Geräten du es brauchst (Handy, Laptop, Router) und ob mehrere Geräte gleichzeitig wichtig sind.  
4. Prüfe Betreiberangaben: Wer ist verantwortlich, wie erreichst du Support, gibt es klare Vertragsinfos?  
5. Lies die Aussagen zur Protokollierung und markiere unklare Begriffe („Diagnose“, „Missbrauchsschutz“).  
6. Prüfe, ob Teil-Tunnelung (Split-Tunneling) nötig ist – und ob du die Risiken akzeptierst.  
7. Prüfe Mindesttechnik in den Angaben: unterstützte Protokolle, Netzwerksperre (Kill Switch), Umgang mit IPv6, DNS über den Tunnel.  
8. Mache vor einer längeren Laufzeit Tests auf deinem wichtigsten Gerät: IP, DNS, WebRTC und ein kurzer Banking/Streaming-Check.  
9. Entscheide dich erst danach für Laufzeit und Zahlungsweg.

<details><summary>Weg B (Fortgeschritten)</summary>

- Suche nach öffentlich nachvollziehbaren Prüfberichten (Sicherheitsprüfung/Datenschutzprüfung) und lies, was tatsächlich im Umfang stand.  
- Prüfe, ob es nachvollziehbare Transparenzinfos gibt: Kontaktwege, Sicherheitsmeldungen, klare Update-Politik für Apps.  
- Achte auf Details zu Serverbetrieb: eigene Server vs. angemietet, Umgang mit Zugriffsrechten (wenn beschrieben).  
- Prüfe, ob die Apps unnötige Berechtigungen verlangen (z. B. Standort ohne erkennbaren Grund).  
- Teste Stabilität: Videokonferenz oder längerer Download und dabei kurz zwischen WLAN und Mobilfunk wechseln.  
- Prüfe, ob Teil-Tunnelung sauber erklärbar ist: Welche Apps laufen außerhalb, und was bedeutet das für DNS/IP?
</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.
- Prüfe, ob die Netzwerksperre (Kill Switch) auch bei Schlafmodus/Netzwechsel greift: kurzer Flugmodus-Test und danach sofortiger IP/DNS-Check.  
- Prüfe IPv6 gezielt: einmal mit IPv6 aktiv und einmal deaktiviert (je nach Gerät/Version) und vergleiche die Ergebnisse im Leak-Test.  
- Prüfe DNS-Verhalten: wiederhole den DNS-Test nach Serverwechsel im VPN und nach Browser-Neustart.  
- Prüfe Teil-Tunnelung mit einem klaren Szenario: eine App im VPN, eine außerhalb, danach IP/DNS je App vergleichen (wenn dein System das getrennt zeigt).  
- Prüfe, ob du ein eigenes DNS-Konzept brauchst (z. B. DNS über HTTPS oder DNS über TLS) und ob es mit dem VPN zusammen sauber funktioniert.  
Achtung: Diese Tests können Verbindungen kurzfristig unterbrechen und Fehlalarme erzeugen.
</details>

## So merkst du, dass es wirkt

- Achte darauf, ob sich deine sichtbare IP-Adresse im IP-Test ändert, wenn das VPN verbunden ist.  
- Achte darauf, ob im DNS-Test nicht dein Internetanbieter als DNS-Server auftaucht.  
- Achte darauf, ob der WebRTC-Test keine unerwarteten lokalen IP-Adressen nach außen zeigt (je nach Browser/Version unterschiedlich).

<details><summary>Mehr Prüfungen & Hinweise</summary>

- Wiederhole die Tests nach einem Netzwechsel (WLAN → Mobilfunk). Viele Probleme zeigen sich erst dann.  
- Wenn du Teil-Tunnelung nutzt: prüfe mindestens einmal, welche Apps wirklich außerhalb laufen.  
- Wenn du IPv6-Leaks siehst: das kann am System, am VPN oder an Router-Einstellungen liegen. Notiere Gerät und Version, bevor du Schlussfolgerungen ziehst.  
- Wenn Streaming/Banking blockiert: teste einen anderen Standort im VPN und prüfe, ob es nur im Browser oder auch in der App passiert.
</details>

## Probleme & Lösungen

- **Problem:** Der DNS-Test zeigt deinen Internetanbieter.  
  **Lösung:** Prüfe, ob DNS über den VPN-Tunnel genutzt wird; wenn möglich DNS-Option im VPN aktivieren oder einen anderen Serverstandort testen.  
  (häufiger Grund: System-DNS bleibt aktiv oder Teil-Tunnelung umgeht DNS-Schutz)

- **Problem:** Die Verbindung bricht kurz ab und Apps senden trotzdem Daten.  
  **Lösung:** Prüfe, ob eine Netzwerksperre (Kill Switch) vorhanden und aktiviert ist; teste danach erneut mit Flugmodus/Netzwechsel.  
  (häufiger Grund: Netzwechsel, Energiesparen, instabile Funkverbindung)

- **Problem:** Streaming oder Banking sperrt den Zugriff.  
  **Lösung:** Teste einen anderen Standort im VPN oder nutze das VPN nur bei Bedarf; erwarte keine dauerhafte Umgehung.  
  (häufiger Grund: IP-Sperrlisten, Risikoerkennung, ungewöhnliche Standorte)

- **Problem:** Akkuverbrauch steigt deutlich.  
  **Lösung:** Prüfe, ob das VPN dauerhaft laufen muss; nutze bei Bedarf Teil-Tunnelung vorsichtig oder setze Zeitfenster.  
  (häufiger Grund: Dauerhafte Verschlüsselung, häufige Neuverbindungen)

- **Problem:** Webseiten sind langsam oder Videokonferenzen ruckeln.  
  **Lösung:** Wechsle den Standort, teste ein anderes Protokoll (wenn angeboten) und prüfe, ob nur ein bestimmtes Netz betroffen ist.  
  (häufiger Grund: Überlastete Standorte, lange Wege, instabile WLANs)

- **Problem:** WebRTC zeigt weiterhin IP-Details.  
  **Lösung:** Prüfe Browser-Einstellungen rund um WebRTC bzw. IP-Adressweitergabe; wiederhole den Test nach Browser-Neustart.  
  (häufiger Grund: Browser gibt lokale Adressen preis, je nach Version unterschiedlich)

## Nicht gelöst

- Ein VPN schützt nicht vor Schadsoftware, unsicheren Downloads oder gefährlichen Browser-Erweiterungen.  
- Ein VPN verhindert kein Verfolgen durch Anmeldekonten, Werbe-Tracker oder Fingerabdrücke im Browser.  
- Ein VPN verschiebt Vertrauen: Der VPN-Anbieter kann den Verkehr sehen, den er weiterleitet (je nach Verschlüsselung bis zum Ziel).  
- Gegen ein kompromittiertes Gerät, Admin-Zugriff, MDM-Profile oder Stalkerware hilft ein VPN kaum – hier ist Gerätesicherheit entscheidend.  
- Gegen gezielte Angriffe im gleichen Netzwerk (z. B. manipulierte WLANs) hilft ein VPN oft, aber nicht gegen jede Form von Betrug oder Phishing.

## FAQ

**Brauche ich wirklich ein VPN?**

Nicht immer. VPNs helfen v. a. gegen unsichere WLANs und zur Trennung von Netzwerken, sind aber kein Tracking-Allheilmittel.

**Warum leakt IP/DNS trotz VPN?**

Oft liegt es an Split-Tunneling, IPv6/WebRTC oder falschen DNS-Einstellungen. Prüfe Leaks und setze die passenden Fixes.

**Was ist mit „No-Logs“?**

Behauptungen sind nicht beweisbar. Achte auf transparente Technik, Audits, klare Rechtslage und nachvollziehbare Reports.

## Quellen

- [W3C: WebRTC 1.0](https://www.w3.org/TR/webrtc/)  
- [MDN Web Docs: WebRTC API](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)  
- [IETF RFC 4301: Security Architecture for the Internet Protocol](https://www.rfc-editor.org/rfc/rfc4301)  
- [IETF RFC 7296: Internet Key Exchange Protocol Version 2 (IKEv2)](https://www.rfc-editor.org/rfc/rfc7296)  
- [WireGuard: Protocol & Paper](https://www.wireguard.com/papers/wireguard.pdf)

## Weiter

- [VPN: Schnellstart](/vpn/schnellstart/)  
- [VPN: Leaks](/vpn/leaks/)  
- [VPN: Wann sinnvoll?](/vpn/wann-sinnvoll/)  
- [DNS-Leak-Test](/tests/dns-leak-test/)  
- [WebRTC-Test](/tests/webrtc-test/)
