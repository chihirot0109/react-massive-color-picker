import React, {Component} from 'react';
import ColorBox from './ColorBox'
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';
import '../css/Palette.css'

class Palette extends Component {
  constructor(props){
    super(props);
    this.state = { level: 500, format: 'hex' }
    this.changeLevel = this.changeLevel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(val){
    this.setState({format: val})
  }

  changeLevel(level) {
    this.setState({level})
  }

  render() {
      const { level, format } = this.state;
      const colors = this.props.palette.colors[level];
      const { paletteName, emoji, id } = this.props.palette;
    return(
      <div className="Palette">
        <NavBar 
          level={this.state.level}  
          changeLevel={this.changeLevel} 
          handleChange={this.handleChange}
          showAllColor
        />
        <div className="Palette-colors">
          {colors.map(color => (
            <ColorBox 
              background={color[format]} 
              name={color.id} 
              key={color.id}
              paletteId={id}
              id={color.id}
              moreUrl={`/palette/${id}/${color.id}`}
              showingFullPalette
            />
          ))}
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default Palette;
