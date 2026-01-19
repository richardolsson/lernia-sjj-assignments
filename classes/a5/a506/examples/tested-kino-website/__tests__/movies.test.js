import { describe, expect, test } from '@jest/globals';
import request from 'supertest';
import initApp from '../src/app.js';

const mockApi = {
  loadMovie: async (id) => {
    return {
      "data": {
        "id": id,
        "attributes": {
          "title": "The Godfather",
          "imdbId": "tt0068646",
          "intro": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.\n\n",
          "image": {
            "url": "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg"
          },
          "createdAt": "2026-01-15T13:27:00.409Z",
          "updatedAt": "2026-01-15T13:30:26.154Z",
          "publishedAt": "2026-01-15T13:27:05.498Z"
        }
      },
    };
  },
  loadMovies: async () => {
    return {
      "data": [
        {
          "id": 12,
          "attributes": {
            "title": "The Godfather",
            "imdbId": "tt0068646",
            "intro": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.\n\n",
            "image": {
              "url": "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg"
            },
            "createdAt": "2026-01-15T13:27:00.409Z",
            "updatedAt": "2026-01-15T13:30:26.154Z",
            "publishedAt": "2026-01-15T13:27:05.498Z"
          }
        },
        {
          "id": 2,
          "attributes": {
            "title": "Encanto",
            "imdbId": "tt2953050",
            "intro": "A Colombian teenage girl has to face the frustration of being **the only member of her family** without magical powers.\n\n",
            "image": {
              "url": "https://m.media-amazon.com/images/M/MV5BOTY1YmU1ZTItMzNjZC00ZGU0LTk0MTEtZDgzN2QwOWVlNjZhXkEyXkFqcGc@._V1_.jpg"
            },
            "createdAt": "2023-01-23T06:46:24.765Z",
            "updatedAt": "2025-01-15T10:41:46.386Z",
            "publishedAt": "2023-01-23T06:46:29.324Z"
          }
        },
      ],
      "meta": {
        "pagination": {
          "page": 1,
          "pageSize": 25,
          "pageCount": 1,
          "total": 11
        }
      }
    }
  },
};

describe('Movie list page', () => {
  test('lists movies from API', async () => {
    const app = initApp(mockApi);

    const response = await request(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200);

    expect(response.text).toContain('Encanto');
    expect(response.text).toContain('The Godfather');
  });
});