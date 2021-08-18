import React from 'react';

export default class AddBook extends React.Component {
    constructor() {
        super();

        this.state = {
            title: "",
            author: "",
            review: ""
        }

        this.addNewBook = this.addNewBook.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    addNewBook(e) {

        e.preventDefault();

        fetch('http://127.0.0.1:5000/book/add', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify({
                title: this.state.title,
                author: this.state.author,
                review: this.state.review
            })
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        return (
            <form className='add-book-form' onSubmit={this.addNewBook}>

                <input type='text' placeholder='Title' name='title' onChange={this.handleChange} />
                <input type='text' placeholder='Author' name='author' onChange={this.handleChange} />
                <input type='text' placeholder='Review' name='review' onChange={this.handleChange} />

                <button type='submit'>Submit</button>
            </form>
        )
    }
}