---
layout: "@/layouts/DocLayout.astro"
title: "Chromium-Browser privat einstellen: Tracking reduzieren"
url: "/browser/chromium/"
chapter: "Themen"
type: "guide"
format: "guide"
level:
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Chromium-Browser privat einstellen: Drittanbieter-Cookies, Werbeschalter, Berechtigungen und DNS. Mit Schnellstart, Prüfpunkten, Problemen und Grenzen."
---
Du nutzt einen Chromium-basierten Browser (auf Chromium-Basis, z. B. Chrome/Edge/Brave) – und trotzdem „kleben“ Werbung, Logins und Empfehlungen oft über viele Seiten hinweg. Das nervt. Und es ist riskant, weil Websites dich leichter wiedererkennen.

Hier stellst du deinen Browser so ein, dass er weniger Daten quer über Websites teilt. Am Ende hast du spürbar weniger Nachverfolgung (Tracking), ohne dass im Alltag ständig Logins kaputtgehen.

Sinnvoll, wenn du Chromium nutzt und Quer-Tracking reduzieren willst.  
Grenze: Wenn du in großen Konten angemeldet bist, bleibt Zuordnung oft möglich.
  
Stand: 2026-01-27.

## Kurzfazit
- Für die meisten reicht Weg A: Drittanbieter-Cookies begrenzen, Berechtigungen aufräumen, Profile trennen.
- Je strenger du wirst, desto häufiger brechen Logins, Bezahlen und eingebettete Inhalte.

## Ziel

Weg A: Quer-Tracking reduzieren, ohne viel Komfort zu verlieren.  
Weg B: Strenger bei Cookies, Daten beim Beenden und Erweiterungen, mit mehr Nebenwirkungen.  
Weg C: Maximale Trennung (Profile + Netz), höheres Bruch- und Nerv-Potenzial.

Stoppsignal: Wenn dein Browser durch Arbeit/Schule verwaltet wird (Richtlinien), bleib bei Weg A und ändere nur, was du sicher zurückstellen kannst.  
Aufwand + Komfortkosten: 10–25 Minuten; häufiger neu anmelden, mehr Abfragen, vereinzelt CAPTCHA-Hürden.

## Schnellstart (10 Minuten)

1. **Drittanbieter-Cookies einschränken (Cookies = kleine Speicherdateien)**
   1. Öffne die Einstellungen.
   2. Suche nach „Drittanbieter-Cookies“ oder „Cookies“.
   3. Stelle auf „blockieren“ oder „einschränken“ (nicht „alle Cookies blockieren“).
   4. Setze Ausnahmen nur für Seiten, die sonst nicht funktionieren (Login, Bezahlen).
   Bezeichnung kann abweichen – nutze die Suche nach: Drittanbieter-Cookies.  
   Eingebettete Inhalte und manche Logins können ohne Ausnahme zicken.  
   Du wirst über Werbenetzwerke hinweg seltener wiedererkannt.

2. **Website-Berechtigungen aufräumen (Standort, Kamera, Mikrofon, Benachrichtigungen)**
   1. Öffne „Website-Einstellungen“ oder „Website-Berechtigungen“.
   2. Stelle kritische Rechte auf „fragen“ oder „blockieren“ (vor allem Benachrichtigungen).
   3. Entferne alte „Zulassen“-Einträge, die du nicht mehr brauchst.
   Bezeichnung kann abweichen – nutze die Suche nach: Website-Einstellungen.  
   Manche Seiten fragen dann erneut nach Erlaubnis, das kann nerven.  
   Du reduzierst Dauerfreigaben und verhinderst unbeabsichtigte Datenabflüsse.

3. **Werbe-Schalter im Browser deaktivieren (falls vorhanden)**
   1. Suche nach „Datenschutz bei Anzeigen“, „Werbung“ oder „Anzeigen“.
   2. Deaktiviere Werbethemen, von Websites vorgeschlagene Werbung und Anzeigenmessung (wenn angeboten).
   3. Prüfe, ob die Schalter pro Profil gelten (bei mehreren Profilen wiederholen).
   Bezeichnung kann abweichen – nutze die Suche nach: Datenschutz bei Anzeigen.  
   Du siehst weiterhin Werbung, oft nur weniger „interessensbasiert“.  
   Du verhinderst, dass der Browser zusätzliche Werbe- und Messsignale aktiv mitsteuert.

4. **Verschlüsselte Namensauflösung prüfen (DNS über HTTPS)**
   1. Suche nach „Sicheres DNS“ oder „DNS über HTTPS“ (DNS = Namensauflösung).
   2. Wenn es aktiv ist: Lass „automatisch“ aktiv, wenn du keine speziellen Gründe hast.
   3. Wenn es Probleme gibt (Seiten laden nicht, WLAN-Anmeldung): testweise ausschalten.
   Bezeichnung kann abweichen – nutze die Suche nach: Sicheres DNS.  
   In manchen Netzen kann das stören (Hotel-WLAN, Firmennetz, Filter im Netzwerk).  
   DNS-Anfragen sind oft schwerer mitzulesen, weil sie verschlüsselt übertragen werden.

5. **Alltag und Logins trennen (zweites Profil oder Gastmodus)**
   1. Lege ein zweites Profil an: eins für „eingeloggt“, eins fürs normale Surfen.
   2. Nutze pro Profil eigene Lesezeichen und Verlauf.
   3. Wenn du nur kurz etwas brauchst: nutze den Gastmodus.
   Bezeichnung kann abweichen – nutze die Suche nach: Profil.  
   Du musst dich in zwei Profilen getrennt anmelden, das kostet Zeit.  
   Du verhinderst, dass Konto-Surfen und normales Surfen im gleichen Daten-Topf landen.

6. **Erweiterungen ausmisten und Rechte begrenzen**
   1. Öffne die Erweiterungsverwaltung.
   2. Deaktiviere oder lösche alles, was du nicht wirklich brauchst.
   3. Stelle bei den verbleibenden Erweiterungen „Zugriff auf Websites“ so eng wie möglich ein.
   4. Halte es schlank: lieber eine saubere Lösung als viele Add-ons (siehe [Erweiterungen: Sicherheit](/browser/erweiterungen-sicherheit/) und [Erweiterungen: Risiken](/browser/erweiterungen-risiken/)).
   Bezeichnung kann abweichen – nutze die Suche nach: Erweiterungen.  
   Manche Erweiterungen funktionieren dann nur noch auf ausgewählten Seiten.  
   Du reduzierst Datenabfluss und senkst das Risiko durch „zu mächtige“ Add-ons.

## Wege

### Weg A

1. Aktualisiere den Browser zuerst. Das schließt Lücken, kann aber Menüs oder Verhalten ändern.  
2. Schränke Drittanbieter-Cookies ein. Das reduziert Quer-Tracking, kann aber Logins brechen, bis du eine Ausnahme setzt.  
3. Lösche einmalig alte Cookies/Websitedaten nach der Umstellung. Das entfernt alte Zuordnungen, du wirst aber überall ausgeloggt.  
Bezeichnung kann abweichen – nutze die Suche nach: Browserdaten löschen.  
4. Stelle Benachrichtigungen auf „blockieren“ oder „fragen“. Das reduziert Spam-Popups, manche Seiten fragen dann öfter nach.  
5. Setze Kamera/Mikrofon/Standort standardmäßig auf „fragen“. Das verhindert Dauerfreigaben, Videokonferenzen brauchen dann eine Erlaubnis.  
6. Deaktiviere „Datenschutz bei Anzeigen“, falls vorhanden. Das mindert interessenbasierte Signale, Werbung bleibt trotzdem sichtbar.  
7. Lass „Sicheres DNS“ aktiv, wenn es keine Probleme macht. Das erschwert Mitlesen, kann aber in manchen WLANs stören.  
8. Trenne Profile konsequent (siehe [Profil-Trennung](/browser/profile-trennung/)). Das reduziert Vermischung, du pflegst dafür zwei „Browser-Welten“.

<details><summary>Weg B (Fortgeschritten)</summary>

1. Setze bei Drittanbieter-Cookies gezielte Ausnahmen statt „alles erlauben“. Das hält Tracking niedriger, kostet aber etwas Fehlersuche pro Website.  
2. Lösche Cookies/Websitedaten beim Beenden, wenn dein Browser das anbietet. Das verhindert lange Sitzungen, du meldest dich häufiger neu an.  
Bezeichnung kann abweichen – nutze die Suche nach: Daten beim Beenden löschen.  
3. Reduziere Vorschläge und Autovervollständigung (Adressleiste/Suche), wenn dich das stört. Das senkt Spuren am Gerät, Komfort geht verloren.  
Bezeichnung kann abweichen – nutze die Suche nach: Vorschläge.  
4. Halte Erweiterungen minimal und eng berechtigt. Das reduziert Datenabfluss, manche Features werden unpraktischer.  
5. Wenn du Werbung und Skripte stärker begrenzen willst: starte schlank (z. B. mit [uBlock Origin](/browser/ublock-origin/)), statt viele Add-ons zu stapeln.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

1. Nutze für sensible Recherchen ein eigenes Profil ohne Anmeldung und ohne Synchronisierung. Das trennt Identitäten besser, kostet aber Pflegeaufwand.  
2. Lösche beim Beenden konsequent Cookies/Websitedaten (mit wenigen Ausnahmen). Das senkt Langzeit-Tracking deutlich, Logins brechen häufiger.  
3. Nutze bei Bedarf ein separates Netzwerk (z. B. VPN oder anderes WLAN). Das reduziert IP-Bezug, kann aber Captive Portals und Streaming nerven (siehe [VPN: Wann sinnvoll?](/vpn/wann-sinnvoll/)).  
4. Ergänze bei heiklen Fällen Tor statt „noch strengerer Browser-Tricks“. Das schützt anders, ist aber langsamer und bricht häufiger Seiten (siehe [Tor](/netzwerk/tor/)).

Achtung: Je strenger die Trennung, desto häufiger brechen Logins, Bezahlen und eingebettete Inhalte.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob du seltener „sofort eingeloggte“ Dritt-Inhalte siehst (Widgets, Kommentarboxen, Eingebettetes).  
- Achte darauf, ob du nach der Umstellung häufiger neu anmelden musst, aber nur auf wenigen Seiten Ausnahmen brauchst.  
- Achte darauf, ob dein Browser-Setup im [Browser Check](/tests/browser-check/) weniger Warnungen auslöst.

<details><summary>Mehr Prüfungen</summary>

- Mit dem [Fingerprinting-Test](/tests/fingerprinting-test/) siehst du, ob dein Browser sehr „einzigartig“ wirkt. Das ist kein Beweis, aber ein Hinweis.  
- Wenn „Sicheres DNS“ aktiv ist: Ein [DNS-Leak-Test](/tests/dns-leak-test/) zeigt, welche DNS-Server sichtbar werden.  
- Wenn du oft Links aus Mails oder Messengern öffnest: [URL-Tracking erkennen & entfernen](/browser/url-tracking/) hilft gegen wiedererkennbare Parameter.

</details>

## Probleme & Lösungen

- **Problem:** Nach dem Einschränken von Drittanbieter-Cookies klappt der Login nicht mehr.  
  **Lösung:** Setze eine Ausnahme nur für die betroffene Seite (häufig: eingebettete Logins oder Bezahldienste).

- **Problem:** Die WLAN-Anmeldeseite im Hotel lädt nicht richtig.  
  **Lösung:** „Sicheres DNS“ testweise deaktivieren und danach wieder aktivieren.

- **Problem:** Du bekommst ständig Benachrichtigungs-Popups.  
  **Lösung:** Benachrichtigungen global auf „blockieren“ stellen und alte Freigaben löschen.

- **Problem:** Kamera oder Mikrofon funktionieren in der Videokonferenz nicht.  
  **Lösung:** Erlaube die Berechtigung nur für diese Website und entziehe sie danach wieder.

- **Problem:** Nach dem Aufräumen bist du überall ausgeloggt.  
  **Lösung:** Das ist normal nach dem Löschen von Cookies; künftig lieber mit Ausnahmen statt pauschalem Löschen arbeiten.

- **Problem:** Du findest die Schalter im Menü nicht.  
  **Lösung:** Nutze die Suche in den Einstellungen mit den Begriffen aus dem Schnellstart; Chromium-Browser benennen Menüs unterschiedlich.

## Nicht gelöst

- Deine IP-Adresse bleibt für Websites sichtbar – dafür brauchst du Netzwerkmaßnahmen.  
- Wenn du in Konten angemeldet bist, können Anbieter dich oft trotzdem zuordnen (auch ohne Drittanbieter-Cookies).  
- Fingerabdruck (Fingerprinting) lässt sich in Chromium-Browsern oft nur begrenzt reduzieren, je nach Website unterschiedlich (siehe [Fingerprinting](/browser/fingerprinting/)).  
- Unternehmensnetze mit HTTPS-Inspektion können Inhalte mitlesen oder filtern, trotz „sicheren“ Schaltern (siehe [HTTPS-Inspektion](/netzwerk/https-inspektion/)).  
- Ein kompromittiertes Gerät, Admin-Zugriff oder Stalkerware hebeln Browser-Einstellungen aus.  
- Erweiterungen können selbst Daten sammeln oder Seiteninhalte lesen – Browser-Settings ersetzen keine Erweiterungs-Hygiene.

## Quellen

- [Chrome-Hilfe: Cookies löschen, zulassen und verwalten](https://support.google.com/chrome/answer/95647)
- [Chrome-Hilfe: Berechtigungen für Websites ändern](https://support.google.com/chrome/answer/114662)
- [Chrome-Hilfe: Sicheres DNS verwalten](https://support.google.com/chrome/answer/10468685)
- [Chrome-Hilfe: Datenschutz bei Anzeigen verwalten](https://support.google.com/chrome/answer/13355898)
- [RFC 8484: DNS Queries over HTTPS (DoH)](https://www.rfc-editor.org/rfc/rfc8484)
- [MDN: HTTP-Cookies](https://developer.mozilla.org/de/docs/Web/HTTP/Cookies)

## Weiter

- [Browser](/browser/)
- [Browser: Schnellstart](/browser/schnellstart/)
- [Profil-Trennung](/browser/profile-trennung/)
- [Erweiterungen: Sicherheit](/browser/erweiterungen-sicherheit/)
- [URL-Tracking erkennen & entfernen](/browser/url-tracking/)
- [DNS: Schnellstart](/dns/schnellstart/)
