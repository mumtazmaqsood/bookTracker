import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const SearchBook = () => {
    const {searchBook} = useContext(GlobalContext);
    console.log("searchbooks1", searchBook)
    return (
        <div className="searchbook">
            <input type="text" 
                   placeholder="Search Books" 
            />
            <button onClick={ () => searchBook()} >Search </button>
        </div>
    )
}
