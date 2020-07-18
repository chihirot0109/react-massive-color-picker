import React, {Component} from 'react';
import ColorBox from './ColorBox'
import NavBar from './NavBar';
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
      const { paletteName, emoji } = this.props.palette;
    return(
      <div className="Palette">
        <NavBar level={this.state.level}  changeLevel={this.changeLevel} handleChange={this.handleChange}/>
        <div className="Palette-colors">
          {colors.map(color => <ColorBox color={color} format={format} key={color.id}/>)}
        </div>
        <footer className="Palette-footer">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;
