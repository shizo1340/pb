---
layout: "@/layouts/DocLayout.astro"
title: "Passwort-Check: Richtig testen, Ergebnisse verstehen"
url: "/tests/passwort-check/"
chapter: "Tests"
type: "test"
format: "test"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Mit diesem Passwort-Check testest du korrekt, erkennst Leak-Treffer und ordnest Ergebnisse ein. So vermeidest du Fehlalarme und handelst gezielt."
---
Du willst wissen, ob dein Passwort noch „gut genug“ ist. Dann bekommst du je nach Test unterschiedliche Bewertungen. Das nervt und führt schnell zu Fehlentscheidungen.

Nach diesem Passwort-Check weißt du, was ein Test wirklich prüft. Du kannst Treffer einordnen und entscheidest sicher, wann du handeln musst.

Sinnvoll, wenn du Passwörter lange nutzt oder Wiederverwendung vermutest.  
Grenze: Kein Test kann sehen, wie ein einzelner Dienst dein Passwort intern speichert oder prüft.

> **Wenn du danach einen Passwort-Manager suchst:** Kriterien + Shortlist: **[Passwort-Manager](/anbieter/kategorie/passwortmanager/)**.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Was misst es – und was nicht

Ein Passwort-Check prüft je nach Anbieter unterschiedliche Dinge. Häufig sind es diese Punkte:

- **Stärke/Erratbarkeit:** Länge, Muster, Wörterbücher und typische Varianten. Das hilft gegen „Raten“ und simple Angriffe. Es kann dich aber in falscher Sicherheit wiegen, wenn du das Passwort wiederverwendest.
- **Bekannt aus Datenlecks:** Ob das Passwort in veröffentlichten Passwortlisten vorkommt. Das ist ein klares Risiko, weil solche Listen automatisiert durchprobiert werden. Es sagt aber nicht, ob dein konkretes Konto gerade angegriffen wird.
- **Wiederverwendung (manchmal):** Ob du dasselbe Passwort an mehreren Stellen nutzt. Das schützt vor Kettenreaktionen bei Kontoübernahmen. Es funktioniert aber nur, wenn der Prüfer deine Passwörter „sieht“, zum Beispiel im Passwort-Manager.

Das misst ein Passwort-Check typischerweise **nicht** zuverlässig:

- **Ob dein Konto gehackt ist.** Ein Treffer heißt nur: Das Passwort ist bekannt oder schwach. Er beweist keinen aktiven Zugriff.
- **Ob ein Dienst Passwörter sicher speichert.** Das hängt von Hashing und Salt ab und ist von außen kaum prüfbar.
- **Ob dein Gerät sicher ist.** Bei Schadsoftware oder Stalkerware ist jede Eingabe riskant, auch bei „guten“ Tests.

Begriff: **Hash** ist eine Einweg-Umwandlung. Aus dem Hash soll man das Passwort nicht zurückrechnen können.  
Begriff: **k-Anonymität** bedeutet hier meist: Es wird nur ein kurzer Hash-Anfang übertragen, um Treffer zu finden, ohne das Passwort komplett zu senden.

Stoppsignal: Wenn eine Seite dein Passwort im Klartext verlangt und nicht klar erklärt, wie es geschützt wird, brich ab.

## So testest du richtig

1. **Kläre, was du wissen willst: Stärke, Datenleck oder beides.** Das macht die Ergebnisse vergleichbar und erspart Aktionismus. Es kostet kurz Zeit, weil du bewusst entscheiden musst.
2. **Teste nur auf einem vertrauenswürdigen Gerät.** Das reduziert das Risiko, dass Eingaben mitgelesen werden. Es ist unpraktisch, wenn du gerade nur ein fremdes oder öffentliches Gerät hast.
3. **Gib das Passwort exakt so ein, wie du es wirklich nutzt.** Das verhindert falsche Treffer durch Tippfehler, Layout oder Leerzeichen. Es ist etwas mühsam, wenn du das Passwort sonst nur kopierst.
4. **Behandle jedes Ergebnis als Hinweis, nicht als Urteil.** Das führt zu besseren Entscheidungen als eine „Score“-Zahl. Es kann sich weniger befriedigend anfühlen, weil es keine einfache Ampel ist.

Bezeichnung kann abweichen – nutze die Suche nach: „Passwort“, „Sicherheitscheck“, „Datenleck“, „Leak“.

### Weg A (einfach): Lokal prüfen

1. **Nutze die Prüfung in deinem Passwort-Manager oder System, wenn verfügbar.** Das ist oft am sichersten, weil nichts übertragen werden muss. Es kann unvollständig sein, wenn der Check nur einen Teil deiner Einträge bewertet.
2. **Achte zuerst auf Wiederverwendung.** Einzigartige Passwörter verhindern, dass ein Datenleck mehrere Konten kippt. Es bedeutet mehr Aufwand, wenn du noch keinen Passwort-Manager nutzt.
3. **Wenn „zu schwach“ gemeldet wird: erhöhe vor allem die Länge.** Längere Passphrasen sind meist robuster als kurze „Sonderzeichen-Kunststücke“. Du musst dich an eine neue Art von Passwörtern gewöhnen.

<details><summary>Weg B (Fortgeschritten): Online-Datenleck-Check ohne Klartext</summary>

1. **Nutze nur Online-Checks, die k-Anonymität oder Hash-Vergleiche erklären.** Das senkt das Risiko, dass dein Passwort im Klartext abgegriffen wird. Du musst die Erklärung lesen und kannst nicht „blind“ vertrauen.
2. **Prüfe, ob die Seite wirklich verschlüsselt aufgerufen ist (HTTPS).** Das schützt vor einfachem Mitlesen im Netz. Es hilft nicht, wenn dein Gerät selbst kompromittiert ist.
3. **Wenn ein Treffer gemeldet wird: nutze dieses Passwort nirgends mehr.** Das verhindert automatisierte Kontoübernahmen mit bekannten Listen. Es kann viele Änderungen auslösen, wenn du es wiederverwendet hast.
4. **Ändere Passwörter priorisiert: E-Mail, Passwort-Manager, Banking, große Plattformen zuerst.** Das senkt das Gesamtrisiko schnell. Es kostet Zeit und kann dich aus Diensten ausloggen.

</details>

<details><summary>Weg C (Profi): Offline prüfen und systematisch aufräumen</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

1. **Erstelle eine Liste deiner wichtigsten Konten und ordne jedem ein eindeutiges Passwort zu.** Das macht Wiederverwendung sichtbar und planbar. Es ist Aufwand, weil du einmal strukturieren musst.
2. **Nutze eine Passwort-Manager-Funktion für „Sicherheitsbericht“ oder „Überprüfung“, wenn vorhanden.** Das liefert dir eine priorisierte To-do-Liste ohne manuelles Suchen. Es kann bedeuten, dass du den Passwort-Manager intensiver nutzen musst.
3. **Wenn du Datenleck-Treffer systematisch abarbeiten willst: setze zuerst die Passwort-Änderungen um, nicht das „Perfekt-Scoring“.** Das reduziert reales Risiko schneller als Feintuning. Es fühlt sich weniger „sauber“ an, weil nicht alles sofort optimal ist.

</details>

<details><summary>Mehr Prüfungen & Hinweise</summary>

- Wenn Ergebnisse wechseln: Nutze ein privates Fenster oder leere einmal den Cache (Zwischenspeicher). Das sorgt für konsistentere Tests. Es kostet etwas Zeit und du musst dich neu einloggen.
- Wenn Seitenfunktionen fehlen: Teste kurz ohne VPN/Proxy oder in einem anderen Netz. Das hilft, wenn Filter Skripte blockieren. Du gibst dafür kurz Komfort oder Schutzfunktionen auf.
- Wenn du kopierst: Prüfe auf ein versehentliches Leerzeichen am Ende. Das verhindert falsche „neuen“ Passwörter. Es ist kleinteilig und nervt, spart aber später Ärger.

</details>

## Ergebnisse verstehen

- **„Schwach/zu kurz“** heißt meist: zu wenig Länge oder zu leichtes Muster. Das ist ein sinnvoller Hinweis für bessere Passphrasen. Es kann dich aber unnötig stressen, wenn du nur auf „Sonderzeichen“ statt Länge schaust.
- **„In Datenlecks gefunden“ / „bereits bekannt“** heißt: Das Passwort taucht in veröffentlichten Listen auf. Das ist ein echtes Risiko, auch ohne aktiven Angriff. Es sagt nicht, woher es stammt oder welches Konto betroffen ist.
- **„Stark“** heißt: Gegen reines Raten ist es vergleichsweise gut. Das ist nützlich als Mindestanforderung. Es schützt aber nicht vor Wiederverwendung oder Phishing.
- **Unterschiedliche Bewertungen** sind normal, weil Tests unterschiedliche Modelle und Listen nutzen. Das bewahrt dich vor falscher Gewissheit. Es ist weniger bequem, weil du nicht „eine Zahl“ bekommst.

### So merkst du, dass es wirkt

- Achte darauf, ob du in deinem Passwort-Manager keine Wiederverwendung mehr siehst.  
- Achte darauf, ob deine wichtigsten Konten neue, lange Passphrasen haben.  
- Achte darauf, ob Datenleck-Treffer nach dem Ändern nicht mehr bei denselben Passwörtern auftreten.

<details><summary>Zusätzliche Checks</summary>

- Prüfe, ob du für E-Mail und Passwort-Manager 2FA aktiviert hast.  
- Prüfe, ob alte Geräte/Sitzungen in Konten abgemeldet wurden.  
- Prüfe, ob Passwort-Reset-E-Mails nur an deine kontrollierte Adresse gehen.

</details>

## Probleme & Lösungen

- **Problem:** Der Test zeigt jedes Mal andere Werte, obwohl das Passwort gleich ist.  
  **Lösung:** Nutze ein privates Fenster oder leere den Browser-Zwischenspeicher und lade die Seite neu.

- **Problem:** Der Test lädt nicht fertig oder Teile der Seite fehlen.  
  **Lösung:** Teste kurz ohne VPN/Proxy und versuche es in einem anderen Netz, zum Beispiel Mobilfunk.

- **Problem:** Du bekommst Meldungen wie „Server nicht erreichbar“ oder „Dienst nicht verfügbar“.  
  **Lösung:** Starte Router und Gerät neu und prüfe, ob DNS oder Filter im Netz etwas blocken.

- **Problem:** Ein Passwort gilt als „schwach“, obwohl es viele Zeichen hat.  
  **Lösung:** Prüfe auf vorhersehbare Muster wie Name+Jahr, Tastaturfolgen oder wiederholte Blöcke und ersetze sie durch mehrere Wörter.

- **Problem:** Ein Datenleck-Treffer erscheint, aber du glaubst, das Passwort nie genutzt zu haben.  
  **Lösung:** Prüfe Eingabe und Layout exakt. Wenn es stimmt, behandle das Passwort als „bekannt“ und nutze es nirgends.

- **Problem:** Ein Dienst akzeptiert dein neues Passwort nicht, obwohl es „stark“ ist.  
  **Lösung:** Lies die Passwortregeln des Dienstes und nutze eine lange Passphrase, die nur verbotene Zeichen vermeidet.

- **Problem:** Der Test wirkt „zu streng“ und du kommst nicht zu einem Ergebnis.  
  **Lösung:** Priorisiere realen Nutzen: lang, einzigartig, kein Datenleck-Treffer. Details sind zweitrangig.

## Grenzen

- Ein Passwort-Check beweist nicht, dass dein Konto sicher ist. Er bewertet nur das Passwort und eventuell Datenleck-Listen.
- Ein Test kann nicht prüfen, ob ein Dienst Passwörter intern korrekt speichert und schützt.
- Bei kompromittiertem Gerät (Schadsoftware, Stalkerware, Admin-Zugriff) ist jede Passworteingabe riskant, auch in seriösen Checks.
- Ein Treffer sagt nicht, woher das Passwort stammt oder welches Konto betroffen ist.
- Ein starkes Passwort schützt nicht vor Phishing, wenn du es auf einer gefälschten Seite eingibst.

## Weiter

- [Passwörter: Schnellstart](/passwoerter/schnellstart/)
- [Passphrasen statt kurzer Passwörter](/passwoerter/passphrasen/)
- [Passwort-Manager verstehen und nutzen](/passwoerter/passwort-manager/)
- [Wiederverwendung vermeiden](/passwoerter/wiederverwendung/)
- [Zwei-Faktor-Hub](/passwoerter/zwei-faktor-hub/)
- [2FA: Schnellstart](/2fa/schnellstart/)

## FAQ

**Sind Tests 100% zuverlässig?**

Nein. Ergebnisse hängen von Browser/Netzwerk/Updates ab. Nutze sie als Hinweis und prüfe mit Fix-Anleitungen.

**Was bedeutet ein „Leak“?**

Dass Daten am Schutz vorbei rausgehen können. Folge den Fix-Schritten und teste erneut.

**Warum schwanken Werte?**

Fingerprinting ist dynamisch. Auch Werbung/Blocker/Updates ändern Signale.

## Quellen

- [BSI: Passwörter](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Online-Kommunikation/Passwoerter/passwoerter_node.html)
- [NIST SP 800-63B: Digital Identity Guidelines (Memorized Secrets)](https://pages.nist.gov/800-63-3/sp800-63b.html)
- [OWASP: Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)
