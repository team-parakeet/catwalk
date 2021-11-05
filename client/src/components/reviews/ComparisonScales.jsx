import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TOKEN } from '../../../../config.js';
import Slider from './Slider.jsx';
import { ComparisonScaleContainer, CharScale } from '../styles/reviews/ComaparisonScaleContainer.styled.js';
import { Wrapper, SmallFont } from '../styles/reviews/Wrapper.styled.js';

function ComparisonScales({ productId }) {
  const [metaData, setMetaData] = useState({})
  const [characteristics, setCharacteristics] = useState({});


  useEffect(() => {
    const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc/reviews/meta/?product_id=${productId}`
    axios.get(url, {
      headers: {
        Authorization: TOKEN
      }
    })
    .then(r => {
      const chars = r.data.characteristics;
      setMetaData(chars)
    })
  }, [])

  useEffect(() => {
    if (Object.keys(metaData).length !== 0) {
      const newCharacteristics = {}
      for (let key in metaData) {
        newCharacteristics[key] = metaData[key].value;
      }
      setCharacteristics(newCharacteristics)
    }
  }, [metaData])

  if (!Object.keys(characteristics).length) {
    return null
  }


  return (
    <ComparisonScaleContainer>
      {Object.keys(characteristics).map(char => (
      <CharScale key={char}>
        {char}

        <Slider id={char} value={characteristics[char]} />
        {char === 'Comfort' || char === 'Quality' ?
        <Wrapper>
          <SmallFont>Poor</SmallFont>
          <SmallFont>Great</SmallFont>
        </Wrapper>
        :
        <Wrapper>
          <SmallFont>Small</SmallFont>
          <SmallFont>Big</SmallFont>
        </Wrapper>}
      </CharScale>
      ))}
    </ComparisonScaleContainer>
  )
}

export default ComparisonScales;