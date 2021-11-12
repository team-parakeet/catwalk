import React, { useState, useEffect } from 'react';
import { getProductReviewMeta } from '../../request.js';
import Slider from './Slider.jsx';
import { ComparisonScaleContainer, CharScale, FlexSpaceBetween, SmallFont } from '../styles/reviews/ComaparisonScalesStyled.styled.js';

function ComparisonScales({ productId }) {
  const [reviewMeta, setReviewMeta] = useState({})
  const [characteristics, setCharacteristics] = useState({});

  useEffect(() => {
    getProductReviewMeta(productId)
    .then(r => {
      const chars = r.data.characteristics;
      setReviewMeta(chars)
    })
  }, [])

  useEffect(() => {
    if (Object.keys(reviewMeta).length !== 0) {
      const newCharacteristics = {}
      for (let key in reviewMeta) {
        newCharacteristics[key] = reviewMeta[key].value;
      }
      setCharacteristics(newCharacteristics)
    }
  }, [reviewMeta])

  if (!Object.keys(characteristics).length) {
    return null
  }

  return (
    <ComparisonScaleContainer>
      {Object.keys(characteristics).map(char => (
      <CharScale key={char}>
        {char}
        <div>
          <Slider id={char} value={characteristics[char]} max={5}/>
        </div>
        {char === 'Comfort' || char === 'Quality' ?
        <FlexSpaceBetween>
          <SmallFont>Poor</SmallFont>
          <SmallFont>Great</SmallFont>
        </FlexSpaceBetween>
        :
        <FlexSpaceBetween>
          <SmallFont>Small</SmallFont>
          <SmallFont>Big</SmallFont>
        </FlexSpaceBetween>}
      </CharScale>
      ))}
    </ComparisonScaleContainer>
  )
}

export default ComparisonScales;