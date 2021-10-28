import Score from './Score.js';
import Stars from './Stars.js';

function RatingScore(props) {
  return (
    <div class="rating-score-container">
      <Score />
      <Stars />
    </div>
  )
}

export default RatingScore;