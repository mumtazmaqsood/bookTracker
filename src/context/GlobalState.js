import { createContext, useReducer } from 'react'

import BookReducer from './BookReducer'

const initialState ={ 
   books : [
    {id:1, description:"React Novie to Nanjia2"},
    {id:2, description:"Java Script2"},
    {id:3, description:"Agile Methodology2"},
    {id:4, description:"HTML & CSS2"}
    ]}


export const GlobalContext = createContext(initialState);




export const GlobalProvider = ( {children}) => {
    //reducer 
    let [state, dispatch] = useReducer(BookReducer, initialState);

    function addBook(book){
        dispatch({
            type: 'ADD_BOOK',
            payload: book
        })
    }

    function delBook(id){
        dispatch({
            type: 'DELETE_BOOK',
            payload: id
        })
    }

    function searchBook(id) {
        dispatch({
            type: 'SEARCH_BOOK',
            payload: id
        })
    }

    return(
        <GlobalContext.Provider value= {{
            books: state.books,
            addBook,
            delBook
        }
        }>
            {children}
        </GlobalContext.Provider> 
    );

}