/**
 * @jest-environment jsdom
*/

import { describe, expect, it, jest } from '@jest/globals';
import { fireEvent } from '@testing-library/dom';

import { Challenge, StringFilter } from './main';

describe('StringFilter', () => {
    it('renders UI as simple input field', () => {
        const filter = new StringFilter();
        const ui = filter.render();
        expect(ui.tagName).toBe('INPUT');
        expect(ui.value).toBe('');
    });

    it('returns true for any challenge when input is empty', () => {
        const filter = new StringFilter();
        const challengeData = {
            description: 'Some text',
            id: 27,
            labels: [],
            rating: 3.5,
            title: 'Some title',
            // ... more fields (that we don't care about)
        };
        const challenge = new Challenge(challengeData);
        const doesMatch = filter.challengeDoesMatch(challenge);
        expect(doesMatch).toBeTruthy();
    });

    it('returns true if challenge title matches input text', () => {
        const mockChallengeList = {
            update: jest.fn(),
        };

        const filter = new StringFilter(mockChallengeList);
        const ui = filter.render();

        ui.value = 'searchstring';
        fireEvent.keyUp(ui);

        const challenge = new Challenge({ title: 'Any searchstring challenge' });
        const doesMatch = filter.challengeDoesMatch(challenge);

        expect(doesMatch).toBeTruthy();
        expect(mockChallengeList.update).toBeCalledTimes(1);
    });

    it('returns false if challenge title does not match input text', () => {
        const mockChallengeList = {
            update: jest.fn(),
        };

        const filter = new StringFilter(mockChallengeList);
        const ui = filter.render();

        ui.value = 'searchstring';
        fireEvent.keyUp(ui);

        const challenge = new Challenge({ title: 'Any challenge' });
        const doesMatch = filter.challengeDoesMatch(challenge);

        expect(doesMatch).toBeFalsy();
        expect(mockChallengeList.update).toBeCalledTimes(1);
    });
});