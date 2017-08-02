import React, { Component } from 'react';


class BookComponent extends Component {

  // function to change the shelf

  updateHandler = this.props.bookHandlers.updateBook
	
	render(){
		let book = this.props.book
		return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf}
            onChange={(event) => this.updateHandler(book, event.target.value)}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
      </div>  
                          
			)
	}
}


export default BookComponent