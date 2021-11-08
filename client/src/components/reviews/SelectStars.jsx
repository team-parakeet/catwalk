import React from 'react';
import StarRatings from 'react-star-ratings';

function SelectStars({ handleStarChangeOnClick, overallRating }) {
  return (
    <div>
      <StarRatings
        rating={overallRating}
        changeRating={handleStarChangeOnClick}
        starDimension="15px"
        starSpacing="0px"
        starHoverColor='rgb(230, 67, 47)'
        starEmptyColor='rgb(203, 211, 227)'
      />
    </div>
  )
}

export default SelectStars;