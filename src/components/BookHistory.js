import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Book } from './Book';

export const BookHistory = () => {
    const {books} = useContext(GlobalContext);
    console.log(books)
    
    
    /* this code is for search,  */ 
    const [searchDescription, setSearchDescription] = useState('')
    const filteredBook = books.filter( book => {
        return book.description.toLowerCase().includes(searchDescription.toLowerCase()) })


//**************************** */

    return (
        <div className="book-history">
            <div className="searchook">   
            <input type="text"
                value={searchDescription}
                onChange={(e) => setSearchDescription(e.target.value)}
                placeholder="Search Books ..."
            />
            </div>
            <h2><u>Book History</u></h2>
            <ul>
                {filteredBook.map( book => (
                    <Book key={book.id} book = {book} />
                ))}
            </ul>
        </div>
    )
}
