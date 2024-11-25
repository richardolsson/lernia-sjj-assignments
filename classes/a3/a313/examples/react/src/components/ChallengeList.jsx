import { createElement } from 'react';

function ChallengeList() {
  return (
    createElement('ul', {},
      createElement('li', {}, 'Challenge A'),
      createElement('li', {}, 'Challenge B'),
      createElement('li', {}, 'Challenge C'),
    )
  );
}

export default ChallengeList;