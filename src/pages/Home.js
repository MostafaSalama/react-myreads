import React from 'react';
import {getAll} from "../BooksAPI";
import BookList from "../components/BookList";
import {Link} from "react-router-dom";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {books:[]} ;
	}
	componentDidMount() {
		getAll().then(books=>{
			this.setState({books})
		})
	}

	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Currently Reading</h2>
							<BookList books={this.state.books} shelf='currentlyReading' />
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Want to Read</h2>
							<BookList books={this.state.books} shelf='wantToRead' />
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Read</h2>
							<BookList books={this.state.books} shelf='read' />
						</div>
					</div>
				</div>
				<Link to={'/search'}>
					<div className="open-search">
						<button>
							Add a book
						</button>
					</div>
				</Link>
			</div>
		);
	}
}

export default Home;
