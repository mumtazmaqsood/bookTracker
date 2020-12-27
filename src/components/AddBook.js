import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddBook = () => {
    const [description, setDescription] = useState('');
    const {addBook} = useContext(GlobalContext);

    const onSubmit = (e) =>{
        e.preventDefault();

        const newBook = {
            id: new Date().getTime(),
            description
        }
        addBook(newBook)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text"  
                           id="description"
                           value={description}
                           onChange={ (e) => setDescription(e.target.value)}
                        placeholder="Add Book ..." 
                    />
                    <button>Add Book</button>
                </div>
            </form>
        </div>
    )
}
