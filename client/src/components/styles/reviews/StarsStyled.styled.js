import styled from "styled-components";

export const StarsStyled = styled.div`
  font-size: 15px;
  display: inline-block;
  position: sticky;
`

export const Rating1 = styled.div`
  position: absolute;
  color: #FFA500;
  z-index: 10;
  overflow: hidden;
  &::before {
    content: "★★★★★"
  }
`

export const Rating2= styled.div`
  color: #d3d3d3;
  &::before {
    content: "★★★★★"
  }
`

