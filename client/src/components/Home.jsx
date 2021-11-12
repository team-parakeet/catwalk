import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../request.js';

// Products splash page
const Home = () => {
  const [products, setProducts] = useState([]);

  // On mount, retrieve product and styles
  useEffect(() => {
    getAllProducts()
      .then(results => setProducts(results.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Welcome home</h1>
      {products.map((product) => {
        return (
          <div>
            {JSON.stringify(product)}
          </div>
        )
      })}
    </div>
  )
}

export default Home;