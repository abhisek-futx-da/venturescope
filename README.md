# VentureScope

Startup intelligence data table with an AI analyst.

Part of the [VC Intelligence App Suite](../README.md). Vanilla HTML/CSS/JS, no build step.

## Features
- Sortable/filterable company table with pagination.
- Persistent watchlist and CSV export.
- Conversational AI analyst powered by Groq / Llama 3.
- Keyboard shortcuts (/ to search, Esc to close, w to watchlist).

## Run
```bash
# from the repo root
python3 -m http.server 8000
# open http://localhost:8000/venturescope-v2/
```

## AI features (optional)
The AI features use the [Groq API](https://console.groq.com). Click **API Key** in the app
and paste your own key — it is stored only in your browser's `localStorage` and never sent
anywhere except Groq. No key is required to browse the app.

## Security
All dynamic content is escaped before rendering (`escapeHtml`), a Content-Security-Policy is
set in the page `<head>`, and the app runs in strict mode.
