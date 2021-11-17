const math = require('./math.js');


function testMul(x, y, expectedResult) {
  const result = math.mul(x, y);
  if (result == expectedResult) {
    console.log('Works!');
    return true;
  }
  else {
    console.log('Did not work!', x, y, expectedResult, result);
    return false;
  }
}

let allGood = true;

for (let i = 0; i < 1000; i++) {
  const x = i;
  const y = i+1;
  allGood = testMul(x, y, x * y);
}

allGood = testMul(2, 2, 4) && allGood;
allGood = testMul(2, 5, 10) && allGood;
allGood = testMul(100, 100, 10000) && allGood;

if (allGood) {
  console.log('All good!');
}
else {
  console.log('Something failed');
}
