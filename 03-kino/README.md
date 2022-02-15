# Kino API assignment

## API documentation

### `/api/screenings`
* `GET` to retrieve list of upcoming screenings
  * Will return no more than 10 screenings
  * Will return screenings from next 5 days or less

### `/api/movies/{movie_id}/screenings`
* `GET` to retrieve all upcoming screenings of movie `movie_id`

### `/api/movies/{movie_id}/reviews`
* `GET` to retrieve reviews of `movie_id`, paginated 5 reviews at a time
  * `?page=0` for first page
  * `?page=N` for (N+1)th page
* `POST` to create review, with JSON object containing:
  * `rating`, number between 0-5
  * `name`, string
  * `comment` (optional), string

### `/api/movies/{movie_id}/rating`
* `GET` to retrieve average rating for `movie_id`
