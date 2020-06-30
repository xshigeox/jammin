import React from "react"
import "./TrackList.css"
import Track from "../Track/Track"

const TrackList = (props) => {
  const tracks = props.tracks.map((track) => {
    return (
      <Track
        key={track.id}
        track={track}
        onAdd={props.onAdd}
        onRemove={props.onRemove}
        isRemoval={props.isRemoval}
      />
    )
  })

  return <div class="TrackList">{tracks}</div>
}

export default TrackList
