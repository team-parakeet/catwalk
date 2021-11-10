import React from 'react';
import { StyledSpan } from '../styles/QA/Helpful.styled';
import styled from 'styled-components';

const Helpful = ({ count }) => {
  return (
    <span>
      Helpful?{' '}
      <StyledSpan onClick={() => console.log('clicked')}>Yes</StyledSpan> (
      {count})
    </span>
  );
};

export default Helpful;
