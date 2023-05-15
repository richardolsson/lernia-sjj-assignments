## PostgreSQL setup

### Start docker container
```
docker run --name postgres --rm -e POSTGRES_PASSWORD=secret -p 5432:5432 postgres
```

### Create database tables
In another terminal, run:
```
docker exec -ti postgres bash
su - postgres
psql
```

This will launch the command-line postgres client inside the container. Now run the following SQL to create the tables:

Movies
```sql
create table movies (
  id serial primary key,
  title text,
  description text
);
```

Reviews
```sql
 create table reviews (
  id serial primary key,
  rating int,
  comment text,
  movie_id int,
  constraint fk_movie
    foreign key(movie_id)
    references movies(id)
);
```