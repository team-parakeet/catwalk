import React from 'react';
import { ReviewModalWindowStyled } from '../styles/reviews/ModalStyled.styled';
import SelectStars from '../shared/SelectStars.jsx';

function ReviewModal({ setOverallRating, setIsRecommended, setReviewSummary, setReviewBody, setUsername, setEmail, characteristics, setCharRating }) {
  const handleStarRatingOnChange = e => {
    const rating = Number(e.target.value);
    setOverallRating(rating);
  };

  const handleCharRadioOnChange = e => {
    const charId = e.target.name.toString()
    const rating = Number(e.target.value)
    setCharRating(prev => ({
      ...prev, [charId]: rating
    }))
  }

  return (
    <ReviewModalWindowStyled>
      <label>Overall rating:</label>
      <div>
        <SelectStars handleStarRatingOnChange={handleStarRatingOnChange}/>
      </div>
      <div>
        <label>Would you recommend this product?</label>
        <div>
          <input
            type="radio"
            id="yes"
            name="recommended"
            value="yes"
            defaultChecked
            onChange={ () => setIsRecommended(true) }
          />
          <label for="yes">Yes</label>
          <input
            type="radio"
            id="no"
            name="recommended"
            value="no"
            onChange={ () => setIsRecommended(false) }
          />
          <label for="no">No</label>
        </div>
      </div>
      <div>
        <label>Review summary:</label>
        <div>
          <input
            type="text"
            id="review-summary"
            maxLength="60"
            size="60"
            placeholder="Best purchase ever!"
            onChange={ e => setReviewSummary(e.target.value) }
          />
        </div>
      </div>
      <div>
        <label>Review body:</label>
        <div>
          <textarea
            id="review-body"
            rows="3"
            columns="100"
            maxLength="1000"
            placeholder="Why did you like the product or not?"
            required
            onChange={ e => setReviewBody(e.target.value) }
          />
        </div>
      </div>
      <div>
        <label>What is your nickname:</label>
        <div>
          <input
            type="text"
            id="username"
            maxLength="60"
            size="30"
            placeholder="Example: jackson11!"
            required
            onChange={ e => setUsername(e.target.value) }
          />
        </div>
      </div>
      <div>
        <label>Your email:</label>
        <div>
          <input
            type="email"
            id="email"
            maxLength="60"
            size="30"
            placeholder="Example: jackson11@email.com"
            required
            onChange={ e => setEmail(e.target.value) }
          />
        </div>
      </div>
      <div>
      {characteristics.map(char => (
        <div key={char.id} id={char.id} name={char.name}>
          <label>{char.name}</label>
          <div>
            <label for={char.name}>1</label>
            <input
              type="radio"
              id={char.id}
              name={char.id}
              value="1"
              onChange={ e => handleCharRadioOnChange(e) }
            />
            <label for={char.name}>2</label>
            <input
              type="radio"
              id={char.id}
              name={char.id}
              value="2"
              onChange={ e => handleCharRadioOnChange(e) }
            />
            <label for={char.name}>3</label>
            <input
              type="radio"
              id={char.id}
              name={char.id}
              value="3"
              onChange={ e => handleCharRadioOnChange(e) }
            />
            <label for={char.name}>4</label>
            <input
              type="radio"
              id={char.id}
              name={char.id}
              value="4"
              onChange={ e => handleCharRadioOnChange(e) }
            />
            <label for={char.name}>5</label>
            <input
              type="radio"
              id={char.id}
              name={char.id}
              value="5"
              onChange={ e =>  handleCharRadioOnChange(e) }
            />
          </div>
        </div>
      ))}
      </div>
    </ReviewModalWindowStyled>
  );
}

export default ReviewModal;
