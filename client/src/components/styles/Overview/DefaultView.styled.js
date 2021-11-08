import styled from 'styled-components';

export const DefaultViewContainer = styled.div`
  position: relative;
  /* outline: 2px solid green; */
  /* max-width: 100vh; */
  background-color: #EBEBEB;
`

export const BackgroundImageContainer = styled.div`
  display: flex;
  /* outline: 2px solid blue; */
  padding-left: 15%;
`

export const ThumbnailSliderContainer = styled.div`
  position: absolute;
  left: 2%;
  top: 9%;
`

export const BackgroundImage = styled.img`
  max-height: 1000px;
  cursor: url('./images/search.svg'), zoom-in;
`