// Explanation: Add realistic story variants by passing `initialValues` to the component and include a couple of edge-case stories.
import React from 'react';
import AddMovieModal from './AddMovieModal.jsx';
import MovieSuccessModal from './MovieSuccessModal.jsx';

export default {
  title: 'Modal/AddMovieModal',
  component: AddMovieModal,
  decorators: [Story => (
    <div id="add-movie-modal">
      <Story />
    </div>
  )],
};

export const Default = () => <AddMovieModal handleCloseModal={() => {}} />;

export const Prefilled = () => (
  <AddMovieModal
    handleCloseModal={() => {}}
    initialValues={{
      title: 'Inception',
      release_date: '2010-07-16',
      poster_path: 'https://example.com/inception.jpg',
      vote_average: 87,
      runtime: 148,
      overview: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
      genres: ['crime', 'horror']
    }}
  />
);

export const WithGenres = () => (
  <AddMovieModal
    handleCloseModal={() => {}}
    initialValues={{
      title: 'Genre Test',
      release_date: '2022-01-01',
      poster_path: '',
      vote_average: 5,
      runtime: 90,
      overview: 'Testing multiple genres selected by default.',
      genres: ['crime', 'documentary', 'comedy']
    }}
  />
);

export const LongOverview = () => (
  <AddMovieModal
    handleCloseModal={() => {}}
    initialValues={{
      title: 'Long Overview Movie',
      release_date: '2021-05-05',
      poster_path: '',
      vote_average: 10,
      runtime: 200,
      overview: `This is a very long overview text used to test overflow and wrapping within the modal's textarea. It should display multiple lines and still look okay in the Storybook canvas. `.repeat(6),
      genres: []
    }}
  />
);

export const SuccessModal = () => (
  <div>
    <div id="add-movie-modal">
      <AddMovieModal handleCloseModal={() => {}} />
    </div>
    <MovieSuccessModal handleCloseModal={() => {}} />
  </div>
);
