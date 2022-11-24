import React from 'react';

export default function ChallengeItem(props) {
    /* Pure javascript:
    return (
        React.createElement('li', { className: 'challenge' },
          React.createElement('span', {}, [
            props.title,
          ]),
          React.createElement('span', {}, [
            props.rating,
          ]),
        )
    );
    */

    // JSX:
    return (
        <li className="challenge">
            <span>{ props.title }</span>
            <span>{ props.rating }</span>
        </li>
    );
}