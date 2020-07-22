import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    const { paletteName, emoji, id } = this.props.palette;
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
      <div className="Palette">
        <NavBar handleChange={this.handleChange} showAllColor={false} />
          <div className="Palette-colors showSingleColor">
            {colorBoxes}
            <div className="go-back ColorBox">
              <Link to={`/palette/${id}`} className="back-button">GO BACK</Link>
            </div>
          </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;