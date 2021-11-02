import React, { useState, useEffect } from 'react';
import RatingScore from "./RatingScore.jsx";
import StarsChart from "./StarsChart.jsx"
import ComparisonScales from "./ComparisonScales.jsx";

function ReviewsColumn({ avgRating, reviews }) {
  // what props does this component need?
  // what state does this component need?

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (reviews.length !== 0) {
      setIsLoading(false)
    }
  }, [reviews])

  if (isLoading) {
    return <div>IS LOADING..</div>
  }


  return (
    <div className="reviews-column-container">
      <RatingScore avgRating={avgRating}/>
      <StarsChart reviews={reviews}/>
      <ComparisonScales/>
    </div>
  )
}

export default ReviewsColumn;