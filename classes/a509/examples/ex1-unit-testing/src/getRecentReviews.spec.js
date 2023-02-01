import { describe, expect, test } from '@jest/globals';

import getRecentReviews from './getRecentReviews.js';

describe('getRecentReviews()', () => {
    test('correct response format', async () => {
        const result = await getRecentReviews(mockApiAdapter);
        expect(Array.isArray(result)).toBeTruthy();
        expect(result.length).toBeGreaterThan(0);
        expect(result[0].comment).not.toBeUndefined();
        expect(result[0].rating).not.toBeUndefined();
    });

    test('only positive reviews', async () => {
        const result = await getRecentReviews(mockApiAdapter);
        result.forEach(review => {
            expect(review.rating).toBeGreaterThanOrEqual(3);
        });
    });
});

const mockApiAdapter = {
    loadAllReviews: async () => {
        return {
            "data": [
                {
                    "id": 1,
                    "attributes": {
                        "comment": "I don't like this!",
                        "rating": 0,
                        "author": "Richard",
                        "verified": false,
                        "createdAt": "2023-01-31T08:32:50.177Z",
                        "updatedAt": "2023-01-31T08:32:58.231Z",
                        "movie": {
                            "data": {
                                "id": 2,
                                "attributes": {
                                    "title": "Encanto",
                                    "imdbId": "tt2953050",
                                    "intro": "A Colombian teenage girl has to face the frustration of being **the only member of her family** without magical powers.\n\n",
                                    "image": {
                                        "url": "https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg"
                                    },
                                    "createdAt": "2023-01-23T06:46:24.765Z",
                                    "updatedAt": "2023-01-27T07:11:39.088Z",
                                    "publishedAt": "2023-01-23T06:46:29.324Z"
                                }
                            }
                        }
                    }
                },
                {
                    "id": 2,
                    "attributes": {
                        "comment": "I like this!",
                        "rating": 5,
                        "author": "Richard",
                        "verified": true,
                        "createdAt": "2023-01-31T08:33:15.683Z",
                        "updatedAt": "2023-01-31T08:33:31.874Z",
                        "movie": {
                            "data": {
                                "id": 2,
                                "attributes": {
                                    "title": "Encanto",
                                    "imdbId": "tt2953050",
                                    "intro": "A Colombian teenage girl has to face the frustration of being **the only member of her family** without magical powers.\n\n",
                                    "image": {
                                        "url": "https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg"
                                    },
                                    "createdAt": "2023-01-23T06:46:24.765Z",
                                    "updatedAt": "2023-01-27T07:11:39.088Z",
                                    "publishedAt": "2023-01-23T06:46:29.324Z"
                                }
                            }
                        }
                    }
                },
                {
                    "id": 3,
                    "attributes": {
                        "comment": "i love the movie",
                        "rating": 4,
                        "author": "yve",
                        "verified": true,
                        "createdAt": "2023-01-31T09:01:56.535Z",
                        "updatedAt": "2023-01-31T09:01:56.535Z",
                        "movie": {
                            "data": {
                                "id": 2,
                                "attributes": {
                                    "title": "Encanto",
                                    "imdbId": "tt2953050",
                                    "intro": "A Colombian teenage girl has to face the frustration of being **the only member of her family** without magical powers.\n\n",
                                    "image": {
                                        "url": "https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg"
                                    },
                                    "createdAt": "2023-01-23T06:46:24.765Z",
                                    "updatedAt": "2023-01-27T07:11:39.088Z",
                                    "publishedAt": "2023-01-23T06:46:29.324Z"
                                }
                            }
                        }
                    }
                },
                {
                    "id": 4,
                    "attributes": {
                        "comment": "Bra film, men för låga tonarter för sångarens röst!",
                        "rating": 3,
                        "author": "Alice",
                        "verified": true,
                        "createdAt": "2023-02-01T01:57:53.261Z",
                        "updatedAt": "2023-02-01T01:57:53.261Z",
                        "movie": {
                            "data": {
                                "id": 2,
                                "attributes": {
                                    "title": "Encanto",
                                    "imdbId": "tt2953050",
                                    "intro": "A Colombian teenage girl has to face the frustration of being **the only member of her family** without magical powers.\n\n",
                                    "image": {
                                        "url": "https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg"
                                    },
                                    "createdAt": "2023-01-23T06:46:24.765Z",
                                    "updatedAt": "2023-01-27T07:11:39.088Z",
                                    "publishedAt": "2023-01-23T06:46:29.324Z"
                                }
                            }
                        }
                    }
                },
                {
                    "id": 5,
                    "attributes": {
                        "comment": "Den var lite konstig för hundarna pratade.",
                        "rating": 2,
                        "author": "Jan",
                        "verified": true,
                        "createdAt": "2023-02-01T02:02:46.779Z",
                        "updatedAt": "2023-02-01T02:03:59.712Z",
                        "movie": {
                            "data": {
                                "id": 1,
                                "attributes": {
                                    "title": "Isle of dogs",
                                    "imdbId": "tt5104604",
                                    "intro": "An outbreak of dog flu has spread through the city of **Megasaki, Japan**, and Mayor Kobayashi has demanded all dogs to be sent to Trash Island.",
                                    "image": {
                                        "url": "https://m.media-amazon.com/images/M/MV5BZDQwOWQ2NmUtZThjZi00MGM0LTkzNDctMzcyMjcyOGI1OGRkXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg"
                                    },
                                    "createdAt": "2023-01-23T05:58:58.110Z",
                                    "updatedAt": "2023-01-27T07:11:53.523Z",
                                    "publishedAt": "2023-01-23T06:01:31.679Z"
                                }
                            }
                        }
                    }
                },
                {
                    "id": 6,
                    "attributes": {
                        "comment": "Bäst enligt IMDB!",
                        "rating": 5,
                        "author": "Astrid",
                        "verified": null,
                        "createdAt": "2023-02-01T02:06:23.101Z",
                        "updatedAt": "2023-02-01T02:06:23.101Z",
                        "movie": {
                            "data": {
                                "id": 3,
                                "attributes": {
                                    "title": "The Shawshank Redemption",
                                    "imdbId": "tt0111161",
                                    "intro": "Over the course of several years, **two convicts form a friendship**, seeking consolation and, eventually, redemption through basic compassion.",
                                    "image": {
                                        "url": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
                                    },
                                    "createdAt": "2023-01-23T07:17:34.923Z",
                                    "updatedAt": "2023-01-27T07:12:24.582Z",
                                    "publishedAt": "2023-01-23T07:17:39.384Z"
                                }
                            }
                        }
                    }
                },
                {
                    "id": 7,
                    "attributes": {
                        "comment": "Japanska versionen är perfekt, alla dubbade versioner är katastrof.",
                        "rating": 5,
                        "author": "Noel",
                        "verified": true,
                        "createdAt": "2023-02-01T02:07:02.167Z",
                        "updatedAt": "2023-02-01T02:07:12.994Z",
                        "movie": {
                            "data": {
                                "id": 4,
                                "attributes": {
                                    "title": "Min granne Totoro",
                                    "imdbId": "tt0096283",
                                    "intro": "When two girls move to the country to be near their ailing mother, they have **adventures with the wondrous forest spirits** who live nearby.",
                                    "image": {
                                        "url": "https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjQtZDI0My00ZjE2LTkyNGYtOTllNGQxNDMyZjE0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
                                    },
                                    "createdAt": "2023-01-23T09:15:23.153Z",
                                    "updatedAt": "2023-01-27T07:12:08.242Z",
                                    "publishedAt": "2023-01-23T09:15:43.382Z"
                                }
                            }
                        }
                    }
                }
            ],
            "meta": {
                "pagination": {
                    "page": 1,
                    "pageSize": 25,
                    "pageCount": 1,
                    "total": 7
                }
            }
        }
    }
};