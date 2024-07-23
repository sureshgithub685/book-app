import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, selectAllBooks } from '../../store/Slices/booksSlice';
import Book from './Book';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector(selectAllBooks);
  const loading = useSelector(state => state.books.loading);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-list">
      {books.map(book => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
