---
layout: "@/layouts/DocLayout.astro"
title: "Router absichern: Updates, WLAN, Admin-Zugang prüfen"
url: "/hardware/router/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "So sicherst du deinen Router: Updates prüfen, Admin-Passwort härten, WLAN (WPA2/WPA3) einstellen, Gäste-Netz trennen und typische Fehler vermeiden."
---
Dein Router ist der Knotenpunkt deines Heimnetzes.  
Wenn dort etwas schief eingestellt ist, betrifft es alle Geräte.

Nervig wird es oft erst, wenn es knallt.  
WLAN ist offen, das Admin-Passwort ist alt, oder ein Gerät „macht komische Dinge“.

Ziel ist ein Heimnetz, das stabil bleibt und weniger Angriffsfläche bietet.  
Ohne Spezialwissen und ohne Geräte-Zirkus.

Sinnvoll, wenn du WLAN nutzt, vernetzte Geräte (Smart-Home) hast oder den Update-Stand nicht kennst.  
Grenze: Wenn der Router vom Anbieter verwaltet wird, sind manche Einstellungen gesperrt.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

Weg A: In 15 Minuten die wichtigsten Router-Einstellungen prüfen und absichern.  
Weg B: Heimnetz sinnvoll aufteilen (z. B. Gäste/Smart-Home), ohne dass alles unbequem wird.  
Weg C: Trennung und Regeln so einstellen, dass vernetzte Geräte (IoT) wenig „sehen“ dürfen.

Stoppsignal: Wenn nach einer Änderung Internet oder Telefonie ausfällt, geh einen Schritt zurück.  
Nutze im Zweifel den Anbieter-Support.

Aufwand + Komfortkosten: 15–45 Minuten.  
Einzelne Geräte müssen sich neu verbinden, und Komfortfunktionen können eingeschränkt sein.

## Schnellstart (15 Minuten)
1) **Admin-Zugang zur Router-Verwaltung absichern**
1. In der Router-Verwaltung anmelden (meist per Browser im Heimnetz).
2. Ein eigenes, langes Admin-Passwort setzen (nicht identisch mit dem WLAN-Passwort).
3. Verwaltung nur aus dem Heimnetz erlauben, falls verfügbar (nicht „aus dem Internet“).
4. Wenn möglich: Verwaltung nur über eine verschlüsselte Verbindung nutzen.
Bezeichnung kann abweichen – nutze die Suche nach: Verwaltung, Administrator, Zugang, Zugriff.  
So wird es deutlich schwerer, Router-Einstellungen zu übernehmen.  
Lege das Admin-Passwort sicher ab, sonst wird die Verwaltung später mühsam.

2) **Updates einschalten und den Stand prüfen**
5. In der Router-Verwaltung nach Firmware-/System-Updates suchen.
6. Automatische Updates aktivieren, falls angeboten.
7. Datum/Version notieren und in ein paar Wochen erneut vergleichen.
Bezeichnung kann abweichen – nutze die Suche nach: Update, Firmware, System, Version.  
Damit werden Sicherheitslücken eher geschlossen, bevor sie ausgenutzt werden.  
Ein Update kann einen Neustart auslösen und kurz Internet/Telefonie unterbrechen.

3) **WLAN-Verschlüsselung und WLAN-Passwort prüfen**
8. Prüfen, welche WLAN-Verschlüsselung aktiv ist (mindestens WPA2, wenn möglich WPA3).
9. Ein langes WLAN-Passwort setzen (eine Passphrase aus mehreren Wörtern ist okay).
10. WPS ausschalten (Knopfdruck-/PIN-Kopplung fürs WLAN).
Bezeichnung kann abweichen – nutze die Suche nach: WLAN-Sicherheit, Verschlüsselung, WPA2/WPA3, WPS.  
So wird es deutlich schwerer, in dein WLAN zu kommen.  
Ältere Geräte können mit WPA3 oder ohne WPS schlechter klarkommen.

4) **Gäste-WLAN nutzen und Geräte trennen**
11. Gäste-WLAN einschalten.
12. Aktivieren, dass Gäste nicht auf Geräte im Heimnetz zugreifen dürfen.
13. Smart-Home-Geräte nach und nach ins Gäste-WLAN verschieben, wenn möglich.
Bezeichnung kann abweichen – nutze die Suche nach: Gäste, Gastnetz, Isolation, Zugriff.  
Wenn ein Gerät unsicher ist, kommt es weniger leicht an Laptop, NAS oder Arbeitsgeräte.  
Bild- und Tonübertragung (Casting) kann im getrennten Netz haken.

5) **Unnötige Dienste reduzieren: Fernzugriff, UPnP, Portfreigaben**
14. Fernzugriff/Fernverwaltung deaktivieren, wenn du das nicht bewusst nutzt.
15. UPnP (Universal Plug and Play) deaktivieren: Geräte öffnen dann nicht automatisch Ports.
16. Portfreigaben prüfen und alles entfernen, was du nicht zuordnen kannst.
Bezeichnung kann abweichen – nutze die Suche nach: Fernzugriff, Remote, UPnP, Portfreigabe, NAT.  
Du schließt unnötige Türen vom Internet ins Heimnetz.  
Manche Spiele, Konsolen oder Dienste brauchen dann gezielte Portfreigaben.

## Wege

### Weg A

1. In die Router-Verwaltung gehen und prüfen, ob du wirklich **dein** Gerät verwaltest (Name/Modell wird meist angezeigt).
2. Admin-Passwort ändern, wenn es kurz ist oder dir bekannt vorkommt.
3. Prüfen, ob die Verwaltung von außen erreichbar ist, und ausschalten, wenn du sie nicht brauchst.
4. Update-Stand prüfen und automatische Updates aktivieren, wenn möglich.
5. WLAN-Name so wählen, dass er dich nicht eindeutig identifiziert (kein Klarname, keine Adresse).
6. WLAN auf mindestens WPA2 stellen, WPA3 bevorzugen, wenn verfügbar.
7. WPS ausschalten.
8. Gäste-WLAN aktivieren und so einstellen, dass Gäste keine Geräte im Heimnetz sehen.
9. Smart-Home-Geräte nach und nach ins Gäste-WLAN verschieben, wenn sie nicht intern kommunizieren müssen.
10. UPnP deaktivieren und Portfreigaben aufräumen.

<details><summary>Weg B (Fortgeschritten)</summary>

- Prüfen, ob dein Router ein eigenes Netz für „Gäste“ oder „IoT/Smart-Home“ anbietet, und es konsequent nutzen.
- Für Smart-Home möglichst Geräte bevorzugen, die lokal funktionieren oder wenig Online-Zwang haben.
- Wenn möglich: Smart-Home-WLAN getrennt benennen, eigenes Passwort setzen und Zugriff ins Heimnetz blockieren.
- Wichtige Geräte (Arbeitslaptop, NAS) nur im Hauptnetz lassen und dort sparsam mit Freigaben umgehen.

Kaufkriterien, wenn du neu anschaffst:
- Updates: klare Zusage, wie lange Sicherheitsupdates kommen.
- Funktionen: Gäste-Netz mit Isolation, abschaltbare Fernverwaltung, abschaltbares UPnP.
- Verwaltung: Grundfunktionen sollten ohne Online-Konto möglich sein.
- Trennung: Bei vielen Smart-Home-Geräten ist Netztrennung wichtiger als Maximaltempo.
- Mikrofon/Kamera nur wählen, wenn du das wirklich brauchst.

</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.

- Netztrennung mit eigenen Segmenten, z. B. Arbeit, Privat, Smart-Home.
- Regeln festlegen, wer wohin darf (Standard: Smart-Home darf nicht ins Privatnetz).
- Verwaltung nur von einem festen Gerät oder nur per Kabel erlauben, wenn möglich.
- Eingehende Verbindungen aus dem Internet grundsätzlich blockieren und Ausnahmen bewusst setzen.
- Protokolle/Listen prüfen, ob neue Geräte auftauchen oder Dienste aktiv werden.
- Die wichtigsten Einstellungen dokumentieren (Update-Stand, Netze, besondere Freigaben).

Zu harte Trennung kann Komfortfunktionen brechen.  
Dazu zählen z. B. Streaming, Drucker oder Smart-Home-Automationen.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob in der Geräteliste nur Geräte auftauchen, die du wirklich kennst.
- Achte darauf, ob ein Gerät im Gäste-WLAN nicht mehr auf interne Geräte zugreifen kann.
- Achte darauf, ob sich die Versionsnummer oder das Update-Datum nach einigen Wochen geändert hat.

<details><summary>Mehr Prüfungen</summary>

- Achte darauf, ob Portfreigaben wirklich nötig sind: Viele Geräte kommen ohne direkte Internet-Erreichbarkeit aus.
- Achte darauf, ob Smart-Home-Geräte regelmäßig zu Hersteller-Servern funken.  
  Trennung im Netz reduziert Schäden, verhindert „Nach-Hause-Telefonieren“ aber nicht automatisch.
- Achte darauf, welche Einstellungen du selbst steuern darfst, wenn der Anbieter den Router verwaltet.

</details>

## Probleme & Lösungen

- **Problem:** Du kommst nicht mehr in die Router-Verwaltung.  
  **Lösung:** Prüfe, ob du im richtigen WLAN bist, und nutze die lokale Adresse aus Handbuch oder Router-Aufkleber.

- **Problem:** Nach einem Update ist das WLAN kurz weg, oder Geräte müssen sich neu verbinden.  
  **Lösung:** Warte den Neustart ab und verbinde Geräte neu; prüfe danach, ob WLAN-Name und Passwort unverändert sind.

- **Problem:** Ein älteres Gerät verbindet sich nicht mehr, nachdem du WPA3 aktiviert hast.  
  **Lösung:** Nutze einen Mischmodus, falls vorhanden, oder bleib bei WPA2, bis das Gerät ersetzt ist.

- **Problem:** Bild- und Tonübertragung funktioniert nicht mehr, seit Geräte im Gäste-WLAN sind.  
  **Lösung:** Handy und Zielgerät ins gleiche Netz setzen oder das betroffene Gerät wieder ins Hauptnetz nehmen.

- **Problem:** Ein Spiel oder eine Konsole meckert nach dem Abschalten von UPnP.  
  **Lösung:** Lass UPnP aus und setze nur gezielte Portfreigaben, wenn du sie wirklich brauchst und verstehst.

- **Problem:** Der Router verlangt ein Online-Konto für die Verwaltung.  
  **Lösung:** Prüfe, ob lokale Verwaltung möglich ist; wenn nicht, bewerte das als Kaufkriterium beim nächsten Wechsel.

## Nicht gelöst

- Der Router verhindert nicht, dass Geräte selbst Daten ins Internet senden (z. B. Smart-Home-Telemetrie).
- Wenn ein Gerät im Heimnetz kompromittiert ist (Schadprogramm, Stalkerware), kann es trotz guter Router-Einstellungen Schaden anrichten.
- Wenn jemand physischen Zugriff auf Router oder Kabel hat, helfen Einstellungen nur begrenzt.
- Dein Internetanbieter kann weiterhin sehen, dass du online bist und welche Ziele du grob erreichst.
- Ein Router ohne Updates bleibt ein Risiko, auch wenn Passwörter und WLAN gut eingestellt sind.

## FAQ

**Ist Smart Home grundsätzlich riskant?**

Viele Geräte sammeln Daten. Achte auf lokale Steuerung, Update-Politik, getrenntes Netz und minimal nötige Cloud.

**Brauche ich eine neue Webcam?**

Oft reicht Abdecken/physische Trennung. Entscheidend ist, wann Kamera/Mikrofon wirklich aktiv sein dürfen.

**Router als Sicherheitsanker?**

Ja. Updates, starke Admin-Zugänge, Gastnetz und saubere WLAN-Settings sind zentrale Basics.

## Quellen

- [BSI: Sicherheitstipps im privaten und öffentlichen WLAN](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Router-WLAN-VPN/Sicherheitstipps-fuer-privates-und-oeffentliches-wlan/sicherheitstipps-fuer-privates-und-oeffentliches-wlan.html)
- [BSI: Wegweiser kompakt „Router einrichten“ (PDF)](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/Broschueren/Wegweiser_Checklisten_Flyer/Wegweiser_kompakt_Router_einrichten.pdf?__blob=publicationFile&v=23)
- [BSI: Smart-Home – den Wohnraum sicher vernetzen](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Internet-der-Dinge-Smart-leben/Smart-Home/smart-home.html)
- [onlinesicherheit.gv.at: Den Router richtig einstellen](https://www.onlinesicherheit.gv.at/Services/News/WLAN-Router-absichern.html)
- [Wi-Fi Alliance: Einführung von Wi-Fi CERTIFIED WPA3](https://www.globenewswire.com/news-release/2018/06/26/1529297/0/en/Wi-Fi-Alliance-introduces-Wi-Fi-CERTIFIED-WPA3-security.html)
- [Android Open Source Project: WPA3 und „Wi-Fi Enhanced Open“](https://source.android.com/docs/core/connect/wifi-wpa3-owe)

## Weiter

- [Router-Sicherheit](/netzwerk/router-sicherheit/)
- [Updates für Router & IoT](/updates/router-iot/)
- [Gäste-WLAN](/netzwerk/gaeste-wlan/)
- [IoT & Smart-Home](/hardware/iot/)
- [DNS am Router](/dns/router/)
- [Heimnetzwerk: Schnellstart](/netzwerk/schnellstart/)
