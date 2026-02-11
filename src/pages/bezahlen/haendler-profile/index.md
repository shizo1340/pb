---
layout: "@/layouts/DocLayout.astro"
title: "Händlerprofile reduzieren: Retargeting nach Käufen stoppen"
url: "/bezahlen/haendler-profile/"
chapter: "Themen"
type: "guide"
format: "guide"
level:
money: "no"
status: "done"
updated: "2026-02-09"
robots: "index,follow"
description: "Händlerprofile reduzieren: So stoppst du Retargeting nach Käufen mit Browser-Profilen, Cookie- und Pixel-Blockern, Gastkauf und kurzem Aufräumen."
---

Du kaufst einmal etwas – und danach „verfolgt“ dich Werbung wochenlang.  
Oft hängt das an Trackern, die Kauf, Browser und Werbenetzwerk verknüpfen (Retargeting = erneute Werbeansprache).

Nach dieser Seite werden Käufe seltener zu Werbeprofilen.  
Du begrenzt Pixel (unsichtbare Zähl-Elemente) und Erfolgsmessung („Conversion“ = ob ein Kauf passiert ist), ohne Shops unnötig kaputt zu machen.

Sinnvoll, wenn du nach Käufen auffällig passende Werbung siehst.  
Grenze: Serverseitige Messung und Login-Verknüpfung blockierst du nicht vollständig.
  
Stand: 2026-02-09.

## Kurzfazit

- Größter Hebel: Shopping im eigenen Browser-Profil + Drittanbieter-Tracking blockieren.
- Danach: Pixel/Werbenetzwerke zusätzlich blockieren und Shop-Daten gezielt aufräumen.

## Ziel

Weg A: Du trennst Shopping im Browser und begrenzt Drittanbieter-Tracking.  
Weg B: Du blockierst zusätzlich Pixel und Werbenetzwerke konsequenter.  
Weg C: Du trennst auch auf Netzwerk- und Geräteebene.

Stoppsignal: Wenn du gerade Retoure, Garantie oder Support brauchst, lösche Shop-Daten erst danach.  
Aufwand: 10–30 Minuten Einrichtung, danach meist nur Gewohnheit.  
Komfortkosten: häufiger neu einloggen, weniger „praktische“ Empfehlungen und Auto-Ausfüllen.

## Schnellstart (10 Minuten)

Bezeichnung kann abweichen – nutze die Suche nach: Drittanbieter-Cookies, Tracking-Schutz, Cross-Site-Tracking.

1) Lege ein separates Shopping-Profil an  
Erstelle im Browser ein neues Profil oder nutze eine klare Profiltrennung. Das verhindert, dass Alltags- und Shopping-Cookies zusammengeführt werden. Du musst dich in Shops öfter neu anmelden.

2) Schränke Drittanbieter-Cookies ein  
Aktiviere „Drittanbieter-Cookies blockieren“ oder „Cross-Site-Tracking verhindern“. Das bremst typische Retargeting-Ketten. Manche Bezahlseiten, Chat-Widgets oder eingebettete Inhalte können dadurch haken.

3) Aktiviere den Tracking-Schutz des Browsers  
Schalte den Schutz gegen Tracker auf „streng“, wenn verfügbar. Das blockiert viele bekannte Zählskripte ohne Extra-Tool. In Einzelfällen lädt der Checkout langsamer oder einzelne Elemente fehlen.

4) Lehne Marketing im Cookiebanner ab  
Wähle nur das Nötige und deaktiviere Marketing/Personalisierung, wenn angeboten. Das reduziert Profilbildung per Einwilligung. Manche Shops fragen dann häufiger nach.

5) Kaufe ohne Konto, wenn es geht  
Nutze Gastkauf und gib nur Daten an, die wirklich nötig sind. Das erschwert die Verknüpfung über feste Kennungen wie E-Mail oder Kundenkonto. Rücksendungen sind manchmal weniger bequem.

6) Räume nach dem Kauf gezielt auf  
Logge dich aus und lösche die Website-Daten der Shop-Domain, wenn du sie nicht mehr brauchst. Das verhindert Langzeit-Cookies für spätere Wiedererkennung. Du verlierst dabei Warenkorb, Einstellungen und gespeicherte Logins.

## Wege

### Weg A

1) Trenne Shopping vom Alltag  
Nutze Profiltrennung oder einen separaten Browser nur fürs Einkaufen. Das reduziert Querverknüpfungen zwischen Recherche, Social Media und Kauf. Du pflegst dann zwei „Welten“ statt einer.

2) Begrenze Drittanbieter-Tracking im Browser  
Blockiere Drittanbieter-Cookies und aktiviere den Tracking-Schutz. Das unterbindet viele Standard-Pixel und Werbenetzwerke. Einzelne Komfortfunktionen (z. B. eingebettete Karte oder Chat) können ausfallen.

3) Achte auf Kennungen beim Checkout  
Vermeide, wenn möglich, dauerhafte Konten und nutze Gastkauf. Das erschwert Profiling über E-Mail oder Kundenkonto. Für Treueprogramme oder digitale Rechnungsarchive ist ein Konto manchmal praktisch.

4) Prüfe „Kauf verknüpfen“-Optionen  
Achte auf Checkboxen zu Newsletter, personalisierter Werbung und Partnerweitergabe. Das senkt freiwillige Datenflüsse. Du bekommst dann eventuell weniger „Rabatt“-Hinweise.

<details><summary>Weg B (Fortgeschritten)</summary>

1) Blockiere Pixel und Werbenetzwerke mit einer Erweiterung  
Richte einen Inhaltsblocker wie uBlock Origin ein und lasse Standard-Listen aktiv. Das stoppt viele Zähl- und Retargeting-Anfragen direkt im Browser. Manche Seiten zeigen mehr „Bitte deaktivieren“-Hinweise oder brauchen Ausnahmen.

2) Entferne Tracking-Parameter aus Links  
Reduziere Link-Tracking wie UTM- oder Klick-IDs, bevor du bestellst. So „klebt“ ein Werbeklick seltener am Kauf. Manchmal gehen dadurch Gutschein- oder Zuordnungen verloren.

3) Nutze E-Mail-Aliases fürs Shopping  
Verwende pro Shop eine eigene Adresse. Das erschwert die Verknüpfung über Wiedererkennung per E-Mail und begrenzt Folgetracking per Newsletter. Du musst Aliases verwalten und Spam-Regeln pflegen.

4) Lösche Shop-Daten gezielt statt „alles“  
Lösche nur die Website-Daten der betroffenen Domain nach dem Kauf. Das hält den Alltag stabil und entfernt trotzdem Shopping-Spuren. Du musst wissen, welche Domain zum Shop und welche zum Zahlungsdienst gehört.

</details>

<details><summary>Weg C (Profi)</summary>

Wenn dir das zu technisch ist, bleib bei Weg B.

1) Nutze DNS-Filterung fürs Shopping-Netz  
Setze einen DNS-Dienst mit Blocklisten für Tracking-Domains für das Shopping-Profil oder ein separates WLAN ein. Das blockiert Tracker auch außerhalb des Browsers, etwa in eingebetteten Komponenten. Manche Dienste wirken „kaputt“, bis du Ausnahmen sauber setzt.

2) Trenne Geräte oder Nutzerkonten  
Nutze ein eigenes Benutzerkonto oder ein Zweitgerät fürs Einkaufen. Das erschwert Geräteabdruck-Verknüpfung (Fingerprinting = Wiedererkennung über Merkmale von Gerät und Browser). Es kostet Pflegeaufwand und Updates für eine zweite Umgebung.

3) Minimiere verknüpfende Zahlungs- und Kontaktkennungen  
Nutze Zahlungsarten, die weniger Daten im Händlerkonto wiederverwenden, und schütze deine Telefonnummer. Das reduziert die Chance, dass Daten über mehrere Käufe zusammengeführt werden. Das kann teurer sein oder zusätzliche Bestätigungen auslösen.

</details>

## So merkst du, dass es wirkt

Achte darauf, ob du nach Käufen deutlich weniger „genau diesen Shop“-Werbung auf anderen Seiten siehst.  
Achte darauf, ob im Privatsphärebericht deines Browsers häufiger Tracker als „blockiert“ auftauchen.  
Achte darauf, ob der Shop dich nach dem Aufräumen nicht mehr automatisch wiedererkennt.

<details><summary>Mehr Checks (wenn du genauer prüfen willst)</summary>

Achte darauf, ob Links ohne UTM- und Klick-IDs in der Adresszeile landen.  
Achte darauf, ob der Warenkorb im Shopping-Profil getrennt bleibt.  
Achte darauf, ob Drittanbieter-Domains im Bericht deutlich seltener erscheinen.

</details>

## Probleme & Lösungen

- **Problem:** Checkout bricht ab oder eine Zahlart lädt nicht.  
  **Lösung:** Erlaube Ausnahmen nur für Shop- und Zahlungs-Domain, nicht global.

- **Problem:** Retargeting bleibt trotz Cookie-Blockade.  
  **Lösung:** Prüfe, ob du eingeloggt bist oder immer dieselbe E-Mail/Telefonnummer nutzt.

- **Problem:** Gutschein funktioniert ohne Tracking-Parameter nicht.  
  **Lösung:** Entscheide bewusst: Preisvorteil behalten oder Tracking reduzieren.

- **Problem:** Cookiebanner kommt ständig wieder.  
  **Lösung:** Lösche nicht „alles“, sondern nutze Profiltrennung und lehne Marketing ab.

- **Problem:** Newsletter-Mails fühlen sich wie „Beobachtung“ an.  
  **Lösung:** Nutze Aliases und deaktiviere externe Bilder in Mails.

- **Problem:** Retouren sind ohne Konto umständlich.  
  **Lösung:** Lege ein Konto an, nutze es nur im Shopping-Profil und logge danach aus.

## Nicht gelöst

- Serverseitige Erfolgsmessung und Datenaustausch zwischen Händler und Dienstleistern bleiben teilweise unsichtbar.  
- Login, Treueprogramme und feste Kennungen (E-Mail/Telefonnummer) ermöglichen Profiling auch ohne Drittanbieter-Cookies.  
- Geräteabdrücke lassen sich nur begrenzt verhindern, besonders bei wiederkehrendem Setup.  
- Daten können später bei Datenhändlern landen, auch wenn du im Browser viel blockierst.  
- Angreifermodelle: Kompromittiertes Gerät, Admin-Zugriff, Stalkerware oder Zwang hebeln Browser-Schutz oft aus.

## Quellen

- [Mozilla Support – Verbesserter Schutz vor Aktivitätenverfolgung](https://support.mozilla.org/de/kb/verbesserter-schutz-aktivitatsverfolgung-firefox-desktop)
- [Google Hilfe – Cookies in Chrome löschen, zulassen und verwalten](https://support.google.com/chrome/answer/95647)
- [Apple Support – Cross-Site-Tracking in Safari verhindern](https://support.apple.com/guide/safari/prevent-cross-site-tracking-sfri40732/mac)
- [W3C – Referrer Policy](https://www.w3.org/TR/referrer-policy/)
- [EDPB – Leitlinien und Dokumente (Übersicht)](https://edpb.europa.eu/our-work-tools/our-documents_en)

## Weiter

- [Bezahlen](/bezahlen/)
- [Tracking-Schnellstart](/tracking/schnellstart/)
- [Browser-Profiltrennung](/browser/profile-trennung/)
- [uBlock Origin](/browser/ublock-origin/)
- [URL-Tracking](/browser/url-tracking/)
- [Lieferadresse & Paketstation](/bezahlen/lieferadresse-paketstation/)
