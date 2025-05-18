import React from 'react'
import { useState } from 'react'
import {Book} from '../types/interfaces'
const TbrList = () => {
    const [title, setTitle] = useState<string>('')
    const [author, setAuthor] = useState<string>('')
    const [books, setBooks] = useState<Book[]>([])

    const addBook = () => {
        setBooks([...books, {
            title: title,
            author: author,
            read: false
        }])
    }
    
    return (
        <>
            <h2><center>MY BOOKS</center></h2>
            <form>
                <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
                <input type="text" placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
                <button type="submit" onClick={addBook}>Add Book</button>
            </form>

            <TbrList books={books} />
        </>
    )
}

export default TbrList