import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewsList from './ReviewsList.jsx';
import { TOKEN } from '../../../../config.js';

function ReviewsContainer({reviews}) {
  const [currentReviews, setCurrentReviews] = useState(null);

  useEffect(() => {
    if (reviews.length !== 0) {
      setCurrentReviews(reviews)
    }
  }, [reviews])

  if (!currentReviews) {
    return null
  }

  const handleOnChange = e => {
    const selected = e.target.value;
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/reviews/?sort=${selected}&product_id=39333`
    axios.get(url, {
      headers: {
        Authorization: TOKEN
      }
    })
    .then(r => setCurrentReviews(r.data.results))
  }

  return (
    <div>
      <div className="sort=by=bar">
        Sorted by:
        <select onChange={handleOnChange}>
          <option value="relevance">relevance</option>
          <option value="helpful">helpful</option>
          <option value="newest">newest</option>
        </select>
      </div>
      <ReviewsList reviews={currentReviews}/>
      {/* <div className="reviews-buttons">
        {currentReviews.length > 2 ? <button className="more-reviews-button">MORE REVIEWS</button> : null}
        <button className="add-review-button">ADD A REVIEW</button>
      </div> */}
    </div>
  )
}


export default ReviewsContainer;