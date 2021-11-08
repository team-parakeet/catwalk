import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Image = styled.img`
  width: 40px;
  height: 40px;
  border: ${ props => props.isSelected ? 'hsl(360, 27%, 81%) solid 5px' : 'hsla(33, 22%, 45%, 70%) solid 5px' };
  border-radius: 30px;
  padding: 2px;
`

class StyleThumbnail extends React.Component {
  constructor(props) {
    super(props);
    // url={url} info={style} selected={t/f} onClick={this.handleStyleSelect}

    this.state = {
      isSelected: this.props.selected,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      isSelected: true,
    });

    this.props.onClick(this.props.info.style_id);
  }

  render() {
    return (
      <Image
        isSelected={this.props.selected}
        onClick={this.handleClick}
        src={this.props.url}/>
    )
  }
}

export default StyleThumbnail;