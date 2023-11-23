const challenges = [
  {
    id: 'a',
    title: 'Challenge A',
  },
  {
    id: 'b',
    title: 'Challenge B',
  },
  {
    id: 'c',
    title: 'Challenge C',
  },
];


const list = document.querySelector('#challenges');
const counter = document.querySelector('#counter');

init();

function filterChallenges(ids) {
  const items = list.querySelectorAll('li');
  for (const item of items) {
    const itemId = item.id.slice(10);
    if (ids.includes(itemId)) {
      item.style.display = 'list-item';
    } else {
      item.style.display = 'none';
    }
  }

  counter.textContent = `Showing ${ids.length}`;
}

function init() {

  // Create initial labels
  challenges.forEach((challenge) => {
    const item = document.createElement('li');
    item.textContent = challenge.title;
    item.id = `challenge-${challenge.id}`;
    list.append(item);
  });

  counter.textContent = 'Showing 3';

  document.querySelector('#abButton').addEventListener('click', () => {
    filterChallenges(['a','b']);
  });

  document.querySelector('#bButton').addEventListener('click', () => {
    filterChallenges(['b']);
  });

  document.querySelector('#allButton').addEventListener('click', () => {
    filterChallenges(['a','b','c']);
  });
}