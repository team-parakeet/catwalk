import React, { useState, useEffect } from 'react';
import Score from './Score.jsx';
import Stars from './Stars.jsx';

function RatingScore({ reviews }) {
  const [avgRating, setAvgRating] = useState(null);

  useEffect(() => {
    const getAvgRating = () => {
      let sum = 0;
      for (let i = 0; i < reviews.length; i++) {
        let currentReview = reviews[i];
        sum += currentReview.rating;
      }
      let result = sum / reviews.length;
      return result;
    }
    setAvgRating(getAvgRating())
  }, [reviews])

  if (!avgRating) {
    return null
  }

  return (
    <div className="rating-score-container">
      <Score avgRating={avgRating}/>
      <Stars avgRating={avgRating}/>
    </div>
  )
}

export default RatingScore;