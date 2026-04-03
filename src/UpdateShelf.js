import { useState, useEffect } from "react";
import * as BooksAPI from './BooksAPI';
import Book from './Book';

const UpdateShelf = () => {
    const [books, setBooks] = useState([]); 
    
    useEffect(() => {
        const getBooks = async () => {
            const res = await BooksAPI.getAll();
            setBooks(res);
        };
        getBooks();
    }, []);

    const handleClickSelection = (book, shelf) => {
        console.log(book, shelf);
        const bookId = book.id;
        const currentBooks = [...books];
        const bookIndex = currentBooks.findIndex(book => book.id === bookId);
        const updatedBook = Object.assign({}, currentBooks[bookIndex], { shelf });
        console.log(updatedBook);
        setBooks(
            [...currentBooks.slice(0, bookIndex), updatedBook, ...currentBooks.slice(bookIndex + 1)]
        );

        BooksAPI.update(book, shelf);
    };

    let currentBookList = [];
    let wantBookList = [];
    let readBookList = [];

    books.forEach(book => {
        switch(book.shelf) {
            case 'currentlyReading':
                currentBookList.push(book);
            break;
            case 'wantToRead':
                wantBookList.push(book);
            break;
            case 'read':
                readBookList.push(book);
            break;
            default:
            break;
        }
    });

    const shelfData = [
        {
            name: 'Currently Reading',
            books: currentBookList
        },
        {
            name: 'Want To Read',
            books: wantBookList
        },
        {
            name: 'Read',
            books: readBookList
        }
    ];

    return(
        <div className="list-books-content">
            {
                <div>
                    {shelfData.map((shelf, index) => (
                        <div key={ index } className="bookshelf">
                            <h2 className="bookshelf-title">{ shelf.name }</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {
                                        shelf.books.map((book, index) => (
                                            <Book
                                                key={ index }
                                                book={ book }
                                                handleClickSelection={ handleClickSelection }
                                            />
                                        ))
                                    }
                                </ol>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default UpdateShelf;