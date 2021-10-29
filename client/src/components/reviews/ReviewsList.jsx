import React from 'react';
import Review from './Review.jsx';

class ReviewsList extends React.Component {
  constructor(props) {
    super(props)
    // what props does this component need?
    // what state does this component need?
  }

  render() {
    return (
      <div className="reviews-list-container">
        <Review />
        {/* dynamically render single reviews */}
        <div className="reviews-buttons">
          <button className="more-reviews-button">MORE REVIEWS</button>
          <button className="add-review-button">ADD A REVIEW</button>
        </div>
      </div>
    )
  }
}

export default ReviewsList;