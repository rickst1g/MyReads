import { Routes, Route } from 'react-router-dom';
import ListOfBooks from './ListOfBooks';
import BookSearch from './BookSearch';
import NoMatch from './NoMatch';
import './App.css';

const App = () => {
    return(
        <div className="app">
            <Routes>
                <Route exact path="/" element={<ListOfBooks />} />
                <Route path="/search" element={<BookSearch />} />
                <Route path="*" element={<NoMatch />}/>
            </Routes>
        </div>
    )
};

export default App;