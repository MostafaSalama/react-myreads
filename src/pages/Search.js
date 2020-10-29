import React from 'react';
import { Link } from 'react-router-dom';
import BookList from '../components/BookList';
import { getAll, search, update } from '../BooksAPI';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = { query: '', books: [], allBooks: [] };
	}
	componentDidMount() {
		getAll().then((allBooks) => {
			this.setState({ allBooks });
		});
	}
	onChangeHandler = (e) => {
		this.setState({ query: e.target.value }, this.updateBooks);
	};
	updateBooks() {
		const { query, allBooks } = this.state;
		search(query)
			.then((res) => {
				if (res.error) {
					this.setState({ books: [] });
					return;
				}
				if (res.length) {
					let books = res
						.filter((res) => res.imageLinks)
						.map((book, index) => {
							const bookInAllBooks = allBooks.find(
								(currentBook) => currentBook.id === book.id,
							);
							return bookInAllBooks
								? bookInAllBooks
								: { ...book, shelf: 'none' };
						});
					this.setState({ books });
				}
			})
			.catch((err) => {
				this.setState({ books: [] });
			});
	}
	onUpdateBookShelf = ({ id }, shelf) => {
		update({ id }, shelf).then((res) => {
			this.setState((prevState) => {
				return {
					books: prevState.books.map((book) => {
						return book.id === id ? { ...book, shelf } : book;
					}),
				};
			});
		});
	};
	render() {
		const { query, books } = this.state;
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to={'/'}>
						<button className="close-search">Close</button>
					</Link>
					<div className="search-books-input-wrapper">
						{/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
						<input
							onChange={this.onChangeHandler}
							onKeyUp={this.onChangeHandler}
							value={query}
							type="text"
							placeholder="Search by title or author"
						/>
					</div>
				</div>
				<div className="search-books-results">
					<BookList
						onUpdateBookShelf={this.onUpdateBookShelf}
						shelf={'all'}
						books={books}
					/>
				</div>
			</div>
		);
	}
}

export default Search;
