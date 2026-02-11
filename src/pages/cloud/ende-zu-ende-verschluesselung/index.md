---
layout: "@/layouts/DocLayout.astro"
title: "Ende-zu-Ende-Verschlüsselung in der Cloud aktivieren"
url: "/cloud/ende-zu-ende-verschluesselung/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Ende-zu-Ende-Verschlüsselung in der Cloud: E2EE erkennen, aktivieren und testen – plus Recovery-Plan, 2FA und Freigaben, damit du nicht ausgesperrt wirst."
---
Du speicherst Dateien in der Cloud. Du willst nicht, dass der Anbieter oder jemand mit Zugriff auf dessen Systeme deine Inhalte lesen kann.

Gleichzeitig willst du keine „fühlt sich sicher an, ist es aber nicht“-Falle. E2EE ist die Abkürzung für Ende-zu-Ende-Verschlüsselung: Der Schlüssel bleibt auf deinen Geräten.

Sinnvoll, wenn du sensible Dokumente, Scans oder Notizen in der Cloud ablegst.  
Grenze: Wenn dein Gerät kompromittiert ist, hilft auch E2EE nicht.
  
Stand: 2026-01-27.

## Kurzfazit
- E2EE lohnt sich erst, wenn Recovery und Gerätewechsel geklärt sind.
- Prüfe Freigaben und Komfortverluste früh, bevor du „richtig“ umziehst.

## Ziel
- **Weg A:** E2EE im Cloud-Dienst aktivieren und alltagstauglich absichern.
- **Weg B:** Dateien vor dem Hochladen selbst verschlüsseln.
- **Weg C:** Strenge Schlüssel- und Freigabe-Disziplin für hohe Risiken.

Stoppsignal: Wenn du keinen sicheren Ort für Wiederherstellungs-Schlüssel hast, plane das zuerst. Sonst sperrst du dich leicht aus.  
Aufwand + Komfortkosten: 15–45 Minuten. Danach oft weniger Vorschau, Suche und Online-Bearbeitung, dafür mehr Kontrolle.

## Schnellstart (15 Minuten)
1) **Klären, ob es wirklich E2EE ist**
- Öffne die Hilfe deines Cloud-Dienstes und suche nach E2EE oder „clientseitig“.
- Prüfe, ob E2EE für *Dateien* gilt oder nur für Bereiche wie „Tresor“.
- Prüfe, ob E2EE optional ist oder standardmäßig aktiv.
Bezeichnung kann abweichen – nutze die Suche nach: Ende-zu-Ende, clientseitig, Tresor, privater Ordner.  
Du vermeidest, Transport- oder Server-Verschlüsselung mit E2EE zu verwechseln. Dafür musst du einmal sauber nachlesen, weil Begriffe je Dienst unterschiedlich sind.

2) **E2EE erst in einem klaren Bereich einschalten**
- Lege (falls nötig) einen neuen E2EE-Bereich an, statt bestehende Ordner umzuschalten.
- Setze ein eigenes, langes Passwort für den E2EE-Bereich (nicht das Kontopasswort).
- Lade eine kleine Testdatei hoch und öffne sie erneut auf demselben Gerät.
Sensible Inhalte liegen dann nur noch verschlüsselt beim Anbieter. Dafür funktionieren Vorschau, Suche oder Online-Bearbeitung in E2EE-Bereichen oft schlechter.

3) **Recovery sichern, bevor du mehr hochlädst**
- Suche nach „Wiederherstellung“, „Recovery“, „Schlüssel“ oder „Notfallcode“.
- Speichere Notfallcodes offline (Papier oder lokaler, gesicherter Speicher).
- Lege eine zweite Kopie an und lagere sie getrennt.
Du kommst nach Verlust oder Defekt wieder an deine Daten. Dafür gilt bei echter E2EE häufig: Ohne Passwort und Schlüssel kann dich der Anbieter nicht retten.

4) **Kontozugang härten**
- Aktiviere 2FA, wenn verfügbar. Siehe: [2FA Schnellstart](/2fa/schnellstart/)
- Prüfe angemeldete Geräte/Sitzungen und melde alte Geräte ab.
- Hinterlege Wiederherstellungsdaten nur, wenn du sie wirklich kontrollierst.
Du senkst das Risiko von Kontoübernahmen deutlich. Dafür wird die Anmeldung etwas aufwendiger, weil du häufiger bestätigen musst.

5) **Freigaben einmal realistisch testen**
- Erstelle eine Freigabe für eine Testdatei und öffne sie in einem privaten Browserfenster.
- Prüfe, ob ein zusätzliches Passwort möglich ist und ob du ein Ablaufdatum setzen kannst.
- Entscheide bewusst: lieber an konkrete Personen als „öffentlicher Link“.
Du erkennst früh, welche Freigaben zu deinem Sicherheitsziel passen. Dafür kosten Tests ein paar Minuten, und „Ein-Klick-Links“ sind in sicheren Modi oft eingeschränkt.

## Wege

### Weg A
1. Lege fest, welche Dateien wirklich in die Cloud müssen.
2. Nutze, wenn vorhanden, einen separaten E2EE-Bereich statt „alles auf einmal“.
3. Setze ein eigenes, langes Passwort für den E2EE-Bereich und bewahre es sicher auf.
4. Sichere Recovery-Schlüssel/Notfallcodes offline und getrennt.
5. Lade sensible Dateien nur noch in den E2EE-Bereich.
6. Halte Dateinamen sparsam, weil Metadaten oft sichtbar bleiben.
7. Nutze Freigaben zurückhaltend und teste sie zuerst mit unkritischen Dateien.
8. Halte ein unabhängiges Backup, falls dein Konto gesperrt wird oder Dateien gelöscht werden. Siehe: [Backups verschlüsseln](/backups/backup-verschluesseln/)

Du bekommst soliden Alltagsschutz gegen Mitlesen beim Anbieter. Dafür musst du Komfortfunktionen gezielt aufgeben.

<details><summary>Weg B (Fortgeschritten)</summary>

- Verschlüssele sensible Dateien lokal, bevor du sie hochlädst.
- Nutze dafür ein eigenes Passwort nur für diese Dateien und bewahre es getrennt von der Cloud auf.
- Packe zusammengehörige Dokumente in ein verschlüsseltes Archiv, damit weniger Einzeldateien herumliegen.
- Achte auf Dateinamen, weil der Inhalt geschützt ist, der Name aber oft sichtbar bleibt.
- Teste die Wiederherstellung: Lade die Datei auf ein zweites Gerät und prüfe das Öffnen.

Du bist weniger abhängig davon, wie der Cloud-Dienst E2EE umsetzt. Dafür ist der Ablauf unbequemer, weil du lokal ver- und entschlüsseln musst.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.  
- Trenne Konten: eins für sensible Ablage, eins für Alltagsdateien.
- Halte Schlüssel und Passwörter konsequent aus der Cloud heraus (offline, getrennte Kopien).
- Teile sensible Inhalte nur mit klarer Schlüssel-Disziplin, sonst verschlüsselt verpacken und Passwort getrennt übermitteln.
- Entferne alte Geräte/Sitzungen regelmäßig.
- Plane Gerätewechsel vorab und teste den Zugang auf einem Zweitgerät.

Du reduzierst Risiken durch Trennung und saubere Prozesse. Dafür steigen Aufwand und Fehlerkosten, besonders mit mehreren Personen.

</details>

## So merkst du, dass es wirkt
- Achte darauf, ob Vorschau oder Volltextsuche für E2EE-Dateien eingeschränkt ist.
- Achte darauf, ob du Recovery-Schlüssel/Notfallcodes siehst und sicher abgelegt hast.
- Achte darauf, ob ein neues Gerät erst nach Schlüssel-Übernahme Dateien öffnen kann.

<details><summary>Mehr Prüfungen</summary>

- Prüfe, ob du E2EE-Dateien im Browser online bearbeiten kannst. Wenn ja, ist es oft kein E2EE für Dateien.
- Prüfe Freigabe-Links: Wenn ein Link ohne zusätzliches Geheimnis direkt lesbar ist, passt das oft schlecht zu E2EE.
- Notiere kurz, wie du nach Geräteverlust wieder reinkommst, und teste das einmal mit einer unkritischen Datei.

</details>

## Probleme & Lösungen
- **Problem:** Vorschau, Websuche oder Online-Bearbeitung fehlen. / **Lösung:** Lege unkritische Dateien außerhalb des E2EE-Bereichs ab.
- **Problem:** Neues Gerät sieht Dateien, kann sie aber nicht öffnen. / **Lösung:** Schlüssel-Übernahme prüfen (Recovery, Import, Gerätefreigabe).
- **Problem:** Unklar, ob Freigaben Ende-zu-Ende geschützt sind. / **Lösung:** Mit Testdatei im privaten Fenster prüfen, dann Freigaben einschränken.
- **Problem:** Passwort oder Recovery-Schlüssel verloren. / **Lösung:** Mit Notfallcodes arbeiten, sonst sind E2EE-Daten oft nicht wiederherstellbar.
- **Problem:** Konto übernommen, Daten gelöscht, Zugang gesperrt. / **Lösung:** 2FA aktivieren und unabhängiges Backup halten.
- **Problem:** Zusammenarbeit wird zu umständlich. / **Lösung:** Trenne „gemeinsam“ (Komfort) von „sensibel“ (E2EE).

## Nicht gelöst
- E2EE schützt meist nicht vor Metadaten wie Name, Größe, Zeitpunkte oder Geräteinfos.
- Wenn du Inhalte entschlüsselt exportierst oder weiterleitest, endet der Schutz dort.
- Bei kompromittiertem Gerät (Schadsoftware, Stalkerware, Admin-Rechte) kann E2EE umgangen werden.
- Unter Zwang zur Entsperrung schützt E2EE nicht vor erzwungenem Zugriff.
- E2EE ersetzt keine Backups gegen Löschen, Sperren oder Fehler. Siehe: [Backups](/backups/)

## Quellen
- [BSI – Kryptografie (Übersicht)](https://www.bsi.bund.de/DE/Themen/Kryptografie/kryptografie_node.html)
- [BSI – Cloud Computing (Übersicht)](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Cloud-Computing/cloud-computing_node.html)
- [BSI – C5 (Cloud Computing Compliance Criteria Catalogue)](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Standards-und-Zertifizierung/Cloud-Computing-Compliance-C5/cloud-computing-compliance-c5_node.html)
- [RFC Editor – RFC 8446 (TLS 1.3)](https://www.rfc-editor.org/rfc/rfc8446)
- [OWASP – Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)
- [NIST – SP 800-63B (Digital Identity Guidelines)](https://pages.nist.gov/800-63-3/sp800-63b.html)

## Weiter
- [Cloud](/cloud/)
- [E2EE: Realität und Missverständnisse](/cloud/e2ee-realitaet/)
- [Cloud Schnellstart](/cloud/schnellstart/)
- [Sharing-Links sicher nutzen](/cloud/sharing-links/)
- [Dateien verschlüsseln](/verschluesselung/dateien/)
- [2FA Schnellstart](/2fa/schnellstart/)
