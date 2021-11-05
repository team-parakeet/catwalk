import React from 'react';
import axios from 'axios';
import { TOKEN } from '../../../../config.js';

function SortBy({ setCurrentReviews }) {

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
    <div className="sort=by=bar">
      Sorted by:
      <select onChange={handleOnChange}>
        <option value="relevance">relevance</option>
        <option value="helpful">helpful</option>
        <option value="newest">newest</option>
      </select>
    </div>
  )
}

export default SortBy;