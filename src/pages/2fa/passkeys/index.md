---
layout: "@/layouts/DocLayout.astro"
title: "Passkeys einrichten: Gerätewechsel und Notfallzugang planen"
url: "/2fa/passkeys/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Passkeys einrichten und absichern: auf mehreren Geräten nutzen, Gerätewechsel planen und Notfallzugang mit Codes oder Zweitgerät testen – ohne Aussperren."
---
Passwörter nerven und sind ein Risiko. Sie werden vergessen, wiederverwendet und bei Phishing auf gefälschten Login-Seiten abgegriffen.

Passkeys (Zugangsschlüssel) entschärfen das. Du bestätigst die Anmeldung am Gerät, statt ein Passwort einzutippen.

Sinnvoll, wenn du Konten regelmäßig am Handy oder Laptop nutzt.  
Grenze: Wenn du nur ein Gerät hast und keine Wiederherstellung, ist das riskant.
  
Stand: 2026-01-27.

## Kurzfazit

- Richte Passkeys auf mindestens zwei Geräten ein und teste den Login einmal bewusst.
- Sichere einen Notfallzugang offline und räume alte Geräte in der Kontoliste auf.

## Ziel

Weg A: Passkey hinzufügen und nutzen, ohne alles umzustellen.  
Weg B: Passkeys sauber auf mehrere Geräte verteilen und Wiederherstellung absichern.  
Weg C: Strenger absichern, mit weniger Komfort und mehr Kontrolle.

Stoppsignal: Stell nicht um, wenn du deinen Gerätezugang (PIN/Passwort) nicht sicher beherrschst oder keinen Notnagel hast.  
Aufwand + Komfortkosten: 10–30 Minuten. Danach meist weniger Reibung beim Anmelden.

Einordnung (Passkeys vs. 2FA):
- Ein Passkey ersetzt oft das Passwort, 2FA ist meist ein zusätzlicher Schritt.
- Passkeys sind in der Regel besser gegen Phishing geschützt, weil sie an die echte Website gebunden sind.
- Du brauchst trotzdem fast immer einen Rückfallweg, sonst droht Aussperren.

## Schnellstart (10 Minuten)

1) **Unterstützung finden**
- Öffne die Sicherheits- oder Anmelde-Einstellungen deines Kontos.
- Suche nach „Passkey“, „Zugangsschlüssel“ oder „Sicherheitsschlüssel“.
- Starte mit deinem wichtigsten Konto.

Bezeichnung kann abweichen – nutze die Suche nach: Passkey, Zugangsschlüssel, Sicherheitsschlüssel.  
Du sparst Zeit und erkennst früh, ob der Umstieg realistisch ist. Manche Dienste zeigen Passkeys erst in der App oder nach Updates.

2) **Ersten Passkey auf dem Hauptgerät anlegen**
- Nimm das Gerät, das du täglich nutzt.
- Lege den Passkey an und bestätige mit Biometrie oder Geräte-PIN.
- Benenne den Eintrag, falls möglich (zum Beispiel „Mein Handy“).

Du reduzierst Login-Fallen, weil kein Passwort abgegriffen werden kann. Wenn jemand deinen Entsperrcode kennt, kann er oft auch den Passkey nutzen.

3) **Notnagel aktiv lassen**
- Prüfe, welche Alternative noch gilt (Passwort, App-Bestätigung, 2FA, Codes).
- Entscheide dich für genau einen verlässlichen Rückfallweg.
- Stelle sicher, dass du ihn auch ohne dein Handy nutzen kannst.

Du senkst das Risiko, dich selbst auszusperren. Jede zusätzliche Rückfalloption vergrößert aber die Angriffsfläche, wenn du sie schlampig schützt.

4) **Zweitgerät hinzufügen**
- Lege auf einem zweiten, regelmäßig erreichbaren Gerät ebenfalls einen Passkey an.
- Nutze möglichst ein Gerät, das du wirklich kontrollierst (nicht „gelegentlich geliehen“).
- Falls du kein Zweitgerät hast, setze den Fokus auf Recovery-Codes und eine zweite Methode.

Du bleibst handlungsfähig bei Diebstahl, Defekt oder Gerätewechsel. Das Zweitgerät muss genauso sauber gesperrt und aktualisiert sein.

5) **Login einmal bewusst testen**
- Melde dich einmal ab.
- Melde dich neu an und bestätige am Gerät.
- Prüfe, ob du ohne Passwort durchkommst.

Du merkst sofort, ob der Passkey wirklich genutzt wird. Ein Abmelden kann Sitzungen beenden und Sicherheitswarnungen auslösen.

6) **Aufräumen und Notfallzugang sicher ablegen**
- Entferne alte Geräte und unbekannte Passkeys in der Kontoliste.
- Lege Recovery-Codes offline ab, getrennt vom Gerät.
- Notiere dir, wo du sie findest (ohne Codes selbst ins Handy zu tippen).

Du verringerst die Angriffsfläche und hast im Ernstfall einen Plan. Wenn du das falsche Gerät entfernst oder Codes verlierst, kann das den Zugang erschweren.

## Wege

### Weg A

1. Härte zuerst deinen Geräteschutz (starke PIN oder gutes Gerätepasswort, nicht teilen). Das schützt Passkeys indirekt. Es macht Entsperren aber etwas unbequemer.  
2. Lege im wichtigsten Konto einen Passkey an und bestätige am Gerät. Das macht Logins robuster gegen Phishing. Je nach Dienst klappt es nicht auf jedem Gerät.  
3. Entscheide dich für einen Notnagel und sichere ihn so, dass du ihn ohne Handy erreichst. Das verhindert Aussperren. Es ist ein zusätzliches Geheimnis, das gut verwahrt werden muss.  
4. Ergänze ein Zweitgerät mit eigenem Passkey. Das reduziert Stress bei Verlust. Es bedeutet aber Pflege beim Gerätewechsel.  
5. Teste den Ablauf einmal komplett (abmelden, anmelden, bestätigen). Das zeigt dir Schwachstellen früh. Es kann kurzfristig nerven, wenn der Dienst Zusatzabfragen stellt.  
6. Entferne alte Geräte und unbekannte Anmeldemethoden in der Kontoübersicht. Das verringert die Angriffsfläche. Ein Fehler kann dich aber aussperren.  
7. Lege fest, wie du beim Gerätewechsel vorgehst: erst neues Gerät hinzufügen, dann altes entfernen. Das verhindert Chaos. Es braucht Disziplin, wenn es schnell gehen muss.

<details><summary>Weg B (Fortgeschritten)</summary>

- Plane pro wichtigem Konto zwei unabhängige Zugänge (zwei Geräte oder Gerät + Codes). Das senkt Aussperr-Risiko. Es erhöht aber Pflegeaufwand.  
- Wenn Passkeys synchronisiert werden (zum Beispiel über den System-Schlüsselbund), sichere dieses Konto besonders gut ab. Das ist bequem. Es verlagert aber Risiko auf dieses eine Konto.  
- Prüfe regelmäßig „angemeldete Geräte/Sitzungen“ und entferne Einträge, die du nicht zuordnen kannst. Das entdeckt Fremdzugriff früher. Es kann aber auch legitime Geräte abmelden.  
- Bei Arbeits- oder Schulgeräten: kläre, ob zentrale Geräteverwaltung (Mobile-Device-Management, MDM) Passkeys beeinflusst. Das spart Ärger. Es kann aber bedeuten, dass du weniger selbst entscheiden kannst.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

- Nutze getrennte Benutzerkonten auf gemeinsam genutzten Geräten. Das verhindert „ein entsperrtes Gerät = alles“. Es macht Setup und Pflege aber aufwendiger.  
- Vermeide dauerhafte Anmeldungen auf fremden Geräten und speichere dort keine Zugänge. Das senkt Risiko durch unsichere Rechner. Es kostet Komfort unterwegs.  
- Entferne Passkeys von Geräten, die du selten nutzt oder nicht mehr vollständig kontrollierst. Das reduziert Angriffsfläche. Es kann spätere Logins erschweren.  
- Für besonders kritische Konten: ergänze eine starke zweite Bestätigung, falls der Dienst das erlaubt. Das erhöht Sicherheit. Es macht Anmelden langsamer.

</details>

## So merkst du, dass es wirkt

- Achte darauf, ob du kein Passwort mehr eintippst, sondern am Gerät bestätigst.  
- Schau im Kontosicherheitsbereich nach, ob Passkeys als aktive Anmeldeart gelistet sind.  
- Teste auf einem zweiten Gerät, ob du ohne Notnagel noch reinkommst.

<details><summary>Mehr Prüfungen</summary>

- Prüfe nach Gerätewechsel, ob das alte Gerät aus „Geräte/Sitzungen“ entfernt ist.  
- Wenn es ein Anmeldeprotokoll gibt: Stimmen Orte und Zeiten mit deinem Verhalten überein?  
- Bei unerklärlichen Login-Benachrichtigungen: Sitzungen beenden und Notnagel neu absichern.

</details>

## Probleme & Lösungen

- **Problem:** Der Dienst fragt trotz Passkey weiter nach dem Passwort. / **Lösung:** Prüfe, ob Passkeys nur „zusätzlich“ sind, und aktiviere „Passkey bevorzugen“, falls vorhanden.  
- **Problem:** „Passkey“ wird nirgends angeboten. / **Lösung:** Prüfe Web und App, aktualisiere die App und melde dich einmal neu an.  
- **Problem:** Der Passkey funktioniert nur auf einem Gerät. / **Lösung:** Lege auf dem zweiten Gerät einen eigenen Passkey an oder stelle sicher, dass die Synchronisierung wiederherstellbar ist.  
- **Problem:** Biometrie klappt nicht oder ist deaktiviert. / **Lösung:** Nutze die Geräte-PIN als Alternative und richte Biometrie bei Bedarf neu ein.  
- **Problem:** QR-Anmeldung auf einem fremden Gerät fühlt sich unsicher an. / **Lösung:** Nutze sie nur bei grob vertrauenswürdigen Geräten und beende danach Sitzungen in der Kontoübersicht.  
- **Problem:** Nach Geräteverlust kommst du nicht mehr ins Konto. / **Lösung:** Nutze Recovery-Codes oder den Notnagel; ohne beides bleibt oft nur der Kontosupport.  
- **Problem:** Ein Arbeitsgerät blockiert Funktionen. / **Lösung:** Kläre mit der IT die MDM-Regeln und nutze für private Konten lieber ein eigenes Gerät.

## Nicht gelöst

- Kein Schutz, wenn dein Gerät kompromittiert ist (Schadsoftware, Fernzugriff) oder jemand deinen Entsperrcode kennt.  
- Gegen Admin-Zugriff und Richtlinien auf verwalteten Geräten (Firma/Schule, MDM) helfen Passkeys nur begrenzt.  
- Passkeys verhindern nicht, dass Anbieter Login-Metadaten speichern (Zeitpunkt, Gerät, IP-Umfeld).  
- Gegen Stalkerware oder heimliche Geräteverwaltung brauchst du vor allem Gerätesicherheit und eine saubere Prüfung.  
- Gegen Zwang (zum Beispiel erzwungene Entsperrung) gibt es keine reine Konto-Einstellung als Lösung.

## Quellen

- [BSI: Passkeys – anmelden ohne Passwort](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Passkeys/passkeys-anmelden-ohne-passwort_node.html)
- [FIDO Alliance: Passkeys](https://fidoalliance.org/passkeys/)
- [W3C: Web Authentication (WebAuthn)](https://www.w3.org/TR/webauthn/)
- [MDN: Web Authentication API (WebAuthn)](https://developer.mozilla.org/docs/Web/API/Web_Authentication_API)
- [Google-Konto-Hilfe: Für die Anmeldung Passkeys statt Passwörter verwenden](https://support.google.com/accounts/answer/13548313)
- [Microsoft Support: Anmelden mit einem Hauptschlüssel](https://support.microsoft.com/account-billing/anmelden-mit-einem-hauptschl%C3%BCssel-09a49a86-ca47-406c-8acc-ed0e3c852c6d)

## Weiter

- [2FA](/2fa/)
- [2FA-Schnellstart](/2fa/schnellstart/)
- [Wiederherstellungscodes](/2fa/recovery-codes/)
- [Gerätewechsel bei Konten](/konto/geraetewechsel/)
- [Wiederherstellung: Zugang verloren](/konto/wiederherstellung/)
- [Sperrbildschirm absichern](/geraete-sicherheit/sperrbildschirm/)
