import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from "./BookShelf";


class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }



  render() {
  	let bookHandlers = this.props.bookHandlers
  	let books = this.props.books
    let wantToRead = books.filter(book => book.shelf === 'wantToRead')
    let read = books.filter(book => book.shelf === 'read')
    let currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
    return (
	    <div>
	     <div className="list-books">
	        <div className="list-books-title">
	          <h1>MyReads</h1>
	        </div>
	        <div className="list-books-content">
	          <div>
	            <BookShelf books={currentlyReading} 
	            		shelf='Currently Reading' 
	            		bookHandlers={bookHandlers}/>
	            <BookShelf books={read} 
	            		shelf='Read' 
	            		bookHandlers={bookHandlers} />
	            <BookShelf books={wantToRead} 
	            		shelf='Want To Read' 
	            		bookHandlers={bookHandlers}/>
	          </div>
	        </div>
	      </div>

	        <div className="open-search">
	          <Link to='/search'>Add a book</Link>
	        </div>
	     </div>
    )
  }
}

export default ListBooks


