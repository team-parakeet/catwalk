import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TOKEN } from '../../../../config.js';
import Slider from './Slider.jsx';

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
    <div className="comparison-scales">
      {Object.keys(characteristics).map(char => (
      <div key={char} className={`${char}-scale`}>
        {char}
        <div><Slider id={char} value={characteristics[char]} /></div>
        {char === 'Comfort' || char === 'Quality' ? 'Poor' : 'Small'}
        {char === 'Comfort' || char === 'Quality' ? 'Great' : 'Big'}
      </div>
      ))}
    </div>
  )
}

export default ComparisonScales;