import React, { Component } from 'react';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter'


class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex"}
    this._shades = this.getherShades(this.props.palette, this.props.color);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val){
    this.setState({format: val})
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
    const { paletteName, emoji } = this.props.palette;
    const { format } = this.state;
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
        <NavBar handleChange={this.handleChange} showAllColor={false} />
        {colorBoxes}
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;