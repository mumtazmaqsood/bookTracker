import logo from './logo.svg';
import './App.css';

//import componnets 
import {SearchBook} from './components/SearchBook';
import { BookHistory } from './components/BookHistory';
import { AddBook } from './components/AddBook';

function App() {
  return (
    <div className="App">
      <div className="header">
      <h1>Book Reading Tracker</h1> 
      <h5>Reading material for Developers</h5>
      <span>
        <SearchBook />
      </span>
      <hr />
      <BookHistory />
      <AddBook />
      </div>
      
    </div>
  );
}

export default App;
