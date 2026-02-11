---
layout: "@/layouts/DocLayout.astro"
title: "E-Mail-Adresse geleakt: Vorgehen gegen Konto-Übernahme"
url: "/datenleaks/wenn-email-geleakt/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-02-09"
robots: "index,follow"
description: "E-Mail-Adresse geleakt? Priorisierte Schritte: Passwort und 2FA absichern, Weiterleitungen prüfen, Aliases einsetzen und Phishing nach dem Leak vermeiden."
---
Nach einem Leak wird deine E-Mail-Adresse häufiger Ziel für Spam und Phishing.
Gefährlicher sind automatisierte Login-Versuche mit gestohlenen Passwörtern (Credential Stuffing: Wiederverwendung geleakter Zugangsdaten).

Ziel: Du machst dein E-Mail-Konto schwer übernehmbar, stoppst heimliche Weiterleitungen und reduzierst Folgeschäden bei künftigen Leaks.

Sinnvoll, wenn du plötzlich mehr Spam/Phishing bekommst oder dein Postfach „an allem hängt“ (Passwort-Resets, Rechnungen, Verträge).
Grenze: Du bekommst die Adresse nicht „aus dem Internet zurück“, aber du kannst die Folgen deutlich senken.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

- Weg A: Konto absichern, Sitzungen prüfen, Weiterleitungen ausschließen.
- Weg B: Folgeangriffe abfangen, kritische Konten absichern, Alias-Strategie sauber starten.
- Weg C: Langfristig trennen und überwachen (z. B. eigene Domain, Catch-all, strengere Filter).

Stoppsignal: Wenn du unbekannte Weiterleitungen siehst, Logins aus fremden Ländern auftauchen oder du ausgesperrt bist, behandle es als akute Übernahme und arbeite zusätzlich [Zugang verloren](/konto/zugang-verloren/) und [Verdacht: Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/).

Aufwand: Weg A 10–15 Min, Weg B 30–60 Min, Weg C 1–2 Std.
Komfortkosten: Mehr Bestätigungen beim Login und etwas mehr Pflege durch Aliases.

## Schnellstart (15 Minuten)

1) **Passwort für dein E-Mail-Konto ändern.**  
Nutze ein einzigartiges, zufälliges Passwort im [Passwort-Manager](/passwoerter/passwort-manager/).  
Das senkt das Übernahme-Risiko sofort, kann aber Apps abmelden und neue Logins nötig machen.

2) **Zwei-Faktor-Login aktivieren.**  
Bevorzugt Anmeldeschlüssel (Passkeys: passwortlose Anmeldung mit Schlüsselpaar) oder Einmalcodes aus einer Authenticator-App (TOTP: zeitbasierte Einmalcodes), nicht SMS.  
Das blockiert viele Angriffe, kostet aber beim Anmelden einen zusätzlichen Schritt.

3) **Sitzungen und Geräte kontrollieren.**  
Melde unbekannte Geräte ab und ändere danach das Passwort erneut, wenn etwas verdächtig ist.  
Das wirft Angreifer raus, kann aber auch deine eigenen Geräte/Programme trennen.

4) **Weiterleitungen, Regeln und fremde Postfächer prüfen.**  
Entferne alles, was du nicht selbst eingerichtet hast (Weiterleitung, „Regel“, „Filter“, „Automatisch antworten“).  
Das stoppt stilles Abfließen von Mails, kann aber legitime Automationen unterbrechen.

5) **Recovery absichern.**  
Lege Wiederherstellungs-Codes sicher ab und aktualisiere Backup-Mailadresse/Nummer.  
Das rettet dich bei Verlust des zweiten Faktors, ist aber nur sicher, wenn auch diese Wege geschützt sind.

## Wege

### Weg A

1) Melde dich am besten im Browser in deinem E-Mail-Konto an.  
So siehst du Sicherheits- und Weiterleitungsfunktionen meist vollständiger.  
Das ist zuverlässiger, aber weniger bequem als nur die App zu nutzen.

2) Ändere das Konto-Passwort und speichere es im [Passwort-Manager](/passwoerter/passwort-manager/).  
Ein neues Passwort ist nur dann sinnvoll, wenn es nirgendwo sonst verwendet wird.  
Du musst danach meist alle Geräte neu anmelden.

3) Aktiviere Zwei-Faktor-Login und hinterlege Wiederherstellungs-Codes.  
Teste direkt danach: Abmelden, neu anmelden, zweiter Faktor wird abgefragt.  
Das schützt stark, aber du darfst die Codes nicht im Postfach selbst speichern.

4) Prüfe „angemeldete Geräte/Sitzungen“ und melde alles Unbekannte ab.  
Achte auf Geräte, Orte und Zeiten, die nicht zu dir passen.  
Das ist schnell wirksam, kann aber legitime Altgeräte aussperren.

5) Prüfe Weiterleitungen und Regeln auf unbekannte Ziele.  
Entferne Weiterleitungen an fremde Adressen und verdächtige Filter („alle Mails markieren/archivieren“).  
Das verhindert Datenabfluss, kann aber deine Sortierung durcheinanderbringen.

<details><summary>Weg B (Fortgeschritten)</summary>

Bezeichnung kann abweichen – nutze die Suche nach: Weiterleitung, Regeln, Filter, Sicherheit, Sitzungen.

1) Prüfe, ob es „App-Passwörter“ oder alte Mail-Protokolle (IMAP/POP) gibt.  
Deaktiviere sie, wenn du sie nicht brauchst, oder erstelle sie neu.  
Das reduziert stille Zugänge, kann aber E-Mail-Programme kurzzeitig lahmlegen.

2) Schalte Login-Benachrichtigungen ein.  
So siehst du neue Geräte sofort und kannst reagieren.  
Es kann mehr Meldungen geben, wenn du häufig Geräte wechselst.

3) Priorisiere die wichtigsten Konten, die über diese Mail zurückgesetzt werden können.  
Ändere dort Passwörter und aktiviere Zwei-Faktor-Login, beginnend mit Finanzen, Shops, Cloud und Social.  
Das senkt Kettenreaktionen, kostet aber einmal Zeit.

4) Starte eine Alias-Strategie für neue Konten.  
Nutze pro Dienst eine eigene Adresse (Alias), damit ein Leak später eindeutig zuordenbar ist.  
Das hilft beim Aufräumen, aber manche Formulare akzeptieren bestimmte Alias-Formen nicht.

5) Baue einen „Reset-Schutz“ als Routine.  
Wenn eine Mail „Passwort zurücksetzen“ fordert: nie aus der Mail heraus, sondern Dienst manuell öffnen und dort prüfen.  
Das verhindert Klickfallen, ist aber anfangs ungewohnt.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

1) Trenne Identitäten sauber über eine eigene Domain oder mehrere Postfächer.  
Richte pro Bereich getrennte Adressen ein (z. B. Logins, Kontakte, Newsletter).  
Das macht Leaks besser beherrschbar, kostet aber Geld und Administrationsaufwand.

2) Nutze Catch-all und strikte Filter nur, wenn du es wirklich pflegen willst.  
Lege Regeln an, die neue/unbekannte Empfänger-Adressen markieren oder in Quarantäne schieben.  
Das ist stark gegen Streu-Spam, kann aber echte Mails „verschlucken“, wenn Regeln zu hart sind.

3) Härtung für kritische Logins: Anmeldeschlüssel plus zweiter unabhängiger Faktor.  
Wenn möglich, nutze zusätzlich einen Hardware-Sicherheitsschlüssel.  
Das ist sehr robust, aber du musst den Schlüssel sicher verwahren und ggf. Ersatz einplanen.

4) Nutze Header-Checks bei verdächtigen Mails.  
Lerne, wie du Absenderpfade und Weiterleitungen prüfst: [E-Mail-Header](/email/header/).  
Das entlarvt viele Fälschungen, braucht aber etwas Übung.

</details>

## So merkst du, dass es wirkt

Achte darauf, ob in der Sitzungs-/Geräteübersicht nur noch deine Geräte stehen.
Achte darauf, ob keine Weiterleitung oder Regel mehr an unbekannte Adressen zeigt.
Achte darauf, ob ein Login auf einem neuen Gerät zuverlässig den zweiten Faktor verlangt.

<details><summary>Mehr Checks</summary>

Achte darauf, ob „Passwort zurücksetzen“-Mails deutlich seltener durchkommen oder von dir schnell als Spam erkannt werden.  
Achte darauf, ob Aliases eindeutig zeigen, welcher Dienst deine Adresse weitergegeben hat.  
Achte darauf, ob Benachrichtigungen bei neuen Logins zeitnah ankommen.

</details>

## Probleme & Lösungen

**Problem:** Du bekommst viele „Passwort zurücksetzen“-Mails, ohne etwas angefordert zu haben.  
**Lösung:** Nichts anklicken, Dienst manuell öffnen, Passwort dort ändern und Zwei-Faktor-Login aktivieren.

**Problem:** Nach dem Passwortwechsel funktioniert dein Mail-Programm nicht mehr.  
**Lösung:** Konto neu anmelden oder ein neues App-Passwort erstellen; alte App-Passwörter löschen.

**Problem:** Du findest eine Weiterleitung, die du nicht kennst.  
**Lösung:** Sofort löschen, alle Sitzungen abmelden, Passwort ändern und Zwei-Faktor-Login neu einrichten.

**Problem:** Du wirst trotz 2FA weiter mit Login-Warnungen bombardiert.  
**Lösung:** Prüfe Wiederverwendung von Passwörtern bei anderen Diensten und arbeite [Datenleak prüfen](/datenleaks/check/).

**Problem:** Ein Dienst akzeptiert deinen Alias nicht (z. B. mit „+“).  
**Lösung:** Nutze Anbieter-Aliases ohne Plus oder eine eigene Domain-Weiterleitung, falls vorhanden.

**Problem:** Du hast den zweiten Faktor verloren (Handy weg).  
**Lösung:** Nutze Recovery-Codes oder Wiederherstellung und sichere danach neu: [Recovery-Codes](/2fa/recovery-codes/).

## Nicht gelöst

- Die Adresse bleibt möglicherweise dauerhaft in Leak-Listen und wird weiter angeschrieben.
- Spam und Phishing verschwinden nicht komplett, sie werden nur beherrschbarer.
- Wenn dein Gerät kompromittiert ist (Malware, Stalkerware), helfen Konto-Einstellungen nur begrenzt.
- Wenn Angreifer Admin-Zugriff im E-Mail-Konto haben oder du zur Freigabe gezwungen wirst, brauchst du zusätzliche Maßnahmen und ggf. Hilfe.
- Daten, die andere bereits aus deinen Mails kopiert haben, holst du nicht zurück.

## FAQ

**Was ist das Wichtigste nach einem Leak?**

Passwörter ändern (wenn Wiederverwendung), 2FA aktivieren, Recovery prüfen und Accounts beobachten.

**Muss ich alle Passwörter ändern?**

Nicht automatisch. Priorisiere nach Wiederverwendung und Konto-Kritikalität.

**Woher weiß ich, ob ich betroffen bin?**

Nutze seriöse Leak-Checks und die eigenen Login-/Sicherheitsmeldungen.

## Quellen

- [BSI: Zwei-Faktor-Authentisierung](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Zwei-Faktor-Authentisierung/zwei-faktor-authentisierung_node.html)
- [BSI: Schutz gegen Phishing](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Spam-Phishing-Co/Passwortdiebstahl-durch-Phishing/Schutz-gegen-Phishing/schutz-gegen-phishing_node.html)
- [BSI: Sichere Passwörter (Faktenblatt PDF)](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/Checklisten/sichere_passwoerter_faktenblatt.pdf?__blob=publicationFile&v=4)
- [W3C: Web Authentication (WebAuthn) Level 3](https://www.w3.org/TR/webauthn-3/)
- [IETF: RFC 6238 (TOTP)](https://datatracker.ietf.org/doc/html/rfc6238)
- [NIST: SP 800-63-4 Digital Identity Guidelines](https://pages.nist.gov/800-63-4/)

## Weiter

- [Datenleak prüfen](/datenleaks/check/)
- [Phishing nach einem Leak](/datenleaks/phishing-nach-leak/)
- [E-Mail-Aliases](/email/aliases/)
- [Passkeys](/2fa/passkeys/)
- [Sitzungen & Geräte](/konto/sitzungen-geraete/)
- [Passwort-Manager](/passwoerter/passwort-manager/)
