function renderChallenges(challenges, ul) {
  ul.innerHTML = '';

  challenges.forEach((challengeData) => {
    const li = document.createElement("li");

    const title = document.createElement("span");
    title.className = "title";
    title.innerText = challengeData.title;
    li.append(title);

    const rating = document.createElement("span");
    rating.className = "rating";
    rating.innerText = challengeData.rating;
    li.append(rating);

    ul.append(li);
  });
}
