

export default (state, action) => {

    switch(action.type){
        case 'ADD_BOOK': 
            return {
                ...state,
                books:[action.payload, ...state.books]
            }
        
        case 'DELETE_BOOK':
            return {
                ...state,
                books: state.books.filter(book => book.id != action.payload)
            }
        
        case 'SEARCH_BOOK':
            return {
                ...state,
                books: state.books.filter(book => book.id == action.payload)
            }

        default:
            return state;
    };
}

