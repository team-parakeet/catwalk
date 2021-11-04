import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

// TODO: Style thumbnails
// - small gray circles
// - (this.state.isSelected ? pink border : gray border)
const Image = styled.img`
  width: 40px;
  height: 40px;
  border: ${ state => state.isSelected ? 'pink solid 5px' : 'gray solid 5px' };
  border-radius: 30px;
  padding: 2px;
`

class StyleThumbnail extends React.Component {
  constructor(props) {
    super(props);
    // url={url} info={style} selected={state.selected} onClick={this.handleStyleSelect}

    this.state = {
      isSelected: (this.props.selected === this.props.info.style_id ? true : false),
    }

    this.handleClick = this.handleClick.bind(this);
  }

  // // If the thumbnail's style_id matches the prop, then set state.isSelected to true
  // componentDidMount() {
  //   if (this.props.selected === this.props.info.style_id) {
  //     this.setState({
  //       isSelected: true,
  //     });
  //   }
  // }

  handleClick(e) {
    this.setState({
      selected: true,
    });
    this.props.onClick(this.props.info.style_id);
  }

  render() {
    return (
      <Image
        onClick={this.handleClick}
        src={this.props.url}/>
    )
  }
}

export default StyleThumbnail;