import React from 'react';
import { getSelectedSortByReviews } from '../../request.js';
import { SortByContainer, SortBySelect } from '../styles/reviews/SortBySelect.styled.js';

function SortBy({ setCurrentReviews, productId }) {
  const handleOnChange = e => {
    const selected = e.target.value;
    getSelectedSortByReviews(selected, productId)
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