import React from 'react';

export default function ChallengeItem(props) {
    return (
        React.createElement('li', {},
          React.createElement('span', {}, [
            props.title,
          ]),
          React.createElement('span', {}, [
            props.rating,
          ]),
        )
    );
}