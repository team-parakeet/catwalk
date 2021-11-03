import React, { useState, useEffect } from 'react';
import ReviewsColumn from './ReviewsColumn.jsx';
import ReviewsList from './ReviewsList.jsx';

function Reviews({ reviews }) {
  // what props does this component need?
  // what state does this component need?

  return (
    <div className="reviews-container">
      <div className="reviews-header">
        RATINGS & REVIEWS
      </div>
      <div>
        <ReviewsColumn reviews={reviews} />
        <ReviewsList reviews={reviews}/>
      </div>
      <div className="reviews-buttons">
        <button className="more-reviews-button">MORE REVIEWS</button>
        <button className="add-review-button">ADD A REVIEW</button>
      </div>
    </div>
  )
}

export default Reviews;