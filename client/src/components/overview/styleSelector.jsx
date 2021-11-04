import React from 'react';
import ReactDOM from 'react-dom';
import StyleThumbnail from './styleThumbnail.jsx';
import styled from 'styled-components';

// TODO: Build out the component so that it:
// - renders style thumbnails in rows of 4
// - keeps track of which style is currently selected
class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    // props { styles, handleStyleSelect }

    this.state = {
      selected: '',
    }

    // Bind fns
    this.handleClick = this.handleClick.bind(this);
  }

  // On click, set this.state.selected to the corresponding style ID
  handleClick(styleId) {
    this.setState({
      selected: styleId,
    });

    this.props.handleStyleSelect(styleId);
  }

  // Renders a StyleThumbnail component for each style
  // Props: { url }, { style }, { this.state.selected }, and { handleClick }
  render() {
    return (
      <div>
        { this.props.styles.map( (style, i) => {
          let url = style.photos[0].thumbnail_url;

          return ( <StyleThumbnail
            className='style-thumbnail'
            url={url}
            info={style}
            selected={this.state.selected}
            key={i}
            onClick={this.handleClick} />)
        }) }
      </div>
    )
  }
}

export default StyleSelector;