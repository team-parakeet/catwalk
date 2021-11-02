import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

// TODO: Style thumbnails to be small circles
const Image = styled.img`
  width: 40px;
  height: 40px;
  border: gray solid 5px;
  border-radius: 30px;
  padding: 2px;
`

class StyleThumbnail extends React.Component {
  constructor(props) {
    super(props);
    // url={url} info={style} onClick={this.handleStyleSelect}

    this.state = {
      selected: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      selected: true,
    });

    this.props.onClick(this.props.info.style_id);
  }

  render() {
    return (
      <Image onClick={this.handleClick} src={this.props.url}/>
    )
  }
}

export default StyleThumbnail;
{ /* <div className='style-thumbnail'> I am a style thumbnail </div> */ }