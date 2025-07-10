import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from './CartContext';

export default function Products() {
  const [products, setProducts] = useState([]);
  const { dispatch } = useCart();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(prod => (
          <div key={prod.id} style={{ border: '1px solid #ccc', margin: 10, padding: 10, width: 200 }}>
            <img src={prod.image} alt={prod.title} style={{ height: 100, objectFit: 'contain' }} />
            <h4>{prod.title}</h4>
            <p>${prod.price}</p>
            <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: prod })}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
