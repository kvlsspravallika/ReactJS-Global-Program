import './App.css'

import React from "react";
import SearchForm from "./SearchForm";

function App() {
    // Callback that runs when search happens
    const handleSearch = (query) => {
        console.log("Searching for:", query);
        // You can add API calls here
    };

    return (
        <div>
            <h1>My Search App</h1>
            <SearchForm initialQuery="" onSearch={handleSearch} />
        </div>
    );
}

export default App;
