export async function startGame(wordLength: number, allowRepeat: boolean): Promise<string> {
  const response = await fetch('/api/sessions', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ wordLength, allowRepeat })
  })

  const payload = await response.json();

  return payload.id;
}