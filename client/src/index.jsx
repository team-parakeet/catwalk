import React, { useState, useEffect } from 'react';
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

// Review imports
import { getReviews } from './request.js';
import { LoaderWrapper } from './components/styles/reviews/LoaderWrapper.styled.js';

const SiteWrapper = styled.div`
  border: hsla(205, 37%, 60%, 50%) solid 5px;
  padding: 10px;
`;

const App = ( {productId} ) => {
  const [product, setProduct] = useState({});
  const [styles, setStyles] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);

  // On mount, retrieve product and styles
  useEffect( () => {
    const config = {
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/products/39333',
      headers: {
        Authorization: `${TOKEN}`,
      },
    };

    axios(config)
      .then(results => {
        setProduct(results.data);
        getStyles();
      })
      .catch(err => {
        console.error(err);
      });

    fetchReviews();
  }, []);

  useEffect(() => {
    if (reviews.length !== 0) {
      setRating(getAvgRating());
    }
  }, [reviews])

  // Retrieve product's styles from API, set state to reflect those styles
  const getStyles = () => {
    const config = {
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/products/39333/styles',
      headers: {
        Authorization: `${TOKEN}`,
      },
    };

    axios(config)
      .then(styles => {
        setStyles(styles.data.results);
      })
      .catch(err => {
        console.error(err);
      });
  }

  // POST the item obj to the API
  const addItemToCart = (item) => {
    let config = {
      method: 'post',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/cart`,
      headers: {
        Authorization: `${TOKEN}`,
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(item),
    };

    axios(config)
      .catch(err => {
        console.error(err);
      });
  }

  const fetchReviews = () => {
    getReviews(productId)
    .then(reviews => {
      setReviews(reviews.data.results);
    })
    .catch(err => {
      console.error(err);
    });
  }

  const getAvgRating = () => {
    if (reviews.length !== 0) {
      let sum = 0;
      for (let i = 0; i < reviews.length; i++) {
        let currentReview = reviews[i];
        sum += currentReview.rating;
      }
      let avg = sum / reviews.length;
      return avg;
    }
  }

  return (
    <div>
      <SiteWrapper>
        { /* TODO: Wrap the image gallery and product-details in a grid container for responsive layout on mobile */ }
        <OverviewProvider>
          <div className="image-gallery">
            { styles.length && <DefaultView
              product={product}
              productId={productId}
              styles={styles}
              rating={rating}
              addItemToCart={addItemToCart}
            /> }
          </div>
          <br></br>
          <ProductDescription product={product} />
        </OverviewProvider>
        <br></br>
        <hr></hr>
        <br></br>
        <div className="ratings-and-reviews">
          {reviews.length === 0 ?
            (<LoaderWrapper>
              <Loader
                type="TailSpin"
                color="#d3d3d3"
                height={100}
                width={100}
              />
            </LoaderWrapper>)
            :
            (<Reviews reviews={reviews} productId={productId} avgRating={rating} fetchReviews={fetchReviews}/>
          )}
        </div>
        <br></br>
        <hr></hr>
        <br></br>
        <div className="q-and-a">
          <QAProvider>
            <QuestionsAnswers />
          </QAProvider>
        </div>
      </ SiteWrapper>
    </div>
  );
}

ReactDOM.render(<App productId={39333} />, document.getElementById('app'));