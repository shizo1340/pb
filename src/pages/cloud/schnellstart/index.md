---
layout: "@/layouts/DocLayout.astro"
title: "Cloud-Schnellstart: Freigaben sichern, Hochladen steuern"
url: "/cloud/schnellstart/"
chapter: "Themen"
type: "guide"
format: "guide"
level:
money: "no"
status: "done"
updated: "2026-01-27"
robots: "index,follow"
description: "Cloud-Schnellstart: Konto absichern, Freigaben prüfen, Hochladen begrenzen, vor dem Hochladen verschlüsseln und Wiederherstellung testen – Checks für Alltag."
---

Du nutzt eine Cloud, weil es bequem ist. Genau das wird riskant, wenn Freigaben zu offen sind oder mehr hochgeladen wird als gedacht.

Das Ziel: Du behältst Kontrolle. Du weißt, wer Zugriff hat, was synchronisiert wird, und du kannst im Ernstfall sauber wiederherstellen.

Sinnvoll, wenn du Dateien synchronisierst oder teilst und nicht jedes Mal grübeln willst.  
Grenze: Cloud-Einstellungen ersetzen kein Backup und kein sicheres Gerät.
  
Stand: 2026-01-27.

## Kurzfazit
- Erst Konto absichern, dann Freigaben aufräumen, dann Uploads begrenzen.
- Teste Wiederherstellung einmal, bevor du sie brauchst.

## Ziel

Weg A: Konto absichern und Freigaben so einstellen, dass Teilen im Alltag sicherer wird.  
Weg B: Zugriffe aufräumen, Drittzugriffe reduzieren, klare Trennung im Alltag.  
Weg C: Vertrauliches vor dem Upload schützen und Anmeldung phishing-resistent machen.

Stoppsignal: Wenn du nicht sicher bist, ob ein Link öffentlich ist, teile nichts weiter, bis du die Freigabe geprüft hast.  
Aufwand + Komfortkosten: 15–30 Minuten einmalig, danach monatlich 2 Minuten. Dafür weniger „mal eben per offenem Link“.

## Schnellstart (20 Minuten)

1. **Konto-Zugang absichern**
   - Nutze eine lange Passphrase, am besten aus [Passphrasen](/passwoerter/passphrasen/).
   - Aktiviere 2FA nach [2FA-Schnellstart](/2fa/schnellstart/) und lege [Recovery-Codes](/2fa/recovery-codes/) offline ab.
   - Prüfe [Sitzungen & Geräte](/konto/sitzungen-geraete/) und melde Unbekanntes ab.  
   Bezeichnung kann abweichen – nutze die Suche nach: Sicherheit, Zwei-Faktor, Anmeldungen, Geräte.  
   Das macht Kontoübernahmen deutlich schwerer. Bei Gerätewechsel wird es nervig, wenn du Codes nicht griffbereit hast.

2. **Freigaben und Link-Teilen entschärfen**
   - Öffne die Liste „Geteilt/Freigaben/Links“ und lösche alte Einträge.
   - Stelle neue Freigaben bevorzugt auf „bestimmte Personen“.
   - Setze Ablaufdaten und gib „Bearbeiten“ nur, wenn es wirklich nötig ist.  
   Bezeichnung kann abweichen – nutze die Suche nach: Geteilt, Freigaben, Links, Zugriff.  
   Du verlierst etwas Tempo beim schnellen Teilen. Du reduzierst aber Link-Leaks und vergessene Dauerfreigaben.

3. **Synchronisation so einstellen, dass nichts aus Versehen hochlädt**
   - Prüfe, welche Ordner automatisch synchronisiert werden.
   - Nimm Ordner raus, in denen regelmäßig sensible Inhalte landen.
   - Lege einen klaren „Cloud“-Ordner an und nutze ihn bewusst.
   - Auf dem Smartphone: prüfe Kamera-Upload und Foto-Sync.  
   Bezeichnung kann abweichen – nutze die Suche nach: Synchronisation, Kamera-Upload, Fotosicherung, automatisch.  
   Du musst Dateien bewusster ablegen. Dafür bestimmst du aktiv, was überhaupt in die Cloud geht.

4. **Vertrauliche Dateien vor dem Hochladen verschlüsseln**
   - Sortiere grob: unkritisch vs. vertraulich (Ausweise, Steuer, Gesundheit).
   - Vertrauliches verschlüsselst du vor dem Upload, siehe [Dateien verschlüsseln](/dateien/verschluesseln/).
   - Bewahre Passphrase/Schlüssel getrennt von der Cloud auf.
   - Teile Schlüssel nie über denselben Weg wie die Datei.  
   Bezeichnung kann abweichen – nutze die Suche nach: Verschlüsselung, Tresor, sicher teilen.  
   Vorschau und Online-Suche werden unpraktischer. Dafür bleiben Inhalte selbst bei Fehlfreigabe deutlich besser geschützt.

5. **Papierkorb, Versionen und Wiederherstellung einmal testen**
   - Prüfe Papierkorb und Versionierung und notiere dir Fristen.
   - Mini-Übung: Testdatei erstellen, löschen, aus Papierkorb oder Versionen zurückholen.
   - Plane zusätzlich ein Backup außerhalb der Cloud, siehe [Backups-Schnellstart](/backups/schnellstart/).  
   Bezeichnung kann abweichen – nutze die Suche nach: Papierkorb, Versionen, Wiederherstellen, Verlauf.  
   Das kostet einmal ein paar Minuten und etwas Speicher. Dafür bist du nach Versehen-Löschen oder Schadsoftware schneller wieder handlungsfähig.

## Wege

### Weg A
- 2FA aktivieren und Recovery-Codes offline lagern, sonst droht Aussperren bei Geräteverlust.
- Geräte/Sitzungen prüfen und Unbekanntes abmelden, das kann alte Geräte trennen, stoppt aber Fremdzugriffe.
- Drittzugriffe entfernen, die du nicht nutzt, danach funktionieren manche Integrationen nicht mehr.
- Freigaben auf Personen begrenzen und „Bearbeiten“ knapp halten, das bremst „schnell teilen“, senkt aber das Risiko.
- Einen festen „Teilen“-Ordner nutzen, das erfordert Umgewöhnung, verhindert aber Fehlfreigaben.
- Monatlich 2 Minuten prüfen: Geräte, Freigaben, Drittzugriffe. Das ist lästig, spart aber später Stress.

<details><summary>Weg B (Fortgeschritten)</summary>

- Trenne Zwecke: ein Bereich für Zusammenarbeit, ein Bereich nur für dich. Das kostet Disziplin, verhindert aber Mischordner.
- Prüfe „verknüpfte Apps“ und entferne alles, was du nicht aktiv nutzt.  
Bezeichnung kann abweichen – nutze die Suche nach: verbundene Apps, Zugriff, Berechtigungen.
- Aktiviere Anmelde-Benachrichtigungen, falls angeboten. Du bekommst mehr Hinweise, merkst Angriffe aber früher.
- Nutze Linkfreigaben nur kurz und mit Ablaufdatum. Das ist für Empfänger manchmal unpraktisch, reduziert aber das Weiterreichen alter Links.
- Für geteilte Ordner: Rollen (ansehen/bearbeiten) eng halten. Das spart Ärger durch versehentliche Änderungen.
- Lege einen Ablauf für Geräteverlust fest: Sitzungen abmelden, Codes griffbereit, Passwort ändern. Das ist trocken, hilft im Ernstfall.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.
- Nutze Ende-zu-Ende-Verschlüsselung (E2EE), wenn dein Setup das hergibt. E2EE bedeutet: Nur du und Berechtigte können Inhalte lesen.
- Verwende phishing-resistente Anmeldung, zum Beispiel [Passkeys](/2fa/passkeys/). Passkeys sind Anmeldeschlüssel, die nicht abgetippt werden und daher schwerer abzufischen sind.
- Halte Schlüsselmaterial getrennt: Passphrases und Recovery-Codes offline, nicht im gleichen Cloud-Konto.
- Arbeite mit klar getrennten Bereichen oder Konten (privat vs. Zusammenarbeit). Das erhöht Aufwand, reduziert aber Querschäden.
- Dokumentiere kritische Freigaben (wer, was, wie lange). Das bremst Tempo, macht Zugriffe aber prüfbarer.

</details>

## So merkst du, dass es wirkt
- Achte darauf, ob in deiner Geräteliste nur Geräte stehen, die du wirklich nutzt.
- Öffne ein paar Freigaben: Es sollte sofort klar sein, wer Zugriff hat und ob Bearbeiten erlaubt ist.
- Lösche eine Testdatei: Du solltest sie zuverlässig zurückholen können.

<details><summary>Mehr Prüfungen</summary>

- Frage pro Freigabe: „Würde ich das heute noch so teilen?“
- Teste einmal „verschlüsseln → hochladen → herunterladen → lokal entschlüsseln“.
- Prüfe nach Projektende, ob geteilte Ordner noch „mitwandern“, und räume konsequent auf.

</details>

## Probleme & Lösungen
- **Problem:** Ich finde „aktive Sitzungen“ oder „Geräte“ nicht.  
  **Lösung:** Nutze die Suche im Konto nach „Geräte“, „Sitzungen“ oder „Anmeldungen“.

- **Problem:** Ein Freigabe-Link wurde weitergeleitet.  
  **Lösung:** Link sofort deaktivieren und durch Freigabe an bestimmte Personen ersetzen.

- **Problem:** Nach dem Aufräumen fehlen Dateien auf einem Gerät.  
  **Lösung:** Prüfe, ob nur die Synchronisation aus ist, und wähle den Ordner gezielt wieder aus.

- **Problem:** Verschlüsselte Dateien sind unpraktisch (keine Vorschau, keine Online-Suche).  
  **Lösung:** Verschlüssele nur Vertrauliches und nutze für Zusammenarbeit unkritische Arbeitskopien.

- **Problem:** 2FA ist aktiv, aber ich habe Angst vor Aussperren.  
  **Lösung:** Lege Recovery-Codes offline ab und plane den [Gerätewechsel bei 2FA](/2fa/geraetewechsel/).

- **Problem:** Der Papierkorb ist leer, obwohl ich Dateien suche.  
  **Lösung:** Prüfe Fristen für Papierkorb/Versionen und ergänze ein Backup außerhalb der Cloud.

## Nicht gelöst
- Eine Cloud erzeugt Metadaten, zum Beispiel Dateinamen, Zeitpunkte und Freigabe-Beziehungen.
- Wenn du unverschlüsselt hochlädst, kann der Dienst Inhalte grundsätzlich verarbeiten, etwa für Vorschau und Suche.
- Rechtliche Zugriffe und Herausgabepflichten hängen vom Anbieter und Rechtsraum ab.
- Wenn dein Gerät kompromittiert ist (Schadsoftware, Admin-Zugriff, Stalkerware), helfen Cloud-Einstellungen nur begrenzt.
- Bei Zwang oder Zugriff auf ein entsperrtes Gerät können Dritte oft auf synchronisierte Cloud-Inhalte zugreifen.

## Quellen
- [BSI: Sichere Nutzung von Cloud-Diensten](https://www.bsi.bund.de/DE/Themen/Unternehmen-und-Organisationen/Informationen-und-Empfehlungen/Empfehlungen-nach-Angriffszielen/Cloud-Computing/Sichere-Nutzung/sichere-nutzung.html)
- [BSI: Cloud – Risiken und Sicherheitstipps](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Informationen-und-Empfehlungen/Cloud-Computing-Sicherheitstipps/Cloud-Risiken-und-Sicherheitstipps/cloud-risiken-und-sicherheitstipps_node.html)
- [ENISA: Cyber Hygiene – grundlegende Schutzmaßnahmen](https://www.enisa.europa.eu/topics/cyber-hygiene)
- [OWASP: Authentication Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- [W3C: Web Authentication (WebAuthn) Level 2](https://www.w3.org/TR/webauthn-2/)

## Weiter
- [Cloud](/cloud/)
- [Cloud-Backups](/cloud/backups/)
- [Freigabe-Links sicher nutzen](/cloud/sharing-links/)
- [Zugriffsrechte in der Cloud verstehen](/cloud/zugriffsrechte/)
- [Ende-zu-Ende-Verschlüsselung in der Cloud](/cloud/ende-zu-ende-verschluesselung/)
- [Backups: 3-2-1-Regel](/backups/3-2-1/)
