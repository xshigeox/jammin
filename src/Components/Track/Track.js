import React from "react"

const Track = (props) => {
  const addTrack = (event) => {
    event.preventDefault()
    props.onAdd(props.track)
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      <button class="Track-action" onClick={addTrack}>
        +
      </button>
    </div>
  )
}

export default Track
