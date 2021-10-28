import Review from 'Review.js';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props)
    // what props does this component need?
    // what state does this component need?
  }

  render() {
    return (
      <div class="reviews-list-container">
        <Review />
        {/* dynamically render single reviews */}
        <div class="reviews-buttons">
          <button class="more-reviews-button">MORE REVIEWS</button>
          <button class="add-review-button">ADD A REVIEW</button>
        </div>
      </div>
    )
  }
}

export default ReviewsList;