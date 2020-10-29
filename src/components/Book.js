import React from 'react';
import PropTypes from 'prop-types';
function Book({ title, id, shelf, authors, thumbnail, onUpdateBookShelf }) {
	const shelves = [
		{ value: 'currentlyReading', text: 'Currently Reading' },
		{ value: 'wantToRead', text: 'Want to Read' },
		{ value: 'read', text: 'Read' },
		{ value: 'none', text: 'None' },
	];
	function onUpdateBook(e) {
		onUpdateBookShelf({ id }, e.target.value);
	}
	return (
		<div className="book">
			<div className="book-top">
				<div
					className="book-cover"
					style={{
						width: 128,
						height: 193,
						backgroundImage: `url("${thumbnail}")`,
					}}
				/>
				<div className="book-shelf-changer">
					<select value={shelf} onChange={onUpdateBook}>
						<option value="move" disabled>
							Move to...
						</option>
						{shelves.map((currentShelf) => {
							const isBookShelf = currentShelf.value === shelf;
							return (
								<option key={currentShelf.value} value={currentShelf.value}>
									{isBookShelf ? `✔ ${currentShelf.text}` : currentShelf.text}
								</option>
							);
						})}
					</select>
				</div>
			</div>
			<div className="book-title">{title}</div>
			<div className="book-authors">
				{authors.map((author) => (
					<span key={author}>
						{author} <br />
					</span>
				))}
			</div>
		</div>
	);
}
Book.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	authors: PropTypes.array,
	shelf: PropTypes.string,
	thumbnail: PropTypes.string,
	onUpdateBookShelf: PropTypes.func,
};
Book.defaultProps = {
	authors: [],
};
export default Book;
