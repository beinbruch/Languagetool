# Parlons – Französisch lernen

Eine Sprachlern-App als PWA: Französisch für Deutschsprachige von **A1 bis C2**, mit Einstufungstest, offline nutzbar, ohne Konto und ohne Abo.

## Funktionen

- **56 Einheiten** über alle sechs Stufen des europäischen Referenzrahmens (von Begrüßung und Uhrzeit bis Rechtssprache, Argot und Wortspielen), jede mit Grammatik-Tipps und Wortliste
- **Einstufungstest**: adaptiv, 6 zufällige Fragen pro Stufe aus einem Pool von 10; wer 5 von 6 schafft, steigt eine Stufe auf. Bestandene Stufen werden übersprungen (bleiben aber offen)
- **Übungstypen**: Paare finden, Übersetzung wählen, Sätze aus Wortkacheln bauen (A1–A2), frei tippen (ab B1), Hörverstehen, Lückentexte
- **Verteilte Wiederholung** mit [FSRS](https://github.com/open-spaced-repetition/ts-fsrs): Jede gelernte Vokabel und jeder Satz kommt dann wieder, wenn du ihn sonst vergessen würdest
- Antwortprüfung tolerant bei Groß-/Kleinschreibung, Satzzeichen und Apostrophen; fehlende Akzente zählen als richtig, werden aber angezeigt
- Aussprache über die Sprachausgabe des Geräts (offline, kostenlos)
- Tagesziel, XP, Streak – keine Leben, keine Werbung
- Fortschritt bleibt lokal auf dem Gerät; Export/Import als JSON-Datei

## Installieren

**iPhone/iPad**: Seite in Safari öffnen → Teilen → „Zum Home-Bildschirm“.
**Android**: In Chrome öffnen → Menü → „App installieren“.
**Mac/Windows/Linux**: In Chrome oder Edge öffnen → Installieren-Symbol in der Adressleiste. (Safari auf dem Mac: Ablage → „Zum Dock hinzufügen“.)

Tipp: Unter iOS in den Einstellungen → Bedienungshilfen → Gesprochene Inhalte → Stimmen eine „erweiterte“ französische Stimme laden.

## Entwicklung

```bash
npm install
npm run dev      # Entwicklungsserver
npm test         # Tests (Inhalte, Antwortprüfung, Wiederholung, Einstufung)
npm run build    # Produktions-Build nach dist/
```

Stack: Vite, Preact, TypeScript, vite-plugin-pwa (Service Worker), ts-fsrs.

### Inhalte erweitern

Die Kurse liegen als TypeScript-Daten in `src/content/` (eine Datei pro Stufe). Eine Einheit besteht aus Tipps, Vokabeln, Sätzen und Lückentexten; alle Übungen werden daraus erzeugt. Alternativen trennt man mit `|` (z. B. `"Je suis fatigué.|Je suis fatiguée."`). `npm test` prüft neue Inhalte automatisch auf typische Fehler.

### Veröffentlichen

Jeder Push auf `main` baut die App und veröffentlicht sie über GitHub Pages (`.github/workflows/deploy.yml`). Einmalig nötig: im Repository unter *Settings → Pages* als Quelle „GitHub Actions“ wählen.

## Grenzen

Eine App bringt dich solide bis B2 und hält C1/C2-Wissen frisch. Muttersprachliches Niveau erreicht man nur mit viel echtem Französisch: Bücher, Podcasts, Filme, Gespräche.
