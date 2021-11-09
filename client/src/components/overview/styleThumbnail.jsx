import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Image = styled.img`
  width: 40px;
  height: 40px;
  border: ${ props => props.isSelected ? 'hsl(360, 27%, 81%) solid 5px' : 'hsla(33, 22%, 45%, 70%) solid 5px' };
  border-radius: 30px;
  padding: 2px;
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
`

const StyleThumbnail = (props) => {
  // props: url={url} info={style} selected={t/f} onClick={changes styleSelector's state}

  const [isSelected, setIsSelected] = useState(props.selected);

  return (
    <Image
      isSelected={props.selected}
      onClick={ () => {
        setIsSelected(true);
        props.onClick(props.info);
      }}
      src={props.url}
      alt={ isSelected ? props.info.name : null}
    />
  )
}

export default StyleThumbnail;