import React from 'react';
import './Header.css';
import SearchBar from "./SearchBar.jsx";

class Header extends React.Component {

    render() {
        return (
            <div>
                <header className="header d-flex flex-column justify-content-center align-items-center text-white">
                    <div className="brand">
                        <p>
                            <span className="brand-bold">netflix</span>
                            <span className='brand-normal'>roulette</span>
                        </p>
                    </div>
                    <h1 className="find-your-movie"> FIND YOUR MOVIE </h1>
                    <div className="header-content text-center search-bar">
                        <SearchBar intialQuery="What do you want to search?"
                               onSearch={(query) => {
                                   console.log("Searching for:", query);
                                   // You can add API calls here
                               }}/>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;
