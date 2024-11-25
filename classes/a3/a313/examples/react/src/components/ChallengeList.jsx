import { createElement } from 'react';

function ChallengeList({ challenges }) {
  /*
  return (
    createElement('ul', {},
      challenges.map(challenge => createElement('li', { key: challenge.id }, challenge.title))
    )
  );
  */

  console.log(challenges);

  return (
    <ul>
      {challenges.map(challenge => (<li key={challenge.id}>{challenge.title}</li>))}
    </ul>
  );
}

export default ChallengeList;