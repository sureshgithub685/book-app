import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectAllBooks } from '../../store/Slices/booksSlice';

function BookDetails() {
  const { id } = useParams();
  const books = useSelector(selectAllBooks);
  const book = books.find(book => book.id === id);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div>
      <h2>{book.volumeInfo.title}</h2>
      <p>{book.volumeInfo.authors.join(', ')}</p>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      <p>{book.volumeInfo.description}</p>
      {/* Add to cart button or functionality here */}
    </div>
  );
}

export default BookDetails;
