import React from 'react';

const Book = (props) => {
    const {id, author, title, review} = props.book;

    return(
        <div key={id}>
            <div className='book-item'>
                <div className='book-field'>
                    Title: {title}

                </div>

                <div className='book-field'>
                    Author: {author}
                </div>

                <div className='book-field'>
                    Review: {review}
                </div>
            </div>
        </div>
    )
}

export default Book;