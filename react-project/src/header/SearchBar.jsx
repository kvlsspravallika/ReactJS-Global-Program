import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ initialQuery = "", onSearch }) {
    const [searchQuery, setSearchQuery] = useState(initialQuery);

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            onSearch(searchQuery);
        }
    };

    const searchWithQuery = () => {
        onSearch(searchQuery);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <form className="d-flex">
                <input
                    className="form-control me-2 search-bar search-input"
                    type="text"
                    placeholder="What do you want to watch?"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    style={{ marginRight: "10px" }}
                />
                <button
                    className="btn btn-outline-success search-button"
                    type="button"
                    onClick={searchWithQuery}
                >
                    SEARCH
                </button>
            </form>
        </div>
    );
}

export default SearchBar;
