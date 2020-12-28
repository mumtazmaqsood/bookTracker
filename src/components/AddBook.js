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
        /*if (description == ''){
            alert("Enter book");
        }
        else*/
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
                           required
                    />
                    <button>Add Book</button>
                </div>
            </form>
        </div>
    )
}
