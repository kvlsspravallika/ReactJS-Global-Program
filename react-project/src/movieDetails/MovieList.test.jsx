import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieList from './MovieList';

const movies = [
  { id: 1, poster_path: 'https://via.placeholder.com/150', title: 'Movie One' },
  { id: 2, poster_path: 'https://via.placeholder.com/150', title: 'Movie Two' },
  { id: 3, poster_path: 'https://via.placeholder.com/150', title: 'Movie Three' },
];

describe('MovieList', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: movies }),
      })
    );
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders movie images', async () => {
    render(<MovieList showSelectedMovieDetails={() => {}} />);
    for (const movie of movies) {
      expect(await screen.findByAltText(movie.title)).toBeInTheDocument();
    }
  });

  it('calls showSelectedMovieDetails when a movie is clicked', async () => {
    const showSelectedMovieDetails = jest.fn();
    render(<MovieList showSelectedMovieDetails={showSelectedMovieDetails} />);
    const movieImg = await screen.findByAltText('Movie Two');
    fireEvent.click(movieImg);
    expect(showSelectedMovieDetails).toHaveBeenCalledWith(movies[1]);
  });
});
