import React, { useState, useEffect } from 'react';
import { getProductReviewMeta } from '../../request.js';
import ReviewsList from './ReviewsList.jsx';
import SortBy from './SortBy.jsx';
import Button from './Button.jsx';
import ReviewModal from '../shared/ReviewModal.jsx';
import { ReviewsContainerStyled } from '../styles/reviews/ReviewsContainerStyled.styled.js';
import { ButtonWrapper } from '../styles/reviews/ReviewsWrapper.styled.js';
import ModalForm from '../shared/Modal.jsx';
import { postNewReview } from '../../request.js';

function ReviewsContainer({ reviews, productId, setNumOfReviews }) {
  const [currentReviews, setCurrentReviews] = useState(null);
  const [numReviewsShown, setNumReviewsShown] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const [reviewMeta, setReviewMeta] = useState({})
  const [overallRating, setOverallRating] = useState(0);
  const [isRecommended, setIsRecommended] = useState(true);
  const [reviewSummary, setReviewSummary] = useState('');
  const [reviewBody, setReviewBody] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [characteristics, setCharacteristics] = useState([])
  const [charRating, setCharRating] = useState({})

  useEffect(() => {
    getProductReviewMeta(productId)
    .then(r => {
      const chars = r.data.characteristics;
      setReviewMeta(chars)
    })
  }, [])

  useEffect(() => {
    if (reviews.length !== 0) {
      setCurrentReviews(reviews)
    }
  }, [reviews])

  useEffect(() => {
    setNumReviewsShown(2)
  }, [currentReviews])

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

  const handleMoreReviewsOnClick = () => {
    numReviewsShown + 2 <= reviews.length ? setNumReviewsShown(prev => prev + 2) : setNumReviewsShown(reviews.length)
  }

  const handleShowLessOnClick = () => {
    setNumReviewsShown(2)
  }

  const handleSubmit = () => {
    const data = {
      product_id: productId,
      rating: overallRating,
      summary: reviewSummary,
      body: reviewBody,
      recommend: isRecommended,
      name: username,
      email: email,
      photos: [],
      characteristics: charRating,
    };
    postNewReview(data)
    .then(() => setNumOfReviews(prev => prev + 1))
    .catch(() => alert('Please fill in all fields to leave a review!'))
  };

  const toggleModal = () => {
    setShowModal(prev => !prev);
  }

  if (!reviews.length || !currentReviews) {
    return null
  }

  const reviewsToShow = currentReviews.slice(0, numReviewsShown);

  return (
    <ReviewsContainerStyled>
      <SortBy setCurrentReviews={setCurrentReviews} productId={productId} />
      {reviews.length !== 0 &&
      <ReviewsList reviews={reviewsToShow}/>
      }
      <ButtonWrapper>
        {reviews.length < 2 || reviewsToShow.length === reviews.length ? null :
        <Button handleOnClick={handleMoreReviewsOnClick} text={'Show more reviews'} />
        }
        {reviewsToShow.length === reviews.length &&
        <Button handleOnClick={handleShowLessOnClick} text={'Show less reviews'} />
        }
        <Button handleOnClick={toggleModal} text={'Add a review'} />
      </ButtonWrapper>
      {showModal ?
      <ModalForm toggleModal={toggleModal} headerText={'Write Your Review'} handleSubmit={handleSubmit}>
        <ReviewModal productId={productId} setOverallRating={setOverallRating} setIsRecommended={setIsRecommended}
        setReviewSummary={setReviewSummary}
        setReviewBody={setReviewBody}
        setUsername={setUsername}
        setEmail={setEmail}
        characteristics={characteristics}
        setCharRating={setCharRating}/>
      </ModalForm>
      :
      null
      }
    </ReviewsContainerStyled>
  )
}

export default ReviewsContainer;