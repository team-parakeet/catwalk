import React, { useState, useEffect } from 'react';
import Score from './Score.jsx';
import Stars from './Stars.jsx';

function RatingScore({ reviews }) {
  const [avgRating, setAvgRating] = useState(null);
  const [numOfReviews, setNumOfReviews] = useState(null);

  // var number = (4.1428571428571429 + 4.0000000000000000 + 4.3333333333333333 + 4.0000000000000000) / 4
  // var rounded = Math.round(number * 10) / 10

  // var number = 4
  // var rounded = number.toFixed(1)

  // console.log(rounded)

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
      <Stars avgRating={avgRating}/>
      <div className="number-of-reviews-bar">
        {numOfReviews} reviews
      </div>
    </div>
  )
}

export default RatingScore;