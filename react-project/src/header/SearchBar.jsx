import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ initialQuery = "", onSearch }) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searching in SearchBar component for:", searchQuery);
    onSearch(searchQuery);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          className="form-control me-2 search-bar search-input"
          type="text"
          placeholder="What do you want to watch?"
          aria-label="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button
          className="btn btn-outline-success search-button"
          type="submit"
        >
          SEARCH
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
