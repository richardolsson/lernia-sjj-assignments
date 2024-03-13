export default function titleCase(str) {
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i] != 'of' && words[i] != 'and' && words[i] != 'to' && words[i] != 'in' && words[i] != 'the') {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  }

  const sentence = words.join(' ');

  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}