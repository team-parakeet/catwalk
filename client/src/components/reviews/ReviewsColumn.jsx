import RatingScore from "./RatingScore.js";
import StarsChart from "./StarsChart.js"
import ComparisonScales from "./ComparisonScales.js";

class ReviewsColumn extends React.Component {
  constructor(props) {
    super(props)
    // what props does this component need?
    // what state does this component need?
  }

  render() {
    return (
      <div class="reviews-column-container">
        <RatingScore />
        <StarsChart />
        <ComparisonScales/>
      </div>
    )
  }
}

export default ReviewsColumn;