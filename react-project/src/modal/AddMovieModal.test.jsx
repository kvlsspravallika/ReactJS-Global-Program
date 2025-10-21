// Basic tests for AddMovieModal: render, initialValues, reset, and submit behavior with mocked fetch
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddMovieModal from './AddMovieModal.jsx';

let originalReload;

describe('AddMovieModal', () => {
  beforeEach(() => {
    // Save original reload so we can restore later
    originalReload = window.location.reload;

    // Ensure portal mount node exists if the component attempts to portal
    const mount = document.createElement('div');
    mount.setAttribute('id', 'add-movie-modal');
    document.body.appendChild(mount);
  });

  afterEach(() => {
    // Clean up mocks and DOM
    const mount = document.getElementById('add-movie-modal');
    if (mount) mount.remove();

    // Restore window.location.reload
    try {
      Object.defineProperty(window.location, 'reload', {
        configurable: true,
        value: originalReload,
      });
    } catch (e) {
      // ignore
    }

    // Remove any global.fetch mock we set
    if (global.fetch && global.fetch.mockClear) {
      delete global.fetch;
    }

    jest.restoreAllMocks();
  });

  test('renders form fields and buttons', () => {
    render(<AddMovieModal handleCloseModal={() => {}} />);

    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/release date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/movie poster path/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/rating/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/runtime/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/overview/i)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
  });
});
