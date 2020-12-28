
import './App.css';

//import componnets 
import {SearchBook} from './components/SearchBook';
import { BookHistory } from './components/BookHistory';
import { AddBook } from './components/AddBook';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
        <div className="header">
        <h1>Book Reading Tracker</h1> 
        <h5>Reading material for Developers</h5>
        <hr />
        <BookHistory />
        <AddBook />
        </div>
    </GlobalProvider>
  );
}

export default App;
