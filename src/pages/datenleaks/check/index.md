---
layout: "@/layouts/DocLayout.astro"
title: "Datenleak prüfen: Treffer verstehen und richtig handeln"
url: "/datenleaks/check/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-02-09"
robots: "index,follow"
description: "Anleitung zum Datenleak prüfen: Funde richtig einordnen, Passwort-Wiederverwendung erkennen und nächste Schritte festlegen, um Kontoübernahmen zu vermeiden."
---
Du bekommst einen Hinweis auf ein Leak (Datenleck) – und weißt nicht, ob du sofort handeln musst.  
Das Problem: Viele Leaks sind alt, aber alte Passwörter werden noch lange ausprobiert.

Ziel: Du ordnest einen Treffer ein und setzt die richtigen Schritte in der passenden Reihenfolge um.  
Sinnvoll, wenn du Warnungen siehst oder verdächtige Logins auffallen.  
Grenze: Kein Check kann unbekannte oder neue Leaks ausschließen.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

Weg A: Schnell prüfen und die größten Risiken sofort schließen.  
Weg B: Systematisch aufräumen, Wiederverwendung finden, Konten härten.  
Weg C: Tiefer absichern, Monitoring und saubere Kontostruktur.

Stoppsignal: Wenn du laufende Kontoübernahmen, Erpressung oder Gerätemanipulation vermutest, wechsle zu [Verdacht: Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/).  
Aufwand & Komfortkosten: Weg A ist kurz, kann aber Lücken lassen. Weg B kostet Zeit, spart Stress später. Weg C ist am stabilsten, aber technisch und pflegeintensiv.

## Schnellstart (10 Minuten)

1) Notiere betroffene Adresse und Dienste aus der Warnung.  
Öffne die Meldung deines Browsers oder Passwort-Managers und schreibe auf: E-Mail + Dienst + grobes Datum.  
Das bringt dir Überblick, statt im Nebel zu reagieren. Nebenwirkung: Du stolperst oft über alte, vergessene Konten.

2) Sichere zuerst das E-Mail-Konto für Passwort-Resets.  
Ändere das Passwort, aktiviere 2FA und melde unbekannte Geräte ab.  
Das reduziert das größte Kaper-Risiko. Nebenwirkung: Du musst dich auf allen Geräten neu anmelden.

3) Ändere Passwörter bei den betroffenen Diensten sofort.  
Beginne mit Mail, Banking, Shops, Social, Cloud. Danach alles, wo du dasselbe Passwort genutzt hast.  
Das stoppt „Passwort-Spraying“ und automatisierte Logins. Nebenwirkung: Manche Dienste sperren kurzzeitig oder verlangen Zusatzprüfungen.

4) Schalte 2FA bei kritischen Konten ein.  
Wenn möglich, nutze Passkeys oder TOTP statt SMS. Hinterlege Wiederherstellungsoptionen.  
Das bremst Kontoübernahmen selbst bei bekanntem Passwort. Nebenwirkung: Anmeldung dauert etwas länger und braucht ein Zweitgerät oder App.

5) Sichere Recovery-Codes und aktualisiere Sicherheitsdaten.  
Speichere Codes offline und prüfe, ob Backup-E-Mail/Telefonnummer noch stimmen.  
Das verhindert den Totalverlust beim Gerätewechsel. Nebenwirkung: Du brauchst einen sicheren Ablageort und Disziplin.

## Wege

### Weg A

1) Prüfe, ob der Treffer wirklich zu dir passt.  
Stimmt die E-Mail exakt? Ist es eine alte Adresse? Dann ist das Risiko oft geringer, aber nicht null.  
Das spart Aktionismus. Nebenwirkung: Es fühlt sich „zu ruhig“ an, obwohl Handeln sinnvoll bleibt.

2) Priorisiere nach Schadenshöhe, nicht nach Gefühl.  
Ganz oben: E-Mail-Postfach, Passwort-Manager, Zahlungsdienste, große Shops, Social-Accounts.  
Das reduziert Folgeschäden. Nebenwirkung: Unwichtige Konten bleiben erst mal liegen.

3) Räum aktive Sitzungen auf.  
Öffne bei wichtigen Konten die Liste „Geräte“/„Sitzungen“ und entferne alles Unbekannte.  
Das kappt laufende Zugriffe. Nebenwirkung: Du wirst auf eigenen Geräten abgemeldet.  
Bezeichnung kann abweichen – nutze die Suche nach: „Sicherheit“, „Geräte“, „Sitzungen“.

4) Stelle Warnungen für neue Logins an.  
Aktiviere Anmeldebenachrichtigungen, wenn der Dienst das bietet.  
Das macht Angriffe schneller sichtbar. Nebenwirkung: Mehr Benachrichtigungen im Alltag.

<details><summary>Weg B (Fortgeschritten)</summary>

1) Finde Passwort-Wiederverwendung systematisch.  
Nutze den Bericht deines Passwort-Managers für „wiederverwendet“ und „schwach“.  
Das deckt die echten Kettenreaktionen auf. Nebenwirkung: Du brauchst Zeit für viele Änderungen.

2) Rotiere Passwörter in Wellen.  
Welle 1: Mail + Passwort-Manager + Zahlungsdienste.  
Welle 2: Shops + Social + Cloud.  
Welle 3: Rest.  
Das hält dich handlungsfähig und verhindert Chaos. Nebenwirkung: Einige Dienste fragen erneut nach Identitätsnachweisen.

3) Prüfe Weiterleitungen und Regeln im E-Mail-Konto.  
Suche nach unbekannten Weiterleitungen, Filtern oder neuen Postfach-Regeln.  
Das verhindert, dass Angreifer still mitlesen. Nebenwirkung: Du musst dich durch Menüs arbeiten.

4) Trenne Identitäten, wenn du mehrere Adressen nutzt.  
Für neue Konten: eine eigene Adresse oder Aliase, getrennt von „Haupt-Mail“.  
Das begrenzt Leaks auf einen Bereich. Nebenwirkung: Mehr Postfächer bedeuten mehr Pflege.

Nächster Schritt: [Reaktion nach einem Leak](/datenleaks/reaktion/) für eine klare Reihenfolge.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

1) Härte das E-Mail-Konto wie ein „Root-Konto“.  
Nutze Passkeys oder Sicherheitsschlüssel, entferne schwache Fallbacks und halte Recovery-Daten aktuell.  
Das macht Kontoübernahmen deutlich schwerer. Nebenwirkung: Ohne gute Backup-Strategie kannst du dich aussperren.

2) Baue einen sauberen Reset-Pfad auf.  
Lege Recovery-Codes, Backup-Schlüssel und wichtige Dokumente in ein getrenntes, verschlüsseltes Backup.  
Das reduziert den Stress im Ernstfall. Nebenwirkung: Setup und Pflege sind aufwendig.

3) Optimiere deine Kontostruktur gegen Leaks.  
Verwende pro Dienst unterschiedliche Passwörter und wo möglich Passkeys. Nutze getrennte Profile und Adressen für „kritisch“ vs. „Alltag“.  
Das verhindert, dass ein Leak alles umwirft. Nebenwirkung: Mehr Struktur bedeutet mehr Gewohnheiten.

</details>

## So merkst du, dass es wirkt

Achte darauf, ob alte Passwörter bei betroffenen Diensten nicht mehr funktionieren.  
Achte darauf, ob in „Geräte/Sitzungen“ nur noch deine Geräte auftauchen.  
Achte darauf, ob dein Passwort-Manager für wichtige Konten keine Wiederverwendung mehr meldet.

<details><summary>Zusätzliche Checks</summary>

Achte darauf, ob im E-Mail-Konto keine unbekannten Weiterleitungen oder Regeln existieren.  
Achte darauf, ob Login-Benachrichtigungen bei neuen Geräten zuverlässig kommen.  
Achte darauf, ob 2FA-Backups (Codes/Schlüssel) auffindbar und aktuell sind.

</details>

## Probleme & Lösungen

- **Problem:** Der Treffer nennt einen Dienst, den du nicht kennst. / **Lösung:** Suche nach der betroffenen E-Mail in deinem Postfach und Passwort-Manager, dann schließe „vergessene“ Konten.
- **Problem:** Der Leak ist alt, du willst nichts tun. / **Lösung:** Prüfe Wiederverwendung und sichere das E-Mail-Konto trotzdem, denn alte Passwörter werden weiter getestet.
- **Problem:** Du hast keinen Zugriff mehr auf die betroffene E-Mail-Adresse. / **Lösung:** Wechsle bei wichtigen Konten die E-Mail-Adresse und starte ggf. mit [Zugang verloren](/konto/zugang-verloren/).
- **Problem:** Nach Passwortwechsel wirst du ausgeloggt und verlierst den Überblick. / **Lösung:** Ändere in Wellen und dokumentiere die kritischen Konten zuerst, dann „Rest“ später.
- **Problem:** 2FA ist aktiv, aber du hast keine Backups. / **Lösung:** Lege Recovery-Codes an und folge einer [Backup-Strategie](/2fa/backup-strategie/).
- **Problem:** Du siehst fremde Sitzungen, aber sie kommen wieder. / **Lösung:** Ändere Passwort, aktiviere stärkere 2FA und prüfe Geräte auf Manipulation unter [Verdacht: Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/).

## Nicht gelöst

- Ein Leak-Check beweist nicht, dass niemand deine Daten hat.  
- Inhalte wie Nachrichten, Fotos oder Dokumente werden dadurch nicht „zurückgeholt“.  
- Wenn dein Gerät kompromittiert ist, helfen Passwortwechsel allein nur kurz.  
- Bei Admin-Zugriff im Firmenkonto oder MDM-Profil gelten andere Regeln.  
- Angreifermodelle wie Stalkerware, Zwang oder physischer Zugriff brauchen eigene Maßnahmen.  
- Identitätsdiebstahl mit Verträgen, SIM-Tausch oder Postdiebstahl ist ein separates Thema.

## FAQ

**Was ist das Wichtigste nach einem Leak?**

Passwörter ändern (wenn Wiederverwendung), 2FA aktivieren, Recovery prüfen und Accounts beobachten.

**Muss ich alle Passwörter ändern?**

Nicht automatisch. Priorisiere nach Wiederverwendung und Konto-Kritikalität.

**Woher weiß ich, ob ich betroffen bin?**

Nutze seriöse Leak-Checks und die eigenen Login-/Sicherheitsmeldungen.

## Quellen

- [BSI: Identity Leak Checker](/datenleaks/check/)
- [BSI: Kontosicherheit (Übersicht)](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Kontosicherheit/kontosicherheit_node.html)
- [NIST SP 800-63B: Authentication and Lifecycle Management](https://pages.nist.gov/800-63-3/sp800-63b.html)
- [OWASP: Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)

## Weiter

- [Reaktion nach einem Leak](/datenleaks/reaktion/)
- [Wenn deine E-Mail geleakt ist](/datenleaks/wenn-email-geleakt/)
- [Phishing nach Leak](/datenleaks/phishing-nach-leak/)
- [Passwort-Manager](/passwoerter/passwort-manager/)
- [2FA Schnellstart](/2fa/schnellstart/)
- [Sitzungen & Geräte prüfen](/konto/sitzungen-geraete/)
