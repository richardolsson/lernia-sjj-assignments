import type { WordResult } from "../types";

export default function isCorrect(result: WordResult): boolean {
  return result.every((letterResult) => letterResult.result == 'correct');
}