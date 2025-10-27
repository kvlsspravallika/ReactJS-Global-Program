import React, { useState } from "react";
import MovieList from "./MovieList";

export default {
  title: "Movie Details/MovieList",
  component: MovieList,
};

const mockMovies = [
  { id: 1, poster_path: "https://via.placeholder.com/150", title: "Movie One" },
  { id: 2, poster_path: "https://via.placeholder.com/150", title: "Movie Two" },
  { id: 3, poster_path: "https://via.placeholder.com/150", title: "Movie Three" },
  { id: 4, poster_path: "https://via.placeholder.com/150", title: "Movie Four" },
  { id: 5, poster_path: "https://via.placeholder.com/150", title: "Movie Five" },
];

const manyMovies = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  poster_path: "https://via.placeholder.com/150",
  title: `Movie ${i + 1}`,
}));

const moviesWithMissingData = [
  { id: 1, poster_path: "", title: "Movie With No Poster" },
  { id: 2, poster_path: "https://via.placeholder.com/150", title: "" },
  { id: 3, poster_path: null, title: null },
];

export const Default = () => (
  <MovieList showSelectedMovieDetails={console.log} movies={mockMovies} />
);

export const Empty = () => (
  <MovieList showSelectedMovieDetails={console.log} movies={[]} />
);

export const LargeList = () => (
  <MovieList showSelectedMovieDetails={console.log} movies={manyMovies} />
);

export const MissingData = () => (
  <MovieList showSelectedMovieDetails={console.log} movies={moviesWithMissingData} />
);

export const Interactive = () => {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <MovieList showSelectedMovieDetails={setSelected} movies={mockMovies} />
      {selected && <div>Selected: {selected.title}</div>}
    </>
  );
};

