import React from 'react';
import ChallengeItem from "./ChallengeItem";

export default function App() {
    /* Pure javascript:
    return (
      React.createElement('ul', { id: 'challenges', "aria-label": "Challenges" }, [
        React.createElement(ChallengeItem, { key: 1, title: 'Network in the night', rating: 2.5, }),
        React.createElement(ChallengeItem, { key: 2, title: 'Project X: online', rating: 1.0 }),
      ])
    );
    */

    // JSX:
    return (
        <ul id="challenges" aria-label="Challenges">
            <ChallengeItem
                key={1}
                title="Network in the night"
                rating={2.5}
                />
            <ChallengeItem
                key={2}
                title="Project X: online"
                rating={1.0}
                />
        </ul>
    );
}