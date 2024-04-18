import { mul } from './math.js';

const result1 = mul(2, 2);
if (result1 == 4) {
  console.log('First test is ok!');
} else {
  console.log(`First test is not ok! ${result1} != 4`);
}

const result2 = mul(3, 3);
if (result2 == 9) {
  console.log('Second test is ok!');
} else {
  console.log(`Second test is not ok! ${result2} != 9`);
}

const result3 = mul(4, 5);
if (result3 == 20) {
  console.log('Third test is ok!');
} else {
  console.log(`Third test is not ok! ${result3} != 20`);
}