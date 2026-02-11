---
layout: "@/layouts/DocLayout.astro"
title: "Router sicher einrichten: WLAN, Updates, Admin-Zugang"
url: "/plattformen/router/"
chapter: "Plattformen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Router sicher einrichten: Updates prüfen, Admin-Zugang härten, WLAN mit WPA3 absichern, Gäste-WLAN trennen und Freigaben reduzieren – mit Checks und Lösungen."
---
Ein Router ist oft der eine Punkt, an dem alles hängt: WLAN, Internet, Gäste, smarte Geräte.  
Wenn dort etwas falsch steht, betrifft es sofort alle Geräte im Haushalt.

Ziel ist, dass Übernahmen schwerer werden und Mitlesen im WLAN unattraktiv ist.  
Ohne Spezialwissen, aber mit klaren Prüfpunkten.

Sinnvoll, wenn du dein Heimnetz für Arbeit, Banking, smarte Geräte oder Besuch nutzt.  
Grenze: Wenn dein Router keine Updates mehr bekommt, ist „sicher konfigurieren“ nur begrenzt möglich.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

Weg A: Das Heimnetz solide absichern, ohne Komfort zu verlieren.  
Weg B: Zusätzliche Trennung und weniger Angriffsfläche, wenn du öfter an Einstellungen drehst.  
Weg C: Profi-Optionen für mehr Kontrolle, mit höherem Risiko für Nebenwirkungen.

Stoppsignal: Wenn du das Router-Admin-Passwort nicht ändern kannst, keine Updates mehr möglich sind oder unbekannte Administrator-Zugriffe auftauchen, plane Austausch oder Provider-Support ein.  
Aufwand + Komfortkosten: 15–45 Minuten, danach müssen Geräte teils einmal neu verbunden werden.

## Schnellstart (20 Minuten)
1) Firmware aktualisieren (und künftig automatisch prüfen)
1. In der Router-Verwaltung die installierte Firmware-Version ansehen.
2. Nach Updates suchen und installieren, falls verfügbar.
3. Wenn angeboten: automatische Update-Prüfung aktivieren.
4. Router danach einmal neu starten.
Bezeichnung kann abweichen – nutze die Suche nach: Firmware, System, Update, Software.
Während des Updates kann das Internet kurz ausfallen.  
Du schließt damit bekannte Sicherheitslücken im Router.

2) Router-Admin-Zugang absichern
5. Nicht über das Gastnetz konfigurieren, sondern aus dem eigenen Heimnetz.
6. Admin-Passwort ändern (das ist nicht das WLAN-Passwort).
7. Falls möglich: Standard-Benutzernamen ersetzen oder deaktivieren.
8. Fernzugriff/Verwaltung aus dem Internet deaktivieren, wenn du es nicht aktiv brauchst.
Bezeichnung kann abweichen – nutze die Suche nach: Administrator, Kennwort, Fernzugriff, Remote, Verwaltung.
Wenn du das Admin-Passwort vergisst, endet es oft im Zurücksetzen des Routers.  
Du verhinderst damit, dass Standardzugänge oder Fernzugriffe ausgenutzt werden.

3) WLAN-Verschlüsselung modern einstellen und WPS aus
9. WLAN-Sicherheitsmodus auf WPA3 stellen, wenn alle Geräte damit klarkommen.
10. Wenn du alte Geräte hast: gemischten Modus WPA2/WPA3 verwenden (je nach Router).
11. WPS deaktivieren (Wi-Fi Protected Setup: Kopplung per PIN oder Taste).
12. Danach das WLAN-Passwort als lange Passphrase setzen.
Bezeichnung kann abweichen – nutze die Suche nach: WPA3, WPA2, Sicherheit, Verschlüsselung, WPS.
Ältere Geräte müssen sich danach manchmal neu verbinden.  
Du erschwerst unbefugtes Einwählen und reduzierst Mitlese-Risiken.

4) Gäste-WLAN einschalten und trennen
13. Gäste-WLAN aktivieren und ein eigenes Passwort vergeben.
14. „Gäste dürfen nicht auf Heimnetz zugreifen“ aktivieren, wenn vorhanden.
15. Besuch und smarte Geräte möglichst ins Gastnetz statt ins Hauptnetz.
Bezeichnung kann abweichen – nutze die Suche nach: Gastnetz, Gäste-WLAN, Isolation, Zugriff.
Geräte im Gastnetz sehen oft keine Drucker oder Netzlaufwerke im Heimnetz.  
Ein fremdes oder unsicheres Gerät steckt damit nicht automatisch dein ganzes Heimnetz an.

5) Freigaben und automatische Öffnungen prüfen
16. Portweiterleitungen (Freigaben) ansehen und alles entfernen, was du nicht sicher brauchst.
17. Universal Plug and Play (UPnP) deaktivieren, wenn du es nicht aktiv benötigst.
18. Wenn du bewusst Freigaben nutzt: dokumentiere, wofür sie sind (Dienst + Gerät).
Bezeichnung kann abweichen – nutze die Suche nach: Portweiterleitung, Freigabe, NAT, UPnP.
Online-Spiele, Konsolen oder bestimmte Telefonie können danach Nacharbeit brauchen.  
Du reduzierst damit „offene Türen“ aus dem Internet in dein Heimnetz.

## Wege

### Weg A

1) Router-Modell und Firmware-Version notieren (für späteren Vergleich).  
2) Admin-Passwort ändern und sicher ablegen (Passwort-Manager oder sicherer Offline-Ort).  
3) Fernzugriff aus dem Internet ausschalten, wenn du ihn nicht aktiv nutzt.  
4) Update-Funktion prüfen und Router auf den neuesten Stand bringen.  
5) WLAN-Sicherheit auf WPA3 oder WPA2/WPA3 umstellen (je nach Gerätebestand).  
6) WPS ausschalten und danach das WLAN-Passwort als lange Passphrase setzen.  
7) Gäste-WLAN einschalten und Trennung vom Heimnetz aktivieren.  
8) Verbundene Geräte im Router prüfen und Unbekanntes ernst nehmen (lieber einmal zu viel).  
9) Portfreigaben/UPnP prüfen und nur bewusst aktiv lassen.  
10) Nach Änderungen Geräte einmal neu verbinden, falls sie zicken (WLAN „vergessen“ und neu verbinden, je nach Gerät).

<details><summary>Weg B (Fortgeschritten)</summary>

- Router-Einstellungen sichern (Konfigurations-Export), bevor du größere Änderungen machst.
- WLAN-Name (SSID) nicht „verstecken“ als vermeintlichen Schutz; das hilft praktisch nicht.
- MAC-Filter nicht als Zugangsschutz einplanen: Viele Geräte nutzen wechselnde Geräteadressen (MAC-Adressen), und Adressen sind leicht zu imitieren.
- Wenn du DNS im Router bewusst umstellst: danach prüfen, ob alle Geräte noch wie erwartet Webseiten auflösen.
- Für smarte Geräte, die selten Updates bekommen: konsequent ins Gastnetz oder in ein getrenntes Netzsegment, falls dein Router das bietet.
- Wenn du administrierst: lieber lokal im Heimnetz als „von unterwegs“ – weniger offene Angriffsfläche.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.
- Provider-Modem und Router-Rolle sauber trennen, wenn du einen zweiten Router betreibst (vermeide doppeltes NAT, also doppelte Adressübersetzung).
- Verwaltungszugang auf ein separates Netz beschränken (z. B. nur per Kabel oder nur aus einem Verwaltungs-WLAN).
- Verschlüsseltes DNS am Router nur aktivieren, wenn du Nebenwirkungen testen kannst (Captive Portal: Anmeldeseite im Hotel oder Hotspot, Filter und Jugendschutz können stören).
- Protokollierung bewusst nutzen: nur so viel wie nötig, und Protokolle nicht ewig aufbewahren.
- Konfigurations-Sicherungen versionieren, damit du nach Änderungen sauber zurück kannst.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob in den WLAN-Details deiner Geräte „WPA2“ oder „WPA3“ angezeigt wird (nicht „offen“ oder „veraltet“).  
- Wenn du in der Router-Geräteliste nur Geräte siehst, die du zuordnen kannst, bist du näher am Ziel.  
- Prüfe mit einem Gastgerät: Es sollte Internet haben, aber nicht auf Geräte im Heimnetz zugreifen können.

<details><summary>Mehr Prüfungen & Hinweise</summary>

- Wenn du am Router DNS angepasst hast: Prüfe mit einem Gerät, ob Webseiten zuverlässig laden und keine „DNS nicht erreichbar“-Fehler auftauchen.
- Wenn du nach VPN- oder DNS-Änderungen Leaks vermutest: Nutze Testseiten wie den [DNS-Leak-Test](/tests/dns-leak-test/) oder den [IP-Leak-Test](/tests/ip-leak-test/).
- Plattform-Unterschiede sind normal:
  - Android/iOS ändern je WLAN oft die Geräteadresse, was MAC-Filter und manche Filterlösungen verwirren kann.
  - Windows kann „zufällige Hardwareadressen“ nutzen, ebenfalls pro Netzwerk.
  - macOS/Linux hängen stärker von der jeweiligen Netzwerkverwaltung ab; je nach System kann das anders heißen oder fehlen.

</details>

## Probleme & Lösungen

- **Problem:** Nach der WPA3-Umstellung kommen einzelne Geräte nicht mehr ins WLAN.  
  **Lösung:** Nutze vorübergehend WPA2/WPA3 gemischt (wenn verfügbar) oder WPA2 (AES) und plane Ersatz für sehr alte Geräte ein.

- **Problem:** Gäste-WLAN ist an, aber Besuch kann nicht drucken oder auf den Fernseher streamen.  
  **Lösung:** Das ist oft Absicht der Trennung. Für einzelne Fälle kurz ins Hauptnetz lassen oder gezielte Freigaben nutzen.

- **Problem:** Du findest Admin-Passwort-Optionen oder Fernzugriff nicht in der Oberfläche.  
  **Lösung:** Nutze die Suche der Router-Oberfläche und suche nach „Fernzugriff“, „Remote“ oder „Verwaltung“.

- **Problem:** Es gibt keine Firmware-Updates mehr für deinen Router.  
  **Lösung:** Plane Austausch oder ein vom Anbieter unterstütztes Gerät. Ohne Updates bleibt das Risiko dauerhaft.

- **Problem:** Nach dem Abschalten von UPnP oder Portfreigaben funktionieren Spiele oder Videoanrufe schlechter.  
  **Lösung:** Aktiviere nur das, was du sicher brauchst, oder richte gezielte Portfreigaben für ein einzelnes Gerät ein.

- **Problem:** Ein Arbeitsgerät verhält sich anders als private Geräte im selben WLAN.  
  **Lösung:** Prüfe, ob es verwaltet ist (Unternehmensrichtlinien/MDM). Dann sind DNS, VPN oder Proxy oft vorgegeben und nicht frei änderbar.

## Nicht gelöst

- Ein sicher konfigurierter Router hilft nicht, wenn ein Gerät im Heimnetz bereits kompromittiert ist.  
- Gegen Angriffe mit physischem Zugriff (jemand kann den Router anfassen, resetten oder austauschen) brauchst du zusätzlich Zugriffsschutz vor Ort.  
- Wenn dein Internet-Anbieter zentrale Einstellungen erzwingt oder Fernwartung nutzt, kannst du nicht alles selbst steuern.  
- Router-Einstellungen ersetzen keine Updates auf Endgeräten; veraltete Smartphones und Computer bleiben ein Risiko.  
- Gegen gezielte Angriffe durch Personen mit Admin-Zugang (z. B. weil Zugangsdaten geteilt wurden) hilft am Ende nur: Zugang entziehen, Passwörter ändern, notfalls zurücksetzen und neu aufsetzen.  
- Bei Stalkerware-Verdacht oder Zwang in der Umgebung (jemand hat Zugriff auf Geräte oder Konten) reichen Router-Änderungen allein nicht aus.

## FAQ

**Warum unterscheiden sich Schritte je Plattform?**

Weil die Schutzmechanismen anders implementiert sind. Nutze die Plattform-Anleitungen, nicht generische Tipps.

**Muss ich alles auf einmal machen?**

Nein. Starte mit Updates, Sperrcode, 2FA und Browser – dann nach Bedarf vertiefen.

**Router zählt auch als Plattform?**

Ja. Er ist oft der wichtigste Punkt im Heimnetz und wird häufig übersehen.

## Quellen

- [Router, WLAN & VPN sicher einrichten (BSI)](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Router-WLAN-VPN/router-wlan-vpn_node.html)
- [Tipps für ein sicheres Heimnetzwerk (BSI, PDF)](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Publikationen/Broschueren/Wegweiser_Checklisten_Flyer/Wegweiser_kompakt_Router_einrichten.pdf?__blob=publicationFile&v=23)
- [Den Router richtig einstellen: Tipps für ein sicheres Heim-WLAN (onlinesicherheit.gv.at)](https://www.onlinesicherheit.gv.at/Services/News/WLAN-Router-absichern.html)
- [Verschlüsselungsprotokolle im WLAN: WEP, WPA, WPA2, WPA3 (onlinesicherheit.gv.at)](https://www.onlinesicherheit.gv.at/Services/News/Verschluesselungsprotokolle-WLAN.html)
- [Empfohlene Einstellungen für WLAN-Router und Zugangspunkte (Apple Support)](https://support.apple.com/de-de/102766)
- [Erweiterte Netzwerkeinstellungen auf Android (Google Support)](https://support.google.com/android/answer/9654714?hl=de)

## Weiter

- [Router-Sicherheit im Heimnetz](/netzwerk/router-sicherheit/)
- [Updates für Router & IoT](/updates/router-iot/)
- [DNS am Router einstellen](/dns/router/)
- [Gäste-WLAN richtig nutzen](/netzwerk/gaeste-wlan/)
- [Netzwerk-Leaks verstehen](/netzwerk/leaks/)
