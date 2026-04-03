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

/*References: Udacity React course - used the React starter for project; https://codesandbox.io/p/github/planetpratik/MyReads/master for ideas; https://github.com/edwdeapri/udacity-myreads/tree/master for ideas;
https://www.youtube.com/watch?v=n52A60Z7Ha0 for deBounce for useEffect; My Nephew Michael- Developer of presto Assistant and works at text em getAll.*/
