import "./MovieDetails.css";
import { useEffect, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";

function MovieList({ searchQuery, filter, sortBy, showSelectedMovieDetails }) {
  const API_URL = "http://localhost:4000/movies";
  const [movies, setMovies] = useState([]);

  // 🔹 Fetch movies based on current filters
  const fetchMovies = useCallback(async () => {
    try {
      const params = new URLSearchParams({
        sortOrder: "desc",
        limit: "30",
        search: searchQuery || "",
        searchBy: "title",
        sortBy,
        filter: filter || "",
      });

      const response = await fetch(`${API_URL}?${params.toString()}`);
      const data = await response.json();
      setMovies(data.data || []); // Adjust based on API structure
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }, [searchQuery, filter, sortBy]);

  // 🔹 Trigger fetch when search, filter, or sort change
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  // 🔹 Group movies into rows of 3
  const chunkMovies = (arr, size = 3) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );

  return (
    <div className="container" id="movie-list-container">
      {movies.length === 0 ? (
        <p className="text-center text-muted mt-4">No movies found.</p>
      ) : (
        chunkMovies(movies).map((row, rowIndex) => (
          <div className="row mb-4" key={rowIndex}>
            {row.map((movie) => (
              <div className="col" key={movie.id}>
                <NavLink
                  to={`/${movie.id}`}
                  onClick={() => showSelectedMovieDetails(movie)}
                >
                  <img
                    id="movie-image-in-list"
                    src={movie.poster_path}
                    alt={movie.title}
                    className="img-fluid rounded shadow-sm"
                  />
                </NavLink>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default MovieList;
