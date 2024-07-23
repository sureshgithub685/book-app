import { useSelector } from 'react-redux';
import { selectedCartItems } from '../store/Slices/cartSlice';
import { Link } from 'react-router-dom';

function Header() {
  const cartItems = useSelector(selectedCartItems);
  return (
    <header className="header">
      <div className="logo">
        <h1>Book Store</h1>
      </div>
        <Link className='cart-icon' to="/cart">
          <div>
          <i class="fas fa-shopping-cart"></i>
            Cart
            </div>
          <span className="cart-count">{cartItems.length}</span>
        </Link>
    </header>
  );
}

export default Header;
