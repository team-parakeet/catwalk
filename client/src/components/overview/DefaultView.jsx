import React, { useContext, useEffect } from 'react';
import { OverviewContext } from './OverviewContext.jsx';
import { getProductPhotosOfAStyle } from '../../request.js';

export const DefaultView = () => {
  const { images, setImages } = useContext(OverviewContext);

  useEffect(() => {
    getProductPhotosOfAStyle(39333, 234004)
      .then(results =>
      setImages(results.photos.map((photo, id) => {return {id, ...photo}}))
    );
    console.log('useEffect hook called');
  }, []);

  return <ThumbnailSlider />;
};

export const ThumbnailSlider = () => {
  const { images, currentImage } = useContext(OverviewContext);

  return (
    <div>
      {images.map(image => {
        return (
          <div className="thumbnail item">
            <img src={image.thumbnail_url} />
          </div>
        );
      })}
    </div>
  );
};
