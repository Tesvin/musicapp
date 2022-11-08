import React, {useState} from 'react'

function Searchbar(props) {
    let [searchTerm, setSearchTerm] = useState("")

  return (
    <form className='form-wrapper' onSubmit={(e) => props.handleSearch(e, searchTerm)}>
        <input id='search' className='' type="text" placeholder="Search Songs" 
        onChange={(e) => setSearchTerm(e.target.value)}/>
        <input type="submit" value='go' id='submit'/>
    </form>
  )
}

export default Searchbar