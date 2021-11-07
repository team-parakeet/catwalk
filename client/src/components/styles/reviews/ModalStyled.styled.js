import styled from "styled-components";

export const ModalStyled = styled.div`
  top: 25%;
  left: 25%;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  width: 50%;
  height: 50%;
  background: #fff;
  border: 1px solid hotpink;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(128,128,128,0.5);
`
