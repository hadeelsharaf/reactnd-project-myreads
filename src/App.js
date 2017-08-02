import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import BookList from "./BookList"
import BookSearch from "./BookSearch";


class BooksApp extends React.Component {
  state = {
    books:[]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateBook = (oldBook,shelf) => {
    BooksAPI.update(oldBook,shelf).then(() =>{
        let oldBooks = this.state.books
        let existedBook = oldBooks.filter((book) => book.id === oldBook.id)[0]
        if (!existedBook){
          this.addBook(oldBook)
        }

        oldBook.shelf = shelf
        this.setState((state) => ({
          books: oldBooks.map((book) => {
            if(book.id === oldBook.id)
            { 
              book.shelf = shelf
            }
            return book
          })
        }))
      })
  }

  addBook = (book) => {
      let updatedBooks = this.state.books;
      updatedBooks.push(book);
      this.setState((state) => ({
        books:updatedBooks
      }))
  }

  bookHandlers = { 
    updateBook:this.updateBook
    }

  render() {
    let books = this.state.books
    return(
      <div className="app">  
        <Route exact path='/' render={() => (
          <BookList books={books} bookHandlers={this.bookHandlers} />  
        )}/>

        <Route path='/search' render={() => (
          <BookSearch bookHandlers={this.bookHandlers} />
        )}/>
      </div>
      )
  }
}


export default BooksApp

