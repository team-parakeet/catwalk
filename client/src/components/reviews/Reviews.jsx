import React from 'react';
import ReviewsColumn from './ReviewsColumn.jsx';
import ReviewsList from './ReviewsList.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    // what props does this component need?
    // what state does this component need?
  }

  render() {
    return (
      <div className="reviews-container">
        <div className="reviews-header">
          RATINGS & REVIEWS
        </div>
        <div>
          <ReviewsColumn />
          <ReviewsList />
        </div>
      </div>
    )
  }
}

export default Reviews;