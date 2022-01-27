async function renderScreenings() {
  const res = await fetch('/api/screenings');
  const payload = await res.json();

  payload.data.forEach(screening => {
    const timeSpan = document.createElement('span');
    timeSpan.innerText = screening.time;

    const movieLink = document.createElement('a');
    movieLink.href = `/movies/${screening.movie.id}`;
    movieLink.innerText = screening.movie.title;

    const li = document.createElement('li');
    li.append(timeSpan);
    li.append(movieLink);

    document.querySelector('#screeningsList').append(li);
  });
}

renderScreenings();
