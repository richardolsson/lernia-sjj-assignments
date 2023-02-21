# Spegeln

## API

### (ToDo) /api/movies
Not necessary for assignment

### (ToDo) /api/movies/{ID}
Not necessary for assignment

### /api/movies/{ID}/reviews
* `GET` to retrieve list of reviews
  * Use query param `p` for page
* `POST` to create a new review

### /api/movies/{ID}/rating
* `GET` to retrieve average rating for this movie

### /api/movies/{ID}/screenings
* `GET` to retrieve screenings for this movie

### /api/next_screenings
* `GET` to retrieve all screenings (at most 10) for next five days.