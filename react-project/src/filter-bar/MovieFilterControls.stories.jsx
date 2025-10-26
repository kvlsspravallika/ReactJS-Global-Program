import React, {useState} from "react";
import MovieFilterControls from "./MovieFilterControls";

export default {
  title: "Filter Bar/MovieFilterControls",
  component: MovieFilterControls,
};

const genres = ["Action", "Comedy", "Drama", "Sci-Fi"];

export const Default = () => {
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  return (
    <MovieFilterControls
      genres={genres}
      selectedGenre={selectedGenre}
      onGenreSelect={setSelectedGenre}
    />
  );
};

export const NoGenres = () => (
  <MovieFilterControls genres={[]} selectedGenre={null} onGenreSelect={() => {}} />
);

export const SelectedGenre = () => {
  const [selectedGenre, setSelectedGenre] = useState("Drama");
  return (
    <MovieFilterControls
      genres={genres}
      selectedGenre={selectedGenre}
      onGenreSelect={setSelectedGenre}
    />
  );
};

export const GenreSelection = () => {
  const [selectedGenre, setSelectedGenre] = useState(genres[2]);
  return (
    <MovieFilterControls
      genres={genres}
      selectedGenre={selectedGenre}
      onGenreSelect={setSelectedGenre}
    />
  );
};

