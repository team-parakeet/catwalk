import styled from 'styled-components';

export const DefaultViewContainer = styled.div`
  position: relative;
  display: flex;
  /* max-width: 100vh; */
  background-color: #EBEBEB;
  align-items: flex-start;
  /* max-height: 80vh; */
  /* outline: 2px solid green; */
  `

export const ThumbnailSliderContainer = styled.div`
  /* position: absolute;
  left: 2%;
  top: 9%; */
  align-self: center;
  height: auto;
  /* outline: 2px solid orange; */

`

/*
flexbox
put backgroudn image in the
*/
export const BackgroundImageContainer = styled.div`
  display: flex; // gets rid of some whitespace below the image
  /* outline: 2px solid blue; */
`

export const BackgroundImage = styled.img`
  /* min-height: 100%; */
  max-width: 100%;
  max-height: 1000px;
  height: auto;
  cursor: url('./images/search.svg'), zoom-in;
`