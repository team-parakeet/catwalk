import { StyledInput, SearchContainer } from '../styles/QA/Search.styled';
import { StyledLabel } from '../styles/QA/Label.styled';
import React from 'react';

const Search = () => (
  <div>
    <form>
      <StyledLabel htmlFor="search">Search</StyledLabel>
      <SearchContainer>
        <StyledInput id="search" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."></StyledInput>
        {/* THIS IS THE SEARCH ICON, SHOULD PROBABLY IMPORT SOMEHOW? */}
        <img src={"./images/search.svg"} alt="search bar" height="15" width="15"/>
      </SearchContainer>
    </form>
  </div>
)

export default Search;