import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDebounce } from "./useDebounce";
import * as BooksAPI from './BooksAPI';
import Book from './Book';

const BookSearch = () => {
    const [books, setBooks] = useState([]);
    const [currentBooks, setCurrentBooks] = useState([]);
    const [query, setQuery] = useState("");

    const debouncedQuery = useDebounce(query, 500);

    let navigate = useNavigate();
    
    useEffect(() => {
        const getBooks = async () => {
            const res = await BooksAPI.getAll();
            const booksId = res.map(book =>
                ({ id: book.id,shelf: book.shelf })
            )
            setCurrentBooks(booksId);
        };
        getBooks();
    }, []);
    
    const handleClickSelection = async(book, shelf) => {
        const booksTemp = []
        await BooksAPI.update(book, shelf).then(books => {
        Object.keys(books).forEach(shelf => {
            return books[shelf].map(bookId => ({ bookId, shelf }))
            .forEach(book => {
            booksTemp.push(book)
            })
        })
        return booksTemp
        }).then(booksTemp => {
            setCurrentBooks(booksTemp);
            navigate("/");
        })
    };

    let booksList
    if (books.length > 0) {
        booksList = books.map((book, index) => {
            currentBooks.forEach(bookInCurrentBooks => {
                if(bookInCurrentBooks.id === book.id) {
                    book.shelf = bookInCurrentBooks.shelf
                }
            })

            return (
                <li key={index}>
                    <Book
                        handleClickSelection={handleClickSelection}
                        book={ book }
                    />
                </li>
            )
        })
    } else {
        booksList = null
    };

    useEffect(() => { 
        const temp = async () => {
            if (debouncedQuery) {
                await BooksAPI.search(query,20).then(books => {
                    setBooks(books)
                })
            } else {
                setBooks([]);
            }
        }
        temp();
    }, [debouncedQuery]);

    return(
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        value = {query}
                        onChange = {(e) => setQuery(e.target.value)}
                        placeholder="Search by title or author"
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    { booksList }
                </ol>
            </div>
        </div>
    )
};

export default BookSearch;

//Reference: https://www.youtube.com/watch?v=n52A60Z7Ha0 for deBounce for useEffect