import React, {useReducer} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectedCartItems, resetCart } from '../../store/Slices/cartSlice';

const initialState = {
  name: '',
  email: '',
  address: '',
  cardNumber: '',
  expiryDate: '',
  cvv: '',
};

const checkoutReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const Checkout = () => {
  const [state, dispatch] = useReducer(checkoutReducer, initialState);
  const navigate = useNavigate();
  const dispatchForCart = useDispatch();

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'RESET' });
    alert("Your Order received, thanks for purchasing");
    dispatchForCart(resetCart());
    navigate('/');
  };
  const items = useSelector(selectedCartItems);
  return (
    <>
      <div>
      <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Checkout Form</h2>
      <div>
        <label>
          Name:
          <input type="text" name="name" value={state.name} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" name="email" value={state.email} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Address:
          <input type="text" name="address" value={state.address} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Card Number:
          <input type="text" name="cardNumber" value={state.cardNumber} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          Expiry Date:
          <input type="text" name="expiryDate" value={state.expiryDate} onChange={handleChange} required />
        </label>
      </div>
      <div>
        <label>
          CVV:
          <input type="text" name="cvv" value={state.cvv} onChange={handleChange} required />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form><br/>
      </div>
      {items.map(item => (
      <div className='selected-cart-item' key={item.id}>
        <h3>{item.title}</h3><br/>
        <p>Price: {item.price} Rs</p><br/>
        <p>Quantity: {item.quantity}</p>
      </div>
    ))}
    </>
  )
}

export default Checkout