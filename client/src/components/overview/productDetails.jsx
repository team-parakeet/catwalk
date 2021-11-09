import React from 'react';
import Stars from '../shared/Stars.jsx';
import { ProductName, ProductCategory, ProductPrice } from '../styles/Overview/ProductDetails.styled.js';

const ProductDetails = ( {product, rating, productId} ) => {
  return (
      <div className='product-details'>
        <Stars rating={rating} id={productId}/>
        <br></br>
        <ProductName>{product.name}</ProductName>
        <ProductCategory>{product.category}</ProductCategory>
        <ProductPrice>{product.default_price}</ProductPrice>
      </div>
  )
}

export default ProductDetails;