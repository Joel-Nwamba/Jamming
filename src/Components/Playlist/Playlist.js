import React from "react";
import "./Playlist.css"
import TrackList from "../TrackList/TrackList"

export class Playlist extends React.Component {
    render() {
        return(
            <div className="Playlist">
                <TrackList />
                <button className="Playlist-save">Save to Spotify</button>
            </div>
        )
    }
}

export default Playlist