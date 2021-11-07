import React, { useState, useEffect } from 'react';
import ReviewsList from './ReviewsList.jsx';
import SortBy from './SortBy.jsx';
import Button from './Button.jsx';
import Modal from './Modal.jsx';
import { Container } from '../styles/reviews/Container.styled.js';
import { Wrapper } from '../styles/reviews/Wrapper.styled.js';

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
    <Container>
      <SortBy setCurrentReviews={setCurrentReviews} productId={productId} />
      {reviews.length !== 0 &&
      <ReviewsList reviews={reviewsToShow}/>
      }
      <Wrapper>
        {reviews.length < 2 || reviewsToShow.length === reviews.length ? null :
        <Button handleOnClick={handleMoreReviewsOnClick} text={'Show more reviews'} />
        }
        {reviewsToShow.length === reviews.length &&
        <Button handleOnClick={handleShowLessOnClick} text={'Show less reviews'} />
        }
        <Button handleOnClick={toggleModal} text={'Add a review'} />
      </Wrapper>
      {showModal ?
      <Modal showModal={showModal} toggleModal={toggleModal}/>
      :
      null}
    </Container>
  )
}

export default ReviewsContainer;