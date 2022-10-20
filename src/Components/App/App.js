import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar"


export class App extends React.Componentm {
    render() {
        return(
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                        {/* Add SearchResults component */}
                        {/* Add Playlist component */}

                    </div>
                </div>
            </div>
        )
    }
}

export default App
