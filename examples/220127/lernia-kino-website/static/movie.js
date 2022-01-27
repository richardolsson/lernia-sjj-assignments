async function renderReviews(movieId) {
  const res = await fetch(`/api/movies/${movieId}/reviews`);
  const payload = await res.json();

  const ctr = document.querySelector('#reviews');
  ctr.innerHTML = '';

  payload.data.forEach(review => {
    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'review';
    ctr.append(reviewDiv);

    const comment = document.createElement('div');
    comment.innerHTML = review.comment;
    reviewDiv.append(comment);

    const name = document.createElement('div');
    name.innerHTML = review.name;
    reviewDiv.append(name);
  });
}

(() => {
  document.querySelector('#review form').addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const movieId = ev.target.movie.value;

    await fetch(`/api/movies/${movieId}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: ev.target.name.value,
        comment: ev.target.comment.value,
      }),
    });

    renderReviews(movieId);
  });
})();
