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

// TEST 1: Empty challenge list
const firstFilter = new TypeFilter('online');
const firstResult = firstFilter.filterChallenges([]);

if (firstResult.length == 0) {
  console.log('TEST 1 PASSED!');
} else {
  console.log('TEST 1 FAILED!');
}

// TEST 2: Filter for online
const secondFilter = new TypeFilter('online');
const secondResult = secondFilter.filterChallenges([
  {
    id: 1,
    title: 'Online challenge',
    type: 'online',
  }
]);

if (secondResult.length == 1) {
  console.log('TEST 2 PASSED!');
} else {
  console.log('TEST 2 FAILED!');
}

// TEST 3: Filter for onsite
const thirdFilter = new TypeFilter('onsite');
const thirdResult = thirdFilter.filterChallenges([
  {
    id: 1,
    title: 'Online challenge',
    type: 'online',
  },
  {
    id: 2,
    title: 'Onsite challenge',
    type: 'onsite',
  }
]);

if (thirdResult.length == 1) {
  console.log('TEST 3 PASSED!');
} else {
  console.log('TEST 3 FAILED!');
}