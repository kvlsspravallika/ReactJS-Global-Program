import "./App.css";
import React, { useState } from "react";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import MovieFilterControls from "./filter-bar/MovieFilterControls.jsx";
import MovieList from "./movieDetails/MovieList.jsx";
import MovieTile from "./movieDetails/MovieTile.jsx";

function App() {
    // State managed with Hooks
    const [genres] = useState(["All", "Documentary", "Comedy", "Horror", "Crime"]);
    const [selectedGenre, setSelectedGenre] = useState("All");
    const [showHeader, setShowHeader] = useState(true);

    // Event handler
    const handleGenreSelect = (genre) => {
        console.log("Selected Genre:", genre);
        setSelectedGenre(genre);
    };

    const handleShowSelectedMovieTile = (movie) => {
        console.log("Selected Movie:", movie);
        setShowHeader(false);
    }

    return (
        <div>
            {showHeader ? <Header /> : <MovieTile />}
            <MovieFilterControls
                genres={genres}
                selectedGenre={selectedGenre}
                onGenreSelect={handleGenreSelect}
            />
            <MovieList showSelectedMovieDetails = {handleShowSelectedMovieTile}/>
            <Footer />

        </div>
    );
}

export default App;
