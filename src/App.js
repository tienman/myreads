import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { getAll, update } from './BooksAPI'
import ListBooks from './listBooks'
import SearchBooks from './searchBooks'
import './App.css'


class App extends Component {

    state = {
        books: []
    }

    componentDidMount() {
        getAll().then((books) => this.setState({
            books: books
        }))
    }

    moveBook = (book, shelf) => {

        book.shelf = shelf
        const books = this.state.books
        const idx = books.findIndex((b) => b.id === book.id)
        if (idx >= 0) {
            books[idx] = book
        } else {
            books.push(book)
        }
        this.setState({
            books: books
        })

        update(book, shelf)
    }

    render() {
        return (
            <div className='app'>
                <Route exact path='/' render={() => (
                    <ListBooks books={this.state.books} onMoveBook={this.moveBook}/>
                )} />
                <Route exact path='/search' render={() => (
                    <SearchBooks onMoveBook={this.moveBook}/>
                )} />
            </div>
        )
    }
}

export default App
