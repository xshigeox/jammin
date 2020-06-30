import React from "react"
import "./TrackList.css"
import Track from "../Track/Track"

const TrackList = (props) => {
  const tracks = props.tracks.map((track) => {
    return <Track key={track.id} track={track} onAdd={props.onAdd} />
  })

  return <div class="TrackList">{tracks}</div>
}

export default TrackList
