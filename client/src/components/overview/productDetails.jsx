import React from 'react';
import Stars from '../shared/Stars.jsx';
import { ProductName, ProductCategory, ProductPrice } from '../styles/Overview/ProductDetails.styled.js';
// const ProductName = styled.span`
//   font-size: 30px;
//   font-style: bold;
//   color: hsla(196, 17%, 29%, 1);
// `

// const ProductCategory = styled.span`
//   font-size: 15px;
//   font-style: italic;
//   color: hsla(196, 17%, 45%, 85%);
//   margin-left: 20px;
// `

// const ProductPrice = styled.div`
//   color: hsla(33, 22%, 45%, 1);
// `

const ProductDetails = ( {product, rating} ) => {
  return (
      <div className='product-details'>
        <Stars avgRating={rating} />
        <br></br>
        <ProductName>{product.name}</ProductName>
        <ProductCategory>{product.category}</ProductCategory>
        <ProductPrice>{product.default_price}</ProductPrice>
      </div>
  )
}

export default ProductDetails;