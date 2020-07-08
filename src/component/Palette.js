import React, {Component} from 'react';
import ColorBox from './ColorBox'
import NavBar from './NavBar';
import '../css/Palette.css'

class Palette extends Component {
  constructor(props){
    super(props);
    this.state = { level: 500 }
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({level})
  }

  render() {
      let colors = this.props.palette.colors[this.state.level];
    return(
      <div className="Palette">
        <NavBar level={this.state.level}  changeLevel={this.changeLevel}/>
        <div className="Palette-colors">
          {colors.map(color => <ColorBox color={color} />)}
        </div>
      </div>
    );
  }
}

export default Palette;