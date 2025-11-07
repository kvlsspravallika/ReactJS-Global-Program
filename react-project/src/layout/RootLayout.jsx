import React, { useEffect } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import Footer from "../footer/Footer.jsx";
import MovieFilterControls from "../filter-bar/MovieFilterControls.jsx";
import MovieList from "../movieDetails/MovieList.jsx";

function RootLayout() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Extract values from the URL or fallback defaults
  const query = searchParams.get("query") || "";
  const genre = searchParams.get("genre") || "All";
  const sortBy = searchParams.get("sortBy") || "release_date";

  // Helper: update URL when filters change
  const updateParams = (updates) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(updates).forEach(([key, value]) => {
      if (value) newParams.set(key, value);
      else newParams.delete(key);
    });
    setSearchParams(newParams);
  };

  // Handlers (update URL, not local state)
  const handleSearchQuery = (newQuery) => updateParams({ query: newQuery });
  const handleGenreSelect = (newGenre) => updateParams({ genre: newGenre });
  const handleSortChange = (newSort) => updateParams({ sortBy: newSort });

  return (
    <div>
      {/* Pass the handler and URL state via context */}
      <Outlet context={{ handleSearchQuery, query }} />

      <MovieFilterControls
        genres={["All", "Documentary", "Comedy", "Horror", "Crime"]}
        selectedGenre={genre}
        handleSortBy={handleSortChange}
        onGenreSelect={handleGenreSelect}
      />

      <MovieList
        searchQuery={query}
        filter={genre === "All" ? "" : genre}
        sortBy={sortBy}
      />

      <Footer />
    </div>
  );
}

export default RootLayout;
