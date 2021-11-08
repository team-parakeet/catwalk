import React from 'react';
import Slider from './Slider.jsx';
import { StarsChartStyled, StarBar } from '../styles/reviews/StarsChartStyled.styled.js';

function StarsChart({ ratings, numOfReviews }) {

  const stars = [5, 4, 3, 2, 1];

  return (
    <StarsChartStyled>
      {stars.map(star => {
        return (
        <StarBar key={star}>
          {star} stars: <span>
          <Slider id={star} value={ratings[star]} max={numOfReviews} />
          </span>
          {ratings[star]}
        </StarBar>
      )})}
    </StarsChartStyled>
  )
}

export default StarsChart;