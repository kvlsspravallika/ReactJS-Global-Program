// Explanation: Create Storybook stories for DeleteMovieModal. Provide a decorator with the portal container id and three simple stories: Default, WithLongTitle, and ConfirmPrompt (shows confirmation prompt text).
import React from 'react';
import DeleteMovieModal from './DeleteMovieModal.jsx';

export default {
  title: 'Modal/DeleteMovieModal',
  component: DeleteMovieModal,
  decorators: [Story => (
    <div id="add-movie-modal">
      <Story />
    </div>
  )],
};

export const Default = () => (
  <DeleteMovieModal
    handleCloseModal={() => {}}
    movieToDelete={{ id: 1 }}
  />
);

export const WithLongTitle = () => (
  <DeleteMovieModal
    handleCloseModal={() => {}}
    movieToDelete={{ id: 42, title: 'A Very Long Movie Title That Should Not Affect The Delete Prompt' }}
  />
);

export const ConfirmPrompt = () => (
  <DeleteMovieModal
    handleCloseModal={() => {}}
    movieToDelete={{ id: 99 }}
  />
);

