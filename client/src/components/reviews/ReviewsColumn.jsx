import React, { useState, useEffect } from 'react';
import RatingScore from "./RatingScore.jsx";
import StarsChart from "./StarsChart.jsx"
import ComparisonScales from "./ComparisonScales.jsx";
import { ReviewsColumnContainer } from "../styles/reviews/ReviewsColumnContainer.styled.js";
import { PercentBar } from "../styles/reviews/PercentBar.styled.js";

function ReviewsColumn({ reviews, productId, avgRating }) {
  const [ratings, setRatings] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 })
  const [numOfReviews, setNumOfReviews] = useState(null);
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
    setNumOfReviews(reviews.length)
    setRecommendPercent(getRecommendPercentage())
  }, [reviews])

  return (
    <ReviewsColumnContainer>
      <RatingScore reviews={reviews} numOfReviews={numOfReviews} avgRating={avgRating}/>
      <StarsChart ratings={ratings} numOfReviews={numOfReviews} />
      <PercentBar>
        {recommendPercent}% of reviews recommend this product
      </PercentBar>
      <ComparisonScales productId={productId} />
    </ReviewsColumnContainer>
  )
}

export default ReviewsColumn;