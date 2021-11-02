import React, { useState, useEffect } from 'react';
import ReviewsColumn from './ReviewsColumn.jsx';
import ReviewsList from './ReviewsList.jsx';

function Reviews({ reviews }) {
  // what props does this component need?
  // what state does this component need?

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (reviews.length !== 0) {
      setIsLoading(false);
    }
  }, [reviews]);

  const getAvgRating = () => {
    let sum = 0;
    for (let i = 0; i < reviews.length; i++) {
      let currentReview = reviews[i];
      sum += currentReview.rating;
    }
    let result = sum / reviews.length;
    return result;
  }

  if (isLoading) {
    return <div>IS LOADING..</div>
  }

  const avgRating = getAvgRating();

  return (
    <div className="reviews-container">
      <div className="reviews-header">
        RATINGS & REVIEWS
      </div>
      <div>
        <ReviewsColumn avgRating={avgRating} reviews={reviews}/>
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