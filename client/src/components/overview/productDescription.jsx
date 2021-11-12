import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const DescriptionContainer = styled.div`
  margin: 20px;
`

const Slogan = styled.span`
  color: 'hsla(205, 37%, 60%, 50%)';
  font-size: 30px;
  font-style: italic;
  margin-right: 20px;
  border-right: 2px hsla(205, 37%, 60%, 50%) solid;
  padding-right: 30px;
`

const ProductDescription = ( {product} ) => {
  return (
    <DescriptionContainer className='product-description'>
      <Slogan className='slogan'>{product.slogan}</Slogan>
      <span className='description description-text' style={ {color: 'hsla(196, 17%, 45%, 1)', fontSize: '25px'} }>{product.description}</span>
    </DescriptionContainer>
  )
}

export default ProductDescription;