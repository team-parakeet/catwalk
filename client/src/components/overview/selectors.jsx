import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import StyleThumbnail from './styleThumbnail.jsx';

let dummyData = [1, 2, 3];

class Selectors extends React.Component {
  constructor(props) {
    super(props);
    // styles = list of style thumbnails
    // quantity = array of max quantity of stock available

    this.state = {
      currentStyle: '',
      currentQuantity: 1,
    };

    // TODO: Bind fns
    this.handleStyleSelect = this.handleStyleSelect.bind(this);
    this.handleQuantitySelect = this.handleQuantitySelect.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  // TODO: On mount, load all styles and quantity for specific item
  componentDidMount() {
    console.log('Component mounted');
  }

  // TODO: On click, set state to reflect chosen style
  handleStyleSelect(e) {
    this.setState({
      ...this.state,
      currentStyle: e.target.value,
    })

    // TODO: Retrieve new style's available stock

    // If the max <= 15, have select menu options go only to max

    // Else, have select menu options go to 15

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
        </div>
        <br></br>
        <div className='quantity-selector'>
          <div>Quantity selector</div>
          <div>For now, users can select up to a max of 15</div>
          <select onSelect={this.handleQuantitySelect}>
            { dummyData.map( (data) => (
              <option className='quantity-option'>{data}</option>
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