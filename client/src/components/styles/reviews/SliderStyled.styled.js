import styled from "styled-components";

export const SliderStyled = styled.input`
  -webkit-appearance: none;
  overflow: hidden;
  width: 100%;
  background-color: #d3d3d3;

  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    height: 7px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 7px;
    height: 7px;
    pointer-events: none;
    background: #d3d3d3;
    box-shadow: -100px 0 0 100px #24E500;
  }
`