import React from "react";
import "./MovieFilterControls.css";

function SortControl({ currentSelection, onSortChange }) {
    const handleChange = (event) => {
        const newValue = event.target.value;
        onSortChange(newValue); // Call parent callback with the new value
    };

    return (
        <select
            aria-label="Sort movies by"
            id="sortBy"
            value={currentSelection} // controlled by parent
            onChange={handleChange}
        >
            <option value="releaseDate">RELEASE DATE</option>
            <option value="title">TITLE</option>
        </select>
    );
}

export default SortControl;
