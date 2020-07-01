import React, { useState } from "react"
import "./SearchBar.css"

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("")

  const search = (event) => {
    event.preventDefault()
    props.onSearch(searchTerm)
  }

  const handleTermChange = (event) => {
    event.preventDefault()
    setSearchTerm(event.currentTarget.value)
  }

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleTermChange}
      />
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
    </div>
  )
}

export default SearchBar
