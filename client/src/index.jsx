import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { TOKEN } from '../../config.js';
import Selectors from './components/overview/selectors.jsx';
import Reviews from './components/reviews/Reviews.jsx';
import QuestionsAnswers from './components/QA/QASection.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    // For our progress demo, we've hard-coded an ID of `39333`

    // TODO: What parts of state changes at this level?
    this.state = {
      product: {},
      styles: [],
      reviews: [],
    };

    // TODO: Bind fns
    this.getStyles = this.getStyles.bind(this);
    this.getReviews = this.getReviews.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  // On mount, retrieve product and styles
  componentDidMount() {
    const config = {
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/products/39333',
      headers: {
        'Authorization': `${TOKEN}`,
      }
    };

    axios(config)
      .then( () => {
        this.getStyles();
        this.getReviews();
      })
      .catch( (err) => {
        console.error(err);
        console.error('index.jsx | mount failed');
      });
  }

  // Retrieve product's styles from API, set state to reflect those styles
  getStyles() {
    const config = {
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/products/39333/styles',
      headers: {
        'Authorization': `${TOKEN}`,
      }
    };

    axios(config)
      .then( (styles) => {
        this.setState({
          ...this.state,
          styles: styles.data.results,
        });
      })
      .catch( (err) => {
        console.error(err);
        console.error('index.jsx | failed to get styles');
      });
  }

  // TODO: GET all reviews for a product
  getReviews() {
    const config = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/reviews/?sort="relevant"&product_id=${this.props.productId}`,
      headers: {
        'Authorization': `${TOKEN}`,
      }
    };

    axios(config)
      .then( (reviews) => {
        console.log('reviews: ', reviews.data.results);

        this.setState({
          ...this.state,
          reviews: reviews.data.results
        })
      })
      .catch( (err) => {
        console.error(err);
        console.error('index.jsx | failed to fetch reviews');
      })
  }

  // TODO: POST the item obj to the API
  addItemToCart( item ) {

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
          <br></br>
          { /* Selectors should receive current item's styles and quantities */}
          <Selectors addItemToCart={this.addItemToCart} styles={this.state.styles}/>
        </div>
        <br></br>
        <div className='ratings-and-reviews'>
          <h2>Ratings and reviews!</h2>
          <Reviews reviews={this.state.reviews}/>
        </div>
        <br></br>
        <div className='q-and-a'>
          <h2>Questions and answers!</h2>
          <QuestionsAnswers />
          {/* <div className='search-questions'>Search for questions here</div>
          <div className='questions-list'>Questions List
            <div>Individual question #1</div>
            <div>Individual question #2</div>
            <div>Individual question #3</div>
            More answered questions down below!
          </div> */}
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

ReactDOM.render(<App productId={39333}/>, document.getElementById('app'));
