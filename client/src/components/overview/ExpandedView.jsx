import React, { useContext, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Figure, Image } from '../styles/Overview/ExpandedView.styled.js';
import { OverviewContext } from './OverviewContext.jsx';
import { DefaultViewContainer, BackgroundImageContainer, BackgroundImage, ThumbnailSliderContainer } from '../styles/Overview/DefaultView.styled';
import { Arrow, FadedArrow, ActiveThumbnail, FadedThumbnail, ThumbnailContainer, SliderContainer } from '../styles/Overview/Slider.styled';

const ExpandedView = ( {src} ) => {
  // props: src url,

  const [ zoom, setZoom ] = useState(false);
  const [ position, setPosition ] = useState('0% 0%');

  // Handles modal window overflow
  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = originalOverflow);
  }, []);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width * 100;
    const y = (e.pageY - top) / height * 100;
    setPosition(`${x}% ${y}%`);
  }

  return (
    <Figure class='expanded-view' onMouseMove={handleMouseMove} >
      <Image class='expanded-thumbnail' src={src} />
    </Figure>
  )
}

export default ExpandedView;