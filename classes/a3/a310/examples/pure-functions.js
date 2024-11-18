// Simple pure function – only uses arguments as inputs and does not
// make changes to anything outside of function
function add(a, b) {
  return a + b;
}

// More complex pure function – uses only arguments as inputs and does
// not make any changes to anything outside of function.
function filterChallenges(challenges, filterConfig) {
  const filteredChallenges = [];
  challenges.forEach((challenge) => {
    if (challenge.title.includes(filterConfig.searchText)) {
      filteredChallenges.push(challenge);
      return;
    }
  });

  return filteredChallenges;
}

// Unpure – because it uses document (global variable) to get input
function createCard(data, template) {
  const template = document.querySelector('template#card-template');
  const card = template.cloneNode();
  card.querySelector('h2').innerText = data.title;
  return card;
}

// Pure version – gets it's input from arguments (which in turn
// come from DOM API, but that source does not affect the function)
function createCard(data, template) {
  const card = template.cloneNode();
  card.querySelector('h2').innerText = data.title;
  return card;
}

const template = document.querySelector('template#card-template');
const newCard = createCard({ title: 'Hello' }, template);
