import React, { useState } from 'react';
import CartAPI from '../services/cartAPI';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type Props = {
  product: Product;
};

const ProductCard: React.FunctionComponent<Props> = ({ product }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = async () => {
    try {
      await CartAPI.addToCart(product.id);
      setCartItems([...cartItems, product]);
      console.log('Item added to cart successfully!');
    } catch (error) {
      console.error('Failed to add item to cart:', error);
    }
  };

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
