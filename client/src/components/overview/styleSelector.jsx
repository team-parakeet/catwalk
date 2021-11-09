import React from 'react';
import ReactDOM from 'react-dom';
import StyleThumbnail from './styleThumbnail.jsx';
import styled from 'styled-components';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: ''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  // On click, set this.state.selected to the corresponding style ID
  handleClick(style) {
    this.setState({
      selected: style.style_id,
    });

    this.props.handleStyleSelect(style);
  }

  render() {
    return (
      <div>
        { this.props.styles.map( (style, i) => {
          let url = style.photos[0].thumbnail_url;

          return ( <StyleThumbnail
            className='style-thumbnail'
            url={url}
            info={style}
            selected={this.state.selected === style.style_id}
            key={i}
            onClick={this.handleClick} />)
        }) }
      </div>
    )
  }
}

export default StyleSelector;