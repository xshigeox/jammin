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

  const [playlistName, setPlaylistName] = useState("Playlist 1")

  const [playlistTracks, setPlaylistTracks] = useState([
    { name: "Track 1", artist: "artist 1", album: "album 1", id: 1 },
    { name: "Track 2", artist: "artist 2", album: "album 2", id: 2 },
  ])

  const addTrack = (track) => {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return
    } else {
      setPlaylistTracks([...playlistTracks, track])
    }
  }

  const removeTrack = (track) => {
    setPlaylistTracks(
      playlistTracks.filter((savedTrack) => savedTrack.id !== track.id)
    )
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name)
  }

  const search = (searchTerm) => {
    console.log(searchTerm)
  }

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults
            searchResults={searchResults}
            onAdd={addTrack}
            isRemoval={false}
          />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            isRemoval={true}
            onNameChange={updatePlaylistName}
          />
        </div>
      </div>
    </div>
  )
}

export default App
