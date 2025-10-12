import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SortControl from './SortControl';

describe('SortControl', () => {
  it('renders sort options', () => {
    render(<SortControl currentSelection="releaseDate" onSortChange={() => {}} />);
    expect(screen.getByLabelText(/sort movies by/i)).toBeInTheDocument();
    expect(screen.getByText(/RELEASE DATE/i)).toBeInTheDocument();
    expect(screen.getByText(/TITLE/i)).toBeInTheDocument();
  });
  it('calls onSortChange when selection changes', () => {
    const onSortChange = jest.fn();
    render(<SortControl currentSelection="releaseDate" onSortChange={onSortChange} />);
    fireEvent.change(screen.getByLabelText(/sort movies by/i), { target: { value: 'title' } });
    expect(onSortChange).toHaveBeenCalledWith('title');
  });
});

