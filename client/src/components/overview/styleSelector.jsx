import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import StyleThumbnail from './styleThumbnail.jsx';

const StyleSelector = (props) => {
  const [selected, setSelected] = useState();

  return (
    <div>
      { props.styles.map( (style, i) => {
        let url = style.photos[0].thumbnail_url;

        return ( <StyleThumbnail
          className='style-thumbnail'
          url={url}
          info={style}
          selected={selected === style.style_id}
          key={i}
          onClick={ () => {
            setSelected(style.style_id);
            props.handleStyleSelect(style);
          }} />)
      }) }
    </div>
  )
}

export default StyleSelector;