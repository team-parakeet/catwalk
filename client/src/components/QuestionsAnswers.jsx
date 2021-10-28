import React from 'react';

const QuestionsAnswers = () => {

  return (
    <div>
      Q {"&"} A
      <form>
        <label htmlFor="search">Search</label>
        <input id="search"></input>
        {/* THIS IS THE SEARCH ICON, SHOULD PROBABLY IMPORT SOMEHOW? */}
        <img src={"./images/search.svg"} alt="search bar" height="15" width="15"/>
      </form>
    </div>
  )
}

export default QuestionsAnswers;