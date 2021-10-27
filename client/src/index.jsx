import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    // TODO: What parts of state changes at this level?

    // TODO: Bind fns
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  // I am under construction :)
  // TODO: Build out
  addItemToCart( item ) {
    console.log(`Adding ${item} to cart!`);
  }

  render() {
    return (
      <div>
        <div className='overview'>
          <h2>Overview!</h2>
          <div className='image-gallery'>
            Image gallery here!
          </div>
          <div className='product-detail'>
            Product details here!
          </div>

          <div className='choose-styles'>
            <div className='style-selector'>
              Style selector here!
            </div>
            <div className='quantity-selector'>
              Quantity selector here!
            </div>
            <button className='add-to-cart'>Add to Cart</button>
          </div>
        </div>
        <br></br>
        <div className='ratings-and-reviews'>
          <h2>Ratings and reviews!</h2>
          <div className='write-new-review'>Write new review goes here!</div>
          <div className='reviews-list'>Reviews List
            <div>Individual review tile #1</div>
            <div>Individual review tile #2</div>
            <div>Individual review tile #3</div>
          </div>
        </div>
        <br></br>
        <div className='q-and-a'>
          <h2>Questions and answers!</h2>
          <div className='search-questions'>Search for questions here</div>
          <div className='questions-list'>Questions List
            <div>Individual question #1</div>
            <div>Individual question #2</div>
            <div>Individual question #3</div>
            More answered questions down below!
          </div>
          <button className='add-question'>Add a question</button>
          <button className='add-answer'>Add an answer [modal]</button>
        </div>
        <br></br>
        <div className='related-items-comparison'>
          <h2>Related items and comparison!</h2>
          <div className='related-products'>
            Not sure what goes in here yet
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));