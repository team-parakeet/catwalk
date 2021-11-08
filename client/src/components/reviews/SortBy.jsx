import React from 'react';
import axios from 'axios';
import { TOKEN } from '../../../../config.js';
import { SortByContainer, SortBySelect } from '../styles/reviews/SortBySelect.styled.js';

function SortBy({ setCurrentReviews, productId }) {

  const handleOnChange = e => {
    const selected = e.target.value;
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/reviews/?sort=${selected}&product_id=${productId}&count=50`
    axios.get(url, {
      headers: {
        Authorization: TOKEN
      }
    })
    .then(r => setCurrentReviews(r.data.results))
  }

  return (
    <SortByContainer>
      Sorted by:
      <SortBySelect onChange={handleOnChange}>
        <option value="relevance">relevance</option>
        <option value="helpful">helpful</option>
        <option value="newest">newest</option>
      </SortBySelect>
    </SortByContainer>
  )
}

export default SortBy;