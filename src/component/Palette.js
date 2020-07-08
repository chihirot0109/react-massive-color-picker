import React, {Component} from 'react';
import ColorBox from './ColorBox'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
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
        <div className="slider">
          <Slider defaultValue={this.state.level} min={100} max={900} step={100} onAfterChange={this.changeLevel}/>
        </div>
        <div className="Palette-colors">
          {colors.map(color => <ColorBox color={color} />)}
        </div>
      </div>
    );
  }
}

export default Palette;