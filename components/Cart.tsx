import React, { useEffect, useState } from 'react';
import CartAPI from '../services/cartAPI';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const cartItems = await CartAPI.getCart();
      setCartItems(cartItems);
    } catch (error) {
      console.error('Failed to fetch cart items:', error);
    }
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
