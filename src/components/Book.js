import React from 'react';
import PropTypes from 'prop-types';
function Book({title,id,shelf,authors,thumbnail}) {
    console.log(shelf);
	return (
		<div className="book">
			<div className="book-top">
				<div
					className="book-cover"
					style={{
						width: 128,
						height: 193,
						backgroundImage:`url("${thumbnail}")`,
					}}
				/>
				<div className="book-shelf-changer">
					<select>
						<option value="move" disabled>
							Move to...
						</option>
						<option value="currentlyReading">Currently Reading</option>
						<option value="wantToRead">Want to Read</option>
						<option value="read">Read</option>
						<option value="none">None</option>
					</select>
				</div>
			</div>
			<div className="book-title">{title}</div>
			<div className="book-authors">
                {authors.map(author=><span key={author}>{author} <br/></span>)}
            </div>
		</div>
	);
}
Book.propTypes = {
    title : PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
    authors:PropTypes.array,
    shelf:PropTypes.string,
    thumbnail:PropTypes.string
};
export default Book;
