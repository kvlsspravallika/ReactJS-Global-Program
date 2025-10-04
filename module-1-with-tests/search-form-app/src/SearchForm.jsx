import {Component} from "react";

class SearchForm extends Component {

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
            this.props.onSearch(this.state.searchQuery)
        }
    }

    searchWithQuery() {
        this.props.onSearch(this.state.searchQuery);
    }

    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <input
                    type = "text"
                    value = {this.state.searchQuery}
                    onChange = {this.handleChange}
                    onKeyDown = {this.handleKeyDown}
                    placeholder= "What do you want to watch?"
                    style={{ marginRight: "10px" }}
                />

                <button onClick = {this.searchWithQuery}>SEARCH</button>
            </div>
        )
    }


}

export default SearchForm;