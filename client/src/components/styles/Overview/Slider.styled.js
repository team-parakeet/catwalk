import styled from 'styled-components'

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90px;
  /* outline: 2px solid blue; */

`

export const ThumbnailContainer = styled.div`
  /* outline: 1px solid orange; */
  padding: 0.5rem;
`

export const Thumbnail = styled.img`
  height: 100px;
  width: 70px;
  border: 1px solid black;
`

export const FadedThumbnail = styled(Thumbnail)`
  opacity: 0.5;

`

export const ActiveThumbnail = styled(Thumbnail)`
  opacity: 1;
`

export const Arrow = styled.img`
  width: 50px;
  height: 50px;
  opacity: 1;
  transition: all 0.25s;

  &.showContent {
    opacity: 1;
  }

  &.hideContent {
    opacity: 0
  }

  &:hover {
    transform: scale(1.1);
  }

  /* On click/active, shrink */
  &:active {
    transform: scale(1.0);
  }
`

export const FadedArrow = styled(Arrow)`
  opacity: 0.5;
  transition: none;
`