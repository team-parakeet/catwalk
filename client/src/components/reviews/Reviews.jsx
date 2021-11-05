import React from 'react';
import ReviewsColumn from './ReviewsColumn.jsx';
import ReviewsContainer from './ReviewsContainer.jsx';

function Reviews({ reviews, productId }) {
  return (
    <div className="reviews-container">
      <div className="reviews-header">
        RATINGS & REVIEWS
      </div>
      <ReviewsColumn reviews={reviews} productId={productId} />
      <ReviewsContainer reviews={reviews} productId={productId} />
    </div>
  )
}

export default Reviews;