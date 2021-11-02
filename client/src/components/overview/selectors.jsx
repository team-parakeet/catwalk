import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import StyleThumbnail from './styleThumbnail.jsx';

class Selectors extends React.Component {
  constructor(props) {
    super(props);
    // productId
    // product = obj of product info
    // styles = array of style thumbnail objects

    this.state = {
      currentStyle: '',
      availableSizes: [],
      currentSize: '',
      availableQuantities: [],
      currentQuantity: 1,
    };

    // Bind fns
    this.handleStyleSelect = this.handleStyleSelect.bind(this);
    this.retrieveSizesByStyle = this.retrieveSizesByStyle.bind(this);
    this.retrieveQuantitiesBySize = this.retrieveQuantitiesBySize.bind(this);
    this.handleSizeSelect = this.handleSizeSelect.bind(this);
    this.handleQuantitySelect = this.handleQuantitySelect.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  // On click, set state to reflect chosen style
  // TODO: Make sure that e.target.value is an ID number
  handleStyleSelect(e) {
    console.log('selected style: ', e.target.value);
    this.retrieveSizesByStyle( e.target.value );

    this.setState({
      ...this.state,
      currentStyle: e.target.value,
    });
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
      ...this.state,
      availableSizes: sizes,
    });
  }

  // On size select, retrieves quantities for that size
  retrieveQuantitiesBySize( size ) {
    let maxQuantity;

    for (let i = 0; i < this.props.styles.length; i++) {
      let style = this.props.styles[i];
      if (style.style_id === this.props.currentStyle) {
        for (let k in style.skus) {
          if (style.skus[k].size === size) {
            maxQuantity = style.skus[k].quantity;
            break;
          }
        }
        break;
      }
    }

    if (maxQuantity < 15) {
      let quantities = [];
      for (let i = 1; i <= maxQuantity; i++) {
        quantities.push(i);
      }
    } else {
      this.setState({
        ...this.state,
        availableQuantities: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      });
    }
  }

  handleSizeSelect(e) {
    let size = e.target.value;

    this.retrieveQuantitiesBySize( size )

    this.setState({
      ...this.state,
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
  handleAddToCart(e) {
    console.log(`Adding to the cart ${this.state.style}, ${this.state.quantity}`);
    this.props.addToCart({
      ...this.props.product,
      style: this.state.style,
      size: this.state.size,
      quantity: this.state.quantity,
    })
  }

  render() {
    return (
      <div className='selectors'>
        <div className='style-selector'>
          Style selector
          <br></br>
          { /* TODO: Map out `styles` props as thumbnails */ }
          <StyleThumbnail />
          <StyleThumbnail />
          <StyleThumbnail />
        </div>
        <br></br>
        <div className='size-selector'>
          <div>Size selector</div>
        </div>
        <div className='quantity-selector'>
          <div>Quantity selector</div>
          <div>For now, users can select up to a max of 15</div>
          <select onSelect={this.handleQuantitySelect}>
            { this.state.availableQuantities.map( (quantity, i) => (
              <option className='quantity-option' key={i}>{quantity}</option>
            )) }
          </select>
        </div>
        <br></br>
        <button className='add-to-cart' onClick={this.handleAddToCart}>Add to Cart</button>
      </div>
    )
  }
}

export default Selectors;