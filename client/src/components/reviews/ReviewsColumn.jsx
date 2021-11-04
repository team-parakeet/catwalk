import React, { useState, useEffect } from 'react';
import RatingScore from "./RatingScore.jsx";
import StarsChart from "./StarsChart.jsx"
import ComparisonScales from "./ComparisonScales.jsx";

function ReviewsColumn({ reviews }) {
  // what props does this component need?
  // what state does this component need?

  const [ratings, setRatings] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 })

  useEffect(() => {
    reviews.forEach(review => {
      const currentRating = review.rating;
      setRatings(prevState => ({
        ...prevState,
        [currentRating]: prevState[currentRating] + 1
      }))
    })
  }, [reviews])

  return (
    <div className="reviews-column-container">
      <RatingScore reviews={reviews}/>
      <StarsChart ratings={ratings}/>
      <ComparisonScales/>
    </div>
  )
}

export default ReviewsColumn;