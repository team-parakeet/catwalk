import styled from "styled-components";

export const ModalWindow = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  z-index: 10;
  background-color: #fff;
  max-width: 80%;
  max-height: 80%;
  padding: 10px;
  overflow: scroll;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
`

export const ModalExit = styled.button`
  border: none;
  background: none;
  outline: none;
  color: rgb(171, 169, 172);
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  margin-left: 30px;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.0);
  }
`

export const Line = styled.hr`
  width: 90%;
  border: 1px solid;
  border-color: rgb(171, 169, 172);
`

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export const ModalSubmit = styled.button`
  border: none;
  background: white;
  font-size: 1rem;
  cursor: pointer;
  padding: 0px 20px 20px 0px;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.0);
  }
`

export const ReviewModalWindowStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fefefe;
  padding: 20px;
`

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
`

export const LabelStyled = styled.label`
  font-weight: bold;
`

export const FormInput = styled.input`
  width: 500px;
  border: 1px solid #939393;
  border-radius: 3px;
`

export const ReviewBodyInput = styled.textarea`
  width: 500px;
  height: 200px;
  border: 1px solid #939393;
  border-radius: 3px;
`

export const QuestionWrapper = styled.div`
  margin-bottom: 20px;
`