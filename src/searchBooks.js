import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { search } from './BooksAPI'
import BookShelf from './bookShelf'


class SearchBooks extends Component {

    static propTypes = {
        onMoveBook: PropTypes.func.isRequired
    }

    state = {
        books: [],
        query: ''
    }

    updateQuery = (query) => {
        search(query).then((books) => {
            this.setState({
                books:  books,
                query:  query
            })
        })
    }

    render() {

        const { books } = this.state

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                          NOTES: The search from BooksAPI is limited to a particular set of search terms.
                          You can find these search terms here:
                          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                          you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onInput={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <BookShelf shelfName='None' books={books ? books : []} onMoveBook={this.props.onMoveBook}/>
                </div>
            </div>
        )
    }
}

export default SearchBooks