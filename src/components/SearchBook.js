/*import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const SearchBook = () => {

    const [searchDescription, setSearchDescription] = useState('')
    const searchBook = useContext(GlobalContext);
    
    return (
        <div className="searchbook">
            <input type="text"
                value={searchDescription}
                onChange={(e) => setSearchDescription(e.target.value)}
                placeholder="Search Books ..."
            />
            {searchBook.books.filter((book) => {
                  if (book.description.toLowerCase().
                    includes(searchDescription.toLowerCase())) {
                    //return book
                }
            }).map((book, key) => {
                return (
                    <div key={key}>
                        <p>{book.description}</p>
                    </div>
                );
            })
            }

        </div>
    )
}

*/


