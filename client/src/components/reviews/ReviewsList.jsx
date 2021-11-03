import React, { useState } from 'react';
import Review from './Review.jsx';

function ReviewsList({ reviews }) {
  // what props does this component need?
  // what state does this component need?
  const [numReviewsShown, setNumReviewsShown] = useState(2);

  const handleOnClick = () => {
    numReviewsShown + 2 <= reviews.length ? setNumReviewsShown(prev => prev + 2) : setNumReviewsShown(reviews.length)
  }

  if (reviews.length === 0) {
    return null;
  }

  const reviewsToShow = reviews.slice(0, numReviewsShown);

  return (
    <div className="reviews-list-container">
      REVIEWS:
      {reviewsToShow.map(review => {
        return <Review key={review.review_id} review={review}/>
      })}
      <div className="reviews-buttons">
        {reviews.length < 2 || reviewsToShow.length === reviews.length ? null : <button className="more-reviews-button" onClick={handleOnClick}>MORE REVIEWS</button> }
        <button className="add-review-button">ADD A REVIEW</button>
      </div>
    </div>
  )
}


export default ReviewsList;