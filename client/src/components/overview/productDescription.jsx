import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Slogan = styled.div`
  color: 'hsla(205, 37%, 60%, 50%)';
`

const ProductDescription = ( {product} ) => {
  return (
    <div className='product-description'>
      <Slogan className='slogan' ><h3>{product.slogan}</h3></Slogan>
      <div className='description description-text' style={ {color: 'hsla(196, 17%, 45%, 1)'} }>{product.description}</div>
    </div>
  )
}

export default ProductDescription;