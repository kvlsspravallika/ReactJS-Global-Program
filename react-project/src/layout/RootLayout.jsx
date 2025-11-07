import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer.jsx';
import MovieFilterControls from '../filter-bar/MovieFilterControls.jsx';
import MovieList from '../movieDetails/MovieList.jsx';

function RootLayout() {
  const [genres] = useState(["All", "Documentary", "Comedy", "Horror", "Crime"]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("release_date");

  // Handlers
  const handleGenreSelect = (genre) => setSelectedGenre(genre);
  const handleSelectMovie = (movie) => setSelectedMovie(movie);
  const handleSearchQuery = (query) => setSearchQuery(query);
  const handleSortChange = (criterion) => setSortBy(criterion);

  return (
    <div>
      {/* Pass the search handler to the Header through Outlet context */}
      <Outlet context={{ handleSearchQuery }} />

      <MovieFilterControls
        genres={genres}
        selectedGenre={selectedGenre}
        handleSortBy={handleSortChange}
        onGenreSelect={handleGenreSelect}
      />

      <MovieList
        searchQuery={searchQuery}
        filter={selectedGenre === "All" ? "" : selectedGenre}
        sortBy={sortBy}
        showSelectedMovieDetails={handleSelectMovie}
      />

      <Footer />
    </div>
  );
}

export default RootLayout;
