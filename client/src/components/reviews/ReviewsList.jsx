import React from 'react';
import Review from './Review.jsx';

function ReviewsList({ reviews }) {
  // what props does this component need?
  // what state does this component need?
  return (
    <div className="reviews-list-container">
      REVIEWS:
      {reviews.map(review => {
        return <Review review={review}/>
      })}
    </div>
  )
}


export default ReviewsList;