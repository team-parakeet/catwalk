import React, { useState, useEffect } from 'react';
import { postNewReview } from '../../request.js';
import { ReviewModalStyled } from '../styles/reviews/ReviewModalStyled.styled';

function ReviewModal({ toggleModal, productId, reviewMeta }) {
  const [overallRating, setOverallRating] = useState(0);
  const [isRecommended, setIsRecommended] = useState(true);
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [characteristics, setCharacteristics] = useState([])
  const [charRating, setCharRating] = useState([])

  useEffect(() => {
    if (Object.keys(reviewMeta).length !== 0) {
      const newCharacteristics = []
      for (let key in reviewMeta) {
        const charSet = {}
        charSet.name = key
        charSet.id= reviewMeta[key].id
        newCharacteristics.push(charSet)
      }
      setCharacteristics(newCharacteristics)
    }
  }, [reviewMeta])

  if (!characteristics.length) {
    return null
  }

  const handleStarChangeOnClick = e => {
    setOverallRating(e);
  };

  const handleCharRadioOnChange = (e) => {
    const charId = e.target.name
    const rating = e.target.value
    // setCharRating(prev => {
    //   [...prev, {[charId]: rating}]
    // })
  }

  const handleSubmitOnClick = () => {
    const data = {
      product_id: productId,
      rating: overallRating,
      summary: reviewSummary,
      body: reviewBody,
      recommend: isRecommended,
      name: username,
      email: email,
      photos: [],
      characteristics: {
        131841: 5,
        131840: 5,
        131838: 5,
        131839: 5,
      },
    };
    postNewReview(data)
    toggleModal()
  };

  console.log(charRating)

  return (
    <ReviewModalStyled>
      Write Your Review
      <label>Overall rating:</label>
      <div>
        <label>Would you recommend this product?</label>
        <div>
          <input
            type="radio"
            id="yes"
            name="recommended"
            value="yes"
            defaultChecked
            onChange={e => setIsRecommended(true)}
          />
          <label for="yes">Yes</label>
          <input
            type="radio"
            id="no"
            name="recommended"
            value="no"
            onChange={e => setIsRecommended(false)}
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
            onChange={e => setReviewSummary(e.target.value)}
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
            onChange={e => setReviewBody(e.target.value)}
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
            onChange={e => setUsername(e.target.value)}
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
            onChange={e => setEmail(e.target.value)}
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
              onChange={e => {
                handleCharRadioOnChange(e)
              }}
            />
            <label for={char.name}>2</label>
            <input
              type="radio"
              id={char.id}
              name={char.id}
              value="2"
              onChange={e => {
                handleCharRadioOnChange(e)
              }}
            />
            <label for={char.name}>3</label>
            <input
              type="radio"
              id={char.id}
              name={char.id}
              value="3"
              defaultChecked
              onChange={e => {
                handleCharRadioOnChange(e)
              }}
            />
            <label for={char.name}>4</label>
            <input
              type="radio"
              id={char.id}
              name={char.id}
              value="4"
              defaultChecked
              onChange={e => { handleCharRadioOnChange(e) }}
            />
            <label for={char.name}>5</label>
            <input
              type="radio"
              id={char.id}
              name={char.id}
              value="5"
              defaultChecked
              onChange={e => {
                handleCharRadioOnChange(e)
              }}
            />
          </div>
        </div>
      ))}
      </div>
      <div>
        <button onClick={handleSubmitOnClick}>Submit</button>
      </div>
    </ReviewModalStyled>
  );
}

export default ReviewModal;
