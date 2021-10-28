import ReviewsHeader from './ReviewsHeader.js';
import ReviewsColumn from './ReviewsColumn.js';
import ReviewsList from './ReviewsList.js';

class Reviews extends React.Component {
  constructor(props) {
    super(props)
    // what props does this component need?
    // what state does this component need?
  }

  render() {
    return (
      <div class="reviews-container">
        <ReviewsHeader />
        <div>
          <ReviewsColumn />
          <ReviewsList />
        </div>
      </div>
    )
  }
}

export default Reviews;