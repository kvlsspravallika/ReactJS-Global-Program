import './App.css'
import React from "react";
import GenreSelect from "./genreSelect/GenreSelect.jsx";
import Counter from "./counter/Counter.jsx";
import SearchForm from "./searchForm/SearchForm.jsx";
import Header from "./header/Header.jsx";

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
            <div>
                <Header />
                {/**
                <h1> Counter </h1>
                <Counter initialValue={0} />
                <h1>Movie Genres</h1>
                <GenreSelect
                    genres={this.state.genres}
                    selectedGenre={this.state.selectedGenre}
                    onSelect={this.handleGenreSelect}
                />
                <h1>Search Form </h1>
                <SearchForm initialQuery="" onSearch={(query) => {
                    console.log("Searching for:", query);
                    // You can add API calls here
                }} />
            */}
            </div>
        );
    }
}

export default App