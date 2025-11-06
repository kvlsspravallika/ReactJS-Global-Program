import "./App.css";
import React, { useState } from "react";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import MovieFilterControls from "./filter-bar/MovieFilterControls.jsx";
import MovieList from "./movieDetails/MovieList.jsx";
import MovieTile from "./movieDetails/MovieTile.jsx";
import {Routes, Route} from 'react-router-dom';
import MovieTileExample from "./movieDetails/MovieTileExample.jsx";
import {createBrowserRouter, RouterProvider, createRoutesFromElements} from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
import SearchBar from "./Header/SearchBar.jsx";
import { movieLoader } from "./Loaders/movieLoader.js";
import EditMovieModal from "./modal/EditMovieModal.jsx";

function App() {
    // State managed with Hooks
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

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Header handleSearchResult={searchByQuery}/>} />
            <Route path='/:movieId' element={<MovieTile />} loader={movieLoader} />
        </Route>

        ))
    return (
        <RouterProvider router={router} />
    );
}

export default App;
