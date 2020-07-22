import React, { Component } from 'react';
import ColorBox from './ColorBox'


class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.getherShades(this.props.palette, this.props.color);
    this.state = { format: "hex"}
  }
  getherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;
    for(let i in allColors){
      shades = shades.concat(
        allColors[i].filter(color => color.id == colorToFilterBy)
      )
    };
    return shades.slice(1);
  }
  render() {
    const { format } = this.state;
    const classes = this.props.classes;
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showingFullPalette={false}
      />
    ))
    return(
      
      <div style={{width: "100vw", height: "100vh"}}>
        {colorBoxes}
      </div>
    );
  }
}

export default SingleColorPalette;