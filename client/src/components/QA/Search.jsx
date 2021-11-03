import { StyledInput, SearchContainer } from '../styles/QA/Search.styled';
import { StyledLabel } from '../styles/QA/Label.styled';
import React, { useContext } from 'react';
import { QAContext } from './QAContext.jsx';

const Search = () => {
  const {search, setSearch} = useContext(QAContext);

  return (
    <div>
      <form>
        <StyledLabel htmlFor="search">Search</StyledLabel>
        <SearchContainer>
          <StyledInput id="search" value={search} onChange={(e) => setSearch(e)} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." autoComplete="off"></StyledInput>
          {/* TODO: THIS IS THE SEARCH ICON, WE SHOULD PROBABLY IMPORT instead of using src directly? */}
          <img src={"./images/search.svg"} alt="search bar" height="15" width="15"/>
        </SearchContainer>
      </form>
    </div>
  )
}

export default Search;