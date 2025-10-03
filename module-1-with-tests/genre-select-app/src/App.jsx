import './App.css'
import GenreSelect from "./GenreSelect.jsx";
import React from "react";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            genres : ["All", "Action", "Horror", "Comedy", "Drama"],
            selectedGenre : "All"
        };

        this.handleGenreSelect = this.handleGenreSelect.bind(this);
    }

    handleGenreSelect(genre) {
        console.log("Selected Genre:", genre);
        this.setState({ selectedGenre: genre });
    }

    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Movie Genres</h1>
                <GenreSelect
                    genres={this.state.genres}
                    selectedGenre={this.state.selectedGenre}
                    onSelect={this.handleGenreSelect}
                />
            </div>
        );
    }
}

export default App