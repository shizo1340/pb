---
layout: "@/layouts/DocLayout.astro"
title: "TOTP oder Push: 2FA richtig wählen und sicher einrichten"
url: "/2fa/totp-vs-push/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "TOTP oder Push: Unterschiede, Einrichtung, Tests und Backup-Plan. So aktivierst du 2FA passend zu deinem Alltag, ohne bei Geräteverlust den Zugang zu verlieren."
---
Du willst Zwei-Faktor-Anmeldung aktivieren – und hängst an „TOTP oder Push?“.  
Im Alltag scheitert es dann an Kleinigkeiten: Stress, Fehlklicks, leeres Handy, kein Empfang.

Nach dieser Seite wählst du eine Methode, die zu deinem Alltag passt.  
Und du richtest 2FA so ein, dass Geräteverlust nicht sofort zum Kontoverlust wird.

Sinnvoll, wenn du 2FA aktivieren willst und nicht raten möchtest.  
Grenze: Wenn dein Gerät kompromittiert ist, kann auch 2FA ausgehebelt werden.
  
Stand: 2026-01-27.

## Kurzfazit

- TOTP ist oft robuster (offline), braucht aber saubere Sicherung beim Gerätewechsel.  
- Push ist bequemer, wird aber riskant, wenn du Anfragen „wegklickst“.

## Ziel

- Weg A: Methode wählen und sicher aktivieren.  
- Weg B: Ausfallrisiken senken, ohne dass es nervig wird.  
- Weg C: Missbrauch weiter erschweren, mit mehr Komfortverlust.

Stoppsignal: Wenn du unerwartete Bestätigungen oder Login-Warnungen bekommst, bestätige nichts.  
Sichere zuerst Konto und Sitzungen.

Aufwand + Komfortkosten: 10–25 Minuten.  
Danach meist 1–5 Sekunden pro Anmeldung extra.

## Schnellstart (15 Minuten)

1. Prüfe, was dein Konto wirklich anbietet  
   1. Öffne „Kontosicherheit“ und suche nach 2FA.  
   2. Prüfe, ob „Authenticator-App“ (TOTP) und „Anmeldeaufforderung“ (Push) verfügbar sind.  
   3. Schau nach Wiederherstellungscodes und ob mehrere Methoden parallel gehen.  
   Bezeichnung kann abweichen – nutze die Suche nach: „Sicherheit“, „Zwei-Faktor“, „Authenticator“, „Wiederherstellung“.  
   Du entscheidest mit echten Optionen statt Bauchgefühl. Dafür investierst du ein paar Minuten Menüsuche.

2. Entscheide nach deinem Alltag (TOTP oder Push)  
   TOTP sind zeitbasierte Einmalcodes (meist 6-stellig), die regelmäßig wechseln.  
   Push ist eine Bestätigung per Mitteilung auf einem bereits angemeldeten Gerät.  
   Nimm TOTP, wenn du auch ohne Netz funktionieren willst. Nimm Push, wenn Tippen nervt und du sehr aufmerksam bestätigst.  
   Du bekommst eine Methode, die du wirklich durchhältst. Dafür musst du ehrlich mit Stress und Gewohnheiten rechnen.

3. Richte TOTP so ein, dass es nicht am Handy „klebt“  
   1. Aktiviere TOTP und scanne den QR-Code in deiner Code-App.  
   2. Wenn ein Einrichtungsschlüssel angezeigt wird: sichere ihn wie ein Passwort (offline oder verschlüsselt).  
   3. Stelle am Handy automatische Uhrzeit ein, damit Codes nicht wegen Zeitdrift scheitern.  
   Du hast 2FA, die auch im Flugmodus läuft. Du musst den Schlüssel sicher lagern, sonst wird der Wechsel später schmerzhaft.

4. Richte Push so ein, dass du nicht blind bestätigst  
   1. Nutze Push nur auf Geräten mit Sperrbildschirm.  
   2. Aktiviere, wenn möglich, Zahlabgleich (Number Matching: du bestätigst eine angezeigte Zahl) oder Entsperren statt „Nur Ja/Nein“.  
   3. Entferne Push von alten Geräten, die du nicht mehr nutzt.  
   Bezeichnung kann abweichen – nutze die Suche nach: „Anmeldeaufforderung“, „Zahlabgleich“, „Entsperren“, „Benachrichtigungen“.  
   Du senkst das Risiko von „Push-Müdigkeit“. Push kann trotzdem ausfallen, wenn Benachrichtigungen blockiert sind oder das Netz spinnt.

5. Lege deinen Sicherungsplan an  
   1. Erzeuge Wiederherstellungscodes und speichere sie getrennt vom Handy.  
   2. Wenn möglich: aktiviere eine zweite Methode als Reserve (z. B. TOTP + Push).  
   3. Notiere dir, wo du Codes findest, ohne lange zu suchen.  
   Du bleibst handlungsfähig bei Verlust oder Defekt. Du brauchst einen Ablageort, den du wirklich pflegst.

6. Teste einmal kurz, bevor es ernst wird  
   1. Melde dich ab und wieder an.  
   2. Prüfe, ob TOTP im Offline-Modus funktioniert.  
   3. Prüfe, ob Push-Anfragen klar zuordenbar sind.  
   Du kennst den Ablauf, bevor du unter Druck bist. Das kostet kurz Zeit und kann alte Sitzungen abmelden.

## Wege

### Weg A

1. Aktiviere Wiederherstellungscodes und lagere sie getrennt. So bleibst du handlungsfähig, musst aber die Ablage ernst nehmen.  
2. Nutze TOTP, wenn Empfang wechselhaft ist oder du oft ohne Netz bist. Das ist robust, kostet aber Code-Tippen.  
3. Nutze Push nur mit Sperrbildschirm und möglichst Zahlabgleich oder Entsperren. Das senkt Fehlklicks, macht den Schritt minimal langsamer.  
4. Wenn möglich: nutze zwei Methoden parallel, eine als Reserve. Das reduziert Totalausfälle, erhöht aber Pflegeaufwand.  
5. Entferne alte Geräte aus der Kontoliste. Das schließt Nebenwege, kann aber alte Logins sofort beenden.  
6. Aktiviere Anmeldebenachrichtigungen, falls vorhanden. Das macht Angriffe sichtbarer, kann aber nerven, wenn du oft einloggst.  
7. Kontrolliere die automatische Uhrzeit am Handy. Das verhindert TOTP-Fehler, kostet aber einmal Aufmerksamkeit.

<details><summary>Weg B (Fortgeschritten)</summary>

- Nutze Push nur, wenn Zusatzinfos angezeigt werden (Ort, Gerät, App) oder Zahlabgleich aktiv ist. Das bremst Angriffe, kann aber mehr Aufmerksamkeit verlangen.  
- Lege TOTP zusätzlich auf ein zweites, selten genutztes Gerät. Das hilft bei Handyverlust, erhöht aber Aufwand für sichere Aufbewahrung.  
- Prüfe „vertraute Geräte“ und beende alles Unklare. Das reduziert Risiko, kann aber legitime Sitzungen beenden.  
- Halte Wiederherstellungscodes aktuell, wenn du 2FA änderst. Das verhindert Überraschungen, verlangt aber Routine.  
- Wenn verfügbar: nutze Passkeys (Anmeldung ohne Passwort, mit Geräteschlüssel) und behalte 2FA als Rückfall. Siehe [Passkeys](/2fa/passkeys/). Das senkt Phishing-Risiko, kann aber auf alten Geräten haken.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

- Bevorzuge phishing-robuste Faktoren wie Passkeys oder Sicherheitsschlüssel. Das stoppt viele Echtzeit-Tricks, kostet aber Umgewöhnung.  
- Trenne Geräte konsequent: Push nur auf Gerät A, TOTP-Reserve nur auf Gerät B. Das begrenzt Schaden, ist aber unkomfortabel.  
- Lege Sicherungen offline ab und verschlüssele digitale Kopien zusätzlich. Das reduziert Leaks, macht Zugriff langsamer.  
- Prüfe regelmäßig Sitzungen und beende Unbekanntes. Das hält Konten sauber, kann aber dich selbst abmelden.  
- Halte Kontowiederherstellung schlank, wenn du sie kontrolliert nutzen kannst. Das senkt Angriffsfläche, kann im Notfall strenger sein.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob jede Anmeldung eine erwartete 2FA-Abfrage auslöst.  
- Achte darauf, ob du bei Push nie unerwartete Bestätigungsanfragen siehst.  
- Achte darauf, ob TOTP-Codes stabil akzeptiert werden, auch im Flugmodus.

<details><summary>Mehr Prüfungen</summary>

- Achte darauf, ob entfernte Geräte wirklich keinen Zugriff mehr haben.  
- Achte darauf, ob du Wiederherstellungscodes in 30 Sekunden findest.  
- Achte darauf, ob Uhrzeit und Zeitzone korrekt und automatisch sind.

</details>

## Probleme & Lösungen

**Problem:** Push kommt nicht an oder ist stark verzögert.  
**Lösung:** Prüfe Stromsparmodus, Benachrichtigungen und Datenverbindung. Nutze vorübergehend TOTP oder Wiederherstellungscodes.

**Problem:** Du bekommst Push-Anfragen, ohne dass du dich einloggst.  
**Lösung:** Bestätige nichts. Ändere das Passwort, beende Sitzungen und prüfe Wiederherstellungsdaten. Siehe [Phishing](/betrug/phishing/) und [Sitzungen & Geräte](/konto/sitzungen-geraete/).

**Problem:** TOTP-Code wird abgelehnt.  
**Lösung:** Aktiviere automatische Uhrzeit, warte den nächsten Code ab und versuche erneut. Wenn es bleibt: TOTP neu einrichten und alte Einträge löschen.

**Problem:** Handy verloren oder defekt – 2FA blockiert alles.  
**Lösung:** Nutze Wiederherstellungscodes oder die zweite Methode. Wenn beides fehlt: Kontowiederherstellung starten. Siehe [Zugang verloren](/konto/zugang-verloren/).

**Problem:** Gerätewechsel: Neues Handy, alter Faktor ist weg.  
**Lösung:** Ziehe 2FA um, solange das alte Gerät noch da ist. Erst danach alte Geräte entfernen. Siehe [Gerätewechsel bei 2FA](/2fa/geraetewechsel/).

**Problem:** Der Dienst bietet nur Push oder nur TOTP.  
**Lösung:** Nimm die verfügbare Methode und kompensiere: Push strenger absichern, bei TOTP den Sicherungsplan sauber getrennt halten.

## Nicht gelöst

- 2FA schützt nicht vor einem kompromittierten Gerät (Schadsoftware kann Sitzungen abgreifen).  
- 2FA verhindert nicht, dass ein gestohlener Sitzungsschlüssel weiter genutzt wird.  
- Push bleibt anfällig, wenn du unter Stress doch „Ja“ drückst.  
- TOTP hilft nicht, wenn der Einrichtungsschlüssel unsicher gespeichert oder kopiert wird.  
- Threat Model: Bei Admin-Zugriff, Stalkerware oder Zwang kann ein Angreifer Bestätigungen mitsehen oder erzwingen.  
- Kontowiederherstellung hängt am Anbieterprozess und kann trotz 2FA ein Risiko bleiben.

## Quellen

- [BSI: Zwei-Faktor-Authentisierung](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Zwei-Faktor-Authentisierung/zwei-faktor-authentisierung_node.html)
- [BSI: Bewertung von 2FA-Verfahren](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Zwei-Faktor-Authentisierung/Bewertung-2FA-Verfahren/bewertung-2fa-verfahren_node.html)
- [RFC 6238: TOTP – Time-Based One-Time Password Algorithm](https://datatracker.ietf.org/doc/html/rfc6238)
- [NIST SP 800-63B: Digital Identity Guidelines](https://pages.nist.gov/800-63-3/sp800-63b.html)
- [CISA: Implementing Phishing-Resistant MFA (PDF)](https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf)
- [CISA: Implement Number Matching in MFA Apps (PDF)](https://www.cisa.gov/sites/default/files/publications/fact-sheet-implement-number-matching-in-mfa-applications-508c.pdf)

## Weiter

- [2FA Überblick](/2fa/)
- [2FA Schnellstart](/2fa/schnellstart/)
- [Backup-Strategie für 2FA](/2fa/backup-strategie/)
- [Recovery Codes](/2fa/recovery-codes/)
- [2FA ohne SMS](/telefonnummer/2fa-ohne-sms/)
- [Passkeys](/2fa/passkeys/)
