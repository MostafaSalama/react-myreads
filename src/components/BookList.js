import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
function BookList({ books, shelf }) {
	const currentBooks = books.filter((book) => book.shelf === shelf);
	console.log(currentBooks);
	return (
		<div className="bookshelf-books">
			<ol className="books-grid">
				{books
					.filter((book) => book.shelf === shelf)
					.map((book) => (
						<li key={book.id}>
							<Book
								id={book.id}
								title={book.title}
								thumbnail={book.imageLinks.thumbnail}
                                authors={book.authors}
                                shelf={shelf}
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
};
export default BookList;
