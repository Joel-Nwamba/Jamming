import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar"
import SearchResults from "../SearchResults/SearchResults"
import Playlist from "../Playlist/Playlist"

export class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            SearchResults: [{name: "Lloyd Banks", artist: "Lyod banks", album: "Fire", id: 1},
            {name: "Curtis Jackson", artist: "50 Cent", album: "Inferno", id: 2},
            {name: "Tony", artist: "Tony Yayo", album: "Seductive", id: 3}]
        }
    }
    render() {
        return(
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar SearchResults={this.state.SearchResults} />
                    <div className="App-playlist">
                        <SearchResults />
                        <Playlist />

                    </div>
                </div>
            </div>
        )
    }
}

export default App
