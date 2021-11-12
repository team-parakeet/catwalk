import React from 'react';
import {
  InputContainer,
  LabelStyled,
  InputStyled,
} from '../styles/QA/AddQuestionModal.styled';

const Input = props => {
  return (
    <InputContainer>
      <LabelStyled htmlFor={props.htmlFor}>{props.label}</LabelStyled>
      <InputStyled
        required={props.required}
        id={props.id}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.handleChange}
        value={props.inputValue}
      />
    </InputContainer>
  );
};

export default Input;
