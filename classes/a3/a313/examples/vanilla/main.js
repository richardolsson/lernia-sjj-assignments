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
    counter.textContent = 'Showing 2';
  });

  document.querySelector('#bButton').addEventListener('click', () => {
    filterChallenges(['b']);
    counter.textContent = 'Showing 1';
  });

  document.querySelector('#allButton').addEventListener('click', () => {
    filterChallenges(['a','b','c']);
    counter.textContent = 'Showing 3';
  });

  document.querySelector('#noneButton').addEventListener('click', () => {
    filterChallenges([]);
    counter.textContent = 'Showing 0';
  });
}