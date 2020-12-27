import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Book = ({book}) => {
    const {delBook} = useContext(GlobalContext);

    return ( 
        <li>
        {book.description}
        <button className="del-btn" onClick= { () => delBook(book.id)}>Delete</button>
        </li>      
    )   
}
