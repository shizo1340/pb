---
layout: "@/layouts/DocLayout.astro"
title: "Firmendaten & KI: sichere Regeln, die wirklich helfen"
url: "/ki/firmendaten/"
chapter: "Themen"
type: "guide"
format: "guide"
level: ""
money: "no"
status: "done"
updated: "2026-02-09"
robots: "index,follow"
description: "Firmendaten sicher mit KI nutzen: No-Go-Zonen, Freigaben, Anonymisieren (Redaction), lokal (On-Device) und Prozesse, damit im Job keine Datenpannen passieren."
---
KI im Job spart Zeit.  
Aber ein Copy-paste kann aus internen Infos schnell eine Datenpanne machen.

Du bekommst hier Regeln, die du wirklich einhalten kannst.  
Am Ende weißt du, was tabu ist und wie du Grenzfälle sauber klärst.

Sinnvoll, wenn du KI im Team nutzt oder allein ohne Risiko arbeiten willst.  
Grenze: Ohne Freigaben, Verträge und Zuständigkeiten bleibt es unsicher.

## Kurzfazit
- Wenn du wenig Zeit hast: nutze den Schnellstart und arbeite die Schritte in Reihenfolge ab.
- Wichtig: Priorisiere die größten Hebel und teste danach, ob es wirkt.

## Ziel

Weg A: Du nutzt KI mit klaren No-Go-Zonen und sauberer Anonymisierung.  
Weg B: Du ergänzt Team-Regeln, Freigaben und eine erlaubte Tool-Liste.  
Weg C: Du setzt technische Leitplanken (z. B. lokal/On-Device, Gateways, DLP).

Stoppsignal: Wenn du nicht sicher bist, ob etwas intern ist, nicht eingeben.  
Aufwand: 10 Minuten Start, danach 2 Minuten pro Grenzfall.  
Komfortkosten: Weniger „einfach alles reinkopieren“, teils schlechtere Antworten.

## Schnellstart (10 Minuten)
1) Trenne Arbeit und Privat konsequent.  
   1. Lege ein eigenes Browserprofil „Arbeit“ an.
   2. Nutze ein separates Arbeitskonto für den KI-Dienst.
   Das verhindert Vermischung durch Cookies, Autofill und Verlauf.  
   Du musst dich dafür öfter neu anmelden.

2) Schreibe eine No-Go-Liste und mach sie sichtbar.  
   3. Notiere 8–12 Dinge, die nie eingegeben werden.
   4. Hänge sie an den Monitor oder pinne sie ins Team-Tool.
   Das senkt Fehler durch Routine und Stress.  
   Es fühlt sich am Anfang strenger an.

3) Anonymisiere standardmäßig (Redaction = gezieltes Ersetzen).  
   5. Ersetze Namen durch Rollen: „KUNDE_A“, „MITARBEITER_1“.
   6. Entferne IDs, Aktenzeichen, Rechnungsnummern und Adressen.
   Das reduziert personenbezogene Daten und vertrauliche Bezüge.  
   Antworten können ungenauer werden, du musst mehr Kontext beschreiben.

4) Lege eine 2-Minuten-Freigabe für Grenzfälle fest.  
   7. Definiere eine zweite Person oder einen Kanal für Kurz-Checks.
   8. Entscheide: „anonymisieren“ oder „nicht nutzen“.
   Das fängt Ausrutscher ab, bevor sie passieren.  
   Es kostet kurz Zeit und unterbricht den Flow.

5) Stelle Speichern und Weiterverwendung auf „minimal“.  
   9. Prüfe im KI-Dienst, ob Chats gespeichert oder Inhalte fürs Training genutzt werden.
   10. Setze den Standard auf: Verlauf aus oder kurze Aufbewahrung.
   Bezeichnung kann abweichen – nutze die Suche nach: Training, Verlauf, Daten, Aufbewahrung.  
   Du reduzierst, was dauerhaft liegen bleibt und später falsch genutzt wird.  
   Komfortfunktionen wie Verlaufssuche oder Personalisierung können fehlen.

## Wege

### Weg A

1) Nutze nur Inhalte, die extern verarbeitet werden dürften.  
   Das passt zu vielen Unternehmensregeln und senkt das Risiko deutlich.  
   Du musst häufiger abstrahieren statt Originaltexte zu kopieren.

2) Verwandle echte Fälle in Fallmuster.  
   Schreibe „Projekt X“, „Lieferant Y“, „Budget grob“ statt echter Details.  
   Das schützt Zahlen und Namen, bleibt aber für die Aufgabe brauchbar.  
   Bei sehr speziellen Problemen kann die Antwort weniger treffsicher sein.

3) Keine Zugangsdaten, keine Schlüssel, keine Geheimnisse.  
   Zugangsschlüssel (Token), Passwörter und Recovery-Codes gehören nie in Prompts.  
   Das verhindert direkte Kontoübernahmen durch Leaks oder Mitschnitte.  
   Du musst für Debugging andere Wege nutzen (z. B. Testdaten).

4) Dateien erst vorbereiten, dann verwenden.  
   Entferne Metadaten und unnötige Anhänge vor dem Hochladen.  
   Das senkt „unsichtbare“ Leaks aus Dokumenteigenschaften.  
   Es kostet ein paar Klicks mehr, besonders bei PDFs.  
   Hilfreich sind: [PDF-Metadaten entfernen](/dateien/pdf-metadaten/) und [Office-Metadaten](/dateien/office-metadaten/).

5) Ergebnisse nie blind übernehmen.  
   Prüfe Fakten, Zahlen und Zitate gegen eine Quelle oder das Original.  
   Das reduziert Folgeschäden durch Halluzinationen.  
   Du brauchst einen kurzen Review-Schritt vor dem Versand.

<details><summary>Weg B (Fortgeschritten)</summary>

1) Lege Einsatzfelder und Datenklassen fest.  
   Definiere: „öffentlich“, „intern“, „vertraulich“, „streng vertraulich“.  
   Das macht Entscheidungen wiederholbar und teamtauglich.  
   Es braucht einmal Abstimmung und Pflege.

2) Baue eine kurze Minimal-Policy, die alle verstehen.  
   Schreibe 10 Regeln, maximal eine Seite, mit Beispielen.  
   Das erhöht die Einhaltung, weil niemand lange suchen muss.  
   Zu strenge Regeln werden umgangen, halte sie realistisch.

3) Erstelle eine erlaubte Tool-Liste mit Begründung.  
   Nenne pro Tool: Datenverwendung, Aufbewahrung, Region, Vertrag/DPA.  
   Das verhindert Wildwuchs und „Schatten-KI“ ohne Kontrolle.  
   Du musst gelegentlich nachschärfen, wenn sich Angebote ändern.

4) Mach Freigaben leicht, nicht heroisch.  
   Richte einen Kanal „KI-Grenzfall“ mit Antwortziel < 15 Minuten ein.  
   Das senkt das Risiko, dass Leute aus Zeitdruck trotzdem posten.  
   Es bindet Kapazität, wenn viele Anfragen kommen.

5) Schütze Konten und Sitzungen.  
   Nutze starke Anmeldung und räume alte Sitzungen regelmäßig auf.  
   Das reduziert Schäden bei Kontoübernahme.  
   Es erhöht den Einrichtungsaufwand, besonders bei mehreren Geräten.  
   Passend dazu: [2FA](/2fa/) und [Sitzungen & Geräte prüfen](/konto/sitzungen-geraete/).

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

1) Nutze lokale Modelle, wo es passt (On-Device = Verarbeitung auf dem Gerät).  
   Für Standardtexte und Zusammenfassungen reicht das oft aus.  
   Du reduzierst externe Datenflüsse erheblich.  
   Qualität und Geschwindigkeit können je nach Hardware schwanken.

2) Setze ein „KI-Gateway“ zwischen Nutzer und Anbieter.  
   Filtere vor dem Senden: Namen, IDs, vertrauliche Begriffe, Secrets.  
   Das schafft eine technische Bremse gegen Copy-paste-Fehler.  
   Falsch-positive Filter können Arbeit blockieren, du brauchst Ausnahmen.

3) Verbinde internes Wissen nur mit klaren Rechten (RAG).  
   RAG heißt: Das Modell bekommt passende Auszüge, nicht das ganze Archiv.  
   Du vermeidest, dass Mitarbeitende mehr sehen als ihre Berechtigung.  
   Falsch gesetzte Rechte werden sofort sichtbar und müssen sauber sein.

4) Ergänze DLP und Secrets-Scanning an den richtigen Stellen.  
   Prüfe Uploads und Prompts auf Schlüssel, Kundennummern und PII.  
   Das stoppt typische Leaks, bevor sie den Anbieter erreichen.  
   Es erzeugt Logs, die du datenschutzkonform betreiben musst.

</details>

## So merkst du, dass es wirkt

Achte darauf, ob eure Prompts meist Platzhalter statt echter Namen enthalten.  
Achte darauf, ob Grenzfälle wirklich kurz gegengeprüft werden.  
Achte darauf, ob der Verlauf leer bleibt oder automatisch gelöscht wird.

<details><summary>Mehr Checks</summary>

Achte darauf, ob niemand mehr „zur Sicherheit“ ganze Dokumente einfügt.  
Achte darauf, ob in Stichproben keine IDs, Adressen oder Personalnummern auftauchen.  
Achte darauf, ob alte Sitzungen und Gerätezugriffe regelmäßig bereinigt werden.

</details>

## Probleme & Lösungen

**Problem:** „Ich brauche echte Daten, sonst hilft die KI nicht.“ / **Lösung:** Nutze Platzhalter plus Rahmenwerte und ergänze nur, was wirklich nötig ist.  
**Problem:** „Niemand hält sich an die No-Go-Liste.“ / **Lösung:** Mache sie sichtbar, kurz und mit Beispielen aus eurem Alltag.  
**Problem:** „Anonymisieren zerstört den Kontext.“ / **Lösung:** Ersetze nur Identifikatoren, behalte Struktur, Rollen und Prozessschritte.  
**Problem:** „Der Dienst speichert Chats, das wusste ich nicht.“ / **Lösung:** Standardisiere die Einstellung und prüfe sie beim Onboarding.  
**Problem:** „Wir wissen nicht, welches Tool erlaubt ist.“ / **Lösung:** Pflegt eine kurze Tool-Liste mit Datum und Verantwortlichen.  
**Problem:** „Aus einem Prompt wurde ein Ticket mit Screenshot.“ / **Lösung:** Sensible Inhalte nie per Screenshot teilen, sondern als abstrahiertes Muster.

## Nicht gelöst

- Wenn dein Gerät kompromittiert ist (Malware, Stalkerware, Admin-Zugriff), helfen Regeln nur begrenzt.  
- Wenn Mitarbeitende absichtlich Daten abziehen, brauchst du zusätzliche Kontrollen und Prozesse.  
- Wenn ein Anbieter oder ein Konto kompromittiert wird, können Daten trotz Vorsicht abfließen.  
- Rechtliche Fragen (Verträge, Betriebsrat, Kundenzusagen) ersetzt diese Seite nicht.  
- Zwangslagen (z. B. erpresserischer Zugriff auf Accounts) brauchst du separat abzusichern.

## FAQ

**Was ist das Hauptproblem bei KI-Tools?**

Datenabfluss: Eingaben können gespeichert/ausgewertet werden. Nutze Minimierung und klare Regeln.

**Kann ich KI sicher nutzen?**

Mit sensiblen Daten vorsichtig. Nutze lokale/vertrauenswürdige Optionen und teile nur, was nötig ist.

**Was ist mit Unternehmens-KI?**

Oft gibt es Verträge/Policies, aber du brauchst klare Prozesse und Limits.

## Quellen

- [BSI: Generative KI-Modelle – Chancen und Risiken](https://www.bsi.bund.de/SharedDocs/Downloads/DE/BSI/KI/Generative_KI-Modelle.html/SharedDocs/Downloads/DE/BSI/KI/Generative_KI-Modelle.html)
- [Datenschutzkonferenz: Orientierungshilfe KI und Datenschutz (PDF)](https://www.datenschutzkonferenz-online.de/media/oh/20240506_DSK_Orientierungshilfe_KI_und_Datenschutz.pdf)
- [EU DSGVO (EUR-Lex)](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
- [NIST: AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [OWASP: LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/)

## Weiter

- [Prompt-Leaks vermeiden](/ki/prompt-leaks/)
- [Was wird gespeichert?](/ki/was-wird-gespeichert/)
- [On-Device vs. Cloud bei KI](/ki/on-device-vs-cloud/)
- [Daten minimieren](/identitaet/daten-minimierung/)
- [Dateien sicher teilen](/dateien/sicher-teilen/)
