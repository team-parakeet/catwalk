import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import StyleThumbnail from './styleThumbnail.jsx';

let dummyData = [1, 2, 3];

class Selectors extends React.Component {
  constructor(props) {
    super(props);
    // productId
    // styles = array of style thumbnail objects
    // quantity = array of numbers representing max quantity of stock available

    this.state = {
      currentStyle: '',
      currentSize: '',
      currentQuantity: 1,
    };

    // TODO: Bind fns
    this.handleStyleSelect = this.handleStyleSelect.bind(this);
    this.retrieveSizesByStyle = this.retrieveSizesByStyle.bind(this);
    this.retrieveQuantitiesBySize = this.retrieveQuantitiesBySize.bind(this);
    this.handleSizeSelect = this.handleSizeSelect.bind(this);
    this.handleQuantitySelect = this.handleQuantitySelect.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  // TODO: On click, set state to reflect chosen style
  handleStyleSelect(e) {
    retrieveSizesByStyle( e.target.value );

    this.setState({
      ...this.state,
      currentStyle: e.target.value,
    });
  }

  // TODO: Get all the sizes for the selected style
  retrieveSizesByStyle( style ) {
    // If the max <= 15, have select menu options go only to max

    // Else, have select menu options go to 15

  }

  // TODO: On style select, make API call to retrieve its quantities
  retrieveQuantitiesBySize( size ) {
    axios.get(`products/${this.props.productId}/styles`)
      .then( (styles) => {
        // styles.results[ productObj, productObj, productObj ]
        // productObj.skus => { id: {quantity, size}, id: {quantity, size}, id: {quantity, size} }
      })
      .catch( (err) => {
        console.error(err);
        console.error('selectors.jsx | failed to retrieve quantities')
      })
  }

  handleSizeSelect(e) {
    let size = e.target.value;

    // TODO: Retrieve quantities for selected size

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

  // TODO: On click, add current state of style to cart
  handleAddToCart(e) {
    console.log(`Adding to the cart ${this.state.style}, ${this.state.quantity}`);
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
            { dummyData.map( (data, i) => (
              <option className='quantity-option' key={i}>{data}</option>
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