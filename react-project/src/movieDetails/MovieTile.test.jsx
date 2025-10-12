import React from 'react';
import MovieTile from './MovieTile';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieFilterControls from '../filter-bar/MovieFilterControls';

describe('MovieTile', () => {
  const movie = {
    poster_path: 'https://via.placeholder.com/300x450',
    title: 'Inception',
    vote_average: 8.8,
    genres: ['Action', 'Sci-Fi'],
    release_date: '2010-07-16',
    runtime: 148,
  };
  it('renders movie details', () => {
    render(<MovieTile selectedMovie={movie} setShowHeaderToTrue={() => {}} />);
    expect(screen.getByText(movie.title)).toBeInTheDocument();
    expect(screen.getByText(movie.vote_average.toString())).toBeInTheDocument();
    expect(screen.getByText(/Action, Sci-Fi/)).toBeInTheDocument();
    expect(screen.getByAltText(movie.title)).toBeInTheDocument();
  });
  it('calls setShowHeaderToTrue when home button is clicked', () => {
    const setShowHeaderToTrue = jest.fn();
    render(<MovieTile selectedMovie={movie} setShowHeaderToTrue={setShowHeaderToTrue} />);
    fireEvent.click(screen.getByText(/netflix/i));
    expect(setShowHeaderToTrue).toHaveBeenCalled();
  });
});

describe('MovieFilterControls', () => {
  const genres = ['Action', 'Comedy', 'Drama'];
  it('renders genre buttons', () => {
    render(<MovieFilterControls genres={genres} selectedGenre={genres[0]} onGenreSelect={() => {}} />);
    genres.forEach(genre => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });
  it('calls onGenreSelect when a genre is clicked', () => {
    const onGenreSelect = jest.fn();
    render(<MovieFilterControls genres={genres} selectedGenre={genres[0]} onGenreSelect={onGenreSelect} />);
    fireEvent.click(screen.getByText('Comedy'));
    expect(onGenreSelect).toHaveBeenCalledWith('Comedy');
  });
});
