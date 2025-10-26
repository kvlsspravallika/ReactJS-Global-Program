import React from "react";

function GenreSelect({ genres, selectedGenre, onSelect }) {
    const handleClick = (genre) => {
        onSelect(genre);
    };

    return (
        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            {genres.map((genre) => (
                <button
                    key={genre}
                    style={{
                        padding: "10px 20px",
                        cursor: "pointer",
                        backgroundColor: genre === selectedGenre ? "#007bff" : "#e0e0e0",
                        color: genre === selectedGenre ? "white" : "black",
                        border: "none",
                        borderRadius: "5px",
                    }}
                    onClick={() => handleClick(genre)}
                >
                    {genre}
                </button>
            ))}
        </div>
    );
}

export default GenreSelect;
