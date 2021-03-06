import styled from 'styled-components';

export const ReviewModalWindowStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fefefe;
  padding: 20px;
  font-size: 12pt;
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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const StarWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;

`

export const DescriptionWrapper = styled.div`
  color: #939393;
  font-style: italic;
`

export const CharRadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`