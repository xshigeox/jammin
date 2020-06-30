import React, { useState } from "react"
import "./App.css"
import SearchBar from "../SearchBar/SearchBar"
import SearchResults from "../SearchResults/SearchResults"
import Playlist from "../Playlist/Playlist"

function App() {
  const [searchResults, setSearchResults] = useState([
    { name: "Track 1", artist: "artist 1", album: "album 1", id: 1 },
    { name: "Track 2", artist: "artist 2", album: "album 2", id: 2 },
    { name: "Track 3", artist: "artist 3", album: "album 3", id: 3 },
  ])

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} />
          <Playlist />
        </div>
      </div>
    </div>
  )
}

export default App
