import React, { useEffect } from 'react';
import { StarsStyled, Rating1, Rating2 } from '../styles/shared/StarsStyled.styled.js';

function Stars({ rating = 0, id }) {
  const id2 = 521 + (id * 17);
  useEffect(() => {
    if (rating) {
      const ratingElement1 = document.getElementById(id)
      const ratingElement2 = document.getElementById(id2)
      const ratingElementWidth = ratingElement2.clientWidth;
      const roundedRating = (Math.round(rating * 4) / 4).toFixed(2);

      function setRating(stars) {
        ratingElement1.style.width = Math.round(ratingElementWidth * (stars / 5)) + 'px';
      }
      setRating(roundedRating)
    }
  }, [rating])


  return (
    <StarsStyled>
      <Rating1 id={id}></Rating1>
      <Rating2 id={id2}></Rating2>
    </StarsStyled>
  )
}


export default Stars;