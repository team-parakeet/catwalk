import React, { useState, useEffect } from 'react';
import RatingScore from "./RatingScore.jsx";
import StarsChart from "./StarsChart.jsx"
import ComparisonScales from "./ComparisonScales.jsx";

function ReviewsColumn({ reviews }) {
  // what props does this component need?
  // what state does this component need?

  return (
    <div className="reviews-column-container">
      <RatingScore reviews={reviews}/>
      <StarsChart reviews={reviews}/>
      <ComparisonScales/>
    </div>
  )
}

export default ReviewsColumn;