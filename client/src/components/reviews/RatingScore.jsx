import React, { useState, useEffect } from 'react';
import Score from './Score.jsx';
import Stars from './Stars.jsx';

function RatingScore({ reviews }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (reviews.length !== 0) {
      setIsLoading(false);
    }
  }, [reviews]);

  if (isLoading) {
    return <div>IS LOADING..</div>
  }

  const getAvgRating = () => {
    let sum = 0;
    for (let i = 0; i < reviews.length; i++) {
      let currentReview = reviews[i];
      sum += currentReview.rating;
    }
    let result = sum / reviews.length;
    return result;
  }

  const avgRating = getAvgRating();

  return (
    <div className="rating-score-container">
      <Score avgRating={avgRating}/>
      <Stars rating={avgRating}/>
    </div>
  )
}

export default RatingScore;