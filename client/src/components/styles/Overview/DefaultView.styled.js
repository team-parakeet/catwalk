import styled from 'styled-components';

export const DefaultViewContainer = styled.div`
  position: relative;
  /* max-width: 100vh; */
  background-color: #EBEBEB;
  /* outline: 2px solid green; */
`

export const BackgroundImageContainer = styled.div`
  display: flex;
  padding-left: 15%;
  /* outline: 2px solid blue; */
`

export const ThumbnailSliderContainer = styled.div`
  position: absolute;
  left: 2%;
  top: 9%;
  /* outline: 2px solid orange; */
`

export const BackgroundImage = styled.img`
  max-height: 1000px;
  cursor: url('./images/search.svg'), zoom-in;
`