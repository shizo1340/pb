---
layout: "@/layouts/DocLayout.astro"
title: "Linux-Privatsphäre einstellen: Basis-Guide in 30 Minuten"
url: "/plattformen/linux/"
chapter: "Plattformen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Linux-Privatsphäre praktisch erhöhen: Updates, Verschlüsselung, Firewall und DNS prüfen, Apps einschränken. Mit Schnellstart, Checks, Stolpersteinen."
---
Linux wirkt oft „frei“ und gleichzeitig unübersichtlich.  
Privatsphäre hängt nicht nur von einer Einstellung ab, sondern von Distribution, Oberfläche und Apps.

Das nervt, weil du nie sicher bist, ob DNS-Abfragen, Standort, Diagnoseberichte oder App-Zugriffe gerade Daten preisgeben.  
Ziel ist eine solide Basis, die im Alltag funktioniert und dich nicht überfordert.

Sinnvoll, wenn du Linux privat nutzt oder frisch umgestiegen bist und eine verlässliche Grundkonfiguration willst.  
Grenze: Wenn dein Gerät bereits kompromittiert ist (Root/Admin), löst diese Seite das Problem nicht.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

Weg A bringt dich schnell auf ein gutes Grundniveau.  
Weg B geht tiefer bei Netzwerk, Diagnose und App-Zugriffen.  
Weg C ist für Profis und kann Komfort kosten.

Stoppsignal: Wenn dein Gerät von Arbeit/Schule verwaltet wird, können Richtlinien Einstellungen erzwingen.  
Ändere nichts, was gegen Vorgaben verstößt.

Aufwand + Komfortkosten: 20–45 Minuten.  
Je nach Setup kommen Neustarts, mehr Passworteingaben oder einzelne App-Probleme dazu.

## Schnellstart (25 Minuten)
1) **Updates: Support-Status prüfen und aktualisieren**
1. Öffne die Paketverwaltung deiner Distribution und installiere Updates.
2. Aktiviere Sicherheitsupdates automatisch, wenn deine Oberfläche das anbietet.
3. Starte neu, wenn es verlangt wird.
Bezeichnung kann abweichen – nutze die Suche nach: Aktualisierungen, Updates, Software.  
Das schließt bekannte Sicherheitslücken und verhindert „alte“ Datenschutzfehler.  
Nebenwirkung: Updates ändern manchmal Treiber oder Einstellungen und können kurz nerven.

2) **Sperrbildschirm: Zugriff im Alltag dicht machen**
4. Setze eine Bildschirmsperre mit Passwort oder Passphrase.
5. Aktiviere automatische Sperre nach kurzer Inaktivität.
6. Stelle ein, dass nach Standby/Deckel zu entsperrt werden muss.
Bezeichnung kann abweichen – nutze die Suche nach: Sperrbildschirm, Bildschirmsperre, Automatisch sperren.  
Das verhindert schnellen Zugriff, wenn du kurz weg bist oder das Gerät verliehen wird.  
Nebenwirkung: Kurze Sperrzeiten stören, sind aber ein sehr wirksamer Alltagsschutz.

3) **Vollverschlüsselung: prüfen, ob Daten im Ruhezustand geschützt sind**
7. Achte beim Start auf eine Entsperr-Passphrase vor dem Login.
8. Wenn du sie nicht siehst: prüfe in der Installations-/Systemdoku „Festplatte verschlüsseln“ oder „LUKS“.
9. Wenn nicht aktiv: plane das als Ziel für die nächste Neuinstallation ein.
Bezeichnung kann abweichen – nutze die Suche nach: LUKS, Festplatte verschlüsseln, Verschlüsselung.  
Das schützt Daten bei Verlust oder Diebstahl, solange das Gerät aus ist.  
Nebenwirkung: Vergisst du die Passphrase, ist der Zugriff praktisch weg.

4) **Firewall: Status prüfen, ohne dich auszusperren**
10. Prüfe, ob eine Host-Firewall aktiv ist (z. B. ufw oder firewalld).
11. Erlaube eingehend nur Dienste, die du wirklich brauchst (z. B. Drucker oder Freigaben).
12. Blockiere eingehend sonst standardmäßig.
Bezeichnung kann abweichen – nutze die Suche nach: Firewall, ufw, firewalld.  
Das reduziert Angriffsfläche in Heimnetz und fremden Netzen.  
Nebenwirkung: Nach Aktivierung funktionieren lokale Dienste manchmal erst nach gezielter Freigabe.

5) **Standort & Verlauf: weniger Nebenbei-Daten**
13. Deaktiviere Standortdienste, wenn du sie selten brauchst.
14. Prüfe, ob Datei-/Programmverlauf gespeichert wird, und schalte es bei Bedarf ab.
15. Lösche vorhandene Verläufe, wenn du den Rechner teilst.
Bezeichnung kann abweichen – nutze die Suche nach: Privatsphäre, Standort, Verlauf, Zuletzt verwendet.  
Das reduziert Metadaten auf dem Gerät und in Screenshots/Supportfällen.  
Nebenwirkung: Einige Komfortfunktionen verschwinden, z. B. Ortsvorschläge oder „Zuletzt geöffnet“.

6) **Apps: Zugriffe dort begrenzen, wo es möglich ist**
16. Prüfe bei Flatpak-Apps, welche Freigaben sie haben (Dateien, Geräte, Netzwerk).
17. Entziehe breite Dateisystem-Zugriffe und gib nur Ordner frei, die nötig sind.
18. Entferne ungenutzte Dritt-Paketquellen.
Bezeichnung kann abweichen – nutze die Suche nach: Flatpak, Berechtigungen, Sandbox, Freigaben.  
Das begrenzt Schaden, wenn eine App neugierig ist oder kompromittiert wird.  
Nebenwirkung: Zu strenge Freigaben können Funktionen brechen (Dateiauswahl, Drucken, Plugins).

## Wege

### Weg A

- Notiere dir Distribution und Oberfläche (z. B. GNOME oder KDE). Das bestimmt Menüs und Werkzeuge.
- Bleib auf unterstützten Versionen und installiere Updates zeitnah.
- Installiere Software möglichst aus den Standard-Paketquellen deiner Distribution.
- Nutze eine starke Bildschirmsperre und kurze Auto-Sperre.
- Prüfe Vollverschlüsselung und plane sie bei der nächsten Neuinstallation fest ein.
- Aktiviere eine Host-Firewall und lasse eingehend standardmäßig blockiert.
- Deaktiviere Standortdienste, wenn du sie nicht brauchst.
- Setze im Browser die Basis um: [Browser Schnellstart](/browser/schnellstart/).
- Richte Backups ein, die nicht dauerhaft am Rechner hängen: [Backups Schnellstart](/backups/schnellstart/).

<details><summary>Weg B (Fortgeschritten)</summary>

- Prüfe, welcher Resolver dein System nutzt (z. B. systemd-resolved oder NetworkManager), bevor du DNS änderst.  
  Das verhindert, dass du „an zwei Stellen gleichzeitig“ schraubst.  
  Nebenwirkung: Die Analyse kostet etwas Zeit.

- Nutzt du systemd-resolved: aktiviere DNS über TLS (verschlüsselte DNS-Transportstrecke) gezielt und dokumentiere den Zustand.  
  Bezeichnung kann abweichen – nutze die Suche nach: resolved.conf, systemd-resolved, DNSOverTLS.  
  Das erschwert Mitlesen von DNS im lokalen Netz.  
  Nebenwirkung: Manche Firmennetze oder Captive-Portale reagieren empfindlich.

- Nutzt du GNOME: schalte Standortdienste gezielt ab oder lasse sie nur bei Bedarf zu.  
  Bezeichnung kann abweichen – nutze die Suche nach: Privatsphäre, Standortdienste, Location.  
  Das reduziert Standortabfragen durch Apps und Desktop-Dienste.  
  Nebenwirkung: Wetter, Karten oder Zeitzone brauchen dann mehr Handarbeit.

- Nutzt du GNOME: begrenze „Zuletzt verwendet“ und lösche Verlauf, wenn du das Gerät teilst.  
  Bezeichnung kann abweichen – nutze die Suche nach: Verlauf, Zuletzt verwendet, Recent.  
  Das verhindert, dass Nutzungsverhalten sichtbar bleibt.  
  Nebenwirkung: Du verlierst schnelle Sprünge zu zuletzt geöffneten Dateien.

- Nutzt du Flatpak: prüfe pro App die Abschottung („Sandbox“ heißt: App läuft abgeschottet und bekommt gezielte Freigaben).  
  Bezeichnung kann abweichen – nutze die Suche nach: Flatpak, Sandbox, Berechtigungen, Portals.  
  Das senkt Risiko durch Dritt-Apps, besonders bei großen Dateifreigaben.  
  Nebenwirkung: Manche Apps brauchen Ausnahmen, sonst funktionieren Export/Import nicht sauber.

- Nutzt du Ubuntu und ufw: prüfe den Status, denn er kann standardmäßig aus sein, und aktiviere nur, was du verstehst.  
  Bezeichnung kann abweichen – nutze die Suche nach: ufw, uncomplicated firewall, Firewall.  
  Das reduziert offene Ports im Alltag.  
  Nebenwirkung: Drucker, NAS oder Freigaben brauchen oft eine gezielte Regel.

- Prüfe, ob Diagnose-/Absturzberichte automatisch gesendet werden, und stelle es auf „fragen“ oder „aus“, wenn du das willst.  
  Bezeichnung kann abweichen – nutze die Suche nach: Diagnose, Absturzberichte, Telemetrie, Problemberichte.  
  Das reduziert ungewollte Metadatenabflüsse.  
  Nebenwirkung: Support wird manchmal schwieriger, weil weniger Logs verfügbar sind.

</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.

- Setze Vollverschlüsselung sauber neu auf (LUKS/dm-crypt), statt halb nachzurüsten.  
  Das ist oft stabiler und besser dokumentierbar.  
  Nebenwirkung: Fehler beim Neuaufsetzen können Daten kosten, Backups sind Pflicht.

- Trenne Alltag und Administration: Standardnutzer ohne Adminrechte, Admin nur bei Bedarf.  
  Das reduziert Risiko durch „alles läuft als Admin“.  
  Nebenwirkung: Du gibst häufiger ein Passwort ein.

- Schränke Flatpak-Freigaben maximal ein und dokumentiere Ausnahmen pro App.  
  Das macht App-Zugriffe nachvollziehbar.  
  Nebenwirkung: Updates oder neue Funktionen brauchen gelegentlich Nacharbeit.

- Teste DNS-Änderungen systematisch: eine Stelle ändern, dann prüfen, dann nächste.  
  Das macht Ursachen bei Netzproblemen sichtbar.  
  Nebenwirkung: In restriktiven Netzen musst du zeitweise zurück auf Standard.

- Begrenze ausgehende Verbindungen nur, wenn du exakt weißt, was dein System senden darf.  
  Das kann Datenabfluss weiter reduzieren.  
  Nebenwirkung: Fehlregeln brechen Updates, Sync oder Messenger sehr schnell.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob dein Rechner beim Start eine Entsperrung verlangt (Hinweis auf Vollverschlüsselung).  
- Achte darauf, ob Updates regelmäßig angeboten werden und du nicht „Monate hinten dran“ bist.  
- Achte in fremden Netzen darauf, dass keine unerwarteten Freigaben erreichbar sind.

<details><summary>Mehr Prüfungen</summary>

- Prüfe Browser- und Netzwerk-Leaks: [DNS-Leak-Test](/tests/dns-leak-test/) und [IP-Leak-Test](/tests/ip-leak-test/).  
- Nach DNS-über-TLS-Änderungen: teste zuerst normales Surfen, dann Login-Seiten und Captive-Portale.  
- Wenn dein Gerät „verwaltet“ wirkt (Profile, Richtlinien, gesperrte Schalter): behandle es als Firmengerät.

</details>

## Probleme & Lösungen

- **Problem:** Nach Aktivierung der Firewall funktionieren Drucker oder Freigaben nicht mehr.  
  **Lösung:** Erlaube nur die nötigen Dienste für dein Heimnetz, nicht pauschal „alles“.

- **Problem:** Standort ist aus, aber Apps kennen trotzdem ungefähr den Ort.  
  **Lösung:** Prüfe Browser-Webstandort und akzeptiere IP-/WLAN-basierte Ortung als Grenze.

- **Problem:** Nach dem Umstieg fehlen dir zentrale „Privatsphäre-Schalter“ wie auf Mobilplattformen.  
  **Lösung:** Linux ist modular: Updates, Sperre, Verschlüsselung, Firewall und App-Freigaben sind die Basis.

- **Problem:** DNS-Änderungen machen das Netz instabil oder Seiten laden nicht.  
  **Lösung:** Finde zuerst den aktiven Resolver und ändere nur eine Stelle (nicht gleichzeitig Router und System).

- **Problem:** Eine App verlangt Zugriff auf „alle Dateien“.  
  **Lösung:** Prüfe, ob ein Ordner reicht, und gib nur diesen frei, besonders bei Flatpak.

- **Problem:** Du bekommst keine Updates mehr.  
  **Lösung:** Prüfe, ob deine Version noch unterstützt wird, und plane Upgrade oder Wechsel.

## Nicht gelöst

- Gegen Angreifer mit Root/Admin-Rechten auf deinem laufenden System helfen diese Maßnahmen nur begrenzt.  
  Nutze ein sauberes Vorgehen über [Bedrohungsmodell](/start/bedrohungsmodell/) und ggf. [Verdacht: Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/).

- Vollverschlüsselung schützt Daten im ausgeschalteten Zustand, nicht während du angemeldet bist.  
- Firmware/UEFI und Hardware-Manipulationen löst du nicht durch „ein paar Schalter“.  
- Router, Provider und Gegenstellen sehen weiterhin Verbindungen (Metadaten), auch wenn Inhalte geschützt sind.  
- Zwang, Stalkerware oder Überwachung durch Personen mit physischem Zugriff ist ein eigenes Thema: [Stalkerware-Verdacht](/szenarien/stalkerware-verdacht/).

## FAQ

**Warum unterscheiden sich Schritte je Plattform?**

Weil die Schutzmechanismen anders implementiert sind. Nutze die Plattform-Anleitungen, nicht generische Tipps.

**Muss ich alles auf einmal machen?**

Nein. Starte mit Updates, Sperrcode, 2FA und Browser – dann nach Bedarf vertiefen.

**Router zählt auch als Plattform?**

Ja. Er ist oft der wichtigste Punkt im Heimnetz und wird häufig übersehen.

## Quellen

- [Control location services (GNOME Hilfe)](https://help.gnome.org/gnome-help/privacy-location.html)  
- [Turn off or limit file history tracking (GNOME Hilfe)](https://help.gnome.org/gnome-help/privacy-history-recent-off.html)  
- [Full disk encryption (FDE) – Ubuntu Security Documentation](https://documentation.ubuntu.com/security/security-features/storage/encryption-full-disk/)  
- [Firewall – Ubuntu Server Dokumentation](https://documentation.ubuntu.com/server/how-to/security/firewalls/)  
- [resolved.conf(5) – DNSOverTLS (Ubuntu Manpages, deutsch)](https://manpages.ubuntu.com/manpages/focal/de/man5/resolved.conf.5.html)  
- [Sandbox Permissions (Flatpak Dokumentation)](https://docs.flatpak.org/en/latest/sandbox-permissions.html)

## Weiter

- [Updates unter Linux](/updates/linux/)  
- [Geräte-Vollverschlüsselung](/verschluesselung/geraete-vollverschluesselung/)  
- [Firewall-Grundlagen](/netzwerk/firewall/)  
- [DNS unter Linux](/dns/linux/)  
- [Browser Schnellstart](/browser/schnellstart/)  
- [Backups Schnellstart](/backups/schnellstart/)
