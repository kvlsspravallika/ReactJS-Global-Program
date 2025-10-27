import GenreSelect from './GenreSelect';

export default {
  title: 'GenreSelect',
  component: GenreSelect,
};

export const Default = {
  args: {
    genres: ['Action', 'Comedy', 'Drama'],
    selectedGenre: 'Action',
    onSelect: (genre) => alert(`Selected: ${genre}`),
  },
};

export const NoGenres = {
  args: {
    genres: [],
    selectedGenre: '',
    onSelect: (genre) => alert(`Selected: ${genre}`),
  },
};

export const ComedySelected = {
  args: {
    genres: ['Action', 'Comedy', 'Drama'],
    selectedGenre: 'Comedy',
    onSelect: (genre) => alert(`Selected: ${genre}`),
  },
};

export const AllGenres = {
  args: {
    genres: ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Romance', 'Thriller', 'Documentary', 'Animation', 'Fantasy'],
    selectedGenre: 'Sci-Fi',
    onSelect: (genre) => alert(`Selected: ${genre}`),
  },
};

export const NoneSelected = {
  args: {
    genres: ['Action', 'Comedy', 'Drama'],
    selectedGenre: '',
    onSelect: (genre) => alert(`Selected: ${genre}`),
  },
};
