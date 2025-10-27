import "./MovieDetails.css";
import { useEffect, useState } from "react";

function MovieList({searchQuery, filter, sortBy,showSelectedMovieDetails}) {
    const urlToFetchMovies = "http://localhost:4000/movies";
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        console.log(filter);
        let response;
        const baseParams = new URLSearchParams({
            sortOrder: "desc",
            limit: "30"
        });
        let fetchUrl = `${urlToFetchMovies}?${baseParams.toString()}&search=${searchQuery}&searchBy=title&sortBy=${sortBy}&filter=${filter}`;
        console.log(fetchUrl);
        response = await fetch(fetchUrl);
        const data = await response.json();
        setMovies(data.data); // adjust to your API structure
    };

    useEffect(() => {
        console.log('search query in MovieList:', searchQuery);
        console.log('sortBy', sortBy);
        getMovies();
    }, [searchQuery, sortBy, filter]);

    // Helper to group movies into chunks of 3
    const chunkMovies = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };

    const handleMovieClick = (movie) => {
        showSelectedMovieDetails(movie);
    }

    return (
        <div className="container" id="movie-list-container">
            {chunkMovies(movies, 3).map((row, rowIndex) => (
                <div className="row mb-4" key={rowIndex}>
                    {row.map((movie) => (
                        <div className="col" key={movie.id}>
                            <img
                                id="movie-image-in-list"
                                src={movie.poster_path}
                                alt={movie.title}
                                onClick={() => handleMovieClick(movie)}
                                className="img-fluid rounded shadow-sm"
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default MovieList;
