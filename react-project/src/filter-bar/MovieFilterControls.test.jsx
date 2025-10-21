// Add basic tests for MovieFilterControls: render, genre click, active class, and sort select behavior
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieFilterControls from './MovieFilterControls.jsx';

describe('MovieFilterControls', () => {
  test('renders genre buttons and calls onGenreSelect when clicked', async () => {
    const genres = ['All', 'Action', 'Comedy'];
    const onGenreSelect = jest.fn();

    render(
      <MovieFilterControls
        genres={genres}
        selectedGenre="Comedy"
        onGenreSelect={onGenreSelect}
      />
    );

    // All genre buttons should be rendered
    genres.forEach((g) => {
      expect(screen.getByText(g)).toBeInTheDocument();
    });

    // The selected genre should have the active class
    const comedyBtn = screen.getByText('Comedy');
    expect(comedyBtn.className).toContain('active');

    // Clicking another genre should call the callback with that genre
    const actionBtn = screen.getByText('Action');
    await userEvent.click(actionBtn);
    expect(onGenreSelect).toHaveBeenCalledWith('Action');
  });

  test('sort control defaults to releaseDate and updates on change', async () => {
    const genres = [];
    const onGenreSelect = jest.fn();

    render(
      <MovieFilterControls
        genres={genres}
        selectedGenre={''}
        onGenreSelect={onGenreSelect}
      />
    );

    // SortControl exposes an aria-label "Sort movies by"
    const select = screen.getByLabelText('Sort movies by');
    expect(select).toBeInTheDocument();

    // Default selection should be releaseDate
    expect(select.value).toBe('releaseDate');

    // Change the selection to title
    await userEvent.selectOptions(select, 'title');
    expect(select.value).toBe('title');
  });
});
