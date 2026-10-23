# Sprint 1 – Vom Vokabeltrainer zum Sprachkurs

**Ziel:** Bisher trainiert Parlons einzelne Wörter und Sätze. Wer fließend werden will, muss aber zusammenhängende Texte und Gespräche verstehen. Dieser Sprint bringt Lese- und Hörverstehen in jede Stufe und schließt die Lücken, die echtes Lernen im Alltag bremsen.

**Dauer:** 2 Wochen · **Erfolgsmaß:** Jede Stufe hat mindestens zwei Texte mit Verständnisfragen, und der Kurs läuft auf einem echten iPhone ohne Fehler.

## Backlog (nach Priorität)

| # | Story | Größe | Wer | Status |
|---|---|---|---|---|
| 1 | **Lesen & Hören:** 12 eigene Texte und Dialoge (2 pro Stufe), Satz für Satz vorlesbar, Übersetzung per Tipp, 3 Verständnisfragen je Text | M | Claude | ✅ erledigt |
| 2 | **Dialoge mit zwei Stimmen:** In Gesprächen sprechen die Personen unterschiedlich (zweite Stimme oder andere Tonhöhe) | S | Claude | ✅ erledigt |
| 3 | **„Fehler melden“:** Nach jeder Übung ein Link, der ein vorausgefülltes GitHub-Issue öffnet, damit falsche Inhalte schnell korrigiert werden | S | Claude | ✅ erledigt |
| 4 | **Fehlerheft:** Übungen, die man zuletzt falsch hatte, gezielt wiederholen | S | Claude | ✅ erledigt |
| 5 | **Mehr Sätze A1–B1:** 6 → 10 Sätze pro Einheit in den meistgenutzten Stufen | L | Claude | offen |
| 6 | **Praxistest auf dem iPhone:** Installation, Sprachausgabe, Offline-Betrieb, Tastatur prüfen und Befunde als Issues anlegen | S | Florian | offen |
| 7 | **GitHub Pages aktivieren** (Settings → Pages → „GitHub Actions“) | XS | Florian | offen |

## Bewusst nicht in diesem Sprint

- **Tägliche Erinnerungen:** Push-Nachrichten brauchen einen Server, der bei iOS-Web-Apps die Nachrichten auslöst. Das widerspricht „kein Server, kein Konto“ und lohnt sich erst, wenn die App regelmäßig genutzt wird.
- **Spracherkennung (Aussprache bewerten):** Safari unterstützt die Web-Speech-Erkennung nur eingeschränkt. Das prüfen wir erst nach dem iPhone-Praxistest (#6).
- **Store-Apps (Capacitor/Tauri):** erst, wenn die PWA im Alltag an Grenzen stößt.

## Definition of Done

- Inhalte selbst geschrieben, von den automatischen Inhaltstests abgedeckt
- `npm test` und `npm run build` grün, Durchlauf im Browser im iPhone-Format ohne Fehler
- Alte Spielstände laden weiter ohne Fortschrittsverlust
