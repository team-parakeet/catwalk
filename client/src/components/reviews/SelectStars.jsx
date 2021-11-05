import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

function SelectStars() {

  const [stars, setStars] = useState(0)

  const handleChangeOnClick = e => {
    setStars(e)
  }

  return (
    <div>
      <StarRatings
        rating={stars}
        changeRating={handleChangeOnClick}
        starDimension="15px"
        starSpacing="0px"
        starHoverColor='rgb(230, 67, 47)'
        starEmptyColor='rgb(203, 211, 227)'
      />
    </div>
  )
}

export default SelectStars;