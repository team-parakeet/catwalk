import React, { useState } from 'react';
import { StyledSpan } from '../styles/QA/Helpful.styled';
import styled from 'styled-components';
import {
  updateQuestionHelpfulCount,
  updateAnswerHelpfulCount,
} from '../../request.js';

const Helpful = ({ count, id, type }) => {
  const [localCount, setLocalCount] = useState(count);
  const [wasIncremented, setWasIncremented] = useState(false);

  const handleOnClick = e => {
    if (!wasIncremented) {
      if (type === 'question') {
        updateQuestionHelpfulCount(id)
          .then(results => {
            setWasIncremented(true);
            setLocalCount(localCount => localCount + 1);
          })
          .catch(err => console.error(err));
      } else if (type === 'answer') {
        updateAnswerHelpfulCount(id)
          .then(results => {
            setWasIncremented(true);
            setLocalCount(localCount => localCount + 1);
          })
          .catch(err => console.error(err));
      }
    }
  };

  return (
    <span>
      Helpful? <StyledSpan onClick={e => handleOnClick(e)}>Yes</StyledSpan> (
      {localCount})
    </span>
  );
};

export default Helpful;
