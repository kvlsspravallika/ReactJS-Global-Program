import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import Header from '../header/Header';

describe('Footer', () => {
  it('renders the footer', () => {
    render(<Footer />);
    expect(screen.getByText("netflix")).toBeInTheDocument();
  });
});

describe('Header', () => {
  it('renders the header text', () => {
    render(<Header />);
    expect(screen.getByText(/netflix/i)).toBeInTheDocument();
  });
});
