export function makeWordPicker(words: string[]) {
  return (length: number, unique: boolean) => {
    const candidates = words
      .filter((word) => word.length == length)
      .filter((word) => {
        if (!unique) {
          return true;
        }

        const letters = Array.from(word);
        for (let i = 0; i < letters.length; i++) {
          const letter = letters[i];
          if (letters.filter((l) => l == letter).length > 1) {
            return false;
          }
        }

        return true;
      });
    const index = Math.floor(Math.random() * candidates.length);
    return candidates[index];
  };
}
