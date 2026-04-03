import PropTypes from 'prop-types'
import NoBookImage from "./icons/NoBookImage.jpg";

const Book = ({book, handleClickSelection}) => {
    return(
        <div className="book">
            <div className="book-top">
                <div className="book-cover">
                    { book.imageLinks ? (
                            <img src={ book.imageLinks.thumbnail } alt='book cover'/>
                        ) : (
                            <img src={ NoBookImage } alt='no book cover'/>
                        )}
                </div>
                <div className="book-shelf-changer">
                    <select onChange={e => handleClickSelection(book, e.target.value)} value={book.shelf ? book.shelf : 'none'}>
                        <option value="" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none" >None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">
                { book.title ? book.title : "No Title Available" }
            </div>
            <div className="book-authors">
                { book.authors ? book.authors.map(i => { return <div key={i}>{i}</div>; }) : "Author Unknown" }
            </div>
        </div>
    )
};

Book.propType = {
    book: PropTypes.object.isRequired,
    handleClickSelection: PropTypes.func,
};

export default Book;