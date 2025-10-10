import React from "react";
import './MovieFilterControls.css'

class SortControl extends React.Component{

    render () {
        return (
            <select
                aria-label="Default select example"
                id="sortBy">
                <option value="releaseDate">RELEASE DATE</option>
                <option value="title">TITLE</option>
            </select>
        )
    }
}

export default SortControl;