import React, { useState, useEffect } from 'react';
import Score from './Score.jsx';
import Stars from './Stars.jsx';

function RatingScore({ reviews }) {
  const [avgRating, setAvgRating] = useState('');
  const [numOfReviews, setNumOfReviews] = useState(null);

  useEffect(() => {
    if (reviews.length !== 0) {
      const getAvgRating = () => {
        let sum = 0;
        for (let i = 0; i < reviews.length; i++) {
          let currentReview = reviews[i];
          sum += currentReview.rating;
        }
        return sum / reviews.length;
      }
      setAvgRating(getAvgRating())
      setNumOfReviews(reviews.length)
    }
  }, [reviews])

  if (!avgRating || reviews.length === 0) {
    return null
  }

  return (
    <div className="rating-score-container">
      <Score avgRating={avgRating}/>
      {/* <Stars avgRating={avgRating}/> */}
      <div className="number-of-reviews-bar">
        {numOfReviews} reviews
      </div>
    </div>
  )
}

export default RatingScore;