import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import StyleSelector from './styleSelector.jsx';
import StyleThumbnail from './styleThumbnail.jsx';
import styled from 'styled-components';

class Selectors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStyle: '',
      availableSizes: [],
      currentSize: '',
      availableQuantities: [1],
      currentQuantity: 1,
      outOfStock: false,
    };

    // Bind fns
    this.handleStyleSelect = this.handleStyleSelect.bind(this);
    this.retrieveSizesByStyle = this.retrieveSizesByStyle.bind(this);
    this.retrieveQuantitiesBySize = this.retrieveQuantitiesBySize.bind(this);
    this.handleSizeSelect = this.handleSizeSelect.bind(this);
    this.handleQuantitySelect = this.handleQuantitySelect.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  // On style select, gets all the sizes based off of the style's id
  retrieveSizesByStyle( styleId ) {
    let sizes = [];
    for (let i = 0; i < this.props.styles.length; i++) {
      let style = this.props.styles[i];
      if (style.style_id === styleId) {
        for (let k in style.skus) { sizes.push(style.skus[k].size) }
        break;
      }
    }
    this.setState({
      availableSizes: sizes,
    });
  }

  // On size select, retrieves quantities for that size
  retrieveQuantitiesBySize( size ) {
    let maxQuantity;

    for (let i = 0; i < this.props.styles.length; i++) {
      let style = this.props.styles[i];
      if (style.style_id === this.state.currentStyle) {
        for (let k in style.skus) {
          if (style.skus[k].size === size) {
            maxQuantity = style.skus[k].quantity;
            if (style.skus[k].quantity < 1) {
              this.setState({
                outOfStock: true
              });
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
      this.setState({
        availableQuantities: quantities,
      });
    } else if (maxQuantity >= 15) {
      this.setState({
        availableQuantities: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      });
    }
  }

  // On click, set state to reflect chosen style
  // Make sure that e.target.value is an ID number
  handleStyleSelect(styleId) {
    this.retrieveSizesByStyle( styleId );

    this.setState({
      currentStyle: styleId,
    });
  }

  // On click, updates state to reflect chosen size and hides 'Choose a size' error msg
  handleSizeSelect(e) {
    document.querySelector('.size-error-msg').style.visibility = 'hidden';

    this.retrieveQuantitiesBySize( e.target.value );
    this.setState({
      currentSize: e.target.value,
    });
  }

  // On click, set state to reflect chosen quantity
  handleQuantitySelect(e) {
    this.setState({
      ...this.state,
      currentQuantity: e.target.value,
    })
  }

  // On click, add current state of style to cart
  // If user has not selected a size, will render an error msg above the size dropdown menu
  handleAddToCart(e) {
    if (!this.state.currentSize.length) {
      document.querySelector('.size-error-msg').style.visibility = 'visible';
    } else {
      let item = {};
      for (let i = 0; i < this.props.styles.length; i++) {
        let style = this.props.styles[i];
        if (style.style_id === this.state.currentStyle) {
          for (let k in style.skus) {
            if (style.skus[k].size === this.state.currentSize) {
              item.sku_id = k;
              item.count = this.state.currentQuantity;
              break;
            }
          }
          break;
        }
      }

      this.props.addToCart(item);
    }
  }

  render() {
    return (
      <div className='selectors'>
        <div className='style-selector'>
          STYLE > {this.state.currentStyle}
          <br></br>
          <StyleSelector styles={this.props.styles} handleStyleSelect={this.handleStyleSelect} />
        </div>
        <br></br>
        <div className='size-selector'>
          <div className='size-error-msg' style={{visibility: 'hidden', color: 'red'}}>Please select a size</div>
          <div>SIZE > {this.state.currentSize ? this.state.currentSize : null}</div>
          <select className='size-select'
            value={this.state.currentSize}
            onChange={this.handleSizeSelect}>
            <option>Select a size</option>
            { this.state.availableSizes.length ? this.state.availableSizes.map( (size, i) => (
              <option className='size-option' key={i} value={size}>{size}</option>
            )) : null }
          </select>
        </div>

        <div className='quantity-selector'>
          <div>QUANTITY > {this.state.currentQuantity}</div>
          <select onChange={this.handleQuantitySelect}>
            { this.state.outOfStock ? <option>Out of Stock</option> : this.state.availableQuantities.map( (quantity, i) => (
              <option className='quantity-option' key={i} value={quantity}>{quantity}</option>
            )) }
          </select>
        </div>

        <br></br>
        { this.state.outOfStock ? <button>Out of Stock</button> : <button className='add-to-cart' onClick={this.handleAddToCart}>Add to Cart</button> }
      </div>
    )
  }
}

export default Selectors;