import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import StyleThumbnail from './styleThumbnail.jsx';
import StyleSelector from './styleSelector.jsx';
import SizeSelector from './sizeSelector.jsx';
import QuantitySelector from './quantitySelector.jsx';
import styled from 'styled-components';

const DEFAULT_QUANTITIES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const Selectors = (props) => {
  const [currentStyle, setCurrentStyle] = useState('')
  const [availableSizes, setAvailableSizes] = useState([])
  const [currentSize, setCurrentSize] = useState('')
  const [availableQuantities, setAvailableQuantities] = useState([1])
  const [currentQuantity, setCurrentQuantity] = useState(1)
  const [outOfStock, setOutOfStock] = useState(false)

  // On style select, gets all the sizes based off of the style's id
  const retrieveSizesByStyle = (styleId) => {
    const sizes = [];
    for (let i = 0; i < props.styles.length; i++) {
      let style = props.styles[i];
      if (style.style_id === styleId) {
        for (let k in style.skus) {
          sizes.push(style.skus[k].size)
        }
        break;
      }
    }

    setAvailableSizes(sizes)
  }

  // On size select, retrieves quantities for that size
  const retrieveQuantitiesBySize = (size) => {
    let maxQuantity;

    for (let i = 0; i < props.styles.length; i++) {
      const style = props.styles[i];
      if (style.style_id === currentStyle.style_id) {
        for (let k in style.skus) {
          if (style.skus[k][size]) {
            maxQuantity = style.skus[k].quantity;
            if (style.skus[k].quantity < 1) {
              setOutOfStock(true);
            }
            break;
          }
        }
        break;
      }
    }

    if (maxQuantity < 15 && maxQuantity > 0) {
      let quantities = [];
      for (let i = 1; i <= maxQuantity; i++) {
        quantities.push(i);
      }
      setAvailableQuantities(quantities);
    } else if (maxQuantity >= 15) {
      setAvailableQuantities(DEFAULT_QUANTITIES);
    }
  }

  // On click, set state to reflect chosen style
  // Make sure that e.target.value is an ID number
  const handleStyleSelect = (style) => {
    retrieveSizesByStyle(style.style_id );
    setCurrentStyle(style);
  }

  // On change, updates state to reflect chosen size and hides 'Choose a size' error msg
  const handleSizeSelect = (e) => {
    document.querySelector('.size-error-msg').style.visibility = 'hidden';

    retrieveQuantitiesBySize( e.target.value );
    setCurrentSize(e.target.value);
  }

  // On click, set state to reflect chosen quantity
  const handleQuantitySelect = (e) => {
    setCurrentQuantity(e.target.value);
  }

  // On click, add current state of style to cart
  // If user has not selected a size, will render an error msg above the size dropdown menu
  const handleAddToCart = (e) => {
    if (!currentSize.length || currentSize === 'Please select a size') {
      document.querySelector('.size-error-msg').style.visibility = 'visible';
    } else {
      const item = {};
      for (let i = 0; i < props.styles.length; i++) {
        const style = props.styles[i];
        if (style.style_id === currentStyle.style_id) {
          for (let k in style.skus) {
            if (style.skus[k].size === currentSize) {
              item.sku_id = k;
              item.count = currentQuantity;
              break;
            }
          }
          break;
        }
      }

      props.addToCart(item);
    }
  }

  return (
    <div className='selectors'>
      <div className='style-selector'>
        <b>STYLE</b> > <em>{currentStyle ? currentStyle.name : 'Select a style'}</em>
        <br></br>
        <StyleSelector styles={props.styles} handleStyleSelect={handleStyleSelect} />
      </div>

      <div className='size-selector'>
        <div>
          <br></br>
          <b>SIZE</b> > <em>{currentSize ? currentSize : null }</em>
          <span
            className='size-error-msg'
            style={{
              visibility: 'hidden',
              color: 'red',
              fontStyle: 'italic'
            }}>
              Please select a size
            </span>
        </div>
        <SizeSelector
          currentSize={currentSize}
          availableSizes={availableSizes}
          handleSizeSelect={handleSizeSelect}
        />
      </div>

      <div className='quantity-selector'>
        <br></br>
        <div> <b>QUANTITY</b> > <em>{currentQuantity}</em> </div>
        <QuantitySelector outOfStock={outOfStock}
          quantities={availableQuantities}
          handleQuantitySelect={handleQuantitySelect}
        />
      </div>

      <br></br>
      { outOfStock ? <button>Out of Stock</button> : <button className='add-to-cart' onClick={handleAddToCart}>Add to Cart</button> }
    </div>
  )
}

export default Selectors;
