import React from 'react';
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { selectedCartItems, removeFromCart, adjustQuantity } from '../../store/Slices/cartSlice';

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector(selectedCartItems);
  const removeFromCartList = (id) => {
    dispatch(removeFromCart({id}))
  }
  const handleAdjustQuantity = (item, type = "increment") => {
    const quantity = item.quantity;
    const newQuantity = type === "decrement" ? quantity - 1 : quantity + 1;
    dispatch(adjustQuantity({ id: item.id, quantity: newQuantity }));
  };
  if (!items.length) return <h2>Please add items to the cart to checkout</h2>
  return (
    <div className='cart-wrapper'>
      {items.map(item => (
        <div className='selected-cart-item' key={item.id}>
          <h3>{item.title}</h3>
          <p>Price: {item.price} Rs</p>
          <div className='d-flex col-gap-15'>
            <button disabled={item.quantity === 0} onClick={() => handleAdjustQuantity(item, 'decrement')}>-</button>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleAdjustQuantity(item)}>+</button>
            <button onClick={() => removeFromCartList(item.id)}>Remove from cart</button>
          </div>
        </div>
      ))}
      <Link to="/checkout" className="col-xs-12 checkout-footer">
          Checkout
      </Link>
    </div>
  );
}

export default Cart;
