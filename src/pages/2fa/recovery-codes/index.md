---
layout: "@/layouts/DocLayout.astro"
title: "Notfallcodes für 2FA sicher erstellen und aufbewahren"
url: "/2fa/recovery-codes/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Notfallcodes für 2FA sicher anlegen und lagern: neu erzeugen, sauber ablegen, Reste löschen und den Ernstfall testen – inkl. Checks, Problemen und Grenzen."
---
Notfallcodes (auch „Recovery Codes“: einmalige Ersatzcodes) sind dein Rettungsweg, wenn der zweite Faktor gerade nicht verfügbar ist.

Das Risiko: Im Ernstfall fehlt Zeit. Handy weg, Gerät kaputt, Nummer gewechselt – und du kommst nicht mehr ins Konto.

Du legst Notfallcodes so ab, dass du sie schnell findest, ohne sie unnötig zu riskieren.

Sinnvoll, wenn du 2FA nutzt und Gerätewechsel/Verlust realistisch ist.  
Grenze: Wer Notfallcodes **und** dein Passwort hat, kann sich anmelden.
  
Stand: 2026-01-27.

## Kurzfazit
- Lege Notfallcodes **offline** ab und entferne digitale Reste sofort.  
- Prüfe zusätzlich einen zweiten Wiederherstellungsweg, damit du nicht am Papier hängst.

## Ziel

Weg A: Notfallcodes erstellen und offline so ablegen, dass du sie wiederfindest.  
Weg B: Wiederherstellungswege verbessern und die Ablage stärker absichern.  
Weg C: Strikter Ablauf für viele Konten und höhere Risiken.

Stoppsignal: Wenn du vermutest, dass dein Konto schon übernommen wurde, sichere erst Passwort und aktive Sitzungen. Erzeuge erst danach neue Notfallcodes. Siehe [Konto-Sitzungen & Geräte](/konto/sitzungen-geraete/) und [Konto-Übernahme](/betrug/konto-uebernahme/).  
Aufwand + Komfortkosten: 10–20 Minuten pro wichtigem Konto. Danach nur Pflege nach Ereignissen. Du brauchst einen sicheren Offline-Ort und etwas Routine.

## Schnellstart (15 Minuten)

1) Notfallcodes neu erzeugen und sauber sichern  
- Öffne die Sicherheitsseite deines Kontos.  
- Gehe zu „Zwei-Faktor-Authentisierung“ oder „Anmeldung & Sicherheit“.  
- Öffne „Notfallcodes / Wiederherstellungscodes / Backup-Codes“.  
- Erzeuge einen neuen Satz und speichere ihn **noch nicht** irgendwo dauerhaft.

Bezeichnung kann abweichen – nutze die Suche nach: **Notfallcodes**, **Wiederherstellungscodes**, **Backup-Codes**, **Back-up-Codes**.  
Du hast sofort einen definierten Rettungsweg. Nachteil: Ein neuer Satz macht ältere Codes oft ungültig.

2) Download-Reste sofort entfernen  
- Prüfe den Download-Ordner auf Dateien mit „backup“, „recovery“, „codes“ oder „2fa“.  
- Lösche die Datei, sobald du eine sichere Ablage gewählt hast.  
- Leere, wenn möglich, auch den Papierkorb.

Wenn du unsicher bist, wo Downloads landen: [Download-Ordner aufräumen](/dateien/download-ordner/).  
Du vermeidest, dass Codes im Alltag „herumliegen“. Nachteil: Löschen ist je nach System nur logisch, Wiederherstellung kann möglich sein.

3) Offline-Kopie anlegen, die du wiederfindest  
- Drucke die Codes aus oder schreibe sie gut lesbar auf Papier.  
- Notiere Dienstname, Konto-Hinweis (z. B. „privat“), Datum.  
- Lege das Blatt in einen Umschlag und lagere es bei wichtigen Unterlagen.

Offline bleibt erreichbar, auch wenn Geräte ausfallen. Nachteil: Wer Zugriff auf den Ort bekommt, kann die Codes sofort nutzen.

4) Verbrauch sichtbar machen  
- Streiche jeden benutzten Code sofort durch.  
- Wenn du unsicher bist, ob jemand mitgelesen hat: Erzeuge neue Codes.  
- Setze dir eine einfache Regel: „Nach Reset oder Verlust immer erneuern.“

Du erkennst schneller, ob etwas fehlt oder schon genutzt wurde. Nachteil: Ein Test-Login verbraucht oft einen Code und kann den Satz unübersichtlicher machen.

5) Zweiten Wiederherstellungsweg prüfen  
- Schau nach zusätzlichen Optionen wie App auf Zweitgerät oder Passkeys. Siehe [Passkeys](/2fa/passkeys/).  
- Vermeide SMS als einzigen Notausgang, wenn SIM-Tausch realistisch ist. Siehe [2FA ohne SMS](/telefonnummer/2fa-ohne-sms/) und [SIM-Swap](/telefonnummer/sim-swap/).  
- Notiere kurz, welche Wege du hast und wo sie liegen.

Du senkst die Chance, dich auszusperren, besonders bei Gerätewechsel. Nachteil: Mehr Wege erhöhen Komfort, können aber neue Angriffsflächen schaffen.

## Wege

### Weg A
1) Erzeuge einen neuen Satz Notfallcodes im Konto.  
Du hast einen klaren Ersatzweg. Nachteil: Ältere Codes können ungültig werden.

2) Lege eine Offline-Kopie an und beschrifte sie eindeutig (Dienst, Konto-Hinweis, Datum, Anzahl).  
Du findest die Codes schnell und verwechselst nichts. Nachteil: Papier ist bei Zugriff durch Dritte sofort kompromittiert.

3) Entferne digitale Reste (Download-Ordner, Papierkorb, lokale Kopien).  
Du reduzierst Zufallslecks im Alltag. Nachteil: Je nach System können gelöschte Dateien wiederherstellbar sein.

4) Markiere genutzte Codes und erneuere bei Unsicherheit.  
Du bemerkst eher, ob etwas nicht stimmt. Nachteil: Häufiges Erneuern erzeugt Pflegeaufwand.

5) Lege eine Regel fest: Nach Gerätewechsel, Verlust oder Kontoreset Codes prüfen oder neu erzeugen.  
Du arbeitest nicht mit veralteten Notfallwegen. Nachteil: Du musst Ereignisse aktiv nachziehen.

<details><summary>Weg B (Fortgeschritten)</summary>

1) Ergänze einen zweiten starken Anmeldeweg, wenn möglich (z. B. Passkeys). Siehe [Passkeys](/2fa/passkeys/).  
Du bist weniger abhängig von einem Notausgang. Nachteil: Mehr Faktoren bedeuten mehr Pflege.

2) Lege zwei Offline-Kopien an und trenne die Orte klar (nicht beide im selben Raum).  
Du bleibst handlungsfähig, wenn ein Ort ausfällt. Nachteil: Mehr Kopien erhöhen das Fund-Risiko.

3) Wenn du digital ablegst: nur verschlüsselt und nicht dauerhaft „offen“. Siehe [Backups verschlüsseln](/backups/backup-verschluesseln/) und [Dateien verschlüsseln](/dateien/verschluesseln/).  
Du bekommst Praktikabilität ohne Klartext-Speicher. Nachteil: Wenn du das Entsperren vergisst, hilft es im Notfall nicht.

4) Prüfe die Kontowiederherstellung: Welche E-Mail oder Nummer ist hinterlegt, und wer hat Zugriff? Siehe [Konto wiederherstellen](/konto/wiederherstellung/) und [Telefonnummer schützen](/identitaet/telefonnummer-schuetzen/).  
Du schließt stille Schwachstellen in der Wiederherstellung. Nachteil: Änderungen können Sicherheitsabfragen auslösen.

5) Vermeide SMS als einzigen Notausgang, wenn SIM-Swap für dich realistisch ist. Siehe [SIM-Swap](/telefonnummer/sim-swap/).  
Du reduzierst das Risiko durch Nummernübernahme. Nachteil: Alternativen brauchen oft ein Zweitgerät oder bessere Vorbereitung.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

1) Führe pro Konto eine kurze Offline-Übersicht (Datum, Ablageort, zusätzliche Wege).  
Du behältst bei vielen Konten den Überblick. Nachteil: Die Übersicht ist selbst ein sensibles Dokument.

2) Erneuere Notfallcodes nach kritischen Ereignissen (Verlust, Verdacht auf Mitlesen, Kontoreset).  
Du schließt Lecks, bevor sie ausgenutzt werden. Nachteil: Du musst alte Sätze konsequent vernichten.

3) Plane Reisen: Eine Kopie muss erreichbar sein, aber nicht ständig bei dir liegen.  
Du vermeidest Ausperren unterwegs. Nachteil: Reise-Orte sind oft schwer perfekt abzusichern.

4) Trenne digitale Ablage vom Alltagsgerät (verschlüsselt, eigener Entsperrschutz, nicht überall synchron).  
Du reduzierst Schaden bei Geräteverlust. Nachteil: Zugriff ist weniger bequem und braucht Routine.

5) Denke den Worst Case: Wenn dein Gerät kompromittiert ist, darf der Notfallweg nicht dort liegen. Siehe [Verdacht: Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/).  
Du verhinderst, dass Angreifer den Rettungsweg gleich mitbekommen. Nachteil: Du musst mit getrennten Orten oder Geräten arbeiten.

</details>

## So merkst du, dass es wirkt
- Achte darauf, ob du die Notfallcodes in unter 2 Minuten findest.  
- Achte darauf, ob du sofort siehst, welche Codes unbenutzt sind.  
- Achte darauf, ob im Download-Ordner keine Code-Dateien liegen.

<details><summary>Mehr Prüfungen</summary>

- Achte darauf, ob der Dienst anzeigt, wann Notfallcodes zuletzt erzeugt wurden.  
- Achte darauf, ob du nach Gerätewechsel alle Wiederherstellungswege wie erwartet nutzen kannst. Siehe [2FA: Gerätewechsel](/2fa/geraetewechsel/) und [Konto: Gerätewechsel](/konto/geraetewechsel/).  
- Achte darauf, ob du den Ablauf unter Stress erklären könntest, ohne Details zu verraten.

</details>

## Probleme & Lösungen
- **Problem:** Ich finde die Notfallcodes nicht. / **Lösung:** Suche im Sicherheitsbereich und prüfe, ob 2FA aktiv ist.  
- **Problem:** Ein Code wird abgelehnt. / **Lösung:** Nutze den neuesten Satz. Erzeuge im Zweifel neue Codes.  
- **Problem:** Die Codes lagen im Download-Ordner und sind weg. / **Lösung:** Erzeuge neue Codes und lege sie sofort bewusst ab.  
- **Problem:** Ich habe einen Code fotografiert oder in einen Chat kopiert. / **Lösung:** Satz als kompromittiert behandeln, neu erzeugen, alte Kopien entfernen.  
- **Problem:** Ich bin unterwegs und komme nicht an die Offline-Kopie. / **Lösung:** Nutze einen zweiten Wiederherstellungsweg oder den offiziellen Prozess. Siehe [Zugang verloren](/konto/zugang-verloren/).  
- **Problem:** Ich verliere nach mehreren Logins den Überblick. / **Lösung:** Genutzte Codes konsequent streichen und rechtzeitig erneuern.  
- **Problem:** Andere könnten an meinen Ablageort (Besuch, Arbeitsplatz, Mitbewohner). / **Lösung:** Ort wechseln oder zwei getrennte Orte nutzen wie in Weg B.

## Nicht gelöst
- Notfallcodes helfen nicht, wenn jemand bereits im Konto angemeldet ist. Prüfe Sitzungen und Geräte: [Konto-Sitzungen & Geräte](/konto/sitzungen-geraete/).  
- Notfallcodes schützen nicht gegen Schadsoftware, Stalkerware oder Admin-Zugriff auf deinem Gerät. Siehe [Überwachung erkennen](/geraete-sicherheit/ueberwachung-erkennen/) und [Stalkerware-Verdacht](/szenarien/stalkerware-verdacht/).  
- Wer dein Passwort **und** deine Notfallcodes hat, kann sich anmelden. Dann werden Codes vom Rettungsweg zum Risiko.  
- Wenn dich jemand unter Druck setzt (Zwang) und Zugriff auf deine Unterlagen erzwingt, helfen Notfallcodes nicht zuverlässig.  
- Manche Dienste lassen Wiederherstellung über E-Mail oder Telefon zu. Wenn diese Kanäle unsicher sind, bleibt das Risiko. Siehe [Passwort-Reset-Risiko](/email/passwort-reset-risiko/) und [SIM-Swap](/telefonnummer/sim-swap/).

## Quellen
- [BSI: Zwei-Faktor-Authentisierung](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Accountschutz/Zwei-Faktor-Authentisierung/zwei-faktor-authentisierung_node.html)
- [Google-Konto-Hilfe: Mit Back-up-Codes anmelden](https://support.google.com/accounts/answer/1187538)
- [Microsoft Support: Wiederherstellungscode für ein Microsoft-Konto](https://support.microsoft.com/de-de/account-billing/so-erhalten-sie-ein-microsoft-konto-wiederherstellungscode-2acc2f88-e37b-4b44-99d4-b4419f610013)
- [GitHub Docs: Recovery methods for two-factor authentication](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods)
- [Mozilla-Hilfe: Vorgehen bei Sperre der Zwei-Schritt-Authentifizierung](https://support.mozilla.org/de/kb/vorgehen-bei-sperre-zwei-schritt-authentifizierung)

## Weiter
- [Zwei-Faktor-Authentisierung](/2fa/)
- [2FA Schnellstart](/2fa/schnellstart/)
- [2FA: Backup-Strategie](/2fa/backup-strategie/)
- [Recovery-Codes im Ernstfall](/konto/recovery-codes/)
- [Zugang verloren](/konto/zugang-verloren/)
- [Passwort-Manager](/passwoerter/passwort-manager/)
