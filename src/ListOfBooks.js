import UpdateShelf from './UpdateShelf'
import { Link } from 'react-router-dom';

function ListOfBooks() {
    return(
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <UpdateShelf />
            <div className="open-search">
                <Link
                    to="/search"
                >
                    Add a book
                </Link>
            </div>
        </div>
    )
};

export default ListOfBooks;