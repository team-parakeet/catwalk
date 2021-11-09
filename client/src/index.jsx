import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import { TOKEN } from '../../config.js';
import ProductDetails from './components/overview/productDetails.jsx';
import ProductDescription from './components/overview/productDescription.jsx';
import Selectors from './components/overview/selectors.jsx';
import Reviews from './components/reviews/Reviews.jsx';

// Overview imports
import { OverviewProvider } from './components/overview/OverviewContext.jsx';
import { DefaultView } from './components/overview/DefaultView.jsx';

// Q&A imports
import { Provider as QAProvider } from './components/QA/QAContext.jsx';
import QuestionsAnswers from './components/QA/QASection.jsx';
import Loader from 'react-loader-spinner';
import { LoaderWrapper } from './components/styles/reviews/ReviewsWrapper.styled.js';

const SiteWrapper = styled.div`
  border: hsla(205, 37%, 60%, 50%) solid 5px;
  padding: 10px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      styles: [],
      reviews: [],
      rating: 0,
    };

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
        Authorization: `${TOKEN}`,
      },
    };

    axios(config)
      .then(results => {
        this.setState({
          product: results.data,
        });
        this.getStyles();
        this.getReviews();
        this.getAvgRating();
      })
      .catch(err => {
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
        Authorization: `${TOKEN}`,
      },
    };

    axios(config)
      .then(styles => {
        this.setState({
          styles: styles.data.results,
        });
      })
      .catch(err => {
        console.error(err);
        console.error('index.jsx | failed to get styles');
      });
  }

  // GET all reviews for a product
  getReviews() {
    const config = {
      method: 'get',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/reviews/?sort="relevant"&product_id=${this.props.productId}&count=50`,
      headers: {
        Authorization: `${TOKEN}`,
      },
    };

    axios(config)
      .then( (reviews) => {
        this.setState({
          reviews: reviews.data.results
        });
        this.getAvgRating();
      })
      .catch(err => {
        console.error(err);
        console.error('index.jsx | failed to fetch reviews');
      });
  }

  // POST the item obj to the API
  addItemToCart(item) {
    let config = {
      method: 'post',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/cart`,
      headers: {
        Authorization: `${TOKEN}`,
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(item),
    };

    axios(config).catch(err => {
      console.error(err);
    });
  }

  getAvgRating() {
    if (this.state.reviews.length !== 0) {
      let sum = 0;
      for (let i = 0; i < this.state.reviews.length; i++) {
        let currentReview = this.state.reviews[i];
        sum += currentReview.rating;
      }
      let avg = sum / this.state.reviews.length;
      console.log('AVG: ', avg);
      this.setState({
        rating: avg
      })
    }
  }

  render() {
    return (
      <div>
        <SiteWrapper>
            {/* TODO: Wrap the image gallery and product-details in a grid container for reponsive layout on mobile */}
            <OverviewProvider>
              <div className="image-gallery">
                <DefaultView />
              </div>
              <ProductDetails product={this.state.product} rating={this.state.rating}/>
              <br></br>
              <Selectors
                addToCart={this.addItemToCart}
                styles={this.state.styles}
                product={this.state.product}
                productId={this.props.productId}
              />
              <br></br>
              <ProductDescription product={this.state.product} />
            </OverviewProvider>
          <br></br>
          <div className="ratings-and-reviews">
            {this.state.reviews.length === 0 ?
             (<LoaderWrapper>
                <Loader
                  type="TailSpin"
                  color="#d3d3d3"
                  height={100}
                  width={100}
                />
              </LoaderWrapper>)
              :
              (<Reviews reviews={this.state.reviews} productId={this.props.productId} avgRating={this.state.rating}/>
            )}
          </div>
          <br></br>
          <div className="q-and-a">
            <QAProvider>
              <QuestionsAnswers />
              <button className="add-question">Add a question</button>
              <button className="add-answer">Add an answer [modal]</button>
            </QAProvider>
          </div>
        </SiteWrapper>
      </div>
    );
  }
}

ReactDOM.render(<App productId={39333} />, document.getElementById('app'));
