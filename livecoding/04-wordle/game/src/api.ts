import type { LetterResult } from "./types";

export async function startGame(wordLength: number, allowRepeat: boolean): Promise<string> {
  const response = await fetch('/api/sessions', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ wordLength, allowRepeat })
  })

  const payload = await response.json();

  return payload.id;
}

export async function submitGuess(gameId: string, guess: string): Promise<LetterResult[]> {
  const response = await fetch(`/api/sessions/${gameId}/guesses`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ guess })
  });

  const payload = await response.json();
  return payload.result;
}

export async function submitHighscore(gameId: string, name: string): Promise<void> {
  await fetch(`/api/sessions/${gameId}/highscore`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ name })
  });
}