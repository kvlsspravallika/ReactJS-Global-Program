import "./App.css";
import React, { useState } from "react";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import MovieFilterControls from "./filter-bar/MovieFilterControls.jsx";

function App() {
    // State managed with Hooks
    const [genres] = useState(["All", "Documentary", "Comedy", "Horror", "Crime"]);
    const [selectedGenre, setSelectedGenre] = useState("All");

    // Event handler
    const handleGenreSelect = (genre) => {
        console.log("Selected Genre:", genre);
        setSelectedGenre(genre);
    };

    return (
        <div>
            <Header />
            <MovieFilterControls
                genres={genres}
                selectedGenre={selectedGenre}
                onGenreSelect={handleGenreSelect}
            />
            <Footer />

            {/*
      <h1>Counter</h1>
      <Counter initialValue={0} />

      <h1>Movie Genres</h1>
      <GenreSelect
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={handleGenreSelect}
      />

      <h1>Search Form</h1>
      <SearchForm
        initialQuery=""
        onSearch={(query) => {
          console.log("Searching for:", query);
          // You can add API calls here
        }}
      />
      */}
        </div>
    );
}

export default App;
