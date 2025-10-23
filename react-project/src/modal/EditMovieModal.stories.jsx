// Explanation: Add Storybook stories for EditMovieModal with default and several prefilled variants.
import React from 'react';
import EditMovieModal from './EditMovieModal.jsx';

export default {
  title: 'Modal/EditMovieModal',
  component: EditMovieModal,
  decorators: [Story => (
    <div id="add-movie-modal">
      <Story />
    </div>
  )],
};

export const Default = () => (
  <EditMovieModal
    movieToEdit={null}
    handleCloseModal={() => {}}
  />
);

export const Prefilled = () => (
  <EditMovieModal
    handleCloseModal={() => {}}
    movieToEdit={{
      id: 1,
      title: 'The Matrix',
      release_date: '1999-03-31',
      poster_path: 'https://example.com/matrix.jpg',
      vote_average: 88,
      runtime: 136,
      overview: 'A hacker discovers the nature of his reality and his role in the war against its controllers.',
      genres: ['crime', 'documentary']
    }}
  />
);

export const WithGenres = () => (
  <EditMovieModal
    handleCloseModal={() => {}}
    movieToEdit={{
      id: 2,
      title: 'Genre Mashup',
      release_date: '2020-10-10',
      poster_path: '',
      vote_average: 50,
      runtime: 95,
      overview: 'Multiple genres selected by default to show the multi-select behaviour.',
      genres: ['crime', 'horror', 'comedy']
    }}
  />
);

export const LongOverview = () => (
  <EditMovieModal
    handleCloseModal={() => {}}
    movieToEdit={{
      id: 3,
      title: 'Long Story',
      release_date: '2018-05-05',
      poster_path: '',
      vote_average: 70,
      runtime: 210,
      overview: `This overview is intentionally long to test layout and wrapping in the modal text area. `.repeat(8),
      genres: ['comedy']
    }}
  />
);

