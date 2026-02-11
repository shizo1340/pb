---
layout: "@/layouts/DocLayout.astro"
title: "2FA beim Gerätewechsel sicher umziehen – Schritt-für-Schritt"
url: "/2fa/geraetewechsel/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "2FA beim Gerätewechsel: So ziehst du Passkeys, Einmalcodes und Recovery-Codes sicher um, testest den Login auf dem neuen Gerät und vermeidest Aussperren."
---
Beim Gerätewechsel hängt die Zwei-Faktor-Authentisierung (2FA) oft noch am alten Gerät. Genau dann wird der nächste Login zur Hürde – bis hin zur Aussperrung.

Mit dieser Anleitung ziehst du 2FA kontrolliert um. Danach klappt der Login auf dem neuen Gerät, und du hast einen Notfallweg.

Sinnvoll, wenn du Smartphone oder Computer wechselst oder zurücksetzt.  
Grenze: Wenn das alte Gerät weg ist und kein Notfallweg existiert, kann es je nach Anbieter scheitern.
  
Stand: 2026-01-27.

**Kurzfazit**
- Erst neuen Faktor hinzufügen und testen, dann den alten entfernen.  
- Recovery-Codes offline sichern und alte Sitzungen konsequent aufräumen.

> **Wenn das alte Gerät schon weg ist:** Nutze zuerst nur offizielle Wiederherstellungswege (Recovery-Codes, Wiederherstellungs-E-Mail, Support). Siehe [Zugang verloren](/konto/zugang-verloren/) und [Konto-Wiederherstellung](/konto/wiederherstellung/). Lösche oder entferne keine Faktoren „auf Verdacht“.

## Ziel

Weg A: Du fügst auf dem alten Gerät eine zweite Methode hinzu und testest den Login auf dem neuen Gerät.  
Weg B: Du überträgst Einmalcodes in eine Einmalcode-App und räumst danach auf.  
Weg C: Du baust Redundanz ein, damit Gerätewechsel künftig langweilig sind.

Stoppsignal: Wenn du dich gerade nur noch über das alte Gerät anmelden kannst, lösche dort nichts, bevor der Login auf dem neuen Gerät einmal geklappt hat.  
Aufwand: meist 15–45 Minuten. Komfortkosten: kurzzeitig mehr Bestätigungen, danach wieder normal.

## Schnellstart (20 Minuten)

1) Wichtigste Konten priorisieren  
- Starte mit E-Mail-Postfach, Passwort-Manager und Haupt-Cloud.  
- Notiere pro Konto die 2FA-Art (Passkey, Einmalcodes, SMS, Sicherheitsschlüssel).  
So vermeidest du, dass „ein Konto alle anderen blockiert“. Du brauchst dafür kurz Fokus und Ruhe.

2) Notfallweg prüfen und sichern  
- Suche nach Recovery-Codes oder einer zweiten Methode.  
- Wenn möglich: Recovery-Codes neu erzeugen und offline ablegen (Papier oder verschlüsselter Tresor).  
Das ist dein Rettungsanker, wenn ein Gerät ausfällt. Wer die Codes findet, kann oft auch ohne 2FA ins Konto.

3) Neuen Faktor hinzufügen (alter bleibt aktiv)  
- Melde dich dort an, wo es noch funktioniert (oft altes Gerät).  
- Füge auf dem neuen Gerät eine zusätzliche Methode hinzu (z. B. neuer Passkey oder neue Einmalcodes).  
Bezeichnung kann abweichen – nutze die Suche nach: „Sicherheit“, „2FA“, „Passkey“, „Einmalcodes“.  
Du bekommst sofort Redundanz. Kurzzeitig kann es mehr Abfragen beim Anmelden geben.

4) Umzug testen, bevor du irgendetwas entfernst  
- Auf dem neuen Gerät einmal abmelden und wieder anmelden.  
- Ziel: Login klappt ohne das alte Gerät, und der Notfallweg ist sichtbar.  
Du findest Probleme, solange du noch beide Geräte hast. Das kann extra Schritte auslösen, wenn der Anbieter „neues Gerät“ strenger prüft.

5) Geräte- und Sitzungslisten aufräumen  
- Öffne „Geräte“, „Sitzungen“ oder „Angemeldet auf…“.  
- Beende Unbekanntes und Altes, aber erst nach erfolgreichem Test-Login.  
So reduzierst du das Risiko durch vergessene Sitzungen. Nebenwirkung: Manche Geräte verlangen danach einen neuen Login.

6) Erst jetzt: altes Gerät zurücksetzen, verkaufen oder abgeben  
- Entferne den alten Faktor nur, wenn der neue Login sicher funktioniert.  
- Setze das alte Gerät erst danach zurück.  
Damit verhinderst du die klassische Aussperre-Falle. Es kostet etwas Geduld, weil du „erst testen, dann löschen“ durchhalten musst.

7) Wenn SMS im Spiel ist: ablösen oder absichern  
- Aktualisiere die Nummer im Konto, wenn sie sich ändert.  
- Ergänze eine Methode ohne SMS (Passkey oder Einmalcodes). Siehe [2FA ohne SMS](/telefonnummer/2fa-ohne-sms/).  
Du senkst das Risiko durch Nummernangriffe. Nebenwirkung: Du musst einmal sauber umstellen und dokumentieren.

## Wege

### Weg A

1. Aktualisiere altes und neues Gerät (Systemupdates, Uhrzeit automatisch).  
2. Stelle sicher, dass dein E-Mail-Postfach erreichbar ist.  
3. Beginne mit E-Mail, Passwort-Manager und Cloud.  
4. Füge pro Konto auf dem neuen Gerät eine zusätzliche 2FA-Methode hinzu (alte bleibt aktiv).  
5. Erzeuge neue Recovery-Codes und lege sie offline ab.  
6. Teste den Login auf dem neuen Gerät ohne Hilfe des alten.  
7. Wiederhole das für Bezahlung, soziale Netzwerke und Arbeit.  
8. Räume Sitzungen und Gerätelisten auf.  
9. Erst danach: entferne alte Faktoren oder setze das alte Gerät zurück.

<details><summary>Weg B (Fortgeschritten)</summary>

- Nutze eine Einmalcode-App (App für zeitbasierte Einmalcodes) nur mit automatischer Uhrzeit.  
- Wenn die App einen Transfer anbietet: übertrage zuerst, teste dann 2–3 Konten per Login.  
- Ergänze Recovery-Codes auch dann, wenn der Transfer geklappt hat.  
- Entferne den alten Faktor erst nach einem Login nur mit dem neuen Gerät.  
- Räume danach „vertrauenswürdige Geräte“ und Sitzungen auf, damit das alte Gerät nicht still Zugriff behält.

Das spart bei vielen Konten Neueinrichtung und Tippfehler. Es erhöht aber die Versuchung, Tests zu überspringen.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.  
- Plane pro wichtigem Konto mindestens zwei unabhängige Wege (z. B. Passkey plus Recovery-Codes).  
- Vermeide, dass ein einzelnes Gerät der einzige zweite Faktor ist.  
- Passkeys sind schlüsselbasierte Anmeldungen ohne Passwort – prüfe, ob sie auf dem neuen Gerät verfügbar sind, bevor du das alte zurücksetzt.  
- Behandle Einmalcode-Geheimnisse wie Passwörter: nur verschlüsselt speichern und streng begrenzen.  
- Entferne alte Geräte konsequent aus Sitzungslisten, sobald der Umzug bestätigt ist.

Du musst mehr Dinge sicher verwalten. Dafür sinkt die Chance stark, dass ein Geräteverlust dich komplett aussperrt.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob du dich auf dem neuen Gerät anmelden kannst, ohne das alte Gerät zu benutzen.  
- Prüfe, ob im Konto mindestens zwei Wege sichtbar sind (z. B. zweite Methode plus Recovery-Codes).  
- Achte darauf, ob Sicherheitsmails zu „neuem Gerät“ und „neuer 2FA-Methode“ zu dir passen.

<details><summary>Mehr Checks</summary>

- Schau in der Geräte- oder Sitzungsliste, ob das neue Gerät auftaucht und das alte entfernbar ist.  
- Prüfe, ob dein Passwort-Manager auf dem neuen Gerät entsperrbar ist und die 2FA-Einträge verfügbar sind.

</details>

## Probleme & Lösungen

- **Problem:** Der zweite Faktor ist nur auf dem alten Gerät, und das ist weg.  
  **Lösung:** Nutze ausschließlich den offiziellen Wiederherstellungsweg des Anbieters (Recovery-Codes, Wiederherstellungs-E-Mail, Support-Verfahren).

- **Problem:** Einmalcodes sind „immer falsch“.  
  **Lösung:** Aktiviere automatische Uhrzeit und Zeitzone. Wähle das richtige Konto in der App und versuche erneut.

- **Problem:** Nach dem Gerätewechsel blockiert der Anbieter den Login oder fordert zusätzliche Prüfungen.  
  **Lösung:** Nutze ein bekanntes Netz und ein bekanntes Gerät. Warte kurz und bestätige über E-Mail oder eine bestehende Sitzung, falls möglich.

- **Problem:** Recovery-Codes funktionieren nicht.  
  **Lösung:** Prüfe, ob du nach Änderungen neue Codes erzeugt hast und jetzt alte verwendest. Erzeuge bei funktionierendem Zugang einen neuen Satz.

- **Problem:** Das alte Gerät bleibt als „vertrauenswürdig“ oder „angemeldet“ sichtbar.  
  **Lösung:** Beende die Sitzung aktiv in der Geräte- oder Sitzungsliste und ändere bei Zweifel zusätzlich das Passwort.

- **Problem:** SMS-2FA hängt noch an der alten Nummer.  
  **Lösung:** Aktualisiere die Nummer im Konto und ergänze eine Methode ohne SMS, z. B. Einmalcodes oder Passkeys. Siehe [2FA ohne SMS](/telefonnummer/2fa-ohne-sms/).

## Nicht gelöst

- Ein Gerätewechsel hilft nicht, wenn ein Gerät kompromittiert ist (Schadsoftware, Stalkerware, Admin-Zugriff).  
- Wenn Angreifer bereits Zugriff auf eine aktive Sitzung haben, reicht der Umzug nicht. Du brauchst Sitzungsbereinigung und oft einen Passwortwechsel.  
- Anbieter können Wiederherstellung ablehnen oder verzögern, wenn Identitätsnachweise fehlen.  
- SMS bleibt anfällig für Nummernangriffe wie SIM-Swap oder Portierung. Das ändert ein Gerätewechsel nicht.  
- Bei Zwang oder erzwungenem Zugriff schützt dich 2FA nicht zuverlässig, wenn Entsperrcode oder Gerätefreigabe erpresst wird.

## Quellen

- [BSI – Zwei-Faktor-Authentisierung](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Zwei-Faktor-Authentisierung/zwei-faktor-authentisierung_node.html)  
- [BSI – Die Kryptografie hinter Passkey](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Passkeys/Kryptografie-hinter-Passkey/kryptografie-hinter-passkey.html)  
- [NIST SP 800-63B – Digital Identity Guidelines](https://pages.nist.gov/800-63-3/sp800-63b.html)  
- [RFC 6238 – TOTP: Time-Based One-Time Password Algorithm](https://datatracker.ietf.org/doc/html/rfc6238)  
- [W3C – Web Authentication (WebAuthn) Level 2](https://www.w3.org/TR/webauthn-2/)  
- [FIDO Alliance – Passkeys](https://fidoalliance.org/passkeys/)

## Weiter

- [2FA](/2fa/)  
- [2FA Schnellstart](/2fa/schnellstart/)  
- [Recovery-Codes](/2fa/recovery-codes/)  
- [Passkeys](/2fa/passkeys/)  
- [Konto: Gerätewechsel](/konto/geraetewechsel/)  
- [Zugang verloren](/konto/zugang-verloren/)
