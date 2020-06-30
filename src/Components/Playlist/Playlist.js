import React from "react"
import "./Playlist.css"
import TrackList from "../TrackList/TrackList"

const Playlist = (props) => {
  const handleNameChange = (event) => {
    event.preventDefault()
    props.onNameChange(event.currentTarget.value)
  }

  return (
    <div class="Playlist">
      <input value={props.playlistName} onChange={handleNameChange} />
      <TrackList
        tracks={props.playlistTracks}
        onRemove={props.onRemove}
        isRemoval={props.isRemoval}
      />
      <button class="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  )
}

export default Playlist
