import React, { useState, useEffect } from 'react';
import { getProductReviewMeta } from '../../request.js';
import ReviewsList from './ReviewsList.jsx';
import SortBy from './SortBy.jsx';
import Button from './Button.jsx';
import ReviewModal from './ReviewModal.jsx';
import { ReviewsContainerStyled, ButtonWrapper } from '../styles/reviews/ReviewsContainerStyled.styled.js';

function ReviewsContainer({ reviews, productId, fetchReviews }) {
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
    return (
      <div>
        <Button handleOnClick={toggleModal} text={'Add a review'} />
        {showModal ?
          <ReviewModal productId={productId} reviewMeta={reviewMeta} fetchReviews={fetchReviews} toggleModal={toggleModal} />
          :
          null
        }
      </div>
    )
  }

  const reviewsToShow = currentReviews.slice(0, numReviewsShown);

  return (
    <ReviewsContainerStyled>
      <SortBy setCurrentReviews={setCurrentReviews} productId={productId} />
      {reviews.length !== 0 &&
      <ReviewsList reviews={reviewsToShow} />
      }
      <ButtonWrapper>
        {reviews.length < 2 || reviewsToShow.length === reviews.length ? null :
        <Button handleOnClick={handleMoreReviewsOnClick} text={'Show more reviews'} />
        }
        <Button handleOnClick={toggleModal} text={'Add a review'} />
      </ButtonWrapper>
      {showModal ?
      <ReviewModal productId={productId} reviewMeta={reviewMeta} fetchReviews={fetchReviews} toggleModal={toggleModal} />
      :
      null
      }
    </ReviewsContainerStyled>
  )
}

export default ReviewsContainer;