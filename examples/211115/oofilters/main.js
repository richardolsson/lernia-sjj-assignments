function renderChallenges(challenges, ul) {
  ul.innerHTML = '';

  challenges.forEach((challengeData) => {
    const challengeInstance = new Challenge(challengeData);
    const li = challengeInstance.render();
    ul.append(li);
  });
}
