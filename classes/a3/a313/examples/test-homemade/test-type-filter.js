// Normally this would be in another file, but node does not work
// well with export/import.
class TypeFilter {
  constructor(type) {
    this.type = type;
  }

  filterChallenges(challenges) {
    const filteredChallenges = challenges.filter(
      (challenge) => challenge.type == this.type
    );
    return filteredChallenges;
  }
}


const firstFilter = new TypeFilter('online');
const firstResult = firstFilter.filterChallenges([]);

if (firstResult.length == 0) {
  console.log('TEST 1 PASSED!');
} else {
  console.log('TEST 1 FAILED!');
}

const secondFilter = new TypeFilter('online');
const secondResult = secondFilter.filterChallenges([
  {
    id: 1,
    title: 'My challenge',
    type: 'online',
    // ...
  }
]);

if (secondResult.length == 1) {
  console.log('TEST 2 PASSED!');
} else {
  console.log('TEST 2 FAILED!');
}

const thirdFilter = new TypeFilter('online');
const thirdResult = thirdFilter.filterChallenges([
  {
    id: 1,
    title: 'My challenge',
    type: 'onsite',
  }
]);

if (thirdResult.length == 0) {
  console.log('TEST 3 PASSED!');
} else {
  console.log('TEST 3 FAILED!');
}