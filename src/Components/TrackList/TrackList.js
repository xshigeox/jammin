import React from "react"
import "./TrackList.css"
import Track from "../Track/Track"

const TrackList = (props) => {
  console.log(props.tracks)
  const tracks = props.tracks.map((track) => {
    return <Track key={track.id} track={track} />
  })

  return <div class="TrackList">{tracks}</div>
}

export default TrackList
