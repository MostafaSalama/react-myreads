import React from 'react';
import {getAll} from "../BooksAPI";

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
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Want to Read</h2>
						</div>
						<div className="bookshelf">
							<h2 className="bookshelf-title">Read</h2>
						</div>
					</div>
				</div>
				<div className="open-search">
					<button onClick={() => this.setState({showSearchPage: true})}>
						Add a book
					</button>
				</div>
			</div>
		);
	}
}

export default Home;
