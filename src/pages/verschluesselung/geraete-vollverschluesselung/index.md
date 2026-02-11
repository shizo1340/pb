---
layout: "@/layouts/DocLayout.astro"
title: "Geräte-Vollverschlüsselung aktivieren und richtig prüfen"
url: "/verschluesselung/geraete-vollverschluesselung/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Geräte-Vollverschlüsselung richtig nutzen: Status prüfen, aktivieren, starke Gerätesperre setzen und Wiederherstellung sichern. Mit Checks und Lösungen."
---
Du merkst es oft erst, wenn es zu spät ist: Laptop weg, Handy gestohlen, Gerät zur Reparatur abgegeben. Plötzlich geht es nicht nur um das Gerät, sondern um alles darauf.

Geräte-Vollverschlüsselung sorgt dafür, dass Daten auf dem internen Speicher ohne Entsperren nicht sinnvoll auslesbar sind. Sie schützt vor allem bei Verlust und Diebstahl.

Sinnvoll, wenn du dein Gerät unterwegs nutzt oder sensible Konten darauf hast.  
Grenze: Wenn das Gerät entsperrt ist oder bereits kompromittiert wurde, hilft Verschlüsselung nur begrenzt.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

Weg A: In 10 Minuten prüfen, ob Verschlüsselung aktiv ist, und die Gerätesperre stärken.  
Weg B: Wiederherstellung sauber absichern und typische Lecks durch Backups/Exporte schließen.  
Weg C: Technisch verifizieren, was wirklich verschlüsselt ist (inkl. Schlafmodus und externe Datenträger).

Stoppsignal: Wenn du Stalkerware vermutest oder das Gerät „fremdgesteuert“ wirkt, geh zuerst zu einem Kompromittierungs-Plan. Vollverschlüsselung löst das nicht.  
Aufwand + Komfortkosten: 10–30 Minuten. Danach kaum Aufwand. Komfortkosten sind meist ein längerer Code und ein sicher verwahrter Wiederherstellungsschlüssel.

## Schnellstart (10 Minuten)
1) Verschlüsselungsstatus prüfen (ohne Rätselraten)  
1. Öffne die Einstellungen und nutze die Suche.
2. Prüfe, ob der Status „ein/aktiv“ angezeigt wird oder ob eine Aktivierung angeboten wird.
3. Wenn das Gerät „verwaltet“ wirkt (Firma/Schule), prüfe, ob Vorgaben die Einstellung steuern.
Bezeichnung kann abweichen – nutze die Suche nach: Verschlüsselung, Geräteverschlüsselung, BitLocker, FileVault.  
Damit weißt du, ob Daten bei Verlust/Diebstahl wirklich geschützt sind.  
Du musst dafür kurz durch Menüs gehen und bei verwalteten Geräten ggf. Berechtigungen klären.

2) Gerätesperre so wählen, dass sie die Verschlüsselung trägt  
4. Nutze PIN oder Passwort statt Wischmuster, wenn möglich.
5. Nimm mindestens 6 Stellen, besser mehr, und vermeide Daten wie Geburtstag.
6. Stelle ein, dass nach einem Neustart immer der Code verlangt wird (nicht nur Biometrie).
So bleibt der Schlüssel geschützt, weil er an deinen Code gekoppelt ist.  
Das kostet etwas Komfort, weil du häufiger tippen musst und ein längerer Code nerven kann.

3) Wiederherstellungsschlüssel finden und getrennt aufbewahren  
7. Prüfe, ob dein System einen Wiederherstellungsschlüssel anzeigt oder erzeugt.
8. Notiere ihn oder speichere ihn getrennt vom Gerät (Papier oder Offline-Notfallordner).
9. Wenn ein Online-Konto als Ablage angeboten wird, entscheide das bewusst.
Damit kannst du dich im Ausnahmefall wieder entsperren, ohne die Daten zu verlieren.  
Dafür musst du den Schlüssel sicher verwahren und darfst ihn nicht verlegen.

4) Exporte und Wechseldatenträger nicht „aus Versehen“ unverschlüsselt lassen  
10. Prüfe, wohin du häufig kopierst: USB-Stick, externe SSD, Download-Ordner, geteilte Ordner.
11. Prüfe bei Exporten aus Apps (Chat, Notizen, Fotos), ob die Exportdatei verschlüsselt abgelegt wird.
12. Behalte im Blick: Eine verschlüsselte Geräteplatte schützt keine Kopie auf einem Stick.
So schließt du den häufigsten Ausweg aus der Verschlüsselung, ohne es zu merken.  
Das kostet etwas Zeit, weil du Exportorte aufräumst und Gewohnheiten anpassen musst.

5) Automatisches Sperren so einstellen, dass „entsperrt“ nicht der Normalzustand ist  
13. Stelle eine kurze automatische Sperrzeit ein, die zu deinem Alltag passt.
14. Prüfe, ob Benachrichtigungsinhalte auf dem Sperrbildschirm zu viel verraten.
15. Nutze getrennte Konten/Benutzerprofile, wenn du das Gerät teilst.
So verkürzt du Zeitfenster, in denen jemand direkt am entsperrten Gerät zugreifen kann.  
Das kann nerven, weil du öfter entsperrst und weniger Vorschau auf dem Sperrbildschirm siehst.

## Wege

### Weg A

1. Kläre kurz, worum es geht:  
   - Geräteverschlüsselung schützt Daten auf dem Gerätespeicher im ausgeschalteten oder gesperrten Zustand.  
   - Dateiverschlüsselung schützt einzelne Dateien/Ordner, auch wenn das Gerät entsperrt ist.  
   - Übertragungsverschlüsselung schützt Daten beim Senden, zum Beispiel zu einem Dienst.  

2. Prüfe den Verschlüsselungsstatus in den Einstellungen per Suche.  
3. Wenn eine Aktivierung angeboten wird, lies den Hinweistext zu Akku, Neustart und Rechten.  
4. Stelle PIN oder Passwort ein und nutze Biometrie nur als Komfort darüber.  
5. Suche nach einem Wiederherstellungsschlüssel und sichere ihn getrennt vom Gerät.  
6. Prüfe Backups: Wo liegen sie, und sind sie verschlüsselt?  
7. Prüfe deine typischen Exportwege: Messenger-Backups, Foto-Export, Teilen-Funktion, USB-Kopien.  
8. Stelle automatische Sperre und Sperrbildschirm-Inhalte passend ein.  
9. Notiere dir einmal: Wo liegt der Wiederherstellungsschlüssel, und wie kommst du ohne Gerät daran?  
10. Wiederhole den Status-Check nach großen Systemupdates oder nach einem Gerätewechsel.

<details><summary>Weg B (Fortgeschritten)</summary>

- Nutze getrennte Benutzerkonten statt „alle nutzen denselben Zugang“, wenn das Gerät geteilt wird.  
- Prüfe, ob ein Sicherheitschip genutzt wird, zum Beispiel TPM („Trusted Platform Module“, ein Sicherheitschip im Gerät).  
- Wenn Ruhezustand oder Schnellstart aktiv ist, prüfe, ob nach dem Aufwachen wirklich wieder der Code verlangt wird.  
- Entscheide bewusst, ob Wiederherstellungsschlüssel in einem Online-Konto gespeichert werden. Komfort und Notfallzugriff sind nicht dasselbe.  
- Prüfe, ob Geräteverwaltung aktiv ist, zum Beispiel MDM (Mobile Device Management, Geräteverwaltung) durch Firma oder Schule.  
- Plane den Notfall: Was tust du bei vergessenem Code oder bei Hardwaredefekt (Backup plus Wiederherstellung)?
</details>

<details><summary>Weg C (Profi)</summary>
Wenn dir das zu technisch ist, bleib bei Weg B.

- Verifiziere den Status zusätzlich mit Systemmitteln. Beispiele sind `manage-bde -status` (Windows), `fdesetup status` (macOS) oder LUKS-Checks auf Linux.  
- Prüfe, ob auch Ruhezustand und Auslagerungsbereiche vom Schutz erfasst sind.  
- Prüfe, ob externe Datenträger standardmäßig verschlüsselt werden oder ob du das aktiv einschalten musst.  
- Teste einen Neustart: Ohne Code darf kein Zugriff auf Benutzerdateien möglich sein.  
- Dokumentiere den Wiederherstellungspfad offline: Schlüsselort, Kontozugriff und Ansprechpartner bei verwalteten Geräten.
</details>

## So merkst du, dass es wirkt

- Achte darauf, ob nach einem Neustart immer der Code verlangt wird, bevor du an Daten kommst.  
- Achte darauf, ob der Verschlüsselungsstatus „aktiv/ein“ bleibt, auch nach Updates.  
- Wenn ein Wiederherstellungsschlüssel genutzt wird: Prüfe, ob du ihn außerhalb des Geräts wirklich findest.

<details><summary>Mehr Prüfungen & Hinweise</summary>

- Prüfe Exportdateien stichprobenartig: Öffne eine Exportdatei testweise auf einem anderen Gerät.  
- Prüfe Metadaten bei Exporten: Fotos und Dokumente können Zusatzdaten enthalten.  
- Prüfe bei Reparatur/Weitergabe: Übergib das Gerät nicht dauerhaft entsperrt, wenn du das vermeiden kannst.
</details>

## Probleme & Lösungen

- **Problem:** Ich finde keine Option zur Geräteverschlüsselung.  
  **Lösung:** Nutze die Suche in den Einstellungen nach „Verschlüsselung“ oder „Geräteverschlüsselung“. Wenn nichts auftaucht, kann sie bereits aktiv sein oder dein Gerät unterstützt die Funktion nicht in dieser Edition.

- **Problem:** Das System fordert plötzlich einen Wiederherstellungsschlüssel.  
  **Lösung:** Nutze den Schlüssel aus deinem Notfallzettel oder dem hinterlegten Konto. Suche den Schlüssel nicht auf dem gesperrten Gerät, sondern getrennt davon.

- **Problem:** Nach der Aktivierung wirkt das Gerät langsamer.  
  **Lösung:** Die Erstverschlüsselung kann im Hintergrund laufen. Warte etwas ab und prüfe danach Updates und freien Speicher. Wenn es bleibt, prüfe die Energie- und Leistungsprofile.

- **Problem:** Ich habe nur Biometrie eingerichtet und keinen starken Code.  
  **Lösung:** Richte eine PIN oder ein Passwort ein. Biometrie ist Komfort, der Code ist der Schutzanker für den Schlüssel.

- **Problem:** Meine Backups liegen „irgendwo“ in der Cloud, aber ich kenne den Schutz nicht.  
  **Lösung:** Prüfe in den Backup-Einstellungen, ob die Sicherung verschlüsselt ist und wer den Schlüssel kontrolliert. Geräteverschlüsselung deckt Cloud-Kopien nicht automatisch ab.

- **Problem:** Ich exportiere Chats/Notizen/Fotos und verliere den Überblick.  
  **Lösung:** Lege einen festen Export-Ort fest und entscheide dort konsequent: immer verschlüsselt oder gar nicht. Lösche alte Exportdateien, die ungeschützt herumliegen.

## Nicht gelöst

- Kein Schutz, wenn das Gerät entsperrt ist und jemand direkten Zugriff hat.  
- Kein Schutz vor Schadsoftware, Admin-Zugriff oder Stalkerware auf einem kompromittierten Gerät.  
- Kein automatischer Schutz für Kopien außerhalb des Geräts, zum Beispiel Cloud, USB-Stick oder E-Mail-Anhänge.  
- Metadaten können bei Export und Teilen sichtbar bleiben, auch wenn das Gerät selbst verschlüsselt ist.  
- Nur begrenzter Schutz gegen sehr mächtige Angreifer, etwa mit manipulierter Firmware oder invasiven Hardware-Angriffen.  
- Risiko der Selbstsperre: Wenn Code und Wiederherstellungsschlüssel weg sind, kommst du ggf. nicht mehr an deine Daten.

## FAQ

**Reicht Geräte-Vollverschlüsselung?**

Für viele Risiken ja. Für Teilen/Backups brauchst du oft zusätzlich Datei-/Container-Verschlüsselung.

**Was sind die größten Fehler?**

Schlüssel verlieren, keine Backups, falsche Recovery. Plane Schlüssel-Management zuerst.

**Ist E2EE immer E2EE?**

Kommt auf Schlüsselverwaltung und Backups an. Prüfe, was wirklich Ende-zu-Ende ist.

## Quellen

- [BSI: Datenverschlüsselung](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Daten-sichern-verschluesseln-und-loeschen/Datenverschluesselung/datenverschluesselung_node.html)
- [BSI: Verschlüsselung im Betriebssystem](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cyber-Sicherheitsempfehlungen/Daten-sichern-verschluesseln-und-loeschen/Datenverschluesselung/Verschluesselung-mit-Betriebssystemen/verschluesselung-mit-betriebssystemen.html)
- [Microsoft Support: Geräteverschlüsselung in Windows](https://support.microsoft.com/de-de/windows/ger%C3%A4teverschl%C3%BCsselung-in-windows-cf7e2b6f-3e70-4882-9532-18633605b7df)
- [Microsoft Support: BitLocker-Wiederherstellungsschlüssel sichern](https://support.microsoft.com/de-de/windows/sichern-des-bitlocker-wiederherstellungsschl%C3%BCssels-e63607b4-77fb-4ad3-8022-d6dc428fbd0d)
- [Apple Support: FileVault auf dem Mac](https://support.apple.com/de-de/guide/mac-help/mh11785/mac)
- [Android Open Source Project: Verschlüsselung](https://source.android.com/docs/security/features/encryption?hl=de)

## Weiter

- [Verschlüsselung: Schnellstart](/verschluesselung/schnellstart/)
- [Backups verschlüsseln](/backups/backup-verschluesseln/)
- [Sperrbildschirm absichern](/geraete-sicherheit/sperrbildschirm/)
- [Dateien sicher teilen](/dateien/sicher-teilen/)
- [Metadaten: Grundlagen](/wissen/metadaten-grundlagen/)
- [Szenario: Verdacht Gerät kompromittiert](/szenarien/verdacht-geraet-kompromittiert/)
