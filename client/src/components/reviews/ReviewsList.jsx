import React, { useEffect, useState } from 'react';
import Review from './Review.jsx';

function ReviewsList({ reviews }) {
  if (!reviews) {
    return null;
  }

  return (
    <div className="reviews-list-container">
      REVIEWS:
      {reviews.map(review => {
        return <Review key={review.review_id} review={review}/>
      })}
    </div>
  )
}

export default ReviewsList;