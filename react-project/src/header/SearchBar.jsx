import {Component} from "react";
import './SearchBar.css'

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchQuery : this.props.initialQuery || ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.searchWithQuery = this.searchWithQuery.bind(this);
    }

    handleChange(event) {
        this.setState({searchQuery: event.target.value});
    }

    handleKeyDown(event) {
        if (event.key === 'Enter') {
            event.preventDefault()
            this.props.onSearch(this.state.searchQuery)
        }
    }

    searchWithQuery() {
        this.props.onSearch(this.state.searchQuery);
    }

    render() {
        return (
            <div style={{textAlign: "center", marginTop: "20px"}}>
                <form className="d-flex">
                    <input
                        className="form-control me-2 search-bar search-input"
                        type="text"
                        placeholder="What do you want to watch?"
                        aria-label="Search"
                        value={this.state.searchQuery}
                        onChange={this.handleChange}
                        onKeyDown={this.handleKeyDown}
                        style={{marginRight: "10px"}}
                    />
                    <button className="btn btn-outline-success search-button"
                            type="button" onClick={this.searchWithQuery}>SEARCH</button>
                </form>
            </div>
        )
    }


}

export default SearchBar;