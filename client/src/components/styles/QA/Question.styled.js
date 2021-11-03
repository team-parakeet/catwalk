import styled from 'styled-components';
import Helpful from '../../QA/Helpful.jsx';

export const QContainer = styled.div`
  position: relative;
  max-width: 100%;
  min-height: 1rem;
  margin-top: 0.2em;
  margin-bottom: 0.2em;
  border: 1px solid red;
`

export const StyledDiv = styled.div`
  position: relative;
  font-weight: bold;
  font-size: 1.2rem;
  max-width: 80%;
  border: 1px solid green;
`

export const HelpfulContainer = styled.div`
  position: absolute;
  font-size: 0.9rem;
  max-width: 20%;
  top: 0;
  right: 0;
  border: 2px solid blue;
`