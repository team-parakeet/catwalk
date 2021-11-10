import React from 'react';
import { ReviewModalWindowStyled, LabelStyled, FormInput, ReviewBodyInput, QuestionWrapper } from '../styles/reviews/ModalStyled.styled';
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
      <LabelStyled>Overall rating:</LabelStyled>
      <QuestionWrapper>
        <SelectStars handleStarRatingOnChange={handleStarRatingOnChange}/>
      </QuestionWrapper>
      <QuestionWrapper>
        <LabelStyled>Would you recommend this product?</LabelStyled>
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
      </QuestionWrapper>
      <QuestionWrapper>
        <LabelStyled>Review summary:</LabelStyled>
        <div>
          <FormInput
            type="text"
            id="review-summary"
            maxLength="60"
            placeholder="Best purchase ever!"
            onChange={ e => setReviewSummary(e.target.value) }
          />
        </div>
      </QuestionWrapper>
      <QuestionWrapper>
        <LabelStyled>Review body:</LabelStyled>
        <div>
          <ReviewBodyInput
            id="review-body"
            maxLength="1000"
            placeholder="Why did you like the product or not?"
            required
            onChange={ e => setReviewBody(e.target.value) }
          />
        </div>
      </QuestionWrapper>
      <QuestionWrapper>
        <LabelStyled>What is your nickname:</LabelStyled>
        <div>
          <FormInput
            type="text"
            id="username"
            maxLength="60"
            placeholder="Example: jackson11!"
            required
            onChange={ e => setUsername(e.target.value) }
          />
        </div>
      </QuestionWrapper>
      <QuestionWrapper>
        <LabelStyled>Your email:</LabelStyled>
        <div>
          <FormInput
            type="email"
            id="email"
            maxLength="60"
            placeholder="Example: jackson11@email.com"
            required
            onChange={ e => setEmail(e.target.value) }
          />
        </div>
      </QuestionWrapper>
      <div>
      {characteristics.map(char => (
        <QuestionWrapper key={char.id} id={char.id} name={char.name}>
          <LabelStyled>{char.name}</LabelStyled>
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
        </QuestionWrapper>
      ))}
      </div>
    </ReviewModalWindowStyled>
  );
}

export default ReviewModal;
