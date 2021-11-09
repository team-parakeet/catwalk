import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const SizeSelector = ( {currentSize, availableSizes, handleSizeSelect} ) => {
  return (
    <select className='size-select'
      value={currentSize}
      onChange={handleSizeSelect}>
      <option className='size-option' defaultValue={'Select a size'}>Select a size</option>
      { availableSizes.length ? availableSizes.map( (size, i) => {
        return ( <option className='size-option' key={i} value={size}>{size}</option> );
      }) : null }
    </select>
  )
}

export default SizeSelector;