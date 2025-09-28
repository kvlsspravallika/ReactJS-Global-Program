import React from "react";

class GenreSelect extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(genre) {
        this.props.onSelect(genre);
    }

    render() {
        const {genres, selectedGenre} = this.props;

        return (
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
                {
                    genres.map(genre => (
                        <button
                            key = {genre}
                            style={{
                                padding: "10px 20px",
                                cursor: "pointer",
                                backgroundColor: genre === selectedGenre ? "#007bff" : "#e0e0e0",
                                color: genre === selectedGenre ? "white" : "black",
                                border: "none",
                                borderRadius: "5px"
                            }}
                            onClick={() => this.handleClick(genre)}
                        >
                            {genre}
                        </button>
                    ))
                }
            </div>
        )
    }

}

export default GenreSelect;