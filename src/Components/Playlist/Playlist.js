import React from "react"
import "./Playlist.css"
import TrackList from "../TrackList/TrackList"

const Playlist = (props) => {
  return (
    <div class="Playlist">
      <input value="New Playlist" />
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
