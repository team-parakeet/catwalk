import React, { useState, useEffect } from 'react';
import RatingScore from "./RatingScore.jsx";
import StarsChart from "./StarsChart.jsx"
import ComparisonScales from "./ComparisonScales.jsx";

function ReviewsColumn({ reviews }) {
  const [ratings, setRatings] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 })
  const [recommendPercent, setRecommendPercent] = useState(null);

  useEffect(() => {
    reviews.forEach(review => {
      const currentRating = review.rating;
      setRatings(prevState => ({
        ...prevState,
        [currentRating]: prevState[currentRating] + 1
      }))
    })

    const getRecommendPercentage = () => {
      let sum = 0;
      for (let i = 0; i < reviews.length; i++) {
        let currentReview = reviews[i];
        if (currentReview.recommend) {
          sum += 1;
        }
      }
      return Math.round((sum / reviews.length) * 100);
    }
    setRecommendPercent(getRecommendPercentage())
  }, [reviews])

  return (
    <div className="reviews-column-container">
      <RatingScore reviews={reviews}/>
      <StarsChart ratings={ratings}/>
      <div className="recommend-percent-bar">
        {recommendPercent}% of reviews recommend this product
      </div>
      <ComparisonScales/>
    </div>
  )
}

export default ReviewsColumn;