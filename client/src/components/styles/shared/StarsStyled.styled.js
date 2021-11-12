import styled from "styled-components";

export const StarsStyled = styled.div`
  font-size: 15px;
  display: inline-block;
  position: sticky;
`

export const Rating1 = styled.div`
  position: absolute;
  color: #a7bb9b;
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

export const SelectedStarsStyled = styled.div`
  float: left;

  &.select-star-rating > input {
    display: none;
  }

  &.select-star-rating > label:before {
  display: inline-block;
  content: '★ '
  }

  &.select-star-rating > label {
    color: #d3d3d3;
    float: right;
  }

  &.select-star-rating > input:checked ~ label {
    color: #a7bb9b;
  }

  &.select-star-rating:not(:checked) > label:hover,
  &.select-star-rating:not(:checked) > label:hover ~ label {
    color: #d5e3cc;
  }
`
