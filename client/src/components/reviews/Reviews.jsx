import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TOKEN } from '../../../../config.js';
import ReviewsColumn from './ReviewsColumn.jsx';
import ReviewsList from './ReviewsList.jsx';

function Reviews({ reviews }) {
  // what props does this component need?
  // what state does this component need?
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
    //take the value and send a request to fetch data by relevance
    const selected = e.target.value;
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/reviews/?sort=${selected}&product_id=39333`
    // get request
    axios.get(url, {
      headers: {
        Authorization: TOKEN
      }
    })
    .then(r => setCurrentReviews(r.data.results))
  }

  return (
    <div className="reviews-container">
      <div className="reviews-header">
        RATINGS & REVIEWS
      </div>
      <div>
        <ReviewsColumn reviews={reviews} />
      </div>
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
      </div>
      <div className="reviews-buttons">
        {reviews.length > 2 ? <button className="more-reviews-button">MORE REVIEWS</button> : null}
        <button className="add-review-button">ADD A REVIEW</button>
      </div>
    </div>
  )
}

export default Reviews;