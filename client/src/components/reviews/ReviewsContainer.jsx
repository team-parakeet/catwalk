import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList.jsx';
import SortBy from './SortBy.jsx';
import Button from './Button.jsx';
import Modal from './Modal.jsx';
import { ReviewsContainerStyled } from '../styles/reviews/ReviewsContainerStyled.styled.js';
import { ButtonWrapper } from '../styles/reviews/ReviewsWrapper.styled.js';

function ReviewsContainer({ reviews, productId }) {
  const [currentReviews, setCurrentReviews] = useState(null);
  const [numReviewsShown, setNumReviewsShown] = useState(2);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (reviews.length !== 0) {
      setCurrentReviews(reviews)
    }
  }, [reviews])

  useEffect(() => {
    setNumReviewsShown(2)
  }, [currentReviews])

  const handleMoreReviewsOnClick = () => {
    numReviewsShown + 2 <= reviews.length ? setNumReviewsShown(prev => prev + 2) : setNumReviewsShown(reviews.length)
  }

  const handleShowLessOnClick = () => {
    setNumReviewsShown(2)
  }

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
      <Modal toggleModal={toggleModal} productId={productId}/>
      :
      null}
    </ReviewsContainerStyled>
  )
}

export default ReviewsContainer;