import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Slogan = styled.span`
  color: 'hsla(205, 37%, 60%, 50%)';
  font-size: 30px;
  font-style: italic;
  margin-right: 20px;
`

const ProductDescription = ( {product} ) => {
  return (
    <div className='product-description'>
      <Slogan className='slogan'>{product.slogan}</Slogan>
      <span className='description description-text' style={ {color: 'hsla(196, 17%, 45%, 1)', fontSize: '20px'} }>{product.description}</span>
    </div>
  )
}

export default ProductDescription;