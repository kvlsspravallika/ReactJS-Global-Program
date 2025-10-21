// Explanation: Adjust the modal assertion to target the modal heading specifically (getByRole('heading')) to avoid matching the button text.
// ...existing code...
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header.jsx';

describe('Header component', () => {
  // Ensure portal mount node exists for tests that open the modal
  beforeEach(() => {
    const mount = document.createElement('div');
    mount.setAttribute('id', 'add-movie-modal-placement');
    document.body.appendChild(mount);
  });

  afterEach(() => {
    // Clean up any portal mount nodes we added
    const mount = document.getElementById('add-movie-modal-placement');
    if (mount) mount.remove();
    cleanup();
    jest.restoreAllMocks();
  });

  test('renders brand and heading and search input', () => {
    render(<Header />);

    expect(screen.getByText(/netflix/i)).toBeInTheDocument();
    expect(screen.getByText(/roulette/i)).toBeInTheDocument();
    expect(screen.getByText(/find your movie/i)).toBeInTheDocument();

    // Search input should be present (SearchBar uses aria-label="Search")
    const input = screen.getByLabelText('Search');
    expect(input).toBeInTheDocument();
  });

  test('search triggers handleSearch on Enter and button click', async () => {
    const user = userEvent.setup();
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<Header />);

    const input = screen.getByLabelText('Search');
    const button = screen.getByRole('button', { name: /search/i });

    // Type and press Enter
    await user.click(input);
    await user.type(input, 'Matrix{Enter}');
    expect(consoleSpy).toHaveBeenCalledWith('Searching for:', 'Matrix');

    // Clear mock, type again and click the search button
    consoleSpy.mockClear();
    await user.clear(input);
    await user.type(input, 'Inception');
    await user.click(button);
    expect(consoleSpy).toHaveBeenCalledWith('Searching for:', 'Inception');
  });

  test('clicking + ADD MOVIE opens AddMovieModal', async () => {
    const user = userEvent.setup();

    render(<Header />);

    const addBtn = screen.getByRole('button', { name: /add movie/i });
    await user.click(addBtn);

    // The AddMovieModal contains a heading with text 'ADD MOVIE' (use role to avoid matching the add button)
    expect(screen.getByRole('heading', { name: /add movie/i })).toBeInTheDocument();
  });
});
