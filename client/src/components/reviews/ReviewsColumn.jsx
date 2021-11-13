import React, { useState, useEffect } from 'react';
import RatingScore from "./RatingScore.jsx";
import StarsChart from "./StarsChart.jsx"
import ComparisonScales from "./ComparisonScales.jsx";
import { ReviewsColumnContainer, PercentBar } from "../styles/reviews/ReviewsColumnStyled.styled.js";

function ReviewsColumn({ reviews, productId, avgRating }) {
  const [ratings, setRatings] = useState({})
  const [recommendPercent, setRecommendPercent] = useState(null);

  useEffect(() => {

    const newRatings = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }

    reviews.forEach(review => {
      const currentRating = review.rating;
      newRatings[currentRating] = newRatings[currentRating] + 1
      console.log(newRatings)
      setRatings(newRatings)
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

  const numOfReviews = reviews.length;

  console.log(ratings)

  return (
    <ReviewsColumnContainer>
      <RatingScore reviews={reviews} avgRating={avgRating} numOfReviews={numOfReviews} />
      <StarsChart ratings={ratings} numOfReviews={numOfReviews} />
      <PercentBar>
        {recommendPercent}% of reviews recommend this product
      </PercentBar>
      <ComparisonScales productId={productId} />
    </ReviewsColumnContainer>
  )
}

export default ReviewsColumn;