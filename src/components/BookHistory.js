import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Book } from './Book';

export const BookHistory = () => {
    const {books} = useContext(GlobalContext);
    console.log(books)
    return (
        <div className="book-history">
            <h2><u>Book History</u></h2>
            <ul>
                {books.map( book => (
                    <Book key={book.id} book = {book} />
                ))}
            </ul>
        </div>
    )
}
