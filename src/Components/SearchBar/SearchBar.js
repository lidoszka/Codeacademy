import React from "react";
import "./SearchBar.css"

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {searchTerm: ''};
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    search(term) {
        this.props.onSearch(term);
    }

    handleTermChange(event) {
        this.setState({searchTerm: event.target.value })
    }

    handleClick(){
        this.props.onSearch(this.state.searchTerm);
    }

    render() {
        return (
        <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
        <a onClick={this.handleClick}>SEARCH</a>
        </div>
        );
    }
}

export default SearchBar;