import React, { useState, useEffect } from 'react';
import ReviewsColumn from './ReviewsColumn.jsx';
import ReviewsContainer from './ReviewsContainer.jsx';

function Reviews({ reviews }) {
  // what props does this component need?
  // what state does this component need?

  return (
    <div className="reviews-container">
      <div className="reviews-header">
        RATINGS & REVIEWS
      </div>
      <ReviewsColumn reviews={reviews} />
      <ReviewsContainer reviews={reviews} />
    </div>
  )
}

export default Reviews;