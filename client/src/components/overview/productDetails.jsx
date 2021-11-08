import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ProductDetails = ( {product} ) => {
  return (
      <div className='product-details'>
        <span>Star rating here</span>
        <h4>{product.category}</h4>
        <h2>{product.name}</h2>
        {product.default_price}
      </div>
  )
}

export default ProductDetails;