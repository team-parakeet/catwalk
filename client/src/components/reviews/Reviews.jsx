import React from 'react';
import ReviewsColumn from './ReviewsColumn.jsx';
import ReviewsContainer from './ReviewsContainer.jsx';
import { App } from './../styles/reviews/App.styled.js';
import { ReviewsHeader } from './../styles/reviews/ReviewsHeader.styled.js';

function Reviews({ reviews, productId }) {
  return (
    <App>
      <ReviewsHeader>
        Ratings & Reviews
      </ReviewsHeader>
      <ReviewsColumn reviews={reviews} productId={productId} />
      <ReviewsContainer reviews={reviews} productId={productId} />
    </App>
  )
}

export default Reviews;