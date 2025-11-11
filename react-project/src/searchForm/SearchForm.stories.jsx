import SearchForm from './SearchForm';

export default {
  title: 'SearchForm',
  component: SearchForm,
};

export const Default = {
  args: {
    initialQuery: '',
    onSearch: (query) => alert(`Search: ${query}`),
  },
};

export const WithInitialQuery = {
  args: {
    initialQuery: 'Avengers',
    onSearch: (query) => alert(`Search: ${query}`),
  },
};

export const LongQuery = {
  args: {
    initialQuery: 'This is a very long search query to test the input field and its behavior in the SearchForm component',
    onSearch: (query) => alert(`Search: ${query}`),
  },
};

export const SpecialCharacters = {
  args: {
    initialQuery: '!@#$%^&*()_+-=<>?/ ',
    onSearch: (query) => alert(`Search: ${query}`),
  },
};

export const NoOnSearch = {
  args: {
    initialQuery: 'No handler',
    onSearch: undefined,
  },
};
