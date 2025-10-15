import React, { useState } from "react";
import MovieTile from "./MovieTile";

export default {
  title: "Movie Details/MovieTile",
  component: MovieTile,
};

const defaultMovie = {
  poster_path: "https://via.placeholder.com/300x450",
  title: "Inception",
  vote_average: 8.8,
  genres: ["Action", "Sci-Fi"],
  release_date: "2010-07-16",
  runtime: 148,
};

const missingPoster = {
  ...defaultMovie,
  poster_path: "",
};

const missingTitle = {
  ...defaultMovie,
  title: "",
};

const longTitle = {
  ...defaultMovie,
  title: "A Very Long Movie Title That Exceeds Normal Length And Contains Special Characters !@#$%^&*()",
};

const missingDetails = {
  poster_path: "https://via.placeholder.com/300x450",
  title: "Unknown",
  vote_average: null,
  genres: null,
  release_date: null,
  runtime: null,
};

export const Default = () => (
  <MovieTile selectedMovie={defaultMovie} setShowHeaderToTrue={() => {}} />
);

export const MissingPoster = () => (
  <MovieTile selectedMovie={missingPoster} setShowHeaderToTrue={() => {}} />
);

export const MissingTitle = () => (
  <MovieTile selectedMovie={missingTitle} setShowHeaderToTrue={() => {}} />
);

export const LongTitle = () => (
  <MovieTile selectedMovie={longTitle} setShowHeaderToTrue={() => {}} />
);

export const MissingDetails = () => (
  <MovieTile selectedMovie={missingDetails} setShowHeaderToTrue={() => {}} />
);

export const InteractiveHomeClick = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <MovieTile selectedMovie={defaultMovie} setShowHeaderToTrue={() => setClicked(true)} />
      {clicked && <div>Home button clicked!</div>}
    </>
  );
};

