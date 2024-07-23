import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart, selectedCartItems } from '../../store/Slices/cartSlice';

function Book({ book }) {
  const dispatch = useDispatch();
  const books = useSelector(selectedCartItems);

  const handleAddToCart = () => {
    
    if (isBookAvailableInCart) {
      dispatch(removeFromCart({ id: book.id }));
    } else {
      dispatch(addToCart({ id: book.id, title: book.volumeInfo.title, price: 10.99}));
    }
  };
  const isBookAvailableInCart = books.find((cartBook) => cartBook.id === book.id);
  return (
    <div className="book-card" key={book.id}>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
          <div className="book-card-content">
            <h2>{book.volumeInfo.title}</h2>
            <p>{book.volumeInfo.authors.join(', ')}</p>
            <p>{book.volumeInfo.description?.length > 200 ? book.volumeInfo.description.slice(0, 200) + '...' :  book.volumeInfo.description}</p>
            <div className="action-section">
            <button className={isBookAvailableInCart ? 'cart-item' : ''} onClick={handleAddToCart}>{isBookAvailableInCart ? 'Remove from cart' : 'Add to Cart'}</button>
            <Link to={`/book/${book.id}`}>View Details</Link>
            </div>
          </div>
        </div>
  );
}

export default Book;
