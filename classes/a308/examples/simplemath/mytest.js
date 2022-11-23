import { mul } from './math.js';

function testMul(param0, param1, expectedResult) {
    console.log(`Testing ${param0} x ${param1} == ${expectedResult}`);
    const result = mul(param0, param1);
    if (result == expectedResult) {
        console.log('OK');
    } else {
        console.log(`ERROR, result = ${result}`);
    }
}

testMul(2, 2, 4);
testMul(3, 3, 9);
testMul(4, 3, 12);
testMul(0, 0, 0);
testMul(-2, -2, 4);