import React, {useState} from 'react'

function Searchbar(props) {
    let [searchTerm, setSearchTerm] = useState("")

  return (
    <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
        <input type="text" placeholder="Search Songs" 
        onChange={(e) => setSearchTerm(e.target.value)}/>
        <input type="submit"/>
    </form>
  )
}

export default Searchbar