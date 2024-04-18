import React from 'react';

export default function ChallengeList(props) {
  /* Without JSX
  return (
    React.createElement('ul', {}, props.challenges.map((challenge) => {
      return (
        React.createElement('li', { key: challenge.id }, challenge.title)
      );
    }))
  );
  */

  // With JSX
  return (
    <ul>
      {props.challenges.map((challenge) => {
        return (
          <li key={challenge.id}>{challenge.title}</li>
        )
      })}
    </ul>
  );
}