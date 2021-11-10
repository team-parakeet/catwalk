import React, { useContext, useState, useEffect, useCallback } from 'react';
import { OverviewContext } from './OverviewContext.jsx';
import { DefaultViewContainer, BackgroundImageContainer, BackgroundImage, ThumbnailSliderContainer } from '../styles/Overview/DefaultView.styled';
import { Arrow, FadedArrow, ActiveThumbnail, FadedThumbnail, ThumbnailContainer, SliderContainer } from '../styles/Overview/Slider.styled';

const ExpandedView = (props) => {
  // TODO: What parts of ExpandedView changes?
  const [ zoom, setZoom ] = useState(false);

  return (
    <div>Expanded view btw</div>
  )
}

export default ExpandedView;