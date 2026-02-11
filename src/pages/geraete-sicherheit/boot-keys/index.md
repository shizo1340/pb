---
layout: "@/layouts/DocLayout.astro"
title: "Secure-Boot-Schlüssel im UEFI prüfen: PK/KEK/db/dbx"
url: "/geraete-sicherheit/boot-keys/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Secure-Boot-Schlüssel im UEFI prüfen (PK/KEK/db/dbx), bei Bedarf Werkschlüssel laden und Boot-Probleme vermeiden – mit Tests, Risiken und klaren Grenzen."
---
Manchmal ist Secure Boot plötzlich aus, ein Update meckert über Signaturen oder USB-Starts gehen nicht mehr. Das ist nervig. Und es kann ein Sicherheitsproblem sein, wenn der Start nicht mehr zuverlässig geprüft wird.

Hier prüfst du die Secure-Boot-Schlüssel („Boot Keys“) im UEFI. Secure Boot heißt auf Deutsch oft „Sicherer Start“. Es entscheidet, was beim Start geladen werden darf.

Sinnvoll, wenn du Secure Boot nutzen willst, ein Gerät gebraucht gekauft hast oder Dual-Boot einsetzt.  
Grenze: Wenn die Firmware selbst kompromittiert ist, bringen saubere Schlüssel nur begrenzt etwas.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

Weg A: Sicher prüfen, ob Secure Boot aktiv ist und nicht „leer“ konfiguriert ist.  
Weg B: Schlüsselzustand einordnen (PK/KEK/db/dbx) und Sperrlisten-Updates verstehen.  
Weg C: Eigene Schlüssel (Custom Keys) nutzen, ohne den Start zu blockieren.

Stoppsignal: Wenn du kein aktuelles Backup hast oder das Gerät kurzfristig funktionieren muss, ändere keine Schlüssel im UEFI. Ein Fehlgriff kann den Start verhindern.

Aufwand + Komfortkosten: 10–30 Minuten. Komfortkosten: Externe Startmedien oder ein zweites System können blockiert werden, bis sie korrekt signiert sind.

## Schnellstart (10 Minuten)
1) Secure-Boot-Status im System prüfen  
1. Öffne die Systeminformationen deines Systems.
2. Suche nach „Secure Boot“ oder „Sicherer Start“.
3. Notiere, ob der Status aktiv oder inaktiv ist.
So weißt du schnell, ob der sichere Start überhaupt greift. Wenn der Eintrag fehlt, läuft das System oft nicht im UEFI-Modus oder Secure Boot ist nicht verfügbar.

2) Im UEFI prüfen, ob Secure Boot aktiv ist  
4. Starte neu und öffne das UEFI/„BIOS“-Menü (Taste hängt vom Gerät ab).
5. Suche nach Secure-Boot-Einstellungen und prüfe, ob Secure Boot aktiv ist.
6. Prüfe zusätzlich, ob das System nicht im „Setup Mode“/Einrichtungsmodus steht.
Bezeichnung kann abweichen – nutze die Suche nach: Secure Boot, Sicherer Start, Setup Mode, Schlüsselverwaltung, Key Management.  
Das ist die verlässlichste Quelle, weil du direkt in der Firmware nachsiehst. Der Nebeneffekt: Allein das Öffnen ändert noch nichts, aber unbedachte Änderungen an Boot-Optionen können später zu Startproblemen führen.

3) System- und Firmware-Updates installieren  
7. Installiere ausstehende Betriebssystem-Updates.
8. Prüfe zusätzlich Firmware-/UEFI-Updates beim Gerätehersteller.
9. Starte danach einmal vollständig neu.
Das schließt Lücken im Startpfad und hält Sperrlisten (dbx) eher aktuell. Nach Updates können sich Startreihenfolge und Secure-Boot-Schalter zurücksetzen, deshalb immer einmal komplett neu starten.

4) Nur wenn nötig: Werkschlüssel laden  
10. Nutze das nur, wenn Secure Boot nicht aktivierbar ist oder Schlüssel offensichtlich fehlen.
11. Öffne im UEFI die Schlüsselverwaltung und wähle sinngemäß „Werkschlüssel wiederherstellen“ (oft auch „Factory/Default Keys“).
12. Speichere und starte neu.
Damit kommst du zurück auf einen üblichen Ausgangszustand. Als Nebeneffekt können unsignierte USB-Sticks oder bestimmte Dual-Boot-Setups danach nicht mehr starten.

5) Nach Änderungen sofort testen  
13. Starte normal ins System und prüfe den Secure-Boot-Status erneut (wie in Schritt 1).
14. Wenn du Dual-Boot nutzt, teste beide Systeme.
So merkst du sofort, ob der Startweg noch funktioniert. Manchmal zeigen sich Probleme erst beim zweiten Neustart, daher lieber zweimal sauber testen.

## Wege

### Weg A

1) Nur prüfen, nicht schrauben  
- Prüfe den Status im System und im UEFI (Schritt 1 und 2).  
Das gibt dir Klarheit, ohne Risiko durch Schlüsseländerungen. Der Nebeneffekt: Du behebst damit noch kein konkretes Boot-Problem, du grenzt es nur ein.

2) Updates nachziehen und erneut prüfen  
- Installiere Betriebssystem- und Firmware-Updates (Schritt 3).  
Damit sinkt die Chance, dass veraltete Sperrlisten oder Firmware-Bugs dich ausbremsen. Nach Updates kann Secure Boot wieder aus sein, deshalb im UEFI kurz nachsehen und nur den Schalter aktivieren.

3) Werkschlüssel nur als Reparaturschritt  
- Lade Werkschlüssel nur, wenn Secure Boot sonst nicht nutzbar ist (Schritt 4).  
Das kann fehlende Schlüssel ersetzen und Setup-Mode-Probleme beenden. Der Preis ist weniger Flexibilität bei USB-Starts und bei manchen Linux-/Dual-Boot-Konfigurationen.

<details><summary>Weg B (Fortgeschritten)</summary>

In der Praxis bestehen die Secure-Boot-Datenbanken meist aus vier Teilen:

- Plattformschlüssel (PK): legt fest, wer Schlüssel ändern darf.  
- Schlüsselaustauschschlüssel (KEK): erlaubt Updates an den Datenbanken.  
- Signaturdatenbank (db): was starten darf.  
- Sperrliste (dbx): was nicht starten darf (z. B. widerrufene Signaturen).

Vorgehen:

1) PK/KEK/db/dbx im UEFI prüfen  
- Schau in der Schlüsselverwaltung nach, ob die Einträge vorhanden sind und nicht leer wirken.  
Das hilft dir, „Secure Boot ist an“ von „Secure Boot kann wirklich prüfen“ zu unterscheiden. Als Nebeneffekt brauchst du je nach Gerät etwas Menü-Suche, ohne dass du schon ein Problem gelöst hast.

2) Setup Mode vermeiden  
- Wenn das UEFI „Setup Mode“ anzeigt, ist der Vertrauensanker meist nicht gesetzt.  
Damit erkennst du typische Gründe für ausgegraute Secure-Boot-Optionen. Das kann bei Firmen- oder Spezial-Setups normal sein, daher nichts überstürzt zurücksetzen.

3) dbx-/Sperrlisten-Updates ernst nehmen  
- Wenn dein System dbx-Updates anbietet, installiere sie zeitnah und teste danach den Start.  
So werden bekannte, widerrufene Signaturen blockiert. Der Nebeneffekt: Ältere, bisher funktionierende Bootloader oder Rettungsmedien können danach nicht mehr starten.

Hinweis: „Custom Keys“ sind nicht automatisch böse. Bei verwalteten Geräten können eigene Schlüssel gewollt sein.
</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

1) Planung statt Trial-and-Error  
- Rechne mit Ausfallzeit und halte ein Wiederherstellungsmedium bereit.  
Das reduziert das Risiko, das Gerät unbootbar zu machen. Der Nebeneffekt: Du investierst deutlich mehr Zeit in Vorbereitung und Tests.

2) Eigene Schlüssel erzeugen und sicher aufbewahren  
- Erstelle eigene PK/KEK und sichere die privaten Schlüssel offline.  
So kontrollierst du, wer Updates an Secure Boot vornehmen darf. Wenn du die privaten Schlüssel verlierst, sperrst du dich im schlimmsten Fall dauerhaft aus.

3) Bootkette sauber signieren  
- Signiere Bootloader und ggf. Kernel/Module passend zu deiner Bootkette.  
Damit bleibt Secure Boot nutzbar, obwohl du eigene Schlüssel nutzt. Der Preis ist laufender Pflegeaufwand, besonders bei Dual-Boot und nach Updates.

Achtung: Das Entfernen von Standard-Schlüsseln kann Updates, Dual-Boot und externe Startmedien unerwartet brechen.
</details>

## So merkst du, dass es wirkt

- Achte darauf, ob der Secure-Boot-Status im System dauerhaft aktiv bleibt, auch nach Updates.  
- Schau im UEFI nach, ob das System nicht im Setup Mode steht.  
- Wenn unsignierte USB-Medien nicht mehr starten, ist das oft ein Zeichen, dass Secure Boot wirklich durchsetzt.

<details><summary>Mehr Checks</summary>

- Prüfe nach Firmware-Updates, ob Secure Boot deaktiviert wurde oder die Boot-Reihenfolge sich geändert hat.  
- Wenn das Gerät gebraucht ist: Dokumentiere den Schlüsselzustand vor Änderungen (z. B. Fotos der UEFI-Seiten).  
- Bei verwalteten Firmengeräten können Secure-Boot-Änderungen Richtlinien verletzen und Updates stören.
</details>

## Probleme & Lösungen

- **Problem:** Secure Boot lässt sich nicht aktivieren oder ist ausgegraut.  
  **Lösung:** Prüfe, ob das System im UEFI-Modus installiert ist und ob das UEFI nicht im Setup Mode steht.

- **Problem:** Nach einem Firmware-Update ist Secure Boot plötzlich aus.  
  **Lösung:** Aktiviere Secure Boot im UEFI wieder und teste den Start sofort danach.

- **Problem:** Nach „Werkschlüssel wiederherstellen“ startet ein zweites System nicht mehr.  
  **Lösung:** Stelle sicher, dass dessen Bootloader Secure-Boot-kompatibel ist, oder nutze vorübergehend nur ein System.

- **Problem:** USB-Start funktioniert nicht mehr, obwohl er vorher ging.  
  **Lösung:** Nutze signierte Rettungsmedien oder stelle Secure Boot nur temporär um und danach wieder zurück.

- **Problem:** Windows fordert nach Änderungen am Startpfad einen Wiederherstellungsschlüssel.  
  **Lösung:** Halte Wiederherstellungsinfos bereit, bevor du Änderungen machst, und bestätige die Wiederherstellung einmal sauber.

- **Problem:** Du siehst „Custom Keys“, weißt aber nicht, woher sie kommen.  
  **Lösung:** Ändere nichts ohne Backup. Kläre Geräteherkunft (Firma, Gebrauchtkauf) und dokumentiere den Zustand.

## Nicht gelöst

- Secure-Boot-Schlüssel machen ein kompromittiertes Betriebssystem nicht wieder sauber.  
- Wenn Angreifer bereits Admin-Rechte haben, können sie oft trotzdem Schaden anrichten.  
- Gegen physischen Zugriff mit Zeit und Werkzeug schützt das nur begrenzt, besonders bei manipulierter Firmware.  
- Gegen Stalkerware, MDM-Missbrauch oder ein bereits kompromittiertes Gerät brauchst du ein eigenes Vorgehen.  
- Bei Zwang oder erzwungenem Zugriff helfen „richtige“ Schlüssel nur begrenzt, weil du das Gerät selbst entsperren musst.

## FAQ

**Was ist der größte Hebel?**

Updates + Gerätesperre + Vollverschlüsselung. Danach kommen App-Rechte und sichere Backups.

**Hilft Biometrie immer?**

Sie ist bequem, aber nicht immer „stärker“ als ein guter Code. Nutze einen starken Sperrcode als Basis.

**Wie erkenne ich Manipulation?**

Auffällige Akku-/Datenlast, neue Admin-Profile, unbekannte Apps/MDM – dann gezielt prüfen.

## Quellen

- [UEFI-Spezifikation: Secure Boot and Driver Signing](https://uefi.org/specs/UEFI/2.9_A/32_Secure_Boot_and_Driver_Signing.html)  
- [Microsoft: Sicherer Start (Secure Boot) – Überblick](https://learn.microsoft.com/de-de/windows-hardware/design/device-experiences/oem-secure-boot)  
- [Microsoft: Leitfaden zur Erstellung und Verwaltung von Secure-Boot-Schlüsseln](https://learn.microsoft.com/de-de/windows-hardware/manufacture/desktop/windows-secure-boot-key-creation-and-management-guidance?view=windows-11)  
- [Microsoft: DBX-Update-Leitfaden (KB4575994)](https://support.microsoft.com/de-de/topic/microsoft-leitfaden-zum-anwenden-des-updates-der-datenbank-f%C3%BCr-abgelehnte-signaturen-dbx-f%C3%BCr-sicheres-starten-kb4575994-e3b9e4cb-a330-b3ba-a602-15083965d9ca)  
- [NSA: Guidance for Managing UEFI Secure Boot (PDF)](https://media.de/fense.gov/2025/Dec/11/2003841096/-1/-1/0/CSI_UEFI_SECURE_BOOT.PDF)

## Weiter

- [Sicherer Start](/geraete-sicherheit/sicherer-start/)  
- [Firmware](/geraete-sicherheit/firmware/)  
- [Updates: Warum wichtig?](/updates/warum-wichtig/)  
- [Backups: Schnellstart](/backups/schnellstart/)  
- [Geräte-Vollverschlüsselung](/verschluesselung/geraete-vollverschluesselung/)  
- [Physischer Zugriff](/geraete-sicherheit/physischer-zugriff/)
