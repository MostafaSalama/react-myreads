import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
function BookList({ books, shelf, onUpdateBookShelf }) {
	let currentBooks = books.filter((book) => book.shelf === shelf);
	if (shelf === 'all') {
		currentBooks = [...books];
	}
	return (
		<div className="bookshelf-books">
			<ol className="books-grid">
				{currentBooks.map((book) => (
					<li key={book.id}>
						<Book
							onUpdateBookShelf={onUpdateBookShelf}
							id={book.id}
							title={book.title}
							thumbnail={book.imageLinks.thumbnail}
							authors={book.authors}
							shelf={book.shelf}
						/>
					</li>
				))}
			</ol>
		</div>
	);
}
BookList.propTypes = {
	books: PropTypes.array.isRequired,
	shelf: PropTypes.string.isRequired,
	onUpdateBookShelf: PropTypes.func,
};
export default BookList;
