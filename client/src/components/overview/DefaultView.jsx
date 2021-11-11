import React, { useContext, useState, useEffect, useCallback } from 'react';
import ExpandedView from './ExpandedView.jsx';
import { getProductStyles } from '../../request.js';
import Selectors from './selectors.jsx';
import ProductDetails from './productDetails.jsx';
import { OverviewContext } from './OverviewContext.jsx';
import { getProductPhotosOfAStyle } from '../../request.js';
import { DefaultViewContainer, BackgroundImageContainer, BackgroundImage, ThumbnailSliderContainer } from '../styles/Overview/DefaultView.styled';
import { Arrow, FadedArrow, ActiveThumbnail, FadedThumbnail, ThumbnailContainer, SliderContainer } from '../styles/Overview/Slider.styled';

export const DefaultView = (props) => {
  const [ styles, setStyles ] = useState([]);
  const [ selectedStyle, setSelectedStyle ] = useState(props.styles[0].style_id);
  const [ expandedView, setExpandedView ] = useState(false);
  const { images, setImages, currentImage, handleKeyPress } = useContext(OverviewContext);
  const context = useContext(OverviewContext);

  useEffect( () => {
    getProductPhotosOfAStyle(props.productId, selectedStyle)
      .then( (results) => {
        console.log('results: ', results);
        // TODO: Get the setImages method to re-render images every time the state of selectedStyle changes
        setImages(results.photos.map((photo, id) => { return {id, ...photo}} ));
      })
      .catch( (err) => {
        console.error(err);
      });

    // TODO: If expandedView is active, render the expandedView component. Else, hide it
    if (expandedView) {
      // open expanded view modal window
    }
  }, []);

  // TODO: Method that opens expandedview
  const handleImageClick = () => {
    setExpandedView(true);
  }

  // TODO: Method that exits expandedview
  const handleBackgroundClick = () => {
    setExpandedView(false);
  }

  const updateStyle = (styleId) => {
    setSelectedStyle(styleId);
    getProductPhotosOfAStyle(props.productId, styleId)
      .then( (results) => {
        setImages(results.photos.map((photo, id) => { return {id, ...photo}} ));
      })
      .catch( (err) => {
        console.error(err);
      });
  }

  return (
    <DefaultViewContainer className='default-view-container' tabIndex="0" onKeyUp={(e) => { e.preventDefault(); handleKeyPress(e); }}>
      <ThumbnailSliderContainer className='thumbnail-slider-container'>
        <ThumbnailSlider />
      </ThumbnailSliderContainer>
      <BackgroundImageContainer className='background-img-container'>
        {images.length && <BackgroundImage src={images[currentImage]['url']} onClick={handleImageClick} />}
      </BackgroundImageContainer>
      <ProductDetails
        product={props.product}
        productId={props.productId}
        rating={props.rating}
      />
      <Selectors
        productId={props.productId}
        styles={props.styles}
        addItemToCart={props.addItemToCart}
        updateStyle={updateStyle}
      />
    </DefaultViewContainer>
  );
};

export const ThumbnailSlider = () => {
  const { images, currentImage, displayNextImage, displayPrevImage } = useContext(OverviewContext);
  let isAboveLowerBounds = currentImage > 0;
  let isBelowUpperBounds = currentImage < images.length - 1;

  return (
    <SliderContainer>
      <Arrow className={isAboveLowerBounds ? 'showContent' : 'hideContent'} src={'./images/chevron-up.svg'} onClick={() => (isAboveLowerBounds) ? displayPrevImage() : {}} />
      {images.map((image, idx) => (idx < 7) ?
        <ThumbnailItem key={image.id} id={image.id} image={image}/>
        : null
      )}
      <Arrow className={isBelowUpperBounds ? 'showContent' : 'hideContent'} src={'./images/chevron-down.svg'} onClick={() => (isBelowUpperBounds) ? displayNextImage() : {}} />
    </SliderContainer>
  );
};


export const ThumbnailItem = ({image}) => {
  const { images, currentImage, setCurrentImage } = useContext(OverviewContext);
  let isSelected = image.id === currentImage;

  return (
    <ThumbnailContainer key={image.id} className="thumbnail item" onClick={() => setCurrentImage(image.id)}>
      {(!isSelected) && <FadedThumbnail src={image.thumbnail_url} />}
      {isSelected && <ActiveThumbnail src={image.thumbnail_url} />}
    </ThumbnailContainer>
  )
}