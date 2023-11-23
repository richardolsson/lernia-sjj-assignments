import React from 'react';

export default function ChallengeList(props) {
  return (
    React.createElement('ul', {}, props.challenges.map((challenge) => {
      return (
        React.createElement('li', { key: challenge.id }, challenge.title)
      );
    }))
  );
}