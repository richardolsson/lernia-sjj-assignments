# Wordle-klon

## Frontend-app (React)

## Server

### Spel-API
#### `POST /api/games`
Starta nytt spel (väljer ut ord, etc). Svarar med ID.

- [x] Ta emot inställningar i body
- [x] Välja ett ord baserat på inställningar
- [x] Skapa spelobjekt med slumpat ID och lagra någonstans
- [x] Svara med spelobjekt (utan ordet) med ID

#### `POST /api/games/{ID}/guesses`
Skicka in gissning. Svarar med feedback på gissningen.

#### `POST /api/games/{ID}/highscore`
Skicka in till highscore.

### Serva spelsida

### Serva statisk info-sida

### Server-side-rendera highscore

## Databas