import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../../request.js';
import { HomeContainer } from '../styles/Home/index.styled.js';

// Products splash page
const Home = () => {
  const [products, setProducts] = useState([]);
  const [ thumbnails, setThumbnails ] = useState([]);

  // On mount, retrieve product and styles
  useEffect(() => {
    getAllProducts()
      .then(results => setProducts(results.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <HomeContainer className='home-page'>
      { products.map( (product, i) => {
        return (
          <Product
            id={product.id}
            name={product.name}
            price={product.default_price}
            key={i}
          />
        )
      }) }
    </HomeContainer>
  )
}

export default Home;