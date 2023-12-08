/**
 * @jest-environment jsdom
 */

import { describe, expect, it } from '@jest/globals';

import MockAPIFacade from '../api/MockAPIFacade';
import Top3ChallengeList from './Top3ChallengeList';
import Challenge from './Challenge';

describe('Top3ChallengesList', () => {
  it('shows only three challenges', () => {
    const api = new MockAPIFacade();
    const list = new Top3ChallengeList(api);
    const elem = list.render();

    expect(elem.children).toHaveLength(3);
  });

  it('shows top 3 rated', () => {
    const api = {
      getChallenges: () => [
        new Challenge({
          title: 'Top challenge A',
          description: '',
          type: 'online',
          minParticipants: 2,
          maxParticipants: 5,
          rating: 5,
          imageUrl: '',
          labels: '',
        }),
        new Challenge({
          title: 'bottom challenge',
          description: '',
          type: 'online',
          minParticipants: 2,
          maxParticipants: 5,
          rating: 0,
          imageUrl: '',
          labels: '',
        }),
        new Challenge({
          title: 'Top challenge C',
          description: '',
          type: 'online',
          minParticipants: 2,
          maxParticipants: 5,
          rating: 3,
          imageUrl: '',
          labels: '',
        }),
        new Challenge({
          title: 'Top challenge B',
          description: '',
          type: 'online',
          minParticipants: 2,
          maxParticipants: 5,
          rating: 4,
          imageUrl: '',
          labels: '',
        }),
      ],
    };

    const list = new Top3ChallengeList(api);
    const elem = list.render();

    expect(elem.children).toHaveLength(3);
    expect(elem.children[0].innerHTML).toContain('Top challenge A');
    expect(elem.children[1].innerHTML).toContain('Top challenge B');
    expect(elem.children[2].innerHTML).toContain('Top challenge C');
  });
});