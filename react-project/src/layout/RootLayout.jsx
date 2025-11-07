import React from 'react';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Header from '../header/Header.jsx';
import Footer from '../footer/Footer.jsx';
import MovieFilterControls from '../filter-bar/MovieFilterControls.jsx';
import MovieList from '../movieDetails/MovieList.jsx';
function RootLayout() {

    const [genres] = useState(["All", "Documentary", "Comedy", "Horror", "Crime"]);
        const [selectedGenre, setSelectedGenre] = useState("");
        const [showHeader, setShowHeader] = useState(true);
        const [selectedMovie, setSelectedMovie] = useState(null);
        const [searchQuery, setSearchQuery] = useState("");
        const[sortBy, setSortBy] = useState("release_date");

        // Event handler
        const handleGenreSelect = (genre) => {
            console.log("Selected Genre:", genre);
            setSelectedGenre(genre);
        };

        const handleShowSelectedMovieTile = (movie) => {
            console.log("Selected Movie:", movie);
            setShowHeader(false);
            setSelectedMovie(movie);
        }

        const searchByQuery = (query) => {
            console.log("Search Query from App:", query);
            setSearchQuery(query);
        }

        const sortByCriterion = (criterion) => {
            console.log("Sort By Criterion:", criterion);
            setSortBy(criterion);
            console.log("Sort by Criterion:", criterion);
        }


    return (
        <div>
        <Outlet context={{ searchByQuery }}/>
         <MovieFilterControls
                        genres={genres}
                        selectedGenre={selectedGenre}
                        handleSortBy = {sortByCriterion}
                        onGenreSelect={handleGenreSelect}

                    />
         <MovieList
                        searchQuery = {searchQuery}
                        filter = {selectedGenre == "All" ? "" : selectedGenre}
                        sortBy = {sortBy}
                        showSelectedMovieDetails = {handleShowSelectedMovieTile}/>
         <Footer />
        </div>
    )
}
export default RootLayout;