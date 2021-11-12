import styled from 'styled-components';

export const DefaultViewContainer = styled.div`
  position: relative;
  display: flex;
  width: auto;
  max-height: 600px;
  align-items: flex-start;
  margin-top: 20px;
  `

export const ThumbnailSliderContainer = styled.div`
  align-self: center;
  max-height: 600px;
`

export const BackgroundImageContainer = styled.div`
  display: flex; // gets rid of some whitespace below the image
`

export const BackgroundImage = styled.img`
  max-width: 100%;
  max-height: 600px;
  cursor: url('./images/search.svg'), zoom-in;
`