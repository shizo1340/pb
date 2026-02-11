---
layout: "@/layouts/DocLayout.astro"
title: "Messung ohne Cookies reduzieren: Schritte & Checks"
url: "/tracking/messung-ohne-cookies/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Messung ohne Cookies erkennen und Tracking senken: Browser-Speicher leeren, Profile trennen, Werbe-ID begrenzen und UTM-Links bereinigen – inkl. Checks."
---
Du lehnst Cookie-Banner ab, wirst aber trotzdem wiedererkannt. Werbung wirkt „zu passend“. Empfehlungen folgen dir. Manche Seiten scheinen dich sofort einzuordnen.

Das passiert oft durch Messung ohne Cookies. Apps nutzen Gerätekennungen (z. B. die Werbe-ID). Websites speichern Daten im Browser-Speicher. Fingerprinting kann dich über Merkmale wiedererkennen.

Ziel: Du reduzierst Nachverfolgung im Alltag spürbar, ohne ständig alles kaputt zu machen. Du erkennst außerdem, was realistisch ist und was nicht.

Sinnvoll, wenn du Cookies ablehnst, aber dich weiter „verfolgt“ fühlst.  
Grenze: Wenn du eingeloggt bist oder Messung serverseitig läuft, bleibt immer etwas übrig.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

Weg A: Alltagstauglich reduzieren (Browser-Speicher, Links, App-Tracking).  
Weg B: Trennung & strengere Regeln, ohne dauerhaft alles zu brechen.  
Weg C: Profi-Ansatz auf Geräte-/Netzwerkebene mit klaren Nebenwirkungen.

Stoppsignal: Wenn du den Verdacht hast, dass dein Gerät überwacht oder manipuliert ist, starte mit [Verdacht: Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/) oder [Stalkerware-Verdacht](/szenarien/stalkerware-verdacht/).

Aufwand und Komfortkosten: 10–30 Minuten, danach gelegentlich Pflege. Manche Logins und Seiteneinstellungen gehen verloren.

## Schnellstart (10 Minuten)
1) Links nicht im App-internen Browser öffnen  
1. Öffne Links nach Möglichkeit im Standard-Browser (Teilen → im Browser öffnen).
2. Wenn eine App Links intern öffnet: kopiere den Link und füge ihn im Browser ein.
3. Meide „Weiter in App“, wenn du nur lesen willst.
Das senkt die Verknüpfung zwischen App-Konto, Gerätekennung und Web-Sitzung.  
Dafür ist es ein zusätzlicher Schritt und manche Apps nerven mit Hinweisen.

2) Website-Daten für „auffällige“ Seiten löschen  
4. Öffne die Browser-Einstellungen und suche nach gespeicherten Website-Daten.
5. Lösche gezielt Daten für Seiten, die stark personalisieren (Shop, Social, Nachrichten).
6. Starte den Browser danach neu.
Bezeichnung kann abweichen – nutze die Suche nach: „Website-Daten“, „Seitendaten“, „Browserdaten“.  
Das entfernt häufige Alternativen zu Cookies (Browser-Speicher wie localStorage/IndexedDB).  
Dafür wirst du auf diesen Seiten oft abgemeldet und musst Einstellungen neu setzen.

3) App-Tracking und Werbe-ID einschränken  
7. Öffne die System-Einstellungen deines Smartphones.
8. Suche nach „Tracking“ (iOS) oder „Werbung/Werbe-ID“ (Android).
9. Lehne App-Tracking ab und setze die Werbe-ID zurück oder lösche sie (je nach System).
Bezeichnung kann abweichen – nutze die Suche nach: „Tracking“, „Werbe-ID“, „Werbung“.  
Das macht es schwerer, dich über eine stabile Gerätekennung wiederzuerkennen.  
Dafür kann Werbung weiterhin erscheinen, nur weniger treffsicher personalisiert.

4) Eingeloggte Konten trennen (privat vs. „angemeldet“)  
10. Nutze getrennte Browser-Profile oder getrennte Browser für „angemeldet“ und „nur lesen“.
11. Öffne Links aus E-Mails/Messengern möglichst im „Lesen“-Profil.
12. Melde dich ab, wenn du einen Dienst gerade nicht brauchst.
Das reduziert Vermischung zwischen deiner Identität (Login) und dem restlichen Surfen.  
Dafür musst du öfter wechseln und dich häufiger neu anmelden.

5) UTM-Parameter aus Links entfernen  
13. Wenn ein Link `utm_...` enthält: entferne alles ab `?utm_` vor dem Öffnen oder Teilen.
14. Prüfe beim Teilen kurz die Adresszeile und kürze den Link, bevor du sendest.
15. Wenn du das oft machst: lies [UTM-Parameter](/tracking/utm-parameter/) und übernimm eine Routine.
Das verhindert, dass Klickquelle und Kampagnenmerkmale unnötig weitergetragen werden.  
Dafür fehlen manchmal Kampagneninfos, die andere gern auswerten.

## Wege

### Weg A

1) Wähle 3–5 Apps oder Seiten, die dich besonders stark „verfolgen“. Das macht die Maßnahmen spürbar. Dafür brauchst du etwas Selbstbeobachtung.  
2) Öffne Links aus diesen Apps konsequent im Standard-Browser. Das trennt App-Kontext und Web-Sitzung. Dafür ist es weniger bequem.  
3) Lösche Website-Daten nur für diese „Hauptkandidaten“. Das nimmt ihnen viele Wiedererkennungsanker. Dafür gehen Logins und Warenkörbe verloren.  
4) Aktiviere im Browser einen stärkeren Schutz gegen seitenübergreifende Verfolgung, falls vorhanden. Das senkt Drittanbieter-Tracking. Dafür können Kommentare, Login-Flows oder Einbettungen zicken.  
Bezeichnung kann abweichen – nutze die Suche nach: „Schutz vor Tracking“, „Website-Tracking“, „Drittanbieter“.  
5) Halte den Browser aktuell und nutze nur wenige Erweiterungen. Das schließt Lücken und hält den Fingerabdruck oft stabiler. Dafür verzichtest du auf manche Komfortfunktionen.  
6) Trenne „eingeloggt“ und „nur lesen“ dauerhaft über Profile. Das verhindert, dass Logins alles einfärben. Dafür musst du diszipliniert bleiben.  
7) Schalte in wichtigen Konten Personalisierung ab, wo es angeboten wird. Das reduziert profilbasierte Empfehlungen. Dafür bleiben manche Vorschläge weniger relevant.  
Bezeichnung kann abweichen – nutze die Suche nach: „personalisierte Werbung“, „Personalisierung“, „Aktivitäten“.

<details><summary>Weg B (Fortgeschritten)</summary>

- Lösche Website-Daten beim Beenden automatisch, aber setze Ausnahmen für tägliche Dienste. Das nimmt langfristige Wiedererkennung. Dafür bleibt ein kleiner „Ausnahmen“-Pflegeaufwand.  
  Bezeichnung kann abweichen – nutze die Suche nach: „Beim Beenden löschen“, „Daten beim Schließen“, „Ausnahmen“.  
- Nutze für heikle Themen ein separates Profil ohne Logins und ohne zusätzliche Erweiterungen. Das hält Themen wirklich getrennt. Dafür sind Wechsel und Lesezeichenpflege nötig.  
- Reduziere „dauerhafte Anmeldung“ und melde dich bewusst ab. Das schwächt Zuordnung über Konten. Dafür dauert Arbeiten mit Webdiensten länger.  
- Öffne sensible Links lieber per Adresseingabe statt über „Weiter“-Knöpfe. Das verhindert das Mitnehmen von Parametern. Dafür ist es weniger komfortabel.  
- Wenn du viel am Smartphone machst: setze die Systemhebel sauber um und lies [App-Tracking](/tracking/app-tracking/). Das senkt appübergreifende Zuordnung. Dafür musst du nach Updates manchmal nachjustieren.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.
- Trenne Tätigkeiten auf Geräteebene (z. B. ein Gerät für Konten, eins fürs Lesen). Das reduziert Querverbindungen drastisch. Dafür kostet es Geld und Organisation.  
- Nutze DNS-basierte Blocklisten auf Netzwerkebene und beobachte Nebenwirkungen. Das stoppt viele Tracker-Domains früh. Dafür können Logins, Videos oder Bezahlen brechen.  
- Halte ein „Zahlungs“-Profil möglichst standardnah (wenig Blockaden, wenig Add-ons). Das reduziert Fingerprinting-Risiken bei kritischen Vorgängen. Dafür gibt es weniger Komfortschutz.  
- Begrenze Hintergrundzugriff von Apps und prüfe regelmäßig verdächtige Aktivitäten. Das reduziert heimliches Nachladen und Telemetrie. Dafür kommen Benachrichtigungen teils verspätet.  
  Lies dazu passend: [Hintergrundzugriff](/berechtigungen/hintergrundzugriff/).

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob Seiten nach dem Löschen ihrer Website-Daten wieder „neutral“ starten und weniger sofort personalisieren.  
- Achte darauf, ob Links aus Apps dich seltener „sofort wiedererkennen“, wenn du sie im Standard-Browser öffnest.  
- Wenn dich Fingerprinting interessiert: Nutze den [Fingerprinting-Test](/tests/fingerprinting-test/) als grobe Orientierung, nicht als Beweis.

<details><summary>Mehr Prüfungen & Hinweise</summary>

- Prüfe im Browser, wie viele Website-Daten eine Seite anlegt (Seitendaten-/Speicher-Ansicht). Viel Speicher ist oft ein Hinweis auf intensives Wiedererkennen.  
- Wenn Personalisierung trotz allem bleibt, ist oft ein Login der Grund: Abmelden oder getrenntes Profil testen.  
- Manche Messung läuft serverseitig (Serverprotokolle, IP, Geräteinfos). Das siehst du selten direkt, deshalb: Erwartungen realistisch halten.  
- Cookie-Banner steuern häufig nur bestimmte Arten der Messung. „Ablehnen“ heißt nicht automatisch „unsichtbar“.

</details>

## Probleme & Lösungen

- **Problem:** Ich lehne Cookies ab, werde aber weiter erkannt.  
  **Lösung:** Lösche Website-Daten gezielt und trenne eingeloggte Konten per Profil. Oft ist Browser-Speicher der Grund.

- **Problem:** Nach dem Löschen bin ich überall abgemeldet.  
  **Lösung:** Lösche nur die schlimmsten Seiten oder nutze Ausnahmen für Dienste, die du täglich brauchst.

- **Problem:** In einer App wirken Links „zu persönlich“, obwohl ich im Browser vorsichtig bin.  
  **Lösung:** Vermeide App-interne Browser und schränke App-Tracking sowie Werbe-ID systemweit ein.

- **Problem:** Personalisierte Werbung ist aus, aber es wird trotzdem gemessen.  
  **Lösung:** Das ist normal: „keine Personalisierung“ stoppt nicht jede Messung. Reduziere zusätzlich Speicher, Parameter und Logins.

- **Problem:** Manche Seiten funktionieren nicht mehr (Anmeldung, Kommentare, Warenkorb).  
  **Lösung:** Gehe einen Schritt zurück: weniger streng blocken, dafür konsequent über Profile trennen.

- **Problem:** UTM-Parameter kommen immer wieder zurück.  
  **Lösung:** Das passiert durch Weiterleitungen oder beim Teilen. Kürze den Link direkt vor dem Öffnen oder nutze eine Routine über [UTM-Parameter](/tracking/utm-parameter/).

## Nicht gelöst

- Wenn du eingeloggt bist, ist Zuordnung oft trivial. Dann hilft vor allem Trennung über Profile oder Abmelden.  
- Serverseitige Protokolle (z. B. Zugriffsdaten) kannst du clientseitig nur begrenzt beeinflussen.  
- Fingerprinting lässt sich meist nur reduzieren, nicht „abschalten“, ohne Komfort zu verlieren.  
- Wenn dein Gerät kompromittiert ist (Schadsoftware, Admin-Zugriff, Stalkerware), helfen Browser-Tricks kaum. Starte mit [Stalkerware-Verdacht](/szenarien/stalkerware-verdacht/).  
- In Netzwerken mit Kontrolle (Arbeitgeber, Schule, fremdes WLAN) kann Verkehr mitprotokolliert werden. Siehe [Public WLAN](/netzwerk/public-wlan/).

## FAQ

**Sind Cookies das ganze Tracking?**

Nein. Fingerprinting, Linktracking, Telemetrie und Werbenetzwerke spielen oft eine größere Rolle.

**Hilft „Do Not Track“?**

Selten. Wichtiger sind echte technische Schutzmaßnahmen.

**Wie reduziere ich Tracking am stärksten?**

Browser-Härtung, Blocker, Profiltrennung, App-Rechte, und weniger Datenweitergabe.

## Quellen

- [Web Storage API (MDN, deutsch)](https://developer.mozilla.org/de/docs/Web/API/Web_Storage_API)  
- [IndexedDB API (MDN, deutsch)](https://developer.mozilla.org/de/docs/Web/API/IndexedDB_API)  
- [Cover Your Tracks (EFF)](https://www.eff.org/pages/cover-your-tracks)  
- [Kampagnendaten mithilfe benutzerdefinierter URLs erfassen (Google Analytics, deutsch)](https://support.google.com/analytics/answer/10917952?hl=de)  
- [Wenn eine App deine Aktivitäten verfolgen möchte (Apple Support, deutsch)](https://support.apple.com/de-de/102420)  
- [Werbung – Werbe-ID Ihres Geräts löschen (Google, deutsch)](https://policies.google.com/technologies/ads?hl=de)

## Weiter

- [Tracking](/tracking/)  
- [Linktracking](/tracking/linktracking/)  
- [UTM-Parameter](/tracking/utm-parameter/)  
- [Fingerprinting](/browser/fingerprinting/)  
- [Cookies & Speicher](/browser/cookies-speicher/)  
- [App-Tracking](/tracking/app-tracking/)
