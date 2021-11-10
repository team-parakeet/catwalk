import React, { useState, useEffect } from 'react';
import { getProductReviewMeta } from '../../request.js';
import ReviewsList from './ReviewsList.jsx';
import SortBy from './SortBy.jsx';
import Button from './Button.jsx';
import ReviewModal from '../shared/ReviewModal.jsx';
import { ReviewsContainerStyled } from '../styles/reviews/ReviewsContainerStyled.styled.js';
import { ButtonWrapper } from '../styles/reviews/ReviewsWrapper.styled.js';
import TestModal from '../shared/TestModal.jsx';
import ModalForm from '../shared/Modal.jsx';

function ReviewsContainer({ reviews, productId }) {
  const [currentReviews, setCurrentReviews] = useState(null);
  const [numReviewsShown, setNumReviewsShown] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const [reviewMeta, setReviewMeta] = useState({})

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
      <ModalForm toggleModal={toggleModal}>
        <ReviewModal productId={productId} reviewMeta={reviewMeta} />
      </ModalForm>
      :
      null}
    </ReviewsContainerStyled>
  )
}

export default ReviewsContainer;