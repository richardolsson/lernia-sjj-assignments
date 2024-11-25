import { createElement } from 'react';

function ChallengeList() {
  /*
  return (
    createElement('ul', {},
      createElement('li', {}, 'Challenge A'),
      createElement('li', {}, 'Challenge B'),
      createElement('li', {}, 'Challenge C'),
    )
  );
  */

  return (
    <ul>
      <li>Challenge A</li>
      <li>Challenge B</li>
      <li>Challenge C</li>
    </ul>
  );
}

export default ChallengeList;