import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify.js";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { searchResults: [], playlistTracks: [], playlistName: 'New Playlist' };
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.search = this.search.bind(this);
    }
    
    addTrack(track) {
        if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
            return;
        }
    }

    removeTrack(track) {
        if (this.state.playlistTracks.find(savedTrack => savedTrack.id !== track.id)) {
            return;
        }
    }

    updatePlaylistName(name) {
        this.setState = ({playlistName: name});
    }

    savePlaylist() {
        const trackURIs = this.state.playlistTracks.map(track => track.uri)
        Spotify.savePlaylist(this.state.playlistName, trackURIs).then(() => {
            this.setState(
                {
                    playlistName: 'New Playlist',
                    playlistTracks: []
                })
            })
        }
        
        search(searchTerm) {
            Spotify.search(searchTerm).then(tracks => {
                this.setState({
                    searchResults: tracks
                })
            });
        }
        
        render() {
            return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                <SearchBar onSearch={this.search} />
                <div className="App-playlist">
                <SearchResults searchResults={this.state.searchResult} onAdd={SearchResults.addTrack} />
                <Playlist 
                name={this.state.playlistName} 
                tracks={this.state.playlistTracks} 
                savePlaylist={this.state.savePlaylist} 
                onRemove={this.state.removeTrack} 
                onNameChange={this.updatePlaylistName} />
                </div>
                </div>
                </div>
                );
            }
        }

export default App;