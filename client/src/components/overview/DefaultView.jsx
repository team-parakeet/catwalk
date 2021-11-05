import React, { useContext, useEffect } from 'react';
import { OverviewContext } from './OverviewContext.jsx';
import { getProductPhotosOfAStyle } from '../../request.js';
import { DefaultViewContainer, BackgroundImageContainer, BackgroundImage, ThumbnailSliderContainer } from '../styles/Overview/DefaultView.styled';
import { Arrow, FadedArrow, ActiveThumbnail, FadedThumbnail, ThumbnailContainer, SliderContainer } from '../styles/Overview/Slider.styled';

export const DefaultView = () => {
  const { images, setImages, currentImage } = useContext(OverviewContext);

  useEffect(() => {
    getProductPhotosOfAStyle(39333, 234004)
      .then(results =>
      setImages(results.photos.map((photo, id) => {return {id, ...photo}}))
    );
    console.log('useEffect hook called');
  }, []);

  return (
    <DefaultViewContainer>
      <ThumbnailSliderContainer>
        <ThumbnailSlider />
      </ThumbnailSliderContainer>
      <BackgroundImageContainer>
        {images.length && <BackgroundImage src={images[currentImage]['url']} />}
      </BackgroundImageContainer>
    </DefaultViewContainer>
  );
};

export const ThumbnailSlider = () => {
  const { images, currentImage, displayNextImage, displayPrevImage } = useContext(OverviewContext);

  return (
    <SliderContainer>
      <Arrow className={currentImage > 0 ? 'showContent' : 'hideContent'} src={'./images/chevron-up.svg'} onClick={() => (currentImage > 0) ? displayPrevImage() : {}} />
      {/* {currentImage === 0 && <FadedArrow src={'./images/chevron-up.svg'} />} */}
      {images.map((image, idx) => {
        return <ThumbnailItem key={image.id} id={image.id} image={image}/>;
      })}
      {currentImage < images.length - 1 && <Arrow src={'./images/chevron-down.svg'} onClick={() => displayNextImage()} />}
      {currentImage === images.length - 1 && <FadedArrow src={'./images/chevron-down.svg'} />}
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