import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterBookList } from '../store/Slices/booksSlice';

const Search = () => {
  const [bookInput, setBookInput] =  useState('')
  const dispatch = useDispatch();
  const handleBookSearch = (event) => {
    setBookInput(event.target.value);
  }
  const getFilteredBooks = () => {
    dispatch(filterBookList({search: bookInput}));
  }
  return (
    <div  className='search-container'>
      <input className='search-bar' type="text" value={bookInput} placeholder="search for books" onChange={(e) => handleBookSearch(e)} />
      <button className='books'  onClick={getFilteredBooks}>Search for Books</button>
    </div>
  )
}

export default Search