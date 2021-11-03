import React, {useState, useEffect} from 'react';

function StarsChart({ reviews }) {
  //once we get stars
  // get the keys

  const stars = [1, 2, 3, 4, 5];

  const [ratings, setRatings] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 })

  useEffect(() => {
    reviews.forEach(review => {
      const currentRating = review.rating;
      setRatings(prevState => ({
        ...prevState,
        [currentRating]: prevState[currentRating] + 1
      }))
    })
  }, [reviews])

  return (
    <div className="stars-chart">
      {stars.map(star => {
        return <div key={star} className="star-bar">{star} STARS: {ratings[star]}</div>
      })}
    </div>
  )
}

export default StarsChart;