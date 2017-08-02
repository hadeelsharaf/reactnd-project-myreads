import React, { Component } from 'react';
import BookComponent from "./BookComponent";


class BookShelf extends Component {
	
	render(){
		let books = this.props.books
		let shelf = this.props.shelf
    let bookHandlers = this.props.bookHandlers
		return(
			<div className="bookshelf">
        <h2 className="bookshelf-title">{shelf}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { books.map((book) => (
              <li key={book.id}>
            		<BookComponent book={book} bookHandlers={bookHandlers}/>
              </li>
            	))
            }
          </ol>
        </div>
      </div>
			)
	}
}

export default BookShelf