import React from 'react';

const QuantitySelector = ( {outOfStock, handleQuantitySelect, quantities} ) => {
  return (
    <select onChange={handleQuantitySelect}>
      { outOfStock ? <option>Out of Stock</option> : quantities.map( (quantity, i) => (
        <option className='quantity-option' key={i} value={quantity}>{quantity}</option>
      )) }
    </select>
  )
}

export default QuantitySelector;