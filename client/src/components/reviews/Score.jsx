import React from 'react';
import { ScoreStyled } from '../styles/reviews/ScoreStyled.styled.js'

function Score({ avgRating }) {
  const formattedScore = avgRating.toFixed(1)
  return (
    <ScoreStyled>
      {formattedScore}
    </ScoreStyled>
  )
}

export default Score;