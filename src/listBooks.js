import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './bookShelf'

class ListBooks extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onMoveBook: PropTypes.func.isRequired
    }

    render() {

        const booksCurrentlyReading = this.props.books.filter((book) => book.shelf === 'currentlyReading')
        const booksWantToRead       = this.props.books.filter((book) => book.shelf === 'wantToRead')
        const booksAlreadyRead      = this.props.books.filter((book) => book.shelf === 'read')

        return (
            <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    <BookShelf shelfName='Currently Reading' books={booksCurrentlyReading} onMoveBook={this.props.onMoveBook}/>
                    <BookShelf shelfName='Want to Read' books={booksWantToRead} onMoveBook={this.props.onMoveBook}/>
                    <BookShelf shelfName='Read' books={booksAlreadyRead} onMoveBook={this.props.onMoveBook}/>
                  </div>
                </div>
                <div className="open-search">
                  <Link
                    to='/search'
                  >Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks