import React from "react";
import "./Playlist.css"
import TrackList from "../TrackList/TrackList"

class Playlist extends React.Component {
    constructor(props) {
        super(props)
    
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    
handleNameChange(event) {
    this.props.onNameChange(event.target.value);
}


    render() {
        return(
        <div className="Playlist" onChange={this.handleNameChange} >
        <input defaultValue={'New Playlist'}/>
        <TrackList tracks={this.props.tracks} toRemove={true} onRemove={this.props.onRemove} />
        <a className="Playlist-save" onClick={this.props.savePlaylist} >SAVE TO SPOTIFY</a>
</div>
        );
    }
}

export default Playlist;