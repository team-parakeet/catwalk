import React, { useState, useEffect } from 'react';
import ReviewsColumn from './ReviewsColumn.jsx';
import SortBy from './SortBy.jsx';
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
      </div>
      <div>
        <SortBy />
        <ReviewsList reviews={reviews}/>
      </div>
      <div className="reviews-buttons">
        {reviews.length > 2 ? <button className="more-reviews-button">MORE REVIEWS</button> : null}
        <button className="add-review-button">ADD A REVIEW</button>
      </div>
    </div>
  )
}

export default Reviews;