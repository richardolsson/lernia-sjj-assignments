# Simple PHP SSR example
## Running with Docker
```
docker run --rm -v $PWD:/var/app --workdir /var/app -ti -p 8000:8000 php:7.4-cli php -S 0.0.0.0:8000
```