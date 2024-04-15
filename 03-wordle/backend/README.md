# Wordle Backend API

## `POST /api/games`
Starts a new game.

### Input
An object containing: 

* `wordLength` defines length of word to use for game
* `allowDuplicates` defines whether the same letter can exist more than once in word

### Output
An object containing:

* `id` which is the ID of the game

## `POST /api/games/<id>/guesses`
Submits a guess for the game specified by `id`

### Input
An object containing:

* `guess` – the word guessed by the player

### Output
An object containing:

* `feedback` – list of letters and their correctness
* `result` – object containing result, or `null`

## `POST /api/games/<id>/highscore`
Creates highscore from finished game, specified by `id`.

### Input
An object containing:

* `name` – Name of player

### Output
An object containing

* `id` – Game ID
* `result` – Result object