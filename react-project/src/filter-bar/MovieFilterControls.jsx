import React, {useState} from "react";
import "./MovieFilterControls.css";
import SortControl from "./SortControl.jsx";

function MovieFilterControls({ genres, selectedGenre, onGenreSelect}) {
    // Instead of binding methods, we define inline arrow functions.
    const handleClick = (genre) => {
        onGenreSelect(genre);
    };

    const [sortBy, setSortBy] = useState("releaseDate");

    const handleSortChange = (newSort) => {
        console.log("Sorting by:", newSort);
        setSortBy(newSort);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="movie-control-background">
            <div className="d-flex justify-content-between align-items-center menu-container w-100 p-0">
                {/* Left section: Genre buttons */}
                <div className="left-div d-flex gap-2">
                    {genres.map((genre) => (
                        <button
                            key={genre}
                            type="button"
                            className={
                                genre === selectedGenre
                                    ? "navbar-brand active"
                                    : "navbar-brand"
                            }
                            onClick={() => handleClick(genre)}
                        >
                            {genre}
                        </button>
                    ))}
                </div>
                <div className="left-div d-flex">
                    <span className="navbar-brand">SORT BY</span>
                    <SortControl
                        currentSelection={sortBy}
                        onSortChange={handleSortChange}
                    />
                </div>
            </div>
        </nav>
    );
}

export default MovieFilterControls
