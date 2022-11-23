import { describe, expect, it } from '@jest/globals';
import { mul } from './math.js';

describe('mul() function', () => {
    it('multiplies 2 and 2 to be 4', () => {
        const result = mul(2, 2);
        expect(result).toBe(4);
    });

    it('multiplies 3 and 3 to be 9', () => {
        const result = mul(3, 3);
        expect(result).toBe(9);
    });
});