import React from 'react';
import RatingScore from "./RatingScore.jsx";
import StarsChart from "./StarsChart.jsx"
import ComparisonScales from "./ComparisonScales.jsx";

class ReviewsColumn extends React.Component {
  constructor(props) {
    super(props)
    // what props does this component need?
    // what state does this component need?
  }

  render() {
    return (
      <div className="reviews-column-container">
        <RatingScore />
        <StarsChart />
        <ComparisonScales/>
      </div>
    )
  }
}

export default ReviewsColumn;