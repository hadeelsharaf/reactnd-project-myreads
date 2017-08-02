import React, { Component } from 'react'
import BookComponent from "./BookComponent"
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class BookSearch extends Component {
	state = {
	    query: '',
	    books:[]
	  }

  updateQuery = (query) => {
  	BooksAPI.search(query,50).then((results) =>{
  		if (results)
    		this.setState({ query: query.trim(),books:results })
    	else
    		this.setState({ query: query.trim(), books:[] })		
  		
  	} )
  }

  clearQuery = () => {
    this.setState({ query: '', books:[] })
  }

  render(){
  	let books = this.state.books
  	let query = this.state.query
  	let bookHandlers = this.props.bookHandlers

  	return(
  		    <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"
                	value={query}
            		onChange={(event) => this.updateQuery(event.target.value)}/>
                
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
	            { books.map((book) => (
	              <li key={book.id}>
	            		<BookComponent book={book} bookHandlers={bookHandlers}
	            		mood="adding"/>
	              </li>
	            	))
	            }
	          </ol>
            </div>
          </div>
  		)
  }
}

export default BookSearch