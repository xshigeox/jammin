import React from "react"
import "./Playlist.css"
import TrackList from "../TrackList/TrackList"

const Playlist = (props) => {
  const handleNameChange = (event) => {
    event.preventDefault()
    props.onNameChange(event.currentTarget.value)
  }

  return (
    <div className="Playlist">
      <input value={props.playlistName} onChange={handleNameChange} />
      <TrackList
        tracks={props.playlistTracks}
        onRemove={props.onRemove}
        isRemoval={props.isRemoval}
      />
      <button className="Playlist-save" onClick={props.onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  )
}

export default Playlist
