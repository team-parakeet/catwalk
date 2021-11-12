import styled from 'styled-components';

export const SelectStarsStyled = styled.div`
  float: left;
  font-size: 16pt;

  &.select-star-rating > input {
    display: none;
  }

  &.select-star-rating > label:before {
  display: inline-block;
  content: '★'
  }

  &.select-star-rating > label {
    color: #d3d3d3;
    float: right;
  }

  &.select-star-rating > input:checked ~ label {
    color: #ffd700;
  }

  &.select-star-rating:not(:checked) > label:hover,
  &.select-star-rating:not(:checked) > label:hover ~ label {
    color: #f8de7e;
  }
`