export default function titlecase(str) {
  const EXCEPTIONS = [
    'of', 'the', 'in', 'and', 'to'
  ];

  const words = str.split(' ');
  const casedWords = words.map((word, index) => {
    if (EXCEPTIONS.includes(word) && index > 0) {
      return word;
    }

    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return casedWords.join(' ');
}