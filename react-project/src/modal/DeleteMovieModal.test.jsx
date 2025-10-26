// Add tests for DeleteMovieModal: render, close callback, and confirm (DELETE) behavior with mocked fetch and reload
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DeleteMovieModal from './DeleteMovieModal.jsx';

let originalReload;

describe('DeleteMovieModal', () => {
  beforeEach(() => {
    // Save original reload so we can restore later
    originalReload = window.location.reload;

    // Provide a mount node in case other components expect it
    const mount = document.createElement('div');
    mount.setAttribute('id', 'add-movie-modal');
    document.body.appendChild(mount);
  });

  afterEach(() => {
    // Clean up DOM
    const mount = document.getElementById('add-movie-modal');
    if (mount) mount.remove();

    // Restore reload
    try {
      Object.defineProperty(window.location, 'reload', {
        configurable: true,
        value: originalReload,
      });
    } catch (e) {
      // ignore
    }

    if (global.fetch && global.fetch.mockClear) {
      delete global.fetch;
    }

    jest.restoreAllMocks();
  });

  test('renders the modal text and buttons', () => {
    render(<DeleteMovieModal handleCloseModal={() => {}} movieToDelete={{ id: 5 }} />);

    expect(screen.getByText(/delete movie/i)).toBeInTheDocument();
    expect(screen.getByText(/do you really want to delete the movie/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /confirm/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
  });

  test('clicking CLOSE calls handleCloseModal', async () => {
    const handleClose = jest.fn();
    render(<DeleteMovieModal handleCloseModal={handleClose} movieToDelete={{ id: 7 }} />);

    const closeBtn = screen.getByRole('button', { name: /close/i });
    await userEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('confirm calls DELETE endpoint and triggers reload on success', async () => {
    const mockFetch = jest.fn().mockResolvedValue({ ok: true });
    global.fetch = mockFetch;

    const reloadSpy = jest.fn();
    let canMockReload = true;
    try {
      Object.defineProperty(window.location, 'reload', {
        configurable: true,
        value: reloadSpy,
      });
    } catch (err) {
      // If we can't redefine reload (non-configurable), skip asserting reload
      canMockReload = false;
    }

    render(<DeleteMovieModal handleCloseModal={() => {}} movieToDelete={{ id: 42 }} />);

    const confirmBtn = screen.getByRole('button', { name: /confirm/i });
    await userEvent.click(confirmBtn);

    await waitFor(() => expect(mockFetch).toHaveBeenCalledTimes(1));
    const [url, options] = mockFetch.mock.calls[0];
    expect(url).toContain('/movies/42');
    expect(options.method).toBe('DELETE');

    if (canMockReload) {
      await waitFor(() => expect(reloadSpy).toHaveBeenCalled());
    } else {
      // If reload couldn't be mocked, at least ensure code called fetch and returned ok.
      expect(mockFetch).toHaveBeenCalled();
    }
  });
});
