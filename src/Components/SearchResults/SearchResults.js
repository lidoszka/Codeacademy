import React from "react";
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults" searchResults="this.state.searchResults">
            <h2>Results</h2>
            <TrackList tracks={this.props.searchResult} onAdd={this.props.onAdd} />
            </div>
        );
    }
}

export default SearchResults;